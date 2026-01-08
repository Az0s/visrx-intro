# VisRx Introduction

This is an introduction to VisRx in Markdown format. Two years after the original build, I’m putting this project onto a website to both document the OG days and showcase portfolio work. Text and media resources to reconstruct the website start here.

## Background

### Our Observations

1. Seniors face challenges taking medication, and helping them take it correctly is even harder. Declines in memory, execution, and comprehension make medication adherence difficult.
2. Relying on seniors alone to understand and take medicine accurately is unrealistic. Caregivers (children/family) lack effective tools to support and communicate around medication.

### Our Solutions

We streamline the workflow between seniors and caregivers to complete the “taking medicine” task end‑to‑end — an integrated solution for the medication scenario.

## VisRx

### Visuals

Because there are two roles, the app shows different interfaces for each user:

- Senior side: Accessible, ultra‑large typography. The home screen summarizes today’s plan and reads it aloud, with quick access to AR guidance.
- Caregiver side: Scan drug leaflets for automatic analysis and quick add; more detailed management views.

### Main Features

1. One‑tap medication import
   - Intelligent import: Use the camera for OCR, combine HealthKit basics, and leverage an LLM to parse drug leaflets — removing tedious manual entry.
2. AR‑assisted medication for seniors
   - A new accessible interaction. With SceneKit and ML, seniors can use hand gestures to interact with medicines and hear specific instructions.
3. AR guidance + LLM Q&A
   - Point at a medicine and ask questions to get immediate answers, making the medicine “come alive”.
4. Dual‑end login/binding with family sharing
   - Sync medications, reminders, and history. Caregivers can add medicines; seniors see updates immediately. Caregivers can review adherence history.
5. Summary
   - Key flows and UI summarized across both roles.

### Core Technology and Implementation Details

VisRx is not merely a simple GPT wrapper. In early 2023, multimodal LLMs (e.g., GPT‑4V) were not yet widespread and API costs were high with extreme latency. To deliver a real‑time “point‑and‑ask” experience on mobile, I designed a heterogeneous pipeline architecture based on edge‑cloud collaboration.

1. On‑device compute offload and lightweight perception (On-device Compute Offload) To solve the high latency and privacy risks of uploading video streams, we moved visual perception fully to the device (iPhone NPU/GPU):
   - Vision and gesture tracking: use CoreML and the Vision Framework (VNDetectHumanHandPoseRequest) for real‑time hand keypoint extraction and object detection locally, rather than uploading video frames.
   - 3D spatial alignment: use ARKit’s ARWorldTrackingConfiguration to build a world coordinate system, combined with ray‑casting/HitTest, to resolve the spatial relationship between the “index fingertip” and the “virtual drug anchor (AnchorEntity)” in milliseconds on device.
2. Innovation: Multimodal Semantic Serialization This is the system’s core innovation. LLMs cannot directly understand 3D coordinates or video streams, so we designed an XML‑based multimodal graph (XML prompt engineering) to transform unstructured multimodal data into a structured semantic graph:
   - Data structuring: the system packages OCR drug information, HealthKit user records, and on‑device resolved “gesture pointing interaction events” into XML nodes (e.g., <druginfo>, <gesture type="pointing">, <userquery>).
   - Semantic mapping: this serialization compresses requests from megabytes of video into a few hundred bytes of structured text prompts. It allows the LLM to understand what “this” refers to while reducing network bandwidth by three orders of magnitude.
3. Privacy‑first hybrid architecture Thanks to the above, sensitive visual data (e.g., home environment video streams) never leaves the user’s device. Only desensitized, serialized text features are sent to the cloud for inference. This design preserves privacy in medical scenarios while maintaining smooth end‑to‑end response even on weak networks.

## Endnote

I led and developed VisRx (YaoYi), a mobile application that won 1st Prize (National Finals) at the 2023 China Collegiate Computing Contest – Mobile Application Innovation, co‑hosted by Zhejiang University and Apple.

As Team Captain, I managed a multidisciplinary team and delivered BUPT’s first‑ever national championship in this contest (2,800+ teams, 891 universities).

In early 2023 I implemented an ARKit‑based spatial perception system, pioneering the integration of ARKit with large language models to enhance spatial understanding. This effectively enabled LLMs to handle real‑world context even when GPT‑3.5 (with limited multimodal capabilities then) was the prevalent base model.

The project addresses healthcare and cognitive‑support scenarios, highlighting cross‑disciplinary innovation and real‑world applicability.

Thanks to my teammate @zhs852 for his effort and support — this wouldn’t have been possible without him.

## Design Resources

- Background color: #E9EEED — calm, reliable, light blue/gray
- Primary colors: #F08876 and #FEB27F — warm coral, friendly and approachable
- Branding: VisRx icon animation video available as a 3024×1702 mp4
