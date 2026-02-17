// ─── Day 7 · Crisis Communication ─────────────────────────────────
// 30 sentences (id 181-210)

const s181 = {
  id: 181,
  cat: "crisis",
  scene: "incident-report",
  text: "We have a critical production incident affecting all users.",
  words: ["We","have","a","crit·i·cal","pro·duc·tion","in·ci·dent","af·fect·ing","all","us·ers"],
  stress: [0,1,0,1,1,1,1,1,1],
  ipa: "wi hæv ə ˈkrɪtɪkəl prəˈdʌkʃən ˈɪnsɪdənt əˈfɛktɪŋ ɔːl ˈjuːzərz",
  meaning: "Report a critical incident clearly and urgently",
  cn: "我们有一个影响所有用户的严重生产事故。",
  trap: "'incident' /ˈɪnsɪdənt/ 重音在 IN-，三音节",
  tip: "'critical' 开头定性严重性，'all users' 说明影响范围",
  pattern: "We have a critical ___ affecting ___",
  variants: [
    "We have a major outage impacting all customers.",
    "We have a severity-one incident affecting the entire platform."
  ]
};

const s182 = {
  id: 182,
  cat: "crisis",
  scene: "incident-report",
  text: "The issue was first detected at two fifteen AM Pacific time.",
  words: ["The","is·sue","was","first","de·tect·ed","at","two","fif·teen","AM","Pa·cif·ic","time"],
  stress: [0,1,0,1,1,0,1,1,1,1,1],
  ipa: "ðə ˈɪʃuː wɒz fɜːrst dɪˈtɛktɪd æt tuː ˈfɪftiːn ˌeɪˈɛm pəˈsɪfɪk taɪm",
  meaning: "Provide precise timing in an incident report",
  cn: "该问题于太平洋时间凌晨两点十五分首次被发现。",
  trap: "'detected' /dɪˈtɛktɪd/ 重音在 -TECT-，三音节",
  tip: "'first detected' 精确，时区和时间清晰——危机中精度很重要",
  pattern: "The issue was first detected at ___",
  variants: [
    "The outage began at three forty-five AM Eastern time.",
    "We first noticed the anomaly at eleven PM UTC."
  ]
};

const s183 = {
  id: 183,
  cat: "crisis",
  scene: "incident-report",
  text: "I've assembled the incident response team. Here's the war room link.",
  words: ["I've","as·sem·bled","the","in·ci·dent","re·sponse","team","Here's","the","war","room","link"],
  stress: [1,1,0,1,1,1,1,0,1,1,1],
  ipa: "aɪv əˈsɛmbəld ðə ˈɪnsɪdənt rɪˈspɒns tiːm hɪrz ðə wɔːr ruːm lɪŋk",
  meaning: "Mobilize the incident response team",
  cn: "我已经召集了事故响应团队。这是作战室的链接。",
  trap: "'assembled' /əˈsɛmbəld/ 重音在 -SEM-，三音节",
  tip: "'war room' 紧迫感，'Here's the link' 立即行动",
  pattern: "I've assembled ___. Here's the ___",
  variants: [
    "I've pulled in the on-call engineers. Here's the bridge link.",
    "I've activated the incident team. Here's the Slack channel."
  ]
};

const s184 = {
  id: 184,
  cat: "crisis",
  scene: "stakeholder-update",
  text: "Here's our current status: we've identified the root cause.",
  words: ["Here's","our","cur·rent","sta·tus","we've","i·den·ti·fied","the","root","cause"],
  stress: [1,0,1,1,1,1,0,1,1],
  ipa: "hɪrz aʊər ˈkɜːrənt ˈsteɪtəs wiːv aɪˈdɛntɪfaɪd ðə ruːt kɔːz",
  meaning: "Provide a structured stakeholder update",
  cn: "以下是我们的当前状态：我们已经确定了根本原因。",
  trap: "'identified' /aɪˈdɛntɪfaɪd/ 重音在 -DEN-，四音节",
  tip: "'current status' 框架清晰，'root cause' 给利益相关者信心",
  pattern: "Here's our current status: we've ___",
  variants: [
    "Here's the latest update: we've contained the issue.",
    "Quick status update: we've found the root cause and are working on a fix."
  ]
};

