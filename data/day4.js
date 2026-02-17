// ─── Day 4 · Product & Technical Communication ───────────────────
// 30 sentences (id 91-120)

const s91 = {
  id: 91,
  cat: "product",
  scene: "spec-review",
  text: "The acceptance criteria need to be more specific.",
  words: ["The","ac·cep·tance","cri·te·ri·a","need","to","be","more","spe·cif·ic"],
  stress: [0,1,1,1,0,0,1,1],
  ipa: "ðə əkˈsɛptəns kraɪˈtɪriə niːd tə bi mɔːr spəˈsɪfɪk",
  meaning: "Request clearer spec requirements",
  cn: "验收标准需要更具体一些。",
  trap: "'criteria' /kraɪˈtɪriə/ 是复数形式，重音在 -TE-",
  tip: "'more specific' 重读，温和但坚定地要求改进",
  pattern: "The ___ need to be more specific",
  variants: [
    "The requirements need to be more specific.",
    "The success metrics need to be more clearly defined."
  ]
};

const s92 = {
  id: 92,
  cat: "product",
  scene: "spec-review",
  text: "Are there any edge cases we haven't accounted for?",
  words: ["Are","there","an·y","edge","cas·es","we","haven't","ac·count·ed","for"],
  stress: [0,0,1,1,1,0,1,1,0],
  ipa: "ɑːr ðɛr ˈɛni ɛdʒ ˈkeɪsɪz wi ˈhævənt əˈkaʊntɪd fɔːr",
  meaning: "Probe for missing scenarios in a spec",
  cn: "有没有我们没有考虑到的边界情况？",
  trap: "'accounted' /əˈkaʊntɪd/ 重音在 -COUNT-",
  tip: "'edge cases' 是技术关键词，清晰发音引起重视",
  pattern: "Are there any ___ we haven't accounted for?",
  variants: [
    "Are there any failure modes we haven't accounted for?",
    "Are there any scenarios we might have missed?"
  ]
};

const s93 = {
  id: 93,
  cat: "product",
  scene: "spec-review",
  text: "Let's define the scope before we start writing any code.",
  words: ["Let's","de·fine","the","scope","be·fore","we","start","writ·ing","an·y","code"],
  stress: [1,1,0,1,1,0,1,1,1,1],
  ipa: "lɛts dɪˈfaɪn ðə skoʊp bɪˈfɔːr wi stɑːrt ˈraɪtɪŋ ˈɛni koʊd",
  meaning: "Insist on scope definition before engineering work",
  cn: "在写任何代码之前，我们先把范围定义清楚。",
  trap: "'scope' /skoʊp/ 一个音节，注意不要加多余元音",
  tip: "'define the scope' 节奏清晰，'before' 加重表示顺序很重要",
  pattern: "Let's define ___ before we start ___",
  variants: [
    "Let's define the requirements before we start building.",
    "Let's lock down the scope before any development begins."
  ]
};

const s94 = {
  id: 94,
  cat: "product",
  scene: "standup",
  text: "Yesterday I shipped the login flow; today I'm tackling payments.",
  words: ["Yes·ter·day","I","shipped","the","lo·gin","flow","to·day","I'm","tack·ling","pay·ments"],
  stress: [1,0,1,0,1,1,1,1,1,1],
  ipa: "ˈjɛstərdeɪ aɪ ʃɪpt ðə ˈlɒɡɪn floʊ təˈdeɪ aɪm ˈtæklɪŋ ˈpeɪmənts",
  meaning: "Give a concise standup update",
  cn: "昨天我完成了登录流程的上线；今天我在处理支付功能。",
  trap: "'tackling' /ˈtæklɪŋ/ 两音节，注意 /æ/ 不是 /ɑː/",
  tip: "分号处换气，保持简洁节奏——站会讲究效率",
  pattern: "Yesterday I ___; today I'm ___",
  variants: [
    "Yesterday I closed the API bug; today I'm working on caching.",
    "Yesterday I finished the migration; today I'm running tests."
  ]
};

