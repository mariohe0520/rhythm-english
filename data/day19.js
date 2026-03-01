// ─── Day 19 · IELTS Part 1 — Technology & Digital Life ───────────
// 30 sentences (id 541-570)

const s541 = {
  id: 541,
  cat: "Technology",
  scene: "digital",
  text: "I'd say I'm fairly dependent on my smartphone these days.",
  words: ["I'd","say","I'm","fairly","dependent","on","my","smartphone","these","days"],
  stress: [0.3, 0.5, 0.2, 0.5, 1.0, 0.2, 0.2, 1.0, 0.3, 0.7],
  ipa: "/aɪd seɪ aɪm ˈfɛəli dɪˈpendənt ɒn maɪ ˈsmɑːtfəʊn ðiːz deɪz/",
  meaning: "用 dependent on 精确描述手机依赖——Band 7 词汇",
  cn: "我会说我现在挺依赖智能手机的。",
  trap: "I cannot leave my phone now.",
  tip: "DEPENDENT 重在 -PEND-，SMARTPHONE 复合词重在第一部分",
  pattern: "I'd say I'm fairly + [adj] + on my + [noun] + these days",
  variants: ["My phone is basically an extension of my hand.", "I rely on my smartphone for practically everything.", "I'll admit, I'm pretty glued to my phone."]
};

const s542 = {
  id: 542,
  cat: "Technology",
  scene: "digital",
  text: "Social media has completely transformed the way we communicate.",
  words: ["Social","media","has","completely","transformed","the","way","we","communicate"],
  stress: [1.0, 1.0, 0.2, 0.7, 1.0, 0.1, 0.7, 0.2, 1.0],
  ipa: "/ˈsəʊʃəl ˈmiːdiə həz kəmˈpliːtli trænsˈfɔːmd ðə weɪ wi kəˈmjuːnɪkeɪt/",
  meaning: "陈述科技影响——transformed 比 changed 更有力",
  cn: "社交媒体完全改变了我们的交流方式。",
  trap: "Social media changed how people talk to each other.",
  tip: "SOCIAL MEDIA 双词主语，TRANSFORMED 重在 -FORMED，COMMUNICATE 五音节重在 -MU-",
  pattern: "Social media has completely + [verb] + the way we + [verb]",
  variants: ["Communication has been revolutionised by social media.", "The way we interact has shifted massively because of social media.", "Social media has reshaped human communication entirely."]
};

const s543 = {
  id: 543,
  cat: "Technology",
  scene: "digital",
  text: "I try to limit my screen time, but it's easier said than done.",
  words: ["I","try","to","limit","my","screen","time","but","it's","easier","said","than","done"],
  stress: [0.2, 0.7, 0.1, 1.0, 0.2, 1.0, 1.0, 0.3, 0.2, 1.0, 0.7, 0.3, 1.0],
  ipa: "/aɪ traɪ tə ˈlɪmɪt maɪ skriːn taɪm bʌt ɪts ˈiːziə sed ðən dʌn/",
  meaning: "用 easier said than done 习语——展示地道表达",
  cn: "我尽量限制屏幕时间，但说起来容易做起来难。",
  trap: "I want to use phone less, but it is difficult.",
  tip: "LIMIT 和 SCREEN TIME 第一组，EASIER SAID THAN DONE 习语整体连读",
  pattern: "I try to limit my + [noun], but it's easier said than done",
  variants: ["Cutting down on screen time is a constant battle.", "I know I should look at my phone less, but I can't seem to.", "Digital detox sounds great in theory, not so much in practice."]
};

const s544 = {
  id: 544,
  cat: "Technology",
  scene: "digital",
  text: "I think technology has made our lives significantly more convenient.",
  words: ["I","think","technology","has","made","our","lives","significantly","more","convenient"],
  stress: [0.2, 0.5, 1.0, 0.2, 0.7, 0.2, 1.0, 0.8, 0.5, 1.0],
  ipa: "/aɪ θɪŋk tekˈnɒlədʒi həz meɪd ˈaʊə laɪvz sɪɡˈnɪfɪkəntli mɔː kənˈviːniənt/",
  meaning: "用 significantly 加强程度——比 very 更学术",
  cn: "我认为科技让我们的生活方便了很多。",
  trap: "Technology makes life very easy.",
  tip: "TECHNOLOGY 重在 -NOL-，SIGNIFICANTLY 五音节重在 -NIF-，CONVENIENT 结尾",
  pattern: "I think technology has made our lives + [adv] + more + [adj]",
  variants: ["Life is so much easier thanks to modern tech.", "Technology has simplified daily life enormously.", "We take for granted how much tech has improved our routines."]
};

