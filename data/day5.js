// ─── Day 5 · Conflict Resolution ──────────────────────────────────
// 30 sentences (id 121-150)

const s121 = {
  id: 121,
  cat: "conflict",
  scene: "de-escalation",
  text: "I can see this is really important to you. Let's slow down.",
  words: ["I","can","see","this","is","real·ly","im·por·tant","to","you","Let's","slow","down"],
  stress: [0,0,1,0,0,1,1,0,1,1,1,1],
  ipa: "aɪ kæn siː ðɪs ɪz ˈrɪəli ɪmˈpɔːrtənt tə juː lɛts sloʊ daʊn",
  meaning: "Acknowledge emotion and de-escalate tension",
  cn: "我能看出这对你来说真的很重要。我们慢慢来。",
  trap: "'important' /ɪmˈpɔːrtənt/ 重音在 -POR-，不要漏掉 /t/",
  tip: "'really important' 真诚重读表共情，'slow down' 语速真的放慢",
  pattern: "I can see this is really important to you. Let's ___",
  variants: [
    "I can tell this matters a lot to you. Let's take a breath.",
    "I understand this is frustrating. Let's slow down and talk it through."
  ]
};

const s122 = {
  id: 122,
  cat: "conflict",
  scene: "de-escalation",
  text: "Let's take a five-minute break and come back with fresh eyes.",
  words: ["Let's","take","a","five-min·ute","break","and","come","back","with","fresh","eyes"],
  stress: [1,1,0,1,1,0,1,1,0,1,1],
  ipa: "lɛts teɪk ə ˈfaɪvˌmɪnɪt breɪk ænd kʌm bæk wɪð frɛʃ aɪz",
  meaning: "Propose a cooling-off period",
  cn: "我们休息五分钟，然后用全新的视角回来。",
  trap: "'five-minute' /ˈfaɪvˌmɪnɪt/ 复合形容词，重音在 FIVE-",
  tip: "'break' 轻松语气，'fresh eyes' 积极收尾传递希望",
  pattern: "Let's take a ___ break and come back with ___",
  variants: [
    "Let's pause for a moment and come back with clear heads.",
    "Let's step away for five minutes and revisit this."
  ]
};

const s123 = {
  id: 123,
  cat: "conflict",
  scene: "de-escalation",
  text: "I think we both want the same outcome here.",
  words: ["I","think","we","both","want","the","same","out·come","here"],
  stress: [0,1,0,1,1,0,1,1,1],
  ipa: "aɪ θɪŋk wi boʊθ wɒnt ðə seɪm ˈaʊtkʌm hɪr",
  meaning: "Find common ground to reduce conflict",
  cn: "我认为我们双方想要的结果是一样的。",
  trap: "'outcome' /ˈaʊtkʌm/ 重音在 OUT-，两音节复合词",
  tip: "'both' 和 'same' 重读强调共同点，拉近距离",
  pattern: "I think we both want the same ___ here",
  variants: [
    "I believe we're actually aligned on the end goal.",
    "I think we both want what's best for the project."
  ]
};

const s124 = {
  id: 124,
  cat: "conflict",
  scene: "mediation",
  text: "Let's hear both sides before we jump to any conclusions.",
  words: ["Let's","hear","both","sides","be·fore","we","jump","to","an·y","con·clu·sions"],
  stress: [1,1,1,1,1,0,1,0,1,1],
  ipa: "lɛts hɪr boʊθ saɪdz bɪˈfɔːr wi dʒʌmp tə ˈɛni kənˈkluːʒənz",
  meaning: "Set fair ground rules for mediation",
  cn: "在我们下结论之前，先听听双方的意见。",
  trap: "'conclusions' /kənˈkluːʒənz/ 重音在 -CLU-，三音节",
  tip: "'both sides' 公平感，'jump to conclusions' 是固定搭配",
  pattern: "Let's hear both sides before we ___",
  variants: [
    "Let's get everyone's perspective before making a decision.",
    "Let's hear from both parties before we move forward."
  ]
};

