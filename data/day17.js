// ─── Day 17 · IELTS Part 1 — Hobbies & Free Time ────────────────
// 30 sentences (id 481-510)

const s481 = {
  id: 481,
  cat: "Hobbies",
  scene: "leisure",
  text: "I'm really into photography at the moment.",
  words: ["I'm","really","into","photography","at","the","moment"],
  stress: [0.2, 0.7, 0.5, 1.0, 0.2, 0.1, 0.7],
  ipa: "/aɪm ˈrɪəli ˈɪntə fəˈtɒɡrəfi ət ðə ˈməʊmənt/",
  meaning: "用 really into 表达强烈兴趣——比 I like 更地道",
  cn: "我最近特别迷摄影。",
  trap: "I very like taking photos now.",
  tip: "REALLY INTO 连读表达热情，PHOTOGRAPHY 四音节重在 -TOG-",
  pattern: "I'm really into + [hobby] + at the moment",
  variants: ["Photography is my current obsession.", "I've been getting into photography lately.", "I spend most of my free time doing photography."]
};

const s482 = {
  id: 482,
  cat: "Hobbies",
  scene: "leisure",
  text: "I usually spend my weekends hiking in the mountains nearby.",
  words: ["I","usually","spend","my","weekends","hiking","in","the","mountains","nearby"],
  stress: [0.2, 0.7, 1.0, 0.2, 1.0, 1.0, 0.2, 0.1, 1.0, 0.8],
  ipa: "/aɪ ˈjuːʒuəli spend maɪ ˌwiːkˈendz ˈhaɪkɪŋ ɪn ðə ˈmaʊntɪnz ˌnɪəˈbaɪ/",
  meaning: "描述周末安排——具体活动+地点增加画面感",
  cn: "我通常周末去附近的山里徒步。",
  trap: "My weekends I go to walk in the mountains near my home.",
  tip: "SPEND WEEKENDS HIKING 三词一气呵成，MOUNTAINS 和 NEARBY 结尾双重音",
  pattern: "I usually spend my weekends + [verb]ing + in the + [place]",
  variants: ["Most weekends you'll find me on a trail somewhere.", "I hit the mountains whenever I get the chance.", "Weekend hikes are pretty much my routine."]
};

const s483 = {
  id: 483,
  cat: "Hobbies",
  scene: "leisure",
  text: "Reading is something I try to do every single day.",
  words: ["Reading","is","something","I","try","to","do","every","single","day"],
  stress: [1.0, 0.2, 0.5, 0.2, 0.8, 0.1, 0.5, 0.5, 1.0, 1.0],
  ipa: "/ˈriːdɪŋ ɪz ˈsʌmθɪŋ aɪ traɪ tə duː ˈevri ˈsɪŋɡl deɪ/",
  meaning: "用 something I try to do 表达习惯——比 I read every day 更自然",
  cn: "阅读是我每天都尽量做的事。",
  trap: "I try to read every day.",
  tip: "READING 开头主题重读，EVERY SINGLE DAY 三词递进强调",
  pattern: "[Hobby] is something I try to do every + [time]",
  variants: ["I make a point of reading daily.", "A day without reading feels incomplete.", "I always carve out time for a good book."]
};

const s484 = {
  id: 484,
  cat: "Hobbies",
  scene: "leisure",
  text: "I picked up cooking during lockdown and I've stuck with it since.",
  words: ["I","picked","up","cooking","during","lockdown","and","I've","stuck","with","it","since"],
  stress: [0.2, 1.0, 0.8, 1.0, 0.3, 1.0, 0.1, 0.2, 1.0, 0.3, 0.1, 0.7],
  ipa: "/aɪ pɪkt ʌp ˈkʊkɪŋ ˈdjʊərɪŋ ˈlɒkdaʊn ənd aɪv stʌk wɪð ɪt sɪns/",
  meaning: "用 picked up 和 stuck with it 两个短语动词——自然地道",
  cn: "我在封城期间学会了做饭，之后就一直坚持着。",
  trap: "I started to learn cooking in the lockdown time, and I continue.",
  tip: "PICKED UP 和 STUCK WITH IT 是两个短语动词，LOCKDOWN 是叙事锚点",
  pattern: "I picked up + [hobby] + during + [event] + and I've stuck with it since",
  variants: ["Lockdown got me into cooking and I never stopped.", "Cooking became a lockdown hobby that stuck.", "I only started cooking in lockdown, but now I love it."]
};

