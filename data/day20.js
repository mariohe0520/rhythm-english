// ─── Day 20 · IELTS Part 1 — Health & Food ──────────────────────
// 30 sentences (id 571-600)

const s571 = {
  id: 571,
  cat: "Health & Food",
  scene: "wellness",
  text: "I try to eat a balanced diet, but I have a weakness for sweet things.",
  words: ["I","try","to","eat","a","balanced","diet","but","I","have","a","weakness","for","sweet","things"],
  stress: [0.2, 0.7, 0.1, 0.7, 0.1, 1.0, 1.0, 0.3, 0.2, 0.5, 0.1, 1.0, 0.1, 1.0, 0.7],
  ipa: "/aɪ traɪ tə iːt ə ˈbælənst ˈdaɪət bʌt aɪ hæv ə ˈwiːknɪs fə swiːt θɪŋz/",
  meaning: "用 have a weakness for 地道承认嗜好——自然坦诚",
  cn: "我尽量吃均衡饮食，但对甜食没有抵抗力。",
  trap: "I eat healthy food but I like sweet food too much.",
  tip: "BALANCED DIET 固定搭配双重音，WEAKNESS 和 SWEET THINGS 转折后双重音",
  pattern: "I try to eat a + [adj] + diet, but I have a weakness for + [noun]",
  variants: ["My diet is decent except for my sweet tooth.", "I eat well most of the time, but sugar is my kryptonite.", "Healthy eating goes out the window when I see dessert."]
};

const s572 = {
  id: 572,
  cat: "Health & Food",
  scene: "wellness",
  text: "I make a point of exercising at least three times a week.",
  words: ["I","make","a","point","of","exercising","at","least","three","times","a","week"],
  stress: [0.2, 0.5, 0.1, 1.0, 0.1, 1.0, 0.2, 0.5, 0.8, 1.0, 0.1, 1.0],
  ipa: "/aɪ meɪk ə pɔɪnt əv ˈeksəsaɪzɪŋ ət liːst θriː taɪmz ə wiːk/",
  meaning: "用 make a point of 替代 I always——展示表达多样性",
  cn: "我坚持每周至少运动三次。",
  trap: "I always exercise three times every week.",
  tip: "MAKE A POINT OF 固定搭配快速连读，EXERCISING 和 THREE TIMES A WEEK 双组重音",
  pattern: "I make a point of + [verb]ing + at least + [frequency]",
  variants: ["I'm committed to working out three times a week minimum.", "Exercise is a non-negotiable part of my routine.", "Three sessions a week is my baseline."]
};

const s573 = {
  id: 573,
  cat: "Health & Food",
  scene: "wellness",
  text: "Cooking from scratch is something I find genuinely satisfying.",
  words: ["Cooking","from","scratch","is","something","I","find","genuinely","satisfying"],
  stress: [1.0, 0.2, 1.0, 0.2, 0.5, 0.2, 0.7, 0.7, 1.0],
  ipa: "/ˈkʊkɪŋ frəm skrætʃ ɪz ˈsʌmθɪŋ aɪ faɪnd ˈdʒenjuɪnli ˈsætɪsfaɪɪŋ/",
  meaning: "用 from scratch 地道表达——比 by myself 更精准",
  cn: "从零开始做饭是件让我真正有满足感的事。",
  trap: "I like cooking everything by myself, it feels good.",
  tip: "COOKING FROM SCRATCH 三词一组重读，GENUINELY SATISFYING 情感评价重音",
  pattern: "[Verb]ing from scratch is something I find + [adv] + [adj]",
  variants: ["There's real satisfaction in making a meal from nothing.", "I love the process of cooking everything from scratch.", "Making food from raw ingredients is incredibly rewarding."]
};

const s574 = {
  id: 574,
  cat: "Health & Food",
  scene: "wellness",
  text: "I've cut down on processed food quite dramatically in recent years.",
  words: ["I've","cut","down","on","processed","food","quite","dramatically","in","recent","years"],
  stress: [0.2, 0.7, 0.7, 0.2, 1.0, 1.0, 0.5, 1.0, 0.2, 0.7, 1.0],
  ipa: "/aɪv kʌt daʊn ɒn ˈprɒsest fuːd kwaɪt drəˈmætɪkəli ɪn ˈriːsnt jɪəz/",
  meaning: "用 cut down on 和 dramatically——两个高级用法",
  cn: "近几年我大幅减少了加工食品的摄入。",
  trap: "I eat much less factory food than before.",
  tip: "CUT DOWN ON 短语动词，PROCESSED FOOD 双重音，DRAMATICALLY 四音节重在 -MAT-",
  pattern: "I've cut down on + [noun] + quite dramatically in recent years",
  variants: ["Processed food is something I've mostly eliminated.", "I've made a conscious effort to avoid packaged food.", "My diet is so much cleaner than it used to be."]
};

