// ─── Day 14 · AI & Future Tech ────────────────────────────────────
// 30 sentences (id 391-420)

const s391 = {
  id: 391,
  cat: "ai-future-tech",
  scene: "ai-demo",
  text: "Let me show you what happens when I type this prompt into the model — watch the output.",
  words: ["Let","me","show","you","what","hap·pens","when","I","type","this","prompt","in·to","the","mod·el","watch","the","out·put"],
  stress: [0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1],
  ipa: "lɛt mi ʃoʊ juː wʌt ˈhæpənz wɛn aɪ taɪp ðɪs prɒmpt ˈɪntə ðə ˈmɒdəl wɒtʃ ðə ˈaʊtpʊt",
  meaning: "Set up a live AI demo with audience engagement",
  cn: "让我给你看当我把这个提示词输入模型时会发生什么——看输出。",
  trap: "'model' /ˈmɒdəl/ 重音在 MOD-，两音节，不要读成三音节",
  tip: "'watch the output' 给听众一个具体的注意点——比 'look at this' 更有方向感",
  pattern: "Let me show you what happens when I ___ — watch the ___",
  variants: [
    "I'm going to run this live — keep your eyes on the response time.",
    "Let's see this in action — I'll type a real query and we'll watch it together."
  ]
};

const s392 = {
  id: 392,
  cat: "ai-future-tech",
  scene: "ai-demo",
  text: "Notice how the model didn't just answer the question — it understood the context behind it.",
  words: ["No·tice","how","the","mod·el","didn't","just","an·swer","the","ques·tion","it","un·der·stood","the","con·text","be·hind","it"],
  stress: [1,0,0,1,1,0,1,0,1,0,1,0,1,1,0],
  ipa: "ˈnoʊtɪs haʊ ðə ˈmɒdəl ˈdɪdənt dʒʌst ˈænsər ðə ˈkwɛstʃən ɪt ˌʌndərˈstʊd ðə ˈkɒntɛkst bɪˈhaɪnd ɪt",
  meaning: "Highlight the intelligence of an AI output during a demo",
  cn: "注意模型不只是回答了问题——它理解了背后的语境。",
  trap: "'context' /ˈkɒntɛkst/ 重音在 CON-，两音节",
  tip: "'didn't just... it understood' 对比结构——demo解说的升级套路",
  pattern: "Notice how ___ didn't just ___ — it ___",
  variants: [
    "Look at that — it picked up on the nuance without any explicit instruction.",
    "What's impressive here isn't the answer, it's the reasoning behind it."
  ]
};

const s393 = {
  id: 393,
  cat: "ai-future-tech",
  scene: "ai-demo",
  text: "This is running on a single GPU in real time — no pre-recorded tricks, no cherry-picking.",
  words: ["This","is","run·ning","on","a","sin·gle","G·P·U","in","real","time","no","pre-re·cord·ed","tricks","no","cher·ry-pick·ing"],
  stress: [1,0,1,0,0,1,1,0,1,1,1,1,1,1,1],
  ipa: "ðɪs ɪz ˈrʌnɪŋ ɒn ə ˈsɪŋɡəl ˌdʒiːpiːˈjuː ɪn rɪəl taɪm noʊ ˌpriːrɪˈkɔːrdɪd trɪks noʊ ˈtʃɛripɪkɪŋ",
  meaning: "Establish credibility by showing a demo is genuine",
  cn: "这是在单个GPU上实时运行的——没有预录的把戏，没有精心挑选。",
  trap: "'GPU' /ˌdʒiːpiːˈjuː/ 三个字母分别发音，重音在 U",
  tip: "'no tricks, no cherry-picking' 双重否定建立信任——AI demo最怕被质疑造假",
  pattern: "This is running ___ in real time — no ___, no ___",
  variants: [
    "Everything you're seeing is live — I haven't rehearsed this once.",
    "This isn't a polished recording — this is the raw model output."
  ]
};

const s394 = {
  id: 394,
  cat: "ai-future-tech",
  scene: "ethics-debate",
  text: "Just because we can build it doesn't mean we should — we need to ask who gets hurt.",
  words: ["Just","be·cause","we","can","build","it","doesn't","mean","we","should","we","need","to","ask","who","gets","hurt"],
  stress: [1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1],
  ipa: "dʒʌst bɪˈkɒz wi kæn bɪld ɪt ˈdʌzənt miːn wi ʃʊd wi niːd tə æsk huː ɡɛts hɜːrt",
  meaning: "Raise the ethical responsibility question in AI development",
  cn: "仅仅因为我们能造出来并不意味着我们应该造——我们需要问谁会受到伤害。",
  trap: "'because' /bɪˈkɒz/ 重音在 -CAUSE，两音节",
  tip: "'can... doesn't mean should' 是科技伦理辩论的核心句式——简单但有力",
  pattern: "Just because we can ___ doesn't mean we should — we need to ask ___",
  variants: [
    "The fact that it's technically possible doesn't make it ethically acceptable.",
    "Innovation without guardrails is just recklessness with a better name."
  ]
};