const s485 = {
  id: 485,
  cat: "Hobbies",
  scene: "leisure",
  text: "I wouldn't call myself an expert, but I'm fairly competent.",
  words: ["I","wouldn't","call","myself","an","expert","but","I'm","fairly","competent"],
  stress: [0.2, 0.5, 0.8, 0.5, 0.1, 1.0, 0.3, 0.2, 0.5, 1.0],
  ipa: "/aɪ ˈwʊdnt kɔːl maɪˈself ən ˈekspɜːt bʌt aɪm ˈfɛəli ˈkɒmpɪtənt/",
  meaning: "用谦虚的方式描述自己的水平——英式低调风格",
  cn: "我不会说自己是专家，但还算有两下子。",
  trap: "I am not professional but I am OK level.",
  tip: "WOULDN'T CALL 委婉开头，EXPERT 和 COMPETENT 两个关键形容词对比",
  pattern: "I wouldn't call myself an + [noun], but I'm fairly + [adj]",
  variants: ["I'm decent at it, not amazing.", "I know enough to get by.", "I'm not pro-level, but I can hold my own."]
};

const s486 = {
  id: 486,
  cat: "Hobbies",
  scene: "leisure",
  text: "I find it really therapeutic, especially after a long day.",
  words: ["I","find","it","really","therapeutic","especially","after","a","long","day"],
  stress: [0.2, 0.7, 0.1, 0.7, 1.0, 0.7, 0.5, 0.1, 0.8, 1.0],
  ipa: "/aɪ faɪnd ɪt ˈrɪəli ˌθerəˈpjuːtɪk ɪˈspeʃəli ˈɑːftər ə lɒŋ deɪ/",
  meaning: "用 therapeutic 替代 relaxing——词汇升级",
  cn: "我觉得特别治愈，尤其是在忙了一天之后。",
  trap: "It makes me feel relaxed, more when I am tired.",
  tip: "THERAPEUTIC 四音节重在 -PEU-，ESPECIALLY 和 LONG DAY 构成第二节奏",
  pattern: "I find it really + [adj], especially after a + [adj] + [noun]",
  variants: ["It's incredibly relaxing after work.", "There's nothing more calming after a stressful day.", "It's my way of unwinding and switching off."]
};

const s487 = {
  id: 487,
  cat: "Hobbies",
  scene: "leisure",
  text: "I've always been a bit of an outdoors person, to be fair.",
  words: ["I've","always","been","a","bit","of","an","outdoors","person","to","be","fair"],
  stress: [0.2, 0.7, 0.5, 0.1, 0.5, 0.1, 0.1, 1.0, 1.0, 0.1, 0.2, 0.7],
  ipa: "/aɪv ˈɔːlweɪz biːn ə bɪt əv ən ˈaʊtdɔːz ˈpɜːsən tə bi feə/",
  meaning: "用 a bit of an 来温和描述自己的类型——英式含蓄",
  cn: "说实话，我一直是个比较喜欢户外的人。",
  trap: "I always like outside activities.",
  tip: "a bit of an 快速弱读过渡，OUTDOORS PERSON 是核心信息双重音",
  pattern: "I've always been a bit of an + [noun] + person, to be fair",
  variants: ["I'm an outdoorsy type by nature.", "Being outdoors is kind of my thing.", "I've never been one to stay indoors all day."]
};

const s488 = {
  id: 488,
  cat: "Hobbies",
  scene: "leisure",
  text: "I suppose my guilty pleasure would have to be binge-watching dramas.",
  words: ["I","suppose","my","guilty","pleasure","would","have","to","be","binge-watching","dramas"],
  stress: [0.2, 0.5, 0.2, 1.0, 1.0, 0.3, 0.2, 0.1, 0.2, 1.0, 1.0],
  ipa: "/aɪ səˈpəʊz maɪ ˈɡɪlti ˈpleʒə wʊd hæv tə bi ˈbɪndʒ ˌwɒtʃɪŋ ˈdrɑːməz/",
  meaning: "guilty pleasure 是地道表达——展示文化词汇",
  cn: "如果说有什么不太好意思的爱好，那就是追剧了。",
  trap: "My secret hobby is watching too many TV shows.",
  tip: "GUILTY PLEASURE 作为固定搭配整体重读，BINGE-WATCHING 复合词重在 BINGE",
  pattern: "I suppose my guilty pleasure would have to be + [verb]ing + [noun]",
  variants: ["I'll admit, I'm a total drama addict.", "My guilty pleasure is marathon TV sessions.", "I can't help binge-watching shows, it's my weakness."]
};