const s575 = {
  id: 575,
  cat: "Health & Food",
  scene: "wellness",
  text: "I'm a firm believer that breakfast is the most important meal of the day.",
  words: ["I'm","a","firm","believer","that","breakfast","is","the","most","important","meal","of","the","day"],
  stress: [0.2, 0.1, 0.8, 1.0, 0.1, 1.0, 0.2, 0.1, 0.5, 1.0, 1.0, 0.1, 0.1, 0.7],
  ipa: "/aɪm ə fɜːm bɪˈliːvə ðət ˈbrekfəst ɪz ðə məʊst ɪmˈpɔːtənt miːl əv ðə deɪ/",
  meaning: "用 firm believer 表达坚定信念——比 I think 更有力",
  cn: "我坚信早餐是一天中最重要的一餐。",
  trap: "I strongly think breakfast is the most important eating time.",
  tip: "FIRM BELIEVER 态度表达，BREAKFAST 话题词，MOST IMPORTANT MEAL 核心观点三重音",
  pattern: "I'm a firm believer that + [clause]",
  variants: ["I never skip breakfast — it sets the tone for the day.", "Starting the day with a proper meal is non-negotiable.", "A good breakfast fuels everything that follows."]
};

const s576 = {
  id: 576,
  cat: "Health & Food",
  scene: "wellness",
  text: "Street food is one of the things I love most about travelling in Asia.",
  words: ["Street","food","is","one","of","the","things","I","love","most","about","travelling","in","Asia"],
  stress: [1.0, 1.0, 0.2, 0.7, 0.1, 0.1, 0.5, 0.2, 1.0, 1.0, 0.3, 1.0, 0.2, 1.0],
  ipa: "/striːt fuːd ɪz wʌn əv ðə θɪŋz aɪ lʌv məʊst əˈbaʊt ˈtrævəlɪŋ ɪn ˈeɪʒə/",
  meaning: "用 one of the things I love most 精致表达——不直白",
  cn: "街头美食是我在亚洲旅行时最喜欢的事情之一。",
  trap: "When I go to Asia, the road food is my favourite.",
  tip: "STREET FOOD 主语双重音，LOVE MOST 情感高点，TRAVELLING ASIA 场景收尾",
  pattern: "Street food is one of the things I love most about + [verb]ing + in + [place]",
  variants: ["Asian street food is in a league of its own.", "Nothing beats eating freshly cooked food on the street.", "The street food scene in Asia is absolutely incredible."]
};

const s577 = {
  id: 577,
  cat: "Health & Food",
  scene: "wellness",
  text: "I've been trying to drink more water, which sounds simple but it's not.",
  words: ["I've","been","trying","to","drink","more","water","which","sounds","simple","but","it's","not"],
  stress: [0.2, 0.3, 1.0, 0.1, 1.0, 0.8, 1.0, 0.2, 0.5, 1.0, 0.3, 0.2, 0.8],
  ipa: "/aɪv biːn ˈtraɪɪŋ tə drɪŋk mɔː ˈwɔːtə wɪtʃ saʊndz ˈsɪmpl bʌt ɪts nɒt/",
  meaning: "用 which sounds simple but it's not 自嘲转折——真实有趣",
  cn: "我一直在尝试多喝水，听起来简单但其实不容易。",
  trap: "I try to drink more water, it seems easy but it is hard.",
  tip: "TRYING DRINK MORE WATER 四词一气，SIMPLE 和 NOT 对比重音",
  pattern: "I've been trying to + [verb phrase], which sounds simple but it's not",
  variants: ["Staying hydrated is harder than you'd think.", "You'd be surprised how hard it is to drink enough water.", "Something as basic as drinking water takes real effort."]
};

const s578 = {
  id: 578,
  cat: "Health & Food",
  scene: "wellness",
  text: "Mental health is just as important as physical health, in my opinion.",
  words: ["Mental","health","is","just","as","important","as","physical","health","in","my","opinion"],
  stress: [1.0, 1.0, 0.2, 0.5, 0.3, 1.0, 0.3, 1.0, 1.0, 0.2, 0.2, 1.0],
  ipa: "/ˈmentəl helθ ɪz dʒʌst əz ɪmˈpɔːtənt əz ˈfɪzɪkəl helθ ɪn maɪ əˈpɪnjən/",
  meaning: "用 just as...as 等比结构——展示语法精准",
  cn: "在我看来，心理健康和身体健康一样重要。",
  trap: "I think mind health and body health are same important.",
  tip: "MENTAL HEALTH 和 PHYSICAL HEALTH 对称双重音，IMPORTANT 中间桥梁",
  pattern: "Mental health is just as + [adj] + as physical health, in my opinion",
  variants: ["We need to treat mental and physical health equally.", "Your mind needs as much care as your body.", "Physical fitness means nothing without mental wellness."]
};

