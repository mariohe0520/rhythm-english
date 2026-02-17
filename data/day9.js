// ─── Day 9 · Cross-Cultural Communication ─────────────────────────
// 30 sentences (id 241-270)

const s241 = {
  id: 241,
  cat: "cross-cultural",
  scene: "greeting-customs",
  text: "In Japan, the depth of your bow signals the level of respect.",
  words: ["In","Ja·pan","the","depth","of","your","bow","sig·nals","the","lev·el","of","re·spect"],
  stress: [0,1,0,1,0,0,1,1,0,1,0,1],
  ipa: "ɪn dʒəˈpæn ðə dɛpθ əv jɔːr baʊ ˈsɪɡnəlz ðə ˈlɛvəl əv rɪˈspɛkt",
  meaning: "Explain Japanese greeting protocol to a global team",
  cn: "在日本，鞠躬的深度代表尊重的程度。",
  trap: "'bow' (鞠躬) /baʊ/ 不要读成 /boʊ/ (蝴蝶结)",
  tip: "'depth' 和 'respect' 首尾呼应——节奏感像一句教导",
  pattern: "In ___, the ___ signals the level of ___",
  variants: [
    "In Japanese business culture, a bow replaces a handshake.",
    "The way you greet someone in Japan communicates volumes."
  ]
};

const s242 = {
  id: 242,
  cat: "cross-cultural",
  scene: "greeting-customs",
  text: "A firm handshake and direct eye contact are expected in the West.",
  words: ["A","firm","hand·shake","and","di·rect","eye","con·tact","are","ex·pect·ed","in","the","West"],
  stress: [0,1,1,0,1,1,1,0,1,0,0,1],
  ipa: "ə fɜːrm ˈhændʃeɪk ænd dəˈrɛkt aɪ ˈkɒntækt ɑːr ɪkˈspɛktɪd ɪn ðə wɛst",
  meaning: "Describe Western greeting norms for cross-cultural prep",
  cn: "在西方，有力的握手和直接的眼神接触是预期的。",
  trap: "'handshake' /ˈhændʃeɪk/ 复合词重音在 HAND-",
  tip: "'firm' 和 'direct' 都是短促有力的形容词——语气要配合",
  pattern: "A firm ___ and direct ___ are expected in ___",
  variants: [
    "In American business culture, a strong handshake matters.",
    "Western professionals expect direct eye contact during introductions."
  ]
};

const s243 = {
  id: 243,
  cat: "cross-cultural",
  scene: "greeting-customs",
  text: "I always let the local team guide me on the appropriate greeting.",
  words: ["I","al·ways","let","the","lo·cal","team","guide","me","on","the","ap·pro·pri·ate","greet·ing"],
  stress: [0,1,1,0,1,1,1,0,0,0,1,1],
  ipa: "aɪ ˈɔːlweɪz lɛt ðə ˈloʊkəl tiːm ɡaɪd mi ɒn ðə əˈproʊpriət ˈɡriːtɪŋ",
  meaning: "Show cultural humility by deferring to local expertise",
  cn: "我总是让当地团队指导我用什么样的问候方式。",
  trap: "'appropriate' /əˈproʊpriət/ 重音在 -PRO-，四音节",
  tip: "'let the local team guide me' 体现文化谦逊——高管必备态度",
  pattern: "I always let ___ guide me on ___",
  variants: [
    "When in doubt, follow the lead of your local colleagues.",
    "I defer to our regional partners on cultural protocol."
  ]
};

const s244 = {
  id: 244,
  cat: "cross-cultural",
  scene: "meeting-etiquette",
  text: "In some cultures, silence in a meeting signals thoughtful consideration, not disagreement.",
  words: ["In","some","cul·tures","si·lence","in","a","meet·ing","sig·nals","thought·ful","con·sid·er·a·tion","not","dis·a·gree·ment"],
  stress: [0,0,1,1,0,0,1,1,1,1,1,1],
  ipa: "ɪn sʌm ˈkʌltʃərz ˈsaɪləns ɪn ə ˈmiːtɪŋ ˈsɪɡnəlz ˈθɔːtfəl kənˌsɪdəˈreɪʃən nɒt ˌdɪsəˈɡriːmənt",
  meaning: "Reframe silence as a positive cultural norm",
  cn: "在一些文化中，会议中的沉默表示深思熟虑，而非反对。",
  trap: "'consideration' /kənˌsɪdəˈreɪʃən/ 重音在 -RA-，五音节",
  tip: "'silence' 停顿一下——让听众体验那份安静，增强说服力",
  pattern: "In some cultures, ___ signals ___, not ___",
  variants: [
    "Don't mistake quiet for disagreement — it often means they're processing.",
    "Silence can be a sign of deep respect in East Asian meetings."
  ]
};

