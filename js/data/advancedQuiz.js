// 扩展测验题目 - 包含更多难度级别
export const advancedQuizQuestions = [
  // 基础难度
  {
    id: 'basic-1',
    question: '我们日常感知的空间有几个维度？',
    options: ['2 个', '3 个', '4 个', '5 个'],
    correct: 1,
    explanation: '我们感知的空间是三维的（长、宽、高），加上时间维度构成四维时空。',
    difficulty: '基础',
    points: 10
  },
  {
    id: 'basic-2',
    question: '弦理论认为基本粒子实际上是什么？',
    options: ['点粒子', '振动的弦', '膜', '波函数'],
    correct: 1,
    explanation: '弦理论认为所有基本粒子都是在一维弦上振动的不同模式。',
    difficulty: '基础',
    points: 10
  },
  {
    id: 'basic-3',
    question: 'M 理论需要多少个时空维度？',
    options: ['10 个', '11 个', '12 个', '26 个'],
    correct: 1,
    explanation: 'M 理论需要 11 个维度（10 个空间维 +1 个时间维）。',
    difficulty: '基础',
    points: 10
  },
  
  // 中等难度
  {
    id: 'intermediate-1',
    question: '什么是"紧致化"？',
    options: [
      '宇宙收缩的过程',
      '额外维度卷曲成极小尺度的现象',
      '黑洞的形成',
      '弦的振动模式'
    ],
    correct: 1,
    explanation: '紧致化是指额外维度卷曲成非常小的尺度（普朗克尺度），因此我们无法直接观测到它们。',
    difficulty: '中等',
    points: 20
  },
  {
    id: 'intermediate-2',
    question: '卡拉比 - 丘流形有多少个维度？',
    options: ['4 个', '6 个', '8 个', '10 个'],
    correct: 1,
    explanation: '卡拉比 - 丘流形是六维的紧致化空间，用于弦理论中额外维度的几何描述。',
    difficulty: '中等',
    points: 20
  },
  {
    id: 'intermediate-3',
    question: '全息原理认为信息可以被编码在？',
    options: [
      '体积内部',
      '边界面上',
      '时间轴上',
      '弦的振动中'
    ],
    correct: 1,
    explanation: '全息原理认为描述一个体积的信息可以完全编码在其边界面上，类似于全息图。',
    difficulty: '中等',
    points: 20
  },
  {
    id: 'intermediate-4',
    question: '哪种理论试图统一所有五种弦理论？',
    options: ['超弦理论', 'M 理论', '圈量子引力', '超对称理论'],
    correct: 1,
    explanation: 'M 理论由爱德华·威滕于 1995 年提出，统一了五种不同的弦理论。',
    difficulty: '中等',
    points: 20
  },
  
  // 高级难度
  {
    id: 'advanced-1',
    question: 'AdS/CFT 对偶中的"CFT"指的是？',
    options: [
      '经典场论 (Classical Field Theory)',
      '共形场论 (Conformal Field Theory)',
      '量子场论 (Quantum Field Theory)',
      '规范场论 (Gauge Field Theory)'
    ],
    correct: 1,
    explanation: 'CFT 是共形场论（Conformal Field Theory），AdS/CFT 对偶将反德西特空间的引力理论与边界上的共形场论联系起来。',
    difficulty: '高级',
    points: 30
  },
  {
    id: 'advanced-2',
    question: 'D-膜是什么？',
    options: [
      '暗物质膜',
      '弦可以端接的高维物体',
      '维度之间的屏障',
      '量子涨落产生的膜'
    ],
    correct: 1,
    explanation: 'D-膜（Dirichlet 膜）是弦理论中的一种动力学物体，开弦的端点可以固定在其上。',
    difficulty: '高级',
    points: 30
  },
  {
    id: 'advanced-3',
    question: '弦理论中的"等级问题"指的是？',
    options: [
      '弦的振动等级',
      '引力为何比其他力弱得多',
      '维度数量的问题',
      '能量尺度的分级'
    ],
    correct: 1,
    explanation: '等级问题是指为什么引力比电磁力、弱力和强力弱这么多（约 10^32 倍）。',
    difficulty: '高级',
    points: 30
  },
  {
    id: 'advanced-4',
    question: '什么是"弦景观"（String Landscape）？',
    options: [
      '弦理论研究的地理分布',
      '弦理论可能的真空态的巨大集合',
      '弦振动的可视化',
      '多维空间的几何形状'
    ],
    correct: 1,
    explanation: '弦景观指弦理论中可能存在的 10^500 种不同的真空态，每种对应一个可能的宇宙。',
    difficulty: '高级',
    points: 30
  },
  
  // 专家难度
  {
    id: 'expert-1',
    question: '在 M 理论中，基本物体包括？',
    options: [
      '仅有一维弦',
      '零维点粒子',
      '多维 p-膜',
      '弦和膜的组合'
    ],
    correct: 2,
    explanation: 'M 理论包含各种维度的 p-膜（0 维到 9 维），其中 M2-膜和 M5-膜是基本物体。',
    difficulty: '专家',
    points: 50
  },
  {
    id: 'expert-2',
    question: '镜像对称是指？',
    options: [
      '两个相同的卡拉比 - 丘流形',
      '两个拓扑不同但物理等价的卡拉比 - 丘流形',
      '弦的左右对称振动',
      '时空的镜像反射'
    ],
    correct: 1,
    explanation: '镜像对称是指两个拓扑结构不同的卡拉比 - 丘流形可以产生相同的物理现象，这是弦理论的重要发现。',
    difficulty: '专家',
    points: 50
  },
  {
    id: 'expert-3',
    question: '什么是"沼泽地"（Swampland）？',
    options: [
      '弦理论无法描述的物理理论',
      '宇宙中的暗物质区域',
      '量子引力的低能极限',
      '额外维度的不稳定区域'
    ],
    correct: 0,
    explanation: '沼泽地指那些在低能下看起来自洽，但无法与量子引力（弦理论）相容的有效场论。',
    difficulty: '专家',
    points: 50
  }
];

