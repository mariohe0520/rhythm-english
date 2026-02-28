# Rhythm English 优化计划

## 当前状态
- ✅ 14天学习数据 (day2-day14.js)
- ✅ 7个 MP3 音频 (01-07.mp3)
- ✅ 完整 index.html (1771行，所有功能都在一个文件)
- ✅ PWA 配置
- ❌ modules 目录为空（需要拆分模块）
- ❌ 缺少更多音频（只有7个）
- ❌ 没有本地 LLM 生成句子功能

## 优化方向

### Phase 1: 模块拆分（代码架构优化）
将 index.html 拆分成独立模块：
- `modules/core.js` - 核心引擎（进度、复习、评分）
- `modules/data.js` - 数据加载和管理
- `modules/audio.js` - 音频播放和管理
- `modules/rhythm.js` - 节奏可视化
- `modules/speak.js` - 录音对比
- `modules/scene.js` - 场景渲染
- `modules/ui.js` - UI 组件

### Phase 2: 集成本地 TTS
- 使用 Kokoro 生成更多音频
- 为所有句子生成对应 MP3
- 支持动态 TTS 生成新句子

### Phase 3: 本地 LLM 扩展内容
- 使用 Ollama (qwen2.5) 生成新句子
- 自动生成重音标注和 IPA
- 自动分类和打标签

### Phase 4: 体验优化
- 添加更多动画效果
- 添加音效反馈
- 优化移动端体验
- 添加离线缓存

## 执行顺序
1. 先完成模块拆分（让代码可维护）
2. 并行下载/配置 Kokoro 和 Qwen3
3. 生成更多音频内容
4. 用 LLM 扩展句子库