const s185 = {
  id: 185,
  cat: "crisis",
  scene: "stakeholder-update",
  text: "We expect full recovery within the next two hours.",
  words: ["We","ex·pect","full","re·cov·er·y","with·in","the","next","two","hours"],
  stress: [0,1,1,1,1,0,1,1,1],
  ipa: "wi ɪkˈspɛkt fʊl rɪˈkʌvəri wɪðˈɪn ðə nɛkst tuː ˈaʊərz",
  meaning: "Set a timeline expectation for recovery",
  cn: "我们预计在接下来两小时内完全恢复。",
  trap: "'recovery' /rɪˈkʌvəri/ 重音在 -COV-，四音节",
  tip: "'full recovery' 明确目标，'two hours' 具体时间表承诺",
  pattern: "We expect full recovery within ___",
  variants: [
    "We expect the service to be fully restored within the hour.",
    "We anticipate full recovery by end of business today."
  ]
};

const s186 = {
  id: 186,
  cat: "crisis",
  scene: "stakeholder-update",
  text: "I'll send the next update in thirty minutes, or sooner if anything changes.",
  words: ["I'll","send","the","next","up·date","in","thir·ty","min·utes","or","soon·er","if","an·y·thing","chang·es"],
  stress: [1,1,0,1,1,0,1,1,0,1,0,1,1],
  ipa: "aɪl sɛnd ðə nɛkst ʌpˈdeɪt ɪn ˈθɜːrti ˈmɪnɪts ɔːr ˈsuːnər ɪf ˈɛniθɪŋ ˈtʃeɪndʒɪz",
  meaning: "Set expectations for communication cadence",
  cn: "我将在三十分钟后发送下一次更新，如有变化会更早。",
  trap: "'update' 名词 /ʌpˈdeɪt/ 重音在 -DATE",
  tip: "'thirty minutes' 给出节奏，'sooner if anything changes' 灵活应变",
  pattern: "I'll send the next update in ___, or sooner if ___",
  variants: [
    "I'll provide the next update in one hour, or immediately if the situation changes.",
    "Expect the next update in fifteen minutes unless we resolve sooner."
  ]
};

const s187 = {
  id: 187,
  cat: "crisis",
  scene: "media-statement",
  text: "We take this matter extremely seriously and are investigating thoroughly.",
  words: ["We","take","this","mat·ter","ex·treme·ly","se·ri·ous·ly","and","are","in·ves·ti·gat·ing","thor·ough·ly"],
  stress: [0,1,0,1,1,1,0,0,1,1],
  ipa: "wi teɪk ðɪs ˈmætər ɪkˈstriːmli ˈsɪriəsli ænd ɑːr ɪnˈvɛstɪɡeɪtɪŋ ˈθʌrəli",
  meaning: "Deliver a formal media statement",
  cn: "我们对此事极其重视，正在进行彻底调查。",
  trap: "'thoroughly' /ˈθʌrəli/ 两音节，注意 /θ/ 开头",
  tip: "'extremely seriously' 双副词加强语气，正式声明腔调",
  pattern: "We take this matter extremely seriously and are ___",
  variants: [
    "We take our customers' trust very seriously and are looking into this.",
    "We take this situation extremely seriously and are acting immediately."
  ]
};

const s188 = {
  id: 188,
  cat: "crisis",
  scene: "media-statement",
  text: "Our top priority is protecting our customers' data and privacy.",
  words: ["Our","top","pri·or·i·ty","is","pro·tect·ing","our","cus·tom·ers'","da·ta","and","pri·va·cy"],
  stress: [0,1,1,0,1,0,1,1,0,1],
  ipa: "aʊər tɒp praɪˈɒrɪti ɪz prəˈtɛktɪŋ aʊər ˈkʌstəmərz ˈdeɪtə ænd ˈpraɪvəsi",
  meaning: "Reassure stakeholders about priorities",
  cn: "我们的首要任务是保护客户的数据和隐私。",
  trap: "'priority' /praɪˈɒrɪti/ 重音在 -OR-，四音节",
  tip: "'top priority' 旗帜鲜明，'data and privacy' 点名核心关切",
  pattern: "Our top priority is protecting ___",
  variants: [
    "Our primary concern is the safety and security of our users.",
    "Our number one priority is ensuring no customer data was compromised."
  ]
};

