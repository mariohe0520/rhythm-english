// ─── Day 8 · Innovation & Startups ─────────────────────────────────
// 30 sentences (id 211-240)

const s211 = {
  id: 211,
  cat: "innovation",
  scene: "pitch-deck",
  text: "We're not just building a product — we're creating a new category.",
  words: ["We're","not","just","build·ing","a","prod·uct","we're","cre·at·ing","a","new","cat·e·go·ry"],
  stress: [1,1,0,1,0,1,1,1,0,1,1],
  ipa: "wɪr nɒt dʒʌst ˈbɪldɪŋ ə ˈprɒdʌkt wɪr kriˈeɪtɪŋ ə njuː ˈkætəɡɔːri",
  meaning: "Position your startup as a category creator, not a competitor",
  cn: "我们不只是在做产品——我们在开创一个新品类。",
  trap: "'category' 重音在 CAT-，四音节 /ˈkætəɡɔːri/，不要读成三音节",
  tip: "'not just' 轻带过，'creating a new category' 加重，制造使命感",
  pattern: "We're not just ___ing — we're ___ing ___",
  variants: [
    "We're not just improving the workflow — we're redefining it.",
    "We're not just solving a problem — we're building a platform."
  ]
};

const s212 = {
  id: 212,
  cat: "innovation",
  scene: "pitch-deck",
  text: "Our total addressable market is north of fifty billion dollars.",
  words: ["Our","to·tal","ad·dress·a·ble","mar·ket","is","north","of","fif·ty","bil·lion","dol·lars"],
  stress: [0,1,1,1,0,1,0,1,1,1],
  ipa: "aʊər ˈtoʊtəl əˈdrɛsəbəl ˈmɑːrkɪt ɪz nɔːrθ əv ˈfɪfti ˈbɪljən ˈdɒlərz",
  meaning: "Quantify the market opportunity in a pitch",
  cn: "我们的总可寻址市场超过五百亿美元。",
  trap: "'addressable' 重音在 -DRESS-，四音节 /əˈdrɛsəbəl/",
  tip: "'north of' 是 'more than' 的高级说法——投资人爱听",
  pattern: "Our total addressable market is north of ___",
  variants: [
    "The TAM here is conservatively over thirty billion.",
    "We're looking at a hundred-billion-dollar addressable market."
  ]
};

const s213 = {
  id: 213,
  cat: "innovation",
  scene: "pitch-deck",
  text: "We've achieved product-market fit with a net promoter score of seventy-two.",
  words: ["We've","a·chieved","prod·uct-mar·ket","fit","with","a","net","pro·mot·er","score","of","sev·en·ty-two"],
  stress: [1,1,1,1,0,0,1,1,1,0,1],
  ipa: "wiːv əˈtʃiːvd ˈprɒdʌkt ˈmɑːrkɪt fɪt wɪð ə nɛt prəˈmoʊtər skɔːr əv ˈsɛvənti tuː",
  meaning: "Prove traction with a concrete metric",
  cn: "我们已经实现了产品市场契合度，净推荐值为72。",
  trap: "'achieved' /əˈtʃiːvd/ 重音在 -CHIEVED；'promoter' 重音在 -MO-",
  tip: "'product-market fit' 说成一个整体复合词，'seventy-two' 干脆有力",
  pattern: "We've achieved ___ with a ___ of ___",
  variants: [
    "We've hit product-market fit with ninety-three percent retention.",
    "Our NPS is at seventy-two — well above the industry average."
  ]
};

const s214 = {
  id: 214,
  cat: "innovation",
  scene: "product-launch",
  text: "Today we're launching something that will fundamentally change how teams collaborate.",
  words: ["To·day","we're","launch·ing","some·thing","that","will","fun·da·men·tal·ly","change","how","teams","col·lab·o·rate"],
  stress: [1,0,1,1,0,0,1,1,0,1,1],
  ipa: "təˈdeɪ wɪr ˈlɔːntʃɪŋ ˈsʌmθɪŋ ðæt wɪl ˌfʌndəˈmɛntəli tʃeɪndʒ haʊ tiːmz kəˈlæbəreɪt",
  meaning: "Open a product launch with a bold transformation claim",
  cn: "今天我们要发布一个将从根本上改变团队协作方式的产品。",
  trap: "'fundamentally' 五音节，重音在 -MEN- /ˌfʌndəˈmɛntəli/",
  tip: "Jensen Huang 风格——先说 'Today' 定锚，再展开愿景",
  pattern: "Today we're launching something that will ___ how ___",
  variants: [
    "Today we're unveiling a breakthrough in enterprise AI.",
    "Today we're introducing the future of developer experience."
  ]
};

