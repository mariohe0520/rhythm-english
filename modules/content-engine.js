// ═══════════════════════════════════════════════════════════════════════════
// Rhythm English — Content & Curriculum Engine v1.0
// Comprehensive curriculum system: 30-day master plan, rhythm patterns,
// connected speech rules, intonation curves, shadowing scripts, and
// weakness profiling for Chinese-speaking English learners.
// ═══════════════════════════════════════════════════════════════════════════

// ─── Utility: Seeded PRNG (Mulberry32) ──────────────────────────────────
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hashStr(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return h;
}
function pick(arr, rng) {
  return arr[Math.floor(rng() * arr.length)];
}
function pickN(arr, n, rng) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

// ═══════════════════════════════════════════════════════════════════════════
// 1. PatternLibrary — 50+ English Rhythm Patterns
// ═══════════════════════════════════════════════════════════════════════════

/**
 * @typedef {Object} RhythmPattern
 * @property {string} id - Unique pattern identifier
 * @property {string} name - Human-readable pattern name
 * @property {string} notation - Rhythmic notation (e.g. "da-DUM")
 * @property {number[]} stressPattern - Array of stress values (0=unstressed, 1=stressed)
 * @property {string[]} examples - At least 5 example words/phrases
 * @property {string} ipa - IPA for the first example
 * @property {boolean} commonInChinese - Whether this pattern has a Chinese equivalent
 * @property {string} chineseNote - Note about Chinese speakers' tendency
 * @property {number} difficulty - 1=beginner, 2=intermediate, 3=advanced
 * @property {string} category - Grouping: "foot", "phrase", "compound", "clause"
 */

/** Library of 50+ English rhythm patterns organized by difficulty. */
export class PatternLibrary {
  constructor() {
    /** @type {RhythmPattern[]} */
    this.patterns = PATTERN_DATA;
  }

  /** Get all patterns at a given difficulty level (1-3). */
  byDifficulty(level) {
    return this.patterns.filter((p) => p.difficulty === level);
  }

  /** Get patterns by category. */
  byCategory(cat) {
    return this.patterns.filter((p) => p.category === cat);
  }

  /** Get a single pattern by id. */
  get(id) {
    return this.patterns.find((p) => p.id === id) || null;
  }

  /** Return patterns that are especially hard for Chinese speakers. */
  chineseChallenge() {
    return this.patterns.filter((p) => !p.commonInChinese);
  }

  /** Return a random pattern at or below the given difficulty. */
  random(maxDifficulty = 3, rng = Math.random) {
    const pool = this.patterns.filter((p) => p.difficulty <= maxDifficulty);
    return pool[Math.floor(rng() * pool.length)];
  }

  /** Return total count. */
  get count() {
    return this.patterns.length;
  }

  /** Get all unique life categories. */
  get lifeCategories() {
    return [...new Set(this.patterns.map((p) => p.lifeCategory).filter(Boolean))];
  }

  /** Get patterns by life category. */
  byLifeCategory(cat) {
    return this.patterns.filter((p) => p.lifeCategory === cat);
  }
}

