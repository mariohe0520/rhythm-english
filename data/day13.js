// ─── Day 13 · Public Speaking ─────────────────────────────────────
// 30 sentences (id 361-390)

const s361 = {
  id: 361,
  cat: "public-speaking",
  scene: "opening-hook",
  text: "Raise your hand if you've ever felt completely lost in a meeting conducted in English.",
  words: ["Raise","your","hand","if","you've","ev·er","felt","com·plete·ly","lost","in","a","meet·ing","con·duct·ed","in","Eng·lish"],
  stress: [1,0,1,0,1,1,1,1,1,0,0,1,1,0,1],
  ipa: "reɪz jɔːr hænd ɪf juːv ˈɛvər fɛlt kəmˈpliːtli lɒst ɪn ə ˈmiːtɪŋ kənˈdʌktɪd ɪn ˈɪŋɡlɪʃ",
  meaning: "Open a talk with an audience participation hook",
  cn: "如果你曾在英语会议中完全迷失过，请举手。",
  trap: "'conducted' /kənˈdʌktɪd/ 重音在 -DUCT-，三音节",
  tip: "'Raise your hand' 开头立刻打破听众的被动模式——身体参与带来注意力",
  pattern: "Raise your hand if you've ever ___",
  variants: [
    "Show of hands — who here has struggled with public speaking?",
    "Put your hand up if you've ever blanked on stage."
  ]
};

const s362 = {
  id: 362,
  cat: "public-speaking",
  scene: "opening-hook",
  text: "Three years ago, I stood on this stage and completely bombed my presentation.",
  words: ["Three","years","a·go","I","stood","on","this","stage","and","com·plete·ly","bombed","my","pre·sen·ta·tion"],
  stress: [1,1,1,0,1,0,0,1,0,1,1,0,1],
  ipa: "θriː jɪrz əˈɡoʊ aɪ stʊd ɒn ðɪs steɪdʒ ænd kəmˈpliːtli bɒmd maɪ ˌprɛzənˈteɪʃən",
  meaning: "Open with a vulnerable personal story to build connection",
  cn: "三年前，我站在这个舞台上，演讲彻底搞砸了。",
  trap: "'bombed' /bɒmd/ 口语意为 'failed badly'——不是字面的炸弹",
  tip: "以失败开头——脆弱感是演讲中最强大的连接工具",
  pattern: "Three years ago, I ___ and completely ___",
  variants: [
    "The first time I gave a talk, I forgot everything I planned to say.",
    "Let me tell you about the worst presentation I ever gave."
  ]
};

const s363 = {
  id: 363,
  cat: "public-speaking",
  scene: "opening-hook",
  text: "By the end of this talk, you'll have one tool that will change how you communicate forever.",
  words: ["By","the","end","of","this","talk","you'll","have","one","tool","that","will","change","how","you","com·mu·ni·cate","for·ev·er"],
  stress: [0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1],
  ipa: "baɪ ðə ɛnd əv ðɪs tɔːk juːl hæv wʌn tuːl ðæt wɪl tʃeɪndʒ haʊ juː kəˈmjuːnɪkeɪt fərˈɛvər",
  meaning: "Set a clear promise at the beginning to hold attention",
  cn: "在这次演讲结束时，你将拥有一个工具，它会永远改变你的沟通方式。",
  trap: "'communicate' /kəˈmjuːnɪkeɪt/ 重音在 -MU-，四音节",
  tip: "'one tool' 具体承诺比 'many insights' 更有力——少就是多",
  pattern: "By the end of this talk, you'll have ___",
  variants: [
    "In the next twenty minutes, I'll share the one framework that changed everything for me.",
    "Walk out of here with one idea that you can use tomorrow morning."
  ]
};

const s364 = {
  id: 364,
  cat: "public-speaking",
  scene: "storytelling",
  text: "Picture this — it's two in the morning, the server is down, and the client is calling.",
  words: ["Pic·ture","this","it's","two","in","the","morn·ing","the","serv·er","is","down","and","the","cli·ent","is","call·ing"],
  stress: [1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1],
  ipa: "ˈpɪktʃər ðɪs ɪts tuː ɪn ðə ˈmɔːrnɪŋ ðə ˈsɜːrvər ɪz daʊn ænd ðə ˈklaɪənt ɪz ˈkɔːlɪŋ",
  meaning: "Set a vivid scene to draw the audience into a story",
  cn: "想象一下——凌晨两点，服务器宕机，客户在打电话。",
  trap: "'picture' /ˈpɪktʃər/ 重音在 PIC-，注意 /tʃ/ 发音",
  tip: "'Picture this' 是故事大师的开场咒语——一秒把听众拉进场景",
  pattern: "Picture this — it's ___, the ___ is ___, and ___",
  variants: [
    "Imagine this: you're on stage, the teleprompter dies, and a thousand people are staring at you.",
    "Close your eyes — you're in a boardroom, and the CEO just asked you a question you can't answer."
  ]
};

