// ─── Day 12 · Sales & Closing ─────────────────────────────────────
// 30 sentences (id 331-360)

const s331 = {
  id: 331,
  cat: "sales",
  scene: "cold-outreach",
  text: "I noticed your team just raised a Series A — congrats! I think we can help you scale faster.",
  words: ["I","no·ticed","your","team","just","raised","a","Se·ries","A","con·grats","I","think","we","can","help","you","scale","fast·er"],
  stress: [0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1],
  ipa: "aɪ ˈnoʊtɪst jɔːr tiːm dʒʌst reɪzd ə ˈsɪriːz eɪ kənˈɡræts aɪ θɪŋk wi kæn hɛlp juː skeɪl ˈfæstər",
  meaning: "Open a cold outreach with a personalized hook",
  cn: "我注意到你们团队刚完成了A轮融资——恭喜！我觉得我们能帮你们更快扩展。",
  trap: "'congrats' /kənˈɡræts/ 重音在 -GRATS，口语缩写",
  tip: "以对方的成就开头——cold outreach 的核心是先给再要",
  pattern: "I noticed your team just ___ — congrats! I think we can help you ___",
  variants: [
    "Saw the news about your funding round — would love to chat about how we can support your growth.",
    "Your latest product launch caught my eye — I have some ideas that might interest you."
  ]
};

const s332 = {
  id: 332,
  cat: "sales",
  scene: "cold-outreach",
  text: "I'm not trying to sell you anything — I just want fifteen minutes to share an insight.",
  words: ["I'm","not","try·ing","to","sell","you","an·y·thing","I","just","want","fif·teen","min·utes","to","share","an","in·sight"],
  stress: [1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1],
  ipa: "aɪm nɒt ˈtraɪɪŋ tə sɛl juː ˈɛniθɪŋ aɪ dʒʌst wɒnt ˌfɪfˈtiːn ˈmɪnɪts tə ʃɛr ən ˈɪnsaɪt",
  meaning: "Disarm a prospect by lowering the perceived sales pressure",
  cn: "我不是要卖你任何东西——我只想用十五分钟分享一个洞见。",
  trap: "'insight' /ˈɪnsaɪt/ 重音在 IN-，不要和 'incite' /ɪnˈsaɪt/ 混淆",
  tip: "'not trying to sell' 反向心理——越说不卖，对方越想听",
  pattern: "I'm not trying to ___ — I just want ___ to share ___",
  variants: [
    "No pitch, I promise — just a quick conversation about what we're seeing in the market.",
    "This isn't a sales call — I genuinely think this data will be useful for your team."
  ]
};

const s333 = {
  id: 333,
  cat: "sales",
  scene: "cold-outreach",
  text: "Would next Tuesday or Thursday work for a quick fifteen-minute call?",
  words: ["Would","next","Tues·day","or","Thurs·day","work","for","a","quick","fif·teen-min·ute","call"],
  stress: [0,1,1,0,1,1,0,0,1,1,1],
  ipa: "wʊd nɛkst ˈtjuːzdeɪ ɔːr ˈθɜːrzdeɪ wɜːrk fɔːr ə kwɪk ˌfɪfˈtiːn ˈmɪnɪt kɔːl",
  meaning: "Offer a specific choice to increase booking rate",
  cn: "下周二或周四方便做个十五分钟的快速通话吗？",
  trap: "'Thursday' /ˈθɜːrzdeɪ/ 注意 /θ/ 和 /ð/ 的区别——这里是 /θ/",
  tip: "二选一比 'Are you free sometime?' 成交率高3倍——经典销售技巧",
  pattern: "Would ___ or ___ work for a quick ___?",
  variants: [
    "I've got availability Wednesday or Friday — which works better for you?",
    "Can we block fifteen minutes next week? I'm flexible on timing."
  ]
};

const s334 = {
  id: 334,
  cat: "sales",
  scene: "discovery-call",
  text: "Before I show you anything, I'd love to understand your biggest pain point right now.",
  words: ["Be·fore","I","show","you","an·y·thing","I'd","love","to","un·der·stand","your","big·gest","pain","point","right","now"],
  stress: [1,0,1,0,1,1,1,0,1,0,1,1,1,1,1],
  ipa: "bɪˈfɔːr aɪ ʃoʊ juː ˈɛniθɪŋ aɪd lʌv tə ˌʌndərˈstænd jɔːr ˈbɪɡɪst peɪn pɔɪnt raɪt naʊ",
  meaning: "Lead with discovery questions before pitching",
  cn: "在我展示任何东西之前，我想了解你现在最大的痛点是什么。",
  trap: "'understand' /ˌʌndərˈstænd/ 重音在 -STAND，三音节",
  tip: "'Before I show you anything' 先放下武器——顶级销售先听后说",
  pattern: "Before I show you anything, I'd love to understand ___",
  variants: [
    "Tell me about the challenge that keeps you up at night.",
    "What's the number one thing you'd fix if you could wave a magic wand?"
  ]
};