const s125 = {
  id: 125,
  cat: "conflict",
  scene: "mediation",
  text: "It sounds like there's a misunderstanding we can clear up.",
  words: ["It","sounds","like","there's","a","mis·un·der·stand·ing","we","can","clear","up"],
  stress: [0,1,0,0,0,1,0,0,1,1],
  ipa: "ɪt saʊndz laɪk ðɛrz ə ˌmɪsʌndərˈstændɪŋ wi kæn klɪr ʌp",
  meaning: "Reframe conflict as a misunderstanding",
  cn: "听起来有一个误解，我们可以澄清一下。",
  trap: "'misunderstanding' /ˌmɪsʌndərˈstændɪŋ/ 重音在 -STAND-，五音节",
  tip: "'sounds like' 柔和引入，'clear up' 给出解决方向",
  pattern: "It sounds like there's a ___ we can ___",
  variants: [
    "It seems like we have a miscommunication we can resolve.",
    "It sounds like there's a gap in understanding we can bridge."
  ]
};

const s126 = {
  id: 126,
  cat: "conflict",
  scene: "mediation",
  text: "What would a fair resolution look like from your perspective?",
  words: ["What","would","a","fair","res·o·lu·tion","look","like","from","your","per·spec·tive"],
  stress: [1,0,0,1,1,1,0,0,0,1],
  ipa: "wɒt wʊd ə fɛr ˌrɛzəˈluːʃən lʊk laɪk frəm jɔːr pərˈspɛktɪv",
  meaning: "Invite the other party to propose solutions",
  cn: "从你的角度来看，怎样的解决方案算是公平的？",
  trap: "'resolution' /ˌrɛzəˈluːʃən/ 重音在 -LU-，四音节",
  tip: "'fair' 强调公正，'your perspective' 赋予对方话语权",
  pattern: "What would a fair ___ look like from your perspective?",
  variants: [
    "What would an ideal outcome look like from your side?",
    "What would you consider a fair solution here?"
  ]
};

const s127 = {
  id: 127,
  cat: "conflict",
  scene: "apology",
  text: "I owe you an apology. I should have communicated earlier.",
  words: ["I","owe","you","an","a·pol·o·gy","I","should","have","com·mu·ni·cat·ed","ear·li·er"],
  stress: [0,1,0,0,1,0,1,0,1,1],
  ipa: "aɪ oʊ juː ən əˈpɒlədʒi aɪ ʃʊd hæv kəˈmjuːnɪkeɪtɪd ˈɜːrliər",
  meaning: "Take responsibility with a sincere apology",
  cn: "我欠你一个道歉。我应该更早沟通的。",
  trap: "'apology' /əˈpɒlədʒi/ 重音在 -POL-，四音节",
  tip: "'owe you an apology' 真诚直接，'should have' 连读 /ʃʊdəv/",
  pattern: "I owe you an apology. I should have ___",
  variants: [
    "I owe you an apology. I should have been more transparent.",
    "I'm sorry. I should have looped you in sooner."
  ]
};

const s128 = {
  id: 128,
  cat: "conflict",
  scene: "apology",
  text: "That was my mistake, and I take full responsibility.",
  words: ["That","was","my","mis·take","and","I","take","full","re·spon·si·bil·i·ty"],
  stress: [0,0,0,1,0,0,1,1,1],
  ipa: "ðæt wɒz maɪ mɪˈsteɪk ænd aɪ teɪk fʊl rɪˌspɒnsəˈbɪlɪti",
  meaning: "Own a mistake without deflecting",
  cn: "那是我的错，我承担全部责任。",
  trap: "'responsibility' /rɪˌspɒnsəˈbɪlɪti/ 重音在 -BIL-，六音节",
  tip: "'my mistake' 不推卸，'full responsibility' 完整承担有力量",
  pattern: "That was my mistake, and I take full ___",
  variants: [
    "That was on me, and I take complete responsibility.",
    "I made that call, and I take full ownership of the outcome."
  ]
};

const s129 = {
  id: 129,
  cat: "conflict",
  scene: "apology",
  text: "I understand the impact this had on your team. I'm sorry.",
  words: ["I","un·der·stand","the","im·pact","this","had","on","your","team","I'm","sor·ry"],
  stress: [0,1,0,1,0,1,0,0,1,1,1],
  ipa: "aɪ ˌʌndərˈstænd ðə ˈɪmpækt ðɪs hæd ɒn jɔːr tiːm aɪm ˈsɒri",
  meaning: "Acknowledge harm caused and apologize sincerely",
  cn: "我理解这对你团队造成的影响。我很抱歉。",
  trap: "'impact' /ˈɪmpækt/ 名词重音在 IM-，动词也是一样",
  tip: "'understand the impact' 先共情再道歉，顺序很重要",
  pattern: "I understand the impact this had on ___. I'm sorry.",
  variants: [
    "I realize how much this affected your timeline. I apologize.",
    "I understand this caused a lot of extra work. I'm truly sorry."
  ]
};

