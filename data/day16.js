// ─── Day 16 · IELTS Part 1 — Work & Studies ─────────────────────
// 30 sentences (id 451-480)

const s451 = {
  id: 451,
  cat: "Work & Study",
  scene: "career",
  text: "I'm currently working as a software engineer.",
  words: ["I'm","currently","working","as","a","software","engineer"],
  stress: [0.2, 0.7, 1.0, 0.2, 0.1, 1.0, 1.0],
  ipa: "/aɪm ˈkʌrəntli ˈwɜːkɪŋ əz ə ˈsɒftweə ˌendʒɪˈnɪə/",
  meaning: "Part1最基础的职业描述——简洁直接",
  cn: "我目前是一名软件工程师。",
  trap: "Now I am doing software engineer work.",
  tip: "CURRENTLY 重在第一音节，WORKING 和 SOFTWARE ENGINEER 是两个节奏组",
  pattern: "I'm currently working as a + [job title]",
  variants: ["I work in software engineering.", "My current role is as a software developer.", "I'm a software engineer by profession."]
};

const s452 = {
  id: 452,
  cat: "Work & Study",
  scene: "career",
  text: "I've been in this role for roughly two years.",
  words: ["I've","been","in","this","role","for","roughly","two","years"],
  stress: [0.2, 0.5, 0.2, 0.3, 1.0, 0.1, 0.7, 0.8, 1.0],
  ipa: "/aɪv biːn ɪn ðɪs rəʊl fər ˈrʌfli tuː jɪəz/",
  meaning: "用现在完成时描述工作时长——语法精准",
  cn: "我在这个岗位大概两年了。",
  trap: "I do this job already two years.",
  tip: "ROLE 是核心词重读，ROUGHLY 替代 about 更自然，TWO YEARS 结尾重音",
  pattern: "I've been in this role for roughly + [time period]",
  variants: ["I've had this job for about two years.", "It's been around two years since I started.", "I took this position roughly two years ago."]
};

const s453 = {
  id: 453,
  cat: "Work & Study",
  scene: "career",
  text: "What I enjoy most about my job is the problem-solving aspect.",
  words: ["What","I","enjoy","most","about","my","job","is","the","problem-solving","aspect"],
  stress: [0.3, 0.2, 1.0, 1.0, 0.3, 0.2, 1.0, 0.2, 0.1, 1.0, 1.0],
  ipa: "/wɒt aɪ ɪnˈdʒɔɪ məʊst əˈbaʊt maɪ dʒɒb ɪz ðə ˈprɒbləm ˌsɒlvɪŋ ˈæspekt/",
  meaning: "what引导的强调句式——高分结构",
  cn: "我工作中最享受的是解决问题这个部分。",
  trap: "I most like the job's solving problems part.",
  tip: "ENJOY MOST 连读强调，PROBLEM-SOLVING ASPECT 作为一个信息组",
  pattern: "What I enjoy most about my job is the + [noun] + aspect",
  variants: ["The best part of my job is tackling challenges.", "I love the puzzle-solving element of what I do.", "Problem-solving is what gets me out of bed in the morning."]
};

const s454 = {
  id: 454,
  cat: "Work & Study",
  scene: "career",
  text: "I'm actually studying for my master's degree at the moment.",
  words: ["I'm","actually","studying","for","my","master's","degree","at","the","moment"],
  stress: [0.2, 0.7, 1.0, 0.1, 0.2, 1.0, 1.0, 0.2, 0.1, 0.7],
  ipa: "/aɪm ˈæktʃuəli ˈstʌdiɪŋ fə maɪ ˈmɑːstəz dɪˈɡriː ət ðə ˈməʊmənt/",
  meaning: "用 actually 和 at the moment 让回答更真实自然",
  cn: "我目前其实正在读硕士。",
  trap: "Now I am reading master degree.",
  tip: "ACTUALLY 增加真实感，STUDYING 和 MASTER'S DEGREE 是双重音组",
  pattern: "I'm actually + [verb]ing + for my + [qualification] + at the moment",
  variants: ["I'm in the middle of doing my master's.", "I'm currently pursuing a postgraduate degree.", "I went back to do my master's last year."]
};

