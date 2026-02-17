// ─── Day 6 · Networking & Small Talk ──────────────────────────────
// 30 sentences (id 151-180)

const s151 = {
  id: 151,
  cat: "networking",
  scene: "introduction",
  text: "Hi, I'm Alex. I work in product management at a fintech startup.",
  words: ["Hi","I'm","A·lex","I","work","in","prod·uct","man·age·ment","at","a","fin·tech","start·up"],
  stress: [1,1,1,0,1,0,1,1,0,0,1,1],
  ipa: "haɪ aɪm ˈælɪks aɪ wɜːrk ɪn ˈprɒdʌkt ˈmænɪdʒmənt æt ə ˈfɪntɛk ˈstɑːrtʌp",
  meaning: "Introduce yourself at a professional event",
  cn: "嗨，我是Alex。我在一家金融科技创业公司做产品管理。",
  trap: "'management' /ˈmænɪdʒmənt/ 重音在 MAN-，三音节",
  tip: "'Hi' 热情自然，'product management' 和 'fintech startup' 清晰定位自己",
  pattern: "Hi, I'm ___. I work in ___ at ___",
  variants: [
    "Hi, I'm Sarah. I'm a design lead at a healthtech company.",
    "Hey, I'm David. I'm in engineering at a SaaS startup."
  ]
};

const s152 = {
  id: 152,
  cat: "networking",
  scene: "introduction",
  text: "Nice to meet you! What brings you to this event?",
  words: ["Nice","to","meet","you","What","brings","you","to","this","e·vent"],
  stress: [1,0,1,1,1,1,0,0,0,1],
  ipa: "naɪs tə miːt juː wɒt brɪŋz juː tə ðɪs ɪˈvɛnt",
  meaning: "Start a conversation after introductions",
  cn: "很高兴认识你！你是什么契机来参加这个活动的？",
  trap: "'event' /ɪˈvɛnt/ 重音在 -VENT，两音节",
  tip: "'Nice to meet you' 连贯自然，问句上扬表示真兴趣",
  pattern: "Nice to meet you! What brings you to ___?",
  variants: [
    "Great to meet you! What brings you here today?",
    "Pleasure to meet you! What drew you to this conference?"
  ]
};

const s153 = {
  id: 153,
  cat: "networking",
  scene: "introduction",
  text: "I've been in the industry for about five years now.",
  words: ["I've","been","in","the","in·dus·try","for","a·bout","five","years","now"],
  stress: [1,1,0,0,1,0,1,1,1,1],
  ipa: "aɪv biːn ɪn ðə ˈɪndəstri fɔːr əˈbaʊt faɪv jɪrz naʊ",
  meaning: "Share your experience level naturally",
  cn: "我在这个行业大约五年了。",
  trap: "'industry' /ˈɪndəstri/ 重音在 IN-，三音节",
  tip: "'about five years' 不要太精确，'now' 落在结尾自然停顿",
  pattern: "I've been in ___ for about ___ now",
  variants: [
    "I've been doing this for about three years now.",
    "I've been in tech for roughly a decade."
  ]
};

const s154 = {
  id: 154,
  cat: "networking",
  scene: "industry-chat",
  text: "What's your take on the latest AI regulations?",
  words: ["What's","your","take","on","the","lat·est","A·I","reg·u·la·tions"],
  stress: [1,0,1,0,0,1,1,1],
  ipa: "wɒts jɔːr teɪk ɒn ðə ˈleɪtɪst ˌeɪˈaɪ ˌrɛɡjʊˈleɪʃənz",
  meaning: "Start an industry discussion",
  cn: "你对最新的AI法规怎么看？",
  trap: "'regulations' /ˌrɛɡjʊˈleɪʃənz/ 重音在 -LA-，五音节",
  tip: "'your take' 口语化邀请对方观点，比 'what do you think' 更自然",
  pattern: "What's your take on ___?",
  variants: [
    "What's your take on the shift to remote work?",
    "What's your view on the current market conditions?"
  ]
};

