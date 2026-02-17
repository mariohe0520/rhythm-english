// ─── Day 10 · Data & Analytics ─────────────────────────────────────
// 30 sentences (id 271-300)

const s271 = {
  id: 271,
  cat: "analytics",
  scene: "dashboard-review",
  text: "Let's pull up the dashboard and walk through the key metrics.",
  words: ["Let's","pull","up","the","dash·board","and","walk","through","the","key","met·rics"],
  stress: [1,1,1,0,1,0,1,0,0,1,1],
  ipa: "lɛts pʊl ʌp ðə ˈdæʃbɔːrd ænd wɔːk θruː ðə kiː ˈmɛtrɪks",
  meaning: "Open a data review meeting with the dashboard",
  cn: "让我们调出仪表盘，逐一过一下关键指标。",
  trap: "'dashboard' /ˈdæʃbɔːrd/ 复合词重音在 DASH-",
  tip: "'pull up' 和 'walk through' 两个动词短语——行动导向",
  pattern: "Let's pull up ___ and walk through ___",
  variants: [
    "Let me share the live dashboard on screen.",
    "I've got the metrics dashboard open — let's dive in."
  ]
};

const s272 = {
  id: 272,
  cat: "analytics",
  scene: "dashboard-review",
  text: "Daily active users are trending up — but engagement depth is flat.",
  words: ["Dai·ly","ac·tive","us·ers","are","trend·ing","up","but","en·gage·ment","depth","is","flat"],
  stress: [1,1,1,0,1,1,0,1,1,0,1],
  ipa: "ˈdeɪli ˈæktɪv ˈjuːzərz ɑːr ˈtrɛndɪŋ ʌp bʌt ɪnˈɡeɪdʒmənt dɛpθ ɪz flæt",
  meaning: "Report a mixed metric — growth but shallow engagement",
  cn: "日活用户在上升——但参与深度持平。",
  trap: "'engagement' /ɪnˈɡeɪdʒmənt/ 重音在 -GAGE-，三音节",
  tip: "'but' 转折——前面乐观后面警示，数据人的诚实",
  pattern: "___ are trending up — but ___ is flat",
  variants: [
    "Signups are growing, but time-in-app hasn't moved.",
    "Top-line numbers look great, but the cohort data tells a different story."
  ]
};

const s273 = {
  id: 273,
  cat: "analytics",
  scene: "dashboard-review",
  text: "I'm seeing an anomaly in the conversion funnel — let me dig deeper.",
  words: ["I'm","see·ing","an","a·nom·a·ly","in","the","con·ver·sion","fun·nel","let","me","dig","deep·er"],
  stress: [1,1,0,1,0,0,1,1,0,0,1,1],
  ipa: "aɪm ˈsiːɪŋ ən əˈnɒməli ɪn ðə kənˈvɜːrʒən ˈfʌnəl lɛt mi dɪɡ ˈdiːpər",
  meaning: "Flag a data irregularity that needs investigation",
  cn: "我在转化漏斗中看到了一个异常——让我深入看看。",
  trap: "'anomaly' /əˈnɒməli/ 重音在 -NOM-，四音节",
  tip: "'dig deeper' 动作感强——数据分析师的口头禅",
  pattern: "I'm seeing an anomaly in ___ — let me ___",
  variants: [
    "Something looks off in the checkout flow — I'll investigate.",
    "There's a spike here that doesn't match our baseline."
  ]
};

const s274 = {
  id: 274,
  cat: "analytics",
  scene: "ab-test-results",
  text: "The A/B test reached statistical significance — variant B wins by twelve percent.",
  words: ["The","A/B","test","reached","sta·tis·ti·cal","sig·nif·i·cance","var·i·ant","B","wins","by","twelve","per·cent"],
  stress: [0,1,1,1,1,1,1,1,1,0,1,1],
  ipa: "ðə ˌeɪˈbiː tɛst riːtʃt stəˈtɪstɪkəl sɪɡˈnɪfɪkəns ˈvɛriənt biː wɪnz baɪ twɛlv pərˈsɛnt",
  meaning: "Report an A/B test result with confidence",
  cn: "A/B测试达到了统计显著性——B方案以12%的优势胜出。",
  trap: "'significance' /sɪɡˈnɪfɪkəns/ 重音在 -NIF-，四音节",
  tip: "'statistical significance' 说成一个整体——数据团队的通行语",
  pattern: "The A/B test reached ___ — variant ___ wins by ___",
  variants: [
    "We have a clear winner — variant B outperformed by twelve percent.",
    "The experiment is conclusive — the new design converts significantly better."
  ]
};