const s130 = {
  id: 130,
  cat: "conflict",
  scene: "boundary-setting",
  text: "I appreciate the urgency, but I need to push back on the timeline.",
  words: ["I","ap·pre·ci·ate","the","ur·gen·cy","but","I","need","to","push","back","on","the","time·line"],
  stress: [0,1,0,1,0,0,1,0,1,1,0,0,1],
  ipa: "aɪ əˈpriːʃieɪt ðə ˈɜːrdʒənsi bʌt aɪ niːd tə pʊʃ bæk ɒn ðə ˈtaɪmlaɪn",
  meaning: "Set a boundary while showing respect",
  cn: "我理解紧迫性，但我需要对时间线提出异议。",
  trap: "'appreciate' /əˈpriːʃieɪt/ 重音在 -PRE-，四音节",
  tip: "'appreciate' 先肯定，'but' 转折坚定，'push back' 重读",
  pattern: "I appreciate the ___, but I need to push back on ___",
  variants: [
    "I understand the time pressure, but I need to push back here.",
    "I appreciate the deadline, but this timeline isn't realistic."
  ]
};

const s131 = {
  id: 131,
  cat: "conflict",
  scene: "boundary-setting",
  text: "That's outside the scope of what we agreed on.",
  words: ["That's","out·side","the","scope","of","what","we","a·greed","on"],
  stress: [1,1,0,1,0,0,0,1,0],
  ipa: "ðæts ˌaʊtˈsaɪd ðə skoʊp əv wɒt wi əˈɡriːd ɒn",
  meaning: "Enforce agreed-upon boundaries",
  cn: "那超出了我们约定的范围。",
  trap: "'outside' /ˌaʊtˈsaɪd/ 重音在 -SIDE，注意双元音",
  tip: "'scope' 技术关键词清晰发音，'agreed on' 引用共识",
  pattern: "That's outside the scope of what we ___",
  variants: [
    "That's beyond what we originally scoped out.",
    "That falls outside the boundaries of our agreement."
  ]
};

const s132 = {
  id: 132,
  cat: "conflict",
  scene: "boundary-setting",
  text: "I'm happy to help, but I'll need something in return.",
  words: ["I'm","hap·py","to","help","but","I'll","need","some·thing","in","re·turn"],
  stress: [1,1,0,1,0,1,1,1,0,1],
  ipa: "aɪm ˈhæpi tə hɛlp bʌt aɪl niːd ˈsʌmθɪŋ ɪn rɪˈtɜːrn",
  meaning: "Set expectations for reciprocity",
  cn: "我很乐意帮忙，但我也需要一些回报。",
  trap: "'return' /rɪˈtɜːrn/ 重音在 -TURN，注意 /ɜːr/ 元音",
  tip: "'happy to help' 友好开头，'in return' 明确但不对抗",
  pattern: "I'm happy to ___, but I'll need ___ in return",
  variants: [
    "I'm glad to take this on, but I'll need a timeline extension.",
    "I'm willing to help, but I'll need additional resources."
  ]
};

const s133 = {
  id: 133,
  cat: "conflict",
  scene: "compromise",
  text: "What if we meet in the middle on the delivery date?",
  words: ["What","if","we","meet","in","the","mid·dle","on","the","de·liv·er·y","date"],
  stress: [1,0,0,1,0,0,1,0,0,1,1],
  ipa: "wɒt ɪf wi miːt ɪn ðə ˈmɪdəl ɒn ðə dɪˈlɪvəri deɪt",
  meaning: "Propose a compromise on deadlines",
  cn: "如果我们在交付日期上各退一步怎么样？",
  trap: "'delivery' /dɪˈlɪvəri/ 重音在 -LIV-，四音节",
  tip: "'meet in the middle' 是固定搭配，暗示双方都让步",
  pattern: "What if we meet in the middle on ___?",
  variants: [
    "What if we split the difference on the timeline?",
    "What if we compromise on the scope instead?"
  ]
};