const s155 = {
  id: 155,
  cat: "networking",
  scene: "industry-chat",
  text: "We're seeing a huge shift toward developer experience tools.",
  words: ["We're","see·ing","a","huge","shift","to·ward","de·vel·op·er","ex·pe·ri·ence","tools"],
  stress: [1,1,0,1,1,1,1,1,1],
  ipa: "wɪr ˈsiːɪŋ ə hjuːdʒ ʃɪft təˈwɔːrd dɪˈvɛləpər ɪkˈspɪriəns tuːlz",
  meaning: "Share an industry trend observation",
  cn: "我们正在看到一个向开发者体验工具的巨大转变。",
  trap: "'experience' /ɪkˈspɪriəns/ 重音在 -PE-，四音节",
  tip: "'huge shift' 有力，'developer experience' 是趋势关键词",
  pattern: "We're seeing a huge shift toward ___",
  variants: [
    "We're seeing a big move toward platform engineering.",
    "We're noticing a major trend toward AI-assisted coding."
  ]
};

const s156 = {
  id: 156,
  cat: "networking",
  scene: "industry-chat",
  text: "That's a really interesting perspective. I hadn't thought of it that way.",
  words: ["That's","a","real·ly","in·ter·est·ing","per·spec·tive","I","hadn't","thought","of","it","that","way"],
  stress: [1,0,1,1,1,0,1,1,0,0,0,1],
  ipa: "ðæts ə ˈrɪəli ˈɪntrɪstɪŋ pərˈspɛktɪv aɪ ˈhædənt θɔːt əv ɪt ðæt weɪ",
  meaning: "Validate someone's viewpoint genuinely",
  cn: "这是个很有意思的视角。我之前没有那样想过。",
  trap: "'perspective' /pərˈspɛktɪv/ 重音在 -SPEC-，三音节",
  tip: "'really interesting' 真诚赞赏，'that way' 承认新角度",
  pattern: "That's a really interesting ___. I hadn't thought of it that way.",
  variants: [
    "That's a great point. I never looked at it from that angle.",
    "That's fascinating. I hadn't considered that perspective."
  ]
};

const s157 = {
  id: 157,
  cat: "networking",
  scene: "follow-up",
  text: "It was great chatting with you. Let's stay in touch.",
  words: ["It","was","great","chat·ting","with","you","Let's","stay","in","touch"],
  stress: [0,0,1,1,0,1,1,1,0,1],
  ipa: "ɪt wɒz ɡreɪt ˈtʃætɪŋ wɪð juː lɛts steɪ ɪn tʌtʃ",
  meaning: "Wrap up a conversation with intent to reconnect",
  cn: "跟你聊天很愉快。我们保持联系。",
  trap: "'chatting' /ˈtʃætɪŋ/ 两音节，/æ/ 不是 /ɑː/",
  tip: "'great chatting' 热情结尾，'stay in touch' 连读自然",
  pattern: "It was great chatting with you. Let's ___",
  variants: [
    "It was really nice talking with you. Let's keep in touch.",
    "I really enjoyed this conversation. Let's connect again soon."
  ]
};

const s158 = {
  id: 158,
  cat: "networking",
  scene: "follow-up",
  text: "I'll send you that article I mentioned. What's your email?",
  words: ["I'll","send","you","that","ar·ti·cle","I","men·tioned","What's","your","e·mail"],
  stress: [1,1,0,0,1,0,1,1,0,1],
  ipa: "aɪl sɛnd juː ðæt ˈɑːrtɪkəl aɪ ˈmɛnʃənd wɒts jɔːr ˈiːmeɪl",
  meaning: "Create a reason to follow up after meeting",
  cn: "我把之前提到的那篇文章发给你。你的邮箱是什么？",
  trap: "'article' /ˈɑːrtɪkəl/ 重音在 AR-，三音节",
  tip: "'I mentioned' 回顾对话制造连接感，问邮箱自然不突兀",
  pattern: "I'll send you that ___ I mentioned. What's your ___?",
  variants: [
    "I'll share that report I mentioned. What's your email?",
    "I'll forward you that link. What's the best way to reach you?"
  ]
};

const s159 = {
  id: 159,
  cat: "networking",
  scene: "follow-up",
  text: "Following up on our conversation — here's the resource I promised.",
  words: ["Fol·low·ing","up","on","our","con·ver·sa·tion","here's","the","re·source","I","prom·ised"],
  stress: [1,1,0,0,1,1,0,1,0,1],
  ipa: "ˈfɒloʊɪŋ ʌp ɒn aʊər ˌkɒnvərˈseɪʃən hɪrz ðə rɪˈsɔːrs aɪ ˈprɒmɪst",
  meaning: "Deliver on a follow-up promise",
  cn: "跟进我们的对话——这是我承诺的资源。",
  trap: "'conversation' /ˌkɒnvərˈseɪʃən/ 重音在 -SA-，四音节",
  tip: "'Following up' 标准邮件开头，'promised' 表信守承诺",
  pattern: "Following up on our conversation — here's ___",
  variants: [
    "Following up from yesterday — here's the deck I mentioned.",
    "As promised, here's the link we discussed at the event."
  ]
};

