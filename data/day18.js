// ─── Day 18 · IELTS Part 1 — Family & Relationships ─────────────
// 30 sentences (id 511-540)

const s511 = {
  id: 511,
  cat: "Family",
  scene: "family",
  text: "I come from a fairly close-knit family.",
  words: ["I","come","from","a","fairly","close-knit","family"],
  stress: [0.2, 0.7, 0.3, 0.1, 0.5, 1.0, 1.0],
  ipa: "/aɪ kʌm frɒm ə ˈfɛəli ˈkləʊsnɪt ˈfæmɪli/",
  meaning: "用 close-knit 描述家庭关系——比 good relationship 高级",
  cn: "我来自一个关系很紧密的家庭。",
  trap: "My family members have very good relationship.",
  tip: "CLOSE-KNIT 复合形容词重读，FAMILY 结尾重音",
  pattern: "I come from a fairly + [adj] + family",
  variants: ["My family is really tight-knit.", "We're a very close family.", "Family bonds are really strong in my household."]
};

const s512 = {
  id: 512,
  cat: "Family",
  scene: "family",
  text: "I'm the eldest of three siblings.",
  words: ["I'm","the","eldest","of","three","siblings"],
  stress: [0.2, 0.1, 1.0, 0.1, 0.8, 1.0],
  ipa: "/aɪm ðə ˈeldɪst əv θriː ˈsɪblɪŋz/",
  meaning: "描述家庭排行——eldest 比 oldest 更正式",
  cn: "我是三个孩子中最大的。",
  trap: "I am the number one child, we have three.",
  tip: "ELDEST 重在第一音节，SIBLINGS 重在第一音节，两个信息词",
  pattern: "I'm the + [ordinal] + of + [number] + siblings",
  variants: ["I'm the oldest of three kids.", "There are three of us and I'm the firstborn.", "I've got two younger siblings."]
};

const s513 = {
  id: 513,
  cat: "Family",
  scene: "family",
  text: "My parents have always been incredibly supportive of my decisions.",
  words: ["My","parents","have","always","been","incredibly","supportive","of","my","decisions"],
  stress: [0.2, 1.0, 0.2, 0.7, 0.3, 0.8, 1.0, 0.1, 0.2, 1.0],
  ipa: "/maɪ ˈpeərənts həv ˈɔːlweɪz biːn ɪnˈkredɪbli səˈpɔːtɪv əv maɪ dɪˈsɪʒənz/",
  meaning: "用 incredibly supportive 描述父母——情感表达得分",
  cn: "我父母一直非常支持我的决定。",
  trap: "My parents always support what I want to do.",
  tip: "PARENTS 开头主语重读，INCREDIBLY SUPPORTIVE 情感强调，DECISIONS 结尾",
  pattern: "My parents have always been + [adv] + [adj] + of my + [noun]",
  variants: ["I'm lucky to have parents who back me up.", "My mum and dad have never tried to hold me back.", "They've always encouraged me to follow my own path."]
};

const s514 = {
  id: 514,
  cat: "Family",
  scene: "family",
  text: "We tend to get together for major holidays and birthdays.",
  words: ["We","tend","to","get","together","for","major","holidays","and","birthdays"],
  stress: [0.2, 0.7, 0.1, 0.5, 0.7, 0.1, 0.8, 1.0, 0.1, 1.0],
  ipa: "/wi tend tə ɡet təˈɡeðə fə ˈmeɪdʒə ˈhɒlɪdeɪz ənd ˈbɜːθdeɪz/",
  meaning: "描述家庭聚会频率——tend to 表示习惯",
  cn: "我们通常在大的节日和生日时会聚在一起。",
  trap: "We usually meet in big festivals and birthday party.",
  tip: "GET TOGETHER 固定搭配连读，HOLIDAYS 和 BIRTHDAYS 并列重音",
  pattern: "We tend to get together for + [occasion] + and + [occasion]",
  variants: ["Family gatherings usually happen around holidays.", "We make a point of seeing each other on special occasions.", "Birthdays and holidays are when the whole family comes together."]
};