const s395 = {
  id: 395,
  cat: "ai-future-tech",
  scene: "ethics-debate",
  text: "The bias in the model reflects the bias in the data — and ultimately, in us.",
  words: ["The","bi·as","in","the","mod·el","re·flects","the","bi·as","in","the","da·ta","and","ul·ti·mate·ly","in","us"],
  stress: [0,1,0,0,1,1,0,1,0,0,1,0,1,0,1],
  ipa: "ðə ˈbaɪəs ɪn ðə ˈmɒdəl rɪˈflɛkts ðə ˈbaɪəs ɪn ðə ˈdeɪtə ænd ˈʌltɪmətli ɪn ʌs",
  meaning: "Trace AI bias back to its human origins",
  cn: "模型中的偏见反映了数据中的偏见——归根结底，是我们自身的偏见。",
  trap: "'bias' /ˈbaɪəs/ 重音在 BI-，两音节，不要读成一个音节",
  tip: "'bias in model → bias in data → in us' 三层递进——优秀的伦理论证结构",
  pattern: "The ___ in the model reflects the ___ in the data — and ultimately, in us",
  variants: [
    "AI doesn't create prejudice out of thin air — it learns it from the world we built.",
    "Garbage in, garbage out — but the garbage is ours to own."
  ]
};

const s396 = {
  id: 396,
  cat: "ai-future-tech",
  scene: "ethics-debate",
  text: "We need diverse voices at the table when we're deciding how these systems affect people's lives.",
  words: ["We","need","di·verse","voic·es","at","the","ta·ble","when","we're","de·cid·ing","how","these","sys·tems","af·fect","peo·ple's","lives"],
  stress: [0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1],
  ipa: "wi niːd daɪˈvɜːrs ˈvɔɪsɪz æt ðə ˈteɪbəl wɛn wɪr dɪˈsaɪdɪŋ haʊ ðiːz ˈsɪstəmz əˈfɛkt ˈpiːpəlz laɪvz",
  meaning: "Advocate for inclusive decision-making in AI governance",
  cn: "当我们决定这些系统如何影响人们的生活时，我们需要多元的声音参与讨论。",
  trap: "'diverse' /daɪˈvɜːrs/ 重音在 -VERSE，两音节",
  tip: "'voices at the table' 是包容性治理的经典隐喻——谁在场决定了什么被考虑",
  pattern: "We need diverse voices at the table when we're deciding ___",
  variants: [
    "If the people building AI don't reflect the people using it, we have a problem.",
    "Representation isn't a nice-to-have — it's a design requirement."
  ]
};

const s397 = {
  id: 397,
  cat: "ai-future-tech",
  scene: "automation-impact",
  text: "Automation won't replace people — it will replace tasks, and that changes the skills we need.",
  words: ["Au·to·ma·tion","won't","re·place","peo·ple","it","will","re·place","tasks","and","that","chang·es","the","skills","we","need"],
  stress: [1,1,1,1,0,0,1,1,0,0,1,0,1,0,1],
  ipa: "ˌɔːtəˈmeɪʃən woʊnt rɪˈpleɪs ˈpiːpəl ɪt wɪl rɪˈpleɪs tæsks ænd ðæt ˈtʃeɪndʒɪz ðə skɪlz wi niːd",
  meaning: "Reframe automation anxiety from job loss to skill shift",
  cn: "自动化不会取代人——它会取代任务，而这改变了我们需要的技能。",
  trap: "'automation' /ˌɔːtəˈmeɪʃən/ 重音在 -MA-，四音节",
  tip: "'people → tasks' 关键转换——把恐惧话题转为成长话题",
  pattern: "Automation won't replace ___ — it will replace ___, and that changes ___",
  variants: [
    "It's not about robots taking your job — it's about the job changing around you.",
    "The roles aren't disappearing; they're evolving — and so should we."
  ]
};

const s398 = {
  id: 398,
  cat: "ai-future-tech",
  scene: "automation-impact",
  text: "The warehouse workers we interviewed said the same thing — they want to learn, not be left behind.",
  words: ["The","ware·house","work·ers","we","in·ter·viewed","said","the","same","thing","they","want","to","learn","not","be","left","be·hind"],
  stress: [0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1],
  ipa: "ðə ˈwɛrhaʊs ˈwɜːrkərz wi ˈɪntərvjuːd sɛd ðə seɪm θɪŋ ðeɪ wɒnt tə lɜːrn nɒt bi lɛft bɪˈhaɪnd",
  meaning: "Ground an automation argument with real human voices",
  cn: "我们采访的仓库工人们说了同样的话——他们想学习，不想被落下。",
  trap: "'interviewed' /ˈɪntərvjuːd/ 重音在 IN-，三音节",
  tip: "用真人声音支撑论点——'they said the same thing' 比统计数据更有说服力",
  pattern: "The ___ we interviewed said the same thing — they want to ___, not ___",
  variants: [
    "Every single worker we spoke to asked for training, not a buyout.",
    "The people on the front lines aren't scared of change — they're scared of being ignored."
  ]
};