const s245 = {
  id: 245,
  cat: "cross-cultural",
  scene: "meeting-etiquette",
  text: "We should allocate extra time for consensus-building in this region.",
  words: ["We","should","al·lo·cate","ex·tra","time","for","con·sen·sus-build·ing","in","this","re·gion"],
  stress: [0,0,1,1,1,0,1,0,0,1],
  ipa: "wi ʃʊd ˈæləkeɪt ˈɛkstrə taɪm fɔːr kənˈsɛnsəs ˈbɪldɪŋ ɪn ðɪs ˈriːdʒən",
  meaning: "Adapt meeting structure for cultures that value consensus",
  cn: "在这个地区，我们应该预留更多时间用于达成共识。",
  trap: "'consensus' /kənˈsɛnsəs/ 重音在 -SEN-，三音节",
  tip: "'allocate extra time' 是实用建议——不要只讲文化差异，要给解决方案",
  pattern: "We should allocate extra time for ___",
  variants: [
    "Decision-making here is collaborative — budget more time.",
    "Expect the approval process to involve more stakeholders."
  ]
};

const s246 = {
  id: 246,
  cat: "cross-cultural",
  scene: "meeting-etiquette",
  text: "I'd recommend we have a pre-meeting to align before the formal session.",
  words: ["I'd","rec·om·mend","we","have","a","pre-meet·ing","to","a·lign","be·fore","the","for·mal","ses·sion"],
  stress: [1,1,0,0,0,1,0,1,1,0,1,1],
  ipa: "aɪd ˌrɛkəˈmɛnd wi hæv ə ˌpriːˈmiːtɪŋ tə əˈlaɪn bɪˈfɔːr ðə ˈfɔːrməl ˈsɛʃən",
  meaning: "Suggest a nemawashi-style pre-alignment meeting",
  cn: "我建议我们在正式会议前先开个预备会议统一立场。",
  trap: "'recommend' /ˌrɛkəˈmɛnd/ 重音在 -MEND；'session' /ˈsɛʃən/ 重音在 SES-",
  tip: "'pre-meeting' 是一个词——对应日本的「根回し」概念",
  pattern: "I'd recommend we have a ___ to ___ before ___",
  variants: [
    "Let's sync internally before walking into the room.",
    "A quick alignment call before the main meeting would help."
  ]
};

const s247 = {
  id: 247,
  cat: "cross-cultural",
  scene: "gift-giving",
  text: "In many Asian cultures, gifts are presented and received with both hands.",
  words: ["In","man·y","A·sian","cul·tures","gifts","are","pre·sent·ed","and","re·ceived","with","both","hands"],
  stress: [0,1,1,1,1,0,1,0,1,0,1,1],
  ipa: "ɪn ˈmɛni ˈeɪʒən ˈkʌltʃərz ɡɪfts ɑːr prɪˈzɛntɪd ænd rɪˈsiːvd wɪð boʊθ hændz",
  meaning: "Teach a critical gift-giving protocol",
  cn: "在许多亚洲文化中，礼物要用双手递出和接受。",
  trap: "'presented' /prɪˈzɛntɪd/ (动词) 重音在 -SENT-，不是 'present' (名词) /ˈprɛzənt/",
  tip: "'both hands' 最后两个重读词干脆利落——强调动作要点",
  pattern: "In many ___ cultures, ___ are ___ with ___",
  variants: [
    "Always use two hands when giving or receiving a business card in Asia.",
    "The gesture of using both hands shows deep respect in East Asian cultures."
  ]
};

const s248 = {
  id: 248,
  cat: "cross-cultural",
  scene: "gift-giving",
  text: "We brought a small gift from our headquarters — it's a tradition in our company.",
  words: ["We","brought","a","small","gift","from","our","head·quar·ters","it's","a","tra·di·tion","in","our","com·pa·ny"],
  stress: [0,1,0,1,1,0,0,1,1,0,1,0,0,1],
  ipa: "wi brɔːt ə smɔːl ɡɪft frɒm aʊər ˌhɛdˈkwɔːrtərz ɪts ə trəˈdɪʃən ɪn aʊər ˈkʌmpəni",
  meaning: "Present a gift gracefully in a business context",
  cn: "我们从总部带了一份小礼物——这是我们公司的传统。",
  trap: "'headquarters' /ˌhɛdˈkwɔːrtərz/ 重音在 -QUAR-",
  tip: "'small gift' 要谦虚——即使礼物很贵重，说 'small' 是礼仪",
  pattern: "We brought a small ___ from ___ — it's a tradition ___",
  variants: [
    "This is a small token of appreciation from our team.",
    "We wanted to share something from our home office as a gesture of goodwill."
  ]
};