const s275 = {
  id: 275,
  cat: "analytics",
  scene: "ab-test-results",
  text: "We need a larger sample size before drawing any conclusions.",
  words: ["We","need","a","larg·er","sam·ple","size","be·fore","draw·ing","an·y","con·clu·sions"],
  stress: [0,1,0,1,1,1,1,1,1,1],
  ipa: "wi niːd ə ˈlɑːrdʒər ˈsæmpəl saɪz bɪˈfɔːr ˈdrɔːɪŋ ˈɛni kənˈkluːʒənz",
  meaning: "Push back on premature conclusions from insufficient data",
  cn: "在得出任何结论之前，我们需要更大的样本量。",
  trap: "'conclusions' /kənˈkluːʒənz/ 重音在 -CLU-，三音节",
  tip: "'larger sample size' 三连击——数据严谨性的标志",
  pattern: "We need a larger ___ before drawing any ___",
  variants: [
    "The data isn't mature enough — let the test run another week.",
    "It's too early to call it — the confidence interval is still wide."
  ]
};

const s276 = {
  id: 276,
  cat: "analytics",
  scene: "ab-test-results",
  text: "Let's not cherry-pick results — what does the full dataset tell us?",
  words: ["Let's","not","cher·ry-pick","re·sults","what","does","the","full","da·ta·set","tell","us"],
  stress: [1,1,1,1,1,0,0,1,1,1,0],
  ipa: "lɛts nɒt ˈtʃɛriˌpɪk rɪˈzʌlts wʌt dʌz ðə fʊl ˈdeɪtəsɛt tɛl ʌs",
  meaning: "Challenge selective data interpretation",
  cn: "别只挑有利的结果——完整数据集告诉我们什么？",
  trap: "'cherry-pick' /ˈtʃɛriˌpɪk/ 复合动词，指有选择性地挑选",
  tip: "'cherry-pick' 先抑后扬——'full dataset' 才是重点",
  pattern: "Let's not cherry-pick ___ — what does ___ tell us?",
  variants: [
    "Show me the whole picture, not just the highlights.",
    "We need to look at this holistically, not just the favorable segments."
  ]
};

const s277 = {
  id: 277,
  cat: "analytics",
  scene: "funnel-analysis",
  text: "We're losing forty percent of users between signup and first value moment.",
  words: ["We're","los·ing","for·ty","per·cent","of","us·ers","be·tween","sign·up","and","first","val·ue","mo·ment"],
  stress: [1,1,1,1,0,1,1,1,0,1,1,1],
  ipa: "wɪr ˈluːzɪŋ ˈfɔːrti pərˈsɛnt əv ˈjuːzərz bɪˈtwiːn ˈsaɪnʌp ænd fɜːrst ˈvæljuː ˈmoʊmənt",
  meaning: "Identify the critical drop-off point in the user funnel",
  cn: "我们在注册到首次价值时刻之间流失了40%的用户。",
  trap: "'value moment' 产品术语——用户第一次感受到产品价值的瞬间",
  tip: "'forty percent' 数字加重——让问题的严重性说话",
  pattern: "We're losing ___ percent of users between ___ and ___",
  variants: [
    "The biggest drop-off is in the onboarding flow.",
    "Only sixty percent of signups ever complete their first task."
  ]
};

const s278 = {
  id: 278,
  cat: "analytics",
  scene: "funnel-analysis",
  text: "If we reduce friction at this step, the downstream impact is massive.",
  words: ["If","we","re·duce","fric·tion","at","this","step","the","down·stream","im·pact","is","mas·sive"],
  stress: [0,0,1,1,0,0,1,0,1,1,0,1],
  ipa: "ɪf wi rɪˈduːs ˈfrɪkʃən æt ðɪs stɛp ðə ˈdaʊnstriːm ˈɪmpækt ɪz ˈmæsɪv",
  meaning: "Make the case for optimizing a specific funnel step",
  cn: "如果我们在这一步减少摩擦，下游影响将是巨大的。",
  trap: "'friction' /ˈfrɪkʃən/ 两音节，重音在 FRIC-",
  tip: "'downstream impact' 是数据分析师的专业术语——因果链思维",
  pattern: "If we reduce ___ at this step, the downstream impact is ___",
  variants: [
    "Fixing this one step could unlock twenty percent more conversions.",
    "Every percentage point we recover here compounds downstream."
  ]
};

