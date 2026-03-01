// ─── Day 21 · IELTS Part 2 — Describing Experiences ─────────────
// 30 sentences (id 601-630) · Band 7-7.5 · Discourse markers, narrative

const s601 = {
  id: 601,
  cat: "Experience",
  scene: "story",
  text: "I'd like to talk about the time I went backpacking through Southeast Asia.",
  words: ["I'd","like","to","talk","about","the","time","I","went","backpacking","through","Southeast","Asia"],
  stress: [0.3, 0.5, 0.1, 1.0, 0.3, 0.1, 0.8, 0.2, 0.5, 1.0, 0.3, 1.0, 1.0],
  ipa: "/aɪd laɪk tə tɔːk əˈbaʊt ðə taɪm aɪ went ˈbækpækɪŋ θruː ˌsaʊθˈiːst ˈeɪʒə/",
  meaning: "Part2 标准开场——I'd like to talk about 模板句",
  cn: "我想说的是我在东南亚背包旅行的那次经历。",
  trap: "I want to say about my travel in Southeast Asia.",
  tip: "I'd like to talk about 快速过渡，BACKPACKING 和 SOUTHEAST ASIA 是两个场景重音",
  pattern: "I'd like to talk about the time I + [verb phrase]",
  variants: ["The experience I want to describe is my backpacking trip.", "What comes to mind is my journey through Southeast Asia.", "Let me tell you about my backpacking adventure."]
};

const s602 = {
  id: 602,
  cat: "Experience",
  scene: "story",
  text: "To give you some background, this happened roughly three years ago.",
  words: ["To","give","you","some","background","this","happened","roughly","three","years","ago"],
  stress: [0.1, 0.5, 0.2, 0.3, 1.0, 0.3, 1.0, 0.7, 0.8, 1.0, 0.5],
  ipa: "/tə ɡɪv juː sʌm ˈbækɡraʊnd ðɪs ˈhæpənd ˈrʌfli θriː jɪəz əˈɡəʊ/",
  meaning: "用 to give you some background 设定场景——Part2 必备过渡句",
  cn: "给你一些背景，这件事大概发生在三年前。",
  trap: "For background information, it was about three years before.",
  tip: "BACKGROUND 设定信息重读，HAPPENED 和 THREE YEARS AGO 时间线重音",
  pattern: "To give you some background, this happened roughly + [time] + ago",
  variants: ["Just to set the scene, this was about three years back.", "So a bit of context — this took place around three years ago.", "I should mention this was back in twenty-twenty-three."]
};

const s603 = {
  id: 603,
  cat: "Experience",
  scene: "story",
  text: "The reason I chose this particular experience is that it completely changed my perspective.",
  words: ["The","reason","I","chose","this","particular","experience","is","that","it","completely","changed","my","perspective"],
  stress: [0.1, 1.0, 0.2, 0.7, 0.3, 0.8, 1.0, 0.2, 0.1, 0.2, 0.7, 1.0, 0.2, 1.0],
  ipa: "/ðə ˈriːzən aɪ tʃəʊz ðɪs pəˈtɪkjʊlər ɪkˈspɪəriəns ɪz ðət ɪt kəmˈpliːtli tʃeɪndʒd maɪ pəˈspektɪv/",
  meaning: "解释选题原因——展示反思深度",
  cn: "我选这个经历的原因是它完全改变了我的看法。",
  trap: "I talk about this because it made me think differently.",
  tip: "REASON 开头逻辑连接，PARTICULAR EXPERIENCE 限定词+名词，CHANGED PERSPECTIVE 结果重音",
  pattern: "The reason I chose this particular experience is that it + [verb phrase]",
  variants: ["I picked this because it was genuinely transformative.", "This experience stands out because it shifted my worldview.", "What makes this worth talking about is how it changed me."]
};

const s604 = {
  id: 604,
  cat: "Experience",
  scene: "story",
  text: "Firstly, what struck me was how different the pace of life was there.",
  words: ["Firstly","what","struck","me","was","how","different","the","pace","of","life","was","there"],
  stress: [0.8, 0.5, 1.0, 0.3, 0.3, 0.5, 1.0, 0.1, 1.0, 0.1, 1.0, 0.3, 0.5],
  ipa: "/ˈfɜːstli wɒt strʌk miː wɒz haʊ ˈdɪfrənt ðə peɪs əv laɪf wɒz ðeə/",
  meaning: "用 firstly 和 what struck me 开始叙述——高分语篇标记",
  cn: "首先，让我印象深刻的是那里的生活节奏有多不同。",
  trap: "First, I was surprised the life speed was very different.",
  tip: "FIRSTLY 语篇标记开头，STRUCK 情感动词重读，DIFFERENT PACE LIFE 三连重音",
  pattern: "Firstly, what struck me was how + [adj] + the + [noun] + was",
  variants: ["The first thing I noticed was the completely different rhythm of life.", "What immediately caught my attention was the laid-back lifestyle.", "Right away, I was struck by how slowly everything moved."]
};

