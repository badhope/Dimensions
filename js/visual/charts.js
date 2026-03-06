// 可视化图表和信息图形系统
export const visualizationSystem = {
  // 维度结构可视化
  dimensionStructures: {
    title: "维度结构图谱",
    type: "hierarchical",
    data: {
      label: "十一维时空",
      children: [
        {
          label: "宏观维度 (0-3D)",
          children: [
            { label: "0D", value: "点", description: "没有延伸的数学点" },
            { label: "1D", value: "线", description: "只有长度的弦" },
            { label: "2D", value: "面", description: "长宽构成的平面" },
            { label: "3D", value: "体", description: "我们生活的空间" }
          ]
        },
        {
          label: "时空维度 (4D)",
          children: [
            { label: "4D", value: "时空", description: "三维空间 + 一维时间" }
          ]
        },
        {
          label: "高维可能性 (5-9D)",
          children: [
            { label: "5D", value: "可能世界", description: "选择的分支" },
            { label: "6D", value: "参数空间", description: "物理定律的变化" },
            { label: "7D", value: "无限历史", description: "同一初始条件的所有可能" },
            { label: "8D", value: "多重宇宙", description: "不同初始条件的宇宙" },
            { label: "9D", value: "信息空间", description: "所有信息的集合" }
          ]
        },
        {
          label: "终极理论 (10-11D)",
          children: [
            { label: "10D", value: "弦理论", description: "十维时空的弦振动" },
            { label: "11D", value: "M 理论", description: "统一五种弦理论" }
          ]
        }
      ]
    }
  },
  
  // 理论框架对比图
  theoryComparison: {
    title: "物理理论框架对比",
    type: "radar",
    dimensions: [
      "数学自洽性",
      "实验验证",
      "预测能力",
      "统一程度",
      "概念简洁性"
    ],
    theories: [
      {
        name: "广义相对论",
        scores: [95, 100, 90, 60, 85],
        color: "#3b82f6"
      },
      {
        name: "量子力学",
        scores: [95, 100, 95, 60, 70],
        color: "#8b5cf6"
      },
      {
        name: "标准模型",
        scores: [90, 95, 85, 75, 60],
        color: "#ec4899"
      },
      {
        name: "弦理论",
        scores: [85, 40, 70, 95, 80],
        color: "#06b6d4"
      },
      {
        name: "M 理论",
        scores: [80, 30, 65, 98, 85],
        color: "#f59e0b"
      }
    ]
  },
  
  // 宇宙组成饼图
  universeComposition: {
    title: "宇宙物质能量组成",
    type: "pie",
    data: [
      { label: "普通物质", value: 4.9, color: "#3b82f6", description: "构成恒星、行星和生命的物质" },
      { label: "暗物质", value: 26.8, color: "#8b5cf6", description: "产生引力但不发光的神秘物质" },
      { label: "暗能量", value: 68.3, color: "#ec4899", description: "导致宇宙加速膨胀的能量" }
    ],
    source: "Planck 卫星观测数据 (2018)"
  },
  
  // 时间线可视化
  physicsTimeline: {
    title: "物理学重大发现时间线",
    type: "timeline",
    events: [
      { year: 1687, event: "牛顿《原理》", significance: 90 },
      { year: 1865, event: "麦克斯韦方程", significance: 95 },
      { year: 1905, event: "狭义相对论", significance: 100 },
      { year: 1915, event: "广义相对论", significance: 100 },
      { year: 1925, event: "量子力学", significance: 100 },
      { year: 1954, event: "杨 - 米尔斯理论", significance: 85 },
      { year: 1974, event: "弦理论突破", significance: 80 },
      { year: 1995, event: "M 理论", significance: 85 },
      { year: 2012, event: "希格斯玻色子", significance: 90 },
      { year: 2015, event: "引力波探测", significance: 95 }
    ]
  },
  
  // 能量尺度对比
  energyScales: {
    title: "物理过程的能量尺度",
    type: "logarithmic",
    scale: "eV (电子伏特)",
    data: [
      { label: "室温热能", value: 0.025, description: "kT 在 300K" },
      { label: "可见光光子", value: 2, description: "波长 500nm" },
      { label: "电子质量", value: 511000, description: "0.511 MeV" },
      { label: "质子质量", value: 938000000, description: "0.938 GeV" },
      { label: "LHC 对撞能量", value: 13000000000, description: "13 TeV" },
      { label: "大统一尺度", value: 1e15, description: "10^15 GeV" },
      { label: "普朗克能量", value: 1.22e19, description: "量子引力尺度" }
    ]
  },
  
  // 维度理论关系图
  dimensionTheoryMap: {
    title: "维度理论关系图谱",
    type: "network",
    nodes: [
      { id: "kaluza", label: "卡鲁扎理论", year: 1921, type: "foundation" },
      { id: "klein", label: "克莱因紧致化", year: 1926, type: "foundation" },
      { id: "string", label: "弦理论", year: 1968, type: "main" },
      { id: "superstring", label: "超弦理论", year: 1974, type: "main" },
      { id: "mtheory", label: "M 理论", year: 1995, type: "ultimate" },
      { id: "holography", label: "全息原理", year: 1993, type: "related" },
      { id: "adsCft", label: "AdS/CFT", year: 1997, type: "related" },
      { id: "brane", label: "膜宇宙学", year: 1999, type: "related" }
    ],
    links: [
      { source: "kaluza", target: "klein", label: "发展" },
      { source: "klein", target: "string", label: "启发" },
      { source: "string", target: "superstring", label: "扩展" },
      { source: "superstring", target: "mtheory", label: "统一" },
      { source: "mtheory", target: "holography", label: "蕴含" },
      { source: "holography", target: "adsCft", label: "实现" },
      { source: "mtheory", target: "brane", label: "预言" }
    ]
  },
  
  // 量子比特状态可视化
  qubitState: {
    title: "量子比特布洛赫球",
    type: "bloch_sphere",
    description: "量子比特的状态可以表示为布洛赫球面上的点",
    states: [
      { name: "|0⟩", theta: 0, phi: 0, color: "#3b82f6" },
      { name: "|1⟩", theta: Math.PI, phi: 0, color: "#ef4444" },
      { name: "|+⟩", theta: Math.PI/2, phi: 0, color: "#10b981" },
      { name: "|-⟩", theta: Math.PI/2, phi: Math.PI, color: "#f59e0b" },
      { name: "叠加态", theta: Math.PI/3, phi: Math.PI/2, color: "#8b5cf6" }
    ]
  },
  
  // 弦振动模式
  stringVibrations: {
    title: "弦的振动模式与粒子",
    type: "harmonic",
    modes: [
      { harmonic: 0, frequency: "基频", particle: "光子", mass: 0, spin: 1 },
      { harmonic: 1, frequency: "第一泛音", particle: "W/Z 玻色子", mass: "80-90 GeV", spin: 1 },
      { harmonic: 2, frequency: "第二泛音", particle: "胶子", mass: 0, spin: 1 },
      { harmonic: 3, frequency: "第三泛音", particle: "引力子", mass: 0, spin: 2 },
      { harmonic: 4, frequency: "第四泛音", particle: "希格斯玻色子", mass: "125 GeV", spin: 0 }
    ],
    equation: "E_n = (n + 1/2)ℏω"
  },
  
  // 多重宇宙层级
  multiverseLevels: {
    title: "多重宇宙的四个层级",
    type: "nested",
    levels: [
      {
        level: "I 层",
        name: "视界之外",
        description: "我们可观测宇宙之外的区域",
        size: "无限",
        physics: "与我们相同"
      },
      {
        level: "II 层",
        name: "暴胀口袋",
        description: "永恒暴胀产生的其他宇宙泡",
        size: "无限多个",
        physics: "可能不同"
      },
      {
        level: "III 层",
        name: "量子多世界",
        description: "量子力学的多世界诠释",
        size: "指数增长",
        physics: "与我们相同"
      },
      {
        level: "IV 层",
        name: "数学宇宙",
        description: "所有数学上自洽的结构",
        size: "绝对无限",
        physics: "完全不同"
      }
    ]
  },
  
  // 信息 - 能量关系
  informationEnergy: {
    title: "信息与能量的关系",
    type: "flowchart",
    concepts: [
      {
        id: "landauer",
        title: "朗道尔原理",
        equation: "E ≥ kT ln 2",
        description: "擦除 1 比特信息至少需要 kT ln 2 的能量"
      },
      {
        id: "bekenstein",
        title: "贝肯斯坦上限",
        equation: "S ≤ 2πkRE/ℏc",
        description: "区域内信息的最大熵与半径和能量成正比"
      },
      {
        id: "holographic",
        title: "全息原理",
        equation: "S ≤ A/4",
        description: "体积内的信息量不超过表面积的 1/4"
      },
      {
        id: "blackhole",
        title: "黑洞熵",
        equation: "S = kA/4l_p²",
        description: "黑洞的熵与其事件视界的面积成正比"
      }
    ],
    connections: [
      { from: "landauer", to: "bekenstein", label: "推广" },
      { from: "bekenstein", to: "holographic", label: "启发" },
      { from: "holographic", to: "blackhole", label: "应用" }
    ]
  }
};