const s335 = {
  id: 335,
  cat: "sales",
  scene: "discovery-call",
  text: "How are you currently solving this, and where does it fall short?",
  words: ["How","are","you","cur·rent·ly","solv·ing","this","and","where","does","it","fall","short"],
  stress: [1,0,0,1,1,0,0,1,0,0,1,1],
  ipa: "haʊ ɑːr juː ˈkɜːrəntli ˈsɒlvɪŋ ðɪs ænd wɛr dʌz ɪt fɔːl ʃɔːrt",
  meaning: "Uncover gaps in the prospect's current solution",
  cn: "你们目前是怎么解决这个问题的？哪里做得不够好？",
  trap: "'currently' /ˈkɜːrəntli/ 重音在 CUR-，三音节",
  tip: "'fall short' 是比 'fail' 更外交的说法——不贬低对方现有方案",
  pattern: "How are you currently ___ing this, and where does it fall short?",
  variants: [
    "What tools are you using today, and what's missing?",
    "Walk me through your current workflow — where does it break down?"
  ]
};

const s336 = {
  id: 336,
  cat: "sales",
  scene: "discovery-call",
  text: "If you could wave a magic wand, what would the ideal solution look like?",
  words: ["If","you","could","wave","a","mag·ic","wand","what","would","the","i·de·al","so·lu·tion","look","like"],
  stress: [0,0,0,1,0,1,1,1,0,0,1,1,1,1],
  ipa: "ɪf juː kʊd weɪv ə ˈmædʒɪk wɒnd wʌt wʊd ðə aɪˈdɪəl səˈluːʃən lʊk laɪk",
  meaning: "Get the prospect to describe their dream solution",
  cn: "如果你能挥一下魔法棒，理想的解决方案是什么样的？",
  trap: "'ideal' /aɪˈdɪəl/ 重音在 -DE-，三音节",
  tip: "'magic wand' 隐喻让对方放下现实约束——发现真正的需求",
  pattern: "If you could ___, what would the ideal ___ look like?",
  variants: [
    "In a perfect world, what would this process look like?",
    "Forget budget for a second — what's the dream outcome?"
  ]
};

const s337 = {
  id: 337,
  cat: "sales",
  scene: "demo-presentation",
  text: "Let me show you exactly how this solves the problem you just described.",
  words: ["Let","me","show","you","ex·act·ly","how","this","solves","the","prob·lem","you","just","de·scribed"],
  stress: [0,0,1,0,1,1,0,1,0,1,0,0,1],
  ipa: "lɛt mi ʃoʊ juː ɪɡˈzæktli haʊ ðɪs sɒlvz ðə ˈprɒbləm juː dʒʌst dɪˈskraɪbd",
  meaning: "Connect the demo directly to the prospect's stated pain",
  cn: "让我精确展示这是如何解决你刚才描述的问题的。",
  trap: "'exactly' /ɪɡˈzæktli/ 重音在 -ZACT-，三音节",
  tip: "'the problem you just described' 回扣 discovery——让演示变得个人化",
  pattern: "Let me show you exactly how this solves ___",
  variants: [
    "Here's where it gets interesting — this is built for exactly your use case.",
    "Watch this — it directly addresses the bottleneck you mentioned."
  ]
};

const s338 = {
  id: 338,
  cat: "sales",
  scene: "demo-presentation",
  text: "This feature alone saves our customers an average of twenty hours per week.",
  words: ["This","fea·ture","a·lone","saves","our","cus·tom·ers","an","av·er·age","of","twen·ty","hours","per","week"],
  stress: [1,1,1,1,0,1,0,1,0,1,1,0,1],
  ipa: "ðɪs ˈfiːtʃər əˈloʊn seɪvz aʊər ˈkʌstəmərz ən ˈævərɪdʒ əv ˈtwɛnti ˈaʊərz pɜːr wiːk",
  meaning: "Quantify the value of a specific feature during a demo",
  cn: "仅这一个功能平均就为我们的客户每周节省二十小时。",
  trap: "'average' /ˈævərɪdʒ/ 重音在 AV-，三音节",
  tip: "'This feature alone' 强调单一功能的价值——让客户想象全套的效果",
  pattern: "This feature alone saves our customers ___",
  variants: [
    "Customers tell us this one workflow saves them two full days a month.",
    "On average, teams cut their processing time by sixty percent with this."
  ]
};

