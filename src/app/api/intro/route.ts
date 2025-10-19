import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

function readIfExists(p: string) {
  try { return fs.readFileSync(p, "utf8"); } catch { return null; }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get("lang");
  const root = process.cwd();
  let content: string | null = null;

  if (lang === "zh") {
    content = readIfExists(path.join(root, "Visrx_Introduction.zh.md"));
  } else if (lang === "en") {
    content = readIfExists(path.join(root, "Visrx_Introduction.en.md"));
  }

  if (!content) {
    content = readIfExists(path.join(root, "Visrx_Introduction.md")) || "";
  }

  return new NextResponse(content, { headers: { "content-type": "text/plain; charset=utf-8" } });
}

