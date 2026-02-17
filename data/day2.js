// ─── Day 2 · Negotiations & Persuasion ───────────────────────────
// 30 sentences (id 31-60)

const s31 = {
  id: 31,
  cat: "negotiation",
  scene: "opening",
  text: "Let's find a solution that works for both sides.",
  words: ["Let's","find","a","so·lu·tion","that","works","for","both","sides"],
  stress: [1,1,0,1,0,1,0,1,1],
  ipa: "lɛts faɪnd ə səˈluːʃən ðæt wɜːrks fɔːr boʊθ saɪdz",
  meaning: "Propose a win-win outcome",
  cn: "让我们找到一个对双方都有效的方案。",
  trap: "'solution' 重音在第二音节 -LU-，不要读成 SO-lu-tion",
  tip: "用升调说 'both sides' 传递合作诚意",
  pattern: "Let's find ___ that works for ___",
  variants: [
    "Let's find an arrangement that works for everyone.",
    "Let's find a compromise that works for both parties."
  ]
};

const s32 = {
  id: 32,
  cat: "negotiation",
  scene: "opening",
  text: "I appreciate you taking the time to meet today.",
  words: ["I","ap·pre·ci·ate","you","tak·ing","the","time","to","meet","to·day"],
  stress: [1,1,0,1,0,1,0,1,1],
  ipa: "aɪ əˈpriːʃieɪt juː ˈteɪkɪŋ ðə taɪm tə miːt təˈdeɪ",
  meaning: "Show gratitude at the start of a meeting",
  cn: "感谢您今天抽出时间来会面。",
  trap: "'appreciate' 四个音节，重音在 -PRE-，别漏掉 -ci- 音节",
  tip: "开头的 'I appreciate' 语速稍慢，显得真诚",
  pattern: "I appreciate you ___ing ___",
  variants: [
    "I appreciate you making the effort to be here.",
    "I appreciate you setting aside time for this discussion."
  ]
};

const s33 = {
  id: 33,
  cat: "persuasion",
  scene: "proposal",
  text: "What if we approached this from a different angle?",
  words: ["What","if","we","ap·proached","this","from","a","dif·fer·ent","an·gle"],
  stress: [1,0,0,1,1,0,0,1,1],
  ipa: "wɒt ɪf wi əˈproʊtʃt ðɪs frəm ə ˈdɪfərənt ˈæŋɡəl",
  meaning: "Suggest a new perspective tactfully",
  cn: "如果我们从不同的角度来看这个问题呢？",
  trap: "'angle' 的 /æŋɡəl/ 不要读成 'angel' /eɪndʒəl/",
  tip: "'What if' 连读，语调上扬显得开放而非强势",
  pattern: "What if we ___ from a different ___?",
  variants: [
    "What if we tackled this from a different perspective?",
    "What if we looked at this from a fresh angle?"
  ]
};

const s34 = {
  id: 34,
  cat: "negotiation",
  scene: "concession",
  text: "We're willing to be flexible on the timeline.",
  words: ["We're","will·ing","to","be","flex·i·ble","on","the","time·line"],
  stress: [1,1,0,0,1,0,0,1],
  ipa: "wɪr ˈwɪlɪŋ tə bi ˈflɛksəbəl ɒn ðə ˈtaɪmlaɪn",
  meaning: "Signal willingness to compromise on schedule",
  cn: "我们愿意在时间线上保持灵活。",
  trap: "'flexible' 重音在第一音节 FLEX-，三音节不要读成两个",
  tip: "重读 'flexible' 和 'timeline'，中间弱读形成节奏感",
  pattern: "We're willing to be flexible on ___",
  variants: [
    "We're willing to be flexible on the pricing.",
    "We're willing to be flexible on the delivery schedule."
  ]
};

