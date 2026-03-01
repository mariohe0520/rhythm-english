// ─── Day 22 · IELTS Part 3 — Social Issues Discussion ───────────
// 30 sentences (id 631-660) · Band 7.5-8 · Hedging, complex structures

const s631 = {
  id: 631,
  cat: "Society",
  scene: "discussion",
  text: "That's a thought-provoking question — let me think about that for a moment.",
  words: ["That's","a","thought-provoking","question","let","me","think","about","that","for","a","moment"],
  stress: [0.3, 0.1, 1.0, 1.0, 0.3, 0.2, 1.0, 0.3, 0.2, 0.1, 0.1, 0.8],
  ipa: "/ðæts ə ˈθɔːtprəˌvəʊkɪŋ ˈkwestʃən let miː θɪŋk əˈbaʊt ðæt fər ə ˈməʊmənt/",
  meaning: "Part3 争取思考时间的高级方式——比 let me think 更自然",
  cn: "这个问题很有启发性——让我想一下。",
  trap: "This is a good question, I need to think.",
  tip: "THOUGHT-PROVOKING 三音节复合形容词重读，QUESTION 重音，THINK MOMENT 缓冲",
  pattern: "That's a + [adj] + question — let me think about that for a moment",
  variants: ["What a great question — give me a second to gather my thoughts.", "That's worth careful consideration.", "Hmm, that's a really complex issue — let me unpack that."]
};

const s632 = {
  id: 632,
  cat: "Society",
  scene: "discussion",
  text: "I would argue that education is the single most effective tool for reducing inequality.",
  words: ["I","would","argue","that","education","is","the","single","most","effective","tool","for","reducing","inequality"],
  stress: [0.2, 0.3, 1.0, 0.1, 1.0, 0.2, 0.1, 0.7, 0.5, 1.0, 1.0, 0.1, 0.7, 1.0],
  ipa: "/aɪ wʊd ˈɑːɡjuː ðət ˌedjʊˈkeɪʃən ɪz ðə ˈsɪŋɡl məʊst ɪˈfektɪv tuːl fə rɪˈdjuːsɪŋ ˌɪnɪˈkwɒlɪti/",
  meaning: "用 I would argue 引出论点——学术辩论标记",
  cn: "我认为教育是减少不平等最有效的单一工具。",
  trap: "I think school is the best way to make people more equal.",
  tip: "ARGUE 和 EDUCATION 观点起始双重音，EFFECTIVE TOOL 评价，REDUCING INEQUALITY 结论",
  pattern: "I would argue that + [noun] + is the single most + [adj] + tool for + [verb]ing + [noun]",
  variants: ["Education remains our strongest weapon against inequality.", "No single intervention does more for equality than education.", "If we're serious about inequality, education is where we start."]
};

const s633 = {
  id: 633,
  cat: "Society",
  scene: "discussion",
  text: "It's a nuanced issue — there are valid arguments on both sides.",
  words: ["It's","a","nuanced","issue","there","are","valid","arguments","on","both","sides"],
  stress: [0.2, 0.1, 1.0, 1.0, 0.3, 0.2, 1.0, 1.0, 0.2, 0.8, 1.0],
  ipa: "/ɪts ə ˈnjuːɑːnst ˈɪʃuː ðeər ɑː ˈvælɪd ˈɑːɡjʊmənts ɒn bəʊθ saɪdz/",
  meaning: "用 nuanced 和 valid arguments 展示学术思维——Band 8 词汇",
  cn: "这是一个有细微差别的问题——双方都有合理的论点。",
  trap: "It is complicated, both sides are correct.",
  tip: "NUANCED ISSUE 核心评价双重音，VALID ARGUMENTS 学术表达，BOTH SIDES 平衡立场",
  pattern: "It's a nuanced issue — there are valid arguments on both sides",
  variants: ["This isn't a black-and-white issue by any means.", "I can see merit in both perspectives.", "The truth, as always, lies somewhere in the middle."]
};

const s634 = {
  id: 634,
  cat: "Society",
  scene: "discussion",
  text: "To a certain extent, I agree, but I think we need to consider the wider implications.",
  words: ["To","a","certain","extent","I","agree","but","I","think","we","need","to","consider","the","wider","implications"],
  stress: [0.1, 0.1, 0.7, 1.0, 0.2, 0.8, 0.3, 0.2, 0.5, 0.2, 0.5, 0.1, 1.0, 0.1, 0.8, 1.0],
  ipa: "/tə ə ˈsɜːtn ɪkˈstent aɪ əˈɡriː bʌt aɪ θɪŋk wi niːd tə kənˈsɪdə ðə ˈwaɪdər ˌɪmplɪˈkeɪʃənz/",
  meaning: "用 to a certain extent 部分同意——展示 hedging 技巧",
  cn: "在某种程度上我同意，但我认为我们需要考虑更广泛的影响。",
  trap: "I agree a little, but we should think about more things.",
  tip: "TO A CERTAIN EXTENT 过渡限定，AGREE 起点，CONSIDER WIDER IMPLICATIONS 扩展思维",
  pattern: "To a certain extent, I agree, but I think we need to consider the + [adj] + [noun]",
  variants: ["I partially agree, though there's more to it than that.", "That's fair, but we mustn't overlook the broader consequences.", "I take your point, but the bigger picture is more complicated."]
};