const s249 = {
  id: 249,
  cat: "cross-cultural",
  scene: "gift-giving",
  text: "I'd avoid anything in sets of four — it's considered unlucky in this culture.",
  words: ["I'd","a·void","an·y·thing","in","sets","of","four","it's","con·sid·ered","un·luck·y","in","this","cul·ture"],
  stress: [1,1,1,0,1,0,1,1,1,1,0,0,1],
  ipa: "aɪd əˈvɔɪd ˈɛniθɪŋ ɪn sɛts əv fɔːr ɪts kənˈsɪdərd ʌnˈlʌki ɪn ðɪs ˈkʌltʃər",
  meaning: "Share a cultural taboo to prevent gift-giving mistakes",
  cn: "我建议避免四件一套的东西——在这个文化中被认为不吉利。",
  trap: "'avoid' /əˈvɔɪd/ 重音在 -VOID",
  tip: "'four' 和 'unlucky' 重读——关键信息不能含糊",
  pattern: "I'd avoid ___ — it's considered ___ in this culture",
  variants: [
    "Be careful with the number four in Chinese and Japanese contexts.",
    "Some colors and numbers carry negative connotations — check first."
  ]
};

const s250 = {
  id: 250,
  cat: "cross-cultural",
  scene: "dining-business",
  text: "The real negotiation happens at dinner, not in the boardroom.",
  words: ["The","real","ne·go·ti·a·tion","hap·pens","at","din·ner","not","in","the","board·room"],
  stress: [0,1,1,1,0,1,1,0,0,1],
  ipa: "ðə riːl nɪˌɡoʊʃiˈeɪʃən ˈhæpənz æt ˈdɪnər nɒt ɪn ðə ˈbɔːrdruːm",
  meaning: "Recognize that business relationships are built over meals",
  cn: "真正的谈判发生在饭桌上，而不是在会议室里。",
  trap: "'negotiation' /nɪˌɡoʊʃiˈeɪʃən/ 五音节，重音在 -A-",
  tip: "'dinner' vs 'boardroom' 对比——经验之谈的语气",
  pattern: "The real ___ happens at ___, not in ___",
  variants: [
    "In many Asian markets, dinner is where deals actually close.",
    "Don't skip the dinner invitation — that's where trust is built."
  ]
};

const s251 = {
  id: 251,
  cat: "cross-cultural",
  scene: "dining-business",
  text: "Let the host order — it's a sign of respect and you'll discover amazing dishes.",
  words: ["Let","the","host","or·der","it's","a","sign","of","re·spect","and","you'll","dis·cov·er","a·maz·ing","dish·es"],
  stress: [1,0,1,1,1,0,1,0,1,0,1,1,1,1],
  ipa: "lɛt ðə hoʊst ˈɔːrdər ɪts ə saɪn əv rɪˈspɛkt ænd juːl dɪsˈkʌvər əˈmeɪzɪŋ ˈdɪʃɪz",
  meaning: "Advise on dining etiquette when hosted in another culture",
  cn: "让主人点菜——这是一种尊重，你还会发现美味佳肴。",
  trap: "'discover' /dɪsˈkʌvər/ 重音在 -COV-，三音节",
  tip: "'Let the host order' 开头指令式，后半句加入人情味",
  pattern: "Let the host ___ — it's a sign of ___",
  variants: [
    "When dining abroad, follow the host's lead on ordering.",
    "Letting your host choose the dishes shows cultural awareness."
  ]
};

const s252 = {
  id: 252,
  cat: "cross-cultural",
  scene: "dining-business",
  text: "In the Middle East, never use your left hand when passing food or drinks.",
  words: ["In","the","Mid·dle","East","nev·er","use","your","left","hand","when","pass·ing","food","or","drinks"],
  stress: [0,0,1,1,1,1,0,1,1,0,1,1,0,1],
  ipa: "ɪn ðə ˈmɪdəl iːst ˈnɛvər juːz jɔːr lɛft hænd wɛn ˈpɑːsɪŋ fuːd ɔːr drɪŋks",
  meaning: "Share a critical dining taboo for Middle Eastern business",
  cn: "在中东，传递食物或饮料时绝不要用左手。",
  trap: "'Middle East' 两个词都重读，/ˈmɪdəl iːst/",
  tip: "'never' 加重——这是严格的文化规范",
  pattern: "In ___, never ___ when ___",
  variants: [
    "The left hand is considered unclean in many Middle Eastern cultures.",
    "Always use your right hand when eating or passing items."
  ]
};

const s253 = {
  id: 253,
  cat: "cross-cultural",
  scene: "translation-challenge",
  text: "That idiom doesn't translate directly — let me rephrase it for clarity.",
  words: ["That","id·i·om","doesn't","trans·late","di·rect·ly","let","me","re·phrase","it","for","clar·i·ty"],
  stress: [0,1,1,1,1,0,0,1,0,0,1],
  ipa: "ðæt ˈɪdiəm ˈdʌzənt trænsˈleɪt dəˈrɛktli lɛt mi riːˈfreɪz ɪt fɔːr ˈklærɪti",
  meaning: "Navigate a language barrier by simplifying",
  cn: "那个成语无法直译——让我换个说法以便理解。",
  trap: "'idiom' /ˈɪdiəm/ 三音节，重音在 ID-；'rephrase' /riːˈfreɪz/ 重音在 -PHRASE",
  tip: "'let me rephrase' 是高情商的过渡语——不责怪任何人",
  pattern: "That ___ doesn't translate directly — let me ___",
  variants: [
    "The metaphor might not land — let me put it another way.",
    "That expression is very American — let me simplify."
  ]
};