const s339 = {
  id: 339,
  cat: "sales",
  scene: "demo-presentation",
  text: "And the best part? Your team can be up and running in under an hour.",
  words: ["And","the","best","part","your","team","can","be","up","and","run·ning","in","un·der","an","hour"],
  stress: [0,0,1,1,0,1,0,0,1,0,1,0,1,0,1],
  ipa: "ænd ðə bɛst pɑːrt jɔːr tiːm kæn bi ʌp ænd ˈrʌnɪŋ ɪn ˈʌndər ən ˈaʊər",
  meaning: "Emphasize ease of implementation to reduce perceived risk",
  cn: "最棒的是？你的团队不到一小时就能启动运行。",
  trap: "'hour' /ˈaʊər/ 一音节，注意和 'our' 发音相同",
  tip: "'And the best part?' 制造悬念后揭晓——经典演示节奏",
  pattern: "And the best part? Your team can ___ in under ___",
  variants: [
    "Setup takes minutes, not months — you'll see value on day one.",
    "The best part is zero migration headaches — it works out of the box."
  ]
};

const s340 = {
  id: 340,
  cat: "sales",
  scene: "objection-handling",
  text: "That's a fair concern — let me show you how other companies in your space handled it.",
  words: ["That's","a","fair","con·cern","let","me","show","you","how","oth·er","com·pa·nies","in","your","space","han·dled","it"],
  stress: [1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0],
  ipa: "ðæts ə fɛr kənˈsɜːrn lɛt mi ʃoʊ juː haʊ ˈʌðər ˈkʌmpəniz ɪn jɔːr speɪs ˈhændəld ɪt",
  meaning: "Validate an objection and redirect with social proof",
  cn: "这是个合理的顾虑——让我给你看同行业的其他公司是怎么处理的。",
  trap: "'concern' /kənˈsɜːrn/ 重音在 -CERN，两音节",
  tip: "'That's a fair concern' 先验证再回应——永远不要否定客户的担忧",
  pattern: "That's a fair concern — let me show you how ___ handled it",
  variants: [
    "I totally get that — here's what we've seen work for similar teams.",
    "You're not the first to ask — let me share a case study."
  ]
};

const s341 = {
  id: 341,
  cat: "sales",
  scene: "objection-handling",
  text: "The cost of doing nothing is actually higher than the cost of switching.",
  words: ["The","cost","of","do·ing","noth·ing","is","ac·tu·al·ly","high·er","than","the","cost","of","switch·ing"],
  stress: [0,1,0,1,1,0,1,1,0,0,1,0,1],
  ipa: "ðə kɒst əv ˈduːɪŋ ˈnʌθɪŋ ɪz ˈæktʃuəli ˈhaɪər ðæn ðə kɒst əv ˈswɪtʃɪŋ",
  meaning: "Reframe price objections by highlighting the cost of inaction",
  cn: "什么都不做的成本实际上比切换的成本更高。",
  trap: "'actually' /ˈæktʃuəli/ 重音在 AC-，四音节，注意 /tʃ/ 音",
  tip: "'cost of doing nothing' 是最强大的销售重构——把不买也变成一种代价",
  pattern: "The cost of ___ is actually higher than the cost of ___",
  variants: [
    "Every month you wait, you're leaving money on the table.",
    "Inaction has a price too — and it compounds over time."
  ]
};

const s342 = {
  id: 342,
  cat: "sales",
  scene: "objection-handling",
  text: "I hear you — timing is everything. What would need to change for this to become a priority?",
  words: ["I","hear","you","tim·ing","is","ev·ery·thing","what","would","need","to","change","for","this","to","be·come","a","pri·or·i·ty"],
  stress: [0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1],
  ipa: "aɪ hɪr juː ˈtaɪmɪŋ ɪz ˈɛvriθɪŋ wʌt wʊd niːd tə tʃeɪndʒ fɔːr ðɪs tə bɪˈkʌm ə praɪˈɒrɪti",
  meaning: "Handle a 'not right now' objection with a forward-looking question",
  cn: "我理解——时机就是一切。什么条件变了这件事才会成为优先级？",
  trap: "'priority' /praɪˈɒrɪti/ 重音在 -OR-，四音节",
  tip: "'What would need to change' 把球踢回去——让客户自己说出购买条件",
  pattern: "I hear you — ___. What would need to change for this to become ___?",
  variants: [
    "Totally understand. Is there a trigger event that would make this urgent?",
    "No pressure at all — what would make the timing right?"
  ]
};

const s343 = {
  id: 343,
  cat: "sales",
  scene: "pricing-discussion",
  text: "Let me walk you through the pricing — we have three tiers to match different needs.",
  words: ["Let","me","walk","you","through","the","pric·ing","we","have","three","tiers","to","match","dif·fer·ent","needs"],
  stress: [0,0,1,0,0,0,1,0,0,1,1,0,1,1,1],
  ipa: "lɛt mi wɔːk juː θruː ðə ˈpraɪsɪŋ wi hæv θriː tɪrz tə mætʃ ˈdɪfərənt niːdz",
  meaning: "Introduce pricing options in a structured way",
  cn: "让我带你过一下定价——我们有三个层级来匹配不同需求。",
  trap: "'tiers' /tɪrz/ 一音节，和 'tears'（眼泪）同音",
  tip: "'three tiers' 给选择权——锚定效应让中间选项最受欢迎",
  pattern: "Let me walk you through the pricing — we have ___ to match ___",
  variants: [
    "Here's how our pricing works — it's designed to scale with you.",
    "We've structured the plans so you only pay for what you use."
  ]
};