const s215 = {
  id: 215,
  cat: "innovation",
  scene: "product-launch",
  text: "This isn't incremental improvement — this is a step function change.",
  words: ["This","isn't","in·cre·men·tal","im·prove·ment","this","is","a","step","func·tion","change"],
  stress: [1,1,1,1,1,0,0,1,1,1],
  ipa: "ðɪs ˈɪzənt ˌɪnkrəˈmɛntəl ɪmˈpruːvmənt ðɪs ɪz ə stɛp ˈfʌŋkʃən tʃeɪndʒ",
  meaning: "Differentiate between small updates and paradigm shifts",
  cn: "这不是渐进式改进——这是阶跃式变革。",
  trap: "'incremental' 重音在 -MEN-，四音节 /ˌɪnkrəˈmɛntəl/",
  tip: "'step function change' 是硅谷高频词，三个词均匀重读",
  pattern: "This isn't ___ — this is ___",
  variants: [
    "This isn't a minor tweak — this is a generational leap.",
    "This isn't evolution — this is revolution."
  ]
};

const s216 = {
  id: 216,
  cat: "innovation",
  scene: "product-launch",
  text: "Let me show you a live demo — no slides, no scripts, just the real product.",
  words: ["Let","me","show","you","a","live","de·mo","no","slides","no","scripts","just","the","real","prod·uct"],
  stress: [0,0,1,0,0,1,1,1,1,1,1,1,0,1,1],
  ipa: "lɛt mi ʃoʊ juː ə laɪv ˈdɛmoʊ noʊ slaɪdz noʊ skrɪpts dʒʌst ðə riːl ˈprɒdʌkt",
  meaning: "Build credibility by showing the real product live",
  cn: "让我做个现场演示——没有幻灯片，没有脚本，就是真实的产品。",
  trap: "'demo' /ˈdɛmoʊ/ 重音在 DE-，两音节",
  tip: "'no slides, no scripts' 平行结构节奏感强——模仿 Jensen 的演示风格",
  pattern: "Let me show you ___ — no ___, no ___, just ___",
  variants: [
    "Let me show you this in action — completely unscripted.",
    "No keynote, no rehearsal — let me just show you what it does."
  ]
};

const s217 = {
  id: 217,
  cat: "innovation",
  scene: "pivot-decision",
  text: "The data is telling us to pivot, and we need to listen.",
  words: ["The","da·ta","is","tell·ing","us","to","piv·ot","and","we","need","to","lis·ten"],
  stress: [0,1,0,1,0,0,1,0,0,1,0,1],
  ipa: "ðə ˈdeɪtə ɪz ˈtɛlɪŋ ʌs tə ˈpɪvət ænd wi niːd tə ˈlɪsən",
  meaning: "Advocate for a strategic pivot based on evidence",
  cn: "数据在告诉我们要转型，我们必须听从。",
  trap: "'pivot' /ˈpɪvət/ 重音在 PIV-，两音节，不是 /paɪˈvɒt/",
  tip: "'data is telling us' 拟人化数据，增加说服力",
  pattern: "The data is telling us to ___, and we need to ___",
  variants: [
    "The metrics are clear — we need a different approach.",
    "Everything is pointing us toward a pivot, and we shouldn't ignore it."
  ]
};

const s218 = {
  id: 218,
  cat: "innovation",
  scene: "pivot-decision",
  text: "I know this feels like starting over, but we're keeping the core insight.",
  words: ["I","know","this","feels","like","start·ing","o·ver","but","we're","keep·ing","the","core","in·sight"],
  stress: [0,1,0,1,0,1,1,0,1,1,0,1,1],
  ipa: "aɪ noʊ ðɪs fiːlz laɪk ˈstɑːrtɪŋ ˈoʊvər bʌt wɪr ˈkiːpɪŋ ðə kɔːr ˈɪnsaɪt",
  meaning: "Reassure the team during a pivot that not everything is lost",
  cn: "我知道这感觉像是从头来过，但我们保留了核心洞察。",
  trap: "'insight' /ˈɪnsaɪt/ 重音在 IN-，不要和 'incite' 混淆",
  tip: "'but' 转折后语气变暖——'core insight' 给团队信心",
  pattern: "I know this feels like ___, but we're keeping ___",
  variants: [
    "We're not throwing everything away — we're refocusing.",
    "The pivot preserves our biggest learning — the distribution model."
  ]
};