const s515 = {
  id: 515,
  cat: "Family",
  scene: "family",
  text: "My younger brother is the complete opposite of me, personality-wise.",
  words: ["My","younger","brother","is","the","complete","opposite","of","me","personality-wise"],
  stress: [0.2, 0.8, 1.0, 0.2, 0.1, 0.7, 1.0, 0.1, 0.5, 1.0],
  ipa: "/maɪ ˈjʌŋɡə ˈbrʌðər ɪz ðə kəmˈpliːt ˈɒpəzɪt əv miː ˌpɜːsəˈnælɪti waɪz/",
  meaning: "用对比描述兄弟姐妹——personality-wise 高级后缀",
  cn: "我弟弟在性格上跟我完全相反。",
  trap: "My brother's personality is totally different from me.",
  tip: "BROTHER 主语重读，COMPLETE OPPOSITE 强调对比，PERSONALITY-WISE 限定范围",
  pattern: "My + [family member] + is the complete opposite of me, + [noun]-wise",
  variants: ["We couldn't be more different, my brother and I.", "In terms of personality, we're chalk and cheese.", "People are often surprised we're related, we're so different."]
};

const s516 = {
  id: 516,
  cat: "Family",
  scene: "family",
  text: "I take after my mother in terms of temperament.",
  words: ["I","take","after","my","mother","in","terms","of","temperament"],
  stress: [0.2, 1.0, 0.7, 0.2, 1.0, 0.2, 0.5, 0.1, 1.0],
  ipa: "/aɪ teɪk ˈɑːftə maɪ ˈmʌðər ɪn tɜːmz əv ˈtemprəmənt/",
  meaning: "用 take after 和 in terms of——两个高级表达",
  cn: "在性情方面我像我妈妈。",
  trap: "My personality is same as my mother.",
  tip: "TAKE AFTER 短语动词重读，MOTHER 主语重音，TEMPERAMENT 三音节重在第一",
  pattern: "I take after my + [family member] + in terms of + [noun]",
  variants: ["I've got my mum's temperament, definitely.", "People say I'm the spitting image of my mum personality-wise.", "I inherited my mother's character, for better or worse."]
};

const s517 = {
  id: 517,
  cat: "Family",
  scene: "family",
  text: "We try to have dinner together at least a few times a week.",
  words: ["We","try","to","have","dinner","together","at","least","a","few","times","a","week"],
  stress: [0.2, 0.7, 0.1, 0.5, 1.0, 0.7, 0.2, 0.8, 0.1, 0.5, 1.0, 0.1, 1.0],
  ipa: "/wi traɪ tə hæv ˈdɪnə təˈɡeðər ət liːst ə fjuː taɪmz ə wiːk/",
  meaning: "描述家庭日常习惯——at least 表示底线",
  cn: "我们尽量每周至少一起吃几顿晚饭。",
  trap: "We eat dinner together some days every week.",
  tip: "DINNER TOGETHER 双词重音，AT LEAST 强调最低标准，TIMES A WEEK 节奏收尾",
  pattern: "We try to have + [meal] + together at least + [frequency]",
  variants: ["Family dinners are a regular thing for us.", "We make it a priority to eat together.", "Sitting down as a family is something we value."]
};

const s518 = {
  id: 518,
  cat: "Family",
  scene: "family",
  text: "My grandmother has had the biggest influence on who I am today.",
  words: ["My","grandmother","has","had","the","biggest","influence","on","who","I","am","today"],
  stress: [0.2, 1.0, 0.2, 0.5, 0.1, 1.0, 1.0, 0.2, 0.5, 0.2, 0.3, 0.8],
  ipa: "/maɪ ˈɡrænmʌðə həz hæd ðə ˈbɪɡɪst ˈɪnfluəns ɒn huː aɪ æm təˈdeɪ/",
  meaning: "描述家人影响力——展示感恩和成熟度",
  cn: "我奶奶对现在的我影响最大。",
  trap: "My grandmother changed me the most.",
  tip: "GRANDMOTHER 开头情感锚点，BIGGEST INFLUENCE 核心双重音，TODAY 收尾",
  pattern: "My + [family member] + has had the biggest influence on + [noun phrase]",
  variants: ["My nan shaped me more than anyone else.", "I owe a lot of who I am to my grandmother.", "If anyone influenced my values, it was my grandmother."]
};

const s519 = {
  id: 519,
  cat: "Family",
  scene: "family",
  text: "We're not a particularly large family, but we're very close.",
  words: ["We're","not","a","particularly","large","family","but","we're","very","close"],
  stress: [0.2, 0.5, 0.1, 0.7, 1.0, 1.0, 0.3, 0.2, 0.7, 1.0],
  ipa: "/wɪə nɒt ə pəˈtɪkjʊləli lɑːdʒ ˈfæmɪli bʌt wɪə ˈveri kləʊs/",
  meaning: "用 not particularly 委婉否定再用 but 转折——精巧结构",
  cn: "我们家不算大家庭，但是非常亲近。",
  trap: "My family is not big but we have close relationship.",
  tip: "PARTICULARLY LARGE 和 FAMILY 第一组，VERY CLOSE 转折后强调",
  pattern: "We're not a particularly + [adj] + family, but we're very + [adj]",
  variants: ["We're a small family, but a tight one.", "Quality over quantity when it comes to my family.", "It's just a handful of us, but we're incredibly close."]
};