const s35 = {
  id: 35,
  cat: "persuasion",
  scene: "proposal",
  text: "The data clearly supports our recommendation.",
  words: ["The","da·ta","clear·ly","sup·ports","our","rec·om·men·da·tion"],
  stress: [0,1,1,1,0,1],
  ipa: "ðə ˈdeɪtə ˈklɪrli səˈpɔːrts aʊər ˌrɛkəmɛnˈdeɪʃən",
  meaning: "Use evidence to back up a proposal",
  cn: "数据清楚地支持我们的建议。",
  trap: "'data' 美式 /ˈdeɪtə/，不要读成 /ˈdɑːtɑː/",
  tip: "重读 'clearly' 加强说服力，'recommendation' 最后一个重音落在 -DA-",
  pattern: "The data clearly supports ___",
  variants: [
    "The data clearly supports this approach.",
    "The evidence clearly supports our proposal."
  ]
};

const s36 = {
  id: 36,
  cat: "negotiation",
  scene: "counter",
  text: "I understand your concern, but consider this alternative.",
  words: ["I","un·der·stand","your","con·cern","but","con·sid·er","this","al·ter·na·tive"],
  stress: [0,1,0,1,0,1,0,1],
  ipa: "aɪ ˌʌndərˈstænd jɔːr kənˈsɜːrn bʌt kənˈsɪdər ðɪs ɔːlˈtɜːrnətɪv",
  meaning: "Acknowledge then redirect",
  cn: "我理解您的顾虑，但请考虑这个替代方案。",
  trap: "'alternative' 重音在第二音节 -TER-，四个音节",
  tip: "'but' 前微停顿，制造转折效果；'consider' 和 'alternative' 连贯",
  pattern: "I understand your ___, but consider ___",
  variants: [
    "I understand your position, but consider this option.",
    "I understand your hesitation, but consider the benefits."
  ]
};

const s37 = {
  id: 37,
  cat: "persuasion",
  scene: "closing",
  text: "This is a limited-time opportunity we shouldn't miss.",
  words: ["This","is","a","lim·it·ed-time","op·por·tu·ni·ty","we","shouldn't","miss"],
  stress: [1,0,0,1,1,0,1,1],
  ipa: "ðɪs ɪz ə ˈlɪmɪtɪd taɪm ˌɒpərˈtuːnəti wi ˈʃʊdənt mɪs",
  meaning: "Create urgency to persuade action",
  cn: "这是一个我们不该错过的限时机会。",
  trap: "'opportunity' 五个音节，重音在 -TU-",
  tip: "强调 'limited-time' 制造紧迫感，'miss' 干脆利落",
  pattern: "This is a ___ opportunity we shouldn't miss",
  variants: [
    "This is a rare opportunity we shouldn't miss.",
    "This is a once-in-a-lifetime opportunity we shouldn't miss."
  ]
};

const s38 = {
  id: 38,
  cat: "negotiation",
  scene: "opening",
  text: "Let me walk you through our proposal step by step.",
  words: ["Let","me","walk","you","through","our","pro·pos·al","step","by","step"],
  stress: [0,0,1,0,0,0,1,1,0,1],
  ipa: "lɛt mi wɔːk juː θruː aʊər prəˈpoʊzəl stɛp baɪ stɛp",
  meaning: "Introduce a structured presentation",
  cn: "让我一步一步地向您介绍我们的提案。",
  trap: "'proposal' 重音在 -PO-，/prəˈpoʊzəl/ 注意 z 音",
  tip: "'step by step' 每个词等间距，体现条理性",
  pattern: "Let me walk you through ___ step by step",
  variants: [
    "Let me walk you through the details step by step.",
    "Let me walk you through each phase step by step."
  ]
};

const s39 = {
  id: 39,
  cat: "persuasion",
  scene: "reframe",
  text: "Think of it not as a cost, but as an investment.",
  words: ["Think","of","it","not","as","a","cost","but","as","an","in·vest·ment"],
  stress: [1,0,0,1,0,0,1,1,0,0,1],
  ipa: "θɪŋk əv ɪt nɒt æz ə kɒst bʌt æz ən ɪnˈvɛstmənt",
  meaning: "Reframe a negative as a positive",
  cn: "不要把它当作成本，而是当作一项投资。",
  trap: "'investment' 重音在 -VEST-，/ɪnˈvɛstmənt/",
  tip: "'cost' 和 'investment' 形成对比，用重读强化转折",
  pattern: "Think of it not as ___, but as ___",
  variants: [
    "Think of it not as an expense, but as an investment.",
    "Think of it not as a risk, but as an opportunity."
  ]
};

