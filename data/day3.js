// ─── Day 3 · Leadership & Decision Making ────────────────────────
// 30 sentences (id 61-90)

const s61 = {
  id: 61,
  cat: "leadership",
  scene: "delegation",
  text: "I'd like you to take ownership of this project going forward.",
  words: ["I'd","like","you","to","take","own·er·ship","of","this","pro·ject","go·ing","for·ward"],
  stress: [1,1,0,0,1,1,0,0,1,1,1],
  ipa: "aɪd laɪk juː tə teɪk ˈoʊnərʃɪp əv ðɪs ˈprɒdʒɛkt ˈɡoʊɪŋ ˈfɔːrwərd",
  meaning: "Delegate full responsibility for a project",
  cn: "我希望你从现在开始全权负责这个项目。",
  trap: "'ownership' 重音在 OWN-，三音节 /ˈoʊnərʃɪp/",
  tip: "'take ownership' 连读有力，体现信任和授权",
  pattern: "I'd like you to take ownership of ___",
  variants: [
    "I'd like you to take ownership of the client relationship.",
    "I'd like you to take ownership of the rollout plan."
  ]
};

const s62 = {
  id: 62,
  cat: "leadership",
  scene: "delegation",
  text: "You have full authority to make decisions on this.",
  words: ["You","have","full","au·thor·i·ty","to","make","de·ci·sions","on","this"],
  stress: [1,0,1,1,0,1,1,0,1],
  ipa: "juː hæv fʊl ɔːˈθɒrɪti tə meɪk dɪˈsɪʒənz ɒn ðɪs",
  meaning: "Grant decision-making power explicitly",
  cn: "你有权在这件事上做出所有决定。",
  trap: "'authority' 重音在 -THOR-，四音节 /ɔːˈθɒrɪti/",
  tip: "'full authority' 两词都重读，传达坚定授权",
  pattern: "You have full authority to ___",
  variants: [
    "You have full authority to approve the budget.",
    "You have full authority to hire for your team."
  ]
};

const s63 = {
  id: 63,
  cat: "leadership",
  scene: "delegation",
  text: "I trust your judgment — run with it and keep me posted.",
  words: ["I","trust","your","judg·ment","run","with","it","and","keep","me","post·ed"],
  stress: [0,1,0,1,1,0,0,0,1,0,1],
  ipa: "aɪ trʌst jɔːr ˈdʒʌdʒmənt rʌn wɪð ɪt ænd kiːp mi ˈpoʊstɪd",
  meaning: "Empower someone while requesting updates",
  cn: "我相信你的判断——放手去做，随时告诉我进展。",
  trap: "'judgment' 只有两个音节 /ˈdʒʌdʒmənt/，没有 e",
  tip: "破折号处停顿，前半句温暖信任，后半句轻松交代",
  pattern: "I trust your judgment — ___ and keep me posted",
  variants: [
    "I trust your judgment — go ahead and keep me posted.",
    "I trust your instincts — run with it and loop me in."
  ]
};

const s64 = {
  id: 64,
  cat: "leadership",
  scene: "accountability",
  text: "That was my call, and I take full responsibility for it.",
  words: ["That","was","my","call","and","I","take","full","re·spon·si·bil·i·ty","for","it"],
  stress: [1,0,1,1,0,1,1,1,1,0,0],
  ipa: "ðæt wɒz maɪ kɔːl ænd aɪ teɪk fʊl rɪˌspɒnsəˈbɪləti fɔːr ɪt",
  meaning: "Own a decision publicly as a leader",
  cn: "那是我的决定，我为此承担全部责任。",
  trap: "'responsibility' 五音节，主重音在 -BIL-",
  tip: "'my call' 和 'full responsibility' 都重读，展现担当",
  pattern: "That was my call, and I take full responsibility for ___",
  variants: [
    "That was my decision, and I take full responsibility for the outcome.",
    "That was my call, and I accept full responsibility."
  ]
};