const s579 = {
  id: 579,
  cat: "Health & Food",
  scene: "wellness",
  text: "I'm not much of a morning person, so I tend to exercise in the evenings.",
  words: ["I'm","not","much","of","a","morning","person","so","I","tend","to","exercise","in","the","evenings"],
  stress: [0.2, 0.5, 0.7, 0.1, 0.1, 1.0, 1.0, 0.2, 0.2, 0.5, 0.1, 1.0, 0.2, 0.1, 1.0],
  ipa: "/aɪm nɒt mʌtʃ əv ə ˈmɔːnɪŋ ˈpɜːsən səʊ aɪ tend tə ˈeksəsaɪz ɪn ðə ˈiːvnɪŋz/",
  meaning: "用 not much of a 温和否定——展示地道表达",
  cn: "我不太是早起的人，所以通常晚上运动。",
  trap: "I don't like waking up early, so I do sports at night.",
  tip: "NOT MUCH OF A 快速弱读，MORNING PERSON 双重音，EXERCISE EVENINGS 结果重音",
  pattern: "I'm not much of a + [noun] + person, so I tend to + [verb] + in the + [time]",
  variants: ["Evening workouts suit me better.", "I'm useless in the morning — my energy peaks at night.", "Getting up early to exercise? Not a chance."]
};

const s580 = {
  id: 580,
  cat: "Health & Food",
  scene: "wellness",
  text: "I have a real appreciation for Japanese cuisine — it's incredibly refined.",
  words: ["I","have","a","real","appreciation","for","Japanese","cuisine","it's","incredibly","refined"],
  stress: [0.2, 0.5, 0.1, 0.7, 1.0, 0.1, 1.0, 1.0, 0.2, 0.7, 1.0],
  ipa: "/aɪ hæv ə rɪəl əˌpriːʃiˈeɪʃən fə ˌdʒæpəˈniːz kwɪˈziːn ɪts ɪnˈkredɪbli rɪˈfaɪnd/",
  meaning: "用 appreciation 和 refined——两个高级词汇",
  cn: "我非常欣赏日本料理——它精致得不可思议。",
  trap: "I very like Japanese food, it is very good quality.",
  tip: "APPRECIATION 五音节重在 -A-，JAPANESE CUISINE 双重音，REFINED 评价重音",
  pattern: "I have a real appreciation for + [noun] + cuisine — it's incredibly + [adj]",
  variants: ["Japanese food is on another level entirely.", "The attention to detail in Japanese cuisine is unmatched.", "There's an artistry to Japanese cooking that I truly admire."]
};

const s581 = {
  id: 581,
  cat: "Health & Food",
  scene: "wellness",
  text: "I find that yoga helps me manage stress better than anything else.",
  words: ["I","find","that","yoga","helps","me","manage","stress","better","than","anything","else"],
  stress: [0.2, 0.7, 0.1, 1.0, 0.7, 0.2, 1.0, 1.0, 1.0, 0.3, 0.5, 0.5],
  ipa: "/aɪ faɪnd ðət ˈjəʊɡə helps miː ˈmænɪdʒ stres ˈbetə ðən ˈeniθɪŋ els/",
  meaning: "用 better than anything else 最高级比较——有力推荐",
  cn: "我发现瑜伽比任何其他方式都更能帮我管理压力。",
  trap: "Yoga is the best way for me to reduce stress.",
  tip: "YOGA 主语重读，MANAGE STRESS 核心搭配，BETTER THAN ANYTHING 比较结构",
  pattern: "I find that + [activity] + helps me + [verb] + [noun] + better than anything else",
  variants: ["Yoga is my ultimate stress reliever.", "Nothing calms me down quite like a yoga session.", "For stress management, yoga is unbeatable."]
};

const s582 = {
  id: 582,
  cat: "Health & Food",
  scene: "wellness",
  text: "Portion sizes in restaurants have gotten completely out of hand.",
  words: ["Portion","sizes","in","restaurants","have","gotten","completely","out","of","hand"],
  stress: [1.0, 1.0, 0.2, 1.0, 0.2, 0.5, 0.7, 1.0, 0.1, 1.0],
  ipa: "/ˈpɔːʃən ˈsaɪzɪz ɪn ˈrestərɒnts hæv ˈɡɒtən kəmˈpliːtli aʊt əv hænd/",
  meaning: "用 out of hand 习语——形象表达不满",
  cn: "餐厅的份量已经完全失控了。",
  trap: "Restaurant food is too much big now.",
  tip: "PORTION SIZES 双词主语，RESTAURANTS 场景词，OUT OF HAND 习语结尾重读",
  pattern: "Portion sizes in + [noun] + have gotten completely out of hand",
  variants: ["Restaurant servings are ridiculously large these days.", "The amount of food you get in one sitting is excessive.", "We're being served portions meant for three people."]
};