const s279 = {
  id: 279,
  cat: "analytics",
  scene: "funnel-analysis",
  text: "The drop-off correlates with our loading time — it's a performance issue, not a UX issue.",
  words: ["The","drop-off","cor·re·lates","with","our","load·ing","time","it's","a","per·for·mance","is·sue","not","a","UX","is·sue"],
  stress: [0,1,1,0,0,1,1,1,0,1,1,1,0,1,1],
  ipa: "ðə ˈdrɒpˌɒf ˈkɒrəleɪts wɪð aʊər ˈloʊdɪŋ taɪm ɪts ə pərˈfɔːrməns ˈɪʃuː nɒt ə ˌjuːˈɛks ˈɪʃuː",
  meaning: "Identify the root cause behind a funnel problem",
  cn: "流失与我们的加载时间相关——这是性能问题，不是用户体验问题。",
  trap: "'correlates' /ˈkɒrəleɪts/ 重音在 COR-，三音节",
  tip: "'performance issue, not a UX issue' 精准归因——数据驱动的诊断",
  pattern: "The ___ correlates with ___ — it's a ___ issue, not a ___ issue",
  variants: [
    "The data points to latency, not design, as the bottleneck.",
    "Users aren't confused — they're impatient. It's a speed problem."
  ]
};

const s280 = {
  id: 280,
  cat: "analytics",
  scene: "cohort-report",
  text: "The January cohort has the highest thirty-day retention we've ever seen.",
  words: ["The","Jan·u·ar·y","co·hort","has","the","high·est","thir·ty-day","re·ten·tion","we've","ev·er","seen"],
  stress: [0,1,1,0,0,1,1,1,1,1,1],
  ipa: "ðə ˈdʒænjuɛri ˈkoʊhɔːrt hæz ðə ˈhaɪəst ˈθɜːrti deɪ rɪˈtɛnʃən wiːv ˈɛvər siːn",
  meaning: "Highlight a standout cohort in retention analysis",
  cn: "一月份的群组拥有我们有史以来最高的30天留存率。",
  trap: "'cohort' /ˈkoʊhɔːrt/ 两音节，重音在 CO-——在分析语境中指一组用户",
  tip: "'highest' 和 'ever seen' 两端重读——激动但有数据支撑",
  pattern: "The ___ cohort has the highest ___ we've ever seen",
  variants: [
    "Our Q1 cohort is outperforming every prior group on retention.",
    "Thirty-day retention for this cohort is at sixty-eight percent — a new record."
  ]
};

const s281 = {
  id: 281,
  cat: "analytics",
  scene: "cohort-report",
  text: "When we segment by acquisition channel, organic users retain two X better than paid.",
  words: ["When","we","seg·ment","by","ac·qui·si·tion","chan·nel","or·gan·ic","us·ers","re·tain","two","X","bet·ter","than","paid"],
  stress: [0,0,1,0,1,1,1,1,1,1,1,1,0,1],
  ipa: "wɛn wi ˈsɛɡmənt baɪ ˌækwɪˈzɪʃən ˈtʃænəl ɔːrˈɡænɪk ˈjuːzərz rɪˈteɪn tuː ɛks ˈbɛtər ðæn peɪd",
  meaning: "Show how channel segmentation reveals retention insights",
  cn: "按获客渠道分组后，自然用户的留存比付费用户高2倍。",
  trap: "'acquisition' /ˌækwɪˈzɪʃən/ 重音在 -ZI-，四音节",
  tip: "'two X better' 口语化说法——比 'two times' 更科技圈",
  pattern: "When we segment by ___, ___ users retain ___ better than ___",
  variants: [
    "Organic users stick around twice as long as paid ones.",
    "The data clearly shows referral is our stickiest channel."
  ]
};

const s282 = {
  id: 282,
  cat: "analytics",
  scene: "cohort-report",
  text: "We need to understand why the March cohort churned faster than expected.",
  words: ["We","need","to","un·der·stand","why","the","March","co·hort","churned","fast·er","than","ex·pect·ed"],
  stress: [0,1,0,1,1,0,1,1,1,1,0,1],
  ipa: "wi niːd tə ˌʌndərˈstænd waɪ ðə mɑːrtʃ ˈkoʊhɔːrt tʃɜːrnd ˈfæstər ðæn ɪkˈspɛktɪd",
  meaning: "Flag an unexpected churn pattern for investigation",
  cn: "我们需要了解为什么三月群组的流失比预期更快。",
  trap: "'churned' /tʃɜːrnd/ 单音节——SaaS术语指用户流失",
  tip: "'churned faster than expected' 语气严肃——这是一个需要调查的问题",
  pattern: "We need to understand why ___ churned faster than ___",
  variants: [
    "Something happened in March that accelerated churn — let's find it.",
    "The March cohort dropped off a cliff at day fourteen — why?"
  ]
};