const s605 = {
  id: 605,
  cat: "Experience",
  scene: "story",
  text: "Furthermore, I got the chance to interact with locals in a really meaningful way.",
  words: ["Furthermore","I","got","the","chance","to","interact","with","locals","in","a","really","meaningful","way"],
  stress: [0.8, 0.2, 0.5, 0.1, 1.0, 0.1, 1.0, 0.2, 1.0, 0.2, 0.1, 0.5, 1.0, 0.7],
  ipa: "/ˌfɜːðəˈmɔː aɪ ɡɒt ðə tʃɑːns tə ˌɪntərˈækt wɪð ˈləʊkəlz ɪn ə ˈrɪəli ˈmiːnɪŋfəl weɪ/",
  meaning: "用 furthermore 推进叙述——学术语篇标记",
  cn: "此外，我有机会以一种非常有意义的方式和当地人互动。",
  trap: "Also, I could talk to local people in an important way.",
  tip: "FURTHERMORE 语篇标记，CHANCE 和 INTERACT 双重音，LOCALS 和 MEANINGFUL 结尾双重音",
  pattern: "Furthermore, I got the chance to + [verb] + with + [noun] + in a really + [adj] + way",
  variants: ["On top of that, meeting locals was the real highlight.", "What made it even better was the genuine connections I made.", "The interactions with local people added another dimension entirely."]
};

const s606 = {
  id: 606,
  cat: "Experience",
  scene: "story",
  text: "In terms of the impact it had on me, I'd say it was absolutely life-changing.",
  words: ["In","terms","of","the","impact","it","had","on","me","I'd","say","it","was","absolutely","life-changing"],
  stress: [0.2, 0.5, 0.1, 0.1, 1.0, 0.1, 0.5, 0.2, 0.3, 0.3, 0.5, 0.2, 0.3, 0.7, 1.0],
  ipa: "/ɪn tɜːmz əv ðə ˈɪmpækt ɪt hæd ɒn miː aɪd seɪ ɪt wɒz ˈæbsəluːtli ˈlaɪftʃeɪndʒɪŋ/",
  meaning: "用 in terms of 限定评价范围——结构化表达",
  cn: "就对我的影响而言，我会说那绝对是改变人生的。",
  trap: "About how it affected me, I think it changed my life completely.",
  tip: "IN TERMS OF 过渡连接，IMPACT 核心名词，ABSOLUTELY LIFE-CHANGING 情感高潮",
  pattern: "In terms of the impact it had on me, I'd say it was + [adv] + [adj]",
  variants: ["The impact was profound — it genuinely altered my outlook.", "It was one of those experiences that reshapes how you see the world.", "Looking back, it was a defining moment in my life."]
};

const s607 = {
  id: 607,
  cat: "Experience",
  scene: "story",
  text: "Looking back on it now, I realise just how much I've grown since then.",
  words: ["Looking","back","on","it","now","I","realise","just","how","much","I've","grown","since","then"],
  stress: [0.7, 1.0, 0.2, 0.1, 0.5, 0.2, 1.0, 0.5, 0.5, 1.0, 0.2, 1.0, 0.3, 0.5],
  ipa: "/ˈlʊkɪŋ bæk ɒn ɪt naʊ aɪ ˈrɪəlaɪz dʒʌst haʊ mʌtʃ aɪv ɡrəʊn sɪns ðen/",
  meaning: "用 looking back 进行反思——Part2 高分结尾技巧",
  cn: "现在回头看，我意识到自己从那以后成长了很多。",
  trap: "When I think about the past, I know I changed a lot.",
  tip: "LOOKING BACK 反思开头，REALISE 关键动词，MUCH GROWN 成长的双重音",
  pattern: "Looking back on it now, I realise just how much I've + [verb] + since then",
  variants: ["With hindsight, I can see how much I've developed.", "Reflecting on it, the personal growth has been enormous.", "I'm a different person because of that experience."]
};

const s608 = {
  id: 608,
  cat: "Experience",
  scene: "story",
  text: "What made it particularly memorable was the people I met along the way.",
  words: ["What","made","it","particularly","memorable","was","the","people","I","met","along","the","way"],
  stress: [0.3, 0.7, 0.1, 0.7, 1.0, 0.3, 0.1, 1.0, 0.2, 1.0, 0.5, 0.1, 0.7],
  ipa: "/wɒt meɪd ɪt pəˈtɪkjʊləli ˈmemərəbl wɒz ðə ˈpiːpl aɪ met əˈlɒŋ ðə weɪ/",
  meaning: "用 what made it memorable 主语从句——展示复杂结构",
  cn: "让这段经历特别难忘的是一路上遇到的人。",
  trap: "The thing I remember most is the people I saw.",
  tip: "PARTICULARLY MEMORABLE 评价双重音，PEOPLE MET 人物重音，ALONG THE WAY 收尾",
  pattern: "What made it particularly + [adj] + was the + [noun] + I + [verb] + along the way",
  variants: ["The people are what I remember most vividly.", "It was the human connections that made it unforgettable.", "The experiences would have been nothing without the people."]
};

