// ═══════════════════════════════════════════════════════════════════
// Rhythm English — Procedural Content Engine
// Generates infinite daily content from day 11+, daily challenges,
// spaced repetition review, and learning stats.
// ═══════════════════════════════════════════════════════════════════

// ─── Seeded PRNG (Mulberry32) ────────────────────────────────────
function mulberry32(seed) {
  return function () {
    seed |= 0; seed = seed + 0x6d2b79f5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function hashStr(s) { let h = 0; for (let i = 0; i < s.length; i++) h = Math.imul(31, h) + s.charCodeAt(i) | 0; return h; }
function shuffle(a, r) { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1));[b[i], b[j]] = [b[j], b[i]]; } return b; }
function pick(a, r) { return a[Math.floor(r() * a.length)]; }
function pickN(a, n, r) { return shuffle(a, r).slice(0, n); }

// ─── Vocabulary Pools ────────────────────────────────────────────
const NAMES = ["Sarah","Michael","David","Emma","James","Lisa","Tom","Rachel","Kevin","Anna","Chris","Diana","Mark","Sophie","Ryan","Nina","Alex","Laura","Brian","Helen","Peter","Grace","Sam","Claire","Daniel","Megan","Steve","Julia","Matt","Kate"];
const DEPTS = ["engineering","marketing","sales","design","operations","finance","HR","product","legal","support"];
const METRICS = ["revenue","conversion","retention","engagement","throughput","uptime","churn","growth","margin","pipeline"];
const TIMES = ["Monday","Friday","next week","end of month","Q3","Q4","tomorrow","by March","this quarter","end of year"];
const ADJS = ["critical","strategic","scalable","robust","flexible","efficient","compelling","aggressive","viable","pivotal"];
const NUMS = ["ten","twenty","thirty","forty","fifty","fifteen","twelve","eighty","hundred","sixty"];

// ─── 20 Category Definitions ─────────────────────────────────────
const CATS = {
  greetings:      {n:"Greetings",      icon:"👋", c:["#6366f1","#818cf8"]},
  negotiations:   {n:"Negotiations",   icon:"🤝", c:["#f59e0b","#fbbf24"]},
  leadership:     {n:"Leadership",     icon:"👑", c:["#8b5cf6","#a78bfa"]},
  tech:           {n:"Tech & Product", icon:"💻", c:["#06b6d4","#22d3ee"]},
  sales:          {n:"Sales",          icon:"📈", c:["#10b981","#34d399"]},
  conflict:       {n:"Conflict",       icon:"⚖️", c:["#ef4444","#f87171"]},
  networking:     {n:"Networking",     icon:"🔗", c:["#f97316","#fb923c"]},
  presentations:  {n:"Presentations",  icon:"🎤", c:["#ec4899","#f472b6"]},
  meetings:       {n:"Meetings",       icon:"📋", c:["#6366f1","#818cf8"]},
  emails:         {n:"Emails",         icon:"📧", c:["#14b8a6","#2dd4bf"]},
  interviews:     {n:"Interviews",     icon:"🎯", c:["#f59e0b","#fbbf24"]},
  feedback:       {n:"Feedback",       icon:"💬", c:["#10b981","#34d399"]},
  strategy:       {n:"Strategy",       icon:"♟️", c:["#6366f1","#818cf8"]},
  brainstorming:  {n:"Brainstorming",  icon:"💡", c:["#f97316","#fb923c"]},
  reporting:      {n:"Reporting",      icon:"📊", c:["#06b6d4","#22d3ee"]},
  delegation:     {n:"Delegation",     icon:"📌", c:["#ef4444","#f87171"]},
  mentoring:      {n:"Mentoring",      icon:"🌱", c:["#10b981","#34d399"]},
  celebration:    {n:"Celebration",     icon:"🎉", c:["#f59e0b","#fbbf24"]},
  farewell:       {n:"Farewell",       icon:"👋", c:["#8b5cf6","#a78bfa"]},
  "small-talk":   {n:"Small Talk",     icon:"☕", c:["#ec4899","#f472b6"]}
};
const CAT_KEYS = Object.keys(CATS);

// ─── Template Pools ──────────────────────────────────────────────
// Format: [text, stressArr, ipa, meaning, cn, tip, trap, pattern, [variants]]
// Use {N}=name {D}=dept {M}=metric {T}=time {A}=adj {#}=number slots