const s95 = {
  id: 95,
  cat: "product",
  scene: "standup",
  text: "I'm blocked on the API integration — I need backend support.",
  words: ["I'm","blocked","on","the","A·P·I","in·te·gra·tion","I","need","back·end","sup·port"],
  stress: [1,1,0,0,1,1,0,1,1,1],
  ipa: "aɪm blɒkt ɒn ðə ˌeɪpiːˈaɪ ˌɪntɪˈɡreɪʃən aɪ niːd ˈbækˌɛnd səˈpɔːrt",
  meaning: "Flag a blocker clearly in standup",
  cn: "我在API集成上被卡住了——我需要后端支持。",
  trap: "'integration' /ˌɪntɪˈɡreɪʃən/ 重音在 -GRA-，四音节",
  tip: "'blocked' 开头有力引起注意，'need backend support' 直接说需求",
  pattern: "I'm blocked on ___ — I need ___",
  variants: [
    "I'm blocked on deployment — I need DevOps help.",
    "I'm stuck on the auth flow — I need a design review."
  ]
};

const s96 = {
  id: 96,
  cat: "product",
  scene: "standup",
  text: "No blockers on my end. I should have it done by end of day.",
  words: ["No","block·ers","on","my","end","I","should","have","it","done","by","end","of","day"],
  stress: [1,1,0,0,1,0,1,0,0,1,0,1,0,1],
  ipa: "noʊ ˈblɒkərz ɒn maɪ ɛnd aɪ ʃʊd hæv ɪt dʌn baɪ ɛnd əv deɪ",
  meaning: "Report smooth progress with a timeline",
  cn: "我这边没有阻碍。今天下班前应该能完成。",
  trap: "'should have' 连读 /ʃʊdəv/，'end of day' 连贯",
  tip: "语气轻松自信，'end of day' 给出明确时间承诺",
  pattern: "No blockers on my end. I should have ___ by ___",
  variants: [
    "No blockers on my end. I should have the PR ready by noon.",
    "Nothing blocking me. I should wrap it up by end of day."
  ]
};

const s97 = {
  id: 97,
  cat: "product",
  scene: "retro",
  text: "What went well, and what should we do differently next time?",
  words: ["What","went","well","and","what","should","we","do","dif·fer·ent·ly","next","time"],
  stress: [1,1,1,0,1,0,0,1,1,1,1],
  ipa: "wɒt wɛnt wɛl ænd wɒt ʃʊd wi duː ˈdɪfərəntli nɛkst taɪm",
  meaning: "Open a retrospective discussion",
  cn: "哪些做得好，哪些下次应该改进？",
  trap: "'differently' /ˈdɪfərəntli/ 四音节，重音在 DIF-",
  tip: "'well' 和 'differently' 形成对比节奏，公平开放的语调",
  pattern: "What went well, and what should we do differently ___?",
  variants: [
    "What worked, and what should we change for next sprint?",
    "What went well, and what can we improve going forward?"
  ]
};

const s98 = {
  id: 98,
  cat: "product",
  scene: "retro",
  text: "We underestimated the complexity of the migration.",
  words: ["We","un·der·es·ti·mat·ed","the","com·plex·i·ty","of","the","mi·gra·tion"],
  stress: [0,1,0,1,0,0,1],
  ipa: "wi ˌʌndərˈɛstɪmeɪtɪd ðə kəmˈplɛksɪti əv ðə maɪˈɡreɪʃən",
  meaning: "Reflect honestly on planning failures",
  cn: "我们低估了迁移的复杂性。",
  trap: "'underestimated' /ˌʌndərˈɛstɪmeɪtɪd/ 六音节，重音在 -ES-",
  tip: "'underestimated' 说清每个音节，'complexity' 重读承认问题",
  pattern: "We underestimated the ___ of ___",
  variants: [
    "We underestimated the scope of the refactor.",
    "We underestimated how long the integration would take."
  ]
};

