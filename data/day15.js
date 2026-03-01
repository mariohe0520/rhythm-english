// ─── Day 15 · IELTS Part 1 — Hometown & Where You Live ──────────
// 30 sentences (id 421-450)

const s421 = {
  id: 421,
  cat: "Hometown",
  scene: "city",
  text: "I grew up in a fairly small city.",
  words: ["I","grew","up","in","a","fairly","small","city"],
  stress: [0.2, 1.0, 1.0, 0.3, 0.1, 0.7, 0.9, 1.0],
  ipa: "/aɪ ɡruː ʌp ɪn ə ˈfɛəli smɔːl ˈsɪti/",
  meaning: "雅思Part1高频句——描述成长地点的自然开场",
  cn: "我在一个相当小的城市长大。",
  trap: "I was raised in a small-scale city.",
  tip: "GREW UP、FAIRLY、SMALL、CITY 四个重音，in a 弱化连读",
  pattern: "I grew up in a + [adv] + [adj] + [place]",
  variants: ["I'm originally from a small town.", "I was raised in a mid-sized city.", "I grew up in quite a rural area."]
};

const s422 = {
  id: 422,
  cat: "Hometown",
  scene: "city",
  text: "It's located in the southern part of China.",
  words: ["It's","located","in","the","southern","part","of","China"],
  stress: [0.2, 1.0, 0.2, 0.1, 1.0, 1.0, 0.1, 1.0],
  ipa: "/ɪts ləʊˈkeɪtɪd ɪn ðə ˈsʌðən pɑːt əv ˈtʃaɪnə/",
  meaning: "描述家乡地理位置——Part1必备句型",
  cn: "它位于中国南部。",
  trap: "It is in the south side of China.",
  tip: "LOCATED 重音在第二音节，SOUTHERN 和 PART 并列重读",
  pattern: "It's located in the + [direction] + part of + [country]",
  variants: ["It's situated in the south of China.", "My hometown is in southern China.", "It's down in the south, near the coast."]
};

const s423 = {
  id: 423,
  cat: "Hometown",
  scene: "city",
  text: "The population is around two million, I'd say.",
  words: ["The","population","is","around","two","million","I'd","say"],
  stress: [0.1, 1.0, 0.2, 0.5, 1.0, 1.0, 0.3, 0.7],
  ipa: "/ðə ˌpɒpjʊˈleɪʃən ɪz əˈraʊnd tuː ˈmɪljən aɪd seɪ/",
  meaning: "用大概数字描述家乡人口——口语化的模糊表达",
  cn: "人口大概两百万左右吧。",
  trap: "The population number is two million people.",
  tip: "POPULATION 重音在第三音节 -LA-，I'd say 结尾显得自然不确定",
  pattern: "The population is around + [number], I'd say",
  variants: ["It's got roughly two million people.", "About two million, give or take.", "I think the population is somewhere around two million."]
};

const s424 = {
  id: 424,
  cat: "Hometown",
  scene: "city",
  text: "It's changed a lot over the past decade.",
  words: ["It's","changed","a","lot","over","the","past","decade"],
  stress: [0.2, 1.0, 0.1, 1.0, 0.5, 0.1, 0.8, 1.0],
  ipa: "/ɪts tʃeɪndʒd ə lɒt ˈəʊvə ðə pɑːst ˈdekeɪd/",
  meaning: "描述家乡变化——雅思Part1最常考话题之一",
  cn: "过去十年变化很大。",
  trap: "It has much change in the ten years.",
  tip: "CHANGED 和 LOT 紧密连读，PAST DECADE 作为一个节奏单元",
  pattern: "It's changed a lot over the past + [time period]",
  variants: ["There's been a huge transformation in recent years.", "It's barely recognisable compared to ten years ago.", "The city has developed enormously."]
};