const s455 = {
  id: 455,
  cat: "Work & Study",
  scene: "career",
  text: "My typical day involves a lot of meetings and emails.",
  words: ["My","typical","day","involves","a","lot","of","meetings","and","emails"],
  stress: [0.2, 1.0, 1.0, 0.8, 0.1, 0.7, 0.1, 1.0, 0.1, 1.0],
  ipa: "/maɪ ˈtɪpɪkəl deɪ ɪnˈvɒlvz ə lɒt əv ˈmiːtɪŋz ənd ˈiːmeɪlz/",
  meaning: "描述日常工作——involves 比 has 更高级",
  cn: "我典型的一天包括大量的会议和邮件。",
  trap: "My every day has many meetings and emails.",
  tip: "TYPICAL DAY 连读，INVOLVES 重在 -VOLVES，MEETINGS 和 EMAILS 并列重音",
  pattern: "My typical day involves a lot of + [noun] + and + [noun]",
  variants: ["A normal day for me is packed with meetings.", "Most of my day is spent in meetings and on email.", "My days are mainly filled with back-to-back meetings."]
};

const s456 = {
  id: 456,
  cat: "Work & Study",
  scene: "career",
  text: "I chose this field because I've always been fascinated by technology.",
  words: ["I","chose","this","field","because","I've","always","been","fascinated","by","technology"],
  stress: [0.2, 1.0, 0.3, 1.0, 0.3, 0.2, 0.7, 0.3, 1.0, 0.1, 1.0],
  ipa: "/aɪ tʃəʊz ðɪs fiːld bɪˈkɒz aɪv ˈɔːlweɪz biːn ˈfæsɪneɪtɪd baɪ tekˈnɒlədʒi/",
  meaning: "解释职业选择原因——fascinated 比 interested 更有力",
  cn: "我选这个领域是因为一直对技术着迷。",
  trap: "I chose this area because I like technology very much.",
  tip: "CHOSE 和 FIELD 简短有力，FASCINATED 重在第一音节，BY TECHNOLOGY 结尾",
  pattern: "I chose this field because I've always been + [adj] + by + [noun]",
  variants: ["Technology has always captivated me.", "I've had a passion for tech since I was young.", "I was drawn to this field by my love of technology."]
};

const s457 = {
  id: 457,
  cat: "Work & Study",
  scene: "career",
  text: "The workload can be quite demanding during peak season.",
  words: ["The","workload","can","be","quite","demanding","during","peak","season"],
  stress: [0.1, 1.0, 0.3, 0.2, 0.5, 1.0, 0.3, 1.0, 1.0],
  ipa: "/ðə ˈwɜːkləʊd kən bi kwaɪt dɪˈmɑːndɪŋ ˈdjʊərɪŋ piːk ˈsiːzən/",
  meaning: "用 demanding 描述工作强度——比 hard 更精准",
  cn: "旺季时候工作量会相当大。",
  trap: "The work is very heavy in busy time.",
  tip: "WORKLOAD 复合词重在第一部分，DEMANDING 重在 -MAND-，PEAK SEASON 并列",
  pattern: "The workload can be quite + [adj] + during + [time period]",
  variants: ["Things get really hectic at certain times of year.", "It's intense when we're at full capacity.", "Peak season is no joke workload-wise."]
};

const s458 = {
  id: 458,
  cat: "Work & Study",
  scene: "career",
  text: "I get along well with my colleagues, which makes a big difference.",
  words: ["I","get","along","well","with","my","colleagues","which","makes","a","big","difference"],
  stress: [0.2, 0.5, 0.7, 0.8, 0.2, 0.2, 1.0, 0.2, 0.7, 0.1, 0.8, 1.0],
  ipa: "/aɪ ɡet əˈlɒŋ wel wɪð maɪ ˈkɒliːɡz wɪtʃ meɪks ə bɪɡ ˈdɪfrəns/",
  meaning: "用关系从句补充评价——流利度加分",
  cn: "我跟同事们相处得很好，这很重要。",
  trap: "My workmates and I have good relationship, it is important.",
  tip: "GET ALONG WELL 作为固定短语连读，COLLEAGUES 和 DIFFERENCE 是两个重音",
  pattern: "I get along well with my + [noun], which makes a big difference",
  variants: ["My team is great, which really helps.", "Having good colleagues makes the job so much better.", "The people I work with are brilliant, honestly."]
};