const s134 = {
  id: 134,
  cat: "conflict",
  scene: "compromise",
  text: "I can agree to that if we adjust the scope accordingly.",
  words: ["I","can","a·gree","to","that","if","we","ad·just","the","scope","ac·cord·ing·ly"],
  stress: [0,0,1,0,1,0,0,1,0,1,1],
  ipa: "aɪ kæn əˈɡriː tə ðæt ɪf wi əˈdʒʌst ðə skoʊp əˈkɔːrdɪŋli",
  meaning: "Accept with conditions attached",
  cn: "如果我们相应调整范围的话，我可以同意。",
  trap: "'accordingly' /əˈkɔːrdɪŋli/ 重音在 -CORD-，四音节",
  tip: "'agree' 肯定在先，'if' 条件清楚，'accordingly' 保持平衡",
  pattern: "I can agree to that if we adjust ___",
  variants: [
    "I can accept that if we reduce the feature set.",
    "I'm fine with that if we extend the testing phase."
  ]
};

const s135 = {
  id: 135,
  cat: "conflict",
  scene: "compromise",
  text: "Neither option is perfect, but this gets us moving forward.",
  words: ["Nei·ther","op·tion","is","per·fect","but","this","gets","us","mov·ing","for·ward"],
  stress: [1,1,0,1,0,1,1,0,1,1],
  ipa: "ˈniːðər ˈɒpʃən ɪz ˈpɜːrfɪkt bʌt ðɪs ɡɛts ʌs ˈmuːvɪŋ ˈfɔːrwərd",
  meaning: "Accept an imperfect compromise pragmatically",
  cn: "两个选项都不完美，但这个能让我们继续推进。",
  trap: "'neither' /ˈniːðər/ 美式，注意 /iː/ 长元音",
  tip: "'perfect' 承认不足，'moving forward' 积极导向",
  pattern: "Neither ___ is perfect, but this gets us ___",
  variants: [
    "It's not ideal, but this compromise keeps us on track.",
    "Neither solution is perfect, but this is the pragmatic choice."
  ]
};

const s136 = {
  id: 136,
  cat: "conflict",
  scene: "active-listening",
  text: "If I'm hearing you correctly, your main concern is quality.",
  words: ["If","I'm","hear·ing","you","cor·rect·ly","your","main","con·cern","is","qual·i·ty"],
  stress: [0,1,1,0,1,0,1,1,0,1],
  ipa: "ɪf aɪm ˈhɪrɪŋ juː kəˈrɛktli jɔːr meɪn kənˈsɜːrn ɪz ˈkwɒlɪti",
  meaning: "Mirror back what someone said to confirm understanding",
  cn: "如果我没听错的话，你最主要的顾虑是质量。",
  trap: "'correctly' /kəˈrɛktli/ 重音在 -RECT-，三音节",
  tip: "'If I'm hearing you correctly' 经典回镜句式，'quality' 落在关键词",
  pattern: "If I'm hearing you correctly, your main concern is ___",
  variants: [
    "So if I understand correctly, your biggest worry is the timeline.",
    "Let me make sure I'm hearing you right — the core issue is cost."
  ]
};

const s137 = {
  id: 137,
  cat: "conflict",
  scene: "active-listening",
  text: "Help me understand what's driving this frustration.",
  words: ["Help","me","un·der·stand","what's","driv·ing","this","frus·tra·tion"],
  stress: [1,0,1,1,1,0,1],
  ipa: "hɛlp mi ˌʌndərˈstænd wɒts ˈdraɪvɪŋ ðɪs frʌˈstreɪʃən",
  meaning: "Dig deeper into the root of someone's frustration",
  cn: "帮我理解是什么导致了这种挫败感。",
  trap: "'frustration' /frʌˈstreɪʃən/ 重音在 -STRA-，三音节",
  tip: "'Help me understand' 谦虚姿态，不是质问而是请教",
  pattern: "Help me understand what's driving this ___",
  variants: [
    "Help me understand where this concern is coming from.",
    "Can you help me understand what's behind this frustration?"
  ]
};