const PATTERN_DATA = [
  // ── Foot-level (2-syllable) ──────────────────────────────────────────
  {
    id: "iamb", name: "Iamb", notation: "da-DUM",
    stressPattern: [0, 1],
    examples: ["I KNOW", "be LIEVE", "a GREE", "to DAY", "a LIVE", "re TURN"],
    ipa: "/aɪ noʊ/", commonInChinese: false,
    chineseNote: "Chinese tends toward equal syllable weight; the unstressed 'da' often gets too much emphasis",
    difficulty: 1, category: "foot",
    sceneEmoji: "👋💡", scene: "social-greeting", lifeCategory: "social",
    context_zh: "和朋友打招呼时，肯定地说：",
    translation_zh: "我知道"
  },
  {
    id: "trochee", name: "Trochee", notation: "DUM-da",
    stressPattern: [1, 0],
    examples: ["LET me", "NEV-er", "AL-ways", "HAP-py", "MO-ney", "EAS-y"],
    ipa: "/ˈlɛt mi/", commonInChinese: true,
    chineseNote: "Similar to Chinese two-character compounds with falling tone first",
    difficulty: 1, category: "foot",
    sceneEmoji: "🏠😊", scene: "home-daily", lifeCategory: "home",
    context_zh: "在家里，轻松地跟家人说：",
    translation_zh: "让我来"
  },
  {
    id: "spondee", name: "Spondee", notation: "DUM-DUM",
    stressPattern: [1, 1],
    examples: ["HARD STOP", "PUSH BACK", "THAT TRACKS", "BREAK DOWN", "SIGN OFF", "HEADS UP"],
    ipa: "/hɑːrd stɒp/", commonInChinese: true,
    chineseNote: "Common in phrasal verbs; Chinese speakers handle equal stress well",
    difficulty: 1, category: "foot",
    sceneEmoji: "🏢⏹️", scene: "office-meeting", lifeCategory: "work",
    context_zh: "会议中，需要果断地说：",
    translation_zh: "到此为止 / 回绝"
  },
  {
    id: "pyrrhic", name: "Pyrrhic", notation: "da-da",
    stressPattern: [0, 0],
    examples: ["of the", "in a", "to the", "for a", "on the", "at a"],
    ipa: "/əv ðə/", commonInChinese: false,
    chineseNote: "Chinese speakers tend to stress these function words too heavily",
    difficulty: 2, category: "foot",
    sceneEmoji: "📖🗣️", scene: "reading-aloud", lifeCategory: "home",
    context_zh: "朗读文章时，轻轻带过的虚词：",
    translation_zh: "的、在一个"
  },
  // ── Foot-level (3-syllable) ──────────────────────────────────────────
  {
    id: "anapest", name: "Anapest", notation: "da-da-DUM",
    stressPattern: [0, 0, 1],
    examples: ["un-der-STAND", "in-ter-RUPT", "ov-er-LOOK", "re-ar-RANGE", "dis-a-GREE", "rec-om-MEND"],
    ipa: "/ˌʌndərˈstænd/", commonInChinese: false,
    chineseNote: "The two weak syllables before stress are often given equal weight by Chinese speakers",
    difficulty: 2, category: "foot",
    sceneEmoji: "🏢📈", scene: "office-discussion", lifeCategory: "work",
    context_zh: "在公司讨论时，表达理解：",
    translation_zh: "理解 / 打断 / 忽视"
  },
  {
    id: "dactyl", name: "Dactyl", notation: "DUM-da-da",
    stressPattern: [1, 0, 0],
    examples: ["BEAU-ti-ful", "EV-ery-one", "YES-ter-day", "TECH-ni-cal", "COM-for-ta-ble", "GEN-er-ous"],
    ipa: "/ˈbjuːtɪfəl/", commonInChinese: false,
    chineseNote: "Chinese speakers often stress the second or third syllable instead of the first",
    difficulty: 2, category: "foot",
    sceneEmoji: "🌅🌸", scene: "admiring-scenery", lifeCategory: "entertainment",
    context_zh: "看到美丽的风景，感叹地说：",
    translation_zh: "美丽的 / 每个人 / 昨天"
  },
  {
    id: "amphibrach", name: "Amphibrach", notation: "da-DUM-da",
    stressPattern: [0, 1, 0],
    examples: ["a-GREE-ment", "to-GE-ther", "de-CI-sion", "im-POR-tant", "a-MEND-ment", "con-DI-tion"],
    ipa: "/əˈɡriːmənt/", commonInChinese: false,
    chineseNote: "Tendency to flatten all three syllables to equal stress",
    difficulty: 2, category: "foot",
    sceneEmoji: "🤝📋", scene: "business-agreement", lifeCategory: "work",
    context_zh: "签合同时，讨论条件：",
    translation_zh: "协议 / 一起 / 决定"
  },
  {
    id: "antibacchius", name: "Antibacchius", notation: "DUM-DUM-da",
    stressPattern: [1, 1, 0],
    examples: ["GREAT STUFF-y", "HARD WORK-ing", "TEAM BUILD-ing", "BRAIN STORM-ing", "SHORT LIST-ed", "PRICE MATCH-ing"],
    ipa: "/ɡreɪt ˈstʌfi/", commonInChinese: true,
    chineseNote: "Similar to some Chinese compound + suffix patterns",
    difficulty: 2, category: "foot",
    sceneEmoji: "💪👷", scene: "team-building", lifeCategory: "work",
    context_zh: "夸奖团队努力工作时：",
    translation_zh: "努力工作的 / 团队建设"
  },
  {
    id: "bacchius", name: "Bacchius", notation: "da-DUM-DUM",
    stressPattern: [0, 1, 1],
    examples: ["a-LOUD VOICE", "the MAIN POINT", "re-FRESH START", "a-BROAD VIEW", "a-CROSS TOWN", "a-ROUND NOON"],
    ipa: "/ə ˈlaʊd vɔɪs/", commonInChinese: false,
    chineseNote: "The initial weak syllable is often over-pronounced",
    difficulty: 2, category: "foot",
    sceneEmoji: "🔊📢", scene: "speaking-up", lifeCategory: "social",
    context_zh: "需要大声说话引起注意时：",
    translation_zh: "大声地 / 重点是"
  },
  // ── Foot-level (4-syllable) ──────────────────────────────────────────
  {
    id: "quaternary-1", name: "Front Stress 4", notation: "DUM-da-da-da",
    stressPattern: [1, 0, 0, 0],
    examples: ["OR-din-ar-y", "SEC-re-tar-y", "NEC-es-sar-y", "TEMP-o-rar-y", "MIL-i-tar-y", "VOL-un-tar-y"],
    ipa: "/ˈɔːrdɪnˌɛri/", commonInChinese: false,
    chineseNote: "4-syllable words with front stress are particularly hard; Chinese speakers add stress to later syllables",
    difficulty: 3, category: "foot",
    sceneEmoji: "📝✍️", scene: "formal-writing", lifeCategory: "work",
    context_zh: "写正式报告或邮件时常用的词：",
    translation_zh: "普通的 / 秘书 / 必要的"
  },
  {
    id: "quaternary-2", name: "Second Stress 4", notation: "da-DUM-da-da",
    stressPattern: [0, 1, 0, 0],
    examples: ["com-MU-ni-cate", "a-PPR-ci-ate", "ne-GO-ti-ate", "par-TI-ci-pate", "in-VES-ti-gate", "col-LAB-o-rate"],
    ipa: "/kəˈmjuːnɪkeɪt/", commonInChinese: false,
    chineseNote: "Common business verbs; stress placement is critical for comprehension",
    difficulty: 2, category: "foot",
    sceneEmoji: "🏢💬", scene: "business-verbs", lifeCategory: "work",
    context_zh: "商务会议中常用的动词：",
    translation_zh: "沟通 / 欣赏 / 谈判"
  },
  {
    id: "quaternary-3", name: "Third Stress 4", notation: "da-da-DUM-da",
    stressPattern: [0, 0, 1, 0],
    examples: ["un-der-STAND-ing", "in-for-MA-tion", "com-mu-NI-cate", "ap-pre-CI-ate", "rec-om-MEN-ded", "op-por-TU-ni-ty"],
    ipa: "/ˌʌndərˈstændɪŋ/", commonInChinese: false,
    chineseNote: "The shift from verb to noun stress (comMUnicate vs commuNIcation) confuses Chinese speakers",
    difficulty: 2, category: "foot",
    sceneEmoji: "📊💡", scene: "business-nouns", lifeCategory: "work",
    context_zh: "工作汇报中常用的名词：",
    translation_zh: "理解 / 信息 / 机会"
  },
  // ── Phrase-level patterns ────────────────────────────────────────────
  {
    id: "phrase-lets-verb", name: "Let's + Verb", notation: "da-DUM",
    stressPattern: [0.3, 1],
    examples: ["Let's GO", "Let's START", "Let's MOVE", "Let's CHAT", "Let's DIVE", "Let's SHIP"],
    ipa: "/lɛts ɡoʊ/", commonInChinese: true,
    chineseNote: "Natural for Chinese speakers who know to stress the verb",
    difficulty: 1, category: "phrase",
    sceneEmoji: "🏢👥💪🚀", scene: "meeting-start", lifeCategory: "work",
    context_zh: "开会时，主持人精神饱满地说：",
    translation_zh: "我们走吧 / 开始吧"
  },
  {
    id: "phrase-verb-it-particle", name: "Verb-It-Particle", notation: "DUM-da-DUM",
    stressPattern: [1, 0.2, 1],
    examples: ["PICK it UP", "BREAK it DOWN", "WRAP it UP", "SORT it OUT", "FIGURE it OUT", "CHECK it OUT"],
    ipa: "/pɪk ɪt ʌp/", commonInChinese: false,
    chineseNote: "'it' nearly vanishes in speech; Chinese speakers give it full weight",
    difficulty: 2, category: "phrase",
    sceneEmoji: "🧩🔧", scene: "problem-solving", lifeCategory: "work",
    context_zh: "工作中拆解问题时说：",
    translation_zh: "捡起来 / 拆解它 / 搞定它"
  },
  {
    id: "phrase-wh-question", name: "Wh-Question Fall", notation: "DUM-da-da-DUM",
    stressPattern: [1, 0.2, 0.2, 1],
    examples: ["WHERE are we NOW", "WHAT do you THINK", "HOW does this WORK", "WHEN can we MEET", "WHO owns this TASK", "WHY did it FAIL"],
    ipa: "/wɛr ɑːr wi naʊ/", commonInChinese: false,
    chineseNote: "Chinese speakers often stress 'are/do/does' too much in questions",
    difficulty: 1, category: "phrase",
    sceneEmoji: "🤔❓", scene: "asking-questions", lifeCategory: "social",
    context_zh: "好奇地问别人情况时：",
    translation_zh: "我们现在在哪？/ 你怎么想？"
  },
  {
    id: "phrase-i-want-to", name: "I Want To + Verb", notation: "da-da-da-DUM",
    stressPattern: [0.2, 0.3, 0.2, 1],
    examples: ["I want to FLAG", "I want to HELP", "I want to ADD", "I want to SHARE", "I want to CHECK", "I want to ASK"],
    ipa: "/aɪ wɒnt tə flæɡ/", commonInChinese: false,
    chineseNote: "'want to' reduces to 'wanna'; Chinese speakers articulate each word fully",
    difficulty: 2, category: "phrase",
    sceneEmoji: "🙋‍♂️📌", scene: "raising-concern", lifeCategory: "work",
    context_zh: "会议中想提出一个问题：",
    translation_zh: "我想要标记 / 我想帮忙"
  },
  {
    id: "phrase-make-sure", name: "Make Sure + Clause", notation: "DUM-DUM-da-da-DUM",
    stressPattern: [1, 1, 0.2, 0.2, 1],
    examples: [
      "MAKE SURE we're on TRACK", "MAKE SURE it's all GOOD",
      "MAKE SURE you're a-WARE", "MAKE SURE we a-GREE",
      "MAKE SURE it WORKS", "MAKE SURE they KNOW"
    ],
    ipa: "/meɪk ʃʊr wɪr ɒn træk/", commonInChinese: false,
    chineseNote: "The unstressed words between MAKE SURE and the final stress must be reduced",
    difficulty: 2, category: "phrase",
    sceneEmoji: "✅🔍", scene: "confirming", lifeCategory: "work",
    context_zh: "确认进度时，认真地说：",
    translation_zh: "确保我们进度正常"
  },
  {
    id: "phrase-thanks-for", name: "Thanks For + Gerund", notation: "DUM-da-DUM-da",
    stressPattern: [1, 0.2, 1, 0.3],
    examples: [
      "THANKS for JUMP-ing", "THANKS for HELP-ing", "THANKS for SHAR-ing",
      "THANKS for COM-ing", "THANKS for WAIT-ing", "THANKS for LIST-ening"
    ],
    ipa: "/θæŋks fɔːr ˈdʒʌmpɪŋ/", commonInChinese: true,
    chineseNote: "Relatively natural; watch that 'for' stays weak",
    difficulty: 1, category: "phrase",
    sceneEmoji: "🙏😊", scene: "thanking", lifeCategory: "social",
    context_zh: "感谢别人的帮助时：",
    translation_zh: "谢谢你的帮助 / 分享"
  },
  {
    id: "phrase-can-you", name: "Can You + Verb", notation: "da-da-DUM",
    stressPattern: [0.3, 0.3, 1],
    examples: ["Can you HELP", "Can you CHECK", "Can you SEND", "Can you SHARE", "Can you JOIN", "Can you WAIT"],
    ipa: "/kən jə hɛlp/", commonInChinese: false,
    chineseNote: "'can' reduces to /kən/ and 'you' to /jə/; Chinese speakers say full /kæn juː/",
    difficulty: 1, category: "phrase",
    sceneEmoji: "👋🙏", scene: "polite-request", lifeCategory: "social",
    context_zh: "礼貌地请别人帮忙：",
    translation_zh: "你能帮忙吗？/ 你能查一下吗？"
  },
  {
    id: "phrase-going-to", name: "Going To (Gonna)", notation: "DUM-da-DUM",
    stressPattern: [1, 0.2, 1],
    examples: ["GOING to LEAVE", "GOING to SEND", "GOING to NEED", "GOING to PUSH", "GOING to CALL", "GOING to SHIP"],
    ipa: "/ˈɡɒnə liːv/", commonInChinese: false,
    chineseNote: "'going to' becomes 'gonna' /ˈɡɒnə/; saying all three words sounds overly formal",
    difficulty: 2, category: "phrase",
    sceneEmoji: "📅🔜", scene: "making-plans", lifeCategory: "home",
    context_zh: "告诉别人接下来的计划：",
    translation_zh: "我要走了 / 我要发了"
  },
  {
    id: "phrase-have-to", name: "Have To (Hafta)", notation: "DUM-da-DUM",
    stressPattern: [1, 0.2, 1],
    examples: ["HAVE to GO", "HAVE to CHECK", "HAVE to STOP", "HAVE to ASK", "HAVE to KNOW", "HAVE to TRY"],
    ipa: "/ˈhæftə ɡoʊ/", commonInChinese: false,
    chineseNote: "'have to' becomes 'hafta' /ˈhæftə/; full pronunciation sounds stilted",
    difficulty: 2, category: "phrase",
    sceneEmoji: "⏰🏃", scene: "urgency", lifeCategory: "home",
    context_zh: "时间紧迫，必须做某事：",
    translation_zh: "必须走了 / 必须检查"
  },
  // ── Compound patterns ────────────────────────────────────────────────
  {
    id: "compound-nn", name: "Noun + Noun Compound", notation: "DUM-da",
    stressPattern: [1, 0.3],
    examples: ["TEAM-work", "DEAD-line", "FEED-back", "ROAD-map", "BRAIN-storm", "MILE-stone"],
    ipa: "/ˈtiːmwɜːrk/", commonInChinese: true,
    chineseNote: "Similar to Chinese noun compounds; first element takes primary stress",
    difficulty: 1, category: "compound",
    sceneEmoji: "🏢📊", scene: "workplace-terms", lifeCategory: "work",
    context_zh: "工作中常用的复合名词：",
    translation_zh: "团队合作 / 截止日期 / 反馈"
  },
  {
    id: "compound-adj-noun", name: "Adj + Noun (Descriptive)", notation: "da-DUM",
    stressPattern: [0.3, 1],
    examples: ["big DEAL", "hard STOP", "quick WIN", "tight SPOT", "key POINT", "main GOAL"],
    ipa: "/bɪɡ diːl/", commonInChinese: false,
    chineseNote: "Differs from compound nouns; 'big DEAL' (adj+noun) vs 'BIGwig' (compound)",
    difficulty: 2, category: "compound",
    sceneEmoji: "🎯💥", scene: "emphasis-phrase", lifeCategory: "work",
    context_zh: "强调某事重要性时：",
    translation_zh: "大事 / 关键点 / 速赢"
  },
  {
    id: "compound-phrasal-verb", name: "Phrasal Verb", notation: "DUM-da-DUM",
    stressPattern: [1, 0.2, 1],
    examples: ["PICK it UP", "BRING it UP", "WRAP it UP", "SET it UP", "BREAK it DOWN", "CALL it OFF"],
    ipa: "/pɪk ɪt ʌp/", commonInChinese: false,
    chineseNote: "The particle carries equal stress to the verb; pronoun is nearly silent",
    difficulty: 2, category: "compound",
    sceneEmoji: "🔄🗣️", scene: "daily-actions", lifeCategory: "home",
    context_zh: "日常对话中的动词短语：",
    translation_zh: "收拾好 / 提出来 / 取消"
  },
  {
    id: "compound-three-word", name: "Three-Word Compound", notation: "DUM-da-da",
    stressPattern: [1, 0.3, 0.3],
    examples: ["FOLLOW-up e-mail", "BREAK-through mo-ment", "CHECK-in pro-cess", "TRADE-off a-nal-y-sis", "SIGN-off meet-ing", "KICK-off call"],
    ipa: "/ˈfɒloʊˌʌp ˈiːmeɪl/", commonInChinese: false,
    chineseNote: "Primary stress on the first element only; rest decreases",
    difficulty: 2, category: "compound",
    sceneEmoji: "📧📎", scene: "office-emails", lifeCategory: "work",
    context_zh: "写邮件时常用的复合词：",
    translation_zh: "跟进邮件 / 签到流程"
  },
  // ── Clause-level patterns ────────────────────────────────────────────
  {
    id: "clause-front-heavy", name: "Front-Loaded Clause", notation: "DUM-DUM-da-da-da",
    stressPattern: [1, 1, 0.2, 0.2, 0.3],
    examples: [
      "GREAT STUFF for the team", "BIG WIN for us all",
      "HARD CALL but it's right", "NICE WORK on the deck",
      "KEY POINT for the plan", "GOOD MOVE for the brand"
    ],
    ipa: "/ɡreɪt stʌf fɔːr ðə tiːm/", commonInChinese: false,
    chineseNote: "The unstressed tail must be spoken quickly, almost mumbled",
    difficulty: 2, category: "clause",
    sceneEmoji: "🎉👏", scene: "praising", lifeCategory: "work",
    context_zh: "表扬同事的工作成果：",
    translation_zh: "团队做得很棒 / 对我们来说是大赢"
  },
  {
    id: "clause-back-heavy", name: "Back-Loaded Clause", notation: "da-da-da-DUM-DUM",
    stressPattern: [0.2, 0.2, 0.3, 1, 1],
    examples: [
      "Let me just MAKE SURE", "I think we SHOULD WAIT",
      "We need to PUSH BACK", "They want us SIGNED OFF",
      "I'd like to MOVE ON", "It has to SHIP NOW"
    ],
    ipa: "/lɛt mi dʒʌst meɪk ʃʊr/", commonInChinese: false,
    chineseNote: "The run-up of unstressed syllables is rushed; Chinese speakers space them evenly",
    difficulty: 2, category: "clause",
    sceneEmoji: "🤫🛑", scene: "being-cautious", lifeCategory: "work",
    context_zh: "谨慎地提出建议时：",
    translation_zh: "让我确认一下 / 我觉得我们应该等等"
  },
  {
    id: "clause-valley", name: "Valley Pattern", notation: "DUM-da-da-da-DUM",
    stressPattern: [1, 0.2, 0.2, 0.2, 1],
    examples: [
      "WHERE are we on THIS", "THAT's what I would SAY",
      "WHEN can we re-GROUP", "HOW does this con-NECT",
      "WHO's the one in CHARGE", "WHAT's the plan for NEXT"
    ],
    ipa: "/wɛr ɑːr wi ɒn ðɪs/", commonInChinese: false,
    chineseNote: "The 'valley' of unstressed syllables must be truly reduced, not given equal weight",
    difficulty: 2, category: "clause",
    sceneEmoji: "🔎📍", scene: "status-check", lifeCategory: "work",
    context_zh: "追问进度或状态时：",
    translation_zh: "我们在这方面怎么样了？"
  },
  {
    id: "clause-mountain", name: "Mountain Pattern", notation: "da-da-DUM-da-da",
    stressPattern: [0.2, 0.3, 1, 0.3, 0.2],
    examples: [
      "I can SEE what you", "we should TALK about",
      "let me THINK a bit", "I would LOVE to but",
      "you can TAKE your time", "they will SEND it out"
    ],
    ipa: "/aɪ kən siː wɒt juː/", commonInChinese: false,
    chineseNote: "Single peak in the middle; Chinese speakers distribute stress more evenly",
    difficulty: 2, category: "clause",
    sceneEmoji: "💭🤔", scene: "thinking-aloud", lifeCategory: "social",
    context_zh: "思考后缓缓说出想法：",
    translation_zh: "我能看出你的意思 / 我们应该谈谈"
  },
  {
    id: "clause-cascade", name: "Cascade (Staircase Down)", notation: "DUM-Dum-dum-da",
    stressPattern: [1, 0.7, 0.4, 0.2],
    examples: [
      "GREAT work every-one", "THANKS for let-ting me",
      "FIRST things that we", "TEAM ef-fort this time",
      "SMART move by the way", "FAIR point ac-tual-ly"
    ],
    ipa: "/ɡreɪt wɜːrk ˈɛvriwʌn/", commonInChinese: false,
    chineseNote: "Progressive de-stressing is unnatural for Chinese speakers who prefer discrete levels",
    difficulty: 3, category: "clause",
    sceneEmoji: "🎤👏", scene: "public-thanks", lifeCategory: "work",
    context_zh: "公开感谢大家的努力：",
    translation_zh: "大家做得好 / 谢谢大家让我..."
  },
  // ── Extended phrase patterns ─────────────────────────────────────────
  {
    id: "rhythm-332", name: "3-3-2 Rhythm", notation: "da-da-DUM da-da-DUM da-DUM",
    stressPattern: [0, 0, 1, 0, 0, 1, 0, 1],
    examples: [
      "I would LIKE to dis-CUSS a PLAN",
      "Can we TALK a-bout the NEXT big STEP",
      "Let me KNOW if you NEED a HAND",
      "We should MEET be-fore the DEAD-LINE hits",
      "I can HELP with an-y-THING you NEED"
    ],
    ipa: "/aɪ wʊd laɪk tə dɪˈskʌs ə plæn/", commonInChinese: false,
    chineseNote: "Regular beats create a musical quality; Chinese speakers make it too monotone",
    difficulty: 3, category: "clause",
    sceneEmoji: "💬🎵", scene: "conversation-flow", lifeCategory: "social",
    context_zh: "日常对话中自然的长句：",
    translation_zh: "我想讨论一个计划"
  },
  {
    id: "rhythm-waltz", name: "Waltz Rhythm", notation: "DUM-da-da DUM-da-da",
    stressPattern: [1, 0, 0, 1, 0, 0],
    examples: [
      "BEAU-ti-ful MORN-ing to-day",
      "EV-ery-one GATH-er a-round",
      "WON-der-ful WORK on the deck",
      "TER-ri-ble TRAF-fic this week",
      "EX-cel-lent PROG-ress so far"
    ],
    ipa: "/ˈbjuːtɪfəl ˈmɔːrnɪŋ təˈdeɪ/", commonInChinese: false,
    chineseNote: "Triple meter is rare in Chinese; requires practice to maintain the 'bounce'",
    difficulty: 3, category: "clause",
    sceneEmoji: "🌤️☕", scene: "morning-chat", lifeCategory: "social",
    context_zh: "早上跟同事闲聊时：",
    translation_zh: "今天早上真好 / 大家围过来"
  },
  {
    id: "rhythm-march", name: "March Rhythm", notation: "DUM-da DUM-da DUM-da",
    stressPattern: [1, 0, 1, 0, 1, 0],
    examples: [
      "LET'S get STAR-ted QUICK-ly",
      "MOVE the NEE-dle FOR-ward",
      "KEEP the MO-men-TUM going",
      "PUSH the DEAD-line BACK now",
      "SHIP the FEA-ture FRI-day"
    ],
    ipa: "/lɛts ɡɛt ˈstɑːrtɪd ˈkwɪkli/", commonInChinese: false,
    chineseNote: "Alternating stress is the backbone of English rhythm",
    difficulty: 1, category: "clause",
    sceneEmoji: "💪🚀", scene: "motivating", lifeCategory: "work",
    context_zh: "催促团队快速行动：",
    translation_zh: "快点开始 / 推动进度"
  },
  // ── Sentence-level prosodic patterns ─────────────────────────────────
  {
    id: "sentence-given-new", name: "Given-New", notation: "da...-DUM",
    stressPattern: [0.3, 0.3, 0.3, 1],
    examples: [
      "The meeting is at THREE", "The deadline is on FRIDAY",
      "The owner is SARAH", "The budget is APPROVED",
      "The status is all GREEN", "The fix is in STAGING"
    ],
    ipa: "/ðə ˈmiːtɪŋ ɪz ət θriː/", commonInChinese: false,
    chineseNote: "New information carries nuclear stress; Chinese speakers often stress the subject instead",
    difficulty: 2, category: "clause",
    sceneEmoji: "📢📌", scene: "announcing", lifeCategory: "work",
    context_zh: "宣布一个新信息：",
    translation_zh: "会议在三点 / 截止日期是周五"
  },
  {
    id: "sentence-contrastive", name: "Contrastive Stress", notation: "DUM...DUM",
    stressPattern: [1, 0.2, 0.2, 1],
    examples: [
      "I said SEND, not SHIP", "It's BLUE, not GREEN",
      "We NEED it, we don't WANT it",
      "That's the PLAN, not the GOAL",
      "She said MONDAY, not FRIDAY"
    ],
    ipa: "/aɪ sɛd sɛnd nɒt ʃɪp/", commonInChinese: true,
    chineseNote: "Similar to Chinese contrastive emphasis; Chinese speakers handle this naturally",
    difficulty: 2, category: "clause",
    sceneEmoji: "⚡🔀", scene: "correcting", lifeCategory: "work",
    context_zh: "纠正别人的理解时：",
    translation_zh: "我说的是发送，不是上线"
  },
  {
    id: "sentence-listing", name: "List Rhythm", notation: "DUM↗ DUM↗ and DUM↘",
    stressPattern: [1, 1, 0.2, 1],
    examples: [
      "EGGS, MILK, and BREAD", "FAST, CHEAP, and GOOD",
      "PLAN, BUILD, and SHIP", "STOP, THINK, and ACT",
      "READ, WRITE, and SPEAK"
    ],
    ipa: "/ɛɡz mɪlk ənd brɛd/", commonInChinese: true,
    chineseNote: "Rising on each item, falling on the last — similar to Chinese listing",
    difficulty: 1, category: "clause",
    sceneEmoji: "🛒📝", scene: "shopping-list", lifeCategory: "shopping",
    context_zh: "在超市列购物清单时：",
    translation_zh: "鸡蛋、牛奶和面包"
  },
  {
    id: "sentence-tag", name: "Tag Question", notation: "STATEMENT, da-DUM?",
    stressPattern: [1, 0.3, 0.3, 1],
    examples: [
      "That WORKS, doesn't IT?", "We're GOOD, aren't WE?",
      "It's DONE, isn't IT?", "You KNOW, don't YOU?",
      "She LEFT, didn't SHE?"
    ],
    ipa: "/ðæt wɜːrks ˈdʌzənt ɪt/", commonInChinese: false,
    chineseNote: "Tag questions don't exist in Chinese; the rising/falling pattern needs explicit practice",
    difficulty: 2, category: "clause",
    sceneEmoji: "🤷‍♂️❓", scene: "seeking-agreement", lifeCategory: "social",
    context_zh: "希望别人同意自己的看法：",
    translation_zh: "可以吧，是不是？"
  },
  // ── Additional patterns to reach 50+ ──────────────────────────────────
  {
    id: "double-iamb", name: "Double Iamb", notation: "da-DUM da-DUM",
    stressPattern: [0, 1, 0, 1],
    examples: ["a-GREE to HELP", "be-LIEVE in GROWTH", "a-CHIEVE a GOAL", "re-QUEST a CALL", "pro-POSE a PLAN", "de-CIDE to MOVE"],
    ipa: "/əˈɡriː tə hɛlp/", commonInChinese: false,
    chineseNote: "The repeated weak-strong pattern creates a 'heartbeat' rhythm unfamiliar to Chinese ears",
    difficulty: 2, category: "phrase",
    sceneEmoji: "🤝🎯", scene: "agreeing-to-help", lifeCategory: "work",
    context_zh: "同意帮忙或支持某个目标：",
    translation_zh: "同意帮忙 / 相信成长"
  },
  {
    id: "double-trochee", name: "Double Trochee", notation: "DUM-da DUM-da",
    stressPattern: [1, 0, 1, 0],
    examples: ["NEV-er MIN-ded", "AL-ways WORK-ing", "HAP-py LAND-ing", "BREAK-through MO-ment", "QUICK-ly MOV-ing", "CARE-ful PLAN-ning"],
    ipa: "/ˈnɛvər ˈmaɪndɪd/", commonInChinese: false,
    chineseNote: "Two consecutive stress-unstress pairs; keep unstressed syllables truly light",
    difficulty: 2, category: "phrase",
    sceneEmoji: "🔄💪", scene: "ongoing-work", lifeCategory: "work",
    context_zh: "描述持续进行的工作：",
    translation_zh: "一直在工作 / 快速推进"
  },
  {
    id: "cretic", name: "Cretic", notation: "DUM-da-DUM",
    stressPattern: [1, 0, 1],
    examples: ["TAKE a LOOK", "HAVE a SEAT", "MAKE a MOVE", "DROP a LINE", "CATCH a BREAK", "SET a GOAL"],
    ipa: "/teɪk ə lʊk/", commonInChinese: false,
    chineseNote: "The article 'a' must be reduced to /ə/; Chinese speakers often say full /eɪ/",
    difficulty: 1, category: "phrase",
    sceneEmoji: "🪑👀", scene: "offering-seat", lifeCategory: "social",
    context_zh: "礼貌地请别人坐下或看看：",
    translation_zh: "看一看 / 请坐 / 行动起来"
  },
  {
    id: "molossus", name: "Molossus", notation: "DUM-DUM-DUM",
    stressPattern: [1, 1, 1],
    examples: ["WHO OWNS THIS", "SHIP IT NOW", "GREAT BIG WIN", "STOP RIGHT THERE", "MOVE FAST NOW", "GOOD HARD WORK"],
    ipa: "/huː oʊnz ðɪs/", commonInChinese: true,
    chineseNote: "Three equally stressed words; Chinese speakers can handle this pattern well",
    difficulty: 1, category: "phrase",
    sceneEmoji: "⚡🔥", scene: "urgent-command", lifeCategory: "work",
    context_zh: "紧急情况下果断下达指令：",
    translation_zh: "谁负责这个 / 现在就发"
  },
  {
    id: "choriamb", name: "Choriamb", notation: "DUM-da-da-DUM",
    stressPattern: [1, 0, 0, 1],
    examples: [
      "WHERE do we STAND", "HOW can we HELP", "WHAT did you MEAN",
      "WHEN shall we MEET", "WHO took the LEAD", "WHY did it BREAK"
    ],
    ipa: "/wɛr duː wi stænd/", commonInChinese: false,
    chineseNote: "The two middle weak syllables must rush by; Chinese speakers give them too much time",
    difficulty: 2, category: "phrase",
    sceneEmoji: "❓📊", scene: "meeting-questions", lifeCategory: "work",
    context_zh: "会议中提出关键问题：",
    translation_zh: "我们目前什么情况？/ 怎么能帮忙？"
  },
  {
    id: "ionic-minor", name: "Ionic Minor", notation: "da-da-DUM-DUM",
    stressPattern: [0, 0, 1, 1],
    examples: [
      "in the MEAN TIME", "on the FLIP SIDE", "at the HARD STOP",
      "by the DEAD LINE", "for the WHOLE TEAM", "to the NEXT PHASE"
    ],
    ipa: "/ɪn ðə ˈmiːn taɪm/", commonInChinese: false,
    chineseNote: "Two quick unstressed syllables before two strong beats — needs rhythmic awareness",
    difficulty: 2, category: "phrase",
    sceneEmoji: "⏳🔄", scene: "meanwhile", lifeCategory: "work",
    context_zh: "话题转折时说：",
    translation_zh: "与此同时 / 另一方面"
  },
  {
    id: "ionic-major", name: "Ionic Major", notation: "DUM-DUM-da-da",
    stressPattern: [1, 1, 0, 0],
    examples: [
      "GREAT WORK every-one", "BIG NEWS for us",
      "HARD PASS on that", "DEEP DIVE into it",
      "GAME PLAN for the week", "GREEN LIGHT the pro-ject"
    ],
    ipa: "/ɡreɪt wɜːrk ˈɛvriwʌn/", commonInChinese: false,
    chineseNote: "Front-loaded stress with trailing weak syllables that must fade quickly",
    difficulty: 2, category: "phrase",
    sceneEmoji: "🎉📣", scene: "big-announcement", lifeCategory: "work",
    context_zh: "宣布好消息时：",
    translation_zh: "做得好大家 / 大新闻"
  },
  {
    id: "emphatic-do", name: "Emphatic DO", notation: "da-DUM-DUM",
    stressPattern: [0.2, 1, 1],
    examples: [
      "I DO think", "We DID try", "They DO care",
      "It DOES work", "She DID help", "You DO know"
    ],
    ipa: "/aɪ duː θɪŋk/", commonInChinese: false,
    chineseNote: "Emphatic auxiliary stress is foreign to Chinese; 'do' must be noticeably louder",
    difficulty: 2, category: "phrase",
    sceneEmoji: "💯🙌", scene: "emphasizing", lifeCategory: "social",
    context_zh: "强调自己确实做了某事：",
    translation_zh: "我确实觉得 / 我们确实试过了"
  },
  {
    id: "cleft-it", name: "It-Cleft Focus", notation: "da-da-DUM-da-da",
    stressPattern: [0.2, 0.2, 1, 0.2, 0.2],
    examples: [
      "It was SARAH who called",
      "It's the BUDGET that's tight",
      "It was MONDAY we shipped",
      "It's the DATA that shows",
      "It was TIMING that killed"
    ],
    ipa: "/ɪt wɒz ˈsɛrə huː kɔːld/", commonInChinese: false,
    chineseNote: "Focus word receives nuclear accent; surrounding words are drastically reduced",
    difficulty: 3, category: "clause",
    sceneEmoji: "👉🔦", scene: "pinpointing", lifeCategory: "work",
    context_zh: "强调具体是谁或什么导致的：",
    translation_zh: "是Sarah打的电话 / 是预算太紧"
  },
  {
    id: "echo-stress", name: "Echo/Parallel Stress", notation: "DUM-da, DUM-da",
    stressPattern: [1, 0, 1, 0],
    examples: [
      "PLAN it, SHIP it", "BUILD it, TEST it",
      "HEAR me, TRUST me", "CALL her, TELL her",
      "READ it, SHARE it"
    ],
    ipa: "/plæn ɪt ʃɪp ɪt/", commonInChinese: true,
    chineseNote: "Parallel structures are common in Chinese; this pattern transfers well",
    difficulty: 1, category: "clause",
    sceneEmoji: "📋✅", scene: "task-delegation", lifeCategory: "work",
    context_zh: "快速分配任务时：",
    translation_zh: "计划好，执行好 / 写好，分享好"
  },
  {
    id: "galloping", name: "Galloping", notation: "da-DUM-da da-DUM-da",
    stressPattern: [0, 1, 0, 0, 1, 0],
    examples: [
      "a-GREE-ment ne-GO-tia-ted",
      "ap-PROACH-ing the DEAD-line now",
      "de-CI-sion was MADE to-day",
      "the MEET-ing is SCHED-uled for",
      "re-VIEW-ing the BUD-get now"
    ],
    ipa: "/əˈɡriːmənt nɪˈɡoʊʃiˌeɪtɪd/", commonInChinese: false,
    chineseNote: "Galloping rhythm requires confident reduction of the weak syllables",
    difficulty: 3, category: "clause",
    sceneEmoji: "🏃📅", scene: "deadline-rush", lifeCategory: "work",
    context_zh: "截止日期临近，加快节奏：",
    translation_zh: "协议谈好了 / 截止日快到了"
  },
  {
    id: "bookend", name: "Bookend Stress", notation: "DUM-da-da-da-DUM",
    stressPattern: [1, 0.2, 0.2, 0.2, 1],
    examples: [
      "START with the end in MIND",
      "KEEP up the good hard WORK",
      "BRING me the lat-est DRAFT",
      "SEND me the fi-nal DECK",
      "CLEAR out the old back-LOG"
    ],
    ipa: "/stɑːrt wɪð ðə ɛnd ɪn maɪnd/", commonInChinese: false,
    chineseNote: "The middle section must be compressed; Chinese speakers give each word equal space",
    difficulty: 2, category: "clause",
    sceneEmoji: "🧠🎯", scene: "giving-advice", lifeCategory: "work",
    context_zh: "给同事提建议时：",
    translation_zh: "以终为始 / 继续保持好工作"
  },
  {
    id: "rhythm-swing", name: "Swing Rhythm", notation: "DUM-da-DUM-da-DUM",
    stressPattern: [1, 0.2, 1, 0.2, 1],
    examples: [
      "SHIP it FAST and CLEAN",
      "KEEP the TEAM on TRACK",
      "BUILD it RIGHT the FIRST time",
      "MAKE it WORK for ALL",
      "TRUST the PLAN and MOVE"
    ],
    ipa: "/ʃɪp ɪt fæst ænd kliːn/", commonInChinese: false,
    chineseNote: "Alternating strong-weak creates a 'swing' feel; maintain the bouncy rhythm throughout",
    difficulty: 2, category: "clause",
    sceneEmoji: "🚀✨", scene: "team-motto", lifeCategory: "work",
    context_zh: "激励团队的口号：",
    translation_zh: "快速干净地发布 / 保持团队在正轨"
  },
  {
    id: "triplet-stress", name: "Triplet Stress", notation: "DUM-DUM-DUM",
    stressPattern: [1, 1, 1],
    examples: [
      "STOP DROP ROLL", "PLAN BUILD SHIP",
      "READ WRITE SPEAK", "THINK ACT LEARN",
      "FAST CHEAP GOOD"
    ],
    ipa: "/plæn bɪld ʃɪp/", commonInChinese: true,
    chineseNote: "Three consecutive stressed monosyllables; Chinese speakers handle this well due to similar character rhythm",
    difficulty: 1, category: "phrase",
    sceneEmoji: "📋🔢", scene: "three-steps", lifeCategory: "work",
    context_zh: "总结三个要点或步骤：",
    translation_zh: "停下、放下、翻滚 / 计划、构建、发布"
  },
];

/** Life category definitions for UI display. */
export const LIFE_CATEGORIES = [
  { id: "work",          label: "🏢 职场",     labelEn: "Workplace" },
  { id: "social",        label: "👋 社交",     labelEn: "Social" },
  { id: "home",          label: "🏠 日常",     labelEn: "Daily Life" },
  { id: "shopping",      label: "🛍️ 购物",     labelEn: "Shopping" },
  { id: "food",          label: "☕ 餐饮",     labelEn: "Food & Drink" },
  { id: "transport",     label: "🚕 出行",     labelEn: "Transport" },
  { id: "entertainment", label: "🎉 娱乐",     labelEn: "Entertainment" },
  { id: "phone",         label: "📱 电话",     labelEn: "Phone" },
];


// ═══════════════════════════════════════════════════════════════════════════
// 2. ConnectedSpeechRules — Linking, Reduction & Assimilation
// ═══════════════════════════════════════════════════════════════════════════

/**
 * @typedef {Object} SpeechRule
 * @property {string} id - Unique rule identifier
 * @property {string} name - Human-readable name
 * @property {string} type - "linking" | "elision" | "assimilation" | "weakForm" | "contraction"
 * @property {string} description - What happens phonetically
 * @property {Array<{written: string, spoken: string, ipa: string}>} examples
 * @property {string} audioHint - Description of what it sounds like
 * @property {number} difficulty - 1-3
 * @property {string} chineseNote - Specific note for Chinese speakers
 */

