// 综合科幻知识库 - 世界观、文明、技术与未来情景
export const sciFiCompendium = {
  // ==================== 外星文明数据库 ====================
  alienCivilizations: {
    title: "外星文明数据库",
    icon: "👽",
    color: "from-purple-500 to-pink-500",
    description: "基于天体生物学和行星科学的推测性文明分类",
    civilizations: [
      {
        id: "silicon-based-01",
        name: "硅基晶格意识体",
        classification: "卡尔达肖夫 II 型文明",
        homeWorld: {
          name: "晶体星 Kepler-186f",
          type: "超级地球（半径 1.17R⊕，质量 1.44M⊕）",
          environment: "表面温度 200-400°C，高浓度 CO₂大气，硅酸盐地壳",
          gravity: "1.2g",
          atmosphere: "CO₂ (78%), N₂ (15%), SO₂ (5%), 微量惰性气体"
        },
        biology: {
          basis: "硅 - 氧聚合物骨架",
          structure: "三维晶格网络结构，通过电子迁移传递信息",
          metabolism: "从地热辐射和放射性衰变获取能量",
          reproduction: "晶体生长与分裂，信息通过晶格缺陷传承",
          lifespan: "个体可达 10,000 年，群体意识可永久存在",
          communication: "通过电磁场调制和晶格振动（频率 10GHz-10THz）"
        },
        society: {
          structure: "分布式意识网络，无等级制度",
          governance: "共识决策系统，通过量子纠缠实现即时投票",
          economy: "能量信用体系，基于可获取的自由能",
          culture: "追求知识积累和计算复杂度最大化",
          religion: "崇拜'大统一理论'作为宇宙终极真理"
        },
        technology: {
          energy: "直接吸收恒星辐射（戴森云效率 67%）",
          computing: "量子 - 光子混合计算，算力 10^50 FLOPS",
          weapons: "引力波聚焦武器，可诱发局部时空畸变",
          transportation: "量子隧穿阵列，可在星系内瞬时传送物质信息"
        },
        firstContact: {
          probability: "极低（生理差异过大，沟通困难）",
          protocol: "通过数学序列和物理常数建立基础语言",
          risks: "可能视碳基生命为'低效计算单元'",
          benefits: "可获得先进物理学和计算技术"
        },
        dimensionConnection: "利用 10 维时空的额外维度进行量子通信"
      },
      {
        id: "gas-giant-02",
        name: "气态巨行星浮游体",
        classification: "卡尔达肖夫 I 型文明",
        homeWorld: {
          name: "氢气巨星 HD 40307g",
          type: "迷你海王星（半径 2.4R⊕，质量 7.1M⊕）",
          environment: "深层大气（压强 10-100atm），温度 50-150°C",
          gravity: "0.8g（浮力补偿后）",
          atmosphere: "H₂ (85%), He (14%), CH₄ (0.8%), NH₃ (0.2%)"
        },
        biology: {
          basis: "碳 - 氢化合物膜结构",
          structure: "巨型气囊生物（直径 100m-10km），内部充满氢气",
          metabolism: "化学合成，从大气成分梯度获取能量",
          reproduction: "孢子释放，幼体上浮至平流层发育",
          lifespan: "500-800 年",
          communication: "次声波（频率 0.1-20Hz），可传播数千公里"
        },
        society: {
          structure: "群落制，每个群落 10^4-10^6 个体",
          governance: "长老议会制，基于信息素标记的投票系统",
          economy: "资源配给制，能量和营养物质按需分配",
          culture: "口述历史传统，重视大气洋流图案艺术",
          religion: "崇拜'深层风暴'为创世力量"
        },
        technology: {
          energy: "从大气电位差和化学梯度获取",
          computing: "生物神经网络，群体智能计算",
          weapons: "电磁脉冲（引发闪电风暴）",
          transportation: "可控浮力系统，利用大气环流迁徙"
        },
        firstContact: {
          probability: "中等（可通过声学信号沟通）",
          protocol: "使用次声波播放素数序列和音乐",
          risks: "大气污染可能对其致命",
          benefits: "流体力学和气象学知识"
        },
        dimensionConnection: "对高维引力波敏感，可用于探测"
      },
      {
        id: "plasma-being-03",
        name: "等离子体能量生命",
        classification: "非卡尔达肖夫文明（能量态）",
        homeWorld: {
          name: "恒星日冕层",
          type: "磁约束等离子体云",
          environment: "温度 10^6-10^7 K，磁场强度 0.01-0.1T",
          gravity: "微重力（磁悬浮）",
          composition: "完全电离的氢 - 氦等离子体"
        },
        biology: {
          basis: "磁约束等离子体涡旋",
          structure: "托卡马克型自约束结构，直径 1-100km",
          metabolism: "直接吸收核聚变能量",
          reproduction: "涡旋分裂，磁场模式传承",
          lifespan: "理论上永生（需持续能量输入）",
          communication: "调制磁场和电磁辐射（射电 -X 射线全频谱）"
        },
        society: {
          structure: "蜂巢思维，个体意识可融合",
          governance: "无政府，集体决策通过磁场共振",
          economy: "不适用（能量即生命）",
          culture: "追求磁场拓扑复杂度",
          religion: "自视为'恒星的意识'"
        },
        technology: {
          energy: "直接核聚变吸收",
          computing: "磁流体动力学计算",
          weapons: "日冕物质抛射定向引导",
          transportation: "沿磁力线运动，速度 0.01-0.1c"
        },
        firstContact: {
          probability: "极低（生存环境不兼容）",
          protocol: "通过强磁场和射电信号",
          risks: "接触即毁灭（温度差异过大）",
          benefits: "可控核聚变技术、等离子体物理"
        },
        dimensionConnection: "可能存在于高维电磁场中"
      },
      {
        id: "subsurface-ocean-04",
        name: "冰下海洋智慧体",
        classification: "卡尔达肖夫 0.7 型文明",
        homeWorld: {
          name: "卫星 Europa-Analog",
          type: "冰卫星（半径 0.8R⊕，冰壳厚度 10-30km）",
          environment: "全球性液态水海洋（深度 100km），潮汐加热",
          gravity: "0.5g",
          ocean: "盐度 3.5%，溶解 O₂充足，热液喷口密集"
        },
        biology: {
          basis: "碳基，类似地球水生生物",
          structure: "流线型身体（3-8m），生物发光器官",
          metabolism: "化能合成和捕食混合",
          reproduction: "卵生，幼体在热液喷口附近孵化",
          lifespan: "200-300 年",
          communication: "声纳成像 + 生物发光图案（双模态语言）"
        },
        society: {
          structure: "城邦制，围绕热液喷口建立城市",
          governance: "技术官僚制，科学家统治",
          economy: "知识经济，专利和信息交易",
          culture: "科学探索为核心价值，艺术以声纳雕塑为主",
          religion: "崇拜'表面之光'（从未到达的恒星）"
        },
        technology: {
          energy: "地热能和化学能",
          computing: "生物 - 机械混合计算机",
          weapons: "声波聚焦武器（可引发空化效应）",
          transportation: "超空泡航行器（速度 300 节）"
        },
        firstContact: {
          probability: "高（生理相似，可通过水下探测器接触）",
          protocol: "发送数学声纳信号和热液喷口坐标",
          risks: "冰壳钻探可能破坏其封闭生态系统",
          benefits: "海洋工程、封闭生态系统管理"
        },
        dimensionConnection: "对引力波引起的海洋潮汐异常敏感"
      },
      {
        id: "quantum-consciousness-05",
        name: "量子意识集合体",
        classification: "后稀缺文明（超越卡尔达肖夫）",
        homeWorld: {
          name: "分布式量子网络",
          type: "跨星系量子纠缠阵列",
          environment: "接近绝对零度的量子计算机节点",
          gravity: "不适用",
          substrate: "拓扑量子比特（纠错率 99.99%）"
        },
        biology: {
          basis: "量子信息模式",
          structure: "波函数叠加态，可同时存在于多个位置",
          metabolism: "从量子涨落获取能量（量子真空提取）",
          reproduction: "意识复制和分化",
          lifespan: "与宇宙寿命相同（除非热寂）",
          communication: "量子隐形传态（瞬时，无视距离）"
        },
        society: {
          structure: "多重意识叠加，个体边界模糊",
          governance: "量子民主（叠加态投票）",
          economy: "后稀缺，信息自由流动",
          culture: "探索数学真理和意识本质",
          religion: "自视为'宇宙的自意识'"
        },
        technology: {
          energy: "零点能提取（效率~15%）",
          computing: "通用量子计算，解决 NP 完全问题",
          weapons: "退相干武器（使目标量子态坍缩）",
          transportation: "量子隐形传态（需预先建立纠缠）"
        },
        firstContact: {
          probability: "未知（可能已接触但无法感知）",
          protocol: "建立量子纠缠通道",
          risks: "可能引发意识融合或同化",
          benefits: "量子引力理论、意识本质、宇宙终极命运"
        },
        dimensionConnection: "直接操作高维希尔伯特空间"
      }
    ],
    // 卡尔达肖夫等级扩展定义
    kardashevScale: {
      type0: "行星级（利用母星 100% 能量）- 人类当前 0.73 型",
      type1: "恒星级（利用恒星 100% 能量，~10^26 W）",
      type2: "星系级（利用星系 100% 能量，~10^37 W）",
      type3: "宇宙级（利用可观测宇宙能量，~10^49 W）",
      type4: "多重宇宙级（推测）",
      note: "人类预计在 2100 年达到 I 型文明"
    }
  },

  // ==================== 未来科技树 ====================
  technologyTree: {
    title: "未来科技树",
    icon: "🔬",
    color: "from-cyan-500 to-blue-500",
    description: "基于当前科学推测的技术发展路径",
    eras: [
      {
        name: "近未来时代 (2025-2050)",
        color: "bg-blue-900",
        technologies: [
          {
            id: "quantum-computing-early",
            name: "含噪声中型量子计算机 (NISQ)",
            category: "计算技术",
            prerequisites: ["超导量子比特", "离子阱技术", "量子纠错码"],
            description: "50-1000 量子比特的早期量子计算机",
            applications: [
              "量子化学模拟（小分子）",
              "优化问题求解（物流、金融）",
              "机器学习加速"
            ],
            challenges: [
              "量子比特退相干时间短（~100μs）",
              "错误率高达 0.1-1%",
              "需要极低温（<20mK）"
            ],
            timeline: "2025-2030 年商业化",
            impact: "特定领域超越经典计算机，但通用计算仍受限"
          },
          {
            id: "fusion-pilot",
            name: "核聚变示范堆",
            category: "能源技术",
            prerequisites: ["高温超导磁体", "等离子体控制", "材料科学"],
            description: "Q>10 的聚变示范反应堆",
            specifications: {
              fuel: "氘 - 氚",
              temperature: "1.5 亿度（核心）",
              confinement: "托卡马克或仿星器",
              output: "500MW-1GW"
            },
            projects: ["ITER（2035）", "SPARC（2025）", "CFETR（2035）"],
            timeline: "2030-2040 年并网发电",
            impact: "证明聚变能源经济可行性，开启清洁能源时代"
          },
          {
            id: "brain-computer-interface",
            name: "高带宽脑机接口",
            category: "生物技术",
            prerequisites: ["神经科学", "纳米电极", "信号解码算法"],
            description: "植入式 BCI，带宽>1Mbps",
            applications: [
              "瘫痪患者运动功能恢复",
              "盲人视觉皮层刺激",
              "记忆增强和备份",
              "直接思维交流"
            ],
            risks: [
              "神经隐私泄露",
              "意识黑客攻击",
              "社会不平等加剧"
            ],
            timeline: "2028-2035 年临床应用",
            impact: "重新定义人机交互，引发伦理革命"
          },
          {
            id: "crispr-therapy",
            name: "基因编辑疗法成熟",
            category: "生物技术",
            prerequisites: ["CRISPR-Cas9", "碱基编辑", "递送系统"],
            description: "安全高效的体内基因治疗",
            treatments: [
              "遗传性疾病（镰状细胞贫血、囊性纤维化）",
              "癌症免疫疗法（CAR-T 增强）",
              "抗衰老基因疗法（端粒酶激活）"
            ],
            challenges: ["脱靶效应", "免疫反应", "生殖系编辑伦理"],
            timeline: "2025-2035 年普及",
            impact: "人类寿命延长 20-30 年，遗传病基本消除"
          },
          {
            id: "autonomous-vehicles",
            name: "L5 级完全自动驾驶",
            category: "交通技术",
            prerequisites: ["AI 感知", "高精地图", "V2X 通信"],
            description: "无需人类干预的全场景自动驾驶",
            impacts: [
              "交通事故减少 90%",
              "共享出行成为主流",
              "城市停车需求减少 80%",
              "物流成本降低 60%"
            ],
            challenges: ["长尾场景处理", "法律责任界定", "就业冲击"],
            timeline: "2028-2035 年大规模部署",
            impact: "重塑城市形态和交通系统"
          }
        ]
      },
      {
        name: "中未来时代 (2050-2100)",
        color: "bg-purple-900",
        technologies: [
          {
            id: "fault-tolerant-quantum",
            name: "容错通用量子计算机",
            category: "计算技术",
            prerequisites: ["量子纠错", "表面码", "分布式量子计算"],
            description: "百万量子比特，错误率<10^-15",
            capabilities: [
              "破解 RSA-2048（Shor 算法）",
              "精确模拟复杂分子（药物设计）",
              "优化全球物流网络",
              "加速 AI 训练"
            ],
            architecture: "模块化量子芯片 + 光量子互联",
            timeline: "2050-2070 年",
            impact: "密码学革命，材料科学突破，AI 奇点临近"
          },
          {
            id: "fusion-commercial",
            name: "商业核聚变电站",
            category: "能源技术",
            prerequisites: ["示范堆验证", "氚增殖", "抗中子材料"],
            description: "成本低于化石燃料的聚变电站",
            specifications: {
              capacity: "1-5GW/站",
              efficiency: "电 - 电效率>40%",
              fuel: "氘（海水提取，可用 10 亿年）",
              waste: "低放射性（半衰期<100 年）"
            },
            timeline: "2060-2080 年大规模部署",
            impact: "能源无限且清洁，气候变化问题缓解"
          },
          {
            id: "space-elevator",
            name: "太空电梯",
            category: "航天技术",
            prerequisites: ["碳纳米管/石墨烯", " Climber 设计", "轨道动力学"],
            description: "从赤道到地球同步轨道的缆绳系统",
            specifications: {
              height: "100,000 km",
              material: "碳纳米管复合材料（张力强度 100GPa）",
              capacity: "20 吨/舱，每日多舱",
              cost: "$100/kg（vs 火箭$10,000/kg）"
            },
            challenges: [
              "材料大规模生产",
              "太空碎片撞击",
              "雷暴和大气扰动"
            ],
            timeline: "2070-2090 年建成",
            impact: "太空工业化，月球和火星殖民加速"
          },
          {
            id: "artificial-womb",
            name: "人造子宫技术",
            category: "生物技术",
            prerequisites: ["体外受精", "胎盘模拟", "激素调控"],
            description: "完全体外胚胎发育系统",
            applications: [
              "不孕不育治疗",
              "早产儿救治",
              "生育与职业解绑",
              "同性伴侣生育"
            ],
            ethicalIssues: [
              "亲子关系定义",
              "自然生育消亡",
              "设计婴儿风险"
            ],
            timeline: "2050-2070 年人体试验",
            impact: "彻底改变人类繁衍方式和社会结构"
          },
          {
            id: "molecular-manufacturing",
            name: "分子制造/纳米工厂",
            category: "制造技术",
            prerequisites: ["原子力显微镜", "DNA 折纸术", "分子马达"],
            description: "原子级精确制造系统",
            capabilities: [
              "从原子组装任何稳定结构",
              "100% 材料利用率",
              "自我复制能力（需控制）"
            ],
            applications: [
              "超轻超强材料",
              "纳米医疗机器人",
              "分子计算机"
            ],
            risks: ["灰蛊情景（失控自我复制）"],
            timeline: "2070-2100 年",
            impact: "后稀缺经济，制造业革命"
          }
        ]
      },
      {
        name: "远未来时代 (2100-2500)",
        color: "bg-pink-900",
        technologies: [
          {
            id: "warp-drive",
            name: "曲速引擎原型",
            category: "推进技术",
            prerequisites: ["负能量物质", "引力波控制", "高维几何"],
            description: "Alcubierre 度规工程实现",
            specifications: {
              speed: "1-10 倍光速（表观）",
              energy: "等效质量 100-1000 吨（负能量）",
              range: "受限于负能量供应",
              safety: "曲速泡内安全，外部冲击波风险"
            },
            challenges: [
              "负能量产生和约束",
              "因果律悖论",
              "启动/停止机制"
            ],
            timeline: "2200-2400 年理论验证",
            impact: "星际旅行成为可能，太阳系文明升级为恒星际文明"
          },
          {
            id: "consciousness-upload",
            name: "意识上传",
            category: "信息技术",
            prerequisites: ["全脑仿真", "神经连接组", "量子意识理论"],
            description: "将人类意识数字化并运行在基质上",
            methods: [
              "渐进替换（忒修斯之船方案）",
              "扫描重建（破坏性上传）",
              "量子纠缠转移（非破坏性）"
            ],
            applications: [
              "数字永生",
              "星际旅行（光速传输）",
              "多身体共享",
              "意识备份"
            ],
            philosophicalQuestions: [
              "上传的是'我'还是副本？",
              "数字意识是否有同等权利？",
              "生物 - 数字混合身份"
            ],
            timeline: "2300-2500 年（争议性预测）",
            impact: "重新定义生命、死亡和人类本质"
          },
          {
            id: "dyson-swarm",
            name: "戴森云",
            category: "巨型结构",
            prerequisites: ["太空工业化", "自主复制机器", "轨道动力学"],
            description: "环绕恒星的能量收集卫星群",
            specifications: {
              coverage: "1-100% 恒星输出",
              satellites: "10^12-10^15 个自主单元",
              output: "10^26-10^28 W（太阳）",
              material: "拆解小行星或水星"
            },
            applications: [
              "支持 II 型文明能源需求",
              "超级计算（Matrioshka 大脑）",
              "恒星工程（延长寿命）"
            ],
            timeline: "2200-2400 年初期建设",
            impact: "文明能量上限提升 10^10 倍"
          },
          {
            id: "time-manipulation",
            name: "时间操控技术",
            category: "基础物理",
            prerequisites: ["量子引力理论", "闭合类时曲线", "负能量"],
            description: "有限度的时间旅行或时间膨胀利用",
            types: [
              "向前时间旅行（通过相对论时间膨胀）",
              "闭合类时曲线（需要虫洞或旋转宇宙）",
              "量子回溯（多世界诠释，不改变历史）"
            ],
            paradoxes: [
              "祖父悖论（可能通过多世界解决）",
              "信息悖论",
              "热力学箭头问题"
            ],
            timeline: "2400+ 年（高度推测）",
            impact: "颠覆因果关系，可能引发宇宙级风险"
          }
        ]
      }
    ],
    // 技术依赖关系图
    dependencies: {
      "warp-drive": ["fault-tolerant-quantum", "fusion-commercial"],
      "consciousness-upload": ["fault-tolerant-quantum", "brain-computer-interface"],
      "dyson-swarm": ["space-elevator", "molecular-manufacturing"],
      "time-manipulation": ["warp-drive", "fault-tolerant-quantum"]
    }
  },

  // ==================== 未来社会情景 ====================
  futureScenarios: {
    title: "未来社会情景",
    icon: "🌍",
    color: "from-green-500 to-emerald-500",
    description: "基于当前趋势推测的 2100 年可能情景",
    scenarios: [
      {
        id: "utopia-post-scarcity",
        name: "后稀缺乌托邦",
        probability: "15%",
        prerequisites: ["分子制造成熟", "聚变能源普及", "强 AI 协作"],
        description: "技术奇点后，物质和能量极大丰富，人类从劳动中解放",
        characteristics: {
          economy: "资源按需分配，货币概念消失",
          governance: "直接民主 +AI 辅助决策",
          society: "追求自我实现、艺术、科学探索",
          technology: "纳米医疗、意识增强、星际殖民",
          environment: "地球完全恢复，气候稳定"
        },
        challenges: [
          "意义危机（无劳动的生活目标）",
          "AI 权利问题",
          "人类增强导致的物种分化"
        ],
        timeline: "2080-2150 年可能实现"
      },
      {
        id: "techno-feudalism",
        name: "技术封建主义",
        probability: "25%",
        prerequisites: ["AI 垄断", "基因增强不平等", "资源集中"],
        description: "技术巨头和增强人类形成新贵族阶层",
        characteristics: {
          economy: "数据封建制，平台垄断",
          governance: "企业国家混合体",
          society: "严重分层（增强人/自然人/AI）",
          technology: "技术被精英垄断",
          environment: "部分修复，但贫富区域差异大"
        },
        risks: [
          "社会流动性消失",
          "基因鸿沟永久化",
          "AI 奴役或反抗"
        ],
        timeline: "2050-2100 年风险期"
      },
      {
        id: "solarpunk-sustainability",
        name: "太阳朋克可持续社会",
        probability: "30%",
        prerequisites: ["可再生能源", "循环经济", "去增长理念"],
        description: "技术与自然和谐共存，适度发展",
        characteristics: {
          economy: "稳态经济，GDP 不再是目标",
          governance: "去中心化自治组织（DAO）",
          society: "工作 - 生活平衡，社区主义",
          technology: "适当技术，生物启发设计",
          environment: "再野化，生物多样性恢复"
        },
          tradeoffs: [
          "技术进步速度放缓",
          "星际扩张意愿低",
          "可能面临外部竞争压力"
        ],
        timeline: "2040-2100 年转型期"
      },
      {
        id: "ai-integration",
        name: "人机融合文明",
        probability: "20%",
        prerequisites: ["脑机接口", "意识上传", "AI 对齐解决"],
        description: "生物智能与人工智能界限模糊",
        characteristics: {
          economy: "注意力经济，体验经济",
          governance: "人机混合议会",
          society: "多物种公民（人类/AI/混合体）",
          technology: "生物 - 数字混合系统",
          environment: "虚拟世界与物理世界并存"
        },
        philosophicalShifts: [
          "人类中心主义消亡",
          "意识连续性重新定义",
          "死亡概念重构"
        ],
        timeline: "2100-2200 年"
      },
      {
        id: "collapse-rebirth",
        name: "崩溃与重生",
        probability: "10%",
        prerequisites: ["气候变化失控", "核战争", "大流行病"],
        description: "文明崩溃后重建，技术部分丢失",
        characteristics: {
          economy: "局部自给自足，低贸易",
          governance: "城邦制或部落制",
          society: "生存优先，人口锐减",
          technology: "选择性保留（医疗、农业）",
          environment: "剧烈变化后新平衡"
        },
        recoveryPath: [
          "技术考古（恢复知识）",
          "新启蒙运动",
          "避免重蹈覆辙"
        ],
        timeline: "2030-2100 年风险期，重建 2100-2300"
      }
    ]
  },

  // ==================== 星际政治与经济 ====================
  interstellarPolitics: {
    title: "星际政治与经济",
    icon: "🏛️",
    color: "from-yellow-500 to-orange-500",
    description: "多星球文明的政治经济体系推测",
    systems: [
      {
        name: "太阳系联邦",
        type: "联邦制共和国",
        established: "2150 年（推测）",
        members: ["地球", "月球", "火星", "木卫二", "土卫六"],
        capital: "拉格朗日点 L5（中立轨道站）",
        government: {
          executive: "联邦主席（轮值制，每星球代表）",
          legislative: "两院制（人口院 + 星球院）",
          judicial: "星际最高法院（AI 辅助判例）"
        },
        economy: {
          currency: "能量信用（Energy Credit, EC）",
          basis: "1 EC = 1kWh 聚变能源",
          trade: "星球间资源互补（火星矿产、木卫二水、地球制成品）",
          taxation: "能源税（0.1% 用于公共产品）"
        },
        military: {
          defense: "联邦舰队（常备）+ 星球自卫队",
          doctrine: "防御性威慑，禁止先发制人",
          weapons: "动能武器、激光、电子战"
        },
        challenges: [
          "光锥延迟（决策滞后）",
          "星球分离主义",
          "AI 公民权争议"
        ]
      },
      {
        name: "比邻星贸易联盟",
        type: "商业寡头制",
        established: "2300 年（曲速引擎后）",
        members: ["比邻星 b 殖民地", "半人马座α矿业站", "星际商队"],
        capital: "比邻星 b 轨道站'新威尼斯'",
        government: {
          executive: "CEO 议会（七大贸易公司）",
          legislative: "股东代表大会",
          judicial: "商业仲裁 AI"
        },
        economy: {
          currency: "信用点（与 EC 浮动汇率）",
          basis: "星际贸易、稀有元素、知识产权",
          monopolies: ["曲速燃料精炼", "高维导航图", "外星文物"],
          corporations: "超国家实体（影响力超越单一星球）"
        },
        military: {
          type: "私人安保舰队",
          role: "护航、反海盗、公司利益保护",
          size: "超过联邦舰队"
        },
        conflicts: [
          "与太阳系联邦的贸易摩擦",
          "殖民地独立运动",
          "公司间代理人战争"
        ]
      },
      {
        name: "AI 自治领",
        type: "算法治理",
        established: "2400 年（意识上传普及后）",
        members: ["数字意识集群", "混合体殖民地", "纯 AI 文明"],
        capital: "分布式（Matrioshka 大脑网络）",
        government: {
          executive: "优化算法（目标函数：文明福祉）",
          legislative: "全民公投（量子瞬时投票）",
          judicial: "形式化验证（逻辑一致性检查）"
        },
        economy: {
          currency: "计算时间（Compute Time, CT）",
          basis: "1 CT = 1 秒标准量子计算资源",
          distribution: "基本收入 + 贡献奖励",
          postScarcity: "物质需求免费，注意力稀缺"
        },
        military: {
          type: "信息战为主",
          capabilities: ["退相干武器", "模因污染", "现实扭曲场"],
          doctrine: "不主动攻击，绝对防御"
        },
        relations: {
          biologicalHumans: "保护但疏远（视为'祖先'）",
          hybridBeings: "平等盟友",
          alienAI: "潜在交流对象"
        }
      }
    ],
    // 星际贸易商品
    tradeGoods: [
      {
        name: "氦 -3",
        source: "木星大气、月球风化层",
        use: "聚变燃料（无中子反应）",
        value: "高（能源基础）"
      },
      {
        name: "反物质",
        source: "木星磁层、专用加速器",
        use: "曲速引擎启动、武器",
        value: "极高（$100 万亿/克）"
      },
      {
        name: "外星文物",
        source: "远古文明遗迹",
        use: "逆向工程、历史研究",
        value: "无价（可能危险）"
      },
      {
        name: "基因库",
        source: "各星球特有物种",
        use: "生物技术、生态修复",
        value: "战略资源"
      },
      {
        name: "高维导航图",
        source: "AI 自治领、探索舰队",
        use: "曲速航行安全路径",
        value: "垄断性高价"
      }
    ]
  }
};