const s489 = {
  id: 489,
  cat: "Hobbies",
  scene: "leisure",
  text: "I've recently taken up yoga and it's been a game changer.",
  words: ["I've","recently","taken","up","yoga","and","it's","been","a","game","changer"],
  stress: [0.2, 0.7, 1.0, 0.8, 1.0, 0.1, 0.2, 0.5, 0.1, 1.0, 1.0],
  ipa: "/aɪv ˈriːsntli ˈteɪkən ʌp ˈjəʊɡə ənd ɪts biːn ə ɡeɪm ˈtʃeɪndʒə/",
  meaning: "用 taken up 和 game changer 两个地道表达",
  cn: "我最近开始练瑜伽，简直改变了一切。",
  trap: "I started yoga not long ago, it changed everything.",
  tip: "TAKEN UP 和 YOGA 快速连接，GAME CHANGER 作为评价性结尾重读",
  pattern: "I've recently taken up + [hobby] + and it's been a game changer",
  variants: ["Yoga has been life-changing for me.", "I only started yoga recently, but I'm hooked.", "Taking up yoga was one of the best decisions I've made."]
};

const s490 = {
  id: 490,
  cat: "Hobbies",
  scene: "leisure",
  text: "I used to play the piano when I was younger, but I gave it up.",
  words: ["I","used","to","play","the","piano","when","I","was","younger","but","I","gave","it","up"],
  stress: [0.2, 0.5, 0.1, 1.0, 0.1, 1.0, 0.3, 0.2, 0.3, 1.0, 0.3, 0.2, 1.0, 0.1, 0.7],
  ipa: "/aɪ juːst tə pleɪ ðə piˈænəʊ wen aɪ wɒz ˈjʌŋɡə bʌt aɪ ɡeɪv ɪt ʌp/",
  meaning: "used to 描述过去的习惯——语法精准展示",
  cn: "小时候弹过钢琴，后来放弃了。",
  trap: "Before I played piano but I stopped.",
  tip: "USED TO 快速弱读，PLAY PIANO 第一组重音，YOUNGER 转折点，GAVE IT UP 收尾",
  pattern: "I used to + [verb] + when I was younger, but I gave it up",
  variants: ["I played piano as a kid but dropped it.", "Piano was my thing growing up, but I drifted away from it.", "I had piano lessons for years but eventually stopped."]
};

const s491 = {
  id: 491,
  cat: "Hobbies",
  scene: "leisure",
  text: "I'm the kind of person who needs to stay active to feel good.",
  words: ["I'm","the","kind","of","person","who","needs","to","stay","active","to","feel","good"],
  stress: [0.2, 0.1, 1.0, 0.1, 1.0, 0.2, 0.8, 0.1, 0.7, 1.0, 0.1, 0.8, 1.0],
  ipa: "/aɪm ðə kaɪnd əv ˈpɜːsən huː niːdz tə steɪ ˈæktɪv tə fiːl ɡʊd/",
  meaning: "用 the kind of person who 描述自己的类型——自然的自我介绍",
  cn: "我是那种需要保持运动才能感觉好的人。",
  trap: "I need exercise to feel happy.",
  tip: "KIND OF PERSON 是主语定义，NEEDS、ACTIVE、FEEL GOOD 三个递进重音",
  pattern: "I'm the kind of person who needs to + [verb] + to + [verb]",
  variants: ["I have to stay active or I go stir-crazy.", "Sitting still drives me mad — I need to move.", "Physical activity is essential for my mental health."]
};

const s492 = {
  id: 492,
  cat: "Hobbies",
  scene: "leisure",
  text: "What appeals to me about it is the sense of achievement.",
  words: ["What","appeals","to","me","about","it","is","the","sense","of","achievement"],
  stress: [0.3, 1.0, 0.1, 0.3, 0.3, 0.1, 0.2, 0.1, 1.0, 0.1, 1.0],
  ipa: "/wɒt əˈpiːlz tə miː əˈbaʊt ɪt ɪz ðə sens əv əˈtʃiːvmənt/",
  meaning: "用 appeals to me 替代 I like——高级用法",
  cn: "它吸引我的地方是那种成就感。",
  trap: "I like it because I feel success.",
  tip: "APPEALS 重在 -PEALS，SENSE 和 ACHIEVEMENT 是核心信息双重音",
  pattern: "What appeals to me about it is the sense of + [noun]",
  variants: ["The satisfaction of completing something is what draws me in.", "I love the feeling of accomplishment it gives me.", "There's a real sense of reward that keeps me coming back."]
};