const s344 = {
  id: 344,
  cat: "sales",
  scene: "pricing-discussion",
  text: "Most companies your size start with the Professional plan and upgrade as they grow.",
  words: ["Most","com·pa·nies","your","size","start","with","the","Pro·fes·sion·al","plan","and","up·grade","as","they","grow"],
  stress: [1,1,0,1,1,0,0,1,1,0,1,0,0,1],
  ipa: "moʊst ˈkʌmpəniz jɔːr saɪz stɑːrt wɪð ðə prəˈfɛʃənəl plæn ænd ʌpˈɡreɪd æz ðeɪ ɡroʊ",
  meaning: "Guide the prospect toward the right pricing tier with social proof",
  cn: "你们这个规模的公司大多从专业版开始，然后随着增长升级。",
  trap: "'Professional' /prəˈfɛʃənəl/ 重音在 -FES-，四音节",
  tip: "'Most companies your size' 是社会证明——让客户觉得这是正常选择",
  pattern: "Most companies your size start with ___ and ___ as they grow",
  variants: [
    "Teams of your size typically go with the mid-tier plan.",
    "The growth plan is our most popular — it's where most customers land."
  ]
};

const s345 = {
  id: 345,
  cat: "sales",
  scene: "pricing-discussion",
  text: "If you commit to an annual plan, I can offer a twenty percent discount.",
  words: ["If","you","com·mit","to","an","an·nu·al","plan","I","can","of·fer","a","twen·ty","per·cent","dis·count"],
  stress: [0,0,1,0,0,1,1,0,0,1,0,1,1,1],
  ipa: "ɪf juː kəˈmɪt tə ən ˈænjuəl plæn aɪ kæn ˈɒfər ə ˈtwɛnti pərˈsɛnt ˈdɪskaʊnt",
  meaning: "Incentivize longer commitment with a discount offer",
  cn: "如果你承诺年付，我可以给二十个百分点的折扣。",
  trap: "'annual' /ˈænjuəl/ 重音在 AN-，三音节；'discount' 名词重音在 DIS-",
  tip: "'If you commit' 条件句框架——让客户觉得折扣是自己争取到的",
  pattern: "If you commit to ___, I can offer ___",
  variants: [
    "We offer a significant discount for annual billing — want me to run the numbers?",
    "Going annual saves you two months — it's a no-brainer for most teams."
  ]
};

const s346 = {
  id: 346,
  cat: "sales",
  scene: "contract-negotiation",
  text: "We're flexible on payment terms — would net sixty work better for your team?",
  words: ["We're","flex·i·ble","on","pay·ment","terms","would","net","six·ty","work","bet·ter","for","your","team"],
  stress: [1,1,0,1,1,0,1,1,1,1,0,0,1],
  ipa: "wɪr ˈflɛksɪbəl ɒn ˈpeɪmənt tɜːrmz wʊd nɛt ˈsɪksti wɜːrk ˈbɛtər fɔːr jɔːr tiːm",
  meaning: "Show flexibility on payment terms to close a deal",
  cn: "我们在付款条款上很灵活——净60天对你们团队更好吗？",
  trap: "'flexible' /ˈflɛksɪbəl/ 重音在 FLEX-，三音节",
  tip: "'net sixty' 是商业账期术语——60天内付款，显示你懂他们的财务流程",
  pattern: "We're flexible on ___ — would ___ work better for your team?",
  variants: [
    "We can do quarterly billing if that helps with your budget cycle.",
    "Payment terms are negotiable — what does your procurement process look like?"
  ]
};

const s347 = {
  id: 347,
  cat: "sales",
  scene: "contract-negotiation",
  text: "I've looped in our legal team to review the redlines — we should have a clean version by Friday.",
  words: ["I've","looped","in","our","le·gal","team","to","re·view","the","red·lines","we","should","have","a","clean","ver·sion","by","Fri·day"],
  stress: [1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1],
  ipa: "aɪv luːpt ɪn aʊər ˈliːɡəl tiːm tə rɪˈvjuː ðə ˈrɛdlaɪnz wi ʃʊd hæv ə kliːn ˈvɜːrʒən baɪ ˈfraɪdeɪ",
  meaning: "Manage the legal review process during contract negotiation",
  cn: "我已经拉了法务团队来审查修改标注——周五前应该有干净版本。",
  trap: "'redlines' /ˈrɛdlaɪnz/ 指合同中标红的修改处——法律谈判专业术语",
  tip: "'clean version' 是合同谈判中各方都期待的最终版——给出时间线显示控制力",
  pattern: "I've looped in ___ to review ___ — we should have ___ by ___",
  variants: [
    "Legal is reviewing the markup — I'll have feedback within forty-eight hours.",
    "Our counsel is going through the revisions now — almost at the finish line."
  ]
};