const TPL = {
greetings: [
  ["Good morning everyone, let's get started",[.3,1,.3,.3,1,.3,1],"ɡʊd ˈmɔːrnɪŋ ˈɛvriˌwʌn lɛts ɡɛt ˈstɑːrtɪd","Standard meeting opener","早上好各位，我们开始吧","MORNING, EVERYONE, STARTED carry the rhythm","Don't say 'Good morning to all people here'","Good morning everyone, let's + [verb]",["Good morning team, let's dive in","Good morning folks, let's kick this off"]],
  ["Thanks for jumping on so quickly",[1,.2,1,.3,.3,1],"θæŋks fɔːr ˈdʒʌmpɪŋ ɒn soʊ ˈkwɪkli","Appreciating someone joining fast","感谢你这么快就上线了","THANKS, JUMPING, QUICKLY — three peaks","Don't say 'Thank you for connecting rapidly'","Thanks for + [verb]ing + so quickly",["Thanks for hopping on so fast","Thanks for making time on short notice"]],
  ["How's everything going on your end?",[1,1,1,.3,.3,1],"haʊz ˈɛvriθɪŋ ˈɡoʊɪŋ ɒn jɔːr ɛnd","Casual check-in","你那边一切还好吗？","HOW'S, EVERYTHING, GOING, END — stress content words","Don't say 'What is the situation in your department?'","How's everything + [verb]ing + on your end?",["How's it going on your side?","Everything good on your end?"]],
  ["Great to finally put a face to the name",[1,.3,1,.3,.3,1,.3,.3,1],"ɡreɪt tə ˈfaɪnəli pʊt ə feɪs tə ðə neɪm","Meeting someone in person after emails","终于能见到真人了","GREAT, FINALLY, FACE, NAME — four beats","Don't say 'It is nice to see your real face'","Great to finally + [verb phrase]",["Great to finally connect in person","Nice to put a face to the name"]],
  ["Sorry I'm a couple minutes late",[1,.2,.3,.3,1,1],"ˈsɒri aɪm ə ˈkʌpəl ˈmɪnɪts leɪt","Quick apology for lateness","抱歉我迟到了几分钟","SORRY, COUPLE MINUTES, LATE — apologize efficiently","Don't say 'I apologize for my delayed arrival'","Sorry I'm + [time] + late",["Sorry for running a bit behind","Apologies for the late start"]],
  ["Hey {N}, glad you could make it",[.3,1,1,.3,.3,1,.3],"heɪ {N} ɡlæd juː kʊd meɪk ɪt","Welcoming someone by name","嘿{N}，很高兴你能来","{N} and GLAD and MAKE IT are the anchors","Don't say 'Hello {N}, I am happy you attended'","Hey + [name], glad you could + [verb]",["Hey {N}, great to see you","Hey {N}, thanks for showing up"]],
  ["I hope I'm not catching you at a bad time",[.2,1,.2,.3,1,.3,.3,.3,1,1],"aɪ hoʊp aɪm nɒt ˈkætʃɪŋ juː æt ə bæd taɪm","Checking if someone is available","希望没有打扰到你","HOPE, CATCHING, BAD, TIME — four peaks","Don't say 'I want to confirm this is convenient'","I hope I'm not + [verb]ing you at a + [adj] time",["Hope this isn't a bad time","Is now a good time to chat?"]],
  ["Let's do a quick round of introductions",[.3,1,.3,1,1,.3,1],"lɛts duː ə kwɪk raʊnd əv ˌɪntrəˈdʌkʃənz","Everyone introduce themselves","我们来快速做下自我介绍吧","DO, QUICK, ROUND, INTRODUCTIONS — stress builds","Don't say 'Everyone should say their name now'","Let's do a quick + [noun phrase]",["Let's go around the room real quick","Quick introductions before we start"]],
  ["Welcome aboard, great to have you on the team",[1,1,1,.2,1,.3,.3,.3,1],"ˈwɛlkəm əˈbɔːrd ɡreɪt tə hæv juː ɒn ðə tiːm","Welcoming a new team member","欢迎加入团队","WELCOME, ABOARD, GREAT, HAVE, TEAM — five beats","Don't say 'We announce your addition to our organization'","Welcome aboard, great to + [verb phrase]",["Welcome to the team, glad to have you","So glad you're joining us"]],
  ["Long time no see, how have you been?",[1,1,.3,1,1,.3,.3,1],"lɒŋ taɪm noʊ siː haʊ hæv juː biːn","Reuniting after a long time","好久不见，过得怎样？","LONG, TIME, SEE, HOW, BEEN — punchy rhythm","Don't say 'It has been a long duration since our encounter'","Long time no see, how have you + [pp]?",["It's been ages! How are you?","Where have you been hiding?"]],
  ["Shall we wait for {N} or dive right in?",[.3,.3,1,.3,1,.3,1,1,.3],"ʃæl wi weɪt fɔːr {N} ɔːr daɪv raɪt ɪn","Asking whether to wait or start","我们等{N}还是先开始？","WAIT, {N}, DIVE, RIGHT — alternating stress","Don't say 'Should we delay or begin without {N}?'","Shall we + [verb] or + [verb phrase]?",["Should we hold for {N} or get going?","Want to wait or should we start?"]],
  ["I've heard so much about you from {N}",[.2,1,.3,1,.3,.3,.3,1],"aɪv hɜːrd soʊ mʌtʃ əˈbaʊt juː frɒm {N}","Complimenting through a mutual connection","从{N}那里听过很多关于你的事","HEARD, MUCH, YOU, {N} — four anchors","Don't say '{N} told me many information about you'","I've heard so much about you from + [name]",["{N} speaks very highly of you","{N} has told me great things about you"]],
  ["Just a heads up, I have a hard stop at three",[.3,.3,.3,1,.2,.3,.3,1,1,.3,1],"dʒʌst ə hɛdz ʌp aɪ hæv ə hɑːrd stɒp æt θriː","Warning about time limit","提前说一下，三点我必须走","HEADS UP, HARD STOP, THREE — three clusters","Don't say 'Please be aware I need to leave at three'","Just a heads up, I have a hard stop at + [time]",["Quick heads up, I need to drop at three","FYI I've got a hard stop in an hour"]],
  ["I don't think we've been introduced yet",[.2,.3,1,.3,.3,1,1],"aɪ doʊnt θɪŋk wiːv biːn ˌɪntrəˈdjuːst jɛt","Initiating an introduction","我们好像还没正式介绍过","THINK, INTRODUCED, YET carry the sentence","Don't say 'I don't know who you are'","I don't think we've + [pp] + yet",["I don't believe we've met yet","We haven't been properly introduced"]],
],
negotiations: [
  ["What would it take to close this today?",[1,.3,.3,1,.3,1,1],"wɒt wʊd ɪt teɪk tə kloʊz ðɪs təˈdeɪ","Asking what's needed to finalize","今天要达成协议需要什么？","WHAT, TAKE, CLOSE, TODAY — four punches","Don't say 'What conditions must be met?'","What would it take to + [verb] + this?",["What do we need to wrap this up?","How do we get this across the finish line?"]],
  ["I think there's room to be flexible here",[.2,1,.3,1,.3,.3,1,1],"aɪ θɪŋk ðɛrz ruːm tə biː ˈflɛksɪbəl hɪr","Signaling willingness to negotiate","我觉得还有商量的余地","THINK, ROOM, FLEXIBLE, HERE — hint at openness","Don't say 'Some adjustments can be made'","I think there's room to + [verb phrase]",["There's definitely some wiggle room","We can probably find middle ground"]],
  ["Let's not leave money on the table",[.3,1,1,1,.3,.3,1],"lɛts nɒt liːv ˈmʌni ɒn ðə ˈteɪbəl","Don't waste a valuable opportunity","我们别白白浪费机会","NOT, LEAVE, MONEY, TABLE — four heavy beats","Don't say 'We should not waste potential profit'","Let's not + [verb] + [noun] + on the table",["We're leaving value on the table","Don't walk away from this opportunity"]],
  ["That's a dealbreaker for us, I'm afraid",[1,.3,1,.3,.3,.2,1],"ðæts ə ˈdiːlbreɪkər fɔːr ʌs aɪm əˈfreɪd","Firmly stating something is unacceptable","恐怕这对我们是无法接受的","DEALBREAKER and AFRAID are the power words","Don't say 'This condition is not acceptable'","That's a dealbreaker for us, + [softener]",["That's a non-starter","That's where we draw the line"]],
  ["We can meet you halfway on that",[.2,.3,1,.3,1,.3,1],"wi kæn miːt juː ˈhæfweɪ ɒn ðæt","Offering a compromise","在这点上我们可以各退一步","MEET, HALFWAY, THAT — three beats","Don't say 'We accept fifty percent of your demand'","We can meet you halfway on + [topic]",["Let's split the difference","How about we meet in the middle?"]],
  ["I need to run this by {N} before committing",[.2,1,.3,1,.3,.3,1,.3,1],"aɪ niːd tə rʌn ðɪs baɪ {N} bɪˈfɔːr kəˈmɪtɪŋ","Needing approval first","在承诺之前我需要跟{N}确认","NEED, RUN, {N}, COMMITTING — escalating stress","Don't say 'I must ask my supervisor for permission'","I need to run this by + [name] + before + [verb]ing",["Let me check with {N} first","I'll need to loop in {N} on this"]],
  ["What's your best and final offer?",[1,.3,1,.3,1,1],"wɒts jɔːr bɛst ænd ˈfaɪnəl ˈɒfər","Pressing for their absolute best terms","你们的最终报价是多少？","WHAT'S, BEST, FINAL, OFFER — four punches","Don't say 'Tell me the maximum you will provide'","What's your + [adj] + and + [adj] + offer?",["Is that the best you can do?","Where's your floor on this?"]],
  ["We've been going back and forth on this",[.3,.3,1,1,.3,1,.3,1],"wiːv biːn ˈɡoʊɪŋ bæk ænd fɔːrθ ɒn ðɪs","Acknowledging stalled negotiations","这个问题我们一直在反复讨论","GOING, BACK, FORTH, THIS — steady beat","Don't say 'We have exchanged opposing viewpoints'","We've been + [verb]ing + back and forth on + [topic]",["We keep circling back to the same point","We seem stuck on this issue"]],
  ["Let's put that on ice and come back to it",[.3,1,1,.3,1,.3,1,1,.3,.3],"lɛts pʊt ðæt ɒn aɪs ænd kʌm bæk tə ɪt","Pause a topic and revisit later","我们先搁置这个问题，回头再议","PUT, ICE, COME, BACK — action verbs carry it","Don't say 'Let us suspend discussion of this point'","Let's put that on ice and + [verb phrase]",["Let's table that for now","We can circle back to that"]],
  ["I think we're closer than we think",[.2,1,.3,1,.3,.3,1],"aɪ θɪŋk wɪr ˈkloʊsər ðæn wi θɪŋk","Suggesting agreement is near","我觉得我们比想象中更接近共识了","THINK, CLOSER, THINK — mirror structure","Don't say 'The gap is smaller than perceived'","I think we're + [comparative] + than we think",["We're not that far apart actually","We're almost there"]],
  ["We need to sweeten the deal a bit",[.2,1,.3,1,.3,1,.3,1],"wi niːd tə ˈswiːtən ðə diːl ə bɪt","The offer needs to be more attractive","我们需要把条件再改善一下","NEED, SWEETEN, DEAL, BIT — builds and softens","Don't say 'Additional beneficial terms are required'","We need to + [verb] + the deal + a bit",["Let's throw in something extra","The deal needs a little more juice"]],
  ["I appreciate you bringing that to the table",[.2,1,.3,1,1,.3,.3,1],"aɪ əˈpriːʃieɪt juː ˈbrɪŋɪŋ ðæt tə ðə ˈteɪbəl","Thanking someone for raising a point","感谢你提出这个议题","APPRECIATE, BRINGING, TABLE — three peaks","Don't say 'Thank you for mentioning that topic'","I appreciate you + [verb]ing + [noun phrase]",["Thanks for putting that out there","Good point bringing that up"]],
  ["This is non-negotiable on our end",[1,.3,1,.3,.3,.3,1],"ðɪs ɪz ˌnɒnnɪˈɡoʊʃiəbəl ɒn aʊər ɛnd","Stating a firm boundary","这一点在我们这边是不可谈判的","THIS, NON-NEGOTIABLE, END — firm and final","Don't say 'This matter cannot be discussed'","This is non-negotiable on + [possessive] + end",["We can't budge on this one","This is a hard line for us"]],
  ["If we can lock in the price, we have a deal",[.3,.3,.3,1,1,.3,1,.3,.3,.3,1],"ɪf wi kæn lɒk ɪn ðə praɪs wi hæv ə diːl","Conditional agreement","如果价格能确定下来，我们就成交","LOCK, PRICE, HAVE, DEAL — conditional rhythm","Don't say 'Provided the cost is fixed, agreement is possible'","If we can lock in + [noun], we have a deal",["Lock in this number and we're good","Finalize the terms and it's a go"]],
],
leadership: [
  ["I need everyone to step up on this one",[.2,1,1,.3,1,1,.3,1],"aɪ niːd ˈɛvriˌwʌn tə stɛp ʌp ɒn ðɪs wʌn","Asking the team for extra effort","这次需要每个人都站出来","NEED, EVERYONE, STEP UP, THIS — strong leadership","Don't say 'All personnel must increase effort levels'","I need everyone to + [verb phrase]",["Everyone needs to bring their A game","This one needs all hands on deck"]],
  ["The buck stops with me on this",[.3,1,1,.3,1,.3,1],"ðə bʌk stɒps wɪð miː ɒn ðɪs","Taking full responsibility","这件事最终由我负责","BUCK, STOPS, ME, THIS — four short punches","Don't say 'I bear final accountability'","The buck stops with + [pronoun]",["I'll take full ownership","This one's on me"]],
  ["Let's set the bar high and see what happens",[.3,1,.3,1,1,.3,1,.3,1],"lɛts sɛt ðə bɑːr haɪ ænd siː wɒt ˈhæpənz","Encouraging ambitious goals","让我们把标准定高一点","SET, BAR, HIGH, SEE, HAPPENS — energetic cascade","Don't say 'We should establish elevated standards'","Let's set the bar + [adj] + and see what happens",["Let's aim high and adjust","Shoot for the moon on this one"]],
  ["We're not going to sugarcoat this",[.3,.3,1,.3,.3,1,1],"wɪr nɒt ˈɡoʊɪŋ tə ˈʃʊɡərkoʊt ðɪs","Being direct about a difficult situation","我们不会粉饰这件事","GOING, SUGARCOAT, THIS — honest rhythm","Don't say 'We will not embellish the truth'","We're not going to + [verb] + this",["Let me be straight with you","No sugarcoating, here's the deal"]],
  ["I've got your back no matter what",[.2,1,.3,1,.3,1,1],"aɪv ɡɒt jɔːr bæk noʊ ˈmætər wɒt","Promising unconditional support","无论如何我都支持你","GOT, BACK, MATTER, WHAT — loyal and firm","Don't say 'I will provide support regardless'","I've got your back + [condition]",["I'm here for you whatever happens","You can count on me through this"]],
  ["{N}, I'm putting you in charge of this",[1,.2,1,.3,.3,1,1,.3,1],"{N} aɪm ˈpʊtɪŋ juː ɪn tʃɑːrdʒ əv ðɪs","Delegating ownership","把这件事交给{N}负责","{N}, PUTTING, CHARGE, THIS — clear delegation","Don't say '{N}, you are assigned responsibility'","[name], I'm putting you in charge of + [topic]",["{N}, this one's yours","{N}, you're taking point on this"]],
  ["The vision is clear, now we execute",[.3,1,.3,1,1,.3,1],"ðə ˈvɪʒən ɪz klɪr naʊ wi ˈɛksɪkjuːt","Transitioning from planning to action","目标明确，现在开始执行","VISION, CLEAR, NOW, EXECUTE — decisive shift","Don't say 'Implementation begins now'","The + [noun] + is clear, now we + [verb]",["We know where we're going, time to move","Strategy is set, let's make it happen"]],
  ["I trust your judgment on this completely",[.2,1,.3,1,.3,1,1],"aɪ trʌst jɔːr ˈdʒʌdʒmənt ɒn ðɪs kəmˈpliːtli","Expressing full confidence","这件事我完全相信你的判断","TRUST, JUDGMENT, THIS, COMPLETELY — builds conviction","Don't say 'I have confidence in your ability'","I trust your + [noun] + on this + [adverb]",["I have full faith in your call","Your judgment is what I'm going with"]],
  ["I believe in this team more than you know",[.2,1,.3,1,1,1,.3,.3,1],"aɪ bɪˈliːv ɪn ðɪs tiːm mɔːr ðæn juː noʊ","Deep confidence in the team","我对团队的信心超出你们想象","BELIEVE, THIS, TEAM, MORE, KNOW — emotional cascade","Don't say 'I have significant confidence in the group'","I believe in this + [noun] + more than you know",["This team is capable of amazing things","You're better than you think"]],
  ["Let's lead by example on this one",[.3,1,.3,1,.3,1,1],"lɛts liːd baɪ ɪɡˈzæmpəl ɒn ðɪs wʌn","Committing to model behavior","这次让我们以身作则","LEAD, EXAMPLE, THIS ONE — three beats","Don't say 'We should demonstrate ideal behavior'","Let's lead by + [noun]",["Actions speak louder than words here","Let's walk the talk"]],
  ["We need to have a difficult conversation",[.2,1,.3,1,.3,1,1],"wi niːd tə hæv ə ˈdɪfɪkəlt ˌkɒnvərˈseɪʃən","Signaling a tough discussion","我们需要进行一次困难的对话","NEED, HAVE, DIFFICULT, CONVERSATION — builds tension","Don't say 'We must discuss an unpleasant topic'","We need to have a + [adj] + conversation",["There's something we need to talk about","This won't be easy to discuss"]],
  ["I want to hear from everyone in the room",[.2,1,.3,1,.3,1,.3,.3,1],"aɪ wɒnt tə hɪr frɒm ˈɛvriˌwʌn ɪn ðə ruːm","Inclusive leadership","我想听听每个人的意见","WANT, HEAR, EVERYONE, ROOM — inclusive rhythm","Don't say 'Each person should contribute their opinion'","I want to hear from + [group]",["Don't hold back, I want all perspectives","Everyone's input matters here"]],
],
tech: [
  ["We need to ship this by {T}",[.2,1,.3,1,1,.3,1],"wi niːd tə ʃɪp ðɪs baɪ {T}","Setting a deadline","我们需要在{T}之前发布","NEED, SHIP, THIS, {T} — four beats","Don't say 'The release must occur before {T}'","We need to ship + [thing] + by + [time]",["This needs to go live by {T}","The deadline is {T}, no exceptions"]],
  ["Let's not over-engineer this",[.3,1,.3,1,1],"lɛts nɒt ˌoʊvərˈɛndʒɪnɪr ðɪs","Warning against complexity","别把这个搞太复杂","NOT, OVER-ENGINEER, THIS — strong caution","Don't say 'Avoid excessive complexity in design'","Let's not + [verb] + this",["Keep it simple, iterate later","Simple first, optimize later"]],
  ["We should probably do a code review on that",[.2,1,1,1,.3,.3,1,1,.3,1],"wi ʃʊd ˈprɒbəbli duː ə koʊd rɪˈvjuː ɒn ðæt","Suggesting code quality check","我们可能应该做下代码审查","SHOULD, PROBABLY, CODE, REVIEW, THAT — gentle suggestion","Don't say 'It would be advisable to examine the programming'","We should probably + [verb phrase]",["Let's get another pair of eyes on this","Has anyone reviewed this PR yet?"]],
  ["Let's spin up a quick prototype and test it",[.3,1,1,.3,1,1,.3,1,.3],"lɛts spɪn ʌp ə kwɪk ˈproʊtətaɪp ænd tɛst ɪt","Building a fast proof of concept","我们快速做个原型测试一下","SPIN UP, QUICK, PROTOTYPE, TEST — action-oriented","Don't say 'Create an experimental version for evaluation'","Let's spin up a + [adj] + [noun] + and + [verb] + it",["Let's hack something together","Build fast, test fast, iterate fast"]],
  ["The API is throwing {#} errors an hour",[.3,1,.3,1,1,1,.3,1],"ðə ˌeɪpiːˈaɪ ɪz ˈθroʊɪŋ {#} ˈɛrərz ən aʊər","Reporting a technical issue","API每小时出现{#}个错误","API, THROWING, {#}, ERRORS, HOUR — urgent metrics","Don't say 'The interface is experiencing frequent failures'","The + [system] + is throwing + [number] + errors",["We're seeing a spike in error rates","Error rate just jumped"]],
  ["We're going to need to refactor the whole thing",[.3,1,.3,1,.3,1,.3,1,1],"wɪr ˈɡoʊɪŋ tə niːd tə ˈriːfæktər ðə hoʊl θɪŋ","Admitting a major rewrite is needed","我们需要重构整个模块","GOING, NEED, REFACTOR, WHOLE, THING — heavy inevitability","Don't say 'Complete restructuring is required'","We're going to need to + [verb] + the whole thing",["This needs a complete overhaul","Time to tear this down and rebuild"]],
  ["Can we get this behind a feature flag?",[.3,.3,1,1,.3,.3,1,1],"kæn wi ɡɛt ðɪs bɪˈhaɪnd ə ˈfiːtʃər flæɡ","Making a change toggleable","能不能放到功能开关后面？","GET, THIS, FEATURE, FLAG — progressive stress","Don't say 'Implement a toggle mechanism'","Can we get this behind a + [noun]?",["Let's feature-flag this before shipping","Put it behind a flag for rollback safety"]],
  ["The bottleneck is in the database layer",[.3,1,.3,.3,.3,1,1],"ðə ˈbɒtlnɛk ɪz ɪn ðə ˈdeɪtəbeɪs ˈleɪər","Identifying performance problems","瓶颈在数据库层","BOTTLENECK, DATABASE, LAYER — diagnostic precision","Don't say 'The limitation originates from data storage'","The bottleneck is in the + [component]",["The database is our chokepoint","We're hitting a wall in the data layer"]],
  ["We just pushed a hotfix to production",[.2,.3,1,.3,1,.3,1],"wi dʒʌst pʊʃt ə ˈhɒtfɪks tə prəˈdʌkʃən","Announcing an emergency fix deployed","我们刚推了个热修复到生产环境","PUSHED, HOTFIX, PRODUCTION — urgent action complete","Don't say 'An emergency correction was deployed'","We just pushed a + [noun] + to production",["Hotfix is live, monitoring now","Emergency patch just went out"]],
  ["Let's dogfood this before we ship it",[.3,1,1,.3,.3,1,.3],"lɛts ˈdɒɡfuːd ðɪs bɪˈfɔːr wi ʃɪp ɪt","Use your own product before releasing","发布之前自己先用用看","DOGFOOD, THIS, SHIP — use-then-ship rhythm","Don't say 'We should use our product internally'","Let's + [verb] + this before we + [verb] + it",["We should eat our own cooking","Let's be our own first users"]],
  ["{N}, can you take a look at this bug?",[1,.3,.3,1,.3,1,.3,1,1],"{N} kæn juː teɪk ə lʊk æt ðɪs bʌɡ","Asking someone to investigate an issue","{N}，你能看看这个bug吗？","{N}, TAKE, LOOK, THIS, BUG — cascading","Don't say '{N}, please investigate this defect'","[name], can you take a look at + [noun]?",["{N}, mind checking this issue?","{N}, got a sec to debug this?"]],
  ["Is this going to scale or are we building tech debt?",[.3,1,1,.3,1,.3,.3,.3,1,1,1],"ɪz ðɪs ˈɡoʊɪŋ tə skeɪl ɔːr ɑːr wi ˈbɪldɪŋ tɛk dɛt","Questioning sustainability","能扩展还是在制造技术债？","GOING, SCALE, BUILDING, TECH, DEBT — two contrasting clusters","Don't say 'Will this accommodate growth?'","Is this going to + [verb] + or are we + [verb]ing?",["Will this hold up at scale?","Is this a quick fix or a real solution?"]],
],
sales: [
  ["I'd love to walk you through a quick demo",[.2,1,.3,1,.3,1,.3,1,1],"aɪd lʌv tə wɔːk juː θruː ə kwɪk ˈdɛmoʊ","Offering a product demonstration","我很乐意给你做个简短的演示","LOVE, WALK, THROUGH, QUICK, DEMO — builds excitement","Don't say 'I would like to show you a demonstration'","I'd love to walk you through a + [adj] + [noun]",["Can I show you something really cool?","Want to see this in action?"]],
  ["What's keeping you up at night right now?",[1,1,.3,1,.3,1,1,1],"wɒts ˈkiːpɪŋ juː ʌp æt naɪt raɪt naʊ","Asking about biggest pain point","你现在最头疼什么？","WHAT'S, KEEPING, UP, NIGHT, RIGHT, NOW — six punches","Don't say 'What is your primary concern?'","What's keeping you up at night + [time]?",["What's your biggest headache right now?","Where's the pain in your workflow?"]],
  ["This basically pays for itself in the first month",[1,1,1,.3,1,.3,.3,1,1],"ðɪs ˈbeɪsɪkli peɪz fɔːr ɪtˈsɛlf ɪn ðə fɜːrst mʌnθ","ROI is immediate","这第一个月就能回本","BASICALLY, PAYS, ITSELF, FIRST, MONTH — cascading","Don't say 'Return on investment is achieved in thirty days'","This pays for itself in the + [time period]",["You'll see ROI in week one","The product pays for itself almost immediately"]],
  ["I don't want to waste your time, so let me be direct",[.2,.3,1,.3,1,.3,1,.3,.3,.3,1],"aɪ doʊnt wɒnt tə weɪst jɔːr taɪm soʊ lɛt mi biː dəˈrɛkt","Respecting time while being upfront","我不想浪费你时间，直说吧","WANT, WASTE, TIME, DIRECT — honest and punchy","Don't say 'I will try to be concise to save time'","I don't want to waste your time, so + [verb phrase]",["I'll cut right to the chase","Let me get straight to the point"]],
  ["Who else is involved in this decision?",[1,.3,.3,1,.3,1,1],"huː ɛls ɪz ɪnˈvɒlvd ɪn ðɪs dɪˈsɪʒən","Identifying other stakeholders","还有谁参与这个决策？","WHO, ELSE, INVOLVED, DECISION — four key words","Don't say 'Are there additional people in the process?'","Who else is involved in + [noun]?",["Who's the final decision maker?","Walk me through your buying process"]],
  ["We've seen companies get {#} percent lift",[.3,1,1,.3,1,1,1],"wiːv siːn ˈkʌmpəniz ɡɛt {#} pərˈsɛnt lɪft","Using social proof with metrics","我们看到公司实现了{#}%的提升","SEEN, COMPANIES, {#}, PERCENT, LIFT — data-driven","Don't say 'Other organizations experienced positive results'","We've seen companies get + [number] + percent lift",["Our clients typically see {#} percent gains","The numbers speak for themselves"]],
  ["Would it help if I put together a proposal?",[.3,.3,1,.3,.2,1,1,.3,1],"wʊd ɪt hɛlp ɪf aɪ pʊt təˈɡɛðər ə prəˈpoʊzəl","Offering to formalize the next step","如果我整理一份方案会有帮助吗？","HELP, PUT, TOGETHER, PROPOSAL — proactive","Don't say 'Shall I prepare a formal document?'","Would it help if I + [verb phrase]?",["Want me to draft something up?","I can have a proposal to you by tomorrow"]],
  ["I know budget is tight, let's make this work",[.2,1,1,.3,1,.3,1,1,1],"aɪ noʊ ˈbʌdʒɪt ɪz taɪt lɛts meɪk ðɪs wɜːrk","Acknowledging cost concerns","我知道预算紧张，来想想办法","KNOW, BUDGET, TIGHT, MAKE, THIS, WORK — empathetic","Don't say 'I understand financial limitations'","I know + [noun] + is tight, let's make this work",["Let's find something that fits your budget","We can get creative with pricing"]],
  ["The clock is ticking on this offer",[.3,1,.3,1,.3,1,1],"ðə klɒk ɪz ˈtɪkɪŋ ɒn ðɪs ˈɒfər","Creating urgency","这个优惠是有时限的","CLOCK, TICKING, THIS, OFFER — urgency rhythm","Don't say 'The promotional pricing will expire soon'","The clock is ticking on + [noun]",["This pricing won't last forever","The window is closing on this deal"]],
  ["Let me show you what this can do for your {D}",[.3,.3,1,.3,1,1,.3,.3,.3,1],"lɛt mi ʃoʊ juː wɒt ðɪs kæn duː fɔːr jɔːr {D}","Transitioning to a product demo","让我展示一下能为你的{D}做什么","SHOW, WHAT, DO, {D} — persuasive build","Don't say 'I will demonstrate our capabilities'","Let me show you what + [noun] + can do for + [audience]",["Watch what happens when you use this","Here's where it really shines"]],
],
conflict: [
  ["I think there's been a misunderstanding here",[.2,1,.3,1,.3,1,1],"aɪ θɪŋk ðɛrz biːn ə ˌmɪsʌndərˈstændɪŋ hɪr","Suggesting confusion, not blame","我觉得这里有个误会","THINK, BEEN, MISUNDERSTANDING, HERE — diplomatic","Don't say 'You have made an error'","I think there's been a + [noun]",["I don't think we're on the same page","There seems to be some confusion"]],
  ["Let's take a step back and look at the big picture",[.3,1,.3,1,1,.3,1,.3,.3,1,1],"lɛts teɪk ə stɛp bæk ænd lʊk æt ðə bɪɡ ˈpɪktʃər","Defusing tension by zooming out","让我们退一步看看整体","TAKE, STEP, BACK, LOOK, BIG, PICTURE — measured retreat","Don't say 'Consider the broader perspective'","Let's take a step back and + [verb phrase]",["Let's zoom out for a second","Let's not lose the bigger picture"]],
  ["This isn't personal, it's about the work",[1,.3,1,.3,.3,.3,1],"ðɪs ˈɪzənt ˈpɜːrsənəl ɪts əˈbaʊt ðə wɜːrk","Separating emotional from professional","这不是针对个人，是关于工作","ISN'T, PERSONAL, ABOUT, WORK — clear separation","Don't say 'Criticism is directed at the task not you'","This isn't + [adj], it's about + [noun]",["It's not about you, it's about the process","Let's keep this professional"]],
  ["Can we agree to disagree on this point?",[.3,.3,1,.3,1,.3,1,1],"kæn wi əˈɡriː tə ˌdɪsəˈɡriː ɒn ðɪs pɔɪnt","Accepting you won't resolve a difference","这点可以各自保留意见吗？","AGREE, DISAGREE, THIS, POINT — balanced opposition","Don't say 'Shall we accept our views differ?'","Can we agree to + [verb] + on this?",["Let's table this disagreement for now","We don't have to see eye to eye"]],
  ["I feel like we're going in circles here",[.2,1,.3,.3,1,.3,1,1],"aɪ fiːl laɪk wɪr ˈɡoʊɪŋ ɪn ˈsɜːrkəlz hɪr","Discussion is unproductive","我觉得我们在兜圈子","FEEL, GOING, CIRCLES, HERE — circular frustration","Don't say 'Our discussion is repetitive'","I feel like we're + [verb]ing + in circles",["We keep coming back to the same argument","Let's try a different approach"]],
  ["Let's not point fingers and focus on the fix",[.3,1,1,1,.3,1,.3,.3,1],"lɛts nɒt pɔɪnt ˈfɪŋɡərz ænd ˈfoʊkəs ɒn ðə fɪks","Redirect from blame to problem-solving","别互相指责，专注于解决方案","NOT, POINT, FINGERS, FOCUS, FIX — blame→action","Don't say 'We should not assign blame'","Let's not + [verb phrase] + and focus on + [noun]",["Blame won't fix this, let's move forward","Less finger-pointing, more problem-solving"]],
  ["I hear what you're saying, and I want to address that",[.2,1,.3,.3,1,.3,.2,1,.3,1,1],"aɪ hɪr wɒt jʊr ˈseɪɪŋ ænd aɪ wɒnt tə əˈdrɛs ðæt","Validating before responding","我听到你说的了，我想回应一下","HEAR, SAYING, WANT, ADDRESS, THAT — empathetic then active","Don't say 'I acknowledge your perspective'","I hear what you're saying, and I want to + [verb]",["That's a fair point, let me respond","I understand your concern"]],
  ["I owe you an apology for how that went down",[.2,1,.3,.3,1,.3,1,.3,1,1],"aɪ oʊ juː ən əˈpɒlədʒi fɔːr haʊ ðæt wɛnt daʊn","Taking ownership and apologizing","关于那件事的处理方式，我欠你个道歉","OWE, APOLOGY, HOW, WENT, DOWN — humble and direct","Don't say 'I wish to express regret for the outcome'","I owe you an apology for + [noun phrase]",["I'm sorry about how I handled that","That was on me, and I apologize"]],
  ["What would you need to feel good about this?",[1,.3,.3,1,.3,1,1,.3,1],"wɒt wʊd juː niːd tə fiːl ɡʊd əˈbaʊt ðɪs","Seeking what would resolve someone's objection","你需要什么才能对此满意？","WHAT, NEED, FEEL, GOOD, THIS — solution-seeking","Don't say 'What conditions make this acceptable?'","What would you need to feel + [adj] + about this?",["What would make this work for you?","Help me understand what you need"]],
  ["I respect your position but I see it differently",[.2,1,.3,1,.3,.2,1,.3,1],"aɪ rɪˈspɛkt jɔːr pəˈzɪʃən bʌt aɪ siː ɪt ˈdɪfrəntli","Disagreeing respectfully","我尊重你的立场，但我看法不同","RESPECT, POSITION, SEE, DIFFERENTLY — balanced contrast","Don't say 'My opinion differs from yours'","I respect your + [noun] + but I see it + [adverb]",["Fair point, but here's another angle","I hear you, but I'd push back"]],
],
networking: [
  ["What brings you to this event?",[1,1,.3,.3,1,1],"wɒt brɪŋz juː tə ðɪs ɪˈvɛnt","Classic networking opener","你怎么来这个活动的？","WHAT, BRINGS, THIS, EVENT — natural curiosity","Don't say 'What is your reason for attending?'","What brings you to + [noun]?",["How'd you end up at this event?","First time here or are you a regular?"]],
  ["We should grab coffee sometime and chat",[.2,1,1,1,1,.3,1],"wi ʃʊd ɡræb ˈkɒfi ˈsʌmtaɪm ænd tʃæt","Suggesting informal follow-up","找时间喝杯咖啡聊聊","SHOULD, GRAB, COFFEE, SOMETIME, CHAT — casual","Don't say 'Would you schedule a beverage meeting?'","We should grab + [noun] + sometime",["Let's do lunch sometime","I'd love to pick your brain over coffee"]],
  ["I'd love to pick your brain about {D}",[.2,1,.3,1,.3,1,.3,1],"aɪd lʌv tə pɪk jɔːr breɪn əˈbaʊt {D}","Asking to learn from expertise","我想请教一下关于{D}的事","LOVE, PICK, BRAIN, {D} — flattering curiosity","Don't say 'I want to obtain your knowledge'","I'd love to pick your brain about + [topic]",["Can I tap into your expertise on {D}?","I'd love to hear your thoughts on {D}"]],
  ["What's the most exciting thing you're working on?",[1,.3,1,1,1,.3,1,1],"wɒts ðə moʊst ɪkˈsaɪtɪŋ θɪŋ jʊr ˈwɜːrkɪŋ ɒn","Getting someone to share their passion","你现在最兴奋的项目是什么？","WHAT'S, MOST, EXCITING, THING, WORKING — enthusiasm","Don't say 'Which project generates the most enthusiasm?'","What's the most + [adj] + thing you're + [verb]ing?",["Tell me about your latest project","What's got you fired up right now?"]],
  ["{N} mentioned you're doing amazing work in {D}",[1,1,.3,1,1,1,.3,1],"{N} ˈmɛnʃənd jʊr ˈduːɪŋ əˈmeɪzɪŋ wɜːrk ɪn {D}","Using a mutual connection","{N}说你在{D}做得很出色","{N}, MENTIONED, AMAZING, WORK, {D} — six beats","Don't say '{N} informed me of your performance'","[name] mentioned you're doing + [adj] + work in + [field]",["{N} speaks really highly of your work","I keep hearing great things from {N}"]],
  ["How did you get into this field originally?",[1,.3,.3,1,.3,1,1,1],"haʊ dɪd juː ɡɛt ˈɪntə ðɪs fiːld əˈrɪdʒɪnəli","Asking about career journey","你最初怎么进入这个领域的？","HOW, GET, INTO, FIELD, ORIGINALLY — storytelling prompt","Don't say 'What career path led to this profession?'","How did you get into + [field]?",["What's your origin story in this space?","What drew you to this industry?"]],
  ["I think there could be some real synergy between us",[.2,1,.3,.3,.3,.3,1,1,.3,1],"aɪ θɪŋk ðɛr kʊd biː sʌm rɪəl ˈsɪnərdʒi bɪˈtwiːn ʌs","Suggesting collaboration potential","我觉得我们之间有合作机会","THINK, REAL, SYNERGY, BETWEEN, US — bridging","Don't say 'Our organizations could benefit from cooperation'","I think there could be + [noun] + between us",["There's overlap between what we're doing","We should explore working together"]],
  ["Do you have a card or should I find you on LinkedIn?",[.3,.3,1,.3,1,.3,.2,1,.3,.3,1],"duː juː hæv ə kɑːrd ɔːr ʃʊd aɪ faɪnd juː ɒn ˈlɪŋkdɪn","Asking for contact details","你有名片还是我LinkedIn找你？","HAVE, CARD, SHOULD, FIND, LINKEDIN — digital age","Don't say 'May I have your contact information?'","Do you have a + [noun] + or should I find you on + [platform]?",["Let me add you on LinkedIn","What's the best way to reach you?"]],
  ["I'm always looking to connect with people in {D}",[.2,1,1,.3,1,.3,1,.3,1],"aɪm ˈɔːlweɪz ˈlʊkɪŋ tə kəˈnɛkt wɪð ˈpiːpəl ɪn {D}","Expressing genuine interest in expanding network","我一直想多认识{D}领域的人","ALWAYS, LOOKING, CONNECT, PEOPLE, {D} — genuine","Don't say 'I continuously seek to expand relationships'","I'm always looking to + [verb] + with people in + [field]",["I love meeting people in {D}","The {D} community is so interesting to me"]],
],
presentations: [
  ["Before I begin, let me give you some context",[.3,.2,1,.3,.3,1,.3,.3,1],"bɪˈfɔːr aɪ bɪˈɡɪn lɛt mi ɡɪv juː sʌm ˈkɒntɛkst","Setting up with background info","在我开始之前，提供些背景","BEGIN, GIVE, CONTEXT — three pillars","Don't say 'Prior to my commencement I provide background'","Before I begin, let me + [verb phrase]",["Quick context before I dive in","Let me set the stage real quick"]],
  ["The key takeaway here is this",[.3,1,1,1,.3,1],"ðə kiː ˈteɪkəweɪ hɪr ɪz ðɪs","Highlighting the most important point","这里最重要的一点是","KEY, TAKEAWAY, HERE, THIS — spotlight","Don't say 'The most important conclusion is'","The key takeaway is + [this]",["Here's the bottom line","If you remember one thing, make it this"]],
  ["I know this is a lot of data, so let me simplify",[.2,1,.3,.3,.3,1,1,.3,.3,.3,1],"aɪ noʊ ðɪs ɪz ə lɒt əv ˈdeɪtə soʊ lɛt mi ˈsɪmplɪfaɪ","Acknowledging complexity, offering clarity","我知道数据很多，让我简化一下","KNOW, LOT, DATA, SIMPLIFY — empathetic presenter","Don't say 'Given the volume I will reduce complexity'","I know this is a lot of + [noun], so let me + [verb]",["Let me break this down simply","Here's what matters"]],
  ["Any questions so far before I move on?",[.3,1,1,1,.3,.2,1,1],"ˈɛni ˈkwɛstʃənz soʊ fɑːr bɪˈfɔːr aɪ muːv ɒn","Checking for understanding","有什么问题吗，在我继续之前？","ANY, QUESTIONS, SO, FAR, MOVE, ON — checkpoint","Don't say 'Does anyone wish to ask before proceeding?'","Any questions so far before I + [verb phrase]?",["Everyone tracking so far?","Want me to clarify anything?"]],
  ["Let me paint a picture for you",[.3,.3,1,.3,1,.3,1],"lɛt mi peɪnt ə ˈpɪktʃər fɔːr juː","Transitioning to a vivid example","让我给你描绘一幅画面","PAINT, PICTURE, FOR, YOU — creative lead-in","Don't say 'I will provide a visual description'","Let me + [verb] + a picture for you",["Imagine this scenario","Picture this for a second"]],
  ["To wrap up, here are the three main points",[.3,1,1,.3,.3,.3,1,1,1],"tə ræp ʌp hɪr ɑːr ðə θriː meɪn pɔɪnts","Closing with a summary","总结一下，以下是三个要点","WRAP, UP, THREE, MAIN, POINTS — conclusive","Don't say 'In conclusion I reiterate three ideas'","To wrap up, here are the + [number] + main points",["Let me leave you with three thoughts","Here's the TL;DR"]],
  ["This slide really tells the story",[1,1,1,1,.3,1],"ðɪs slaɪd ˈrɪəli tɛlz ðə ˈstɔːri","Directing attention to a visual","这张幻灯片说明了一切","THIS, SLIDE, REALLY, TELLS, STORY — visual focus","Don't say 'The visual representation explains the narrative'","This + [noun] + really tells the story",["Look at what this graph is saying","The data tells a clear story here"]],
  ["Let me walk you through the numbers",[.3,.3,1,.3,1,.3,1],"lɛt mi wɔːk juː θruː ðə ˈnʌmbərz","Explaining data in detail","让我给你讲讲这些数字","WALK, THROUGH, NUMBERS — three pillars","Don't say 'I will explain the statistical data'","Let me walk you through + [noun phrase]",["Let's dive into the data","Here's what the numbers are saying"]],
  ["I want to leave you with one thought",[.2,1,.3,1,.3,.3,1,1],"aɪ wɒnt tə liːv juː wɪð wʌn θɔːt","Powerful closing statement","我想给你留下一个想法","WANT, LEAVE, ONE, THOUGHT — memorable close","Don't say 'I wish to conclude with a singular idea'","I want to leave you with + [noun phrase]",["If nothing else, remember this","Here's what I want you to take away"]],
],
meetings: [
  ["Let's stay on track and keep this tight",[.3,1,.3,1,.3,1,1],"lɛts steɪ ɒn træk ænd kiːp ðɪs taɪt","Keeping the meeting focused","我们保持专注，别跑题","STAY, TRACK, KEEP, TIGHT — discipline","Don't say 'We should maintain focus'","Let's stay on track and + [verb phrase]",["Let's keep this moving","We're getting sidetracked"]],
  ["Can someone take notes on this?",[.3,1,1,1,.3,1],"kæn ˈsʌmwʌn teɪk noʊts ɒn ðɪs","Asking for a note-taker","谁来做一下会议记录？","SOMEONE, TAKE, NOTES, THIS — delegation","Don't say 'A person should document the proceedings'","Can someone + [verb phrase] + on this?",["Who's got the notes today?","Let me capture the action items"]],
  ["Let's table that for now and come back to it",[.3,1,1,.3,1,.3,1,1,.3,.3],"lɛts ˈteɪbəl ðæt fɔːr naʊ ænd kʌm bæk tə ɪt","Deferring a topic","我们先搁置，回头再说","TABLE, THAT, NOW, COME, BACK — parking lot rhythm","Don't say 'Let us postpone this discussion topic'","Let's table that and + [verb phrase]",["We'll circle back to that later","Let's park that in the lot"]],
  ["What are the action items from this meeting?",[1,.3,.3,1,1,.3,1,1],"wɒt ɑːr ðə ˈækʃən ˈaɪtəmz frɒm ðɪs ˈmiːtɪŋ","Extracting next steps","这次会议的待办事项是什么？","WHAT, ACTION, ITEMS, THIS, MEETING — five beats","Don't say 'What are the tasks to complete after this?'","What are the action items from + [noun]?",["What are the next steps?","Let me summarize the takeaways"]],
  ["I think we're going down a rabbit hole here",[.2,1,.3,1,1,.3,1,1,1],"aɪ θɪŋk wɪr ˈɡoʊɪŋ daʊn ə ˈræbɪt hoʊl hɪr","Flagging off-topic discussion","我觉得我们跑题了","THINK, GOING, RABBIT, HOLE, HERE — humorous redirect","Don't say 'The discussion has deviated from the topic'","I think we're going down a + [noun] + here",["We're getting into the weeds","Let's not go down that path"]],
  ["Can we get alignment on this before we move forward?",[.3,.3,1,1,.3,1,.3,.3,1,1],"kæn wi ɡɛt əˈlaɪnmənt ɒn ðɪs bɪˈfɔːr wi muːv ˈfɔːrwərd","Seeking consensus","在继续之前能先达成共识吗？","GET, ALIGNMENT, THIS, MOVE, FORWARD — consensus check","Don't say 'Can we reach agreement prior to proceeding?'","Can we get alignment on + [noun] + before we + [verb]?",["Are we all on the same page?","Do we have consensus here?"]],
  ["Let's not let perfect be the enemy of good",[.3,1,.3,1,1,.3,.3,1,.3,1],"lɛts nɒt lɛt ˈpɜːrfɪkt biː ðə ˈɛnəmi əv ɡʊd","Encouraging progress over perfection","别让完美成为好的敌人","NOT, PERFECT, ENEMY, GOOD — wisdom rhythm","Don't say 'Excessive perfectionism prevents progress'","Let's not let + [adj] + be the enemy of + [adj]",["Good enough is good enough for now","Done is better than perfect"]],
  ["{N}, what's your take on this?",[1,1,.3,1,.3,1],"wɒts jɔːr teɪk ɒn ðɪs {N}","Asking for someone's opinion","{N}，你怎么看这个？","{N}, WHAT'S, TAKE, THIS — direct ask","Don't say '{N}, what is your opinion on this matter?'","[name], what's your take on + [topic]?",["{N}, how do you see this?","{N}, where do you stand on this?"]],
  ["I want to be respectful of everyone's time",[.2,1,.3,.3,1,.3,1,1],"aɪ wɒnt tə biː rɪˈspɛktfəl əv ˈɛvriˌwʌnz taɪm","Signaling time awareness","我想尊重大家的时间","WANT, RESPECTFUL, EVERYONE'S, TIME — considerate","Don't say 'I desire to not exceed the allotted duration'","I want to be respectful of + [possessive] + time",["Let's be mindful of the clock","I know we're all busy"]],
],
emails: [
  ["Just following up on my last email",[.3,1,1,.3,.3,1,1],"dʒʌst ˈfɒloʊɪŋ ʌp ɒn maɪ læst ˈiːmeɪl","Polite follow-up","跟进一下我上封邮件","FOLLOWING, UP, LAST, EMAIL — four beats","Don't say 'I am writing to inquire about my previous message'","Just following up on + [noun phrase]",["Circling back on my previous email","Wanted to bump this back to the top"]],
  ["Looping in {N} for visibility",[1,1,1,.3,1],"ˈluːpɪŋ ɪn {N} fɔːr ˌvɪzɪˈbɪlɪti","Adding someone to an email thread","加上{N}以便了解情况","LOOPING, IN, {N}, VISIBILITY — transparency","Don't say 'Adding {N} to this correspondence for awareness'","Looping in + [name] + for + [reason]",["Adding {N} to this thread","CC'ing {N} so they're in the loop"]],
  ["Per our conversation earlier today",[.3,.3,1,1,1,1],"pɜːr aʊər ˌkɒnvərˈseɪʃən ˈɜːrliər təˈdeɪ","Referencing a prior discussion","根据我们今天早些时候的谈话","PER, CONVERSATION, EARLIER, TODAY — formal reference","Don't say 'As we discussed in our previous verbal exchange'","Per our + [noun] + earlier + [time]",["As we discussed this morning","Following up on our chat earlier"]],
  ["Please find attached the report for your review",[.3,1,1,.3,1,.3,.3,1],"pliːz faɪnd əˈtætʃt ðə rɪˈpɔːrt fɔːr jɔːr rɪˈvjuː","Sending a document for review","请查收附件中的报告","FIND, ATTACHED, REPORT, REVIEW — formal email rhythm","Don't say 'I have appended the document for examination'","Please find attached + [noun] + for your review",["Here's the report for your review","Attaching the latest version for your eyes"]],
  ["I wanted to flag this before it becomes an issue",[.2,1,.3,1,1,.3,.3,1,.3,1],"aɪ ˈwɒntɪd tə flæɡ ðɪs bɪˈfɔːr ɪt bɪˈkʌmz ən ˈɪʃuː","Proactive problem-flagging","我想在问题变大之前提个醒","WANTED, FLAG, THIS, BECOMES, ISSUE — proactive","Don't say 'I wish to bring a potential problem to attention'","I wanted to flag this before + [clause]",["Heads up on a potential issue","Quick flag before this escalates"]],
  ["Happy to jump on a call if that's easier",[1,.3,1,.3,.3,1,.3,1],"ˈhæpi tə dʒʌmp ɒn ə kɔːl ɪf ðæts ˈiːziər","Offering to switch to a call","如果电话更方便的话我可以打电话","HAPPY, JUMP, CALL, EASIER — flexible","Don't say 'I am willing to have a verbal conversation'","Happy to + [verb phrase] + if that's easier",["Want to hop on a quick call?","Easier to talk this through than type it"]],
  ["Apologies for the late reply, things have been hectic",[1,.3,.3,1,1,1,.3,.3,1],"əˈpɒlədʒiz fɔːr ðə leɪt rɪˈplaɪ θɪŋz hæv biːn ˈhɛktɪk","Apologizing for delayed response","抱歉回复晚了，最近太忙","APOLOGIES, LATE, REPLY, HECTIC — honest and warm","Don't say 'I regret the tardiness of my response'","Apologies for the late + [noun], things have been + [adj]",["Sorry for the delay, been swamped","Apologies for going dark, it's been crazy"]],
  ["Could you send me a quick update by {T}?",[.3,.3,1,.3,.3,1,1,.3,1],"kʊd juː sɛnd mi ə kwɪk ʌpˈdeɪt baɪ {T}","Requesting a status update","你能在{T}之前给我个简短更新吗？","SEND, QUICK, UPDATE, {T} — polite deadline","Don't say 'Please provide information by {T}'","Could you send me a + [adj] + update by + [time]?",["Any chance you can update me by {T}?","Quick update by {T} would be great"]],
],
interviews: [
  ["Tell me about a time you had to lead through ambiguity",[1,.3,.3,.3,1,.3,.3,.3,1,1,1],"tɛl mi əˈbaʊt ə taɪm juː hæd tə liːd θruː ˌæmbɪˈɡjuːɪti","Behavioral interview question","告诉我一次你在模糊情况下领导的经历","TELL, TIME, LEAD, THROUGH, AMBIGUITY — STAR prompt","Don't say 'Describe a situation of uncertain leadership'","Tell me about a time you + [past tense verb phrase]",["Walk me through a challenging leadership moment","Give me an example of leading without clear direction"]],
  ["What would you say is your biggest strength?",[1,.3,.3,1,.3,.3,1,1],"wɒt wʊd juː seɪ ɪz jɔːr ˈbɪɡɪst strɛŋθ","Classic interview question","你认为你最大的优势是什么？","WHAT, SAY, BIGGEST, STRENGTH — four beats","Don't say 'Describe your primary professional attribute'","What would you say is your biggest + [noun]?",["What sets you apart?","What do you bring that nobody else does?"]],
  ["I'm really passionate about solving {A} problems",[.2,1,1,.3,1,1,1],"aɪm ˈrɪəli ˈpæʃənət əˈbaʊt ˈsɒlvɪŋ {A} ˈprɒbləmz","Expressing genuine enthusiasm","我真的很热衷于解决{A}的问题","REALLY, PASSIONATE, SOLVING, {A}, PROBLEMS — genuine fire","Don't say 'I have interest in addressing complex challenges'","I'm really passionate about + [verb]ing + [adj] problems",["I thrive on {A} challenges","Nothing gets me more excited than {A} problem-solving"]],
  ["Where do you see yourself in five years?",[1,.3,.3,1,1,.3,1,1],"wɛr duː juː siː jɔːrˈsɛlf ɪn faɪv jɪrz","Career trajectory question","你五年后看到自己在哪里？","WHERE, SEE, YOURSELF, FIVE, YEARS — classic","Don't say 'What is your professional plan for the future?'","Where do you see yourself in + [time]?",["What's your long-term career vision?","Where do you want to be in a few years?"]],
  ["I thrive in fast-paced, {A} environments",[.2,1,.3,1,1,1,1],"aɪ θraɪv ɪn ˈfæstpeɪst {A} ɪnˈvaɪrənmənts","Describing ideal work setting","我在快节奏、{A}的环境中表现出色","THRIVE, FAST-PACED, {A}, ENVIRONMENTS — confident","Don't say 'I perform well in energetic workplaces'","I thrive in + [adj], + [adj] + environments",["Fast-moving teams are where I do my best work","I love the energy of a {A} environment"]],
  ["Can you walk me through your thought process?",[.3,.3,1,.3,1,.3,1,1],"kæn juː wɔːk mi θruː jɔːr θɔːt ˈprɒsɛs","Asking how someone thinks","你能说说你的思考过程吗？","WALK, THROUGH, THOUGHT, PROCESS — analytical","Don't say 'Explain the reasoning behind your decision'","Can you walk me through your + [noun phrase]?",["How did you approach that problem?","Take me through your reasoning"]],
  ["What drew you to apply for this role?",[1,1,.3,.3,1,.3,1,1],"wɒt druː juː tə əˈplaɪ fɔːr ðɪs roʊl","Motivation question","是什么吸引你申请这个职位？","WHAT, DREW, APPLY, THIS, ROLE — curiosity","Don't say 'What motivated your application submission?'","What drew you to + [verb] + for this + [noun]?",["Why this role specifically?","What caught your eye about this position?"]],
  ["Do you have any questions for us?",[.3,.3,1,.3,1,.3,1],"duː juː hæv ˈɛni ˈkwɛstʃənz fɔːr ʌs","Classic interview closer","你对我们有什么问题吗？","HAVE, ANY, QUESTIONS, US — open invitation","Don't say 'Do you wish to inquire about anything?'","Do you have any questions for + [pronoun]?",["What would you like to know about us?","Anything you want to ask before we wrap up?"]],
],
feedback: [
  ["I want to give you some honest feedback",[.2,1,.3,1,.3,.3,1,1],"aɪ wɒnt tə ɡɪv juː sʌm ˈɒnɪst ˈfiːdbæk","Opening a feedback conversation","我想给你一些真诚的反馈","WANT, GIVE, HONEST, FEEDBACK — direct and warm","Don't say 'I wish to provide candid evaluation'","I want to give you some + [adj] + feedback",["Can I share some thoughts with you?","I have some feedback I think would help"]],
  ["You crushed it on that presentation",[.3,1,1,.3,1,1],"juː krʌʃt ɪt ɒn ðæt ˌprɛzənˈteɪʃən","Enthusiastic positive feedback","你那个演讲太棒了","CRUSHED, IT, THAT, PRESENTATION — celebration","Don't say 'Your presentation was of high quality'","You crushed it on + [noun phrase]",["That presentation was fire","You absolutely nailed that one"]],
  ["Here's what I'd do differently next time",[1,.3,.2,1,1,1,1],"hɪrz wɒt aɪd duː ˈdɪfrəntli nɛkst taɪm","Constructive suggestion framing","下次我会这样做不同的","HERE'S, WHAT, DIFFERENTLY, NEXT, TIME — forward-looking","Don't say 'I recommend alternative approaches going forward'","Here's what I'd do differently + [time]",["One thing I'd tweak for next time","If I could change one thing..."]],
  ["I noticed a pattern I want to flag",[.2,1,.3,1,.2,1,.3,1],"aɪ ˈnoʊtɪst ə ˈpætərn aɪ wɒnt tə flæɡ","Raising a recurring issue","我注意到一个想提醒你的模式","NOTICED, PATTERN, WANT, FLAG — observation","Don't say 'I have observed a recurring tendency'","I noticed a + [noun] + I want to flag",["There's something I keep seeing","I want to point out a trend I've noticed"]],
  ["The quality of your work has really improved",[.3,1,.3,.3,1,.3,1,1],"ðə ˈkwɒlɪti əv jɔːr wɜːrk hæz ˈrɪəli ɪmˈpruːvd","Acknowledging growth","你的工作质量真的提高了","QUALITY, WORK, REALLY, IMPROVED — recognition","Don't say 'Your performance metrics have increased'","The quality of your + [noun] + has really improved",["Your growth has been incredible to watch","You've leveled up so much"]],
  ["Can I push back on that a little bit?",[.3,.2,1,1,.3,1,.3,.3,1],"kæn aɪ pʊʃ bæk ɒn ðæt ə ˈlɪtəl bɪt","Respectfully challenging","我能稍微反驳一下吗？","PUSH, BACK, THAT, LITTLE, BIT — gentle challenge","Don't say 'May I present a counterargument?'","Can I push back on + [pronoun] + a little bit?",["Let me play devil's advocate here","I see it a bit differently"]],
  ["I appreciate you being so receptive to feedback",[.2,1,.3,1,.3,1,.3,1],"aɪ əˈpriːʃieɪt juː ˈbiːɪŋ soʊ rɪˈsɛptɪv tə ˈfiːdbæk","Thanking openness to feedback","感谢你这么乐于接受反馈","APPRECIATE, BEING, RECEPTIVE, FEEDBACK — grateful","Don't say 'Thank you for accepting criticism well'","I appreciate you being so + [adj] + to + [noun]",["Thanks for hearing me out","Your openness to feedback is awesome"]],
],
strategy: [
  ["What's our north star for this quarter?",[1,.3,1,1,.3,1,1],"wɒts aʊr nɔːrθ stɑːr fɔːr ðɪs ˈkwɔːrtər","Asking about the key strategic goal","这个季度我们的核心目标是什么？","WHAT'S, NORTH, STAR, THIS, QUARTER — five beats","Don't say 'What is the primary objective for this period?'","What's our north star for + [time]?",["What's the one thing that matters most?","What are we optimizing for?"]],
  ["We need to double down on {M}",[.2,1,.3,1,1,.3,1],"wi niːd tə ˈdʌbəl daʊn ɒn {M}","Committing resources to what works","我们需要加倍投入{M}","NEED, DOUBLE, DOWN, {M} — commitment","Don't say 'We should increase investment in this area'","We need to double down on + [metric/area]",["Let's go all in on {M}","Time to bet big on {M}"]],
  ["How does this fit into the bigger picture?",[1,.3,1,1,.3,.3,1,1],"haʊ dʌz ðɪs fɪt ˈɪntə ðə ˈbɪɡər ˈpɪktʃər","Connecting tactics to strategy","这个怎么融入大局？","HOW, FIT, BIGGER, PICTURE — zooming out","Don't say 'How does this relate to the overall strategy?'","How does this fit into + [noun phrase]?",["Where does this sit in our priorities?","How does this ladder up to the strategy?"]],
  ["We're spreading ourselves too thin",[.3,1,1,.3,1],"wɪr ˈsprɛdɪŋ aʊərˈsɛlvz tuː θɪn","Warning about doing too many things","我们铺得太开了","SPREADING, OURSELVES, TOO, THIN — stretched","Don't say 'Our resources are insufficient for all initiatives'","We're spreading ourselves too + [adj]",["We can't do everything at once","Something's got to give"]],
  ["What's the ROI on this initiative?",[1,.3,1,.3,1,1],"wɒts ðə ˌɑːroʊˈaɪ ɒn ðɪs ɪˈnɪʃətɪv","Questioning return on investment","这个项目的投资回报率是多少？","WHAT'S, ROI, THIS, INITIATIVE — four beats","Don't say 'What is the expected return on this investment?'","What's the ROI on + [noun]?",["Is this worth the investment?","What's the expected payback on this?"]],
  ["Let's play devil's advocate for a second",[.3,1,1,1,.3,.3,1],"lɛts pleɪ ˈdɛvəlz ˈædvəkət fɔːr ə ˈsɛkənd","Deliberately challenging assumptions","让我们唱个反调","PLAY, DEVIL'S, ADVOCATE, SECOND — critical thinking","Don't say 'Let us consider opposing viewpoints'","Let's play devil's advocate for + [time]",["What if we're wrong about this?","Let me poke some holes in this"]],
  ["We should sunset this project by {T}",[.2,1,1,1,1,.3,1],"wi ʃʊd ˈsʌnsɛt ðɪs ˈprɒdʒɛkt baɪ {T}","Proposing to end a project","我们应该在{T}前结束这个项目","SHOULD, SUNSET, THIS, PROJECT, {T} — decisive","Don't say 'This initiative should be terminated'","We should sunset + [noun] + by + [time]",["Time to pull the plug on this","Let's wind this down by {T}"]],
  ["What's our competitive moat here?",[1,.3,1,1,1],"wɒts aʊr kəmˈpɛtɪtɪv moʊt hɪr","Asking about defensibility","我们的竞争壁垒在哪里？","WHAT'S, COMPETITIVE, MOAT, HERE — four beats","Don't say 'What protects us from competitors?'","What's our + [adj] + moat + [location]?",["What makes us hard to copy?","Where's our unfair advantage?"]],
],
brainstorming: [
  ["No bad ideas, let's just throw things out there",[.3,1,1,.3,.3,1,1,1,1],"noʊ bæd aɪˈdɪəz lɛts dʒʌst θroʊ θɪŋz aʊt ðɛr","Encouraging free thinking","没有坏主意，我们先放开想","NO, BAD, IDEAS, THROW, THINGS, OUT, THERE — freeing","Don't say 'All contributions are valid for consideration'","No bad ideas, let's just + [verb phrase]",["Everything's on the table","Let's brainstorm wild, filter later"]],
  ["What if we flipped this completely on its head?",[1,.3,.3,1,1,1,.3,.3,1],"wɒt ɪf wi flɪpt ðɪs kəmˈpliːtli ɒn ɪts hɛd","Suggesting radical rethinking","如果我们完全反过来想呢？","WHAT, FLIPPED, COMPLETELY, HEAD — radical inversion","Don't say 'Have we considered the opposite approach?'","What if we + [past tense verb] + this completely?",["What's the opposite of what we're doing?","Let's try turning this inside out"]],
  ["That idea has legs, let's build on it",[1,1,.3,1,.3,1,1,.3,.3],"ðæt aɪˈdɪə hæz lɛɡz lɛts bɪld ɒn ɪt","Endorsing and expanding an idea","这个主意有潜力，我们展开说说","THAT, IDEA, LEGS, BUILD, ON — momentum","Don't say 'This concept has potential for development'","That idea has legs, let's + [verb] + on it",["Now we're cooking","I love where this is going, keep pulling that thread"]],
  ["Let's think outside the box on this one",[.3,1,1,.3,1,.3,1,1],"lɛts θɪŋk aʊtˈsaɪd ðə bɒks ɒn ðɪs wʌn","Encouraging creative solutions","这次让我们跳出框框来想","THINK, OUTSIDE, BOX, THIS, ONE — creative directive","Don't say 'We should consider unconventional approaches'","Let's think outside the box on + [noun]",["Time to get creative here","What would we do if there were no constraints?"]],
  ["We're overthinking this, let's just start",[.3,1,1,.3,1,1],"wɪr ˌoʊvərˈθɪŋkɪŋ ðɪs lɛts dʒʌst stɑːrt","Breaking analysis paralysis","我们想太多了，先开始干","OVERTHINKING, THIS, JUST, START — cut through","Don't say 'We are excessively deliberating'","We're overthinking this, let's just + [verb]",["Let's stop talking and start doing","Perfect is the enemy of done, just go"]],
  ["What would {N} do in this situation?",[1,.3,1,1,.3,1,1],"wɒt wʊd {N} duː ɪn ðɪs ˌsɪtʃuˈeɪʃən","Using a role model for perspective","在这种情况下{N}会怎么做？","WHAT, {N}, DO, THIS, SITUATION — perspective shift","Don't say 'How would {N} approach this problem?'","What would + [name] + do in this situation?",["How would {N} handle this?","Let's channel our inner {N}"]],
  ["I'm just spitballing here, but what about {M}?",[.2,.3,1,1,.3,1,.3,1],"aɪm dʒʌst ˈspɪtbɔːlɪŋ hɪr bʌt wɒt əˈbaʊt {M}","Tentatively suggesting an idea","我随便说说，{M}怎么样？","SPITBALLING, HERE, WHAT, ABOUT — casual pitch","Don't say 'I have an unrefined suggestion'","I'm just spitballing, but what about + [idea]?",["Just thinking out loud here","Crazy idea, but hear me out"]],
  ["Can we blue-sky this for five minutes?",[.3,.3,1,1,.3,1,1],"kæn wi ˈbluːskaɪ ðɪs fɔːr faɪv ˈmɪnɪts","Asking for unconstrained thinking time","我们能天马行空想五分钟吗？","BLUE-SKY, THIS, FIVE, MINUTES — creative license","Don't say 'May we ideate without constraints briefly?'","Can we blue-sky this for + [time]?",["Let's dream big for a few minutes","Give me five minutes of wild ideas"]],
],
reporting: [
  ["{M} is up {#} percent quarter over quarter",[1,.3,1,1,1,.3,1,1],"ɪz ʌp {#} pərˈsɛnt ˈkwɔːrtər ˈoʊvər ˈkwɔːrtər","{M} metric is growing","{M}环比增长{#}%","{M}, UP, {#}, PERCENT, QUARTER, OVER, QUARTER — data rhythm","Don't say 'The metric increased by the specified percentage'","{M} is up + [number] + percent + [comparison]",["We're seeing strong {M} gains","Solid growth on {M} this quarter"]],
  ["Let me walk you through the dashboard",[.3,.3,1,.3,1,.3,1],"lɛt mi wɔːk juː θruː ðə ˈdæʃbɔːrd","Presenting data visually","让我给你讲讲这个数据面板","WALK, THROUGH, DASHBOARD — three pillars","Don't say 'I will explain the analytics interface'","Let me walk you through + [noun]",["Here's what the dashboard is showing","Let me pull up the numbers"]],
  ["The numbers don't lie, here's what we're seeing",[.3,1,.3,1,.3,.3,.3,1],"ðə ˈnʌmbərz doʊnt laɪ hɪrz wɒt wɪr ˈsiːɪŋ","Introducing data with conviction","数据不会骗人，让我说说我们看到什么","NUMBERS, DON'T, LIE, SEEING — data conviction","Don't say 'The statistical evidence indicates the following'","The numbers don't lie, here's what + [clause]",["The data speaks for itself","Let the numbers tell the story"]],
  ["We're trending in the right direction on {M}",[.3,1,.3,.3,1,1,.3,1],"wɪr ˈtrɛndɪŋ ɪn ðə raɪt dəˈrɛkʃən ɒn {M}","Positive trend report","我们在{M}上的趋势是正确的","TRENDING, RIGHT, DIRECTION, {M} — positive momentum","Don't say 'The trajectory of this metric is favorable'","We're trending in the right direction on + [metric]",["The trend is looking good on {M}","We're moving the needle on {M}"]],
  ["I want to flag a dip in {M} this month",[.2,1,.3,1,.3,1,1,1,1],"aɪ wɒnt tə flæɡ ə dɪp ɪn {M} ðɪs mʌnθ","Reporting a negative metric","我想提醒一下这个月{M}有下降","WANT, FLAG, DIP, {M}, THIS, MONTH — alert","Don't say 'I wish to report a decrease in the metric'","I want to flag a dip in + [metric] + [time]",["We're seeing a pullback in {M}","{M} took a hit this month"]],
  ["Can I get a breakdown by {D}?",[.3,.2,1,.3,1,.3,1],"kæn aɪ ɡɛt ə ˈbreɪkdaʊn baɪ {D}","Requesting granular data","能按{D}分解一下吗？","GET, BREAKDOWN, {D} — analytical request","Don't say 'May I have data segmented by department?'","Can I get a breakdown by + [dimension]?",["Can we slice this by {D}?","What does this look like by {D}?"]],
  ["Here's the executive summary",[1,.3,1,1],"hɪrz ðə ɪɡˈzɛkjʊtɪv ˈsʌməri","Starting a high-level overview","这是摘要","HERE'S, EXECUTIVE, SUMMARY — three pillars","Don't say 'The following is a condensed overview for leadership'","Here's the + [adj] + summary",["Here's the TL;DR version","Let me give you the highlights"]],
],
delegation: [
  ["{N}, can you own this going forward?",[1,.3,.3,1,1,1,1],"{N} kæn juː oʊn ðɪs ˈɡoʊɪŋ ˈfɔːrwərd","Assigning long-term ownership","{N}，你能接管这个吗？","{N}, OWN, THIS, GOING, FORWARD — delegation","Don't say '{N}, please assume responsibility for this'","[name], can you own this + [time phrase]?",["{N}, this is yours from here","{N}, I want you to run with this"]],
  ["I need this done by {T}, is that doable?",[.2,1,1,1,.3,1,.3,1,1],"aɪ niːd ðɪs dʌn baɪ {T} ɪz ðæt ˈduːəbəl","Setting deadline with check","我需要{T}之前完成，可以吗？","NEED, THIS, DONE, {T}, DOABLE — deadline + check","Don't say 'Is it feasible to complete this by the specified date?'","I need this done by + [time], is that doable?",["Can you hit {T} on this?","Is {T} realistic for this?"]],
  ["Don't boil the ocean on this, keep it simple",[.3,1,.3,1,.3,1,.3,1,1],"doʊnt bɔɪl ðə ˈoʊʃən ɒn ðɪs kiːp ɪt ˈsɪmpəl","Warning against overcomplicating","别把这个搞太大，保持简单","BOIL, OCEAN, THIS, KEEP, SIMPLE — scope warning","Don't say 'Avoid excessive scope in this task'","Don't boil the ocean, keep it + [adj]",["Start small and expand later","Just the essentials, nothing fancy"]],
  ["Who's the right person to hand this off to?",[1,.3,1,1,.3,1,1,1,.3],"huːz ðə raɪt ˈpɜːrsən tə hænd ðɪs ɔːf tuː","Finding the best assignee","这个交给谁最合适？","WHO'S, RIGHT, PERSON, HAND, OFF — handoff","Don't say 'Who should receive responsibility for this?'","Who's the right person to + [verb phrase]?",["Who should take this over?","Let's find the right owner for this"]],
  ["I'm going to step back and let you run with it",[.2,1,.3,1,1,.3,.3,.3,1,.3,.3],"aɪm ˈɡoʊɪŋ tə stɛp bæk ænd lɛt juː rʌn wɪð ɪt","Empowering autonomy","我退后一步，让你自己来","GOING, STEP, BACK, LET, RUN — empowering","Don't say 'I will relinquish control'","I'm going to step back and let you + [verb phrase]",["You've got this, I'm hands off","Take the lead, I'll just be backup"]],
  ["Keep me posted but don't wait for my approval",[1,.3,1,.3,.3,1,.3,.3,1],"kiːp mi ˈpoʊstɪd bʌt doʊnt weɪt fɔːr maɪ əˈpruːvəl","Granting autonomy with updates","随时告知我但不用等我批准","KEEP, POSTED, DON'T, WAIT, APPROVAL — trust","Don't say 'Inform me periodically but proceed independently'","Keep me posted but don't wait for + [noun]",["Update me but you have the green light","Keep me in the loop but move fast"]],
  ["Make it your own, I trust your process",[1,.3,.3,1,.2,1,.3,1],"meɪk ɪt jɔːr oʊn aɪ trʌst jɔːr ˈprɒsɛs","Encouraging personal ownership","按你的方式来，我信任你的方法","MAKE, OWN, TRUST, PROCESS — empowering trust","Don't say 'You may implement using your preferred approach'","Make it your own, I trust your + [noun]",["Put your stamp on it","Do it your way, I'm confident in you"]],
],
mentoring: [
  ["I see a lot of potential in you, {N}",[.2,1,.3,1,.3,1,.3,1],"aɪ siː ə lɒt əv pəˈtɛnʃəl ɪn juː {N}","Encouraging growth","我看到你有很大的潜力，{N}","SEE, LOT, POTENTIAL, {N} — sincere encouragement","Don't say 'You have qualities that suggest future capability'","I see a lot of potential in + [pronoun/name]",["You've got something special","I can tell you're going places"]],
  ["Don't be afraid to fail fast and learn",[.3,1,1,.3,1,1,.3,1],"doʊnt biː əˈfreɪd tə feɪl fæst ænd lɜːrn","Encouraging experimentation","别怕快速失败和学习","AFRAID, FAIL, FAST, LEARN — growth mindset","Don't say 'You should not fear unsuccessful attempts'","Don't be afraid to + [verb] + and + [verb]",["Failure is just feedback","Every mistake is a lesson"]],
  ["Here's what I wish someone had told me earlier",[1,.3,.2,1,1,.3,.3,1,.3,1],"hɪrz wɒt aɪ wɪʃ ˈsʌmwʌn hæd toʊld mi ˈɜːrliər","Sharing hard-won wisdom","这是我希望早有人告诉我的","HERE'S, WHAT, WISH, SOMEONE, TOLD, EARLIER — reflective","Don't say 'I will share advice I needed earlier'","Here's what I wish someone had + [pp] + earlier",["Let me save you some time","Here's a lesson I learned the hard way"]],
  ["You're ready for more responsibility, {N}",[.3,1,.3,1,1,1],"jʊr ˈrɛdi fɔːr mɔːr rɪˌspɒnsəˈbɪlɪti {N}","Encouraging career growth","你已经准备好承担更多了，{N}","READY, MORE, RESPONSIBILITY, {N} — growth signal","Don't say 'Your capabilities warrant expanded duties'","You're ready for more + [noun]",["Time to level you up","I think you can handle bigger things"]],
  ["What skills do you want to develop this year?",[1,1,.3,.3,1,.3,1,1,1],"wɒt skɪlz duː juː wɒnt tə dɪˈvɛləp ðɪs jɪr","Career development question","你今年想发展什么技能？","WHAT, SKILLS, WANT, DEVELOP, THIS, YEAR — growth","Don't say 'Which competencies do you wish to improve?'","What + [noun] + do you want to develop + [time]?",["Where do you want to grow?","What's your learning goal for this year?"]],
  ["Let me share what worked for me when I was in your shoes",[.3,.3,1,.3,1,.3,.3,.3,.2,1,.3,.3,1],"lɛt mi ʃɛr wɒt wɜːrkt fɔːr mi wɛn aɪ wʌz ɪn jɔːr ʃuːz","Relating personal experience","让我分享当初我在你这个位置时什么方法管用","SHARE, WHAT, WORKED, WAS, YOUR, SHOES — empathetic","Don't say 'I will describe a prior similar experience'","Let me share what worked for me when + [clause]",["I've been where you are, here's what helped","When I was in your position, here's what I did"]],
],
celebration: [
  ["We did it! Let's take a moment to celebrate",[.3,1,1,.3,1,.3,1,.3,1],"wi dɪd ɪt lɛts teɪk ə ˈmoʊmənt tə ˈsɛlɪbreɪt","Acknowledging team success","我们做到了！让我们庆祝一下","DID, IT, TAKE, MOMENT, CELEBRATE — victory rhythm","Don't say 'The objective was achieved and we should acknowledge it'","We did it! Let's + [verb phrase]",["What an achievement!","This deserves a proper celebration"]],
  ["Huge shoutout to {N} for making this happen",[1,1,.3,1,.3,1,1,1],"hjuːdʒ ˈʃaʊtaʊt tə {N} fɔːr ˈmeɪkɪŋ ðɪs ˈhæpən","Publicly recognizing someone","特别感谢{N}让这一切发生","HUGE, SHOUTOUT, {N}, MAKING, HAPPEN — recognition","Don't say 'I wish to acknowledge {N} for their contribution'","Huge shoutout to + [name] + for + [verb]ing + this",["Round of applause for {N}","{N} absolutely crushed it"]],
  ["This is what happens when a team comes together",[1,.3,1,1,.3,.3,1,1,1],"ðɪs ɪz wɒt ˈhæpənz wɛn ə tiːm kʌmz təˈɡɛðər","Celebrating teamwork","这就是团队齐心协力的成果","THIS, WHAT, HAPPENS, TEAM, COMES, TOGETHER — unity","Don't say 'This outcome is the result of collective effort'","This is what happens when + [noun] + comes together",["Teamwork makes the dream work","We're unstoppable when we work as one"]],
  ["We hit our target {#} days ahead of schedule",[.3,1,.3,1,1,1,.3,.3,1],"wi hɪt aʊr ˈtɑːrɡɪt {#} deɪz əˈhɛd əv ˈʃɛdjuːl","Celebrating early delivery","我们提前{#}天达成目标","HIT, TARGET, {#}, DAYS, AHEAD, SCHEDULE — celebration metrics","Don't say 'The deadline was met in advance'","We hit our target + [number] + days ahead",["Ahead of schedule and under budget!","Not only did we make it, we beat it"]],
  ["I couldn't have done this without every one of you",[.2,1,.3,1,1,1,1,.3,.3,1],"aɪ ˈkʊdənt hæv dʌn ðɪs wɪðˈaʊt ˈɛvri wʌn əv juː","Expressing gratitude to the team","没有你们每个人我做不到","COULDN'T, DONE, WITHOUT, EVERY, ONE, YOU — humble leadership","Don't say 'This achievement required all personnel'","I couldn't have done this without + [group]",["This was a true team effort","Every single one of you played a part"]],
  ["Let's take a victory lap on this one",[.3,1,.3,1,1,.3,1,1],"lɛts teɪk ə ˈvɪktəri læp ɒn ðɪs wʌn","Enjoying a win before moving on","让我们在这件事上好好庆祝一下","TAKE, VICTORY, LAP, THIS, ONE — celebration","Don't say 'We should acknowledge this accomplishment'","Let's take a + [adj] + lap on this",["We earned this, let's enjoy the moment","Before we move on, let's soak this in"]],
  ["You all deserve a round of applause",[.3,1,1,.3,1,.3,1],"juː ɔːl dɪˈzɜːrv ə raʊnd əv əˈplɔːz","Group recognition","你们都值得掌声","ALL, DESERVE, ROUND, APPLAUSE — appreciation","Don't say 'Each team member merits commendation'","You all deserve + [noun phrase]",["Give yourselves a pat on the back","Take a bow, you earned it"]],
],
farewell: [
  ["It's been an absolute pleasure working with you",[.3,.3,.3,1,1,1,.3,1],"ɪts biːn ən ˈæbsəluːt ˈplɛʒər ˈwɜːrkɪŋ wɪð juː","Heartfelt farewell","和你共事真的很愉快","ABSOLUTE, PLEASURE, WORKING, YOU — warm farewell","Don't say 'Our professional collaboration was satisfactory'","It's been an absolute pleasure + [verb]ing + with you",["Working with you has been amazing","I've genuinely loved being on this team with you"]],
  ["Don't be a stranger, keep in touch",[.3,1,.3,1,1,.3,1],"doʊnt biː ə ˈstreɪndʒər kiːp ɪn tʌtʃ","Encouraging future contact","别生疏了，保持联系","STRANGER, KEEP, TOUCH — three beats","Don't say 'Please maintain contact in the future'","Don't be a stranger, + [verb phrase]",["Stay in touch, I mean it","Let's not lose touch"]],
  ["You're going to do amazing things, {N}",[.3,1,.3,1,1,1,1],"jʊr ˈɡoʊɪŋ tə duː əˈmeɪzɪŋ θɪŋz {N}","Encouraging someone leaving","你会做出了不起的事，{N}","GOING, DO, AMAZING, THINGS, {N} — inspiring send-off","Don't say 'I predict your future success'","You're going to do amazing things, + [name]",["The sky's the limit for you","You're destined for great things"]],
  ["This isn't goodbye, it's see you later",[1,.3,1,.3,1,.3,1],"ðɪs ˈɪzənt ɡʊdˈbaɪ ɪts siː juː ˈleɪtər","Reframing a farewell","这不是再见，只是后会有期","ISN'T, GOODBYE, SEE, LATER — hopeful contrast","Don't say 'This is not a permanent departure'","This isn't + [noun], it's + [noun phrase]",["I'll see you around","Until next time"]],
  ["I've learned so much from working with you",[.2,1,.3,1,.3,1,.3,1],"aɪv lɜːrnd soʊ mʌtʃ frɒm ˈwɜːrkɪŋ wɪð juː","Expressing what you gained","和你共事我学到了很多","LEARNED, MUCH, WORKING, YOU — grateful reflection","Don't say 'The experience was educational'","I've learned so much from + [verb]ing + with you",["You've taught me more than you know","Working with you made me better"]],
  ["Your next team is lucky to have you",[.3,1,1,.3,1,.3,1,1],"jɔːr nɛkst tiːm ɪz ˈlʌki tə hæv juː","Complimenting someone who's leaving","你的下一个团队很幸运","NEXT, TEAM, LUCKY, HAVE, YOU — generous praise","Don't say 'Your future colleagues will benefit from your skills'","Your next + [noun] + is lucky to have you",["They don't know how lucky they are","You're a huge asset wherever you go"]],
  ["Let's make our last {T} together count",[.3,1,.3,1,1,1,1],"lɛts meɪk aʊr læst {T} təˈɡɛðər kaʊnt","Making the most of remaining time","让我们最后在一起的{T}有意义","MAKE, LAST, {T}, TOGETHER, COUNT — meaningful","Don't say 'We should maximize our remaining time'","Let's make our last + [time] + together count",["Let's finish strong together","Let's end on a high note"]],
],
"small-talk": [
  ["How was your weekend, anything fun?",[1,.3,.3,1,1,1],"haʊ wʌz jɔːr ˈwiːkɛnd ˈɛniθɪŋ fʌn","Monday opener","你周末怎么样，有什么好玩的？","HOW, WEEKEND, ANYTHING, FUN — casual four beats","Don't say 'What recreational activities did you do?'","How was your + [time period], anything + [adj]?",["Good weekend?","Do anything exciting over the weekend?"]],
  ["Did you catch the game last night?",[.3,.3,1,.3,1,1,1],"dɪd juː kætʃ ðə ɡeɪm læst naɪt","Sports small talk","你昨晚看比赛了吗？","CATCH, GAME, LAST, NIGHT — sports rhythm","Don't say 'Did you view the athletic competition?'","Did you catch + [event] + last night?",["Did you see the game?","What did you think of the game last night?"]],
  ["The weather has been crazy lately, right?",[.3,1,.3,.3,1,1,1],"ðə ˈwɛðər hæz biːn ˈkreɪzi ˈleɪtli raɪt","Weather talk","最近天气太疯狂了对吧？","WEATHER, CRAZY, LATELY, RIGHT — safe opener","Don't say 'Recent meteorological conditions have been unusual'","The weather has been + [adj] + lately, right?",["Can you believe this weather?","What's going on with the weather?"]],
  ["Have you tried that new place on {T}?",[.3,.3,1,.3,1,1,.3,1],"hæv juː traɪd ðæt njuː pleɪs ɒn {T}","Restaurant recommendation","你试过那个新开的地方吗？","TRIED, NEW, PLACE, {T} — casual enthusiasm","Don't say 'Have you patronized the recently opened establishment?'","Have you tried + [noun] + on + [location]?",["There's this great new spot","You have to check out this place"]],
  ["I'm counting down the days to vacation",[.2,1,1,.3,1,.3,1],"aɪm ˈkaʊntɪŋ daʊn ðə deɪz tə veɪˈkeɪʃən","Vacation anticipation","我在倒数计时等假期","COUNTING, DOWN, DAYS, VACATION — anticipation","Don't say 'I eagerly await my scheduled leave'","I'm counting down the days to + [event]",["I need a break so badly","Vacation can't come soon enough"]],
  ["Anyone else need a coffee refill?",[1,1,1,.3,1,1],"ˈɛniˌwʌn ɛls niːd ə ˈkɒfi ˈriːfɪl","Break room bonding","还有人要续杯咖啡吗？","ANYONE, ELSE, NEED, COFFEE, REFILL — office rhythm","Don't say 'Does anyone require additional beverages?'","Anyone else need a + [noun] + refill?",["Coffee run, who's in?","I'm grabbing coffee, want one?"]],
  ["Can you believe it's already {T}?",[.3,.3,1,.3,1,1],"kæn juː bɪˈliːv ɪts ɔːlˈrɛdi {T}","Time-passing surprise","你能相信已经{T}了吗？","BELIEVE, ALREADY, {T} — time shock","Don't say 'It is remarkable how quickly time has passed'","Can you believe it's already + [time/event]?",["Where did the time go?","This year is flying by"]],
  ["That's such a great book, have you read it?",[1,.3,.3,1,1,.3,.3,1,1],"ðæts sʌtʃ ə ɡreɪt bʊk hæv juː rɛd ɪt","Book recommendation","那本书太棒了，你看过吗？","THAT'S, GREAT, BOOK, HAVE, READ — enthusiasm","Don't say 'I recommend that literary work'","That's such a great + [noun], have you + [pp] + it?",["You have to read this book","This book completely changed my perspective"]],
]
};