const s520 = {
  id: 520,
  cat: "Family",
  scene: "family",
  text: "I try to call my parents at least once a week to keep in touch.",
  words: ["I","try","to","call","my","parents","at","least","once","a","week","to","keep","in","touch"],
  stress: [0.2, 0.7, 0.1, 1.0, 0.2, 1.0, 0.2, 0.5, 0.8, 0.1, 1.0, 0.1, 0.7, 0.3, 0.7],
  ipa: "/aɪ traɪ tə kɔːl maɪ ˈpeərənts ət liːst wʌns ə wiːk tə kiːp ɪn tʌtʃ/",
  meaning: "描述与父母的联系方式——keep in touch 地道表达",
  cn: "我尽量至少每周给父母打一次电话保持联系。",
  trap: "I phone my parents one time a week to connect.",
  tip: "CALL PARENTS 核心动作，AT LEAST ONCE A WEEK 频率信息，KEEP IN TOUCH 收尾搭配",
  pattern: "I try to call my + [family] + at least + [frequency] + to keep in touch",
  variants: ["We talk on the phone regularly, usually weekly.", "I make sure to check in with my parents every week.", "A weekly call home is something I never miss."]
};

const s521 = {
  id: 521,
  cat: "Family",
  scene: "family",
  text: "My father is quite reserved, whereas my mother is incredibly outgoing.",
  words: ["My","father","is","quite","reserved","whereas","my","mother","is","incredibly","outgoing"],
  stress: [0.2, 1.0, 0.2, 0.5, 1.0, 0.5, 0.2, 1.0, 0.2, 0.7, 1.0],
  ipa: "/maɪ ˈfɑːðər ɪz kwaɪt rɪˈzɜːvd weərˈæz maɪ ˈmʌðər ɪz ɪnˈkredɪbli ˈaʊtɡəʊɪŋ/",
  meaning: "用 whereas 进行父母对比——展示复杂句式",
  cn: "我父亲比较内向，而我母亲则非常外向。",
  trap: "My father is quiet but my mother likes to talk.",
  tip: "FATHER RESERVED 第一组重音，WHEREAS 对比连接词，MOTHER OUTGOING 第二组",
  pattern: "My + [person] + is quite + [adj], whereas my + [person] + is + [adv] + [adj]",
  variants: ["They're polar opposites — Dad's quiet, Mum's the life of the party.", "My parents couldn't be more different personality-wise.", "Dad's the introvert, Mum's the extrovert, it balances out."]
};

const s522 = {
  id: 522,
  cat: "Family",
  scene: "family",
  text: "Being an only child has its advantages and disadvantages.",
  words: ["Being","an","only","child","has","its","advantages","and","disadvantages"],
  stress: [0.5, 0.1, 1.0, 1.0, 0.3, 0.2, 1.0, 0.1, 1.0],
  ipa: "/ˈbiːɪŋ ən ˈəʊnli tʃaɪld hæz ɪts ədˈvɑːntɪdʒɪz ənd ˌdɪsədˈvɑːntɪdʒɪz/",
  meaning: "用平衡的 advantages and disadvantages 结构——展示客观性",
  cn: "独生子女有好处也有坏处。",
  trap: "If you are the only child, there are good and bad things.",
  tip: "ONLY CHILD 双词重音，ADVANTAGES 和 DISADVANTAGES 平行结构对称重读",
  pattern: "Being an + [noun] + has its advantages and disadvantages",
  variants: ["There are pros and cons to growing up without siblings.", "Being an only child is a mixed bag, honestly.", "I see both sides of being an only child."]
};