const s40 = {
  id: 40,
  cat: "negotiation",
  scene: "counter",
  text: "That's a fair point. How about we meet halfway?",
  words: ["That's","a","fair","point","How","a·bout","we","meet","half·way"],
  stress: [1,0,1,1,1,1,0,1,1],
  ipa: "ðæts ə fɛr pɔɪnt haʊ əˈbaʊt wi miːt ˌhæfˈweɪ",
  meaning: "Acknowledge and propose a compromise",
  cn: "这说得有道理。我们各退一步怎么样？",
  trap: "'halfway' 重音在后半 -WAY，/ˌhæfˈweɪ/",
  tip: "'fair point' 后稍停，再用上扬语调说 'How about'",
  pattern: "That's a fair point. How about we ___?",
  variants: [
    "That's a fair point. How about we split the difference?",
    "That's a valid point. How about we find a middle ground?"
  ]
};

const s41 = {
  id: 41,
  cat: "persuasion",
  scene: "evidence",
  text: "Our clients have seen a thirty percent increase in revenue.",
  words: ["Our","cli·ents","have","seen","a","thir·ty","per·cent","in·crease","in","rev·e·nue"],
  stress: [0,1,0,1,0,1,1,1,0,1],
  ipa: "aʊər ˈklaɪənts hæv siːn ə ˈθɜːrti pərˈsɛnt ˈɪnkriːs ɪn ˈrɛvənjuː",
  meaning: "Use specific results to persuade",
  cn: "我们的客户收入增长了百分之三十。",
  trap: "'revenue' 重音在 REV-，三音节 /ˈrɛvənjuː/",
  tip: "数字 'thirty percent' 放慢说，让对方记住关键数据",
  pattern: "Our clients have seen a ___ increase in ___",
  variants: [
    "Our clients have seen a twenty percent increase in efficiency.",
    "Our partners have seen a forty percent increase in engagement."
  ]
};

const s42 = {
  id: 42,
  cat: "negotiation",
  scene: "boundary",
  text: "Unfortunately, that's beyond what we can offer at this stage.",
  words: ["Un·for·tu·nate·ly","that's","be·yond","what","we","can","of·fer","at","this","stage"],
  stress: [1,1,1,0,0,0,1,0,0,1],
  ipa: "ʌnˈfɔːrtʃənətli ðæts bɪˈjɒnd wɒt wi kæn ˈɒfər æt ðɪs steɪdʒ",
  meaning: "Set a polite but firm boundary",
  cn: "很遗憾，这超出了我们目前能提供的范围。",
  trap: "'unfortunately' 重音在 -FOR-，五个音节",
  tip: "'unfortunately' 开头轻柔，'beyond' 加重表示界限",
  pattern: "Unfortunately, that's beyond what we can ___",
  variants: [
    "Unfortunately, that's beyond what we can agree to right now.",
    "Unfortunately, that's beyond what we can accommodate at this point."
  ]
};

const s43 = {
  id: 43,
  cat: "persuasion",
  scene: "storytelling",
  text: "Imagine how much easier your workflow would become.",
  words: ["I·mag·ine","how","much","eas·i·er","your","work·flow","would","be·come"],
  stress: [1,0,1,1,0,1,0,1],
  ipa: "ɪˈmædʒɪn haʊ mʌtʃ ˈiːziər jɔːr ˈwɜːrkfloʊ wʊd bɪˈkʌm",
  meaning: "Paint a vision to motivate action",
  cn: "想象一下您的工作流程会变得多么轻松。",
  trap: "'imagine' 重音在 -MAG-，/ɪˈmædʒɪn/",
  tip: "'Imagine' 拉长，用憧憬的语气带听者进入画面",
  pattern: "Imagine how much ___ your ___ would become",
  variants: [
    "Imagine how much faster your team would operate.",
    "Imagine how much smoother your process would become."
  ]
};