const s609 = {
  id: 609,
  cat: "Experience",
  scene: "story",
  text: "I distinctly remember feeling completely overwhelmed by the beauty of the landscape.",
  words: ["I","distinctly","remember","feeling","completely","overwhelmed","by","the","beauty","of","the","landscape"],
  stress: [0.2, 0.8, 1.0, 0.5, 0.7, 1.0, 0.2, 0.1, 1.0, 0.1, 0.1, 1.0],
  ipa: "/aɪ dɪˈstɪŋktli rɪˈmembə ˈfiːlɪŋ kəmˈpliːtli ˌəʊvəˈwelmd baɪ ðə ˈbjuːti əv ðə ˈlændskeɪp/",
  meaning: "用 distinctly remember 强化记忆细节——高分叙事技巧",
  cn: "我清楚地记得被那里的风景之美彻底震撼的感觉。",
  trap: "I clearly remember the nature was so beautiful I was shocked.",
  tip: "DISTINCTLY REMEMBER 记忆强调，OVERWHELMED 情感高峰，BEAUTY LANDSCAPE 场景双重音",
  pattern: "I distinctly remember feeling + [adv] + [adj] + by the + [noun]",
  variants: ["The scenery left me genuinely speechless.", "I'll never forget how breathtaking the landscape was.", "The sheer beauty of it all is seared into my memory."]
};

const s610 = {
  id: 610,
  cat: "Experience",
  scene: "story",
  text: "At the time, I didn't fully appreciate the significance of what was happening.",
  words: ["At","the","time","I","didn't","fully","appreciate","the","significance","of","what","was","happening"],
  stress: [0.2, 0.1, 0.7, 0.2, 0.5, 0.7, 1.0, 0.1, 1.0, 0.1, 0.5, 0.3, 1.0],
  ipa: "/ət ðə taɪm aɪ ˈdɪdnt ˈfʊli əˈpriːʃieɪt ðə sɪɡˈnɪfɪkəns əv wɒt wɒz ˈhæpənɪŋ/",
  meaning: "用 at the time 进行时间对比——展示反思能力",
  cn: "当时我并没有完全意识到正在发生之事的重要性。",
  trap: "In that moment, I didn't understand how important it was.",
  tip: "AT THE TIME 设定过去视角，APPRECIATE 和 SIGNIFICANCE 两个高级词汇重读",
  pattern: "At the time, I didn't fully appreciate the significance of + [clause]",
  variants: ["I only understood its importance much later.", "In the moment, I had no idea how meaningful it would become.", "The significance only hit me well after the fact."]
};

const s611 = {
  id: 611,
  cat: "Experience",
  scene: "story",
  text: "One aspect that really stands out is how it pushed me outside my comfort zone.",
  words: ["One","aspect","that","really","stands","out","is","how","it","pushed","me","outside","my","comfort","zone"],
  stress: [0.5, 1.0, 0.1, 0.7, 1.0, 0.7, 0.2, 0.5, 0.2, 1.0, 0.2, 0.8, 0.2, 1.0, 1.0],
  ipa: "/wʌn ˈæspekt ðət ˈrɪəli stændz aʊt ɪz haʊ ɪt pʊʃt miː aʊtˈsaɪd maɪ ˈkʌmfət zəʊn/",
  meaning: "用 stands out 和 comfort zone 两个地道表达",
  cn: "有一个方面真的很突出，就是它把我推出了舒适区。",
  trap: "The important part is it made me do uncomfortable things.",
  tip: "ASPECT STANDS OUT 叙事重音，PUSHED 动作词，COMFORT ZONE 固定搭配重读",
  pattern: "One aspect that really stands out is how it + [verb phrase]",
  variants: ["It forced me into situations I'd normally avoid.", "The best part was being completely out of my element.", "It stretched me in ways I didn't expect."]
};

const s612 = {
  id: 612,
  cat: "Experience",
  scene: "story",
  text: "The whole experience taught me the value of stepping into the unknown.",
  words: ["The","whole","experience","taught","me","the","value","of","stepping","into","the","unknown"],
  stress: [0.1, 0.8, 1.0, 1.0, 0.2, 0.1, 1.0, 0.1, 1.0, 0.3, 0.1, 1.0],
  ipa: "/ðə həʊl ɪkˈspɪəriəns tɔːt miː ðə ˈvæljuː əv ˈstepɪŋ ˈɪntə ðə ˌʌnˈnəʊn/",
  meaning: "用 the value of 和 the unknown——展示抽象思维",
  cn: "整个经历教会了我踏入未知的价值。",
  trap: "This experience made me learn that trying new things is good.",
  tip: "EXPERIENCE TAUGHT 叙事重音，VALUE 核心名词，STEPPING INTO THE UNKNOWN 诗意收尾",
  pattern: "The whole experience taught me the value of + [verb]ing + [phrase]",
  variants: ["It showed me that growth happens outside your comfort zone.", "I learned that embracing uncertainty leads to the best experiences.", "The biggest lesson was that the unknown isn't something to fear."]
};