const s283 = {
  id: 283,
  cat: "analytics",
  scene: "metrics-meeting",
  text: "Our north star metric is weekly active teams, not individual users.",
  words: ["Our","north","star","met·ric","is","week·ly","ac·tive","teams","not","in·di·vid·u·al","us·ers"],
  stress: [0,1,1,1,0,1,1,1,1,1,1],
  ipa: "aʊər nɔːrθ stɑːr ˈmɛtrɪk ɪz ˈwiːkli ˈæktɪv tiːmz nɒt ˌɪndɪˈvɪdʒuəl ˈjuːzərz",
  meaning: "Define and clarify the team's most important metric",
  cn: "我们的北极星指标是周活跃团队数，不是个人用户。",
  trap: "'individual' /ˌɪndɪˈvɪdʒuəl/ 五音节，重音在 -VID-",
  tip: "'north star metric' 三词组合——硅谷数据文化的核心概念",
  pattern: "Our north star metric is ___, not ___",
  variants: [
    "The metric that matters most is team adoption, not signups.",
    "Don't get distracted by vanity metrics — focus on weekly active teams."
  ]
};

const s284 = {
  id: 284,
  cat: "analytics",
  scene: "metrics-meeting",
  text: "Are we measuring what matters, or just what's easy to measure?",
  words: ["Are","we","meas·ur·ing","what","mat·ters","or","just","what's","eas·y","to","meas·ure"],
  stress: [0,0,1,0,1,0,1,1,1,0,1],
  ipa: "ɑːr wi ˈmɛʒərɪŋ wʌt ˈmætərz ɔːr dʒʌst wʌts ˈiːzi tə ˈmɛʒər",
  meaning: "Challenge the team to focus on meaningful metrics",
  cn: "我们是在衡量重要的东西，还是只衡量容易衡量的？",
  trap: "'measuring' /ˈmɛʒərɪŋ/ 三音节，注意 /ʒ/ 音",
  tip: "两个 'what' 形成对比——这是管理者的灵魂拷问",
  pattern: "Are we ___ing what ___, or just what's easy to ___?",
  variants: [
    "Easy metrics aren't always the right metrics.",
    "Just because we can measure it doesn't mean we should optimize for it."
  ]
};

const s285 = {
  id: 285,
  cat: "analytics",
  scene: "metrics-meeting",
  text: "I want every team to own a metric and report on it weekly.",
  words: ["I","want","ev·ery","team","to","own","a","met·ric","and","re·port","on","it","week·ly"],
  stress: [0,1,1,1,0,1,0,1,0,1,0,0,1],
  ipa: "aɪ wɒnt ˈɛvri tiːm tə oʊn ə ˈmɛtrɪk ænd rɪˈpɔːrt ɒn ɪt ˈwiːkli",
  meaning: "Establish metric ownership across the organization",
  cn: "我要每个团队负责一个指标并每周汇报。",
  trap: "'metric' /ˈmɛtrɪk/ 两音节，重音在 MET-",
  tip: "'own a metric' 动作词——不是 'track' 而是 'own'，强调责任感",
  pattern: "I want every team to own ___ and report on it ___",
  variants: [
    "Metric ownership drives accountability — every team gets one.",
    "No orphan metrics — every number has a name next to it."
  ]
};

const s286 = {
  id: 286,
  cat: "analytics",
  scene: "data-storytelling",
  text: "The numbers alone don't persuade — we need to tell the story behind the data.",
  words: ["The","num·bers","a·lone","don't","per·suade","we","need","to","tell","the","sto·ry","be·hind","the","da·ta"],
  stress: [0,1,1,1,1,0,1,0,1,0,1,1,0,1],
  ipa: "ðə ˈnʌmbərz əˈloʊn doʊnt pərˈsweɪd wi niːd tə tɛl ðə ˈstɔːri bɪˈhaɪnd ðə ˈdeɪtə",
  meaning: "Advocate for narrative-driven data presentation",
  cn: "数字本身不能说服人——我们需要讲述数据背后的故事。",
  trap: "'persuade' /pərˈsweɪd/ 重音在 -SUADE",
  tip: "'story behind the data' 是数据科学家的高阶技能",
  pattern: "The numbers alone don't ___ — we need to ___",
  variants: [
    "Data without context is just noise — tell me what it means.",
    "Don't just show the chart — explain why it matters."
  ]
};

const s287 = {
  id: 287,
  cat: "analytics",
  scene: "data-storytelling",
  text: "Here's the insight: users who complete onboarding in under three minutes retain at twice the rate.",
  words: ["Here's","the","in·sight","us·ers","who","com·plete","on·board·ing","in","un·der","three","min·utes","re·tain","at","twice","the","rate"],
  stress: [1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1],
  ipa: "hɪrz ðə ˈɪnsaɪt ˈjuːzərz huː kəmˈpliːt ˈɒnbɔːrdɪŋ ɪn ˈʌndər θriː ˈmɪnɪts rɪˈteɪn æt twaɪs ðə reɪt",
  meaning: "Deliver a powerful data insight with a clear narrative",
  cn: "关键发现是：在三分钟内完成引导的用户留存率是两倍。",
  trap: "'onboarding' /ˈɒnbɔːrdɪŋ/ 三音节，重音在 ON-",
  tip: "'Here's the insight' 开头定调——然后用一句话讲清因果",
  pattern: "Here's the insight: users who ___ retain at ___ the rate",
  variants: [
    "The magic number is three minutes — that's the onboarding sweet spot.",
    "Speed to first value directly predicts long-term retention."
  ]
};