const s65 = {
  id: 65,
  cat: "leadership",
  scene: "accountability",
  text: "We missed the target. Let's figure out what went wrong.",
  words: ["We","missed","the","tar·get","Let's","fig·ure","out","what","went","wrong"],
  stress: [0,1,0,1,1,1,1,0,1,1],
  ipa: "wi mɪst ðə ˈtɑːrɡɪt lɛts ˈfɪɡjər aʊt wɒt wɛnt rɒŋ",
  meaning: "Acknowledge failure and pivot to learning",
  cn: "我们没有达到目标。让我们搞清楚哪里出了问题。",
  trap: "'figure out' 连读 /ˈfɪɡjər aʊt/，不要读成三个分开的词",
  tip: "前半句坦诚直接，后半句语调积极向前看",
  pattern: "We missed ___. Let's figure out what ___",
  variants: [
    "We missed the deadline. Let's figure out what caused the delay.",
    "We fell short. Let's figure out what we can improve."
  ]
};

const s66 = {
  id: 66,
  cat: "leadership",
  scene: "accountability",
  text: "I should have flagged this earlier — that's on me.",
  words: ["I","should","have","flagged","this","ear·li·er","that's","on","me"],
  stress: [1,1,0,1,0,1,1,0,1],
  ipa: "aɪ ʃʊd hæv flæɡd ðɪs ˈɜːrliər ðæts ɒn miː",
  meaning: "Admit personal oversight as a leader",
  cn: "我应该早点提出来——这是我的失误。",
  trap: "'should have' 口语常缩读为 /ʃʊdəv/，不是 'should of'",
  tip: "破折号后 'that's on me' 干脆利落，不拖泥带水",
  pattern: "I should have ___ earlier — that's on me",
  variants: [
    "I should have escalated this earlier — that's on me.",
    "I should have communicated this earlier — that's on me."
  ]
};

const s67 = {
  id: 67,
  cat: "leadership",
  scene: "vision",
  text: "Here's where I see us in the next twelve months.",
  words: ["Here's","where","I","see","us","in","the","next","twelve","months"],
  stress: [1,0,1,1,1,0,0,1,1,1],
  ipa: "hɪrz wɛr aɪ siː ʌs ɪn ðə nɛkst twɛlv mʌnθs",
  meaning: "Cast a forward-looking vision for the team",
  cn: "这是我对未来十二个月的展望。",
  trap: "'twelve' /twɛlv/ 注意 /lv/ 尾音，不要吞掉",
  tip: "'Here's where' 开头自信有力，'twelve months' 清晰有节奏",
  pattern: "Here's where I see us in ___",
  variants: [
    "Here's where I see us by the end of this quarter.",
    "Here's where I see the company heading next year."
  ]
};

const s68 = {
  id: 68,
  cat: "leadership",
  scene: "vision",
  text: "We're not just building a product — we're shaping an industry.",
  words: ["We're","not","just","build·ing","a","prod·uct","we're","shap·ing","an","in·dus·try"],
  stress: [1,1,1,1,0,1,1,1,0,1],
  ipa: "wɪr nɒt dʒʌst ˈbɪldɪŋ ə ˈprɒdʌkt wɪr ˈʃeɪpɪŋ ən ˈɪndəstri",
  meaning: "Inspire the team with a bigger mission",
  cn: "我们不仅仅是在打造一款产品——我们在塑造一个行业。",
  trap: "'industry' 重音在 IN-，/ˈɪndəstri/ 三音节",
  tip: "'not just' 语调低沉铺垫，'shaping an industry' 升调点燃激情",
  pattern: "We're not just ___ing ___ — we're ___ing ___",
  variants: [
    "We're not just writing code — we're changing how people work.",
    "We're not just launching a feature — we're setting a new standard."
  ]
};

const s69 = {
  id: 69,
  cat: "leadership",
  scene: "vision",
  text: "This is bigger than any single quarter or metric.",
  words: ["This","is","big·ger","than","an·y","sin·gle","quar·ter","or","met·ric"],
  stress: [1,0,1,0,1,1,1,0,1],
  ipa: "ðɪs ɪz ˈbɪɡər ðæn ˈɛni ˈsɪŋɡəl ˈkwɔːrtər ɔːr ˈmɛtrɪk",
  meaning: "Elevate thinking beyond short-term goals",
  cn: "这比任何单个季度或指标都重要。",
  trap: "'metric' /ˈmɛtrɪk/ 重音在 MET-，不要读成 me-TRIC",
  tip: "'bigger' 拉长强调，'single quarter or metric' 快速带过显得格局大",
  pattern: "This is bigger than any single ___",
  variants: [
    "This is bigger than any single deal or partnership.",
    "This is bigger than any single release or milestone."
  ]
};