const s523 = {
  id: 523,
  cat: "Family",
  scene: "family",
  text: "Family gatherings can be a bit chaotic, but I wouldn't have it any other way.",
  words: ["Family","gatherings","can","be","a","bit","chaotic","but","I","wouldn't","have","it","any","other","way"],
  stress: [1.0, 1.0, 0.3, 0.2, 0.1, 0.5, 1.0, 0.3, 0.2, 0.5, 0.5, 0.1, 0.5, 0.8, 1.0],
  ipa: "/ˈfæmɪli ˈɡæðərɪŋz kən bi ə bɪt keɪˈɒtɪk bʌt aɪ ˈwʊdnt hæv ɪt ˈeni ˈʌðə weɪ/",
  meaning: "用 wouldn't have it any other way 表达珍惜——地道习语",
  cn: "家庭聚会有时候挺闹腾的，但我不想改变这一点。",
  trap: "Family meetings are very noisy but I like it.",
  tip: "FAMILY GATHERINGS 双词开头，CHAOTIC 关键描述词，WOULDN'T HAVE IT ANY OTHER WAY 整体表达",
  pattern: "[Noun] + can be a bit + [adj], but I wouldn't have it any other way",
  variants: ["Our family gatherings are loud and messy and I love it.", "It's chaos when we're all together, but that's the beauty of it.", "Things get crazy, but that's what makes it special."]
};

const s524 = {
  id: 524,
  cat: "Family",
  scene: "family",
  text: "I look up to my older sister because she's incredibly driven.",
  words: ["I","look","up","to","my","older","sister","because","she's","incredibly","driven"],
  stress: [0.2, 0.7, 0.7, 0.1, 0.2, 0.8, 1.0, 0.3, 0.2, 0.7, 1.0],
  ipa: "/aɪ lʊk ʌp tə maɪ ˈəʊldə ˈsɪstə bɪˈkɒz ʃiːz ɪnˈkredɪbli ˈdrɪvən/",
  meaning: "用 look up to 表达崇敬——短语动词地道用法",
  cn: "我很敬佩姐姐，因为她特别有上进心。",
  trap: "I admire my big sister, she works very hard.",
  tip: "LOOK UP TO 三词短语动词，SISTER 主语重音，INCREDIBLY DRIVEN 情感高潮",
  pattern: "I look up to my + [family member] + because + [clause]",
  variants: ["My older sister is someone I really admire.", "She's a huge inspiration to me.", "I've always looked up to my sister for her determination."]
};

const s525 = {
  id: 525,
  cat: "Family",
  scene: "family",
  text: "We've grown closer as we've gotten older, funnily enough.",
  words: ["We've","grown","closer","as","we've","gotten","older","funnily","enough"],
  stress: [0.2, 1.0, 1.0, 0.2, 0.2, 0.5, 1.0, 0.8, 0.5],
  ipa: "/wiːv ɡrəʊn ˈkləʊsər əz wiːv ˈɡɒtən ˈəʊldə ˈfʌnɪli ɪˈnʌf/",
  meaning: "用 funnily enough 表达意外——自然的口语添加",
  cn: "有意思的是，我们年纪越大反而越亲近了。",
  trap: "We are more close now than before, it is interesting.",
  tip: "GROWN CLOSER 情感发展核心，OLDER 时间参照，FUNNILY ENOUGH 自嘲收尾",
  pattern: "We've grown + [adj] + as we've gotten + [adj], funnily enough",
  variants: ["Age has brought us closer together.", "We get on much better now than when we were kids.", "The older we get, the more we appreciate each other."]
};

const s526 = {
  id: 526,
  cat: "Family",
  scene: "family",
  text: "My family is quite traditional when it comes to certain values.",
  words: ["My","family","is","quite","traditional","when","it","comes","to","certain","values"],
  stress: [0.2, 1.0, 0.2, 0.5, 1.0, 0.2, 0.1, 0.5, 0.1, 0.7, 1.0],
  ipa: "/maɪ ˈfæmɪli ɪz kwaɪt trəˈdɪʃənəl wen ɪt kʌmz tə ˈsɜːtn ˈvæljuːz/",
  meaning: "用 when it comes to 限定范围——精确而不笼统",
  cn: "在某些价值观上，我家还是挺传统的。",
  trap: "My family has old thinking about some things.",
  tip: "FAMILY 和 TRADITIONAL 双重音，WHEN IT COMES TO 过渡连读，VALUES 结尾重读",
  pattern: "My family is quite + [adj] + when it comes to + [noun]",
  variants: ["We hold onto some traditional values pretty firmly.", "There's a traditional side to my family, for sure.", "Certain traditions are really important in my household."]
};