const s365 = {
  id: 365,
  cat: "public-speaking",
  scene: "storytelling",
  text: "And that's when I realized — the problem was never the technology. It was us.",
  words: ["And","that's","when","I","re·al·ized","the","prob·lem","was","nev·er","the","tech·nol·o·gy","it","was","us"],
  stress: [0,1,0,0,1,0,1,0,1,0,1,0,0,1],
  ipa: "ænd ðæts wɛn aɪ ˈrɪəlaɪzd ðə ˈprɒbləm wɒz ˈnɛvər ðə tɛkˈnɒlədʒi ɪt wɒz ʌs",
  meaning: "Deliver a turning point revelation in a story",
  cn: "那时我才意识到——问题从来不是技术。是我们自己。",
  trap: "'technology' /tɛkˈnɒlədʒi/ 重音在 -NOL-，四音节",
  tip: "'It was us' 短促有力——最好的转折点用最少的词",
  pattern: "And that's when I realized — ___ was never ___. It was ___",
  variants: [
    "That moment changed everything — I finally understood the real issue.",
    "The breakthrough came when I stopped blaming the system and looked in the mirror."
  ]
};

const s366 = {
  id: 366,
  cat: "public-speaking",
  scene: "storytelling",
  text: "She looked me in the eye and said three words that I'll never forget.",
  words: ["She","looked","me","in","the","eye","and","said","three","words","that","I'll","nev·er","for·get"],
  stress: [0,1,0,0,0,1,0,1,1,1,0,1,1,1],
  ipa: "ʃiː lʊkt miː ɪn ðə aɪ ænd sɛd θriː wɜːrdz ðæt aɪl ˈnɛvər fərˈɡɛt",
  meaning: "Build suspense before revealing a key moment",
  cn: "她看着我的眼睛，说了三个我永远不会忘记的词。",
  trap: "'forget' /fərˈɡɛt/ 重音在 -GET，两音节",
  tip: "制造悬念——说完这句后停顿两秒再揭晓，效果翻倍",
  pattern: "___ looked me in the eye and said ___ that I'll never forget",
  variants: [
    "His next words changed the entire trajectory of my career.",
    "What she said next was so simple, yet so profound."
  ]
};

const s367 = {
  id: 367,
  cat: "public-speaking",
  scene: "data-presentation",
  text: "Let me put this in perspective — that's the equivalent of the entire population of France.",
  words: ["Let","me","put","this","in","per·spec·tive","that's","the","e·quiv·a·lent","of","the","en·tire","pop·u·la·tion","of","France"],
  stress: [0,0,1,0,0,1,1,0,1,0,0,1,1,0,1],
  ipa: "lɛt mi pʊt ðɪs ɪn pərˈspɛktɪv ðæts ðə ɪˈkwɪvələnt əv ðə ɪnˈtaɪər ˌpɒpjʊˈleɪʃən əv fræns",
  meaning: "Make a large number relatable with a comparison",
  cn: "让我换个角度说——这相当于整个法国的人口。",
  trap: "'equivalent' /ɪˈkwɪvələnt/ 重音在 -QUIV-，四音节",
  tip: "'put this in perspective' 是数据演讲的万能过渡——让数字有画面感",
  pattern: "Let me put this in perspective — that's the equivalent of ___",
  variants: [
    "To give you a sense of scale — that's more data than all the books ever written.",
    "Think of it this way — if you stacked them up, they'd reach the moon."
  ]
};

const s368 = {
  id: 368,
  cat: "public-speaking",
  scene: "data-presentation",
  text: "This chart tells a simple story — growth is accelerating, and it's not slowing down.",
  words: ["This","chart","tells","a","sim·ple","sto·ry","growth","is","ac·cel·er·at·ing","and","it's","not","slow·ing","down"],
  stress: [0,1,1,0,1,1,1,0,1,0,1,1,1,1],
  ipa: "ðɪs tʃɑːrt tɛlz ə ˈsɪmpəl ˈstɔːri ɡroʊθ ɪz ækˈsɛləreɪtɪŋ ænd ɪts nɒt ˈsloʊɪŋ daʊn",
  meaning: "Narrate a data visualization with a clear takeaway",
  cn: "这张图讲了一个简单的故事——增长在加速，而且没有放缓的迹象。",
  trap: "'accelerating' /ækˈsɛləreɪtɪŋ/ 重音在 -CEL-，五音节",
  tip: "'tells a simple story' 把数据拟人化——好的数据演讲是讲故事",
  pattern: "This chart tells a simple story — ___ is ___",
  variants: [
    "Look at this trend line — the message is unmistakable.",
    "The data speaks for itself — every quarter, the numbers go up."
  ]
};