const s288 = {
  id: 288,
  cat: "analytics",
  scene: "data-storytelling",
  text: "If I had to summarize this quarter in one chart, it would be this one.",
  words: ["If","I","had","to","sum·ma·rize","this","quar·ter","in","one","chart","it","would","be","this","one"],
  stress: [0,0,0,0,1,0,1,0,1,1,0,0,0,1,1],
  ipa: "ɪf aɪ hæd tə ˈsʌməraɪz ðɪs ˈkwɔːrtər ɪn wʌn tʃɑːrt ɪt wʊd bi ðɪs wʌn",
  meaning: "Focus attention on the single most important visualization",
  cn: "如果用一张图来总结这个季度，就是这张。",
  trap: "'summarize' /ˈsʌməraɪz/ 三音节，重音在 SUM-",
  tip: "'one chart' 和 'this one' 呼应——极简的数据叙事",
  pattern: "If I had to summarize ___ in one ___, it would be ___",
  variants: [
    "This is the chart that tells the whole story.",
    "Everything you need to know is in this one visual."
  ]
};

const s289 = {
  id: 289,
  cat: "analytics",
  scene: "prediction-model",
  text: "Our predictive model shows a ninety-two percent probability of hitting target.",
  words: ["Our","pre·dic·tive","mod·el","shows","a","nine·ty-two","per·cent","prob·a·bil·i·ty","of","hit·ting","tar·get"],
  stress: [0,1,1,1,0,1,1,1,0,1,1],
  ipa: "aʊər prɪˈdɪktɪv ˈmɒdəl ʃoʊz ə ˈnaɪnti tuː pərˈsɛnt ˌprɒbəˈbɪlɪti əv ˈhɪtɪŋ ˈtɑːrɡɪt",
  meaning: "Report a high-confidence forecast from a predictive model",
  cn: "我们的预测模型显示有92%的概率达到目标。",
  trap: "'probability' /ˌprɒbəˈbɪlɪti/ 重音在 -BIL-，五音节",
  tip: "'ninety-two percent' 具体数字比 'high probability' 更有说服力",
  pattern: "Our predictive model shows a ___ percent probability of ___",
  variants: [
    "The model is highly confident we'll hit the target this quarter.",
    "Based on current trends, there's a ninety percent chance of success."
  ]
};

const s290 = {
  id: 290,
  cat: "analytics",
  scene: "prediction-model",
  text: "The model's accuracy improves as we feed it more real-world data.",
  words: ["The","mod·el's","ac·cu·ra·cy","im·proves","as","we","feed","it","more","real-world","da·ta"],
  stress: [0,1,1,1,0,0,1,0,1,1,1],
  ipa: "ðə ˈmɒdəlz ˈækjərəsi ɪmˈpruːvz æz wi fiːd ɪt mɔːr ˈriːlwɜːrld ˈdeɪtə",
  meaning: "Explain how a predictive model gets better over time",
  cn: "随着我们输入更多真实世界数据，模型精度在提升。",
  trap: "'accuracy' /ˈækjərəsi/ 重音在 AC-，四音节",
  tip: "'feed it' 用喂养隐喻——让非技术人员也能理解机器学习",
  pattern: "The model's accuracy improves as we ___",
  variants: [
    "More data means better predictions — it's a flywheel effect.",
    "Every data point we add makes the forecast more reliable."
  ]
};

const s291 = {
  id: 291,
  cat: "analytics",
  scene: "prediction-model",
  text: "I'd caution against over-relying on the model — it's a tool, not an oracle.",
  words: ["I'd","cau·tion","a·gainst","o·ver-re·ly·ing","on","the","mod·el","it's","a","tool","not","an","or·a·cle"],
  stress: [1,1,1,1,0,0,1,1,0,1,1,0,1],
  ipa: "aɪd ˈkɔːʃən əˈɡɛnst ˌoʊvərrɪˈlaɪɪŋ ɒn ðə ˈmɒdəl ɪts ə tuːl nɒt ən ˈɒrəkəl",
  meaning: "Temper expectations about predictive analytics",
  cn: "我会警惕过度依赖模型——它是工具，不是神谕。",
  trap: "'oracle' /ˈɒrəkəl/ 三音节，重音在 OR-——指预言者",
  tip: "'tool, not an oracle' 精辟对比——负责任的数据观",
  pattern: "I'd caution against ___ — it's a ___, not an ___",
  variants: [
    "Models inform decisions — they don't make them for us.",
    "Trust the data, but don't forget the human judgment layer."
  ]
};