const s527 = {
  id: 527,
  cat: "Family",
  scene: "family",
  text: "I'm not as close to my extended family as I'd like to be.",
  words: ["I'm","not","as","close","to","my","extended","family","as","I'd","like","to","be"],
  stress: [0.2, 0.5, 0.3, 1.0, 0.1, 0.2, 1.0, 1.0, 0.2, 0.3, 0.8, 0.1, 0.3],
  ipa: "/aɪm nɒt əz kləʊs tə maɪ ɪkˈstendɪd ˈfæmɪli əz aɪd laɪk tə biː/",
  meaning: "用 as...as I'd like 表达遗憾——成熟的表达方式",
  cn: "我跟大家庭的联系没有自己希望的那么紧密。",
  trap: "I don't have very close relationship with my relatives.",
  tip: "CLOSE 是核心形容词重读，EXTENDED FAMILY 是对象，AS I'D LIKE TO BE 遗憾结构",
  pattern: "I'm not as + [adj] + to my + [noun] + as I'd like to be",
  variants: ["I wish I saw my extended family more often.", "We're not that close with the wider family, sadly.", "Distance has made it hard to stay connected with relatives."]
};

const s528 = {
  id: 528,
  cat: "Family",
  scene: "family",
  text: "My parents instilled in me the importance of education from a young age.",
  words: ["My","parents","instilled","in","me","the","importance","of","education","from","a","young","age"],
  stress: [0.2, 1.0, 1.0, 0.2, 0.3, 0.1, 1.0, 0.1, 1.0, 0.2, 0.1, 0.8, 1.0],
  ipa: "/maɪ ˈpeərənts ɪnˈstɪld ɪn miː ðə ɪmˈpɔːtəns əv ˌedjʊˈkeɪʃən frəm ə jʌŋ eɪdʒ/",
  meaning: "用 instilled 替代 taught——展示高级词汇",
  cn: "我父母从小就灌输给我教育的重要性。",
  trap: "My parents told me study is important when I was small.",
  tip: "INSTILLED 重在 -STILLED，IMPORTANCE 和 EDUCATION 双核心重音，YOUNG AGE 时间",
  pattern: "My parents instilled in me the importance of + [noun] + from a young age",
  variants: ["Education was always a top priority in my family.", "My parents drilled into me that learning matters.", "I was brought up to value education above everything."]
};

const s529 = {
  id: 529,
  cat: "Family",
  scene: "family",
  text: "I'd describe my mother as someone who's incredibly warm and patient.",
  words: ["I'd","describe","my","mother","as","someone","who's","incredibly","warm","and","patient"],
  stress: [0.3, 0.8, 0.2, 1.0, 0.2, 0.5, 0.2, 0.7, 1.0, 0.1, 1.0],
  ipa: "/aɪd dɪˈskraɪb maɪ ˈmʌðər əz ˈsʌmwʌn huːz ɪnˈkredɪbli wɔːm ənd ˈpeɪʃənt/",
  meaning: "用 describe as someone who's 结构描述人——展示叙事能力",
  cn: "我会形容我妈妈是一个非常温暖有耐心的人。",
  trap: "My mother is a very warm and patient person.",
  tip: "DESCRIBE 引出描述框架，MOTHER 主语重音，WARM 和 PATIENT 两个特质重读",
  pattern: "I'd describe my + [person] + as someone who's + [adv] + [adj] + and + [adj]",
  variants: ["My mum is the most patient person I know.", "If I had to sum her up, I'd say warm and endlessly patient.", "Warmth and patience — that's my mum in two words."]
};

const s530 = {
  id: 530,
  cat: "Family",
  scene: "family",
  text: "Having a sibling rivalry when we were younger was actually quite healthy.",
  words: ["Having","a","sibling","rivalry","when","we","were","younger","was","actually","quite","healthy"],
  stress: [0.5, 0.1, 1.0, 1.0, 0.2, 0.2, 0.3, 1.0, 0.3, 0.7, 0.5, 1.0],
  ipa: "/ˈhævɪŋ ə ˈsɪblɪŋ ˈraɪvəlri wen wi wɜː ˈjʌŋɡə wɒz ˈæktʃuəli kwaɪt ˈhelθi/",
  meaning: "用 sibling rivalry 展示话题词汇——反思性评价",
  cn: "小时候的兄弟姐妹竞争其实还挺健康的。",
  trap: "Fighting with my brother or sister when young was good for us.",
  tip: "SIBLING RIVALRY 双词核心词汇重读，YOUNGER 时间点，HEALTHY 评价重音",
  pattern: "Having + [noun phrase] + when we were younger was actually quite + [adj]",
  variants: ["A bit of competition with siblings builds character.", "We competed a lot as kids, and I think it did us good.", "The rivalry pushed us both to be better, looking back."]
};