const s369 = {
  id: 369,
  cat: "public-speaking",
  scene: "data-presentation",
  text: "I want you to ignore everything on this slide except the number in the top right corner.",
  words: ["I","want","you","to","ig·nore","ev·ery·thing","on","this","slide","ex·cept","the","num·ber","in","the","top","right","cor·ner"],
  stress: [0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1],
  ipa: "aɪ wɒnt juː tə ɪɡˈnɔːr ˈɛvriθɪŋ ɒn ðɪs slaɪd ɪkˈsɛpt ðə ˈnʌmbər ɪn ðə tɒp raɪt ˈkɔːrnər",
  meaning: "Direct audience focus to a single data point for impact",
  cn: "我希望你们忽略这张幻灯片上的一切，只看右上角那个数字。",
  trap: "'ignore' /ɪɡˈnɔːr/ 重音在 -NORE，两音节",
  tip: "'ignore everything except' 反向聚焦——减法比加法更能抓住注意力",
  pattern: "I want you to ignore everything except ___",
  variants: [
    "Forget the fancy graphics — the only number that matters is this one.",
    "Don't look at the details yet — focus on the headline figure."
  ]
};

const s370 = {
  id: 370,
  cat: "public-speaking",
  scene: "audience-interaction",
  text: "Turn to the person next to you and share one thing you've learned so far.",
  words: ["Turn","to","the","per·son","next","to","you","and","share","one","thing","you've","learned","so","far"],
  stress: [1,0,0,1,1,0,0,0,1,1,1,1,1,0,1],
  ipa: "tɜːrn tə ðə ˈpɜːrsən nɛkst tə juː ænd ʃɛr wʌn θɪŋ juːv lɜːrnd soʊ fɑːr",
  meaning: "Create peer-to-peer engagement during a presentation",
  cn: "转向你旁边的人，分享一件你到目前为止学到的事。",
  trap: "'learned' /lɜːrnd/ 一个音节，注意 /ɜːr/ 元音",
  tip: "让听众互动——被动听讲超过十分钟注意力会骤降",
  pattern: "Turn to the person next to you and ___",
  variants: [
    "Quick pair exercise — tell your neighbor one takeaway from this section.",
    "Chat with the person beside you for thirty seconds about what resonated."
  ]
};

const s371 = {
  id: 371,
  cat: "public-speaking",
  scene: "audience-interaction",
  text: "I'd love to hear from someone in the audience — what's your experience with this?",
  words: ["I'd","love","to","hear","from","some·one","in","the","au·di·ence","what's","your","ex·pe·ri·ence","with","this"],
  stress: [1,1,0,1,0,1,0,0,1,1,0,1,0,1],
  ipa: "aɪd lʌv tə hɪr frɒm ˈsʌmwʌn ɪn ðə ˈɔːdiəns wʌts jɔːr ɪkˈspɪriəns wɪð ðɪs",
  meaning: "Invite audience input to make a talk more interactive",
  cn: "我很想听听在座各位的看法——你们对这个有什么经验？",
  trap: "'audience' /ˈɔːdiəns/ 重音在 AU-，三音节",
  tip: "'I'd love to hear from someone' 比 'Does anyone have questions' 更有邀请感",
  pattern: "I'd love to hear from someone — what's your experience with ___?",
  variants: [
    "Who here has tried this approach? I'd love to hear how it went.",
    "Anyone in the room want to share a quick story about this?"
  ]
};

const s372 = {
  id: 372,
  cat: "public-speaking",
  scene: "audience-interaction",
  text: "Let's do a quick poll — how many of you are already using some form of automation?",
  words: ["Let's","do","a","quick","poll","how","man·y","of","you","are","al·read·y","us·ing","some","form","of","au·to·ma·tion"],
  stress: [1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1],
  ipa: "lɛts duː ə kwɪk poʊl haʊ ˈmɛni əv juː ɑːr ɔːlˈrɛdi ˈjuːzɪŋ sʌm fɔːrm əv ˌɔːtəˈmeɪʃən",
  meaning: "Use a live poll to gauge audience knowledge and boost engagement",
  cn: "让我们做个快速投票——你们当中有多少人已经在使用某种形式的自动化？",
  trap: "'automation' /ˌɔːtəˈmeɪʃən/ 重音在 -MA-，四音节",
  tip: "'quick poll' 让听众从被动变主动——数据还能用来调整后续内容",
  pattern: "Let's do a quick poll — how many of you ___?",
  variants: [
    "Quick show of hands — who here has experimented with AI tools?",
    "Real talk — raise your hand if you've automated any part of your workflow."
  ]
};

const s373 = {
  id: 373,
  cat: "public-speaking",
  scene: "handling-questions",
  text: "That's a fantastic question — let me make sure I understand what you're asking.",
  words: ["That's","a","fan·tas·tic","ques·tion","let","me","make","sure","I","un·der·stand","what","you're","ask·ing"],
  stress: [1,0,1,1,0,0,1,1,0,1,0,1,1],
  ipa: "ðæts ə fænˈtæstɪk ˈkwɛstʃən lɛt mi meɪk ʃʊr aɪ ˌʌndərˈstænd wʌt jʊr ˈæskɪŋ",
  meaning: "Buy thinking time while validating the questioner",
  cn: "这是个很棒的问题——让我确保我理解了你在问什么。",
  trap: "'fantastic' /fænˈtæstɪk/ 重音在 -TAS-，三音节",
  tip: "'let me make sure I understand' 是Q&A的黄金缓冲句——给你时间组织答案",
  pattern: "That's a ___ question — let me make sure I understand ___",
  variants: [
    "Great question — so if I'm hearing you right, you're asking about...",
    "I love that question — let me rephrase it to make sure we're on the same page."
  ]
};

