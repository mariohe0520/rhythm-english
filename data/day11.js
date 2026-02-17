// ─── Day 11 · Remote Work ─────────────────────────────────────────
// 30 sentences (id 301-330)

const s301 = {
  id: 301,
  cat: "remote-work",
  scene: "standup-call",
  text: "Good morning everyone — let me quickly share what I'm working on today.",
  words: ["Good","morn·ing","ev·ery·one","let","me","quick·ly","share","what","I'm","work·ing","on","to·day"],
  stress: [1,1,1,0,0,1,1,0,1,1,0,1],
  ipa: "ɡʊd ˈmɔːrnɪŋ ˈɛvriwʌn lɛt mi ˈkwɪkli ʃɛr wʌt aɪm ˈwɜːrkɪŋ ɒn təˈdeɪ",
  meaning: "Open a daily standup with a brief status update",
  cn: "大家早上好——让我快速分享一下我今天在做什么。",
  trap: "'quickly' /ˈkwɪkli/ 重音在 QUICK-，两音节，别漏掉 /kw/ 的圆唇",
  tip: "'Good morning everyone' 快速带过，重点在 'what I'm working on'",
  pattern: "Good morning everyone — let me quickly share ___",
  variants: [
    "Hey team — here's a quick rundown of my day.",
    "Morning all — just a heads-up on what's on my plate today."
  ]
};

const s302 = {
  id: 302,
  cat: "remote-work",
  scene: "standup-call",
  text: "I'm blocked on the API integration — could use some help from backend.",
  words: ["I'm","blocked","on","the","A·P·I","in·te·gra·tion","could","use","some","help","from","back·end"],
  stress: [1,1,0,0,1,1,0,1,0,1,0,1],
  ipa: "aɪm blɒkt ɒn ðə ˌeɪpiːˈaɪ ˌɪntɪˈɡreɪʃən kʊd juːz sʌm hɛlp frɒm ˈbækɛnd",
  meaning: "Flag a blocker clearly in a standup meeting",
  cn: "我在API集成上被卡住了——需要后端团队帮忙。",
  trap: "'integration' /ˌɪntɪˈɡreɪʃən/ 重音在 -GRA-，四音节",
  tip: "'blocked' 重读传递紧迫感，'could use some help' 比 'I need help' 更委婉",
  pattern: "I'm blocked on ___ — could use some help from ___",
  variants: [
    "I've hit a wall with the authentication flow — any backend folks free?",
    "The API endpoint isn't returning what I expected — need a quick sync."
  ]
};

const s303 = {
  id: 303,
  cat: "remote-work",
  scene: "standup-call",
  text: "Yesterday I closed three tickets and today I'll focus on the deployment pipeline.",
  words: ["Yes·ter·day","I","closed","three","tick·ets","and","to·day","I'll","fo·cus","on","the","de·ploy·ment","pipe·line"],
  stress: [1,0,1,1,1,0,1,1,1,0,0,1,1],
  ipa: "ˈjɛstərdeɪ aɪ kloʊzd θriː ˈtɪkɪts ænd təˈdeɪ aɪl ˈfoʊkəs ɒn ðə dɪˈplɔɪmənt ˈpaɪplaɪn",
  meaning: "Report progress and next priorities in a standup",
  cn: "昨天我关了三个工单，今天我会专注于部署流水线。",
  trap: "'deployment' /dɪˈplɔɪmənt/ 重音在 -PLOY-，三音节",
  tip: "'Yesterday... today...' 时间对比结构清晰——远程 standup 效率之王",
  pattern: "Yesterday I ___ and today I'll focus on ___",
  variants: [
    "I wrapped up the migration yesterday — today is all about testing.",
    "Finished the code review; now moving on to the CI pipeline."
  ]
};

const s304 = {
  id: 304,
  cat: "remote-work",
  scene: "async-update",
  text: "Just a quick async update — the feature branch is ready for review.",
  words: ["Just","a","quick","a·sync","up·date","the","fea·ture","branch","is","read·y","for","re·view"],
  stress: [0,0,1,1,1,0,1,1,0,1,0,1],
  ipa: "dʒʌst ə kwɪk ˈeɪsɪŋk ˈʌpdeɪt ðə ˈfiːtʃər brɑːntʃ ɪz ˈrɛdi fɔːr rɪˈvjuː",
  meaning: "Send a concise async status update to the team",
  cn: "简单的异步更新——功能分支已准备好等待审查。",
  trap: "'async' /ˈeɪsɪŋk/ 重音在 A-，两音节，不要读成 /əˈsɪŋk/",
  tip: "'quick async update' 开头定帧——让同事知道不需要实时回复",
  pattern: "Just a quick async update — ___ is ready for ___",
  variants: [
    "Async heads-up: the PR is up and tagged for review.",
    "Quick note — I've pushed the changes; review at your convenience."
  ]
};