const s613 = {
  id: 613,
  cat: "Experience",
  scene: "story",
  text: "I should also mention that I was completely on my own during this trip.",
  words: ["I","should","also","mention","that","I","was","completely","on","my","own","during","this","trip"],
  stress: [0.2, 0.3, 0.5, 1.0, 0.1, 0.2, 0.3, 0.7, 0.5, 0.2, 1.0, 0.3, 0.3, 1.0],
  ipa: "/aɪ ʃʊd ˈɔːlsəʊ ˈmenʃən ðət aɪ wɒz kəmˈpliːtli ɒn maɪ əʊn ˈdjʊərɪŋ ðɪs trɪp/",
  meaning: "用 I should also mention 补充信息——自然的叙事过渡",
  cn: "我还应该提到，这次旅行我完全是一个人的。",
  trap: "I also want to say I went alone.",
  tip: "SHOULD ALSO MENTION 过渡短语，COMPLETELY 和 OWN 独立性强调，TRIP 结尾",
  pattern: "I should also mention that I was + [adv] + [adj/phrase] + during this + [noun]",
  variants: ["It's worth noting that I did this entirely solo.", "The fact that I was alone made it even more intense.", "One key detail is that I had no one else with me."]
};

const s614 = {
  id: 614,
  cat: "Experience",
  scene: "story",
  text: "There were moments when I genuinely questioned whether I'd made the right decision.",
  words: ["There","were","moments","when","I","genuinely","questioned","whether","I'd","made","the","right","decision"],
  stress: [0.2, 0.3, 1.0, 0.2, 0.2, 0.7, 1.0, 0.3, 0.2, 0.5, 0.1, 1.0, 1.0],
  ipa: "/ðeə wɜː ˈməʊmənts wen aɪ ˈdʒenjuɪnli ˈkwestʃənd ˈweðər aɪd meɪd ðə raɪt dɪˈsɪʒən/",
  meaning: "展示脆弱性和诚实——让叙事更真实",
  cn: "有些时刻我真的在怀疑自己是不是做了正确的决定。",
  trap: "Sometimes I really thought maybe I chose wrong.",
  tip: "MOMENTS 情感锚点，GENUINELY QUESTIONED 双重音，RIGHT DECISION 结尾双重音",
  pattern: "There were moments when I genuinely questioned whether I'd + [verb phrase]",
  variants: ["I had serious doubts at certain points.", "Part of me wondered if I'd bitten off more than I could chew.", "There were dark moments where I regretted the whole thing."]
};

const s615 = {
  id: 615,
  cat: "Experience",
  scene: "story",
  text: "However, looking at the bigger picture, the challenges were what made it worthwhile.",
  words: ["However","looking","at","the","bigger","picture","the","challenges","were","what","made","it","worthwhile"],
  stress: [0.7, 0.7, 0.2, 0.1, 1.0, 1.0, 0.1, 1.0, 0.3, 0.5, 0.7, 0.1, 1.0],
  ipa: "/haʊˈevə ˈlʊkɪŋ ət ðə ˈbɪɡə ˈpɪktʃə ðə ˈtʃælɪndʒɪz wɜː wɒt meɪd ɪt ˈwɜːθwaɪl/",
  meaning: "用 however 和 bigger picture 转折反思——高分语篇",
  cn: "然而，从大局来看，那些挑战才是让这一切值得的东西。",
  trap: "But thinking more, the hard parts were the good parts.",
  tip: "HOWEVER 转折标记，BIGGER PICTURE 固定搭配，CHALLENGES 和 WORTHWHILE 对比重音",
  pattern: "However, looking at the bigger picture, the + [noun] + were what made it + [adj]",
  variants: ["In the end, the tough moments defined the experience.", "The difficulties were actually the most rewarding part.", "Without the struggles, it wouldn't have been half as meaningful."]
};