const s374 = {
  id: 374,
  cat: "public-speaking",
  scene: "handling-questions",
  text: "I don't have the exact number off the top of my head, but I'll follow up with you after.",
  words: ["I","don't","have","the","ex·act","num·ber","off","the","top","of","my","head","but","I'll","fol·low","up","with","you","af·ter"],
  stress: [0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1],
  ipa: "aɪ doʊnt hæv ðə ɪɡˈzækt ˈnʌmbər ɒf ðə tɒp əv maɪ hɛd bʌt aɪl ˈfɒloʊ ʌp wɪð juː ˈæftər",
  meaning: "Honestly defer on specifics you don't have at hand",
  cn: "我现在一下子记不住确切的数字，但我会后续跟进告诉你。",
  trap: "'exact' /ɪɡˈzækt/ 重音在 -ZACT，注意 /ɡz/ 连读",
  tip: "承认不知道比编造答案更赢得尊重——'I'll follow up' 展现专业",
  pattern: "I don't have ___ off the top of my head, but I'll follow up ___",
  variants: [
    "Honestly, I'd rather give you accurate data — let me get back to you on that.",
    "That's a detail I want to get right — I'll send it over after the session."
  ]
};

const s375 = {
  id: 375,
  cat: "public-speaking",
  scene: "handling-questions",
  text: "I think that question deserves a longer conversation — can we connect offline?",
  words: ["I","think","that","ques·tion","de·serves","a","long·er","con·ver·sa·tion","can","we","con·nect","off·line"],
  stress: [0,1,0,1,1,0,1,1,0,0,1,1],
  ipa: "aɪ θɪŋk ðæt ˈkwɛstʃən dɪˈzɜːrvz ə ˈlɒŋɡər ˌkɒnvərˈseɪʃən kæn wi kəˈnɛkt ˌɒfˈlaɪn",
  meaning: "Politely redirect a deep question to save time for the group",
  cn: "我觉得这个问题值得更深入的讨论——我们可以线下聊聊吗？",
  trap: "'deserves' /dɪˈzɜːrvz/ 重音在 -SERVES，注意 /z/ 不是 /s/",
  tip: "'connect offline' 尊重提问者的同时保护全场的节奏",
  pattern: "I think that question deserves ___ — can we ___?",
  variants: [
    "That's a deep dive — let's grab coffee after and unpack it.",
    "I want to do justice to your question — let's take it offline."
  ]
};

const s376 = {
  id: 376,
  cat: "public-speaking",
  scene: "technical-explanation",
  text: "Think of it like a highway — the more lanes you add, the more traffic you can handle.",
  words: ["Think","of","it","like","a","high·way","the","more","lanes","you","add","the","more","traf·fic","you","can","han·dle"],
  stress: [1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1],
  ipa: "θɪŋk əv ɪt laɪk ə ˈhaɪweɪ ðə mɔːr leɪnz juː æd ðə mɔːr ˈtræfɪk juː kæn ˈhændəl",
  meaning: "Use an analogy to simplify a technical concept",
  cn: "把它想象成高速公路——你加的车道越多，能处理的流量就越大。",
  trap: "'handle' /ˈhændəl/ 重音在 HAN-，两音节",
  tip: "类比是技术演讲的超级武器——把抽象变成观众已知的画面",
  pattern: "Think of it like ___ — the more ___, the more ___",
  variants: [
    "It's like a kitchen — more chefs means more dishes can go out at the same time.",
    "Imagine a library — the more shelves you have, the more books you can store."
  ]
};

const s377 = {
  id: 377,
  cat: "public-speaking",
  scene: "technical-explanation",
  text: "I know this sounds complicated, but at its core it's really just three steps.",
  words: ["I","know","this","sounds","com·pli·cat·ed","but","at","its","core","it's","real·ly","just","three","steps"],
  stress: [0,1,0,1,1,0,0,0,1,1,1,0,1,1],
  ipa: "aɪ noʊ ðɪs saʊndz ˈkɒmplɪkeɪtɪd bʌt æt ɪts kɔːr ɪts ˈrɪəli dʒʌst θriː stɛps",
  meaning: "Reduce complexity to make a technical topic approachable",
  cn: "我知道这听起来很复杂，但本质上其实就三个步骤。",
  trap: "'complicated' /ˈkɒmplɪkeɪtɪd/ 重音在 COM-，四音节",
  tip: "'at its core... just three steps' 承认复杂再简化——观众会感激你",
  pattern: "I know this sounds complicated, but at its core it's just ___",
  variants: [
    "It looks complex on the surface, but the underlying logic is actually quite simple.",
    "Don't let the jargon scare you — there are only two things you need to remember."
  ]
};