const s399 = {
  id: 399,
  cat: "ai-future-tech",
  scene: "automation-impact",
  text: "If we automate without reskilling, we're not innovating — we're just creating inequality faster.",
  words: ["If","we","au·to·mate","with·out","re·skill·ing","we're","not","in·no·vat·ing","we're","just","cre·at·ing","in·e·qual·i·ty","fast·er"],
  stress: [0,0,1,1,1,1,1,1,1,0,1,1,1],
  ipa: "ɪf wi ˈɔːtəmeɪt wɪðˈaʊt riːˈskɪlɪŋ wɪr nɒt ˈɪnəveɪtɪŋ wɪr dʒʌst kriˈeɪtɪŋ ˌɪnɪˈkwɒlɪti ˈfæstər",
  meaning: "Connect automation to social responsibility",
  cn: "如果我们自动化却不进行技能再培训，那我们不是在创新——只是在更快地制造不平等。",
  trap: "'inequality' /ˌɪnɪˈkwɒlɪti/ 重音在 -QUAL-，五音节",
  tip: "'not innovating, just creating inequality' 重新定义——迫使听众重新审视'进步'",
  pattern: "If we ___ without ___, we're not ___ — we're just ___",
  variants: [
    "Progress that only benefits the top isn't progress — it's a widening gap.",
    "Technology without equity is just a faster way to leave people behind."
  ]
};

const s400 = {
  id: 400,
  cat: "ai-future-tech",
  scene: "prompt-engineering",
  text: "The quality of the output is directly proportional to the quality of your prompt.",
  words: ["The","qual·i·ty","of","the","out·put","is","di·rect·ly","pro·por·tion·al","to","the","qual·i·ty","of","your","prompt"],
  stress: [0,1,0,0,1,0,1,1,0,0,1,0,0,1],
  ipa: "ðə ˈkwɒlɪti əv ðə ˈaʊtpʊt ɪz dəˈrɛktli prəˈpɔːrʃənəl tə ðə ˈkwɒlɪti əv jɔːr prɒmpt",
  meaning: "State the fundamental principle of prompt engineering",
  cn: "输出的质量与你提示词的质量成正比。",
  trap: "'proportional' /prəˈpɔːrʃənəl/ 重音在 -POR-，四音节",
  tip: "'directly proportional' 借用数学语言给出清晰因果——简洁权威",
  pattern: "The quality of ___ is directly proportional to the quality of ___",
  variants: [
    "Better prompts, better results — it's that straightforward.",
    "If you're getting bad outputs, the first place to look is your input."
  ]
};

const s401 = {
  id: 401,
  cat: "ai-future-tech",
  scene: "prompt-engineering",
  text: "Give the model a role, give it context, and be specific about the format you want.",
  words: ["Give","the","mod·el","a","role","give","it","con·text","and","be","spe·cif·ic","a·bout","the","for·mat","you","want"],
  stress: [1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1],
  ipa: "ɡɪv ðə ˈmɒdəl ə roʊl ɡɪv ɪt ˈkɒntɛkst ænd bi spəˈsɪfɪk əˈbaʊt ðə ˈfɔːrmæt juː wɒnt",
  meaning: "Teach the three pillars of effective prompt design",
  cn: "给模型一个角色，给它上下文，并对你想要的格式具体说明。",
  trap: "'specific' /spəˈsɪfɪk/ 重音在 -CIF-，三音节",
  tip: "'role, context, format' 三要素框架——prompt engineering 的万能公式",
  pattern: "Give the model ___, give it ___, and be specific about ___",
  variants: [
    "Three rules: tell it who it is, what it knows, and how you want the answer.",
    "Role plus context plus format — that's the prompt engineering cheat code."
  ]
};

const s402 = {
  id: 402,
  cat: "ai-future-tech",
  scene: "prompt-engineering",
  text: "Instead of asking for the best answer, ask it to think step by step — the results are dramatically better.",
  words: ["In·stead","of","ask·ing","for","the","best","an·swer","ask","it","to","think","step","by","step","the","re·sults","are","dra·mat·i·cal·ly","bet·ter"],
  stress: [1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1],
  ipa: "ɪnˈstɛd əv ˈæskɪŋ fɔːr ðə bɛst ˈænsər æsk ɪt tə θɪŋk stɛp baɪ stɛp ðə rɪˈzʌlts ɑːr drəˈmætɪkəli ˈbɛtər",
  meaning: "Introduce chain-of-thought prompting technique",
  cn: "与其要求最好的答案，不如让它一步步思考——结果会好得多。",
  trap: "'dramatically' /drəˈmætɪkəli/ 重音在 -MAT-，五音节",
  tip: "'step by step' 是 chain-of-thought 的核心咒语——一个提示词改变输出质量",
  pattern: "Instead of asking for ___, ask it to ___ — the results are ___",
  variants: [
    "Chain-of-thought prompting is a game changer — try adding 'let's think through this' to your prompts.",
    "Don't rush the model to a conclusion — let it show its work."
  ]
};

const s403 = {
  id: 403,
  cat: "ai-future-tech",
  scene: "model-evaluation",
  text: "The benchmark scores look impressive, but how does it perform on real-world edge cases?",
  words: ["The","bench·mark","scores","look","im·pres·sive","but","how","does","it","per·form","on","real-world","edge","cas·es"],
  stress: [0,1,1,1,1,0,1,0,0,1,0,1,1,1],
  ipa: "ðə ˈbɛntʃmɑːrk skɔːrz lʊk ɪmˈprɛsɪv bʌt haʊ dʌz ɪt pərˈfɔːrm ɒn ˌrɪəlˈwɜːrld ɛdʒ ˈkeɪsɪz",
  meaning: "Challenge superficial model evaluation with practical concerns",
  cn: "基准测试分数看起来很好，但在真实世界的边缘案例上表现如何？",
  trap: "'benchmark' /ˈbɛntʃmɑːrk/ 复合词，重音在 BENCH-",
  tip: "'looks impressive, but' 是批判性思维的转折——AI评估不能只看排行榜",
  pattern: "The ___ scores look impressive, but how does it perform on ___?",
  variants: [
    "Great numbers on paper — but what happens when you throw messy, real data at it?",
    "Benchmarks are useful, but they don't capture the chaos of production environments."
  ]
};