const s160 = {
  id: 160,
  cat: "networking",
  scene: "elevator-pitch",
  text: "We help companies reduce onboarding time by sixty percent.",
  words: ["We","help","com·pa·nies","re·duce","on·board·ing","time","by","six·ty","per·cent"],
  stress: [0,1,1,1,1,1,0,1,1],
  ipa: "wi hɛlp ˈkʌmpəniz rɪˈdjuːs ˈɒnbɔːrdɪŋ taɪm baɪ ˈsɪksti pərˈsɛnt",
  meaning: "Deliver a concise value proposition",
  cn: "我们帮助公司将入职时间缩短百分之六十。",
  trap: "'onboarding' /ˈɒnbɔːrdɪŋ/ 重音在 ON-，三音节",
  tip: "'reduce' 和 'sixty percent' 是核心数据点，放慢强调",
  pattern: "We help ___ reduce ___ by ___",
  variants: [
    "We help startups cut customer churn by forty percent.",
    "We help teams ship features three times faster."
  ]
};

const s161 = {
  id: 161,
  cat: "networking",
  scene: "elevator-pitch",
  text: "Think of us as Slack meets project management, but for agencies.",
  words: ["Think","of","us","as","Slack","meets","pro·ject","man·age·ment","but","for","a·gen·cies"],
  stress: [1,0,0,0,1,1,1,1,1,0,1],
  ipa: "θɪŋk əv ʌs æz slæk miːts ˈprɒdʒɛkt ˈmænɪdʒmənt bʌt fɔːr ˈeɪdʒənsiz",
  meaning: "Use an analogy to explain your product quickly",
  cn: "可以把我们想象成Slack与项目管理的结合，但专门面向代理商。",
  trap: "'agencies' /ˈeɪdʒənsiz/ 重音在 A-，三音节",
  tip: "'Think of us as' 框架句式，类比让人瞬间理解",
  pattern: "Think of us as ___ meets ___, but for ___",
  variants: [
    "Think of us as Notion meets CRM, but for freelancers.",
    "Think of us as GitHub meets design tools, but for non-technical teams."
  ]
};

const s162 = {
  id: 162,
  cat: "networking",
  scene: "elevator-pitch",
  text: "We just closed our Series A and we're scaling the team.",
  words: ["We","just","closed","our","Se·ries","A","and","we're","scal·ing","the","team"],
  stress: [0,1,1,0,1,1,0,1,1,0,1],
  ipa: "wi dʒʌst kloʊzd aʊər ˈsɪriːz eɪ ænd wɪr ˈskeɪlɪŋ ðə tiːm",
  meaning: "Share company momentum in a pitch",
  cn: "我们刚完成A轮融资，正在扩大团队。",
  trap: "'Series' /ˈsɪriːz/ 两音节，注意 /ɪː/ 长元音",
  tip: "'just closed' 传递势头，'scaling' 暗示增长和机会",
  pattern: "We just closed our ___ and we're ___",
  variants: [
    "We just raised our seed round and we're hiring aggressively.",
    "We just hit profitability and we're expanding internationally."
  ]
};

const s163 = {
  id: 163,
  cat: "networking",
  scene: "event-mingling",
  text: "Have you been to this conference before? Any sessions you'd recommend?",
  words: ["Have","you","been","to","this","con·fer·ence","be·fore","An·y","ses·sions","you'd","rec·om·mend"],
  stress: [1,0,1,0,0,1,1,1,1,0,1],
  ipa: "hæv juː biːn tə ðɪs ˈkɒnfərəns bɪˈfɔːr ˈɛni ˈsɛʃənz juːd ˌrɛkəˈmɛnd",
  meaning: "Start a conversation at a conference",
  cn: "你之前来过这个会议吗？有推荐的环节吗？",
  trap: "'recommend' /ˌrɛkəˈmɛnd/ 重音在 -MEND，三音节",
  tip: "两个问句连用，给对方选择回答哪个，减少压力",
  pattern: "Have you been to ___ before? Any ___ you'd recommend?",
  variants: [
    "Is this your first time here? Any talks you're excited about?",
    "Have you attended this before? Which sessions are worth seeing?"
  ]
};