const s616 = {
  id: 616,
  cat: "Experience",
  scene: "story",
  text: "If I were to describe the atmosphere in one word, it would be electric.",
  words: ["If","I","were","to","describe","the","atmosphere","in","one","word","it","would","be","electric"],
  stress: [0.2, 0.2, 0.3, 0.1, 0.8, 0.1, 1.0, 0.2, 0.8, 1.0, 0.2, 0.3, 0.2, 1.0],
  ipa: "/ɪf aɪ wɜː tə dɪˈskraɪb ðə ˈætməsfɪə ɪn wʌn wɜːd ɪt wʊd bi ɪˈlektrɪk/",
  meaning: "用假设句型精炼概括——简洁有力的描述技巧",
  cn: "如果要用一个词来形容那种氛围的话，那就是——令人振奋。",
  trap: "The feeling there was very exciting, like electric.",
  tip: "DESCRIBE ATMOSPHERE 设定框架，ONE WORD 限定挑战，ELECTRIC 精准结尾重音",
  pattern: "If I were to describe the + [noun] + in one word, it would be + [adj]",
  variants: ["The energy was absolutely palpable.", "The vibe was unlike anything I'd felt before.", "Electric is the only word that does it justice."]
};

const s617 = {
  id: 617,
  cat: "Experience",
  scene: "story",
  text: "That experience served as a real turning point in my personal development.",
  words: ["That","experience","served","as","a","real","turning","point","in","my","personal","development"],
  stress: [0.3, 1.0, 1.0, 0.2, 0.1, 0.7, 1.0, 1.0, 0.2, 0.2, 0.8, 1.0],
  ipa: "/ðæt ɪkˈspɪəriəns sɜːvd əz ə rɪəl ˈtɜːnɪŋ pɔɪnt ɪn maɪ ˈpɜːsənəl dɪˈveləpmənt/",
  meaning: "用 turning point 评价意义——展示反思深度",
  cn: "那次经历成为了我个人成长中一个真正的转折点。",
  trap: "That event was very important for my growing up.",
  tip: "EXPERIENCE SERVED 叙事双重音，TURNING POINT 固定搭配，PERSONAL DEVELOPMENT 学术结尾",
  pattern: "That experience served as a real turning point in my + [adj] + [noun]",
  variants: ["It was a pivotal moment that changed my trajectory.", "That trip became a watershed moment for me.", "My personal growth can be traced back to that experience."]
};

const s618 = {
  id: 618,
  cat: "Experience",
  scene: "story",
  text: "What I found particularly challenging was communicating without a common language.",
  words: ["What","I","found","particularly","challenging","was","communicating","without","a","common","language"],
  stress: [0.3, 0.2, 0.7, 0.7, 1.0, 0.3, 1.0, 0.5, 0.1, 0.8, 1.0],
  ipa: "/wɒt aɪ faʊnd pəˈtɪkjʊləli ˈtʃælɪndʒɪŋ wɒz kəˈmjuːnɪkeɪtɪŋ wɪˈðaʊt ə ˈkɒmən ˈlæŋɡwɪdʒ/",
  meaning: "用 what I found 主语从句描述困难——复杂语法加分",
  cn: "我觉得特别有挑战性的是在没有共同语言的情况下交流。",
  trap: "The hard thing was talking when we don't speak same language.",
  tip: "PARTICULARLY CHALLENGING 评价，COMMUNICATING 核心困难，COMMON LANGUAGE 具体障碍",
  pattern: "What I found particularly + [adj] + was + [verb]ing + without + [noun]",
  variants: ["The language barrier was the toughest part by far.", "Not being able to communicate properly was frustrating.", "Language differences created both obstacles and beautiful moments."]
};

const s619 = {
  id: 619,
  cat: "Experience",
  scene: "story",
  text: "As a result of that experience, I've become a much more open-minded person.",
  words: ["As","a","result","of","that","experience","I've","become","a","much","more","open-minded","person"],
  stress: [0.2, 0.1, 0.8, 0.1, 0.3, 1.0, 0.2, 0.5, 0.1, 0.7, 0.5, 1.0, 1.0],
  ipa: "/əz ə rɪˈzʌlt əv ðæt ɪkˈspɪəriəns aɪv bɪˈkʌm ə mʌtʃ mɔːr ˌəʊpən ˈmaɪndɪd ˈpɜːsən/",
  meaning: "用 as a result 表达因果——结构化结论",
  cn: "由于那次经历，我成为了一个更加开明的人。",
  trap: "Because of that, I think more openly now.",
  tip: "AS A RESULT 因果连接，EXPERIENCE 原因重音，OPEN-MINDED PERSON 结果重音",
  pattern: "As a result of that experience, I've become a much more + [adj] + person",
  variants: ["That trip fundamentally changed how I see the world.", "I came back a different person — more tolerant, more curious.", "It broadened my horizons in ways I didn't anticipate."]
};