const s404 = {
  id: 404,
  cat: "ai-future-tech",
  scene: "model-evaluation",
  text: "We tested it across five languages and three domains — the results were surprisingly inconsistent.",
  words: ["We","test·ed","it","a·cross","five","lan·guag·es","and","three","do·mains","the","re·sults","were","sur·pris·ing·ly","in·con·sis·tent"],
  stress: [0,1,0,1,1,1,0,1,1,0,1,0,1,1],
  ipa: "wi ˈtɛstɪd ɪt əˈkrɒs faɪv ˈlæŋɡwɪdʒɪz ænd θriː dəˈmeɪnz ðə rɪˈzʌlts wɜːr sərˈpraɪzɪŋli ˌɪnkənˈsɪstənt",
  meaning: "Report nuanced evaluation findings honestly",
  cn: "我们在五种语言和三个领域进行了测试——结果出奇地不一致。",
  trap: "'inconsistent' /ˌɪnkənˈsɪstənt/ 重音在 -SIS-，四音节",
  tip: "'surprisingly inconsistent' 诚实报告比美化数据更有影响力——建立科学信任",
  pattern: "We tested it across ___ and ___ — the results were ___",
  variants: [
    "It crushed English tasks but struggled badly with low-resource languages.",
    "The performance gap between domains was much wider than we expected."
  ]
};

const s405 = {
  id: 405,
  cat: "ai-future-tech",
  scene: "model-evaluation",
  text: "Before we deploy this, I want to see the failure modes — show me where it breaks.",
  words: ["Be·fore","we","de·ploy","this","I","want","to","see","the","fail·ure","modes","show","me","where","it","breaks"],
  stress: [1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1],
  ipa: "bɪˈfɔːr wi dɪˈplɔɪ ðɪs aɪ wɒnt tə siː ðə ˈfeɪljər moʊdz ʃoʊ mi wɛr ɪt breɪks",
  meaning: "Demand failure analysis before model deployment",
  cn: "在我们部署之前，我想看看故障模式——给我看它在哪里出问题。",
  trap: "'deploy' /dɪˈplɔɪ/ 重音在 -PLOY，两音节",
  tip: "'show me where it breaks' 是负责任AI的核心问句——成功案例人人会讲，故障才见功力",
  pattern: "Before we deploy, I want to see ___ — show me where ___",
  variants: [
    "I'm less interested in the best case — walk me through the worst case.",
    "Don't just show me the wins — I need to understand the failure modes."
  ]
};

const s406 = {
  id: 406,
  cat: "ai-future-tech",
  scene: "ai-strategy",
  text: "Our AI strategy shouldn't start with technology — it should start with the business problem we're solving.",
  words: ["Our","A·I","strat·e·gy","shouldn't","start","with","tech·nol·o·gy","it","should","start","with","the","busi·ness","prob·lem","we're","solv·ing"],
  stress: [0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1],
  ipa: "aʊər ˌeɪˈaɪ ˈstrætədʒi ˈʃʊdənt stɑːrt wɪð tɛkˈnɒlədʒi ɪt ʃʊd stɑːrt wɪð ðə ˈbɪznɪs ˈprɒbləm wɪr ˈsɒlvɪŋ",
  meaning: "Reframe AI strategy from tech-first to problem-first",
  cn: "我们的AI策略不应该从技术开始——应该从我们要解决的业务问题开始。",
  trap: "'strategy' /ˈstrætədʒi/ 重音在 STRAT-，三音节",
  tip: "'shouldn't start with tech, should start with problem' 反转思路——避免AI战略最常见的错误",
  pattern: "Our ___ strategy shouldn't start with ___ — it should start with ___",
  variants: [
    "Don't ask 'how can we use AI?' — ask 'what problem are we trying to solve?'",
    "Technology is a means, not an end — lead with the outcome, not the tool."
  ]
};

const s407 = {
  id: 407,
  cat: "ai-future-tech",
  scene: "ai-strategy",
  text: "I recommend we start with a small pilot — prove the value, then scale across the organization.",
  words: ["I","rec·om·mend","we","start","with","a","small","pi·lot","prove","the","val·ue","then","scale","a·cross","the","or·gan·i·za·tion"],
  stress: [0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1],
  ipa: "aɪ ˌrɛkəˈmɛnd wi stɑːrt wɪð ə smɔːl ˈpaɪlət pruːv ðə ˈvæljuː ðɛn skeɪl əˈkrɒs ðə ˌɔːrɡənəˈzeɪʃən",
  meaning: "Propose a phased AI adoption approach",
  cn: "我建议我们从一个小型试点开始——证明价值，然后在整个组织中推广。",
  trap: "'organization' /ˌɔːrɡənəˈzeɪʃən/ 重音在 -ZA-，五音节",
  tip: "'pilot → prove → scale' 三步渐进——企业AI落地的安全路径",
  pattern: "I recommend we start with ___ — prove ___, then scale ___",
  variants: [
    "Let's pick one use case, nail it, and use that as our proof of concept.",
    "Small wins build confidence — let's start narrow and expand from there."
  ]
};