const s189 = {
  id: 189,
  cat: "crisis",
  scene: "media-statement",
  text: "We will share a detailed post-incident report within seventy-two hours.",
  words: ["We","will","share","a","de·tailed","post-in·ci·dent","re·port","with·in","sev·en·ty-two","hours"],
  stress: [0,1,1,0,1,1,1,1,1,1],
  ipa: "wi wɪl ʃɛr ə dɪˈteɪld ˌpoʊstˈɪnsɪdənt rɪˈpɔːrt wɪðˈɪn ˈsɛvəntiˌtuː ˈaʊərz",
  meaning: "Commit to transparency with a timeline",
  cn: "我们将在七十二小时内分享一份详细的事后报告。",
  trap: "'post-incident' /ˌpoʊstˈɪnsɪdənt/ 复合词，重音在 IN-",
  tip: "'detailed' 承诺深度，'seventy-two hours' 具体时间表建立信任",
  pattern: "We will share a detailed ___ within ___",
  variants: [
    "We will publish a full root cause analysis within forty-eight hours.",
    "We will release a comprehensive incident report by end of week."
  ]
};

const s190 = {
  id: 190,
  cat: "crisis",
  scene: "team-rally",
  text: "I know everyone's exhausted, but we're almost through this.",
  words: ["I","know","ev·ery·one's","ex·haust·ed","but","we're","al·most","through","this"],
  stress: [0,1,1,1,0,1,1,1,1],
  ipa: "aɪ noʊ ˈɛvriˌwʌnz ɪɡˈzɔːstɪd bʌt wɪr ˈɔːlmoʊst θruː ðɪs",
  meaning: "Acknowledge team fatigue while motivating",
  cn: "我知道大家都筋疲力尽了，但我们快挺过去了。",
  trap: "'exhausted' /ɪɡˈzɔːstɪd/ 重音在 -ZAUS-，三音节",
  tip: "'I know' 先共情，'almost through' 给出隧道尽头的光",
  pattern: "I know everyone's ___. But we're almost ___",
  variants: [
    "I know it's been a brutal night, but we're nearly there.",
    "I know everyone's tired, but we're in the home stretch."
  ]
};

const s191 = {
  id: 191,
  cat: "crisis",
  scene: "team-rally",
  text: "Your work tonight is making a real difference for our customers.",
  words: ["Your","work","to·night","is","mak·ing","a","real","dif·fer·ence","for","our","cus·tom·ers"],
  stress: [0,1,1,0,1,0,1,1,0,0,1],
  ipa: "jɔːr wɜːrk təˈnaɪt ɪz ˈmeɪkɪŋ ə rɪəl ˈdɪfərəns fɔːr aʊər ˈkʌstəmərz",
  meaning: "Recognize team effort during a crisis",
  cn: "你们今晚的工作正在为我们的客户带来真正的改变。",
  trap: "'difference' /ˈdɪfərəns/ 重音在 DIF-，三音节",
  tip: "'real difference' 具体肯定，'customers' 提醒使命感",
  pattern: "Your work ___ is making a real difference for ___",
  variants: [
    "What you're doing right now is genuinely helping our users.",
    "Your effort tonight is directly protecting our customers."
  ]
};

const s192 = {
  id: 192,
  cat: "crisis",
  scene: "team-rally",
  text: "Let's rotate shifts so nobody burns out. Who can take over at six?",
  words: ["Let's","ro·tate","shifts","so","no·bod·y","burns","out","Who","can","take","o·ver","at","six"],
  stress: [1,1,1,0,1,1,1,1,0,1,1,0,1],
  ipa: "lɛts roʊˈteɪt ʃɪfts soʊ ˈnoʊbədi bɜːrnz aʊt huː kæn teɪk ˈoʊvər æt sɪks",
  meaning: "Protect team wellbeing during extended incidents",
  cn: "我们轮班，这样没人会过度疲劳。谁能在六点接手？",
  trap: "'rotate' /roʊˈteɪt/ 重音在 -TATE，两音节",
  tip: "'burns out' 重读表关心，问句具体到时间推动行动",
  pattern: "Let's rotate ___ so nobody ___. Who can ___?",
  variants: [
    "Let's swap shifts so everyone gets some rest. Who's up next?",
    "Let's make sure we're rotating. Who can take the next window?"
  ]
};

const s193 = {
  id: 193,
  cat: "crisis",
  scene: "damage-control",
  text: "We need to contain the blast radius before this escalates further.",
  words: ["We","need","to","con·tain","the","blast","ra·di·us","be·fore","this","es·ca·lates","fur·ther"],
  stress: [0,1,0,1,0,1,1,1,0,1,1],
  ipa: "wi niːd tə kənˈteɪn ðə blæst ˈreɪdiəs bɪˈfɔːr ðɪs ˈɛskəleɪts ˈfɜːrðər",
  meaning: "Limit damage and prevent escalation",
  cn: "我们需要在事态进一步升级之前控制影响范围。",
  trap: "'radius' /ˈreɪdiəs/ 重音在 RA-，三音节",
  tip: "'blast radius' 技术隐喻有力，'escalates' 紧迫感",
  pattern: "We need to contain ___ before this escalates ___",
  variants: [
    "We need to limit the impact before more systems are affected.",
    "We need to isolate the problem before it spreads further."
  ]
};