const s219 = {
  id: 219,
  cat: "innovation",
  scene: "pivot-decision",
  text: "We're doubling down on what's working and cutting what isn't.",
  words: ["We're","doub·ling","down","on","what's","work·ing","and","cut·ting","what","isn't"],
  stress: [1,1,1,0,1,1,0,1,0,1],
  ipa: "wɪr ˈdʌblɪŋ daʊn ɒn wʌts ˈwɜːrkɪŋ ænd ˈkʌtɪŋ wʌt ˈɪzənt",
  meaning: "Frame a pivot as strategic focus rather than failure",
  cn: "我们要加倍投入有效的方向，砍掉无效的部分。",
  trap: "'doubling' /ˈdʌblɪŋ/ 两音节，别读成 /ˈduːblɪŋ/",
  tip: "'doubling down' vs 'cutting' 形成有力对比",
  pattern: "We're doubling down on ___ and cutting ___",
  variants: [
    "We're going all-in on the B2B motion and sunsetting consumer.",
    "We're focusing resources on what moves the needle."
  ]
};

const s220 = {
  id: 220,
  cat: "innovation",
  scene: "funding-round",
  text: "We're raising a Series B to accelerate our go-to-market strategy.",
  words: ["We're","rais·ing","a","Se·ries","B","to","ac·cel·er·ate","our","go-to-mar·ket","strat·e·gy"],
  stress: [1,1,0,1,1,0,1,0,1,1],
  ipa: "wɪr ˈreɪzɪŋ ə ˈsɪriːz biː tə ækˈsɛləreɪt aʊər ˌɡoʊtəˈmɑːrkɪt ˈstrætədʒi",
  meaning: "Announce a funding round with clear purpose",
  cn: "我们正在进行B轮融资，以加速我们的市场进入战略。",
  trap: "'accelerate' 重音在 -CEL-，四音节 /ækˈsɛləreɪt/",
  tip: "'Series B' 轻松说出，'go-to-market strategy' 是一个整体",
  pattern: "We're raising a ___ to accelerate ___",
  variants: [
    "This round will fuel our expansion into enterprise.",
    "We're closing a thirty-million-dollar Series B this quarter."
  ]
};

const s221 = {
  id: 221,
  cat: "innovation",
  scene: "funding-round",
  text: "Our burn rate gives us eighteen months of runway at current growth.",
  words: ["Our","burn","rate","gives","us","eight·een","months","of","run·way","at","cur·rent","growth"],
  stress: [0,1,1,1,0,1,1,0,1,0,1,1],
  ipa: "aʊər bɜːrn reɪt ɡɪvz ʌs ˌeɪˈtiːn mʌnθs əv ˈrʌnweɪ æt ˈkɜːrənt ɡroʊθ",
  meaning: "Show financial discipline with runway metrics",
  cn: "按目前的增速，我们的消耗率给我们18个月的跑道。",
  trap: "'runway' /ˈrʌnweɪ/ 在创投语境中指资金可维持时间",
  tip: "'burn rate' 和 'runway' 是投资人必听的关键词",
  pattern: "Our burn rate gives us ___ of runway at ___",
  variants: [
    "We have twenty-four months of runway with current unit economics.",
    "At this burn rate, we're capitalized through the end of next year."
  ]
};

const s222 = {
  id: 222,
  cat: "innovation",
  scene: "funding-round",
  text: "The round is oversubscribed — we're in a position to choose our partners.",
  words: ["The","round","is","o·ver·sub·scribed","we're","in","a","po·si·tion","to","choose","our","part·ners"],
  stress: [0,1,0,1,1,0,0,1,0,1,0,1],
  ipa: "ðə raʊnd ɪz ˌoʊvərsəbˈskraɪbd wɪr ɪn ə pəˈzɪʃən tə tʃuːz aʊər ˈpɑːrtnərz",
  meaning: "Signal strong investor demand for your company",
  cn: "这轮融资已超额认购——我们有权选择合作伙伴。",
  trap: "'oversubscribed' /ˌoʊvərsəbˈskraɪbd/ 重音在 -SCRIBED",
  tip: "'choose our partners' 传递主动权在创始人手中的自信",
  pattern: "The round is ___ — we're in a position to ___",
  variants: [
    "We've had more interest than we can accommodate.",
    "We're fortunate to be selecting from top-tier investors."
  ]
};

const s223 = {
  id: 223,
  cat: "innovation",
  scene: "team-building",
  text: "We hire missionaries, not mercenaries — people who believe in the mission.",
  words: ["We","hire","mis·sion·ar·ies","not","mer·ce·nar·ies","peo·ple","who","be·lieve","in","the","mis·sion"],
  stress: [0,1,1,1,1,1,0,1,0,0,1],
  ipa: "wi ˈhaɪər ˈmɪʃənɛriz nɒt ˈmɜːrsənɛriz ˈpiːpəl huː bɪˈliːv ɪn ðə ˈmɪʃən",
  meaning: "Define your hiring philosophy with a memorable contrast",
  cn: "我们招的是传教士，不是雇佣兵——要相信使命的人。",
  trap: "'missionaries' /ˈmɪʃənɛriz/ vs 'mercenaries' /ˈmɜːrsənɛriz/ — 发音相似但含义截然不同",
  tip: "这是 John Doerr 的经典名言，对比节奏要鲜明",
  pattern: "We hire ___, not ___ — people who ___",
  variants: [
    "Culture fit matters more than resume lines.",
    "We look for builders who want to change the world, not just collect a paycheck."
  ]
};