const s425 = {
  id: 425,
  cat: "Hometown",
  scene: "city",
  text: "I suppose the best thing about it is the food.",
  words: ["I","suppose","the","best","thing","about","it","is","the","food"],
  stress: [0.2, 0.7, 0.1, 1.0, 1.0, 0.3, 0.1, 0.2, 0.1, 1.0],
  ipa: "/aɪ səˈpəʊz ðə best θɪŋ əˈbaʊt ɪt ɪz ðə fuːd/",
  meaning: "表达家乡最好的一面——用 I suppose 显得自然有思考",
  cn: "我觉得最好的一点是食物吧。",
  trap: "The most good point is the food.",
  tip: "I suppose 弱读连贯，BEST THING 和 FOOD 是两个重音高峰",
  pattern: "I suppose the best thing about it is + [noun]",
  variants: ["What I love most about it is the cuisine.", "If I had to pick one thing, it'd be the food.", "The food scene is definitely the highlight."]
};

const s426 = {
  id: 426,
  cat: "Hometown",
  scene: "city",
  text: "To be honest, I don't miss it as much as I thought I would.",
  words: ["To","be","honest","I","don't","miss","it","as","much","as","I","thought","I","would"],
  stress: [0.1, 0.1, 1.0, 0.2, 0.5, 1.0, 0.1, 0.2, 1.0, 0.2, 0.2, 1.0, 0.2, 0.5],
  ipa: "/tə bi ˈɒnɪst aɪ dəʊnt mɪs ɪt əz mʌtʃ əz aɪ θɔːt aɪ wʊd/",
  meaning: "用 to be honest 引出诚实的个人感受——高分口语策略",
  cn: "说实话，我没有像预期的那么想念它。",
  trap: "Honestly speaking, I don't miss it very much.",
  tip: "To be honest 作为语块快速带过，MISS 和 THOUGHT 是情感重音",
  pattern: "To be honest, I don't + [verb] + as much as I thought I would",
  variants: ["Honestly, I don't really miss it that much.", "I thought I'd miss it more than I actually do.", "It's funny, I'm not as homesick as I expected."]
};

const s427 = {
  id: 427,
  cat: "Hometown",
  scene: "city",
  text: "There's a real sense of community where I come from.",
  words: ["There's","a","real","sense","of","community","where","I","come","from"],
  stress: [0.3, 0.1, 0.8, 1.0, 0.1, 1.0, 0.3, 0.2, 0.5, 0.3],
  ipa: "/ðeəz ə rɪəl sens əv kəˈmjuːnɪti weər aɪ kʌm frɒm/",
  meaning: "描述家乡的社区氛围——体现文化理解力",
  cn: "我家乡那边很有社区归属感。",
  trap: "The people in my hometown are very together.",
  tip: "SENSE 和 COMMUNITY 是核心重读词，where I come from 快速收尾",
  pattern: "There's a real sense of + [noun] + where I come from",
  variants: ["People really look out for each other back home.", "It's a tight-knit community.", "Everyone knows everyone where I grew up."]
};

const s428 = {
  id: 428,
  cat: "Hometown",
  scene: "city",
  text: "The cost of living is surprisingly affordable.",
  words: ["The","cost","of","living","is","surprisingly","affordable"],
  stress: [0.1, 1.0, 0.1, 1.0, 0.2, 0.8, 1.0],
  ipa: "/ðə kɒst əv ˈlɪvɪŋ ɪz səˈpraɪzɪŋli əˈfɔːdəbl/",
  meaning: "描述家乡生活成本——展示词汇丰富度",
  cn: "生活成本出乎意料地实惠。",
  trap: "The living price is very cheap.",
  tip: "COST OF LIVING 作为固定搭配连读，SURPRISINGLY 四音节重音在第二",
  pattern: "The cost of living is + [adv] + [adj]",
  variants: ["It's really affordable to live there.", "You can live quite comfortably without spending much.", "Compared to big cities, it's dirt cheap."]
};