const s44 = {
  id: 44,
  cat: "negotiation",
  scene: "clarify",
  text: "Just to clarify, are we aligned on the key terms?",
  words: ["Just","to","clar·i·fy","are","we","a·ligned","on","the","key","terms"],
  stress: [1,0,1,0,0,1,0,0,1,1],
  ipa: "dʒʌst tə ˈklærɪfaɪ ɑːr wi əˈlaɪnd ɒn ðə kiː tɜːrmz",
  meaning: "Confirm mutual understanding",
  cn: "确认一下，我们在关键条款上达成一致了吗？",
  trap: "'aligned' /əˈlaɪnd/ 注意不要读成 'a-lined'",
  tip: "'key terms' 重读，这是句子核心信息",
  pattern: "Just to clarify, are we aligned on ___?",
  variants: [
    "Just to clarify, are we aligned on the deliverables?",
    "Just to clarify, are we aligned on the scope?"
  ]
};

const s45 = {
  id: 45,
  cat: "persuasion",
  scene: "authority",
  text: "Industry experts consistently recommend this approach.",
  words: ["In·dus·try","ex·perts","con·sis·tent·ly","rec·om·mend","this","ap·proach"],
  stress: [1,1,1,1,0,1],
  ipa: "ˈɪndəstri ˈɛkspɜːrts kənˈsɪstəntli ˌrɛkəˈmɛnd ðɪs əˈproʊtʃ",
  meaning: "Leverage authority to build credibility",
  cn: "行业专家一致推荐这种方法。",
  trap: "'consistently' 重音在 -SIS-，四音节",
  tip: "'experts' 和 'recommend' 重读，强化权威感",
  pattern: "___ experts consistently recommend ___",
  variants: [
    "Leading experts consistently recommend this strategy.",
    "Industry analysts consistently recommend this framework."
  ]
};

const s46 = {
  id: 46,
  cat: "negotiation",
  scene: "concession",
  text: "We can agree to that, provided you extend the warranty.",
  words: ["We","can","a·gree","to","that","pro·vid·ed","you","ex·tend","the","war·ran·ty"],
  stress: [0,0,1,0,1,1,0,1,0,1],
  ipa: "wi kæn əˈɡriː tə ðæt prəˈvaɪdɪd juː ɪkˈstɛnd ðə ˈwɒrənti",
  meaning: "Offer conditional agreement",
  cn: "我们可以同意，前提是你们延长保修期。",
  trap: "'provided' /prəˈvaɪdɪd/ 重音在 -VI-，别读成 'pro-VI-ded'",
  tip: "'provided' 前微停，制造条件转折的戏剧感",
  pattern: "We can agree to that, provided you ___",
  variants: [
    "We can agree to that, provided you adjust the pricing.",
    "We can agree to that, provided you include free support."
  ]
};

const s47 = {
  id: 47,
  cat: "persuasion",
  scene: "social-proof",
  text: "More than fifty companies have already made the switch.",
  words: ["More","than","fif·ty","com·pa·nies","have","al·rea·dy","made","the","switch"],
  stress: [1,0,1,1,0,1,1,0,1],
  ipa: "mɔːr ðæn ˈfɪfti ˈkʌmpəniz hæv ɔːlˈrɛdi meɪd ðə swɪtʃ",
  meaning: "Use social proof to encourage action",
  cn: "已有超过五十家公司完成了转型。",
  trap: "'companies' 重音在 COM-，三音节 /ˈkʌmpəniz/",
  tip: "数字 'fifty' 清晰发音，'switch' 短促有力",
  pattern: "More than ___ have already ___",
  variants: [
    "More than a hundred teams have already adopted this tool.",
    "More than thirty organizations have already signed on."
  ]
};

const s48 = {
  id: 48,
  cat: "negotiation",
  scene: "reframe",
  text: "Rather than focusing on price, let's discuss overall value.",
  words: ["Rath·er","than","fo·cus·ing","on","price","let's","dis·cuss","o·ver·all","val·ue"],
  stress: [1,0,1,0,1,1,1,1,1],
  ipa: "ˈræðər ðæn ˈfoʊkəsɪŋ ɒn praɪs lɛts dɪˈskʌs ˌoʊvərˈɔːl ˈvæljuː",
  meaning: "Shift the conversation frame",
  cn: "与其纠结价格，不如讨论整体价值。",
  trap: "'value' /ˈvæljuː/ 注意 /lj/ 连读",
  tip: "'price' 和 'value' 对比重读，突出reframe效果",
  pattern: "Rather than focusing on ___, let's discuss ___",
  variants: [
    "Rather than focusing on cost, let's discuss the returns.",
    "Rather than focusing on timelines, let's discuss priorities."
  ]
};