const s493 = {
  id: 493,
  cat: "Hobbies",
  scene: "leisure",
  text: "I tend to alternate between active and more relaxing hobbies.",
  words: ["I","tend","to","alternate","between","active","and","more","relaxing","hobbies"],
  stress: [0.2, 0.7, 0.1, 1.0, 0.3, 1.0, 0.1, 0.5, 0.8, 1.0],
  ipa: "/aɪ tend tə ˈɔːltəneɪt bɪˈtwiːn ˈæktɪv ənd mɔː rɪˈlæksɪŋ ˈhɒbiz/",
  meaning: "用 alternate between 展示多样性——比列举更高级",
  cn: "我倾向于在运动型和放松型爱好之间交替。",
  trap: "I do some active hobbies and some quiet hobbies.",
  tip: "ALTERNATE 动词重在第一音节，ACTIVE 和 RELAXING 构成对比重音",
  pattern: "I tend to alternate between + [adj] + and + [adj] + hobbies",
  variants: ["I like to mix things up between physical and creative stuff.", "Some days I want action, other days I just want to chill.", "I balance intense activities with quieter ones."]
};

const s494 = {
  id: 494,
  cat: "Hobbies",
  scene: "leisure",
  text: "It's not something I'm particularly good at, but I enjoy the process.",
  words: ["It's","not","something","I'm","particularly","good","at","but","I","enjoy","the","process"],
  stress: [0.2, 0.5, 0.5, 0.2, 0.8, 1.0, 0.3, 0.3, 0.2, 1.0, 0.1, 1.0],
  ipa: "/ɪts nɒt ˈsʌmθɪŋ aɪm pəˈtɪkjʊləli ɡʊd ət bʌt aɪ ɪnˈdʒɔɪ ðə ˈprəʊses/",
  meaning: "用 but 转折强调享受过程——成熟的态度",
  cn: "我不是特别擅长，但我享受这个过程。",
  trap: "I am not good at it but I still like doing it.",
  tip: "PARTICULARLY GOOD 是谦虚表达，ENJOY 和 PROCESS 是转折后的重音",
  pattern: "It's not something I'm particularly good at, but I enjoy the + [noun]",
  variants: ["I'm terrible at it, but that's not the point.", "It's more about the fun than the results for me.", "Being bad at something hasn't stopped me from loving it."]
};

const s495 = {
  id: 495,
  cat: "Hobbies",
  scene: "leisure",
  text: "I got into it through a friend, and now I'm completely hooked.",
  words: ["I","got","into","it","through","a","friend","and","now","I'm","completely","hooked"],
  stress: [0.2, 0.5, 0.5, 0.1, 0.5, 0.1, 1.0, 0.1, 0.5, 0.2, 0.7, 1.0],
  ipa: "/aɪ ɡɒt ˈɪntə ɪt θruː ə frend ənd naʊ aɪm kəmˈpliːtli hʊkt/",
  meaning: "讲述兴趣的起源——through a friend 和 hooked 两个地道表达",
  cn: "是朋友带我入坑的，现在完全上瘾了。",
  trap: "My friend introduced me and now I cannot stop.",
  tip: "GOT INTO IT 快速连读，FRIEND 是叙事重音，COMPLETELY HOOKED 感情高潮",
  pattern: "I got into it through + [person], and now I'm completely hooked",
  variants: ["A friend introduced me to it and I've been obsessed since.", "It all started because of a friend, and I got addicted.", "One friend changed everything — now I can't get enough."]
};

const s496 = {
  id: 496,
  cat: "Hobbies",
  scene: "leisure",
  text: "If I had more free time, I'd probably learn to play guitar.",
  words: ["If","I","had","more","free","time","I'd","probably","learn","to","play","guitar"],
  stress: [0.2, 0.2, 0.5, 0.8, 1.0, 1.0, 0.3, 0.5, 1.0, 0.1, 0.7, 1.0],
  ipa: "/ɪf aɪ hæd mɔː friː taɪm aɪd ˈprɒbəbli lɜːn tə pleɪ ɡɪˈtɑː/",
  meaning: "用第二条件句表达假设愿望——语法加分",
  cn: "如果有更多空闲时间的话，我大概会学吉他。",
  trap: "If I have time, I want to learn guitar.",
  tip: "If I had 快速设定假设，FREE TIME 双词重音，LEARN PLAY GUITAR 三词一气",
  pattern: "If I had more free time, I'd probably + [verb phrase]",
  variants: ["Guitar is on my bucket list when I find the time.", "I'd love to pick up an instrument if time allowed.", "Learning guitar is something I keep meaning to do."]
};