const s429 = {
  id: 429,
  cat: "Hometown",
  scene: "city",
  text: "I wouldn't say it's the most exciting place to live.",
  words: ["I","wouldn't","say","it's","the","most","exciting","place","to","live"],
  stress: [0.2, 0.5, 1.0, 0.2, 0.1, 0.8, 1.0, 1.0, 0.1, 0.7],
  ipa: "/aɪ ˈwʊdnt seɪ ɪts ðə məʊst ɪkˈsaɪtɪŋ pleɪs tə lɪv/",
  meaning: "用委婉否定表达对家乡的客观评价——避免直说 boring",
  cn: "我不会说它是最令人兴奋的地方。",
  trap: "It is a boring place.",
  tip: "WOULDN'T SAY 是英语委婉表达的核心，EXCITING 重音在 -CI-",
  pattern: "I wouldn't say it's the most + [adj] + place to + [verb]",
  variants: ["It's not exactly buzzing with excitement.", "It can be a bit quiet, to be fair.", "It's peaceful, put it that way."]
};

const s430 = {
  id: 430,
  cat: "Hometown",
  scene: "city",
  text: "What I like most is how walkable everything is.",
  words: ["What","I","like","most","is","how","walkable","everything","is"],
  stress: [0.5, 0.2, 1.0, 1.0, 0.2, 0.5, 1.0, 0.8, 0.2],
  ipa: "/wɒt aɪ laɪk məʊst ɪz haʊ ˈwɔːkəbl ˈevrɪθɪŋ ɪz/",
  meaning: "用 what 引导的强调句——Part1高分句型",
  cn: "我最喜欢的是一切都很方便步行。",
  trap: "The thing I most like is everything can walk.",
  tip: "What I like most 是主语从句，WALKABLE 和 EVERYTHING 双重重读",
  pattern: "What I like most is how + [adj] + everything is",
  variants: ["The walkability is fantastic.", "You can get everywhere on foot.", "I love that I barely need to drive."]
};

const s431 = {
  id: 431,
  cat: "Hometown",
  scene: "city",
  text: "It's one of those places that grows on you.",
  words: ["It's","one","of","those","places","that","grows","on","you"],
  stress: [0.2, 1.0, 0.1, 0.5, 1.0, 0.1, 1.0, 0.3, 0.5],
  ipa: "/ɪts wʌn əv ðəʊz ˈpleɪsɪz ðət ɡrəʊz ɒn juː/",
  meaning: "用地道表达 grows on you 描述渐渐喜欢的过程",
  cn: "那种地方你待久了就会慢慢喜欢上。",
  trap: "It is a place that you will slowly like it.",
  tip: "grows on you 是固定搭配，意思是'越来越喜欢'，整体连读",
  pattern: "It's one of those places that + [verb phrase]",
  variants: ["You don't love it at first, but it gets under your skin.", "The longer you stay, the more you appreciate it.", "It takes a while, but eventually you fall in love with it."]
};

const s432 = {
  id: 432,
  cat: "Hometown",
  scene: "city",
  text: "The weather can be a bit unpredictable, to say the least.",
  words: ["The","weather","can","be","a","bit","unpredictable","to","say","the","least"],
  stress: [0.1, 1.0, 0.3, 0.2, 0.1, 0.5, 1.0, 0.1, 0.5, 0.1, 0.8],
  ipa: "/ðə ˈweðə kən bi ə bɪt ˌʌnprɪˈdɪktəbl tə seɪ ðə liːst/",
  meaning: "用 to say the least 进行轻描淡写——高级口语策略",
  cn: "天气说好听点是有点难以预测。",
  trap: "The weather is very not sure.",
  tip: "WEATHER 和 UNPREDICTABLE 是两个重音高峰，to say the least 快速收尾表委婉",
  pattern: "The + [noun] + can be a bit + [adj], to say the least",
  variants: ["You never know what the weather will do.", "The weather is all over the place.", "Let's just say the weather keeps you guessing."]
};