const s635 = {
  id: 635,
  cat: "Society",
  scene: "discussion",
  text: "The root cause of this problem is far more systemic than most people realise.",
  words: ["The","root","cause","of","this","problem","is","far","more","systemic","than","most","people","realise"],
  stress: [0.1, 1.0, 1.0, 0.1, 0.3, 1.0, 0.2, 0.7, 0.5, 1.0, 0.3, 0.5, 0.5, 1.0],
  ipa: "/ðə ruːt kɔːz əv ðɪs ˈprɒbləm ɪz fɑː mɔː sɪˈstemɪk ðən məʊst ˈpiːpl ˈrɪəlaɪz/",
  meaning: "用 root cause 和 systemic——学术分析词汇",
  cn: "这个问题的根本原因比大多数人意识到的要系统性得多。",
  trap: "The real reason for this problem is bigger than people think.",
  tip: "ROOT CAUSE 双词核心概念，PROBLEM 话题词，SYSTEMIC 关键形容词重在 -STEM-",
  pattern: "The root cause of this problem is far more + [adj] + than most people realise",
  variants: ["This runs much deeper than surface-level fixes suggest.", "We're treating symptoms when the disease is structural.", "The underlying causes are deeply embedded in our systems."]
};

const s636 = {
  id: 636,
  cat: "Society",
  scene: "discussion",
  text: "There's a growing body of evidence to suggest that this approach simply doesn't work.",
  words: ["There's","a","growing","body","of","evidence","to","suggest","that","this","approach","simply","doesn't","work"],
  stress: [0.3, 0.1, 0.8, 1.0, 0.1, 1.0, 0.1, 0.7, 0.1, 0.3, 1.0, 0.7, 0.5, 1.0],
  ipa: "/ðeəz ə ˈɡrəʊɪŋ ˈbɒdi əv ˈevɪdəns tə səˈdʒest ðət ðɪs əˈprəʊtʃ ˈsɪmpli ˈdʌznt wɜːk/",
  meaning: "用 growing body of evidence 学术表达——Band 8 句式",
  cn: "越来越多的证据表明这种方法根本不管用。",
  trap: "More and more research shows this way doesn't work.",
  tip: "GROWING BODY EVIDENCE 三词学术搭配，SUGGEST 连接词，APPROACH SIMPLY DOESN'T WORK 结论",
  pattern: "There's a growing body of evidence to suggest that + [clause]",
  variants: ["Research increasingly points to the failure of this method.", "The data paints a clear picture — this isn't working.", "Study after study confirms that this approach falls short."]
};

const s637 = {
  id: 637,
  cat: "Society",
  scene: "discussion",
  text: "We tend to oversimplify issues that are inherently complex and multifaceted.",
  words: ["We","tend","to","oversimplify","issues","that","are","inherently","complex","and","multifaceted"],
  stress: [0.2, 0.5, 0.1, 1.0, 1.0, 0.1, 0.2, 0.8, 1.0, 0.1, 1.0],
  ipa: "/wi tend tə ˌəʊvəˈsɪmplɪfaɪ ˈɪʃuːz ðət ɑːr ɪnˈhɛrəntli ˈkɒmpleks ənd ˌmʌltiˈfæsɪtɪd/",
  meaning: "用 oversimplify、inherently、multifaceted 三个高级词汇",
  cn: "我们倾向于过度简化那些本质上复杂多面的问题。",
  trap: "People make complicated problems too simple.",
  tip: "OVERSIMPLIFY 五音节重在 -SIM-，ISSUES 话题词，INHERENTLY COMPLEX MULTIFACETED 三连重音",
  pattern: "We tend to oversimplify issues that are inherently + [adj] + and + [adj]",
  variants: ["Reality is messier than our soundbites suggest.", "Complex problems don't have simple answers.", "Reducing this to a simple narrative is doing it a disservice."]
};

const s638 = {
  id: 638,
  cat: "Society",
  scene: "discussion",
  text: "It could be argued that governments have a moral obligation to address climate change.",
  words: ["It","could","be","argued","that","governments","have","a","moral","obligation","to","address","climate","change"],
  stress: [0.2, 0.3, 0.2, 1.0, 0.1, 1.0, 0.3, 0.1, 0.8, 1.0, 0.1, 0.8, 1.0, 1.0],
  ipa: "/ɪt kʊd bi ˈɑːɡjuːd ðət ˈɡʌvənmənts hæv ə ˈmɒrəl ˌɒblɪˈɡeɪʃən tə əˈdres ˈklaɪmɪt tʃeɪndʒ/",
  meaning: "用 it could be argued 被动hedging——最高级学术表达",
  cn: "可以说政府有道义上的责任去应对气候变化。",
  trap: "Governments must fix the climate problem.",
  tip: "COULD BE ARGUED 被动hedging，GOVERNMENTS 主体，MORAL OBLIGATION 道德框架，CLIMATE CHANGE 话题",
  pattern: "It could be argued that + [noun] + have a moral obligation to + [verb] + [noun]",
  variants: ["There's a compelling case that governments must act on climate.", "The ethical responsibility falls squarely on policymakers.", "From a moral standpoint, inaction on climate is indefensible."]
};