const s497 = {
  id: 497,
  cat: "Hobbies",
  scene: "leisure",
  text: "I'd say swimming is my go-to activity when I need to clear my head.",
  words: ["I'd","say","swimming","is","my","go-to","activity","when","I","need","to","clear","my","head"],
  stress: [0.3, 0.5, 1.0, 0.2, 0.2, 1.0, 0.8, 0.2, 0.2, 0.7, 0.1, 1.0, 0.2, 1.0],
  ipa: "/aɪd seɪ ˈswɪmɪŋ ɪz maɪ ˈɡəʊtuː ækˈtɪvɪti wen aɪ niːd tə klɪə maɪ hed/",
  meaning: "用 go-to 和 clear my head 两个地道表达",
  cn: "我会说游泳是我清理思绪时的首选活动。",
  trap: "When I want to feel relaxed, I always choose swimming.",
  tip: "SWIMMING 和 GO-TO 第一组重音，CLEAR MY HEAD 习语整体连读",
  pattern: "I'd say + [activity] + is my go-to + [noun] + when I need to + [verb phrase]",
  variants: ["Swimming is what I turn to when I need to decompress.", "Nothing clears my head like a good swim.", "When things get stressful, I head straight for the pool."]
};

const s498 = {
  id: 498,
  cat: "Hobbies",
  scene: "leisure",
  text: "I'm not really a team sports kind of person, to be honest.",
  words: ["I'm","not","really","a","team","sports","kind","of","person","to","be","honest"],
  stress: [0.2, 0.5, 0.7, 0.1, 1.0, 1.0, 0.8, 0.1, 1.0, 0.1, 0.2, 0.7],
  ipa: "/aɪm nɒt ˈrɪəli ə tiːm spɔːts kaɪnd əv ˈpɜːsən tə bi ˈɒnɪst/",
  meaning: "表达对团队运动的偏好——温和否定",
  cn: "说实话，我不太是那种团队运动的人。",
  trap: "I don't like playing sports with many people.",
  tip: "TEAM SPORTS 双词重音，KIND OF PERSON 是类型定义，to be honest 坦诚收尾",
  pattern: "I'm not really a + [noun] + kind of person, to be honest",
  variants: ["Team sports aren't really my thing.", "I prefer individual activities to team ones.", "I've never been big on team sports, honestly."]
};

const s499 = {
  id: 499,
  cat: "Hobbies",
  scene: "leisure",
  text: "It's become more of a lifestyle than just a hobby for me.",
  words: ["It's","become","more","of","a","lifestyle","than","just","a","hobby","for","me"],
  stress: [0.2, 0.7, 0.8, 0.1, 0.1, 1.0, 0.3, 0.5, 0.1, 1.0, 0.1, 0.3],
  ipa: "/ɪts bɪˈkʌm mɔːr əv ə ˈlaɪfstaɪl ðən dʒʌst ə ˈhɒbi fə miː/",
  meaning: "区分 lifestyle 和 hobby——展示深度理解",
  cn: "对我来说，它已经不只是爱好了，更像是一种生活方式。",
  trap: "It is not only a hobby, it is my life way.",
  tip: "LIFESTYLE 和 HOBBY 是对比关系的两个重音词",
  pattern: "It's become more of a + [noun] + than just a + [noun] + for me",
  variants: ["What started as a hobby is now a way of life.", "I don't see it as a hobby any more — it's who I am.", "It's evolved from a pastime into something much bigger."]
};

const s500 = {
  id: 500,
  cat: "Hobbies",
  scene: "leisure",
  text: "I love the social side of it — you meet such interesting people.",
  words: ["I","love","the","social","side","of","it","you","meet","such","interesting","people"],
  stress: [0.2, 1.0, 0.1, 1.0, 1.0, 0.1, 0.1, 0.3, 1.0, 0.5, 1.0, 1.0],
  ipa: "/aɪ lʌv ðə ˈsəʊʃəl saɪd əv ɪt juː miːt sʌtʃ ˈɪntrɪstɪŋ ˈpiːpl/",
  meaning: "强调爱好的社交面——展示多维思考",
  cn: "我很喜欢它的社交方面——能遇到很多有趣的人。",
  trap: "I like this hobby's social part, I can know many interesting people.",
  tip: "SOCIAL SIDE 双词重音，MEET、INTERESTING、PEOPLE 三连重音收尾",
  pattern: "I love the + [adj] + side of it — you meet such + [adj] + people",
  variants: ["The community aspect is fantastic.", "It's a great way to connect with like-minded people.", "Half the fun is the people you meet along the way."]
};