const s433 = {
  id: 433,
  cat: "Hometown",
  scene: "city",
  text: "I'd love to move back there one day, actually.",
  words: ["I'd","love","to","move","back","there","one","day","actually"],
  stress: [0.3, 1.0, 0.1, 1.0, 1.0, 0.3, 0.5, 1.0, 0.7],
  ipa: "/aɪd lʌv tə muːv bæk ðeə wʌn deɪ ˈæktʃuəli/",
  meaning: "表达对家乡的未来期望——展示情感深度",
  cn: "其实，我以后很想搬回去。",
  trap: "I want to go back to live there later.",
  tip: "LOVE、MOVE BACK、DAY 三个节奏点，actually 结尾增加真实感",
  pattern: "I'd love to + [verb phrase] + one day, actually",
  variants: ["I can see myself going back eventually.", "I think I'll end up moving home at some point.", "Part of me wants to settle back there."]
};

const s434 = {
  id: 434,
  cat: "Hometown",
  scene: "city",
  text: "It's quite well connected in terms of public transport.",
  words: ["It's","quite","well","connected","in","terms","of","public","transport"],
  stress: [0.2, 0.5, 0.8, 1.0, 0.2, 0.7, 0.1, 0.8, 1.0],
  ipa: "/ɪts kwaɪt wel kəˈnektɪd ɪn tɜːmz əv ˈpʌblɪk ˈtrænspɔːt/",
  meaning: "使用 in terms of 进行限定——展示学术词汇能力",
  cn: "在公共交通方面还是挺方便的。",
  trap: "The public transportation is very convenient.",
  tip: "CONNECTED 重在 -NECT-，in terms of 作为连接短语弱读",
  pattern: "It's quite + [adv] + [adj] + in terms of + [noun]",
  variants: ["The transport links are pretty decent.", "You can get around easily by bus or metro.", "Public transport is one of its strong points."]
};

const s435 = {
  id: 435,
  cat: "Hometown",
  scene: "city",
  text: "The nightlife is nothing to write home about, though.",
  words: ["The","nightlife","is","nothing","to","write","home","about","though"],
  stress: [0.1, 1.0, 0.2, 1.0, 0.1, 1.0, 1.0, 0.3, 0.5],
  ipa: "/ðə ˈnaɪtlaɪf ɪz ˈnʌθɪŋ tə raɪt həʊm əˈbaʊt ðəʊ/",
  meaning: "用习语 nothing to write home about 表示平庸——地道英式表达",
  cn: "不过夜生活嘛，没什么好说的。",
  trap: "The night entertainment is not very good.",
  tip: "nothing to write home about 是一个固定习语整体连读，though 结尾转折",
  pattern: "The + [noun] + is nothing to write home about, though",
  variants: ["The nightlife is a bit lacking, if I'm honest.", "There's not much going on after dark.", "It's not exactly famous for its nightlife."]
};

const s436 = {
  id: 436,
  cat: "Hometown",
  scene: "city",
  text: "I'm quite attached to the neighbourhood I grew up in.",
  words: ["I'm","quite","attached","to","the","neighbourhood","I","grew","up","in"],
  stress: [0.2, 0.5, 1.0, 0.1, 0.1, 1.0, 0.2, 1.0, 0.8, 0.3],
  ipa: "/aɪm kwaɪt əˈtætʃt tə ðə ˈneɪbəhʊd aɪ ɡruː ʌp ɪn/",
  meaning: "表达对家乡情感依恋——attached 比 like 更高级",
  cn: "我对成长的那个社区还是很有感情的。",
  trap: "I have much feeling to my growing up area.",
  tip: "ATTACHED 重音在 -TACHED，NEIGHBOURHOOD 重在第一音节",
  pattern: "I'm quite attached to the + [place] + I grew up in",
  variants: ["My old neighbourhood holds a special place in my heart.", "I still feel a strong connection to where I grew up.", "I've got a real soft spot for my childhood neighbourhood."]
};

