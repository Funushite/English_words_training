const norm_num= [];
const norms = [
  //concentration = [299, "", "集中", "専心", "自分の仕事への没頭", "concentration", "", "concentration on my career", 1034 /* from 辞書 */],

  // --------- 1000 ------------
  
  behabiour = [1001, "", "行動", "；振る舞い、挙動、行儀", "わがままな行動", "behaviour", "actions, conduct", "selfish behaviour"],
  extent = [1003, "", "程度", "規模、規範、範囲、程度", "彼のケガの程度", "extent", "degree, level, scale", "the extent of his injury"],
  provision = [1004, "", "供給", "支給；用意、準備、備え", "学校給食の提供", "provision", "supply; preparetion, arrangement", "the provision of school lunches"],
  context = [1006, "", "文脈", "前後関係；状況、背景", "彼の発言が前後関係を無視して引用された", "context", "circumstances; situation, background", "his remark had been taken out of context"],
  conservative = [1008, "", "保守的な人", "（形）保守的な", "保守的な人", "conservative", "←→ progressive", "conservative" /* from 辞書 */],
  conservatism = [1008, "", "保守主義", "", "保守主義", "conservatism", "", "conservatism" /* from 辞書 */],
  strategy = [1009, "", "戦略", "戦術; 兵法", "その企業は戦略を立案した", "strategy", "plan, scheme; tactics", "the company has developed a strategy"],
  discipline = [1010, "", "学問分野", "；規律、しつけ", "学問分野", "discipline", "field; control, training", "an academic discipline"],
  objective = [1011, "", "目標", "目的／（形）客観的な、公平な", "売り上げ目標を達成する", "objective", "aim, target; purpose", "achieve sales objectives" /* from 辞書 */],
  contemporary = [1012, "", "同時代の人", "（形）現代の；同時代の", "彼と同時代の人たち", "contemporary", "", "his contemporaries" /* from 辞書 */],
  inflation = [1013, "", "インフレ", "通貨膨張；膨張", "インフレに反対する立場", "inflation", "←→ deflation", "a stance against inflation"],
  accommodation = [1015, "", "宿泊設備", "；収容力、設備", "多くの大学は宿泊施設を提供している", "accommodation", "housing, lodging", "many universities provide accommodation"],
  mass = [1016, "", "大量", "質量", "大量の情報", "mass", "", "a mass of information" /* from 辞書 */],
  communist = [1017, "", "共産主義者", "（形）共産主義の；共産党の", "共産主義者", "communist", "", "communist"/* from 辞書 */],
  communism = [1017, "", "共産主義", "", "反共産主義", "communism", "", "anti-communism" /* from 辞書 */],
  candidate = [1020, "", "候補者", "求職者", "その仕事への求職者", "candidate", "contender, applicant", "candidates for the job"],
  
  recession  = [1022, "", "（一時的な）景気後退", "不況", "不況は大きな影響を与えている", "recession", "downturn, slump", "the recession has had a large impact"],
  outcome = [1023, "", "（〜の）結果", "成果；余波", "会議の結果", "outcome", "result, consequence; altermath", "the outcome of the meeting"],
  ward = [1025, "", "病棟", "病室；区、行政区", "42床の小児病棟", "ward", "unit, room; district", "a children's ward with 42 beds"],
  dispute = [1029, "", "（〜の間の）論争", "議論", "労働者と経営陣の間で労働争議が起きている", "dispute", "controversy, debate, quarrel", "there is a labour dispute between workers and management"],
  register = [1031, "", "登録(簿)", "（自）登録する、登記する", "出生登録簿", "register", "registration", "a register of births" /* from 辞書 */],
  routine = [1032, "", "決まりきった仕事", "日課", "毎日の日課", "routine", "groove, schedule", "a daily routine"],
  consistency = [1033, "", "一貫性", "一致／（形）守備一貫した、常に変わらない", "格付けにおける一貫性", "consistency", "←→ inconsistency", "consistency in grading" /* from 辞書 */],
  economics = [1036, "", "経済学", "；経済的側面[状態]", "教授は経済学を教えた", "economics", "economic science; finance", "the professor taught economics"],
  protein = [1037, "", "タンパク質", "", "タンパク質", "protein", "", "protein"],
  chamber = [1038, "", "（特定の目的の）部屋", "；応接室", "埋葬室", "chamber", "room, compartment", "the burial chamber"],
  poll = [1039, "", "世論調査", "；投票", "世論調査", "poll", "survey; election, vote", "the opinion poll"],

  architecture = [1041, "", "建設", "建築学", "建設の原理", "architecture", "construction", "the principles of architecture"],
  architect = [1041, "", "建築士", "", "建築士", "architect", "", "architect" /* from 辞書 */],
  frequency = [1042, "", "頻度", "；周波数", "会議の頻度", "frequency", "incidence", "the frequency of meetings"],
  unity = [1043, "", "１つであること", "単一（性）；統合", "そのチームはまとまりを見せた", "unity", "oneness; union, unification", "the team showed unity"],
  heading = [1045, "", "見出し", "表題、題目", "章の見出し", "heading", "title, name", "chapter headings"],
  laboratory = [1047, "", "実験室", "研究室[所]", "その大学研究室", "laboratory", "lab", "the university laboratory"],
  headquarters = [1048, "", "本部", "司令部、本社、本局", "多くのハイテク企業の本社たち", "headquarters", "head office, main office", "the headquarters of many hi-tech companies"],
  surgery = [1050, "", "診療時間", "；診療室；手術", "午後の診療時間", "surgery", "office hours; clinic; operation", "afternoon surgery"],
  acquisition = [1051, "", "習得", "獲得；（会社による）買収", "外国語の習得", "acquisition", "attainment; purchase", "the acquisition of a foreign language"],
  replacement = [1052, "", "交替", "更迭；代用品、代理人", "科学技術は労働者を機械で置き換えることになった", "replacement", "subsituation; substitute", "technology has led to the replacement of workers with machines"],
  concrete = [1053, "", "コンクリート", "（形）具体的な、現実的な", "コンクリート", "concrete", "", "concrete" /* from 辞書 */],
  burden = [1054, "", "重荷", "負担；義務", "その男性は負担を引き受けた", "burden", "load; obligation", "the man took on the burden"],

  definition = [1062, "", "定義", "定義づけ；鮮明度", "「死」の法律上の定義", "definition", "", "the legal definition of \"death\"" /* from 辞書 */],
  charter = [1065, "", "憲章", "；定款", "国連憲章は1945年に調印された", "charter", "laws, rules, code", "the Charter of the United Nations was signed in 1945"],
  petrol = [1069, "", "ガソリン", "", "ガソリン", "petrol", "", "petrol"],
  petroleum = [1069, "", "石油", "", "石油", "petroleum", "", "petroleum"],
  prominence = [1070, "", "卓越", "；目立つこと", "国中に知られるようになる", "prominence", ";excellence", "come to national prominence" /* from 辞書 */],
  acuity = [1071, "", "鋭敏力", "知覚力", "明敏さ", "acuity", "", "acuity" /* from 辞書 */],
  profile = [1072, "", "横顔", "プロフィール", "その女優は美しい横顔の持ち主だと評された", "profile", "", "the actress was described as having a beautiful profile"],
  facility = [1073, "", "施設", "設備；才能", "新しいトレーニング施設", "facility", "centre, equipment; talent", "a new training facility"],
  gaze = [1074, "", "凝視", "見つめること", "世間の目線", "gaze", "stare", "the public gaze" /* from 辞書 */],
  era = [1077, "", "時代", "時期、年代", "ローマ時代に", "era", "age, period, time", "in the Roman era"],
  phenomenon = [1078, "", "現象", "事象", "自然現象", "phenomenon", "occurrence, event", "some natural phenomena"],
  superior = [1079, "", "上司", "（形）（〜より）優れた、上等な", "彼女の直属の上司", "superior", "←→ subordinate", "her immediate superior" /* from 辞書 */],
  superiority = [1079, "", "優越", "優勢、優位；高慢", "彼に優越感を抱く", "superiority", "←→ inferiority", "have a sense of superiority to him" /* from 辞書 */],

  allowance = [1081, "", "手当", "〜費；手加減", "子供手当", "allowance", "benefit, grant; payment", "the child allowance"],
  bulk = [1082, "", "大半", "大部分；かさ、体積", "執筆活動の大半", "bulk", "majority; size, volume", "the bulk of writing work"],
  //yield_ = [1084, "", "産出高", "＼（他）を産出する、産する" /* from 辞書 */],
  stake = [1085, "", "くい", "棒；利害関係", "その建物の建設は、地面に杭を打ち込むことから始まった", "stake", "pole; interest, share", "the building construction started with driving a stake into the ground"],
  plot = [1088, "", "小区画の土地", "；（話の）筋；陰謀", "小区画の土地", "plot", "patch; storyline; scheme", "a plot of land"],
  compromise = [1089, "", "妥協", "歩み寄り", "部長と従業員たちは妥協することで合意した", "compromise", "give-and-take, concession", "the manager and the workers agreed to a compromise"],
  declaration = [1091, "", "宣言", "布告", "独立宣言", "declaration", "announcement, proclamation", "the declaration of independence"],
  boundary = [1092, "", "境界（線）", "；境界を成す物", "その川は、２つの町の境界線の役割を果たしていた", "boundary", "border, dividing line", "the river acted as a boundary between the two towns"],
  deposit = [1093, "", "堆積物", "；内金", "その川の不自然な堆積物", "deposit", "sediment; down payment", "the unnatural deposits in the river"],
  reluctance = [1097, "", "気が進まないこと", "", "行くのを嫌がる", "reluctance", "be unwilling to", "show reluctance to go" /* from 辞書 */],

  // --------- 1100 ------------

  invasion = [1102, "", "侵入", "侵略", "その国への侵略は国際的に非難された", "invasion", "attack, occupation", "the invasion of the country was condemned internationally"],
  //alteration = [1103, "", "", "", "", "alteration", /* from 辞書 */]
  //maturation = [1104, "", "", "", "", "maturation" /* from 辞書 */]
  demonstration = [1105, "", "実演", "；実証；表出；デモ", "新しいコンピューターの実演", "demonstration", "display; prrof; mainfestation", "a demonstration of the new computer"],
  //substitute = [1106, "", "代用品", "（他）を代わりにする[使う]", "", "substitute" /* from 辞書 */]
  consensus = [1107, "", "（意見などの）一致", "合意；総意", "合意に至らなかった", "consensus", "agreement, unanimity, consent", "no consensus was reached"],
  grain = [1108, "", "穀物", "穀類；穀粒", "その地域の農産物は主に穀物だ", "grain", "cereal, corn; kernel", "the region's agricultural products are mainly grain"],
  manufacturer = [1109, "", "製造業者", "メーカー；製造者", "多くの製造業者が展示会で製品を展示した", "manufacturer", "producter, maker", "dozens of manufacturers displayed their products at the exhibition"],
  //manufacturing = [1109, "", "", "", "", "manufacturing", /* from 辞書 */]
  //progress = [1110, "", "", "", "", "progress", /* from 辞書 */]
  tragedy = [1112, "", "悲劇的な事件[事態]", "惨事", "戦争の悲劇", "tragedy", "disaster, catastrophe", "the tragedies of the war"],
  suicide = [1116, "", "自殺", "；自殺事件", "特に若者の自殺は大きな社会問題である", "suicide", "self-destruction", "suicide is a huge social problem, especially among young people"],
  tide = [1117, "", "潮", "潮汐；潮流", "潮と風次第", "tide", "ebb and flow; current", "dependent on the tide and wind"],
  halt = [1118, "", "（一時的）停止、休止", "", "その地震で全ての列車が停止した", "halt", "stop, pause, cessation", "the earthquake brought all trains to a halt"],
  preserve = [1119, "", "砂糖／塩／酢漬け食品", "（他）を保護する、保存する", "ジャム", "preserve", "jam", "preserve" /* from 辞書 */],
  //preservation = [1119, "", "", "", "", "preservation", /* from 辞書 */]
  //encounter = [1120, "", "出会い", "", "", "encounter", /* from 辞書 */]

  remedy = [1121, "", "治療", "医療；医薬品", "風邪の自己治療法", "remedy", "cute, treatment; medicine", "the several home remedies for colds"],
  satellite = [1122, "", "衛生", "月；人工衛星", "木星と土星にはどちらもたくさんの衛星がある", "satellite", "moon; orbiter", "Jupiter and Saturn have a number of satellites"],
  glory = [1123, "", "栄光", "誉れ；名声、絶賛", "オリンピックで優勝するという栄光", "glory", "honour, prestige; renown", "the glory of becoming an Olympic champion"],
  privilege = [1125, "", "特権", "特典、恩典", "その国の政府高官は多くの特権を享受している", "privilege", "benefit, advantage", "the country's government officials enjoy many privileges"],
  colleague = [1126, "", "同僚", "", "我々の同僚の1人が海外支店に転勤になった", "colleague", "co-worker, fellow worker", "one of our colleagues was transferred to an overseas branch"],
  contrary = [1128, "", "<the ~ >正反対、逆", "", "反対に", "contrary", "opposite, reverse", "on the contrary"],
  chaos = [1129, "", "無秩序、混沌", "大混乱", "大混乱に陥った", "chaos", "disorder, confusion", "turned into chaos"],
  clay = [1130, "", "粘土、土", "", "粘土模型", "clay", "earth, soil", "a clay model"],
  //investment = [1133, "", "", "", "", "investment" /* from 辞書 */]
  //illustration = [1136, "", "", "", "", "illustration" /* from 辞書 */]
  //neutral = [1137, "", "ニュートラル", "", "", "neutral" /* from 辞書 */]
  //neutrality = [1137, "", "", "", "", "neutrality" /* from 辞書 */]
  //implement = [1139, "", "道具", "", "", "implement" /* from 辞書 */]
  //implementation = [1139, "", "", "", "", "implementation" /* from 辞書 */]
  //combat = [1140, "", "戦闘", "", "", "combat" /* from 辞書 */]

  pursuit = [1185, "", "（富などの）追求", "；実行、遂行", "幸福を追求する権利", "pursuit", "quest", "the right to the pursuit of happiness", 1099],
]

//品詞自動入力プログラム
for (const item in norms) {
  norms[item][1] += "名詞";
  norm_num[item] = norms[item][0];
}

let n_length = norms.length, n_min = norms[0][0], n_max = norms[(n_length)-1][0];
window.globalInt = {};
window.globalInt.min = n_min;
window.globalInt.max = n_max;
window.globalInt.length = n_length;
window.globalArray = {};
window.globalArray.n_num = norm_num;
window.globalArray.n = norms;