const s194 = {
  id: 194,
  cat: "crisis",
  scene: "damage-control",
  text: "Let's roll back the deployment. We can't risk more downtime.",
  words: ["Let's","roll","back","the","de·ploy·ment","We","can't","risk","more","down·time"],
  stress: [1,1,1,0,1,0,1,1,1,1],
  ipa: "lɛts roʊl bæk ðə dɪˈplɔɪmənt wi kænt rɪsk mɔːr ˈdaʊntaɪm",
  meaning: "Make a decisive rollback decision",
  cn: "让我们回滚部署。我们不能冒更多停机风险。",
  trap: "'deployment' /dɪˈplɔɪmənt/ 重音在 -PLOY-，三音节",
  tip: "'roll back' 果断，'can't risk' 表明决策理由",
  pattern: "Let's roll back ___. We can't risk ___",
  variants: [
    "Let's revert the change. We can't afford more impact.",
    "Let's roll back to the last stable version immediately."
  ]
};

const s195 = {
  id: 195,
  cat: "crisis",
  scene: "damage-control",
  text: "We've proactively notified all affected enterprise clients.",
  words: ["We've","pro·ac·tive·ly","no·ti·fied","all","af·fect·ed","en·ter·prise","cli·ents"],
  stress: [1,1,1,1,1,1,1],
  ipa: "wiːv proʊˈæktɪvli ˈnoʊtɪfaɪd ɔːl əˈfɛktɪd ˈɛntərpraɪz ˈklaɪənts",
  meaning: "Demonstrate proactive client communication",
  cn: "我们已主动通知所有受影响的企业客户。",
  trap: "'proactively' /proʊˈæktɪvli/ 重音在 -AC-，四音节",
  tip: "'proactively' 关键词——主动比被动好，'enterprise clients' 表重视大客户",
  pattern: "We've proactively notified all affected ___",
  variants: [
    "We've already reached out to all impacted customers.",
    "We've proactively informed all affected partners and clients."
  ]
};

const s196 = {
  id: 196,
  cat: "crisis",
  scene: "transparency",
  text: "I want to be completely transparent about what happened.",
  words: ["I","want","to","be","com·plete·ly","trans·par·ent","a·bout","what","hap·pened"],
  stress: [0,1,0,0,1,1,1,0,1],
  ipa: "aɪ wɒnt tə bi kəmˈpliːtli trænsˈpɛrənt əˈbaʊt wɒt ˈhæpənd",
  meaning: "Signal transparency in crisis communication",
  cn: "我想对发生的事情做到完全透明。",
  trap: "'transparent' /trænsˈpɛrənt/ 重音在 -PAR-，三音节",
  tip: "'completely transparent' 双重强调诚意，建立信任的关键",
  pattern: "I want to be completely transparent about ___",
  variants: [
    "I want to be fully upfront about what went wrong.",
    "I believe in being completely transparent, so here's what happened."
  ]
};

const s197 = {
  id: 197,
  cat: "crisis",
  scene: "transparency",
  text: "We made a mistake in our deployment process. Here's what we know.",
  words: ["We","made","a","mis·take","in","our","de·ploy·ment","pro·cess","Here's","what","we","know"],
  stress: [0,1,0,1,0,0,1,1,1,0,0,1],
  ipa: "wi meɪd ə mɪˈsteɪk ɪn aʊər dɪˈplɔɪmənt ˈprɒsɛs hɪrz wɒt wi noʊ",
  meaning: "Admit fault honestly and share findings",
  cn: "我们在部署流程中犯了一个错误。以下是我们目前了解的情况。",
  trap: "'mistake' /mɪˈsteɪk/ 重音在 -STAKE，两音节",
  tip: "'We made a mistake' 直接承认——不找借口赢得尊重",
  pattern: "We made a mistake in ___. Here's what we know.",
  variants: [
    "We made an error in our configuration. Here's the full picture.",
    "We dropped the ball on testing. Here's what happened."
  ]
};