const s545 = {
  id: 545,
  cat: "Technology",
  scene: "digital",
  text: "The downside is that we're constantly bombarded with information.",
  words: ["The","downside","is","that","we're","constantly","bombarded","with","information"],
  stress: [0.1, 1.0, 0.2, 0.1, 0.2, 0.7, 1.0, 0.2, 1.0],
  ipa: "/ðə ˈdaʊnsaɪd ɪz ðət wɪə ˈkɒnstəntli bɒmˈbɑːdɪd wɪð ˌɪnfəˈmeɪʃən/",
  meaning: "用 downside 和 bombarded 两个高级词汇",
  cn: "缺点是我们不断被信息轰炸。",
  trap: "The bad thing is we receive too much information.",
  tip: "DOWNSIDE 开头设定负面框架，BOMBARDED 重在 -BARD-，INFORMATION 结尾",
  pattern: "The downside is that we're constantly + [verb] + with + [noun]",
  variants: ["Information overload is a real problem.", "We're drowning in data and notifications.", "The sheer volume of information is overwhelming."]
};

const s546 = {
  id: 546,
  cat: "Technology",
  scene: "digital",
  text: "I use apps for practically everything — banking, shopping, navigation.",
  words: ["I","use","apps","for","practically","everything","banking","shopping","navigation"],
  stress: [0.2, 0.7, 1.0, 0.1, 0.7, 1.0, 1.0, 1.0, 1.0],
  ipa: "/aɪ juːz æps fə ˈpræktɪkəli ˈevrɪθɪŋ ˈbæŋkɪŋ ˈʃɒpɪŋ ˌnævɪˈɡeɪʃən/",
  meaning: "用列举法展示数字生活——具体例子加分",
  cn: "我几乎什么都用应用——银行、购物、导航。",
  trap: "I use phone programs for all things like bank and buy things.",
  tip: "APPS 和 EVERYTHING 第一组，BANKING、SHOPPING、NAVIGATION 三个列举重音",
  pattern: "I use apps for practically everything — + [list]",
  variants: ["There's an app for every aspect of my life.", "I do everything through my phone these days.", "My daily life basically runs on apps."]
};

const s547 = {
  id: 547,
  cat: "Technology",
  scene: "digital",
  text: "I'm a bit wary of how much personal data companies are collecting.",
  words: ["I'm","a","bit","wary","of","how","much","personal","data","companies","are","collecting"],
  stress: [0.2, 0.1, 0.5, 1.0, 0.1, 0.5, 0.8, 1.0, 1.0, 1.0, 0.2, 1.0],
  ipa: "/aɪm ə bɪt ˈweəri əv haʊ mʌtʃ ˈpɜːsənəl ˈdeɪtə ˈkʌmpəniz ɑː kəˈlektɪŋ/",
  meaning: "表达对隐私的担忧——wary 是 Band 7 词汇",
  cn: "我对公司收集这么多个人数据有点警惕。",
  trap: "I am worried that companies take too much of our information.",
  tip: "WARY 关键态度词重读，PERSONAL DATA 双重音，COMPANIES COLLECTING 尾部双重音",
  pattern: "I'm a bit wary of how much + [noun] + [noun] + are + [verb]ing",
  variants: ["Data privacy is something that genuinely concerns me.", "I'm not comfortable with how much tech companies know about us.", "The amount of data being harvested is alarming, frankly."]
};

const s548 = {
  id: 548,
  cat: "Technology",
  scene: "digital",
  text: "Online shopping has completely replaced going to physical stores for me.",
  words: ["Online","shopping","has","completely","replaced","going","to","physical","stores","for","me"],
  stress: [1.0, 1.0, 0.2, 0.7, 1.0, 0.5, 0.1, 1.0, 1.0, 0.1, 0.3],
  ipa: "/ˌɒnˈlaɪn ˈʃɒpɪŋ həz kəmˈpliːtli rɪˈpleɪst ˈɡəʊɪŋ tə ˈfɪzɪkəl stɔːz fə miː/",
  meaning: "描述消费习惯变化——replaced 比 changed 更精确",
  cn: "网购对我来说已经完全取代了去实体店。",
  trap: "I buy everything on internet, I don't go to shops.",
  tip: "ONLINE SHOPPING 双词主语，REPLACED 核心动词重读，PHYSICAL STORES 对比重音",
  pattern: "Online + [noun] + has completely replaced + [verb]ing + [noun] + for me",
  variants: ["I can't remember the last time I went to a physical shop.", "Everything I buy comes from online these days.", "Brick-and-mortar shopping is basically extinct for me."]
};