const s501 = {
  id: 501,
  cat: "Hobbies",
  scene: "leisure",
  text: "I find that gardening forces me to slow down and be patient.",
  words: ["I","find","that","gardening","forces","me","to","slow","down","and","be","patient"],
  stress: [0.2, 0.7, 0.1, 1.0, 1.0, 0.2, 0.1, 1.0, 0.7, 0.1, 0.3, 1.0],
  ipa: "/aɪ faɪnd ðət ˈɡɑːdnɪŋ ˈfɔːsɪz miː tə sləʊ daʊn ənd bi ˈpeɪʃənt/",
  meaning: "用 forces me to 表达爱好带来的积极影响",
  cn: "我发现园艺迫使我慢下来，学会耐心。",
  trap: "Gardening makes me become slow and wait.",
  tip: "GARDENING FORCES 双词重读，SLOW DOWN 和 PATIENT 是结果双重音",
  pattern: "I find that + [hobby] + forces me to + [verb] + and + [verb]",
  variants: ["Gardening teaches you patience like nothing else.", "There's no rushing nature — gardening reminds me of that.", "It's a hobby that demands patience, and I love that about it."]
};

const s502 = {
  id: 502,
  cat: "Hobbies",
  scene: "leisure",
  text: "I'm a massive football fan — I never miss a match.",
  words: ["I'm","a","massive","football","fan","I","never","miss","a","match"],
  stress: [0.2, 0.1, 1.0, 1.0, 1.0, 0.2, 0.8, 1.0, 0.1, 1.0],
  ipa: "/aɪm ə ˈmæsɪv ˈfʊtbɔːl fæn aɪ ˈnevə mɪs ə mætʃ/",
  meaning: "用 massive 替代 big——英式口语高频词",
  cn: "我是超级足球迷——从不错过比赛。",
  trap: "I am a very big fan of football, I watch all games.",
  tip: "MASSIVE FOOTBALL FAN 三连重读表热情，NEVER MISS MATCH 快节奏收尾",
  pattern: "I'm a massive + [noun] + fan — I never miss a + [noun]",
  variants: ["Football is my absolute passion — I watch every game.", "I'm obsessed with football, honestly.", "You could call me a die-hard football supporter."]
};

const s503 = {
  id: 503,
  cat: "Hobbies",
  scene: "leisure",
  text: "I've been meaning to try rock climbing for ages, but I haven't got round to it.",
  words: ["I've","been","meaning","to","try","rock","climbing","for","ages","but","I","haven't","got","round","to","it"],
  stress: [0.2, 0.3, 1.0, 0.1, 0.8, 1.0, 1.0, 0.1, 1.0, 0.3, 0.2, 0.5, 0.5, 1.0, 0.1, 0.2],
  ipa: "/aɪv biːn ˈmiːnɪŋ tə traɪ rɒk ˈklaɪmɪŋ fər ˈeɪdʒɪz bʌt aɪ ˈhævnt ɡɒt raʊnd tə ɪt/",
  meaning: "用 been meaning to 和 got round to it 两个英式短语",
  cn: "我一直想去攀岩，但一直没找到机会。",
  trap: "I want to try climbing rocks for a long time, but I didn't do it.",
  tip: "MEANING 和 ROCK CLIMBING 是意愿重音，GOT ROUND TO IT 英式固定搭配",
  pattern: "I've been meaning to try + [activity] + for ages, but I haven't got round to it",
  variants: ["Rock climbing is on my to-do list but I keep putting it off.", "I keep saying I'll try climbing, but it never happens.", "It's something I've wanted to do forever but never actually have."]
};

const s504 = {
  id: 504,
  cat: "Hobbies",
  scene: "leisure",
  text: "The beauty of running is that you can do it absolutely anywhere.",
  words: ["The","beauty","of","running","is","that","you","can","do","it","absolutely","anywhere"],
  stress: [0.1, 1.0, 0.1, 1.0, 0.2, 0.1, 0.2, 0.5, 0.5, 0.1, 0.8, 1.0],
  ipa: "/ðə ˈbjuːti əv ˈrʌnɪŋ ɪz ðət juː kən duː ɪt ˈæbsəluːtli ˈenɪweə/",
  meaning: "用 the beauty of 引出优点——优雅的表达方式",
  cn: "跑步的美妙之处在于你在哪儿都能跑。",
  trap: "Running is good because you can run in all places.",
  tip: "BEAUTY 和 RUNNING 双词重音开头，ABSOLUTELY ANYWHERE 结尾升调强调",
  pattern: "The beauty of + [activity] + is that you can + [verb phrase]",
  variants: ["What I love about running is how accessible it is.", "You don't need anything special to go for a run.", "Running is the ultimate no-excuses activity."]
};