const s70 = {
  id: 70,
  cat: "leadership",
  scene: "pivoting",
  text: "The market has shifted. We need to adapt our strategy.",
  words: ["The","mar·ket","has","shift·ed","We","need","to","a·dapt","our","strat·e·gy"],
  stress: [0,1,0,1,0,1,0,1,0,1],
  ipa: "ðə ˈmɑːrkɪt hæz ˈʃɪftɪd wi niːd tə əˈdæpt aʊər ˈstrætədʒi",
  meaning: "Announce a strategic pivot with reasoning",
  cn: "市场已经变了。我们需要调整策略。",
  trap: "'strategy' 重音在 STRAT-，/ˈstrætədʒi/ 三音节",
  tip: "前半句陈述事实语调平稳，后半句 'adapt' 加力表决心",
  pattern: "The market has ___. We need to adapt our ___",
  variants: [
    "The landscape has changed. We need to adapt our approach.",
    "Customer needs have shifted. We need to adapt our roadmap."
  ]
};

const s71 = {
  id: 71,
  cat: "leadership",
  scene: "pivoting",
  text: "I know this is a big change, but the data backs it up.",
  words: ["I","know","this","is","a","big","change","but","the","da·ta","backs","it","up"],
  stress: [0,1,0,0,0,1,1,0,0,1,1,0,1],
  ipa: "aɪ noʊ ðɪs ɪz ə bɪɡ tʃeɪndʒ bʌt ðə ˈdeɪtə bæks ɪt ʌp",
  meaning: "Acknowledge disruption while defending the pivot",
  cn: "我知道这是一个很大的变化，但数据支持这个决定。",
  trap: "'data' 美式 /ˈdeɪtə/，'backs it up' 连读自然",
  tip: "'big change' 先共情，'but' 转折后语气坚定",
  pattern: "I know this is ___, but the data backs it up",
  variants: [
    "I know this is unexpected, but the data backs it up.",
    "I know this is uncomfortable, but the numbers back it up."
  ]
};

const s72 = {
  id: 72,
  cat: "leadership",
  scene: "pivoting",
  text: "We're going to sunset this feature and double down on growth.",
  words: ["We're","go·ing","to","sun·set","this","fea·ture","and","dou·ble","down","on","growth"],
  stress: [1,1,0,1,0,1,0,1,1,0,1],
  ipa: "wɪr ˈɡoʊɪŋ tə ˈsʌnˌsɛt ðɪs ˈfiːtʃər ænd ˈdʌbəl daʊn ɒn ɡroʊθ",
  meaning: "Communicate sunsetting a product area",
  cn: "我们将下线这个功能，全力投入增长。",
  trap: "'sunset' 作动词用，/ˈsʌnˌsɛt/ 重音在 SUN-",
  tip: "'double down on growth' 节奏紧凑，传递果断",
  pattern: "We're going to sunset ___ and double down on ___",
  variants: [
    "We're going to sunset the legacy tool and double down on the new platform.",
    "We're going to phase out this service and double down on core."
  ]
};

const s73 = {
  id: 73,
  cat: "leadership",
  scene: "feedback",
  text: "Can I give you some candid feedback on your presentation?",
  words: ["Can","I","give","you","some","can·did","feed·back","on","your","pres·en·ta·tion"],
  stress: [0,1,1,0,0,1,1,0,0,1],
  ipa: "kæn aɪ ɡɪv juː sʌm ˈkændɪd ˈfiːdbæk ɒn jɔːr ˌprɛzənˈteɪʃən",
  meaning: "Ask permission before giving direct feedback",
  cn: "我能就你的演示给你一些坦诚的反馈吗？",
  trap: "'candid' /ˈkændɪd/ 两音节，不要和 'candidate' 混淆",
  tip: "语调温和上扬，'candid' 让人心理准备但不感到威胁",
  pattern: "Can I give you some candid feedback on ___?",
  variants: [
    "Can I give you some candid feedback on the proposal?",
    "Can I share some honest feedback on your approach?"
  ]
};