const s378 = {
  id: 378,
  cat: "public-speaking",
  scene: "technical-explanation",
  text: "Let me zoom out for a second and show you where this fits in the bigger picture.",
  words: ["Let","me","zoom","out","for","a","sec·ond","and","show","you","where","this","fits","in","the","big·ger","pic·ture"],
  stress: [0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1],
  ipa: "lɛt mi zuːm aʊt fɔːr ə ˈsɛkənd ænd ʃoʊ juː wɛr ðɪs fɪts ɪn ðə ˈbɪɡər ˈpɪktʃər",
  meaning: "Transition from detail to context in a technical talk",
  cn: "让我退后一步，给你们看看这在整体中的位置。",
  trap: "'picture' /ˈpɪktʃər/ 重音在 PIC-，注意 /tʃ/ 发音",
  tip: "'zoom out' 是技术演讲的导航动作——防止听众迷失在细节中",
  pattern: "Let me zoom out and show you where this fits in ___",
  variants: [
    "Before we go deeper, let me step back and give you the thirty-thousand-foot view.",
    "Let me pull up the architecture diagram so you can see how all the pieces connect."
  ]
};

const s379 = {
  id: 379,
  cat: "public-speaking",
  scene: "inspirational-close",
  text: "The question isn't whether this will happen — it's whether you'll be ready when it does.",
  words: ["The","ques·tion","isn't","wheth·er","this","will","hap·pen","it's","wheth·er","you'll","be","read·y","when","it","does"],
  stress: [0,1,1,1,0,0,1,1,1,1,0,1,0,0,1],
  ipa: "ðə ˈkwɛstʃən ˈɪzənt ˈwɛðər ðɪs wɪl ˈhæpən ɪts ˈwɛðər juːl bi ˈrɛdi wɛn ɪt dʌz",
  meaning: "Create urgency with a reframing close",
  cn: "问题不在于这会不会发生——而在于当它发生时你准备好了没有。",
  trap: "'whether' /ˈwɛðər/ 不要和 'weather' 混淆——发音相同但拼写不同",
  tip: "'isn't whether... it's whether' 对比重复结构——演讲收尾的强力修辞",
  pattern: "The question isn't whether ___ — it's whether ___",
  variants: [
    "Change is coming whether we're ready or not — the only variable is us.",
    "This isn't a matter of if — it's a matter of when."
  ]
};

const s380 = {
  id: 380,
  cat: "public-speaking",
  scene: "inspirational-close",
  text: "I want to leave you with one challenge — go back to your desk and try this today.",
  words: ["I","want","to","leave","you","with","one","chal·lenge","go","back","to","your","desk","and","try","this","to·day"],
  stress: [0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1],
  ipa: "aɪ wɒnt tə liːv juː wɪð wʌn ˈtʃælɪndʒ ɡoʊ bæk tə jɔːr dɛsk ænd traɪ ðɪs təˈdeɪ",
  meaning: "End with a specific call to action",
  cn: "我想给你们留一个挑战——回到你的工位上，今天就试试这个。",
  trap: "'challenge' /ˈtʃælɪndʒ/ 重音在 CHAL-，两音节",
  tip: "'one challenge... today' 具体行动号召——好的演讲以行动结束而不是总结",
  pattern: "I want to leave you with one challenge — ___ today",
  variants: [
    "Here's your homework — pick one thing from this talk and implement it before Friday.",
    "My ask is simple: try it once this week and see what happens."
  ]
};

const s381 = {
  id: 381,
  cat: "public-speaking",
  scene: "inspirational-close",
  text: "If I can go from bombing on stage to standing here today, believe me — so can you.",
  words: ["If","I","can","go","from","bomb·ing","on","stage","to","stand·ing","here","to·day","be·lieve","me","so","can","you"],
  stress: [0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1],
  ipa: "ɪf aɪ kæn ɡoʊ frɒm ˈbɒmɪŋ ɒn steɪdʒ tə ˈstændɪŋ hɪr təˈdeɪ bɪˈliːv miː soʊ kæn juː",
  meaning: "Close with a personal transformation story for inspiration",
  cn: "如果我能从在台上搞砸走到今天站在这里，相信我——你也可以。",
  trap: "'believe' /bɪˈliːv/ 重音在 -LIEVE，两音节",
  tip: "首尾呼应——回到开头的失败故事形成完整弧线，这是顶级演讲结构",
  pattern: "If I can go from ___ to ___, believe me — so can you",
  variants: [
    "I started exactly where you are right now — and I promise, it gets easier.",
    "Every great speaker was once a terrible one — the only difference is they kept going."
  ]
};