const s437 = {
  id: 437,
  cat: "Hometown",
  scene: "city",
  text: "There are loads of green spaces, which is something I really value.",
  words: ["There","are","loads","of","green","spaces","which","is","something","I","really","value"],
  stress: [0.2, 0.1, 1.0, 0.1, 1.0, 1.0, 0.2, 0.1, 0.5, 0.2, 0.7, 1.0],
  ipa: "/ðeər ɑː ləʊdz əv ɡriːn ˈspeɪsɪz wɪtʃ ɪz ˈsʌmθɪŋ aɪ ˈrɪəli ˈvæljuː/",
  meaning: "用关系从句补充个人态度——展示复杂句式能力",
  cn: "有很多绿化空间，这是我非常看重的。",
  trap: "There are many green places. I think it is important.",
  tip: "LOADS、GREEN、SPACES 三连重读，which is 快速过渡到第二信息",
  pattern: "There are loads of + [noun], which is something I really + [verb]",
  variants: ["It's really green, which I appreciate.", "One thing I value is all the parks and open spaces.", "Green areas are everywhere, and I love that about it."]
};

const s438 = {
  id: 438,
  cat: "Hometown",
  scene: "city",
  text: "If I had to describe it in one word, I'd say lively.",
  words: ["If","I","had","to","describe","it","in","one","word","I'd","say","lively"],
  stress: [0.2, 0.2, 0.3, 0.1, 1.0, 0.1, 0.2, 0.8, 1.0, 0.3, 0.5, 1.0],
  ipa: "/ɪf aɪ hæd tə dɪˈskraɪb ɪt ɪn wʌn wɜːd aɪd seɪ ˈlaɪvli/",
  meaning: "假设句型引出精炼描述——高分策略",
  cn: "如果只用一个词来形容的话，我会说热闹。",
  trap: "I use one word to say it: lively.",
  tip: "If I had to 快速弱读过渡，DESCRIBE、WORD、LIVELY 是三个高点",
  pattern: "If I had to describe it in one word, I'd say + [adj]",
  variants: ["In a nutshell, I'd call it vibrant.", "The word that springs to mind is lively.", "If I had to sum it up, I'd say energetic."]
};

const s439 = {
  id: 439,
  cat: "Hometown",
  scene: "city",
  text: "The air quality has definitely improved since they built the metro.",
  words: ["The","air","quality","has","definitely","improved","since","they","built","the","metro"],
  stress: [0.1, 1.0, 1.0, 0.2, 0.7, 1.0, 0.3, 0.2, 1.0, 0.1, 1.0],
  ipa: "/ðə eə ˈkwɒlɪti həz ˈdefɪnɪtli ɪmˈpruːvd sɪns ðeɪ bɪlt ðə ˈmetrəʊ/",
  meaning: "用因果关系描述城市变化——展示分析能力",
  cn: "自从修了地铁以后空气质量确实改善了。",
  trap: "The air became good after the subway was made.",
  tip: "AIR QUALITY 双词重读，IMPROVED 重在 -PROVED，since 引出原因",
  pattern: "The + [noun] + has definitely improved since + [clause]",
  variants: ["Building the metro made a real difference to air quality.", "Air pollution has dropped since the metro opened.", "Things got much cleaner once public transport improved."]
};

const s440 = {
  id: 440,
  cat: "Hometown",
  scene: "city",
  text: "I think the main drawback is the lack of job opportunities.",
  words: ["I","think","the","main","drawback","is","the","lack","of","job","opportunities"],
  stress: [0.2, 0.5, 0.1, 0.8, 1.0, 0.2, 0.1, 1.0, 0.1, 0.8, 1.0],
  ipa: "/aɪ θɪŋk ðə meɪn ˈdrɔːbæk ɪz ðə læk əv dʒɒb ˌɒpəˈtjuːnɪtiz/",
  meaning: "用 drawback 替代 bad thing——词汇升级策略",
  cn: "我觉得主要的缺点是缺乏工作机会。",
  trap: "The bad point is there are no jobs.",
  tip: "DRAWBACK 重音在第一音节，LACK 和 OPPORTUNITIES 是第二节奏组",
  pattern: "I think the main drawback is the lack of + [noun]",
  variants: ["The job market is pretty limited, sadly.", "Career prospects are the main downside.", "There aren't that many professional opportunities."]
};