const s74 = {
  id: 74,
  cat: "leadership",
  scene: "feedback",
  text: "What you did well was the structure; the delivery needs work.",
  words: ["What","you","did","well","was","the","struc·ture","the","de·liv·er·y","needs","work"],
  stress: [0,0,1,1,0,0,1,0,1,1,1],
  ipa: "wɒt juː dɪd wɛl wɒz ðə ˈstrʌktʃər ðə dɪˈlɪvəri niːdz wɜːrk",
  meaning: "Balance positive and constructive feedback",
  cn: "你做得好的是结构；演示方式还需要改进。",
  trap: "'delivery' 重音在 -LIV-，/dɪˈlɪvəri/ 四音节",
  tip: "分号前后形成对比，'well' 真诚赞赏，'needs work' 直接但不伤人",
  pattern: "What you did well was ___; ___ needs work",
  variants: [
    "What you did well was the analysis; the conclusion needs work.",
    "What you nailed was the research; the storytelling needs work."
  ]
};

const s75 = {
  id: 75,
  cat: "leadership",
  scene: "feedback",
  text: "I want to see you push yourself beyond your comfort zone.",
  words: ["I","want","to","see","you","push","your·self","be·yond","your","com·fort","zone"],
  stress: [0,1,0,1,0,1,1,1,0,1,1],
  ipa: "aɪ wɒnt tə siː juː pʊʃ jɔːrˈsɛlf bɪˈjɒnd jɔːr ˈkʌmfərt zoʊn",
  meaning: "Challenge someone to grow with encouragement",
  cn: "我希望看到你突破自己的舒适区。",
  trap: "'comfort zone' 两个词，'comfort' 重音在 COM-",
  tip: "'push yourself' 加力鼓励，'beyond' 拉长制造突破感",
  pattern: "I want to see you push yourself beyond ___",
  variants: [
    "I want to see you step outside your comfort zone.",
    "I want to see you challenge yourself beyond what feels safe."
  ]
};

const s76 = {
  id: 76,
  cat: "leadership",
  scene: "crisis",
  text: "Everyone, stay calm. Here's what we're going to do.",
  words: ["Ev·ery·one","stay","calm","Here's","what","we're","go·ing","to","do"],
  stress: [1,1,1,1,0,1,1,0,1],
  ipa: "ˈɛvriwʌn steɪ kɑːm hɪrz wɒt wɪr ˈɡoʊɪŋ tə duː",
  meaning: "Take control in a crisis with composure",
  cn: "大家，保持冷静。以下是我们要做的。",
  trap: "'calm' /kɑːm/ 注意 l 不发音",
  tip: "前半句低沉稳定安抚情绪，后半句坚定有力传递方向",
  pattern: "Everyone, stay calm. Here's what we're going to do",
  variants: [
    "Team, stay focused. Here's what we're going to do.",
    "Alright everyone, stay calm. Here's our plan."
  ]
};

const s77 = {
  id: 77,
  cat: "leadership",
  scene: "crisis",
  text: "We don't have all the answers yet, but we're on it.",
  words: ["We","don't","have","all","the","an·swers","yet","but","we're","on","it"],
  stress: [0,1,0,1,0,1,1,0,1,0,1],
  ipa: "wi doʊnt hæv ɔːl ðə ˈænsərz jɛt bʌt wɪr ɒn ɪt",
  meaning: "Be transparent while showing action in a crisis",
  cn: "我们还没有所有答案，但我们正在处理。",
  trap: "'answers' /ˈænsərz/ 注意 w 不发音",
  tip: "'yet' 停顿，'but we're on it' 快速坚定，传递掌控感",
  pattern: "We don't have all the ___ yet, but we're on it",
  variants: [
    "We don't have all the details yet, but we're on it.",
    "We don't have the full picture yet, but we're working on it."
  ]
};