const s292 = {
  id: 292,
  cat: "analytics",
  scene: "anomaly-alert",
  text: "We've detected a sudden spike in error rates across the platform.",
  words: ["We've","de·tect·ed","a","sud·den","spike","in","er·ror","rates","a·cross","the","plat·form"],
  stress: [1,1,0,1,1,0,1,1,1,0,1],
  ipa: "wiːv dɪˈtɛktɪd ə ˈsʌdən spaɪk ɪn ˈɛrər reɪts əˈkrɒs ðə ˈplætfɔːrm",
  meaning: "Alert the team to an anomalous metric change",
  cn: "我们检测到整个平台的错误率突然飙升。",
  trap: "'detected' /dɪˈtɛktɪd/ 重音在 -TECT-",
  tip: "'sudden spike' 两个重读词紧连——传达紧迫感",
  pattern: "We've detected a sudden ___ in ___ across ___",
  variants: [
    "Error rates just jumped by three X in the last hour.",
    "Something triggered a massive spike in five-hundred errors."
  ]
};

const s293 = {
  id: 293,
  cat: "analytics",
  scene: "anomaly-alert",
  text: "This doesn't match any known pattern — it could be a new type of issue.",
  words: ["This","doesn't","match","an·y","known","pat·tern","it","could","be","a","new","type","of","is·sue"],
  stress: [1,1,1,1,1,1,0,0,0,0,1,1,0,1],
  ipa: "ðɪs ˈdʌzənt mætʃ ˈɛni noʊn ˈpætərn ɪt kʊd bi ə njuː taɪp əv ˈɪʃuː",
  meaning: "Flag an unrecognized anomaly pattern",
  cn: "这不符合任何已知模式——可能是一种新类型的问题。",
  trap: "'pattern' /ˈpætərn/ 两音节，重音在 PAT-",
  tip: "'known pattern' 到 'new type' 的转换——从排除到假设",
  pattern: "This doesn't match any known ___ — it could be ___",
  variants: [
    "We've never seen this signature before — escalating now.",
    "The anomaly doesn't fit our existing alert categories."
  ]
};

const s294 = {
  id: 294,
  cat: "analytics",
  scene: "anomaly-alert",
  text: "False alarm — the spike was caused by a data pipeline delay, not real traffic.",
  words: ["False","a·larm","the","spike","was","caused","by","a","da·ta","pipe·line","de·lay","not","real","traf·fic"],
  stress: [1,1,0,1,0,1,0,0,1,1,1,1,1,1],
  ipa: "fɔːls əˈlɑːrm ðə spaɪk wɒz kɔːzd baɪ ə ˈdeɪtə ˈpaɪplaɪn dɪˈleɪ nɒt riːl ˈtræfɪk",
  meaning: "Resolve an anomaly alert with root cause explanation",
  cn: "虚惊一场——飙升是由数据管道延迟引起的，不是真实流量。",
  trap: "'pipeline' /ˈpaɪplaɪn/ 复合词，两音节都重读",
  tip: "'False alarm' 开头——让所有人松口气，再解释原因",
  pattern: "False alarm — the ___ was caused by ___, not ___",
  variants: [
    "Stand down — it was a backfill job, not a real spike.",
    "The alert was a false positive — root cause was delayed data ingestion."
  ]
};

const s295 = {
  id: 295,
  cat: "analytics",
  scene: "quarterly-review",
  text: "Let's look at how we performed against the OKRs we set last quarter.",
  words: ["Let's","look","at","how","we","per·formed","a·gainst","the","O·K·Rs","we","set","last","quar·ter"],
  stress: [1,1,0,0,0,1,1,0,1,0,1,1,1],
  ipa: "lɛts lʊk æt haʊ wi pərˈfɔːrmd əˈɡɛnst ðə ˌoʊkeɪˈɑːrz wi sɛt læst ˈkwɔːrtər",
  meaning: "Open a quarterly review with OKR assessment",
  cn: "让我们看看我们在上季度设定的OKR上表现如何。",
  trap: "'OKRs' /ˌoʊkeɪˈɑːrz/ — Objectives and Key Results",
  tip: "'performed against' 是标准的 OKR 评审语言",
  pattern: "Let's look at how we performed against ___",
  variants: [
    "Time for our quarterly OKR scoring — here's where we landed.",
    "Let me walk through our Q4 results against the targets we set."
  ]
};

