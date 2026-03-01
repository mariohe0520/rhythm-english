// ═══════════════════════════════════════════════════════════════════
// Rhythm English — Procedural Content Engine v3
// Generates infinite daily content from day 23+, IELTS-weighted.
// ═══════════════════════════════════════════════════════════════════
import { IELTS_CATS, IELTS_SCENE_TITLES, IELTS_TPL, IELTS_CAT_ICONS } from './ielts-generator.js';

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
const FOODS = ["sushi","pizza","pasta","ramen","tacos","curry","salad","steak","pho","dim sum","burgers","paella","dumplings","croissants"];
const PLACES = ["Paris","Tokyo","New York","Barcelona","Bali","London","Sydney","Seoul","Rome","Dubai","Iceland","Kyoto","Amsterdam","Lisbon"];
const SPORTS = ["tennis","basketball","yoga","swimming","hiking","running","cycling","surfing","climbing","boxing","pilates","golf"];
const GENRES = ["jazz","rock","pop","classical","hip-hop","indie","folk","blues","electronic","R&B","country","reggae"];

// ─── 30 Category Definitions ─────────────────────────────────────
const CATS = {
  greetings:      {n:"Greetings",        c:["#6366f1","#818cf8"], diff:1},
  negotiations:   {n:"Negotiations",     c:["#f59e0b","#fbbf24"], diff:2},
  leadership:     {n:"Leadership",       c:["#8b5cf6","#a78bfa"], diff:2},
  tech:           {n:"Tech & Product",   c:["#06b6d4","#22d3ee"], diff:2},
  sales:          {n:"Sales",            c:["#10b981","#34d399"], diff:2},
  conflict:       {n:"Conflict",         c:["#ef4444","#f87171"], diff:2},
  networking:     {n:"Networking",       c:["#f97316","#fb923c"], diff:1},
  presentations:  {n:"Presentations",    c:["#ec4899","#f472b6"], diff:2},
  meetings:       {n:"Meetings",         c:["#6366f1","#818cf8"], diff:1},
  emails:         {n:"Emails",           c:["#14b8a6","#2dd4bf"], diff:1},
  interviews:     {n:"Interviews",       c:["#f59e0b","#fbbf24"], diff:2},
  feedback:       {n:"Feedback",         c:["#10b981","#34d399"], diff:2},
  strategy:       {n:"Strategy",         c:["#6366f1","#818cf8"], diff:3},
  brainstorming:  {n:"Brainstorming",    c:["#f97316","#fb923c"], diff:2},
  reporting:      {n:"Reporting",        c:["#06b6d4","#22d3ee"], diff:2},
  delegation:     {n:"Delegation",       c:["#ef4444","#f87171"], diff:2},
  mentoring:      {n:"Mentoring",        c:["#10b981","#34d399"], diff:1},
  celebration:    {n:"Celebration",      c:["#f59e0b","#fbbf24"], diff:1},
  farewell:       {n:"Farewell",         c:["#8b5cf6","#a78bfa"], diff:1},
  "small-talk":   {n:"Small Talk",       c:["#ec4899","#f472b6"], diff:1},
  travel:         {n:"Travel",           c:["#0ea5e9","#38bdf8"], diff:1},
  food:           {n:"Food & Dining",    c:["#f97316","#fb923c"], diff:1},
  health:         {n:"Health & Wellness",c:["#22c55e","#4ade80"], diff:1},
  sports:         {n:"Sports & Fitness", c:["#3b82f6","#60a5fa"], diff:1},
  music:          {n:"Music & Film",     c:["#a855f7","#c084fc"], diff:1},
  science:        {n:"Science",          c:["#14b8a6","#2dd4bf"], diff:3},
  nature:         {n:"Nature",           c:["#16a34a","#4ade80"], diff:1},
  social:         {n:"Social Media",     c:["#e11d48","#fb7185"], diff:1},
  dating:         {n:"Relationships",    c:["#f43f5e","#fda4af"], diff:1},
  shopping:       {n:"Shopping",         c:["#d946ef","#e879f9"], diff:1},
};
// Merge IELTS template pools into existing banks
Object.assign(CATS, IELTS_CATS);
Object.assign(SCENE_TITLES, IELTS_SCENE_TITLES);
Object.assign(TPL, IELTS_TPL);
Object.assign(CAT_ICONS, IELTS_CAT_ICONS);
const CAT_KEYS = Object.keys(CATS);

// ─── Scene Title Generator ────────────────────────────────────────
const SCENE_TITLES = {
  greetings:     ["HELLO","WELCOME","HI THERE","MEET UP","WARM UP"],
  negotiations:  ["DEAL TIME","BARGAIN","OFFER","TERMS","CLOSE IT"],
  leadership:    ["LEAD ON","STEP UP","COMMAND","INSPIRE","VISION"],
  tech:          ["SHIP IT","DEBUG","BUILD","DEPLOY","SCALE UP"],
  sales:         ["PITCH","CLOSE","DEMO","CONVERT","WIN DEAL"],
  conflict:      ["RESOLVE","BRIDGE","PEACE","LISTEN","MEND IT"],
  networking:    ["CONNECT","MINGLE","LINK UP","BOND","REACH OUT"],
  presentations: ["PRESENT","SPEAK UP","ON STAGE","DELIVER","SHOW IT"],
  meetings:      ["SYNC UP","ALIGN","HUDDLE","CHECK IN","REGROUP"],
  emails:        ["SEND IT","FOLLOW UP","REPLY","DRAFT","LOOP IN"],
  interviews:    ["NAIL IT","IMPRESS","HIRE ME","TELL ME","SHINE"],
  feedback:      ["GROW","IMPROVE","LEVEL UP","REFLECT","LISTEN"],
  strategy:      ["PLAN","EXECUTE","FOCUS","DECIDE","PIVOT"],
  brainstorming: ["IDEATE","CREATE","SPARK","INVENT","DREAM BIG"],
  reporting:     ["REPORT","NUMBERS","UPDATE","RESULTS","DATA"],
  delegation:    ["ASSIGN","TRUST","HAND OFF","EMPOWER","DIVIDE"],
  mentoring:     ["MENTOR","TEACH","GUIDE","COACH","SHARE"],
  celebration:   ["CHEERS","WELL DONE","PARTY","BRAVO","WIN"],
  farewell:      ["GOODBYE","SEE YA","FAREWELL","TAKE CARE","BYE"],
  "small-talk":  ["CHAT","CATCH UP","HOW'S IT","NICE DAY","VIBES"],
  travel:        ["EXPLORE","JOURNEY","FLY OUT","ROAD TRIP","WANDER"],
  food:          ["BON APPETIT","TASTE IT","COOK UP","FLAVOR","FEAST"],
  health:        ["WELLNESS","FIT LIFE","BALANCE","HEAL","THRIVE"],
  sports:        ["GAME ON","COMPETE","TRAIN","SCORE","VICTORY"],
  music:         ["GROOVE","TUNE IN","JAM","MELODY","ENCORE"],
  science:       ["DISCOVER","RESEARCH","EUREKA","THEORY","LAB"],
  nature:        ["NATURE","WILD","GREEN","BLOOM","EXPLORE"],
  social:        ["TRENDING","POST IT","VIRAL","LIKE","SHARE IT"],
  dating:        ["SPARKS","CONNECT","DATE","CHEMISTRY","HEART"],
  shopping:      ["BUY IT","DEAL","BARGAIN","SPLURGE","SHOP"],
};

// ─── Template Sentence Pools (12+ per category) ───────────────────
// Format: [text, stress[], ipa, meaning, cn, tip, trap, pattern, [variants]]
// Slots: {N}=name {D}=dept {M}=metric {T}=time {A}=adj {#}=number {F}=food {P}=place {S}=sport {G}=genre