const s78 = {
  id: 78,
  cat: "leadership",
  scene: "crisis",
  text: "Our top priority right now is making sure no one is affected.",
  words: ["Our","top","pri·or·i·ty","right","now","is","mak·ing","sure","no","one","is","af·fect·ed"],
  stress: [0,1,1,1,1,0,1,1,0,1,0,1],
  ipa: "aʊər tɒp praɪˈɒrɪti raɪt naʊ ɪz ˈmeɪkɪŋ ʃʊr noʊ wʌn ɪz əˈfɛktɪd",
  meaning: "Communicate crisis priorities clearly",
  cn: "我们现在的首要任务是确保没有人受到影响。",
  trap: "'priority' 重音在 -OR-，/praɪˈɒrɪti/ 四音节",
  tip: "'top priority right now' 四个重读连击，'no one' 加重表关怀",
  pattern: "Our top priority right now is making sure ___",
  variants: [
    "Our top priority right now is making sure data is secure.",
    "Our top priority right now is making sure customers are informed."
  ]
};

const s79 = {
  id: 79,
  cat: "leadership",
  scene: "alignment",
  text: "Let's make sure everyone is on the same page before we proceed.",
  words: ["Let's","make","sure","ev·ery·one","is","on","the","same","page","be·fore","we","pro·ceed"],
  stress: [1,1,1,1,0,0,0,1,1,1,0,1],
  ipa: "lɛts meɪk ʃʊr ˈɛvriwʌn ɪz ɒn ðə seɪm peɪdʒ bɪˈfɔːr wi prəˈsiːd",
  meaning: "Ensure alignment before taking action",
  cn: "在我们继续之前，确保所有人都达成一致。",
  trap: "'proceed' /prəˈsiːd/ 重音在 -CEED，不要和 'precede' 混淆",
  tip: "'same page' 重读强调统一，'proceed' 语气果断",
  pattern: "Let's make sure everyone is on the same page before ___",
  variants: [
    "Let's make sure everyone is on the same page before the launch.",
    "Let's make sure we're all aligned before moving forward."
  ]
};

const s80 = {
  id: 80,
  cat: "leadership",
  scene: "alignment",
  text: "Are there any concerns we haven't addressed?",
  words: ["Are","there","an·y","con·cerns","we","haven't","ad·dressed"],
  stress: [0,0,1,1,0,1,1],
  ipa: "ɑːr ðɛr ˈɛni kənˈsɜːrnz wi ˈhævənt əˈdrɛst",
  meaning: "Invite objections to build genuine alignment",
  cn: "还有我们没有解决的顾虑吗？",
  trap: "'addressed' /əˈdrɛst/ 重音在 -DRESSED，两音节",
  tip: "真诚提问语调上扬，给人安全感表达不同意见",
  pattern: "Are there any ___ we haven't addressed?",
  variants: [
    "Are there any risks we haven't addressed?",
    "Are there any objections we haven't addressed?"
  ]
};

const s81 = {
  id: 81,
  cat: "leadership",
  scene: "alignment",
  text: "I need everyone's buy-in before we commit resources.",
  words: ["I","need","ev·ery·one's","buy-in","be·fore","we","com·mit","re·sourc·es"],
  stress: [0,1,1,1,1,0,1,1],
  ipa: "aɪ niːd ˈɛvriwʌnz ˈbaɪɪn bɪˈfɔːr wi kəˈmɪt rɪˈsɔːrsɪz",
  meaning: "Request consensus before resource allocation",
  cn: "在投入资源之前，我需要每个人的认同。",
  trap: "'commit' /kəˈmɪt/ 重音在 -MIT，不要读成 COM-mit",
  tip: "'buy-in' 是关键词重读，'commit resources' 语调严肃",
  pattern: "I need everyone's buy-in before we ___",
  variants: [
    "I need everyone's buy-in before we move to phase two.",
    "I need the team's buy-in before we finalize the plan."
  ]
};

const s82 = {
  id: 82,
  cat: "leadership",
  scene: "prioritization",
  text: "We can't do everything. Let's focus on what moves the needle.",
  words: ["We","can't","do","ev·ery·thing","Let's","fo·cus","on","what","moves","the","nee·dle"],
  stress: [0,1,0,1,1,1,0,1,1,0,1],
  ipa: "wi kænt duː ˈɛvriθɪŋ lɛts ˈfoʊkəs ɒn wɒt muːvz ðə ˈniːdəl",
  meaning: "Prioritize ruthlessly by impact",
  cn: "我们不可能做所有事。让我们专注于最有影响力的事。",
  trap: "'needle' /ˈniːdəl/ 两音节，'moves the needle' 是固定搭配",
  tip: "前半句果断拒绝，后半句 'moves the needle' 积极导向",
  pattern: "We can't do everything. Let's focus on what ___",
  variants: [
    "We can't do everything. Let's focus on what matters most.",
    "We can't boil the ocean. Let's focus on what drives results."
  ]
};