const s348 = {
  id: 348,
  cat: "sales",
  scene: "contract-negotiation",
  text: "If we can agree on scope today, I'm confident we'll have signatures by end of quarter.",
  words: ["If","we","can","a·gree","on","scope","to·day","I'm","con·fi·dent","we'll","have","sig·na·tures","by","end","of","quar·ter"],
  stress: [0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1],
  ipa: "ɪf wi kæn əˈɡriː ɒn skoʊp təˈdeɪ aɪm ˈkɒnfɪdənt wiːl hæv ˈsɪɡnətʃərz baɪ ɛnd əv ˈkwɔːrtər",
  meaning: "Create urgency by tying agreement to a deadline",
  cn: "如果我们今天能就范围达成一致，我有信心在季度末前签约。",
  trap: "'signatures' /ˈsɪɡnətʃərz/ 重音在 SIG-，三音节",
  tip: "'end of quarter' 是 B2B 销售的天然截止日期——利用这个时间压力",
  pattern: "If we can agree on ___ today, I'm confident we'll have ___ by ___",
  variants: [
    "Let's lock down the terms today so we can close before quarter-end.",
    "If we align on pricing now, I can fast-track the contract."
  ]
};

const s349 = {
  id: 349,
  cat: "sales",
  scene: "upsell",
  text: "Based on your usage, you'd get a lot more value from our Enterprise tier.",
  words: ["Based","on","your","us·age","you'd","get","a","lot","more","val·ue","from","our","En·ter·prise","tier"],
  stress: [1,0,0,1,1,1,0,1,1,1,0,0,1,1],
  ipa: "beɪst ɒn jɔːr ˈjuːsɪdʒ juːd ɡɛt ə lɒt mɔːr ˈvæljuː frɒm aʊər ˈɛntərpraɪz tɪr",
  meaning: "Suggest an upgrade based on usage data",
  cn: "根据你们的使用情况，企业版能给你们带来更多价值。",
  trap: "'usage' /ˈjuːsɪdʒ/ 重音在 U-，两音节",
  tip: "'Based on your usage' 数据驱动的推荐——不是推销而是顾问建议",
  pattern: "Based on your usage, you'd get more value from ___",
  variants: [
    "Your team has outgrown the current plan — the upgrade would unlock a lot.",
    "Looking at your numbers, Enterprise would pay for itself in a month."
  ]
};

const s350 = {
  id: 350,
  cat: "sales",
  scene: "upsell",
  text: "We just launched an add-on that I think would be a game-changer for your workflow.",
  words: ["We","just","launched","an","add-on","that","I","think","would","be","a","game-chang·er","for","your","work·flow"],
  stress: [0,0,1,0,1,0,0,1,0,0,0,1,0,0,1],
  ipa: "wi dʒʌst lɔːntʃt ən ˈædɒn ðæt aɪ θɪŋk wʊd bi ə ˈɡeɪmtʃeɪndʒər fɔːr jɔːr ˈwɜːrkfloʊ",
  meaning: "Introduce a new product feature as an upsell opportunity",
  cn: "我们刚推出了一个附加功能，我觉得对你的工作流会是一个颠覆性的改变。",
  trap: "'game-changer' /ˈɡeɪmtʃeɪndʒər/ 复合名词，重音在 GAME-",
  tip: "'game-changer' 比 'useful feature' 更有冲击力——但别过度使用",
  pattern: "We just launched ___ that I think would be a game-changer for ___",
  variants: [
    "There's a new module that fits perfectly with what you're doing.",
    "Have you seen the analytics add-on? It's exactly what your team needs."
  ]
};

const s351 = {
  id: 351,
  cat: "sales",
  scene: "upsell",
  text: "I can bundle the additional seats with the upgrade at no extra cost.",
  words: ["I","can","bun·dle","the","ad·di·tion·al","seats","with","the","up·grade","at","no","ex·tra","cost"],
  stress: [0,0,1,0,1,1,0,0,1,0,1,1,1],
  ipa: "aɪ kæn ˈbʌndəl ðə əˈdɪʃənəl siːts wɪð ðə ˈʌpɡreɪd æt noʊ ˈɛkstrə kɒst",
  meaning: "Sweeten an upsell deal with a bundling offer",
  cn: "我可以把额外的席位和升级打包，不收额外费用。",
  trap: "'additional' /əˈdɪʃənəl/ 重音在 -DI-，四音节",
  tip: "'at no extra cost' 是让客户心动的魔法短语——重读 'no extra'",
  pattern: "I can bundle ___ with ___ at no extra cost",
  variants: [
    "If you upgrade now, I'll throw in the extra licenses for free.",
    "The bundle deal includes everything — no hidden costs."
  ]
};