const s296 = {
  id: 296,
  cat: "analytics",
  scene: "quarterly-review",
  text: "We hit three out of five key results — the two we missed were stretch goals.",
  words: ["We","hit","three","out","of","five","key","re·sults","the","two","we","missed","were","stretch","goals"],
  stress: [0,1,1,0,0,1,1,1,0,1,0,1,0,1,1],
  ipa: "wi hɪt θriː aʊt əv faɪv kiː rɪˈzʌlts ðə tuː wi mɪst wɜːr strɛtʃ ɡoʊlz",
  meaning: "Report OKR results with context for misses",
  cn: "五个关键结果我们达成了三个——没达成的两个是挑战目标。",
  trap: "'stretch goals' 指故意设定的高难度目标，不是失败",
  tip: "'three out of five' 数字先行——然后解释 miss 的原因",
  pattern: "We hit ___ out of ___ — the ones we missed were ___",
  variants: [
    "We nailed the core objectives — the misses were moonshots.",
    "Sixty percent completion on ambitious OKRs is actually a healthy score."
  ]
};

const s297 = {
  id: 297,
  cat: "analytics",
  scene: "quarterly-review",
  text: "Looking ahead, I'm proposing we sunset two metrics and introduce one new leading indicator.",
  words: ["Look·ing","a·head","I'm","pro·pos·ing","we","sun·set","two","met·rics","and","in·tro·duce","one","new","lead·ing","in·di·ca·tor"],
  stress: [1,1,1,1,0,1,1,1,0,1,1,1,1,1],
  ipa: "ˈlʊkɪŋ əˈhɛd aɪm prəˈpoʊzɪŋ wi ˈsʌnsɛt tuː ˈmɛtrɪks ænd ˌɪntrəˈdjuːs wʌn njuː ˈliːdɪŋ ˈɪndɪkeɪtər",
  meaning: "Evolve the metric framework based on learnings",
  cn: "展望未来，我建议我们淘汰两个指标并引入一个新的领先指标。",
  trap: "'sunset' 动词用法——在商业语境中意为逐步淘汰",
  tip: "'sunset' 和 'introduce' 一进一出——框架进化",
  pattern: "Looking ahead, I'm proposing we sunset ___ and introduce ___",
  variants: [
    "Our metrics need to evolve — let me propose a refresh.",
    "I want to replace lagging indicators with ones that predict outcomes."
  ]
};

const s298 = {
  id: 298,
  cat: "analytics",
  scene: "data-ethics",
  text: "Just because we can collect this data doesn't mean we should.",
  words: ["Just","be·cause","we","can","col·lect","this","da·ta","doesn't","mean","we","should"],
  stress: [1,1,0,1,1,0,1,1,1,0,1],
  ipa: "dʒʌst bɪˈkɒz wi kæn kəˈlɛkt ðɪs ˈdeɪtə ˈdʌzənt miːn wi ʃʊd",
  meaning: "Raise an ethical boundary around data collection",
  cn: "我们能收集这些数据不代表我们应该收集。",
  trap: "'collect' /kəˈlɛkt/ 重音在 -LECT",
  tip: "'can' vs 'should' 对比——数据伦理的核心张力",
  pattern: "Just because we can ___ doesn't mean we should",
  variants: [
    "Capability isn't permission — we need user consent.",
    "Technical ability doesn't equal ethical justification."
  ]
};

const s299 = {
  id: 299,
  cat: "analytics",
  scene: "data-ethics",
  text: "We need to anonymize this dataset before sharing it with external partners.",
  words: ["We","need","to","a·non·y·mize","this","da·ta·set","be·fore","shar·ing","it","with","ex·ter·nal","part·ners"],
  stress: [0,1,0,1,0,1,1,1,0,0,1,1],
  ipa: "wi niːd tə əˈnɒnɪmaɪz ðɪs ˈdeɪtəsɛt bɪˈfɔːr ˈʃɛrɪŋ ɪt wɪð ɪkˈstɜːrnəl ˈpɑːrtnərz",
  meaning: "Enforce data privacy requirements for external sharing",
  cn: "在与外部合作伙伴分享之前，我们需要对这个数据集进行匿名化处理。",
  trap: "'anonymize' /əˈnɒnɪmaɪz/ 重音在 -NON-，四音节",
  tip: "'before sharing' 时间状语前置——强调这是先决条件",
  pattern: "We need to anonymize ___ before sharing with ___",
  variants: [
    "No raw user data leaves this building — period.",
    "All personally identifiable information must be stripped before export."
  ]
};