const s138 = {
  id: 138,
  cat: "conflict",
  scene: "active-listening",
  text: "I want to make sure I'm not missing anything. Can you say more?",
  words: ["I","want","to","make","sure","I'm","not","miss·ing","an·y·thing","Can","you","say","more"],
  stress: [0,1,0,1,1,1,1,1,1,1,0,1,1],
  ipa: "aɪ wɒnt tə meɪk ʃʊr aɪm nɒt ˈmɪsɪŋ ˈɛniθɪŋ kæn juː seɪ mɔːr",
  meaning: "Invite someone to share more details",
  cn: "我想确保我没有遗漏什么。你能多说一些吗？",
  trap: "'anything' /ˈɛniθɪŋ/ 注意 /θ/ 咬舌音",
  tip: "'make sure' 连读，'Can you say more?' 真诚开放的邀请",
  pattern: "I want to make sure I'm not missing ___. Can you ___?",
  variants: [
    "I don't want to miss anything. Can you elaborate?",
    "I want to fully understand. Can you walk me through that again?"
  ]
};

const s139 = {
  id: 139,
  cat: "conflict",
  scene: "reframing-conflict",
  text: "Instead of seeing this as a problem, how about an opportunity?",
  words: ["In·stead","of","see·ing","this","as","a","prob·lem","how","a·bout","an","op·por·tu·ni·ty"],
  stress: [1,0,1,0,0,0,1,1,1,0,1],
  ipa: "ɪnˈstɛd əv ˈsiːɪŋ ðɪs æz ə ˈprɒbləm haʊ əˈbaʊt ən ˌɒpərˈtjuːnɪti",
  meaning: "Reframe a negative situation positively",
  cn: "与其把这看作问题，不如当作一个机会？",
  trap: "'opportunity' /ˌɒpərˈtjuːnɪti/ 重音在 -TU-，五音节",
  tip: "'problem' 轻带过，'opportunity' 上扬重读，引导转变",
  pattern: "Instead of seeing this as ___, how about ___?",
  variants: [
    "What if we reframe this challenge as a learning moment?",
    "Instead of a setback, could this be a chance to improve?"
  ]
};

const s140 = {
  id: 140,
  cat: "conflict",
  scene: "reframing-conflict",
  text: "The disagreement actually highlighted a gap in our process.",
  words: ["The","dis·a·gree·ment","ac·tu·al·ly","high·light·ed","a","gap","in","our","pro·cess"],
  stress: [0,1,1,1,0,1,0,0,1],
  ipa: "ðə ˌdɪsəˈɡriːmənt ˈæktʃuəli ˈhaɪlaɪtɪd ə ɡæp ɪn aʊər ˈprɒsɛs",
  meaning: "Extract value from a disagreement",
  cn: "这次分歧实际上暴露了我们流程中的一个漏洞。",
  trap: "'disagreement' /ˌdɪsəˈɡriːmənt/ 重音在 -GREE-，四音节",
  tip: "'actually' 转折积极，'gap in our process' 把冲突转化为改进",
  pattern: "The disagreement actually highlighted ___",
  variants: [
    "This conflict actually revealed an important blind spot.",
    "The debate actually surfaced a critical issue we'd missed."
  ]
};

const s141 = {
  id: 141,
  cat: "conflict",
  scene: "reframing-conflict",
  text: "We're not on opposite sides. We just have different approaches.",
  words: ["We're","not","on","op·po·site","sides","We","just","have","dif·fer·ent","ap·proach·es"],
  stress: [1,1,0,1,1,0,1,0,1,1],
  ipa: "wɪr nɒt ɒn ˈɒpəzɪt saɪdz wi dʒʌst hæv ˈdɪfərənt əˈproʊtʃɪz",
  meaning: "Reduce adversarial framing in conflict",
  cn: "我们不是对立的。我们只是方法不同。",
  trap: "'opposite' /ˈɒpəzɪt/ 重音在 OP-，三音节",
  tip: "'not' 重读否定对立，'different approaches' 温和替代",
  pattern: "We're not on opposite sides. We just have different ___",
  variants: [
    "We're on the same team. We just see it from different angles.",
    "We're not in opposition. We just have different priorities."
  ]
};

const s142 = {
  id: 142,
  cat: "conflict",
  scene: "team-tension",
  text: "I've noticed some tension in the team. Can we talk about it?",
  words: ["I've","no·ticed","some","ten·sion","in","the","team","Can","we","talk","a·bout","it"],
  stress: [1,1,0,1,0,0,1,1,0,1,1,0],
  ipa: "aɪv ˈnoʊtɪst sʌm ˈtɛnʃən ɪn ðə tiːm kæn wi tɔːk əˈbaʊt ɪt",
  meaning: "Address team tension proactively",
  cn: "我注意到团队里有些紧张气氛。我们能谈谈吗？",
  trap: "'tension' /ˈtɛnʃən/ 两音节，注意 /ʃ/ 音",
  tip: "'I've noticed' 观察而非指责，问句语调开放不强迫",
  pattern: "I've noticed some ___ in the team. Can we ___?",
  variants: [
    "I sense there's some friction on the team. Can we address it?",
    "I've picked up on some tension lately. Can we discuss it?"
  ]
};