const s352 = {
  id: 352,
  cat: "sales",
  scene: "renewal-conversation",
  text: "Your renewal is coming up next month — how has the experience been so far?",
  words: ["Your","re·new·al","is","com·ing","up","next","month","how","has","the","ex·pe·ri·ence","been","so","far"],
  stress: [0,1,0,1,0,1,1,1,0,0,1,0,0,1],
  ipa: "jɔːr rɪˈnjuːəl ɪz ˈkʌmɪŋ ʌp nɛkst mʌnθ haʊ hæz ðə ɪkˈspɪriəns bɪn soʊ fɑːr",
  meaning: "Open a renewal conversation by checking satisfaction",
  cn: "你们的续约下个月就到了——到目前为止体验怎么样？",
  trap: "'renewal' /rɪˈnjuːəl/ 重音在 -NEW-，三音节",
  tip: "先问体验再谈续约——让客户感到被关心而不是被催款",
  pattern: "Your renewal is coming up ___ — how has ___ been so far?",
  variants: [
    "We're approaching your renewal date — wanted to check in first.",
    "Before we talk renewal, I'd love to hear how things have been going."
  ]
};

const s353 = {
  id: 353,
  cat: "sales",
  scene: "renewal-conversation",
  text: "We've added twelve new features since you signed — let me highlight the ones relevant to you.",
  words: ["We've","add·ed","twelve","new","fea·tures","since","you","signed","let","me","high·light","the","ones","rel·e·vant","to","you"],
  stress: [1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0],
  ipa: "wiːv ˈædɪd twɛlv njuː ˈfiːtʃərz sɪns juː saɪnd lɛt mi ˈhaɪlaɪt ðə wʌnz ˈrɛləvənt tə juː",
  meaning: "Demonstrate added value before discussing renewal pricing",
  cn: "自你签约以来我们新增了十二个功能——让我重点说说和你相关的。",
  trap: "'relevant' /ˈrɛləvənt/ 重音在 REL-，三音节",
  tip: "'relevant to you' 个性化——不是甩功能清单而是只说对方在乎的",
  pattern: "We've added ___ since you signed — let me highlight ___",
  variants: [
    "A lot has changed since your last renewal — let me show you the highlights.",
    "You're getting way more value now than when you started — here's what's new."
  ]
};

const s354 = {
  id: 354,
  cat: "sales",
  scene: "renewal-conversation",
  text: "I'd love to lock in your current rate before the price increase takes effect.",
  words: ["I'd","love","to","lock","in","your","cur·rent","rate","be·fore","the","price","in·crease","takes","ef·fect"],
  stress: [1,1,0,1,0,0,1,1,1,0,1,1,1,1],
  ipa: "aɪd lʌv tə lɒk ɪn jɔːr ˈkɜːrənt reɪt bɪˈfɔːr ðə praɪs ˈɪnkriːs teɪks ɪˈfɛkt",
  meaning: "Create urgency with an upcoming price change",
  cn: "我想在涨价生效前帮你锁定当前价格。",
  trap: "'increase' 名词重音在 IN- /ˈɪnkriːs/，动词重音在 -CREASE /ɪnˈkriːs/",
  tip: "'lock in' 给客户安全感——'before' 创造时间紧迫",
  pattern: "I'd love to lock in ___ before ___ takes effect",
  variants: [
    "Renewing before the end of the month locks in your current pricing.",
    "If you sign this week, we can grandfather your existing rate."
  ]
};

const s355 = {
  id: 355,
  cat: "sales",
  scene: "lost-deal-analysis",
  text: "I appreciate your honesty — can I ask what ultimately tipped the decision?",
  words: ["I","ap·pre·ci·ate","your","hon·es·ty","can","I","ask","what","ul·ti·mate·ly","tipped","the","de·ci·sion"],
  stress: [0,1,0,1,0,0,1,0,1,1,0,1],
  ipa: "aɪ əˈpriːʃieɪt jɔːr ˈɒnɪsti kæn aɪ æsk wʌt ˈʌltɪmətli tɪpt ðə dɪˈsɪʒən",
  meaning: "Gracefully learn from a lost deal",
  cn: "我感谢你的坦诚——我能问一下最终是什么促成了这个决定吗？",
  trap: "'ultimately' /ˈʌltɪmətli/ 重音在 UL-，四音节",
  tip: "'tipped the decision' 比 'made you choose' 更含蓄优雅——败仗也要打得漂亮",
  pattern: "I appreciate your honesty — can I ask what ultimately ___?",
  variants: [
    "No hard feelings — I'd love to learn what we could've done better.",
    "Thanks for letting me know — was it pricing, timing, or something else?"
  ]
};

