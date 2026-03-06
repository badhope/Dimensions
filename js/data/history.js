// 物理学发展史和维度理论演进
export const physicsHistory = {
  // 古代物理学
  ancient: {
    period: "古代 - 16 世纪",
    description: "人类对自然现象的最早思考",
    keyFigures: [
      {
        name: "亚里士多德",
        years: "公元前 384-322 年",
        contribution: "提出地心说，认为地球是宇宙的中心，所有天体围绕地球旋转",
        legacy: "统治西方思想近 2000 年，虽然错误但推动了科学方法的发展",
        dimensionRelevance: "对三维空间的早期哲学思考"
      },
      {
        name: "阿基米德",
        years: "公元前 287-212 年",
        contribution: "发现浮力定律、杠杆原理，发明螺旋泵",
        legacy: "将数学应用于物理现象的先驱",
        dimensionRelevance: "几何学的发展为空间理解奠定基础"
      },
      {
        name: "托勒密",
        years: "公元 100-170 年",
        contribution: "完善地心说模型，发明本轮 - 均轮系统",
        legacy: "其天文学模型使用了 1400 多年",
        dimensionRelevance: "天体运动的几何描述"
      }
    ],
    majorEvents: [
      {
        year: "公元前 350 年",
        event: "亚里士多德发表《物理学》",
        impact: "首次系统性地研究自然现象，虽然结论多为错误，但方法影响深远"
      },
      {
        year: "公元前 250 年",
        event: "阿基米德发现浮力定律",
        impact: "展示了数学在描述物理现象中的力量"
      }
    ]
  },
  
  // 科学革命
  scientificRevolution: {
    period: "16-17 世纪",
    description: "科学方法的诞生，现代物理学的开端",
    keyFigures: [
      {
        name: "尼古拉·哥白尼",
        years: "1473-1543",
        contribution: "提出日心说，认为太阳是宇宙的中心",
        legacy: "引发天文学革命，改变人类对宇宙位置的认知",
        dimensionRelevance: "重新定义我们在空间中的位置，从中心变为边缘"
      },
      {
        name: "伽利略·伽利雷",
        years: "1564-1642",
        contribution: "发明天文望远镜，发现木星卫星、月球环形山",
        legacy: "现代科学方法之父，强调实验和数学",
        dimensionRelevance: "通过观测证实日心说，开启实证科学"
      },
      {
        name: "约翰内斯·开普勒",
        years: "1571-1630",
        contribution: "发现行星运动三大定律",
        legacy: "用数学精确描述天体运动",
        dimensionRelevance: "行星轨道的椭圆几何描述"
      },
      {
        name: "艾萨克·牛顿",
        years: "1643-1727",
        contribution: "发表《自然哲学的数学原理》，建立经典力学和万有引力定律",
        legacy: "经典物理学的奠基人，其理论统治了 200 多年",
        dimensionRelevance: "绝对空间和绝对时间的概念——三维空间 + 一维时间，但时间是绝对的"
      }
    ],
    majorEvents: [
      {
        year: "1543",
        event: "哥白尼发表《天体运行论》",
        impact: "日心说革命开始，人类不再是宇宙的中心"
      },
      {
        year: "1609",
        event: "伽利略首次用望远镜观测天空",
        impact: "发现木星卫星、月球环形山，支持日心说"
      },
      {
        year: "1687",
        event: "牛顿发表《自然哲学的数学原理》",
        impact: "经典力学建立，科学革命达到顶峰"
      }
    ]
  },
  
  // 经典物理学时期
  classicalPhysics: {
    period: "18-19 世纪",
    description: "经典物理学的完善和应用",
    keyFigures: [
      {
        name: "詹姆斯·克拉克·麦克斯韦",
        years: "1831-1879",
        contribution: "建立电磁理论，预言电磁波的存在",
        legacy: "统一电、磁、光现象，为狭义相对论奠定基础",
        dimensionRelevance: "电磁场概念——场是空间本身的性质，暗示空间不仅仅是真空"
      },
      {
        name: "路德维希·玻尔兹曼",
        years: "1844-1906",
        contribution: "发展统计力学，解释热力学第二定律",
        legacy: "连接微观和宏观物理，证明原子的存在",
        dimensionRelevance: "相空间概念——用高维空间描述多粒子系统"
      },
      {
        name: "迈克尔·法拉第",
        years: "1791-1867",
        contribution: "发现电磁感应，提出场的概念",
        legacy: "实验物理学大师，其场的概念影响深远",
        dimensionRelevance: "场是空间的性质，空间本身具有物理意义"
      }
    ],
    majorEvents: [
      {
        year: "1865",
        event: "麦克斯韦发表电磁理论",
        impact: "统一电、磁、光，预言电磁波"
      },
      {
        year: "1887",
        event: "赫兹实验证实电磁波存在",
        impact: "验证麦克斯韦理论，开启无线电时代"
      },
      {
        year: "1897",
        event: "汤姆逊发现电子",
        impact: "首次发现亚原子粒子，打开微观世界大门"
      }
    ]
  },
  
  // 现代物理学革命
  modernPhysics: {
    period: "20 世纪初 - 中期",
    description: "相对论和量子力学的诞生，物理学的两次革命",
    keyFigures: [
      {
        name: "阿尔伯特·爱因斯坦",
        years: "1879-1955",
        contribution: "狭义相对论（1905）、广义相对论（1915）",
        legacy: "彻底改变时空观念，引力被解释为时空弯曲",
        dimensionRelevance: "四维时空——时间和空间统一为不可分割的整体"
      },
      {
        name: "马克斯·普朗克",
        years: "1858-1947",
        contribution: "提出能量量子化概念，解释黑体辐射",
        legacy: "量子力学的开创者",
        dimensionRelevance: "量子化概念后来成为弦理论的基础"
      },
      {
        name: "尼尔斯·玻尔",
        years: "1885-1962",
        contribution: "提出原子结构的玻尔模型",
        legacy: "哥本哈根诠释的主要提出者",
        dimensionRelevance: "量子态存在于高维希尔伯特空间中"
      },
      {
        name: "维尔纳·海森堡",
        years: "1901-1976",
        contribution: "提出不确定性原理，发展矩阵力学",
        legacy: "量子力学的奠基人之一",
        dimensionRelevance: "不确定性原理暗示空间和时间在微观尺度可能不是连续的"
      },
      {
        name: "埃尔温·薛定谔",
        years: "1887-1961",
        contribution: "提出薛定谔方程，发展波动力学",
        legacy: "量子力学的另一种表述，波函数概念",
        dimensionRelevance: "波函数存在于高维位形空间中"
      },
      {
        name: "保罗·狄拉克",
        years: "1902-1984",
        contribution: "提出狄拉克方程，统一量子力学和狭义相对论",
        legacy: "预言反物质存在",
        dimensionRelevance: "旋量空间——描述粒子自旋需要额外的数学维度"
      }
    ],
    majorEvents: [
      {
        year: "1900",
        event: "普朗克提出能量量子化",
        impact: "量子力学的开端"
      },
      {
        year: "1905",
        event: "爱因斯坦发表狭义相对论",
        impact: "时空统一，质能等价 E=mc²"
      },
      {
        year: "1915",
        event: "爱因斯坦完成广义相对论",
        impact: "引力是时空弯曲，宇宙学的新纪元"
      },
      {
        year: "1919",
        event: "爱丁顿观测日全食验证广义相对论",
        impact: "光线弯曲被证实，爱因斯坦一夜成名"
      },
      {
        year: "1925-1927",
        event: "量子力学形式体系建立",
        impact: "海森堡、薛定谔、玻恩等人建立完整的量子力学"
      },
      {
        year: "1927",
        event: "索尔维会议，玻尔 - 爱因斯坦大辩论",
        impact: "量子力学诠释的哲学争论开始"
      }
    ]
  },
  
  // 粒子物理和场论
  particlePhysics: {
    period: "20 世纪中期",
    description: "粒子物理标准模型的建立",
    keyFigures: [
      {
        name: "理查德·费曼",
        years: "1918-1988",
        contribution: "发展量子电动力学的路径积分表述，发明费曼图",
        legacy: "20 世纪最具影响力的物理学家之一",
        dimensionRelevance: "路径积分——粒子同时走所有可能的路径，包括高维空间"
      },
      {
        name: "杨振宁",
        years: "1922-",
        contribution: "提出杨 - 米尔斯理论",
        legacy: "规范场论的基础，标准模型的数学框架",
        dimensionRelevance: "规范场在高维空间中有自然的几何解释"
      },
      {
        name: "默里·盖尔曼",
        years: "1929-2019",
        contribution: "提出夸克模型",
        legacy: "解释强子的内部结构",
        dimensionRelevance: "夸克禁闭暗示了高维空间的约束效应"
      }
    ],
    majorEvents: [
      {
        year: "1954",
        event: "杨振宁和米尔斯提出杨 - 米尔斯理论",
        impact: "规范场论的基础，后来成为标准模型的核心"
      },
      {
        year: "1964",
        event: "希格斯等人提出希格斯机制",
        impact: "解释粒子如何获得质量"
      },
      {
        year: "1967",
        event: "温伯格 - 萨拉姆统一弱电相互作用",
        impact: "第一次成功统一两种基本力"
      },
      {
        year: "1974",
        event: "发现 J/ψ介子，证实夸克存在",
        impact: "夸克模型被实验证实"
      }
    ]
  },
  
  // 弦理论和 M 理论
  stringTheory: {
    period: "20 世纪后期 - 21 世纪",
    description: "弦理论和 M 理论的发展，追求万物理论",
    keyFigures: [
      {
        name: "加布里埃莱·韦内齐亚诺",
        years: "1942-",
        contribution: "发现描述强相互作用的数学公式（弦理论雏形）",
        legacy: "偶然发现了后来成为弦理论基础的数学结构",
        dimensionRelevance: "弦理论需要额外维度才能自洽"
      },
      {
        name: "约翰·施瓦茨",
        years: "1941-",
        contribution: "与迈克尔·格林共同发现弦理论中的反常消除",
        legacy: "第一次超弦革命的发起者",
        dimensionRelevance: "证明弦理论需要 10 维时空"
      },
      {
        name: "迈克尔·格林",
        years: "1946-",
        contribution: "与施瓦茨一起发现弦理论的反常消除机制",
        legacy: "弦理论研究的先驱",
        dimensionRelevance: "弦理论的数学自洽性要求额外维度"
      },
      {
        name: "爱德华·威滕",
        years: "1951-",
        contribution: "提出 M 理论，统一五种弦理论",
        legacy: "当代最聪明的理论物理学家之一",
        dimensionRelevance: "M 理论需要 11 维时空"
      },
      {
        name: "约瑟夫·波尔钦斯基",
        years: "1954-2018",
        contribution: "发现 D-膜的重要性",
        legacy: "第二次超弦革命的关键人物",
        dimensionRelevance: "D-膜是高维物体，弦的端点可以固定在其上"
      },
      {
        name: "胡安·马尔达西那",
        years: "1968-",
        contribution: "提出 AdS/CFT 对偶",
        legacy: "全息原理的具体实现",
        dimensionRelevance: "揭示不同维度理论之间的深刻联系"
      }
    ],
    majorEvents: [
      {
        year: "1968",
        event: "韦内齐亚诺发现弦理论雏形",
        impact: "偶然发现了描述强相互作用的数学公式"
      },
      {
        year: "1974",
        event: "施瓦茨和格林发现弦理论中的超对称",
        impact: "第一次超弦革命开始"
      },
      {
        year: "1984-1985",
        event: "第一次超弦革命",
        impact: "五种自洽的超弦理论被发现，都需要 10 维时空"
      },
      {
        year: "1995",
        event: "威滕提出 M 理论",
        impact: "第二次超弦革命，统一五种弦理论，预言第 11 维度"
      },
      {
        year: "1997",
        event: "马尔达西那提出 AdS/CFT 对偶",
        impact: "全息原理的具体实现，连接引力理论和量子场论"
      },
      {
        year: "2012",
        event: "希格斯玻色子被发现",
        impact: "标准模型最后一块拼图，间接支持高维理论的一些预言"
      }
    ]
  },
  
  // 实验验证
  experimentalVerification: {
    period: "21 世纪",
    description: "高维理论的实验检验",
    keyEvents: [
      {
        year: "2015",
        event: "LIGO 首次直接探测到引力波",
        impact: "证实时空确实可以像膜一样振动，为高维理论提供间接支持",
        dimensionRelevance: "引力波的传播暗示时空是真实的物理实体"
      },
      {
        year: "2019",
        event: "事件视界望远镜拍摄首张黑洞照片",
        impact: "直接观测到黑洞的事件视界",
        dimensionRelevance: "黑洞是检验高维引力的理想实验室"
      },
      {
        year: "现在",
        event: "大型强子对撞机寻找额外维度证据",
        impact: "寻找卡鲁扎 - 克莱因粒子、微型黑洞等",
        dimensionRelevance: "高能碰撞可能揭示额外维度的存在"
      }
    ]
  }
};