const s143 = {
  id: 143,
  cat: "conflict",
  scene: "team-tension",
  text: "Everyone's input is valued here, even when we disagree.",
  words: ["Ev·ery·one's","in·put","is","val·ued","here","e·ven","when","we","dis·a·gree"],
  stress: [1,1,0,1,1,1,0,0,1],
  ipa: "ˈɛvriˌwʌnz ˈɪnpʊt ɪz ˈvæljuːd hɪr ˈiːvən wɛn wi ˌdɪsəˈɡriː",
  meaning: "Reinforce psychological safety in the team",
  cn: "每个人的意见在这里都很重要，即使我们意见不一。",
  trap: "'valued' /ˈvæljuːd/ 两音节，/juː/ 要清晰",
  tip: "'Everyone's input' 包容性开头，'even when' 转折表示无条件尊重",
  pattern: "Everyone's ___ is valued here, even when we ___",
  variants: [
    "Every perspective matters here, even when we don't see eye to eye.",
    "All voices are welcome here, even in disagreement."
  ]
};

const s144 = {
  id: 144,
  cat: "conflict",
  scene: "team-tension",
  text: "Let's address this directly instead of letting it fester.",
  words: ["Let's","ad·dress","this","di·rect·ly","in·stead","of","let·ting","it","fes·ter"],
  stress: [1,1,0,1,1,0,1,0,1],
  ipa: "lɛts əˈdrɛs ðɪs dəˈrɛktli ɪnˈstɛd əv ˈlɛtɪŋ ɪt ˈfɛstər",
  meaning: "Advocate for direct confrontation over avoidance",
  cn: "让我们直接面对这个问题，而不是让它继续恶化。",
  trap: "'fester' /ˈfɛstər/ 两音节，意为'恶化、溃烂'",
  tip: "'directly' 强调正面应对，'fester' 用词有力制造紧迫感",
  pattern: "Let's address this ___ instead of letting it ___",
  variants: [
    "Let's deal with this head-on instead of avoiding it.",
    "Let's tackle this now instead of letting it grow."
  ]
};

const s145 = {
  id: 145,
  cat: "conflict",
  scene: "client-complaint",
  text: "I completely understand your frustration, and I'm here to help.",
  words: ["I","com·plete·ly","un·der·stand","your","frus·tra·tion","and","I'm","here","to","help"],
  stress: [0,1,1,0,1,0,1,1,0,1],
  ipa: "aɪ kəmˈpliːtli ˌʌndərˈstænd jɔːr frʌˈstreɪʃən ænd aɪm hɪr tə hɛlp",
  meaning: "Validate a client's complaint empathetically",
  cn: "我完全理解你的沮丧，我在这里帮你解决。",
  trap: "'completely' /kəmˈpliːtli/ 重音在 -PLETE-，三音节",
  tip: "'completely understand' 全力共情，'here to help' 行动导向",
  pattern: "I completely understand your ___. I'm here to ___",
  variants: [
    "I totally understand your concern, and I want to make this right.",
    "I hear your frustration loud and clear. Let me help."
  ]
};

const s146 = {
  id: 146,
  cat: "conflict",
  scene: "client-complaint",
  text: "This shouldn't have happened, and we're taking immediate action.",
  words: ["This","shouldn't","have","hap·pened","and","we're","tak·ing","im·me·di·ate","ac·tion"],
  stress: [0,1,0,1,0,1,1,1,1],
  ipa: "ðɪs ˈʃʊdənt hæv ˈhæpənd ænd wɪr ˈteɪkɪŋ ɪˈmiːdiət ˈækʃən",
  meaning: "Acknowledge fault and promise swift action",
  cn: "这不应该发生，我们正在采取立即行动。",
  trap: "'immediate' /ɪˈmiːdiət/ 重音在 -ME-，四音节",
  tip: "'shouldn't have happened' 承认错误，'immediate action' 展示紧迫",
  pattern: "This shouldn't have happened, and we're taking ___ action",
  variants: [
    "This is unacceptable, and we're addressing it right now.",
    "This shouldn't have occurred, and we're acting on it immediately."
  ]
};