const s639 = {
  id: 639,
  cat: "Society",
  scene: "discussion",
  text: "One of the unintended consequences of social media has been the erosion of privacy.",
  words: ["One","of","the","unintended","consequences","of","social","media","has","been","the","erosion","of","privacy"],
  stress: [0.5, 0.1, 0.1, 1.0, 1.0, 0.1, 0.8, 1.0, 0.2, 0.3, 0.1, 1.0, 0.1, 1.0],
  ipa: "/wʌn əv ðə ˌʌnɪnˈtendɪd ˈkɒnsɪkwənsɪz əv ˈsəʊʃəl ˈmiːdiə həz biːn ðə ɪˈrəʊʒən əv ˈprɪvəsi/",
  meaning: "用 unintended consequences 和 erosion——Band 8 学术词汇",
  cn: "社交媒体的一个意想不到的后果是隐私的侵蚀。",
  trap: "Social media made people lose their privacy without planning.",
  tip: "UNINTENDED CONSEQUENCES 学术双重音，SOCIAL MEDIA 话题词，EROSION PRIVACY 结果双重音",
  pattern: "One of the unintended consequences of + [noun] + has been the + [noun] + of + [noun]",
  variants: ["Privacy has been the collateral damage of the social media era.", "Nobody foresaw how dramatically social media would impact privacy.", "The privacy trade-off of social media is deeply troubling."]
};

const s640 = {
  id: 640,
  cat: "Society",
  scene: "discussion",
  text: "I'm inclined to think that the benefits outweigh the risks in this particular case.",
  words: ["I'm","inclined","to","think","that","the","benefits","outweigh","the","risks","in","this","particular","case"],
  stress: [0.2, 0.8, 0.1, 0.7, 0.1, 0.1, 1.0, 1.0, 0.1, 1.0, 0.2, 0.3, 0.7, 1.0],
  ipa: "/aɪm ɪnˈklaɪnd tə θɪŋk ðət ðə ˈbenɪfɪts ˌaʊtˈweɪ ðə rɪsks ɪn ðɪs pəˈtɪkjʊlə keɪs/",
  meaning: "用 I'm inclined to think hedging——比 I think 更谨慎",
  cn: "我倾向于认为在这个特定情况下好处大于风险。",
  trap: "I think the good things are more than the bad things here.",
  tip: "INCLINED 谨慎表态，BENEFITS OUTWEIGH RISKS 核心对比三重音，PARTICULAR CASE 限定范围",
  pattern: "I'm inclined to think that the benefits outweigh the risks in this + [adj] + case",
  variants: ["On balance, the advantages seem to edge out the disadvantages.", "The risk-reward ratio favours action, in my view.", "I lean towards the view that the positives prevail here."]
};

const s641 = {
  id: 641,
  cat: "Society",
  scene: "discussion",
  text: "There's a fundamental tension between economic growth and environmental sustainability.",
  words: ["There's","a","fundamental","tension","between","economic","growth","and","environmental","sustainability"],
  stress: [0.3, 0.1, 1.0, 1.0, 0.3, 1.0, 1.0, 0.1, 1.0, 1.0],
  ipa: "/ðeəz ə ˌfʌndəˈmentəl ˈtenʃən bɪˈtwiːn ˌiːkəˈnɒmɪk ɡrəʊθ ənd ɪnˌvaɪrənˈmentəl səˌsteɪnəˈbɪlɪti/",
  meaning: "用 fundamental tension 学术框架——展示分析思维",
  cn: "经济增长和环境可持续性之间存在根本的矛盾。",
  trap: "Making money and protecting nature are against each other.",
  tip: "FUNDAMENTAL TENSION 核心概念，ECONOMIC GROWTH 和 ENVIRONMENTAL SUSTAINABILITY 对比双组",
  pattern: "There's a fundamental tension between + [noun phrase] + and + [noun phrase]",
  variants: ["Growth and sustainability are often at odds.", "Balancing economic development with ecological protection is the defining challenge.", "We can't keep prioritising GDP at the expense of the planet."]
};

const s642 = {
  id: 642,
  cat: "Society",
  scene: "discussion",
  text: "With all due respect, I think that perspective overlooks some crucial factors.",
  words: ["With","all","due","respect","I","think","that","perspective","overlooks","some","crucial","factors"],
  stress: [0.2, 0.3, 0.5, 1.0, 0.2, 0.5, 0.2, 1.0, 1.0, 0.3, 1.0, 1.0],
  ipa: "/wɪð ɔːl djuː rɪˈspekt aɪ θɪŋk ðæt pəˈspektɪv ˌəʊvəˈlʊks sʌm ˈkruːʃəl ˈfæktəz/",
  meaning: "用 with all due respect 礼貌反驳——高级辩论技巧",
  cn: "恕我直言，我觉得那个观点忽略了一些关键因素。",
  trap: "Sorry but I think that idea is missing important things.",
  tip: "WITH ALL DUE RESPECT 礼貌缓冲，PERSPECTIVE OVERLOOKS 反驳核心，CRUCIAL FACTORS 支撑",
  pattern: "With all due respect, I think that perspective overlooks some + [adj] + [noun]",
  variants: ["I hear you, but I think there are blind spots in that view.", "That argument doesn't hold up when you factor in the data.", "Respectfully, I believe that analysis is incomplete."]
};

