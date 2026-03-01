// 生活场景英语句子库
export const LIFE_SENTENCES = [
  // ============================
  // 社交 (id: 2001-2010)
  // ============================
  {
    id: 2001, cat: "社交", scene: "☕💬",
    text: "Nice to meet you!",
    words: ["Nice","to","meet","you"], stress: [1,.2,1,.3],
    ipa: "/naɪs tə miːt juː/",
    meaning: "初次见面打招呼，最自然的表达",
    cn: "很高兴认识你",
    trap: "Nice to meet you, sir!",
    tip: "NICE 和 MEET 要重读，to 弱化为 /tə/",
    pattern: "Nice to + [verb] + you",
    variants: ["Great to meet you","Lovely to meet you","Pleasure to meet you"]
  },
  {
    id: 2002, cat: "社交", scene: "👋🙂",
    text: "What do you do for a living?",
    words: ["What","do","you","do","for","a","living"], stress: [1,.2,.2,1,.2,.1,1],
    ipa: "/wɒt dʒə duː fər ə ˈlɪvɪŋ/",
    meaning: "问对方职业，比 What's your job 地道得多",
    cn: "你是做什么工作的",
    trap: "What is your job?",
    tip: "WHAT、第二个 DO 和 LIVING 重读，中间全弱化",
    pattern: "What do you do for + [noun]?",
    variants: ["What line of work are you in?","What do you do?","So what keeps you busy?"]
  },
  {
    id: 2003, cat: "社交", scene: "👥💬",
    text: "How's it going?",
    words: ["How's","it","going"], stress: [1,.2,1],
    ipa: "/haʊz ɪt ˈɡoʊɪŋ/",
    meaning: "非正式打招呼，比 How are you 更自然随意",
    cn: "最近怎么样",
    trap: "How are you doing today?",
    tip: "HOW'S 和 GOING 重读，it 几乎不发音",
    pattern: "How's + [pronoun] + [verb-ing]?",
    variants: ["How's everything?","What's up?","How've you been?"]
  },
  {
    id: 2004, cat: "社交", scene: "🎉👋",
    text: "It was great catching up!",
    words: ["It","was","great","catching","up"], stress: [.2,.2,1,1,.8],
    ipa: "/ɪt wəz ɡreɪt ˈkætʃɪŋ ʌp/",
    meaning: "和老朋友聊完后道别，表示这次聊天很愉快",
    cn: "聊得很开心",
    trap: "I am very happy to talk with you!",
    tip: "GREAT 和 CATCHING UP 是重点，It was 弱化",
    pattern: "It was great + [verb-ing]",
    variants: ["So good catching up with you","Loved chatting with you","Great seeing you again"]
  },
  {
    id: 2005, cat: "社交", scene: "🤝😊",
    text: "I really appreciate it.",
    words: ["I","really","appreciate","it"], stress: [.2,1,1,.2],
    ipa: "/aɪ ˈrɪəli əˈpriːʃieɪt ɪt/",
    meaning: "真诚地表示感谢，比 thank you 更有分量",
    cn: "我真的很感激",
    trap: "Thank you very much indeed!",
    tip: "REALLY 和 APPRECIATE 双重强调，语气真诚",
    pattern: "I really + [verb] + it",
    variants: ["That means a lot to me","I can't thank you enough","You're the best"]
  },
  {
    id: 2006, cat: "社交", scene: "💬🧑‍🤝‍🧑",
    text: "You look amazing!",
    words: ["You","look","amazing"], stress: [.3,1,1],
    ipa: "/juː lʊk əˈmeɪzɪŋ/",
    meaning: "夸别人好看，自然真诚的夸人方式",
    cn: "你看起来太棒了",
    trap: "You are very beautiful today!",
    tip: "LOOK 和 AMAZING 都要重读，尤其 AMAZING 的第二个音节",
    pattern: "You look + [adjective]",
    variants: ["You look great!","You look fantastic!","Love your outfit!"]
  },
  {
    id: 2007, cat: "社交", scene: "📱💬",
    text: "Let's grab coffee sometime.",
    words: ["Let's","grab","coffee","sometime"], stress: [.3,1,1,1],
    ipa: "/lɛts ɡræb ˈkɒfi ˈsʌmtaɪm/",
    meaning: "约人喝咖啡，随意不给压力的邀请方式",
    cn: "有空一起喝杯咖啡吧",
    trap: "Do you want to drink coffee with me?",
    tip: "GRAB、COFFEE、SOMETIME 三个词都带重音",
    pattern: "Let's + [verb] + [noun] + sometime",
    variants: ["We should hang out sometime","Let's get together soon","Coffee on me next time"]
  },
  {
    id: 2008, cat: "社交", scene: "👋😄",
    text: "I'm heading out. See ya!",
    words: ["I'm","heading","out","See","ya"], stress: [.2,1,1,1,.3],
    ipa: "/aɪm ˈhɛdɪŋ aʊt siː jə/",
    meaning: "准备离开时的告别，轻松自然",
    cn: "我走了，回见",
    trap: "I will leave now. Goodbye!",
    tip: "HEADING OUT 连读成一个词组，SEE YA 快速说",
    pattern: "I'm heading + [direction]. See ya!",
    variants: ["I gotta run. Catch you later!","I'm off. Take care!","I'm out. Later!"]
  },
  {
    id: 2009, cat: "社交", scene: "🗣️🤔",
    text: "That's a good point.",
    words: ["That's","a","good","point"], stress: [.3,.1,1,1],
    ipa: "/ðæts ə ɡʊd pɔɪnt/",
    meaning: "表示同意对方说的有道理，日常对话常用",
    cn: "你说得有道理",
    trap: "I agree with your opinion!",
    tip: "GOOD 和 POINT 重读，That's a 快速滑过",
    pattern: "That's a + [adjective] + [noun]",
    variants: ["You've got a point","Fair enough","I see what you mean"]
  },
  {
    id: 2010, cat: "社交", scene: "🙏🥺",
    text: "My bad, I'm sorry about that.",
    words: ["My","bad","I'm","sorry","about","that"], stress: [.3,1,.2,1,.2,1],
    ipa: "/maɪ bæd aɪm ˈsɒri əˈbaʊt ðæt/",
    meaning: "承认错误并道歉，非正式但真诚",
    cn: "我的错，抱歉",
    trap: "I apologize for my mistake!",
    tip: "BAD、SORRY、THAT 三处重音，语调下降表真诚",
    pattern: "My bad, I'm sorry about + [that/noun]",
    variants: ["Sorry, that was on me","Oops, my fault","I messed up, sorry"]
  },

  // ============================
  // 日常 (id: 2101-2110)
  // ============================
  {
    id: 2101, cat: "日常", scene: "☀️🛏️",
    text: "I'm running late!",
    words: ["I'm","running","late"], stress: [.2,1,1],
    ipa: "/aɪm ˈrʌnɪŋ leɪt/",
    meaning: "要迟到了，早上赶时间最常说的一句",
    cn: "我要迟到了",
    trap: "I will be late for the time!",
    tip: "RUNNING 和 LATE 都要重读，语气急促",
    pattern: "I'm running + [adjective]",
    variants: ["I'm gonna be late!","I'm behind schedule","Gotta go, I'm late!"]
  },
  {
    id: 2102, cat: "日常", scene: "🌧️☁️",
    text: "It looks like it's gonna rain.",
    words: ["It","looks","like","it's","gonna","rain"], stress: [.2,1,.3,.2,.2,1],
    ipa: "/ɪt lʊks laɪk ɪts ˈɡɒnə reɪn/",
    meaning: "看天气觉得要下雨，日常闲聊开场白",
    cn: "看起来要下雨了",
    trap: "The weather forecast says it will rain!",
    tip: "LOOKS 和 RAIN 重读，gonna 弱化为 /ˈɡɒnə/",
    pattern: "It looks like + [clause]",
    variants: ["Looks like rain","I think it might rain","We might get some rain"]
  },
  {
    id: 2103, cat: "日常", scene: "😴💤",
    text: "I didn't sleep well last night.",
    words: ["I","didn't","sleep","well","last","night"], stress: [.2,.3,1,1,.3,1],
    ipa: "/aɪ ˈdɪdnt sliːp wɛl læst naɪt/",
    meaning: "没睡好，和同事朋友聊天常用",
    cn: "我昨晚没睡好",
    trap: "My sleep quality was not good yesterday!",
    tip: "SLEEP、WELL、NIGHT 三个重音，表达疲惫感",
    pattern: "I didn't + [verb] + well + [time]",
    variants: ["I barely slept","I tossed and turned all night","I was up all night"]
  },
  {
    id: 2104, cat: "日常", scene: "🏠🧹",
    text: "I need to do the laundry.",
    words: ["I","need","to","do","the","laundry"], stress: [.2,1,.1,.3,.1,1],
    ipa: "/aɪ niːd tə duː ðə ˈlɔːndri/",
    meaning: "该洗衣服了，家务相关的常用表达",
    cn: "我得洗衣服了",
    trap: "I should wash my clothes now!",
    tip: "NEED 和 LAUNDRY 重读，to do the 弱化连读",
    pattern: "I need to + [verb] + the + [noun]",
    variants: ["I gotta do laundry","The laundry's piling up","Time to wash clothes"]
  },
  {
    id: 2105, cat: "日常", scene: "🤒😷",
    text: "I'm not feeling well.",
    words: ["I'm","not","feeling","well"], stress: [.2,.3,1,1],
    ipa: "/aɪm nɒt ˈfiːlɪŋ wɛl/",
    meaning: "身体不舒服时说的，委婉不夸张",
    cn: "我不太舒服",
    trap: "I am sick and uncomfortable!",
    tip: "FEELING 和 WELL 重读，I'm not 低调滑过",
    pattern: "I'm not + [verb-ing] + [adverb]",
    variants: ["I'm feeling a bit off","I'm under the weather","I don't feel so great"]
  },
  {
    id: 2106, cat: "日常", scene: "🗺️❓",
    text: "Excuse me, how do I get to...?",
    words: ["Excuse","me","how","do","I","get","to"], stress: [1,.3,1,.2,.2,1,.2],
    ipa: "/ɪkˈskjuːz miː haʊ duː aɪ ɡɛt tuː/",
    meaning: "问路的标准开场白，礼貌实用",
    cn: "请问怎么去……",
    trap: "Can you tell me the way to go there?",
    tip: "EXCUSE、HOW、GET 三处重读，do I 弱化",
    pattern: "Excuse me, how do I get to + [place]?",
    variants: ["Could you point me to...?","Which way to...?","Do you know how to get to...?"]
  },
  {
    id: 2107, cat: "日常", scene: "📱🔋",
    text: "My phone's about to die.",
    words: ["My","phone's","about","to","die"], stress: [.2,1,.3,.2,1],
    ipa: "/maɪ foʊnz əˈbaʊt tə daɪ/",
    meaning: "手机快没电了，现代人的日常",
    cn: "我手机快没电了",
    trap: "My phone battery is very low!",
    tip: "PHONE'S 和 DIE 重读，about to 连读",
    pattern: "[noun] is about to + [verb]",
    variants: ["My phone's dying","I'm almost out of battery","My phone's at 1%"]
  },
  {
    id: 2108, cat: "日常", scene: "🛒📋",
    text: "I'm gonna swing by the store.",
    words: ["I'm","gonna","swing","by","the","store"], stress: [.2,.2,1,.3,.1,1],
    ipa: "/aɪm ˈɡɒnə swɪŋ baɪ ðə stɔːr/",
    meaning: "顺便去一下商店，口语化的去买东西",
    cn: "我顺便去一趟超市",
    trap: "I plan to go to the supermarket!",
    tip: "SWING 和 STORE 重读，gonna 弱化",
    pattern: "I'm gonna swing by + [place]",
    variants: ["I need to pop by the store","I'm gonna make a quick run to the store","I'll stop by the store"]
  },
  {
    id: 2109, cat: "日常", scene: "🔑🏠",
    text: "I locked myself out.",
    words: ["I","locked","myself","out"], stress: [.2,1,1,1],
    ipa: "/aɪ lɒkt maɪˈsɛlf aʊt/",
    meaning: "把自己锁在门外了，尴尬又常见",
    cn: "我把自己锁在外面了",
    trap: "I forgot my key and cannot enter!",
    tip: "LOCKED、MYSELF、OUT 都要重读，表达无奈",
    pattern: "I + [verb-ed] + myself + [preposition]",
    variants: ["I left my keys inside","I can't get in","I'm locked out of my place"]
  },
  {
    id: 2110, cat: "日常", scene: "😩🛏️",
    text: "I could use a nap.",
    words: ["I","could","use","a","nap"], stress: [.2,.3,1,.1,1],
    ipa: "/aɪ kʊd juːz ə næp/",
    meaning: "我想打个盹，委婉表达困倦",
    cn: "我想小睡一会儿",
    trap: "I want to sleep for a short time!",
    tip: "USE 和 NAP 重读，could 轻声，表达需要",
    pattern: "I could use + [article] + [noun]",
    variants: ["I need a nap","I'm ready for a nap","I could really use some sleep"]
  },

  // ============================
  // 购物 (id: 2201-2210)
  // ============================
  {
    id: 2201, cat: "购物", scene: "🏷️💰",
    text: "How much is this?",
    words: ["How","much","is","this"], stress: [1,1,.2,1],
    ipa: "/haʊ mʌtʃ ɪz ðɪs/",
    meaning: "问价格最直接的方式",
    cn: "这个多少钱",
    trap: "What is the price of this product?",
    tip: "HOW MUCH 连读重音，THIS 也要重读",
    pattern: "How much is + [this/that/noun]?",
    variants: ["What's the price on this?","How much does this run?","What does this go for?"]
  },
  {
    id: 2202, cat: "购物", scene: "👕🔄",
    text: "Can I try this on?",
    words: ["Can","I","try","this","on"], stress: [.3,.2,1,1,.3],
    ipa: "/kæn aɪ traɪ ðɪs ɒn/",
    meaning: "试穿衣服前问店员的标准用语",
    cn: "我能试穿一下吗",
    trap: "May I wear this clothes to test?",
    tip: "TRY 和 THIS 重读，Can I 弱化连读",
    pattern: "Can I + [verb] + this + [preposition]?",
    variants: ["Where's the fitting room?","Mind if I try this on?","Is there a dressing room?"]
  },
  {
    id: 2203, cat: "购物", scene: "📏👕",
    text: "Do you have this in a medium?",
    words: ["Do","you","have","this","in","a","medium"], stress: [.2,.2,1,1,.2,.1,1],
    ipa: "/dʒə hæv ðɪs ɪn ə ˈmiːdiəm/",
    meaning: "问有没有中号，买衣服必备句",
    cn: "这件有中号吗",
    trap: "Is there middle size available?",
    tip: "HAVE、THIS、MEDIUM 三个重音",
    pattern: "Do you have this in + [size/color]?",
    variants: ["Got this in a large?","Does this come in other sizes?","Any mediums left?"]
  },
  {
    id: 2204, cat: "购物", scene: "💳🛒",
    text: "I'll take it.",
    words: ["I'll","take","it"], stress: [.3,1,.3],
    ipa: "/aɪl teɪk ɪt/",
    meaning: "决定买了，简洁有力",
    cn: "我要了",
    trap: "I decide to buy this one!",
    tip: "TAKE 是全句唯一重音，I'll 和 it 弱化",
    pattern: "I'll take + [pronoun/noun]",
    variants: ["I'll get this one","I'm sold","Yep, this is the one"]
  },
  {
    id: 2205, cat: "购物", scene: "🏷️📉",
    text: "Is this on sale?",
    words: ["Is","this","on","sale"], stress: [.2,1,.3,1],
    ipa: "/ɪz ðɪs ɒn seɪl/",
    meaning: "问是不是在打折，精明购物者常问",
    cn: "这个在打折吗",
    trap: "Does this product have discount?",
    tip: "THIS 和 SALE 重读，Is 和 on 弱化",
    pattern: "Is + [noun] + on sale?",
    variants: ["Any deals on this?","Is there a discount?","Got any promotions going on?"]
  },
  {
    id: 2206, cat: "购物", scene: "🔄📦",
    text: "I'd like to return this.",
    words: ["I'd","like","to","return","this"], stress: [.2,.3,.1,1,1],
    ipa: "/aɪd laɪk tə rɪˈtɜːrn ðɪs/",
    meaning: "退货时用的礼貌表达",
    cn: "我想退这个",
    trap: "I want to give back this product!",
    tip: "RETURN 和 THIS 重读，I'd like to 轻声",
    pattern: "I'd like to + [verb] + this",
    variants: ["Can I get a refund?","I need to return this","This isn't working out, can I return it?"]
  },
  {
    id: 2207, cat: "购物", scene: "💵💰",
    text: "Can you give me a better price?",
    words: ["Can","you","give","me","a","better","price"], stress: [.2,.2,1,.2,.1,1,1],
    ipa: "/kæn juː ɡɪv mi ə ˈbɛtər praɪs/",
    meaning: "砍价的礼貌方式，不太aggressive",
    cn: "能便宜一点吗",
    trap: "Please reduce the price for me!",
    tip: "GIVE、BETTER、PRICE 三个重音，语气委婉上扬",
    pattern: "Can you give me a + [adjective] + [noun]?",
    variants: ["Is there any wiggle room on the price?","Any chance of a discount?","What's the best you can do?"]
  },
  {
    id: 2208, cat: "购物", scene: "👀🔍",
    text: "I'm just browsing, thanks.",
    words: ["I'm","just","browsing","thanks"], stress: [.2,.3,1,1],
    ipa: "/aɪm dʒʌst ˈbraʊzɪŋ θæŋks/",
    meaning: "店员问你需要帮忙时拒绝的礼貌说法",
    cn: "我随便看看，谢谢",
    trap: "I do not need help, I am looking!",
    tip: "BROWSING 和 THANKS 重读，just 轻声",
    pattern: "I'm just + [verb-ing], thanks",
    variants: ["Just looking, thanks","I'm good, just browsing","No thanks, I'm just having a look"]
  },
  {
    id: 2209, cat: "购物", scene: "💳📱",
    text: "Do you take Apple Pay?",
    words: ["Do","you","take","Apple","Pay"], stress: [.2,.2,1,1,1],
    ipa: "/dʒə teɪk ˈæpl peɪ/",
    meaning: "问能不能用 Apple Pay 付款",
    cn: "能用 Apple Pay 吗",
    trap: "Can I use mobile phone to pay?",
    tip: "TAKE、APPLE、PAY 都要重读",
    pattern: "Do you take + [payment method]?",
    variants: ["Can I pay with my phone?","Do you accept contactless?","Can I tap to pay?"]
  },
  {
    id: 2210, cat: "购物", scene: "🎁✨",
    text: "Could you gift-wrap this?",
    words: ["Could","you","gift-wrap","this"], stress: [.3,.2,1,1],
    ipa: "/kʊd juː ˈɡɪft ræp ðɪs/",
    meaning: "请店员帮忙包装成礼物",
    cn: "能帮我包装一下吗",
    trap: "Please put this in gift paper!",
    tip: "GIFT-WRAP 和 THIS 重读，Could you 轻声",
    pattern: "Could you + [verb] + this?",
    variants: ["Can you wrap this as a gift?","Is gift wrapping available?","I need this gift-wrapped, please"]
  },

  // ============================
  // 餐饮 (id: 2301-2310)
  // ============================
  {
    id: 2301, cat: "餐饮", scene: "🍽️📋",
    text: "Table for two, please.",
    words: ["Table","for","two","please"], stress: [1,.2,1,1],
    ipa: "/ˈteɪbl fər tuː pliːz/",
    meaning: "到餐厅告诉服务员几个人吃饭",
    cn: "两位，麻烦",
    trap: "We are two people want to eat!",
    tip: "TABLE、TWO、PLEASE 重读，for 弱化",
    pattern: "Table for + [number], please",
    variants: ["A table for two","Two, please","Party of two"]
  },
  {
    id: 2302, cat: "餐饮", scene: "📋🤔",
    text: "What do you recommend?",
    words: ["What","do","you","recommend"], stress: [1,.2,.2,1],
    ipa: "/wɒt dʒə ˌrɛkəˈmɛnd/",
    meaning: "让服务员推荐菜品，避免选择困难",
    cn: "你们推荐什么",
    trap: "What food is the best here?",
    tip: "WHAT 和 RECOMMEND 重读，do you 弱化成 /dʒə/",
    pattern: "What do you + [verb]?",
    variants: ["What's good here?","Any recommendations?","What's your best seller?"]
  },
  {
    id: 2303, cat: "餐饮", scene: "🍔✅",
    text: "I'll have the burger, please.",
    words: ["I'll","have","the","burger","please"], stress: [.2,1,.1,1,1],
    ipa: "/aɪl hæv ðə ˈbɜːrɡər pliːz/",
    meaning: "点餐的标准说法，简洁地道",
    cn: "我要汉堡，谢谢",
    trap: "I want to eat one hamburger!",
    tip: "HAVE、BURGER、PLEASE 重读，I'll the 弱化",
    pattern: "I'll have + the + [dish], please",
    variants: ["Can I get the burger?","The burger for me, please","I'll go with the burger"]
  },
  {
    id: 2304, cat: "餐饮", scene: "⚠️🥜",
    text: "I'm allergic to nuts.",
    words: ["I'm","allergic","to","nuts"], stress: [.2,1,.2,1],
    ipa: "/aɪm əˈlɜːrdʒɪk tə nʌts/",
    meaning: "告知过敏信息，事关安全非常重要",
    cn: "我对坚果过敏",
    trap: "I cannot eat nuts because allergy!",
    tip: "ALLERGIC 和 NUTS 重读，这是安全相关要说清楚",
    pattern: "I'm allergic to + [food/substance]",
    variants: ["I have a nut allergy","No nuts for me, I'm allergic","Does this contain any nuts?"]
  },
  {
    id: 2305, cat: "餐饮", scene: "💧🍷",
    text: "Can I get the check?",
    words: ["Can","I","get","the","check"], stress: [.3,.2,1,.1,1],
    ipa: "/kæn aɪ ɡɛt ðə tʃɛk/",
    meaning: "吃完买单时叫服务员",
    cn: "买单",
    trap: "Please give me the bill to pay!",
    tip: "GET 和 CHECK 重读，Can I 连读弱化",
    pattern: "Can I get + the + [noun]?",
    variants: ["Check, please","Could we get the bill?","We're ready to pay"]
  },
  {
    id: 2306, cat: "餐饮", scene: "🌶️🔥",
    text: "Not too spicy, please.",
    words: ["Not","too","spicy","please"], stress: [1,.3,1,1],
    ipa: "/nɒt tuː ˈspaɪsi pliːz/",
    meaning: "点餐时要求不要太辣",
    cn: "别太辣，谢谢",
    trap: "I don't want it to be very hot!",
    tip: "NOT、SPICY、PLEASE 三个重音，清晰表达需求",
    pattern: "Not too + [adjective], please",
    variants: ["Go easy on the spice","Mild, please","Can you make it less spicy?"]
  },
  {
    id: 2307, cat: "餐饮", scene: "📱🍕",
    text: "How long is the wait?",
    words: ["How","long","is","the","wait"], stress: [1,1,.2,.1,1],
    ipa: "/haʊ lɒŋ ɪz ðə weɪt/",
    meaning: "问还要等多久，排队或等餐时用",
    cn: "还要等多久",
    trap: "How many minutes do I need to wait?",
    tip: "HOW LONG 连读，WAIT 重读",
    pattern: "How long is + the + [noun]?",
    variants: ["What's the wait time?","How long till our table's ready?","Are we looking at a long wait?"]
  },
  {
    id: 2308, cat: "餐饮", scene: "🥡📦",
    text: "Can I get this to go?",
    words: ["Can","I","get","this","to","go"], stress: [.3,.2,1,1,.2,1],
    ipa: "/kæn aɪ ɡɛt ðɪs tə ɡoʊ/",
    meaning: "打包带走，不在店里吃",
    cn: "这个能打包吗",
    trap: "I want to take away this food!",
    tip: "GET、THIS、GO 三个重音，to 弱化",
    pattern: "Can I get this + to go?",
    variants: ["I'll take this to go","Could you box this up?","For here or to go? — To go, please"]
  },
  {
    id: 2309, cat: "餐饮", scene: "🍽️👨‍🍳",
    text: "This is delicious!",
    words: ["This","is","delicious"], stress: [1,.2,1],
    ipa: "/ðɪs ɪz dɪˈlɪʃəs/",
    meaning: "夸饭菜好吃，最直接的赞美",
    cn: "太好吃了",
    trap: "The taste of this food is very good!",
    tip: "THIS 和 DELICIOUS 重读，is 弱化",
    pattern: "This is + [adjective]!",
    variants: ["So good!","This is amazing!","Wow, this is incredible!"]
  },
  {
    id: 2310, cat: "餐饮", scene: "🥤☕",
    text: "Could I get a refill?",
    words: ["Could","I","get","a","refill"], stress: [.3,.2,1,.1,1],
    ipa: "/kʊd aɪ ɡɛt ə ˈriːfɪl/",
    meaning: "续杯，美国餐厅很多饮料免费续",
    cn: "能续杯吗",
    trap: "Please give me one more cup of drink!",
    tip: "GET 和 REFILL 重读，Could I 弱化",
    pattern: "Could I get + [article] + [noun]?",
    variants: ["Can I get a top-up?","One more, please","Hit me with another one"]
  },

  // ============================
  // 出行 (id: 2401-2410)
  // ============================
  {
    id: 2401, cat: "出行", scene: "🚕📍",
    text: "Can you take me to the airport?",
    words: ["Can","you","take","me","to","the","airport"], stress: [.3,.2,1,.2,.2,.1,1],
    ipa: "/kæn juː teɪk mi tə ðə ˈɛrpɔːrt/",
    meaning: "打车去机场，上车后告诉司机目的地",
    cn: "能带我去机场吗",
    trap: "Please drive me to the airplane place!",
    tip: "TAKE 和 AIRPORT 重读，其他都弱化",
    pattern: "Can you take me to + [place]?",
    variants: ["To the airport, please","Airport, please","I need to get to the airport"]
  },
  {
    id: 2402, cat: "出行", scene: "🚇❓",
    text: "Which line do I take?",
    words: ["Which","line","do","I","take"], stress: [1,1,.2,.2,1],
    ipa: "/wɪtʃ laɪn duː aɪ teɪk/",
    meaning: "坐地铁时问该坐哪条线",
    cn: "我该坐哪条线",
    trap: "What subway number should I go?",
    tip: "WHICH、LINE、TAKE 重读，do I 弱化",
    pattern: "Which + [noun] + do I + [verb]?",
    variants: ["What line goes to...?","Do I need to transfer?","Which train do I catch?"]
  },
  {
    id: 2403, cat: "出行", scene: "✈️😰",
    text: "I think I missed my flight.",
    words: ["I","think","I","missed","my","flight"], stress: [.2,1,.2,1,.2,1],
    ipa: "/aɪ θɪŋk aɪ mɪst maɪ flaɪt/",
    meaning: "误机了，在机场柜台说的",
    cn: "我觉得我误机了",
    trap: "I did not catch the airplane!",
    tip: "THINK、MISSED、FLIGHT 三个重音，语气焦急",
    pattern: "I think I + [verb-ed] + my + [noun]",
    variants: ["I missed my flight","My flight left without me","Am I too late for my flight?"]
  },
  {
    id: 2404, cat: "出行", scene: "🧳🔍",
    text: "My luggage didn't come out.",
    words: ["My","luggage","didn't","come","out"], stress: [.2,1,.3,1,1],
    ipa: "/maɪ ˈlʌɡɪdʒ ˈdɪdnt kʌm aʊt/",
    meaning: "行李没出来，在行李转盘找人帮忙",
    cn: "我的行李没出来",
    trap: "My bag is not on the luggage belt!",
    tip: "LUGGAGE、COME、OUT 重读，表达着急",
    pattern: "My + [noun] + didn't + [verb] + out",
    variants: ["I can't find my luggage","My bags are missing","My suitcase never showed up"]
  },
  {
    id: 2405, cat: "出行", scene: "📍🗺️",
    text: "Is this the right way to...?",
    words: ["Is","this","the","right","way","to"], stress: [.2,1,.1,1,1,.2],
    ipa: "/ɪz ðɪs ðə raɪt weɪ tuː/",
    meaning: "确认方向对不对，走路导航时常问",
    cn: "这是去……的路吗",
    trap: "Am I walking in correct direction?",
    tip: "THIS、RIGHT、WAY 三处重读",
    pattern: "Is this the right way to + [place]?",
    variants: ["Am I headed the right way?","Is this the way to...?","Am I going in the right direction?"]
  },
  {
    id: 2406, cat: "出行", scene: "🚕💰",
    text: "Keep the change.",
    words: ["Keep","the","change"], stress: [1,.1,1],
    ipa: "/kiːp ðə tʃeɪndʒ/",
    meaning: "不用找零了，给小费的简洁说法",
    cn: "不用找了",
    trap: "You do not need to give me back money!",
    tip: "KEEP 和 CHANGE 重读，the 几乎不发音",
    pattern: "Keep + the + [noun]",
    variants: ["No change needed","That's all yours","The rest is for you"]
  },
  {
    id: 2407, cat: "出行", scene: "🚌⏱️",
    text: "How often does the bus come?",
    words: ["How","often","does","the","bus","come"], stress: [1,1,.2,.1,1,.3],
    ipa: "/haʊ ˈɒfn dəz ðə bʌs kʌm/",
    meaning: "问公交车多久来一趟",
    cn: "公交车多久来一班",
    trap: "What is the frequency of the bus?",
    tip: "HOW、OFTEN、BUS 重读，does the 弱化",
    pattern: "How often does + [noun] + [verb]?",
    variants: ["When's the next bus?","Is there a bus coming soon?","How long between buses?"]
  },
  {
    id: 2408, cat: "出行", scene: "🅿️🚗",
    text: "Where can I park?",
    words: ["Where","can","I","park"], stress: [1,.2,.2,1],
    ipa: "/wɛr kæn aɪ pɑːrk/",
    meaning: "开车到了找停车位",
    cn: "哪里可以停车",
    trap: "Where is the parking lot location?",
    tip: "WHERE 和 PARK 重读，can I 弱化连读",
    pattern: "Where can I + [verb]?",
    variants: ["Is there parking nearby?","Any parking around here?","Where's the nearest parking?"]
  },
  {
    id: 2409, cat: "出行", scene: "⛽🚗",
    text: "I need to fill up the tank.",
    words: ["I","need","to","fill","up","the","tank"], stress: [.2,1,.1,1,1,.1,1],
    ipa: "/aɪ niːd tə fɪl ʌp ðə tæŋk/",
    meaning: "要去加油了",
    cn: "我得去加油",
    trap: "I must put gasoline in my car!",
    tip: "NEED、FILL、UP、TANK 四个重音节拍",
    pattern: "I need to + [verb] + up + the + [noun]",
    variants: ["I'm running on empty","Gotta get gas","Time to fuel up"]
  },
  {
    id: 2410, cat: "出行", scene: "🛫🪪",
    text: "Where's the check-in counter?",
    words: ["Where's","the","check-in","counter"], stress: [1,.1,1,1],
    ipa: "/wɛrz ðə ˈtʃɛk ɪn ˈkaʊntər/",
    meaning: "到机场找值机柜台",
    cn: "值机柜台在哪",
    trap: "Where is the place to register for flight?",
    tip: "WHERE'S、CHECK-IN、COUNTER 都要重读",
    pattern: "Where's + the + [noun]?",
    variants: ["Which way to check-in?","Can you point me to check-in?","Where do I check in?"]
  },

  // ============================
  // 娱乐 (id: 2501-2510)
  // ============================
  {
    id: 2501, cat: "娱乐", scene: "🎬🍿",
    text: "Have you seen the new Marvel movie?",
    words: ["Have","you","seen","the","new","Marvel","movie"], stress: [.2,.2,1,.1,1,1,1],
    ipa: "/hæv juː siːn ðə njuː ˈmɑːrvəl ˈmuːvi/",
    meaning: "问别人看没看最新的漫威电影，聊天开场",
    cn: "你看新的漫威电影了吗",
    trap: "Did you watch the latest Marvel film?",
    tip: "SEEN、NEW、MARVEL、MOVIE 四个重音",
    pattern: "Have you seen + the + [adjective] + [noun]?",
    variants: ["Seen any good movies lately?","What was the last movie you watched?","Watched anything good recently?"]
  },
  {
    id: 2502, cat: "娱乐", scene: "🎵🎧",
    text: "I can't get this song out of my head.",
    words: ["I","can't","get","this","song","out","of","my","head"], stress: [.2,.3,1,.3,1,1,.2,.2,1],
    ipa: "/aɪ kænt ɡɛt ðɪs sɒŋ aʊt əv maɪ hɛd/",
    meaning: "一首歌在脑海里循环播放停不下来",
    cn: "这首歌在我脑子里挥之不去",
    trap: "This music keeps playing in my brain!",
    tip: "GET、SONG、OUT、HEAD 是节拍重点",
    pattern: "I can't get + [noun] + out of my head",
    variants: ["This song is stuck in my head","I've been humming this all day","It's been on repeat in my brain"]
  },
  {
    id: 2503, cat: "娱乐", scene: "⚽🏃",
    text: "Wanna go for a run?",
    words: ["Wanna","go","for","a","run"], stress: [1,1,.2,.1,1],
    ipa: "/ˈwɒnə ɡoʊ fər ə rʌn/",
    meaning: "约人一起去跑步",
    cn: "要不要一起去跑步",
    trap: "Do you want to run together?",
    tip: "WANNA、GO、RUN 三个重音，for a 弱化",
    pattern: "Wanna + [verb] + for + [article] + [noun]?",
    variants: ["Feel like going for a jog?","Up for a run?","Let's go running"]
  },
  {
    id: 2504, cat: "娱乐", scene: "🎮🕹️",
    text: "I'm hooked on this game.",
    words: ["I'm","hooked","on","this","game"], stress: [.2,1,.3,1,1],
    ipa: "/aɪm hʊkt ɒn ðɪs ɡeɪm/",
    meaning: "沉迷一个游戏停不下来",
    cn: "我沉迷这个游戏了",
    trap: "I am addicted to playing this game!",
    tip: "HOOKED、THIS、GAME 重读，表达上瘾感",
    pattern: "I'm hooked on + [noun]",
    variants: ["I can't stop playing this","This game is so addicting","I'm obsessed with this game"]
  },
  {
    id: 2505, cat: "娱乐", scene: "📱📸",
    text: "Did you see what she posted?",
    words: ["Did","you","see","what","she","posted"], stress: [.2,.2,1,1,.3,1],
    ipa: "/dɪd juː siː wɒt ʃiː ˈpoʊstɪd/",
    meaning: "聊社交媒体上谁发了什么",
    cn: "你看到她发的了吗",
    trap: "Have you looked at her social media content?",
    tip: "SEE、WHAT、POSTED 重读，Did you 弱化连读",
    pattern: "Did you see what + [subject] + [verb-ed]?",
    variants: ["Check out what she posted","You gotta see her latest post","Have you seen her story?"]
  },
  {
    id: 2506, cat: "娱乐", scene: "🏖️✈️",
    text: "I could really use a vacation.",
    words: ["I","could","really","use","a","vacation"], stress: [.2,.2,1,1,.1,1],
    ipa: "/aɪ kʊd ˈrɪəli juːz ə veɪˈkeɪʃn/",
    meaning: "太累了想度假，上班族内心独白",
    cn: "我真的需要一个假期",
    trap: "I want to go travel for rest!",
    tip: "REALLY、USE、VACATION 三个重音，could 轻声",
    pattern: "I could really use + [article] + [noun]",
    variants: ["I need a break so bad","I'm overdue for a vacation","Time to get away for a bit"]
  },
  {
    id: 2507, cat: "娱乐", scene: "📺🛋️",
    text: "I'm binge-watching this show.",
    words: ["I'm","binge-watching","this","show"], stress: [.2,1,1,1],
    ipa: "/aɪm ˈbɪndʒ wɒtʃɪŋ ðɪs ʃoʊ/",
    meaning: "一口气追完一部剧",
    cn: "我在刷这部剧",
    trap: "I watch many episodes of this drama!",
    tip: "BINGE-WATCHING、THIS、SHOW 三处重读",
    pattern: "I'm binge-watching + [noun]",
    variants: ["I can't stop watching this","I've been glued to this show","I'm on a binge"]
  },
  {
    id: 2508, cat: "娱乐", scene: "🎤🎶",
    text: "Let's do karaoke tonight!",
    words: ["Let's","do","karaoke","tonight"], stress: [.3,1,1,1],
    ipa: "/lɛts duː ˌkæriˈoʊki təˈnaɪt/",
    meaning: "约朋友今晚去唱K",
    cn: "今晚去唱K吧",
    trap: "Shall we go to sing songs tonight?",
    tip: "DO、KARAOKE、TONIGHT 三个重音，注意 karaoke 不念成「卡拉OK」",
    pattern: "Let's do + [activity] + [time]!",
    variants: ["Wanna hit up karaoke?","Who's down for karaoke?","Karaoke night, let's go!"]
  },
  {
    id: 2509, cat: "娱乐", scene: "🏋️‍♂️💪",
    text: "I just signed up for a gym.",
    words: ["I","just","signed","up","for","a","gym"], stress: [.2,.3,1,1,.2,.1,1],
    ipa: "/aɪ dʒʌst saɪnd ʌp fər ə dʒɪm/",
    meaning: "刚办了健身卡",
    cn: "我刚办了健身卡",
    trap: "I registered as a member of fitness center!",
    tip: "SIGNED、UP、GYM 重读，表达刚做完的事",
    pattern: "I just signed up for + [article] + [noun]",
    variants: ["I got a gym membership","I finally joined a gym","I started going to the gym"]
  },
  {
    id: 2510, cat: "娱乐", scene: "🎲🃏",
    text: "Anyone up for a game night?",
    words: ["Anyone","up","for","a","game","night"], stress: [1,.3,.2,.1,1,1],
    ipa: "/ˈɛniwʌn ʌp fər ə ɡeɪm naɪt/",
    meaning: "招呼大家来一场游戏之夜",
    cn: "有人想来个游戏之夜吗",
    trap: "Does someone want to play games at night?",
    tip: "ANYONE、GAME、NIGHT 重读，up for a 弱化",
    pattern: "Anyone up for + [article] + [noun]?",
    variants: ["Who's down for board games?","Game night, anyone?","Wanna play some games tonight?"]
  }
];

export const LIFE_CATS = ["社交","日常","购物","餐饮","出行","娱乐"];