const s300 = {
  id: 300,
  cat: "analytics",
  scene: "data-ethics",
  text: "Our users trust us with their data — that trust is non-negotiable.",
  words: ["Our","us·ers","trust","us","with","their","da·ta","that","trust","is","non-ne·go·ti·a·ble"],
  stress: [0,1,1,0,0,0,1,0,1,0,1],
  ipa: "aʊər ˈjuːzərz trʌst ʌs wɪð ðɛr ˈdeɪtə ðæt trʌst ɪz ˌnɒnnɪˈɡoʊʃiəbəl",
  meaning: "Establish data trust as a foundational principle",
  cn: "我们的用户把数据托付给我们——这份信任不可妥协。",
  trap: "'non-negotiable' /ˌnɒnnɪˈɡoʊʃiəbəl/ 重音在 -GO-，六音节",
  tip: "'trust' 出现两次——首尾呼应，Satya Nadella 式的价值宣言",
  pattern: "Our users trust us with ___ — that trust is ___",
  variants: [
    "Data privacy isn't a feature — it's a promise.",
    "We will never compromise user trust for a business metric."
  ]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY10 = [
  s271, s272, s273, s274, s275, s276, s277, s278, s279, s280,
  s281, s282, s283, s284, s285, s286, s287, s288, s289, s290,
  s291, s292, s293, s294, s295, s296, s297, s298, s299, s300
];

export const SCENES_DAY10 = {
  271: { icon: "📊", colors: ["#2563EB", "#1D4ED8"], title: "Pull Up Dashboard", sub: "Data review opener" },
  272: { icon: "📈", colors: ["#10B981", "#059669"], title: "Mixed Signals", sub: "Growth vs depth" },
  273: { icon: "🔍", colors: ["#7C3AED", "#6D28D9"], title: "Anomaly Spotted", sub: "Funnel investigation" },
  274: { icon: "🧪", colors: ["#059669", "#047857"], title: "Test Winner", sub: "A/B significance" },
  275: { icon: "📏", colors: ["#F59E0B", "#D97706"], title: "Need More Data", sub: "Sample size rigor" },
  276: { icon: "🍒", colors: ["#DC2626", "#B91C1C"], title: "No Cherry-Picking", sub: "Full dataset honesty" },
  277: { icon: "🔻", colors: ["#EF4444", "#DC2626"], title: "Funnel Drop", sub: "Conversion gap" },
  278: { icon: "⚡", colors: ["#6366F1", "#4F46E5"], title: "Reduce Friction", sub: "Downstream impact" },
  279: { icon: "🐛", colors: ["#EA580C", "#C2410C"], title: "Root Cause", sub: "Performance vs UX" },
  280: { icon: "🏅", colors: ["#8B5CF6", "#7C3AED"], title: "Record Retention", sub: "Cohort highlight" },
  281: { icon: "🔀", colors: ["#0891B2", "#0E7490"], title: "Channel Segment", sub: "Organic vs paid" },
  282: { icon: "📉", colors: ["#E11D48", "#BE123C"], title: "Churn Mystery", sub: "Unexpected attrition" },
  283: { icon: "⭐", colors: ["#1F2937", "#111827"], title: "North Star", sub: "The one metric" },
  284: { icon: "🤔", colors: ["#A855F7", "#9333EA"], title: "Right Metric?", sub: "Measurement challenge" },
  285: { icon: "🏷️", colors: ["#14B8A6", "#0D9488"], title: "Own A Metric", sub: "Team accountability" },
  286: { icon: "📖", colors: ["#7C3AED", "#5B21B6"], title: "Data Story", sub: "Narrative over numbers" },
  287: { icon: "💡", colors: ["#F97316", "#EA580C"], title: "Key Insight", sub: "Onboarding aha moment" },
  288: { icon: "📉", colors: ["#2563EB", "#1E40AF"], title: "One Chart", sub: "Simplify the message" },
  289: { icon: "🔮", colors: ["#6366F1", "#4F46E5"], title: "92% Confident", sub: "Model prediction" },
  290: { icon: "🔄", colors: ["#059669", "#047857"], title: "Feed the Model", sub: "Data flywheel" },
  291: { icon: "⚖️", colors: ["#D97706", "#B45309"], title: "Tool Not Oracle", sub: "Model limitations" },
  292: { icon: "🚨", colors: ["#DC2626", "#991B1B"], title: "Error Spike", sub: "Platform alert" },
  293: { icon: "❓", colors: ["#EF4444", "#B91C1C"], title: "Unknown Pattern", sub: "New issue type" },
  294: { icon: "✅", colors: ["#10B981", "#059669"], title: "False Alarm", sub: "Pipeline delay" },
  295: { icon: "📋", colors: ["#8B5CF6", "#6D28D9"], title: "OKR Review", sub: "Quarterly assessment" },
  296: { icon: "🎯", colors: ["#F59E0B", "#EAB308"], title: "Three of Five", sub: "Stretch goals context" },
  297: { icon: "🌅", colors: ["#EA580C", "#C2410C"], title: "Sunset Metrics", sub: "Framework evolution" },
  298: { icon: "🛡️", colors: ["#1F2937", "#111827"], title: "Can vs Should", sub: "Collection ethics" },
  299: { icon: "🔒", colors: ["#7C3AED", "#6D28D9"], title: "Anonymize First", sub: "Privacy requirement" },
  300: { icon: "💎", colors: ["#2563EB", "#1D4ED8"], title: "Trust Is Sacred", sub: "Data trust principle" }
};