const s643 = {
  id: 643,
  cat: "Society",
  scene: "discussion",
  text: "The correlation between poverty and crime is well documented, but correlation isn't causation.",
  words: ["The","correlation","between","poverty","and","crime","is","well","documented","but","correlation","isn't","causation"],
  stress: [0.1, 1.0, 0.3, 1.0, 0.1, 1.0, 0.2, 0.5, 1.0, 0.3, 1.0, 0.5, 1.0],
  ipa: "/ðə ˌkɒrəˈleɪʃən bɪˈtwiːn ˈpɒvəti ənd kraɪm ɪz wel ˈdɒkjʊmentɪd bʌt ˌkɒrəˈleɪʃən ˈɪznt kɔːˈzeɪʃən/",
  meaning: "用 correlation isn't causation——展示逻辑分析能力",
  cn: "贫困和犯罪之间的相关性有大量记录，但相关不等于因果。",
  trap: "Poor people do more crime, but being poor doesn't make you criminal.",
  tip: "CORRELATION POVERTY CRIME 三词链，DOCUMENTED 论据词，CORRELATION CAUSATION 逻辑对比",
  pattern: "The correlation between + [noun] + and + [noun] + is well documented, but correlation isn't causation",
  variants: ["The link exists, but it's far more complex than a direct cause.", "We must be careful not to confuse association with cause.", "Just because two things co-occur doesn't mean one causes the other."]
};

const s644 = {
  id: 644,
  cat: "Society",
  scene: "discussion",
  text: "From a sociological standpoint, urbanisation has fundamentally altered community structures.",
  words: ["From","a","sociological","standpoint","urbanisation","has","fundamentally","altered","community","structures"],
  stress: [0.2, 0.1, 1.0, 1.0, 1.0, 0.2, 0.8, 1.0, 1.0, 1.0],
  ipa: "/frəm ə ˌsəʊsiəˈlɒdʒɪkəl ˈstændpɔɪnt ˌɜːbənaɪˈzeɪʃən həz ˌfʌndəˈmentəli ˈɔːltəd kəˈmjuːnɪti ˈstrʌktʃəz/",
  meaning: "用 from a standpoint 学术框架——展示学科视角",
  cn: "从社会学角度来看，城市化从根本上改变了社区结构。",
  trap: "Moving to cities changed how people live together.",
  tip: "SOCIOLOGICAL STANDPOINT 学科框架，URBANISATION 话题词，FUNDAMENTALLY ALTERED 程度强调",
  pattern: "From a + [adj] + standpoint, + [noun] + has fundamentally + [verb] + [noun]",
  variants: ["Urbanisation has reshaped the fabric of communities.", "The shift to cities has transformed how we relate to each other.", "Community bonds have been irreversibly changed by urban migration."]
};

const s645 = {
  id: 645,
  cat: "Society",
  scene: "discussion",
  text: "I think we're in danger of creating a two-tier society if this trend continues.",
  words: ["I","think","we're","in","danger","of","creating","a","two-tier","society","if","this","trend","continues"],
  stress: [0.2, 0.5, 0.2, 0.2, 1.0, 0.1, 0.8, 0.1, 1.0, 1.0, 0.2, 0.3, 1.0, 1.0],
  ipa: "/aɪ θɪŋk wɪər ɪn ˈdeɪndʒər əv kriˈeɪtɪŋ ə ˌtuːˈtɪə səˈsaɪəti ɪf ðɪs trend kənˈtɪnjuːz/",
  meaning: "用 in danger of 和 two-tier society 警告式表达",
  cn: "我觉得如果这个趋势继续下去，我们有创造一个双层社会的危险。",
  trap: "If we don't change, there will be two types of people: rich and poor.",
  tip: "DANGER 警告词，CREATING 动作重音，TWO-TIER SOCIETY 核心概念，TREND CONTINUES 条件",
  pattern: "I think we're in danger of creating a + [adj] + [noun] + if this trend continues",
  variants: ["We risk dividing society into haves and have-nots.", "The gap between rich and poor is becoming a chasm.", "If this trajectory holds, social division will only deepen."]
};

const s646 = {
  id: 646,
  cat: "Society",
  scene: "discussion",
  text: "Having said that, I do recognise that there are no easy solutions to this problem.",
  words: ["Having","said","that","I","do","recognise","that","there","are","no","easy","solutions","to","this","problem"],
  stress: [0.5, 0.5, 0.3, 0.2, 0.5, 1.0, 0.1, 0.2, 0.2, 0.5, 1.0, 1.0, 0.1, 0.3, 1.0],
  ipa: "/ˈhævɪŋ sed ðæt aɪ duː ˈrekəɡnaɪz ðət ðeər ɑː nəʊ ˈiːzi səˈluːʃənz tə ðɪs ˈprɒbləm/",
  meaning: "用 having said that 承认复杂性——展示平衡观点",
  cn: "话虽如此，我确实认识到这个问题没有简单的解决方案。",
  trap: "But I know this problem is hard to fix.",
  tip: "HAVING SAID THAT 转折标记，RECOGNISE 承认重音，EASY SOLUTIONS 和 PROBLEM 双组重音",
  pattern: "Having said that, I do recognise that there are no easy solutions to this + [noun]",
  variants: ["That said, I'm under no illusions about how hard this is.", "I'm not naive enough to think there's a quick fix.", "The reality is far messier than any neat solution suggests."]
};