const s583 = {
  id: 583,
  cat: "Health & Food",
  scene: "wellness",
  text: "I've become more adventurous with food as I've gotten older.",
  words: ["I've","become","more","adventurous","with","food","as","I've","gotten","older"],
  stress: [0.2, 0.5, 0.5, 1.0, 0.2, 1.0, 0.2, 0.2, 0.5, 1.0],
  ipa: "/aɪv bɪˈkʌm mɔːr ədˈventʃərəs wɪð fuːd əz aɪv ˈɡɒtən ˈəʊldə/",
  meaning: "用 adventurous 描述饮食态度变化——展示成长",
  cn: "随着年龄增长，我在食物上越来越敢尝试了。",
  trap: "Now I am older, I want to try more different food.",
  tip: "ADVENTUROUS 四音节重在 -VEN-，FOOD 核心词，OLDER 时间对比重音",
  pattern: "I've become more + [adj] + with + [noun] + as I've gotten older",
  variants: ["I used to be a fussy eater, but I'll try anything now.", "Age has made me more open-minded about food.", "I'm far more willing to experiment with food these days."]
};

const s584 = {
  id: 584,
  cat: "Health & Food",
  scene: "wellness",
  text: "I think people underestimate the impact of sleep on overall wellbeing.",
  words: ["I","think","people","underestimate","the","impact","of","sleep","on","overall","wellbeing"],
  stress: [0.2, 0.5, 0.5, 1.0, 0.1, 1.0, 0.1, 1.0, 0.2, 0.7, 1.0],
  ipa: "/aɪ θɪŋk ˈpiːpl ˌʌndərˈestɪmeɪt ðə ˈɪmpækt əv sliːp ɒn ˌəʊvərˈɔːl ˌwelˈbiːɪŋ/",
  meaning: "用 underestimate 和 impact——两个学术词汇",
  cn: "我觉得人们低估了睡眠对整体健康的影响。",
  trap: "People don't know sleep is very important for health.",
  tip: "UNDERESTIMATE 五音节重在 -ES-，IMPACT 和 SLEEP 双重音，WELLBEING 结尾",
  pattern: "I think people underestimate the impact of + [noun] + on + [noun]",
  variants: ["Sleep is the foundation of good health and people ignore it.", "We sacrifice sleep without realising the consequences.", "If I had to pick one health habit, it would be better sleep."]
};

const s585 = {
  id: 585,
  cat: "Health & Food",
  scene: "wellness",
  text: "I've gone through phases of being vegetarian, but I always go back to meat.",
  words: ["I've","gone","through","phases","of","being","vegetarian","but","I","always","go","back","to","meat"],
  stress: [0.2, 0.5, 0.3, 1.0, 0.1, 0.3, 1.0, 0.3, 0.2, 0.7, 0.5, 0.8, 0.1, 1.0],
  ipa: "/aɪv ɡɒn θruː ˈfeɪzɪz əv ˈbiːɪŋ ˌvedʒɪˈteəriən bʌt aɪ ˈɔːlweɪz ɡəʊ bæk tə miːt/",
  meaning: "用 gone through phases 描述饮食变化——展示叙事能力",
  cn: "我经历过几次吃素的阶段，但总是会回到吃肉。",
  trap: "Sometimes I eat no meat, but then I eat meat again.",
  tip: "GONE THROUGH PHASES 固定搭配，VEGETARIAN 五音节重在 -TAR-，GO BACK MEAT 转折重音",
  pattern: "I've gone through phases of + [verb]ing + [adj], but I always + [verb phrase]",
  variants: ["Vegetarianism never quite sticks for me.", "I've tried going veggie multiple times — it never lasts.", "I always end up craving meat after a few months."]
};

const s586 = {
  id: 586,
  cat: "Health & Food",
  scene: "wellness",
  text: "The healthcare system in my country could do with significant improvement.",
  words: ["The","healthcare","system","in","my","country","could","do","with","significant","improvement"],
  stress: [0.1, 1.0, 1.0, 0.2, 0.2, 1.0, 0.3, 0.5, 0.2, 1.0, 1.0],
  ipa: "/ðə ˈhelθkeə ˈsɪstəm ɪn maɪ ˈkʌntri kʊd duː wɪð sɪɡˈnɪfɪkənt ɪmˈpruːvmənt/",
  meaning: "用 could do with 委婉批评——英式礼貌表达",
  cn: "我国的医疗体系还有很大的改善空间。",
  trap: "My country's hospital system needs to be better.",
  tip: "HEALTHCARE SYSTEM 双复合词，COUNTRY 场景词，SIGNIFICANT IMPROVEMENT 建议重音",
  pattern: "The + [noun] + system in my country could do with + [adj] + [noun]",
  variants: ["There's a lot of room for improvement in our healthcare.", "The health system isn't perfect, to put it mildly.", "Healthcare is an area where we really need to step up."]
};