const s549 = {
  id: 549,
  cat: "Technology",
  scene: "digital",
  text: "I think older generations are adapting to technology better than people expect.",
  words: ["I","think","older","generations","are","adapting","to","technology","better","than","people","expect"],
  stress: [0.2, 0.5, 0.8, 1.0, 0.2, 1.0, 0.1, 1.0, 1.0, 0.3, 0.5, 1.0],
  ipa: "/aɪ θɪŋk ˈəʊldə ˌdʒenəˈreɪʃənz ɑːr əˈdæptɪŋ tə tekˈnɒlədʒi ˈbetə ðən ˈpiːpl ɪkˈspekt/",
  meaning: "挑战刻板印象——展示独立思考",
  cn: "我觉得老一辈适应科技的速度比人们预期的要好。",
  trap: "Old people can learn technology faster than we think.",
  tip: "GENERATIONS 四音节重在 -RA-，ADAPTING 重在 -DAPT-，BETTER THAN EXPECT 比较结构",
  pattern: "I think + [noun] + are adapting to + [noun] + better than people expect",
  variants: ["Don't underestimate older people when it comes to tech.", "My grandparents are more tech-savvy than people assume.", "The digital divide isn't as wide as we think."]
};

const s550 = {
  id: 550,
  cat: "Technology",
  scene: "digital",
  text: "Artificial intelligence is something that both excites and concerns me.",
  words: ["Artificial","intelligence","is","something","that","both","excites","and","concerns","me"],
  stress: [1.0, 1.0, 0.2, 0.5, 0.1, 0.5, 1.0, 0.1, 1.0, 0.3],
  ipa: "/ˌɑːtɪˈfɪʃəl ɪnˈtelɪdʒəns ɪz ˈsʌmθɪŋ ðət bəʊθ ɪkˈsaɪts ənd kənˈsɜːnz miː/",
  meaning: "用 both...and 表达矛盾态度——展示复杂思维",
  cn: "人工智能是一个让我既兴奋又担忧的东西。",
  trap: "AI makes me happy and worried at the same time.",
  tip: "ARTIFICIAL INTELLIGENCE 四+四音节双重音主语，EXCITES 和 CONCERNS 对比双重音",
  pattern: "[Topic] is something that both + [verb] + and + [verb] + me",
  variants: ["AI is fascinating but also a bit scary.", "I'm torn between excitement and worry when it comes to AI.", "There's a thrill and a fear around AI in equal measure."]
};

const s551 = {
  id: 551,
  cat: "Technology",
  scene: "digital",
  text: "I couldn't imagine going back to a time without the internet.",
  words: ["I","couldn't","imagine","going","back","to","a","time","without","the","internet"],
  stress: [0.2, 0.5, 1.0, 0.5, 0.8, 0.1, 0.1, 1.0, 0.5, 0.1, 1.0],
  ipa: "/aɪ ˈkʊdnt ɪˈmædʒɪn ˈɡəʊɪŋ bæk tə ə taɪm wɪˈðaʊt ðə ˈɪntənet/",
  meaning: "用 couldn't imagine 表达强烈感受",
  cn: "我无法想象回到没有互联网的时代。",
  trap: "I cannot think about living without internet.",
  tip: "IMAGINE 重在 -MAG-，GOING BACK 连读，TIME 和 INTERNET 双重音",
  pattern: "I couldn't imagine going back to a time without + [noun]",
  variants: ["A world without the internet feels unthinkable.", "Life before the internet seems like a different era.", "How did people manage without the internet? I genuinely wonder."]
};

const s552 = {
  id: 552,
  cat: "Technology",
  scene: "digital",
  text: "I've become much more conscious of my digital footprint recently.",
  words: ["I've","become","much","more","conscious","of","my","digital","footprint","recently"],
  stress: [0.2, 0.5, 0.7, 0.5, 1.0, 0.1, 0.2, 1.0, 1.0, 0.7],
  ipa: "/aɪv bɪˈkʌm mʌtʃ mɔː ˈkɒnʃəs əv maɪ ˈdɪdʒɪtəl ˈfʊtprɪnt ˈriːsntli/",
  meaning: "用 digital footprint 展示科技话题词汇——Band 7+",
  cn: "最近我更加注意自己的数字足迹了。",
  trap: "Recently I care more about my internet information.",
  tip: "CONSCIOUS 重在第一音节，DIGITAL FOOTPRINT 复合表达双重音",
  pattern: "I've become much more + [adj] + of my + [noun] + recently",
  variants: ["I've started paying more attention to what I share online.", "My online privacy has become a bigger priority.", "I'm more careful about my digital presence than I used to be."]
};