const s254 = {
  id: 254,
  cat: "cross-cultural",
  scene: "translation-challenge",
  text: "Can we slow down? I want to make sure nothing gets lost in translation.",
  words: ["Can","we","slow","down","I","want","to","make","sure","noth·ing","gets","lost","in","trans·la·tion"],
  stress: [0,0,1,1,0,1,0,1,1,1,0,1,0,1],
  ipa: "kæn wi sloʊ daʊn aɪ wɒnt tə meɪk ʃʊr ˈnʌθɪŋ ɡɛts lɒst ɪn trænsˈleɪʃən",
  meaning: "Request a slower pace for cross-language understanding",
  cn: "我们能慢一点吗？我想确保不会有信息在翻译中丢失。",
  trap: "'translation' /trænsˈleɪʃən/ 重音在 -LA-，三音节",
  tip: "'lost in translation' 经典表达——Sofia Coppola 让它家喻户晓",
  pattern: "Can we ___? I want to make sure nothing ___",
  variants: [
    "Let's pace ourselves — we're working across three languages here.",
    "I'd rather go slow and get it right than rush through."
  ]
};

const s255 = {
  id: 255,
  cat: "cross-cultural",
  scene: "translation-challenge",
  text: "I'll use simpler language — my English tends to be very idiomatic.",
  words: ["I'll","use","sim·pler","lan·guage","my","Eng·lish","tends","to","be","ver·y","id·i·o·mat·ic"],
  stress: [1,1,1,1,0,1,1,0,0,1,1],
  ipa: "aɪl juːz ˈsɪmplər ˈlæŋɡwɪdʒ maɪ ˈɪŋɡlɪʃ tɛndz tə bi ˈvɛri ˌɪdiəˈmætɪk",
  meaning: "Self-aware adjustment for international audiences",
  cn: "我会用更简单的语言——我的英语倾向于很多习语。",
  trap: "'idiomatic' /ˌɪdiəˈmætɪk/ 重音在 -MAT-，五音节",
  tip: "承认自己的语言习惯需要调整——展示文化敏感度",
  pattern: "I'll use simpler ___ — my ___ tends to be ___",
  variants: [
    "Let me dial back the slang — I know it can be confusing.",
    "I'll keep my language plain so the message comes through."
  ]
};

const s256 = {
  id: 256,
  cat: "cross-cultural",
  scene: "cultural-faux-pas",
  text: "I didn't realize that was considered offensive — I sincerely apologize.",
  words: ["I","didn't","re·al·ize","that","was","con·sid·ered","of·fen·sive","I","sin·cere·ly","a·pol·o·gize"],
  stress: [0,1,1,0,0,1,1,0,1,1],
  ipa: "aɪ ˈdɪdənt ˈriːəlaɪz ðæt wɒz kənˈsɪdərd əˈfɛnsɪv aɪ sɪnˈsɪrli əˈpɒlədʒaɪz",
  meaning: "Apologize sincerely for an unintentional cultural mistake",
  cn: "我没有意识到那被认为是冒犯的——我真诚地道歉。",
  trap: "'apologize' /əˈpɒlədʒaɪz/ 重音在 -POL-，四音节",
  tip: "'sincerely' 要说得慢而真诚——不要匆匆带过",
  pattern: "I didn't realize ___ — I sincerely ___",
  variants: [
    "That was not my intention at all — I'm truly sorry.",
    "I apologize for the misunderstanding — please help me learn."
  ]
};

const s257 = {
  id: 257,
  cat: "cross-cultural",
  scene: "cultural-faux-pas",
  text: "It's a learning moment — the key is to acknowledge it and move forward.",
  words: ["It's","a","learn·ing","mo·ment","the","key","is","to","ac·knowl·edge","it","and","move","for·ward"],
  stress: [1,0,1,1,0,1,0,0,1,0,0,1,1],
  ipa: "ɪts ə ˈlɜːrnɪŋ ˈmoʊmənt ðə kiː ɪz tə ækˈnɒlɪdʒ ɪt ænd muːv ˈfɔːrwərd",
  meaning: "Reframe a cultural mistake as a growth opportunity",
  cn: "这是一个学习的时刻——关键是承认错误然后继续前进。",
  trap: "'acknowledge' /ækˈnɒlɪdʒ/ 重音在 -KNOW-，三音节",
  tip: "'learning moment' 比 'mistake' 更积极——教练式语言",
  pattern: "It's a learning moment — the key is to ___ and ___",
  variants: [
    "Everyone makes cultural missteps — what matters is how you respond.",
    "The best approach is to own the mistake and ask how to do it right."
  ]
};