const s164 = {
  id: 164,
  cat: "networking",
  scene: "event-mingling",
  text: "The keynote was fantastic. What did you think of it?",
  words: ["The","key·note","was","fan·tas·tic","What","did","you","think","of","it"],
  stress: [0,1,0,1,1,0,0,1,0,0],
  ipa: "ðə ˈkiːnoʊt wɒz fænˈtæstɪk wɒt dɪd juː θɪŋk əv ɪt",
  meaning: "Use a shared experience to start a conversation",
  cn: "主题演讲太精彩了。你觉得怎么样？",
  trap: "'fantastic' /fænˈtæstɪk/ 重音在 -TAS-，三音节",
  tip: "'fantastic' 热情分享，问句邀请对方也表达看法",
  pattern: "The ___ was fantastic. What did you think of it?",
  variants: [
    "The panel was incredible. What was your take on it?",
    "The workshop was excellent. Did you enjoy it too?"
  ]
};

const s165 = {
  id: 165,
  cat: "networking",
  scene: "event-mingling",
  text: "Mind if I join you? I don't know many people here yet.",
  words: ["Mind","if","I","join","you","I","don't","know","man·y","peo·ple","here","yet"],
  stress: [1,0,0,1,1,0,1,1,1,1,1,1],
  ipa: "maɪnd ɪf aɪ dʒɔɪn juː aɪ doʊnt noʊ ˈmɛni ˈpiːpəl hɪr jɛt",
  meaning: "Approach someone at an event with friendly honesty",
  cn: "介意我加入吗？我在这里还不太认识人。",
  trap: "'people' /ˈpiːpəl/ 两音节，/iː/ 长元音",
  tip: "'Mind if I' 礼貌请求，坦诚 'don't know many people' 反而拉近距离",
  pattern: "Mind if I join you? I don't know many ___ here yet.",
  variants: [
    "Do you mind if I sit here? I just arrived and don't know anyone.",
    "Mind if I tag along? I'm new to this conference."
  ]
};

const s166 = {
  id: 166,
  cat: "networking",
  scene: "linkedin-connect",
  text: "I'd love to connect on LinkedIn. Can I add you?",
  words: ["I'd","love","to","con·nect","on","Linked·In","Can","I","add","you"],
  stress: [1,1,0,1,0,1,1,0,1,1],
  ipa: "aɪd lʌv tə kəˈnɛkt ɒn ˈlɪŋktɪn kæn aɪ æd juː",
  meaning: "Ask to connect on LinkedIn naturally",
  cn: "我很想在LinkedIn上加你。可以加你吗？",
  trap: "'LinkedIn' /ˈlɪŋktɪn/ 两音节，注意 /ŋk/ 连接",
  tip: "'I'd love to' 比 'Can I' 更热情，先表达意愿再请求",
  pattern: "I'd love to connect on ___. Can I add you?",
  variants: [
    "Let's connect on LinkedIn. I'll send you a request.",
    "I'd love to stay connected. Are you on LinkedIn?"
  ]
};

const s167 = {
  id: 167,
  cat: "networking",
  scene: "linkedin-connect",
  text: "I'll send you a personalized request so you know it's me.",
  words: ["I'll","send","you","a","per·son·al·ized","re·quest","so","you","know","it's","me"],
  stress: [1,1,0,0,1,1,0,0,1,0,1],
  ipa: "aɪl sɛnd juː ə ˈpɜːrsənəlaɪzd rɪˈkwɛst soʊ juː noʊ ɪts miː",
  meaning: "Promise a personalized connection request",
  cn: "我会给你发一个个性化的连接请求，这样你知道是我。",
  trap: "'personalized' /ˈpɜːrsənəlaɪzd/ 重音在 PER-，四音节",
  tip: "'personalized' 体现用心，'so you know' 为对方着想",
  pattern: "I'll send you a ___ request so you know ___",
  variants: [
    "I'll include a note so you can recognize me.",
    "I'll mention our chat in the connection request."
  ]
};