const s553 = {
  id: 553,
  cat: "Technology",
  scene: "digital",
  text: "Streaming services have made entertainment incredibly accessible.",
  words: ["Streaming","services","have","made","entertainment","incredibly","accessible"],
  stress: [1.0, 1.0, 0.2, 0.7, 1.0, 0.7, 1.0],
  ipa: "/ˈstriːmɪŋ ˈsɜːvɪsɪz hæv meɪd ˌentəˈteɪnmənt ɪnˈkredɪbli əkˈsesəbl/",
  meaning: "评价流媒体影响——accessible 是高级词汇",
  cn: "流媒体服务让娱乐变得非常容易获取。",
  trap: "We can watch movies very easily because of streaming apps.",
  tip: "STREAMING SERVICES 双词主语，ENTERTAINMENT 重在 -TAIN-，ACCESSIBLE 结尾",
  pattern: "Streaming services have made + [noun] + incredibly + [adj]",
  variants: ["You can watch anything, anytime, anywhere now.", "Entertainment is literally at our fingertips.", "The variety of content available is mind-blowing."]
};

const s554 = {
  id: 554,
  cat: "Technology",
  scene: "digital",
  text: "I think we sometimes take for granted how far technology has come.",
  words: ["I","think","we","sometimes","take","for","granted","how","far","technology","has","come"],
  stress: [0.2, 0.5, 0.2, 0.5, 0.7, 0.1, 1.0, 0.5, 0.8, 1.0, 0.2, 0.7],
  ipa: "/aɪ θɪŋk wi ˈsʌmtaɪmz teɪk fə ˈɡrɑːntɪd haʊ fɑː tekˈnɒlədʒi həz kʌm/",
  meaning: "用 take for granted 表达反思——展示深度思考",
  cn: "我觉得我们有时候把科技的进步视为理所当然了。",
  trap: "We don't think about how good technology is now.",
  tip: "TAKE FOR GRANTED 三词固定搭配，HOW FAR 强调程度，TECHNOLOGY 核心词",
  pattern: "I think we sometimes take for granted how far + [noun] + has come",
  variants: ["We forget how revolutionary our daily tech actually is.", "It's easy to forget how much progress has been made.", "We barely notice the incredible technology we use every day."]
};

const s555 = {
  id: 555,
  cat: "Technology",
  scene: "digital",
  text: "Video calls have been a lifesaver for keeping in touch with family abroad.",
  words: ["Video","calls","have","been","a","lifesaver","for","keeping","in","touch","with","family","abroad"],
  stress: [1.0, 1.0, 0.2, 0.3, 0.1, 1.0, 0.1, 1.0, 0.2, 0.5, 0.2, 1.0, 1.0],
  ipa: "/ˈvɪdiəʊ kɔːlz hæv biːn ə ˈlaɪfseɪvə fə ˈkiːpɪŋ ɪn tʌtʃ wɪð ˈfæmɪli əˈbrɔːd/",
  meaning: "用 lifesaver 地道表达——比 very useful 更生动",
  cn: "视频通话对和海外家人保持联系来说简直是救星。",
  trap: "Video call is very useful to talk with family in other countries.",
  tip: "VIDEO CALLS 主语，LIFESAVER 地道评价重读，KEEPING IN TOUCH 和 FAMILY ABROAD 双组结尾",
  pattern: "Video calls have been a lifesaver for + [verb]ing + [noun]",
  variants: ["Without video calls, staying connected would be so much harder.", "FaceTime has transformed how I keep in touch with my family.", "Being able to see family on screen makes the distance bearable."]
};

const s556 = {
  id: 556,
  cat: "Technology",
  scene: "digital",
  text: "I'm cautiously optimistic about the future of technology.",
  words: ["I'm","cautiously","optimistic","about","the","future","of","technology"],
  stress: [0.2, 0.8, 1.0, 0.3, 0.1, 1.0, 0.1, 1.0],
  ipa: "/aɪm ˈkɔːʃəsli ˌɒptɪˈmɪstɪk əˈbaʊt ðə ˈfjuːtʃər əv tekˈnɒlədʒi/",
  meaning: "用 cautiously optimistic 精确表达立场——Band 7+ 表达",
  cn: "我对科技的未来持谨慎乐观态度。",
  trap: "I think technology's future is probably good.",
  tip: "CAUTIOUSLY 三音节重在第一，OPTIMISTIC 四音节重在 -MIS-，FUTURE TECHNOLOGY 结尾双重音",
  pattern: "I'm cautiously optimistic about the future of + [noun]",
  variants: ["I'm hopeful but realistic about where tech is headed.", "The future of tech looks promising, with caveats.", "I see the potential, but I'm keeping my expectations measured."]
};