const s459 = {
  id: 459,
  cat: "Work & Study",
  scene: "career",
  text: "In an ideal world, I'd love to start my own business eventually.",
  words: ["In","an","ideal","world","I'd","love","to","start","my","own","business","eventually"],
  stress: [0.2, 0.1, 0.8, 1.0, 0.3, 1.0, 0.1, 1.0, 0.2, 0.8, 1.0, 0.7],
  ipa: "/ɪn ən aɪˈdɪəl wɜːld aɪd lʌv tə stɑːt maɪ əʊn ˈbɪznɪs ɪˈventʃuəli/",
  meaning: "用虚拟条件表达理想——in an ideal world 地道表达",
  cn: "理想情况下，我以后想自己创业。",
  trap: "If everything is perfect, I want to open my company.",
  tip: "IDEAL WORLD 设定假设语境，LOVE、START、OWN BUSINESS 三连重音",
  pattern: "In an ideal world, I'd love to + [verb phrase] + eventually",
  variants: ["My dream is to launch my own company one day.", "Eventually I'd like to go out on my own.", "Long term, I see myself running my own thing."]
};

const s460 = {
  id: 460,
  cat: "Work & Study",
  scene: "career",
  text: "I find the subject matter genuinely interesting, which helps.",
  words: ["I","find","the","subject","matter","genuinely","interesting","which","helps"],
  stress: [0.2, 0.7, 0.1, 1.0, 0.8, 0.8, 1.0, 0.2, 0.8],
  ipa: "/aɪ faɪnd ðə ˈsʌbdʒɪkt ˈmætə ˈdʒenjuɪnli ˈɪntrɪstɪŋ wɪtʃ helps/",
  meaning: "用 genuinely 加强真实感——比 very 更自然",
  cn: "我觉得课题内容真的很有意思，这很有帮助。",
  trap: "I think the content is very interesting, so it is good.",
  tip: "SUBJECT MATTER 复合名词重在 SUBJECT，GENUINELY 三音节重在第一",
  pattern: "I find the + [noun] + genuinely + [adj], which helps",
  variants: ["The material is fascinating, which keeps me motivated.", "I'm lucky that I actually enjoy what I study.", "It helps that the topic genuinely excites me."]
};

const s461 = {
  id: 461,
  cat: "Work & Study",
  scene: "career",
  text: "The biggest challenge is probably maintaining a work-life balance.",
  words: ["The","biggest","challenge","is","probably","maintaining","a","work-life","balance"],
  stress: [0.1, 1.0, 1.0, 0.2, 0.5, 1.0, 0.1, 1.0, 1.0],
  ipa: "/ðə ˈbɪɡɪst ˈtʃælɪndʒ ɪz ˈprɒbəbli meɪnˈteɪnɪŋ ə ˈwɜːklaɪf ˈbæləns/",
  meaning: "讨论工作挑战——work-life balance 是高频话题词汇",
  cn: "最大的挑战大概是保持工作与生活的平衡。",
  trap: "The most difficult thing is to balance work and life.",
  tip: "BIGGEST CHALLENGE 双重音开头，MAINTAINING 重在 -TAIN-，WORK-LIFE BALANCE 三词一组",
  pattern: "The biggest challenge is probably + [verb]ing + a + [noun]",
  variants: ["Switching off after work is my biggest struggle.", "Finding time for life outside work is tough.", "Work-life balance is something I'm constantly working on."]
};

const s462 = {
  id: 462,
  cat: "Work & Study",
  scene: "career",
  text: "I tend to work remotely most of the time these days.",
  words: ["I","tend","to","work","remotely","most","of","the","time","these","days"],
  stress: [0.2, 0.7, 0.1, 1.0, 1.0, 0.8, 0.1, 0.1, 0.7, 0.3, 0.8],
  ipa: "/aɪ tend tə wɜːk rɪˈməʊtli məʊst əv ðə taɪm ðiːz deɪz/",
  meaning: "用 tend to 表示习惯——比 usually 更学术",
  cn: "这些天我大多数时候远程工作。",
  trap: "I always work at home now.",
  tip: "WORK REMOTELY 作为一组，MOST OF THE TIME 快速连读，THESE DAYS 收尾",
  pattern: "I tend to + [verb] + remotely most of the time these days",
  variants: ["I mostly work from home nowadays.", "Remote work has become the norm for me.", "I'm office-based maybe once a week at most."]
};