/** Collection of connected speech rules for natural English pronunciation. */
export class ConnectedSpeechRules {
  constructor() {
    /** @type {SpeechRule[]} */
    this.rules = SPEECH_RULES;
  }

  /** Get all rules of a given type. */
  byType(type) {
    return this.rules.filter((r) => r.type === type);
  }

  /** Get rules at or below a difficulty level. */
  byDifficulty(maxLevel) {
    return this.rules.filter((r) => r.difficulty <= maxLevel);
  }

  /** Get a rule by id. */
  get(id) {
    return this.rules.find((r) => r.id === id) || null;
  }

  /** Get all available types. */
  get types() {
    return [...new Set(this.rules.map((r) => r.type))];
  }

  /** Analyze a sentence and return applicable rules. */
  analyze(sentence) {
    const lower = sentence.toLowerCase();
    const matches = [];
    for (const rule of this.rules) {
      for (const ex of rule.examples) {
        if (lower.includes(ex.written.toLowerCase())) {
          matches.push({ rule, example: ex });
          break;
        }
      }
    }
    return matches;
  }
}

const SPEECH_RULES = [
  // ── Linking Rules ────────────────────────────────────────────────────
  {
    id: "link-cv", name: "Consonant→Vowel Linking", type: "linking",
    description: "When a word ends in a consonant and the next begins with a vowel, they link smoothly without a pause.",
    examples: [
      { written: "pick it up", spoken: "pi-ki-tup", ipa: "/pɪ.kɪ.tʌp/" },
      { written: "turn it off", spoken: "tur-ni-toff", ipa: "/tɜːr.nɪ.tɒf/" },
      { written: "look at it", spoken: "loo-ka-tit", ipa: "/lʊ.kə.tɪt/" },
      { written: "check it out", spoken: "che-ki-tout", ipa: "/tʃɛ.kɪ.taʊt/" },
      { written: "send it over", spoken: "sen-di-tover", ipa: "/sɛn.dɪ.toʊvər/" },
    ],
    audioHint: "The consonant jumps to the next word's vowel — no gap between words",
    difficulty: 1,
    chineseNote: "Chinese syllables are self-contained; English words blur together. Practice saying 'pick_it_up' as three syllables, not three words."
  },
  {
    id: "link-vv-w", name: "Vowel→Vowel /w/ Link", type: "linking",
    description: "When a word ends in /uː/ or /oʊ/ and the next begins with a vowel, a /w/ glide is inserted.",
    examples: [
      { written: "do it", spoken: "duw-it", ipa: "/duː.wɪt/" },
      { written: "go ahead", spoken: "gow-ahead", ipa: "/ɡoʊ.wəˈhɛd/" },
      { written: "who is", spoken: "huw-iz", ipa: "/huː.wɪz/" },
      { written: "two of them", spoken: "tuw-ov", ipa: "/tuː.wɒv/" },
    ],
    audioHint: "A subtle 'w' sound bridges the two vowels",
    difficulty: 2,
    chineseNote: "Chinese does not have inter-word glides; you may need to consciously add the /w/ bridge."
  },
  {
    id: "link-vv-j", name: "Vowel→Vowel /j/ Link", type: "linking",
    description: "When a word ends in /iː/ or /eɪ/ and the next begins with a vowel, a /j/ glide is inserted.",
    examples: [
      { written: "he asked", spoken: "hee-yasked", ipa: "/hiː.jɑːskt/" },
      { written: "she is", spoken: "shee-yiz", ipa: "/ʃiː.jɪz/" },
      { written: "the end", spoken: "thee-yend", ipa: "/ðiː.jɛnd/" },
      { written: "say it", spoken: "say-yit", ipa: "/seɪ.jɪt/" },
    ],
    audioHint: "A subtle 'y' sound appears between the words",
    difficulty: 2,
    chineseNote: "Similar to adding 'y' between two vowels; practice with 'she is' → 'she-yiz'."
  },
  {
    id: "link-r", name: "Linking R", type: "linking",
    description: "In non-rhotic accents, a final 'r' that is normally silent becomes pronounced before a vowel.",
    examples: [
      { written: "far away", spoken: "far-raway", ipa: "/fɑːr.əˈweɪ/" },
      { written: "here it is", spoken: "heer-it-iz", ipa: "/hɪər.ɪt.ɪz/" },
      { written: "four of them", spoken: "four-rov-them", ipa: "/fɔːr.əv.ðɛm/" },
    ],
    audioHint: "The 'r' comes alive to connect to the next vowel",
    difficulty: 2,
    chineseNote: "English /r/ is very different from Chinese 'r'; keep the tongue curled back, not touching the palate."
  },
  {
    id: "link-intrusive-r", name: "Intrusive R", type: "linking",
    description: "A /r/ is inserted between vowels even when there is no 'r' in the spelling (British English).",
    examples: [
      { written: "idea of", spoken: "idear-of", ipa: "/aɪˈdɪər.əv/" },
      { written: "law and order", spoken: "lor-and-order", ipa: "/lɔːr.ənd.ˈɔːrdər/" },
      { written: "China and Japan", spoken: "Chinar-and", ipa: "/ˈtʃaɪnər.ənd/" },
    ],
    audioHint: "An 'r' appears out of nowhere between two vowel sounds",
    difficulty: 3,
    chineseNote: "This is a feature of British English; don't worry about producing it, but recognize it when listening."
  },

  // ── Elision Rules ────────────────────────────────────────────────────
  {
    id: "elide-t-cluster", name: "/t/ Elision in Clusters", type: "elision",
    description: "When /t/ appears between two consonants, it often drops out entirely.",
    examples: [
      { written: "last night", spoken: "las' night", ipa: "/lɑːs naɪt/" },
      { written: "next week", spoken: "nex' week", ipa: "/nɛks wiːk/" },
      { written: "most people", spoken: "mos' people", ipa: "/moʊs ˈpiːpəl/" },
      { written: "just now", spoken: "jus' now", ipa: "/dʒʌs naʊ/" },
      { written: "best case", spoken: "bes' case", ipa: "/bɛs keɪs/" },
    ],
    audioHint: "The /t/ simply vanishes — 'last night' becomes 'lass night'",
    difficulty: 1,
    chineseNote: "Chinese has no consonant clusters, so you may over-articulate the /t/. Let it go."
  },
  {
    id: "elide-d-cluster", name: "/d/ Elision in Clusters", type: "elision",
    description: "When /d/ appears between two consonants, it is often dropped.",
    examples: [
      { written: "old man", spoken: "ol' man", ipa: "/oʊl mæn/" },
      { written: "hold on", spoken: "hol' on", ipa: "/hoʊl ɒn/" },
      { written: "and then", spoken: "an' then", ipa: "/ən ðɛn/" },
      { written: "second thought", spoken: "secon' thought", ipa: "/ˈsɛkən θɔːt/" },
    ],
    audioHint: "The /d/ is swallowed — 'and then' becomes 'an then'",
    difficulty: 1,
    chineseNote: "Dropping final consonants is natural in Chinese — here it is actually correct to drop it."
  },
  {
    id: "elide-h", name: "H-Dropping", type: "elision",
    description: "In unstressed pronouns and auxiliaries, the initial /h/ is dropped.",
    examples: [
      { written: "tell him", spoken: "tell 'im", ipa: "/tɛl ɪm/" },
      { written: "give her", spoken: "give 'er", ipa: "/ɡɪv ər/" },
      { written: "has he", spoken: "'as 'e", ipa: "/æz iː/" },
      { written: "would have", spoken: "would 'av", ipa: "/wʊd əv/" },
    ],
    audioHint: "The 'h' at the start of him/her/has/have vanishes in fast speech",
    difficulty: 2,
    chineseNote: "Chinese /h/ is always pronounced; in English unstressed words, it disappears."
  },
  {
    id: "elide-schwa", name: "Schwa Elision (Syncope)", type: "elision",
    description: "An unstressed schwa between consonants is deleted, removing a syllable.",
    examples: [
      { written: "comfortable", spoken: "comf-ter-ble", ipa: "/ˈkʌmftəbəl/" },
      { written: "interesting", spoken: "in-tresting", ipa: "/ˈɪntrɛstɪŋ/" },
      { written: "different", spoken: "diff-rent", ipa: "/ˈdɪfrənt/" },
      { written: "every", spoken: "ev-ry", ipa: "/ˈɛvri/" },
      { written: "generally", spoken: "gen-rally", ipa: "/ˈdʒɛnrəli/" },
    ],
    audioHint: "A whole syllable disappears — 'comfortable' goes from 4 syllables to 3",
    difficulty: 2,
    chineseNote: "Chinese always preserves syllable count; removing a syllable feels wrong but is native-like."
  },

  // ── Assimilation Rules ───────────────────────────────────────────────
  {
    id: "assim-ty", name: "/t/ + /j/ → /tʃ/ Assimilation", type: "assimilation",
    description: "When /t/ meets /j/ (as in 'you'), they merge into /tʃ/ ('ch' sound).",
    examples: [
      { written: "don't you", spoken: "dontchu", ipa: "/doʊntʃuː/" },
      { written: "won't you", spoken: "wontchu", ipa: "/woʊntʃuː/" },
      { written: "what you", spoken: "whatchu", ipa: "/wɒtʃuː/" },
      { written: "can't you", spoken: "cantchu", ipa: "/kæntʃuː/" },
      { written: "let you", spoken: "letchu", ipa: "/lɛtʃuː/" },
    ],
    audioHint: "'don't you' sounds like 'DON-chew'",
    difficulty: 1,
    chineseNote: "Chinese has /tʃ/ (like 吃); the merge is pronounceable but feels informal."
  },
  {
    id: "assim-dy", name: "/d/ + /j/ → /dʒ/ Assimilation", type: "assimilation",
    description: "When /d/ meets /j/, they merge into /dʒ/ ('j' sound).",
    examples: [
      { written: "did you", spoken: "didju", ipa: "/dɪdʒuː/" },
      { written: "would you", spoken: "wouldju", ipa: "/wʊdʒuː/" },
      { written: "could you", spoken: "couldju", ipa: "/kʊdʒuː/" },
      { written: "had you", spoken: "hadju", ipa: "/hædʒuː/" },
    ],
    audioHint: "'did you' sounds like 'DIH-joo'",
    difficulty: 1,
    chineseNote: "Chinese /dʒ/ exists (like 知); practice 'would you' → 'WOOD-joo'."
  },
  {
    id: "assim-s-sh", name: "/s/ + /ʃ/ → /ʃ/ Assimilation", type: "assimilation",
    description: "When /s/ meets /ʃ/, it becomes /ʃ/.",
    examples: [
      { written: "this shop", spoken: "thish-shop", ipa: "/ðɪʃ ʃɒp/" },
      { written: "this shirt", spoken: "thish-shirt", ipa: "/ðɪʃ ʃɜːrt/" },
      { written: "nice shoes", spoken: "nish-shoes", ipa: "/naɪʃ ʃuːz/" },
    ],
    audioHint: "The 's' becomes 'sh' — 'this shop' sounds like 'thish shop'",
    difficulty: 2,
    chineseNote: "Chinese /s/ and /ʃ/ are distinct; letting them merge feels like a mistake but is natural."
  },
  {
    id: "assim-n-m", name: "/n/ → /m/ Before Labials", type: "assimilation",
    description: "The /n/ in 'in', 'on', 'ten' becomes /m/ before /p/, /b/, /m/.",
    examples: [
      { written: "in Paris", spoken: "im Paris", ipa: "/ɪm ˈpærɪs/" },
      { written: "ten pounds", spoken: "tem pounds", ipa: "/tɛm paʊndz/" },
      { written: "on Monday", spoken: "om Monday", ipa: "/ɒm ˈmʌndeɪ/" },
    ],
    audioHint: "Your lips close for the /m/ before the /p/ even starts",
    difficulty: 3,
    chineseNote: "Chinese nasal finals (n/ng) don't assimilate; this is purely an English-flow feature."
  },

  // ── Weak Forms ───────────────────────────────────────────────────────
  {
    id: "weak-can", name: "'can' Weak Form", type: "weakForm",
    description: "'can' in positive statements reduces from /kæn/ to /kən/.",
    examples: [
      { written: "I can help", spoken: "I kn help", ipa: "/aɪ kən hɛlp/" },
      { written: "We can start", spoken: "We kn start", ipa: "/wi kən stɑːrt/" },
      { written: "You can go", spoken: "You kn go", ipa: "/juː kən ɡoʊ/" },
    ],
    audioHint: "'can' sounds like 'kun' — almost a grunt; 'can't' keeps the full /æ/",
    difficulty: 1,
    chineseNote: "The difference between 'can' /kən/ and 'can't' /kænt/ is mainly the vowel, not the final /t/."
  },
  {
    id: "weak-to", name: "'to' Weak Form", type: "weakForm",
    description: "'to' reduces from /tuː/ to /tə/ before consonants.",
    examples: [
      { written: "want to go", spoken: "want-tuh go", ipa: "/wɒnt tə ɡoʊ/" },
      { written: "need to know", spoken: "need-tuh know", ipa: "/niːd tə noʊ/" },
      { written: "going to leave", spoken: "gonna leave", ipa: "/ˈɡɒnə liːv/" },
    ],
    audioHint: "'to' becomes a quick 'tuh' — never the full 'TOO'",
    difficulty: 1,
    chineseNote: "Chinese speakers say full /tuː/ every time, which sounds overly precise and formal."
  },
  {
    id: "weak-for", name: "'for' Weak Form", type: "weakForm",
    description: "'for' reduces from /fɔːr/ to /fər/.",
    examples: [
      { written: "thanks for coming", spoken: "thanks-fer coming", ipa: "/θæŋks fər ˈkʌmɪŋ/" },
      { written: "what's it for", spoken: "what's-it-fer", ipa: "/wɒts ɪt fər/" },
      { written: "for a while", spoken: "fer a while", ipa: "/fər ə waɪl/" },
    ],
    audioHint: "'for' becomes 'fer' — quick and light",
    difficulty: 1,
    chineseNote: "Always reduce 'for' in the middle of phrases; only stress it for emphasis ('What FOR?')."
  },
  {
    id: "weak-of", name: "'of' Weak Form", type: "weakForm",
    description: "'of' reduces from /ɒv/ to /əv/ or even just /ə/.",
    examples: [
      { written: "kind of", spoken: "kinda", ipa: "/ˈkaɪndə/" },
      { written: "out of", spoken: "outta", ipa: "/ˈaʊtə/" },
      { written: "lot of", spoken: "lotta", ipa: "/ˈlɒtə/" },
      { written: "sort of", spoken: "sorta", ipa: "/ˈsɔːrtə/" },
    ],
    audioHint: "'of' nearly vanishes into a schwa — 'kind of' → 'kinda'",
    difficulty: 1,
    chineseNote: "These reductions (kinda, outta, lotta) are extremely common in native speech."
  },
  {
    id: "weak-and", name: "'and' Weak Form", type: "weakForm",
    description: "'and' reduces from /ænd/ to /ənd/, /ən/, or /n/.",
    examples: [
      { written: "bread and butter", spoken: "bread-n-butter", ipa: "/brɛd n ˈbʌtər/" },
      { written: "come and go", spoken: "come-n-go", ipa: "/kʌm n ɡoʊ/" },
      { written: "back and forth", spoken: "back-n-forth", ipa: "/bæk n fɔːrθ/" },
    ],
    audioHint: "'and' becomes just 'n' — 'bread and butter' → 'bread'n'butter'",
    difficulty: 1,
    chineseNote: "Saying full 'AND' every time is a dead giveaway of non-native speech."
  },
  {
    id: "weak-them", name: "'them' Weak Form", type: "weakForm",
    description: "'them' reduces from /ðɛm/ to /ðəm/ or /əm/.",
    examples: [
      { written: "tell them", spoken: "tell-em", ipa: "/tɛl əm/" },
      { written: "give them", spoken: "give-em", ipa: "/ɡɪv əm/" },
      { written: "ask them", spoken: "ask-em", ipa: "/ɑːsk əm/" },
    ],
    audioHint: "'them' loses its consonant and becomes 'em'",
    difficulty: 2,
    chineseNote: "'them' → 'em' is standard speech, not slang."
  },

  // ── Contractions & Reductions ────────────────────────────────────────
  {
    id: "contraction-gonna", name: "Going to → Gonna", type: "contraction",
    description: "'going to' before a verb reduces to 'gonna' /ˈɡɒnə/.",
    examples: [
      { written: "I'm going to send it", spoken: "I'm gonna send it", ipa: "/aɪm ˈɡɒnə sɛnd ɪt/" },
      { written: "We're going to ship", spoken: "We're gonna ship", ipa: "/wɪər ˈɡɒnə ʃɪp/" },
      { written: "They're going to love it", spoken: "They're gonna love it", ipa: "/ðɛər ˈɡɒnə lʌv ɪt/" },
    ],
    audioHint: "Two syllables: GON-nuh, never 'going to'",
    difficulty: 1,
    chineseNote: "Using 'gonna' in speech is normal, not sloppy. Only avoid it in formal writing."
  },
  {
    id: "contraction-wanna", name: "Want to → Wanna", type: "contraction",
    description: "'want to' reduces to 'wanna' /ˈwɒnə/.",
    examples: [
      { written: "Do you want to try?", spoken: "D'you wanna try?", ipa: "/djə ˈwɒnə traɪ/" },
      { written: "I want to help", spoken: "I wanna help", ipa: "/aɪ ˈwɒnə hɛlp/" },
    ],
    audioHint: "WON-nuh — the /t/ is completely gone",
    difficulty: 1,
    chineseNote: "'Wanna' is used in all but the most formal contexts."
  },
  {
    id: "contraction-gotta", name: "Got to → Gotta", type: "contraction",
    description: "'got to' or 'have got to' reduces to 'gotta' /ˈɡɒtə/.",
    examples: [
      { written: "I've got to go", spoken: "I gotta go", ipa: "/aɪ ˈɡɒtə ɡoʊ/" },
      { written: "You've got to try this", spoken: "You gotta try this", ipa: "/jə ˈɡɒtə traɪ ðɪs/" },
    ],
    audioHint: "GOT-tuh — American English flaps the /t/ to a quick /d/ sound",
    difficulty: 1,
    chineseNote: "Extremely common; 'I gotta go' is the standard spoken form."
  },
  {
    id: "contraction-shoulda", name: "Should have → Shoulda", type: "contraction",
    description: "'should have' reduces to 'shoulda' /ˈʃʊdə/ (NOT 'should of').",
    examples: [
      { written: "I should have known", spoken: "I shoulda known", ipa: "/aɪ ˈʃʊdə noʊn/" },
      { written: "You could have told me", spoken: "You coulda told me", ipa: "/juː ˈkʊdə toʊld mi/" },
      { written: "We would have won", spoken: "We woulda won", ipa: "/wi ˈwʊdə wʌn/" },
    ],
    audioHint: "The 'have' becomes 'uh' — SHOULD-uh, COULD-uh, WOULD-uh",
    difficulty: 2,
    chineseNote: "This is 'should HAVE', not 'should OF' — the spelling is tricky because it sounds like 'of'."
  },
  {
    id: "contraction-lemme", name: "Let me → Lemme", type: "contraction",
    description: "'let me' reduces to 'lemme' /ˈlɛmi/.",
    examples: [
      { written: "Let me check", spoken: "Lemme check", ipa: "/ˈlɛmi tʃɛk/" },
      { written: "Let me know", spoken: "Lemme know", ipa: "/ˈlɛmi noʊ/" },
      { written: "Let me think", spoken: "Lemme think", ipa: "/ˈlɛmi θɪŋk/" },
    ],
    audioHint: "LEM-ee — very fast, almost one syllable",
    difficulty: 1,
    chineseNote: "Standard in meetings: 'Lemme check on that' is perfectly professional."
  },
  {
    id: "contraction-gimme", name: "Give me → Gimme", type: "contraction",
    description: "'give me' reduces to 'gimme' /ˈɡɪmi/.",
    examples: [
      { written: "Give me a second", spoken: "Gimme a second", ipa: "/ˈɡɪmi ə ˈsɛkənd/" },
      { written: "Give me the details", spoken: "Gimme the details", ipa: "/ˈɡɪmi ðə ˈdiːteɪlz/" },
    ],
    audioHint: "GIM-ee — the /v/ becomes /m/",
    difficulty: 1,
    chineseNote: "Casual but widely used; 'gimme a sec' is standard in workplace conversation."
  },
];


// ═══════════════════════════════════════════════════════════════════════════
// 3. IntonationPatterns — 20+ Intonation Curves
// ═══════════════════════════════════════════════════════════════════════════

/**
 * @typedef {Object} IntonationPattern
 * @property {string} id - Unique identifier
 * @property {string} name - Pattern name
 * @property {string} description - When and how this pattern is used
 * @property {string} contourSymbol - Visual arrow representation (e.g., "↘", "↗")
 * @property {number[]} contour - Pitch contour values (0-1, where 0=low, 1=high)
 * @property {Array<{text: string, contourMarked: string, context: string}>} examples
 * @property {string} chineseComparison - How this compares to Chinese intonation
 * @property {number} difficulty - 1-3
 */

/** Library of 20+ English intonation patterns with Chinese comparisons. */
export class IntonationPatterns {
  constructor() {
    /** @type {IntonationPattern[]} */
    this.patterns = INTONATION_DATA;
  }

  /** Get a pattern by id. */
  get(id) {
    return this.patterns.find((p) => p.id === id) || null;
  }

  /** Get patterns by difficulty. */
  byDifficulty(level) {
    return this.patterns.filter((p) => p.difficulty === level);
  }