const s557 = {
  id: 557,
  cat: "Technology",
  scene: "digital",
  text: "The pace at which technology evolves is genuinely mind-boggling.",
  words: ["The","pace","at","which","technology","evolves","is","genuinely","mind-boggling"],
  stress: [0.1, 1.0, 0.2, 0.2, 1.0, 1.0, 0.2, 0.7, 1.0],
  ipa: "/ðə peɪs ət wɪtʃ tekˈnɒlədʒi ɪˈvɒlvz ɪz ˈdʒenjuɪnli ˈmaɪndˌbɒɡlɪŋ/",
  meaning: "用 the pace at which 高级结构和 mind-boggling 生动形容词",
  cn: "科技发展的速度真的令人难以置信。",
  trap: "Technology changes very fast, it is surprising.",
  tip: "PACE 核心名词重读，TECHNOLOGY EVOLVES 双重音，MIND-BOGGLING 生动结尾",
  pattern: "The pace at which + [noun] + [verb] + is genuinely + [adj]",
  variants: ["It's hard to keep up with how fast tech moves.", "Technology advances at a speed that's hard to comprehend.", "What seemed like science fiction ten years ago is now reality."]
};

const s558 = {
  id: 558,
  cat: "Technology",
  scene: "digital",
  text: "I've noticed that people are becoming more reliant on GPS than their own sense of direction.",
  words: ["I've","noticed","that","people","are","becoming","more","reliant","on","GPS","than","their","own","sense","of","direction"],
  stress: [0.2, 0.7, 0.1, 0.5, 0.2, 0.5, 0.5, 1.0, 0.2, 1.0, 0.3, 0.2, 0.5, 1.0, 0.1, 1.0],
  ipa: "/aɪv ˈnəʊtɪst ðət ˈpiːpl ɑː bɪˈkʌmɪŋ mɔː rɪˈlaɪənt ɒn ˌdʒiːpiːˈes ðən ðeər əʊn sens əv dɪˈrekʃən/",
  meaning: "用具体观察支持论点——展示分析能力",
  cn: "我注意到人们越来越依赖GPS而不是自己的方向感了。",
  trap: "People now use GPS for everything and forgot how to find way.",
  tip: "RELIANT 重在 -LI-，GPS 三字母分别重读，SENSE OF DIRECTION 固定搭配",
  pattern: "I've noticed that people are becoming more + [adj] + on + [noun] + than + [noun]",
  variants: ["Nobody reads a map any more — it's all sat nav.", "We've outsourced our navigation skills to Google.", "GPS has made us lazy about knowing where we are."]
};

const s559 = {
  id: 559,
  cat: "Technology",
  scene: "digital",
  text: "E-books are convenient, but there's nothing quite like holding a real book.",
  words: ["E-books","are","convenient","but","there's","nothing","quite","like","holding","a","real","book"],
  stress: [1.0, 0.2, 1.0, 0.3, 0.3, 1.0, 0.5, 0.5, 1.0, 0.1, 0.8, 1.0],
  ipa: "/ˈiːbʊks ɑː kənˈviːniənt bʌt ðeəz ˈnʌθɪŋ kwaɪt laɪk ˈhəʊldɪŋ ə rɪəl bʊk/",
  meaning: "用 there's nothing quite like 优雅对比——展示表达深度",
  cn: "电子书很方便，但手握真正的书是无可替代的。",
  trap: "E-books are easy to use but real books feel better.",
  tip: "E-BOOKS 和 CONVENIENT 承认优势，NOTHING QUITE LIKE 和 HOLDING REAL BOOK 转折重音",
  pattern: "[Noun] + are convenient, but there's nothing quite like + [verb]ing + [noun]",
  variants: ["Digital is handy, but paper still wins for me.", "I read on a Kindle, but physical books hit differently.", "The feel and smell of a real book can't be replicated."]
};

const s560 = {
  id: 560,
  cat: "Technology",
  scene: "digital",
  text: "I think the key is finding a healthy balance between online and offline life.",
  words: ["I","think","the","key","is","finding","a","healthy","balance","between","online","and","offline","life"],
  stress: [0.2, 0.5, 0.1, 1.0, 0.2, 0.7, 0.1, 0.8, 1.0, 0.3, 1.0, 0.1, 1.0, 1.0],
  ipa: "/aɪ θɪŋk ðə kiː ɪz ˈfaɪndɪŋ ə ˈhelθi ˈbæləns bɪˈtwiːn ˌɒnˈlaɪn ənd ˌɒfˈlaɪn laɪf/",
  meaning: "用 the key is 结构做总结——平衡的观点得分高",
  cn: "我觉得关键是在线上和线下生活之间找到健康的平衡。",
  trap: "We should not use internet too much, we need real life too.",
  tip: "KEY 核心名词重读，HEALTHY BALANCE 双重音，ONLINE 和 OFFLINE 对比重音",
  pattern: "I think the key is finding a healthy balance between + [noun] + and + [noun]",
  variants: ["Balance is everything when it comes to technology.", "We need to be intentional about our screen time.", "The goal is to use tech without letting it use you."]
};