const s99 = {
  id: 99,
  cat: "product",
  scene: "retro",
  text: "One thing I'd do differently is communicate changes earlier.",
  words: ["One","thing","I'd","do","dif·fer·ent·ly","is","com·mu·ni·cate","chang·es","ear·li·er"],
  stress: [1,1,1,1,1,0,1,1,1],
  ipa: "wʌn θɪŋ aɪd duː ˈdɪfərəntli ɪz kəˈmjuːnɪkeɪt ˈtʃeɪndʒɪz ˈɜːrliər",
  meaning: "Share a personal retrospective learning",
  cn: "如果重来，我会更早地沟通变更。",
  trap: "'communicate' /kəˈmjuːnɪkeɪt/ 重音在 -MU-，四音节",
  tip: "'One thing' 开头吸引注意，'earlier' 是关键改进点",
  pattern: "One thing I'd do differently is ___",
  variants: [
    "One thing I'd do differently is set clearer expectations.",
    "One thing I'd change is involving stakeholders sooner."
  ]
};

const s100 = {
  id: 100,
  cat: "product",
  scene: "launch",
  text: "We're a go for launch. All systems are green.",
  words: ["We're","a","go","for","launch","All","sys·tems","are","green"],
  stress: [1,0,1,0,1,1,1,0,1],
  ipa: "wɪr ə ɡoʊ fɔːr lɔːntʃ ɔːl ˈsɪstəmz ɑːr ɡriːn",
  meaning: "Announce launch readiness confidently",
  cn: "我们已准备好发布。所有系统状态正常。",
  trap: "'launch' /lɔːntʃ/ 注意 /ɔː/ 元音，不是 /æ/",
  tip: "简短有力如指挥中心，'green' 干脆利落",
  pattern: "We're a go for ___. All systems are ___",
  variants: [
    "We're cleared for launch. All checks are passing.",
    "We have a green light. All systems are ready."
  ]
};

const s101 = {
  id: 101,
  cat: "product",
  scene: "launch",
  text: "Let's do a staged rollout — ten percent of users first.",
  words: ["Let's","do","a","staged","roll·out","ten","per·cent","of","us·ers","first"],
  stress: [1,0,0,1,1,1,1,0,1,1],
  ipa: "lɛts duː ə steɪdʒd ˈroʊlaʊt tɛn pərˈsɛnt əv ˈjuːzərz fɜːrst",
  meaning: "Propose a cautious deployment strategy",
  cn: "我们分阶段上线——先覆盖百分之十的用户。",
  trap: "'rollout' /ˈroʊlaʊt/ 重音在 ROLL-，复合名词",
  tip: "破折号后数字 'ten percent' 清晰，'first' 表谨慎",
  pattern: "Let's do a staged rollout — ___ first",
  variants: [
    "Let's do a phased rollout — internal users first.",
    "Let's do a canary release — five percent of traffic first."
  ]
};

const s102 = {
  id: 102,
  cat: "product",
  scene: "launch",
  text: "Monitor the dashboards closely for the next forty-eight hours.",
  words: ["Mon·i·tor","the","dash·boards","close·ly","for","the","next","for·ty-eight","hours"],
  stress: [1,0,1,1,0,0,1,1,1],
  ipa: "ˈmɒnɪtər ðə ˈdæʃbɔːrdz ˈkloʊsli fɔːr ðə nɛkst ˈfɔːrtiˌeɪt ˈaʊərz",
  meaning: "Set post-launch monitoring expectations",
  cn: "接下来四十八小时密切关注仪表盘。",
  trap: "'monitor' /ˈmɒnɪtər/ 重音在 MON-，三音节",
  tip: "'closely' 和 'forty-eight hours' 重读传递严肃性",
  pattern: "Monitor ___ closely for the next ___",
  variants: [
    "Monitor error rates closely for the next twenty-four hours.",
    "Keep a close eye on the metrics for the next two days."
  ]
};

const s103 = {
  id: 103,
  cat: "product",
  scene: "roadmap",
  text: "This feature aligns with our Q3 strategic objectives.",
  words: ["This","fea·ture","a·ligns","with","our","Q3","stra·te·gic","ob·jec·tives"],
  stress: [0,1,1,0,0,1,1,1],
  ipa: "ðɪs ˈfiːtʃər əˈlaɪnz wɪð aʊər ˌkjuːˈθriː strəˈtiːdʒɪk əbˈdʒɛktɪvz",
  meaning: "Connect a feature to strategic goals",
  cn: "这个功能与我们第三季度的战略目标一致。",
  trap: "'objectives' /əbˈdʒɛktɪvz/ 重音在 -JEC-，别读成 OB-jectives",
  tip: "'aligns with' 连读流畅，'strategic objectives' 正式语体",
  pattern: "This ___ aligns with our ___ objectives",
  variants: [
    "This initiative aligns with our annual strategic goals.",
    "This project aligns with our growth objectives for this half."
  ]
};