const s258 = {
  id: 258,
  cat: "cross-cultural",
  scene: "cultural-faux-pas",
  text: "Could you help me understand what I should have done differently?",
  words: ["Could","you","help","me","un·der·stand","what","I","should","have","done","dif·fer·ent·ly"],
  stress: [0,0,1,0,1,0,0,1,0,1,1],
  ipa: "kʊd juː hɛlp mi ˌʌndərˈstænd wʌt aɪ ʃʊd hæv dʌn ˈdɪfərəntli",
  meaning: "Ask for guidance after a cultural misstep",
  cn: "你能帮我理解我应该怎么做才对吗？",
  trap: "'differently' /ˈdɪfərəntli/ 四音节，重音在 DIF-",
  tip: "用 'could you help me' 而不是 'tell me what I did wrong'——更谦逊",
  pattern: "Could you help me understand what I should have ___?",
  variants: [
    "I'd love your guidance on what the right approach would be.",
    "What's the proper way to handle this going forward?"
  ]
};

const s259 = {
  id: 259,
  cat: "cross-cultural",
  scene: "global-team",
  text: "Our team spans twelve time zones — asynchronous communication is not optional.",
  words: ["Our","team","spans","twelve","time","zones","a·syn·chro·nous","com·mu·ni·ca·tion","is","not","op·tion·al"],
  stress: [0,1,1,1,1,1,1,1,0,1,1],
  ipa: "aʊər tiːm spænz twɛlv taɪm zoʊnz eɪˈsɪŋkrənəs kəˌmjuːnɪˈkeɪʃən ɪz nɒt ˈɒpʃənəl",
  meaning: "Establish async as a mandatory working norm for global teams",
  cn: "我们的团队横跨12个时区——异步沟通不是可选项。",
  trap: "'asynchronous' /eɪˈsɪŋkrənəs/ 重音在 -SYN-，五音节",
  tip: "'not optional' 干脆有力——这是原则性声明",
  pattern: "Our team spans ___ — ___ is not optional",
  variants: [
    "With people in Tokyo, Berlin, and SF, async is how we operate.",
    "We can't rely on real-time meetings when the team is truly global."
  ]
};

const s260 = {
  id: 260,
  cat: "cross-cultural",
  scene: "global-team",
  text: "We celebrate Diwali, Lunar New Year, and Eid — because every culture matters here.",
  words: ["We","cel·e·brate","Di·wa·li","Lu·nar","New","Year","and","Eid","be·cause","ev·ery","cul·ture","mat·ters","here"],
  stress: [0,1,1,1,1,1,0,1,0,1,1,1,1],
  ipa: "wi ˈsɛləbreɪt dɪˈwɑːli ˈluːnər njuː jɪr ænd iːd bɪˈkɒz ˈɛvri ˈkʌltʃər ˈmætərz hɪr",
  meaning: "Show commitment to cultural inclusion in a global team",
  cn: "我们庆祝排灯节、农历新年和开斋节——因为每种文化在这里都重要。",
  trap: "'Diwali' /dɪˈwɑːli/ 重音在 -WA-；'Eid' /iːd/ 单音节",
  tip: "列举节日时每个都同等重读——体现真正的平等",
  pattern: "We celebrate ___, ___, and ___ — because every ___ matters",
  variants: [
    "Our holiday calendar recognizes celebrations from every region.",
    "Inclusion means honoring everyone's traditions, not just the majority's."
  ]
};

const s261 = {
  id: 261,
  cat: "cross-cultural",
  scene: "global-team",
  text: "I want to hear from our Singapore and Mumbai teams before we finalize this.",
  words: ["I","want","to","hear","from","our","Sin·ga·pore","and","Mum·bai","teams","be·fore","we","fi·nal·ize","this"],
  stress: [0,1,0,1,0,0,1,0,1,1,1,0,1,1],
  ipa: "aɪ wɒnt tə hɪr frɒm aʊər ˌsɪŋəˈpɔːr ænd mʊmˈbaɪ tiːmz bɪˈfɔːr wi ˈfaɪnəlaɪz ðɪs",
  meaning: "Ensure global voices are included in decision-making",
  cn: "在最终确定之前，我想听听新加坡和孟买团队的意见。",
  trap: "'Singapore' /ˌsɪŋəˈpɔːr/ 重音在 -PORE；'finalize' /ˈfaɪnəlaɪz/ 重音在 FI-",
  tip: "点名具体团队显示包容性——不要说 'the Asia team'",
  pattern: "I want to hear from ___ before we finalize ___",
  variants: [
    "Let's make sure our APAC colleagues have input before we decide.",
    "We can't close this without perspectives from the regional teams."
  ]
};