// 维度理论发展简史
export const dimensionTheoryHistory = [
  {
    era: "前奏（1921 年之前）",
    description: "虽然还没有明确的额外维度概念，但数学家们已经在研究高维几何",
    keyDevelopments: [
      "黎曼几何的发展（1854 年）——为广义相对论奠定数学基础",
      "四维空间概念的提出（19 世纪末）——时间作为第四维的萌芽"
    ]
  },
  {
    era: "开端（1921-1926）",
    description: "卡鲁扎 - 克莱因理论的提出",
    keyDevelopments: [
      "1921 年：卡鲁扎提出五维统一理论，尝试统一引力和电磁力",
      "1926 年：克莱因提出维度紧致化概念，解释为何我们看不到额外维度"
    ],
    significance: "首次将额外维度用于物理统一理论"
  },
  {
    era: "沉寂（1927-1967）",
    description: "量子力学和粒子物理成为主流，额外维度理论被忽视",
    keyDevelopments: [
      "量子力学的快速发展吸引了大部分注意力",
      "粒子物理标准模型的建立取得巨大成功"
    ]
  },
  {
    era: "复兴（1968-1983）",
    description: "弦理论的诞生和发展",
    keyDevelopments: [
      "1968 年：韦内齐亚诺偶然发现弦理论雏形",
      "1970 年：弦理论被解释为一维物体的振动",
      "1974 年：发现弦理论需要 10 维时空才能自洽"
    ],
    significance: "额外维度重新成为物理学焦点"
  },
  {
    era: "第一次革命（1984-1994）",
    description: "五种超弦理论的发现",
    keyDevelopments: [
      "1984 年：施瓦茨和格林发现反常消除机制",
      "1985 年：五种自洽的超弦理论被确认",
      "卡拉比 - 丘流形被用于紧致化额外 6 维"
    ],
    significance: "弦理论成为万物理论的主要候选者"
  },
  {
    era: "第二次革命（1995-2000）",
    description: "M 理论的提出和全息原理的发现",
    keyDevelopments: [
      "1995 年：威滕提出 M 理论，统一五种弦理论",
      "1995 年：波尔钦斯基发现 D-膜的重要性",
      "1997 年：马尔达西那提出 AdS/CFT 对偶"
    ],
    significance: "M 理论需要 11 维，全息原理揭示维度之间的深刻联系"
  },
  {
    era: "现代（2001 至今）",
    description: "弦景观、多重宇宙和实验检验",
    keyDevelopments: [
      "2003 年：弦景观概念被提出，可能有 10^500 个真空态",
      "2015 年：LIGO 探测到引力波，间接支持高维理论",
      "现在：大型强子对撞机寻找额外维度证据"
    ],
    significance: "理论预言与实验检验的结合"
  }
];