const s620 = {
  id: 620,
  cat: "Experience",
  scene: "story",
  text: "To this day, I still keep in touch with some of the people I met there.",
  words: ["To","this","day","I","still","keep","in","touch","with","some","of","the","people","I","met","there"],
  stress: [0.2, 0.3, 0.7, 0.2, 0.5, 1.0, 0.2, 0.7, 0.2, 0.5, 0.1, 0.1, 1.0, 0.2, 1.0, 0.5],
  ipa: "/tə ðɪs deɪ aɪ stɪl kiːp ɪn tʌtʃ wɪð sʌm əv ðə ˈpiːpl aɪ met ðeə/",
  meaning: "用 to this day 强调持续性——展示故事的持续影响",
  cn: "直到今天，我仍然和在那里认识的一些人保持联系。",
  trap: "Now I still contact some people from that time.",
  tip: "TO THIS DAY 时间强调，KEEP IN TOUCH 固定搭配，PEOPLE MET 叙事重音",
  pattern: "To this day, I still keep in touch with some of the people I + [verb] + there",
  variants: ["Some of those friendships have lasted years.", "The bonds I formed are still strong after all this time.", "I'm still close with people I met on that trip."]
};

const s621 = {
  id: 621,
  cat: "Experience",
  scene: "story",
  text: "I'd be lying if I said I wasn't nervous at the beginning.",
  words: ["I'd","be","lying","if","I","said","I","wasn't","nervous","at","the","beginning"],
  stress: [0.3, 0.3, 1.0, 0.2, 0.2, 0.5, 0.2, 0.5, 1.0, 0.2, 0.1, 1.0],
  ipa: "/aɪd bi ˈlaɪɪŋ ɪf aɪ sed aɪ ˈwɒznt ˈnɜːvəs ət ðə bɪˈɡɪnɪŋ/",
  meaning: "用 I'd be lying if I said 坦诚表达——展示真实性",
  cn: "如果我说一开始不紧张那就是在撒谎了。",
  trap: "To be honest, I was very scared at first.",
  tip: "I'd be lying 假设结构，NERVOUS 情感词重读，BEGINNING 时间词结尾",
  pattern: "I'd be lying if I said I wasn't + [adj] + at the beginning",
  variants: ["I won't pretend I wasn't terrified initially.", "Honestly, the first few days were nerve-wracking.", "I was scared stiff, but I'd never admit it at the time."]
};

const s622 = {
  id: 622,
  cat: "Experience",
  scene: "story",
  text: "The thing that surprised me most was how resilient I turned out to be.",
  words: ["The","thing","that","surprised","me","most","was","how","resilient","I","turned","out","to","be"],
  stress: [0.1, 0.7, 0.1, 1.0, 0.2, 1.0, 0.3, 0.5, 1.0, 0.2, 0.7, 0.5, 0.1, 0.3],
  ipa: "/ðə θɪŋ ðət səˈpraɪzd miː məʊst wɒz haʊ rɪˈzɪliənt aɪ tɜːnd aʊt tə biː/",
  meaning: "用 resilient 和 turned out to be 表达自我发现",
  cn: "最让我惊讶的是我原来这么有韧性。",
  trap: "I was surprised I am stronger than I thought.",
  tip: "SURPRISED MOST 双重音，RESILIENT 关键形容词重在 -ZIL-，TURNED OUT 发现重音",
  pattern: "The thing that surprised me most was how + [adj] + I turned out to be",
  variants: ["I discovered a resilience I didn't know I had.", "I surprised myself with my ability to cope.", "My inner strength caught me completely off guard."]
};

const s623 = {
  id: 623,
  cat: "Experience",
  scene: "story",
  text: "It was one of those rare experiences that lives up to the hype.",
  words: ["It","was","one","of","those","rare","experiences","that","lives","up","to","the","hype"],
  stress: [0.2, 0.3, 0.7, 0.1, 0.3, 1.0, 1.0, 0.1, 1.0, 0.7, 0.1, 0.1, 1.0],
  ipa: "/ɪt wɒz wʌn əv ðəʊz reə ɪkˈspɪəriənsɪz ðət lɪvz ʌp tə ðə haɪp/",
  meaning: "用 lives up to the hype 地道表达——展示口语能力",
  cn: "这是那种少有的名不虚传的经历。",
  trap: "It was as good as people said it would be.",
  tip: "RARE EXPERIENCES 双重音限定，LIVES UP 短语动词，HYPE 流行口语词",
  pattern: "It was one of those rare experiences that lives up to + [noun]",
  variants: ["It exceeded every expectation I had.", "For once, reality matched the fantasy.", "It was everything I'd hoped for and more."]
};

const s624 = {
  id: 624,
  cat: "Experience",
  scene: "story",
  text: "I'd wholeheartedly recommend this experience to anyone who gets the opportunity.",
  words: ["I'd","wholeheartedly","recommend","this","experience","to","anyone","who","gets","the","opportunity"],
  stress: [0.3, 1.0, 1.0, 0.3, 1.0, 0.1, 0.7, 0.2, 0.5, 0.1, 1.0],
  ipa: "/aɪd ˌhəʊlˈhɑːtɪdli ˌrekəˈmend ðɪs ɪkˈspɪəriəns tə ˈeniwʌn huː ɡets ðə ˌɒpəˈtjuːnɪti/",
  meaning: "用 wholeheartedly 强力推荐——Part2 收尾句",
  cn: "我会全心全意地向任何有机会的人推荐这个经历。",
  trap: "I strongly suggest everyone to try this.",
  tip: "WHOLEHEARTEDLY 五音节副词重在 -HEART-，RECOMMEND EXPERIENCE 和 OPPORTUNITY 三重音",
  pattern: "I'd wholeheartedly recommend this + [noun] + to anyone who + [verb phrase]",
  variants: ["If you ever get the chance, do it without hesitation.", "I couldn't recommend it more highly.", "It's a must-do experience, no question about it."]
};