const s168 = {
  id: 168,
  cat: "networking",
  scene: "linkedin-connect",
  text: "I really enjoyed your post on remote team culture.",
  words: ["I","real·ly","en·joyed","your","post","on","re·mote","team","cul·ture"],
  stress: [0,1,1,0,1,0,1,1,1],
  ipa: "aɪ ˈrɪəli ɪnˈdʒɔɪd jɔːr poʊst ɒn rɪˈmoʊt tiːm ˈkʌltʃər",
  meaning: "Reference someone's content to build rapport",
  cn: "我很喜欢你关于远程团队文化的帖子。",
  trap: "'culture' /ˈkʌltʃər/ 两音节，注意 /tʃ/ 音",
  tip: "'really enjoyed' 真诚赞美，具体提及内容显示你真的看了",
  pattern: "I really enjoyed your ___ on ___",
  variants: [
    "I really liked your article on engineering management.",
    "I really enjoyed your talk about inclusive design."
  ]
};

const s169 = {
  id: 169,
  cat: "networking",
  scene: "coffee-chat",
  text: "Would you be open to grabbing coffee sometime next week?",
  words: ["Would","you","be","o·pen","to","grab·bing","cof·fee","some·time","next","week"],
  stress: [1,0,0,1,0,1,1,1,1,1],
  ipa: "wʊd juː bi ˈoʊpən tə ˈɡræbɪŋ ˈkɒfi ˈsʌmtaɪm nɛkst wiːk",
  meaning: "Invite someone for a casual coffee meeting",
  cn: "你下周有空一起喝杯咖啡吗？",
  trap: "'coffee' /ˈkɒfi/ 两音节，重音在 COF-",
  tip: "'Would you be open to' 比 'Do you want to' 更给对方退路",
  pattern: "Would you be open to grabbing ___ sometime ___?",
  variants: [
    "Would you be up for a virtual coffee sometime this week?",
    "Would you be open to a quick chat over coffee?"
  ]
};

const s170 = {
  id: 170,
  cat: "networking",
  scene: "coffee-chat",
  text: "I'd love to pick your brain about your career transition.",
  words: ["I'd","love","to","pick","your","brain","a·bout","your","ca·reer","tran·si·tion"],
  stress: [1,1,0,1,0,1,1,0,1,1],
  ipa: "aɪd lʌv tə pɪk jɔːr breɪn əˈbaʊt jɔːr kəˈrɪr trænˈzɪʃən",
  meaning: "Express interest in learning from someone's experience",
  cn: "我很想请教一下你的职业转型经验。",
  trap: "'transition' /trænˈzɪʃən/ 重音在 -ZI-，三音节",
  tip: "'pick your brain' 是地道表达，意思是向你请教",
  pattern: "I'd love to pick your brain about ___",
  variants: [
    "I'd love to hear more about how you made the move to management.",
    "I'd love to pick your brain about building a personal brand."
  ]
};

const s171 = {
  id: 171,
  cat: "networking",
  scene: "coffee-chat",
  text: "How did you make the jump from engineering to product?",
  words: ["How","did","you","make","the","jump","from","en·gi·neer·ing","to","prod·uct"],
  stress: [1,0,0,1,0,1,0,1,0,1],
  ipa: "haʊ dɪd juː meɪk ðə dʒʌmp frəm ˌɛndʒɪˈnɪrɪŋ tə ˈprɒdʌkt",
  meaning: "Ask about a career transition",
  cn: "你是怎么从工程转到产品的？",
  trap: "'engineering' /ˌɛndʒɪˈnɪrɪŋ/ 重音在 -NEER-，四音节",
  tip: "'make the jump' 生动口语化，比 'transition' 更轻松",
  pattern: "How did you make the jump from ___ to ___?",
  variants: [
    "How did you transition from consulting to tech?",
    "How did you make the switch from design to product management?"
  ]
};

const s172 = {
  id: 172,
  cat: "networking",
  scene: "conference-break",
  text: "That panel on AI ethics was really thought-provoking.",
  words: ["That","pan·el","on","A·I","eth·ics","was","real·ly","thought-pro·vok·ing"],
  stress: [0,1,0,1,1,0,1,1],
  ipa: "ðæt ˈpænəl ɒn ˌeɪˈaɪ ˈɛθɪks wɒz ˈrɪəli ˈθɔːtprəˌvoʊkɪŋ",
  meaning: "Comment on a conference session during a break",
  cn: "那个关于AI伦理的讨论组真的很发人深省。",
  trap: "'thought-provoking' /ˈθɔːtprəˌvoʊkɪŋ/ 复合形容词，注意两个 /θ/",
  tip: "'ethics' 和 'thought-provoking' 搭配高级，展示思考深度",
  pattern: "That ___ on ___ was really thought-provoking",
  variants: [
    "That talk on sustainable tech was incredibly thought-provoking.",
    "That session on leadership was really eye-opening."
  ]
};