const s587 = {
  id: 587,
  cat: "Health & Food",
  scene: "wellness",
  text: "I'm quite conscious of what I put into my body these days.",
  words: ["I'm","quite","conscious","of","what","I","put","into","my","body","these","days"],
  stress: [0.2, 0.5, 1.0, 0.1, 0.5, 0.2, 0.7, 0.3, 0.2, 1.0, 0.3, 0.7],
  ipa: "/aɪm kwaɪt ˈkɒnʃəs əv wɒt aɪ pʊt ˈɪntə maɪ ˈbɒdi ðiːz deɪz/",
  meaning: "用 conscious of 展示健康意识——精确表达",
  cn: "我现在对自己吃进去的东西还挺有意识的。",
  trap: "Now I think more carefully about what food I eat.",
  tip: "CONSCIOUS 态度词重读，PUT INTO BODY 三词连读表达核心观点",
  pattern: "I'm quite conscious of what I + [verb] + [preposition] + my body these days",
  variants: ["I pay close attention to what I consume.", "I'm much more mindful about nutrition now.", "What I eat is something I think about carefully."]
};

const s588 = {
  id: 588,
  cat: "Health & Food",
  scene: "wellness",
  text: "Comfort food for me is definitely my grandmother's homemade dumplings.",
  words: ["Comfort","food","for","me","is","definitely","my","grandmother's","homemade","dumplings"],
  stress: [1.0, 1.0, 0.1, 0.3, 0.2, 0.7, 0.2, 1.0, 1.0, 1.0],
  ipa: "/ˈkʌmfət fuːd fə miː ɪz ˈdefɪnɪtli maɪ ˈɡrænmʌðəz ˈhəʊmmeɪd ˈdʌmplɪŋz/",
  meaning: "用 comfort food 文化词汇——展示个人故事",
  cn: "对我来说，安慰食物绝对是奶奶做的饺子。",
  trap: "When I feel sad, I want my grandmother's jiaozi.",
  tip: "COMFORT FOOD 双词主语，GRANDMOTHER'S HOMEMADE DUMPLINGS 三词情感高潮",
  pattern: "Comfort food for me is definitely + [possessive] + [adj] + [noun]",
  variants: ["Nothing beats my nan's homemade dumplings.", "Grandma's dumplings are pure comfort in a bowl.", "When I need comfort, it's always my grandmother's cooking."]
};

const s589 = {
  id: 589,
  cat: "Health & Food",
  scene: "wellness",
  text: "I've recently started intermittent fasting and I've noticed a real difference.",
  words: ["I've","recently","started","intermittent","fasting","and","I've","noticed","a","real","difference"],
  stress: [0.2, 0.7, 0.7, 1.0, 1.0, 0.1, 0.2, 0.7, 0.1, 0.7, 1.0],
  ipa: "/aɪv ˈriːsntli ˈstɑːtɪd ˌɪntəˈmɪtənt ˈfɑːstɪŋ ənd aɪv ˈnəʊtɪst ə rɪəl ˈdɪfrəns/",
  meaning: "分享健康趋势体验——intermittent fasting 当代话题",
  cn: "我最近开始间歇性断食，感觉到了明显的变化。",
  trap: "I started sometimes not eating, it works.",
  tip: "INTERMITTENT FASTING 核心话题词，NOTICED 和 REAL DIFFERENCE 结果重音",
  pattern: "I've recently started + [noun phrase] + and I've noticed a real difference",
  variants: ["Intermittent fasting has been surprisingly effective.", "I was sceptical about fasting, but the results speak for themselves.", "Since starting IF, my energy levels have been much better."]
};

const s590 = {
  id: 590,
  cat: "Health & Food",
  scene: "wellness",
  text: "I think food culture says a lot about a society's values and priorities.",
  words: ["I","think","food","culture","says","a","lot","about","a","society's","values","and","priorities"],
  stress: [0.2, 0.5, 1.0, 1.0, 0.7, 0.1, 0.7, 0.3, 0.1, 1.0, 1.0, 0.1, 1.0],
  ipa: "/aɪ θɪŋk fuːd ˈkʌltʃə sez ə lɒt əˈbaʊt ə səˈsaɪətiz ˈvæljuːz ənd praɪˈɒrɪtiz/",
  meaning: "用 says a lot about 表达深层联系——展示文化洞察力",
  cn: "我觉得饮食文化能反映一个社会的价值观和优先级。",
  trap: "What people eat shows what the society thinks is important.",
  tip: "FOOD CULTURE 双重音主语，SOCIETY'S VALUES PRIORITIES 三词结尾递进重音",
  pattern: "I think + [noun] + culture says a lot about a society's + [noun] + and + [noun]",
  variants: ["You can tell a lot about a country by what it eats.", "Food traditions reveal deeper cultural values.", "The way a society eats reflects its identity."]
};