const s224 = {
  id: 224,
  cat: "innovation",
  scene: "team-building",
  text: "The founding team has a combined thirty years of deep domain expertise.",
  words: ["The","found·ing","team","has","a","com·bined","thir·ty","years","of","deep","do·main","ex·per·tise"],
  stress: [0,1,1,0,0,1,1,1,0,1,1,1],
  ipa: "ðə ˈfaʊndɪŋ tiːm hæz ə kəmˈbaɪnd ˈθɜːrti jɪrz əv diːp doʊˈmeɪn ˌɛkspɜːrˈtiːz",
  meaning: "Establish the team's credibility with experience metrics",
  cn: "创始团队拥有合计三十年的深厚领域专业知识。",
  trap: "'expertise' /ˌɛkspɜːrˈtiːz/ 重音在 -TISE，不是 EX-",
  tip: "'deep domain expertise' 三连击——投资人看重的 founder-market fit",
  pattern: "The founding team has ___ years of ___",
  variants: [
    "Our team built the leading product in this space at their previous company.",
    "Between the three co-founders, we've shipped to over a billion users."
  ]
};

const s225 = {
  id: 225,
  cat: "innovation",
  scene: "team-building",
  text: "We need someone who can thrive in ambiguity and move fast.",
  words: ["We","need","some·one","who","can","thrive","in","am·bi·gu·i·ty","and","move","fast"],
  stress: [0,1,1,0,0,1,0,1,0,1,1],
  ipa: "wi niːd ˈsʌmwʌn huː kæn θraɪv ɪn ˌæmbɪˈɡjuːɪti ænd muːv fæst",
  meaning: "Describe the startup mindset needed for early-stage hires",
  cn: "我们需要能在不确定性中茁壮成长并快速行动的人。",
  trap: "'ambiguity' /ˌæmbɪˈɡjuːɪti/ 五音节，重音在 -GU-",
  tip: "'thrive in ambiguity' 是创业公司招聘高频表达",
  pattern: "We need someone who can ___ and ___",
  variants: [
    "We're looking for someone comfortable with chaos.",
    "The ideal candidate thrives in unstructured environments."
  ]
};

const s226 = {
  id: 226,
  cat: "innovation",
  scene: "competitor-analysis",
  text: "Our moat is the proprietary dataset — no competitor can replicate it overnight.",
  words: ["Our","moat","is","the","pro·pri·e·tar·y","da·ta·set","no","com·pet·i·tor","can","rep·li·cate","it","o·ver·night"],
  stress: [0,1,0,0,1,1,1,1,0,1,0,1],
  ipa: "aʊər moʊt ɪz ðə prəˈpraɪətɛri ˈdeɪtəsɛt noʊ kəmˈpɛtɪtər kæn ˈrɛplɪkeɪt ɪt ˌoʊvərˈnaɪt",
  meaning: "Articulate your competitive moat to investors",
  cn: "我们的护城河是专有数据集——没有竞争对手能一夜间复制。",
  trap: "'proprietary' /prəˈpraɪətɛri/ 重音在 -PRI-，五音节",
  tip: "'moat' 是 Warren Buffett 创造的商业经典比喻",
  pattern: "Our moat is ___ — no competitor can ___",
  variants: [
    "Our data flywheel gives us a compounding advantage.",
    "What sets us apart is ten years of proprietary training data."
  ]
};

const s227 = {
  id: 227,
  cat: "innovation",
  scene: "competitor-analysis",
  text: "They're well-funded, but they're solving the wrong problem.",
  words: ["They're","well-fund·ed","but","they're","solv·ing","the","wrong","prob·lem"],
  stress: [0,1,0,0,1,0,1,1],
  ipa: "ðɛr ˌwɛlˈfʌndɪd bʌt ðɛr ˈsɒlvɪŋ ðə rɒŋ ˈprɒbləm",
  meaning: "Dismiss a competitor by questioning their strategy",
  cn: "他们资金充足，但他们在解决错误的问题。",
  trap: "'well-funded' 连字符复合词，'funded' /ˈfʌndɪd/ 重音在 FUND-",
  tip: "'wrong problem' 干脆有力——自信但不傲慢",
  pattern: "They're ___, but they're ___ing the wrong ___",
  variants: [
    "Their product is good, but their positioning is off.",
    "They have the budget, but we have the insight."
  ]
};

