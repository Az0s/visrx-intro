#!/usr/bin/env bash
set -euo pipefail

# Transcode originals in ./assets/videos to optimized MP4s in ./public/videos
# - Generates two files per input: <name>.av1.mp4 (AV1) and <name>.h264.mp4 (H.264)
# - Keeps 60 fps as requested
# - Caps height to 1920px to avoid overly large portrait assets
# - Writes faststart MP4s for progressive playback on the web
#
# Requirements: ffmpeg (with libaom-av1 and libx264) and ffprobe
# Usage:
#   ./scripts/transcode-videos.sh            # process all supported files
#   ./scripts/transcode-videos.sh input.mov  # process a single file
#
# Notes for Vercel:
# - Commit only the outputs in public/videos. Originals in assets/videos are gitignored.
# - next.config.ts sets long-lived caching for /videos/*.

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SRC_DIR="$ROOT_DIR/assets/videos"
OUT_DIR="$ROOT_DIR/public/videos"

mkdir -p "$OUT_DIR"

if ! command -v ffmpeg >/dev/null 2>&1 || ! command -v ffprobe >/dev/null 2>&1; then
  echo "Error: ffmpeg and ffprobe are required." >&2
  exit 1
fi

shopt -s nullglob

inputs=()
if [[ $# -gt 0 ]]; then
  inputs=("$@")
else
  inputs=(
    "$SRC_DIR"/*.mp4 "$SRC_DIR"/*.MP4 "$SRC_DIR"/*.mov "$SRC_DIR"/*.mkv "$SRC_DIR"/*.webm "$SRC_DIR"/*.avi
  )
fi

if [[ ${#inputs[@]} -eq 0 ]]; then
  echo "No input files found in $SRC_DIR" >&2
  exit 0
fi

for inpath in "${inputs[@]}"; do
  [[ -e "$inpath" ]] || continue
  fname="$(basename -- "$inpath")"
  base="${fname%.*}"

  out_h264="$OUT_DIR/${base}.h264.mp4"
  out_av1="$OUT_DIR/${base}.av1.mp4"

  # Skip if outputs are newer than input
  up_to_date() {
    [[ -e "$1" && "$1" -nt "$inpath" ]]
  }

  echo "\n==> Processing: $fname"

  # Use a filter chain: cap height to 1920, keep aspect, and force even dims; 60 fps for smoothness
  vf="scale=-2:trunc(min(ih\,1920)/2)*2,fps=60"

  if ! up_to_date "$out_h264"; then
    echo "  -> Encoding H.264: $(basename -- "$out_h264")"
    ffmpeg -y -hide_banner -loglevel info -stats \
      -i "$inpath" \
      -vf "$vf" \
      -c:v libx264 -preset slow -crf 22 -profile:v high -level 4.2 -pix_fmt yuv420p \
      -movflags +faststart \
      -c:a aac -b:a 128k \
      "$out_h264"
  else
    echo "  -> Skipping H.264 (up-to-date)"
  fi

  if ! up_to_date "$out_av1"; then
    echo "  -> Encoding AV1:   $(basename -- "$out_av1")"
    ffmpeg -y -hide_banner -loglevel info -stats \
      -i "$inpath" \
      -vf "$vf" \
      -c:v libaom-av1 -crf 33 -b:v 0 -cpu-used 5 -row-mt 1 -pix_fmt yuv420p \
      -movflags +faststart \
      -c:a aac -b:a 128k \
      "$out_av1"
  else
    echo "  -> Skipping AV1 (up-to-date)"
  fi

done

echo "\nAll done. Generated files are in: $OUT_DIR"