const s463 = {
  id: 463,
  cat: "Work & Study",
  scene: "career",
  text: "My major is economics, which is quite broad actually.",
  words: ["My","major","is","economics","which","is","quite","broad","actually"],
  stress: [0.2, 1.0, 0.2, 1.0, 0.2, 0.2, 0.5, 1.0, 0.7],
  ipa: "/maɪ ˈmeɪdʒər ɪz ˌiːkəˈnɒmɪks wɪtʃ ɪz kwaɪt brɔːd ˈæktʃuəli/",
  meaning: "介绍专业时添加个人评价——展示反思能力",
  cn: "我的专业是经济学，其实涵盖面挺广的。",
  trap: "I study economics, it covers many things.",
  tip: "MAJOR 重在第一音节，ECONOMICS 重在第三音节 -NOM-，BROAD 关键描述词重读",
  pattern: "My major is + [subject], which is quite + [adj] + actually",
  variants: ["I'm doing economics, which covers a lot of ground.", "Economics is my subject — it's surprisingly diverse.", "I study economics, and it's broader than most people think."]
};

const s464 = {
  id: 464,
  cat: "Work & Study",
  scene: "career",
  text: "I'd say the most useful skill I've gained is critical thinking.",
  words: ["I'd","say","the","most","useful","skill","I've","gained","is","critical","thinking"],
  stress: [0.3, 0.5, 0.1, 0.8, 1.0, 1.0, 0.2, 0.8, 0.2, 1.0, 1.0],
  ipa: "/aɪd seɪ ðə məʊst ˈjuːsfəl skɪl aɪv ɡeɪnd ɪz ˈkrɪtɪkəl ˈθɪŋkɪŋ/",
  meaning: "回答关于学到什么——critical thinking 是加分表达",
  cn: "我会说获得的最有用的技能是批判性思维。",
  trap: "The most good ability I learned is to think more.",
  tip: "USEFUL SKILL 双重音，CRITICAL THINKING 作为固定搭配整体重读",
  pattern: "I'd say the most useful skill I've gained is + [noun phrase]",
  variants: ["Critical thinking is probably the most valuable takeaway.", "Learning to think analytically has been the biggest gain.", "The ability to question assumptions is what I value most."]
};

const s465 = {
  id: 465,
  cat: "Work & Study",
  scene: "career",
  text: "It can be a bit repetitive at times, if I'm being honest.",
  words: ["It","can","be","a","bit","repetitive","at","times","if","I'm","being","honest"],
  stress: [0.2, 0.3, 0.2, 0.1, 0.5, 1.0, 0.2, 0.8, 0.2, 0.2, 0.5, 1.0],
  ipa: "/ɪt kən bi ə bɪt rɪˈpetɪtɪv ət taɪmz ɪf aɪm ˈbiːɪŋ ˈɒnɪst/",
  meaning: "用委婉表达承认不足——if I'm being honest 增加坦诚感",
  cn: "说实话，有时候会有点重复。",
  trap: "It is sometimes boring because it repeats.",
  tip: "REPETITIVE 四音节重在 -PET-，AT TIMES 比 sometimes 更正式",
  pattern: "It can be a bit + [adj] + at times, if I'm being honest",
  variants: ["Certain parts of the job are quite monotonous.", "Not every day is thrilling, I'll admit.", "Some tasks are a bit tedious, to be fair."]
};

const s466 = {
  id: 466,
  cat: "Work & Study",
  scene: "career",
  text: "My supervisor is incredibly supportive, which I really appreciate.",
  words: ["My","supervisor","is","incredibly","supportive","which","I","really","appreciate"],
  stress: [0.2, 1.0, 0.2, 0.8, 1.0, 0.2, 0.2, 0.7, 1.0],
  ipa: "/maɪ ˈsuːpəvaɪzə ɪz ɪnˈkredɪbli səˈpɔːtɪv wɪtʃ aɪ ˈrɪəli əˈpriːʃieɪt/",
  meaning: "正面评价上司——用关系从句添加感受",
  cn: "我的导师非常支持我，我真的很感激。",
  trap: "My boss is very good to me, I am thankful.",
  tip: "SUPERVISOR 重在第一音节，INCREDIBLY 四音节重在 -CRED-，APPRECIATE 结尾重音",
  pattern: "My + [person] + is incredibly + [adj], which I really appreciate",
  variants: ["I'm lucky to have such a supportive supervisor.", "My boss really has my back, which is great.", "I couldn't ask for a more understanding supervisor."]
};