// 重要概念解释
export const keyConcepts = [
  {
    name: "紧致化",
    definition: "额外维度卷曲成极小的尺度，因此我们无法直接观测到它们",
    analogy: "想象一根花园里的水管。从远处看，它像一条一维的线。但靠近看，你会发现它有圆周方向——一个卷曲的额外维度。",
    history: "1926 年由奥斯卡·克莱因提出",
    relevance: "解释为何我们只感知到三维空间"
  },
  {
    name: "卡拉比 - 丘流形",
    definition: "六维的紧致化空间，具有特殊的几何性质",
    analogy: "想象一个复杂的六维形状，每个点都对应我们三维空间中的一个点。这个六维形状的性质决定了物理定律。",
    history: "1954 年由数学家卡拉比猜想存在，1978 年由丘成桐证明",
    relevance: "弦理论中额外 6 维的几何形状"
  },
  {
    name: "全息原理",
    definition: "描述一个体积的信息可以完全编码在其边界面上",
    analogy: "就像一个全息图，二维的胶片可以存储三维图像的所有信息。宇宙可能也是如此。",
    history: "1993 年由特·胡夫特提出，1997 年马尔达西那给出具体实现",
    relevance: "暗示我们生活的三维世界可能是二维表面的投影"
  },
  {
    name: "膜世界",
    definition: "我们的三维宇宙是漂浮在高维空间中的一张三维膜",
    analogy: "想象一片面包（我们的宇宙）漂浮在巨大的面包房（高维空间）中。还有其他面包（平行宇宙）也在其中。",
    history: "1999 年由兰德尔和桑德鲁姆提出",
    relevance: "解释引力为何如此微弱——它可能泄漏到了额外维度"
  },
  {
    name: "M 理论",
    definition: "统一五种弦理论的十一维理论框架",
    analogy: "五种弦理论就像盲人摸象，每个只描述了大象的一部分。M 理论是完整的大象。",
    history: "1995 年由威滕提出",
    relevance: "目前最接近万物理论的候选者"
  },
  {
    name: "弦景观",
    definition: "弦理论可能存在的 10^500 个不同真空态的集合",
    analogy: "想象一座巨大的山脉，有 10^500 个山谷。每个山谷都是一个可能的宇宙，有不同的物理定律。",
    history: "2003 年由萨斯坎德等人提出",
    relevance: "解释为何我们的宇宙参数如此'恰好'允许生命存在"
  }
];