const s356 = {
  id: 356,
  cat: "sales",
  scene: "lost-deal-analysis",
  text: "Even though we didn't win this one, I'd like to stay in touch for the future.",
  words: ["E·ven","though","we","didn't","win","this","one","I'd","like","to","stay","in","touch","for","the","fu·ture"],
  stress: [1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1],
  ipa: "ˈiːvən ðoʊ wi ˈdɪdənt wɪn ðɪs wʌn aɪd laɪk tə steɪ ɪn tʌtʃ fɔːr ðə ˈfjuːtʃər",
  meaning: "Maintain the relationship after losing a deal",
  cn: "虽然这次没赢，但我希望将来保持联系。",
  trap: "'future' /ˈfjuːtʃər/ 重音在 FU-，两音节，注意 /fj/ 辅音丛",
  tip: "'stay in touch' 是真正优秀销售的特质——今天的失败是明天的机会",
  pattern: "Even though we didn't win this one, I'd like to ___",
  variants: [
    "Doors are always open — if things change, I'm a call away.",
    "Let's reconnect in six months — circumstances change."
  ]
};

const s357 = {
  id: 357,
  cat: "sales",
  scene: "lost-deal-analysis",
  text: "What I'm taking away from this is that we need to improve our implementation timeline.",
  words: ["What","I'm","tak·ing","a·way","from","this","is","that","we","need","to","im·prove","our","im·ple·men·ta·tion","time·line"],
  stress: [1,1,1,1,0,0,0,0,0,1,0,1,0,1,1],
  ipa: "wʌt aɪm ˈteɪkɪŋ əˈweɪ frɒm ðɪs ɪz ðæt wi niːd tə ɪmˈpruːv aʊər ˌɪmplɪmɛnˈteɪʃən ˈtaɪmlaɪn",
  meaning: "Extract a learning from a lost deal for team improvement",
  cn: "我从中学到的是我们需要改善实施时间线。",
  trap: "'implementation' /ˌɪmplɪmɛnˈteɪʃən/ 重音在 -TA-，五音节",
  tip: "'What I'm taking away' 成长型思维——把失败转化为可执行的改进",
  pattern: "What I'm taking away from this is that we need to ___",
  variants: [
    "The lesson here is clear — we lost on time-to-value.",
    "This deal taught us that our onboarding process needs work."
  ]
};

const s358 = {
  id: 358,
  cat: "sales",
  scene: "celebration",
  text: "We just closed the biggest deal in company history — incredible work, team!",
  words: ["We","just","closed","the","big·gest","deal","in","com·pa·ny","his·to·ry","in·cred·i·ble","work","team"],
  stress: [0,0,1,0,1,1,0,1,1,1,1,1],
  ipa: "wi dʒʌst kloʊzd ðə ˈbɪɡɪst diːl ɪn ˈkʌmpəni ˈhɪstəri ɪnˈkrɛdɪbəl wɜːrk tiːm",
  meaning: "Celebrate a major sales win with the team",
  cn: "我们刚关了公司历史上最大的单——团队干得太棒了！",
  trap: "'incredible' /ɪnˈkrɛdɪbəl/ 重音在 -CRED-，四音节",
  tip: "'company history' 加重成就感——大胜利值得大声宣布",
  pattern: "We just closed ___ — incredible work, team!",
  variants: [
    "Ring the bell — we just landed a million-dollar contract!",
    "That deal is done and dusted — everyone celebrate!"
  ]
};

const s359 = {
  id: 359,
  cat: "sales",
  scene: "celebration",
  text: "This wouldn't have happened without the collaboration between sales, product, and engineering.",
  words: ["This","wouldn't","have","hap·pened","with·out","the","col·lab·o·ra·tion","be·tween","sales","prod·uct","and","en·gi·neer·ing"],
  stress: [1,1,0,1,1,0,1,1,1,1,0,1],
  ipa: "ðɪs ˈwʊdənt hæv ˈhæpənd wɪðˈaʊt ðə kəˌlæbəˈreɪʃən bɪˈtwiːn seɪlz ˈprɒdʌkt ænd ˌɛndʒɪˈnɪrɪŋ",
  meaning: "Acknowledge cross-functional teamwork in a sales win",
  cn: "没有销售、产品和工程之间的协作，这不可能发生。",
  trap: "'collaboration' /kəˌlæbəˈreɪʃən/ 重音在 -RA-，五音节",
  tip: "好的销售领导在胜利时把功劳归团队——'sales, product, and engineering' 三部门并列",
  pattern: "This wouldn't have happened without the collaboration between ___",
  variants: [
    "Huge shout-out to everyone who touched this deal — it was a team effort.",
    "Sales closed it, but product and engineering made it possible."
  ]
};