const s173 = {
  id: 173,
  cat: "networking",
  scene: "conference-break",
  text: "Are you heading to the networking reception after this?",
  words: ["Are","you","head·ing","to","the","net·work·ing","re·cep·tion","af·ter","this"],
  stress: [1,0,1,0,0,1,1,1,1],
  ipa: "ɑːr juː ˈhɛdɪŋ tə ðə ˈnɛtwɜːrkɪŋ rɪˈsɛpʃən ˈæftər ðɪs",
  meaning: "Extend a conversation into the next event",
  cn: "你之后会去参加社交酒会吗？",
  trap: "'reception' /rɪˈsɛpʃən/ 重音在 -CEP-，三音节",
  tip: "'heading to' 口语自然，暗示可以一起去",
  pattern: "Are you heading to ___ after this?",
  variants: [
    "Are you going to the after-party later tonight?",
    "Are you sticking around for the evening reception?"
  ]
};

const s174 = {
  id: 174,
  cat: "networking",
  scene: "conference-break",
  text: "I grabbed you a coffee. You look like you could use one.",
  words: ["I","grabbed","you","a","cof·fee","You","look","like","you","could","use","one"],
  stress: [0,1,0,0,1,0,1,0,0,0,1,1],
  ipa: "aɪ ɡræbd juː ə ˈkɒfi juː lʊk laɪk juː kʊd juːz wʌn",
  meaning: "Build rapport with a small kind gesture",
  cn: "我帮你拿了杯咖啡。你看起来需要一杯。",
  trap: "'grabbed' /ɡræbd/ 一个音节，过去式 -ed 不加音节",
  tip: "'look like you could use one' 幽默体贴，破冰利器",
  pattern: "I grabbed you a ___. You look like you could use one.",
  variants: [
    "I brought you a water. Long day, right?",
    "I got you a snack. You look like you've been in sessions all day."
  ]
};

const s175 = {
  id: 175,
  cat: "networking",
  scene: "mentor-ask",
  text: "I really admire your career path. Would you consider mentoring me?",
  words: ["I","real·ly","ad·mire","your","ca·reer","path","Would","you","con·sid·er","men·tor·ing","me"],
  stress: [0,1,1,0,1,1,1,0,1,1,1],
  ipa: "aɪ ˈrɪəli ədˈmaɪər jɔːr kəˈrɪr pæθ wʊd juː kənˈsɪdər ˈmɛntɔːrɪŋ miː",
  meaning: "Ask someone to be your mentor",
  cn: "我很欣赏你的职业道路。你愿意考虑指导我吗？",
  trap: "'mentoring' /ˈmɛntɔːrɪŋ/ 重音在 MEN-，三音节",
  tip: "'admire' 先赞美，'Would you consider' 给对方空间考虑",
  pattern: "I really admire your ___. Would you consider ___?",
  variants: [
    "I've always looked up to your work. Would you be open to mentoring me?",
    "Your journey really inspires me. Could I learn from you as a mentor?"
  ]
};

const s176 = {
  id: 176,
  cat: "networking",
  scene: "mentor-ask",
  text: "Even a thirty-minute chat once a month would be incredibly valuable.",
  words: ["E·ven","a","thir·ty-min·ute","chat","once","a","month","would","be","in·cred·i·bly","val·u·a·ble"],
  stress: [1,0,1,1,1,0,1,0,0,1,1],
  ipa: "ˈiːvən ə ˈθɜːrtiˌmɪnɪt tʃæt wʌns ə mʌnθ wʊd bi ɪnˈkrɛdəbli ˈvæljuəbəl",
  meaning: "Set a low-commitment ask for mentoring",
  cn: "哪怕每月一次三十分钟的聊天都会非常有价值。",
  trap: "'incredibly' /ɪnˈkrɛdəbli/ 重音在 -CRED-，四音节",
  tip: "'Even' 开头降低门槛，具体时间让对方觉得可行",
  pattern: "Even a ___ once a ___ would be incredibly ___",
  variants: [
    "Even a quick call once a quarter would mean a lot to me.",
    "Even a fifteen-minute check-in would be hugely helpful."
  ]
};