const s49 = {
  id: 49,
  cat: "persuasion",
  scene: "empathy",
  text: "I completely understand where you're coming from.",
  words: ["I","com·plete·ly","un·der·stand","where","you're","com·ing","from"],
  stress: [0,1,1,0,1,1,0],
  ipa: "aɪ kəmˈpliːtli ˌʌndərˈstænd wɛr jʊr ˈkʌmɪŋ frɒm",
  meaning: "Show deep empathy before persuading",
  cn: "我完全理解您的立场。",
  trap: "'completely' 重音在 -PLETE-，三音节",
  tip: "整句语速放慢，真诚的语气比重音更重要",
  pattern: "I completely understand where you're ___",
  variants: [
    "I completely understand your perspective on this.",
    "I totally understand where you're coming from."
  ]
};

const s50 = {
  id: 50,
  cat: "negotiation",
  scene: "closing",
  text: "Shall we go ahead and finalize the agreement today?",
  words: ["Shall","we","go","a·head","and","fi·nal·ize","the","a·gree·ment","to·day"],
  stress: [1,0,0,1,0,1,0,1,1],
  ipa: "ʃæl wi ɡoʊ əˈhɛd ænd ˈfaɪnəlaɪz ðə əˈɡriːmənt təˈdeɪ",
  meaning: "Push for a close confidently",
  cn: "我们今天就敲定协议吧？",
  trap: "'finalize' 重音在 FI-，/ˈfaɪnəlaɪz/",
  tip: "用自信但不逼迫的语调，'today' 微微上扬",
  pattern: "Shall we go ahead and ___ today?",
  variants: [
    "Shall we go ahead and sign the contract today?",
    "Shall we go ahead and lock in the terms today?"
  ]
};

const s51 = {
  id: 51,
  cat: "persuasion",
  scene: "contrast",
  text: "The risk of doing nothing far outweighs the cost of acting.",
  words: ["The","risk","of","do·ing","noth·ing","far","out·weighs","the","cost","of","act·ing"],
  stress: [0,1,0,1,1,1,1,0,1,0,1],
  ipa: "ðə rɪsk əv ˈduːɪŋ ˈnʌθɪŋ fɑːr ˌaʊtˈweɪz ðə kɒst əv ˈæktɪŋ",
  meaning: "Use loss aversion to motivate",
  cn: "不作为的风险远远大于行动的成本。",
  trap: "'outweighs' /ˌaʊtˈweɪz/ 注意 /weɪz/ 不是 /waɪz/",
  tip: "'nothing' 和 'acting' 形成节奏对比，'far' 拉长强调程度",
  pattern: "The risk of ___ far outweighs the cost of ___",
  variants: [
    "The risk of waiting far outweighs the cost of starting now.",
    "The risk of inaction far outweighs the cost of change."
  ]
};

const s52 = {
  id: 52,
  cat: "negotiation",
  scene: "anchor",
  text: "Based on market research, we believe this is a competitive offer.",
  words: ["Based","on","mar·ket","re·search","we","be·lieve","this","is","a","com·pet·i·tive","of·fer"],
  stress: [1,0,1,1,0,1,1,0,0,1,1],
  ipa: "beɪst ɒn ˈmɑːrkɪt rɪˈsɜːrtʃ wi bɪˈliːv ðɪs ɪz ə kəmˈpɛtɪtɪv ˈɒfər",
  meaning: "Anchor your price with evidence",
  cn: "根据市场调研，我们认为这是一个有竞争力的报价。",
  trap: "'competitive' 重音在 -PET-，四音节",
  tip: "'market research' 连读，'competitive offer' 自信且平稳",
  pattern: "Based on ___, we believe this is a ___ offer",
  variants: [
    "Based on industry benchmarks, we believe this is a fair offer.",
    "Based on comparable deals, we believe this is a strong offer."
  ]
};