const s83 = {
  id: 83,
  cat: "leadership",
  scene: "prioritization",
  text: "If this isn't a top-three priority, it goes on the backlog.",
  words: ["If","this","isn't","a","top-three","pri·or·i·ty","it","goes","on","the","back·log"],
  stress: [0,1,1,0,1,1,0,1,0,0,1],
  ipa: "ɪf ðɪs ˈɪzənt ə ˌtɒpˈθriː praɪˈɒrɪti ɪt ɡoʊz ɒn ðə ˈbækˌlɒɡ",
  meaning: "Set a clear prioritization framework",
  cn: "如果这不是前三优先级，就放到待办列表里。",
  trap: "'priority' 重音在 -OR-，四音节 /praɪˈɒrɪti/",
  tip: "'top-three priority' 是判断标准，坚定但不生硬",
  pattern: "If this isn't a ___ priority, it goes on ___",
  variants: [
    "If this isn't a must-have, it goes on the backlog.",
    "If this doesn't rank in our top priorities, it waits."
  ]
};

const s84 = {
  id: 84,
  cat: "leadership",
  scene: "prioritization",
  text: "What's the one thing that would unblock the entire team?",
  words: ["What's","the","one","thing","that","would","un·block","the","en·tire","team"],
  stress: [1,0,1,1,0,0,1,0,1,1],
  ipa: "wɒts ðə wʌn θɪŋ ðæt wʊd ʌnˈblɒk ðə ɪnˈtaɪər tiːm",
  meaning: "Identify the highest-leverage action",
  cn: "什么是能让整个团队不再受阻的那一件事？",
  trap: "'entire' /ɪnˈtaɪər/ 重音在 -TIRE，不要读成 EN-tire",
  tip: "'one thing' 重读聚焦，引导思考最关键的瓶颈",
  pattern: "What's the one thing that would ___?",
  variants: [
    "What's the one thing that would accelerate our progress?",
    "What's the single biggest blocker for the team right now?"
  ]
};

const s85 = {
  id: 85,
  cat: "leadership",
  scene: "empowerment",
  text: "You don't need my approval for this — go ahead and ship it.",
  words: ["You","don't","need","my","ap·prov·al","for","this","go","a·head","and","ship","it"],
  stress: [1,1,1,0,1,0,1,1,1,0,1,0],
  ipa: "juː doʊnt niːd maɪ əˈpruːvəl fɔːr ðɪs ɡoʊ əˈhɛd ænd ʃɪp ɪt",
  meaning: "Remove bottlenecks by empowering the team",
  cn: "这件事不需要我批准——直接上线吧。",
  trap: "'approval' /əˈpruːvəl/ 重音在 -PROV-，三音节",
  tip: "破折号后 'go ahead and ship it' 快速果断，传递信任",
  pattern: "You don't need my approval for this — ___",
  variants: [
    "You don't need my approval for this — just do it.",
    "You don't need my sign-off — go ahead and launch."
  ]
};

const s86 = {
  id: 86,
  cat: "leadership",
  scene: "empowerment",
  text: "I hired you because you're the expert. What do you recommend?",
  words: ["I","hired","you","be·cause","you're","the","ex·pert","What","do","you","rec·om·mend"],
  stress: [0,1,0,1,1,0,1,1,0,0,1],
  ipa: "aɪ ˈhaɪərd juː bɪˈkɒz jʊr ðə ˈɛkspɜːrt wɒt duː juː ˌrɛkəˈmɛnd",
  meaning: "Elevate team expertise and ask for input",
  cn: "我雇你是因为你是专家。你建议怎么做？",
  trap: "'expert' /ˈɛkspɜːrt/ 重音在 EX-，不是 ex-PERT",
  tip: "'the expert' 强调对方身份，问句真诚而非考验",
  pattern: "I hired you because you're ___. What do you recommend?",
  variants: [
    "I brought you in because you know this space. What's your take?",
    "You're the domain expert here. What do you recommend?"
  ]
};