const s198 = {
  id: 198,
  cat: "crisis",
  scene: "transparency",
  text: "No customer data was compromised. We've confirmed this with our security team.",
  words: ["No","cus·tom·er","da·ta","was","com·pro·mised","We've","con·firmed","this","with","our","se·cu·ri·ty","team"],
  stress: [1,1,1,0,1,1,1,0,0,0,1,1],
  ipa: "noʊ ˈkʌstəmər ˈdeɪtə wɒz ˈkɒmprəmaɪzd wiːv kənˈfɜːrmd ðɪs wɪð aʊər sɪˈkjʊrɪti tiːm",
  meaning: "Provide critical reassurance about data safety",
  cn: "没有客户数据被泄露。我们的安全团队已确认。",
  trap: "'compromised' /ˈkɒmprəmaɪzd/ 重音在 COM-，三音节",
  tip: "'No customer data' 开头最重要的事先说，'confirmed' 有证据支持",
  pattern: "No ___ was compromised. We've confirmed this with ___",
  variants: [
    "No personal information was exposed. Our audit confirms this.",
    "No sensitive data was affected. We've verified this independently."
  ]
};

const s199 = {
  id: 199,
  cat: "crisis",
  scene: "timeline-update",
  text: "Here's a timeline of events from detection to resolution.",
  words: ["Here's","a","time·line","of","e·vents","from","de·tec·tion","to","res·o·lu·tion"],
  stress: [1,0,1,0,1,0,1,0,1],
  ipa: "hɪrz ə ˈtaɪmlaɪn əv ɪˈvɛnts frəm dɪˈtɛkʃən tə ˌrɛzəˈluːʃən",
  meaning: "Present a structured incident timeline",
  cn: "以下是从发现到解决的事件时间线。",
  trap: "'detection' /dɪˈtɛkʃən/ 重音在 -TEC-，三音节",
  tip: "'timeline' 清晰，'detection to resolution' 完整弧线",
  pattern: "Here's a timeline of events from ___ to ___",
  variants: [
    "Here's a chronological breakdown of the incident.",
    "Let me walk you through the timeline from start to finish."
  ]
};

const s200 = {
  id: 200,
  cat: "crisis",
  scene: "timeline-update",
  text: "At three AM we detected the anomaly. By four we had a fix deployed.",
  words: ["At","three","AM","we","de·tect·ed","the","a·nom·a·ly","By","four","we","had","a","fix","de·ployed"],
  stress: [0,1,1,0,1,0,1,0,1,0,1,0,1,1],
  ipa: "æt θriː ˌeɪˈɛm wi dɪˈtɛktɪd ðə əˈnɒməli baɪ fɔːr wi hæd ə fɪks dɪˈplɔɪd",
  meaning: "Give precise timeline details",
  cn: "凌晨三点我们检测到异常。到四点我们已经部署了修复。",
  trap: "'anomaly' /əˈnɒməli/ 重音在 -NOM-，四音节",
  tip: "时间点清晰标注，'fix deployed' 一小时解决——展示效率",
  pattern: "At ___ we detected ___. By ___ we had ___",
  variants: [
    "At midnight we spotted the issue. By one AM we had it resolved.",
    "At ten PM the alert fired. By eleven we had rolled back."
  ]
};

const s201 = {
  id: 201,
  cat: "crisis",
  scene: "timeline-update",
  text: "The mean time to recovery was forty-seven minutes.",
  words: ["The","mean","time","to","re·cov·er·y","was","for·ty-sev·en","min·utes"],
  stress: [0,1,1,0,1,0,1,1],
  ipa: "ðə miːn taɪm tə rɪˈkʌvəri wɒz ˈfɔːrtiˈsɛvən ˈmɪnɪts",
  meaning: "Report MTTR as a key metric",
  cn: "平均恢复时间为四十七分钟。",
  trap: "'recovery' /rɪˈkʌvəri/ 重音在 -COV-，四音节",
  tip: "'mean time to recovery' 是技术指标，数字要清晰",
  pattern: "The mean time to recovery was ___",
  variants: [
    "The total downtime was twenty-three minutes.",
    "The mean time to resolution was under one hour."
  ]
};