const s625 = {
  id: 625,
  cat: "Experience",
  scene: "story",
  text: "Interestingly enough, the most valuable lesson came from the smallest moment.",
  words: ["Interestingly","enough","the","most","valuable","lesson","came","from","the","smallest","moment"],
  stress: [1.0, 0.5, 0.1, 0.5, 1.0, 1.0, 0.7, 0.2, 0.1, 1.0, 1.0],
  ipa: "/ˈɪntrɪstɪŋli ɪˈnʌf ðə məʊst ˈvæljuəbl ˈlesən keɪm frɒm ðə ˈsmɔːlɪst ˈməʊmənt/",
  meaning: "用 interestingly enough 和对比结构——展示叙事技巧",
  cn: "有意思的是，最有价值的教训来自最微小的时刻。",
  trap: "The most important thing I learned was from a small event.",
  tip: "INTERESTINGLY ENOUGH 开头引发好奇，VALUABLE LESSON 和 SMALLEST MOMENT 对比双重音",
  pattern: "Interestingly enough, the most + [adj] + [noun] + came from the + [adj] + [noun]",
  variants: ["The biggest takeaway came from the most unexpected place.", "A tiny moment ended up teaching me the biggest lesson.", "Sometimes the smallest experiences leave the deepest marks."]
};

const s626 = {
  id: 626,
  cat: "Experience",
  scene: "story",
  text: "I vividly recall the moment when everything suddenly clicked into place.",
  words: ["I","vividly","recall","the","moment","when","everything","suddenly","clicked","into","place"],
  stress: [0.2, 1.0, 1.0, 0.1, 1.0, 0.2, 0.7, 0.8, 1.0, 0.3, 1.0],
  ipa: "/aɪ ˈvɪvɪdli rɪˈkɔːl ðə ˈməʊmənt wen ˈevrɪθɪŋ ˈsʌdənli klɪkt ˈɪntə pleɪs/",
  meaning: "用 vividly recall 和 clicked into place——双重地道表达",
  cn: "我清晰地记得一切突然恍然大悟的那个时刻。",
  trap: "I remember clearly when I suddenly understood everything.",
  tip: "VIVIDLY RECALL 强烈记忆双重音，MOMENT 时间锚点，CLICKED INTO PLACE 习语结尾",
  pattern: "I vividly recall the moment when everything + [adv] + [verb phrase]",
  variants: ["There was this one moment where it all made sense.", "Everything fell into place in a single, beautiful instant.", "I'll never forget the exact second when it all came together."]
};

const s627 = {
  id: 627,
  cat: "Experience",
  scene: "story",
  text: "It wasn't without its difficulties, but that's precisely what made it rewarding.",
  words: ["It","wasn't","without","its","difficulties","but","that's","precisely","what","made","it","rewarding"],
  stress: [0.2, 0.5, 0.5, 0.2, 1.0, 0.3, 0.3, 1.0, 0.5, 0.7, 0.1, 1.0],
  ipa: "/ɪt ˈwɒznt wɪˈðaʊt ɪts ˈdɪfɪkəltiz bʌt ðæts prɪˈsaɪsli wɒt meɪd ɪt rɪˈwɔːdɪŋ/",
  meaning: "用双重否定和 precisely——展示高级句式",
  cn: "不是没有困难，但那正是让它值得的原因。",
  trap: "There were some hard things, but because of that it was good.",
  tip: "WASN'T WITHOUT 双重否定重读，DIFFICULTIES 叙事核心，PRECISELY REWARDING 结论双重音",
  pattern: "It wasn't without its + [noun], but that's precisely what made it + [adj]",
  variants: ["The difficulties were part of the reward.", "Challenges and fulfilment went hand in hand.", "The harder it was, the more I got out of it."]
};