const s87 = {
  id: 87,
  cat: "leadership",
  scene: "empowerment",
  text: "This is your area — own it and make it world-class.",
  words: ["This","is","your","ar·e·a","own","it","and","make","it","world-class"],
  stress: [1,0,0,1,1,0,0,1,0,1],
  ipa: "ðɪs ɪz jɔːr ˈɛriə oʊn ɪt ænd meɪk ɪt ˌwɜːrldˈklæs",
  meaning: "Give full ownership with high expectations",
  cn: "这是你的领域——拿出来，做到世界级水准。",
  trap: "'world-class' /ˌwɜːrldˈklæs/ 重音在 CLASS",
  tip: "'own it' 有力授权，'world-class' 拉高期望，鼓舞人心",
  pattern: "This is your area — own it and make it ___",
  variants: [
    "This is your domain — own it and make it exceptional.",
    "This is your space — own it and set the bar high."
  ]
};

const s88 = {
  id: 88,
  cat: "leadership",
  scene: "recognition",
  text: "I want to publicly acknowledge the incredible work this team has done.",
  words: ["I","want","to","pub·lic·ly","ac·knowl·edge","the","in·cred·i·ble","work","this","team","has","done"],
  stress: [0,1,0,1,1,0,1,1,0,1,0,1],
  ipa: "aɪ wɒnt tə ˈpʌblɪkli əkˈnɒlɪdʒ ðə ɪnˈkrɛdəbəl wɜːrk ðɪs tiːm hæz dʌn",
  meaning: "Give public recognition to the team",
  cn: "我想公开表彰这个团队所做的出色工作。",
  trap: "'acknowledge' /əkˈnɒlɪdʒ/ 重音在 -KNOWL-，三音节",
  tip: "'incredible work' 真诚赞赏，'this team' 指向具体对象",
  pattern: "I want to publicly acknowledge ___",
  variants: [
    "I want to publicly recognize the outstanding effort from this team.",
    "I want to call out the amazing work this team has delivered."
  ]
};

const s89 = {
  id: 89,
  cat: "leadership",
  scene: "recognition",
  text: "You went above and beyond, and it didn't go unnoticed.",
  words: ["You","went","a·bove","and","be·yond","and","it","didn't","go","un·no·ticed"],
  stress: [1,1,1,0,1,0,0,1,0,1],
  ipa: "juː wɛnt əˈbʌv ænd bɪˈjɒnd ænd ɪt ˈdɪdənt ɡoʊ ˌʌnˈnoʊtɪst",
  meaning: "Recognize individual extra effort",
  cn: "你超额完成了任务，这一点大家都看在眼里。",
  trap: "'unnoticed' /ˌʌnˈnoʊtɪst/ 重音在 -NO-，三音节",
  tip: "'above and beyond' 节奏上扬，'unnoticed' 温暖收尾",
  pattern: "You went above and beyond, and it didn't go unnoticed",
  variants: [
    "You really stepped up, and it didn't go unnoticed.",
    "You went the extra mile, and we all noticed."
  ]
};