const s382 = {
  id: 382,
  cat: "public-speaking",
  scene: "panel-discussion",
  text: "I'd like to push back on that a little — the data actually tells a different story.",
  words: ["I'd","like","to","push","back","on","that","a","lit·tle","the","da·ta","ac·tu·al·ly","tells","a","dif·fer·ent","sto·ry"],
  stress: [1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1],
  ipa: "aɪd laɪk tə pʊʃ bæk ɒn ðæt ə ˈlɪtəl ðə ˈdeɪtə ˈæktʃuəli tɛlz ə ˈdɪfərənt ˈstɔːri",
  meaning: "Respectfully disagree with a co-panelist during a discussion",
  cn: "我想稍微反驳一下——数据实际上讲了一个不同的故事。",
  trap: "'actually' /ˈæktʃuəli/ 重音在 AC-，四音节，注意 /tʃ/",
  tip: "'push back a little' 是优雅反驳的模板——既有主张又不失礼貌",
  pattern: "I'd like to push back on that — ___ actually ___",
  variants: [
    "Respectfully, I see it differently — here's what the research shows.",
    "That's an interesting take, but I think there's another angle worth considering."
  ]
};

const s383 = {
  id: 383,
  cat: "public-speaking",
  scene: "panel-discussion",
  text: "Building on what my co-panelist just said — I think the real opportunity is in the intersection.",
  words: ["Build·ing","on","what","my","co-pan·el·ist","just","said","I","think","the","real","op·por·tu·ni·ty","is","in","the","in·ter·sec·tion"],
  stress: [1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1],
  ipa: "ˈbɪldɪŋ ɒn wʌt maɪ koʊˈpænəlɪst dʒʌst sɛd aɪ θɪŋk ðə rɪəl ˌɒpərˈtjuːnɪti ɪz ɪn ðə ˌɪntərˈsɛkʃən",
  meaning: "Connect and extend another panelist's point",
  cn: "在我的共同嘉宾刚说的基础上——我觉得真正的机会在交叉点。",
  trap: "'opportunity' /ˌɒpərˈtjuːnɪti/ 重音在 -TU-，五音节",
  tip: "'Building on' 展示倾听力——panel最忌自说自话，连接才是高手",
  pattern: "Building on what ___ just said — I think the real ___ is ___",
  variants: [
    "To add to that excellent point — the synergy between these two areas is where the magic happens.",
    "I completely agree, and I'd take it one step further."
  ]
};

const s384 = {
  id: 384,
  cat: "public-speaking",
  scene: "panel-discussion",
  text: "We could debate this for hours, but if I had to boil it down to one takeaway it would be this.",
  words: ["We","could","de·bate","this","for","hours","but","if","I","had","to","boil","it","down","to","one","take·a·way","it","would","be","this"],
  stress: [0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1],
  ipa: "wi kʊd dɪˈbeɪt ðɪs fɔːr aʊərz bʌt ɪf aɪ hæd tə bɔɪl ɪt daʊn tə wʌn ˈteɪkəweɪ ɪt wʊd bi ðɪs",
  meaning: "Synthesize a complex panel discussion into one key point",
  cn: "我们可以争论几个小时，但如果让我提炼成一个要点，那就是这个。",
  trap: "'debate' /dɪˈbeɪt/ 重音在 -BATE，两音节",
  tip: "'boil it down to one takeaway' 是panel收尾的杀手锏——观众记不住一切但能记住一点",
  pattern: "We could debate this for hours, but if I had to boil it down to one takeaway ___",
  variants: [
    "If there's one thing I want people to walk away with from this panel, it's this.",
    "Let me distill everything we've discussed into one sentence."
  ]
};

const s385 = {
  id: 385,
  cat: "public-speaking",
  scene: "impromptu-speech",
  text: "I wasn't expecting to speak today, but here goes — three quick thoughts on this topic.",
  words: ["I","wasn't","ex·pect·ing","to","speak","to·day","but","here","goes","three","quick","thoughts","on","this","top·ic"],
  stress: [0,1,1,0,1,1,0,1,1,1,1,1,0,0,1],
  ipa: "aɪ ˈwɒzənt ɪkˈspɛktɪŋ tə spiːk təˈdeɪ bʌt hɪr ɡoʊz θriː kwɪk θɔːts ɒn ðɪs ˈtɒpɪk",
  meaning: "Open an impromptu speech with honest framing",
  cn: "我没想到今天要发言，但就这样吧——关于这个话题的三个快速想法。",
  trap: "'expecting' /ɪkˈspɛktɪŋ/ 重音在 -SPECT-，三音节",
  tip: "'three quick thoughts' 数字框架让即兴演讲瞬间有结构——观众感觉你有准备",
  pattern: "I wasn't expecting to speak, but here goes — ___ quick thoughts on ___",
  variants: [
    "I'll keep this short — two things come to mind right away.",
    "Alright, off the cuff — here are my honest reactions."
  ]
};

