// 维度理论的实际应用和前沿研究
export const applications = [
  {
    id: 'quantum-computing',
    title: '量子计算',
    icon: '💻',
    category: '技术',
    dimensionRelevance: [0, 1, 2, 3],
    description: '量子比特的叠加态和纠缠态利用了高维希尔伯特空间的数学结构。量子计算机在特定问题上展现出超越经典计算机的潜力。',
    realWorld: '谷歌的 Sycamore、IBM 的量子计算机已经实现"量子霸权"',
    future: '可能彻底改变密码学、药物设计和材料科学',
    status: '发展中'
  },
  {
    id: 'string-cosmology',
    title: '弦宇宙学',
    icon: '🌌',
    category: '宇宙学',
    dimensionRelevance: [10, 11],
    description: '应用弦理论研究宇宙起源，包括膜宇宙学、循环宇宙模型等。解释宇宙大爆炸之前的状态。',
    realWorld: '解释暗能量、暗物质等宇宙学难题',
    future: '可能揭示多重宇宙的存在',
    status: '理论研究'
  },
  {
    id: 'ads-cft',
    title: 'AdS/CFT 对偶',
    icon: '∞',
    category: '理论物理',
    dimensionRelevance: [10, 11],
    description: '全息对偶原理的具体实现，将引力理论与量子场论联系起来。在凝聚态物理和核物理中有应用。',
    realWorld: '用于计算夸克 - 胶子等离子体的性质',
    future: '可能统一量子力学和广义相对论',
    status: '活跃研究'
  },
  {
    id: 'calabi-yau',
    title: '卡拉比 - 丘流形',
    icon: '🌀',
    category: '数学物理',
    dimensionRelevance: [6, 10],
    description: '弦理论中额外维度紧致化的几何形状。这些复杂的数学结构决定了我们宇宙的物理定律。',
    realWorld: '纯数学和代数几何的重要研究对象',
    future: '理解标准模型参数的起源',
    status: '数学研究'
  },
  {
    id: 'brane-world',
    title: '膜世界场景',
    icon: '🪐',
    category: '宇宙学',
    dimensionRelevance: [10, 11],
    description: '认为我们的三维宇宙是漂浮在高维空间中的一张膜。引力可能泄漏到额外维度，解释其微弱性。',
    realWorld: '可在大强子对撞机中检验',
    future: '可能解释等级问题',
    status: '实验验证中'
  },
  {
    id: 'topological-insulators',
    title: '拓扑绝缘体',
    icon: '⚡',
    category: '凝聚态',
    dimensionRelevance: [2, 3, 4],
    description: '具有拓扑保护性质的新型材料，其数学描述涉及高维拓扑不变量。',
    realWorld: '已获 2016 年诺贝尔物理学奖',
    future: '用于拓扑量子计算',
    status: '实验实现'
  },
  {
    id: 'quantum-gravity',
    title: '量子引力',
    icon: '🔮',
    category: '基础理论',
    dimensionRelevance: [10, 11],
    description: '试图将广义相对论和量子力学统一的理论。弦理论和圈量子引力是主要候选者。',
    realWorld: '理解黑洞信息悖论',
    future: '物理学的终极理论',
    status: '未解之谜'
  },
  {
    id: 'multiverse',
    title: '多重宇宙',
    icon: '🌐',
    category: '宇宙学',
    dimensionRelevance: [10, 11],
    description: '弦理论预言可能存在 10^500 种不同的真空态，每种对应一个可能的宇宙。',
    realWorld: '解释精细调节问题',
    future: '改变对现实本质的理解',
    status: '推测性'
  },
  {
    id: 'dark-matter',
    title: '暗物质研究',
    icon: '🌑',
    category: '粒子物理',
    dimensionRelevance: [10, 11],
    description: '弦理论中的超对称粒子可能是暗物质的候选者。额外维度也可能影响暗物质分布。',
    realWorld: '占宇宙物质的 27%',
    future: '地下探测器正在寻找',
    status: '实验搜寻'
  },
  {
    id: 'holography',
    title: '全息原理应用',
    icon: '📊',
    category: '跨学科',
    dimensionRelevance: [10, 11],
    description: '全息思想被应用于凝聚态物理、核物理、甚至量子信息理论。',
    realWorld: '计算强耦合系统的性质',
    future: '量子引力的关键线索',
    status: '快速发展'
  }
];

// 应用领域分类
export const applicationCategories = {
  '技术': ['quantum-computing'],
  '宇宙学': ['string-cosmology', 'brane-world', 'multiverse', 'dark-matter'],
  '理论物理': ['ads-cft', 'quantum-gravity'],
  '数学物理': ['calabi-yau'],
  '凝聚态': ['topological-insulators'],
  '粒子物理': ['dark-matter'],
  '跨学科': ['holography']
};

// 研究状态标签
export const researchStatus = {
  '发展中': { color: 'bg-blue-500', icon: '🔬' },
  '理论研究': { color: 'bg-purple-500', icon: '📐' },
  '活跃研究': { color: 'bg-green-500', icon: '⚡' },
  '数学研究': { color: 'bg-indigo-500', icon: '∞' },
  '实验验证中': { color: 'bg-yellow-500', icon: '🧪' },
  '实验实现': { color: 'bg-emerald-500', icon: '✅' },
  '未解之谜': { color: 'bg-red-500', icon: '❓' },
  '推测性': { color: 'bg-pink-500', icon: '💭' },
  '实验搜寻': { color: 'bg-orange-500', icon: '🔍' },
  '快速发展': { color: 'bg-cyan-500', icon: '🚀' }
};

// 维度关联性说明
export const dimensionImpact = {
  0: '量子计算的零维点粒子模型',
  1: '弦理论中的一维弦',
  2: '膜世界和全息原理的二维表面',
  3: '我们生活的三维空间',
  4: '时空的四维结构',
  5: '卡鲁扎 - 克莱因理论的第五维',
  6: '卡拉比 - 丘流形的六维紧致化',
  10: '弦理论的十维时空',
  11: 'M 理论的十一维框架'
};