const s531 = {
  id: 531,
  cat: "Family",
  scene: "family",
  text: "I think the generation gap is narrowing thanks to technology.",
  words: ["I","think","the","generation","gap","is","narrowing","thanks","to","technology"],
  stress: [0.2, 0.5, 0.1, 1.0, 1.0, 0.2, 1.0, 0.5, 0.1, 1.0],
  ipa: "/aɪ θɪŋk ðə ˌdʒenəˈreɪʃən ɡæp ɪz ˈnærəʊɪŋ θæŋks tə tekˈnɒlədʒi/",
  meaning: "讨论代沟——用 narrowing 和 thanks to 展示分析力",
  cn: "我觉得代沟正在因为科技而缩小。",
  trap: "Technology makes old and young people closer.",
  tip: "GENERATION GAP 双词核心概念，NARROWING 关键动词，TECHNOLOGY 原因重音",
  pattern: "I think the + [noun] + is narrowing thanks to + [noun]",
  variants: ["Technology has helped bridge the gap between generations.", "My parents are way more tech-savvy than their parents were.", "Social media has actually brought different generations closer."]
};

const s532 = {
  id: 532,
  cat: "Family",
  scene: "family",
  text: "I was brought up to respect my elders, which I think is important.",
  words: ["I","was","brought","up","to","respect","my","elders","which","I","think","is","important"],
  stress: [0.2, 0.3, 1.0, 0.7, 0.1, 1.0, 0.2, 1.0, 0.2, 0.2, 0.5, 0.2, 1.0],
  ipa: "/aɪ wɒz brɔːt ʌp tə rɪˈspekt maɪ ˈeldəz wɪtʃ aɪ θɪŋk ɪz ɪmˈpɔːtənt/",
  meaning: "用 brought up to 描述家庭教育——展示文化价值观",
  cn: "我从小被教导要尊敬长辈，我觉得这很重要。",
  trap: "My parents taught me to be polite to old people.",
  tip: "BROUGHT UP 短语动词，RESPECT 和 ELDERS 双重音，IMPORTANT 评价收尾",
  pattern: "I was brought up to + [verb] + my + [noun], which I think is + [adj]",
  variants: ["Respecting your elders was non-negotiable in my home.", "Showing respect to older people was drilled into me.", "It's a value my parents passed down and I'm glad they did."]
};

const s533 = {
  id: 533,
  cat: "Family",
  scene: "family",
  text: "My cousin is probably the person I'm closest to in my extended family.",
  words: ["My","cousin","is","probably","the","person","I'm","closest","to","in","my","extended","family"],
  stress: [0.2, 1.0, 0.2, 0.5, 0.1, 0.7, 0.2, 1.0, 0.1, 0.2, 0.2, 0.8, 1.0],
  ipa: "/maɪ ˈkʌzən ɪz ˈprɒbəbli ðə ˈpɜːsən aɪm ˈkləʊsɪst tə ɪn maɪ ɪkˈstendɪd ˈfæmɪli/",
  meaning: "用最高级 closest 描述家庭关系——精确表达",
  cn: "我表兄弟大概是大家庭里跟我最亲近的。",
  trap: "In all my relatives, my cousin and I are most close.",
  tip: "COUSIN 开头主语，CLOSEST 最高级重读，EXTENDED FAMILY 限定范围",
  pattern: "My + [relative] + is probably the person I'm closest to in my + [noun]",
  variants: ["My cousin is more like a sibling to me.", "Out of all my relatives, I'm closest to my cousin.", "My cousin is practically my best friend."]
};

const s534 = {
  id: 534,
  cat: "Family",
  scene: "family",
  text: "I think it's important to give children the freedom to make their own choices.",
  words: ["I","think","it's","important","to","give","children","the","freedom","to","make","their","own","choices"],
  stress: [0.2, 0.5, 0.2, 1.0, 0.1, 0.7, 1.0, 0.1, 1.0, 0.1, 0.7, 0.2, 0.8, 1.0],
  ipa: "/aɪ θɪŋk ɪts ɪmˈpɔːtənt tə ɡɪv ˈtʃɪldrən ðə ˈfriːdəm tə meɪk ðeər əʊn ˈtʃɔɪsɪz/",
  meaning: "表达教育理念——展示成熟的价值观",
  cn: "我觉得给孩子自己做选择的自由很重要。",
  trap: "Children should have the right to decide things by themselves.",
  tip: "IMPORTANT 设定观点，CHILDREN 和 FREEDOM 核心名词，OWN CHOICES 强调自主",
  pattern: "I think it's important to give children the freedom to + [verb phrase]",
  variants: ["Kids need room to figure things out on their own.", "Letting children make decisions builds independence.", "Autonomy in childhood is something I strongly believe in."]
};