const s561 = {
  id: 561,
  cat: "Technology",
  scene: "digital",
  text: "Cybersecurity is something that everyone should take more seriously.",
  words: ["Cybersecurity","is","something","that","everyone","should","take","more","seriously"],
  stress: [1.0, 0.2, 0.5, 0.1, 0.7, 0.5, 0.7, 0.5, 1.0],
  ipa: "/ˌsaɪbəsɪˈkjʊərɪti ɪz ˈsʌmθɪŋ ðət ˈevrɪwʌn ʃʊd teɪk mɔː ˈsɪəriəsli/",
  meaning: "用 should take more seriously 表达建议——展示社会意识",
  cn: "网络安全是每个人都应该更认真对待的事情。",
  trap: "Internet safety is very important for all people.",
  tip: "CYBERSECURITY 六音节重在 -CUR-，EVERYONE 和 SERIOUSLY 双重音收尾",
  pattern: "[Topic] is something that everyone should take more + [adv]",
  variants: ["People are way too casual about their online security.", "We all need to be more vigilant about cyber threats.", "Most people don't think about cybersecurity until it's too late."]
};

const s562 = {
  id: 562,
  cat: "Technology",
  scene: "digital",
  text: "I prefer texting over calling — it gives me time to think before I respond.",
  words: ["I","prefer","texting","over","calling","it","gives","me","time","to","think","before","I","respond"],
  stress: [0.2, 0.7, 1.0, 0.3, 1.0, 0.2, 0.5, 0.2, 1.0, 0.1, 1.0, 0.3, 0.2, 1.0],
  ipa: "/aɪ prɪˈfɜː ˈtekstɪŋ ˈəʊvə ˈkɔːlɪŋ ɪt ɡɪvz miː taɪm tə θɪŋk bɪˈfɔːr aɪ rɪˈspɒnd/",
  meaning: "解释通讯偏好并给出原因——逻辑清晰得分高",
  cn: "我更喜欢发消息而不是打电话——这让我有时间思考再回复。",
  trap: "I like sending messages more, because I can think what to say.",
  tip: "TEXTING OVER CALLING 对比重音，TIME THINK 和 RESPOND 原因解释重音",
  pattern: "I prefer + [verb]ing + over + [verb]ing — it gives me + [noun] + to + [verb]",
  variants: ["Texting lets me compose my thoughts properly.", "I'm more of a texter than a caller, honestly.", "Phone calls put me on the spot — I'd rather type."]
};

const s563 = {
  id: 563,
  cat: "Technology",
  scene: "digital",
  text: "The digital divide between urban and rural areas is still quite significant.",
  words: ["The","digital","divide","between","urban","and","rural","areas","is","still","quite","significant"],
  stress: [0.1, 1.0, 1.0, 0.3, 1.0, 0.1, 1.0, 0.8, 0.2, 0.5, 0.5, 1.0],
  ipa: "/ðə ˈdɪdʒɪtəl dɪˈvaɪd bɪˈtwiːn ˈɜːbən ənd ˈrʊərəl ˈeəriəz ɪz stɪl kwaɪt sɪɡˈnɪfɪkənt/",
  meaning: "用 digital divide 话题词汇——Band 7+ 表达",
  cn: "城乡之间的数字鸿沟仍然相当大。",
  trap: "City and countryside have different level of technology.",
  tip: "DIGITAL DIVIDE 核心概念双重音，URBAN 和 RURAL 对比重音，SIGNIFICANT 结尾",
  pattern: "The digital divide between + [noun] + and + [noun] + is still quite + [adj]",
  variants: ["Rural areas are still lagging behind in connectivity.", "Not everyone has equal access to technology.", "Internet access in the countryside is still a real issue."]
};