const s305 = {
  id: 305,
  cat: "remote-work",
  scene: "async-update",
  text: "I've documented everything in the Notion page — no meeting needed.",
  words: ["I've","doc·u·ment·ed","ev·ery·thing","in","the","No·tion","page","no","meet·ing","need·ed"],
  stress: [1,1,1,0,0,1,1,1,1,1],
  ipa: "aɪv ˈdɒkjʊmɛntɪd ˈɛvriθɪŋ ɪn ðə ˈnoʊʃən peɪdʒ noʊ ˈmiːtɪŋ ˈniːdɪd",
  meaning: "Promote async documentation over unnecessary meetings",
  cn: "我已经在Notion页面上记录了所有内容——不需要开会。",
  trap: "'documented' /ˈdɒkjʊmɛntɪd/ 重音在 DOC-，四音节",
  tip: "'no meeting needed' 是远程工作文化的核心理念——干脆利落",
  pattern: "I've documented everything in ___ — no meeting needed",
  variants: [
    "All the details are in the doc — feel free to comment async.",
    "I wrote up a summary in Confluence so we can skip the sync."
  ]
};

const s306 = {
  id: 306,
  cat: "remote-work",
  scene: "async-update",
  text: "Please leave your feedback in the thread by end of day Friday.",
  words: ["Please","leave","your","feed·back","in","the","thread","by","end","of","day","Fri·day"],
  stress: [1,1,0,1,0,0,1,0,1,0,1,1],
  ipa: "pliːz liːv jɔːr ˈfiːdbæk ɪn ðə θrɛd baɪ ɛnd əv deɪ ˈfraɪdeɪ",
  meaning: "Set a clear async deadline for team feedback",
  cn: "请在周五结束前在帖子里留下你的反馈。",
  trap: "'thread' /θrɛd/ 注意 /θ/ 不是 /s/——舌尖要放齿间",
  tip: "'by end of day Friday' 给出明确的异步截止时间——远程协作关键",
  pattern: "Please leave your ___ in the thread by ___",
  variants: [
    "Drop your thoughts in the Slack thread whenever you get a chance.",
    "I need everyone's input by Thursday EOD — comment in the doc."
  ]
};

const s307 = {
  id: 307,
  cat: "remote-work",
  scene: "virtual-brainstorm",
  text: "Let's use the virtual whiteboard — everyone drop your ideas on sticky notes.",
  words: ["Let's","use","the","vir·tu·al","white·board","ev·ery·one","drop","your","i·de·as","on","stick·y","notes"],
  stress: [1,1,0,1,1,1,1,0,1,0,1,1],
  ipa: "lɛts juːz ðə ˈvɜːrtʃuəl ˈwaɪtbɔːrd ˈɛvriwʌn drɒp jɔːr aɪˈdɪəz ɒn ˈstɪki noʊts",
  meaning: "Kick off a virtual brainstorming session with a collaborative tool",
  cn: "让我们用虚拟白板——大家把想法写在便利贴上。",
  trap: "'virtual' /ˈvɜːrtʃuəl/ 重音在 VIR-，三音节，注意 /tʃ/ 音",
  tip: "'drop your ideas' 动词轻松随意——降低发言门槛",
  pattern: "Let's use ___ — everyone drop your ___ on ___",
  variants: [
    "Open up Miro and start posting your ideas — no wrong answers.",
    "Let's brainstorm in FigJam — throw everything on the board."
  ]
};

const s308 = {
  id: 308,
  cat: "remote-work",
  scene: "virtual-brainstorm",
  text: "I want to build on what Sarah said — what if we combine both approaches?",
  words: ["I","want","to","build","on","what","Sar·ah","said","what","if","we","com·bine","both","ap·proach·es"],
  stress: [0,1,0,1,0,0,1,1,1,0,0,1,1,1],
  ipa: "aɪ wɒnt tə bɪld ɒn wʌt ˈsɛrə sɛd wʌt ɪf wi kəmˈbaɪn boʊθ əˈproʊtʃɪz",
  meaning: "Build on a colleague's idea in a brainstorming session",
  cn: "我想在Sarah说的基础上延伸——如果我们把两种方法结合起来呢？",
  trap: "'combine' /kəmˈbaɪn/ 重音在 -BINE，不是 COM-",
  tip: "'build on what ___ said' 是协作对话的高级连接技巧",
  pattern: "I want to build on what ___ said — what if we ___?",
  variants: [
    "That's a great point — what if we took it one step further?",
    "To piggyback on that idea — could we also add a self-serve option?"
  ]
};