const s104 = {
  id: 104,
  cat: "product",
  scene: "roadmap",
  text: "We need to deprioritize this to make room for the platform work.",
  words: ["We","need","to","de·pri·or·i·tize","this","to","make","room","for","the","plat·form","work"],
  stress: [0,1,0,1,1,0,1,1,0,0,1,1],
  ipa: "wi niːd tə diːpraɪˈɒrɪtaɪz ðɪs tə meɪk ruːm fɔːr ðə ˈplætfɔːrm wɜːrk",
  meaning: "Communicate a roadmap trade-off",
  cn: "我们需要降低这个的优先级，为平台工作腾出空间。",
  trap: "'deprioritize' /diːpraɪˈɒrɪtaɪz/ 六音节，重音在 -OR-",
  tip: "'make room' 是关键，表示有限资源的现实约束",
  pattern: "We need to deprioritize ___ to make room for ___",
  variants: [
    "We need to push this back to make room for tech debt.",
    "We need to deprioritize this feature to focus on infrastructure."
  ]
};

const s105 = {
  id: 105,
  cat: "product",
  scene: "roadmap",
  text: "What's the estimated level of effort for this initiative?",
  words: ["What's","the","es·ti·mat·ed","lev·el","of","ef·fort","for","this","in·i·tia·tive"],
  stress: [1,0,1,1,0,1,0,0,1],
  ipa: "wɒts ðə ˈɛstɪmeɪtɪd ˈlɛvəl əv ˈɛfərt fɔːr ðɪs ɪˈnɪʃətɪv",
  meaning: "Ask for sizing on a roadmap item",
  cn: "这个项目预估的工作量是多少？",
  trap: "'initiative' /ɪˈnɪʃətɪv/ 重音在 -NI-，四音节",
  tip: "'level of effort' 是固定搭配，连贯发音",
  pattern: "What's the estimated ___ for this ___?",
  variants: [
    "What's the estimated timeline for this project?",
    "What's the level of effort for this integration?"
  ]
};

const s106 = {
  id: 106,
  cat: "product",
  scene: "user-research",
  text: "What's the biggest pain point in your current workflow?",
  words: ["What's","the","big·gest","pain","point","in","your","cur·rent","work·flow"],
  stress: [1,0,1,1,1,0,0,1,1],
  ipa: "wɒts ðə ˈbɪɡɪst peɪn pɔɪnt ɪn jɔːr ˈkɜːrənt ˈwɜːrkfloʊ",
  meaning: "Probe for user pain points in research",
  cn: "你当前工作流程中最大的痛点是什么？",
  trap: "'workflow' /ˈwɜːrkfloʊ/ 复合词，重音在 WORK-",
  tip: "'biggest pain point' 三连重读，表达对用户痛苦的关注",
  pattern: "What's the biggest pain point in your ___?",
  variants: [
    "What's the most frustrating part of your daily routine?",
    "What's the biggest challenge in your current process?"
  ]
};

const s107 = {
  id: 107,
  cat: "product",
  scene: "user-research",
  text: "Walk me through how you typically handle this task.",
  words: ["Walk","me","through","how","you","typ·i·cal·ly","han·dle","this","task"],
  stress: [1,0,0,1,0,1,1,0,1],
  ipa: "wɔːk mi θruː haʊ juː ˈtɪpɪkəli ˈhændəl ðɪs tæsk",
  meaning: "Ask users to demonstrate their process",
  cn: "给我讲讲你通常是怎么处理这个任务的。",
  trap: "'typically' /ˈtɪpɪkəli/ 四音节，重音在 TYP-",
  tip: "'Walk me through' 连读自然，语调好奇而非审问",
  pattern: "Walk me through how you typically ___",
  variants: [
    "Walk me through how you normally complete this process.",
    "Walk me through your typical day when dealing with this."
  ]
};