// ─── Sentence Builder ────────────────────────────────────────────
function fillSlots(text, rng) {
  return text
    .replace(/\{N\}/g, () => pick(NAMES, rng))
    .replace(/\{D\}/g, () => pick(DEPTS, rng))
    .replace(/\{M\}/g, () => pick(METRICS, rng))
    .replace(/\{T\}/g, () => pick(TIMES, rng))
    .replace(/\{A\}/g, () => pick(ADJS, rng))
    .replace(/\{#\}/g, () => pick(NUMS, rng));
}

function buildSentence(tpl, id, catKey, rng) {
  const [rawText, stress, ipa, meaning, cn, tip, trap, pattern, variants] = tpl;
  const text = fillSlots(rawText, rng);
  const words = text.split(/\s+/);
  // Adjust stress array to match words length
  const s = [];
  for (let i = 0; i < words.length; i++) s.push(stress[i] !== undefined ? stress[i] : 0.3);
  const cat = CATS[catKey];
  return {
    id, cat: cat.n, scene: cat.icon + " " + cat.n,
    text, words: words.map(w => w.replace(/[.,!?;:'"]/g, '')),
    stress: s, ipa: "/" + fillSlots(ipa, rng) + "/",
    meaning: fillSlots(meaning, rng), cn: fillSlots(cn, rng),
    trap: fillSlots(trap, rng), tip: fillSlots(tip, rng),
    pattern: fillSlots(pattern, rng),
    variants: variants.map(v => fillSlots(v, rng))
  };
}

// ─── Scene Builder ───────────────────────────────────────────────
const SCENE_TITLES = [
  "WARM UP","POWER MOVE","KEY PHRASE","RHYTHM CHECK","LEVEL UP",
  "CORE SKILL","DEEP DIVE","CHALLENGE","FLOW STATE","FINISH STRONG"
];
const SCENE_SUBS = [
  "→ Get into the groove","→ Lead with confidence","→ Master this phrase",
  "→ Feel the beat","→ Push your limits","→ Build your foundation",
  "→ Go deeper","→ Test yourself","→ Find your flow","→ End with impact"
];

function buildScenes(sentences, rng) {
  const scenes = {};
  const perScene = Math.ceil(sentences.length / 10);
  for (let i = 0; i < sentences.length; i++) {
    const si = Math.min(9, Math.floor(i / perScene));
    const s = sentences[i];
    const cat = CAT_KEYS.find(k => CATS[k].n === s.cat) || CAT_KEYS[0];
    const c = CATS[cat];
    scenes[s.id] = {
      icon: c.icon, colors: c.c,
      title: SCENE_TITLES[si], sub: SCENE_SUBS[si]
    };
  }
  return scenes;
}

// ═══════════════════════════════════════════════════════════════════
// Public API
// ═══════════════════════════════════════════════════════════════════

window.generateDay = function (dayNumber) {
  const rng = mulberry32(dayNumber * 7919 + 42);
  const baseId = 300 + (dayNumber - 11) * 30; // days 1-10 use IDs 1-300
  const sentences = [];
  // Pick 20 categories, select 1-2 templates each to get ~30
  const cats = shuffle(CAT_KEYS, rng);
  let count = 0;
  for (let round = 0; count < 30; round++) {
    for (const catKey of cats) {
      if (count >= 30) break;
      const pool = TPL[catKey];
      if (!pool || pool.length === 0) continue;
      const tplIdx = (round * 7 + hashStr(catKey) + dayNumber) % pool.length;
      const tpl = pool[Math.abs(tplIdx) % pool.length];
      sentences.push(buildSentence(tpl, baseId + count + 1, catKey, rng));
      count++;
    }
  }
  return { sentences: shuffle(sentences, rng).slice(0, 30), scenes: buildScenes(sentences, rng) };
};

// ─── Daily Challenge ─────────────────────────────────────────────
window.getDailyChallenge = function () {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const rng = mulberry32(seed);
  const allTpls = [];
  for (const k of CAT_KEYS) {
    if (TPL[k]) TPL[k].forEach(t => allTpls.push({ tpl: t, cat: k }));
  }
  const chosen = pickN(allTpls, 10, rng);
  return chosen.map((c, i) => buildSentence(c.tpl, 90000 + i, c.cat, rng));
};

// ─── Spaced Repetition Review ────────────────────────────────────
window.getReviewQueue = function (wrongIds) {
  if (!wrongIds || wrongIds.length === 0) wrongIds = [];
  const LS_KEY = 're-review-queue';
  let queue = [];
  try { queue = JSON.parse(localStorage.getItem(LS_KEY) || '[]'); } catch (e) { queue = []; }

  // Add new wrong IDs with initial interval
  const now = Date.now();
  for (const id of wrongIds) {
    if (!queue.find(q => q.id === id)) {
      queue.push({ id, interval: 1, nextReview: now, easeFactor: 2.5 });
    } else {
      const q = queue.find(x => x.id === id);
      q.interval = 1; q.nextReview = now; // Reset on wrong
    }
  }

  // Filter items due for review
  const due = queue.filter(q => q.nextReview <= now);
  try { localStorage.setItem(LS_KEY, JSON.stringify(queue)); } catch (e) {}

  // Build sentences for due items from templates
  const rng = mulberry32(now % 100000);
  const allTpls = [];
  for (const k of CAT_KEYS) {
    if (TPL[k]) TPL[k].forEach((t, i) => allTpls.push({ tpl: t, cat: k, idx: i }));
  }

  return due.slice(0, 10).map((q, i) => {
    const tplEntry = allTpls[Math.abs(q.id) % allTpls.length];
    return buildSentence(tplEntry.tpl, q.id, tplEntry.cat, rng);
  });
};

// Mark a review item as correct (increase interval)
window.markReviewCorrect = function (id) {
  const LS_KEY = 're-review-queue';
  let queue = [];
  try { queue = JSON.parse(localStorage.getItem(LS_KEY) || '[]'); } catch (e) {}
  const q = queue.find(x => x.id === id);
  if (q) {
    q.easeFactor = Math.max(1.3, q.easeFactor + 0.1);
    q.interval = Math.round(q.interval * q.easeFactor);
    q.nextReview = Date.now() + q.interval * 86400000; // interval in days
  }
  try { localStorage.setItem(LS_KEY, JSON.stringify(queue)); } catch (e) {}
};

// ─── Stats ───────────────────────────────────────────────────────
window.getStats = function () {
  let totalPracticed = 0, totalCorrect = 0, streak = 0, wordsLearned = 0;
  const catMastery = {};

  for (let d = 1; d <= 100; d++) {
    try {
      const raw = localStorage.getItem(`re-progress-day${d}`);
      if (!raw) continue;
      const p = JSON.parse(raw);
      wordsLearned += (p.learned || []).length;
      totalPracticed += (p.learned || []).length;
      if (p.quizBest) totalCorrect += Math.round(p.quiz