const s386 = {
  id: 386,
  cat: "public-speaking",
  scene: "impromptu-speech",
  text: "The first thing that comes to mind is something my mentor once told me.",
  words: ["The","first","thing","that","comes","to","mind","is","some·thing","my","men·tor","once","told","me"],
  stress: [0,1,1,0,1,0,1,0,1,0,1,1,1,0],
  ipa: "ðə fɜːrst θɪŋ ðæt kʌmz tə maɪnd ɪz ˈsʌmθɪŋ maɪ ˈmɛntɔːr wʌns toʊld miː",
  meaning: "Anchor an impromptu point with a personal reference",
  cn: "我首先想到的是我的导师曾经对我说过的话。",
  trap: "'mentor' /ˈmɛntɔːr/ 重音在 MEN-，两音节",
  tip: "借用权威人物的话——即兴演讲中最快建立可信度的方式",
  pattern: "The first thing that comes to mind is something ___ once told me",
  variants: [
    "I'm reminded of a quote that really stuck with me over the years.",
    "This takes me back to a conversation I had with my first manager."
  ]
};

const s387 = {
  id: 387,
  cat: "public-speaking",
  scene: "impromptu-speech",
  text: "I don't have all the answers, but I know one thing for certain — we need to start now.",
  words: ["I","don't","have","all","the","an·swers","but","I","know","one","thing","for","cer·tain","we","need","to","start","now"],
  stress: [0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1],
  ipa: "aɪ doʊnt hæv ɔːl ðə ˈænsərz bʌt aɪ noʊ wʌn θɪŋ fɔːr ˈsɜːrtən wi niːd tə stɑːrt naʊ",
  meaning: "Close an impromptu speech with conviction despite uncertainty",
  cn: "我没有所有的答案，但有一点我确定——我们需要现在就开始。",
  trap: "'certain' /ˈsɜːrtən/ 重音在 CER-，两音节",
  tip: "承认不完美但坚定收尾——不确定中的确定感最有说服力",
  pattern: "I don't have all the answers, but I know one thing for certain — ___",
  variants: [
    "We may not have the full picture, but waiting is not an option.",
    "Uncertainty shouldn't stop us — it should motivate us to move faster."
  ]
};

const s388 = {
  id: 388,
  cat: "public-speaking",
  scene: "keynote-ending",
  text: "Let me bring it all together — we talked about the problem, the solution, and the path forward.",
  words: ["Let","me","bring","it","all","to·geth·er","we","talked","a·bout","the","prob·lem","the","so·lu·tion","and","the","path","for·ward"],
  stress: [0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1],
  ipa: "lɛt mi brɪŋ ɪt ɔːl təˈɡɛðər wi tɔːkt əˈbaʊt ðə ˈprɒbləm ðə səˈluːʃən ænd ðə pæθ ˈfɔːrwərd",
  meaning: "Summarize a keynote with a three-part recap",
  cn: "让我把一切串起来——我们谈了问题、解决方案和前进的道路。",
  trap: "'solution' /səˈluːʃən/ 重音在 -LU-，三音节",
  tip: "'problem, solution, path forward' 三段式回顾——keynote结尾的经典框架",
  pattern: "Let me bring it all together — we talked about ___, ___, and ___",
  variants: [
    "To recap: we identified the gap, explored the options, and chose a direction.",
    "Here's the through-line: challenge, opportunity, action."
  ]
};

const s389 = {
  id: 389,
  cat: "public-speaking",
  scene: "keynote-ending",
  text: "This is not just my vision — this is our vision, and it starts with each of you in this room.",
  words: ["This","is","not","just","my","vi·sion","this","is","our","vi·sion","and","it","starts","with","each","of","you","in","this","room"],
  stress: [1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1],
  ipa: "ðɪs ɪz nɒt dʒʌst maɪ ˈvɪʒən ðɪs ɪz aʊər ˈvɪʒən ænd ɪt stɑːrts wɪð iːtʃ əv juː ɪn ðɪs ruːm",
  meaning: "Transform personal vision into collective ownership",
  cn: "这不只是我的愿景——这是我们的愿景，而它从在座的每一位开始。",
  trap: "'vision' /ˈvɪʒən/ 重音在 VI-，注意 /ʒ/ 浊擦音",
  tip: "'my vision → our vision' 所有权转移——让听众从旁观者变成参与者",
  pattern: "This is not just my ___ — this is our ___, and it starts with ___",
  variants: [
    "I can't do this alone — but together, we can make it happen.",
    "The future I described isn't mine to build — it's ours."
  ]
};