const s309 = {
  id: 309,
  cat: "remote-work",
  scene: "virtual-brainstorm",
  text: "Let's timebox this to fifteen minutes and then vote on the top three ideas.",
  words: ["Let's","time·box","this","to","fif·teen","min·utes","and","then","vote","on","the","top","three","i·de·as"],
  stress: [1,1,0,0,1,1,0,0,1,0,0,1,1,1],
  ipa: "lɛts ˈtaɪmbɒks ðɪs tə ˌfɪfˈtiːn ˈmɪnɪts ænd ðɛn voʊt ɒn ðə tɒp θriː aɪˈdɪəz",
  meaning: "Set time constraints for a brainstorming session",
  cn: "让我们把这个限定在十五分钟，然后投票选出前三个想法。",
  trap: "'timebox' /ˈtaɪmbɒks/ 是远程工作高频术语，两音节复合词",
  tip: "'timebox' + 'vote' 双重约束让虚拟会议高效——远程必备技能",
  pattern: "Let's timebox this to ___ and then ___",
  variants: [
    "We've got ten minutes — let's generate as many ideas as possible.",
    "Quick brainstorm: five minutes of ideas, then we dot-vote."
  ]
};

const s310 = {
  id: 310,
  cat: "remote-work",
  scene: "screen-sharing",
  text: "Let me share my screen — can everyone see the dashboard?",
  words: ["Let","me","share","my","screen","can","ev·ery·one","see","the","dash·board"],
  stress: [0,0,1,0,1,0,1,1,0,1],
  ipa: "lɛt mi ʃɛr maɪ skriːn kæn ˈɛvriwʌn siː ðə ˈdæʃbɔːrd",
  meaning: "Start a screen share and confirm visibility",
  cn: "让我共享屏幕——大家都能看到仪表盘吗？",
  trap: "'dashboard' /ˈdæʃbɔːrd/ 重音在 DASH-，两音节复合词",
  tip: "'can everyone see' 确认可见是远程演示的基本礼仪",
  pattern: "Let me share my screen — can everyone see ___?",
  variants: [
    "I'm going to share now — give me a thumbs-up if you can see it.",
    "Sharing my screen — is the resolution okay for everyone?"
  ]
};

const s311 = {
  id: 311,
  cat: "remote-work",
  scene: "screen-sharing",
  text: "I'm going to walk you through the pull request — pay attention to line forty-two.",
  words: ["I'm","go·ing","to","walk","you","through","the","pull","re·quest","pay","at·ten·tion","to","line","for·ty-two"],
  stress: [1,1,0,1,0,0,0,1,1,1,1,0,1,1],
  ipa: "aɪm ˈɡoʊɪŋ tə wɔːk juː θruː ðə pʊl rɪˈkwɛst peɪ əˈtɛnʃən tə laɪn ˈfɔːrti tuː",
  meaning: "Guide a code review via screen share with specific callouts",
  cn: "我来带你们过一下这个PR——注意第42行。",
  trap: "'pull request' 两个独立重读词，不要连成一个；'attention' 重音在 -TEN-",
  tip: "'pay attention to line forty-two' 具体引导——远程代码审查的关键",
  pattern: "I'm going to walk you through ___ — pay attention to ___",
  variants: [
    "Let me step through the diff — the key change is in the middleware.",
    "I'll highlight the important parts as we go through the code."
  ]
};

const s312 = {
  id: 312,
  cat: "remote-work",
  scene: "screen-sharing",
  text: "Sorry, let me stop sharing and switch to the correct window.",
  words: ["Sor·ry","let","me","stop","shar·ing","and","switch","to","the","cor·rect","win·dow"],
  stress: [1,0,0,1,1,0,1,0,0,1,1],
  ipa: "ˈsɒri lɛt mi stɒp ˈʃɛrɪŋ ænd swɪtʃ tə ðə kəˈrɛkt ˈwɪndoʊ",
  meaning: "Recover smoothly from a screen-sharing mistake",
  cn: "抱歉，让我停止共享然后切换到正确的窗口。",
  trap: "'correct' /kəˈrɛkt/ 重音在 -RECT，不是 COR-",
  tip: "远程会议小事故——快速恢复比完美演示更显专业",
  pattern: "Sorry, let me stop sharing and switch to ___",
  variants: [
    "Oops, wrong screen — give me one second.",
    "Hold on, let me pull up the right tab — there we go."
  ]
};

const s313 = {
  id: 313,
  cat: "remote-work",
  scene: "time-management",
  text: "I block my mornings for deep work — no meetings before noon.",
  words: ["I","block","my","morn·ings","for","deep","work","no","meet·ings","be·fore","noon"],
  stress: [0,1,0,1,0,1,1,1,1,1,1],
  ipa: "aɪ blɒk maɪ ˈmɔːrnɪŋz fɔːr diːp wɜːrk noʊ ˈmiːtɪŋz bɪˈfɔːr nuːn",
  meaning: "Set boundaries around focus time in a remote schedule",
  cn: "我把上午留给深度工作——中午之前不开会。",
  trap: "'before' /bɪˈfɔːr/ 重音在 -FORE，不要读成等重",
  tip: "'deep work' 是 Cal Newport 的概念——远程工作者的生存之道",
  pattern: "I block my ___ for ___ — no meetings before ___",
  variants: [
    "My calendar is blocked until one PM for focused coding time.",
    "I do my best thinking in the morning, so I keep it meeting-free."
  ]
};