const s564 = {
  id: 564,
  cat: "Technology",
  scene: "digital",
  text: "I find it fascinating how quickly children pick up new technology.",
  words: ["I","find","it","fascinating","how","quickly","children","pick","up","new","technology"],
  stress: [0.2, 0.7, 0.1, 1.0, 0.5, 0.8, 1.0, 0.7, 0.5, 0.5, 1.0],
  ipa: "/aɪ faɪnd ɪt ˈfæsɪneɪtɪŋ haʊ ˈkwɪkli ˈtʃɪldrən pɪk ʌp njuː tekˈnɒlədʒi/",
  meaning: "用 fascinating 替代 interesting——词汇升级",
  cn: "我觉得孩子们学新技术那么快真的很有趣。",
  trap: "Children can learn new technology very fast, it is amazing.",
  tip: "FASCINATING 四音节重在第一，QUICKLY CHILDREN 双重音，PICK UP 和 TECHNOLOGY 收尾",
  pattern: "I find it fascinating how quickly + [noun] + [verb phrase]",
  variants: ["Kids are natural-born digital natives.", "Children adapt to new tech at an astonishing speed.", "Give a toddler a tablet and they'll figure it out in minutes."]
};

const s565 = {
  id: 565,
  cat: "Technology",
  scene: "digital",
  text: "Wearable technology like smartwatches has genuinely improved my fitness routine.",
  words: ["Wearable","technology","like","smartwatches","has","genuinely","improved","my","fitness","routine"],
  stress: [1.0, 1.0, 0.2, 1.0, 0.2, 0.7, 1.0, 0.2, 1.0, 1.0],
  ipa: "/ˈweərəbl tekˈnɒlədʒi laɪk ˈsmɑːtwɒtʃɪz həz ˈdʒenjuɪnli ɪmˈpruːvd maɪ ˈfɪtnɪs ruːˈtiːn/",
  meaning: "用具体例子支持观点——smartwatches 贴近生活",
  cn: "像智能手表这样的穿戴设备确实改善了我的健身习惯。",
  trap: "Smart watch technology helps me exercise better.",
  tip: "WEARABLE TECHNOLOGY 和 SMARTWATCHES 专业词汇，IMPROVED FITNESS ROUTINE 结尾三重音",
  pattern: "Wearable technology like + [noun] + has genuinely + [verb] + my + [noun]",
  variants: ["My smartwatch has been a game changer for fitness.", "Tracking my steps and heart rate keeps me accountable.", "Fitness tech has made me so much more disciplined."]
};

const s566 = {
  id: 566,
  cat: "Technology",
  scene: "digital",
  text: "I think we're only scratching the surface of what technology can achieve.",
  words: ["I","think","we're","only","scratching","the","surface","of","what","technology","can","achieve"],
  stress: [0.2, 0.5, 0.2, 0.5, 1.0, 0.1, 1.0, 0.1, 0.5, 1.0, 0.3, 1.0],
  ipa: "/aɪ θɪŋk wɪər ˈəʊnli ˈskrætʃɪŋ ðə ˈsɜːfɪs əv wɒt tekˈnɒlədʒi kən əˈtʃiːv/",
  meaning: "用 scratching the surface 习语——形象生动",
  cn: "我觉得我们只触及了科技能实现的皮毛。",
  trap: "Technology can do much more things than now.",
  tip: "SCRATCHING THE SURFACE 习语连读，TECHNOLOGY 和 ACHIEVE 结尾双重音",
  pattern: "I think we're only scratching the surface of what + [noun] + can + [verb]",
  variants: ["We're at the very beginning of a technological revolution.", "The potential of technology is barely tapped.", "What we've seen so far is just the tip of the iceberg."]
};

const s567 = {
  id: 567,
  cat: "Technology",
  scene: "digital",
  text: "Remote working has blurred the boundaries between work and personal life.",
  words: ["Remote","working","has","blurred","the","boundaries","between","work","and","personal","life"],
  stress: [0.8, 1.0, 0.2, 1.0, 0.1, 1.0, 0.3, 1.0, 0.1, 0.8, 1.0],
  ipa: "/rɪˈməʊt ˈwɜːkɪŋ həz blɜːd ðə ˈbaʊndriz bɪˈtwiːn wɜːk ənd ˈpɜːsənəl laɪf/",
  meaning: "用 blurred the boundaries 讨论远程工作影响——Band 7 表达",
  cn: "远程办公模糊了工作和个人生活的界限。",
  trap: "Working from home makes it hard to separate work and life.",
  tip: "REMOTE WORKING 主语双重音，BLURRED BOUNDARIES 头韵加重音，WORK PERSONAL LIFE 对比",
  pattern: "Remote working has + [verb] + the boundaries between + [noun] + and + [noun]",
  variants: ["It's hard to switch off when your office is your home.", "Work-life separation is trickier with remote work.", "When your commute is five steps, the lines get blurry."]
};