const s202 = {
  id: 202,
  cat: "crisis",
  scene: "recovery-plan",
  text: "Here's our three-phase recovery plan to restore full service.",
  words: ["Here's","our","three-phase","re·cov·er·y","plan","to","re·store","full","ser·vice"],
  stress: [1,0,1,1,1,0,1,1,1],
  ipa: "hɪrz aʊər ˈθriːˌfeɪz rɪˈkʌvəri plæn tə rɪˈstɔːr fʊl ˈsɜːrvɪs",
  meaning: "Present a structured recovery plan",
  cn: "以下是我们恢复全部服务的三阶段恢复计划。",
  trap: "'three-phase' /ˈθriːˌfeɪz/ 复合形容词，注意 /θ/ 和 /f/",
  tip: "'three-phase' 结构化思维，'full service' 明确最终目标",
  pattern: "Here's our ___-phase recovery plan to ___",
  variants: [
    "Here's our step-by-step recovery plan to get back online.",
    "Here's our two-stage plan to restore normal operations."
  ]
};

const s203 = {
  id: 203,
  cat: "crisis",
  scene: "recovery-plan",
  text: "Phase one is stabilization. Phase two is full restoration.",
  words: ["Phase","one","is","sta·bi·li·za·tion","Phase","two","is","full","res·to·ra·tion"],
  stress: [1,1,0,1,1,1,0,1,1],
  ipa: "feɪz wʌn ɪz ˌsteɪbɪlaɪˈzeɪʃən feɪz tuː ɪz fʊl ˌrɛstəˈreɪʃən",
  meaning: "Break down recovery phases clearly",
  cn: "第一阶段是稳定化。第二阶段是全面恢复。",
  trap: "'stabilization' /ˌsteɪbɪlaɪˈzeɪʃən/ 重音在 -ZA-，五音节",
  tip: "平行结构 'Phase one... Phase two...' 清晰有序",
  pattern: "Phase one is ___. Phase two is ___.",
  variants: [
    "Phase one is containment. Phase two is remediation.",
    "Step one is stopping the bleeding. Step two is rebuilding."
  ]
};

const s204 = {
  id: 204,
  cat: "crisis",
  scene: "recovery-plan",
  text: "We're adding redundancy to ensure this single point of failure is eliminated.",
  words: ["We're","add·ing","re·dun·dan·cy","to","en·sure","this","sin·gle","point","of","fail·ure","is","e·lim·i·nat·ed"],
  stress: [1,1,1,0,1,0,1,1,0,1,0,1],
  ipa: "wɪr ˈædɪŋ rɪˈdʌndənsi tə ɪnˈʃʊr ðɪs ˈsɪŋɡəl pɔɪnt əv ˈfeɪljər ɪz ɪˈlɪmɪneɪtɪd",
  meaning: "Describe a systemic fix for the root cause",
  cn: "我们正在增加冗余，以确保消除这个单点故障。",
  trap: "'redundancy' /rɪˈdʌndənsi/ 重音在 -DUN-，四音节",
  tip: "'single point of failure' 是技术核心概念，每词清晰",
  pattern: "We're adding ___ to ensure this ___ is eliminated",
  variants: [
    "We're implementing failover to prevent any single point of failure.",
    "We're adding backup systems to eliminate this vulnerability."
  ]
};

const s205 = {
  id: 205,
  cat: "crisis",
  scene: "lessons-learned",
  text: "The biggest takeaway is that we need better monitoring alerts.",
  words: ["The","big·gest","take·a·way","is","that","we","need","bet·ter","mon·i·tor·ing","a·lerts"],
  stress: [0,1,1,0,0,0,1,1,1,1],
  ipa: "ðə ˈbɪɡɪst ˈteɪkəweɪ ɪz ðæt wi niːd ˈbɛtər ˈmɒnɪtərɪŋ əˈlɜːrts",
  meaning: "Share the key lesson from a crisis",
  cn: "最大的收获是我们需要更好的监控告警。",
  trap: "'monitoring' /ˈmɒnɪtərɪŋ/ 重音在 MON-，四音节",
  tip: "'biggest takeaway' 开门见山，'better monitoring' 具体改进方向",
  pattern: "The biggest takeaway is that we need ___",
  variants: [
    "The key lesson is that we need automated failover.",
    "The main learning is that we need more comprehensive testing."
  ]
};

const s206 = {
  id: 206,
  cat: "crisis",
  scene: "lessons-learned",
  text: "We've updated our runbook to include this failure scenario.",
  words: ["We've","up·dat·ed","our","run·book","to","in·clude","this","fail·ure","sce·nar·i·o"],
  stress: [1,1,0,1,0,1,0,1,1],
  ipa: "wiːv ʌpˈdeɪtɪd aʊər ˈrʌnbʊk tə ɪnˈkluːd ðɪs ˈfeɪljər sɪˈnɛrioʊ",
  meaning: "Document improvements to operational procedures",
  cn: "我们已经更新了运维手册，纳入了这个故障场景。",
  trap: "'scenario' /sɪˈnɛrioʊ/ 重音在 -NAR-，四音节",
  tip: "'runbook' 运维术语，'include this failure scenario' 防患于未然",
  pattern: "We've updated our ___ to include ___",
  variants: [
    "We've revised our playbook to cover this edge case.",
    "We've added this scenario to our incident response documentation."
  ]
};