const s647 = {
  id: 647,
  cat: "Society",
  scene: "discussion",
  text: "What concerns me is the increasing polarisation of political discourse.",
  words: ["What","concerns","me","is","the","increasing","polarisation","of","political","discourse"],
  stress: [0.3, 1.0, 0.3, 0.2, 0.1, 0.8, 1.0, 0.1, 1.0, 1.0],
  ipa: "/wɒt kənˈsɜːnz miː ɪz ðə ɪnˈkriːsɪŋ ˌpəʊləraɪˈzeɪʃən əv pəˈlɪtɪkəl ˈdɪskɔːs/",
  meaning: "用 what concerns me 引出忧虑——学术化个人观点",
  cn: "让我担忧的是政治话语越来越两极化。",
  trap: "I am worried that political talking is becoming more divided.",
  tip: "CONCERNS 情感动词重读，INCREASING POLARISATION 学术核心词，POLITICAL DISCOURSE 话题词",
  pattern: "What concerns me is the increasing + [noun] + of + [adj] + [noun]",
  variants: ["The growing divide in political opinion is deeply worrying.", "Political debate has become dangerously polarised.", "We're losing the ability to have nuanced political conversations."]
};

const s648 = {
  id: 648,
  cat: "Society",
  scene: "discussion",
  text: "It's worth noting that this phenomenon is not unique to any one country.",
  words: ["It's","worth","noting","that","this","phenomenon","is","not","unique","to","any","one","country"],
  stress: [0.2, 0.5, 1.0, 0.1, 0.3, 1.0, 0.2, 0.5, 1.0, 0.1, 0.5, 0.5, 1.0],
  ipa: "/ɪts wɜːθ ˈnəʊtɪŋ ðət ðɪs fɪˈnɒmɪnən ɪz nɒt juːˈniːk tə ˈeni wʌn ˈkʌntri/",
  meaning: "用 it's worth noting 和 phenomenon——学术补充信息",
  cn: "值得注意的是，这种现象不是任何一个国家独有的。",
  trap: "We should know this happens in all countries, not only one.",
  tip: "WORTH NOTING 提示重要信息，PHENOMENON 四音节重在 -NOM-，UNIQUE 和 COUNTRY 对比",
  pattern: "It's worth noting that this + [noun] + is not unique to any one + [noun]",
  variants: ["This is a global trend, not a local one.", "Every country is grappling with this in some form.", "The universality of this issue is often overlooked."]
};

const s649 = {
  id: 649,
  cat: "Society",
  scene: "discussion",
  text: "Personally, I'm sceptical of any policy that doesn't take into account human behaviour.",
  words: ["Personally","I'm","sceptical","of","any","policy","that","doesn't","take","into","account","human","behaviour"],
  stress: [0.7, 0.2, 1.0, 0.1, 0.5, 1.0, 0.1, 0.5, 0.5, 0.3, 0.8, 1.0, 1.0],
  ipa: "/ˈpɜːsənəli aɪm ˈskeptɪkəl əv ˈeni ˈpɒlɪsi ðət ˈdʌznt teɪk ˈɪntə əˈkaʊnt ˈhjuːmən bɪˈheɪvjə/",
  meaning: "用 sceptical of 和 take into account——高级批判表达",
  cn: "就我个人而言，我对任何不考虑人类行为的政策都持怀疑态度。",
  trap: "I don't trust any plan that ignores how people act.",
  tip: "SCEPTICAL 态度词，POLICY 话题词，TAKE INTO ACCOUNT 固定搭配，HUMAN BEHAVIOUR 核心概念",
  pattern: "Personally, I'm sceptical of any + [noun] + that doesn't take into account + [noun]",
  variants: ["Policies that ignore human nature are doomed to fail.", "Any solution that doesn't factor in behaviour is unrealistic.", "You can't legislate without understanding psychology."]
};

const s650 = {
  id: 650,
  cat: "Society",
  scene: "discussion",
  text: "The question is not whether change will happen, but how we manage the transition.",
  words: ["The","question","is","not","whether","change","will","happen","but","how","we","manage","the","transition"],
  stress: [0.1, 1.0, 0.2, 0.5, 0.5, 1.0, 0.3, 1.0, 0.3, 0.7, 0.2, 1.0, 0.1, 1.0],
  ipa: "/ðə ˈkwestʃən ɪz nɒt ˈweðə tʃeɪndʒ wɪl ˈhæpən bʌt haʊ wi ˈmænɪdʒ ðə trænˈzɪʃən/",
  meaning: "用 the question is not...but 高级对比结构——逻辑清晰",
  cn: "问题不在于变化是否会发生，而在于我们如何管理这个过渡。",
  trap: "Change will come, the important thing is how we deal with it.",
  tip: "QUESTION 开头框架，NOT WHETHER CHANGE HAPPEN 否定部分，HOW MANAGE TRANSITION 正面论点",
  pattern: "The question is not whether + [noun] + will happen, but how we + [verb] + the + [noun]",
  variants: ["Change is inevitable — it's the management that matters.", "The debate shouldn't be about if, but about how.", "Our focus should be on shaping the transition, not resisting it."]
};