// CSS 样式定义
export const visualizationStyles = `
/* 树状图样式 */
.tree-node {
  fill: rgba(6, 182, 212, 0.1);
  stroke: #06b6d4;
  stroke-width: 2px;
}

.tree-node:hover {
  fill: rgba(6, 182, 212, 0.3);
}

.tree-label {
  font-size: 12px;
  fill: #e5e7eb;
  font-family: 'Noto Sans SC', sans-serif;
}

/* 雷达图样式 */
.radar-axis {
  stroke: #6b7280;
  stroke-width: 1px;
}

.radar-grid {
  stroke: #374151;
  stroke-width: 0.5px;
  stroke-dasharray: 3,3;
}

.radar-area {
  fill-opacity: 0.3;
  stroke-width: 2px;
  transition: all 0.3s ease;
}

.radar-area:hover {
  fill-opacity: 0.6;
}

/* 饼图样式 */
.pie-segment {
  stroke: #1f2937;
  stroke-width: 2px;
  transition: all 0.3s ease;
}

.pie-segment:hover {
  transform: scale(1.05);
  filter: brightness(1.2);
}

/* 时间线样式 */
.timeline-event {
  cursor: pointer;
  transition: all 0.3s ease;
}

.timeline-event:hover {
  r: 8;
  fill: #06b6d4;
}

.timeline-line {
  stroke: #374151;
  stroke-width: 2px;
}

/* 网络图样式 */
.network-node {
  stroke-width: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.network-node.foundation {
  fill: #3b82f6;
}

.network-node.main {
  fill: #8b5cf6;
}

.network-node.ultimate {
  fill: #f59e0b;
}

.network-node.related {
  fill: #10b981;
}

.network-link {
  stroke: #6b7280;
  stroke-width: 1px;
  opacity: 0.6;
}

.network-label {
  font-size: 10px;
  fill: #9ca3af;
}

/* 对数刻度样式 */
.log-scale-bar {
  rx: 4;
  ry: 4;
}

/* 动画效果 */
@keyframes pulse-glow {
  0%, 100% {
    filter: drop-shadow(0 0 5px currentColor);
  }
  50% {
    filter: drop-shadow(0 0 15px currentColor);
  }
}

.visualization-element {
  animation: pulse-glow 3s ease-in-out infinite;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .tree-label {
    font-size: 10px;
  }
  
  .radar-grid {
    stroke-width: 0.3px;
  }
}
`;