const s177 = {
  id: 177,
  cat: "networking",
  scene: "mentor-ask",
  text: "I'd love your advice on navigating this career crossroads.",
  words: ["I'd","love","your","ad·vice","on","nav·i·gat·ing","this","ca·reer","cross·roads"],
  stress: [1,1,0,1,0,1,0,1,1],
  ipa: "aɪd lʌv jɔːr ədˈvaɪs ɒn ˈnævɪɡeɪtɪŋ ðɪs kəˈrɪr ˈkrɒsroʊdz",
  meaning: "Seek specific career guidance",
  cn: "我想请教一下如何应对这个职业十字路口。",
  trap: "'navigating' /ˈnævɪɡeɪtɪŋ/ 重音在 NAV-，四音节",
  tip: "'crossroads' 比喻生动，'your advice' 尊重对方智慧",
  pattern: "I'd love your advice on ___",
  variants: [
    "I'd really value your perspective on this career decision.",
    "I'd love your guidance on whether to take this opportunity."
  ]
};

const s178 = {
  id: 178,
  cat: "networking",
  scene: "thank-you",
  text: "Thank you so much for your time. I really appreciate it.",
  words: ["Thank","you","so","much","for","your","time","I","real·ly","ap·pre·ci·ate","it"],
  stress: [1,0,1,1,0,0,1,0,1,1,0],
  ipa: "θæŋk juː soʊ mʌtʃ fɔːr jɔːr taɪm aɪ ˈrɪəli əˈpriːʃieɪt ɪt",
  meaning: "Express sincere gratitude after a meeting",
  cn: "非常感谢你抽出时间。我真的很感激。",
  trap: "'appreciate' /əˈpriːʃieɪt/ 重音在 -PRE-，四音节",
  tip: "'so much' 加强感谢力度，'really appreciate' 双重强调真诚",
  pattern: "Thank you so much for ___. I really appreciate it.",
  variants: [
    "Thank you for being so generous with your time. I truly appreciate it.",
    "Thanks so much for the chat. I really valued it."
  ]
};

const s179 = {
  id: 179,
  cat: "networking",
  scene: "thank-you",
  text: "Your advice made a real difference. I wanted you to know that.",
  words: ["Your","ad·vice","made","a","real","dif·fer·ence","I","want·ed","you","to","know","that"],
  stress: [0,1,1,0,1,1,0,1,0,0,1,1],
  ipa: "jɔːr ədˈvaɪs meɪd ə rɪəl ˈdɪfərəns aɪ ˈwɒntɪd juː tə noʊ ðæt",
  meaning: "Follow up with specific gratitude",
  cn: "你的建议真的起了很大作用。我想让你知道这一点。",
  trap: "'difference' /ˈdɪfərəns/ 重音在 DIF-，三音节",
  tip: "'real difference' 具体感谢比空泛感谢有力百倍",
  pattern: "Your ___ made a real difference. I wanted you to know that.",
  variants: [
    "Your feedback really helped me improve. Just wanted to let you know.",
    "Your guidance made all the difference. Thank you again."
  ]
};