const s228 = {
  id: 228,
  cat: "innovation",
  scene: "competitor-analysis",
  text: "The competitive landscape has shifted — incumbents are too slow to adapt.",
  words: ["The","com·pet·i·tive","land·scape","has","shift·ed","in·cum·bents","are","too","slow","to","a·dapt"],
  stress: [0,1,1,0,1,1,0,1,1,0,1],
  ipa: "ðə kəmˈpɛtɪtɪv ˈlændskeɪp hæz ˈʃɪftɪd ɪnˈkʌmbənts ɑːr tuː sloʊ tə əˈdæpt",
  meaning: "Frame market disruption as an opportunity for startups",
  cn: "竞争格局已经改变——老牌企业适应太慢了。",
  trap: "'incumbents' /ɪnˈkʌmbənts/ 重音在 -CUM-，指在位者/既有企业",
  tip: "'too slow to adapt' 三个重读词锤击——突出创业公司的速度优势",
  pattern: "The competitive landscape has ___ — incumbents are ___",
  variants: [
    "Legacy players can't move fast enough to compete.",
    "The market is ripe for disruption — the incumbents are asleep."
  ]
};

const s229 = {
  id: 229,
  cat: "innovation",
  scene: "user-feedback",
  text: "Our users aren't just satisfied — they're actively evangelizing the product.",
  words: ["Our","us·ers","aren't","just","sat·is·fied","they're","ac·tive·ly","e·van·gel·iz·ing","the","prod·uct"],
  stress: [0,1,1,0,1,1,1,1,0,1],
  ipa: "aʊər ˈjuːzərz ɑːrənt dʒʌst ˈsætɪsfaɪd ðɛr ˈæktɪvli ɪˈvændʒəlaɪzɪŋ ðə ˈprɒdʌkt",
  meaning: "Show that users are so happy they promote your product",
  cn: "我们的用户不仅仅是满意——他们在主动宣传产品。",
  trap: "'evangelizing' /ɪˈvændʒəlaɪzɪŋ/ 重音在 -VAN-，五音节",
  tip: "从 'satisfied' 到 'evangelizing' 的递进让投资人兴奋",
  pattern: "Our users aren't just ___ — they're actively ___",
  variants: [
    "Users don't just use it — they recommend it to everyone.",
    "Word of mouth is our number one acquisition channel."
  ]
};

const s230 = {
  id: 230,
  cat: "innovation",
  scene: "user-feedback",
  text: "We shipped the beta last Tuesday and already have a thousand users on the waitlist.",
  words: ["We","shipped","the","be·ta","last","Tues·day","and","al·read·y","have","a","thou·sand","us·ers","on","the","wait·list"],
  stress: [0,1,0,1,1,1,0,1,0,0,1,1,0,0,1],
  ipa: "wi ʃɪpt ðə ˈbeɪtə læst ˈtjuːzdeɪ ænd ɔːlˈrɛdi hæv ə ˈθaʊzənd ˈjuːzərz ɒn ðə ˈweɪtlɪst",
  meaning: "Demonstrate traction with specific metrics and timeline",
  cn: "我们上周二发布了测试版，已经有一千个用户在等待名单上。",
  trap: "'beta' 美式 /ˈbeɪtə/，不要读成英式 /ˈbiːtə/",
  tip: "具体数字和日期增加可信度——'last Tuesday' 比 'recently' 有力",
  pattern: "We shipped ___ and already have ___",
  variants: [
    "We launched the private beta three weeks ago and have five hundred daily actives.",
    "Since launch, we've onboarded two thousand users organically."
  ]
};

const s231 = {
  id: 231,
  cat: "innovation",
  scene: "user-feedback",
  text: "The number one feature request is exactly what we're building next quarter.",
  words: ["The","num·ber","one","fea·ture","re·quest","is","ex·act·ly","what","we're","build·ing","next","quar·ter"],
  stress: [0,1,1,1,1,0,1,0,1,1,1,1],
  ipa: "ðə ˈnʌmbər wʌn ˈfiːtʃər rɪˈkwɛst ɪz ɪɡˈzæktli wʌt wɪr ˈbɪldɪŋ nɛkst ˈkwɔːrtər",
  meaning: "Show roadmap alignment with user demand",
  cn: "排名第一的功能请求正好是我们下个季度要做的。",
  trap: "'request' /rɪˈkwɛst/ 重音在 -QUEST；'quarter' /ˈkwɔːrtər/ 重音在 QUAR-",
  tip: "'exactly' 加重语气，传递 'we listen to users' 的信号",
  pattern: "The number one ___ is exactly what we're ___",
  variants: [
    "Our roadmap is directly informed by user feedback.",
    "What users are asking for is precisely what we're shipping next."
  ]
};

