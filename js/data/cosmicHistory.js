// 宇宙历史时间线与重大事件
export const cosmicHistory = {
  title: "宇宙历史时间线",
  icon: "⏳",
  color: "from-indigo-500 to-purple-500",
  description: "从宇宙大爆炸到遥远未来的完整历史",
  eras: [
    {
      name: "早期宇宙",
      timeRange: "138 亿年前 - 1 亿年前",
      color: "bg-red-900",
      events: [
        {
          time: "138 亿年前",
          name: "宇宙大爆炸",
          description: "时空、能量和物质的起源",
          details: `
普朗克时期（0-10^-43 秒）：
- 四种基本力统一
- 量子引力主导
- 温度 10^32 K

暴胀时期（10^-36 秒）：
- 宇宙指数级膨胀（10^26 倍）
- 量子涨落被拉伸为宏观密度扰动
- 为星系形成播种

夸克 - 胶子等离子体（10^-12 秒）：
- 温度 10^15 K
- 强子开始形成

核合成（3 分钟）：
- 温度 10^9 K
- 氢（75%）、氦（25%）、微量锂形成
- 原初元素丰度与观测精确吻合
          `,
          significance: "所有后续结构形成的基础"
        },
        {
          time: "38 万年后",
          name: "复合时期与宇宙微波背景",
          description: "宇宙变得透明，第一缕光释放",
          details: `
温度降至 3000K：
- 电子与原子核结合形成中性原子
- 光子退耦，自由传播
- 形成今日观测到的 CMB（2.725K）

CMB 的各向异性（10^-5 涨落）：
- 密度稍高的区域后来形成星系
- 功率谱揭示宇宙几何（平坦）
- 支持ΛCDM 模型

再电离时期（1.5 亿年）：
- 第一代恒星（星族 III）形成
- 紫外辐射电离中性氢
- 宇宙再次变得不透明（对紫外光）
          `,
          significance: "可观测宇宙最古老的'化石'"
        },
        {
          time: "2 亿 -10 亿年",
          name: "第一代恒星与星系",
          description: "宇宙黑暗时代结束",
          details: `
星族 III 恒星（100-1000 M☉）：
- 仅含氢和氦（无金属）
- 寿命短（几百万年）
- 以超新星爆发结束，播撒重元素

第一代星系：
- 矮星系（10^6-10^8 M☉）
- 恒星形成率极高
- 通过并合形成大星系

再电离完成（10 亿年）：
- 中性氢完全电离
- 星系际介质温度升至 10^4 K
- 宇宙变得透明
          `,
          significance: "重元素起源，为行星和生命准备原料"
        }
      ]
    },
    {
      name: "地球与生命",
      timeRange: "45 亿年前 - 现在",
      color: "bg-blue-900",
      events: [
        {
          time: "45 亿年前",
          name: "太阳系形成",
          description: "从分子云坍缩到行星系统",
          details: `
太阳星云坍缩：
- 触发：附近超新星冲击波
- 角动量守恒形成吸积盘
- 中心形成原恒星

行星吸积（1000 万年）：
- 微行星碰撞合并
- 类地行星（岩石）vs 气态巨行星
- 晚期重轰炸期（39 亿年前）

月球形成（大碰撞假说）：
- 火星大小天体（忒伊亚）撞击地球
- 碎片形成月球
- 地球自转轴倾斜 23.5°
          `,
          significance: "地球特殊性的起源"
        },
        {
          time: "38 亿年前",
          name: "生命起源",
          description: "从无机到有机，从化学到生物",
          details: `
前生物化学：
- 米勒 - 尤里实验：闪电合成氨基酸
- 深海热液喷口：化学梯度驱动
- RNA 世界假说：遗传与催化统一

第一个细胞：
- 脂质膜自组装
- 代谢网络建立
- LUCA（最后共同祖先）出现

光合作用（35 亿年前）：
- 蓝细菌释放氧气
- 大氧化事件（24 亿年前）
- 好氧生物崛起
          `,
          significance: "宇宙中已知唯一的生命实例"
        },
        {
          time: "5.4 亿年前",
          name: "寒武纪大爆发",
          description: "动物多样性的突然爆发",
          details: `
可能触发因素：
- 氧气浓度达到临界值
- Hox 基因调控网络进化
- 生态位空缺

主要门类出现：
- 节肢动物（三叶虫）
- 脊索动物（皮卡虫）
- 软体动物、腕足动物等

 Burgess Shale 化石库：
- 保存完好的软组织
- 揭示早期动物形态
- 许多已灭绝的"实验"分支
          `,
          significance: "现代动物界的基础"
        },
        {
          time: "6600 万年前",
          name: "白垩纪 - 古近纪灭绝",
          description: "恐龙灭绝，哺乳动物崛起",
          details: `
希克苏鲁伯撞击：
- 直径 10km 小行星
- 释放能量 10^23 焦耳（10 亿颗原子弹）
- 撞击冬天（数年）

火山活动（德干暗色岩）：
- 持续 50 万年的火山喷发
- 释放大量 CO₂和 SO₂
- 气候变化和酸化

哺乳动物辐射：
- 生态位空缺
- 体型增大（从鼠到象）
- 灵长类出现（6500 万年前）
          `,
          significance: "为人类祖先创造机会"
        }
      ]
    },
    {
      name: "人类文明",
      timeRange: "30 万年前 - 现在",
      color: "bg-green-900",
      events: [
        {
          time: "30 万年前",
          name: "智人出现",
          description: "解剖学意义上的现代人类",
          details: `
非洲起源：
- 摩洛哥 Jebel Irhoud 化石
- 脑容量 1350ml（现代人范围）
- 工具使用（莫斯特文化）

走出非洲（7 万年前）：
- 沿海岸线迁徙
- 取代其他古人类（尼安德特人、丹尼索瓦人）
- 基因交流（1-4% 尼人基因）

认知革命（7 万年前）：
- 语言能力爆发
- 虚构故事能力（宗教、国家）
- 大规模协作（>150 人）
          `,
          significance: "唯一发展出复杂文明的物种"
        },
        {
          time: "1 万年前",
          name: "农业革命",
          description: "从狩猎采集到定居农业",
          details: `
独立起源中心：
- 新月沃地（小麦、大麦）
- 中国（稻、粟）
- 中美洲（玉米）
- 安第斯（马铃薯）

社会影响：
- 人口增长（10-100 倍）
- 社会分层（农民、祭司、统治者）
- 文字发明（记账需求）

驯化物种：
- 狗（1.5 万年前）
- 牛、羊、猪（1 万年前）
- 马（6000 年前）
          `,
          significance: "文明的基础"
        },
        {
          time: "250 年前",
          name: "工业革命",
          description: "机械化、化石燃料、大规模生产",
          details: `
蒸汽机（1765 年瓦特改进）：
- 纺织工业机械化
- 铁路和蒸汽船
- 城市化加速

第二次工业革命（1870 年）：
- 电力、内燃机
- 化学工业
- 电报电话

影响：
- GDP 增长 10 倍
- 人口从 10 亿到 80 亿
- 气候变化开始
          `,
          significance: "人类成为地质力量（人类世）"
        },
        {
          time: "75 年前",
          name: "信息革命",
          description: "计算机、互联网、数字化",
          details: `
计算机发展：
- ENIAC（1946 年，18000 电子管）
- 晶体管（1947 年）
- 集成电路（1958 年）
- 个人电脑（1970 年代）

互联网：
- ARPANET（1969 年）
- WWW（1989 年蒂姆·伯纳斯 - 李）
- 移动互联网（2007 年 iPhone）

数字化社会：
- 大数据、AI
- 社交媒体
- 远程工作
          `,
          significance: "知识传播加速，全球化"
        }
      ]
    },
    {
      name: "近未来",
      timeRange: "2025-2100 年",
      color: "bg-cyan-900",
      events: [
        {
          time: "2030 年（预测）",
          name: "可控核聚变示范",
          description: "Q>10 的聚变反应堆验证",
          details: `
ITER（国际热核聚变实验堆）：
- 投资 200 亿欧元
- 等离子体体积 840m³
- 目标：500MW 输出（输入 50MW）

技术挑战：
- 高温超导磁体（20T）
- 抗中子材料（14MeV）
- 氚自持（增殖包层）

影响：
- 证明聚变可行性
- 2050 年商业部署
- 能源转型加速
          `,
          significance: "清洁能源的圣杯"
        },
        {
          time: "2035 年（预测）",
          name: "火星载人登陆",
          description: "人类首次踏上红色星球",
          details: `
任务架构：
- 轨道会合方案
- 霍曼转移（260 天）
- 表面停留 500 天

技术需求：
- 重型火箭（Starship, SLS）
- ISRU（原位资源利用：制氧、制水）
- 辐射防护

科学目标：
- 寻找生命迹象
- 地质调查
- 前哨站选址
          `,
          significance: "多行星物种第一步"
        },
        {
          time: "2050 年（预测）",
          name: "通用人工智能",
          description: "AI 达到或超越人类智能",
          details: `
技术路径：
- 深度学习扩展
- 神经符号 AI
- 类脑计算

能力指标：
- 通过图灵测试
- 跨领域学习
- 创造性问题解决

社会影响：
- 就业结构剧变
- 基本收入需求
- AI 权利讨论
          `,
          significance: "可能最后一次人类发明"
        },
        {
          time: "2080 年（预测）",
          name: "人类寿命大幅延长",
          description: "衰老作为可治疗疾病",
          details: `
衰老机制干预：
- 端粒酶激活
- 衰老细胞清除（Senolytics）
- 表观遗传重编程

再生医学：
- 干细胞疗法
- 3D 生物打印器官
- 纳米医疗机器人

社会影响：
- 寿命 120-150 岁
- 人口老龄化加剧
- 代际冲突
          `,
          significance: "重新定义人生阶段"
        }
      ]
    },
    {
      name: "远未来",
      timeRange: "2100-10 亿年",
      color: "bg-purple-900",
      events: [
        {
          time: "2200 年（推测）",
          name: "太阳系文明建立",
          description: "人类定居太阳系各处",
          details: `
殖民地：
- 火星（100 万人）
- 木卫二（海洋基地）
- 土卫六（甲烷湖）
- 小行星带（采矿）

人口：
- 总计 5 亿（90% 太空出生）
- 基因适应（低重力、辐射）
- 新物种分化开始

政治：
- 太阳系联邦
- 独立运动
- 地球 - 殖民地张力
          `,
          significance: "卡尔达肖夫 I 型文明"
        },
        {
          time: "1 万年后",
          name: "恒星际殖民",
          description: "人类抵达其他恒星系统",
          details: `
目标恒星：
- 比邻星 b（4.2 光年）
- TRAPPIST-1（40 光年，7 颗行星）
- Kepler-186f（500 光年）

航行方式：
- 世代飞船（0.1c, 数千年）
- 冬眠技术
- 意识上传（光速传输）

殖民地数量：
- 100+ 恒星系统
- 总人口 1000 亿
- 文化分化显著
          `,
          significance: "文明成为多恒星系统"
        },
        {
          time: "100 万年后",
          name: "银河系文明",
          description: "人类（或后裔）遍布银河",
          details: `
规模：
- 10 亿恒星系统
- 人口 10^16（百万亿）
- 戴森云建设

技术：
- 曲速航行（超光速）
- 行星工程
- 恒星操控

演化：
- 后人类物种（>1000 种）
- 生物 - 机械 - 能量混合
- 可能接触外星文明
          `,
          significance: "卡尔达肖夫 II 型文明"
        },
        {
          time: "10 亿年后",
          name: "星系并合",
          description: "银河系与仙女座星系碰撞",
          details: `
过程：
- 40 亿年后开始接触
- 50 亿年后完全并合
- 形成椭圆星系（Milkomeda）

恒星碰撞概率：
- 极低（恒星间距太大）
- 太阳系可能被抛出

生命影响：
- 超新星率增加
- 行星系统扰动
- 可能触发新恒星形成
          `,
          significance: "星系尺度的事件"
        }
      ]
    },
    {
      name: "宇宙终极命运",
      timeRange: "10 亿年 -10^100 年",
      color: "bg-gray-900",
      events: [
        {
          time: "50 亿年后",
          name: "太阳死亡",
          description: "红巨星阶段，地球命运",
          details: `
红巨星膨胀：
- 半径扩大 200 倍
- 吞没水星、金星
- 地球可能被吞没或轨道衰减

地球命运：
- 海洋蒸发（10 亿年后已发生）
- 大气逃逸
- 表面熔化

白矮星残骸：
- 质量 0.5 M☉（损失一半）
- 地球大小
- 冷却时间 100 亿年
          `,
          significance: "太阳系时代的终结"
        },
        {
          time: "10^14 年后",
          name: "恒星形成停止",
          description: "宇宙进入简并时代",
          details: `
气体耗尽：
- 恒星形成率降至 1%
- 最后一批红矮星形成
- 星系逐渐变暗

恒星残骸：
- 白矮星（90%）
- 中子星（9%）
- 黑洞（1%）

幸存行星：
- 围绕白矮星
- 潮汐锁定
- 生命可能通过地热存活
          `,
          significance: "恒星时代的终结"
        },
        {
          time: "10^40 年后",
          name: "质子衰变（可能）",
          description: "物质本身开始解体",
          details: `
大统一理论预测：
- 质子寿命>10^34 年
- 衰变为π介子和正电子
- 所有重子物质最终衰变

如果质子稳定：
- 通过量子隧穿，铁星形成
- 时间尺度 10^1500 年
- 最终坍缩为黑洞

辐射主导：
- 光子、轻子为主
- 温度接近绝对零度
          `,
          significance: "物质时代的终结"
        },
        {
          time: "10^100 年后",
          name: "黑洞时代终结",
          description: "最后的结构消失",
          details: `
霍金辐射：
- 黑洞缓慢蒸发
- 质量越大，寿命越长
- 超大质量黑洞最后蒸发

时间线：
- 恒星级黑洞：10^67 年
- 超大质量黑洞：10^100 年
- 蒸发最后瞬间：伽马射线暴

之后：
- 只有光子和轻子
- 宇宙进入热寂
          `,
          significance: "引力时代的终结"
        },
        {
          time: "10^10^120 年后",
          name: "热寂或大撕裂",
          description: "宇宙的终极命运",
          details: `
热寂情景（ΛCDM 模型）：
- 熵达到最大值
- 温度均匀（10^-30 K）
- 无自由能，无过程

大撕裂（如果暗能量增强）：
- 宇宙加速膨胀
- 撕裂星系、恒星、原子
- 时空结构破坏

真空衰变（如果希格斯势亚稳态）：
- 真空气泡以光速膨胀
- 物理定律改变
- 宇宙重置

循环宇宙（推测）：
- 大反弹
- 新的大爆炸
- 永恒循环
          `,
          significance: "一切的可能终结，或新开始"
        }
      ]
    }
  ]
};

// 导出辅助函数
export const getEraByName = (eraName) => {
  return cosmicHistory.eras.find(era => era.name === eraName);
};

export const getEventByTime = (time) => {
  for (const era of cosmicHistory.eras) {
    const event = era.events.find(e => e.time === time);
    if (event) return event;
  }
  return null;
};

export const searchHistory = (query) => {
  const results = [];
  const q = query.toLowerCase();
  
  for (const era of cosmicHistory.eras) {
    for (const event of era.events) {
      if (event.name.toLowerCase().includes(q) ||
          event.description.toLowerCase().includes(q) ||
          event.details.toLowerCase().includes(q)) {
        results.push({ ...event, era: era.name });
      }
    }
  }
  
  return results;
};

export const getTimelineStats = () => {
  return {
    totalEras: cosmicHistory.eras.length,
    totalEvents: cosmicHistory.eras.reduce((sum, era) => sum + era.events.length, 0),
    eras: cosmicHistory.eras.map(era => ({
      name: era.name,
      timeRange: era.timeRange,
      eventCount: era.events.length
    }))
  };
};

export default cosmicHistory;