const s53 = {
  id: 53,
  cat: "persuasion",
  scene: "future",
  text: "A year from now, you'll be glad you made this decision.",
  words: ["A","year","from","now","you'll","be","glad","you","made","this","de·ci·sion"],
  stress: [0,1,0,1,1,0,1,0,1,0,1],
  ipa: "ə jɪr frəm naʊ juːl bi ɡlæd juː meɪd ðɪs dɪˈsɪʒən",
  meaning: "Project positive future outcome",
  cn: "一年后，你会庆幸自己做了这个决定。",
  trap: "'decision' 重音在 -CI-，/dɪˈsɪʒən/ 注意 /ʒ/ 音",
  tip: "'A year from now' 画面感停顿，'glad' 用温暖的语气",
  pattern: "A year from now, you'll be glad you ___",
  variants: [
    "A year from now, you'll be glad you took this step.",
    "Six months from now, you'll be glad you started today."
  ]
};

const s54 = {
  id: 54,
  cat: "negotiation",
  scene: "probe",
  text: "What would it take for you to feel comfortable moving forward?",
  words: ["What","would","it","take","for","you","to","feel","com·fort·a·ble","mov·ing","for·ward"],
  stress: [1,0,0,1,0,1,0,1,1,1,1],
  ipa: "wɒt wʊd ɪt teɪk fɔːr juː tə fiːl ˈkʌmfərtəbəl ˈmuːvɪŋ ˈfɔːrwərd",
  meaning: "Probe for the other side's needs",
  cn: "需要什么条件您才能放心地继续推进？",
  trap: "'comfortable' 只有三音节 /ˈkʌmfərtəbəl/，不要读成四个",
  tip: "真诚提问，'comfortable' 用关心的语调",
  pattern: "What would it take for you to feel comfortable ___?",
  variants: [
    "What would it take for you to feel comfortable signing today?",
    "What would it take for you to feel confident about this?"
  ]
};

const s55 = {
  id: 55,
  cat: "persuasion",
  scene: "reciprocity",
  text: "We've already invested significant resources on your behalf.",
  words: ["We've","al·rea·dy","in·vest·ed","sig·nif·i·cant","re·sourc·es","on","your","be·half"],
  stress: [1,1,1,1,1,0,0,1],
  ipa: "wiːv ɔːlˈrɛdi ɪnˈvɛstɪd sɪɡˈnɪfɪkənt rɪˈsɔːrsɪz ɒn jɔːr bɪˈhæf",
  meaning: "Invoke reciprocity principle",
  cn: "我们已经为您投入了大量资源。",
  trap: "'significant' 重音在 -NIF-，/sɪɡˈnɪfɪkənt/",
  tip: "'significant resources' 放慢语速让对方感受到分量",
  pattern: "We've already invested ___ on your behalf",
  variants: [
    "We've already committed significant time on your behalf.",
    "We've already dedicated considerable effort to your project."
  ]
};

const s56 = {
  id: 56,
  cat: "negotiation",
  scene: "deadlock",
  text: "Let's table this issue and revisit it after lunch.",
  words: ["Let's","ta·ble","this","is·sue","and","re·vis·it","it","af·ter","lunch"],
  stress: [1,1,0,1,0,1,0,1,1],
  ipa: "lɛts ˈteɪbəl ðɪs ˈɪʃuː ænd rɪˈvɪzɪt ɪt ˈæftər lʌntʃ",
  meaning: "Suggest a strategic pause",
  cn: "我们先搁置这个问题，午饭后再讨论。",
  trap: "'issue' /ˈɪʃuː/ 不要读成 'is-sue' 两个清晰音节",
  tip: "'table' 在美式英语中意为搁置，语调轻松缓和气氛",
  pattern: "Let's table ___ and revisit it ___",
  variants: [
    "Let's table this topic and revisit it tomorrow.",
    "Let's set this aside and revisit it next week."
  ]
};