const s232 = {
  id: 232,
  cat: "innovation",
  scene: "scaling-ops",
  text: "We need to build systems that scale, not just processes that work today.",
  words: ["We","need","to","build","sys·tems","that","scale","not","just","proc·ess·es","that","work","to·day"],
  stress: [0,1,0,1,1,0,1,1,0,1,0,1,1],
  ipa: "wi niːd tə bɪld ˈsɪstəmz ðæt skeɪl nɒt dʒʌst ˈprɒsɛsɪz ðæt wɜːrk təˈdeɪ",
  meaning: "Prioritize scalable infrastructure over quick fixes",
  cn: "我们需要建立能扩展的系统，不只是今天能用的流程。",
  trap: "'processes' /ˈprɒsɛsɪz/ 美式三音节，重音在 PRO-",
  tip: "'scale' vs 'work today' 的对比——创始人的战略视野",
  pattern: "We need to build ___ that scale, not just ___ that work today",
  variants: [
    "We're investing in infrastructure now so we can move faster later.",
    "Every decision we make should be evaluated for scalability."
  ]
};

const s233 = {
  id: 233,
  cat: "innovation",
  scene: "scaling-ops",
  text: "We're automating everything that doesn't require human judgment.",
  words: ["We're","au·to·mat·ing","ev·ery·thing","that","doesn't","re·quire","hu·man","judg·ment"],
  stress: [1,1,1,0,1,1,1,1],
  ipa: "wɪr ˈɔːtəmeɪtɪŋ ˈɛvriθɪŋ ðæt ˈdʌzənt rɪˈkwaɪər ˈhjuːmən ˈdʒʌdʒmənt",
  meaning: "Articulate an automation-first operational philosophy",
  cn: "我们在自动化所有不需要人为判断的事情。",
  trap: "'automating' /ˈɔːtəmeɪtɪŋ/ 重音在 AU-，四音节",
  tip: "'human judgment' 是保留人类价值的关键词——Satya 风格",
  pattern: "We're automating everything that doesn't require ___",
  variants: [
    "If a machine can do it, a machine should do it.",
    "Our goal is to automate the repeatable and elevate the creative."
  ]
};

const s234 = {
  id: 234,
  cat: "innovation",
  scene: "scaling-ops",
  text: "Our infrastructure handles ten times current load without breaking a sweat.",
  words: ["Our","in·fra·struc·ture","han·dles","ten","times","cur·rent","load","with·out","break·ing","a","sweat"],
  stress: [0,1,1,1,1,1,1,1,1,0,1],
  ipa: "aʊər ˈɪnfrəstrʌktʃər ˈhændəlz tɛn taɪmz ˈkɜːrənt loʊd wɪðˈaʊt ˈbreɪkɪŋ ə swɛt",
  meaning: "Demonstrate technical resilience and scalability",
  cn: "我们的基础设施可以轻松处理当前十倍的负载。",
  trap: "'infrastructure' /ˈɪnfrəstrʌktʃər/ 重音在 IN-，四音节",
  tip: "'without breaking a sweat' 口语化表达显得自信不费力",
  pattern: "Our infrastructure handles ___ without ___",
  variants: [
    "We've stress-tested for a hundred X and everything holds.",
    "The system is built to handle Black Friday-level traffic every day."
  ]
};

const s235 = {
  id: 235,
  cat: "innovation",
  scene: "board-meeting",
  text: "Let me walk the board through our quarterly metrics and key milestones.",
  words: ["Let","me","walk","the","board","through","our","quar·ter·ly","met·rics","and","key","mile·stones"],
  stress: [0,0,1,0,1,0,0,1,1,0,1,1],
  ipa: "lɛt mi wɔːk ðə bɔːrd θruː aʊər ˈkwɔːrtərli ˈmɛtrɪks ænd kiː ˈmaɪlstoʊnz",
  meaning: "Open a board meeting with a structured update",
  cn: "让我向董事会汇报一下我们的季度指标和关键里程碑。",
  trap: "'milestones' /ˈmaɪlstoʊnz/ 重音在 MILE-，两音节",
  tip: "'walk the board through' 专业且从容——不是 'present to'",
  pattern: "Let me walk the board through ___",
  variants: [
    "I'll start with the numbers, then move to strategic priorities.",
    "Here's our quarterly update — metrics first, then milestones."
  ]
};