const s262 = {
  id: 262,
  cat: "cross-cultural",
  scene: "timezone-juggling",
  text: "Let's rotate the meeting time so the same team isn't always joining at midnight.",
  words: ["Let's","ro·tate","the","meet·ing","time","so","the","same","team","isn't","al·ways","join·ing","at","mid·night"],
  stress: [1,1,0,1,1,0,0,1,1,1,1,1,0,1],
  ipa: "lɛts roʊˈteɪt ðə ˈmiːtɪŋ taɪm soʊ ðə seɪm tiːm ˈɪzənt ˈɔːlweɪz ˈdʒɔɪnɪŋ æt ˈmɪdnaɪt",
  meaning: "Propose fair timezone rotation for global meetings",
  cn: "让我们轮换会议时间，这样同一个团队不用总是在午夜参加。",
  trap: "'rotate' /roʊˈteɪt/ 重音在 -TATE",
  tip: "'midnight' 最后重击——突出不合理的现状",
  pattern: "Let's rotate ___ so ___ isn't always ___",
  variants: [
    "No team should bear the burden of off-hours meetings every time.",
    "We alternate call times monthly to share the timezone pain."
  ]
};

const s263 = {
  id: 263,
  cat: "cross-cultural",
  scene: "timezone-juggling",
  text: "I'll record the session and post detailed notes for anyone who can't attend live.",
  words: ["I'll","re·cord","the","ses·sion","and","post","de·tailed","notes","for","an·y·one","who","can't","at·tend","live"],
  stress: [1,1,0,1,0,1,1,1,0,1,0,1,1,1],
  ipa: "aɪl rɪˈkɔːrd ðə ˈsɛʃən ænd poʊst dɪˈteɪld noʊts fɔːr ˈɛniwʌn huː kɑːnt əˈtɛnd laɪv",
  meaning: "Accommodate asynchronous participation in global meetings",
  cn: "我会录制会议并发布详细笔记，给无法实时参加的人。",
  trap: "'record' (动词) /rɪˈkɔːrd/ 重音在 -CORD，不是名词 /ˈrɛkərd/",
  tip: "'detailed notes' 强调——光录制不够，要有整理好的笔记",
  pattern: "I'll record ___ and post ___ for anyone who can't ___",
  variants: [
    "Everything will be documented and shared asynchronously.",
    "If the time doesn't work, catch the recording and drop comments async."
  ]
};

const s264 = {
  id: 264,
  cat: "cross-cultural",
  scene: "timezone-juggling",
  text: "What time zone works best for you? I'm flexible on my end.",
  words: ["What","time","zone","works","best","for","you","I'm","flex·i·ble","on","my","end"],
  stress: [1,1,1,1,1,0,1,1,1,0,0,1],
  ipa: "wʌt taɪm zoʊn wɜːrks bɛst fɔːr juː aɪm ˈflɛksəbəl ɒn maɪ ɛnd",
  meaning: "Show consideration for others' timezone constraints",
  cn: "什么时区对你最方便？我这边很灵活。",
  trap: "'flexible' /ˈflɛksəbəl/ 三音节，重音在 FLEX-",
  tip: "'I'm flexible on my end' 是高情商的让步表达",
  pattern: "What ___ works best for you? I'm flexible on my end",
  variants: [
    "I'll adjust to whatever time works for your team.",
    "Happy to take the early morning — I know it's late for you."
  ]
};

const s265 = {
  id: 265,
  cat: "cross-cultural",
  scene: "localization",
  text: "We can't just translate the product — we need to localize the entire experience.",
  words: ["We","can't","just","trans·late","the","prod·uct","we","need","to","lo·cal·ize","the","en·tire","ex·pe·ri·ence"],
  stress: [0,1,0,1,0,1,0,1,0,1,0,1,1],
  ipa: "wi kɑːnt dʒʌst trænsˈleɪt ðə ˈprɒdʌkt wi niːd tə ˈloʊkəlaɪz ðə ɪnˈtaɪər ɪkˈspɪriəns",
  meaning: "Distinguish between translation and true localization",
  cn: "我们不能只是翻译产品——我们需要本地化整个体验。",
  trap: "'localize' /ˈloʊkəlaɪz/ 三音节，重音在 LO-",
  tip: "'translate' vs 'localize' 对比——产品经理的关键认知",
  pattern: "We can't just ___ — we need to ___ the entire ___",
  variants: [
    "Localization goes beyond language — it's about context and culture.",
    "Translation is table stakes; real success requires deep localization."
  ]
};