const s108 = {
  id: 108,
  cat: "product",
  scene: "user-research",
  text: "How often does this problem come up in your day-to-day?",
  words: ["How","of·ten","does","this","prob·lem","come","up","in","your","day-to-day"],
  stress: [1,1,0,0,1,1,1,0,0,1],
  ipa: "haʊ ˈɒfən dʌz ðɪs ˈprɒbləm kʌm ʌp ɪn jɔːr ˌdeɪtəˈdeɪ",
  meaning: "Quantify problem frequency in research",
  cn: "这个问题在你的日常工作中多久出现一次？",
  trap: "'often' /ˈɒfən/ t 通常不发音，两音节",
  tip: "'How often' 重读引导量化思考，'day-to-day' 口语化亲切",
  pattern: "How often does ___ come up in your ___?",
  variants: [
    "How frequently does this issue come up in your work?",
    "How often do you run into this problem?"
  ]
};

const s109 = {
  id: 109,
  cat: "product",
  scene: "a-b-test",
  text: "Let's run an A/B test to validate that hypothesis.",
  words: ["Let's","run","an","A/B","test","to","val·i·date","that","hy·poth·e·sis"],
  stress: [1,1,0,1,1,0,1,0,1],
  ipa: "lɛts rʌn ən ˌeɪˈbiː tɛst tə ˈvælɪdeɪt ðæt haɪˈpɒθəsɪs",
  meaning: "Propose an experiment over opinion",
  cn: "我们做个A/B测试来验证这个假设。",
  trap: "'hypothesis' /haɪˈpɒθəsɪs/ 重音在 -POTH-，四音节",
  tip: "'A/B test' 字母清晰，'validate' 强调用数据说话",
  pattern: "Let's run an A/B test to validate ___",
  variants: [
    "Let's run an experiment to validate that assumption.",
    "Let's A/B test this before we commit to the new design."
  ]
};

const s110 = {
  id: 110,
  cat: "product",
  scene: "a-b-test",
  text: "The variant outperformed the control by twelve percent.",
  words: ["The","var·i·ant","out·per·formed","the","con·trol","by","twelve","per·cent"],
  stress: [0,1,1,0,1,0,1,1],
  ipa: "ðə ˈvɛriənt ˌaʊtpərˈfɔːrmd ðə kənˈtroʊl baɪ twɛlv pərˈsɛnt",
  meaning: "Report A/B test results with data",
  cn: "实验组比对照组高出了百分之十二。",
  trap: "'outperformed' /ˌaʊtpərˈfɔːrmd/ 重音在 -FORM-",
  tip: "'twelve percent' 是关键数据，清晰放慢让人记住",
  pattern: "The variant outperformed the control by ___",
  variants: [
    "The new design outperformed the control by eight percent.",
    "Version B outperformed the baseline by fifteen percent."
  ]
};

const s111 = {
  id: 111,
  cat: "product",
  scene: "a-b-test",
  text: "We need at least two weeks of data for statistical significance.",
  words: ["We","need","at","least","two","weeks","of","da·ta","for","sta·tis·ti·cal","sig·nif·i·cance"],
  stress: [0,1,0,1,1,1,0,1,0,1,1],
  ipa: "wi niːd ət liːst tuː wiːks əv ˈdeɪtə fɔːr stəˈtɪstɪkəl sɪɡˈnɪfɪkəns",
  meaning: "Set expectations for experiment duration",
  cn: "我们至少需要两周的数据才能达到统计显著性。",
  trap: "'statistical' /stəˈtɪstɪkəl/ 重音在 -TIS-，四音节",
  tip: "'at least two weeks' 强调最低要求，'significance' 学术词正式发音",
  pattern: "We need at least ___ for statistical significance",
  variants: [
    "We need at least ten thousand samples for statistical significance.",
    "We need more data before we can claim statistical significance."
  ]
};

const s112 = {
  id: 112,
  cat: "product",
  scene: "sprint-planning",
  text: "Let's estimate this story in story points before committing.",
  words: ["Let's","es·ti·mate","this","sto·ry","in","sto·ry","points","be·fore","com·mit·ting"],
  stress: [1,1,0,1,0,1,1,1,1],
  ipa: "lɛts ˈɛstɪmeɪt ðɪs ˈstɔːri ɪn ˈstɔːri pɔɪnts bɪˈfɔːr kəˈmɪtɪŋ",
  meaning: "Request estimation before sprint commitment",
  cn: "在承诺之前，我们先用故事点来估算这个需求。",
  trap: "'estimate' 作动词 /ˈɛstɪmeɪt/，注意最后是 /eɪt/",
  tip: "'story points' 技术术语清晰，'committing' 表示认真",
  pattern: "Let's estimate ___ before committing",
  variants: [
    "Let's size this ticket before committing to the sprint.",
    "Let's point this story before we add it to the sprint."
  ]
};