const s441 = {
  id: 441,
  cat: "Hometown",
  scene: "city",
  text: "It's got a really distinctive local cuisine.",
  words: ["It's","got","a","really","distinctive","local","cuisine"],
  stress: [0.2, 0.7, 0.1, 0.7, 1.0, 0.8, 1.0],
  ipa: "/ɪts ɡɒt ə ˈrɪəli dɪˈstɪŋktɪv ˈləʊkəl kwɪˈziːn/",
  meaning: "用 distinctive 替代 special——高级词汇展示",
  cn: "当地美食非常有特色。",
  trap: "The local food is very special and different.",
  tip: "DISTINCTIVE 重在 -TINC-，CUISINE 法语借词重在 -ZINE",
  pattern: "It's got a really + [adj] + local + [noun]",
  variants: ["The local food is one of a kind.", "There's a unique food culture you won't find anywhere else.", "The cuisine is really something special."]
};

const s442 = {
  id: 442,
  cat: "Hometown",
  scene: "city",
  text: "Compared to where I live now, it's much more laid-back.",
  words: ["Compared","to","where","I","live","now","it's","much","more","laid-back"],
  stress: [0.7, 0.1, 0.3, 0.2, 0.7, 0.5, 0.2, 1.0, 0.5, 1.0],
  ipa: "/kəmˈpeəd tə weər aɪ lɪv naʊ ɪts mʌtʃ mɔː ˈleɪdbæk/",
  meaning: "用比较结构对比两地——展示对比分析能力",
  cn: "跟我现在住的地方比，那里悠闲多了。",
  trap: "My hometown is more relaxed than here.",
  tip: "Compared to 快速过渡，MUCH MORE 和 LAID-BACK 构成重音高潮",
  pattern: "Compared to where I live now, it's much more + [adj]",
  variants: ["It's a lot more relaxed than the city I'm in now.", "The pace of life is way slower back home.", "Life moves at a completely different speed there."]
};

const s443 = {
  id: 443,
  cat: "Hometown",
  scene: "city",
  text: "The one thing I'd change is the public transport system.",
  words: ["The","one","thing","I'd","change","is","the","public","transport","system"],
  stress: [0.1, 0.8, 1.0, 0.3, 1.0, 0.2, 0.1, 0.8, 1.0, 1.0],
  ipa: "/ðə wʌn θɪŋ aɪd tʃeɪndʒ ɪz ðə ˈpʌblɪk ˈtrænspɔːt ˈsɪstəm/",
  meaning: "用假设句委婉提出建议——避免直接批评",
  cn: "如果要改一样的话，我想改公共交通系统。",
  trap: "I want to change the bus system.",
  tip: "ONE THING 和 CHANGE 构成第一节奏，PUBLIC TRANSPORT SYSTEM 三词连读",
  pattern: "The one thing I'd change is the + [noun phrase]",
  variants: ["If I could improve one thing, it'd be the transport.", "The transport network could really do with an upgrade.", "Transport is the one area where it falls short."]
};

const s444 = {
  id: 444,
  cat: "Hometown",
  scene: "city",
  text: "People tend to be quite friendly and welcoming towards strangers.",
  words: ["People","tend","to","be","quite","friendly","and","welcoming","towards","strangers"],
  stress: [1.0, 0.7, 0.1, 0.2, 0.5, 1.0, 0.1, 1.0, 0.5, 1.0],
  ipa: "/ˈpiːpl tend tə bi kwaɪt ˈfrendli ənd ˈwelkəmɪŋ təˈwɔːdz ˈstreɪndʒəz/",
  meaning: "用 tend to 表示一般趋势——比 always 更精准",
  cn: "人们通常对陌生人很友好热情。",
  trap: "People are always nice to new people.",
  tip: "PEOPLE 和 TEND 开头重读，FRIENDLY、WELCOMING、STRANGERS 三连重音",
  pattern: "People tend to be quite + [adj] + and + [adj] + towards + [noun]",
  variants: ["Locals are generally warm and approachable.", "You'll find people are really hospitable.", "It's the kind of place where strangers smile at each other."]
};