const s651 = {
  id: 651,
  cat: "Society",
  scene: "discussion",
  text: "I think there's a compelling case for investing more heavily in renewable energy.",
  words: ["I","think","there's","a","compelling","case","for","investing","more","heavily","in","renewable","energy"],
  stress: [0.2, 0.5, 0.3, 0.1, 1.0, 1.0, 0.1, 1.0, 0.5, 0.7, 0.2, 1.0, 1.0],
  ipa: "/aɪ θɪŋk ðeəz ə kəmˈpelɪŋ keɪs fər ɪnˈvestɪŋ mɔː ˈhevɪli ɪn rɪˈnjuːəbl ˈenədʒi/",
  meaning: "用 compelling case 学术表达支持论点",
  cn: "我认为有充分的理由更大力度地投资可再生能源。",
  trap: "I think we should spend more money on clean energy.",
  tip: "COMPELLING CASE 学术搭配，INVESTING 动作重音，RENEWABLE ENERGY 话题双重音",
  pattern: "I think there's a compelling case for + [verb]ing + more + [adv] + in + [noun]",
  variants: ["The argument for renewable investment is overwhelming.", "Doubling down on renewables is both economically and morally sound.", "Clean energy investment isn't just ethical — it's smart economics."]
};

const s652 = {
  id: 652,
  cat: "Society",
  scene: "discussion",
  text: "One potential drawback that's often overlooked is the impact on small businesses.",
  words: ["One","potential","drawback","that's","often","overlooked","is","the","impact","on","small","businesses"],
  stress: [0.5, 0.8, 1.0, 0.2, 0.5, 1.0, 0.2, 0.1, 1.0, 0.2, 0.8, 1.0],
  ipa: "/wʌn pəˈtenʃəl ˈdrɔːbæk ðəts ˈɒfən ˌəʊvəˈlʊkt ɪz ðə ˈɪmpækt ɒn smɔːl ˈbɪznɪsɪz/",
  meaning: "用 potential drawback 和 overlooked——展示全面分析",
  cn: "一个经常被忽视的潜在缺点是对小企业的影响。",
  trap: "People forget that small shops will be hurt by this.",
  tip: "POTENTIAL DRAWBACK 学术负面评价，OVERLOOKED 被忽视重读，IMPACT SMALL BUSINESSES 结论",
  pattern: "One potential drawback that's often overlooked is the impact on + [noun]",
  variants: ["Small businesses often bear the brunt of such policies.", "We can't ignore how this affects the little guy.", "The knock-on effects for small enterprises are rarely considered."]
};

const s653 = {
  id: 653,
  cat: "Society",
  scene: "discussion",
  text: "I'd go so far as to say that this is one of the defining challenges of our generation.",
  words: ["I'd","go","so","far","as","to","say","that","this","is","one","of","the","defining","challenges","of","our","generation"],
  stress: [0.3, 0.5, 0.3, 0.7, 0.1, 0.1, 0.7, 0.1, 0.2, 0.2, 0.7, 0.1, 0.1, 1.0, 1.0, 0.1, 0.2, 1.0],
  ipa: "/aɪd ɡəʊ səʊ fɑːr əz tə seɪ ðət ðɪs ɪz wʌn əv ðə dɪˈfaɪnɪŋ ˈtʃælɪndʒɪz əv ˈaʊə ˌdʒenəˈreɪʃən/",
  meaning: "用 I'd go so far as to say 加强观点——大胆但有分寸",
  cn: "我甚至想说这是我们这代人面临的标志性挑战之一。",
  trap: "I think this is the biggest problem for people today.",
  tip: "GO SO FAR AS TO SAY 加强表达结构，DEFINING CHALLENGES 核心评价，GENERATION 结尾",
  pattern: "I'd go so far as to say that this is one of the defining + [noun] + of our generation",
  variants: ["This is, without exaggeration, a generational challenge.", "History will judge us by how we handle this.", "If there's one issue that defines our era, it's this."]
};

const s654 = {
  id: 654,
  cat: "Society",
  scene: "discussion",
  text: "Research consistently shows that diverse teams outperform homogeneous ones.",
  words: ["Research","consistently","shows","that","diverse","teams","outperform","homogeneous","ones"],
  stress: [1.0, 0.7, 0.7, 0.1, 1.0, 1.0, 1.0, 1.0, 0.5],
  ipa: "/rɪˈsɜːtʃ kənˈsɪstəntli ʃəʊz ðət daɪˈvɜːs tiːmz ˌaʊtpəˈfɔːm ˌhɒməˈdʒiːniəs wʌnz/",
  meaning: "用数据支持论点——research shows 学术引证",
  cn: "研究一致表明多元化的团队表现优于同质化的团队。",
  trap: "Studies prove that different people working together do better.",
  tip: "RESEARCH CONSISTENTLY SHOWS 学术引证三连，DIVERSE TEAMS OUTPERFORM HOMOGENEOUS 对比",
  pattern: "Research consistently shows that + [adj] + [noun] + outperform + [adj] + ones",
  variants: ["The data on diversity is clear — it drives better outcomes.", "Diverse teams consistently produce superior results.", "Homogeneity is not just unfair, it's also less productive."]
};