const s360 = {
  id: 360,
  cat: "sales",
  scene: "celebration",
  text: "Let's enjoy this moment, learn from the process, and carry that energy into next quarter.",
  words: ["Let's","en·joy","this","mo·ment","learn","from","the","proc·ess","and","car·ry","that","en·er·gy","in·to","next","quar·ter"],
  stress: [1,1,0,1,1,0,0,1,0,1,0,1,1,1,1],
  ipa: "lɛts ɪnˈdʒɔɪ ðɪs ˈmoʊmənt lɜːrn frɒm ðə ˈprɒsɛs ænd ˈkæri ðæt ˈɛnərdʒi ˈɪntə nɛkst ˈkwɔːrtər",
  meaning: "Transition from celebration to forward momentum",
  cn: "让我们享受这个时刻，从过程中学习，并把这股劲头带到下个季度。",
  trap: "'energy' /ˈɛnərdʒi/ 重音在 EN-，三音节",
  tip: "'enjoy, learn, carry' 三段式动词推进——庆祝完立刻看前方",
  pattern: "Let's enjoy ___, learn from ___, and carry ___ into ___",
  variants: [
    "Celebrate tonight, but tomorrow we start building on this momentum.",
    "Amazing quarter — now let's make the next one even bigger."
  ]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY12 = [
  s331, s332, s333, s334, s335, s336, s337, s338, s339, s340,
  s341, s342, s343, s344, s345, s346, s347, s348, s349, s350,
  s351, s352, s353, s354, s355, s356, s357, s358, s359, s360
];

export const SCENES_DAY12 = {
  331: { icon: "📧", colors: ["#6366F1", "#4F46E5"], title: "Cold Open", sub: "Personalized hook" },
  332: { icon: "🤝", colors: ["#10B981", "#059669"], title: "No Pressure", sub: "Disarming approach" },
  333: { icon: "📅", colors: ["#2563EB", "#1D4ED8"], title: "Book It", sub: "Choice close" },
  334: { icon: "🔍", colors: ["#7C3AED", "#6D28D9"], title: "Pain Point", sub: "Discovery first" },
  335: { icon: "🔎", colors: ["#DC2626", "#B91C1C"], title: "Gap Analysis", sub: "Current state probe" },
  336: { icon: "🪄", colors: ["#8B5CF6", "#7C3AED"], title: "Magic Wand", sub: "Dream solution" },
  337: { icon: "🎯", colors: ["#059669", "#047857"], title: "Demo Connect", sub: "Pain-to-solution" },
  338: { icon: "⏱️", colors: ["#F59E0B", "#D97706"], title: "Time Saved", sub: "Value quantification" },
  339: { icon: "🚀", colors: ["#0891B2", "#0E7490"], title: "Easy Start", sub: "Low friction" },
  340: { icon: "🛡️", colors: ["#6366F1", "#4F46E5"], title: "Fair Point", sub: "Objection validation" },
  341: { icon: "💸", colors: ["#EA580C", "#C2410C"], title: "Cost of Nothing", sub: "Inaction reframe" },
  342: { icon: "⏳", colors: ["#7C3AED", "#5B21B6"], title: "Right Time", sub: "Timing objection" },
  343: { icon: "💎", colors: ["#2563EB", "#1E40AF"], title: "Three Tiers", sub: "Pricing structure" },
  344: { icon: "📊", colors: ["#10B981", "#059669"], title: "Social Proof", sub: "Peer guidance" },
  345: { icon: "🏷️", colors: ["#E11D48", "#BE123C"], title: "Annual Deal", sub: "Commitment incentive" },
  346: { icon: "📝", colors: ["#F97316", "#EA580C"], title: "Flex Terms", sub: "Payment flexibility" },
  347: { icon: "⚖️", colors: ["#1F2937", "#111827"], title: "Legal Loop", sub: "Contract review" },
  348: { icon: "🔏", colors: ["#A855F7", "#9333EA"], title: "Ink Ready", sub: "Closing urgency" },
  349: { icon: "📈", colors: ["#059669", "#047857"], title: "Level Up", sub: "Usage-based upsell" },
  350: { icon: "🎮", colors: ["#DC2626", "#991B1B"], title: "Game Changer", sub: "New feature upsell" },
  351: { icon: "🎁", colors: ["#6366F1", "#4F46E5"], title: "Bundle Deal", sub: "Value stacking" },
  352: { icon: "🔄", colors: ["#0891B2", "#0E7490"], title: "Check In", sub: "Renewal opener" },
  353: { icon: "✨", colors: ["#8B5CF6", "#7C3AED"], title: "New Value", sub: "Feature showcase" },
  354: { icon: "🔒", colors: ["#F59E0B", "#D97706"], title: "Lock In", sub: "Price protection" },
  355: { icon: "🎓", colors: ["#EF4444", "#DC2626"], title: "Learn Why", sub: "Graceful loss" },
  356: { icon: "🤙", colors: ["#10B981", "#059669"], title: "Stay Close", sub: "Future door open" },
  357: { icon: "💡", colors: ["#7C3AED", "#6D28D9"], title: "Key Takeaway", sub: "Post-mortem insight" },
  358: { icon: "🔔", colors: ["#E11D48", "#BE123C"], title: "Ring the Bell", sub: "Big win" },
  359: { icon: "👏", colors: ["#2563EB", "#1D4ED8"], title: "Team Win", sub: "Cross-functional credit" },
  360: { icon: "🚀", colors: ["#F97316", "#EA580C"], title: "Next Quarter", sub: "Forward momentum" }
};