const s505 = {
  id: 505,
  cat: "Hobbies",
  scene: "leisure",
  text: "I don't really get much time for hobbies during the week, unfortunately.",
  words: ["I","don't","really","get","much","time","for","hobbies","during","the","week","unfortunately"],
  stress: [0.2, 0.5, 0.5, 0.5, 0.7, 1.0, 0.1, 1.0, 0.3, 0.1, 1.0, 0.8],
  ipa: "/aɪ dəʊnt ˈrɪəli ɡet mʌtʃ taɪm fə ˈhɒbiz ˈdjʊərɪŋ ðə wiːk ʌnˈfɔːtʃənɪtli/",
  meaning: "坦诚时间不足——unfortunately 增加遗憾感",
  cn: "工作日真的没什么时间搞爱好，很可惜。",
  trap: "On weekdays I am too busy to do hobbies.",
  tip: "TIME 和 HOBBIES 是两个信息焦点，UNFORTUNATELY 四音节结尾表遗憾",
  pattern: "I don't really get much time for + [noun] + during the week, unfortunately",
  variants: ["Weekdays are too packed for hobbies.", "Finding time during the week is the hard part.", "My weekday schedule doesn't leave much room for fun."]
};

const s506 = {
  id: 506,
  cat: "Hobbies",
  scene: "leisure",
  text: "I collect vinyl records — there's something special about the sound quality.",
  words: ["I","collect","vinyl","records","there's","something","special","about","the","sound","quality"],
  stress: [0.2, 0.8, 1.0, 1.0, 0.3, 0.5, 1.0, 0.3, 0.1, 1.0, 1.0],
  ipa: "/aɪ kəˈlekt ˈvaɪnəl ˈrekɔːdz ðeəz ˈsʌmθɪŋ ˈspeʃəl əˈbaʊt ðə saʊnd ˈkwɒlɪti/",
  meaning: "描述收藏爱好——展示文化品味",
  cn: "我收藏黑胶唱片——音质真的有种特别的感觉。",
  trap: "I buy old music discs because the sound is better.",
  tip: "VINYL RECORDS 双词重音，SPECIAL 和 SOUND QUALITY 是第二信息组",
  pattern: "I collect + [noun] — there's something special about the + [noun]",
  variants: ["Vinyl has a warmth that digital just can't match.", "There's a magic to putting on a record.", "Record collecting is an obsession I'll never shake."]
};

const s507 = {
  id: 507,
  cat: "Hobbies",
  scene: "leisure",
  text: "On a typical Saturday, you'd find me pottering about in the kitchen.",
  words: ["On","a","typical","Saturday","you'd","find","me","pottering","about","in","the","kitchen"],
  stress: [0.2, 0.1, 1.0, 1.0, 0.3, 0.7, 0.2, 1.0, 0.5, 0.2, 0.1, 1.0],
  ipa: "/ɒn ə ˈtɪpɪkəl ˈsætədeɪ juːd faɪnd miː ˈpɒtərɪŋ əˈbaʊt ɪn ðə ˈkɪtʃɪn/",
  meaning: "用 pottering about 展示英式表达——生活化描述",
  cn: "典型的周六，你会看到我在厨房里晃悠着做做东西。",
  trap: "On Saturday I usually do small things in the kitchen.",
  tip: "TYPICAL SATURDAY 设定时间场景，POTTERING 是英式口语高频词，KITCHEN 收尾",
  pattern: "On a typical + [day], you'd find me + [verb]ing + in the + [place]",
  variants: ["Saturdays are my kitchen days.", "I love spending Saturday mornings cooking.", "You'll usually catch me in the kitchen on a Saturday."]
};