const s467 = {
  id: 467,
  cat: "Work & Study",
  scene: "career",
  text: "I'm hoping to go into consulting once I graduate.",
  words: ["I'm","hoping","to","go","into","consulting","once","I","graduate"],
  stress: [0.2, 1.0, 0.1, 0.5, 0.3, 1.0, 0.5, 0.2, 1.0],
  ipa: "/aɪm ˈhəʊpɪŋ tə ɡəʊ ˈɪntə kənˈsʌltɪŋ wʌns aɪ ˈɡrædʒueɪt/",
  meaning: "表达职业规划——go into 是地道搭配",
  cn: "毕业后我希望进入咨询行业。",
  trap: "After I graduate, I plan to do consulting work.",
  tip: "HOPING 开头设定期望，CONSULTING 重在 -SULT-，GRADUATE 三音节重在第一",
  pattern: "I'm hoping to go into + [field] + once I graduate",
  variants: ["Consulting is the path I'm aiming for after graduation.", "I'd like to break into consulting.", "My plan is to join a consulting firm when I finish."]
};

const s468 = {
  id: 468,
  cat: "Work & Study",
  scene: "career",
  text: "The exam pressure can be overwhelming at certain points in the year.",
  words: ["The","exam","pressure","can","be","overwhelming","at","certain","points","in","the","year"],
  stress: [0.1, 1.0, 1.0, 0.3, 0.2, 1.0, 0.2, 0.7, 0.8, 0.1, 0.1, 1.0],
  ipa: "/ðə ɪɡˈzæm ˈpreʃə kən bi ˌəʊvəˈwelmɪŋ ət ˈsɜːtn pɔɪnts ɪn ðə jɪə/",
  meaning: "坦诚讨论学业压力——overwhelming 是高级形容词",
  cn: "一年中某些时候考试压力会让人喘不过气。",
  trap: "The test stress is very big in some months.",
  tip: "EXAM PRESSURE 双词重音开头，OVERWHELMING 重在 -WHELM-，at certain points 过渡短语",
  pattern: "The + [noun] + pressure can be overwhelming at certain points",
  variants: ["Exam season is absolutely brutal.", "The stress during finals is intense.", "There are moments when the academic pressure feels crushing."]
};

const s469 = {
  id: 469,
  cat: "Work & Study",
  scene: "career",
  text: "I think experience matters more than qualifications in my field.",
  words: ["I","think","experience","matters","more","than","qualifications","in","my","field"],
  stress: [0.2, 0.5, 1.0, 1.0, 0.8, 0.3, 1.0, 0.2, 0.2, 1.0],
  ipa: "/aɪ θɪŋk ɪkˈspɪəriəns ˈmætəz mɔː ðən ˌkwɒlɪfɪˈkeɪʃənz ɪn maɪ fiːld/",
  meaning: "表达对经验vs学历的看法——展示批判思考",
  cn: "在我的领域，我认为经验比学历更重要。",
  trap: "I think real work is more important than certificates.",
  tip: "EXPERIENCE 重在 -PER-，MATTERS MORE 对比节奏，QUALIFICATIONS 五音节重在 -CA-",
  pattern: "I think + [noun] + matters more than + [noun] + in my field",
  variants: ["Hands-on experience trumps academic credentials.", "What you can do matters more than what's on your CV.", "In my industry, it's all about what you've actually done."]
};

const s470 = {
  id: 470,
  cat: "Work & Study",
  scene: "career",
  text: "I've recently been promoted, so I'm still adjusting to the new role.",
  words: ["I've","recently","been","promoted","so","I'm","still","adjusting","to","the","new","role"],
  stress: [0.2, 0.7, 0.3, 1.0, 0.2, 0.2, 0.5, 1.0, 0.1, 0.1, 0.8, 1.0],
  ipa: "/aɪv ˈriːsntli biːn prəˈməʊtɪd səʊ aɪm stɪl əˈdʒʌstɪŋ tə ðə njuː rəʊl/",
  meaning: "分享近期工作变化——展示叙事能力",
  cn: "我最近升职了，所以还在适应新岗位。",
  trap: "I got a higher position recently, I am learning the new job.",
  tip: "PROMOTED 重在 -MOT-，ADJUSTING 重在 -JUST-，NEW ROLE 结尾着重",
  pattern: "I've recently been + [verb], so I'm still + [verb]ing + to the new + [noun]",
  variants: ["I just got promoted, and it's been a steep learning curve.", "I stepped up to a new position not long ago.", "I'm settling into a more senior role at the moment."]
};