const s655 = {
  id: 655,
  cat: "Society",
  scene: "discussion",
  text: "We need to strike a delicate balance between individual freedom and collective responsibility.",
  words: ["We","need","to","strike","a","delicate","balance","between","individual","freedom","and","collective","responsibility"],
  stress: [0.2, 0.5, 0.1, 1.0, 0.1, 0.8, 1.0, 0.3, 1.0, 1.0, 0.1, 1.0, 1.0],
  ipa: "/wi niːd tə straɪk ə ˈdelɪkɪt ˈbæləns bɪˈtwiːn ˌɪndɪˈvɪdʒuəl ˈfriːdəm ənd kəˈlektɪv rɪˌspɒnsɪˈbɪlɪti/",
  meaning: "用 strike a delicate balance 和对比结构——高级辩论句型",
  cn: "我们需要在个人自由和集体责任之间找到微妙的平衡。",
  trap: "We must find the middle point between personal rights and group duty.",
  tip: "STRIKE DELICATE BALANCE 三词搭配，INDIVIDUAL FREEDOM 和 COLLECTIVE RESPONSIBILITY 对称对比",
  pattern: "We need to strike a delicate balance between + [noun phrase] + and + [noun phrase]",
  variants: ["Personal liberty and social duty must coexist.", "Freedom without responsibility is chaos; responsibility without freedom is tyranny.", "The sweet spot between freedom and obligation is hard to find."]
};

const s656 = {
  id: 656,
  cat: "Society",
  scene: "discussion",
  text: "While I see the logic in that argument, I think it fails to account for cultural context.",
  words: ["While","I","see","the","logic","in","that","argument","I","think","it","fails","to","account","for","cultural","context"],
  stress: [0.3, 0.2, 0.5, 0.1, 1.0, 0.2, 0.2, 1.0, 0.2, 0.5, 0.2, 1.0, 0.1, 0.7, 0.1, 1.0, 1.0],
  ipa: "/waɪl aɪ siː ðə ˈlɒdʒɪk ɪn ðæt ˈɑːɡjʊmənt aɪ θɪŋk ɪt feɪlz tə əˈkaʊnt fə ˈkʌltʃərəl ˈkɒntekst/",
  meaning: "用 while I see the logic 礼貌反驳——高级让步结构",
  cn: "虽然我理解那个论点的逻辑，但我认为它没有考虑到文化背景。",
  trap: "I understand the idea but it doesn't think about culture.",
  tip: "WHILE 让步开头，LOGIC ARGUMENT 承认部分，FAILS 转折动词，CULTURAL CONTEXT 反驳核心",
  pattern: "While I see the logic in that argument, I think it fails to account for + [noun]",
  variants: ["The reasoning is sound in theory, but context matters.", "That works in principle but ignores cultural nuance.", "Logically it holds up, but culturally it falls apart."]
};

const s657 = {
  id: 657,
  cat: "Society",
  scene: "discussion",
  text: "The elephant in the room is that our current economic model is simply not sustainable.",
  words: ["The","elephant","in","the","room","is","that","our","current","economic","model","is","simply","not","sustainable"],
  stress: [0.1, 1.0, 0.2, 0.1, 1.0, 0.2, 0.1, 0.2, 0.7, 1.0, 1.0, 0.2, 0.5, 0.5, 1.0],
  ipa: "/ðə ˈelɪfənt ɪn ðə ruːm ɪz ðət ˈaʊə ˈkʌrənt ˌiːkəˈnɒmɪk ˈmɒdl ɪz ˈsɪmpli nɒt səˈsteɪnəbl/",
  meaning: "用 elephant in the room 习语引出核心问题——大胆表达",
  cn: "房间里的大象是——我们目前的经济模式根本不可持续。",
  trap: "The obvious problem nobody talks about is our economy cannot continue.",
  tip: "ELEPHANT IN THE ROOM 习语重读，ECONOMIC MODEL 核心概念，SIMPLY NOT SUSTAINABLE 结论",
  pattern: "The elephant in the room is that our + [adj] + [noun] + is simply not + [adj]",
  variants: ["Nobody wants to admit that the whole system is broken.", "We're avoiding the obvious truth about our economic trajectory.", "Let's address what everyone's thinking but nobody's saying."]
};