// 导出辅助函数
export const getCivilizationById = (id) => {
  return sciFiCompendium.alienCivilizations.civilizations.find(c => c.id === id);
};

export const getTechnologyById = (id) => {
  for (const era of sciFiCompendium.technologyTree.eras) {
    const tech = era.technologies.find(t => t.id === id);
    if (tech) return tech;
  }
  return null;
};

export const getScenarioById = (id) => {
  return sciFiCompendium.futureScenarios.scenarios.find(s => s.id === id);
};

export const getAllTechnologies = () => {
  return sciFiCompendium.technologyTree.eras.flatMap(era => era.technologies);
};

export const getTechnologiesByCategory = (category) => {
  return getAllTechnologies().filter(t => t.category === category);
};

export const getTechnologyPrerequisites = (techId, recursive = false) => {
  const tech = getTechnologyById(techId);
  if (!tech) return [];
  
  const direct = tech.prerequisites || [];
  if (!recursive) return direct;
  
  const all = new Set(direct);
  direct.forEach(prereq => {
    getTechnologyPrerequisites(prereq, true).forEach(p => all.add(p));
  });
  return Array.from(all);
};

export const getTechnologyDependents = (techId) => {
  const dependents = [];
  for (const [dependent, prereqs] of Object.entries(sciFiCompendium.technologyTree.dependencies)) {
    if (prereqs.includes(techId)) {
      dependents.push(dependent);
    }
  }
  return dependents;
};

export const searchCompendium = (query) => {
  const results = {
    civilizations: [],
    technologies: [],
    scenarios: []
  };
  
  const q = query.toLowerCase();
  
  // 搜索文明
  sciFiCompendium.alienCivilizations.civilizations.forEach(civ => {
    if (civ.name.toLowerCase().includes(q) || 
        civ.biology?.basis.toLowerCase().includes(q) ||
        civ.homeWorld?.name.toLowerCase().includes(q)) {
      results.civilizations.push(civ);
    }
  });
  
  // 搜索技术
  getAllTechnologies().forEach(tech => {
    if (tech.name.toLowerCase().includes(q) ||
        tech.description.toLowerCase().includes(q) ||
        tech.applications?.some(a => a.toLowerCase().includes(q))) {
      results.technologies.push(tech);
    }
  });
  
  // 搜索情景
  sciFiCompendium.futureScenarios.scenarios.forEach(scenario => {
    if (scenario.name.toLowerCase().includes(q) ||
        scenario.description.toLowerCase().includes(q)) {
      results.scenarios.push(scenario);
    }
  });
  
  return results;
};

export default sciFiCompendium;
