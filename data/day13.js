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
  words: ["I","want","you