const s180 = {
  id: 180,
  cat: "networking",
  scene: "thank-you",
  text: "I'd love to return the favor someday. Don't hesitate to reach out.",
  words: ["I'd","love","to","re·turn","the","fa·vor","some·day","Don't","hes·i·tate","to","reach","out"],
  stress: [1,1,0,1,0,1,1,1,1,0,1,1],
  ipa: "aɪd lʌv tə rɪˈtɜːrn ðə ˈfeɪvər ˈsʌmdeɪ doʊnt ˈhɛzɪteɪt tə riːtʃ aʊt",
  meaning: "Offer reciprocity and keep the door open",
  cn: "我很想找机会回报你。有什么需要随时联系。",
  trap: "'hesitate' /ˈhɛzɪteɪt/ 重音在 HES-，三音节",
  tip: "'return the favor' 表达互惠，'Don't hesitate' 真诚邀请",
  pattern: "I'd love to return the favor. Don't hesitate to ___",
  variants: [
    "I'd love to pay it forward. Let me know if I can ever help.",
    "I'd love to reciprocate. My door is always open."
  ]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY6 = [
  s151, s152, s153, s154, s155, s156, s157, s158, s159, s160,
  s161, s162, s163, s164, s165, s166, s167, s168, s169, s170,
  s171, s172, s173, s174, s175, s176, s177, s178, s179, s180
];

export const SCENES_DAY6 = {
  151: { icon: "👋", colors: ["#3B82F6", "#1D4ED8"], title: "Hello!", sub: "Professional introduction" },
  152: { icon: "🤝", colors: ["#6366F1", "#4F46E5"], title: "Nice to Meet", sub: "Starting the conversation" },
  153: { icon: "📅", colors: ["#0891B2", "#0E7490"], title: "My Story", sub: "Sharing experience" },
  154: { icon: "🗞️", colors: ["#7C3AED", "#5B21B6"], title: "Hot Take", sub: "Industry discussion" },
  155: { icon: "📈", colors: ["#059669", "#047857"], title: "Trending Now", sub: "Spotting industry shifts" },
  156: { icon: "💡", colors: ["#F59E0B", "#D97706"], title: "Great Point", sub: "Validating perspectives" },
  157: { icon: "📱", colors: ["#10B981", "#059669"], title: "Stay in Touch", sub: "Wrapping up warmly" },
  158: { icon: "📧", colors: ["#2563EB", "#1E40AF"], title: "I'll Send It", sub: "Creating follow-up hooks" },
  159: { icon: "✉️", colors: ["#8B5CF6", "#7C3AED"], title: "As Promised", sub: "Delivering on follow-up" },
  160: { icon: "🚀", colors: ["#DC2626", "#B91C1C"], title: "Our Pitch", sub: "Concise value proposition" },
  161: { icon: "💬", colors: ["#EA580C", "#C2410C"], title: "Think of Us As", sub: "Analogy-based pitch" },
  162: { icon: "💰", colors: ["#EAB308", "#CA8A04"], title: "Momentum", sub: "Sharing company traction" },
  163: { icon: "🎪", colors: ["#A855F7", "#9333EA"], title: "First Time?", sub: "Conference ice-breaker" },
  164: { icon: "🎤", colors: ["#E11D48", "#BE123C"], title: "Great Talk", sub: "Discussing sessions" },
  165: { icon: "🪑", colors: ["#14B8A6", "#0D9488"], title: "Mind If I Join?", sub: "Approaching strangers" },
  166: { icon: "🔗", colors: ["#3B82F6", "#2563EB"], title: "Let's Connect", sub: "LinkedIn outreach" },
  167: { icon: "✍️", colors: ["#6D28D9", "#5B21B6"], title: "Personal Note", sub: "Personalized request" },
  168: { icon: "👏", colors: ["#059669", "#047857"], title: "Loved Your Post", sub: "Content-based rapport" },
  169: { icon: "☕", colors: ["#D97706", "#B45309"], title: "Coffee Date", sub: "Casual meeting invite" },
  170: { icon: "🧠", colors: ["#7C3AED", "#6D28D9"], title: "Pick Your Brain", sub: "Learning from others" },
  171: { icon: "🔀", colors: ["#F97316", "#EA580C"], title: "Career Jump", sub: "Transition stories" },
  172: { icon: "🤔", colors: ["#6366F1", "#4F46E5"], title: "Deep Thoughts", sub: "Post-session reflection" },
  173: { icon: "🥂", colors: ["#E11D48", "#BE123C"], title: "After-Hours", sub: "Extending the connection" },
  174: { icon: "🫶", colors: ["#10B981", "#047857"], title: "Small Gesture", sub: "Building rapport" },
  175: { icon: "🌟", colors: ["#F59E0B", "#D97706"], title: "Be My Mentor", sub: "Asking for guidance" },
  176: { icon: "⏰", colors: ["#0891B2", "#0E7490"], title: "Low Ask", sub: "Reducing commitment barrier" },
  177: { icon: "🧭", colors: ["#DC2626", "#991B1B"], title: "Career Advice", sub: "Navigating crossroads" },
  178: { icon: "🙏", colors: ["#8B5CF6", "#6D28D9"], title: "Thank You", sub: "Sincere gratitude" },
  179: { icon: "💎", colors: ["#059669", "#047857"], title: "Made a Difference", sub: "Specific appreciation" },
  180: { icon: "🔄", colors: ["#EAB308", "#CA8A04"], title: "Pay It Forward", sub: "Offering reciprocity" }
};