const s113 = {
  id: 113,
  cat: "product",
  scene: "sprint-planning",
  text: "We're at capacity this sprint. Can this wait until next one?",
  words: ["We're","at","ca·pac·i·ty","this","sprint","Can","this","wait","un·til","next","one"],
  stress: [1,0,1,0,1,1,0,1,1,1,1],
  ipa: "wɪr ət kəˈpæsɪti ðɪs sprɪnt kæn ðɪs weɪt ənˈtɪl nɛkst wʌn",
  meaning: "Push back on sprint overload",
  cn: "这个迭代我们已经满负荷了。这个能等到下个迭代吗？",
  trap: "'capacity' /kəˈpæsɪti/ 重音在 -PAC-，四音节",
  tip: "'at capacity' 坦诚不回避，问句用上扬语调礼貌协商",
  pattern: "We're at capacity this ___. Can this wait until ___?",
  variants: [
    "We're fully loaded this sprint. Can this be pushed to next?",
    "We're maxed out this cycle. Can we slot this into the next one?"
  ]
};

const s114 = {
  id: 114,
  cat: "product",
  scene: "sprint-planning",
  text: "What are the dependencies between these two stories?",
  words: ["What","are","the","de·pen·den·cies","be·tween","these","two","sto·ries"],
  stress: [1,0,0,1,1,0,1,1],
  ipa: "wɒt ɑːr ðə dɪˈpɛndənsiz bɪˈtwiːn ðiːz tuː ˈstɔːriz",
  meaning: "Identify blocking relationships in planning",
  cn: "这两个需求之间有什么依赖关系？",
  trap: "'dependencies' /dɪˈpɛndənsiz/ 重音在 -PEN-，四音节",
  tip: "'dependencies' 和 'between' 重读，突出关联性",
  pattern: "What are the dependencies between ___?",
  variants: [
    "What are the dependencies between the frontend and backend work?",
    "Are there any dependencies we should be aware of?"
  ]
};

const s115 = {
  id: 115,
  cat: "product",
  scene: "post-mortem",
  text: "Let's focus on the process, not on blaming individuals.",
  words: ["Let's","fo·cus","on","the","pro·cess","not","on","blam·ing","in·di·vid·u·als"],
  stress: [1,1,0,0,1,1,0,1,1],
  ipa: "lɛts ˈfoʊkəs ɒn ðə ˈprɒsɛs nɒt ɒn ˈbleɪmɪŋ ˌɪndɪˈvɪdʒuəlz",
  meaning: "Set a blameless post-mortem tone",
  cn: "让我们关注流程本身，而不是责怪个人。",
  trap: "'individuals' /ˌɪndɪˈvɪdʒuəlz/ 重音在 -VID-，五音节",
  tip: "'process' 和 'individuals' 对比，语调公正不带情绪",
  pattern: "Let's focus on ___, not on ___",
  variants: [
    "Let's focus on what broke, not on who broke it.",
    "Let's focus on systemic fixes, not on assigning blame."
  ]
};

const s116 = {
  id: 116,
  cat: "product",
  scene: "post-mortem",
  text: "The root cause was a missing health check on the database.",
  words: ["The","root","cause","was","a","miss·ing","health","check","on","the","da·ta·base"],
  stress: [0,1,1,0,0,1,1,1,0,0,1],
  ipa: "ðə ruːt kɔːz wɒz ə ˈmɪsɪŋ hɛlθ tʃɛk ɒn ðə ˈdeɪtəbeɪs",
  meaning: "Identify the root cause in a post-mortem",
  cn: "根本原因是数据库缺少了一个健康检查。",
  trap: "'database' /ˈdeɪtəbeɪs/ 复合词，重音在 DA-",
  tip: "'root cause' 是核心术语重读，'missing health check' 具体精准",
  pattern: "The root cause was ___",
  variants: [
    "The root cause was a misconfigured load balancer.",
    "The root cause was a race condition in the queue processor."
  ]
};