const s90 = {
  id: 90,
  cat: "leadership",
  scene: "recognition",
  text: "This milestone wouldn't have been possible without your leadership.",
  words: ["This","mile·stone","wouldn't","have","been","pos·si·ble","with·out","your","lead·er·ship"],
  stress: [0,1,1,0,0,1,1,0,1],
  ipa: "ðɪs ˈmaɪlstoʊn ˈwʊdənt hæv bɪn ˈpɒsəbəl wɪðˈaʊt jɔːr ˈliːdərʃɪp",
  meaning: "Attribute success to someone's leadership",
  cn: "没有你的领导，这个里程碑不可能实现。",
  trap: "'milestone' /ˈmaɪlstoʊn/ 重音在 MILE-，复合词",
  tip: "'wouldn't have been possible' 先铺垫，'your leadership' 是高光点",
  pattern: "This ___ wouldn't have been possible without your ___",
  variants: [
    "This launch wouldn't have been possible without your dedication.",
    "This achievement wouldn't have been possible without your guidance."
  ]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY3 = [
  s61, s62, s63, s64, s65, s66, s67, s68, s69, s70,
  s71, s72, s73, s74, s75, s76, s77, s78, s79, s80,
  s81, s82, s83, s84, s85, s86, s87, s88, s89, s90
];

export const SCENES_DAY3 = {
  61: { icon: "👉", colors: ["#2563EB", "#1E40AF"], title: "Hand It Off", sub: "Delegating ownership" },
  62: { icon: "🔑", colors: ["#7C3AED", "#5B21B6"], title: "Full Authority", sub: "Granting power" },
  63: { icon: "🏃", colors: ["#059669", "#047857"], title: "Run With It", sub: "Trust & autonomy" },
  64: { icon: "🛡️", colors: ["#DC2626", "#B91C1C"], title: "My Call", sub: "Owning the decision" },
  65: { icon: "🎯", colors: ["#F59E0B", "#D97706"], title: "Post-Mortem", sub: "Learning from misses" },
  66: { icon: "🙋", colors: ["#E11D48", "#BE123C"], title: "That's On Me", sub: "Personal accountability" },
  67: { icon: "🔭", colors: ["#6366F1", "#4F46E5"], title: "Twelve-Month View", sub: "Casting the vision" },
  68: { icon: "🌍", colors: ["#8B5CF6", "#7C3AED"], title: "Shaping an Industry", sub: "Inspiring mission" },
  69: { icon: "🏔️", colors: ["#0891B2", "#0E7490"], title: "Bigger Picture", sub: "Elevating perspective" },
  70: { icon: "🔄", colors: ["#EA580C", "#C2410C"], title: "Market Shift", sub: "Strategic pivot" },
  71: { icon: "📊", colors: ["#10B981", "#059669"], title: "Data-Backed Pivot", sub: "Change with evidence" },
  72: { icon: "🌅", colors: ["#F97316", "#EA580C"], title: "Sunset & Focus", sub: "Saying no to say yes" },
  73: { icon: "💬", colors: ["#14B8A6", "#0D9488"], title: "Candid Feedback", sub: "Asking permission" },
  74: { icon: "⚖️", colors: ["#3B82F6", "#2563EB"], title: "Balanced Review", sub: "Praise + growth areas" },
  75: { icon: "🚀", colors: ["#A855F7", "#9333EA"], title: "Comfort Zone", sub: "Challenging to grow" },
  76: { icon: "🧊", colors: ["#EF4444", "#DC2626"], title: "Stay Calm", sub: "Crisis composure" },
  77: { icon: "🔍", colors: ["#78716C", "#57534E"], title: "Honest Update", sub: "Transparent in crisis" },
  78: { icon: "🚨", colors: ["#DC2626", "#991B1B"], title: "Top Priority", sub: "Crisis triage" },
  79: { icon: "📄", colors: ["#2563EB", "#1D4ED8"], title: "Same Page", sub: "Pre-action alignment" },
  80: { icon: "🤔", colors: ["#059669", "#047857"], title: "Any Concerns?", sub: "Inviting objections" },
  81: { icon: "🤝", colors: ["#7C3AED", "#6D28D9"], title: "Buy-In First", sub: "Consensus building" },
  82: { icon: "🎯", colors: ["#D97706", "#B45309"], title: "Move the Needle", sub: "Ruthless prioritization" },
  83: { icon: "📋", colors: ["#1F2937", "#111827"], title: "Top Three Only", sub: "Priority framework" },
  84: { icon: "🔓", colors: ["#F59E0B", "#EAB308"], title: "Unblock the Team", sub: "Finding leverage" },
  85: { icon: "✅", colors: ["#10B981", "#059669"], title: "Just Ship It", sub: "Removing blockers" },
  86: { icon: "🧠", colors: ["#6366F1", "#4F46E5"], title: "You're the Expert", sub: "Elevating the team" },
  87: { icon: "🏆", colors: ["#E11D48", "#BE123C"], title: "World-Class", sub: "Ownership + ambition" },
  88: { icon: "👏", colors: ["#8B5CF6", "#6D28D9"], title: "Public Praise", sub: "Team recognition" },
  89: { icon: "⭐", colors: ["#F59E0B", "#D97706"], title: "Above & Beyond", sub: "Individual recognition" },
  90: { icon: "🎉", colors: ["#059669", "#047857"], title: "Milestone Moment", sub: "Attributing success" }
};
