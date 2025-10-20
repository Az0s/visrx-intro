export type Lang = "en" | "zh";

export const strings: Record<Lang, {
  projectName: string;
  tagline: string;
  scrollLabel: string;
  videoCaptions: Record<string, string>;
}> = {
  en: {
    projectName: "VisRx",
    tagline: "One-stop medication support for seniors and caregivers",
    scrollLabel: "Scroll",
    videoCaptions: {
      medImport: "Scan leaflet + LLM analysis, one-tap setup",
      arRecognition: "Point to medicine, hear how to take it",
      arTalk: "Ask the medicine and get tailored answers",
      bindGuard: "Family sharing, synced meds and reminders",
      bindElderly: "Connect with family for caring guidance",
    },
  },
  zh: {
    projectName: "VisRx",
    tagline: "一站式老人与监护人用药解决方案",
    scrollLabel: "下滑",
    videoCaptions: {
      medImport: "拍摄说明书 + LLM 分析，一键生成用药信息",
      arRecognition: "指向药品，即刻识别并听到如何服用",
      arTalk: "对着药品提问，获得个性化用药解答",
      bindGuard: "家庭组共享，同步药品与提醒",
      bindElderly: "一键连接家人，获取贴心用药指导",
    },
  },
};