const s535 = {
  id: 535,
  cat: "Family",
  scene: "family",
  text: "Distance hasn't weakened our bond — if anything, it's made it stronger.",
  words: ["Distance","hasn't","weakened","our","bond","if","anything","it's","made","it","stronger"],
  stress: [1.0, 0.5, 1.0, 0.2, 1.0, 0.2, 0.7, 0.2, 0.8, 0.1, 1.0],
  ipa: "/ˈdɪstəns ˈhæznt ˈwiːkənd ˈaʊə bɒnd ɪf ˈeniθɪŋ ɪts meɪd ɪt ˈstrɒŋɡə/",
  meaning: "用 if anything 进行反转——高级转折技巧",
  cn: "距离没有削弱我们的关系——如果有的话，反而更紧密了。",
  trap: "Living far away didn't make our relationship worse, it became better.",
  tip: "DISTANCE、WEAKENED、BOND 三词叙事，if anything 转折连接，STRONGER 结尾高潮",
  pattern: "Distance hasn't + [verb] + our bond — if anything, it's made it + [adj]",
  variants: ["Being apart has actually brought us closer.", "We value our time together more because of the distance.", "Our bond has only grown stronger despite the distance."]
};

const s536 = {
  id: 536,
  cat: "Family",
  scene: "family",
  text: "My nephew is at that adorable age where he asks questions about everything.",
  words: ["My","nephew","is","at","that","adorable","age","where","he","asks","questions","about","everything"],
  stress: [0.2, 1.0, 0.2, 0.2, 0.3, 1.0, 1.0, 0.2, 0.2, 0.7, 1.0, 0.3, 1.0],
  ipa: "/maɪ ˈnefjuː ɪz ət ðæt əˈdɔːrəbl eɪdʒ weər hiː ɑːsks ˈkwestʃənz əˈbaʊt ˈevrɪθɪŋ/",
  meaning: "用关系从句描述家人特质——展示叙事细节",
  cn: "我侄子正好在那个对什么都好奇的可爱年纪。",
  trap: "My nephew is very cute, he always asks why.",
  tip: "NEPHEW 主语重音，ADORABLE AGE 情感描述，QUESTIONS EVERYTHING 行为描述",
  pattern: "My + [relative] + is at that + [adj] + age where + [clause]",
  variants: ["He's at the stage where everything is a question.", "My nephew's curiosity is absolutely endless.", "Everything is a 'why' with my nephew right now."]
};

const s537 = {
  id: 537,
  cat: "Family",
  scene: "family",
  text: "We have a family group chat that's constantly buzzing with messages.",
  words: ["We","have","a","family","group","chat","that's","constantly","buzzing","with","messages"],
  stress: [0.2, 0.5, 0.1, 1.0, 0.8, 1.0, 0.2, 0.7, 1.0, 0.2, 1.0],
  ipa: "/wi hæv ə ˈfæmɪli ɡruːp tʃæt ðəts ˈkɒnstəntli ˈbʌzɪŋ wɪð ˈmesɪdʒɪz/",
  meaning: "用现代化细节描述家庭交流——贴近生活",
  cn: "我们有个家庭群聊，里面消息一直不停。",
  trap: "My family WeChat group has too many messages every day.",
  tip: "FAMILY GROUP CHAT 三词一组，CONSTANTLY BUZZING 双词描述活跃度",
  pattern: "We have a family + [noun] + that's constantly + [verb]ing + with + [noun]",
  variants: ["Our family chat never stops pinging.", "The family WhatsApp group is non-stop.", "There's always something happening in our family group chat."]
};