// 图表生成配置
export const chartConfigs = {
  // 通用配置
  common: {
    width: 800,
    height: 600,
    margin: { top: 40, right: 40, bottom: 40, left: 40 },
    colors: [
      "#06b6d4", // cyan
      "#3b82f6", // blue
      "#8b5cf6", // violet
      "#ec4899", // pink
      "#f59e0b", // amber
      "#10b981", // emerald
      "#ef4444", // red
      "#6366f1"  // indigo
    ],
    fontFamily: "'Noto Sans SC', sans-serif"
  },
  
  // 树状图配置
  tree: {
    nodeRadius: 6,
    linkWidth: 2,
    collapsible: true,
    animated: true
  },
  
  // 雷达图配置
  radar: {
    levels: 5,
    showLabels: true,
    showGrid: true,
    fillOpacity: 0.3
  },
  
  // 饼图配置
  pie: {
    showLabels: true,
    showPercentage: true,
    showLegend: true,
    donut: false
  },
  
  // 时间线配置
  timeline: {
    showGrid: true,
    showLabels: true,
    eventRadius: 5,
    lineWidth: 2
  },
  
  // 网络图配置
  network: {
    linkDistance: 150,
    linkStrength: 0.1,
    charge: -300,
    collisionRadius: 30
  }
};