const s266 = {
  id: 266,
  cat: "cross-cultural",
  scene: "localization",
  text: "The color red means luck in China but danger in Western markets.",
  words: ["The","col·or","red","means","luck","in","Chi·na","but","dan·ger","in","West·ern","mar·kets"],
  stress: [0,1,1,1,1,0,1,0,1,0,1,1],
  ipa: "ðə ˈkʌlər rɛd miːnz lʌk ɪn ˈtʃaɪnə bʌt ˈdeɪndʒər ɪn ˈwɛstərn ˈmɑːrkɪts",
  meaning: "Illustrate how color symbolism varies across cultures",
  cn: "红色在中国代表幸运，但在西方市场代表危险。",
  trap: "'danger' /ˈdeɪndʒər/ 重音在 DAN-，不要读成 /ˈdæŋɡər/",
  tip: "'luck' vs 'danger' 对比鲜明——同一颜色，两种含义",
  pattern: "The ___ means ___ in ___ but ___ in ___",
  variants: [
    "White signifies purity in the West but mourning in parts of Asia.",
    "Design choices that work in one market can fail in another."
  ]
};

const s267 = {
  id: 267,
  cat: "cross-cultural",
  scene: "localization",
  text: "Our German users expect a much more detailed privacy disclosure than our US users.",
  words: ["Our","Ger·man","us·ers","ex·pect","a","much","more","de·tailed","pri·va·cy","dis·clo·sure","than","our","US","us·ers"],
  stress: [0,1,1,1,0,1,1,1,1,1,0,0,1,1],
  ipa: "aʊər ˈdʒɜːrmən ˈjuːzərz ɪkˈspɛkt ə mʌtʃ mɔːr dɪˈteɪld ˈpraɪvəsi dɪsˈkloʊʒər ðæn aʊər juːˈɛs ˈjuːzərz",
  meaning: "Highlight regional differences in user expectations",
  cn: "我们的德国用户比美国用户期望更详细的隐私披露。",
  trap: "'disclosure' /dɪsˈkloʊʒər/ 重音在 -CLO-，三音节",
  tip: "'much more detailed' 三个连续强调词——语气坚定",
  pattern: "Our ___ users expect ___ than our ___ users",
  variants: [
    "European data privacy standards are far stricter than in the US.",
    "What's acceptable in one region may be non-compliant in another."
  ]
};

const s268 = {
  id: 268,
  cat: "cross-cultural",
  scene: "cultural-bridge",
  text: "My job is to be the bridge between headquarters and our local teams.",
  words: ["My","job","is","to","be","the","bridge","be·tween","head·quar·ters","and","our","lo·cal","teams"],
  stress: [0,1,0,0,0,0,1,1,1,0,0,1,1],
  ipa: "maɪ dʒɒb ɪz tə bi ðə brɪdʒ bɪˈtwiːn ˌhɛdˈkwɔːrtərz ænd aʊər ˈloʊkəl tiːmz",
  meaning: "Define the role of a cultural liaison",
  cn: "我的工作是成为总部和本地团队之间的桥梁。",
  trap: "'bridge' /brɪdʒ/ 注意 /dʒ/ 音——不是 /brɪtʃ/",
  tip: "'bridge' 是这句话的核心隐喻——给它足够的重读",
  pattern: "My job is to be the bridge between ___ and ___",
  variants: [
    "I see myself as the connector between global strategy and local execution.",
    "Someone needs to translate corporate vision into local context — that's my role."
  ]
};

const s269 = {
  id: 269,
  cat: "cross-cultural",
  scene: "cultural-bridge",
  text: "The best global leaders are the ones who listen before they lead.",
  words: ["The","best","glo·bal","lead·ers","are","the","ones","who","lis·ten","be·fore","they","lead"],
  stress: [0,1,1,1,0,0,1,0,1,1,0,1],
  ipa: "ðə bɛst ˈɡloʊbəl ˈliːdərz ɑːr ðə wʌnz huː ˈlɪsən bɪˈfɔːr ðeɪ liːd",
  meaning: "Define the mindset of effective cross-cultural leadership",
  cn: "最好的全球领导者是那些先倾听再领导的人。",
  trap: "'global' /ˈɡloʊbəl/ 两音节，重音在 GLO-",
  tip: "'listen before they lead' 头韵（L音）增加记忆度——Satya 风格",
  pattern: "The best ___ are the ones who ___ before they ___",
  variants: [
    "Great leaders don't assume — they ask and learn first.",
    "Cross-cultural leadership starts with humility and curiosity."
  ]
};