const s568 = {
  id: 568,
  cat: "Technology",
  scene: "digital",
  text: "I wish there were stricter regulations on how tech companies use our data.",
  words: ["I","wish","there","were","stricter","regulations","on","how","tech","companies","use","our","data"],
  stress: [0.2, 0.8, 0.2, 0.3, 1.0, 1.0, 0.2, 0.5, 0.8, 1.0, 0.7, 0.2, 1.0],
  ipa: "/aɪ wɪʃ ðeə wɜː ˈstrɪktə ˌreɡjʊˈleɪʃənz ɒn haʊ tek ˈkʌmpəniz juːz ˈaʊə ˈdeɪtə/",
  meaning: "用 I wish + 过去时表达愿望——精准语法",
  cn: "我希望对科技公司使用我们数据有更严格的规定。",
  trap: "I want the government to control technology companies more.",
  tip: "WISH 设定虚拟语气，STRICTER REGULATIONS 核心建议，TECH COMPANIES DATA 具体对象",
  pattern: "I wish there were stricter regulations on how + [noun] + [verb] + our + [noun]",
  variants: ["Data protection laws need to be much tougher.", "Tech companies have too much freedom with our personal information.", "We need better guardrails around data usage."]
};

const s569 = {
  id: 569,
  cat: "Technology",
  scene: "digital",
  text: "Podcasts have become my primary source of news and entertainment.",
  words: ["Podcasts","have","become","my","primary","source","of","news","and","entertainment"],
  stress: [1.0, 0.2, 0.5, 0.2, 1.0, 1.0, 0.1, 1.0, 0.1, 1.0],
  ipa: "/ˈpɒdkɑːsts hæv bɪˈkʌm maɪ ˈpraɪməri sɔːs əv njuːz ənd ˌentəˈteɪnmənt/",
  meaning: "分享具体数字习惯——primary source 学术表达",
  cn: "播客已经成为我获取新闻和娱乐的主要来源了。",
  trap: "I listen to podcasts for news and fun things.",
  tip: "PODCASTS 主语重读，PRIMARY SOURCE 学术搭配，NEWS 和 ENTERTAINMENT 列举重音",
  pattern: "[Medium] have become my primary source of + [noun] + and + [noun]",
  variants: ["I get most of my news from podcasts these days.", "Podcasts are basically my go-to for everything.", "I've replaced TV and radio with podcasts entirely."]
};

const s570 = {
  id: 570,
  cat: "Technology",
  scene: "digital",
  text: "On balance, I believe the benefits of technology outweigh the drawbacks.",
  words: ["On","balance","I","believe","the","benefits","of","technology","outweigh","the","drawbacks"],
  stress: [0.2, 0.8, 0.2, 0.7, 0.1, 1.0, 0.1, 1.0, 1.0, 0.1, 1.0],
  ipa: "/ɒn ˈbæləns aɪ bɪˈliːv ðə ˈbenɪfɪts əv tekˈnɒlədʒi ˌaʊtˈweɪ ðə ˈdrɔːbæks/",
  meaning: "用 on balance 做最终总结——学术化收尾",
  cn: "总体来看，我认为科技的好处大于坏处。",
  trap: "I think technology's good parts are more than bad parts.",
  tip: "ON BALANCE 学术开头，BENEFITS TECHNOLOGY 和 OUTWEIGH DRAWBACKS 两组重音",
  pattern: "On balance, I believe the benefits of + [noun] + outweigh the drawbacks",
  variants: ["The pros of technology far exceed the cons.", "For all its flaws, technology has been a net positive.", "When you weigh it up, tech does more good than harm."]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY19 = [
  s541, s542, s543, s544, s545, s546, s547, s548, s549, s550,
  s551, s552, s553, s554, s555, s556, s557, s558, s559, s560,
  s561, s562, s563, s564, s565, s566, s567, s568, s569, s570
];

export const SCENES_DAY19 = {
  541: { icon: "📱", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  542: { icon: "💬", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  543: { icon: "⏱️", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  544: { icon: "✨", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  545: { icon: "📊", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  546: { icon: "📲", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  547: { icon: "🔒", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  548: { icon: "🛒", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  549: { icon: "👵", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  550: { icon: "🤖", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  551: { icon: "🌐", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  552: { icon: "👣", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  553: { icon: "🎬", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  554: { icon: "🔭", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  555: { icon: "📹", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  556: { icon: "🔮", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  557: { icon: "🚀", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  558: { icon: "🗺️", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  559: { icon: "📕", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  560: { icon: "⚖️", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  561: { icon: "🛡️", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  562: { icon: "💭", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  563: { icon: "🏘️", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  564: { icon: "👶", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  565: { icon: "⌚", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  566: { icon: "💡", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  567: { icon: "🏠", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  568: { icon: "⚙️", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  569: { icon: "🎧", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" },
  570: { icon: "🎯", colors: ["#06b6d4","#22d3ee"], title: "DIGITAL AGE", sub: "IELTS Part 1 · Technology" }
};