const s207 = {
  id: 207,
  cat: "crisis",
  scene: "lessons-learned",
  text: "If we had caught this in staging, we could have avoided the outage.",
  words: ["If","we","had","caught","this","in","stag·ing","we","could","have","a·void·ed","the","out·age"],
  stress: [0,0,1,1,0,0,1,0,1,0,1,0,1],
  ipa: "ɪf wi hæd kɔːt ðɪs ɪn ˈsteɪdʒɪŋ wi kʊd hæv əˈvɔɪdɪd ðə ˈaʊtɪdʒ",
  meaning: "Reflect on a missed opportunity to prevent an incident",
  cn: "如果我们在预发布环境中发现了这个问题，就能避免这次故障。",
  trap: "'caught' /kɔːt/ 一个音节，过去式不规则",
  tip: "'If we had caught' 虚拟语气回顾，'staging' 技术关键点",
  pattern: "If we had caught this in ___, we could have avoided ___",
  variants: [
    "If we'd tested this in staging, the outage wouldn't have happened.",
    "If our pre-production checks had caught this, we'd have avoided the issue."
  ]
};

const s208 = {
  id: 208,
  cat: "crisis",
  scene: "all-hands",
  text: "I want to give everyone a full and honest account of what happened.",
  words: ["I","want","to","give","ev·ery·one","a","full","and","hon·est","ac·count","of","what","hap·pened"],
  stress: [0,1,0,1,1,0,1,0,1,1,0,0,1],
  ipa: "aɪ wɒnt tə ɡɪv ˈɛvriˌwʌn ə fʊl ænd ˈɒnɪst əˈkaʊnt əv wɒt ˈhæpənd",
  meaning: "Open an all-hands with transparency",
  cn: "我想给每个人一个完整和诚实的事件说明。",
  trap: "'account' /əˈkaʊnt/ 重音在 -COUNT，两音节",
  tip: "'full and honest' 双形容词承诺透明，'everyone' 包容全员",
  pattern: "I want to give everyone a full and honest account of ___",
  variants: [
    "I owe everyone a transparent explanation of what went wrong.",
    "I want to be completely open about what happened and why."
  ]
};

const s209 = {
  id: 209,
  cat: "crisis",
  scene: "all-hands",
  text: "This was a team effort, and I'm proud of how we responded.",
  words: ["This","was","a","team","ef·fort","and","I'm","proud","of","how","we","re·spond·ed"],
  stress: [0,0,0,1,1,0,1,1,0,1,0,1],
  ipa: "ðɪs wɒz ə tiːm ˈɛfərt ænd aɪm praʊd əv haʊ wi rɪˈspɒndɪd",
  meaning: "Recognize collective effort after a crisis",
  cn: "这是团队的努力，我为我们的应对方式感到骄傲。",
  trap: "'responded' /rɪˈspɒndɪd/ 重音在 -SPOND-，三音节",
  tip: "'team effort' 归功于集体，'proud' 真诚有力",
  pattern: "This was a team effort, and I'm proud of ___",
  variants: [
    "This was a collective win, and I'm incredibly proud of this team.",
    "Everyone stepped up, and I'm proud of how we handled this."
  ]
};