const s408 = {
  id: 408,
  cat: "ai-future-tech",
  scene: "ai-strategy",
  text: "The competitive advantage isn't in having AI — it's in having the data and the culture to use it well.",
  words: ["The","com·pet·i·tive","ad·van·tage","isn't","in","hav·ing","A·I","it's","in","hav·ing","the","da·ta","and","the","cul·ture","to","use","it","well"],
  stress: [0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1],
  ipa: "ðə kəmˈpɛtɪtɪv ədˈvæntɪdʒ ˈɪzənt ɪn ˈhævɪŋ ˌeɪˈaɪ ɪts ɪn ˈhævɪŋ ðə ˈdeɪtə ænd ðə ˈkʌltʃər tə juːz ɪt wɛl",
  meaning: "Identify the real moat in AI adoption",
  cn: "竞争优势不在于拥有AI——而在于拥有数据和善用它的文化。",
  trap: "'competitive' /kəmˈpɛtɪtɪv/ 重音在 -PET-，四音节",
  tip: "'isn't in having AI, it's in data and culture' 揭示真正的护城河——技术人人能买，文化买不到",
  pattern: "The competitive advantage isn't in ___ — it's in having ___ and ___",
  variants: [
    "Everyone can access the same models — the difference is what you do with them.",
    "AI is the equalizer; culture and data are the differentiators."
  ]
};

const s409 = {
  id: 409,
  cat: "ai-future-tech",
  scene: "regulation-discussion",
  text: "Regulation doesn't have to kill innovation — done right, it actually builds consumer trust.",
  words: ["Reg·u·la·tion","doesn't","have","to","kill","in·no·va·tion","done","right","it","ac·tu·al·ly","builds","con·su·mer","trust"],
  stress: [1,1,0,0,1,1,1,1,0,1,1,1,1],
  ipa: "ˌrɛɡjʊˈleɪʃən ˈdʌzənt hæv tə kɪl ˌɪnəˈveɪʃən dʌn raɪt ɪt ˈæktʃuəli bɪldz kənˈsjuːmər trʌst",
  meaning: "Reframe regulation as an enabler rather than a blocker",
  cn: "监管不一定会扼杀创新——做对了，它实际上会建立消费者信任。",
  trap: "'regulation' /ˌrɛɡjʊˈleɪʃən/ 重音在 -LA-，四音节",
  tip: "'doesn't have to kill... actually builds' 双重反转——改变对监管的默认恐惧",
  pattern: "Regulation doesn't have to ___ — done right, it actually ___",
  variants: [
    "Smart regulation can be a competitive advantage — just look at GDPR and data trust.",
    "The question isn't whether to regulate — it's how to regulate without stifling progress."
  ]
};

const s410 = {
  id: 410,
  cat: "ai-future-tech",
  scene: "regulation-discussion",
  text: "We're asking lawmakers to regulate technology they barely understand — that's a recipe for bad policy.",
  words: ["We're","ask·ing","law·mak·ers","to","reg·u·late","tech·nol·o·gy","they","bare·ly","un·der·stand","that's","a","rec·i·pe","for","bad","pol·i·cy"],
  stress: [1,1,1,0,1,1,0,1,1,1,0,1,0,1,1],
  ipa: "wɪr ˈæskɪŋ ˈlɔːmeɪkərz tə ˈrɛɡjʊleɪt tɛkˈnɒlədʒi ðeɪ ˈbɛrli ˌʌndərˈstænd ðæts ə ˈrɛsɪpi fɔːr bæd ˈpɒlɪsi",
  meaning: "Identify the knowledge gap in AI governance",
  cn: "我们在要求立法者监管他们几乎不理解的技术——这是制定糟糕政策的配方。",
  trap: "'recipe' /ˈrɛsɪpi/ 重音在 REC-，三音节，注意 silent p-e 结尾",
  tip: "'barely understand... recipe for bad policy' 对比张力——用画面感表达系统性问题",
  pattern: "We're asking ___ to ___ something they barely ___ — that's a recipe for ___",
  variants: [
    "How can we expect good AI regulation when most legislators can't define machine learning?",
    "The gap between policy speed and technology speed is a governance crisis."
  ]
};

const s411 = {
  id: 411,
  cat: "ai-future-tech",
  scene: "regulation-discussion",
  text: "Self-regulation is a privilege, not a right — and the industry hasn't earned enough trust to keep it.",
  words: ["Self-reg·u·la·tion","is","a","priv·i·lege","not","a","right","and","the","in·dus·try","hasn't","earned","e·nough","trust","to","keep","it"],
  stress: [1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0],
  ipa: "ˌsɛlfrɛɡjʊˈleɪʃən ɪz ə ˈprɪvəlɪdʒ nɒt ə raɪt ænd ðə ˈɪndəstri ˈhæzənt ɜːrnd ɪˈnʌf trʌst tə kiːp ɪt",
  meaning: "Challenge the tech industry's self-regulation narrative",
  cn: "自我监管是特权，不是权利——而这个行业还没有赢得足够的信任来保留它。",
  trap: "'privilege' /ˈprɪvəlɪdʒ/ 重音在 PRIV-，三音节",
  tip: "'privilege, not a right' 是辩论中的杀手定义——重新框定整个讨论基调",
  pattern: "Self-regulation is a ___, not a ___ — and ___ hasn't earned enough ___",
  variants: [
    "The 'trust us' era of tech is over — we need external accountability.",
    "Every major industry eventually gets regulated — AI won't be the exception."
  ]
};