const s236 = {
  id: 236,
  cat: "innovation",
  scene: "board-meeting",
  text: "Revenue is up forty percent quarter over quarter, ahead of plan.",
  words: ["Rev·e·nue","is","up","for·ty","per·cent","quar·ter","o·ver","quar·ter","a·head","of","plan"],
  stress: [1,0,1,1,1,1,1,1,1,0,1],
  ipa: "ˈrɛvənjuː ɪz ʌp ˈfɔːrti pərˈsɛnt ˈkwɔːrtər ˈoʊvər ˈkwɔːrtər əˈhɛd əv plæn",
  meaning: "Report strong growth with precise metrics",
  cn: "收入环比增长40%，超出计划。",
  trap: "'revenue' /ˈrɛvənjuː/ 重音在 REV-，三音节",
  tip: "'quarter over quarter' 比 'QoQ' 在口头汇报中更专业",
  pattern: "Revenue is up ___ percent ___, ahead of plan",
  variants: [
    "We grew ARR by sixty percent year over year.",
    "Top line is tracking thirty percent above forecast."
  ]
};

const s237 = {
  id: 237,
  cat: "innovation",
  scene: "board-meeting",
  text: "The one area where we're behind is enterprise sales hiring.",
  words: ["The","one","ar·e·a","where","we're","be·hind","is","en·ter·prise","sales","hir·ing"],
  stress: [0,1,1,0,1,1,0,1,1,1],
  ipa: "ðə wʌn ˈɛriə wɛr wɪr bɪˈhaɪnd ɪz ˈɛntərpraɪz seɪlz ˈhaɪərɪŋ",
  meaning: "Proactively address a weakness before the board asks",
  cn: "我们落后的一个领域是企业销售招聘。",
  trap: "'enterprise' /ˈɛntərpraɪz/ 重音在 EN-，三音节",
  tip: "主动暴露弱点比被问到更显领导力——Satya Nadella 风格",
  pattern: "The one area where we're behind is ___",
  variants: [
    "Where we need to improve is our sales pipeline.",
    "I'll be transparent — hiring has been our biggest bottleneck."
  ]
};

const s238 = {
  id: 238,
  cat: "innovation",
  scene: "exit-strategy",
  text: "We're building this company to be a generational business, not a quick flip.",
  words: ["We're","build·ing","this","com·pa·ny","to","be","a","gen·er·a·tion·al","busi·ness","not","a","quick","flip"],
  stress: [1,1,0,1,0,0,0,1,1,1,0,1,1],
  ipa: "wɪr ˈbɪldɪŋ ðɪs ˈkʌmpəni tə bi ə ˌdʒɛnəˈreɪʃənəl ˈbɪznəs nɒt ə kwɪk flɪp",
  meaning: "Signal long-term commitment to stakeholders",
  cn: "我们在打造一家世代级企业，不是为了快速转手。",
  trap: "'generational' /ˌdʒɛnəˈreɪʃənəl/ 重音在 -RA-，五音节",
  tip: "'generational business' vs 'quick flip' 对比强烈——传递创始人决心",
  pattern: "We're building this to be ___, not ___",
  variants: [
    "This isn't a build-to-sell play — we're here for the long haul.",
    "Our vision extends well beyond the next funding cycle."
  ]
};

const s239 = {
  id: 239,
  cat: "innovation",
  scene: "exit-strategy",
  text: "At our current trajectory, we'll be IPO-ready within twenty-four months.",
  words: ["At","our","cur·rent","tra·jec·to·ry","we'll","be","I·P·O-read·y","with·in","twen·ty-four","months"],
  stress: [0,0,1,1,1,0,1,1,1,1],
  ipa: "æt aʊər ˈkɜːrənt trəˈdʒɛktəri wiːl bi ˌaɪpiːˈoʊ ˈrɛdi wɪðˈɪn ˈtwɛnti fɔːr mʌnθs",
  meaning: "Project a credible timeline to a major liquidity event",
  cn: "按目前的发展轨迹，我们将在24个月内做好IPO准备。",
  trap: "'trajectory' /trəˈdʒɛktəri/ 重音在 -JEC-，四音节",
  tip: "'IPO-ready' 作为复合形容词——不要拆开成 'ready for an IPO'",
  pattern: "At our current trajectory, we'll be ___-ready within ___",
  variants: [
    "We're on track for a public offering in two years.",
    "The metrics suggest we could be public-market ready by 2027."
  ]
};

