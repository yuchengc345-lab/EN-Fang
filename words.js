const wordGroups = [
  // ==========================================
  // 📚 第一部分：第四章 (共 8 組)
  // ==========================================
  { category: "第四章", groupName: "病歷術語 1 (症狀與徵象)", words: [
      { english: "acute onset headache", chinese: "急性頭痛發作" },
      { english: "right side weakness (hemiparesis)", chinese: "右側肢體無力（輕偏癱）" },
      { english: "severe vomiting", chinese: "嚴重的嘔吐" },
      { english: "elevated BP", chinese: "血壓升高" },
      { english: "consciousness was clear", chinese: "意識清楚" },
      { english: "muscle strength", chinese: "肌肉力量" },
      { english: "Glasgow Coma Scale (GCS)", chinese: "格拉斯哥昏迷指數 (E4V5M6)" },
      { english: "dizziness", chinese: "頭暈" },
      { english: "diplopia (double vision)", chinese: "複視" },
      { english: "memory impairment", chinese: "記憶障礙" }
  ]},
  { category: "第四章", groupName: "病歷術語 2 (病史與診斷)", words: [
      { english: "slurred speech", chinese: "說話模糊" },
      { english: "dysphagia", chinese: "吞嚥困難" },
      { english: "choking", chinese: "嗆到" },
      { english: "atrial fibrillation (Af)", chinese: "心房纖維顫動" },
      { english: "hyperlipidemia", chinese: "高血脂" },
      { english: "hypertension (HTN / HT)", chinese: "高血壓" },
      { english: "an episode of syncope", chinese: "有一次暈厥的現象" },
      { english: "brain computed tomography (CT)", chinese: "腦部電腦斷層掃描" },
      { english: "recent left hemisphere ischemic infarct", chinese: "最近出現的左半球缺血性梗塞" },
      { english: "stroke (cerebrovascular accident, CVA)", chinese: "中風（腦血管意外）" }
  ]},
  { category: "第四章", groupName: "病歷術語 3 (治療) & 一般字彙", words: [
      { english: "anticoagulant", chinese: "抗凝劑" },
      { english: "antihypertensive agent", chinese: "抗高血壓藥物" },
      { english: "rehabilitation", chinese: "復健" },
      { english: "be sure to", chinese: "一定；切記" },
      { english: "monitor", chinese: "監控；監視" },
      { english: "careful", chinese: "注意的；小心的" },
      { english: "greasy", chinese: "油膩的" },
      { english: "tempting", chinese: "誘人的；吸引人的" },
      { english: "indeed", chinese: "確實；的確" },
      { english: "consult", chinese: "諮詢；請教" }
  ]},
  { category: "第四章", groupName: "一般字彙與專業字彙 1", words: [
      { english: "certainly", chinese: "當然；必定" },
      { english: "on schedule", chinese: "按照預定時間" },
      { english: "pharmacy", chinese: "藥房" },
      { english: "billing office", chinese: "批價處" },
      { english: "ache", chinese: "(持續性地) 疼痛" },
      { english: "normally", chinese: "正常地" },
      { english: "exactly", chinese: "確切地；恰好地" },
      { english: "dull", chinese: "(疼痛) 隱約的；遲鈍的" },
      { english: "numb", chinese: "失去感覺的；麻木的" },
      { english: "soreness", chinese: "酸痛" }
  ]},
  { category: "第四章", groupName: "一般字彙與專業字彙 2", words: [
      { english: "operation", chinese: "手術" },
      { english: "lift", chinese: "舉起；抬起" },
      { english: "against", chinese: "對著；相反" },
      { english: "orient", chinese: "使...適應、熟悉環境" },
      { english: "orthopedic", chinese: "骨 (外) 科的" },
      { english: "thigh", chinese: "股；大腿" },
      { english: "buttock", chinese: "屁股" },
      { english: "nerve compression", chinese: "神經壓迫" },
      { english: "neurological", chinese: "神經學的" },
      { english: "extremity", chinese: "手足；四肢 (常以複數形)" }
  ]},
  { category: "第四章", groupName: "一般字彙與專業字彙 3", words: [
      { english: "site", chinese: "患部；部位" },
      { english: "intravenous (IV)", chinese: "靜脈注射" },
      { english: "automatically", chinese: "自動地" },
      { english: "painkiller", chinese: "止痛藥" },
      { english: "nod", chinese: "點頭" },
      { english: "demonstrate", chinese: "示範操作" },
      { english: "expand", chinese: "擴大" },
      { english: "roll (roll over)", chinese: "滾動（翻身）" },
      { english: "keep an eye on", chinese: "留意..." },
      { english: "heart rate", chinese: "心跳速率" }
  ]},
  { category: "第四章", groupName: "專業字彙與日常字彙", words: [
      { english: "patient-controlled analgesia (PCA)", chinese: "病患自控式止痛法" },
      { english: "analgesic", chinese: "止痛劑" },
      { english: "dressing", chinese: "敷料；包紮用品" },
      { english: "chest percussion", chinese: "拍痰" },
      { english: "drainage tube", chinese: "引流管" },
      { english: "spine", chinese: "脊椎" },
      { english: "headache", chinese: "頭痛" },
      { english: "weakness", chinese: "虛弱；衰弱" },
      { english: "diagnosis", chinese: "診斷" },
      { english: "no wonder", chinese: "難怪" }
  ]},
  { category: "第四章", groupName: "日常字彙補充", words: [
      { english: "insert", chinese: "插入" },
      { english: "hopefully", chinese: "但願；滿懷希望地" },
      { english: "discomfort", chinese: "不適；不舒服" },
      { english: "frustrated", chinese: "挫折的" },
      { english: "daily", chinese: "每天的；日常的" },
      { english: "arrange", chinese: "安排" },
      { english: "needle", chinese: "針" },
      { english: "swelling", chinese: "腫大；膨脹" }
  ]},

  // ==========================================
  // 📚 第二部分：第五章 (共 5 組)
  // ==========================================
  { category: "第五章", groupName: "一般與專業字彙 1", words: [
      { english: "ache", chinese: "(持續性地) 疼痛" },
      { english: "normally", chinese: "正常地" },
      { english: "exactly", chinese: "確切地；恰好地" },
      { english: "dull", chinese: "(疼痛) 隱約的；遲鈍的" },
      { english: "numb", chinese: "失去感覺的；麻木的" },
      { english: "soreness", chinese: "酸痛" },
      { english: "operation", chinese: "手術" },
      { english: "lift", chinese: "舉起；抬起" },
      { english: "against", chinese: "對著；相反" },
      { english: "orient", chinese: "使...適應、熟悉環境" }
  ]},
  { category: "第五章", groupName: "一般與專業字彙 2", words: [
      { english: "orthopedic", chinese: "骨 (外) 科的" },
      { english: "thigh", chinese: "股；大腿" },
      { english: "buttock", chinese: "屁股" },
      { english: "nerve compression", chinese: "神經壓迫" },
      { english: "automatically", chinese: "自動地" },
      { english: "painkiller", chinese: "止痛藥" },
      { english: "nod", chinese: "點頭" },
      { english: "demonstrate", chinese: "示範操作" },
      { english: "expand", chinese: "擴大" },
      { english: "roll (roll over)", chinese: "滾動（翻身）" },
      { english: "keep an eye on", chinese: "留意..." }
  ]},
  { category: "第五章", groupName: "病歷術語 (脊椎與疼痛)", words: [
      { english: "soreness and pain in lower right limb and buttock", chinese: "右下肢和臀部酸痛" },
      { english: "intermittent pain", chinese: "間歇性疼痛" },
      { english: "numbness", chinese: "麻木" },
      { english: "muscle power (MP)", chinese: "肌肉力量" },
      { english: "computed tomography (CT) of spine", chinese: "脊椎電腦斷層掃描" },
      { english: "spinal canal stenosis at L4/5 (lumbar 4/5)", chinese: "第四第五腰椎椎管狹窄" },
      { english: "spinal stenosis syndrome (SSS)", chinese: "脊椎狹窄症候群" },
      { english: "left total hip replacement (THR)", chinese: "左側全髖關節置換術" },
      { english: "rehabilitation", chinese: "復健" },
      { english: "surgery", chinese: "手術" }
  ]},
  { category: "第五章", groupName: "專業字彙與治療", words: [
      { english: "heart rate", chinese: "心跳速率" },
      { english: "patient-controlled analgesia (PCA)", chinese: "病患自控式止痛法" },
      { english: "analgesic", chinese: "止痛劑" },
      { english: "spine", chinese: "脊椎" },
      { english: "drainage tube", chinese: "引流管" },
      { english: "chest percussion", chinese: "拍痰" },
      { english: "dressing", chinese: "敷料；包紮用品" },
      { english: "heal", chinese: "(傷口) 癒合；痊癒" },
      { english: "unless", chinese: "除非" },
      { english: "examine", chinese: "檢查；診察" }
  ]},
  { category: "第五章", groupName: "傷口照護與衛教", words: [
      { english: "unusual", chinese: "異常的；奇特的" },
      { english: "redness", chinese: "紅色" },
      { english: "outward", chinese: "向外" },
      { english: "recommend", chinese: "建議" },
      { english: "restriction", chinese: "限制" },
      { english: "sponge bath", chinese: "海綿擦浴" },
      { english: "protein", chinese: "蛋白質" },
      { english: "vitamin", chinese: "維他命；維生素" },
      { english: "incision", chinese: "手術切口" },
      { english: "swab", chinese: "棉枝" },
      { english: "gauze", chinese: "醫用紗布" },
      { english: "aquatic-beta iodine", chinese: "優碘" }
  ]},

  // ==========================================
  // 📚 第三部分：第八章 (共 5 組)
  // ==========================================
  { category: "第八章", groupName: "日常與衛教字彙 1", words: [
      { english: "thirsty", chinese: "口渴的" },
      { english: "keep on", chinese: "持（繼）續" },
      { english: "depend on", chinese: "視……而定" },
      { english: "sugar-free", chinese: "無糖的" },
      { english: "fried", chinese: "油炸（煎）的" },
      { english: "fat", chinese: "脂肪" },
      { english: "serving", chinese: "（食物、飲料等）一份" },
      { english: "fist", chinese: "拳頭" },
      { english: "nutritionist", chinese: "營養師；營養學家" },
      { english: "obese", chinese: "肥胖的" }
  ]},
  { category: "第八章", groupName: "日常與衛教字彙 2", words: [
      { english: "control", chinese: "控制" },
      { english: "post-meal", chinese: "餐後的" },
      { english: "ring finger", chinese: "無名指" },
      { english: "sterilize", chinese: "消毒" },
      { english: "range", chinese: "範圍" },
      { english: "result in", chinese: "導致" },
      { english: "educator", chinese: "衛教人員" },
      { english: "inhibit", chinese: "約束；抑制" },
      { english: "absorption", chinese: "吸收" },
      { english: "weight loss", chinese: "體重減輕" }
  ]},
  { category: "第八章", groupName: "日常與衛教字彙 3", words: [
      { english: "couch potato", chinese: "懶骨頭；成天看電視的人" },
      { english: "potato chip", chinese: "洋芋片" },
      { english: "pastime", chinese: "娛樂；消遣" },
      { english: "motivate", chinese: "刺激；激發" },
      { english: "be consistent with", chinese: "與……一致、相符" },
      { english: "injury", chinese: "受傷" },
      { english: "inspect", chinese: "檢查" },
      { english: "glucose", chinese: "葡萄糖" },
      { english: "endocrine", chinese: "內分泌的" },
      { english: "blood sugar", chinese: "血糖" }
  ]},
  { category: "第八章", groupName: "糖尿病症狀與檢驗", words: [
      { english: "diabetic", chinese: "（患）糖尿病的；糖尿病患者" },
      { english: "nerve", chinese: "神經" },
      { english: "polyuria", chinese: "多尿" },
      { english: "polydipsia", chinese: "多喝" },
      { english: "polyphagia", chinese: "多吃" },
      { english: "conscious change", chinese: "意識改變" },
      { english: "diarrhea", chinese: "腹瀉" },
      { english: "constipation", chinese: "便祕" },
      { english: "blood glucose", chinese: "血糖" },
      { english: "glycosylated hemoglobin level (HbA1c)", chinese: "糖化血色素" },
      { english: "blood sugar level of 400 mg/dl (milligram / deciliter)", chinese: "血糖值 400 毫克 / 分升" }
  ]},
  { category: "第八章", groupName: "糖尿病診斷、病史與治療", words: [
      { english: "type II diabetes mellitus (DM)", chinese: "第二型糖尿病" },
      { english: "non-insulin dependent diabetes mellitus (NIDDM)", chinese: "非胰島素依賴型糖尿病" },
      { english: "retinopathy", chinese: "視網膜病變" },
      { english: "nephropathy", chinese: "腎病變" },
      { english: "neuropathy", chinese: "神經病變" },
      { english: "smoked 1-2 packs of cigarettes per day (PPD) for more than 30 years and quitted 8 years ago", chinese: "每天抽一至兩包香煙達三十多年，已戒了八年" },
      { english: "10-year history of hypertension (HTN / HT)", chinese: "高血壓有十年病史" },
      { english: "hyperlipidemia", chinese: "高血脂（高血脂有十年病史）" },
      { english: "antihypertensive agent", chinese: "抗高血壓藥物" },
      { english: "simvastatin", chinese: "降血脂藥" },
      { english: "oral hypoglycemic agent (OHA)", chinese: "口服降血糖藥" }
  ]}
];