const s412 = {
  id: 412,
  cat: "ai-future-tech",
  scene: "human-ai-collab",
  text: "The best results come when humans and AI work together — neither one alone is enough.",
  words: ["The","best","re·sults","come","when","hu·mans","and","A·I","work","to·geth·er","nei·ther","one","a·lone","is","e·nough"],
  stress: [0,1,1,1,0,1,0,1,1,1,1,1,1,0,1],
  ipa: "ðə bɛst rɪˈzʌlts kʌm wɛn ˈhjuːmənz ænd ˌeɪˈaɪ wɜːrk təˈɡɛðər ˈniːðər wʌn əˈloʊn ɪz ɪˈnʌf",
  meaning: "Advocate for human-AI collaboration over replacement",
  cn: "最好的结果来自人类和AI的合作——单靠任何一方都不够。",
  trap: "'neither' /ˈniːðər/ 重音在 NEI-，注意 /ð/ 浊音",
  tip: "'neither one alone is enough' 平衡论点——既不神化AI也不忽视它",
  pattern: "The best results come when ___ and ___ work together — neither alone is enough",
  variants: [
    "Humans bring judgment; AI brings scale — together, they're unstoppable.",
    "AI without human oversight is dangerous; humans without AI are just slow."
  ]
};

const s413 = {
  id: 413,
  cat: "ai-future-tech",
  scene: "human-ai-collab",
  text: "I use AI to handle the first draft, then I bring the creativity and the judgment.",
  words: ["I","use","A·I","to","han·dle","the","first","draft","then","I","bring","the","cre·a·tiv·i·ty","and","the","judg·ment"],
  stress: [0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1],
  ipa: "aɪ juːz ˌeɪˈaɪ tə ˈhændəl ðə fɜːrst dræft ðɛn aɪ brɪŋ ðə ˌkriːeɪˈtɪvɪti ænd ðə ˈdʒʌdʒmənt",
  meaning: "Describe a practical human-AI workflow",
  cn: "我用AI处理初稿，然后我加入创造力和判断力。",
  trap: "'creativity' /ˌkriːeɪˈtɪvɪti/ 重音在 -TIV-，五音节",
  tip: "'AI handles draft, I bring creativity' 具体的分工描述——把抽象协作变成可操作的流程",
  pattern: "I use AI to handle ___, then I bring the ___ and the ___",
  variants: [
    "Let the machine do the heavy lifting — I focus on the parts that need a human touch.",
    "AI writes the skeleton; I add the soul."
  ]
};

const s414 = {
  id: 414,
  cat: "ai-future-tech",
  scene: "human-ai-collab",
  text: "The goal isn't to remove humans from the loop — it's to make the loop faster and smarter.",
  words: ["The","goal","isn't","to","re·move","hu·mans","from","the","loop","it's","to","make","the","loop","fast·er","and","smart·er"],
  stress: [0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1],
  ipa: "ðə ɡoʊl ˈɪzənt tə rɪˈmuːv ˈhjuːmənz frɒm ðə luːp ɪts tə meɪk ðə luːp ˈfæstər ænd ˈsmɑːrtər",
  meaning: "Redefine the purpose of AI in human workflows",
  cn: "目标不是把人类从环节中移除——而是让这个环节更快更聪明。",
  trap: "'remove' /rɪˈmuːv/ 重音在 -MOVE，两音节",
  tip: "'isn't to remove, it's to make faster' 重新定义目标——消除AI替代恐惧",
  pattern: "The goal isn't to ___ — it's to make ___ faster and ___",
  variants: [
    "Human-in-the-loop isn't a limitation — it's a feature.",
    "We're augmenting human capability, not replacing human judgment."
  ]
};

const s415 = {
  id: 415,
  cat: "ai-future-tech",
  scene: "future-vision",
  text: "In ten years, we'll look back at today's AI the way we look at dial-up internet now.",
  words: ["In","ten","years","we'll","look","back","at","to·day's","A·I","the","way","we","look","at","di·al-up","in·ter·net","now"],
  stress: [0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1],
  ipa: "ɪn tɛn jɪrz wiːl lʊk bæk æt təˈdeɪz ˌeɪˈaɪ ðə weɪ wi lʊk æt ˈdaɪəlʌp ˈɪntərnɛt naʊ",
  meaning: "Use a temporal comparison to illustrate the pace of AI progress",
  cn: "十年后，我们看今天的AI就像现在看拨号上网一样。",
  trap: "'dial-up' /ˈdaɪəlʌp/ 重音在 DI-，复合词",
  tip: "时间类比是未来愿景演讲的杀手锏——把抽象的进步变成具体的画面",
  pattern: "In ten years, we'll look back at today's ___ the way we look at ___ now",
  variants: [
    "What feels cutting-edge today will feel primitive in a decade.",
    "We're still in the horse-and-buggy era of artificial intelligence."
  ]
};