const s57 = {
  id: 57,
  cat: "persuasion",
  scene: "scarcity",
  text: "We only have three spots remaining at this price point.",
  words: ["We","on·ly","have","three","spots","re·main·ing","at","this","price","point"],
  stress: [0,1,0,1,1,1,0,0,1,1],
  ipa: "wi ˈoʊnli hæv θriː spɒts rɪˈmeɪnɪŋ æt ðɪs praɪs pɔɪnt",
  meaning: "Create scarcity to drive urgency",
  cn: "以这个价格，我们只剩三个名额了。",
  trap: "'remaining' 重音在 -MAIN-，/rɪˈmeɪnɪŋ/",
  tip: "'three spots' 清晰有力，数字制造紧迫感",
  pattern: "We only have ___ remaining at this ___",
  variants: [
    "We only have two units remaining at this discount.",
    "We only have a few seats remaining at this rate."
  ]
};

const s58 = {
  id: 58,
  cat: "negotiation",
  scene: "rapport",
  text: "We've built a strong relationship, and I value that deeply.",
  words: ["We've","built","a","strong","re·la·tion·ship","and","I","val·ue","that","deep·ly"],
  stress: [1,1,0,1,1,0,1,1,0,1],
  ipa: "wiːv bɪlt ə strɒŋ rɪˈleɪʃənʃɪp ænd aɪ ˈvæljuː ðæt ˈdiːpli",
  meaning: "Strengthen rapport during negotiation",
  cn: "我们建立了牢固的关系，我非常珍视这一点。",
  trap: "'relationship' 重音在 -LA-，/rɪˈleɪʃənʃɪp/",
  tip: "'deeply' 真诚而缓慢，表达重视之情",
  pattern: "We've built a strong ___, and I value that ___",
  variants: [
    "We've built a great partnership, and I value that greatly.",
    "We've developed real trust, and I value that deeply."
  ]
};

const s59 = {
  id: 59,
  cat: "persuasion",
  scene: "logic",
  text: "If we don't act now, we risk falling behind our competitors.",
  words: ["If","we","don't","act","now","we","risk","fall·ing","be·hind","our","com·pet·i·tors"],
  stress: [0,0,1,1,1,0,1,1,1,0,1],
  ipa: "ɪf wi doʊnt ækt naʊ wi rɪsk ˈfɔːlɪŋ bɪˈhaɪnd aʊər kəmˈpɛtɪtərz",
  meaning: "Use competitive pressure to motivate",
  cn: "如果我们现在不行动，就有落后于竞争对手的风险。",
  trap: "'competitors' 重音在 -PET-，四音节 /kəmˈpɛtɪtərz/",
  tip: "'don't act now' 三个重读词连续锤击，制造紧迫感",
  pattern: "If we don't ___ now, we risk ___",
  variants: [
    "If we don't invest now, we risk losing market share.",
    "If we don't move now, we risk missing the window."
  ]
};