const s628 = {
  id: 628,
  cat: "Experience",
  scene: "story",
  text: "In hindsight, I realise that every setback was actually a stepping stone.",
  words: ["In","hindsight","I","realise","that","every","setback","was","actually","a","stepping","stone"],
  stress: [0.2, 1.0, 0.2, 0.7, 0.1, 0.5, 1.0, 0.3, 0.7, 0.1, 1.0, 1.0],
  ipa: "/ɪn ˈhaɪndsaɪt aɪ ˈrɪəlaɪz ðət ˈevri ˈsetbæk wɒz ˈæktʃuəli ə ˈstepɪŋ stəʊn/",
  meaning: "用 in hindsight 和 stepping stone 双重习语——展示英语熟练度",
  cn: "事后看来，我意识到每一次挫折其实都是一块垫脚石。",
  trap: "Now I know that each problem helped me become better.",
  tip: "IN HINDSIGHT 反思标记，SETBACK 和 STEPPING STONE 两个对比名词重读",
  pattern: "In hindsight, I realise that every + [noun] + was actually a + [noun phrase]",
  variants: ["Every failure turned out to be a lesson in disguise.", "The setbacks were actually the best things that happened.", "What felt like obstacles were really opportunities."]
};

const s629 = {
  id: 629,
  cat: "Experience",
  scene: "story",
  text: "I suppose what I'm trying to say is that it fundamentally shaped who I am.",
  words: ["I","suppose","what","I'm","trying","to","say","is","that","it","fundamentally","shaped","who","I","am"],
  stress: [0.2, 0.5, 0.3, 0.2, 0.5, 0.1, 0.7, 0.2, 0.1, 0.2, 1.0, 1.0, 0.5, 0.2, 0.5],
  ipa: "/aɪ səˈpəʊz wɒt aɪm ˈtraɪɪŋ tə seɪ ɪz ðət ɪt ˌfʌndəˈmentəli ʃeɪpt huː aɪ æm/",
  meaning: "用 I suppose what I'm trying to say 精炼总结——Part2 收尾技巧",
  cn: "我想说的是，它从根本上塑造了我这个人。",
  trap: "My meaning is that experience made me who I am now.",
  tip: "I SUPPOSE 谦虚过渡，FUNDAMENTALLY 五音节重在 -MEN-，SHAPED WHO I AM 核心信息",
  pattern: "I suppose what I'm trying to say is that it + [adv] + [verb] + who I am",
  variants: ["What I mean is, it made me who I am today.", "The bottom line is that it changed me at a core level.", "To put it simply, it defined my identity."]
};

const s630 = {
  id: 630,
  cat: "Experience",
  scene: "story",
  text: "If I could go back and do it all over again, I wouldn't change a single thing.",
  words: ["If","I","could","go","back","and","do","it","all","over","again","I","wouldn't","change","a","single","thing"],
  stress: [0.2, 0.2, 0.3, 0.5, 0.8, 0.1, 0.5, 0.1, 0.7, 0.5, 0.7, 0.2, 0.5, 1.0, 0.1, 1.0, 1.0],
  ipa: "/ɪf aɪ kʊd ɡəʊ bæk ənd duː ɪt ɔːl ˈəʊvər əˈɡen aɪ ˈwʊdnt tʃeɪndʒ ə ˈsɪŋɡl θɪŋ/",
  meaning: "用虚拟条件句做有力结尾——Part2 完美收官",
  cn: "如果我能回去重来一遍，我不会改变任何一件事。",
  trap: "If I can do it again, I will do everything the same.",
  tip: "GO BACK DO IT ALL OVER 假设部分，WOULDN'T CHANGE 转折重音，SINGLE THING 结尾强调",
  pattern: "If I could go back and do it all over again, I wouldn't change a + [adj] + thing",
  variants: ["I'd do it all over again in a heartbeat.", "There's not a single thing I'd want to do differently.", "Given the chance to redo it, I'd relive every moment exactly as it was."]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY21 = [
  s601, s602, s603, s604, s605, s606, s607, s608, s609, s610,
  s611, s612, s613, s614, s615, s616, s617, s618, s619, s620,
  s621, s622, s623, s624, s625, s626, s627, s628, s629, s630
];

export const SCENES_DAY21 = {
  601: { icon: "🎒", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  602: { icon: "📅", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  603: { icon: "💡", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  604: { icon: "🌅", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  605: { icon: "🤝", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  606: { icon: "🔥", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  607: { icon: "🔙", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  608: { icon: "👥", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  609: { icon: "🏔️", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  610: { icon: "⏳", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  611: { icon: "🚀", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  612: { icon: "🗝️", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  613: { icon: "🧭", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  614: { icon: "😰", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  615: { icon: "🌟", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  616: { icon: "⚡", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  617: { icon: "🔄", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  618: { icon: "🗣️", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  619: { icon: "🌍", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  620: { icon: "📱", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  621: { icon: "😬", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  622: { icon: "💪", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  623: { icon: "🎯", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  624: { icon: "👍", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  625: { icon: "🔍", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  626: { icon: "✨", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  627: { icon: "🏋️", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  628: { icon: "🪜", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  629: { icon: "🧩", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" },
  630: { icon: "🔁", colors: ["#f59e0b","#fbbf24"], title: "MY STORY", sub: "IELTS Part 2 · Experience" }
};