const s210 = {
  id: 210,
  cat: "crisis",
  scene: "all-hands",
  text: "We came out of this stronger and more resilient as an organization.",
  words: ["We","came","out","of","this","strong·er","and","more","re·sil·ient","as","an","or·gan·i·za·tion"],
  stress: [0,1,1,0,0,1,0,1,1,0,0,1],
  ipa: "wi keɪm aʊt əv ðɪs ˈstrɒŋɡər ænd mɔːr rɪˈzɪliənt æz ən ˌɔːrɡənəˈzeɪʃən",
  meaning: "Close a crisis with a forward-looking, positive message",
  cn: "我们从这次事件中变得更强大、更有韧性。",
  trap: "'resilient' /rɪˈzɪliənt/ 重音在 -ZIL-，四音节",
  tip: "'stronger and more resilient' 成长叙事收尾，提振士气",
  pattern: "We came out of this ___ and more ___ as ___",
  variants: [
    "We emerged from this more prepared and more resilient.",
    "We're a stronger team because of how we handled this crisis."
  ]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY7 = [
  s181, s182, s183, s184, s185, s186, s187, s188, s189, s190,
  s191, s192, s193, s194, s195, s196, s197, s198, s199, s200,
  s201, s202, s203, s204, s205, s206, s207, s208, s209, s210
];

export const SCENES_DAY7 = {
  181: { icon: "🚨", colors: ["#DC2626", "#B91C1C"], title: "Code Red", sub: "Critical incident alert" },
  182: { icon: "🕐", colors: ["#EF4444", "#DC2626"], title: "First Detected", sub: "Precise timing" },
  183: { icon: "📞", colors: ["#7C3AED", "#5B21B6"], title: "War Room", sub: "Mobilizing the team" },
  184: { icon: "📊", colors: ["#2563EB", "#1D4ED8"], title: "Status Update", sub: "Stakeholder briefing" },
  185: { icon: "⏳", colors: ["#059669", "#047857"], title: "ETA to Recovery", sub: "Setting expectations" },
  186: { icon: "🔔", colors: ["#6366F1", "#4F46E5"], title: "Next Update", sub: "Communication cadence" },
  187: { icon: "🎙️", colors: ["#1F2937", "#111827"], title: "Official Statement", sub: "Formal media response" },
  188: { icon: "🛡️", colors: ["#0891B2", "#0E7490"], title: "Data First", sub: "Protecting customer trust" },
  189: { icon: "📝", colors: ["#8B5CF6", "#7C3AED"], title: "Full Report", sub: "Committed transparency" },
  190: { icon: "💪", colors: ["#F59E0B", "#D97706"], title: "Almost There", sub: "Rallying exhausted teams" },
  191: { icon: "⭐", colors: ["#EAB308", "#CA8A04"], title: "You Matter", sub: "Recognizing effort" },
  192: { icon: "🔄", colors: ["#14B8A6", "#0D9488"], title: "Rotate Shifts", sub: "Preventing burnout" },
  193: { icon: "🧱", colors: ["#E11D48", "#BE123C"], title: "Contain It", sub: "Limiting blast radius" },
  194: { icon: "⏪", colors: ["#EA580C", "#C2410C"], title: "Roll Back", sub: "Decisive revert" },
  195: { icon: "📣", colors: ["#3B82F6", "#2563EB"], title: "Heads Up", sub: "Proactive notification" },
  196: { icon: "🪟", colors: ["#A855F7", "#9333EA"], title: "Full Transparency", sub: "Open and honest" },
  197: { icon: "🤚", colors: ["#DC2626", "#991B1B"], title: "We Own This", sub: "Admitting the mistake" },
  198: { icon: "🔒", colors: ["#059669", "#047857"], title: "Data Safe", sub: "Critical reassurance" },
  199: { icon: "📐", colors: ["#6D28D9", "#5B21B6"], title: "Timeline", sub: "Structured event log" },
  200: { icon: "⚡", colors: ["#F97316", "#EA580C"], title: "Fast Response", sub: "Minute-by-minute" },
  201: { icon: "📏", colors: ["#78716C", "#57534E"], title: "MTTR", sub: "Recovery metrics" },
  202: { icon: "🗺️", colors: ["#2563EB", "#1E40AF"], title: "Recovery Plan", sub: "Structured phases" },
  203: { icon: "🏗️", colors: ["#10B981", "#059669"], title: "Phase by Phase", sub: "Clear progression" },
  204: { icon: "🔗", colors: ["#0891B2", "#0E7490"], title: "No More SPOF", sub: "Adding redundancy" },
  205: { icon: "💡", colors: ["#F59E0B", "#D97706"], title: "Key Takeaway", sub: "Core lesson learned" },
  206: { icon: "📖", colors: ["#8B5CF6", "#6D28D9"], title: "Updated Runbook", sub: "Better documentation" },
  207: { icon: "🔮", colors: ["#E11D48", "#BE123C"], title: "If Only", sub: "Missed prevention" },
  208: { icon: "🏛️", colors: ["#1F2937", "#111827"], title: "All Hands", sub: "Full transparency" },
  209: { icon: "🏆", colors: ["#EAB308", "#CA8A04"], title: "Team Pride", sub: "Collective recognition" },
  210: { icon: "🌅", colors: ["#059669", "#047857"], title: "Stronger Now", sub: "Forward-looking close" }
};