const s147 = {
  id: 147,
  cat: "conflict",
  scene: "client-complaint",
  text: "Here's what we're doing to make sure this doesn't happen again.",
  words: ["Here's","what","we're","do·ing","to","make","sure","this","doesn't","hap·pen","a·gain"],
  stress: [1,0,1,1,0,1,1,0,1,1,1],
  ipa: "hɪrz wɒt wɪr ˈduːɪŋ tə meɪk ʃʊr ðɪs ˈdʌzənt ˈhæpən əˈɡɛn",
  meaning: "Communicate corrective actions to a client",
  cn: "以下是我们为防止此事再次发生所做的措施。",
  trap: "'doesn't' /ˈdʌzənt/ 注意 /ʌ/ 元音，不是 /oʊ/",
  tip: "'Here's what' 主动出击，'make sure' 给客户信心",
  pattern: "Here's what we're doing to make sure ___ doesn't ___",
  variants: [
    "Let me tell you the steps we're taking to prevent this going forward.",
    "Here's our plan to ensure this never happens again."
  ]
};

const s148 = {
  id: 148,
  cat: "conflict",
  scene: "resolution-summary",
  text: "Let me summarize what we've agreed on to make sure we're aligned.",
  words: ["Let","me","sum·ma·rize","what","we've","a·greed","on","to","make","sure","we're","a·ligned"],
  stress: [0,0,1,0,1,1,0,0,1,1,1,1],
  ipa: "lɛt mi ˈsʌməraɪz wɒt wiːv əˈɡriːd ɒn tə meɪk ʃʊr wɪr əˈlaɪnd",
  meaning: "Confirm mutual agreement after conflict resolution",
  cn: "让我总结一下我们达成的共识，确保大家一致。",
  trap: "'summarize' /ˈsʌməraɪz/ 重音在 SUM-，三音节",
  tip: "'agreed on' 强调共识，'aligned' 表示双方一致很重要",
  pattern: "Let me summarize what we've agreed on to make sure ___",
  variants: [
    "Let me recap what we've decided to make sure we're on the same page.",
    "Let me run through the agreements to confirm alignment."
  ]
};

const s149 = {
  id: 149,
  cat: "conflict",
  scene: "resolution-summary",
  text: "I'm glad we worked through this. The outcome is much stronger.",
  words: ["I'm","glad","we","worked","through","this","The","out·come","is","much","strong·er"],
  stress: [1,1,0,1,0,1,0,1,0,1,1],
  ipa: "aɪm ɡlæd wi wɜːrkt θruː ðɪs ðə ˈaʊtkʌm ɪz mʌtʃ ˈstrɒŋɡər",
  meaning: "Express gratitude for constructive conflict resolution",
  cn: "我很高兴我们一起解决了这个问题。结果要好得多。",
  trap: "'worked through' /wɜːrkt θruː/ 连读，注意 /θ/ 咬舌",
  tip: "'glad' 真诚感谢，'much stronger' 肯定冲突带来的成长",
  pattern: "I'm glad we worked through this. The ___ is much ___",
  variants: [
    "I'm glad we talked this out. The plan is much better now.",
    "I'm happy we resolved this. The solution is much stronger."
  ]
};