const TPL = {
greetings: [
  ["Good morning everyone, let's get started",[.3,1,.3,.3,1,.3,1],"ɡʊd ˈmɔːrnɪŋ ˈɛvriˌwʌn lɛts ɡɛt ˈstɑːrtɪd","Standard meeting opener","早上好各位，我们开始吧","MORNING, EVERYONE, STARTED carry the rhythm","Don't say 'Good morning to all people here'","Good morning everyone, let's + [verb]",["Good morning team, let's dive in","Good morning folks, let's kick this off"]],
  ["Thanks for jumping on so quickly",[1,.2,1,.3,.3,1],"θæŋks fɔːr ˈdʒʌmpɪŋ ɒn soʊ ˈkwɪkli","Appreciating fast response","感谢你这么快就上线了","THANKS, JUMPING, QUICKLY — three peaks","Don't say 'Thank you for connecting rapidly'","Thanks for + [verb]ing + so quickly",["Thanks for hopping on so fast","Thanks for making time on short notice"]],
  ["How's everything going on your end?",[1,1,1,.3,.3,1],"haʊz ˈɛvriθɪŋ ˈɡoʊɪŋ ɒn jɔːr ɛnd","Casual check-in","你那边一切还好吗？","HOW'S, EVERYTHING, GOING, END — stress content words","Don't say 'What is the situation in your department?'","How's everything + [verb]ing + on your end?",["How's it going on your side?","Everything good on your end?"]],
  ["Great to finally put a face to the name",[1,.3,1,.3,.3,1,.3,.3,1],"ɡreɪt tə ˈfaɪnəli pʊt ə feɪs tə ðə neɪm","Meeting in person after emails","终于能见到真人了","GREAT, FINALLY, FACE, NAME — four beats","Don't say 'It is nice to see your real face'","Great to finally + [verb phrase]",["Great to finally connect in person","Nice to put a face to the name"]],
  ["Sorry I'm a couple minutes late",[1,.2,.3,.3,1,1],"ˈsɒri aɪm ə ˈkʌpəl ˈmɪnɪts leɪt","Quick apology for lateness","抱歉我迟到了几分钟","SORRY, COUPLE MINUTES, LATE — apologize efficiently","Don't say 'I apologize for my delayed arrival'","Sorry I'm + [time] + late",["Sorry for running a bit behind","Apologies for the late start"]],
  ["Hey {N}, glad you could make it",[.3,1,1,.3,.3,1,.3],"heɪ {N} ɡlæd juː kʊd meɪk ɪt","Welcoming by name","嘿{N}，很高兴你能来","{N} and GLAD and MAKE IT are the anchors","Don't say 'Hello {N}, I am happy you attended'","Hey + [name], glad you could + [verb]",["Hey {N}, great to see you","Hey {N}, thanks for showing up"]],
  ["I hope I'm not catching you at a bad time",[.2,1,.2,.3,1,.3,.3,.3,1,1],"aɪ hoʊp aɪm nɒt ˈkætʃɪŋ juː æt ə bæd taɪm","Checking availability","希望没有打扰到你","HOPE, CATCHING, BAD, TIME — four peaks","Don't say 'I want to confirm this is convenient'","I hope I'm not + [verb]ing you at a + [adj] time",["Hope this isn't a bad time","Is now a good time to chat?"]],
  ["Let's do a quick round of introductions",[.3,1,.3,1,1,.3,1],"lɛts duː ə kwɪk raʊnd əv ˌɪntrəˈdʌkʃənz","Everyone introduce themselves","我们来快速做下自我介绍吧","DO, QUICK, ROUND, INTRODUCTIONS — stress builds","Don't say 'Everyone should say their name now'","Let's do a quick + [noun phrase]",["Let's go around the room real quick","Quick introductions before we start"]],
  ["Welcome aboard, great to have you on the team",[1,1,1,.2,1,.3,.3,.3,1],"ˈwɛlkəm əˈbɔːrd ɡreɪt tə hæv juː ɒn ðə tiːm","Welcoming a new member","欢迎加入团队","WELCOME, ABOARD, GREAT, HAVE, TEAM — five beats","Don't say 'We announce your addition to our organization'","Welcome aboard, great to + [verb phrase]",["Welcome to the team, glad to have you","So glad you're joining us"]],
  ["Long time no see, how have you been?",[1,1,.3,1,1,.3,.3,1],"lɒŋ taɪm noʊ siː haʊ hæv juː biːn","Reuniting after a long time","好久不见，过得怎样？","LONG, TIME, SEE, HOW, BEEN — punchy rhythm","Don't say 'It has been a long duration since our encounter'","Long time no see, how have you + [pp]?",["It's been ages! How are you?","Where have you been hiding?"]],
  ["Shall we wait for {N} or dive right in?",[.3,.3,1,.3,1,.3,1,1,.3],"ʃæl wi weɪt fɔːr {N} ɔːr daɪv raɪt ɪn","Asking whether to wait or start","我们等{N}还是先开始？","WAIT, {N}, DIVE, RIGHT — alternating stress","Don't say 'Should we delay or begin without {N}?'","Shall we + [verb] or + [verb phrase]?",["Should we hold for {N} or get going?","Want to wait or should we start?"]],
  ["Just a heads up, I have a hard stop at three",[.3,.3,.3,1,.2,.3,.3,1,1,.3,1],"dʒʌst ə hɛdz ʌp aɪ hæv ə hɑːrd stɒp æt θriː","Warning about time limit","提前说一下，三点我必须走","HEADS UP, HARD STOP, THREE — three clusters","Don't say 'Please be aware I need to leave at three'","Just a heads up, I have a hard stop at + [time]",["Quick heads up, I need to drop at three","FYI I've got a hard stop in an hour"]],
],
negotiations: [
  ["What would it take to close this today?",[1,.3,.3,1,.3,1,1],"wɒt wʊd ɪt teɪk tə kloʊz ðɪs təˈdeɪ","Asking what's needed to finalize","今天要达成协议需要什么？","WHAT, TAKE, CLOSE, TODAY — four punches","Don't say 'What conditions must be met?'","What would it take to + [verb] + this?",["What do we need to wrap this up?","How do we get this across the finish line?"]],
  ["I think there's room to be flexible here",[.2,1,.3,1,.3,.3,1,1],"aɪ θɪŋk ðɛrz ruːm tə biː ˈflɛksɪbəl hɪr","Signaling willingness to negotiate","我觉得还有商量的余地","THINK, ROOM, FLEXIBLE, HERE — hint at openness","Don't say 'Some adjustments can be made'","I think there's room to + [verb phrase]",["There's definitely some wiggle room","We can probably find middle ground"]],
  ["Let's not leave money on the table",[.3,1,1,1,.3,.3,1],"lɛts nɒt liːv ˈmʌni ɒn ðə ˈteɪbəl","Don't waste a valuable opportunity","我们别白白浪费机会","NOT, LEAVE, MONEY, TABLE — four heavy beats","Don't say 'We should not waste potential profit'","Let's not + [verb] + [noun] + on the table",["We're leaving value on the table","Don't walk away from this opportunity"]],
  ["That's a dealbreaker for us, I'm afraid",[1,.3,1,.3,.3,.2,1],"ðæts ə ˈdiːlbreɪkər fɔːr ʌs aɪm əˈfreɪd","Firmly stating something is unacceptable","恐怕这对我们是无法接受的","DEALBREAKER and AFRAID are the power words","Don't say 'This condition is not acceptable'","That's a dealbreaker for us, + [softener]",["That's a non-starter","That's where we draw the line"]],
  ["We can meet you halfway on that",[.2,.3,1,.3,1,.3,1],"wi kæn miːt juː ˈhæfweɪ ɒn ðæt","Offering a compromise","在这点上我们可以各退一步","MEET, HALFWAY, THAT — three beats","Don't say 'We accept fifty percent of your demand'","We can meet you halfway on + [topic]",["Let's split the difference","How about we meet in the middle?"]],
  ["I need to run this by {N} before committing",[.2,1,.3,1,.3,.3,1,.3,1],"aɪ niːd tə rʌn ðɪs baɪ {N} bɪˈfɔːr kəˈmɪtɪŋ","Needing approval first","在承诺之前我需要跟{N}确认","NEED, RUN, {N}, COMMITTING — escalating stress","Don't say 'I must ask my supervisor for permission'","I need to run this by + [name] + before + [verb]ing",["Let me check with {N} first","I'll need to loop in {N} on this"]],
  ["What's your best and final offer?",[1,.3,1,.3,1,1],"wɒts jɔːr bɛst ænd ˈfaɪnəl ˈɒfər","Pressing for absolute best terms","你们的最终报价是多少？","WHAT'S, BEST, FINAL, OFFER — four punches","Don't say 'Tell me the maximum you will provide'","What's your + [adj] + and + [adj] + offer?",["Is that the best you can do?","Where's your floor on this?"]],
  ["We've been going back and forth on this",[.3,.3,1,1,.3,1,.3,1],"wiːv biːn ˈɡoʊɪŋ bæk ænd fɔːrθ ɒn ðɪs","Stalled negotiations","这个问题我们一直在反复讨论","GOING, BACK, FORTH, THIS — steady beat","Don't say 'We have exchanged opposing viewpoints'","We've been + [verb]ing + back and forth on + [topic]",["We keep circling back to the same point","We seem stuck on this issue"]],
  ["Let's put that on ice and come back to it",[.3,1,1,.3,1,.3,1,1,.3,.3],"lɛts pʊt ðæt ɒn aɪs ænd kʌm bæk tə ɪt","Pause and revisit later","我们先搁置回头再议","PUT, ICE, COME, BACK — action verbs carry it","Don't say 'Let us suspend discussion of this point'","Let's put that on ice and + [verb phrase]",["Let's table that for now","We can circle back to that"]],
  ["I think we're closer than we think",[.2,1,.3,1,.3,.3,1],"aɪ θɪŋk wɪr ˈkloʊsər ðæn wi θɪŋk","Suggesting agreement is near","我觉得我们比想象中更接近了","THINK, CLOSER, THINK — mirror structure","Don't say 'The gap is smaller than perceived'","I think we're + [comparative] + than we think",["We're not that far apart actually","We're almost there"]],
  ["We need to sweeten the deal a bit",[.2,1,.3,1,.3,1,.3,1],"wi niːd tə ˈswiːtən ðə diːl ə bɪt","Offer needs to be more attractive","我们需要把条件再改善一下","NEED, SWEETEN, DEAL, BIT — builds and softens","Don't say 'Additional beneficial terms are required'","We need to + [verb] + the deal + a bit",["Let's throw in something extra","The deal needs a little more juice"]],
  ["This is non-negotiable on our end",[1,.3,1,.3,.3,.3,1],"ðɪs ɪz ˌnɒnnɪˈɡoʊʃiəbəl ɒn aʊər ɛnd","Stating a firm boundary","这一点不可谈判","THIS, NON-NEGOTIABLE, END — firm and final","Don't say 'This matter cannot be discussed'","This is non-negotiable on + [possessive] + end",["We can't budge on this one","This is a hard line for us"]],
],
leadership: [
  ["I need everyone to step up on this one",[.2,1,1,.3,1,1,.3,1],"aɪ niːd ˈɛvriˌwʌn tə stɛp ʌp ɒn ðɪs wʌn","Asking for extra effort","这次需要每个人都站出来","NEED, EVERYONE, STEP UP, THIS — strong leadership","Don't say 'All personnel must increase effort levels'","I need everyone to + [verb phrase]",["Everyone needs to bring their A game","This one needs all hands on deck"]],
  ["The buck stops with me on this",[.3,1,1,.3,1,.3,1],"ðə bʌk stɒps wɪð miː ɒn ðɪs","Taking full responsibility","这件事最终由我负责","BUCK, STOPS, ME, THIS — four short punches","Don't say 'I bear final accountability'","The buck stops with + [pronoun]",["I'll take full ownership","This one's on me"]],
  ["Let's set the bar high and see what happens",[.3,1,.3,1,1,.3,1,.3,1],"lɛts sɛt ðə bɑːr haɪ ænd siː wɒt ˈhæpənz","Encouraging ambitious goals","让我们把标准定高一点","SET, BAR, HIGH, SEE, HAPPENS — energetic cascade","Don't say 'We should establish elevated standards'","Let's set the bar + [adj] + and see what happens",["Let's aim high and adjust","Shoot for the moon on this one"]],
  ["We're not going to sugarcoat this",[.3,.3,1,.3,.3,1,1],"wɪr nɒt ˈɡoʊɪŋ tə ˈʃʊɡərkoʊt ðɪs","Being direct about difficulty","我们不会粉饰这件事","GOING, SUGARCOAT, THIS — honest rhythm","Don't say 'We will not embellish the truth'","We're not going to + [verb] + this",["Let me be straight with you","No sugarcoating, here's the deal"]],
  ["I've got your back no matter what",[.2,1,.3,1,.3,1,1],"aɪv ɡɒt jɔːr bæk noʊ ˈmætər wɒt","Unconditional support","无论如何我都支持你","GOT, BACK, MATTER, WHAT — loyal and firm","Don't say 'I will provide support regardless'","I've got your back + [condition]",["I'm here for you whatever happens","You can count on me through this"]],
  ["{N}, I'm putting you in charge of this",[1,.2,1,.3,.3,1,1,.3,1],"{N} aɪm ˈpʊtɪŋ juː ɪn tʃɑːrdʒ əv ðɪs","Delegating ownership","把这件事交给{N}负责","{N}, PUTTING, CHARGE, THIS — clear delegation","Don't say '{N}, you are assigned responsibility'","[name], I'm putting you in charge of + [topic]",["{N}, this one's yours","{N}, you're taking point on this"]],
  ["The vision is clear, now we execute",[.3,1,.3,1,1,.3,1],"ðə ˈvɪʒən ɪz klɪr naʊ wi ˈɛksɪkjuːt","From planning to action","目标明确，现在开始执行","VISION, CLEAR, NOW, EXECUTE — decisive shift","Don't say 'Implementation begins now'","The + [noun] + is clear, now we + [verb]",["We know where we're going, time to move","Strategy is set, let's make it happen"]],
  ["I trust your judgment on this completely",[.2,1,.3,1,.3,1,1],"aɪ trʌst jɔːr ˈdʒʌdʒmənt ɒn ðɪs kəmˈpliːtli","Expressing full confidence","这件事我完全相信你的判断","TRUST, JUDGMENT, THIS, COMPLETELY — builds conviction","Don't say 'I have confidence in your ability'","I trust your + [noun] + on this + [adverb]",["I have full faith in your call","Your judgment is what I'm going with"]],
  ["I believe in this team more than you know",[.2,1,.3,1,1,1,.3,.3,1],"aɪ bɪˈliːv ɪn ðɪs tiːm mɔːr ðæn juː noʊ","Deep confidence in the team","我对团队的信心超出你们想象","BELIEVE, THIS, TEAM, MORE, KNOW — emotional cascade","Don't say 'I have significant confidence in the group'","I believe in this + [noun] + more than you know",["This team is capable of amazing things","You're better than you think"]],
  ["Let's lead by example on this one",[.3,1,.3,1,.3,1,1],"lɛts liːd baɪ ɪɡˈzæmpəl ɒn ðɪs wʌn","Committing to model behavior","这次让我们以身作则","LEAD, EXAMPLE, THIS ONE — three beats","Don't say 'We should demonstrate ideal behavior'","Let's lead by + [noun]",["Actions speak louder than words here","Let's walk the talk"]],
  ["We need to have a difficult conversation",[.2,1,.3,1,.3,1,1],"wi niːd tə hæv ə ˈdɪfɪkəlt ˌkɒnvərˈseɪʃən","Signaling a tough discussion","我们需要进行一次困难的对话","NEED, HAVE, DIFFICULT, CONVERSATION — builds tension","Don't say 'We must discuss an unpleasant topic'","We need to have a + [adj] + conversation",["There's something we need to talk about","This won't be easy to discuss"]],
],
tech: [
  ["We need to ship this by {T}",[.2,1,.3,1,1,.3,1],"wi niːd tə ʃɪp ðɪs baɪ {T}","Setting a deadline","我们需要在{T}之前发布","NEED, SHIP, THIS, {T} — four beats","Don't say 'The release must occur before {T}'","We need to ship + [thing] + by + [time]",["This needs to go live by {T}","The deadline is {T}, no exceptions"]],
  ["Let's not over-engineer this",[.3,1,.3,1,1],"lɛts nɒt ˌoʊvərˈɛndʒɪnɪr ðɪs","Warning against complexity","别把这个搞太复杂","NOT, OVER-ENGINEER, THIS — strong caution","Don't say 'Avoid excessive complexity in design'","Let's not + [verb] + this",["Keep it simple, iterate later","Simple first, optimize later"]],
  ["Let's spin up a quick prototype and test it",[.3,1,1,.3,1,1,.3,1,.3],"lɛts spɪn ʌp ə kwɪk ˈproʊtətaɪp ænd tɛst ɪt","Fast proof of concept","我们快速做个原型测试一下","SPIN UP, QUICK, PROTOTYPE, TEST — action-oriented","Don't say 'Create an experimental version for evaluation'","Let's spin up a + [adj] + [noun] + and + [verb] + it",["Let's hack something together","Build fast, test fast, iterate fast"]],
  ["The API is throwing {#} errors an hour",[.3,1,.3,1,1,1,.3,1],"ðə ˌeɪpiːˈaɪ ɪz ˈθroʊɪŋ {#} ˈɛrərz ən aʊər","Reporting a technical issue","API每小时出现{#}个错误","API, THROWING, {#}, ERRORS, HOUR — urgent","Don't say 'The interface is experiencing frequent failures'","The + [system] + is throwing + [number] + errors",["We're seeing a spike in error rates","Error rate just jumped"]],
  ["We're going to need to refactor the whole thing",[.3,1,.3,1,.3,1,.3,1,1],"wɪr ˈɡoʊɪŋ tə niːd tə ˈriːfæktər ðə hoʊl θɪŋ","Major rewrite needed","我们需要重构整个模块","GOING, NEED, REFACTOR, WHOLE, THING — heavy","Don't say 'Complete restructuring is required'","We're going to need to + [verb] + the whole thing",["This needs a complete overhaul","Time to tear this down and rebuild"]],
  ["Can we get this behind a feature flag?",[.3,.3,1,1,.3,.3,1,1],"kæn wi ɡɛt ðɪs bɪˈhaɪnd ə ˈfiːtʃər flæɡ","Making a change toggleable","能不能放到功能开关后面？","GET, THIS, FEATURE, FLAG — progressive stress","Don't say 'Implement a toggle mechanism'","Can we get this behind a + [noun]?",["Let's feature-flag this before shipping","Put it behind a flag for rollback safety"]],
  ["The bottleneck is in the database layer",[.3,1,.3,.3,.3,1,1],"ðə ˈbɒtlnɛk ɪz ɪn ðə ˈdeɪtəbeɪs ˈleɪər","Identifying perf problems","瓶颈在数据库层","BOTTLENECK, DATABASE, LAYER — diagnostic","Don't say 'The limitation originates from data storage'","The bottleneck is in the + [component]",["The database is our chokepoint","We're hitting a wall in the data layer"]],
  ["We just pushed a hotfix to production",[.2,.3,1,.3,1,.3,1],"wi dʒʌst pʊʃt ə ˈhɒtfɪks tə prəˈdʌkʃən","Emergency fix deployed","我们刚推了个热修复到生产环境","PUSHED, HOTFIX, PRODUCTION — urgent action","Don't say 'An emergency correction was deployed'","We just pushed a + [noun] + to production",["Hotfix is live, monitoring now","Emergency patch just went out"]],
  ["Let's dogfood this before we ship it",[.3,1,1,.3,.3,1,.3],"lɛts ˈdɒɡfuːd ðɪs bɪˈfɔːr wi ʃɪp ɪt","Use your own product first","发布之前自己先用用看","DOGFOOD, THIS, SHIP — use-then-ship rhythm","Don't say 'We should use our product internally'","Let's + [verb] + this before we + [verb] + it",["We should eat our own cooking","Let's be our own first users"]],
  ["{N}, can you take a look at this bug?",[1,.3,.3,1,.3,1,.3,1,1],"{N} kæn juː teɪk ə lʊk æt ðɪs bʌɡ","Asking someone to investigate","{N}，你能看看这个bug吗？","{N}, TAKE, LOOK, THIS, BUG — cascading","Don't say '{N}, please investigate this defect'","[name], can you take a look at + [noun]?",["{N}, mind checking this issue?","{N}, got a sec to debug this?"]],
],
sales: [
  ["I'd love to walk you through a quick demo",[.2,1,.3,1,.3,1,.3,1,1],"aɪd lʌv tə wɔːk juː θruː ə kwɪk ˈdɛmoʊ","Offering a product demonstration","我很乐意给你做个简短的演示","LOVE, WALK, THROUGH, QUICK, DEMO — builds excitement","Don't say 'I would like to show you a demonstration'","I'd love to walk you through a + [adj] + [noun]",["Can I show you something really cool?","Want to see this in action?"]],
  ["What's keeping you up at night right now?",[1,1,.3,1,.3,1,1,1],"wɒts ˈkiːpɪŋ juː ʌp æt naɪt raɪt naʊ","Asking about biggest pain point","你现在最头疼什么？","WHAT'S, KEEPING, UP, NIGHT, RIGHT, NOW — six punches","Don't say 'What is your primary concern?'","What's keeping you up at night + [time]?",["What's your biggest headache right now?","Where's the pain in your workflow?"]],
  ["This basically pays for itself in the first month",[1,1,1,.3,1,.3,.3,1,1],"ðɪs ˈbeɪsɪkli peɪz fɔːr ɪtˈsɛlf ɪn ðə fɜːrst mʌnθ","ROI is immediate","这第一个月就能回本","BASICALLY, PAYS, ITSELF, FIRST, MONTH — cascading","Don't say 'Return on investment is achieved in thirty days'","This pays for itself in the + [time period]",["You'll see ROI in week one","The product pays for itself almost immediately"]],
  ["Who else is involved in this decision?",[1,.3,.3,1,.3,1,1],"huː ɛls ɪz ɪnˈvɒlvd ɪn ðɪs dɪˈsɪʒən","Identifying stakeholders","还有谁参与这个决策？","WHO, ELSE, INVOLVED, DECISION — four key words","Don't say 'Are there additional people in the process?'","Who else is involved in + [noun]?",["Who's the final decision maker?","Walk me through your buying process"]],
  ["We've seen companies get {#} percent lift",[.3,1,1,.3,1,1,1],"wiːv siːn ˈkʌmpəniz ɡɛt {#} pərˈsɛnt lɪft","Social proof with metrics","我们看到公司实现了{#}%的提升","SEEN, COMPANIES, {#}, PERCENT, LIFT — data-driven","Don't say 'Other organizations experienced positive results'","We've seen companies get + [number] + percent lift",["Our clients typically see {#} percent gains","The numbers speak for themselves"]],
  ["Would it help if I put together a proposal?",[.3,.3,1,.3,.2,1,1,.3,1],"wʊd ɪt hɛlp ɪf aɪ pʊt təˈɡɛðər ə prəˈpoʊzəl","Formalizing next step","如果我整理一份方案会有帮助吗？","HELP, PUT, TOGETHER, PROPOSAL — proactive","Don't say 'Shall I prepare a formal document?'","Would it help if I + [verb phrase]?",["Want me to draft something up?","I can have a proposal to you by tomorrow"]],
  ["I know budget is tight, let's make this work",[.2,1,1,.3,1,.3,1,1,1],"aɪ noʊ ˈbʌdʒɪt ɪz taɪt lɛts meɪk ðɪs wɜːrk","Acknowledging cost concerns","我知道预算紧张，来想想办法","KNOW, BUDGET, TIGHT, MAKE, THIS, WORK — empathetic","Don't say 'I understand financial limitations'","I know + [noun] + is tight, let's make this work",["Let's find something that fits your budget","We can get creative with pricing"]],
  ["The clock is ticking on this offer",[.3,1,.3,1,.3,1,1],"ðə klɒk ɪz ˈtɪkɪŋ ɒn ðɪs ˈɒfər","Creating urgency","这个优惠是有时限的","CLOCK, TICKING, THIS, OFFER — urgency rhythm","Don't say 'The promotional pricing will expire soon'","The clock is ticking on + [noun]",["This pricing won't last forever","The window is closing on this deal"]],
],
conflict: [
  ["I think there's been a misunderstanding here",[.2,1,.3,1,.3,1,1],"aɪ θɪŋk ðɛrz biːn ə ˌmɪsʌndərˈstændɪŋ hɪr","Suggesting confusion not blame","我觉得这里有个误会","THINK, BEEN, MISUNDERSTANDING, HERE — diplomatic","Don't say 'You have made an error'","I think there's been a + [noun]",["I don't think we're on the same page","There seems to be some confusion"]],
  ["Let's take a step back and look at the big picture",[.3,1,.3,1,1,.3,1,.3,.3,1,1],"lɛts teɪk ə stɛp bæk ænd lʊk æt ðə bɪɡ ˈpɪktʃər","Defusing tension by zooming out","让我们退一步看看整体","TAKE, STEP, BACK, LOOK, BIG, PICTURE — measured","Don't say 'Consider the broader perspective'","Let's take a step back and + [verb phrase]",["Let's zoom out for a second","Let's not lose the bigger picture"]],
  ["This isn't personal, it's about the work",[1,.3,1,.3,.3,.3,1],"ðɪs ˈɪzənt ˈpɜːrsənəl ɪts əˈbaʊt ðə wɜːrk","Separating emotional from professional","这不是针对个人，是关于工作","ISN'T, PERSONAL, ABOUT, WORK — clear separation","Don't say 'Criticism is directed at the task not you'","This isn't + [adj], it's about + [noun]",["It's not about you, it's about the process","Let's keep this professional"]],
  ["I feel like we're going in circles here",[.2,1,.3,.3,1,.3,1,1],"aɪ fiːl laɪk wɪr ˈɡoʊɪŋ ɪn ˈsɜːrkəlz hɪr","Discussion is unproductive","我觉得我们在兜圈子","FEEL, GOING, CIRCLES, HERE — circular frustration","Don't say 'Our discussion is repetitive'","I feel like we're + [verb]ing + in circles",["We keep coming back to the same argument","Let's try a different approach"]],
  ["Let's not point fingers and focus on the fix",[.3,1,1,1,.3,1,.3,.3,1],"lɛts nɒt pɔɪnt ˈfɪŋɡərz ænd ˈfoʊkəs ɒn ðə fɪks","Redirect from blame to solutions","别互相指责，专注于解决方案","NOT, POINT, FINGERS, FOCUS, FIX — blame to action","Don't say 'We should not assign blame'","Let's not + [verb phrase] + and focus on + [noun]",["Blame won't fix this, let's move forward","Less finger-pointing, more problem-solving"]],
  ["I hear what you're saying, and I want to address that",[.2,1,.3,.3,1,.3,.2,1,.3,1,1],"aɪ hɪr wɒt jʊr ˈseɪɪŋ ænd aɪ wɒnt tə əˈdrɛs ðæt","Validating before responding","我听到你说的了，我想回应一下","HEAR, SAYING, WANT, ADDRESS, THAT — empathetic","Don't say 'I acknowledge your perspective'","I hear what you're saying, and I want to + [verb]",["That's a fair point, let me respond","I understand your concern"]],
  ["What would you need to feel good about this?",[1,.3,.3,1,.3,1,1,.3,1],"wɒt wʊd juː niːd tə fiːl ɡʊd əˈbaʊt ðɪs","Seeking resolution","你需要什么才能对此满意？","WHAT, NEED, FEEL, GOOD, THIS — solution-seeking","Don't say 'What conditions make this acceptable?'","What would you need to feel + [adj] + about this?",["What would make this work for you?","Help me understand what you need"]],
  ["I respect your position but I see it differently",[.2,1,.3,1,.3,.2,1,.3,1],"aɪ rɪˈspɛkt jɔːr pəˈzɪʃən bʌt aɪ siː ɪt ˈdɪfrəntli","Disagreeing respectfully","我尊重你的立场，但我看法不同","RESPECT, POSITION, SEE, DIFFERENTLY — balanced","Don't say 'My opinion differs from yours'","I respect your + [noun] + but I see it + [adverb]",["Fair point, but here's another angle","I hear you, but I'd push back"]],
],
networking: [
  ["What brings you to this event?",[1,1,.3,.3,1,1],"wɒt brɪŋz juː tə ðɪs ɪˈvɛnt","Classic networking opener","你怎么来这个活动的？","WHAT, BRINGS, THIS, EVENT — natural curiosity","Don't say 'What is your reason for attending?'","What brings you to + [noun]?",["How'd you end up at this event?","First time here or are you a regular?"]],
  ["We should grab coffee sometime and chat",[.2,1,1,1,1,.3,1],"wi ʃʊd ɡræb ˈkɒfi ˈsʌmtaɪm ænd tʃæt","Suggesting informal follow-up","找时间喝杯咖啡聊聊","SHOULD, GRAB, COFFEE, SOMETIME, CHAT — casual","Don't say 'Would you schedule a beverage meeting?'","We should grab + [noun] + sometime",["Let's do lunch sometime","I'd love to pick your brain over coffee"]],
  ["I'd love to pick your brain about {D}",[.2,1,.3,1,.3,1,.3,1],"aɪd lʌv tə pɪk jɔːr breɪn əˈbaʊt {D}","Asking to learn from expertise","我想请教一下关于{D}的事","LOVE, PICK, BRAIN, {D} — flattering curiosity","Don't say 'I want to obtain your knowledge'","I'd love to pick your brain about + [topic]",["Can I tap into your expertise on {D}?","I'd love to hear your thoughts on {D}"]],
  ["What's the most exciting thing you're working on?",[1,.3,1,1,1,.3,1,1],"wɒts ðə moʊst ɪkˈsaɪtɪŋ θɪŋ jʊr ˈwɜːrkɪŋ ɒn","Getting someone to share passion","你现在最兴奋的项目是什么？","WHAT'S, MOST, EXCITING, THING, WORKING — enthusiasm","Don't say 'Which project generates the most enthusiasm?'","What's the most + [adj] + thing you're + [verb]ing?",["Tell me about your latest project","What's got you fired up right now?"]],
  ["{N} mentioned you're doing amazing work in {D}",[1,1,.3,1,1,1,.3,1],"{N} ˈmɛnʃənd jʊr ˈduːɪŋ əˈmeɪzɪŋ wɜːrk ɪn {D}","Using a mutual connection","{N}说你在{D}做得很出色","{N}, MENTIONED, AMAZING, WORK, {D} — six beats","Don't say '{N} informed me of your performance'","[name] mentioned you're doing + [adj] + work in + [field]",["{N} speaks really highly of your work","I keep hearing great things from {N}"]],
  ["How did you get into this field originally?",[1,.3,.3,1,.3,1,1,1],"haʊ dɪd juː ɡɛt ˈɪntə ðɪs fiːld əˈrɪdʒɪnəli","Asking about career journey","你最初怎么进入这个领域的？","HOW, GET, INTO, FIELD, ORIGINALLY — storytelling","Don't say 'What career path led to this profession?'","How did you get into + [field]?",["What's your origin story in this space?","What drew you to this industry?"]],
  ["Do you have a card or should I find you on LinkedIn?",[.3,.3,1,.3,1,.3,.2,1,.3,.3,1],"duː juː hæv ə kɑːrd ɔːr ʃʊd aɪ faɪnd juː ɒn ˈlɪŋkdɪn","Asking for contact details","你有名片还是我LinkedIn找你？","HAVE, CARD, SHOULD, FIND, LINKEDIN — digital age","Don't say 'May I have your contact information?'","Do you have a + [noun] + or should I find you on + [platform]?",["Let me add you on LinkedIn","What's the best way to reach you?"]],
],
presentations: [
  ["Before I begin, let me give you some context",[.3,.2,1,.3,.3,1,.3,.3,1],"bɪˈfɔːr aɪ bɪˈɡɪn lɛt mi ɡɪv juː sʌm ˈkɒntɛkst","Setting up with background","在我开始之前，提供些背景","BEGIN, GIVE, CONTEXT — three pillars","Don't say 'Prior to my commencement I provide background'","Before I begin, let me + [verb phrase]",["Quick context before I dive in","Let me set the stage real quick"]],
  ["The key takeaway here is this",[.3,1,1,1,.3,1],"ðə kiː ˈteɪkəweɪ hɪr ɪz ðɪs","Highlighting the most important point","这里最重要的一点是","KEY, TAKEAWAY, HERE, THIS — spotlight","Don't say 'The most important conclusion is'","The key takeaway is + [this]",["Here's the bottom line","If you remember one thing, make it this"]],
  ["Any questions so far before I move on?",[.3,1,1,1,.3,.2,1,1],"ˈɛni ˈkwɛstʃənz soʊ fɑːr bɪˈfɔːr aɪ muːv ɒn","Checking for understanding","有什么问题吗，在我继续之前？","ANY, QUESTIONS, SO, FAR, MOVE, ON — checkpoint","Don't say 'Does anyone wish to ask before proceeding?'","Any questions so far before I + [verb phrase]?",["Everyone tracking so far?","Want me to clarify anything?"]],
  ["Let me paint a picture for you",[.3,.3,1,.3,1,.3,1],"lɛt mi peɪnt ə ˈpɪktʃər fɔːr juː","Transitioning to vivid example","让我给你描绘一幅画面","PAINT, PICTURE, FOR, YOU — creative lead-in","Don't say 'I will provide a visual description'","Let me + [verb] + a picture for you",["Imagine this scenario","Picture this for a second"]],
  ["To wrap up, here are the three main points",[.3,1,1,.3,.3,.3,1,1,1],"tə ræp ʌp hɪr ɑːr ðə θriː meɪn pɔɪnts","Closing with a summary","总结一下，以下是三个要点","WRAP, UP, THREE, MAIN, POINTS — conclusive","Don't say 'In conclusion I reiterate three ideas'","To wrap up, here are the + [number] + main points",["Let me leave you with three thoughts","Here's the TL;DR"]],
  ["Let me walk you through the numbers",[.3,.3,1,.3,1,.3,1],"lɛt mi wɔːk juː θruː ðə ˈnʌmbərz","Explaining data in detail","让我给你讲讲这些数字","WALK, THROUGH, NUMBERS — three pillars","Don't say 'I will explain the statistical data'","Let me walk you through + [noun phrase]",["Let's dive into the data","Here's what the numbers are saying"]],
  ["I want to leave you with one thought",[.2,1,.3,1,.3,.3,1,1],"aɪ wɒnt tə liːv juː wɪð wʌn θɔːt","Powerful closing","我想给你留下一个想法","WANT, LEAVE, ONE, THOUGHT — memorable close","Don't say 'I wish to conclude with a singular idea'","I want to leave you with + [noun phrase]",["If nothing else, remember this","Here's what I want you to take away"]],
],
meetings: [
  ["Let's stay on track and keep this tight",[.3,1,.3,1,.3,1,1],"lɛts steɪ ɒn træk ænd kiːp ðɪs taɪt","Keeping meeting focused","我们保持专注，别跑题","STAY, TRACK, KEEP, TIGHT — discipline","Don't say 'We should maintain focus'","Let's stay on track and + [verb phrase]",["Let's keep this moving","We're getting sidetracked"]],
  ["What are the action items from this meeting?",[1,.3,.3,1,1,.3,1,1],"wɒt ɑːr ðə ˈækʃən ˈaɪtəmz frɒm ðɪs ˈmiːtɪŋ","Extracting next steps","这次会议的待办事项是什么？","WHAT, ACTION, ITEMS, THIS, MEETING — five beats","Don't say 'What are the tasks to complete after this?'","What are the action items from + [noun]?",["What are the next steps?","Let me summarize the takeaways"]],
  ["I think we're going down a rabbit hole here",[.2,1,.3,1,1,.3,1,1,1],"aɪ θɪŋk wɪr ˈɡoʊɪŋ daʊn ə ˈræbɪt hoʊl hɪr","Flagging off-topic discussion","我觉得我们跑题了","THINK, GOING, RABBIT, HOLE, HERE — humorous redirect","Don't say 'The discussion has deviated from the topic'","I think we're going down a + [noun] + here",["We're getting into the weeds","Let's not go down that path"]],
  ["Can we get alignment on this before we move forward?",[.3,.3,1,1,.3,1,.3,.3,1,1],"kæn wi ɡɛt əˈlaɪnmənt ɒn ðɪs bɪˈfɔːr wi muːv ˈfɔːrwərd","Seeking consensus","在继续之前能先达成共识吗？","GET, ALIGNMENT, THIS, MOVE, FORWARD — consensus","Don't say 'Can we reach agreement prior to proceeding?'","Can we get alignment on + [noun] + before we + [verb]?",["Are we all on the same page?","Do we have consensus here?"]],
  ["Let's not let perfect be the enemy of good",[.3,1,.3,1,1,.3,.3,1,.3,1],"lɛts nɒt lɛt ˈpɜːrfɪkt biː ðə ˈɛnəmi əv ɡʊd","Progress over perfection","别让完美成为好的敌人","NOT, PERFECT, ENEMY, GOOD — wisdom rhythm","Don't say 'Excessive perfectionism prevents progress'","Let's not let + [adj] + be the enemy of + [adj]",["Good enough is good enough for now","Done is better than perfect"]],
  ["{N}, what's your take on this?",[1,1,.3,1,.3,1],"wɒts jɔːr teɪk ɒn ðɪs {N}","Asking someone's opinion","{N}，你怎么看这个？","{N}, WHAT'S, TAKE, THIS — direct ask","Don't say '{N}, what is your opinion on this matter?'","[name], what's your take on + [topic]?",["{N}, how do you see this?","{N}, where do you stand on this?"]],
  ["I want to be respectful of everyone's time",[.2,1,.3,.3,1,.3,1,1],"aɪ wɒnt tə biː rɪˈspɛktfəl əv ˈɛvriˌwʌnz taɪm","Signaling time awareness","我想尊重大家的时间","WANT, RESPECTFUL, EVERYONE'S, TIME — considerate","Don't say 'I desire to not exceed the allotted duration'","I want to be respectful of + [possessive] + time",["Let's be mindful of the clock","I know we're all busy"]],
],
emails: [
  ["Just following up on my last email",[.3,1,1,.3,.3,1,1],"dʒʌst ˈfɒloʊɪŋ ʌp ɒn maɪ læst ˈiːmeɪl","Polite follow-up","跟进一下我上封邮件","FOLLOWING, UP, LAST, EMAIL — four beats","Don't say 'I am writing to inquire about my previous message'","Just following up on + [noun phrase]",["Circling back on my previous email","Wanted to bump this back to the top"]],
  ["Looping in {N} for visibility",[1,1,1,.3,1],"ˈluːpɪŋ ɪn {N} fɔːr ˌvɪzɪˈbɪlɪti","Adding someone to thread","加上{N}以便了解情况","LOOPING, IN, {N}, VISIBILITY — transparency","Don't say 'Adding {N} to this correspondence for awareness'","Looping in + [name] + for + [reason]",["Adding {N} to this thread","CC'ing {N} so they're in the loop"]],
  ["I wanted to flag this before it becomes an issue",[.2,1,.3,1,1,.3,.3,1,.3,1],"aɪ ˈwɒntɪd tə flæɡ ðɪs bɪˈfɔːr ɪt bɪˈkʌmz ən ˈɪʃuː","Proactive problem-flagging","我想在问题变大之前提个醒","WANTED, FLAG, THIS, BECOMES, ISSUE — proactive","Don't say 'I wish to bring a potential problem to attention'","I wanted to flag this before + [clause]",["Heads up on a potential issue","Quick flag before this escalates"]],
  ["Happy to jump on a call if that's easier",[1,.3,1,.3,.3,1,.3,1],"ˈhæpi tə dʒʌmp ɒn ə kɔːl ɪf ðæts ˈiːziər","Offering to switch to a call","如果电话更方便的话我可以打","HAPPY, JUMP, CALL, EASIER — flexible","Don't say 'I am willing to have a verbal conversation'","Happy to + [verb phrase] + if that's easier",["Want to hop on a quick call?","Easier to talk this through than type it"]],
  ["Apologies for the late reply, things have been hectic",[1,.3,.3,1,1,1,.3,.3,1],"əˈpɒlədʒiz fɔːr ðə leɪt rɪˈplaɪ θɪŋz hæv biːn ˈhɛktɪk","Apologizing for delayed response","抱歉回复晚了，最近太忙","APOLOGIES, LATE, REPLY, HECTIC — honest and warm","Don't say 'I regret the tardiness of my response'","Apologies for the late + [noun], things have been + [adj]",["Sorry for the delay, been swamped","Apologies for going dark, it's been crazy"]],
  ["Could you send me a quick update by {T}?",[.3,.3,1,.3,.3,1,1,.3,1],"kʊd juː sɛnd mi ə kwɪk ʌpˈdeɪt baɪ {T}","Requesting a status update","你能在{T}之前给我个简短更新吗？","SEND, QUICK, UPDATE, {T} — polite deadline","Don't say 'Please provide information by {T}'","Could you send me a + [adj] + update by + [time]?",["Any chance you can update me by {T}?","Quick update by {T} would be great"]],
],
interviews: [
  ["Tell me about a time you had to lead through ambiguity",[1,.3,.3,.3,1,.3,.3,.3,1,1,1],"tɛl mi əˈbaʊt ə taɪm juː hæd tə liːd θruː ˌæmbɪˈɡjuːɪti","Behavioral interview question","告诉我一次你在模糊情况下领导的经历","TELL, TIME, LEAD, THROUGH, AMBIGUITY — STAR prompt","Don't say 'Describe a situation of uncertain leadership'","Tell me about a time you + [past tense verb phrase]",["Walk me through a challenging leadership moment","Give me an example of leading without clear direction"]],
  ["What would you say is your biggest strength?",[1,.3,.3,1,.3,.3,1,1],"wɒt wʊd juː seɪ ɪz jɔːr ˈbɪɡɪst strɛŋθ","Classic interview question","你认为你最大的优势是什么？","WHAT, SAY, BIGGEST, STRENGTH — four beats","Don't say 'Describe your primary professional attribute'","What would you say is your biggest + [noun]?",["What sets you apart?","What do you bring that nobody else does?"]],
  ["I'm really passionate about solving {A} problems",[.2,1,1,.3,1,1,1],"aɪm ˈrɪəli ˈpæʃənət əˈbaʊt ˈsɒlvɪŋ {A} ˈprɒbləmz","Expressing enthusiasm","我真的很热衷于解决{A}的问题","REALLY, PASSIONATE, SOLVING, {A}, PROBLEMS — fire","Don't say 'I have interest in addressing complex challenges'","I'm really passionate about + [verb]ing + [adj] problems",["I thrive on {A} challenges","Nothing gets me more excited than {A} problem-solving"]],
  ["Where do you see yourself in five years?",[1,.3,.3,1,1,.3,1,1],"wɛr duː juː siː jɔːrˈsɛlf ɪn faɪv jɪrz","Career trajectory question","你五年后看到自己在哪里？","WHERE, SEE, YOURSELF, FIVE, YEARS — classic","Don't say 'What is your professional plan for the future?'","Where do you see yourself in + [time]?",["What's your long-term career vision?","Where do you want to be in a few years?"]],
  ["Can you walk me through your thought process?",[.3,.3,1,.3,1,.3,1,1],"kæn juː wɔːk mi θruː jɔːr θɔːt ˈprɒsɛs","Asking how someone thinks","你能说说你的思考过程吗？","WALK, THROUGH, THOUGHT, PROCESS — analytical","Don't say 'Explain the reasoning behind your decision'","Can you walk me through your + [noun phrase]?",["How did you approach that problem?","Take me through your reasoning"]],
  ["Do you have any questions for us?",[.3,.3,1,.3,1,.3,1],"duː juː hæv ˈɛni ˈkwɛstʃənz fɔːr ʌs","Classic interview closer","你对我们有什么问题吗？","HAVE, ANY, QUESTIONS, US — open invitation","Don't say 'Do you wish to inquire about anything?'","Do you have any questions for + [pronoun]?",["What would you like to know about us?","Anything you want to ask before we wrap up?"]],
],
feedback: [
  ["I want to give you some honest feedback",[.2,1,.3,1,.3,.3,1,1],"aɪ wɒnt tə ɡɪv juː sʌm ˈɒnɪst ˈfiːdbæk","Opening a feedback conversation","我想给你一些真诚的反馈","WANT, GIVE, HONEST, FEEDBACK — direct and warm","Don't say 'I wish to provide candid evaluation'","I want to give you some + [adj] + feedback",["Can I share some thoughts with you?","I have some feedback I think would help"]],
  ["You crushed it on that presentation",[.3,1,1,.3,1,1],"juː krʌʃt ɪt ɒn ðæt ˌprɛzənˈteɪʃən","Enthusiastic positive feedback","你那个演讲太棒了","CRUSHED, IT, THAT, PRESENTATION — celebration","Don't say 'Your presentation was of high quality'","You crushed it on + [noun phrase]",["That presentation was fire","You absolutely nailed that one"]],
  ["Here's what I'd do differently next time",[1,.3,.2,1,1,1,1],"hɪrz wɒt aɪd duː ˈdɪfrəntli nɛkst taɪm","Constructive suggestion","下次我会这样做不同的","HERE'S, WHAT, DIFFERENTLY, NEXT, TIME — forward","Don't say 'I recommend alternative approaches going forward'","Here's what I'd do differently + [time]",["One thing I'd tweak for next time","If I could change one thing..."]],
  ["The quality of your work has really improved",[.3,1,.3,.3,1,.3,1,1],"ðə ˈkwɒlɪti əv jɔːr wɜːrk hæz ˈrɪəli ɪmˈpruːvd","Acknowledging growth","你的工作质量真的提高了","QUALITY, WORK, REALLY, IMPROVED — recognition","Don't say 'Your performance metrics have increased'","The quality of your + [noun] + has really improved",["Your growth has been incredible to watch","You've leveled up so much"]],
  ["Can I push back on that a little bit?",[.3,.2,1,1,.3,1,.3,.3,1],"kæn aɪ pʊʃ bæk ɒn ðæt ə ˈlɪtəl bɪt","Respectfully challenging","我能稍微反驳一下吗？","PUSH, BACK, THAT, LITTLE, BIT — gentle challenge","Don't say 'May I present a counterargument?'","Can I push back on + [pronoun] + a little bit?",["Let me play devil's advocate here","I see it a bit differently"]],
  ["I appreciate you being so receptive to feedback",[.2,1,.3,1,.3,1,.3,1],"aɪ əˈpriːʃieɪt juː ˈbiːɪŋ soʊ rɪˈsɛptɪv tə ˈfiːdbæk","Thanking openness","感谢你这么乐于接受反馈","APPRECIATE, BEING, RECEPTIVE, FEEDBACK — grateful","Don't say 'Thank you for accepting criticism well'","I appreciate you being so + [adj] + to + [noun]",["Thanks for hearing me out","Your openness to feedback is awesome"]],
],
strategy: [
  ["What's our north star for this quarter?",[1,.3,1,1,.3,1,1],"wɒts aʊr nɔːrθ stɑːr fɔːr ðɪs ˈkwɔːrtər","Key strategic goal","这个季度我们的核心目标是什么？","WHAT'S, NORTH, STAR, THIS, QUARTER — five beats","Don't say 'What is the primary objective for this period?'","What's our north star for + [time]?",["What's the one thing that matters most?","What are we optimizing for?"]],
  ["We need to double down on {M}",[.2,1,.3,1,1,.3,1],"wi niːd tə ˈdʌbəl daʊn ɒn {M}","Committing resources","我们需要加倍投入{M}","NEED, DOUBLE, DOWN, {M} — commitment","Don't say 'We should increase investment in this area'","We need to double down on + [metric/area]",["Let's go all in on {M}","Time to bet big on {M}"]],
  ["We're spreading ourselves too thin",[.3,1,1,.3,1],"wɪr ˈsprɛdɪŋ aʊərˈsɛlvz tuː θɪn","Warning about overextension","我们铺得太开了","SPREADING, OURSELVES, TOO, THIN — stretched","Don't say 'Our resources are insufficient for all initiatives'","We're spreading ourselves too + [adj]",["We can't do everything at once","Something's got to give"]],
  ["What's the ROI on this initiative?",[1,.3,1,.3,1,1],"wɒts ðə ˌɑːroʊˈaɪ ɒn ðɪs ɪˈnɪʃətɪv","Questioning return on investment","这个项目的投资回报率是多少？","WHAT'S, ROI, THIS, INITIATIVE — four beats","Don't say 'What is the expected return on this investment?'","What's the ROI on + [noun]?",["Is this worth the investment?","What's the expected payback on this?"]],
  ["Let's play devil's advocate for a second",[.3,1,1,1,.3,.3,1],"lɛts pleɪ ˈdɛvəlz ˈædvəkət fɔːr ə ˈsɛkənd","Challenging assumptions","让我们唱个反调","PLAY, DEVIL'S, ADVOCATE, SECOND — critical thinking","Don't say 'Let us consider opposing viewpoints'","Let's play devil's advocate for + [time]",["What if we're wrong about this?","Let me poke some holes in this"]],
  ["We should sunset this project by {T}",[.2,1,1,1,1,.3,1],"wi ʃʊd ˈsʌnsɛt ðɪs ˈprɒdʒɛkt baɪ {T}","Proposing to end a project","我们应该在{T}前结束这个项目","SHOULD, SUNSET, THIS, PROJECT, {T} — decisive","Don't say 'This initiative should be terminated'","We should sunset + [noun] + by + [time]",["Time to pull the plug on this","Let's wind this down by {T}"]],
  ["What's our competitive moat here?",[1,.3,1,1,1],"wɒts aʊr kəmˈpɛtɪtɪv moʊt hɪr","Asking about defensibility","我们的竞争壁垒在哪里？","WHAT'S, COMPETITIVE, MOAT, HERE — four beats","Don't say 'What protects us from competitors?'","What's our + [adj] + moat + [location]?",["What makes us hard to copy?","Where's our unfair advantage?"]],
],
brainstorming: [
  ["No bad ideas, let's just throw things out there",[.3,1,1,.3,.3,1,1,1,1],"noʊ bæd aɪˈdɪəz lɛts dʒʌst θroʊ θɪŋz aʊt ðɛr","Encouraging free thinking","没有坏主意，先放开想","NO, BAD, IDEAS, THROW, THINGS, OUT, THERE — freeing","Don't say 'All contributions are valid for consideration'","No bad ideas, let's just + [verb phrase]",["Everything's on the table","Let's brainstorm wild, filter later"]],
  ["What if we flipped this completely on its head?",[1,.3,.3,1,1,1,.3,.3,1],"wɒt ɪf wi flɪpt ðɪs kəmˈpliːtli ɒn ɪts hɛd","Suggesting radical rethinking","如果我们完全反过来想呢？","WHAT, FLIPPED, COMPLETELY, HEAD — radical inversion","Don't say 'Have we considered the opposite approach?'","What if we + [past tense verb] + this completely?",["What's the opposite of what we're doing?","Let's try turning this inside out"]],
  ["That idea has legs, let's build on it",[1,1,.3,1,.3,1,1,.3,.3],"ðæt aɪˈdɪə hæz lɛɡz lɛts bɪld ɒn ɪt","Endorsing and expanding an idea","这个主意有潜力，展开说说","THAT, IDEA, LEGS, BUILD, ON — momentum","Don't say 'This concept has potential for development'","That idea has legs, let's + [verb] + on it",["Now we're cooking","I love where this is going, keep pulling that thread"]],
  ["Let's think outside the box on this one",[.3,1,1,.3,1,.3,1,1],"lɛts θɪŋk aʊtˈsaɪd ðə bɒks ɒn ðɪs wʌn","Encouraging creative solutions","这次让我们跳出框框来想","THINK, OUTSIDE, BOX, THIS, ONE — creative","Don't say 'We should consider unconventional approaches'","Let's think outside the box on + [noun]",["Time to get creative here","What would we do if there were no constraints?"]],
  ["We're overthinking this, let's just start",[.3,1,1,.3,1,1],"wɪr ˌoʊvərˈθɪŋkɪŋ ðɪs lɛts dʒʌst stɑːrt","Breaking analysis paralysis","我们想太多了，先开始干","OVERTHINKING, THIS, JUST, START — cut through","Don't say 'We are excessively deliberating'","We're overthinking this, let's just + [verb]",["Let's stop talking and start doing","Perfect is the enemy of done, just go"]],
  ["I'm just spitballing here, but what about {M}?",[.2,.3,1,1,.3,1,.3,1],"aɪm dʒʌst ˈspɪtbɔːlɪŋ hɪr bʌt wɒt əˈbaʊt {M}","Tentatively suggesting","我随便说说，{M}怎么样？","SPITBALLING, HERE, WHAT, ABOUT — casual pitch","Don't say 'I have an unrefined suggestion'","I'm just spitballing, but what about + [idea]?",["Just thinking out loud here","Crazy idea, but hear me out"]],
],
reporting: [
  ["{M} is up {#} percent month over month",[1,.3,1,1,1,1,.3,1],"ðə {M} ɪz ʌp {#} pərˈsɛnt mʌnθ ˈoʊvər mʌnθ","Sharing positive metrics","{M}月环比增长{#}%","{M}, UP, {#}, PERCENT, MONTH OVER MONTH — data rhythm","Don't say 'The metric increased by a certain percentage'","[metric] is up + [number] percent + [period]",["We're seeing strong growth in {M}","{M} just hit an all-time high"]],
  ["We missed our target by a significant margin",[.2,1,.3,1,.3,.3,1,1],"wi mɪst aʊr ˈtɑːrɡɪt baɪ ə sɪɡˈnɪfɪkənt ˈmɑːrdʒɪn","Reporting underperformance","我们大幅偏离了目标","MISSED, TARGET, SIGNIFICANT, MARGIN — honest impact","Don't say 'The goal was not achieved'","We missed our + [noun] + by a significant margin",["We fell short on this one","Numbers came in well below expectations"]],
  ["Here's the executive summary for this week",[1,.3,1,1,.3,1,1],"hɪrz ðə ɪɡˈzɛkjʊtɪv ˈsʌməri fɔːr ðɪs wiːk","Providing a high-level overview","这是本周的执行摘要","HERE'S, EXECUTIVE, SUMMARY, THIS, WEEK — structured","Don't say 'I present the weekly report'","Here's the executive summary for + [time]",["Quick highlights from this week","Let me give you the top-line view"]],
  ["The data tells a very different story",[.3,1,1,.3,1,1,1],"ðə ˈdeɪtə tɛlz ə ˈvɛri ˈdɪfrənt ˈstɔːri","Data contradicts assumptions","数据讲述了一个非常不同的故事","DATA, TELLS, VERY, DIFFERENT, STORY — reveals truth","Don't say 'The statistics indicate otherwise'","The data tells a + [adj] + story",["Numbers don't lie, look at this","The metrics paint a different picture"]],
  ["Let me break down the numbers for you",[.3,.3,1,1,.3,1,.3,1],"lɛt mi breɪk daʊn ðə ˈnʌmbərz fɔːr juː","Explaining detailed metrics","让我给你详细分析一下数据","BREAK, DOWN, NUMBERS, FOR, YOU — informative","Don't say 'I will explain the statistics'","Let me break down the + [noun] + for you",["Here's what the numbers mean","Let me walk you through the data"]],
  ["We're trending in the right direction overall",[.3,1,.3,.3,1,1,1],"wɪr ˈtrɛndɪŋ ɪn ðə raɪt dɪˈrɛkʃən ˈoʊvərɔːl","Positive overall trajectory","整体来看我们正朝着正确的方向发展","TRENDING, RIGHT, DIRECTION, OVERALL — optimistic","Don't say 'The general trajectory is positive'","We're trending in the + [adj] + direction + overall",["Things are moving the right way","Slow and steady gains across the board"]],
],
delegation: [
  ["{N}, can you own this deliverable by {T}?",[1,.3,.3,1,1,1,.3,1],"kæn juː oʊn ðɪs dɪˈlɪvərəbəl baɪ {T}","Assigning ownership with deadline","{N}，你能在{T}之前负责这个交付物吗？","{N}, OWN, DELIVERABLE, {T} — clear assignment","Don't say 'Please take responsibility for this'","{N}, can you own + [noun] + by + [time]?",["{N}, this one's yours by {T}","{N}, I need you to drive this"]],
  ["I'll trust you to handle this how you see fit",[.2,1,.3,.3,1,1,1,.3,1,1],"aɪl trʌst juː tə ˈhændəl ðɪs haʊ juː siː fɪt","Giving autonomy","我相信你按你的方式处理","TRUST, HANDLE, THIS, HOW, SEE, FIT — empowering","Don't say 'You have permission to proceed'","I'll trust you to handle this + [how clause]",["Run with it however makes sense","You've got full autonomy on this"]],
  ["Can you loop me in when it's ready for review?",[.3,.3,1,.3,1,.3,.3,1,.3,1],"kæn juː luːp mi ɪn wɛn ɪts ˈrɛdi fɔːr rɪˈvjuː","Requesting update at milestone","准备好可以审核时告诉我","LOOP, IN, READY, REVIEW — four checkpoints","Don't say 'Inform me when it is ready'","Can you loop me in when + [condition]?",["Just flag me when it's review-ready","Ping me when you've got something to show"]],
  ["I need you to take point on this project",[.2,1,.3,.3,1,1,.3,1,1],"aɪ niːd juː tə teɪk pɔɪnt ɒn ðɪs ˈprɒdʒɛkt","Putting someone in the lead","这个项目我需要你来带头","NEED, TAKE, POINT, THIS, PROJECT — commanding","Don't say 'You are appointed as lead'","I need you to take point on + [noun]",["You're driving this one","Consider yourself the lead here"]],
  ["Let's split this across the team and reconvene {T}",[.3,1,1,.3,.3,1,.3,1,1],"lɛts splɪt ðɪs əˈkrɒs ðə tiːm ænd ˌriːkənˈviːn {T}","Dividing work and regrouping","我们团队分工，{T}再碰面","SPLIT, THIS, TEAM, RECONVENE, {T} — organized","Don't say 'Distribute tasks among members'","Let's split this and reconvene + [time]",["Divide and conquer, meet back {T}","Everyone take a piece, regroup {T}"]],
  ["Don't boil the ocean, focus on the MVP first",[1,1,.3,1,1,.3,.3,1,1],"doʊnt bɔɪl ðə ˈoʊʃən ˈfoʊkəs ɒn ðə ˌɛmviːˈpiː fɜːrst","Don't try to do too much","别想一口吃成胖子，先做MVP","BOIL, OCEAN, FOCUS, MVP, FIRST — prioritization","Don't say 'Do not attempt excessive scope'","Don't boil the ocean, focus on + [noun] + first",["Start small, scale later","MVP first, polish later"]],
],
mentoring: [
  ["What's been your biggest challenge this week?",[1,.3,.3,1,1,1,1],"wɒts biːn jɔːr ˈbɪɡɪst ˈtʃælɪndʒ ðɪs wiːk","Checking in with mentee","这周你最大的挑战是什么？","WHAT'S, BIGGEST, CHALLENGE, THIS, WEEK — five beats","Don't say 'What difficulties did you encounter?'","What's been your biggest + [noun] + this + [time]?",["How's this week been for you?","Anything been tripping you up?"]],
  ["Don't be afraid to fail, that's how we learn",[1,.3,1,.3,1,1,.3,.3,1],"doʊnt biː əˈfreɪd tə feɪl ðæts haʊ wi lɜːrn","Encouraging risk-taking","别怕失败，那是我们学习的方式","DON'T, AFRAID, FAIL, THAT'S, HOW, LEARN — inspiring","Don't say 'Failure is acceptable for growth'","Don't be afraid to + [verb], that's how we + [verb]",["Mistakes are part of the process","Failure is just data, learn from it"]],
  ["I'm going to push you because I see potential",[.2,1,.3,1,.3,.3,.2,1,1],"aɪm ˈɡoʊɪŋ tə pʊʃ juː bɪˈkɒz aɪ siː pəˈtɛnʃəl","Explaining tough mentoring","我会推你因为我看到了潜力","GOING, PUSH, BECAUSE, SEE, POTENTIAL — motivational","Don't say 'I will challenge you for development'","I'm going to push you because I see + [noun]",["I wouldn't push if I didn't believe in you","High expectations means I believe you can deliver"]],
  ["What skills do you want to develop this quarter?",[1,1,.3,.3,1,.3,1,1,1],"wɒt skɪlz duː juː wɒnt tə dɪˈvɛləp ðɪs ˈkwɔːrtər","Goal-setting conversation","这个季度你想发展哪些技能？","WHAT, SKILLS, WANT, DEVELOP, THIS, QUARTER — growth","Don't say 'Which competencies do you wish to improve?'","What skills do you want to develop + [time]?",["Where do you want to grow?","What would level you up the most?"]],
  ["Let me share a mistake I made early in my career",[.3,.3,1,.3,1,.2,1,1,.3,.3,1],"lɛt mi ʃɛr ə mɪˈsteɪk aɪ meɪd ˈɜːrli ɪn maɪ kəˈrɪr","Sharing vulnerability","让我分享我职业生涯早期的一个错误","SHARE, MISTAKE, MADE, EARLY, CAREER — humble","Don't say 'I will describe a prior error'","Let me share a + [noun] + I made early in + [noun]",["I learned this the hard way","Here's something I wish someone told me"]],
  ["You're ready for more responsibility, trust yourself",[.3,1,.3,1,1,1,1],"jʊr ˈrɛdi fɔːr mɔːr rɪˌspɒnsəˈbɪlɪti trʌst jɔːrˈsɛlf","Building confidence","你已经准备好承担更多了，相信自己","READY, MORE, RESPONSIBILITY, TRUST, YOURSELF — empowering","Don't say 'You are capable of handling more'","You're ready for + [noun], trust yourself",["Step up, you've earned it","Believe in yourself, you've got this"]],
],
celebration: [
  ["That was absolutely phenomenal, well done team",[1,.3,1,1,1,1,1],"ðæt wɒz ˈæbsəluːtli fɪˈnɒmɪnəl wɛl dʌn tiːm","Celebrating a big win","太出色了，团队干得好","ABSOLUTELY, PHENOMENAL, WELL, DONE, TEAM — celebration","Don't say 'The performance was satisfactory'","That was absolutely + [adj], well done + [noun]",["Incredible work, everyone","You all knocked it out of the park"]],
  ["I just want to take a moment to celebrate this win",[.2,.3,1,.3,1,.3,1,.3,1,1],"aɪ dʒʌst wɒnt tə teɪk ə ˈmoʊmənt tə ˈsɛlɪbreɪt ðɪs wɪn","Pausing to appreciate success","我想花一刻时间庆祝这次胜利","WANT, TAKE, MOMENT, CELEBRATE, THIS, WIN — ritual","Don't say 'Let us acknowledge the achievement'","I want to take a moment to + [verb] + this + [noun]",["Before we move on, let's celebrate","This deserves a round of applause"]],
  ["This was a team effort and everyone delivered",[1,.3,.3,1,1,.3,1,1],"ðɪs wɒz ə tiːm ˈɛfərt ænd ˈɛvriˌwʌn dɪˈlɪvərd","Crediting the whole team","这是团队的努力，每个人都做到了","THIS, TEAM, EFFORT, EVERYONE, DELIVERED — collective","Don't say 'All participants contributed to the outcome'","This was a team effort and + [clause]",["Couldn't have done it without each of you","Every single person stepped up"]],
  ["Let's give {N} a round of applause",[.3,1,1,.3,1,.3,1],"lɛts ɡɪv {N} ə raʊnd əv əˈplɔːz","Publicly recognizing someone","让我们为{N}鼓掌","GIVE, {N}, ROUND, APPLAUSE — four beats","Don't say 'Please express approval for {N}'","Let's give + [name] + a round of applause",["{N} absolutely crushed it","{N} deserves a shout-out for this"]],
  ["We should be really proud of what we built",[.2,1,.3,1,1,.3,1,.3,1],"wi ʃʊd biː ˈrɪəli praʊd əv wɒt wi bɪlt","Reflecting on an achievement","我们应该为我们创造的东西感到自豪","SHOULD, REALLY, PROUD, WHAT, BUILT — reflective","Don't say 'The accomplishment warrants satisfaction'","We should be really proud of what we + [pp]",["Look at what we pulled off","This is something to be proud of"]],
  ["This calls for a celebration, drinks are on me",[1,1,.3,.3,1,1,.3,.3,1],"ðɪs kɔːlz fɔːr ə ˌsɛlɪˈbreɪʃən drɪŋks ɑːr ɒn miː","Treating the team","这值得庆祝，我请喝酒","THIS, CALLS, CELEBRATION, DRINKS, ON, ME — generous","Don't say 'We should have a social gathering'","This calls for a + [noun], drinks are on me",["Party time, I'm buying","This deserves champagne"]],
],
farewell: [
  ["It's been an absolute pleasure working with you",[.3,.3,.3,1,1,1,.3,1],"ɪts biːn ən ˈæbsəluːt ˈplɛʒər ˈwɜːrkɪŋ wɪð juː","Saying goodbye warmly","和你一起工作真的很愉快","ABSOLUTE, PLEASURE, WORKING, WITH — warm farewell","Don't say 'Collaborating with you was satisfactory'","It's been an absolute pleasure + [verb]ing with you",["Working with you has been amazing","I've really enjoyed being on this team with you"]],
  ["Don't be a stranger, keep in touch",[1,.3,.3,1,1,.3,1],"doʊnt biː ə ˈstreɪndʒər kiːp ɪn tʌtʃ","Encouraging future contact","别生疏了，保持联系","DON'T, STRANGER, KEEP, IN, TOUCH — warm","Don't say 'Please maintain communication'","Don't be a stranger, + [verb phrase]",["Stay in touch, yeah?","Let's not lose contact"]],
  ["You're going to crush it at your new role",[.3,1,.3,1,1,.3,.3,1,1],"jʊr ˈɡoʊɪŋ tə krʌʃ ɪt æt jɔːr njuː roʊl","Expressing confidence for their future","你在新岗位一定会很出色","GOING, CRUSH, IT, NEW, ROLE — encouraging","Don't say 'You will perform well at your next position'","You're going to crush it at + [noun phrase]",["They're lucky to have you","You're going to do amazing things"]],
  ["I'll miss having you on the team",[.2,1,1,.3,.3,.3,1],"aɪl mɪs ˈhævɪŋ juː ɒn ðə tiːm","Expressing genuine loss","我会想念你在团队里的时光","MISS, HAVING, ON, TEAM — emotional","Don't say 'Your departure will leave a gap'","I'll miss having you + [preposition phrase]",["Won't be the same without you","Big shoes to fill"]],
  ["This isn't goodbye, it's see you later",[1,.3,1,.3,1,.3,1,1],"ðɪs ˈɪzənt ɡʊdˈbaɪ ɪts siː juː ˈleɪtər","Optimistic farewell","这不是再见，是后会有期","ISN'T, GOODBYE, SEE, YOU, LATER — hopeful","Don't say 'Our separation is temporary'","This isn't + [noun], it's + [phrase]",["Not goodbye, just see you soon","Until we meet again"]],
  ["Best of luck with everything, you deserve it",[1,.3,1,.3,1,.3,1,1],"bɛst əv lʌk wɪð ˈɛvriθɪŋ juː dɪˈzɜːrv ɪt","Wishing well","祝一切顺利，你值得","BEST, LUCK, EVERYTHING, DESERVE, IT — warm closure","Don't say 'I wish you success in future endeavors'","Best of luck with + [noun], you deserve it",["All the best to you","You've earned every bit of success coming your way"]],
],
"small-talk": [
  ["How was your weekend, do anything fun?",[1,.3,.3,1,1,.3,1],"haʊ wɒz jɔːr ˈwiːkɛnd duː ˈɛniθɪŋ fʌn","Classic Monday opener","周末过得怎样，做了什么有趣的事？","HOW, WEEKEND, DO, ANYTHING, FUN — five beats","Don't say 'What activities did you engage in?'","How was your + [noun], do anything + [adj]?",["Good weekend?","What did you get up to this weekend?"]],
  ["Can you believe this weather we've been having?",[.3,.3,1,1,1,.3,.3,1],"kæn juː bɪˈliːv ðɪs ˈwɛðər wiːv biːn ˈhævɪŋ","Universal conversation starter","你能相信最近的天气吗？","BELIEVE, WEATHER, HAVING — three focal points","Don't say 'The meteorological conditions are remarkable'","Can you believe this + [noun]?",["Crazy weather lately, right?","What's with this weather?"]],
  ["Have you tried that new place on the corner?",[.3,.3,1,.3,1,1,.3,.3,1],"hæv juː traɪd ðæt njuː pleɪs ɒn ðə ˈkɔːrnər","Recommending something local","你试过街角那家新店吗？","TRIED, NEW, PLACE, CORNER — discovery rhythm","Don't say 'Are you aware of the recently opened establishment?'","Have you tried that + [adj] + [noun]?",["You've gotta check out that new spot","Have you been to the new place yet?"]],
  ["I've been binge-watching this show, it's so good",[.2,.3,1,1,1,1,.3,1,1],"aɪv biːn bɪndʒ ˈwɒtʃɪŋ ðɪs ʃoʊ ɪts soʊ ɡʊd","Sharing entertainment","我在追一部剧，太好看了","BINGE, WATCHING, THIS, SHOW, SO, GOOD — enthusiastic","Don't say 'I have viewed multiple episodes consecutively'","I've been binge-watching + [noun], it's so good",["You need to watch this show","I'm hooked on this new series"]],
  ["Any fun plans for the holiday?",[.3,1,1,.3,.3,1],"ˈɛni fʌn plænz fɔːr ðə ˈhɒlɪdeɪ","Pre-holiday question","假期有什么好玩的计划？","ANY, FUN, PLANS, HOLIDAY — four beats","Don't say 'What are your vacation arrangements?'","Any + [adj] + plans for + [noun]?",["Doing anything exciting for the break?","Big plans for the holiday?"]],
  ["I just started learning {S}, it's harder than it looks",[.2,.3,1,1,1,1,1,.3,.3,1],"aɪ dʒʌst ˈstɑːrtɪd ˈlɜːrnɪŋ {S} ɪts ˈhɑːrdər ðæn ɪt lʊks","Sharing a new hobby","我刚开始学{S}，比看起来难多了","STARTED, LEARNING, {S}, HARDER, LOOKS — humble","Don't say 'I commenced practicing a new activity'","I just started + [verb]ing + [noun], it's harder than it looks",["Picked up {S} recently, it's no joke","Trying to learn {S}, way tougher than expected"]],
],
travel: [
  ["Have you ever been to {P}? It's absolutely stunning",[.3,.3,1,.3,.3,1,.3,1,1],"hæv juː ˈɛvər biːn tə {P} ɪts ˈæbsəluːtli ˈstʌnɪŋ","Recommending a destination","你去过{P}吗？绝对令人惊叹","EVER, BEEN, {P}, ABSOLUTELY, STUNNING — five beats","Don't say 'Have you visited that location?'","Have you ever been to + [place]?",["You've got to visit {P}","{P} completely blew my mind"]],
  ["I'm dying to visit {P} one of these days",[.2,1,.3,1,1,1,.3,.3,1],"aɪm ˈdaɪɪŋ tə ˈvɪzɪt {P} wʌn əv ðiːz deɪz","Expressing travel desire","我好想去{P}","DYING, VISIT, {P}, ONE, THESE, DAYS — yearning","Don't say 'I want to travel to that destination'","I'm dying to + [verb] + [place]",["It's on my bucket list","{P} is calling my name"]],
  ["The best part about traveling is the food",[.3,1,1,.3,1,.3,.3,1],"ðə bɛst pɑːrt əˈbaʊt ˈtrævəlɪŋ ɪz ðə fuːd","Sharing travel philosophy","旅行最棒的部分是美食","BEST, PART, TRAVELING, FOOD — food-lover rhythm","Don't say 'Cuisine is the primary benefit of travel'","The best part about + [verb]ing + is + [noun]",["I travel for food honestly","Show me the local food and I'm happy"]],
  ["We got lost but ended up finding this amazing spot",[.2,1,1,.3,1,1,1,1,1,1],"wi ɡɒt lɒst bʌt ˈɛndɪd ʌp ˈfaɪndɪŋ ðɪs əˈmeɪzɪŋ spɒt","Happy travel accident","我们迷路了但发现了一个很棒的地方","GOT, LOST, ENDED, UP, FINDING, AMAZING, SPOT — adventure","Don't say 'We were lost and discovered a place'","We got lost but ended up + [verb]ing + [noun]",["Best things happen when you get lost","Sometimes the unplanned stops are the best"]],
  ["You absolutely have to try the local {F} when you're there",[.3,1,1,.3,1,.3,1,1,.3,.3,1],"juː ˈæbsəluːtli hæv tə traɪ ðə ˈloʊkəl {F} wɛn jʊr ðɛr","Must-do recommendation","去那里一定要尝尝当地的{F}","ABSOLUTELY, HAVE, TRY, LOCAL, {F}, THERE — insistent","Don't say 'Consuming regional cuisine is recommended'","You have to try the local + [food] + when you're there",["The {F} there is next level","Don't leave without trying the {F}"]],
  ["Traveling solo taught me so much about myself",[1,1,1,.3,.3,1,.3,1],"ˈtrævəlɪŋ ˈsoʊloʊ tɔːt mi soʊ mʌtʃ əˈbaʊt maɪˈsɛlf","Reflecting on solo travel","独自旅行让我更了解自己","TRAVELING, SOLO, TAUGHT, SO, MUCH, MYSELF — reflective","Don't say 'Independent travel enhanced self-awareness'","Traveling solo taught me + [clause]",["Solo travel changes you","You learn a lot about yourself when you travel alone"]],
],
food: [
  ["You have to try the {F} here, it's to die for",[.3,1,.3,1,.3,1,1,.3,.3,1,1],"juː hæv tə traɪ ðə {F} hɪr ɪts tə daɪ fɔːr","Enthusiastic food recommendation","你一定要试试这里的{F}，好吃到哭","HAVE, TRY, {F}, HERE, DIE, FOR — six beats","Don't say 'The food here is very good'","You have to try the + [food], it's to die for",["The {F} is insane","Honestly the best {F} I've ever had"]],
  ["I've been trying to eat healthier but pizza keeps winning",[.2,.3,1,.3,1,1,.3,1,1,1],"aɪv biːn ˈtraɪɪŋ tə iːt ˈhɛlθiər bʌt ˈpiːtsə kiːps ˈwɪnɪŋ","Relatable food struggle","我一直试着吃健康些但披萨总是赢","TRYING, EAT, HEALTHIER, PIZZA, KEEPS, WINNING — comedy","Don't say 'My dietary goals are consistently undermined'","I've been trying to + [verb] but + [noun] keeps winning",["My diet lasts about two hours","Salad for lunch, pizza for dinner"]],
  ["What's your go-to comfort food?",[1,.3,1,1,1],"wɒts jɔːr ˈɡoʊtuː ˈkʌmfərt fuːd","Asking about food preferences","你的安慰食物是什么？","WHAT'S, GO-TO, COMFORT, FOOD — four beats","Don't say 'What is your preferred food for relaxation?'","What's your go-to + [noun]?",["What do you crave when you're stressed?","What's your guilty pleasure food?"]],
  ["I could eat {F} every single day and not get tired of it",[.2,.3,1,1,1,1,1,.3,1,1,.3,.3],"aɪ kʊd iːt {F} ˈɛvri ˈsɪŋɡəl deɪ ænd nɒt ɡɛt ˈtaɪərd əv ɪt","Expressing food obsession","我可以每天吃{F}都不会腻","COULD, EAT, {F}, EVERY, SINGLE, DAY, NOT, TIRED — passionate","Don't say 'I have a strong preference for this food'","I could + [verb] + [noun] + every single day",["I never get sick of {F}","If I had to eat one thing forever, it'd be {F}"]],
  ["Let's grab lunch, I know a great spot nearby",[.3,1,1,.2,1,.3,1,1,1],"lɛts ɡræb lʌntʃ aɪ noʊ ə ɡreɪt spɒt ˈnɪrbaɪ","Suggesting a meal","去吃午饭吧，我知道附近有个好地方","GRAB, LUNCH, KNOW, GREAT, SPOT, NEARBY — decisive","Don't say 'Shall we eat at a restaurant?'","Let's grab + [meal], I know a great spot",["Lunch? I know just the place","Come on, I'm taking you to this amazing spot"]],
  ["The secret ingredient is always love, and garlic",[.3,1,1,.3,1,1,.3,1],"ðə ˈsiːkrɪt ɪnˈɡriːdiənt ɪz ˈɔːlweɪz lʌv ænd ˈɡɑːrlɪk","Cooking wisdom with humor","秘密配料永远是爱和大蒜","SECRET, INGREDIENT, ALWAYS, LOVE, GARLIC — comedy","Don't say 'Affection is the primary seasoning'","The secret ingredient is always + [noun]",["You can never add too much garlic","Love makes everything taste better"]],
],
health: [
  ["I've been trying to get into a better morning routine",[.2,.3,1,.3,1,.3,.3,1,1,1],"aɪv biːn ˈtraɪɪŋ tə ɡɛt ˈɪntə ə ˈbɛtər ˈmɔːrnɪŋ ruːˈtiːn","Self-improvement goal","我一直在试着建立更好的晨间习惯","TRYING, GET, INTO, BETTER, MORNING, ROUTINE — aspirational","Don't say 'I am attempting to modify my wake-up habits'","I've been trying to get into a better + [noun] + routine",["Working on my morning routine","Mornings make or break my whole day"]],
  ["Sleep is so underrated, I need at least eight hours",[1,.3,.3,1,.2,1,.3,1,1,1],"sliːp ɪz soʊ ˌʌndərˈreɪtɪd aɪ niːd æt liːst eɪt ˈaʊərz","Valuing sleep","睡眠太被低估了，我至少需要八小时","SLEEP, UNDERRATED, NEED, LEAST, EIGHT, HOURS — six beats","Don't say 'Adequate rest is important'","Sleep is so underrated, I need + [amount]",["Never compromise on sleep","Eight hours minimum, no negotiation"]],
  ["I've been feeling so much better since I started {S}",[.2,.3,1,.3,1,1,1,.2,1,1],"aɪv biːn ˈfiːlɪŋ soʊ mʌtʃ ˈbɛtər sɪns aɪ ˈstɑːrtɪd {S}","Positive health change","自从开始{S}以来我感觉好多了","FEELING, SO, MUCH, BETTER, SINCE, STARTED, {S} — progress","Don't say 'My wellness improved after beginning the activity'","I've been feeling better since I started + [activity]",["Best decision I ever made was starting {S}","{S} changed my life, honestly"]],
  ["You should take a break, burnout is real",[.3,1,1,.3,1,1,.3,1],"juː ʃʊd teɪk ə breɪk ˈbɜːrnaʊt ɪz rɪəl","Advising against overwork","你应该休息一下，过度劳累是真的","SHOULD, TAKE, BREAK, BURNOUT, IS, REAL — caring","Don't say 'Consider resting to prevent exhaustion'","You should take a break, + [reason]",["Don't burn yourself out","Rest is productive too"]],
  ["Drinking more water is the easiest health hack",[1,1,1,.3,.3,1,1,1],"ˈdrɪŋkɪŋ mɔːr ˈwɔːtər ɪz ðə ˈiːziəst hɛlθ hæk","Simple health tip","多喝水是最简单的健康小技巧","DRINKING, MORE, WATER, EASIEST, HEALTH, HACK — simple","Don't say 'Hydration is the simplest improvement'","[verb]ing more + [noun] + is the easiest + [noun] hack",["Water fixes everything","Stay hydrated, it's that simple"]],
  ["Mental health is just as important as physical health",[1,1,.3,1,.3,1,.3,1,1],"ˈmɛntəl hɛlθ ɪz dʒʌst æz ɪmˈpɔːrtənt æz ˈfɪzɪkəl hɛlθ","Advocating for mental wellness","心理健康和身体健康一样重要","MENTAL, HEALTH, JUST, IMPORTANT, PHYSICAL, HEALTH — balanced","Don't say 'Psychological wellbeing equals physical wellbeing'","Mental health is just as important as + [noun]",["Take care of your mind too","Don't ignore the mental side"]],
],
sports: [
  ["Did you catch the game last night? What a finish!",[.3,.3,1,.3,1,1,1,.3,1],"dɪd juː kætʃ ðə ɡeɪm læst naɪt wɒt ə ˈfɪnɪʃ","Discussing sports results","你看了昨晚的比赛吗？太精彩了！","CATCH, GAME, LAST, NIGHT, WHAT, FINISH — excitement","Don't say 'Did you observe the sporting event?'","Did you catch the game + [time]?",["That ending was insane","Best game I've seen in years"]],
  ["I've been getting into {S} lately, it's so addictive",[.2,.3,1,1,1,1,1,.3,1],"aɪv biːn ˈɡɛtɪŋ ˈɪntə {S} ˈleɪtli ɪts soʊ əˈdɪktɪv","New sports hobby","我最近迷上了{S}，太上瘾了","GETTING, INTO, {S}, LATELY, ADDICTIVE — building excitement","Don't say 'I have recently developed interest in a sport'","I've been getting into + [sport] + lately",["Can't stop doing {S}","Totally hooked on {S}"]],
  ["You should come work out with me sometime",[.3,1,1,1,1,.3,1,1],"juː ʃʊd kʌm ˈwɜːrk aʊt wɪð mi ˈsʌmtaɪm","Inviting someone to exercise","你应该找个时间和我一起锻炼","SHOULD, COME, WORK, OUT, WITH, ME, SOMETIME — inviting","Don't say 'Would you like to exercise together?'","You should come + [verb] + with me sometime",["Let's hit the gym together","Join me for {S} sometime"]],
  ["My legs are killing me from yesterday's workout",[.3,1,.3,1,1,.3,1,1],"maɪ lɛɡz ɑːr ˈkɪlɪŋ miː frɒm ˈjɛstərdeɪz ˈwɜːrkaʊt","Post-workout soreness","昨天锻炼完我的腿要废了","LEGS, KILLING, ME, YESTERDAY'S, WORKOUT — five beats","Don't say 'My muscles are sore from exercise'","My + [body part] + is killing me from + [noun]",["I can barely walk today","That workout destroyed me in the best way"]],
  ["Practice doesn't make perfect, it makes progress",[1,.3,1,1,.3,1,1],"ˈpræktɪs ˈdʌzənt meɪk ˈpɜːrfɪkt ɪt meɪks ˈprɒɡrɛs","Motivational sports wisdom","练习不是为了完美，是为了进步","PRACTICE, DOESN'T, PERFECT, MAKES, PROGRESS — wisdom","Don't say 'Repetition leads to improvement'","Practice doesn't make + [adj], it makes + [noun]",["Progress over perfection","Every rep counts, even the ugly ones"]],
  ["It's not about winning, it's about showing up",[.3,1,.3,1,.3,1,.3,1,1],"ɪts nɒt əˈbaʊt ˈwɪnɪŋ ɪts əˈbaʊt ˈʃoʊɪŋ ʌp","Sports philosophy","不在于赢，在于出现","NOT, ABOUT, WINNING, ABOUT, SHOWING, UP — parallel","Don't say 'Attendance matters more than victory'","It's not about + [noun], it's about + [verb]ing + [particle]",["Just showing up is half the battle","Consistency beats talent every time"]],
],
music: [
  ["Have you heard the new album? It's absolutely fire",[.3,.3,1,.3,1,1,.3,1,1],"hæv juː hɜːrd ðə njuː ˈælbəm ɪts ˈæbsəluːtli ˈfaɪər","Recommending music","你听过新专辑吗？绝对是火","HEARD, NEW, ALBUM, ABSOLUTELY, FIRE — five beats","Don't say 'Have you listened to the recent music release?'","Have you heard the new + [noun]?",["This album is unreal","Put this on, you won't regret it"]],
  ["I could listen to {G} all day and never get bored",[.2,.3,1,.3,1,1,1,.3,1,1],"aɪ kʊd ˈlɪsən tə {G} ɔːl deɪ ænd ˈnɛvər ɡɛt bɔːrd","Expressing music love","我可以整天听{G}都不会无聊","COULD, LISTEN, {G}, ALL, DAY, NEVER, BORED — passionate","Don't say 'I have a strong preference for this genre'","I could listen to + [genre] + all day",["Put on some {G} and I'm happy","{G} just hits different"]],
  ["Music is the one thing that always lifts my mood",[1,.3,.3,1,1,.3,1,1,.3,1],"ˈmjuːzɪk ɪz ðə wʌn θɪŋ ðæt ˈɔːlweɪz lɪfts maɪ muːd","Music as therapy","音乐是永远能提升我心情的东西","MUSIC, ONE, THING, ALWAYS, LIFTS, MOOD — six beats","Don't say 'Music has a positive effect on emotions'","Music is the one thing that always + [verb phrase]",["Nothing a good playlist can't fix","Music heals everything"]],
  ["I've been learning guitar, my fingers are wrecked",[.2,.3,1,1,.3,1,.3,1],"aɪv biːn ˈlɜːrnɪŋ ɡɪˈtɑːr maɪ ˈfɪŋɡərz ɑːr rɛkt","Learning an instrument","我在学吉他，手指都磨烂了","BEEN, LEARNING, GUITAR, FINGERS, WRECKED — five beats","Don't say 'I am studying a musical instrument'","I've been learning + [instrument], my fingers are + [adj]",["Guitar is humbling","Three chords in and I'm already struggling"]],
  ["Live music hits completely different, you know?",[1,1,1,1,1,.3,1],"laɪv ˈmjuːzɪk hɪts kəmˈpliːtli ˈdɪfrənt juː noʊ","Praising live performances","现场音乐的感觉完全不同","LIVE, MUSIC, HITS, COMPLETELY, DIFFERENT — experience","Don't say 'Attending concerts is superior to recordings'","Live + [noun] + hits completely different",["Nothing beats a live show","The energy at concerts is unmatched"]],
  ["What's on your playlist right now?",[1,.3,.3,1,1,1],"wɒts ɒn jɔːr ˈpleɪlɪst raɪt naʊ","Asking about current music","你现在的歌单里有什么？","WHAT'S, ON, PLAYLIST, RIGHT, NOW — curiosity","Don't say 'What music are you currently listening to?'","What's on your + [noun] + right now?",["What have you been listening to?","Any song recommendations?"]],
],
science: [
  ["The implications of this research are mind-blowing",[.3,1,.3,1,1,.3,1],"ðə ˌɪmplɪˈkeɪʃənz əv ðɪs rɪˈsɜːrtʃ ɑːr ˈmaɪndˌbloʊɪŋ","Expressing awe at science","这项研究的意义令人震惊","IMPLICATIONS, THIS, RESEARCH, MIND-BLOWING — four beats","Don't say 'The results are significant'","The implications of + [noun] + are mind-blowing",["This changes everything we thought we knew","The science behind this is incredible"]],
  ["We're living in the future and don't even realize it",[.3,1,.3,.3,1,.3,1,1,1,.3],"wɪr ˈlɪvɪŋ ɪn ðə ˈfjuːtʃər ænd doʊnt ˈiːvən ˈrɪəlaɪz ɪt","Tech amazement","我们活在未来却没意识到","LIVING, IN, FUTURE, DON'T, EVEN, REALIZE — awe","Don't say 'Current technology is very advanced'","We're living in the + [noun] + and don't even realize it",["The future is already here","How is this not science fiction?"]],
  ["That's a fascinating question, I never thought of it that way",[1,.3,1,1,.2,1,1,.3,.3,1,1],"ðæts ə ˈfæsɪneɪtɪŋ ˈkwɛstʃən aɪ ˈnɛvər θɔːt əv ɪt ðæt weɪ","Intellectual curiosity","这是个很好的问题，我从没这样想过","THAT'S, FASCINATING, QUESTION, NEVER, THOUGHT, WAY — curious","Don't say 'Your question is interesting'","That's a fascinating + [noun], I never thought of it that way",["What a great question","Huh, I never considered that angle"]],
  ["The more we learn, the more we realize we don't know",[.3,1,.3,1,.3,1,.3,1,.3,1,1],"ðə mɔːr wi lɜːrn ðə mɔːr wi ˈrɪəlaɪz wi doʊnt noʊ","Intellectual humility","我们学得越多，越发现自己不知道的越多","MORE, LEARN, MORE, REALIZE, DON'T, KNOW — mirror structure","Don't say 'Knowledge reveals ignorance'","The more we + [verb], the more we realize + [clause]",["Every answer raises ten new questions","Science is humbling like that"]],
  ["Space exploration is humanity's greatest adventure",[1,1,.3,1,1,1],"speɪs ˌɛkspləˈreɪʃən ɪz hjuːˈmænɪtiz ˈɡreɪtɪst ədˈvɛntʃər","Praising space science","太空探索是人类最伟大的冒险","SPACE, EXPLORATION, HUMANITY'S, GREATEST, ADVENTURE — epic","Don't say 'Outer space research is important'","Space exploration is + [possessive] + greatest + [noun]",["The final frontier is calling","What's more inspiring than reaching for the stars?"]],
],
nature: [
  ["There's nothing like watching the sunset after a long day",[.3,1,1,1,.3,1,.3,.3,1,1],"ðɛrz ˈnʌθɪŋ laɪk ˈwɒtʃɪŋ ðə ˈsʌnsɛt ˈæftər ə lɒŋ deɪ","Appreciating nature","没有什么比漫长一天后看日落更好的了","NOTHING, LIKE, WATCHING, SUNSET, AFTER, LONG, DAY — peaceful","Don't say 'Viewing the sun descend is pleasant'","There's nothing like + [verb]ing + [noun] + after + [noun]",["Sunsets hit different after a hard day","Nature's free therapy"]],
  ["I need to spend more time outdoors, honestly",[.2,1,.3,1,1,1,1,1],"aɪ niːd tə spɛnd mɔːr taɪm aʊtˈdɔːrz ˈɒnɪstli","Wanting more nature","说实话我需要多花时间在户外","NEED, SPEND, MORE, TIME, OUTDOORS, HONESTLY — self-aware","Don't say 'I should increase outdoor activities'","I need to spend more time + [adverb/location]",["Getting outside more is my goal","Fresh air fixes everything"]],
  ["The mountains are calling and I must go",[.3,1,.3,1,.3,.2,1,1],"ðə ˈmaʊntɪnz ɑːr ˈkɔːlɪŋ ænd aɪ mʌst ɡoʊ","Nature calling","山在召唤，我必须出发","MOUNTAINS, CALLING, MUST, GO — Muir quote rhythm","Don't say 'I wish to visit elevated terrain'","The + [noun] + is calling and I must go",["Nature is calling my name","Time to get out there"]],
  ["Have you ever seen the northern lights? Life-changing",[.3,.3,1,1,.3,1,1,1],"hæv juː ˈɛvər siːn ðə ˈnɔːrðərn laɪts ˈlaɪf ˈtʃeɪndʒɪŋ","Sharing a nature experience","你见过北极光吗？改变人生的体验","EVER, SEEN, NORTHERN, LIGHTS, LIFE-CHANGING — awe","Don't say 'The aurora borealis is visually impressive'","Have you ever seen + [noun]? + [adj]",["Bucket list stuff right there","Nothing compares to seeing it in person"]],
  ["Being in nature just clears my head completely",[1,.3,1,1,1,.3,1,1],"ˈbiːɪŋ ɪn ˈneɪtʃər dʒʌst klɪrz maɪ hɛd kəmˈpliːtli","Nature as therapy","身处自然中完全让我头脑清醒","BEING, NATURE, JUST, CLEARS, HEAD, COMPLETELY — calming","Don't say 'Natural environments improve cognition'","Being in nature just + [verb phrase]",["Nature is the best reset button","Trees are better than therapy"]],
  ["We really need to take better care of the planet",[.2,1,1,.3,1,1,1,.3,.3,1],"wi ˈrɪəli niːd tə teɪk ˈbɛtər kɛr əv ðə ˈplænɪt","Environmental concern","我们真的需要更好地爱护地球","REALLY, NEED, TAKE, BETTER, CARE, PLANET — urgent","Don't say 'Environmental preservation is necessary'","We really need to take better care of + [noun]",["The planet needs us to step up","Sustainability isn't optional anymore"]],
],
social: [
  ["That post went completely viral overnight",[1,1,1,1,1,1],"ðæt poʊst wɛnt kəmˈpliːtli ˈvaɪrəl ˌoʊvərˈnaɪt","Content going viral","那条帖子一夜之间完全火了","THAT, POST, WENT, COMPLETELY, VIRAL, OVERNIGHT — surprise","Don't say 'The content achieved wide distribution'","That + [noun] + went completely viral + [time]",["It blew up out of nowhere","The internet went crazy for it"]],
  ["Social media is a double-edged sword, honestly",[1,1,.3,.3,1,1,1],"ˈsoʊʃəl ˈmiːdiə ɪz ə ˈdʌbəl ɛdʒd sɔːrd ˈɒnɪstli","Mixed feelings about social media","说实话社交媒体是把双刃剑","SOCIAL, MEDIA, DOUBLE-EDGED, SWORD, HONESTLY — balanced","Don't say 'Online platforms have advantages and disadvantages'","Social media is a + [adj] + [noun], honestly",["Love-hate relationship with social media","It connects us but also drains us"]],
  ["I need to take a break from my phone for a while",[.2,1,.3,1,.3,1,.3,.3,1,.3,.3,1],"aɪ niːd tə teɪk ə breɪk frɒm maɪ foʊn fɔːr ə waɪl","Digital detox","我需要暂时远离手机一阵子","NEED, TAKE, BREAK, FROM, PHONE, WHILE — self-care","Don't say 'I should reduce device usage'","I need to take a break from + [noun] + for a while",["Digital detox time","My screen time report was scary"]],
  ["The algorithm really knows me too well",[.3,1,1,1,.3,1,1],"ðə ˈælɡəˌrɪðəm ˈrɪəli noʊz mi tuː wɛl","Algorithm awareness","算法真的太了解我了","ALGORITHM, REALLY, KNOWS, ME, TOO, WELL — modern life","Don't say 'The recommendation system is accurate'","The algorithm + [adverb] + knows me too well",["My feed is eerily accurate","How does it know exactly what I want?"]],
  ["I saw the funniest thing online today",[.2,1,.3,1,1,1,1],"aɪ sɔː ðə ˈfʌniɪst θɪŋ ˌɒnˈlaɪn təˈdeɪ","Sharing internet content","我今天在网上看到了最搞笑的东西","SAW, FUNNIEST, THING, ONLINE, TODAY — five beats","Don't say 'I viewed amusing content on the internet'","I saw the + [superlative] + thing online + [time]",["Wait till you see this","You're not going to believe what I found"]],
  ["Content creation is way harder than it looks",[1,1,.3,1,1,.3,.3,1],"ˈkɒntɛnt kriˈeɪʃən ɪz weɪ ˈhɑːrdər ðæn ɪt lʊks","Respecting creators","内容创作比看起来难多了","CONTENT, CREATION, WAY, HARDER, LOOKS — respect","Don't say 'Producing digital media is difficult'","Content creation is way + [comparative] + than it looks",["Making good content takes serious work","People don't realize what goes into this"]],
],
dating: [
  ["We just clicked right away, it was so natural",[.2,.3,1,1,1,.3,.3,1,1],"wi dʒʌst klɪkt raɪt əˈweɪ ɪt wɒz soʊ ˈnætʃərəl","Instant connection","我们立刻就来电了，特别自然","JUST, CLICKED, RIGHT, AWAY, SO, NATURAL — chemistry","Don't say 'We experienced immediate compatibility'","We just clicked + [adverb], it was so + [adj]",["The chemistry was instant","It felt like we'd known each other forever"]],
  ["Communication is the foundation of any good relationship",[1,.3,.3,1,.3,.3,1,1],"kəˌmjuːnɪˈkeɪʃən ɪz ðə faʊnˈdeɪʃən əv ˈɛni ɡʊd rɪˈleɪʃənʃɪp","Relationship advice","沟通是任何良好关系的基础","COMMUNICATION, FOUNDATION, ANY, GOOD, RELATIONSHIP — wisdom","Don't say 'Verbal exchange is important in partnerships'","Communication is the foundation of + [noun phrase]",["Talk to each other, it's that simple","Relationships live and die by communication"]],
  ["Long distance is tough but we're making it work",[1,1,.3,1,.3,.3,1,.3,1],"lɒŋ ˈdɪstəns ɪz tʌf bʌt wɪr ˈmeɪkɪŋ ɪt wɜːrk","Long-distance relationship","异地恋很难但我们在努力让它行得通","LONG, DISTANCE, TOUGH, MAKING, IT, WORK — resilient","Don't say 'Geographical separation is challenging'","Long distance is tough but we're + [verb]ing + it work",["It's not easy but totally worth it","Distance makes the heart grow fonder, for real"]],
  ["It's important to have your own space in a relationship",[.3,1,.3,1,.3,1,1,.3,.3,1],"ɪts ɪmˈpɔːrtənt tə hæv jɔːr oʊn speɪs ɪn ə rɪˈleɪʃənʃɪp","Healthy boundaries","在关系中拥有自己的空间很重要","IMPORTANT, HAVE, OWN, SPACE, IN, RELATIONSHIP — balanced","Don't say 'Individual autonomy matters in partnerships'","It's important to have + [noun phrase] + in a relationship",["Healthy boundaries make healthy relationships","You can be together without being attached at the hip"]],
  ["Actions speak louder than words in love",[1,1,1,.3,1,.3,1],"ˈækʃənz spiːk ˈlaʊdər ðæn wɜːrdz ɪn lʌv","Love languages","在爱情中行动胜于言语","ACTIONS, SPEAK, LOUDER, THAN, WORDS, LOVE — proverb","Don't say 'Behavioral demonstration exceeds verbal expression'","Actions speak louder than words in + [noun]",["Show don't tell","It's the little things that matter most"]],
  ["We bring out the best in each other",[.2,1,1,.3,1,.3,1,1],"wi brɪŋ aʊt ðə bɛst ɪn iːtʃ ˈʌðər","Mutual growth","我们让彼此变得更好","WE, BRING, OUT, BEST, IN, EACH, OTHER — mutual","Don't say 'We positively influence one another'","We bring out the best in + [pronoun phrase]",["We make each other better","Together we're stronger than apart"]],
],
shopping: [
  ["I've been eyeing this for weeks, I'm finally getting it",[.2,.3,1,1,.3,1,.2,1,1,.3],"aɪv biːn ˈaɪɪŋ ðɪs fɔːr wiːks aɪm ˈfaɪnəli ˈɡɛtɪŋ ɪt","Finally buying something","我看了好几周了，终于要买了","BEEN, EYEING, THIS, FOR, WEEKS, FINALLY, GETTING — anticipation","Don't say 'I have observed this product for a duration'","I've been eyeing this for + [time], I'm finally + [verb]ing it",["Take my money already","I've wanted this forever"]],
  ["Is this on sale or is that the regular price?",[.3,1,.3,1,.3,.3,1,.3,1,1],"ɪz ðɪs ɒn seɪl ɔːr ɪz ðæt ðə ˈrɛɡjʊlər praɪs","Asking about price","这是打折还是原价？","IS, THIS, ON, SALE, OR, REGULAR, PRICE — seven beats","Don't say 'Is a discount currently applied?'","Is this on sale or is that the + [adj] + price?",["Any deals going on?","What's the damage?"]],
  ["I don't need it but I definitely want it",[.2,1,1,.3,.3,.2,1,1,.3],"aɪ doʊnt niːd ɪt bʌt aɪ ˈdɛfɪnɪtli wɒnt ɪt","Shopping temptation","我不需要但我绝对想要","DON'T, NEED, IT, DEFINITELY, WANT, IT — internal debate","Don't say 'The purchase is unnecessary but desired'","I don't need it but I + [adverb] + want it",["My wallet says no but my heart says yes","It's a want, not a need, but still"]],
  ["This is such a good deal, I can't pass it up",[1,.3,1,.3,1,1,.2,1,1,.3,1],"ðɪs ɪz sʌtʃ ə ɡʊd diːl aɪ kænt pæs ɪt ʌp","Can't resist a deal","这个优惠太好了，我不能错过","THIS, SUCH, GOOD, DEAL, CAN'T, PASS, IT, UP — urgency","Don't say 'The value proposition is compelling'","This is such a good deal, I can't + [verb] + it up",["Too good to pass up","I'd be losing money NOT buying it"]],
  ["Let me sleep on it before I decide",[.3,.3,1,.3,.3,.3,.2,1],"lɛt mi sliːp ɒn ɪt bɪˈfɔːr aɪ dɪˈsaɪd","Being cautious with spending","让我考虑一晚再决定","LET, SLEEP, ON, IT, BEFORE, DECIDE — measured","Don't say 'I will consider the purchase overnight'","Let me sleep on it before I + [verb]",["I never buy on impulse anymore","Give me a night to think about it"]],
  ["I just got the best deal on this, look!",[.2,.3,1,.3,1,1,.3,1,1],"aɪ dʒʌst ɡɒt ðə bɛst diːl ɒn ðɪs lʊk","Sharing a shopping win","我刚买到了最好的价格，你看！","JUST, GOT, BEST, DEAL, ON, THIS, LOOK — excited","Don't say 'I obtained a favorable price for this item'","I just got the best deal on + [noun]",["Guess how much I paid for this","You won't believe what I got this for"]],
],
};