const s508 = {
  id: 508,
  cat: "Hobbies",
  scene: "leisure",
  text: "I think hobbies are essential for mental wellbeing, personally.",
  words: ["I","think","hobbies","are","essential","for","mental","wellbeing","personally"],
  stress: [0.2, 0.5, 1.0, 0.2, 1.0, 0.1, 0.8, 1.0, 0.7],
  ipa: "/aɪ θɪŋk ˈhɒbiz ɑːr ɪˈsenʃəl fə ˈmentəl ˌwelˈbiːɪŋ ˈpɜːsənəli/",
  meaning: "表达关于爱好价值的观点——展示深度思考",
  cn: "我个人觉得爱好对心理健康至关重要。",
  trap: "I think having hobbies is very important for the mind.",
  tip: "HOBBIES 和 ESSENTIAL 第一组重音，MENTAL WELLBEING 第二组，PERSONALLY 个人立场",
  pattern: "I think + [noun] + are essential for + [noun], personally",
  variants: ["Everyone needs an outlet outside of work.", "Hobbies keep you sane, honestly.", "Having something you enjoy is crucial for your headspace."]
};

const s509 = {
  id: 509,
  cat: "Hobbies",
  scene: "leisure",
  text: "I've been trying to get into meditation, but I find it quite hard to focus.",
  words: ["I've","been","trying","to","get","into","meditation","but","I","find","it","quite","hard","to","focus"],
  stress: [0.2, 0.3, 1.0, 0.1, 0.5, 0.3, 1.0, 0.3, 0.2, 0.7, 0.1, 0.5, 1.0, 0.1, 1.0],
  ipa: "/aɪv biːn ˈtraɪɪŋ tə ɡet ˈɪntə ˌmedɪˈteɪʃən bʌt aɪ faɪnd ɪt kwaɪt hɑːd tə ˈfəʊkəs/",
  meaning: "用 been trying to 展示持续努力——坦诚困难",
  cn: "我一直在尝试冥想，但发现很难集中注意力。",
  trap: "I try to do meditation but I cannot concentrate.",
  tip: "TRYING 和 MEDITATION 第一组重音，HARD 和 FOCUS 是困难描述的重音",
  pattern: "I've been trying to get into + [activity], but I find it quite hard to + [verb]",
  variants: ["Meditation is something I struggle with, honestly.", "I want to meditate more, but my mind keeps wandering.", "Sitting still with my thoughts is harder than it sounds."]
};

const s510 = {
  id: 510,
  cat: "Hobbies",
  scene: "leisure",
  text: "All in all, I think having varied interests keeps life interesting.",
  words: ["All","in","all","I","think","having","varied","interests","keeps","life","interesting"],
  stress: [0.5, 0.1, 0.7, 0.2, 0.5, 0.5, 1.0, 1.0, 0.8, 1.0, 1.0],
  ipa: "/ɔːl ɪn ɔːl aɪ θɪŋk ˈhævɪŋ ˈveərid ˈɪntrɪsts kiːps laɪf ˈɪntrɪstɪŋ/",
  meaning: "用 all in all 做总结——成熟的收尾技巧",
  cn: "总而言之，我觉得兴趣广泛能让生活更有意思。",
  trap: "In total, I think many hobbies make life good.",
  tip: "All in all 快速过渡，VARIED INTERESTS 和 LIFE INTERESTING 两组对称重音",
  pattern: "All in all, I think + [verb]ing + [adj] + [noun] + keeps life + [adj]",
  variants: ["A range of hobbies keeps things fresh.", "Variety is the spice of life, as they say.", "The more interests you have, the richer your life becomes."]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY17 = [
  s481, s482, s483, s484, s485, s486, s487, s488, s489, s490,
  s491, s492, s493, s494, s495, s496, s497, s498, s499, s500,
  s501, s502, s503, s504, s505, s506, s507, s508, s509, s510
];

export const SCENES_DAY17 = {
  481: { icon: "📷", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  482: { icon: "🥾", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  483: { icon: "📚", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  484: { icon: "🍳", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  485: { icon: "🎯", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  486: { icon: "🧘", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  487: { icon: "🏕️", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  488: { icon: "📺", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  489: { icon: "🧘‍♀️", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  490: { icon: "🎹", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  491: { icon: "🏃", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  492: { icon: "🏆", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  493: { icon: "🔄", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  494: { icon: "🎨", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  495: { icon: "🎣", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  496: { icon: "🎸", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  497: { icon: "🏊", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  498: { icon: "🏟️", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  499: { icon: "💪", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  500: { icon: "🤝", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  501: { icon: "🌱", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  502: { icon: "⚽", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  503: { icon: "🧗", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  504: { icon: "👟", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  505: { icon: "⏰", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  506: { icon: "🎵", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  507: { icon: "🍰", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  508: { icon: "💭", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  509: { icon: "🧠", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" },
  510: { icon: "🌟", colors: ["#f97316","#fb923c"], title: "FREE TIME", sub: "IELTS Part 1 · Hobbies" }
};