const s117 = {
  id: 117,
  cat: "product",
  scene: "post-mortem",
  text: "What action items do we need to prevent this from recurring?",
  words: ["What","ac·tion","items","do","we","need","to","pre·vent","this","from","re·cur·ring"],
  stress: [1,1,1,0,0,1,0,1,1,0,1],
  ipa: "wɒt ˈækʃən ˈaɪtəmz duː wi niːd tə prɪˈvɛnt ðɪs frəm rɪˈkɜːrɪŋ",
  meaning: "Drive action items from a post-mortem",
  cn: "我们需要什么行动项来防止这种情况再次发生？",
  trap: "'recurring' /rɪˈkɜːrɪŋ/ 重音在 -CUR-，不是 RE-curring",
  tip: "'action items' 重读推动落实，'prevent' 和 'recurring' 表决心",
  pattern: "What action items do we need to prevent ___?",
  variants: [
    "What steps can we take to prevent this from happening again?",
    "What follow-ups do we need to make sure this doesn't recur?"
  ]
};

const s118 = {
  id: 118,
  cat: "product",
  scene: "demo",
  text: "Let me show you what we've built over the last two weeks.",
  words: ["Let","me","show","you","what","we've","built","o·ver","the","last","two","weeks"],
  stress: [0,0,1,0,0,1,1,1,0,1,1,1],
  ipa: "lɛt mi ʃoʊ juː wɒt wiːv bɪlt ˈoʊvər ðə læst tuː wiːks",
  meaning: "Open a sprint demo with enthusiasm",
  cn: "让我给你看看我们过去两周做了什么。",
  trap: "'built' /bɪlt/ 一个音节，不要读成 'build-ed'",
  tip: "'show you' 连读自然，'built' 有成就感语气",
  pattern: "Let me show you what we've built ___",
  variants: [
    "Let me show you what we've shipped this sprint.",
    "Let me walk you through what the team has built."
  ]
};

const s119 = {
  id: 119,
  cat: "product",
  scene: "demo",
  text: "As you can see, the response time dropped by forty percent.",
  words: ["As","you","can","see","the","re·sponse","time","dropped","by","for·ty","per·cent"],
  stress: [0,0,0,1,0,1,1,1,0,1,1],
  ipa: "æz juː kæn siː ðə rɪˈspɒns taɪm drɒpt baɪ ˈfɔːrti pərˈsɛnt",
  meaning: "Show measurable improvement in a demo",
  cn: "如你所见，响应时间下降了百分之四十。",
  trap: "'response' /rɪˈspɒns/ 重音在 -SPONSE，两音节",
  tip: "'dropped by forty percent' 数据清晰有力，让成果说话",
  pattern: "As you can see, the ___ dropped by ___",
  variants: [
    "As you can see, the error rate dropped by sixty percent.",
    "As you can see, load times improved by thirty-five percent."
  ]
};