const s390 = {
  id: 390,
  cat: "public-speaking",
  scene: "keynote-ending",
  text: "Thank you for your time, your energy, and your willingness to think differently. Now let's go build it.",
  words: ["Thank","you","for","your","time","your","en·er·gy","and","your","will·ing·ness","to","think","dif·fer·ent·ly","now","let's","go","build","it"],
  stress: [1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0],
  ipa: "θæŋk juː fɔːr jɔːr taɪm jɔːr ˈɛnərdʒi ænd jɔːr ˈwɪlɪŋnəs tə θɪŋk ˈdɪfərəntli naʊ lɛts ɡoʊ bɪld ɪt",
  meaning: "End a keynote with gratitude and a forward-looking call to action",
  cn: "感谢你们的时间、精力和愿意用不同方式思考的心。现在让我们去建造它。",
  trap: "'willingness' /ˈwɪlɪŋnəs/ 重音在 WIL-，三音节",
  tip: "'time, energy, willingness' 三连感谢加 'let's go build it' 行动收尾——这就是乔布斯级别的结尾",
  pattern: "Thank you for your ___, your ___, and your ___. Now let's ___",
  variants: [
    "I'm grateful for this audience — now let's turn inspiration into action.",
    "Thanks for being here — the real work starts when you walk out that door."
  ]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY13 = [
  s361, s362, s363, s364, s365, s366, s367, s368, s369, s370,
  s371, s372, s373, s374, s375, s376, s377, s378, s379, s380,
  s381, s382, s383, s384, s385, s386, s387, s388, s389, s390
];

export const SCENES_DAY13 = {
  361: { icon: "🎤", colors: ["#6366F1", "#4F46E5"], title: "Hook", sub: "Audience participation" },
  362: { icon: "💔", colors: ["#EF4444", "#DC2626"], title: "Vulnerable", sub: "Failure opening" },
  363: { icon: "🎯", colors: ["#F59E0B", "#D97706"], title: "Promise", sub: "Clear takeaway" },
  364: { icon: "🎬", colors: ["#7C3AED", "#6D28D9"], title: "Picture This", sub: "Scene setting" },
  365: { icon: "💡", colors: ["#10B981", "#059669"], title: "Plot Twist", sub: "Turning point" },
  366: { icon: "🤫", colors: ["#2563EB", "#1D4ED8"], title: "Suspense", sub: "Cliffhanger" },
  367: { icon: "📊", colors: ["#059669", "#047857"], title: "Perspective", sub: "Data comparison" },
  368: { icon: "📈", colors: ["#DC2626", "#B91C1C"], title: "Trend Line", sub: "Data narrative" },
  369: { icon: "🔍", colors: ["#8B5CF6", "#7C3AED"], title: "Focus", sub: "Single data point" },
  370: { icon: "👥", colors: ["#0891B2", "#0E7490"], title: "Pair Up", sub: "Peer interaction" },
  371: { icon: "🙋", colors: ["#F97316", "#EA580C"], title: "Your Turn", sub: "Audience voice" },
  372: { icon: "📋", colors: ["#E11D48", "#BE123C"], title: "Quick Poll", sub: "Live survey" },
  373: { icon: "✨", colors: ["#6366F1", "#4F46E5"], title: "Great Q!", sub: "Buying time" },
  374: { icon: "📬", colors: ["#10B981", "#059669"], title: "Follow Up", sub: "Honest deferral" },
  375: { icon: "☕", colors: ["#7C3AED", "#6D28D9"], title: "Offline", sub: "Deep dive later" },
  376: { icon: "🛣️", colors: ["#F59E0B", "#D97706"], title: "Analogy", sub: "Technical simplifier" },
  377: { icon: "3️⃣", colors: ["#2563EB", "#1D4ED8"], title: "Three Steps", sub: "Complexity reducer" },
  378: { icon: "🔭", colors: ["#DC2626", "#B91C1C"], title: "Zoom Out", sub: "Big picture" },
  379: { icon: "⚡", colors: ["#EF4444", "#DC2626"], title: "Urgency", sub: "Reframing close" },
  380: { icon: "🏃", colors: ["#059669", "#047857"], title: "Challenge", sub: "Action CTA" },
  381: { icon: "🦋", colors: ["#8B5CF6", "#7C3AED"], title: "Transform", sub: "Personal arc" },
  382: { icon: "⚔️", colors: ["#0891B2", "#0E7490"], title: "Push Back", sub: "Respectful dissent" },
  383: { icon: "🔗", colors: ["#F97316", "#EA580C"], title: "Build On", sub: "Idea connection" },
  384: { icon: "🧪", colors: ["#E11D48", "#BE123C"], title: "Distill", sub: "One takeaway" },
  385: { icon: "🎲", colors: ["#6366F1", "#4F46E5"], title: "Off the Cuff", sub: "Impromptu open" },
  386: { icon: "🧓", colors: ["#10B981", "#059669"], title: "Mentor Said", sub: "Authority anchor" },
  387: { icon: "🚀", colors: ["#7C3AED", "#6D28D9"], title: "Start Now", sub: "Conviction close" },
  388: { icon: "🧩", colors: ["#F59E0B", "#D97706"], title: "All Together", sub: "Three-part recap" },
  389: { icon: "🌍", colors: ["#2563EB", "#1D4ED8"], title: "Our Vision", sub: "Collective ownership" },
  390: { icon: "🙏", colors: ["#DC2626", "#B91C1C"], title: "Go Build It", sub: "Gratitude + action" }
};