const s416 = {
  id: 416,
  cat: "ai-future-tech",
  scene: "future-vision",
  text: "Imagine a world where every student has a personal AI tutor that adapts to how they learn.",
  words: ["I·mag·ine","a","world","where","ev·ery","stu·dent","has","a","per·son·al","A·I","tu·tor","that","a·dapts","to","how","they","learn"],
  stress: [1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1],
  ipa: "ɪˈmædʒɪn ə wɜːrld wɛr ˈɛvri ˈstjuːdənt hæz ə ˈpɜːrsənəl ˌeɪˈaɪ ˈtjuːtər ðæt əˈdæpts tə haʊ ðeɪ lɜːrn",
  meaning: "Paint a positive future vision of AI in education",
  cn: "想象一个世界，每个学生都有一个根据他们的学习方式调整的个人AI导师。",
  trap: "'adapts' /əˈdæpts/ 重音在 -DAPTS，两音节",
  tip: "'Imagine a world where' 是愿景演讲的经典开头——立刻把听众传送到未来",
  pattern: "Imagine a world where every ___ has a personal ___",
  variants: [
    "What if no child ever fell behind because AI caught the learning gap in real time?",
    "Picture education where the curriculum adapts to you, not the other way around."
  ]
};

const s417 = {
  id: 417,
  cat: "ai-future-tech",
  scene: "future-vision",
  text: "The future belongs to those who learn to work with machines, not against them.",
  words: ["The","fu·ture","be·longs","to","those","who","learn","to","work","with","ma·chines","not","a·gainst","them"],
  stress: [0,1,1,0,1,0,1,0,1,0,1,1,1,0],
  ipa: "ðə ˈfjuːtʃər bɪˈlɒŋz tə ðoʊz huː lɜːrn tə wɜːrk wɪð məˈʃiːnz nɒt əˈɡɛnst ðɛm",
  meaning: "Frame adaptability as the key to thriving in an AI world",
  cn: "未来属于那些学会与机器合作而不是与之对抗的人。",
  trap: "'machines' /məˈʃiːnz/ 重音在 -CHINES，两音节",
  tip: "'with, not against' 简洁对比——一句话总结人机关系的正确姿态",
  pattern: "The future belongs to those who ___, not ___",
  variants: [
    "Resistance to AI is futile — adaptation is the only winning strategy.",
    "The winners won't be the smartest — they'll be the most adaptable."
  ]
};

const s418 = {
  id: 418,
  cat: "ai-future-tech",
  scene: "tech-philosophy",
  text: "Intelligence is not consciousness — and we should be very careful about confusing the two.",
  words: ["In·tel·li·gence","is","not","con·scious·ness","and","we","should","be","ver·y","care·ful","a·bout","con·fus·ing","the","two"],
  stress: [1,0,1,1,0,0,1,0,1,1,1,1,0,1],
  ipa: "ɪnˈtɛlɪdʒəns ɪz nɒt ˈkɒnʃəsnəs ænd wi ʃʊd bi ˈvɛri ˈkɛrfəl əˈbaʊt kənˈfjuːzɪŋ ðə tuː",
  meaning: "Draw a philosophical line between AI capability and sentience",
  cn: "智能不是意识——我们应该非常小心不要混淆这两者。",
  trap: "'consciousness' /ˈkɒnʃəsnəs/ 重音在 CON-，三音节",
  tip: "'intelligence is not consciousness' 是AI哲学最核心的区分——一句话定义整个辩论",
  pattern: "___ is not ___ — and we should be very careful about confusing the two",
  variants: [
    "Just because it sounds smart doesn't mean it understands anything.",
    "Performance and awareness are two very different things — let's not conflate them."
  ]
};

const s419 = {
  id: 419,
  cat: "ai-future-tech",
  scene: "tech-philosophy",
  text: "Every tool shapes the hand that holds it — and AI is reshaping how we think, not just what we produce.",
  words: ["Ev·ery","tool","shapes","the","hand","that","holds","it","and","A·I","is","re·shap·ing","how","we","think","not","just","what","we","pro·duce"],
  stress: [1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1],
  ipa: "ˈɛvri tuːl ʃeɪps ðə hænd ðæt hoʊldz ɪt ænd ˌeɪˈaɪ ɪz riːˈʃeɪpɪŋ haʊ wi θɪŋk nɒt dʒʌst wʌt wi prəˈdjuːs",
  meaning: "Reflect on how AI changes human cognition itself",
  cn: "每一个工具都在塑造使用它的手——而AI正在重塑我们思考的方式，而不仅仅是我们生产什么。",
  trap: "'produce' /prəˈdjuːs/ 作动词重音在 -DUCE，两音节",
  tip: "'shapes the hand that holds it' 工具与人的共生隐喻——深度科技哲学的诗意表达",
  pattern: "Every tool shapes ___ — and AI is reshaping ___, not just ___",
  variants: [
    "We don't just use AI — AI is using us to evolve how we think.",
    "The real question isn't what AI can do — it's what it's doing to us."
  ]
};