const s120 = {
  id: 120,
  cat: "product",
  scene: "demo",
  text: "Any questions or feedback before we wrap up the demo?",
  words: ["An·y","ques·tions","or","feed·back","be·fore","we","wrap","up","the","de·mo"],
  stress: [1,1,0,1,1,0,1,1,0,1],
  ipa: "ˈɛni ˈkwɛstʃənz ɔːr ˈfiːdbæk bɪˈfɔːr wi ræp ʌp ðə ˈdɛmoʊ",
  meaning: "Close a demo by inviting feedback",
  cn: "在我们结束演示之前，有什么问题或反馈吗？",
  trap: "'demo' /ˈdɛmoʊ/ 重音在 DE-，美式发音",
  tip: "'questions or feedback' 开放邀请，'wrap up' 连读干脆",
  pattern: "Any ___ before we wrap up ___?",
  variants: [
    "Any thoughts or concerns before we wrap up?",
    "Any questions before we close out the demo?"
  ]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY4 = [
  s91, s92, s93, s94, s95, s96, s97, s98, s99, s100,
  s101, s102, s103, s104, s105, s106, s107, s108, s109, s110,
  s111, s112, s113, s114, s115, s116, s117, s118, s119, s120
];

export const SCENES_DAY4 = {
  91: { icon: "📝", colors: ["#2563EB", "#1E40AF"], title: "Tighten the Spec", sub: "Clearer acceptance criteria" },
  92: { icon: "🔎", colors: ["#7C3AED", "#5B21B6"], title: "Edge Cases", sub: "Finding the gaps" },
  93: { icon: "📐", colors: ["#059669", "#047857"], title: "Scope First", sub: "Define before you build" },
  94: { icon: "☀️", colors: ["#F59E0B", "#D97706"], title: "Daily Update", sub: "Concise standup" },
  95: { icon: "🚫", colors: ["#DC2626", "#B91C1C"], title: "Blocked!", sub: "Flagging dependencies" },
  96: { icon: "✅", colors: ["#10B981", "#059669"], title: "On Track", sub: "Smooth progress" },
  97: { icon: "🔄", colors: ["#6366F1", "#4F46E5"], title: "Retro Kick-off", sub: "What went well & differently" },
  98: { icon: "📉", colors: ["#E11D48", "#BE123C"], title: "Underestimated", sub: "Honest reflection" },
  99: { icon: "💡", colors: ["#8B5CF6", "#7C3AED"], title: "Lessons Learned", sub: "Personal takeaway" },
  100: { icon: "🚀", colors: ["#059669", "#047857"], title: "Go for Launch", sub: "All systems green" },
  101: { icon: "📊", colors: ["#0891B2", "#0E7490"], title: "Staged Rollout", sub: "Cautious deployment" },
  102: { icon: "👁️", colors: ["#1F2937", "#111827"], title: "Watch the Dash", sub: "Post-launch monitoring" },
  103: { icon: "🗺️", colors: ["#7C3AED", "#6D28D9"], title: "Roadmap Fit", sub: "Strategic alignment" },
  104: { icon: "⬇️", colors: ["#EA580C", "#C2410C"], title: "Deprioritize", sub: "Making trade-offs" },
  105: { icon: "📏", colors: ["#D97706", "#B45309"], title: "Level of Effort", sub: "Sizing the work" },
  106: { icon: "😣", colors: ["#EF4444", "#DC2626"], title: "Pain Points", sub: "User research probe" },
  107: { icon: "🚶", colors: ["#14B8A6", "#0D9488"], title: "Walk Me Through", sub: "Understanding the user" },
  108: { icon: "📅", colors: ["#3B82F6", "#2563EB"], title: "How Often?", sub: "Quantifying the problem" },
  109: { icon: "🧪", colors: ["#A855F7", "#9333EA"], title: "Test It", sub: "Data over opinions" },
  110: { icon: "📈", colors: ["#10B981", "#059669"], title: "Variant Wins", sub: "A/B test results" },
  111: { icon: "⏳", colors: ["#78716C", "#57534E"], title: "Stat Sig", sub: "Patience for data" },
  112: { icon: "🎯", colors: ["#F59E0B", "#EAB308"], title: "Story Points", sub: "Estimation ritual" },
  113: { icon: "🔋", colors: ["#EF4444", "#B91C1C"], title: "At Capacity", sub: "Protecting the sprint" },
  114: { icon: "🔗", colors: ["#6366F1", "#4F46E5"], title: "Dependencies", sub: "Mapping blockers" },
  115: { icon: "🕊️", colors: ["#2563EB", "#1D4ED8"], title: "Blameless", sub: "Process over people" },
  116: { icon: "🌱", colors: ["#DC2626", "#991B1B"], title: "Root Cause", sub: "Finding the real issue" },
  117: { icon: "📋", colors: ["#F97316", "#EA580C"], title: "Action Items", sub: "Preventing recurrence" },
  118: { icon: "🎬", colors: ["#8B5CF6", "#6D28D9"], title: "Show & Tell", sub: "Sprint demo opening" },
  119: { icon: "⚡", colors: ["#059669", "#047857"], title: "Performance Win", sub: "Data-backed demo" },
  120: { icon: "🎤", colors: ["#E11D48", "#BE123C"], title: "Q&A Time", sub: "Closing the demo" }
};