const s150 = {
  id: 150,
  cat: "conflict",
  scene: "resolution-summary",
  text: "Let's check in next week to make sure this is still working.",
  words: ["Let's","check","in","next","week","to","make","sure","this","is","still","work·ing"],
  stress: [1,1,1,1,1,0,1,1,0,0,1,1],
  ipa: "lɛts tʃɛk ɪn nɛkst wiːk tə meɪk ʃʊr ðɪs ɪz stɪl ˈwɜːrkɪŋ",
  meaning: "Schedule a follow-up after resolution",
  cn: "我们下周再确认一下，确保这个方案还有效。",
  trap: "'check in' 短语动词，/tʃɛk ɪn/ 连读自然",
  tip: "'next week' 给出具体时间，'still working' 表持续关注",
  pattern: "Let's check in ___ to make sure ___",
  variants: [
    "Let's revisit this in a week to make sure it's holding up.",
    "Let's touch base next Friday to see how things are going."
  ]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY5 = [
  s121, s122, s123, s124, s125, s126, s127, s128, s129, s130,
  s131, s132, s133, s134, s135, s136, s137, s138, s139, s140,
  s141, s142, s143, s144, s145, s146, s147, s148, s149, s150
];

export const SCENES_DAY5 = {
  121: { icon: "🕊️", colors: ["#3B82F6", "#1D4ED8"], title: "Cool Down", sub: "De-escalating tension" },
  122: { icon: "⏸️", colors: ["#6366F1", "#4F46E5"], title: "Take a Break", sub: "Cooling-off period" },
  123: { icon: "🤝", colors: ["#059669", "#047857"], title: "Common Ground", sub: "Finding shared goals" },
  124: { icon: "⚖️", colors: ["#7C3AED", "#5B21B6"], title: "Fair Hearing", sub: "Listening to both sides" },
  125: { icon: "🔍", colors: ["#0891B2", "#0E7490"], title: "Clear It Up", sub: "Resolving misunderstandings" },
  126: { icon: "💬", colors: ["#8B5CF6", "#7C3AED"], title: "Your View", sub: "Inviting perspectives" },
  127: { icon: "🙏", colors: ["#E11D48", "#BE123C"], title: "Owning Up", sub: "Sincere apology" },
  128: { icon: "✋", colors: ["#DC2626", "#B91C1C"], title: "My Mistake", sub: "Taking responsibility" },
  129: { icon: "💔", colors: ["#F43F5E", "#E11D48"], title: "Feel the Impact", sub: "Acknowledging harm" },
  130: { icon: "🚧", colors: ["#F59E0B", "#D97706"], title: "Push Back", sub: "Respectful boundary" },
  131: { icon: "📏", colors: ["#EA580C", "#C2410C"], title: "Out of Scope", sub: "Enforcing agreements" },
  132: { icon: "🔄", colors: ["#D97706", "#B45309"], title: "Give & Take", sub: "Setting reciprocity" },
  133: { icon: "🤲", colors: ["#10B981", "#059669"], title: "Meet Halfway", sub: "Finding middle ground" },
  134: { icon: "📝", colors: ["#14B8A6", "#0D9488"], title: "Conditional Yes", sub: "Agreeing with terms" },
  135: { icon: "➡️", colors: ["#2563EB", "#1E40AF"], title: "Move Forward", sub: "Pragmatic compromise" },
  136: { icon: "👂", colors: ["#A855F7", "#9333EA"], title: "Mirror Back", sub: "Confirming understanding" },
  137: { icon: "🔎", colors: ["#6D28D9", "#5B21B6"], title: "Dig Deeper", sub: "Understanding root cause" },
  138: { icon: "💭", colors: ["#7C3AED", "#6D28D9"], title: "Say More", sub: "Inviting details" },
  139: { icon: "🌈", colors: ["#F97316", "#EA580C"], title: "Flip the Frame", sub: "Problem to opportunity" },
  140: { icon: "💡", colors: ["#EAB308", "#CA8A04"], title: "Silver Lining", sub: "Value from disagreement" },
  141: { icon: "🧩", colors: ["#3B82F6", "#2563EB"], title: "Same Team", sub: "Reducing adversarial framing" },
  142: { icon: "🌡️", colors: ["#EF4444", "#DC2626"], title: "Name It", sub: "Addressing team tension" },
  143: { icon: "🛡️", colors: ["#059669", "#047857"], title: "Safe Space", sub: "Psychological safety" },
  144: { icon: "⚡", colors: ["#DC2626", "#991B1B"], title: "Face It Now", sub: "Direct confrontation" },
  145: { icon: "🫂", colors: ["#6366F1", "#4F46E5"], title: "I Hear You", sub: "Client empathy" },
  146: { icon: "🚨", colors: ["#E11D48", "#BE123C"], title: "Swift Action", sub: "Owning the failure" },
  147: { icon: "🔧", colors: ["#0891B2", "#0E7490"], title: "Fix & Prevent", sub: "Corrective actions" },
  148: { icon: "📋", colors: ["#8B5CF6", "#6D28D9"], title: "Recap", sub: "Confirming alignment" },
  149: { icon: "🌟", colors: ["#10B981", "#047857"], title: "Stronger Now", sub: "Growth from conflict" },
  150: { icon: "📅", colors: ["#F59E0B", "#D97706"], title: "Follow Up", sub: "Ensuring lasting resolution" }
};