const s314 = {
  id: 314,
  cat: "remote-work",
  scene: "time-management",
  text: "Can we move this to an async discussion? I think a doc would be more efficient.",
  words: ["Can","we","move","this","to","an","a·sync","dis·cus·sion","I","think","a","doc","would","be","more","ef·fi·cient"],
  stress: [0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1],
  ipa: "kæn wi muːv ðɪs tə ən ˈeɪsɪŋk dɪˈskʌʃən aɪ θɪŋk ə dɒk wʊd bi mɔːr ɪˈfɪʃənt",
  meaning: "Suggest converting a meeting to an async format",
  cn: "我们能改成异步讨论吗？我觉得写文档更高效。",
  trap: "'efficient' /ɪˈfɪʃənt/ 重音在 -FI-，三音节",
  tip: "'Can we move this to async' 是远程工作的外交艺术——礼貌拒绝不必要的会",
  pattern: "Can we move this to ___? I think ___ would be more efficient",
  variants: [
    "This feels like it could be an email instead of a meeting.",
    "Would a Loom video work instead? I can record one in five minutes."
  ]
};

const s315 = {
  id: 315,
  cat: "remote-work",
  scene: "time-management",
  text: "I'm in a different timezone, so let's find an overlap that works for both of us.",
  words: ["I'm","in","a","dif·fer·ent","time·zone","so","let's","find","an","o·ver·lap","that","works","for","both","of","us"],
  stress: [1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0],
  ipa: "aɪm ɪn ə ˈdɪfərənt ˈtaɪmzoʊn soʊ lɛts faɪnd ən ˈoʊvərlæp ðæt wɜːrks fɔːr boʊθ əv ʌs",
  meaning: "Navigate timezone differences in distributed teams",
  cn: "我在不同的时区，所以让我们找一个对双方都合适的重叠时间。",
  trap: "'overlap' /ˈoʊvərlæp/ 作名词时重音在 O-，作动词时重音在 -LAP",
  tip: "'works for both of us' 强调双向尊重——全球远程团队必备沟通技巧",
  pattern: "I'm in a different timezone, so let's find ___",
  variants: [
    "There's a nine-hour time difference — can we do mornings your time?",
    "Let me check the timezone overlap and propose a few slots."
  ]
};

const s316 = {
  id: 316,
  cat: "remote-work",
  scene: "work-life-boundary",
  text: "I'm signing off for the evening — I'll pick this up first thing tomorrow.",
  words: ["I'm","sign·ing","off","for","the","eve·ning","I'll","pick","this","up","first","thing","to·mor·row"],
  stress: [1,1,1,0,0,1,1,1,0,0,1,1,1],
  ipa: "aɪm ˈsaɪnɪŋ ɒf fɔːr ðə ˈiːvnɪŋ aɪl pɪk ðɪs ʌp fɜːrst θɪŋ təˈmɒroʊ",
  meaning: "Set a clear end-of-day boundary in remote work",
  cn: "我今晚下线了——明天一早继续。",
  trap: "'signing' /ˈsaɪnɪŋ/ 注意 silent g；'tomorrow' 重音在 -MOR-",
  tip: "'signing off' 是远程工作的结束仪式——给团队明确信号",
  pattern: "I'm signing off for ___ — I'll pick this up ___",
  variants: [
    "Logging off for today — anything urgent can wait until morning.",
    "That's a wrap for me — catch you all tomorrow."
  ]
};

const s317 = {
  id: 317,
  cat: "remote-work",
  scene: "work-life-boundary",
  text: "I don't check Slack after six PM — please use email for anything truly urgent.",
  words: ["I","don't","check","Slack","af·ter","six","P·M","please","use","e·mail","for","an·y·thing","tru·ly","ur·gent"],
  stress: [0,1,1,1,1,1,1,1,1,1,0,1,1,1],
  ipa: "aɪ doʊnt tʃɛk slæk ˈæftər sɪks piːˈɛm pliːz juːz ˈiːmeɪl fɔːr ˈɛniθɪŋ ˈtruːli ˈɜːrdʒənt",
  meaning: "Communicate notification boundaries to your team",
  cn: "我下午六点后不看Slack——真正紧急的事请用邮件。",
  trap: "'urgent' /ˈɜːrdʒənt/ 重音在 UR-，注意 /ɜːr/ 元音",
  tip: "'truly urgent' 限定词很重要——区分真紧急和假紧急",
  pattern: "I don't check ___ after ___ — please use ___ for anything ___",
  variants: [
    "My notifications are off after hours — text me if it's a real emergency.",
    "I've set my Slack status to away — I'll respond in the morning."
  ]
};

