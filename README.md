# 节奏英语 Rhythm English

英语发音节奏训练 PWA，专为中文母语者设计。

**线上地址**：https://mariohe0520.github.io/rhythm-english/

---

## 功能

- **跟读练习**：听示范 → 录音跟读 → AI 评分反馈
- **节奏可视化**：重音词高亮 + 弹球节拍动画
- **AI 教练**：5 维度发音评分（重音/节奏/语调/流畅度/语速）
- **自由练习**：输入任何英语句子 TTS 慢速/正常速播放
- **间隔重复**：自动安排复习卡片
- **每日挑战**：限时10题测验 + 连续打卡
- **14天课程**：420 句商务英语 + Day 15+ 程序生成

## 技术栈

- 纯前端，无构建步骤，无 npm
- Web Speech API（TTS）+ MediaRecorder（录音）
- Web Audio API（基音检测 + 韵律分析）
- Service Worker PWA（完全离线可用）

## 项目结构

```
index.html              精简 HTML 入口（115 行）
css/
  style.css             UI 样式
  practice.css          录音/评分样式
js/
  config.js             常量配置
  state.js              共享可变状态
  save.js               localStorage 存档
  progress.js           XP、进度、连续天数
  ui.js                 渲染函数
  ai-coach.js           AI 教练面板
  app.js                主入口（初始化 + window 全局）
  speech/
    tts.js              语音合成封装
    stt.js              录音 + AudioContext（含 iOS 兼容）
    pronunciation.js    发音评估 + 波形绘制
  practice/
    follow-read.js      跟读模式 + 节奏动画
    free-practice.js    自由练习
data/
  sentences.js          Day 1（30 句）
  day2.js … day14.js    Day 2-14（各 30 句）
  generator.js          Day 15+ 程序生成
  lessons.json          课程元数据
modules/
  ai-engine.js          基音检测 + 韵律分析引擎
  content-engine.js     连读规则 + 间隔重复 + 薄弱项追踪
audio/
  01-30.mp3             Day 1 真人音频
  31-74.m4a             Day 2-3 音频（降级到 TTS）
sw.js                   Service Worker（rhythm-v21）
```

## 本地运行

```bash
cd /Users/mario/.openclaw/workspace/apps/rhythm-english
python3 -m http.server 3456
# 打开 http://localhost:3456
```

## 部署

```bash
git add -A && git commit -m "..." && git push
# GitHub Pages 自动构建
```

## 浏览器支持

| 功能 | Chrome | Safari iOS | Firefox |
|------|--------|-----------|---------|
| TTS | ✅ | ✅ | ✅ |
| 录音 | ✅ | ✅(14.5+) | ✅ |
| PWA | ✅ | ✅(添加主屏) | ❌ |
| M4A 音频 | ✅ | ✅ | ❌(降级 TTS) |