const s270 = {
  id: 270,
  cat: "cross-cultural",
  scene: "cultural-bridge",
  text: "Diversity isn't just a value — it's our competitive advantage.",
  words: ["Di·ver·si·ty","isn't","just","a","val·ue","it's","our","com·pet·i·tive","ad·van·tage"],
  stress: [1,1,0,0,1,1,0,1,1],
  ipa: "daɪˈvɜːrsɪti ˈɪzənt dʒʌst ə ˈvæljuː ɪts aʊər kəmˈpɛtɪtɪv ədˈvæntɪdʒ",
  meaning: "Frame diversity as a business strategy, not just a moral stance",
  cn: "多样性不只是一种价值观——它是我们的竞争优势。",
  trap: "'diversity' /daɪˈvɜːrsɪti/ 重音在 -VER-，四音节",
  tip: "'value' 到 'competitive advantage' 升级论点——Satya Nadella 经典论调",
  pattern: "___ isn't just ___ — it's our ___",
  variants: [
    "Diverse teams outperform homogeneous ones — the data is clear.",
    "Our global perspective is what gives us an edge."
  ]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY9 = [
  s241, s242, s243, s244, s245, s246, s247, s248, s249, s250,
  s251, s252, s253, s254, s255, s256, s257, s258, s259, s260,
  s261, s262, s263, s264, s265, s266, s267, s268, s269, s270
];

export const SCENES_DAY9 = {
  241: { icon: "🙇", colors: ["#DC2626", "#B91C1C"], title: "The Bow", sub: "Japanese greeting depth" },
  242: { icon: "🤝", colors: ["#2563EB", "#1D4ED8"], title: "Firm Grip", sub: "Western handshake norm" },
  243: { icon: "🧭", colors: ["#059669", "#047857"], title: "Local Guide", sub: "Cultural humility" },
  244: { icon: "🤫", colors: ["#7C3AED", "#6D28D9"], title: "Silence Speaks", sub: "Quiet ≠ disagreement" },
  245: { icon: "⏳", colors: ["#F59E0B", "#D97706"], title: "Build Consensus", sub: "Patience in process" },
  246: { icon: "📋", colors: ["#6366F1", "#4F46E5"], title: "Pre-Meeting", sub: "Nemawashi alignment" },
  247: { icon: "🎁", colors: ["#E11D48", "#BE123C"], title: "Both Hands", sub: "Gift protocol" },
  248: { icon: "🏢", colors: ["#8B5CF6", "#7C3AED"], title: "HQ Token", sub: "Graceful gift-giving" },
  249: { icon: "🔢", colors: ["#EF4444", "#DC2626"], title: "Number Taboo", sub: "Avoiding four" },
  250: { icon: "🍽️", colors: ["#D97706", "#B45309"], title: "Dinner Deal", sub: "Where trust is built" },
  251: { icon: "👨‍🍳", colors: ["#10B981", "#059669"], title: "Host Orders", sub: "Dining deference" },
  252: { icon: "🖐️", colors: ["#1F2937", "#111827"], title: "Right Hand", sub: "Middle East protocol" },
  253: { icon: "🔄", colors: ["#0891B2", "#0E7490"], title: "Rephrase It", sub: "Idiom translation" },
  254: { icon: "🐌", colors: ["#7C3AED", "#5B21B6"], title: "Slow Down", sub: "Cross-language pacing" },
  255: { icon: "💬", colors: ["#F97316", "#EA580C"], title: "Plain English", sub: "Simpler language" },
  256: { icon: "😔", colors: ["#DC2626", "#991B1B"], title: "Sincere Sorry", sub: "Cultural misstep" },
  257: { icon: "📚", colors: ["#6366F1", "#4F46E5"], title: "Learning Moment", sub: "Growth mindset" },
  258: { icon: "🙋", colors: ["#059669", "#047857"], title: "Teach Me", sub: "Asking for guidance" },
  259: { icon: "🌍", colors: ["#2563EB", "#1E40AF"], title: "12 Time Zones", sub: "Async is mandatory" },
  260: { icon: "🎊", colors: ["#A855F7", "#9333EA"], title: "Every Festival", sub: "Cultural inclusion" },
  261: { icon: "🗣️", colors: ["#EA580C", "#C2410C"], title: "All Voices", sub: "Global input" },
  262: { icon: "🔄", colors: ["#E11D48", "#BE123C"], title: "Rotate Times", sub: "Fair scheduling" },
  263: { icon: "🎥", colors: ["#14B8A6", "#0D9488"], title: "Record & Share", sub: "Async inclusion" },
  264: { icon: "🕐", colors: ["#8B5CF6", "#6D28D9"], title: "Your Time Zone", sub: "Flexible consideration" },
  265: { icon: "🌐", colors: ["#2563EB", "#1D4ED8"], title: "Localize, Don't Translate", sub: "Full experience" },
  266: { icon: "🎨", colors: ["#EF4444", "#B91C1C"], title: "Red = ?", sub: "Color symbolism" },
  267: { icon: "🔒", colors: ["#1F2937", "#111827"], title: "Privacy Gap", sub: "Regional expectations" },
  268: { icon: "🌉", colors: ["#0891B2", "#0E7490"], title: "The Bridge", sub: "Cultural liaison" },
  269: { icon: "👂", colors: ["#10B981", "#059669"], title: "Listen First", sub: "Global leadership" },
  270: { icon: "🌈", colors: ["#7C3AED", "#6D28D9"], title: "Diversity Edge", sub: "Competitive advantage" }
};
