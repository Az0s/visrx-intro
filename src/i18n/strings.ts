export type Lang = "en" | "zh";

type ContentCard = {
  label: string;
  title: string;
  body: string;
};

type Highlight = {
  label: string;
  value: string;
};

type LocalizedContent = {
  projectName: string;
  tagline: string;
  heroEyebrow: string;
  heroTitle: string;
  heroLead: string;
  heroPoints: string[];
  heroMeta: Highlight[];
  heroJumpLabel: string;
  demoRailLabel: string;
  scrollLabel: string;
  videoTitles: Record<string, string>;
  videoCaptions: Record<string, string>;
  intro: {
    eyebrow: string;
    title: string;
    lead: string;
    paragraphs: string[];
  };
  architecture: {
    eyebrow: string;
    title: string;
    cards: ContentCard[];
  };
  ownership: {
    eyebrow: string;
    title: string;
    summary: string;
    highlights: Highlight[];
  };
};

export const strings: Record<Lang, LocalizedContent> = {
  en: {
    projectName: "VisRx",
    tagline:
      "Edge-cloud medication assistance for seniors and family caregivers",
    heroEyebrow: "Primary demo",
    heroTitle: "Ask the medicine in front of you.",
    heroLead:
      "A multimodal grounding system that turns camera input, pointing intent, and medication text into model-ready context on mobile.",
    heroPoints: [
      "Point at the real pillbox instead of typing a vague question.",
      "Ground object, gesture, and OCR on device before inference begins.",
      "Send only the minimum semantic context upstream for response generation.",
    ],
    heroMeta: [
      { label: "Mode", value: "Scene-aware medication Q&A" },
      { label: "Pipeline", value: "On-device grounding + cloud reasoning" },
      { label: "Built", value: "Early 2023, before cheap multimodal serving" },
    ],
    heroJumpLabel: "See the system design",
    demoRailLabel: "Manually switch between product moments",
    scrollLabel: "Scroll",
    videoTitles: {
      medImport: "Import",
      arRecognition: "Recognition",
      arTalk: "Ask the medicine",
      bindGuard: "Caregiver side",
      bindElderly: "Senior side",
    },
    videoCaptions: {
      medImport: "Scan a leaflet and structure medication data in one pass.",
      arRecognition:
        "Ground the physical medicine in view before guidance begins.",
      arTalk: "Ask the medicine directly and receive scene-aware answers.",
      bindGuard: "Caregivers manage data, reminders, and follow-up remotely.",
      bindElderly:
        "Seniors interact through large-type UI, voice, and AR cues.",
    },
    intro: {
      eyebrow: "Introduction",
      title:
        "Grounding real-world medication questions under mobile constraints",
      lead: "VisRx is a medication-assistance system I led and developed for seniors and family caregivers.",
      paragraphs: [
        "Rather than treating medication reminders as an isolated feature, the product closes the loop between medication import, information parsing, adherence support, and context-aware Q&A: caregivers manage medication data, while seniors receive accessible guidance through large-type UI, voice feedback, and AR-assisted interaction in real-world settings.",
        'From a technical perspective, the core challenge was not simply integrating an LLM into a mobile app, but enabling the model to understand real-world reference, for example "the medicine I am pointing at," under the compute, latency, and privacy constraints of mobile devices. Built in early 2023, before multimodal models were mature or inexpensive to serve, VisRx used an edge-cloud multimodal inference pipeline.',
        "The device handled OCR, hand and gesture tracking, object grounding, and AR spatial alignment locally, then compressed camera input, pointing intent, medication text, and scene context into structured semantic context. Only the minimum necessary information was sent to the language model for answer generation.",
        "This architecture turned high-bandwidth, ambiguous visual input into interpretable, low-latency, model-ready context. Compared with uploading raw video frames, it reduced transmission and inference overhead while better preserving privacy and responsiveness in a healthcare setting.",
      ],
    },
    architecture: {
      eyebrow: "System Design",
      title:
        "An edge-cloud inference pipeline instead of feature-level assembly",
      cards: [
        {
          label: "On-device perception",
          title: "Capture what the user is actually referring to",
          body: "OCR, gesture tracking, target localization, and AR alignment run locally so the system can bind the user's pointing intent to a concrete medicine instance before inference.",
        },
        {
          label: "Semantic compression",
          title: "Convert raw visual input into stable structured context",
          body: "Rather than uploading uncertain, high-bandwidth frames, the app distills medication text, spatial reference, and interaction state into a compact semantic package that is easier for the model to consume reliably.",
        },
        {
          label: "Cloud-side reasoning",
          title: "Use the model where reasoning matters most",
          body: "Only the minimum necessary context is sent upstream for answer generation, reducing latency and cost while keeping the response tied to the current object and scene.",
        },
      ],
    },
    ownership: {
      eyebrow: "Ownership & Outcome",
      title: "Led the system from architecture to product closure",
      summary:
        "I served as team captain and core developer, owning the overall system architecture, critical implementation, and the end-to-end workflow across caregiver setup and senior-facing interaction.",
      highlights: [
        {
          label: "Role",
          value: "Team captain and core developer",
        },
        {
          label: "Scope",
          value:
            "System design, multimodal pipeline, and dual-role product flow",
        },
        {
          label: "Result",
          value:
            "1st Prize, 2023 China Collegiate Computing Contest National Finals",
        },
      ],
    },
  },
  zh: {
    projectName: "VisRx",
    tagline: "面向老人与家庭监护人的边缘-云协同用药辅助系统",
    heroEyebrow: "核心演示",
    heroTitle: "直接对着眼前这盒药提问。",
    heroLead:
      "在移动端有限算力与时延约束下，把相机输入、指向意图与药品文本压缩成模型能直接使用的结构化上下文。",
    heroPoints: [
      "用户直接指向真实药盒提问，不需要先抽象描述药名。",
      "先在设备侧完成目标 grounding、手势理解与 OCR，再进入推理。",
      "只把最小必要语义上下文送上云端，兼顾时延、成本与隐私。",
    ],
    heroMeta: [
      { label: "模式", value: "面向实体药品的场景问答" },
      { label: "链路", value: "端侧 grounding + 云侧 reasoning" },
      { label: "时间", value: "2023 年初，多模态服务尚未成熟" },
    ],
    heroJumpLabel: "查看系统设计",
    demoRailLabel: "手动切换不同产品片段",
    scrollLabel: "下滑",
    videoTitles: {
      medImport: "药品导入",
      arRecognition: "药品识别",
      arTalk: "对药提问",
      bindGuard: "监护人端",
      bindElderly: "老人端",
    },
    videoCaptions: {
      medImport: "扫描说明书并结构化药品信息，完成快速导入。",
      arRecognition: "先在设备侧定位当前药盒，再进入用药指引。",
      arTalk: "直接对着实体药品提问，获取与场景相关的回答。",
      bindGuard: "监护人远程管理药品、提醒与后续跟进。",
      bindElderly: "老人通过大字界面、语音和 AR 提示完成交互。",
    },
    intro: {
      eyebrow: "项目介绍",
      title: "在移动端约束下完成真实世界对象 grounding",
      lead: "VisRx 是我主导开发的一套面向老人及家庭监护人的智能用药辅助系统。",
      paragraphs: [
        "这个系统覆盖了从药品导入、信息理解、服药提醒到实际场景下问答的整条链路：监护人负责录入和管理药品信息，老人通过大字界面、语音播报与 AR 交互，在真实环境中获得用药指导。",
        "技术上，难的地方不是把 LLM 接进 App，而是在移动端有限算力、网络时延和隐私约束下，让模型理解“我现在指着的这盒药”。2023 年初多模态模型还不成熟，云端推理成本和延迟也高，所以我设计了一条端云协同的多模态推理管线。",
        "设备端完成 OCR、手势追踪、目标定位和 AR 空间对齐，将相机画面、用户指向意图、药品文本信息与场景上下文压缩为结构化语义上下文，再将最小必要信息送入语言模型生成回答。",
        "这样做的效果是：原本高带宽、不确定的原始画面，变成了结构清晰、延迟低、模型能直接用的上下文。比起直接上传视频流，传输和推理开销都小很多，也更适合医疗场景对隐私和响应速度的要求。",
      ],
    },
    architecture: {
      eyebrow: "系统设计",
      title: "一条端云协同的推理管线，而非功能的简单拼接",
      cards: [
        {
          label: "端侧感知",
          title: "先确定用户此刻指向的到底是什么",
          body: "在设备端完成 OCR、手势追踪、目标定位和 AR 空间对齐，先搞清楚用户指的是哪盒药，再往下走推理流程。",
        },
        {
          label: "语义压缩",
          title: "把高带宽视觉输入变成稳定上下文",
          body: "应用不直接上传原始画面，而是把药品文本、空间位置、交互状态压缩成结构化的语义上下文，让模型拿到的输入更干净、更稳定。",
        },
        {
          label: "云侧推理",
          title: "只把真正需要 reasoning 的部分送上云端",
          body: "语言模型只接收最小必要信息来生成答案，从而降低时延和推理成本，同时让回答继续绑定当前对象与当前场景。",
        },
      ],
    },
    ownership: {
      eyebrow: "职责与结果",
      title: "从架构设计到产品落地的完整 ownership",
      summary:
        "我在项目中担任队长兼核心开发，负责整体系统设计、关键技术实现，以及从监护人录入端到老人使用端的完整产品落地。",
      highlights: [
        {
          label: "角色",
          value: "队长兼核心开发",
        },
        {
          label: "负责范围",
          value: "系统架构、多模态链路与双角色产品流程",
        },
        {
          label: "结果",
          value: "2023 中国高校计算机大赛移动应用创新赛全国总决赛一等奖",
        },
      ],
    },
  },
};