const s591 = {
  id: 591,
  cat: "Health & Food",
  scene: "wellness",
  text: "I'm not a fan of fad diets — I think consistency is more important.",
  words: ["I'm","not","a","fan","of","fad","diets","I","think","consistency","is","more","important"],
  stress: [0.2, 0.5, 0.1, 0.8, 0.1, 1.0, 1.0, 0.2, 0.5, 1.0, 0.2, 0.5, 1.0],
  ipa: "/aɪm nɒt ə fæn əv fæd ˈdaɪəts aɪ θɪŋk kənˈsɪstənsi ɪz mɔːr ɪmˈpɔːtənt/",
  meaning: "用 not a fan of 和 consistency——高级观点表达",
  cn: "我不喜欢时尚节食——我觉得坚持更重要。",
  trap: "I don't like popular diets, keeping same habit is better.",
  tip: "FAD DIETS 批评对象重音，CONSISTENCY 四音节重在 -SIS-，IMPORTANT 观点重音",
  pattern: "I'm not a fan of + [noun] — I think + [noun] + is more important",
  variants: ["Quick-fix diets never work in the long run.", "Sustainability beats any trendy diet out there.", "The best diet is one you can actually stick to."]
};

const s592 = {
  id: 592,
  cat: "Health & Food",
  scene: "wellness",
  text: "Walking is hugely underrated as a form of exercise, I reckon.",
  words: ["Walking","is","hugely","underrated","as","a","form","of","exercise","I","reckon"],
  stress: [1.0, 0.2, 0.7, 1.0, 0.2, 0.1, 0.7, 0.1, 1.0, 0.2, 0.7],
  ipa: "/ˈwɔːkɪŋ ɪz ˈhjuːdʒli ˌʌndəˈreɪtɪd əz ə fɔːm əv ˈeksəsaɪz aɪ ˈrekən/",
  meaning: "用 hugely underrated 强烈表达——I reckon 英式收尾",
  cn: "步行作为一种运动方式被严重低估了，我觉得。",
  trap: "People don't think walking is good exercise, but it is.",
  tip: "WALKING 主语重读，HUGELY UNDERRATED 态度强调，EXERCISE 核心词，I RECKON 英式收尾",
  pattern: "[Activity] is hugely underrated as a form of + [noun], I reckon",
  variants: ["Don't knock walking — it's one of the best exercises.", "Walking does more for your health than people realise.", "A good walk can be just as beneficial as a gym session."]
};

const s593 = {
  id: 593,
  cat: "Health & Food",
  scene: "wellness",
  text: "I tend to meal prep on Sundays to save time during the week.",
  words: ["I","tend","to","meal","prep","on","Sundays","to","save","time","during","the","week"],
  stress: [0.2, 0.7, 0.1, 1.0, 1.0, 0.2, 1.0, 0.1, 0.8, 1.0, 0.3, 0.1, 0.7],
  ipa: "/aɪ tend tə miːl prep ɒn ˈsʌndeɪz tə seɪv taɪm ˈdjʊərɪŋ ðə wiːk/",
  meaning: "描述健康习惯——meal prep 当代词汇",
  cn: "我通常周日做好一周的饭菜来节省时间。",
  trap: "On Sunday I cook food for the whole week.",
  tip: "MEAL PREP 双词动作重音，SUNDAYS 时间锚点，SAVE TIME 目的重音",
  pattern: "I tend to meal prep on + [day] + to save time during the week",
  variants: ["Sunday meal prep is my weekly ritual.", "Batch cooking on Sundays keeps me on track.", "I prepare everything in advance to avoid unhealthy shortcuts."]
};

const s594 = {
  id: 594,
  cat: "Health & Food",
  scene: "wellness",
  text: "The rise of food delivery apps has been both a blessing and a curse.",
  words: ["The","rise","of","food","delivery","apps","has","been","both","a","blessing","and","a","curse"],
  stress: [0.1, 1.0, 0.1, 1.0, 1.0, 1.0, 0.2, 0.3, 0.5, 0.1, 1.0, 0.1, 0.1, 1.0],
  ipa: "/ðə raɪz əv fuːd dɪˈlɪvəri æps həz biːn bəʊθ ə ˈblesɪŋ ənd ə kɜːs/",
  meaning: "用 both a blessing and a curse 平衡评价——高分表达",
  cn: "外卖应用的兴起既是福也是祸。",
  trap: "Food delivery apps are good and bad.",
  tip: "RISE FOOD DELIVERY APPS 主语链，BLESSING 和 CURSE 对比结尾双重音",
  pattern: "The rise of + [noun] + has been both a blessing and a curse",
  variants: ["Delivery apps are incredibly convenient but terribly tempting.", "Food apps make life easier but my waistline bigger.", "It's a double-edged sword — convenience versus health."]
};