const s318 = {
  id: 318,
  cat: "remote-work",
  scene: "work-life-boundary",
  text: "Working from home doesn't mean working all the time — boundaries matter.",
  words: ["Work·ing","from","home","doesn't","mean","work·ing","all","the","time","bound·a·ries","mat·ter"],
  stress: [1,0,1,1,1,1,1,0,1,1,1],
  ipa: "ˈwɜːrkɪŋ frɒm hoʊm ˈdʌzənt miːn ˈwɜːrkɪŋ ɔːl ðə taɪm ˈbaʊndəriz ˈmætər",
  meaning: "Advocate for work-life balance in remote settings",
  cn: "在家工作不意味着一直工作——界限很重要。",
  trap: "'boundaries' /ˈbaʊndəriz/ 重音在 BOUND-，三音节",
  tip: "两个 'working' 的对比构成修辞力量——强调远程工作的核心议题",
  pattern: "___ doesn't mean ___ — ___ matter",
  variants: [
    "Remote work is about flexibility, not availability around the clock.",
    "Just because my laptop is at home doesn't mean I'm always on call."
  ]
};

const s319 = {
  id: 319,
  cat: "remote-work",
  scene: "onboarding-remote",
  text: "Welcome to the team — I'll be your onboarding buddy for the first two weeks.",
  words: ["Wel·come","to","the","team","I'll","be","your","on·board·ing","bud·dy","for","the","first","two","weeks"],
  stress: [1,0,0,1,1,0,0,1,1,0,0,1,1,1],
  ipa: "ˈwɛlkəm tə ðə tiːm aɪl bi jɔːr ˈɒnbɔːrdɪŋ ˈbʌdi fɔːr ðə fɜːrst tuː wiːks",
  meaning: "Welcome a new remote hire and establish a support structure",
  cn: "欢迎加入团队——前两周我会做你的入职搭档。",
  trap: "'onboarding' /ˈɒnbɔːrdɪŋ/ 重音在 ON-，三音节",
  tip: "'buddy' 比 'mentor' 更亲切——远程入职最需要的是归属感",
  pattern: "Welcome to the team — I'll be your ___ for the first ___",
  variants: [
    "Hey! I'm your onboarding partner — feel free to ping me anytime.",
    "Welcome aboard — I'm here to help you get up to speed."
  ]
};

const s320 = {
  id: 320,
  cat: "remote-work",
  scene: "onboarding-remote",
  text: "Start by reading the team handbook — it covers our tools, rituals, and norms.",
  words: ["Start","by","read·ing","the","team","hand·book","it","cov·ers","our","tools","rit·u·als","and","norms"],
  stress: [1,0,1,0,1,1,0,1,0,1,1,0,1],
  ipa: "stɑːrt baɪ ˈriːdɪŋ ðə tiːm ˈhændbʊk ɪt ˈkʌvərz aʊər tuːlz ˈrɪtʃuəlz ænd nɔːrmz",
  meaning: "Direct a new hire to essential documentation",
  cn: "先看团队手册——里面涵盖了我们的工具、仪式和规范。",
  trap: "'rituals' /ˈrɪtʃuəlz/ 重音在 RIT-，注意 /tʃ/ 音",
  tip: "'tools, rituals, and norms' 三连并列结构——远程团队文化三要素",
  pattern: "Start by reading ___ — it covers our ___",
  variants: [
    "The wiki has everything you need to get started — bookmark it.",
    "Check out the onboarding checklist in Notion — it's your roadmap."
  ]
};

const s321 = {
  id: 321,
  cat: "remote-work",
  scene: "onboarding-remote",
  text: "Don't hesitate to ask questions — there's no such thing as a dumb question here.",
  words: ["Don't","hes·i·tate","to","ask","ques·tions","there's","no","such","thing","as","a","dumb","ques·tion","here"],
  stress: [1,1,0,1,1,1,1,1,1,0,0,1,1,1],
  ipa: "doʊnt ˈhɛzɪteɪt tə æsk ˈkwɛstʃənz ðɛrz noʊ sʌtʃ θɪŋ æz ə dʌm ˈkwɛstʃən hɪr",
  meaning: "Create psychological safety for new remote hires",
  cn: "别犹豫提问——在这里没有所谓的蠢问题。",
  trap: "'hesitate' /ˈhɛzɪteɪt/ 重音在 HES-，三音节",
  tip: "'no such thing as a dumb question' 是打造远程心理安全的经典句式",
  pattern: "Don't hesitate to ___ — there's no such thing as ___",
  variants: [
    "Ask early, ask often — we'd rather you ask than guess.",
    "Nothing is obvious when you're new — please ask anything."
  ]
};

