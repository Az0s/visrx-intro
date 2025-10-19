# Visrx Introduction

This is a introduction for Visrx in the format of Markdown. My intention to create this file 2 years later is to put this project into a website, both as a place to recall OG days and showcase portfolio. Hence text/image/video resources to recreate a website can be sourced start from here. 

## Background

### Our Observations

1. **老年人服药难**,  **让老人正确服药更难** 记忆/执行和理解能力下降, 老人服药变成了一个难事;

2. 仅靠老人自己正确理解、准确服用药物非常困难。子女，作为老人的监护人，缺乏在服药问题上帮助老人的有效手段。(沟通困难)

### Our Solutions

我们想优化老人<->监护人之间, 完成服药这件事的流程, 做老人和监护人服药场景的一站式解决方案

## Visrx

### Visuals

因为有两个角色, app会根据使用者不同展示不同界面: 

**老人端**

![image-20251019184252768](/Users/azus/Library/Application Support/typora-user-images/image-20251019184252768.png)

**自适应地超大字体**, 首页生成今日服用概况并语音播报,  快速启动**AR**增强现实的服用指导

**监护人端**

![image-20251019184449923](/Users/azus/Library/Application Support/typora-user-images/image-20251019184449923.png)

具有扫描说明书自动分析并添加药品的功能 更详细的界面

### 主要功能

1. **一键导入药品信息**
   1. **智能导入药物**: 药忆通过摄像头识别文字。结合HealthKit导入的基本信息，接入大语言模型，自动分析药品说明书，省去手动导入药品的麻烦。<video src="/Users/azus/Documents/03_PROJECTS/02_Portfolio/visrx-intro/assets/med_import_demo.mov"></video>
2. **使用****AR辅助老人服药** 药忆提出一种新的无障碍交互方式。通过SceneKit和机器学习模型，药忆使得老人能够用手部动作与药品进行交互，让药品自己说出服用细则。<video src="/Users/azus/Documents/03_PROJECTS/02_Portfolio/visrx-intro/assets/AR_recognition.mp4"></video>
3. **AR****服用指导**+LLM 除了SceneKit、Vision，药忆进一步结合大语言模型，使得老人能够用手指出药品，直接问问题来获取答案。让眼前的药品“活起来”。<video src="/Users/azus/Documents/03_PROJECTS/02_Portfolio/visrx-intro/assets/AR_talk_llm.mp4"></video>
4. 双端的登陆/绑定 药忆支持家庭组共享，同步药品信息等 监护人可以进行新药添加，然后老人打开手机就知道。老人的服药历史，监护人也可以及时查看。监护人绑定: <video src="/Users/azus/Documents/03_PROJECTS/02_Portfolio/visrx-intro/assets/bind_elderly.MP4"></video>老人绑定: <video src="/Users/azus/Documents/03_PROJECTS/02_Portfolio/visrx-intro/assets/bind_guard.MP4"></video>
5. Summary: ![Screenshot 2025-10-19 at 18.48.21](/Users/azus/Library/Application Support/typora-user-images/Screenshot 2025-10-19 at 18.48.21.png)

## Endnote

 

I led and developed this project, Visrx (YaoYi), a mobile application that won 1st Prize (National Finals) at the 2023 China Collegiate Computing Contest – Mobile Application Innovation, co-hosted by Zhejiang University and Apple.

As Team Captain, I managed a multidisciplinary team and delivered BUPT’s first-ever national championship in this contest (2,800+ teams, 891 universities).

I independently implemented an ARKit-based spatial perception system (early 2023), pioneering the integration of ARKit with large language models to enhance spatial awareness. This effectively enabled LLMs to handle real-world  info, even if GPT-3.5 with little multimodal ability are the most prevalent base model back then. 

The project addresses healthcare and cognitive support scenarios, highlighting cross-disciplinary innovation and real-world applicability.

Thank my teammate @zhs852 for his effort and support. Without him I could've never pull this through.


## Design Resources

Theme colors:
- Background: #E9EEED, cold light blue/gray to feel calm and reliable
- Primary: #F08876 and #FEB27F, warm coral to feel friendly and approachable
- This is a branding video showing visrx's icon pops up with 3024 × 1702 mp4 video. <video src="/Users/azus/Documents/03_PROJECTS/02_Portfolio/visrx-intro/assets/visrx_brand.mp4"></video> 