// 难度级别定义
export const difficultyLevels = {
  '基础': { color: 'bg-green-500', multiplier: 1, description: '入门知识' },
  '中等': { color: 'bg-blue-500', multiplier: 2, description: '理解概念' },
  '高级': { color: 'bg-purple-500', multiplier: 3, description: '深入理解' },
  '专家': { color: 'bg-red-500', multiplier: 5, description: '专业水平' }
};

// 成就系统
export const achievements = [
  {
    id: 'first-quiz',
    title: '初次尝试',
    description: '完成第一次测验',
    icon: '🎯',
    condition: (stats) => stats.quizzesCompleted >= 1,
    points: 10
  },
  {
    id: 'perfect-score',
    title: '完美表现',
    description: '在一次测验中获得 100% 正确率',
    icon: '💯',
    condition: (stats) => stats.perfectQuizzes >= 1,
    points: 50
  },
  {
    id: 'quiz-master',
    title: '测验大师',
    description: '完成 10 次测验',
    icon: '🏆',
    condition: (stats) => stats.quizzesCompleted >= 10,
    points: 100
  },
  {
    id: 'all-dimensions',
    title: '维度探索者',
    description: '访问所有 12 个维度页面',
    icon: '🌌',
    condition: (stats) => stats.dimensionsVisited >= 12,
    points: 75
  },
  {
    id: 'theory-expert',
    title: '理论专家',
    description: '阅读所有理论卡片',
    icon: '📚',
    condition: (stats) => stats.theoriesRead >= 6,
    points: 60
  },
  {
    id: 'game-champion',
    title: '游戏冠军',
    description: '在维度游戏中获得 1000 分',
    icon: '🎮',
    condition: (stats) => stats.gameHighScore >= 1000,
    points: 80
  },
  {
    id: 'physicist-fan',
    title: '物理学爱好者',
    description: '了解所有 8 位物理学家的贡献',
    icon: '👨‍🔬',
    condition: (stats) => stats.physicistsLearned >= 8,
    points: 70
  },
  {
    id: 'application-explorer',
    title: '应用探索者',
    description: '探索所有 10 个应用领域',
    icon: '🔬',
    condition: (stats) => stats.applicationsExplored >= 10,
    points: 90
  },
  {
    id: 'dedicated-learner',
    title: '勤奋学习者',
    description: '累计学习 30 分钟',
    icon: '⏰',
    condition: (stats) => stats.totalStudyTime >= 1800,
    points: 100
  },
  {
    id: 'legend',
    title: '维度传奇',
    description: '解锁所有其他成就',
    icon: '👑',
    condition: (stats) => stats.totalAchievements >= 9,
    points: 200
  }
];

// 合并导出
export const quizData = {
  basic: advancedQuizQuestions.filter(q => q.difficulty === '基础'),
  intermediate: advancedQuizQuestions.filter(q => q.difficulty === '中等'),
  advanced: advancedQuizQuestions.filter(q => q.difficulty === '高级'),
  expert: advancedQuizQuestions.filter(q => q.difficulty === '专家')
};