const s658 = {
  id: 658,
  cat: "Society",
  scene: "discussion",
  text: "I think we have a tendency to romanticise the past rather than confronting present realities.",
  words: ["I","think","we","have","a","tendency","to","romanticise","the","past","rather","than","confronting","present","realities"],
  stress: [0.2, 0.5, 0.2, 0.3, 0.1, 1.0, 0.1, 1.0, 0.1, 1.0, 0.5, 0.3, 1.0, 0.8, 1.0],
  ipa: "/aɪ θɪŋk wi hæv ə ˈtendənsi tə rəʊˈmæntɪsaɪz ðə pɑːst ˈrɑːðə ðən kənˈfrʌntɪŋ ˈprezənt riˈælɪtiz/",
  meaning: "用 tendency to 和 rather than 对比——展示批判性分析",
  cn: "我觉得我们有美化过去的倾向，而不是面对现实。",
  trap: "People think old times were better instead of dealing with now.",
  tip: "TENDENCY 核心名词，ROMANTICISE 动词重在 -TI-，PAST 和 CONFRONTING PRESENT REALITIES 对比",
  pattern: "I think we have a tendency to + [verb] + the past rather than + [verb]ing + present + [noun]",
  variants: ["Nostalgia is comforting, but it's not a strategy.", "Looking backwards won't solve today's problems.", "We idealise the past and ignore the challenges right in front of us."]
};

const s659 = {
  id: 659,
  cat: "Society",
  scene: "discussion",
  text: "Ultimately, I believe meaningful change requires both top-down policy and grassroots action.",
  words: ["Ultimately","I","believe","meaningful","change","requires","both","top-down","policy","and","grassroots","action"],
  stress: [0.8, 0.2, 0.5, 1.0, 1.0, 0.8, 0.5, 1.0, 1.0, 0.1, 1.0, 1.0],
  ipa: "/ˈʌltɪmɪtli aɪ bɪˈliːv ˈmiːnɪŋfəl tʃeɪndʒ rɪˈkwaɪəz bəʊθ ˈtɒpdaʊn ˈpɒlɪsi ənd ˈɡrɑːsruːts ˈækʃən/",
  meaning: "用 top-down 和 grassroots 对比——展示系统性思维",
  cn: "归根结底，我认为有意义的变革既需要自上而下的政策，也需要基层行动。",
  trap: "Real change needs both government plans and people doing things.",
  tip: "ULTIMATELY 总结标记，MEANINGFUL CHANGE 核心主语，TOP-DOWN POLICY 和 GRASSROOTS ACTION 对称",
  pattern: "Ultimately, I believe + [adj] + change requires both + [noun phrase] + and + [noun phrase]",
  variants: ["Neither top-down nor bottom-up alone will cut it.", "Policy without popular support is pointless, and vice versa.", "Real transformation demands action at every level."]
};

const s660 = {
  id: 660,
  cat: "Society",
  scene: "discussion",
  text: "To sum up, I think the key takeaway is that progress is possible, but only if we act collectively.",
  words: ["To","sum","up","I","think","the","key","takeaway","is","that","progress","is","possible","but","only","if","we","act","collectively"],
  stress: [0.1, 0.5, 0.5, 0.2, 0.5, 0.1, 0.8, 1.0, 0.2, 0.1, 1.0, 0.2, 1.0, 0.3, 0.7, 0.2, 0.2, 1.0, 1.0],
  ipa: "/tə sʌm ʌp aɪ θɪŋk ðə kiː ˈteɪkəweɪ ɪz ðət ˈprəʊɡres ɪz ˈpɒsəbl bʌt ˈəʊnli ɪf wi ækt kəˈlektɪvli/",
  meaning: "用 to sum up 和 key takeaway 做最终总结——Part3 完美收官",
  cn: "总结一下，我认为关键的启示是进步是可能的，但前提是我们集体行动。",
  trap: "In conclusion, I think we can improve but everyone must work together.",
  tip: "TO SUM UP 总结标记，KEY TAKEAWAY 核心信息，PROGRESS POSSIBLE 观点，ACT COLLECTIVELY 条件",
  pattern: "To sum up, I think the key takeaway is that + [noun] + is possible, but only if we + [verb] + [adv]",
  variants: ["In a nutshell, collective action is our only path forward.", "The bottom line is simple: together we can, alone we can't.", "Progress demands unity — that's the fundamental truth."]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY22 = [
  s631, s632, s633, s634, s635, s636, s637, s638, s639, s640,
  s641, s642, s643, s644, s645, s646, s647, s648, s649, s650,
  s651, s652, s653, s654, s655, s656, s657, s658, s659, s660
];

export const SCENES_DAY22 = {
  631: { icon: "💭", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  632: { icon: "📚", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  633: { icon: "⚖️", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  634: { icon: "🔍", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  635: { icon: "🌳", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  636: { icon: "📊", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  637: { icon: "🧩", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  638: { icon: "🌍", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  639: { icon: "🔒", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  640: { icon: "📈", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  641: { icon: "🏭", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  642: { icon: "🗣️", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  643: { icon: "🔗", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  644: { icon: "🏙️", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  645: { icon: "🚨", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  646: { icon: "🤝", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  647: { icon: "📢", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  648: { icon: "🌐", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  649: { icon: "🧠", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  650: { icon: "🔄", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  651: { icon: "☀️", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  652: { icon: "🏪", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  653: { icon: "🏛️", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  654: { icon: "🌈", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  655: { icon: "🕊️", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  656: { icon: "🎭", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  657: { icon: "🐘", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  658: { icon: "🔙", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  659: { icon: "🏗️", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" },
  660: { icon: "🎯", colors: ["#6366f1","#818cf8"], title: "BIG PICTURE", sub: "IELTS Part 3 · Society" }
};
