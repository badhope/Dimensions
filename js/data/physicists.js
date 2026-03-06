// 物理学家数据 - 维度理论贡献者
export const physicists = [
  {
    id: 'kaluza',
    name: '西奥多·卡鲁扎',
    nameEn: 'Theodor Kaluza',
    years: '1885-1954',
    image: '👨‍🔬',
    contribution: '五维统一理论',
    description: '1921 年提出卡鲁扎 - 克莱因理论，尝试将引力与电磁力统一在五维时空中。他的工作开创了高维物理研究的先河。',
    achievement: '发现第五维度',
    era: '早期量子论'
  },
  {
    id: 'klein',
    name: '奥斯卡·克莱因',
    nameEn: 'Oskar Klein',
    years: '1894-1977',
    image: '👨‍🔬',
    contribution: '紧致化维度概念',
    description: '1926 年发展了卡鲁扎的理论，提出额外维度可能卷曲成极小的圆圈，解释了为什么我们无法直接感知它们。',
    achievement: '维度紧致化理论',
    era: '量子力学奠基'
  },
  {
    id: 'einstein',
    name: '阿尔伯特·爱因斯坦',
    nameEn: 'Albert Einstein',
    years: '1879-1955',
    image: '🧠',
    contribution: '广义相对论',
    description: '1915 年提出广义相对论，将引力解释为时空弯曲。他的工作为理解高维时空奠定了几何基础。',
    achievement: '时空几何化',
    era: '相对论时代'
  },
  {
    id: 'witten',
    name: '爱德华·威滕',
    nameEn: 'Edward Witten',
    years: '1951-',
    image: '🌟',
    contribution: 'M 理论',
    description: '1995 年提出 M 理论，统一了五种不同的弦理论。被认为是当代最聪明的理论物理学家之一。',
    achievement: '弦理论统一者',
    era: '现代弦理论'
  },
  {
    id: 'greene',
    name: '布莱恩·格林',
    nameEn: 'Brian Greene',
    years: '1963-',
    image: '📚',
    contribution: '弦理论科普',
    description: '通过《优雅的宇宙》等著作向大众普及弦理论和多维时空概念。哥伦比亚大学教授，弦理论研究者。',
    achievement: '科学传播者',
    era: '科普时代'
  },
  {
    id: 'schwarz',
    name: '约翰·施瓦茨',
    nameEn: 'John Schwarz',
    years: '1941-',
    image: '⚛️',
    contribution: '弦理论奠基',
    description: '与迈克尔·格林共同发现弦理论中的反常消除机制，引发了第一次弦理论革命。',
    achievement: '第一次弦理论革命',
    era: '弦理论兴起'
  },
  {
    id: 'polchinski',
    name: '约瑟夫·波尔钦斯基',
    nameEn: 'Joseph Polchinski',
    years: '1954-2018',
    image: '🔬',
    contribution: 'D-膜理论',
    description: '1995 年发现 D-膜的重要性，这是理解弦理论非微扰性质的关键。M 理论发展的重要贡献者。',
    achievement: 'D-膜发现',
    era: '第二次弦理论革命'
  },
  {
    id: 'hooft',
    name: '杰拉德·特·胡夫特',
    nameEn: "Gerard 't Hooft",
    years: '1946-',
    image: '🎯',
    contribution: '全息原理',
    description: '提出全息原理，认为描述一个体积的信息可以编码在其边界面上。这对理解量子引力至关重要。',
    achievement: '全息原理提出者',
    era: '量子引力'
  }
];

// 按时代分组
export const physicistEras = {
  '早期量子论': ['kaluza', 'klein'],
  '相对论时代': ['einstein'],
  '弦理论兴起': ['schwarz'],
  '现代弦理论': ['witten', 'polchinski', 'hooft'],
  '科普时代': ['greene']
};

// 成就标签
export const achievementTags = [
  { id: 'dimension', name: '维度发现', color: 'from-purple-500 to-indigo-500' },
  { id: 'unification', name: '统一理论', color: 'from-blue-500 to-cyan-500' },
  { id: 'geometry', name: '几何洞察', color: 'from-green-500 to-emerald-500' },
  { id: 'quantum', name: '量子突破', color: 'from-yellow-500 to-orange-500' },
  { id: 'string', name: '弦理论', color: 'from-red-500 to-pink-500' },
  { id: 'education', name: '科学教育', color: 'from-pink-500 to-rose-500' }
];