const s445 = {
  id: 445,
  cat: "Hometown",
  scene: "city",
  text: "I haven't been back for about six months now.",
  words: ["I","haven't","been","back","for","about","six","months","now"],
  stress: [0.2, 0.5, 0.7, 1.0, 0.1, 0.3, 0.8, 1.0, 0.5],
  ipa: "/aɪ ˈhævnt biːn bæk fər əˈbaʊt sɪks mʌnθs naʊ/",
  meaning: "用现在完成时表达一段时间的持续——语法精准得分",
  cn: "大概有六个月没回去了。",
  trap: "I didn't go back already six months.",
  tip: "HAVEN'T BEEN BACK 三词连读，SIX MONTHS 是核心信息重音",
  pattern: "I haven't been back for about + [time] + now",
  variants: ["It's been roughly half a year since my last visit.", "I last went home around six months ago.", "I'm overdue a visit, to be honest."]
};

const s446 = {
  id: 446,
  cat: "Hometown",
  scene: "city",
  text: "There's been a lot of investment in the city centre recently.",
  words: ["There's","been","a","lot","of","investment","in","the","city","centre","recently"],
  stress: [0.3, 0.5, 0.1, 0.7, 0.1, 1.0, 0.2, 0.1, 0.8, 1.0, 0.8],
  ipa: "/ðeəz biːn ə lɒt əv ɪnˈvestmənt ɪn ðə ˈsɪti ˈsentə ˈriːsntli/",
  meaning: "用 there's been 引出近期变化——现在完成时的灵活运用",
  cn: "最近城市中心有了大量投资。",
  trap: "Recently much money was put into the city middle.",
  tip: "INVESTMENT 重在 -VEST-，CITY CENTRE 双词重音，RECENTLY 句尾强调",
  pattern: "There's been a lot of + [noun] + in the + [place] + recently",
  variants: ["The city centre has had a huge makeover.", "They've poured a lot of money into regenerating the centre.", "The centre is barely recognisable after all the development."]
};

const s447 = {
  id: 447,
  cat: "Hometown",
  scene: "city",
  text: "On the whole, I'd say it's a pretty decent place to grow up.",
  words: ["On","the","whole","I'd","say","it's","a","pretty","decent","place","to","grow","up"],
  stress: [0.2, 0.1, 0.8, 0.3, 0.5, 0.2, 0.1, 0.5, 1.0, 1.0, 0.1, 1.0, 0.7],
  ipa: "/ɒn ðə həʊl aɪd seɪ ɪts ə ˈprɪti ˈdiːsnt pleɪs tə ɡrəʊ ʌp/",
  meaning: "用 on the whole 做总结性评价——成熟的评价方式",
  cn: "总体来说，是个挺不错的成长地方。",
  trap: "Generally, it is a good place for children.",
  tip: "On the whole 作为过渡短语快速弱读，DECENT PLACE 和 GROW UP 两个重音组",
  pattern: "On the whole, I'd say it's a pretty + [adj] + place to + [verb]",
  variants: ["All things considered, it's a solid place to grow up.", "Looking back, I had a pretty good upbringing there.", "I'd give it high marks as a place to raise kids."]
};

const s448 = {
  id: 448,
  cat: "Hometown",
  scene: "city",
  text: "The traffic congestion is probably the biggest issue at the moment.",
  words: ["The","traffic","congestion","is","probably","the","biggest","issue","at","the","moment"],
  stress: [0.1, 1.0, 1.0, 0.2, 0.5, 0.1, 1.0, 1.0, 0.2, 0.1, 0.7],
  ipa: "/ðə ˈtræfɪk kənˈdʒestʃən ɪz ˈprɒbəbli ðə ˈbɪɡɪst ˈɪʃuː ət ðə ˈməʊmənt/",
  meaning: "用 at the moment 限定时间——表达精确得分高",
  cn: "目前交通拥堵大概是最大的问题。",
  trap: "Now the traffic jam is the number one problem.",
  tip: "TRAFFIC CONGESTION 双词重读，BIGGEST ISSUE 双词重读，两组对称节奏",
  pattern: "The + [noun] + is probably the biggest issue at the moment",
  variants: ["The roads are absolutely choked during rush hour.", "Getting around by car is a nightmare right now.", "Congestion is the one thing everyone complains about."]
};