const s60 = {
  id: 60,
  cat: "negotiation",
  scene: "closing",
  text: "I'm confident we can reach a deal that benefits everyone.",
  words: ["I'm","con·fi·dent","we","can","reach","a","deal","that","ben·e·fits","ev·ery·one"],
  stress: [1,1,0,0,1,0,1,0,1,1],
  ipa: "aɪm ˈkɒnfɪdənt wi kæn riːtʃ ə diːl ðæt ˈbɛnɪfɪts ˈɛvriwʌn",
  meaning: "Close with confidence and optimism",
  cn: "我有信心我们能达成一个对所有人都有利的协议。",
  trap: "'confident' 重音在 CON-，/ˈkɒnfɪdənt/；'benefits' 重音在 BEN-",
  tip: "'confident' 挺胸说，'everyone' 语气温暖收尾",
  pattern: "I'm confident we can reach a deal that ___",
  variants: [
    "I'm confident we can reach an agreement that satisfies everyone.",
    "I'm confident we can find a solution that benefits all parties."
  ]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY2 = [
  s31, s32, s33, s34, s35, s36, s37, s38, s39, s40,
  s41, s42, s43, s44, s45, s46, s47, s48, s49, s50,
  s51, s52, s53, s54, s55, s56, s57, s58, s59, s60
];

export const SCENES_DAY2 = {
  31: { icon: "🤝", colors: ["#2563EB", "#1E40AF"], title: "Opening the Table", sub: "Win-win framing" },
  32: { icon: "🙏", colors: ["#7C3AED", "#5B21B6"], title: "Warm Opener", sub: "Gratitude & rapport" },
  33: { icon: "🔄", colors: ["#059669", "#047857"], title: "Fresh Perspective", sub: "Reframing the problem" },
  34: { icon: "🤸", colors: ["#D97706", "#B45309"], title: "Flexible Stance", sub: "Showing willingness" },
  35: { icon: "📊", colors: ["#DC2626", "#B91C1C"], title: "Data-Driven", sub: "Evidence-based argument" },
  36: { icon: "↩️", colors: ["#7C3AED", "#6D28D9"], title: "Acknowledge & Redirect", sub: "Tactical empathy" },
  37: { icon: "⏰", colors: ["#E11D48", "#BE123C"], title: "Now or Never", sub: "Urgency creation" },
  38: { icon: "📋", colors: ["#2563EB", "#1D4ED8"], title: "Step by Step", sub: "Structured walkthrough" },
  39: { icon: "💎", colors: ["#8B5CF6", "#7C3AED"], title: "Cost vs Investment", sub: "Value reframing" },
  40: { icon: "⚖️", colors: ["#059669", "#047857"], title: "Meet Halfway", sub: "Compromise proposal" },
  41: { icon: "📈", colors: ["#10B981", "#059669"], title: "Proven Results", sub: "Social proof with data" },
  42: { icon: "🚧", colors: ["#EF4444", "#DC2626"], title: "Firm Boundary", sub: "Polite but clear limits" },
  43: { icon: "🌅", colors: ["#F59E0B", "#D97706"], title: "Paint the Vision", sub: "Future-pacing" },
  44: { icon: "🔍", colors: ["#6366F1", "#4F46E5"], title: "Alignment Check", sub: "Confirming understanding" },
  45: { icon: "🏛️", colors: ["#1F2937", "#111827"], title: "Expert Authority", sub: "Credibility leverage" },
  46: { icon: "🔗", colors: ["#0891B2", "#0E7490"], title: "Conditional Yes", sub: "Trade-off offer" },
  47: { icon: "👥", colors: ["#8B5CF6", "#6D28D9"], title: "Everyone's Doing It", sub: "Social proof" },
  48: { icon: "🎯", colors: ["#EA580C", "#C2410C"], title: "Price vs Value", sub: "Shifting the frame" },
  49: { icon: "💛", colors: ["#F59E0B", "#EAB308"], title: "Deep Empathy", sub: "Understanding first" },
  50: { icon: "✍️", colors: ["#059669", "#047857"], title: "Seal the Deal", sub: "Closing confidently" },
  51: { icon: "⚠️", colors: ["#DC2626", "#991B1B"], title: "Cost of Inaction", sub: "Loss aversion" },
  52: { icon: "📌", colors: ["#2563EB", "#1E40AF"], title: "Market Anchor", sub: "Evidence-based pricing" },
  53: { icon: "🔮", colors: ["#A855F7", "#9333EA"], title: "Future Self", sub: "Forward projection" },
  54: { icon: "🎤", colors: ["#14B8A6", "#0D9488"], title: "Open Question", sub: "Probing needs" },
  55: { icon: "🎁", colors: ["#E11D48", "#BE123C"], title: "We've Invested", sub: "Reciprocity trigger" },
  56: { icon: "☕", colors: ["#78716C", "#57534E"], title: "Strategic Pause", sub: "Cooling the tension" },
  57: { icon: "🔥", colors: ["#EF4444", "#B91C1C"], title: "Limited Spots", sub: "Scarcity principle" },
  58: { icon: "💪", colors: ["#3B82F6", "#2563EB"], title: "Strong Bond", sub: "Relationship value" },
  59: { icon: "🏃", colors: ["#F97316", "#EA580C"], title: "Don't Fall Behind", sub: "Competitive pressure" },
  60: { icon: "🎉", colors: ["#10B981", "#059669"], title: "Confident Close", sub: "Optimistic wrap-up" }
};
