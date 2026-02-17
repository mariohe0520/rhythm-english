# 🏗️ Rhythm English — Architecture Doc

## 核心理念
**模拟婴儿大脑学语言的过程，用第一性原理构建每个模块**

婴儿学语言的神经回路：
```
视觉皮层 (看到场景)
  → 听觉皮层 (听到声音)
    → 韦尼克区 (理解含义)
      → 布洛卡区 (产生语言)
        → 运动皮层 (说出来)
          → 反馈回路 (听自己说 → 对比 → 纠正)
```

App 的每个模块对应大脑的一个区域。

## 系统架构

```
┌─────────────────────────────────────────┐
│              Rhythm English              │
├─────────┬──────────┬──────────┬─────────┤
│  SCENE  │  AUDIO   │  RHYTHM  │  SPEAK  │
│  Module │  Module  │  Module  │  Module │
│ (视觉)  │ (听觉)   │ (节奏)   │ (输出)  │
├─────────┴──────────┴──────────┴─────────┤
│              CORE ENGINE                 │
│  Progress | Spaced Repetition | Scoring  │
├─────────────────────────────────────────┤
│              DATA LAYER                  │
│  Sentences | User State | Analytics      │
└─────────────────────────────────────────┘
```

## 6 个模块 (每个独立迭代)

### Module 1: DATA — 句子数据引擎
- 输入: 原始句子文本
- 输出: 结构化数据 (词组、重音值、IPA、场景描述、中文释义)
- 原子单位: 1 个句子的完整数据结构
- 验收标准: 数据结构能驱动所有其他模块

### Module 2: SCENE — 视觉场景
- 对应: 视觉皮层
- 输入: 场景描述
- 输出: 视觉呈现 (MVP: emoji组合 → V2: AI生成插画)
- 原子单位: 1 张场景卡片
- 验收标准: 不看文字，只看图能猜到句子含义

### Module 3: AUDIO — 听觉输入
- 对应: 听觉皮层
- 输入: 句子文本
- 输出: native 发音音频
- 原子单位: 1 句话的音频播放
- 验收标准: 音频清晰、语速自然、可调速

### Module 4: RHYTHM — 节奏可视化
- 对应: 韦尼克区 (理解语言结构)
- 输入: 重音数组 [0.3, 1, 0.3, 1]
- 输出: 弹跳球动画 + 节奏拍打游戏
- 原子单位: 1 个句子的节奏动画
- 验收标准: 看动画就能感受到句子的轻重节奏

### Module 5: SPEAK — 语音输出
- 对应: 布洛卡区 + 运动皮层
- 输入: 用户录音
- 输出: 录音回放 + 与native对比
- 原子单位: 录1句 → 播1句 → 对比1句
- 验收标准: iOS Safari 能正常录音和播放

### Module 6: CORE — 进度引擎
- 对应: 反馈回路
- 输入: 用户行为 (听了/说了/拍了/跳过了)
- 输出: XP、streak、复习计划
- 原子单位: 1 次学习行为的记录和反馈
- 验收标准: 关掉app再打开，进度还在

## 迭代循环 (每个模块)

```
LOOP {
  1. DEFINE — 最小原子功能是什么？
  2. BUILD — 写最少的代码实现它
  3. TEST — 在 iOS Safari 上测试
  4. VERIFY — 满足验收标准？
  5. REFINE — 不满足就改，满足就下一个
}
```

## 构建顺序 (依赖链)

```
Phase 1: DATA → 所有模块的基础
Phase 2: AUDIO + SCENE → 可以独立做，无依赖
Phase 3: RHYTHM → 依赖 DATA 的重音数据
Phase 4: SPEAK → 依赖 AUDIO (需要native音频做对比)
Phase 5: CORE → 依赖所有模块 (记录所有行为)
Phase 6: SHELL → 把模块串起来的外壳 UI
```

## MVP 定义 (最小可用)

能跑通的完整流程：
1. ✅ 打开 app → 看到 1 个句子的场景
2. ✅ 点击听 → 听到 native 发音
3. ✅ 看到节奏动画 → 理解轻重
4. ✅ 录音 → 回放自己的声音
5. ✅ 翻转 → 看到中文含义
6. ✅ 下一句

**不需要的**（V2再做）：
- ❌ AI 生成场景图 (用 emoji)
- ❌ 发音评分 (先用人耳对比)
- ❌ 社交功能
- ❌ 课程体系 (先只有 Day 1)
- ❌ 动效花哨

## 团队模拟 (Sub-agent 分工)

| 角色 | 负责模块 | 产出 |
|------|---------|------|
| Data Engineer | Module 1 | sentences.js 数据文件 |
| Scene Designer | Module 2 | 场景卡片组件 |
| Audio Engineer | Module 3 | 音频播放组件 |
| Rhythm Animator | Module 4 | 节奏动画组件 |
| Speech Engineer | Module 5 | 录音对比组件 |
| Core Engineer | Module 6 | 进度系统 |
| Tech Lead | Shell | 把所有模块串起来 |

## 文件结构

```
rhythm-english/
├── index.html          ← Shell (串联所有模块)
├── manifest.json       ← PWA 配置 ✅ done
├── sw.js              ← 离线支持 ✅ done
├── data/
│   └── sentences.js   ← Module 1: 句子数据
├── modules/
│   ├── scene.js       ← Module 2: 场景渲染
│   ├── audio.js       ← Module 3: 音频播放
│   ├── rhythm.js      ← Module 4: 节奏动画
│   ├── speak.js       ← Module 5: 录音对比
│   └── core.js        ← Module 6: 进度引擎
└── styles/
    └── app.css        ← 统一样式
```

## 技术约束
- 纯前端，无 build 工具
- iOS Safari 兼容
- 所有 JS 用 ES modules
- 所有状态存 localStorage
- PWA 可添加到主屏幕