// ─── Category Icons (text-based, no emoji) ────────────────────────
const CAT_ICONS = {
  greetings:'Hi',negotiations:'$',leadership:'★',tech:'</>',sales:'%',
  conflict:'!!',networking:'@',presentations:'◈',meetings:'●',emails:'✉',
  interviews:'?!',feedback:'↑',strategy:'◆',brainstorming:'✦',reporting:'#',
  delegation:'→',mentoring:'♡',celebration:'★',farewell:'~',"small-talk":'...',
  travel:'✈',food:'♨',health:'+',sports:'⚑',music:'♪',science:'∞',
  nature:'❋',social:'@',dating:'♡',shopping:'$',
};

// ─── Slot Filler ──────────────────────────────────────────────────
function fillSlots(str, rng) {
  return str
    .replace(/\{N\}/g, () => pick(NAMES, rng))
    .replace(/\{D\}/g, () => pick(DEPTS, rng))
    .replace(/\{M\}/g, () => pick(METRICS, rng))
    .replace(/\{T\}/g, () => pick(TIMES, rng))
    .replace(/\{A\}/g, () => pick(ADJS, rng))
    .replace(/\{#\}/g, () => pick(NUMS, rng))
    .replace(/\{F\}/g, () => pick(FOODS, rng))
    .replace(/\{P\}/g, () => pick(PLACES, rng))
    .replace(/\{S\}/g, () => pick(SPORTS, rng))
    .replace(/\{G\}/g, () => pick(GENRES, rng));
}

// ─── Generate Day Content (Day 15+) ──────────────────────────────
// Returns { sentences: [...], scenes: {...} } matching static day format
export function generateDay(dayNumber) {
  const seed = hashStr('rhythm-english-day-' + dayNumber);
  const rng = mulberry32(seed);

  // IELTS weighting increases with day number (Day 23+)
  // Days 23-60: 2x IELTS weight | Days 61-120: 3x | Days 121+: 4x
  const ieltsKeys = Object.keys(IELTS_CATS || {}).filter(k => TPL[k] && TPL[k].length >= 5);
  const bizKeys = CAT_KEYS.filter(k => !k.startsWith('ielts_') && TPL[k] && TPL[k].length >= 5);
  const ieltsWeight = dayNumber <= 60 ? 2 : dayNumber <= 120 ? 3 : 4;
  const pool = [...bizKeys];
  for (let w = 0; w < ieltsWeight; w++) pool.push(...ieltsKeys);

  const availCats = pool.filter(k => TPL[k] && TPL[k].length >= 5);
  const chosenCats = pickN(availCats, 6, rng);

  const sentences = [];
  const scenes = {};
  const baseId = (dayNumber - 1) * 30 + 1;

  let si = 0;
  for (const catKey of chosenCats) {
    const cat = CATS[catKey];
    const templates = TPL[catKey];
    const chosen = pickN(templates, 5, rng);

    for (const tpl of chosen) {
      const id = baseId + si;
      const text = fillSlots(tpl[0], rng);
      const words = text.split(/\s+/);

      // Adapt stress array to match actual word count after slot-fill
      const rawStress = tpl[1] || [];
      const stress = [];
      for (let w = 0; w < words.length; w++) {
        stress.push(w < rawStress.length ? rawStress[w] : 0.3);
      }

      sentences.push({
        id,
        cat: catKey,
        scene: (SCENE_TITLES[catKey] ? pick(SCENE_TITLES[catKey], rng) : cat.n).toLowerCase(),
        text,
        words,
        stress,
        ipa: fillSlots(tpl[2], rng),
        meaning: tpl[3],
        cn: fillSlots(tpl[4], rng),
        trap: tpl[6],
        tip: tpl[5],
        pattern: tpl[7],
        variants: (tpl[8] || []).map(v => fillSlots(v, rng))
      });

      scenes[id] = {
        icon: CAT_ICONS[catKey] || '●',
        colors: cat.c,
        title: pick(SCENE_TITLES[catKey] || [cat.n], rng),
        sub: cat.n
      };

      si++;
    }
  }

  return { sentences, scenes };
}