const s538 = {
  id: 538,
  cat: "Family",
  scene: "family",
  text: "I think the role of grandparents in childcare is often undervalued.",
  words: ["I","think","the","role","of","grandparents","in","childcare","is","often","undervalued"],
  stress: [0.2, 0.5, 0.1, 1.0, 0.1, 1.0, 0.2, 1.0, 0.2, 0.5, 1.0],
  ipa: "/aɪ θɪŋk ðə rəʊl əv ˈɡrænpeərənts ɪn ˈtʃaɪldkeə ɪz ˈɒfən ˌʌndəˈvæljuːd/",
  meaning: "表达社会观点——展示对家庭问题的深度思考",
  cn: "我觉得祖父母在育儿中的角色经常被低估。",
  trap: "Grandparents help to take care of children, people don't know this enough.",
  tip: "ROLE 和 GRANDPARENTS 第一组，CHILDCARE 核心话题词，UNDERVALUED 评价重音",
  pattern: "I think the role of + [noun] + in + [noun] + is often + [adj]",
  variants: ["Grandparents contribute far more than they get credit for.", "We don't appreciate grandparents enough as a society.", "The input of grandparents in raising kids is massive."]
};

const s539 = {
  id: 539,
  cat: "Family",
  scene: "family",
  text: "I'm quite protective of my younger siblings, even now that they're adults.",
  words: ["I'm","quite","protective","of","my","younger","siblings","even","now","that","they're","adults"],
  stress: [0.2, 0.5, 1.0, 0.1, 0.2, 0.8, 1.0, 0.5, 0.5, 0.1, 0.2, 1.0],
  ipa: "/aɪm kwaɪt prəˈtektɪv əv maɪ ˈjʌŋɡə ˈsɪblɪŋz ˈiːvən naʊ ðət ðeər ˈædʌlts/",
  meaning: "展示保护性格——even now 增加时间对比",
  cn: "我对弟弟妹妹还是很有保护欲的，即使他们现在都是成年人了。",
  trap: "I still want to protect my little brothers and sisters although they are big.",
  tip: "PROTECTIVE 重在 -TEC-，SIBLINGS 主要对象，EVEN NOW ADULTS 时间对比",
  pattern: "I'm quite + [adj] + of my + [noun], even now that they're + [noun]",
  variants: ["Old habits die hard — I still look out for my siblings.", "I can't help being the big brother, no matter how old they get.", "The protective instinct never really goes away."]
};

const s540 = {
  id: 540,
  cat: "Family",
  scene: "family",
  text: "At the end of the day, family is what matters most to me.",
  words: ["At","the","end","of","the","day","family","is","what","matters","most","to","me"],
  stress: [0.2, 0.1, 0.5, 0.1, 0.1, 0.7, 1.0, 0.2, 0.5, 1.0, 1.0, 0.1, 0.5],
  ipa: "/ət ðə end əv ðə deɪ ˈfæmɪli ɪz wɒt ˈmætəz məʊst tə miː/",
  meaning: "用 at the end of the day 做情感总结——有力的收尾",
  cn: "归根结底，家人是对我最重要的。",
  trap: "Finally, family is the most important thing for me.",
  tip: "At the end of the day 快速过渡，FAMILY 核心词，MATTERS MOST 情感双重音",
  pattern: "At the end of the day, + [noun] + is what matters most to me",
  variants: ["Nothing matters more to me than my family.", "Family always comes first, no question.", "When everything else fades, family is what remains."]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY18 = [
  s511, s512, s513, s514, s515, s516, s517, s518, s519, s520,
  s521, s522, s523, s524, s525, s526, s527, s528, s529, s530,
  s531, s532, s533, s534, s535, s536, s537, s538, s539, s540
];

export const SCENES_DAY18 = {
  511: { icon: "👨‍👩‍👧‍👦", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  512: { icon: "👶", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  513: { icon: "🤗", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  514: { icon: "🎄", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  515: { icon: "👬", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  516: { icon: "👩", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  517: { icon: "🍽️", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  518: { icon: "👵", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  519: { icon: "❤️", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  520: { icon: "📞", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  521: { icon: "⚖️", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  522: { icon: "🧒", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  523: { icon: "🎉", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  524: { icon: "🌟", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  525: { icon: "🤝", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  526: { icon: "🏛️", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  527: { icon: "🌐", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  528: { icon: "📚", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  529: { icon: "💗", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  530: { icon: "🏃‍♂️", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  531: { icon: "📱", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  532: { icon: "🙏", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  533: { icon: "👯", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  534: { icon: "🕊️", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  535: { icon: "🔗", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  536: { icon: "👦", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  537: { icon: "💬", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  538: { icon: "👴", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  539: { icon: "🛡️", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" },
  540: { icon: "🏠", colors: ["#ec4899","#f472b6"], title: "FAMILY", sub: "IELTS Part 1 · Family" }
};