const s322 = {
  id: 322,
  cat: "remote-work",
  scene: "team-bonding-virtual",
  text: "Let's do a quick icebreaker — what's the best thing that happened to you this week?",
  words: ["Let's","do","a","quick","ice·break·er","what's","the","best","thing","that","hap·pened","to","you","this","week"],
  stress: [1,0,0,1,1,1,0,1,1,0,1,0,0,0,1],
  ipa: "lɛts duː ə kwɪk ˈaɪsbreɪkər wʌts ðə bɛst θɪŋ ðæt ˈhæpənd tə juː ðɪs wiːk",
  meaning: "Start a virtual meeting with a fun connection moment",
  cn: "让我们来个简单的破冰——这周发生在你身上最好的事是什么？",
  trap: "'icebreaker' /ˈaɪsbreɪkər/ 复合词，重音在 ICE-",
  tip: "远程团队需要刻意创造非工作互动——icebreaker 是最简单的方式",
  pattern: "Let's do a quick icebreaker — what's ___?",
  variants: [
    "Before we dive in — share one fun thing from your weekend.",
    "Quick warmup: what's everyone watching or reading right now?"
  ]
};

const s323 = {
  id: 323,
  cat: "remote-work",
  scene: "team-bonding-virtual",
  text: "We're doing a virtual coffee chat on Thursday — totally optional, just for fun.",
  words: ["We're","do·ing","a","vir·tu·al","cof·fee","chat","on","Thurs·day","to·tal·ly","op·tion·al","just","for","fun"],
  stress: [1,1,0,1,1,1,0,1,1,1,1,0,1],
  ipa: "wɪr ˈduːɪŋ ə ˈvɜːrtʃuəl ˈkɒfi tʃæt ɒn ˈθɜːrzdeɪ ˈtoʊtəli ˈɒpʃənəl dʒʌst fɔːr fʌn",
  meaning: "Invite the team to an informal virtual social event",
  cn: "我们周四有个线上咖啡聊天——完全自愿，就是轻松聊聊。",
  trap: "'optional' /ˈɒpʃənəl/ 重音在 OP-，三音节",
  tip: "'totally optional' 降低压力——远程社交必须尊重每个人的能量",
  pattern: "We're doing ___ on ___ — totally optional, just for fun",
  variants: [
    "There's a virtual happy hour at four — come hang out if you're free.",
    "We've got a casual Zoom coffee at three — no agenda, just vibes."
  ]
};