const s449 = {
  id: 449,
  cat: "Hometown",
  scene: "city",
  text: "I reckon it's become more cosmopolitan over the years.",
  words: ["I","reckon","it's","become","more","cosmopolitan","over","the","years"],
  stress: [0.2, 0.7, 0.2, 0.7, 0.5, 1.0, 0.3, 0.1, 1.0],
  ipa: "/aɪ ˈrekən ɪts bɪˈkʌm mɔː ˌkɒzməˈpɒlɪtən ˈəʊvə ðə jɪəz/",
  meaning: "用 I reckon 替代 I think——英式口语特色",
  cn: "我觉得这些年变得更国际化了。",
  trap: "I think it became more international in recent years.",
  tip: "I reckon 比 I think 更口语化，COSMOPOLITAN 五音节重在 -POL-",
  pattern: "I reckon it's become more + [adj] + over the years",
  variants: ["It's grown a lot more diverse recently.", "You can really see the international influence now.", "It's way more multicultural than it used to be."]
};

const s450 = {
  id: 450,
  cat: "Hometown",
  scene: "city",
  text: "If you ever get the chance to visit, I'd highly recommend it.",
  words: ["If","you","ever","get","the","chance","to","visit","I'd","highly","recommend","it"],
  stress: [0.2, 0.2, 0.5, 0.5, 0.1, 1.0, 0.1, 1.0, 0.3, 0.8, 1.0, 0.2],
  ipa: "/ɪf juː ˈevə ɡet ðə tʃɑːns tə ˈvɪzɪt aɪd ˈhaɪli ˌrekəˈmend ɪt/",
  meaning: "用条件句推荐家乡——优雅的结束句",
  cn: "如果你有机会去的话，我强烈推荐。",
  trap: "If you can go, I suggest you to go.",
  tip: "CHANCE 和 VISIT 是条件部分的重音，HIGHLY RECOMMEND 是高潮",
  pattern: "If you ever get the chance to + [verb], I'd highly recommend it",
  variants: ["It's well worth a visit if you're ever in the area.", "You'd love it there, I promise.", "I'd strongly suggest checking it out."]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY15 = [
  s421, s422, s423, s424, s425, s426, s427, s428, s429, s430,
  s431, s432, s433, s434, s435, s436, s437, s438, s439, s440,
  s441, s442, s443, s444, s445, s446, s447, s448, s449, s450
];

export const SCENES_DAY15 = {
  421: { icon: "🏙️", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  422: { icon: "🗺️", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  423: { icon: "👥", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  424: { icon: "🔄", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  425: { icon: "🍜", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  426: { icon: "💭", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  427: { icon: "🤝", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  428: { icon: "💰", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  429: { icon: "😐", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  430: { icon: "🚶", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  431: { icon: "❤️", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  432: { icon: "🌦️", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  433: { icon: "🏠", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  434: { icon: "🚇", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  435: { icon: "🌃", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  436: { icon: "🏘️", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  437: { icon: "🌳", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  438: { icon: "✨", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  439: { icon: "🌿", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  440: { icon: "💼", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  441: { icon: "🍲", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  442: { icon: "⚖️", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  443: { icon: "🚌", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  444: { icon: "😊", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  445: { icon: "📅", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  446: { icon: "🏗️", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  447: { icon: "👍", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  448: { icon: "🚗", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  449: { icon: "🌍", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" },
  450: { icon: "🎯", colors: ["#0ea5e9","#38bdf8"], title: "HOME TOWN", sub: "IELTS Part 1 · Hometown" }
};