const s471 = {
  id: 471,
  cat: "Work & Study",
  scene: "career",
  text: "The commute is a bit of a pain, but I manage.",
  words: ["The","commute","is","a","bit","of","a","pain","but","I","manage"],
  stress: [0.1, 1.0, 0.2, 0.1, 0.5, 0.1, 0.1, 1.0, 0.3, 0.2, 1.0],
  ipa: "/ðə kəˈmjuːt ɪz ə bɪt əv ə peɪn bʌt aɪ ˈmænɪdʒ/",
  meaning: "轻松吐槽通勤——a bit of a pain 地道口语",
  cn: "通勤有点烦人，但我还能对付。",
  trap: "Going to work takes too long time but it is OK.",
  tip: "COMMUTE 重在 -MUTE，PAIN 情感重音，MANAGE 结尾带平和语气",
  pattern: "The + [noun] + is a bit of a pain, but I manage",
  variants: ["Getting to work is a hassle, but you get used to it.", "The journey to work isn't ideal, but it's bearable.", "Commuting is the worst part, honestly."]
};

const s472 = {
  id: 472,
  cat: "Work & Study",
  scene: "career",
  text: "I wish the lectures were more interactive and less one-sided.",
  words: ["I","wish","the","lectures","were","more","interactive","and","less","one-sided"],
  stress: [0.2, 0.8, 0.1, 1.0, 0.3, 0.8, 1.0, 0.1, 0.8, 1.0],
  ipa: "/aɪ wɪʃ ðə ˈlektʃəz wɜː mɔːr ˌɪntərˈæktɪv ənd les ˈwʌnˌsaɪdɪd/",
  meaning: "用 I wish + 过去时表达愿望——语法精准展示",
  cn: "我希望讲座能更互动些，少一些单向灌输。",
  trap: "I want the class to have more talking, not only teacher talks.",
  tip: "WISH 设定虚拟语气，LECTURES 和 INTERACTIVE、ONE-SIDED 形成对比重音",
  pattern: "I wish the + [noun] + were more + [adj] + and less + [adj]",
  variants: ["I'd prefer more discussion-based sessions.", "The lectures could use more student engagement.", "Less lecturing and more hands-on activities would be ideal."]
};

const s473 = {
  id: 473,
  cat: "Work & Study",
  scene: "career",
  text: "I've learned more from my internship than from any textbook.",
  words: ["I've","learned","more","from","my","internship","than","from","any","textbook"],
  stress: [0.2, 1.0, 1.0, 0.2, 0.2, 1.0, 0.3, 0.2, 0.5, 1.0],
  ipa: "/aɪv lɜːnd mɔː frəm maɪ ˈɪntɜːnʃɪp ðən frəm ˈeni ˈtekstbʊk/",
  meaning: "用比较结构对比学习来源——表达个人洞察",
  cn: "我从实习中学到的比任何课本都多。",
  trap: "My internship taught me more things than books.",
  tip: "LEARNED MORE 对比开头，INTERNSHIP 和 TEXTBOOK 是两个对比的重音词",
  pattern: "I've learned more from my + [noun] + than from any + [noun]",
  variants: ["Real-world experience has been my best teacher.", "No textbook compares to hands-on practice.", "The internship was worth more than a year of lectures."]
};

const s474 = {
  id: 474,
  cat: "Work & Study",
  scene: "career",
  text: "My job requires a lot of collaboration with different departments.",
  words: ["My","job","requires","a","lot","of","collaboration","with","different","departments"],
  stress: [0.2, 1.0, 0.8, 0.1, 0.5, 0.1, 1.0, 0.2, 0.7, 1.0],
  ipa: "/maɪ dʒɒb rɪˈkwaɪəz ə lɒt əv kəˌlæbəˈreɪʃən wɪð ˈdɪfrənt dɪˈpɑːtmənts/",
  meaning: "描述跨部门工作——collaboration 是高级词汇",
  cn: "我的工作需要和不同部门进行大量协作。",
  trap: "I need to work together with many departments.",
  tip: "JOB 和 REQUIRES 快速连接，COLLABORATION 五音节重在 -RA-，DEPARTMENTS 重在 -PART-",
  pattern: "My job requires a lot of + [noun] + with + [noun]",
  variants: ["I work across multiple teams on a daily basis.", "Cross-functional collaboration is a big part of what I do.", "I'm constantly liaising with other departments."]
};