const s595 = {
  id: 595,
  cat: "Health & Food",
  scene: "wellness",
  text: "I believe prevention is far more effective than cure when it comes to health.",
  words: ["I","believe","prevention","is","far","more","effective","than","cure","when","it","comes","to","health"],
  stress: [0.2, 0.5, 1.0, 0.2, 0.7, 0.5, 1.0, 0.3, 1.0, 0.2, 0.1, 0.3, 0.1, 1.0],
  ipa: "/aɪ bɪˈliːv prɪˈvenʃən ɪz fɑː mɔːr ɪˈfektɪv ðən kjʊə wen ɪt kʌmz tə helθ/",
  meaning: "用经典谚语式表达传达健康理念",
  cn: "我相信在健康方面，预防远比治疗更有效。",
  trap: "Stopping illness is better than fixing illness.",
  tip: "PREVENTION 重在 -VEN-，EFFECTIVE 和 CURE 对比重音，HEALTH 结尾收尾",
  pattern: "I believe + [noun] + is far more + [adj] + than + [noun] + when it comes to + [noun]",
  variants: ["An ounce of prevention is worth a pound of cure.", "Taking care of yourself now saves problems later.", "Preventive health measures are criminally underused."]
};

const s596 = {
  id: 596,
  cat: "Health & Food",
  scene: "wellness",
  text: "Spicy food is something I've gradually built up a tolerance for.",
  words: ["Spicy","food","is","something","I've","gradually","built","up","a","tolerance","for"],
  stress: [1.0, 1.0, 0.2, 0.5, 0.2, 0.7, 1.0, 0.7, 0.1, 1.0, 0.3],
  ipa: "/ˈspaɪsi fuːd ɪz ˈsʌmθɪŋ aɪv ˈɡrædʒuəli bɪlt ʌp ə ˈtɒlərəns fɔː/",
  meaning: "用 built up a tolerance 精确描述——比 I can eat now 高级",
  cn: "辣的食物是我慢慢才培养出耐受力的。",
  trap: "Now I can eat spicy food because I practised slowly.",
  tip: "SPICY FOOD 主语，GRADUALLY 过程副词，BUILT UP TOLERANCE 短语动词重读",
  pattern: "[Adj] + food is something I've gradually + [verb phrase]",
  variants: ["I've trained myself to handle spice over the years.", "My spice tolerance has come a long way.", "I went from zero spice to maximum heat, slowly but surely."]
};

const s597 = {
  id: 597,
  cat: "Health & Food",
  scene: "wellness",
  text: "I think there's far too much sugar hidden in everyday products.",
  words: ["I","think","there's","far","too","much","sugar","hidden","in","everyday","products"],
  stress: [0.2, 0.5, 0.3, 0.7, 0.5, 0.8, 1.0, 1.0, 0.2, 0.8, 1.0],
  ipa: "/aɪ θɪŋk ðeəz fɑː tuː mʌtʃ ˈʃʊɡə ˈhɪdən ɪn ˈevrɪdeɪ ˈprɒdʌkts/",
  meaning: "表达对食品工业的看法——hidden 暗示问题",
  cn: "我觉得日常产品中隐藏了太多糖分。",
  trap: "There is too much sugar in normal food that we don't know.",
  tip: "FAR TOO MUCH 三词强调过量，SUGAR HIDDEN 核心信息，EVERYDAY PRODUCTS 范围",
  pattern: "I think there's far too much + [noun] + hidden in + [adj] + [noun]",
  variants: ["Hidden sugar is everywhere and it's alarming.", "You'd be shocked at how much sugar is in 'healthy' products.", "The food industry sneaks sugar into practically everything."]
};