  /** Suggest an intonation pattern based on sentence punctuation and structure. */
  suggest(sentence) {
    const trimmed = sentence.trim();
    if (trimmed.endsWith("?")) {
      if (/^(who|what|where|when|why|how)\b/i.test(trimmed)) return this.get("wh-fall");
      if (/,\s*(right|isn't|aren't|doesn't|won't|can't|don't|didn't|wasn't|weren't)\b/i.test(trimmed)) return this.get("tag-confirm");
      return this.get("yn-rise");
    }
    if (trimmed.endsWith("!")) return this.get("exclamation");
    if (/,\s*(and|or|but)\s/i.test(trimmed)) return this.get("compound");
    if ((trimmed.match(/,/g) || []).length >= 2) return this.get("list");
    return this.get("statement-fall");
  }

  /** Total count. */
  get count() {
    return this.patterns.length;
  }
}

const INTONATION_DATA = [
  {
    id: "statement-fall", name: "Statement (Falling)", description: "Declarative statements end with a falling tone, signaling completeness and certainty.",
    contourSymbol: "↘", contour: [0.6, 0.65, 0.7, 0.6, 0.4, 0.2],
    examples: [
      { text: "I like coffee.", contourMarked: "I like COF↘fee.", context: "Simple declaration" },
      { text: "The meeting is at three.", contourMarked: "The meeting is at THREE↘.", context: "Stating a fact" },
      { text: "We shipped it last night.", contourMarked: "We shipped it last NIGHT↘.", context: "Reporting progress" },
    ],
    chineseComparison: "Similar to Chinese 4th tone (去声) at the end — a definitive drop. Chinese speakers may not drop far enough.",
    difficulty: 1
  },
  {
    id: "yn-rise", name: "Yes/No Question (Rising)", description: "Yes/No questions end with a rising tone, inviting a response.",
    contourSymbol: "↗", contour: [0.5, 0.5, 0.5, 0.55, 0.7, 0.85],
    examples: [
      { text: "Do you want some?", contourMarked: "Do you want SOME↗?", context: "Offering" },
      { text: "Are we on track?", contourMarked: "Are we on TRACK↗?", context: "Checking status" },
      { text: "Can everyone hear me?", contourMarked: "Can everyone hear ME↗?", context: "Audio check" },
    ],
    chineseComparison: "Similar to Chinese 2nd tone (阳平) but applied to the whole sentence-final word, not just a syllable.",
    difficulty: 1
  },
  {
    id: "wh-fall", name: "Wh-Question (Falling)", description: "Wh-questions (who, what, where, when, why, how) typically fall at the end.",
    contourSymbol: "↘", contour: [0.7, 0.6, 0.5, 0.5, 0.4, 0.2],
    examples: [
      { text: "Where are you going?", contourMarked: "Where are you GO↘ing?", context: "Asking direction" },
      { text: "What's the trade-off?", contourMarked: "What's the TRADE↘-off?", context: "Analyzing options" },
      { text: "Who owns this?", contourMarked: "Who OWNS↘ this?", context: "Assigning responsibility" },
    ],
    chineseComparison: "Chinese wh-questions use the same tone as statements (no rise); English is similar here.",
    difficulty: 1
  },
  {
    id: "list", name: "List Intonation", description: "Items in a list rise, with the final item falling to signal completion.",
    contourSymbol: "↗↗↘", contour: [0.5, 0.7, 0.5, 0.7, 0.5, 0.3],
    examples: [
      { text: "I need eggs, milk, and bread.", contourMarked: "I need EGGS↗, MILK↗, and BREAD↘.", context: "Shopping list" },
      { text: "Plan, build, and ship.", contourMarked: "PLAN↗, BUILD↗, and SHIP↘.", context: "Process steps" },
      { text: "Revenue, retention, and growth.", contourMarked: "REV-e-nue↗, re-TEN-tion↗, and GROWTH↘.", context: "Business metrics" },
    ],
    chineseComparison: "Chinese listing is relatively flat; English requires noticeable rising on each non-final item.",
    difficulty: 1
  },
  {
    id: "tag-confirm", name: "Tag Question (Confirming)", description: "Tag questions with falling intonation on the tag expect agreement.",
    contourSymbol: "→↘", contour: [0.5, 0.55, 0.6, 0.5, 0.3, 0.2],
    examples: [
      { text: "It's nice, isn't it?", contourMarked: "It's NICE↗, ISN'T↘ it?", context: "Expecting agreement" },
      { text: "That works, doesn't it?", contourMarked: "That WORKS↗, DOESN'T↘ it?", context: "Confirming consensus" },
    ],
    chineseComparison: "Chinese uses 对吧/是吧 which is relatively flat; English tag questions have distinct pitch movement.",
    difficulty: 2
  },
  {
    id: "tag-genuine", name: "Tag Question (Genuine)", description: "Tag questions with rising intonation on the tag genuinely ask for information.",
    contourSymbol: "→↗", contour: [0.5, 0.5, 0.5, 0.5, 0.65, 0.85],
    examples: [
      { text: "You sent it, didn't you?", contourMarked: "You sent it, DIDN'T you↗?", context: "Actually unsure" },
      { text: "She left already, didn't she?", contourMarked: "She left already, DIDN'T she↗?", context: "Seeking confirmation" },
    ],
    chineseComparison: "Rising tag = real question; falling tag = rhetorical. This distinction doesn't exist in Chinese.",
    difficulty: 2
  },
  {
    id: "choice", name: "Alternative Question", description: "In 'or' questions, the first option rises and the second falls.",
    contourSymbol: "↗↘", contour: [0.5, 0.7, 0.5, 0.5, 0.4, 0.2],
    examples: [
      { text: "Coffee or tea?", contourMarked: "COF↗fee or TEA↘?", context: "Offering a choice" },
      { text: "Should we push or wait?", contourMarked: "Should we PUSH↗ or WAIT↘?", context: "Decision making" },
    ],
    chineseComparison: "Chinese 还是 questions are relatively flat; English marks the contrast with pitch.",
    difficulty: 2
  },
  {
    id: "exclamation", name: "Exclamation (High Fall)", description: "Exclamations start high and fall dramatically, expressing strong emotion.",
    contourSymbol: "⤵", contour: [0.9, 0.85, 0.6, 0.35, 0.2, 0.1],
    examples: [
      { text: "That's amazing!", contourMarked: "That's a↑MA↘zing!", context: "Expressing delight" },
      { text: "Great stuff!", contourMarked: "↑GREAT↘ stuff!", context: "Praising work" },
      { text: "No way!", contourMarked: "↑NO↘ way!", context: "Disbelief" },
    ],
    chineseComparison: "Chinese exclamations use 太...了 with emphasis; English uses a wide pitch range that may feel exaggerated.",
    difficulty: 1
  },
  {
    id: "polite-request", name: "Polite Request (Gentle Rise)", description: "Polite requests use a slight rise at the end to soften the directive.",
    contourSymbol: "→↗", contour: [0.5, 0.5, 0.5, 0.5, 0.55, 0.65],
    examples: [
      { text: "Could you send that over?", contourMarked: "Could you send that O↗ver?", context: "Requesting action" },
      { text: "Would you mind checking?", contourMarked: "Would you mind CHECK↗ing?", context: "Soft request" },
    ],
    chineseComparison: "Chinese uses 请/麻烦 for politeness; English relies on tone — flat sounds rude.",
    difficulty: 2
  },
  {
    id: "sarcasm", name: "Sarcasm (Rise-Fall-Rise)", description: "Sarcastic intonation rises, falls, then rises again, contradicting the literal meaning.",
    contourSymbol: "↗↘↗", contour: [0.4, 0.7, 0.4, 0.3, 0.45, 0.6],
    examples: [
      { text: "Oh, that's great.", contourMarked: "Oh↗, that's GREAT↘↗.", context: "Meaning the opposite" },
      { text: "Well, that went well.", contourMarked: "WELL↗, that went WELL↘↗.", context: "Something went badly" },
    ],
    chineseComparison: "Chinese sarcasm relies more on word choice (好好好); English sarcasm is primarily tonal.",
    difficulty: 3
  },
  {
    id: "hesitation", name: "Hesitation (Level/Slight Rise)", description: "Pausing to think often produces a level or slightly rising tone, signaling continuation.",
    contourSymbol: "→...", contour: [0.5, 0.5, 0.52, 0.52, 0.53, 0.55],
    examples: [
      { text: "I think... maybe we should...", contourMarked: "I THINK→... maybe we SHOULD→...", context: "Thinking aloud" },
      { text: "So the thing is...", contourMarked: "So the THING→ is...", context: "Preparing for bad news" },
    ],
    chineseComparison: "Chinese uses 那个/就是 as fillers; English uses tone to signal 'I'm still talking'.",
    difficulty: 2
  },
  {
    id: "compound", name: "Compound Sentence", description: "In compound sentences, the first clause rises and the second clause falls.",
    contourSymbol: "↗, ↘", contour: [0.5, 0.6, 0.7, 0.5, 0.4, 0.2],
    examples: [
      { text: "I like the idea, but we need more data.", contourMarked: "I like the I↗DEA, but we need more DA↘TA.", context: "Partial agreement" },
      { text: "It works on paper, but let's test it.", contourMarked: "It works on PA↗PER, but let's TEST↘ it.", context: "Cautious optimism" },
    ],
    chineseComparison: "Chinese compound sentences are relatively flat between clauses; English marks the 'hinge point' with a rise.",
    difficulty: 2
  },
  {
    id: "conditional", name: "Conditional (If-Clause Rise)", description: "The 'if' clause rises, and the main clause falls — signaling condition then conclusion.",
    contourSymbol: "↗...↘", contour: [0.5, 0.55, 0.65, 0.7, 0.5, 0.2],
    examples: [
      { text: "If we ship by Friday, we'll hit the target.", contourMarked: "If we ship by FRI↗DAY, we'll hit the TAR↘GET.", context: "Setting conditions" },
      { text: "If you need anything, let me know.", contourMarked: "If you need ANY↗THING, let me KNOW↘.", context: "Offering help" },
    ],
    chineseComparison: "Chinese 如果...就... is structurally similar but without the pitch contrast.",
    difficulty: 2
  },
  {
    id: "emphasis-narrow", name: "Narrow Focus", description: "A single word is highlighted with a dramatic pitch peak, correcting or emphasizing.",
    contourSymbol: "→↑DUM↘→", contour: [0.4, 0.4, 0.9, 0.3, 0.3, 0.3],
    examples: [
      { text: "I said TUESDAY, not Thursday.", contourMarked: "I said ↑TUES↘day, not Thursday.", context: "Correcting" },
      { text: "SHE did it, not me.", contourMarked: "↑SHE↘ did it, not me.", context: "Shifting blame" },
    ],
    chineseComparison: "Chinese uses 是...的 for focus; English relies purely on pitch prominence on the focused word.",
    difficulty: 2
  },
  {
    id: "echo-question", name: "Echo Question (High Rise)", description: "Repeating something with a very high rise to express surprise or disbelief.",
    contourSymbol: "↑↗?!", contour: [0.4, 0.5, 0.6, 0.7, 0.85, 0.95],
    examples: [
      { text: "They cancelled the project?!", contourMarked: "They CANCELLED the PRO↑JECT↗?!", context: "Shock" },
      { text: "He said WHAT?!", contourMarked: "He said ↑WHAT↗?!", context: "Disbelief" },
    ],
    chineseComparison: "Chinese 什么?! uses emphasis but not as extreme a pitch range; English echo questions go very high.",
    difficulty: 2
  },
  {
    id: "reassurance", name: "Reassurance (Gentle Fall)", description: "Reassuring someone with a warm, gently falling tone that conveys calm certainty.",
    contourSymbol: "↘~", contour: [0.65, 0.6, 0.55, 0.5, 0.45, 0.4],
    examples: [
      { text: "It's going to be fine.", contourMarked: "It's going to be FINE↘~.", context: "Comforting" },
      { text: "Don't worry about it.", contourMarked: "Don't WORRY↘~ about it.", context: "Reassuring" },
    ],
    chineseComparison: "Chinese 没事的 uses a gentle tone too; the English version needs a wider but softer pitch range.",
    difficulty: 2
  },
  {
    id: "warning", name: "Warning (Rise then Sharp Fall)", description: "Warnings rise to a peak then drop sharply, signaling urgency.",
    contourSymbol: "↗↘!", contour: [0.4, 0.6, 0.85, 0.9, 0.4, 0.15],
    examples: [
      { text: "Be careful with that.", contourMarked: "Be CARE↗FUL↘ with that!", context: "Physical danger" },
      { text: "Watch out for scope creep.", contourMarked: "WATCH↗ OUT↘ for scope creep.", context: "Project warning" },
    ],
    chineseComparison: "Chinese 小心! is short and sharp; English warnings use a wider pitch arc.",
    difficulty: 2
  },
  {
    id: "parenthetical", name: "Parenthetical (Low Pitch Band)", description: "Aside/parenthetical comments are spoken in a lower, compressed pitch range.",
    contourSymbol: "(↓...↓)", contour: [0.3, 0.3, 0.32, 0.3, 0.3, 0.28],
    examples: [
      { text: "The project — which started in March — is on track.", contourMarked: "The PROJECT — (which started in March) — is on TRACK.", context: "Background info" },
      { text: "Sarah, by the way, already left.", contourMarked: "SARAH, (by the way), already LEFT.", context: "Aside comment" },
    ],
    chineseComparison: "Chinese parentheticals are not marked by pitch change; English uses a clear 'dip' in pitch.",
    difficulty: 3
  },
  {
    id: "continuation-rise", name: "Continuation Rise", description: "A slight rise at the end of a non-final phrase signals 'I'm not done yet'.",
    contourSymbol: "...↗,", contour: [0.5, 0.5, 0.5, 0.52, 0.58, 0.65],
    examples: [
      { text: "When I got to the office, ...", contourMarked: "When I got to the OF↗FICE,", context: "Setting the scene" },
      { text: "After the meeting, ...", contourMarked: "After the MEET↗ING,", context: "Temporal setup" },
    ],
    chineseComparison: "Chinese uses pause particles (啊, 呢) to signal continuation; English uses pitch rise.",
    difficulty: 2
  },
  {
    id: "implication", name: "Implication (Fall-Rise)", description: "A fall-rise on the last word implies 'but there's more to say' or reservation.",
    contourSymbol: "↘↗", contour: [0.6, 0.55, 0.35, 0.3, 0.4, 0.6],
    examples: [
      { text: "It's possible...", contourMarked: "It's POSS↘i↗ble...", context: "Implying doubt" },
      { text: "I suppose so...", contourMarked: "I sup↘POSE↗ so...", context: "Reluctant agreement" },
    ],
    chineseComparison: "This 'yes, but...' implication is entirely carried by tone in English; Chinese would add explicit words.",
    difficulty: 3
  },
  {
    id: "encouragement", name: "Encouragement (Bounce Up)", description: "Encouraging statements use a bouncy, upward-trending pitch to convey energy and positivity.",
    contourSymbol: "↗!", contour: [0.4, 0.5, 0.55, 0.65, 0.75, 0.8],
    examples: [
      { text: "You've got this!", contourMarked: "You've GOT↗ THIS↗!", context: "Motivating" },
      { text: "Keep going, you're doing great!", contourMarked: "Keep GO↗ING, you're doing GREAT↗!", context: "Encouraging" },
    ],
    chineseComparison: "Chinese 加油 is a fixed expression; English encouragement relies on rising, energetic pitch.",
    difficulty: 1
  },
];


// ═══════════════════════════════════════════════════════════════════════════
// 4. ShadowingScript — Structured Shadowing Practice Plans
// ═══════════════════════════════════════════════════════════════════════════

/**
 * @typedef {Object} ShadowingStep
 * @property {number} step - Step number (1-4)
 * @property {string} name - Step name
 * @property {string} instruction - What the user should do
 * @property {string[]} actions - Specific sub-actions
 * @property {number} durationMs - Estimated duration in milliseconds
 * @property {string} icon - Text icon for UI
 */

/**
 * @typedef {Object} ShadowingPlan
 * @property {string} sentence - The target sentence
 * @property {string[]} chunks - Sentence broken into 2-3 word chunks
 * @property {ShadowingStep[]} steps - The 4 practice steps
 * @property {number} totalDurationMs - Total estimated time
 * @property {Object} progress - Track completion per step
 */

/**
 * Generates structured shadowing practice plans for any sentence.
 * The 4-step method: Listen → Chunk → Shadow → Solo.
 */
export class ShadowingScript {
  /**
   * Create a shadowing plan for a sentence.
   * @param {Object} sentenceObj - Sentence object from curriculum (with text, words, stress, ipa)
   * @returns {ShadowingPlan}
   */
  static createPlan(sentenceObj) {
    const { text, words, stress, ipa } = sentenceObj;
    const chunks = ShadowingScript._chunkSentence(words, stress);
    const wordCount = words.length;
    const baseDuration = Math.max(2000, wordCount * 400);

    const steps = [
      {
        step: 1,
        name: "Deep Listen",
        instruction: "Listen 3 times: full speed, slow (0.7x), full speed. Focus on the rhythm, not individual words.",
        actions: [
          `Listen at full speed — feel the overall rhythm shape`,
          `Listen at 0.7x speed — notice which words are LOUD and which nearly vanish`,
          `Listen at full speed again — now hear the pattern clearly`,
        ],
        durationMs: baseDuration * 3 + 2000,
        icon: "ear",
      },
      {
        step: 2,
        name: "Chunk & Repeat",
        instruction: "Break the sentence into small chunks. Repeat each chunk 3 times before moving to the next.",
        actions: chunks.map(
          (chunk, i) =>
            `Chunk ${i + 1}: "${chunk.text}" [${chunk.stressMarked}] — repeat 3x`
        ),
        durationMs: chunks.length * baseDuration * 0.6 * 3 + 1000,
        icon: "puzzle",
      },
      {
        step: 3,
        name: "Shadow",
        instruction: "Speak simultaneously with the audio. Match the timing, stress, and intonation exactly.",
        actions: [
          `Play audio and speak along — don't wait, speak AT THE SAME TIME`,
          `Focus on matching the RHYTHM, not perfect pronunciation`,
          `Repeat 3-5 times until you feel locked in with the audio`,
        ],
        durationMs: baseDuration * 4 + 2000,
        icon: "shadow",
      },
      {
        step: 4,
        name: "Solo Performance",
        instruction: "Speak the sentence alone from memory, then compare with the original.",
        actions: [
          `Say the full sentence without audio — trust your muscle memory`,
          `Record yourself if possible`,
          `Compare your version with the original — check stress and timing`,
          `Rate yourself: rhythm (1-5), stress (1-5), naturalness (1-5)`,
        ],
        durationMs: baseDuration * 3 + 3000,
        icon: "mic",
      },
    ];

    const totalDurationMs = steps.reduce((sum, s) => sum + s.durationMs, 0);

    return {
      sentence: text,
      ipa: ipa || "",
      chunks,
      steps,
      totalDurationMs,
      estimatedMinutes: Math.ceil(totalDurationMs / 60000),
      progress: { 1: false, 2: false, 3: false, 4: false },
    };
  }

  /**
   * Break words into 2-3 word chunks based on stress patterns.
   * Stress boundaries (high→low transitions) define natural chunk breaks.
   * @param {string[]} words
   * @param {number[]} stress
   * @returns {Array<{text: string, words: string[], stress: number[], stressMarked: string}>}
   */
  static _chunkSentence(words, stress) {
    if (!words || words.length === 0) return [];
    if (words.length <= 3) {
      return [ShadowingScript._makeChunk(words, stress, 0, words.length)];
    }

    const chunks = [];
    let start = 0;
    while (start < words.length) {
      let end = Math.min(start + 3, words.length);
      // Try to break at a stress boundary (after a stressed word followed by unstressed)
      if (end < words.length && end - start >= 2) {
        for (let i = start + 2; i <= Math.min(start + 3, words.length - 1); i++) {
          if ((stress[i - 1] || 0) >= 0.7 && (stress[i] || 0) < 0.5) {
            end = i;
            break;
          }
        }
      }
      // Don't leave a single word dangling at the end
      if (words.length - end === 1) end = words.length;
      chunks.push(ShadowingScript._makeChunk(words, stress, start, end));
      start = end;
    }
    return chunks;
  }

  /** Build a chunk object from a word/stress range. */
  static _makeChunk(words, stress, start, end) {
    const chunkWords = words.slice(start, end);
    const chunkStress = (stress || []).slice(start, end);
    const stressMarked = chunkWords
      .map((w, i) => {
        const s = chunkStress[i] || 0;
        if (s >= 0.8) return w.toUpperCase();
        if (s >= 0.5) return w.charAt(0).toUpperCase() + w.slice(1);
        return w.toLowerCase();
      })
      .join(" ");
    return { text: chunkWords.join(" "), words: chunkWords, stress: chunkStress, stressMarked };
  }

  /**
   * Mark a step as completed and return updated progress.
   * @param {ShadowingPlan} plan
   * @param {number} stepNumber - 1-4
   * @returns {ShadowingPlan}
   */
  static completeStep(plan, stepNumber) {
    plan.progress[stepNumber] = true;
    return plan;
  }

  /**
   * Check if all steps are completed.
   * @param {ShadowingPlan} plan
   * @returns {boolean}
   */
  static isComplete(plan) {
    return Object.values(plan.progress).every(Boolean);
  }

  /**
   * Get the next incomplete step.
   * @param {ShadowingPlan} plan
   * @returns {ShadowingStep|null}
   */
  static nextStep(plan) {
    for (const step of plan.steps) {
      if (!plan.progress[step.step]) return step;
    }
    return null;
  }
}


// ═══════════════════════════════════════════════════════════════════════════
// 5. WeaknessProfiler — Analyze User Attempts & Build Weakness Profile
// ═══════════════════════════════════════════════════════════════════════════

/**
 * @typedef {Object} UserAttempt
 * @property {number} sentenceId - Which sentence was practiced
 * @property {number} timestamp - Unix timestamp ms
 * @property {Object} scores - Scores for different dimensions (0-1)
 * @property {number} scores.stress - Stress accuracy
 * @property {number} scores.intonation - Intonation accuracy
 * @property {number} scores.linking - Connected speech quality
 * @property {number} scores.speed - Appropriate pacing
 * @property {number} scores.vowels - Vowel accuracy
 * @property {number} scores.consonants - Consonant accuracy
 */

/**
 * @typedef {Object} WeaknessReport
 * @property {string} generated - ISO timestamp of report generation
 * @property {Array<{category: string, score: number, description: string, exercises: string[]}>} topWeaknesses
 * @property {Object<string, number>} categoryAverages - Average score per category
 * @property {Array<{date: string, average: number}>} trend - Last 7 days performance trend
 * @property {string[]} chineseSpecificWarnings - Warnings based on known L1 transfer issues
 * @property {string} overallLevel - "beginner" | "intermediate" | "advanced"
 * @property {number} totalAttempts - Total practice count
 */

/**
 * Analyzes all user attempts to build a comprehensive weakness profile.
 * Generates personalized reports with recommended practice sentences.
 */
export class WeaknessProfiler {
  constructor() {
    /** @type {UserAttempt[]} */
    this.attempts = [];
  }

  /**
   * Record a new practice attempt.
   * @param {UserAttempt} attempt
   */
  recordAttempt(attempt) {
    this.attempts.push({
      ...attempt,
      timestamp: attempt.timestamp || Date.now(),
    });
  }

  /**
   * Import multiple attempts (e.g., from localStorage).
   * @param {UserAttempt[]} attempts
   */
  importAttempts(attempts) {
    this.attempts = [...this.attempts, ...attempts];
    this.attempts.sort((a, b) => a.timestamp - b.timestamp);
  }

  /**
   * Generate a full weakness report.
   * @param {Object[]} [sentencePool] - Available sentences for exercise recommendations
   * @returns {WeaknessReport}
   */
  generateReport(sentencePool = []) {
    const categories = ["stress", "intonation", "linking", "speed", "vowels", "consonants"];
    const categoryAverages = {};

    for (const cat of categories) {
      const scores = this.attempts
        .map((a) => (a.scores && a.scores[cat] !== undefined ? a.scores[cat] : null))
        .filter((s) => s !== null);
      categoryAverages[cat] = scores.length > 0
        ? scores.reduce((a, b) => a + b, 0) / scores.length
        : 0.5;
    }

    // Sort categories by score (lowest = weakest)
    const sorted = categories
      .map((cat) => ({ category: cat, score: categoryAverages[cat] }))
      .sort((a, b) => a.score - b.score);

    const topWeaknesses = sorted.slice(0, 3).map((item) => ({
      category: item.category,
      score: Math.round(item.score * 100) / 100,
      description: WEAKNESS_DESCRIPTIONS[item.category] || "Practice needed",
      exercises: this._recommendExercises(item.category, sentencePool),
    }));

    // 7-day trend
    const trend = this._calculateTrend();

    // Chinese-specific warnings
    const chineseSpecificWarnings = this._getChineseWarnings(categoryAverages);

    // Overall level
    const overallAvg = Object.values(categoryAverages).reduce((a, b) => a + b, 0) / categories.length;
    const overallLevel = overallAvg >= 0.75 ? "advanced" : overallAvg >= 0.5 ? "intermediate" : "beginner";

    return {
      generated: new Date().toISOString(),
      topWeaknesses,
      categoryAverages,
      trend,
      chineseSpecificWarnings,
      overallLevel,
      totalAttempts: this.attempts.length,
    };
  }

  /** Calculate 7-day performance trend. */
  _calculateTrend() {
    const now = Date.now();
    const msPerDay = 86400000;
    const trend = [];

    for (let d = 6; d >= 0; d--) {
      const dayStart = now - (d + 1) * msPerDay;
      const dayEnd = now - d * msPerDay;
      const dayAttempts = this.attempts.filter(
        (a) => a.timestamp >= dayStart && a.timestamp < dayEnd
      );

      const date = new Date(dayStart).toISOString().slice(0, 10);
      if (dayAttempts.length === 0) {
        trend.push({ date, average: null, count: 0 });
      } else {
        const allScores = dayAttempts.flatMap((a) =>
          Object.values(a.scores || {}).filter((s) => typeof s === "number")
        );
        const avg = allScores.length > 0
          ? allScores.reduce((a, b) => a + b, 0) / allScores.length
          : null;
        trend.push({ date, average: avg !== null ? Math.round(avg * 100) / 100 : null, count: dayAttempts.length });
      }
    }
    return trend;
  }

  /** Recommend exercises for a weak category. */
  _recommendExercises(category, sentencePool) {
    const recs = CATEGORY_EXERCISES[category] || [];
    if (sentencePool.length === 0) return recs.slice(0, 5);

    // Find sentences from pool that have relevant characteristics
    const relevant = sentencePool.filter((s) => {
      if (category === "stress" && s.stress) {
        const variation = Math.max(...s.stress) - Math.min(...s.stress);
        return variation > 0.5;
      }
      if (category === "linking" && s.text) {
        return /[bcdfghjklmnpqrstvwxyz]\s+[aeiou]/i.test(s.text);
      }
      if (category === "speed" && s.words) {
        return s.words.length >= 7;
      }
      return true;
    });

    const picked = relevant.slice(0, 3).map((s) => s.text);
    return [...picked, ...recs.slice(0, 5 - picked.length)];
  }

  /** Generate Chinese-specific pronunciation warnings. */
  _getChineseWarnings(averages) {
    const warnings = [];

    if (averages.stress < 0.6) {
      warnings.push(
        "重音：中文是音节等时语言，英语是重音等时语言。你可能把每个音节都读得一样重。练习夸张地重读实词，同时把虚词轻轻带过。"
      );
    }
    if (averages.intonation < 0.6) {
      warnings.push(
        "语调：中文的声调是固定的（每个字有自己的声调），英语的语调是整句变化的（升降调改变句子意思）。练习区分 'You like it.'（陈述句↘）和 'You like it?'（疑问句↗）。"
      );
    }
    if (averages.linking < 0.6) {
      warnings.push(
        "连读：中文的每个字是独立的，英语的词会连在一起。练习辅音-元音连读：'pick it up' = /pɪ.kɪ.tʌp/（3个音节，不是3个词）。"
      );
    }
    if (averages.vowels < 0.6) {
      warnings.push(
        "元音：中文的元音区分比英语少。注意：/ɪ/ 和 /iː/（bit 和 beat）、/æ/ 和 /ɛ/（bad 和 bed），以及几乎出现在每个轻读音节中的弱元音 /ə/。"
      );
    }
    if (averages.consonants < 0.6) {
      warnings.push(
        "辅音：中国人常见问题：/θ/ 和 /ð/（咬舌音 th）、/v/ 和 /w/ 混淆、词尾辅音串（/sts/、/sks/），以及词尾的暗化 /l/（如 feel、call）。"
      );
    }
    if (averages.speed < 0.6) {
      warnings.push(
        "节奏：你的语速可能太均匀了。英语不是说得更快，而是压缩轻读音节、拉长重读音节。整体速度来自于这种节奏感。"
      );
    }

    return warnings;
  }

  /**
   * Get improvement percentage over the last N attempts.
   * @param {number} [n=20] - Number of recent attempts to compare against earlier ones
   * @returns {Object<string, number>} - Category → improvement percentage
   */
  getImprovement(n = 20) {
    if (this.attempts.length < n * 2) return {};

    const categories = ["stress", "intonation", "linking", "speed", "vowels", "consonants"];
    const early = this.attempts.slice(0, n);
    const recent = this.attempts.slice(-n);
    const result = {};

    for (const cat of categories) {
      const earlyAvg = early.reduce((s, a) => s + ((a.scores && a.scores[cat]) || 0), 0) / n;
      const recentAvg = recent.reduce((s, a) => s + ((a.scores && a.scores[cat]) || 0), 0) / n;
      result[cat] = earlyAvg > 0 ? Math.round(((recentAvg - earlyAvg) / earlyAvg) * 100) : 0;
    }
    return result;
  }
}

const WEAKNESS_DESCRIPTIONS = {
  stress: "你倾向于把每个音节读得一样重。重读音节要读得更响、更长，轻读音节要弱化、缩短。",
  intonation: "你的语调变化范围可能太窄了。英语靠声调的高低起伏来表达意思——练习夸张地升调和降调。",
  linking: "词和词之间听起来太分离了。练习辅音-元音连读和常见的弱化形式。",
  speed: "你的节奏可能太均匀了。重读音节要占更多时间，轻读音节要快速带过。",
  vowels: "一些元音需要注意。重点练习弱读音 /ə/，以及相似元音的区分，如 /ɪ/ 和 /iː/。",
  consonants: "一些辅音需要练习。重点关注 /θ/、/ð/（咬舌音）、词尾辅音串，以及 /v/ 和 /w/ 的区别。",
};

const CATEGORY_EXERCISES = {
  stress: [
    "Let's kick things off（重读：KICK、OFF）",
    "I want to flag something（重读：FLAG、SOMETHING）",
    "That's a fascinating question（重读：FASCINATING、QUESTION）",
  ],
  intonation: [
    "Do you want some?（升调疑问句 ↗）",
    "I need eggs, milk, and bread（列举语调 ↗↗↘）",
    "It's nice, isn't it?（反意疑问句 ↗↘）",
  ],
  linking: [
    "pick it up → pi-ki-tup（辅音→元音连读）",
    "don't you → dontchu（同化连读）",
    "turn it off → tur-ni-toff（连读）",
  ],
  speed: [
    "I want to make sure we're all on the same page（压缩：I-want-to、we're-all-on-the）",
    "Just to set the agenda real quick（压缩：Just-to、the-agenda）",
    "Thanks everyone I'll give you five minutes back（压缩：I'll-give-you）",
  ],
  vowels: [
    "练习：bit /ɪ/ 和 beat /iː/ 的区别",
    "练习：bad /æ/ 和 bed /ɛ/ 和 bud /ʌ/ 的区别",
    "练习：agenda 中轻读的 'a' 是 /ə/，不是 /æ/",
  ],
  consonants: [
    "练习：think /θ/ — 舌头伸到牙齿之间",
    "练习：the /ð/ — 浊咬舌音",
    "练习：feel /fiːl/ — 词尾的暗化 L",
  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// 6. CurriculumEngine — 30-Day Master Curriculum
// ═══════════════════════════════════════════════════════════════════════════

/**
 * @typedef {Object} DayConfig
 * @property {number} day - Day number (1-30)
 * @property {string} theme - Day theme/title
 * @property {string} category - Theme category
 * @property {string} focus - Pronunciation focus for the day
 * @property {number} difficulty - 1-3
 * @property {Object[]} sentences - Array of 30 sentence objects
 */

/**
 * 30-day master curriculum engine.
 * Days 1-14: references existing curated content from data/ files.
 * Days 15-30: seed sentences + procedurally generated content using pattern rules.
 */
export class CurriculumEngine {
  constructor() {
    /** @type {DayConfig[]} */
    this._curriculum = CURRICULUM_MAP;
    this._patternLibrary = new PatternLibrary();
    this._speechRules = new ConnectedSpeechRules();
  }

  /**
   * Get the full curriculum overview (30 days).
   * @returns {Array<{day: number, theme: string, category: string, focus: string, difficulty: number}>}
   */
  getOverview() {
    return this._curriculum.map(({ day, theme, category, focus, difficulty }) => ({
      day, theme, category, focus, difficulty,
    }));
  }

  /**
   * Get content for a specific day.
   * Days 1-14 return a reference to load from data/ files.
   * Days 15-30 return generated sentences (5 seeds + 25 generated).
   * @param {number} dayNumber - 1-30
   * @returns {DayConfig|null}
   */
  getDay(dayNumber) {
    const config = this._curriculum.find((d) => d.day === dayNumber);
    if (!config) return null;

    if (dayNumber <= 14) {
      return { ...config, source: "curated", loadFrom: `data/day${dayNumber === 1 ? "" : dayNumber}.js` };
    }

    // Days 15-30: seed sentences + generated
    const seeds = DAY_SEEDS[dayNumber] || [];
    const generated = this._generateSentences(dayNumber, config, 30 - seeds.length);
    return {
      ...config,
      source: "hybrid",
      sentences: [...seeds, ...generated],
    };
  }

  /**
   * Generate sentences for a day using pattern rules and templates.
   * @param {number} dayNumber
   * @param {DayConfig} config
   * @param {number} count - How many to generate
   * @returns {Object[]}
   */
  _generateSentences(dayNumber, config, count) {
    const seed = hashStr(`curriculum-v1-day-${dayNumber}`);
    const rng = mulberry32(seed);
    const baseId = (dayNumber - 1) * 30 + (30 - count) + 1;
    const templates = GENERATION_TEMPLATES[config.category] || GENERATION_TEMPLATES["general"];
    const sentences = [];

    for (let i = 0; i < count; i++) {
      const tpl = templates[i % templates.length];
      const patternRef = this._patternLibrary.random(config.difficulty, rng);
      const filledText = this._fillTemplate(tpl.template, rng);
      const words = filledText.split(/\s+/);
      const stress = this._deriveStress(words, tpl.stressHints || [], rng);

      sentences.push({
        id: baseId + i,
        cat: config.category,
        scene: tpl.scene || config.theme.toLowerCase(),
        text: filledText,
        words,
        stress,
        ipa: tpl.ipa || "",
        meaning: tpl.meaning || "",
        cn: tpl.cn || "",
        trap: tpl.trap || "",
        tip: `Rhythm: ${patternRef.notation} — ${patternRef.chineseNote}`,
        pattern: tpl.pattern || "",
        variants: (tpl.variants || []).map((v) => this._fillTemplate(v, rng)),
      });
    }
    return sentences;
  }

  /** Fill template slots with vocabulary. */
  _fillTemplate(template, rng) {
    const SLOTS = {
      "{NAME}": () => pick(GEN_NAMES, rng),
      "{DEPT}": () => pick(GEN_DEPTS, rng),
      "{TIME}": () => pick(GEN_TIMES, rng),
      "{ADJ}": () => pick(GEN_ADJS, rng),
      "{EMOTION}": () => pick(GEN_EMOTIONS, rng),
      "{TOPIC}": () => pick(GEN_TOPICS, rng),
      "{IDIOM}": () => pick(GEN_IDIOMS, rng),
    };
    let result = template;
    for (const [slot, fn] of Object.entries(SLOTS)) {
      while (result.includes(slot)) {
        result = result.replace(slot, fn());
      }
    }
    return result;
  }

  /**
   * Derive stress pattern for generated words using linguistic rules.
   * Content words (nouns, verbs, adjectives, adverbs) get stress;
   * function words (articles, prepositions, pronouns, auxiliaries) get reduced.
   * @param {string[]} words
   * @param {number[]} hints - Optional manual stress hints
   * @param {Function} rng
   * @returns {number[]}
   */
  _deriveStress(words, hints, rng) {
    if (hints.length === words.length) return hints;

    return words.map((word, i) => {
      if (i < hints.length && hints[i] !== undefined) return hints[i];
      const lower = word.toLowerCase().replace(/[^a-z']/g, "");
      if (FUNCTION_WORDS.has(lower)) return 0.2 + rng() * 0.1;
      if (SEMI_STRESS_WORDS.has(lower)) return 0.3 + rng() * 0.1;
      return 0.8 + rng() * 0.2;
    });
  }

  /**
   * Get recommended patterns to practice for a given day.
   * @param {number} dayNumber
   * @returns {RhythmPattern[]}
   */
  getDayPatterns(dayNumber) {
    const config = this._curriculum.find((d) => d.day === dayNumber);
    if (!config) return [];
    return this._patternLibrary.byDifficulty(config.difficulty).slice(0, 5);
  }

  /**
   * Get connected speech rules relevant to a day's content.
   * @param {number} dayNumber
   * @returns {SpeechRule[]}
   */
  getDaySpeechRules(dayNumber) {
    const config = this._curriculum.find((d) => d.day === dayNumber);
    if (!config) return [];
    return this._speechRules.byDifficulty(config.difficulty).slice(0, 4);
  }
}

// ── Function word sets for stress derivation ────────────────────────────
const FUNCTION_WORDS = new Set([
  "a", "an", "the", "is", "am", "are", "was", "were", "be", "been", "being",
  "do", "does", "did", "have", "has", "had", "will", "would", "shall", "should",
  "can", "could", "may", "might", "must", "to", "of", "in", "on", "at", "by",
  "for", "with", "from", "up", "but", "and", "or", "nor", "if", "than", "that",
  "as", "it", "its", "he", "she", "we", "they", "me", "him", "her", "us", "them",
  "my", "your", "his", "our", "their", "this", "these", "those", "some", "any",
]);

const SEMI_STRESS_WORDS = new Set([
  "not", "just", "still", "also", "even", "only", "very", "really", "quite",
  "much", "more", "most", "here", "there", "now", "then", "so", "too",
]);

// ── Vocabulary pools for generation ─────────────────────────────────────
const GEN_NAMES = ["Sarah", "Michael", "David", "Emma", "James", "Lisa", "Tom", "Rachel", "Kevin", "Anna", "Chris", "Mark", "Sophie", "Alex", "Laura"];
const GEN_DEPTS = ["engineering", "marketing", "sales", "design", "product", "finance", "operations"];
const GEN_TIMES = ["Monday", "Friday", "next week", "end of month", "tomorrow", "this quarter", "end of year"];
const GEN_ADJS = ["critical", "strategic", "compelling", "robust", "scalable", "flexible", "pivotal"];
const GEN_EMOTIONS = ["frustrated", "excited", "concerned", "grateful", "overwhelmed", "confident", "anxious", "hopeful"];
const GEN_TOPICS = ["the roadmap", "the launch", "the budget", "the pipeline", "the strategy", "team morale", "the deadline"];
const GEN_IDIOMS = ["hit the nail on the head", "break the ice", "the ball is in your court", "back to square one", "cut to the chase", "on the same page", "the elephant in the room", "burn the midnight oil", "think outside the box", "go the extra mile"];

// ── 30-Day Curriculum Map ───────────────────────────────────────────────
const CURRICULUM_MAP = [
  // Days 1-5: Meetings & Work Communication
  { day: 1,  theme: "Meetings & Alignment",      category: "meetings",      focus: "Stress-timed rhythm basics",         difficulty: 1 },
  { day: 2,  theme: "Negotiations & Persuasion",  category: "negotiation",   focus: "Content word stress",                difficulty: 1 },
  { day: 3,  theme: "Email & Written→Spoken",      category: "emails",        focus: "Weak forms in function words",       difficulty: 1 },
  { day: 4,  theme: "Status Updates & Reports",   category: "reporting",     focus: "Falling intonation for statements",  difficulty: 1 },
  { day: 5,  theme: "Feedback & Reviews",          category: "feedback",      focus: "Contrastive stress for emphasis",    difficulty: 2 },

  // Days 6-10: Casual Conversation & Socializing
  { day: 6,  theme: "Small Talk & Openers",        category: "small-talk",    focus: "Linking consonant→vowel",            difficulty: 1 },
  { day: 7,  theme: "Food & Dining",               category: "food",          focus: "Rising intonation for offers",       difficulty: 1 },
  { day: 8,  theme: "Travel & Adventures",          category: "travel",        focus: "List intonation",                    difficulty: 1 },
  { day: 9,  theme: "Sports & Fitness",             category: "sports",        focus: "Exclamation patterns",               difficulty: 1 },
  { day: 10, theme: "Music, Film & Culture",        category: "music",         focus: "Phrasal verb stress (PICK it UP)",   difficulty: 1 },

  // Days 11-15: Business Negotiation & Persuasion
  { day: 11, theme: "Sales & Pitching",             category: "sales",         focus: "Persuasive intonation (fall-rise)",  difficulty: 2 },
  { day: 12, theme: "Strategy & Decision Making",   category: "strategy",      focus: "Compound noun stress (ROAD-map)",    difficulty: 2 },
  { day: 13, theme: "Brainstorming & Ideas",        category: "brainstorming", focus: "Continuation rise",                  difficulty: 2 },
  { day: 14, theme: "Interviews & Self-Presentation", category: "interviews", focus: "Rhythm in longer sentences",          difficulty: 2 },
  { day: 15, theme: "Delegation & Leadership",      category: "leadership",    focus: "Assimilation (don'tchu, wouldju)",   difficulty: 2 },

  // Days 16-20: Storytelling & Presentation
  { day: 16, theme: "Storytelling Basics",          category: "storytelling",  focus: "Pacing and dramatic pauses",          difficulty: 2 },
  { day: 17, theme: "Presenting Data & Results",    category: "presenting",    focus: "Number stress and data rhythm",       difficulty: 2 },
  { day: 18, theme: "Persuasive Speaking",          category: "persuasion",    focus: "Parallel structure rhythm",           difficulty: 2 },
  { day: 19, theme: "Public Speaking Openings",     category: "speaking",      focus: "Hook intonation (attention grabbing)", difficulty: 2 },
  { day: 20, theme: "Handling Q&A",                 category: "qa",            focus: "Wh-question intonation",              difficulty: 2 },

  // Days 21-25: Emotions & Conflict Resolution
  { day: 21, theme: "Expressing Emotions",          category: "emotions",      focus: "Pitch range for feeling (wide = expressive)", difficulty: 2 },
  { day: 22, theme: "Disagreeing Politely",         category: "conflict",      focus: "Hedging intonation (I'd push back)",  difficulty: 2 },
  { day: 23, theme: "Apologizing & Repairing",      category: "apology",       focus: "Gentle falling tone for sincerity",   difficulty: 2 },
  { day: 24, theme: "Encouraging & Motivating",     category: "encouragement", focus: "Rising energy patterns",              difficulty: 2 },
  { day: 25, theme: "Networking & Relationship Building", category: "networking", focus: "Tag questions (It's nice, isn't it?)", difficulty: 2 },

  // Days 26-30: Advanced Idioms & Culture
  { day: 26, theme: "Idioms in the Workplace",      category: "idioms",        focus: "Stress within idioms (elephant in the ROOM)", difficulty: 3 },
  { day: 27, theme: "Sarcasm & Humor",              category: "humor",         focus: "Rise-fall-rise for sarcasm",          difficulty: 3 },
  { day: 28, theme: "Cultural References & Slang",  category: "culture",       focus: "Contraction mastery (gonna, wanna)",  difficulty: 3 },
  { day: 29, theme: "Advanced Debate & Persuasion",  category: "debate",        focus: "Complex intonation chains",           difficulty: 3 },
  { day: 30, theme: "Graduation: Full Integration",  category: "integration",   focus: "All patterns combined — free practice", difficulty: 3 },
];

// ── Seed sentences for generated days (15-30) ───────────────────────────
// Each day has 5 hand-crafted seed sentences; the rest are generated.
const DAY_SEEDS = {
  15: [
    { id: 421, cat: "leadership", scene: "delegate", text: "I need you to own this completely", words: ["I","need","you","to","own","this","completely"], stress: [.2,1,.3,.2,1,1,1], ipa: "/aɪ niːd juː tə oʊn ðɪs kəmˈpliːtli/", meaning: "Assigning full ownership of a task", cn: "我需要你完全负责这件事", trap: "I want you to be responsible for this task", tip: "NEED, OWN, THIS, COMPLETELY — authority with clarity", pattern: "I need you to + [verb] + this + [adverb]", variants: ["Take full ownership of this", "This is yours to drive"] },
    { id: 422, cat: "leadership", scene: "empower", text: "I trust your judgment on this", words: ["I","trust","your","judgment","on","this"], stress: [.2,1,.3,1,.3,1], ipa: "/aɪ trʌst jɔːr ˈdʒʌdʒmənt ɒn ðɪs/", meaning: "Showing confidence in someone's decision-making", cn: "这件事我相信你的判断", trap: "I believe you can make a good decision", tip: "TRUST, JUDGMENT, THIS — three pillars of empowerment", pattern: "I trust your + [noun] + on this", variants: ["I have full confidence in you", "Your call on this one"] },
    { id: 423, cat: "leadership", scene: "assign", text: "Can you take point on this?", words: ["Can","you","take","point","on","this"], stress: [.3,.3,1,1,.3,1], ipa: "/kæn juː teɪk pɔɪnt ɒn ðɪs/", meaning: "Asking someone to lead a task", cn: "你能来牵头负责这个吗", trap: "Would you like to be the leader of this project?", tip: "TAKE POINT and THIS — military metaphor for leading", pattern: "Can you take point on + [topic]?", variants: ["Would you lead this?", "Can you spearhead this effort?"] },
    { id: 424, cat: "leadership", scene: "prioritize", text: "Let's focus on what moves the needle", words: ["Let's","focus","on","what","moves","the","needle"], stress: [.3,1,.3,1,1,.2,1], ipa: "/lɛts ˈfoʊkəs ɒn wɒt muːvz ðə ˈniːdl/", meaning: "Directing attention to high-impact work", cn: "让我们关注能带来实质影响的事", trap: "We should work on important things only", tip: "FOCUS, WHAT, MOVES, NEEDLE — strategic clarity", pattern: "Let's focus on what + [verb] + the + [noun]", variants: ["Prioritize what actually matters", "Focus on impact, not activity"] },
    { id: 425, cat: "leadership", scene: "feedback", text: "Here's what I'd suggest going forward", words: ["Here's","what","I'd","suggest","going","forward"], stress: [1,1,.3,1,1,1], ipa: "/hɪrz wɒt aɪd səˈdʒɛst ˈɡoʊɪŋ ˈfɔːrwərd/", meaning: "Offering constructive direction", cn: "以下是我建议接下来怎么做", trap: "This is my recommendation for the future", tip: "HERE'S WHAT, SUGGEST, GOING FORWARD — advisory tone", pattern: "Here's what I'd suggest + [time phrase]", variants: ["My suggestion would be", "Going forward I'd recommend"] },
  ],
  16: [
    { id: 451, cat: "storytelling", scene: "opening", text: "So picture this — it's Friday afternoon", words: ["So","picture","this","it's","Friday","afternoon"], stress: [.3,1,1,.3,1,1], ipa: "/soʊ ˈpɪktʃər ðɪs ɪts ˈfraɪdeɪ ˌæftərˈnuːn/", meaning: "Setting the scene for a story", cn: "来想象一下——周五下午", trap: "I will tell you what happened on Friday", tip: "PICTURE THIS — cinematic setup, dramatic pause after", pattern: "So picture this — [setting]", variants: ["Imagine this", "Here's the scene"] },
    { id: 452, cat: "storytelling", scene: "twist", text: "And then out of nowhere", words: ["And","then","out","of","nowhere"], stress: [.3,.3,1,.2,1], ipa: "/ænd ðɛn aʊt əv ˈnoʊwɛr/", meaning: "Introducing a surprise twist", cn: "然后突然之间", trap: "Then something unexpected happened", tip: "OUT of NOWHERE — stress builds the suspense", pattern: "And then + [surprise element]", variants: ["Out of the blue", "Then boom, just like that"] },
    { id: 453, cat: "storytelling", scene: "buildup", text: "The whole room just went dead silent", words: ["The","whole","room","just","went","dead","silent"], stress: [.2,1,1,.3,1,1,1], ipa: "/ðə hoʊl ruːm dʒʌst wɛnt dɛd ˈsaɪlənt/", meaning: "Describing a dramatic moment", cn: "整个房间瞬间鸦雀无声", trap: "Everyone in the room became very quiet", tip: "WHOLE ROOM, WENT DEAD SILENT — four heavy beats paint the silence", pattern: "The whole + [place] + went + [adjective]", variants: ["You could hear a pin drop", "Complete silence"] },
    { id: 454, cat: "storytelling", scene: "climax", text: "I couldn't believe what I was hearing", words: ["I","couldn't","believe","what","I","was","hearing"], stress: [.2,1,1,1,.2,.2,1], ipa: "/aɪ ˈkʊdənt bɪˈliːv wɒt aɪ wɒz ˈhɪrɪŋ/", meaning: "Expressing shock in a story", cn: "我简直不敢相信我听到的", trap: "I was very surprised by what was said", tip: "COULDN'T BELIEVE WHAT, HEARING — disbelief builds across the sentence", pattern: "I couldn't believe + [what clause]", variants: ["My jaw just dropped", "I was absolutely speechless"] },
    { id: 455, cat: "storytelling", scene: "closing", text: "Long story short, it all worked out", words: ["Long","story","short","it","all","worked","out"], stress: [1,1,1,.2,.3,1,1], ipa: "/lɒŋ ˈstɔːri ʃɔːrt ɪt ɔːl wɜːrkt aʊt/", meaning: "Wrapping up a story quickly", cn: "长话短说，最后都顺利了", trap: "To summarize the story, everything was fine", tip: "LONG STORY SHORT — three equal beats, then pause — WORKED OUT", pattern: "Long story short, + [resolution]", variants: ["To make a long story short", "Bottom line, it all came together"] },
  ],
  17: [
    { id: 481, cat: "presenting", scene: "data", text: "As you can see from the numbers", words: ["As","you","can","see","from","the","numbers"], stress: [.2,.3,.3,1,.3,.2,1], ipa: "/æz juː kən siː frɒm ðə ˈnʌmbərz/", meaning: "Directing attention to data", cn: "从数据中你们可以看到", trap: "If you look at the numbers you will understand", tip: "SEE and NUMBERS carry the weight — the rest glides", pattern: "As you can see from + [data source]", variants: ["The data shows us that", "Looking at the numbers here"] },
    { id: 482, cat: "presenting", scene: "trend", text: "We're seeing a steady uptick across the board", words: ["We're","seeing","a","steady","uptick","across","the","board"], stress: [.3,1,.2,1,1,.3,.2,1], ipa: "/wɪər ˈsiːɪŋ ə ˈstɛdi ˈʌptɪk əˈkrɒs ðə bɔːrd/", meaning: "Reporting positive trends", cn: "我们看到全面的稳步上升", trap: "All the metrics are improving slowly", tip: "SEEING STEADY UPTICK, BOARD — ascending rhythm mirrors the trend", pattern: "We're seeing a + [adjective] + [trend] + across the board", variants: ["The trend is heading in the right direction", "Things are moving up across all metrics"] },
    { id: 483, cat: "presenting", scene: "highlight", text: "I want to call your attention to this", words: ["I","want","to","call","your","attention","to","this"], stress: [.2,.3,.2,1,.3,1,.2,1], ipa: "/aɪ wɒnt tə kɔːl jɔːr əˈtɛnʃən tə ðɪs/", meaning: "Highlighting a key data point", cn: "我想请大家注意这个", trap: "Please look at this information carefully", tip: "CALL, ATTENTION, THIS — three beats guide the eye", pattern: "I want to call your attention to + [item]", variants: ["Notice this particular data point", "This is the key takeaway here"] },
    { id: 484, cat: "presenting", scene: "compare", text: "If we compare Q3 to Q4, the difference is striking", words: ["If","we","compare","Q3","to","Q4","the","difference","is","striking"], stress: [.2,.3,1,1,.2,1,.2,1,.2,1], ipa: "/ɪf wi kəmˈpɛr kjuː θriː tə kjuː fɔːr ðə ˈdɪfrəns ɪz ˈstraɪkɪŋ/", meaning: "Drawing a comparison between periods", cn: "如果我们比较Q3和Q4，差异非常显著", trap: "The two quarters have very different results", tip: "COMPARE, Q3, Q4, DIFFERENCE, STRIKING — comparison rhythm", pattern: "If we compare + [A] to + [B], the difference is + [adjective]", variants: ["Quarter over quarter, the gap is clear", "The contrast between the two periods is dramatic"] },
    { id: 485, cat: "presenting", scene: "action", text: "So what does this mean for us going forward?", words: ["So","what","does","this","mean","for","us","going","forward"], stress: [.3,1,.2,1,1,.2,.3,1,1], ipa: "/soʊ wɒt dʌz ðɪs miːn fɔːr ʌs ˈɡoʊɪŋ ˈfɔːrwərd/", meaning: "Transitioning from data to action", cn: "那么这对我们接下来意味着什么？", trap: "How does this information affect our plans?", tip: "WHAT, THIS, MEAN, GOING FORWARD — question drives action", pattern: "So what does this mean for + [audience] + going forward?", variants: ["What's the takeaway here?", "How should this inform our next steps?"] },
  ],
  18: [
    { id: 511, cat: "persuasion", scene: "open", text: "I know this might sound bold, but hear me out", words: ["I","know","this","might","sound","bold","but","hear","me","out"], stress: [.2,1,1,.3,1,1,.3,1,.2,1], ipa: "/aɪ noʊ ðɪs maɪt saʊnd boʊld bʌt hɪr mi aʊt/", meaning: "Prefacing a bold proposal", cn: "我知道这听起来可能很大胆，但请听我说", trap: "I have an unusual idea, please let me explain", tip: "KNOW THIS, SOUND BOLD — pause — HEAR ME OUT — two-part rhythm", pattern: "I know this might sound + [adj], but hear me out", variants: ["Bear with me on this one", "This might be a stretch but"] },
    { id: 512, cat: "persuasion", scene: "evidence", text: "The data speaks for itself", words: ["The","data","speaks","for","itself"], stress: [.2,1,1,.2,1], ipa: "/ðə ˈdeɪtə spiːks fɔːr ɪtˈsɛlf/", meaning: "Letting evidence make the argument", cn: "数据不言自明", trap: "The numbers prove my point", tip: "DATA SPEAKS, ITSELF — the sentence is its own proof", pattern: "The + [evidence] + speaks for itself", variants: ["The results tell the story", "The numbers don't lie"] },
    { id: 513, cat: "persuasion", scene: "urgency", text: "If we don't move now, we'll miss the window", words: ["If","we","don't","move","now","we'll","miss","the","window"], stress: [.2,.3,.3,1,1,.3,1,.2,1], ipa: "/ɪf wi doʊnt muːv naʊ wiːl mɪs ðə ˈwɪndoʊ/", meaning: "Creating urgency to act", cn: "如果我们不现在行动，就会错过窗口期", trap: "We need to hurry or the opportunity will be gone", tip: "MOVE NOW, MISS WINDOW — urgency in every stressed beat", pattern: "If we don't + [verb] + now, we'll + [consequence]", variants: ["The window is closing fast", "This opportunity won't last forever"] },
    { id: 514, cat: "persuasion", scene: "benefit", text: "Think about what this means for the team", words: ["Think","about","what","this","means","for","the","team"], stress: [1,.3,1,1,1,.2,.2,1], ipa: "/θɪŋk əˈbaʊt wɒt ðɪs miːnz fɔːr ðə tiːm/", meaning: "Connecting a proposal to team benefit", cn: "想想这对团队意味着什么", trap: "Consider the positive impact on our group", tip: "THINK WHAT THIS MEANS TEAM — five heavy beats in a row", pattern: "Think about what this means for + [stakeholder]", variants: ["Imagine the impact on the team", "This is a game changer for everyone"] },
    { id: 515, cat: "persuasion", scene: "close", text: "I'm confident this is the right call", words: ["I'm","confident","this","is","the","right","call"], stress: [.3,1,1,.2,.2,1,1], ipa: "/aɪm ˈkɒnfɪdənt ðɪs ɪz ðə raɪt kɔːl/", meaning: "Closing with conviction", cn: "我有信心这是正确的决定", trap: "I believe this decision is correct", tip: "CONFIDENT THIS, RIGHT CALL — bookend stress for authority", pattern: "I'm confident this is + [judgment]", variants: ["I'd stake my reputation on this", "This is absolutely the right move"] },
  ],
  19: [
    { id: 541, cat: "speaking", scene: "hook", text: "What if I told you everything you know is wrong?", words: ["What","if","I","told","you","everything","you","know","is","wrong"], stress: [1,.2,.2,1,.2,1,.2,1,.2,1], ipa: "/wɒt ɪf aɪ toʊld juː ˈɛvriθɪŋ juː noʊ ɪz rɒŋ/", meaning: "Classic attention-grabbing opening", cn: "如果我告诉你你知道的一切都是错的呢？", trap: "Your current understanding may be incorrect", tip: "WHAT, TOLD, EVERYTHING, KNOW, WRONG — five beats of provocation", pattern: "What if I told you + [provocative claim]?", variants: ["Imagine if everything changed overnight", "What if the opposite were true?"] },
    { id: 542, cat: "speaking", scene: "personal", text: "Let me share a quick story with you", words: ["Let","me","share","a","quick","story","with","you"], stress: [.3,.2,1,.2,1,1,.3,.3], ipa: "/lɛt mi ʃɛr ə kwɪk ˈstɔːri wɪð juː/", meaning: "Transitioning into a personal anecdote", cn: "让我给你们分享一个小故事", trap: "I would like to tell you a short story", tip: "SHARE QUICK STORY — three beats invite the audience in", pattern: "Let me share + [content type] + with you", variants: ["Here's something that happened to me", "I want to tell you about something"] },
    { id: 543, cat: "speaking", scene: "question", text: "How many of you have ever felt this way?", words: ["How","many","of","you","have","ever","felt","this","way"], stress: [1,1,.2,.3,.3,1,1,1,1], ipa: "/haʊ ˈmɛni əv juː hæv ˈɛvər fɛlt ðɪs weɪ/", meaning: "Engaging the audience with a rhetorical question", cn: "你们中有多少人有过这种感觉？", trap: "Has anyone experienced something similar?", tip: "HOW MANY, EVER FELT THIS WAY — rallying rhythm", pattern: "How many of you have ever + [verb] + this way?", variants: ["Raise your hand if this sounds familiar", "I bet most of you have been there"] },
    { id: 544, cat: "speaking", scene: "contrast", text: "People don't remember what you said, they remember how you made them feel", words: ["People","don't","remember","what","you","said","they","remember","how","you","made","them","feel"], stress: [1,.3,1,1,.2,1,.2,1,1,.2,1,.2,1], ipa: "/ˈpiːpəl doʊnt rɪˈmɛmbər wɒt juː sɛd ðeɪ rɪˈmɛmbər haʊ juː meɪd ðɛm fiːl/", meaning: "Classic Maya Angelou-inspired wisdom", cn: "人们不记得你说了什么，只记得你给他们的感觉", trap: "The emotional impact is more important than the exact words", tip: "Parallel structure: REMEMBER WHAT SAID / REMEMBER HOW MADE FEEL", pattern: "People don't + [verb] + what, they + [verb] + how", variants: ["It's not what you say, it's how you say it", "The feeling outlasts the words every time"] },
    { id: 545, cat: "speaking", scene: "callback", text: "Remember what I said at the beginning?", words: ["Remember","what","I","said","at","the","beginning"], stress: [1,1,.2,1,.2,.2,1], ipa: "/rɪˈmɛmbər wɒt aɪ sɛd æt ðə bɪˈɡɪnɪŋ/", meaning: "Callback to the opening for a strong close", cn: "还记得我开头说的吗？", trap: "Please think back to my earlier point", tip: "REMEMBER WHAT SAID, BEGINNING — circular closure rhythm", pattern: "Remember what I said + [time reference]?", variants: ["Let me bring it back to where we started", "Full circle — that's what I meant at the start"] },
  ],
  20: [
    { id: 571, cat: "qa", scene: "clarify", text: "Great question — let me make sure I understand", words: ["Great","question","let","me","make","sure","I","understand"], stress: [1,1,.3,.2,1,1,.2,1], ipa: "/ɡreɪt ˈkwɛstʃən lɛt mi meɪk ʃʊr aɪ ˌʌndərˈstænd/", meaning: "Buying time while validating the asker", cn: "好问题——让我确认一下我理解了", trap: "That is a good question, let me think about it", tip: "GREAT QUESTION — pause — MAKE SURE UNDERSTAND — two beats then three", pattern: "Great question — let me + [clarifying action]", variants: ["Good question, let me unpack that", "I'm glad you asked that"] },
    { id: 572, cat: "qa", scene: "redirect", text: "That's a great point — let me address that directly", words: ["That's","a","great","point","let","me","address","that","directly"], stress: [1,.2,1,1,.3,.2,1,1,1], ipa: "/ðæts ə ɡreɪt pɔɪnt lɛt mi əˈdrɛs ðæt dəˈrɛktli/", meaning: "Acknowledging then steering the answer", cn: "说得好——让我直接回答这个", trap: "You raised an important issue, I will answer it", tip: "THAT'S GREAT POINT, ADDRESS THAT DIRECTLY — assertive response", pattern: "That's a great point — let me + [verb] + that + [adverb]", variants: ["Fair point, here's my take", "I want to tackle that head on"] },
    { id: 573, cat: "qa", scene: "defer", text: "I don't want to give you a half-baked answer", words: ["I","don't","want","to","give","you","a","half-baked","answer"], stress: [.2,.3,.3,.2,1,.3,.2,1,1], ipa: "/aɪ doʊnt wɒnt tə ɡɪv juː ə ˈhæfˌbeɪkt ˈɑːnsər/", meaning: "Honestly deferring when you don't know", cn: "我不想给你一个不成熟的回答", trap: "I need more time to think about the answer", tip: "GIVE, HALF-BAKED, ANSWER — honesty rhythm", pattern: "I don't want to give you a + [adjective] + answer", variants: ["Let me get back to you with a solid answer", "I'd rather be accurate than fast on this one"] },
    { id: 574, cat: "qa", scene: "bridge", text: "That's related to something I mentioned earlier", words: ["That's","related","to","something","I","mentioned","earlier"], stress: [1,1,.2,1,.2,1,1], ipa: "/ðæts rɪˈleɪtɪd tə ˈsʌmθɪŋ aɪ ˈmɛnʃənd ˈɜːrliər/", meaning: "Connecting the question back to your material", cn: "这和我之前提到的有关", trap: "This question is connected to my previous point", tip: "THAT'S RELATED, SOMETHING, MENTIONED, EARLIER — bridging", pattern: "That's related to + [earlier reference]", variants: ["Great segue to what I covered before", "Ties right into what I said about"] },
    { id: 575, cat: "qa", scene: "close", text: "Does that answer your question, or should I go deeper?", words: ["Does","that","answer","your","question","or","should","I","go","deeper"], stress: [.3,1,1,.3,1,.3,.3,.2,1,1], ipa: "/dʌz ðæt ˈɑːnsər jɔːr ˈkwɛstʃən ɔːr ʃʊd aɪ ɡoʊ ˈdiːpər/", meaning: "Checking if the answer was sufficient", cn: "这回答了你的问题吗，还是需要更深入？", trap: "Was my answer good enough or do you need more information?", tip: "THAT ANSWER QUESTION, GO DEEPER — giving control back", pattern: "Does that answer your question, or should I + [offer]?", variants: ["Want me to elaborate further?", "Did that hit the mark?"] },
  ],
  21: [
    { id: 601, cat: "emotions", scene: "express", text: "Honestly, I'm feeling a bit overwhelmed right now", words: ["Honestly","I'm","feeling","a","bit","overwhelmed","right","now"], stress: [1,.3,1,.2,.3,1,1,1], ipa: "/ˈɒnɪstli aɪm ˈfiːlɪŋ ə bɪt ˌoʊvərˈwɛlmd raɪt naʊ/", meaning: "Expressing vulnerability professionally", cn: "说实话我现在感觉有点不堪重负", trap: "I have too much work and I feel stressed", tip: "HONESTLY, FEELING, OVERWHELMED, RIGHT NOW — vulnerability with clarity", pattern: "Honestly, I'm feeling + [emotion] + right now", variants: ["I'm being real with you, this is a lot", "I won't lie, I'm stretched pretty thin"] },
    { id: 602, cat: "emotions", scene: "grateful", text: "I can't tell you how much that means to me", words: ["I","can't","tell","you","how","much","that","means","to","me"], stress: [.2,1,1,.3,1,1,1,1,.2,.3], ipa: "/aɪ kænt tɛl juː haʊ mʌtʃ ðæt miːnz tə miː/", meaning: "Expressing deep gratitude", cn: "我无法表达这对我有多重要", trap: "Thank you very much, that is very meaningful", tip: "CAN'T TELL, HOW MUCH THAT MEANS — gratitude crescendo", pattern: "I can't tell you how much + [clause]", variants: ["That really means the world to me", "I appreciate that more than you know"] },
    { id: 603, cat: "emotions", scene: "concern", text: "I'm worried we might be heading in the wrong direction", words: ["I'm","worried","we","might","be","heading","in","the","wrong","direction"], stress: [.3,1,.3,.3,.2,1,.2,.2,1,1], ipa: "/aɪm ˈwʌrid wi maɪt bi ˈhɛdɪŋ ɪn ðə rɒŋ dəˈrɛkʃən/", meaning: "Raising a concern with appropriate emotion", cn: "我担心我们可能走错方向了", trap: "I think our plan may not be correct", tip: "WORRIED, HEADING, WRONG DIRECTION — concern builds at the end", pattern: "I'm worried we might be + [verb]ing + [concern]", variants: ["Something doesn't feel right about this", "I have a gut feeling we're off track"] },
    { id: 604, cat: "emotions", scene: "excited", text: "I'm so pumped about this, you have no idea", words: ["I'm","so","pumped","about","this","you","have","no","idea"], stress: [.3,.3,1,.3,1,.3,.3,1,1], ipa: "/aɪm soʊ pʌmpt əˈbaʊt ðɪs juː hæv noʊ aɪˈdɪə/", meaning: "Expressing excitement with energy", cn: "我对这个超级兴奋，你不知道有多兴奋", trap: "I am very excited about this project", tip: "PUMPED, THIS, NO IDEA — excitement bursts through", pattern: "I'm so + [emotion adj] + about this, you have no idea", variants: ["This is going to be incredible", "I literally can't wait for this"] },
    { id: 605, cat: "emotions", scene: "frustrate", text: "I get where you're coming from, but this is frustrating", words: ["I","get","where","you're","coming","from","but","this","is","frustrating"], stress: [.2,1,1,.3,1,.3,.3,1,.2,1], ipa: "/aɪ ɡɛt wɛr jʊr ˈkʌmɪŋ frɒm bʌt ðɪs ɪz frʌˈstreɪtɪŋ/", meaning: "Acknowledging the other side while expressing frustration", cn: "我理解你的立场，但这很令人沮丧", trap: "I understand your perspective but I am not happy", tip: "GET WHERE COMING FROM — pause — THIS IS FRUSTRATING — diplomatic tension", pattern: "I get where you're coming from, but + [emotion]", variants: ["I hear you, and I'm still frustrated", "Understood, but this isn't working for me"] },
  ],
  22: [
    { id: 631, cat: "conflict", scene: "soften", text: "I hear what you're saying, and I see it differently", words: ["I","hear","what","you're","saying","and","I","see","it","differently"], stress: [.2,1,1,.3,1,.2,.2,1,.2,1], ipa: "/aɪ hɪr wɒt jʊr ˈseɪɪŋ ænd aɪ siː ɪt ˈdɪfrəntli/", meaning: "Professional disagreement with acknowledgment", cn: "我听到你说的了，但我有不同的看法", trap: "I disagree with your opinion", tip: "HEAR WHAT SAYING — pause — SEE IT DIFFERENTLY — bridge then contrast", pattern: "I hear what you're saying, and + [contrast]", variants: ["Respectfully, I have a different take", "I appreciate your view, and here's mine"] },
    { id: 632, cat: "conflict", scene: "boundary", text: "I need to push back on that", words: ["I","need","to","push","back","on","that"], stress: [.2,1,.2,1,1,.3,1], ipa: "/aɪ niːd tə pʊʃ bæk ɒn ðæt/", meaning: "Setting a firm boundary professionally", cn: "我需要反对这个", trap: "I disagree and I will explain why", tip: "NEED, PUSH BACK, THAT — firm but professional", pattern: "I need to push back on + [topic]", variants: ["I'd challenge that assumption", "I'm not onboard with that approach"] },
    { id: 633, cat: "conflict", scene: "deescalate", text: "Let's take a step back and look at this calmly", words: ["Let's","take","a","step","back","and","look","at","this","calmly"], stress: [.3,1,.2,1,1,.2,1,.2,1,1], ipa: "/lɛts teɪk ə stɛp bæk ænd lʊk æt ðɪs ˈkɑːmli/", meaning: "De-escalating tension in a discussion", cn: "让我们退一步冷静看看", trap: "We should calm down and analyze the situation", tip: "TAKE STEP BACK, LOOK THIS CALMLY — measured and deliberate", pattern: "Let's take a step back and + [calming action]", variants: ["Let's cool off and revisit this", "Can we reset and approach this fresh?"] },
    { id: 634, cat: "conflict", scene: "validate", text: "I understand your frustration, I really do", words: ["I","understand","your","frustration","I","really","do"], stress: [.2,1,.3,1,.2,1,1], ipa: "/aɪ ˌʌndərˈstænd jɔːr frʌˈstreɪʃən aɪ ˈrɪəli duː/", meaning: "Validating someone's emotions", cn: "我理解你的沮丧，我真的理解", trap: "I know you are upset about this", tip: "UNDERSTAND FRUSTRATION, REALLY DO — emphatic DO at the end", pattern: "I understand your + [emotion], I really do", variants: ["Your feelings are completely valid", "I get why you're frustrated, totally"] },
    { id: 635, cat: "conflict", scene: "resolve", text: "What would a good outcome look like for you?", words: ["What","would","a","good","outcome","look","like","for","you"], stress: [1,.3,.2,1,1,1,.3,.2,1], ipa: "/wɒt wʊd ə ɡʊd ˈaʊtkʌm lʊk laɪk fɔːr juː/", meaning: "Moving toward resolution by understanding needs", cn: "对你来说什么样的结果是好的？", trap: "What do you want to happen?", tip: "WHAT GOOD OUTCOME LOOK LIKE YOU — solution-focused", pattern: "What would a + [adj] + outcome look like for + [person]?", variants: ["What does success look like to you?", "How can we make this work for everyone?"] },
  ],
  23: [
    { id: 661, cat: "apology", scene: "own", text: "That's on me, I should have caught that sooner", words: ["That's","on","me","I","should","have","caught","that","sooner"], stress: [1,.3,1,.2,.3,.2,1,1,1], ipa: "/ðæts ɒn miː aɪ ʃʊd əv kɔːt ðæt ˈsuːnər/", meaning: "Taking responsibility for a mistake", cn: "那是我的错，我应该更早发现的", trap: "I made a mistake and I am sorry", tip: "THAT'S ON ME — pause — CAUGHT THAT SOONER — ownership then specifics", pattern: "That's on me, I should have + [past participle] + [timing]", variants: ["My bad, I dropped the ball", "I take full responsibility for that"] },
    { id: 662, cat: "apology", scene: "fix", text: "Here's what I'm doing to fix it", words: ["Here's","what","I'm","doing","to","fix","it"], stress: [1,1,.3,1,.2,1,.3], ipa: "/hɪrz wɒt aɪm ˈduːɪŋ tə fɪks ɪt/", meaning: "Following an apology with action", cn: "这是我正在采取的修复措施", trap: "I will now explain my plan to solve the problem", tip: "HERE'S WHAT, DOING, FIX — action-oriented apology", pattern: "Here's what I'm doing to + [verb] + it", variants: ["This is my plan to make it right", "I'm already working on a fix"] },
    { id: 663, cat: "apology", scene: "empathy", text: "I can only imagine how frustrating that must be", words: ["I","can","only","imagine","how","frustrating","that","must","be"], stress: [.2,.3,1,1,1,1,1,1,.3], ipa: "/aɪ kən ˈoʊnli ɪˈmædʒɪn haʊ frʌˈstreɪtɪŋ ðæt mʌst biː/", meaning: "Showing empathy for someone's experience", cn: "我只能想象那有多令人沮丧", trap: "I understand you are unhappy about this", tip: "ONLY IMAGINE HOW FRUSTRATING THAT MUST — empathy crescendo", pattern: "I can only imagine how + [emotion] + that must be", variants: ["I totally get why you'd be upset", "That sounds really tough, I'm sorry"] },
    { id: 664, cat: "apology", scene: "prevent", text: "This won't happen again, I'll make sure of that", words: ["This","won't","happen","again","I'll","make","sure","of","that"], stress: [1,1,1,1,.3,1,1,.2,1], ipa: "/ðɪs woʊnt ˈhæpən əˈɡɛn aɪl meɪk ʃʊr əv ðæt/", meaning: "Committing to prevention", cn: "这不会再发生了，我保证", trap: "I promise to prevent this from happening in the future", tip: "WON'T HAPPEN AGAIN, MAKE SURE THAT — commitment beats", pattern: "This won't happen again, I'll + [commitment]", variants: ["I've put safeguards in place", "Lesson learned, here's what changes"] },
    { id: 665, cat: "apology", scene: "gracious", text: "Thank you for being so patient with me on this", words: ["Thank","you","for","being","so","patient","with","me","on","this"], stress: [1,.3,.2,1,.3,1,.3,.3,.3,1], ipa: "/θæŋk juː fɔːr ˈbiːɪŋ soʊ ˈpeɪʃənt wɪð mi ɒn ðɪs/", meaning: "Expressing gratitude for someone's patience", cn: "谢谢你在这件事上对我这么耐心", trap: "I appreciate that you waited for me", tip: "THANK, BEING, PATIENT, THIS — gracious conclusion", pattern: "Thank you for being so + [adj] + with me on this", variants: ["I really appreciate your patience", "Thanks for bearing with me through this"] },
  ],
  24: [
    { id: 691, cat: "encouragement", scene: "motivate", text: "You've got this — I believe in you", words: ["You've","got","this","I","believe","in","you"], stress: [.3,1,1,.2,1,.3,1], ipa: "/juːv ɡɒt ðɪs aɪ bɪˈliːv ɪn juː/", meaning: "Direct encouragement", cn: "你能行的——我相信你", trap: "I think you are capable of doing this", tip: "GOT THIS — pause — BELIEVE YOU — two-part boost", pattern: "You've got this — I + [verb] + in you", variants: ["I'm rooting for you", "You're going to crush it"] },
    { id: 692, cat: "encouragement", scene: "progress", text: "Look how far you've come already", words: ["Look","how","far","you've","come","already"], stress: [1,1,1,.3,1,1], ipa: "/lʊk haʊ fɑːr juːv kʌm ɔːlˈrɛdi/", meaning: "Acknowledging progress", cn: "看看你已经走了多远", trap: "You have made significant progress", tip: "LOOK HOW FAR, COME ALREADY — celebration of progress", pattern: "Look how far you've + [past participle] + already", variants: ["You've made incredible progress", "Think about where you started vs now"] },
    { id: 693, cat: "encouragement", scene: "resilience", text: "Every setback is a setup for a comeback", words: ["Every","setback","is","a","setup","for","a","comeback"], stress: [1,1,.2,.2,1,.2,.2,1], ipa: "/ˈɛvri ˈsɛtˌbæk ɪz ə ˈsɛtˌʌp fɔːr ə ˈkʌmˌbæk/", meaning: "Reframing failure positively", cn: "每次挫折都是为了更好的回归", trap: "Failure leads to future success", tip: "SETBACK, SETUP, COMEBACK — triple compound stress, rhythmic parallel", pattern: "Every + [negative] + is a + [positive frame]", variants: ["Fall down seven times, get up eight", "Failure is just feedback in disguise"] },
    { id: 694, cat: "encouragement", scene: "persist", text: "Don't give up now, you're almost there", words: ["Don't","give","up","now","you're","almost","there"], stress: [1,1,1,1,.3,1,1], ipa: "/doʊnt ɡɪv ʌp naʊ jʊr ˈɔːlmoʊst ðɛr/", meaning: "Urging persistence at the finish line", cn: "别现在放弃，你快到了", trap: "Please continue your effort, the end is near", tip: "DON'T GIVE UP NOW — all stressed — ALMOST THERE — finish line energy", pattern: "Don't give up now, you're + [proximity to goal]", variants: ["You're so close, keep pushing", "The finish line is right there"] },
    { id: 695, cat: "encouragement", scene: "celebrate", text: "That was absolutely brilliant, well done", words: ["That","was","absolutely","brilliant","well","done"], stress: [1,.2,1,1,1,1], ipa: "/ðæt wɒz ˈæbsəluːtli ˈbrɪljənt wɛl dʌn/", meaning: "Celebrating an achievement", cn: "那真是太棒了，干得好", trap: "You did a very good job", tip: "THAT, ABSOLUTELY BRILLIANT, WELL DONE — celebration cascade", pattern: "That was absolutely + [superlative], well done", variants: ["Incredible work, seriously", "You knocked it out of the park"] },
  ],
  25: [
    { id: 721, cat: "networking", scene: "intro", text: "I've heard great things about your work", words: ["I've","heard","great","things","about","your","work"], stress: [.3,1,1,1,.3,.3,1], ipa: "/aɪv hɜːrd ɡreɪt θɪŋz əˈbaʊt jɔːr wɜːrk/", meaning: "Flattering introduction at a networking event", cn: "久仰大名", trap: "People have told me you do good work", tip: "HEARD GREAT THINGS, WORK — compliment with substance", pattern: "I've heard great things about + [topic]", variants: ["Your reputation precedes you", "I've been wanting to connect with you"] },
    { id: 722, cat: "networking", scene: "connect", text: "We should grab coffee sometime and talk shop", words: ["We","should","grab","coffee","sometime","and","talk","shop"], stress: [.3,.3,1,1,1,.2,1,1], ipa: "/wi ʃʊd ɡræb ˈkɒfi ˈsʌmtaɪm ænd tɔːk ʃɒp/", meaning: "Suggesting a casual professional meetup", cn: "我们找时间喝杯咖啡聊聊工作", trap: "Would you like to have a meeting over coffee?", tip: "GRAB COFFEE SOMETIME, TALK SHOP — casual but intentional", pattern: "We should grab + [beverage] + sometime and + [verb]", variants: ["Let's do lunch next week", "Would love to pick your brain over coffee"] },
    { id: 723, cat: "networking", scene: "offer", text: "If there's ever anything I can do, just say the word", words: ["If","there's","ever","anything","I","can","do","just","say","the","word"], stress: [.2,.3,1,1,.2,.3,1,.3,1,.2,1], ipa: "/ɪf ðɛrz ˈɛvər ˈɛniθɪŋ aɪ kən duː dʒʌst seɪ ðə wɜːrd/", meaning: "Offering open-ended help", cn: "如果有什么我能帮忙的，尽管说", trap: "Please let me know if you need my assistance", tip: "EVER ANYTHING DO, SAY WORD — generous rhythm", pattern: "If there's ever anything I can do, just + [action]", variants: ["Don't hesitate to reach out", "My door is always open"] },
    { id: 724, cat: "networking", scene: "followup", text: "It was really great meeting you today", words: ["It","was","really","great","meeting","you","today"], stress: [.2,.2,1,1,1,.3,1], ipa: "/ɪt wɒz ˈrɪəli ɡreɪt ˈmiːtɪŋ juː təˈdeɪ/", meaning: "Warm closing at a networking event", cn: "今天见到你真的很高兴", trap: "I enjoyed meeting you", tip: "REALLY GREAT MEETING, TODAY — warmth in every stressed word", pattern: "It was really great + [verb]ing + you + [time]", variants: ["So glad we connected", "This was a great conversation"] },
    { id: 725, cat: "networking", scene: "bridge", text: "You should meet my colleague, you'd get along", words: ["You","should","meet","my","colleague","you'd","get","along"], stress: [.3,.3,1,.3,1,.3,1,1], ipa: "/juː ʃʊd miːt maɪ ˈkɒliːɡ juːd ɡɛt əˈlɒŋ/", meaning: "Connecting two people in your network", cn: "你应该认识我的同事，你们会合得来", trap: "I want to introduce you to someone from my office", tip: "MEET COLLEAGUE, GET ALONG — matchmaker rhythm", pattern: "You should meet + [person], you'd + [positive outcome]", variants: ["I know someone you'd click with", "Let me introduce you to someone"] },
  ],
  26: [
    { id: 751, cat: "idioms", scene: "workplace", text: "Let's not beat around the bush here", words: ["Let's","not","beat","around","the","bush","here"], stress: [.3,.3,1,.3,.2,1,1], ipa: "/lɛts nɒt biːt əˈraʊnd ðə bʊʃ hɪr/", meaning: "Let's be direct and stop avoiding the topic", cn: "别拐弯抹角了", trap: "We should discuss this topic honestly and directly", tip: "BEAT, BUSH, HERE — the idiom carries stress on BEAT and BUSH", pattern: "Let's not + [idiom]", variants: ["Cut to the chase", "Let's get straight to the point"] },
    { id: 752, cat: "idioms", scene: "workplace", text: "We really dropped the ball on that one", words: ["We","really","dropped","the","ball","on","that","one"], stress: [.3,1,1,.2,1,.3,1,1], ipa: "/wi ˈrɪəli drɒpt ðə bɔːl ɒn ðæt wʌn/", meaning: "We made a mistake or failed to follow through", cn: "我们在那件事上搞砸了", trap: "We made an error on that task", tip: "REALLY DROPPED BALL, THAT ONE — disappointment rhythm", pattern: "We + [adverb] + dropped the ball on + [topic]", variants: ["That was a big miss on our part", "We fumbled that completely"] },
    { id: 753, cat: "idioms", scene: "workplace", text: "That's the elephant in the room, isn't it?", words: ["That's","the","elephant","in","the","room","isn't","it"], stress: [1,.2,1,.2,.2,1,1,.3], ipa: "/ðæts ðə ˈɛlɪfənt ɪn ðə ruːm ˈɪzənt ɪt/", meaning: "Acknowledging the obvious issue no one wants to discuss", cn: "这就是大家都不想提的问题，对吧？", trap: "This is the problem everyone is avoiding", tip: "THAT'S ELEPHANT ROOM ISN'T — the idiom peaks on ELEPHANT and ROOM", pattern: "That's the + [idiom], isn't it?", variants: ["Nobody wants to talk about it but we need to", "Can we address the obvious issue?"] },
    { id: 754, cat: "idioms", scene: "workplace", text: "I think we need to go back to the drawing board", words: ["I","think","we","need","to","go","back","to","the","drawing","board"], stress: [.2,1,.3,1,.2,1,1,.2,.2,1,1], ipa: "/aɪ θɪŋk wi niːd tə ɡoʊ bæk tə ðə ˈdrɔːɪŋ bɔːrd/", meaning: "Starting over from scratch because the current plan isn't working", cn: "我觉得我们需要从头再来", trap: "We should restart and create a new plan", tip: "THINK NEED, GO BACK, DRAWING BOARD — the idiom has stress on DRAWING BOARD", pattern: "I think we need to + [idiom]", variants: ["Back to square one", "Time for a complete rethink"] },
    { id: 755, cat: "idioms", scene: "workplace", text: "Let's just bite the bullet and get it done", words: ["Let's","just","bite","the","bullet","and","get","it","done"], stress: [.3,.3,1,.2,1,.2,1,.2,1], ipa: "/lɛts dʒʌst baɪt ðə ˈbʊlɪt ænd ɡɛt ɪt dʌn/", meaning: "Accept something unpleasant and just do it", cn: "咬咬牙做了吧", trap: "Let's do the difficult thing now instead of waiting", tip: "BITE BULLET, GET DONE — courage rhythm", pattern: "Let's + [idiom] + and get it done", variants: ["Rip off the bandaid", "No more putting it off"] },
  ],
  27: [
    { id: 781, cat: "humor", scene: "dry", text: "Well, that went exactly as planned", words: ["Well","that","went","exactly","as","planned"], stress: [1,1,1,1,.2,1], ipa: "/wɛl ðæt wɛnt ɪɡˈzæktli æz plænd/", meaning: "Sarcastic — meaning the opposite happened", cn: "嗯，一切完全按计划进行（反话）", trap: "Everything happened as expected (but it really didn't)", tip: "WELL THAT WENT EXACTLY PLANNED — deadpan flat tone makes the sarcasm; rise-fall-rise if more obvious", pattern: "Well, that + [verb] + exactly as + [expectation]", variants: ["Nailed it (not)", "Just as I predicted (total chaos)"] },
    { id: 782, cat: "humor", scene: "self-deprecating", text: "My planning skills are truly unmatched", words: ["My","planning","skills","are","truly","unmatched"], stress: [.3,1,1,.2,1,1], ipa: "/maɪ ˈplænɪŋ skɪlz ɑːr ˈtruːli ʌnˈmætʃt/", meaning: "Self-deprecating humor about a mistake", cn: "我的规划能力真的无与伦比（自嘲）", trap: "I am very good at planning (but I am actually terrible at it)", tip: "PLANNING SKILLS, TRULY UNMATCHED — the rise-fall-rise on UNMATCHED signals irony", pattern: "My + [skill] + skills are truly + [ironic superlative]", variants: ["I outdid myself this time", "Another masterpiece of planning"] },
    { id: 783, cat: "humor", scene: "deadpan", text: "Oh good, another meeting that could have been an email", words: ["Oh","good","another","meeting","that","could","have","been","an","email"], stress: [.3,1,1,1,1,.3,.2,.3,.2,1], ipa: "/oʊ ɡʊd əˈnʌðər ˈmiːtɪŋ ðæt kʊd əv biːn ən ˈiːmeɪl/", meaning: "Universal office humor about unnecessary meetings", cn: "太好了，又一个本可以用邮件解决的会议", trap: "I am happy about this meeting (but I think it is unnecessary)", tip: "OH GOOD, ANOTHER MEETING, COULD BEEN EMAIL — flat delivery = funnier", pattern: "Oh good, another + [noun] + that could have been + [simpler alternative]", variants: ["Love a good unnecessary meeting", "Calendar blocked for maximum productivity"] },
    { id: 784, cat: "humor", scene: "wit", text: "I'm not saying it's impossible, I'm saying it's above my pay grade", words: ["I'm","not","saying","it's","impossible","I'm","saying","it's","above","my","pay","grade"], stress: [.3,.3,1,.3,1,.3,1,.3,1,.3,1,1], ipa: "/aɪm nɒt ˈseɪɪŋ ɪts ɪmˈpɒsɪbəl aɪm ˈseɪɪŋ ɪts əˈbʌv maɪ peɪ ɡreɪd/", meaning: "Humorous way to say something is beyond your responsibility", cn: "我不是说这不可能，我是说这超出了我的工资水平", trap: "This task is too difficult for my position", tip: "Parallel structure: NOT SAYING IMPOSSIBLE / SAYING ABOVE PAY GRADE — comedy through repetition", pattern: "I'm not saying + [X], I'm saying + [funny Y]", variants: ["Not my circus, not my monkeys", "That's a problem for future me"] },
    { id: 785, cat: "humor", scene: "relatable", text: "My to-do list has a to-do list at this point", words: ["My","to-do","list","has","a","to-do","list","at","this","point"], stress: [.3,1,1,.3,.2,1,1,.2,1,1], ipa: "/maɪ tə duː lɪst hæz ə tə duː lɪst æt ðɪs pɔɪnt/", meaning: "Humorous way to say you're overwhelmed", cn: "我的待办清单本身都有待办清单了", trap: "I have too many tasks to complete", tip: "TO-DO LIST, TO-DO LIST — comedic repetition with stress on both", pattern: "My + [noun] + has a + [same noun] + at this point", variants: ["I need a vacation from planning my vacation", "My inbox has its own inbox"] },
  ],
  28: [
    { id: 811, cat: "culture", scene: "slang", text: "That presentation absolutely slapped", words: ["That","presentation","absolutely","slapped"], stress: [1,1,1,1], ipa: "/ðæt ˌprɛzənˈteɪʃən ˈæbsəluːtli slæpt/", meaning: "That presentation was excellent (modern slang)", cn: "那个演讲真是绝了", trap: "The presentation was very good", tip: "THAT PRESENTATION ABSOLUTELY SLAPPED — all content words stressed; 'slapped' = modern praise", pattern: "That + [noun] + absolutely slapped", variants: ["That hit different", "That was straight fire"] },
    { id: 812, cat: "culture", scene: "reference", text: "We're gonna need a bigger boat", words: ["We're","gonna","need","a","bigger","boat"], stress: [.3,.3,1,.2,1,1], ipa: "/wɪər ˈɡɒnə niːd ə ˈbɪɡər boʊt/", meaning: "Jaws reference meaning: this problem is bigger than expected", cn: "我们需要一条更大的船（比喻问题比想象的大）", trap: "The situation is more difficult than we anticipated", tip: "GONNA NEED BIGGER BOAT — 'gonna' contraction is essential for the cultural feel", pattern: "We're gonna need a bigger + [noun]", variants: ["Houston we have a problem", "This is bigger than we thought"] },
    { id: 813, cat: "culture", scene: "informal", text: "No cap, that was the best demo I've ever seen", words: ["No","cap","that","was","the","best","demo","I've","ever","seen"], stress: [1,1,1,.2,.2,1,1,.3,1,1], ipa: "/noʊ kæp ðæt wɒz ðə bɛst ˈdɛmoʊ aɪv ˈɛvər siːn/", meaning: "'No cap' = no lie, I'm being completely honest (Gen Z slang)", cn: "说真的，那是我见过的最好的演示", trap: "Honestly, that was the best demonstration I have ever seen", tip: "NO CAP — spondee opening — then BEST DEMO EVER SEEN", pattern: "No cap, that was the + [superlative] + [noun]", variants: ["Dead serious, that was incredible", "For real though, best one yet"] },
    { id: 814, cat: "culture", scene: "wisdom", text: "It is what it is, we just gotta roll with it", words: ["It","is","what","it","is","we","just","gotta","roll","with","it"], stress: [.3,.3,1,.3,1,.3,.3,1,1,.3,1], ipa: "/ɪt ɪz wɒt ɪt ɪz wi dʒʌst ˈɡɒtə roʊl wɪð ɪt/", meaning: "Accepting a situation you can't change and adapting", cn: "事实就是这样，我们顺其自然吧", trap: "We cannot change this situation so we must accept it", tip: "IS WHAT IT IS — philosophical acceptance — GOTTA ROLL WITH IT — action", pattern: "It is what it is, we just gotta + [adaptation]", variants: ["Can't fight it, might as well embrace it", "Roll with the punches"] },
    { id: 815, cat: "culture", scene: "trend", text: "That's giving main character energy for sure", words: ["That's","giving","main","character","energy","for","sure"], stress: [1,1,1,1,1,.2,1], ipa: "/ðæts ˈɡɪvɪŋ meɪn ˈkærɪktər ˈɛnərdʒi fɔːr ʃʊr/", meaning: "Modern slang: acting like the protagonist of your own story", cn: "那真是主角光环十足", trap: "That person is acting very confidently", tip: "GIVING MAIN CHARACTER ENERGY — four stressed words in sequence; modern slang rhythm", pattern: "That's giving + [adjective] + energy", variants: ["Big boss energy right there", "That's a whole mood"] },
  ],
  29: [
    { id: 841, cat: "debate", scene: "opening", text: "With all due respect, I fundamentally disagree", words: ["With","all","due","respect","I","fundamentally","disagree"], stress: [.2,.3,1,1,.2,1,1], ipa: "/wɪð ɔːl djuː rɪˈspɛkt aɪ ˌfʌndəˈmɛntəli ˌdɪsəˈɡriː/", meaning: "Strong but formal disagreement", cn: "恕我直言，我根本不同意", trap: "I don't agree with your position at all", tip: "DUE RESPECT — pause — FUNDAMENTALLY DISAGREE — diplomatic but firm", pattern: "With all due respect, I + [adverb] + [verb]", variants: ["I respectfully take a different position", "I must strongly disagree on this point"] },
    { id: 842, cat: "debate", scene: "rebuttal", text: "That argument doesn't hold water when you look at the evidence", words: ["That","argument","doesn't","hold","water","when","you","look","at","the","evidence"], stress: [1,1,.3,1,1,.3,.3,1,.2,.2,1], ipa: "/ðæt ˈɑːrɡjʊmənt ˈdʌzənt hoʊld ˈwɔːtər wɛn juː lʊk æt ðə ˈɛvɪdəns/", meaning: "Dismantling an argument by citing evidence", cn: "看看证据就知道那个论点站不住脚", trap: "Your argument is not supported by the facts", tip: "ARGUMENT DOESN'T HOLD WATER, LOOK EVIDENCE — confident rebuttal", pattern: "That argument doesn't hold water when + [evidence clause]", variants: ["The facts tell a different story", "That falls apart under scrutiny"] },
    { id: 843, cat: "debate", scene: "concede", text: "I'll grant you that, but consider this", words: ["I'll","grant","you","that","but","consider","this"], stress: [.3,1,.3,1,.3,1,1], ipa: "/aɪl ɡrænt juː ðæt bʌt kənˈsɪdər ðɪs/", meaning: "Partially conceding then pivoting to your point", cn: "这点我同意，但请考虑这个", trap: "You are correct about that, however I have another point", tip: "GRANT THAT — pause — CONSIDER THIS — concede then pivot", pattern: "I'll grant you that, but + [counter]", variants: ["Fair point, and yet", "True, but here's the other side"] },
    { id: 844, cat: "debate", scene: "logic", text: "If that were true, then it would follow that", words: ["If","that","were","true","then","it","would","follow","that"], stress: [.2,1,.2,1,.3,.2,.3,1,1], ipa: "/ɪf ðæt wɜːr truː ðɛn ɪt wʊd ˈfɒloʊ ðæt/", meaning: "Using logical reasoning to expose a flaw", cn: "如果那是真的，那就意味着", trap: "Following your logic, the conclusion would be", tip: "THAT TRUE, FOLLOW THAT — logical chain rhythm", pattern: "If that were true, then it would follow that + [consequence]", variants: ["By that logic", "Following that reasoning to its conclusion"] },
    { id: 845, cat: "debate", scene: "close", text: "At the end of the day, the evidence is clear", words: ["At","the","end","of","the","day","the","evidence","is","clear"], stress: [.2,.2,1,.2,.2,1,.2,1,.2,1], ipa: "/æt ðə ɛnd əv ðə deɪ ðə ˈɛvɪdəns ɪz klɪr/", meaning: "Closing summary that grounds the argument", cn: "归根结底，证据是明确的", trap: "In conclusion, the facts support my position", tip: "END DAY, EVIDENCE CLEAR — conclusion rhythm with authority", pattern: "At the end of the day, + [concluding claim]", variants: ["Bottom line, the data doesn't lie", "When all is said and done, the conclusion is obvious"] },
  ],
  30: [
    { id: 871, cat: "integration", scene: "reflect", text: "Looking back, I can hear the difference in my own voice", words: ["Looking","back","I","can","hear","the","difference","in","my","own","voice"], stress: [1,1,.2,.3,1,.2,1,.2,.3,1,1], ipa: "/ˈlʊkɪŋ bæk aɪ kən hɪr ðə ˈdɪfrəns ɪn maɪ oʊn vɔɪs/", meaning: "Reflecting on progress in English rhythm", cn: "回头看，我能听到自己声音的变化", trap: "I have improved and I can notice the change", tip: "LOOKING BACK, HEAR DIFFERENCE, OWN VOICE — reflection rhythm", pattern: "Looking back, I can + [verb] + the difference in + [noun]", variants: ["I've come a long way", "The progress is real and I can feel it"] },
    { id: 872, cat: "integration", scene: "gratitude", text: "This has been one hell of a journey", words: ["This","has","been","one","hell","of","a","journey"], stress: [1,.3,.3,1,1,.2,.2,1], ipa: "/ðɪs hæz biːn wʌn hɛl əv ə ˈdʒɜːrni/", meaning: "Expressing appreciation for a challenging experience", cn: "这真是一段不平凡的旅程", trap: "The experience was difficult but valuable", tip: "THIS, ONE HELL, JOURNEY — celebration of difficulty overcome", pattern: "This has been one hell of a + [noun]", variants: ["What a ride it's been", "I wouldn't trade this experience for anything"] },
    { id: 873, cat: "integration", scene: "confidence", text: "I finally feel comfortable being myself in English", words: ["I","finally","feel","comfortable","being","myself","in","English"], stress: [.2,1,1,1,1,1,.2,1], ipa: "/aɪ ˈfaɪnəli fiːl ˈkʌmftəbəl ˈbiːɪŋ maɪˈsɛlf ɪn ˈɪŋɡlɪʃ/", meaning: "The ultimate goal: authentic self-expression in English", cn: "我终于能在英语中做自己了", trap: "I can now express myself naturally in English", tip: "FINALLY FEEL COMFORTABLE BEING MYSELF ENGLISH — confidence builds with each stressed word", pattern: "I finally feel + [adj] + [gerund] + in English", variants: ["English doesn't scare me anymore", "I've found my voice in English"] },
    { id: 874, cat: "integration", scene: "forward", text: "The rhythm never stops — every conversation is practice", words: ["The","rhythm","never","stops","every","conversation","is","practice"], stress: [.2,1,1,1,1,1,.2,1], ipa: "/ðə ˈrɪðəm ˈnɛvər stɒps ˈɛvri ˌkɒnvərˈseɪʃən ɪz ˈpræktɪs/", meaning: "Realizing that learning continues in real life", cn: "节奏永不停止——每次对话都是练习", trap: "You will continue to improve through daily conversation", tip: "RHYTHM NEVER STOPS, EVERY CONVERSATION PRACTICE — lifelong learning rhythm", pattern: "The + [skill] + never stops — every + [activity] + is practice", variants: ["Growth doesn't end on day 30", "The world is your classroom now"] },
    { id: 875, cat: "integration", scene: "inspire", text: "Now go out there and let them hear your rhythm", words: ["Now","go","out","there","and","let","them","hear","your","rhythm"], stress: [1,1,1,1,.2,1,.2,1,.3,1], ipa: "/naʊ ɡoʊ aʊt ðɛr ænd lɛt ðɛm hɪr jɔːr ˈrɪðəm/", meaning: "The final send-off — encouraging confident speech", cn: "现在去让他们听到你的节奏", trap: "You are ready to speak English confidently", tip: "NOW GO OUT THERE, LET HEAR RHYTHM — graduation energy, every word nearly stressed", pattern: "Now go out there and + [empowering action]", variants: ["Show the world what you've got", "Your rhythm, your voice, your story"] },
  ],
};

// ── Generation Templates for Days 15-30 ─────────────────────────────────
// Templates with slots for procedural sentence generation.
const GENERATION_TEMPLATES = {
  leadership: [
    { template: "I need {NAME} to take the lead on {TOPIC}", scene: "delegate", meaning: "Delegating leadership", cn: "我需要{NAME}来负责{TOPIC}", pattern: "I need + [name] + to take the lead on + [topic]", stressHints: [0.2, 1], trap: "I want someone to be responsible for this", variants: ["{NAME} should drive {TOPIC}", "Let {NAME} own {TOPIC}"] },
    { template: "What's our {ADJ} priority for {TIME}?", scene: "prioritize", meaning: "Asking about priorities", cn: "我们{TIME}最{ADJ}的优先事项是什么？", pattern: "What's our + [adj] + priority for + [time]?", stressHints: [1, 0.3], trap: "What should we focus on?", variants: ["What matters most {TIME}?", "Top priority for {TIME}?"] },
    { template: "Let's empower the team to make {ADJ} decisions", scene: "empower", meaning: "Encouraging autonomy", cn: "让我们授权团队做出{ADJ}的决定", pattern: "Let's empower + [group] + to + [action]", stressHints: [0.3, 1], trap: "We should let the team decide", variants: ["Trust the team on this", "Give the team more autonomy"] },
    { template: "{NAME} has been doing {ADJ} work on this", scene: "praise", meaning: "Public recognition", cn: "{NAME}在这方面做得{ADJ}", pattern: "[name] + has been doing + [adj] + work on this", stressHints: [], trap: "The person did a good job", variants: ["Shoutout to {NAME}", "Big kudos to {NAME} on this"] },
    { template: "We need to be more {ADJ} about how we approach {TOPIC}", scene: "strategy", meaning: "Calling for strategic thinking", cn: "我们需要更{ADJ}地处理{TOPIC}", pattern: "We need to be more + [adj] + about + [topic]", stressHints: [0.3, 1], trap: "Our approach needs to change", variants: ["Let's rethink our approach to {TOPIC}", "Time to get {ADJ} about {TOPIC}"] },
  ],
  storytelling: [
    { template: "You're not going to believe what happened at {TOPIC}", scene: "setup", meaning: "Story hook", cn: "你不会相信{TOPIC}发生了什么", pattern: "You're not going to believe + [what clause]", stressHints: [0.3, 1, 0.3, 0.3, 1], trap: "Something surprising happened", variants: ["Wait till you hear this", "Okay so get this"] },
    { template: "So there I was, standing right in front of {NAME}", scene: "scene", meaning: "Setting the scene vividly", cn: "然后我就站在{NAME}面前", pattern: "So there I was, + [vivid description]", stressHints: [0.3, 1], trap: "I was in an interesting situation", variants: ["Picture the scene", "Imagine this"] },
    { template: "And just when I thought it was over, {NAME} walks in", scene: "twist", meaning: "Plot twist", cn: "就在我以为结束的时候，{NAME}走进来了", pattern: "And just when + [expectation], + [twist]", stressHints: [0.2, 1], trap: "Then something unexpected happened", variants: ["Plot twist", "Out of nowhere"] },
    { template: "The look on everyone's face was absolutely priceless", scene: "reaction", meaning: "Describing group reaction", cn: "所有人脸上的表情简直无价", pattern: "The look on + [possessive] + face was + [adj]", stressHints: [0.2, 1], trap: "Everyone was very surprised", variants: ["You should have seen their faces", "Jaws on the floor"] },
    { template: "And that's how I learned to never trust {TOPIC} again", scene: "moral", meaning: "Comedic story ending", cn: "这就是我学会再也不相信{TOPIC}的原因", pattern: "And that's how I learned to + [lesson]", stressHints: [0.2, 1, 0.3], trap: "I learned an important lesson", variants: ["Lesson learned the hard way", "Never again"] },
  ],
  presenting: [
    { template: "The key takeaway here is {ADJ} growth across {DEPT}", scene: "summary", meaning: "Summarizing data", cn: "关键要点是{DEPT}实现了{ADJ}的增长", pattern: "The key takeaway is + [finding]", stressHints: [0.2, 1, 1], trap: "The most important point is", variants: ["Bottom line: growth", "In summary"] },
    { template: "If you look at the trend since {TIME}, the picture is clear", scene: "evidence", meaning: "Pointing to trend data", cn: "如果你看看{TIME}以来的趋势，情况一目了然", pattern: "If you look at + [data], the picture is clear", stressHints: [0.2, 0.3, 1], trap: "The data shows a clear pattern", variants: ["The numbers speak for themselves", "The trend is unmistakable"] },
    { template: "I'd like to highlight one thing about {TOPIC} specifically", scene: "focus", meaning: "Drawing attention", cn: "我想特别强调一下{TOPIC}", pattern: "I'd like to highlight + [specific point]", stressHints: [0.3, 0.3, 1, 1], trap: "Please pay attention to this point", variants: ["Let me zoom in on {TOPIC}", "Focus on this for a moment"] },
    { template: "This is where it gets really interesting for {DEPT}", scene: "hook", meaning: "Building excitement", cn: "这就是{DEPT}最有意思的地方", pattern: "This is where it gets + [adj] + for + [audience]", stressHints: [1, 0.2, 0.3], trap: "The next part is especially relevant", variants: ["Here's the exciting part", "This is the game changer"] },
    { template: "Let me walk you through the three {ADJ} findings", scene: "structure", meaning: "Structuring a presentation", cn: "让我带你看看三个{ADJ}的发现", pattern: "Let me walk you through + [structured content]", stressHints: [0.3, 0.2, 1], trap: "I will explain three important results", variants: ["Three things to know", "Here's the breakdown"] },
  ],
  persuasion: [
    { template: "What if we could solve this by {TIME}?", scene: "possibility", meaning: "Proposing a timeline", cn: "如果我们能在{TIME}前解决这个呢？", pattern: "What if we could + [verb] + by + [time]?", stressHints: [1, 0.2], trap: "Imagine if we finished by a certain date", variants: ["Imagine having this done by {TIME}", "What would it mean to finish by {TIME}?"] },
    { template: "The cost of doing nothing is far greater than the risk", scene: "urgency", meaning: "Creating urgency through loss framing", cn: "不作为的代价远大于风险", pattern: "The cost of + [inaction] + is far greater than + [risk]", stressHints: [0.2, 1, 0.3, 1], trap: "We should act now because waiting is worse", variants: ["Inaction is the biggest risk", "Doing nothing costs more"] },
    { template: "Every {ADJ} company in the space is already doing this", scene: "fomo", meaning: "Social proof argument", cn: "这个领域每家{ADJ}的公司都已经在做了", pattern: "Every + [adj] + company is already + [doing X]", stressHints: [1, 0.3], trap: "Other companies are ahead of us on this", variants: ["We're behind the curve on this", "The market has already moved"] },
    { template: "I've seen this work at three different companies including {NAME}'s team", scene: "credibility", meaning: "Using personal experience as evidence", cn: "我在三家不同公司见过这种做法，包括{NAME}的团队", pattern: "I've seen this work at + [credibility markers]", stressHints: [0.3, 1, 1], trap: "Based on my experience this approach is effective", variants: ["This isn't theoretical, I've seen it work", "Proven approach from {NAME}'s team"] },
    { template: "Let me paint a picture of what success looks like here", scene: "vision", meaning: "Creating a compelling vision", cn: "让我描绘一下成功的样子", pattern: "Let me paint a picture of + [desired outcome]", stressHints: [0.3, 0.2, 1, 0.2, 1], trap: "I will describe the ideal result", variants: ["Imagine the end state", "Here's the vision"] },
  ],
  general: [
    { template: "That's a really {ADJ} way to look at it", scene: "affirm", meaning: "Validating someone's perspective", cn: "那真是一个{ADJ}的角度", pattern: "That's a really + [adj] + way to look at it", stressHints: [1, 0.2, 1], trap: "Your perspective is good", variants: ["Great way to frame it", "Interesting angle"] },
    { template: "I've been thinking about {TOPIC} a lot lately", scene: "reflect", meaning: "Sharing a reflection", cn: "我最近一直在想{TOPIC}", pattern: "I've been thinking about + [topic] + a lot lately", stressHints: [0.3, 0.3, 1], trap: "I have been considering this topic", variants: ["This has been on my mind", "{TOPIC} keeps coming up for me"] },
    { template: "Can we get {NAME}'s take on this before we move forward?", scene: "consult", meaning: "Seeking input", cn: "在我们继续之前能听听{NAME}的看法吗？", pattern: "Can we get + [name]'s take on this?", stressHints: [0.3, 0.3, 1], trap: "Should we ask someone for their opinion?", variants: ["What does {NAME} think?", "Let's loop in {NAME}"] },
    { template: "There's definitely a better way to handle {TOPIC}", scene: "improve", meaning: "Suggesting improvement", cn: "处理{TOPIC}肯定有更好的方法", pattern: "There's definitely a better way to + [verb] + [topic]", stressHints: [0.3, 1, 0.3], trap: "We can improve our approach", variants: ["We can do better on {TOPIC}", "Let's rethink how we handle {TOPIC}"] },
    { template: "At the end of the day, it comes down to {TOPIC}", scene: "summarize", meaning: "Summarizing the core issue", cn: "归根结底，关键在于{TOPIC}", pattern: "At the end of the day, it comes down to + [core issue]", stressHints: [0.2, 0.2, 1, 0.2, 0.2, 1], trap: "The most important factor is this", variants: ["Bottom line: {TOPIC}", "It all comes back to {TOPIC}"] },
  ],
  // Remaining categories alias to general templates
  speaking: null, qa: null, emotions: null, conflict: null, apology: null,
  encouragement: null, networking: null, idioms: null, humor: null,
  culture: null, debate: null, integration: null,
};

// Alias null categories to general
for (const [k, v] of Object.entries(GENERATION_TEMPLATES)) {
  if (v === null) GENERATION_TEMPLATES[k] = GENERATION_TEMPLATES.general;
}