const s475 = {
  id: 475,
  cat: "Work & Study",
  scene: "career",
  text: "I'd recommend this career to anyone who's naturally curious.",
  words: ["I'd","recommend","this","career","to","anyone","who's","naturally","curious"],
  stress: [0.3, 1.0, 0.3, 1.0, 0.1, 0.7, 0.2, 0.7, 1.0],
  ipa: "/aɪd ˌrekəˈmend ðɪs kəˈrɪə tə ˈeniwʌn huːz ˈnætʃrəli ˈkjʊəriəs/",
  meaning: "推荐自己的职业——用定语从句限定条件",
  cn: "我会推荐这个职业给天生好奇的人。",
  trap: "I suggest this job for people who like to know things.",
  tip: "RECOMMEND 重在 -MEND，CAREER 重在 -REER，NATURALLY CURIOUS 结尾双重音",
  pattern: "I'd recommend this + [noun] + to anyone who's + [adv] + [adj]",
  variants: ["If you're the curious type, this field is perfect.", "It's a great career for inquisitive minds.", "Anyone with a natural curiosity would thrive in this role."]
};

const s476 = {
  id: 476,
  cat: "Work & Study",
  scene: "career",
  text: "The deadline pressure actually motivates me, strangely enough.",
  words: ["The","deadline","pressure","actually","motivates","me","strangely","enough"],
  stress: [0.1, 1.0, 1.0, 0.7, 1.0, 0.2, 0.8, 0.7],
  ipa: "/ðə ˈdedlaɪn ˈpreʃə ˈæktʃuəli ˈməʊtɪveɪts miː ˈstreɪndʒli ɪˈnʌf/",
  meaning: "用 strangely enough 添加自嘲感——展示幽默和自我认知",
  cn: "截止日期的压力反而能激励我，说来也怪。",
  trap: "The deadline makes me work harder, it is strange.",
  tip: "DEADLINE PRESSURE 双词重音，MOTIVATES 重在第一音节，STRANGELY ENOUGH 自嘲收尾",
  pattern: "The + [noun] + actually + [verb] + me, strangely enough",
  variants: ["I work best under pressure, oddly enough.", "Tight deadlines bring out the best in me.", "I actually thrive when the clock is ticking."]
};

const s477 = {
  id: 477,
  cat: "Work & Study",
  scene: "career",
  text: "I think continuous learning is essential in today's job market.",
  words: ["I","think","continuous","learning","is","essential","in","today's","job","market"],
  stress: [0.2, 0.5, 0.8, 1.0, 0.2, 1.0, 0.2, 0.7, 0.8, 1.0],
  ipa: "/aɪ θɪŋk kənˈtɪnjuəs ˈlɜːnɪŋ ɪz ɪˈsenʃəl ɪn təˈdeɪz dʒɒb ˈmɑːkɪt/",
  meaning: "表达对终身学习的看法——展示成熟观点",
  cn: "我认为在当今的就业市场持续学习至关重要。",
  trap: "I think people must keep studying in modern working time.",
  tip: "CONTINUOUS LEARNING 作为主语连读，ESSENTIAL 重在 -SEN-，JOB MARKET 收尾",
  pattern: "I think + [adj] + [noun] + is essential in today's + [noun]",
  variants: ["You have to keep upskilling in this industry.", "Lifelong learning is non-negotiable these days.", "The moment you stop learning, you fall behind."]
};

const s478 = {
  id: 478,
  cat: "Work & Study",
  scene: "career",
  text: "I'm not entirely sure what I want to do in the long run.",
  words: ["I'm","not","entirely","sure","what","I","want","to","do","in","the","long","run"],
  stress: [0.2, 0.5, 0.7, 1.0, 0.5, 0.2, 0.7, 0.1, 0.5, 0.2, 0.1, 1.0, 0.8],
  ipa: "/aɪm nɒt ɪnˈtaɪəli ʃʊə wɒt aɪ wɒnt tə duː ɪn ðə lɒŋ rʌn/",
  meaning: "坦诚对未来的不确定——展示真实性",
  cn: "从长远来看，我还不太确定想做什么。",
  trap: "I don't know my future plan for a long time.",
  tip: "ENTIRELY SURE 双重音表不确定，LONG RUN 固定搭配重读收尾",
  pattern: "I'm not entirely sure what I want to do in the + [time expression]",
  variants: ["Long-term, I'm still figuring things out.", "I haven't mapped out my whole career yet.", "My long-term plans are still a bit up in the air."]
};