const s324 = {
  id: 324,
  cat: "remote-work",
  scene: "team-bonding-virtual",
  text: "I've never met half this team in person, but honestly, it feels like we've worked together for years.",
  words: ["I've","nev·er","met","half","this","team","in","per·son","but","hon·est·ly","it","feels","like","we've","worked","to·geth·er","for","years"],
  stress: [1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
  ipa: "aɪv ˈnɛvər mɛt hæf ðɪs tiːm ɪn ˈpɜːrsən bʌt ˈɒnɪstli ɪt fiːlz laɪk wiːv wɜːrkt təˈɡɛðər fɔːr jɪrz",
  meaning: "Express genuine connection despite physical distance",
  cn: "这个团队一半人我从没见过面，但说实话，感觉我们已经合作多年了。",
  trap: "'honestly' /ˈɒnɪstli/ 重音在 HON-，silent h 在这里发音",
  tip: "这种真诚的感慨最能凝聚远程团队——情感连接胜过物理距离",
  pattern: "I've never ___ in person, but honestly, it feels like ___",
  variants: [
    "We're spread across five countries, but it doesn't feel like it.",
    "Remote doesn't mean distant — this team is tighter than most."
  ]
};

const s325 = {
  id: 325,
  cat: "remote-work",
  scene: "feedback-remote",
  text: "Do you have five minutes for a quick feedback conversation? Nothing serious.",
  words: ["Do","you","have","five","min·utes","for","a","quick","feed·back","con·ver·sa·tion","noth·ing","se·ri·ous"],
  stress: [0,0,1,1,1,0,0,1,1,1,1,1],
  ipa: "duː juː hæv faɪv ˈmɪnɪts fɔːr ə kwɪk ˈfiːdbæk ˌkɒnvərˈseɪʃən ˈnʌθɪŋ ˈsɪriəs",
  meaning: "Initiate a low-pressure feedback conversation remotely",
  cn: "你有五分钟时间聊一下反馈吗？没什么大事。",
  trap: "'conversation' /ˌkɒnvərˈseɪʃən/ 重音在 -SA-，四音节",
  tip: "'Nothing serious' 立刻降低焦虑——远程反馈更容易被误读为负面",
  pattern: "Do you have ___ for a quick ___? Nothing serious",
  variants: [
    "Got a sec? I wanted to share some thoughts on the presentation.",
    "Quick one — mind if I give you some feedback on the PR?"
  ]
};

const s326 = {
  id: 326,
  cat: "remote-work",
  scene: "feedback-remote",
  text: "I really appreciate how you handled that client call — your tone was spot on.",
  words: ["I","real·ly","ap·pre·ci·ate","how","you","han·dled","that","cli·ent","call","your","tone","was","spot","on"],
  stress: [0,1,1,0,0,1,0,1,1,0,1,0,1,1],
  ipa: "aɪ ˈrɪəli əˈpriːʃieɪt haʊ juː ˈhændəld ðæt ˈklaɪənt kɔːl jɔːr toʊn wɒz spɒt ɒn",
  meaning: "Give specific positive feedback to a remote colleague",
  cn: "我真的很欣赏你处理那个客户电话的方式——你的语气拿捏得恰到好处。",
  trap: "'appreciate' /əˈpriːʃieɪt/ 重音在 -PRE-，四音节",
  tip: "'spot on' 是英式口语高频夸奖——比 'great' 更具体更有力",
  pattern: "I really appreciate how you ___ — your ___ was spot on",
  variants: [
    "That was a masterclass in de-escalation — well done.",
    "Your handling of that tricky situation was impressive."
  ]
};

const s327 = {
  id: 327,
  cat: "remote-work",
  scene: "feedback-remote",
  text: "One thing I'd suggest is turning on your camera during presentations — it builds trust.",
  words: ["One","thing","I'd","sug·gest","is","turn·ing","on","your","cam·er·a","dur·ing","pre·sen·ta·tions","it","builds","trust"],
  stress: [1,1,1,1,0,1,0,0,1,1,1,0,1,1],
  ipa: "wʌn θɪŋ aɪd səˈdʒɛst ɪz ˈtɜːrnɪŋ ɒn jɔːr ˈkæmərə ˈdjʊərɪŋ ˌprɛzənˈteɪʃənz ɪt bɪldz trʌst",
  meaning: "Give constructive feedback about remote meeting etiquette",
  cn: "我的一个建议是在演示时打开摄像头——这能建立信任。",
  trap: "'presentations' /ˌprɛzənˈteɪʃənz/ 重音在 -TA-，四音节",
  tip: "'One thing I'd suggest' 是给建设性反馈的温和框架——不带批判",
  pattern: "One thing I'd suggest is ___ — it builds ___",
  variants: [
    "A small tip: turning your video on makes a big difference in rapport.",
    "It would be great to see your face during demos — it adds warmth."
  ]
};

const s328 = {
  id: 328,
  cat: "remote-work",
  scene: "town-hall",
  text: "Thanks everyone for joining — I know it's early for some of you and late for others.",
  words: ["Thanks","ev·ery·one","for","join·ing","I","know","it's","ear·ly","for","some","of","you","and","late","for","oth·ers"],
  stress: [1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1],
  ipa: "θæŋks ˈɛvriwʌn fɔːr ˈdʒɔɪnɪŋ aɪ noʊ ɪts ˈɜːrli fɔːr sʌm əv juː ænd leɪt fɔːr ˈʌðərz",
  meaning: "Acknowledge timezone diversity at a company all-hands",
  cn: "感谢大家参加——我知道对你们中的一些人来说很早，对另一些人来说很晚。",
  trap: "'others' /ˈʌðərz/ 注意 /ð/ 浊音，不是 /θ/",
  tip: "认可时区差异是全球远程公司 town hall 的必备开场白",
  pattern: "Thanks everyone for joining — I know it's ___ for some and ___ for others",
  variants: [
    "Appreciate you all making the time — I know this slot isn't ideal for everyone.",
    "Thanks for being here across all these timezones."
  ]
};

const s329 = {
  id: 329,
  cat: "remote-work",
  scene: "town-hall",
  text: "We've hit our quarterly targets despite being fully distributed across twelve countries.",
  words: ["We've","hit","our","quar·ter·ly","tar·gets","de·spite","be·ing","ful·ly","dis·trib·ut·ed","a·cross","twelve","coun·tries"],
  stress: [1,1,0,1,1,1,1,1,1,1,1,1],
  ipa: "wiːv hɪt aʊər ˈkwɔːrtərli ˈtɑːrɡɪts dɪˈspaɪt ˈbiːɪŋ ˈfʊli dɪˈstrɪbjuːtɪd əˈkrɒs twɛlv ˈkʌntriz",
  meaning: "Celebrate team achievements in a remote-first company",
  cn: "尽管我们完全分布在12个国家，我们仍然达成了季度目标。",
  trap: "'distributed' /dɪˈstrɪbjuːtɪd/ 重音在 -STRIB-，四音节",
  tip: "'despite being fully distributed' 把远程转化为骄傲——不是障碍而是超能力",
  pattern: "We've hit ___ despite being fully distributed across ___",
  variants: [
    "All targets met — and we did it without a single office.",
    "Twelve countries, one team, and we crushed it this quarter."
  ]
};

const s330 = {
  id: 330,
  cat: "remote-work",
  scene: "town-hall",
  text: "Drop your questions in the Q and A panel — we'll get to as many as we can.",
  words: ["Drop","your","ques·tions","in","the","Q","and","A","pan·el","we'll","get","to","as","man·y","as","we","can"],
  stress: [1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1],
  ipa: "drɒp jɔːr ˈkwɛstʃənz ɪn ðə kjuː ænd eɪ ˈpænəl wiːl ɡɛt tə æz ˈmɛni æz wi kæn",
  meaning: "Invite questions during a virtual town hall",
  cn: "把你的问题放在问答面板里——我们会尽可能多地回答。",
  trap: "'panel' /ˈpænəl/ 重音在 PAN-，两音节",
  tip: "'Drop your questions' 比 'Please submit' 更口语化——town hall 要有对话感",
  pattern: "Drop your questions in ___ — we'll get to as many as we can",
  variants: [
    "Use the chat to ask questions — we'll tackle them at the end.",
    "Fire away in the Q and A — nothing is off limits."
  ]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY11 = [
  s301, s302, s303, s304, s305, s306, s307, s308, s309, s310,
  s311, s312, s313, s314, s315, s316, s317, s318, s319, s320,
  s321, s322, s323, s324, s325, s326, s327, s328, s329, s330
];

export const SCENES_DAY11 = {
  301: { icon: "🌅", colors: ["#6366F1", "#4F46E5"], title: "Good Morning", sub: "Standup opener" },
  302: { icon: "🚧", colors: ["#EF4444", "#DC2626"], title: "Blocked", sub: "Flagging blockers" },
  303: { icon: "✅", colors: ["#10B981", "#059669"], title: "Done & Next", sub: "Progress report" },
  304: { icon: "📝", colors: ["#8B5CF6", "#7C3AED"], title: "Async Update", sub: "No-meeting notice" },
  305: { icon: "📄", colors: ["#2563EB", "#1D4ED8"], title: "Doc It", sub: "Async documentation" },
  306: { icon: "⏰", colors: ["#F59E0B", "#D97706"], title: "Deadline Set", sub: "Async feedback" },
  307: { icon: "🧠", colors: ["#7C3AED", "#6D28D9"], title: "Whiteboard", sub: "Virtual ideation" },
  308: { icon: "🔗", colors: ["#059669", "#047857"], title: "Build On It", sub: "Idea chaining" },
  309: { icon: "⏱️", colors: ["#DC2626", "#B91C1C"], title: "Timebox", sub: "Structured brainstorm" },
  310: { icon: "🖥️", colors: ["#0891B2", "#0E7490"], title: "Screen Share", sub: "Visibility check" },
  311: { icon: "👁️", colors: ["#6366F1", "#4F46E5"], title: "Code Walk", sub: "PR walkthrough" },
  312: { icon: "🔄", colors: ["#EA580C", "#C2410C"], title: "Quick Switch", sub: "Screen recovery" },
  313: { icon: "🧘", colors: ["#10B981", "#059669"], title: "Deep Work", sub: "Focus time" },
  314: { icon: "💬", colors: ["#8B5CF6", "#7C3AED"], title: "Go Async", sub: "Meeting reduction" },
  315: { icon: "🌍", colors: ["#2563EB", "#1E40AF"], title: "Timezone", sub: "Global coordination" },
  316: { icon: "🌙", colors: ["#1F2937", "#111827"], title: "Sign Off", sub: "End-of-day boundary" },
  317: { icon: "🔕", colors: ["#7C3AED", "#5B21B6"], title: "DND Mode", sub: "Notification boundary" },
  318: { icon: "⚖️", colors: ["#E11D48", "#BE123C"], title: "Balance", sub: "Work-life boundary" },
  319: { icon: "👋", colors: ["#F97316", "#EA580C"], title: "Welcome", sub: "Onboarding buddy" },
  320: { icon: "📚", colors: ["#059669", "#047857"], title: "Handbook", sub: "Team documentation" },
  321: { icon: "❓", colors: ["#A855F7", "#9333EA"], title: "Ask Freely", sub: "Psychological safety" },
  322: { icon: "🧊", colors: ["#0891B2", "#0E7490"], title: "Icebreaker", sub: "Team warmup" },
  323: { icon: "☕", colors: ["#D97706", "#B45309"], title: "Virtual Coffee", sub: "Social bonding" },
  324: { icon: "❤️", colors: ["#E11D48", "#BE123C"], title: "Team Feels", sub: "Remote connection" },
  325: { icon: "💭", colors: ["#6366F1", "#4F46E5"], title: "Quick Chat", sub: "Feedback opener" },
  326: { icon: "⭐", colors: ["#10B981", "#059669"], title: "Spot On", sub: "Positive feedback" },
  327: { icon: "📸", colors: ["#F59E0B", "#D97706"], title: "Camera On", sub: "Constructive tip" },
  328: { icon: "🏛️", colors: ["#2563EB", "#1D4ED8"], title: "All Hands", sub: "Town hall opener" },
  329: { icon: "🌐", colors: ["#7C3AED", "#6D28D9"], title: "Global Win", sub: "Distributed success" },
  330: { icon: "🙋", colors: ["#DC2626", "#B91C1C"], title: "Q&A Time", sub: "Town hall questions" }
};