const s598 = {
  id: 598,
  cat: "Health & Food",
  scene: "wellness",
  text: "Getting enough sleep is the one thing that has the biggest impact on my mood.",
  words: ["Getting","enough","sleep","is","the","one","thing","that","has","the","biggest","impact","on","my","mood"],
  stress: [0.5, 0.7, 1.0, 0.2, 0.1, 0.8, 1.0, 0.1, 0.3, 0.1, 1.0, 1.0, 0.2, 0.2, 1.0],
  ipa: "/ˈɡetɪŋ ɪˈnʌf sliːp ɪz ðə wʌn θɪŋ ðət hæz ðə ˈbɪɡɪst ˈɪmpækt ɒn maɪ muːd/",
  meaning: "强调句型 the one thing that——有力的重点表达",
  cn: "获得充足的睡眠是对我情绪影响最大的一件事。",
  trap: "If I sleep enough, my feelings are much better.",
  tip: "SLEEP 核心话题词，ONE THING 限定强调，BIGGEST IMPACT 和 MOOD 双重音结尾",
  pattern: "Getting enough + [noun] + is the one thing that has the biggest impact on my + [noun]",
  variants: ["Sleep quality dictates everything about my day.", "When I sleep well, everything else falls into place.", "My mood is directly linked to how much sleep I get."]
};

const s599 = {
  id: 599,
  cat: "Health & Food",
  scene: "wellness",
  text: "I'm fortunate to live near a farmers' market where I can buy fresh produce.",
  words: ["I'm","fortunate","to","live","near","a","farmers'","market","where","I","can","buy","fresh","produce"],
  stress: [0.2, 1.0, 0.1, 0.5, 0.5, 0.1, 1.0, 1.0, 0.2, 0.2, 0.3, 0.7, 1.0, 1.0],
  ipa: "/aɪm ˈfɔːtʃənɪt tə lɪv nɪər ə ˈfɑːməz ˈmɑːkɪt weər aɪ kən baɪ freʃ ˈprɒdjuːs/",
  meaning: "用 fortunate 替代 lucky——词汇升级",
  cn: "我很幸运住在一个农贸市场附近，可以买到新鲜农产品。",
  trap: "I am lucky there is a market near me with fresh vegetables.",
  tip: "FORTUNATE 三音节重在第一，FARMERS' MARKET 双重音，FRESH PRODUCE 结尾",
  pattern: "I'm fortunate to live near a + [place] + where I can + [verb phrase]",
  variants: ["Having a farmers' market nearby is a real luxury.", "I'm lucky to have access to such fresh ingredients.", "The local market is a goldmine for quality produce."]
};

const s600 = {
  id: 600,
  cat: "Health & Food",
  scene: "wellness",
  text: "Ultimately, I think a healthy lifestyle is about making sustainable choices.",
  words: ["Ultimately","I","think","a","healthy","lifestyle","is","about","making","sustainable","choices"],
  stress: [0.8, 0.2, 0.5, 0.1, 0.8, 1.0, 0.2, 0.3, 0.7, 1.0, 1.0],
  ipa: "/ˈʌltɪmɪtli aɪ θɪŋk ə ˈhelθi ˈlaɪfstaɪl ɪz əˈbaʊt ˈmeɪkɪŋ səˈsteɪnəbl ˈtʃɔɪsɪz/",
  meaning: "用 ultimately 和 sustainable 做总结——成熟观点",
  cn: "归根结底，我认为健康的生活方式在于做出可持续的选择。",
  trap: "In the end, healthy life means choosing things you can keep doing.",
  tip: "ULTIMATELY 四音节开头总结，HEALTHY LIFESTYLE 和 SUSTAINABLE CHOICES 两组双重音",
  pattern: "Ultimately, I think + [noun phrase] + is about making + [adj] + choices",
  variants: ["Health isn't about perfection — it's about consistency.", "The healthiest approach is one you can maintain long-term.", "Sustainable habits beat extreme measures every time."]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY20 = [
  s571, s572, s573, s574, s575, s576, s577, s578, s579, s580,
  s581, s582, s583, s584, s585, s586, s587, s588, s589, s590,
  s591, s592, s593, s594, s595, s596, s597, s598, s599, s600
];

export const SCENES_DAY20 = {
  571: { icon: "🥗", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  572: { icon: "🏋️", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  573: { icon: "🍳", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  574: { icon: "🚫", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  575: { icon: "🍞", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  576: { icon: "🍜", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  577: { icon: "💧", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  578: { icon: "🧠", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  579: { icon: "🌙", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  580: { icon: "🍣", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  581: { icon: "🧘", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  582: { icon: "🍽️", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  583: { icon: "🌶️", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  584: { icon: "😴", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  585: { icon: "🥦", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  586: { icon: "🏥", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  587: { icon: "💪", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  588: { icon: "🥟", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  589: { icon: "⏰", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  590: { icon: "🌍", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  591: { icon: "📊", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  592: { icon: "🚶", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  593: { icon: "📦", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  594: { icon: "🛵", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  595: { icon: "🛡️", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  596: { icon: "🌶️", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  597: { icon: "🍬", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  598: { icon: "😴", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  599: { icon: "🥕", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" },
  600: { icon: "🎯", colors: ["#22c55e","#4ade80"], title: "WELLNESS", sub: "IELTS Part 1 · Health & Food" }
};