const s479 = {
  id: 479,
  cat: "Work & Study",
  scene: "career",
  text: "The learning curve was steep at first, but I got the hang of it.",
  words: ["The","learning","curve","was","steep","at","first","but","I","got","the","hang","of","it"],
  stress: [0.1, 1.0, 1.0, 0.3, 1.0, 0.2, 0.7, 0.3, 0.2, 0.7, 0.1, 1.0, 0.1, 0.2],
  ipa: "/ðə ˈlɜːnɪŋ kɜːv wɒz stiːp ət fɜːst bʌt aɪ ɡɒt ðə hæŋ əv ɪt/",
  meaning: "用习语 get the hang of it 展示地道英语",
  cn: "刚开始学习曲线很陡，但慢慢就上手了。",
  trap: "Beginning was difficult, but later I could do it.",
  tip: "LEARNING CURVE 和 STEEP 是第一组重音，GOT THE HANG 是习语整体连读",
  pattern: "The learning curve was + [adj] + at first, but I got the hang of it",
  variants: ["It took a while to find my feet, but I got there.", "The first few months were rough, but things clicked eventually.", "I struggled initially, but it all came together."]
};

const s480 = {
  id: 480,
  cat: "Work & Study",
  scene: "career",
  text: "Overall, I'd say I'm fairly satisfied with where I am professionally.",
  words: ["Overall","I'd","say","I'm","fairly","satisfied","with","where","I","am","professionally"],
  stress: [0.8, 0.3, 0.5, 0.2, 0.5, 1.0, 0.2, 0.5, 0.2, 0.3, 1.0],
  ipa: "/ˌəʊvərˈɔːl aɪd seɪ aɪm ˈfɛəli ˈsætɪsfaɪd wɪð weər aɪ æm prəˈfeʃənəli/",
  meaning: "用 overall 做总结——成熟稳重的结尾方式",
  cn: "总体来说，我对自己的职业发展还挺满意的。",
  trap: "In general, I am OK with my work situation.",
  tip: "OVERALL 开头做总结，SATISFIED 重在第一音节，PROFESSIONALLY 四音节结尾大气",
  pattern: "Overall, I'd say I'm fairly + [adj] + with where I am + [adv]",
  variants: ["All things considered, I'm in a good place career-wise.", "I'm content with my professional progress so far.", "I can't complain about where I am in my career."]
};

// ─── Export ──────────────────────────────────────────────────────
export const DAY16 = [
  s451, s452, s453, s454, s455, s456, s457, s458, s459, s460,
  s461, s462, s463, s464, s465, s466, s467, s468, s469, s470,
  s471, s472, s473, s474, s475, s476, s477, s478, s479, s480
];

export const SCENES_DAY16 = {
  451: { icon: "💻", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  452: { icon: "📅", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  453: { icon: "🧩", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  454: { icon: "🎓", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  455: { icon: "📧", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  456: { icon: "💡", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  457: { icon: "📊", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  458: { icon: "🤝", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  459: { icon: "🚀", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  460: { icon: "📖", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  461: { icon: "⚖️", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  462: { icon: "🏠", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  463: { icon: "📈", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  464: { icon: "🧠", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  465: { icon: "🔁", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  466: { icon: "👨‍🏫", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  467: { icon: "🎯", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  468: { icon: "😰", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  469: { icon: "🏋️", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  470: { icon: "⬆️", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  471: { icon: "🚌", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  472: { icon: "🗣️", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  473: { icon: "🔧", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  474: { icon: "👥", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  475: { icon: "✅", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  476: { icon: "⏰", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  477: { icon: "📚", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  478: { icon: "🤔", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  479: { icon: "📉", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" },
  480: { icon: "😌", colors: ["#8b5cf6","#a78bfa"], title: "CAREER", sub: "IELTS Part 1 · Work & Study" }
};