const s420 = {
  id: 420,
  cat: "ai-future-tech",
  scene: "tech-philosophy",
  text: "The most important algorithm in the world is still the one running between your ears.",
  words: ["The","most","im·por·tant","al·go·rithm","in","the","world","is","still","the","one","run·ning","be·tween","your","ears"],
  stress: [0,1,1,1,0,0,1,0,1,0,1,1,1,0,1],
  ipa: "ðə moʊst ɪmˈpɔːrtənt ˈælɡərɪðəm ɪn ðə wɜːrld ɪz stɪl ðə wʌn ˈrʌnɪŋ bɪˈtwiːn jɔːr ɪrz",
  meaning: "Close with a reminder of human primacy in the age of AI",
  cn: "世界上最重要的算法仍然是在你两耳之间运行的那个。",
  trap: "'algorithm' /ˈælɡərɪðəm/ 重音在 AL-，三音节",
  tip: "以人文关怀收尾——最好的科技演讲最终都回归人性",
  pattern: "The most important ___ in the world is still ___",
  variants: [
    "No matter how smart the machines get, the human mind remains the ultimate computer.",
    "At the end of the day, the most powerful technology is still human imagination."
  ]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY14 = [
  s391, s392, s393, s394, s395, s396, s397, s398, s399, s400,
  s401, s402, s403, s404, s405, s406, s407, s408, s409, s410,
  s411, s412, s413, s414, s415, s416, s417, s418, s419, s420
];

export const SCENES_DAY14 = {
  391: { icon: "🤖", colors: ["#6366F1", "#4F46E5"], title: "Live Demo", sub: "Prompt to output" },
  392: { icon: "🧠", colors: ["#10B981", "#059669"], title: "Context", sub: "AI understanding" },
  393: { icon: "⚡", colors: ["#F59E0B", "#D97706"], title: "Real Time", sub: "No tricks" },
  394: { icon: "⚖️", colors: ["#EF4444", "#DC2626"], title: "Should We?", sub: "Build vs should" },
  395: { icon: "🪞", colors: ["#7C3AED", "#6D28D9"], title: "Mirror", sub: "Bias reflection" },
  396: { icon: "🌈", colors: ["#2563EB", "#1D4ED8"], title: "Diversity", sub: "Inclusive governance" },
  397: { icon: "🔄", colors: ["#059669", "#047857"], title: "Tasks, Not Jobs", sub: "Skill shift" },
  398: { icon: "👷", colors: ["#DC2626", "#B91C1C"], title: "Real Voices", sub: "Worker perspective" },
  399: { icon: "📊", colors: ["#8B5CF6", "#7C3AED"], title: "Reskill", sub: "Automate + educate" },
  400: { icon: "✍️", colors: ["#0891B2", "#0E7490"], title: "Prompt = Output", sub: "Core principle" },
  401: { icon: "🎭", colors: ["#F97316", "#EA580C"], title: "Role + Context", sub: "Prompt formula" },
  402: { icon: "🪜", colors: ["#E11D48", "#BE123C"], title: "Step by Step", sub: "Chain of thought" },
  403: { icon: "🔬", colors: ["#6366F1", "#4F46E5"], title: "Edge Cases", sub: "Beyond benchmarks" },
  404: { icon: "🌐", colors: ["#10B981", "#059669"], title: "Cross-Lingual", sub: "Multilingual test" },
  405: { icon: "💥", colors: ["#7C3AED", "#6D28D9"], title: "Break It", sub: "Failure modes" },
  406: { icon: "🎯", colors: ["#F59E0B", "#D97706"], title: "Problem First", sub: "Strategy reframe" },
  407: { icon: "🧪", colors: ["#2563EB", "#1D4ED8"], title: "Pilot", sub: "Start small" },
  408: { icon: "🏰", colors: ["#DC2626", "#B91C1C"], title: "Real Moat", sub: "Data + culture" },
  409: { icon: "📜", colors: ["#059669", "#047857"], title: "Smart Rules", sub: "Trust through regulation" },
  410: { icon: "🏛️", colors: ["#8B5CF6", "#7C3AED"], title: "Knowledge Gap", sub: "Lawmaker literacy" },
  411: { icon: "🛡️", colors: ["#0891B2", "#0E7490"], title: "Earned Trust", sub: "Self-regulation limits" },
  412: { icon: "🤝", colors: ["#F97316", "#EA580C"], title: "Together", sub: "Human + AI" },
  413: { icon: "📝", colors: ["#E11D48", "#BE123C"], title: "Draft + Soul", sub: "Workflow split" },
  414: { icon: "♾️", colors: ["#6366F1", "#4F46E5"], title: "Faster Loop", sub: "Augmentation goal" },
  415: { icon: "📡", colors: ["#10B981", "#059669"], title: "Dial-Up Era", sub: "Temporal comparison" },
  416: { icon: "🎓", colors: ["#7C3AED", "#6D28D9"], title: "AI Tutor", sub: "Education vision" },
  417: { icon: "🌅", colors: ["#F59E0B", "#D97706"], title: "Adapt", sub: "With, not against" },
  418: { icon: "💭", colors: ["#2563EB", "#1D4ED8"], title: "Not Conscious", sub: "Key distinction" },
  419: { icon: "🖐️", colors: ["#DC2626", "#B91C1C"], title: "Shapes Us", sub: "Tool-mind feedback" },
  420: { icon: "🧬", colors: ["#8B5CF6", "#7C3AED"], title: "Your Brain", sub: "Human primacy" }
};