const s240 = {
  id: 240,
  cat: "innovation",
  scene: "exit-strategy",
  text: "Multiple strategic acquirers have already expressed interest — but we're focused on building.",
  words: ["Mul·ti·ple","stra·te·gic","ac·quir·ers","have","al·read·y","ex·pressed","in·ter·est","but","we're","fo·cused","on","build·ing"],
  stress: [1,1,1,0,1,1,1,0,1,1,0,1],
  ipa: "ˈmʌltɪpəl strəˈtiːdʒɪk əˈkwaɪərərz hæv ɔːlˈrɛdi ɪkˈsprɛst ˈɪntrəst bʌt wɪr ˈfoʊkəst ɒn ˈbɪldɪŋ",
  meaning: "Signal acquisition interest while staying focused",
  cn: "多个战略收购方已经表达了兴趣——但我们专注于构建。",
  trap: "'acquirers' /əˈkwaɪərərz/ 重音在 -QUIR-，三音节",
  tip: "'but we're focused on building' 转折后语气坚定——创始人的格局",
  pattern: "Multiple ___ have expressed interest — but we're focused on ___",
  variants: [
    "We've had inbound interest, but our priority is growth.",
    "Acquisition talks have come up, but the team is heads-down on execution."
  ]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY8 = [
  s211, s212, s213, s214, s215, s216, s217, s218, s219, s220,
  s221, s222, s223, s224, s225, s226, s227, s228, s229, s230,
  s231, s232, s233, s234, s235, s236, s237, s238, s239, s240
];

export const SCENES_DAY8 = {
  211: { icon: "🚀", colors: ["#6366F1", "#4F46E5"], title: "Category Creator", sub: "Bold vision pitch" },
  212: { icon: "📊", colors: ["#2563EB", "#1D4ED8"], title: "Market Size", sub: "TAM quantification" },
  213: { icon: "🎯", colors: ["#10B981", "#059669"], title: "PMF Proof", sub: "Product-market fit" },
  214: { icon: "🎬", colors: ["#7C3AED", "#6D28D9"], title: "Launch Day", sub: "Product unveiling" },
  215: { icon: "⚡", colors: ["#F59E0B", "#D97706"], title: "Step Function", sub: "Paradigm shift" },
  216: { icon: "🖥️", colors: ["#059669", "#047857"], title: "Live Demo", sub: "Unscripted proof" },
  217: { icon: "🔄", colors: ["#DC2626", "#B91C1C"], title: "Pivot Signal", sub: "Data-driven change" },
  218: { icon: "💡", colors: ["#8B5CF6", "#7C3AED"], title: "Core Insight", sub: "Preserving the kernel" },
  219: { icon: "✂️", colors: ["#EA580C", "#C2410C"], title: "Double Down", sub: "Focus and cut" },
  220: { icon: "💰", colors: ["#2563EB", "#1E40AF"], title: "Series B", sub: "Funding purpose" },
  221: { icon: "🛫", colors: ["#0891B2", "#0E7490"], title: "Runway Math", sub: "Burn rate clarity" },
  222: { icon: "🏆", colors: ["#7C3AED", "#5B21B6"], title: "Oversubscribed", sub: "Investor demand" },
  223: { icon: "🙌", colors: ["#E11D48", "#BE123C"], title: "Missionaries", sub: "Hiring philosophy" },
  224: { icon: "👥", colors: ["#1F2937", "#111827"], title: "Domain Depth", sub: "Team credibility" },
  225: { icon: "🌊", colors: ["#6366F1", "#4F46E5"], title: "Thrive in Chaos", sub: "Startup mindset" },
  226: { icon: "🏰", colors: ["#059669", "#047857"], title: "The Moat", sub: "Competitive defense" },
  227: { icon: "🎯", colors: ["#F97316", "#EA580C"], title: "Wrong Problem", sub: "Competitor dismissal" },
  228: { icon: "🌍", colors: ["#DC2626", "#991B1B"], title: "Landscape Shift", sub: "Market disruption" },
  229: { icon: "📣", colors: ["#10B981", "#059669"], title: "User Love", sub: "Organic evangelism" },
  230: { icon: "📈", colors: ["#8B5CF6", "#6D28D9"], title: "Beta Traction", sub: "Early metrics" },
  231: { icon: "🗺️", colors: ["#F59E0B", "#EAB308"], title: "Roadmap Fit", sub: "User-driven planning" },
  232: { icon: "⚙️", colors: ["#2563EB", "#1D4ED8"], title: "Build to Scale", sub: "Systems thinking" },
  233: { icon: "🤖", colors: ["#7C3AED", "#6D28D9"], title: "Automate It", sub: "Automation-first ops" },
  234: { icon: "💪", colors: ["#0891B2", "#0E7490"], title: "10X Ready", sub: "Infrastructure resilience" },
  235: { icon: "📋", colors: ["#6366F1", "#4F46E5"], title: "Board Update", sub: "Structured reporting" },
  236: { icon: "📊", colors: ["#10B981", "#059669"], title: "Growth Metrics", sub: "Revenue reporting" },
  237: { icon: "⚠️", colors: ["#EF4444", "#DC2626"], title: "Honest Gap", sub: "Proactive transparency" },
  238: { icon: "🏛️", colors: ["#1F2937", "#111827"], title: "Generational", sub: "Long-term vision" },
  239: { icon: "🔔", colors: ["#A855F7", "#9333EA"], title: "IPO Path", sub: "Exit timeline" },
  240: { icon: "🤝", colors: ["#059669", "#047857"], title: "Stay Focused", sub: "Building over selling" }
};
