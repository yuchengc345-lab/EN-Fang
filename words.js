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
  ]}
];
