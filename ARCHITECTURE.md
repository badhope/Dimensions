# 🌌 维度探索项目 - 模块化架构文档

## 📐 项目架构概述

本项目采用**模块化架构设计**，将原有单文件 1400+ 行代码重构为高内聚、低耦合的模块系统。

### 核心设计理念
- **分离关注点**: 数据、视觉渲染、UI 交互完全分离
- **模块化**: 每个功能模块独立可测试
- **可扩展性**: 新增功能无需修改核心代码
- **性能优化**: 按需加载，减少初始加载时间

---

## 📁 目录结构

```
Dimensions/
├── css/                          # 样式文件目录
│   ├── variables.css            # CSS 变量定义（颜色、字体）
│   ├── animations.css           # 动画定义（维度可视化动画）
│   ├── components.css           # 组件样式（按钮、模态框、导航）
│   └── main.css                 # 主样式文件（导入所有 CSS）
│
├── js/                          # JavaScript 模块目录
│   ├── app.js                   # 应用入口文件（主控制器）
│   │
│   ├── data/                    # 数据层模块
│   │   ├── dimensions.js        # 维度数据定义（0-11 维）
│   │   ├── theories.js          # 理论数据定义（弦理论、M 理论等）
│   │   └── quiz.js              # 测验数据定义（问答题库）
│   │
│   ├── visual/                  # 可视化渲染模块
│   │   ├── background.js        # 背景动画（流星、星星效果）
│   │   └── dimensionRenderer.js # 维度卡片渲染器
│   │
│   ├── ui/                      # UI 交互模块
│   │   ├── navigation.js        # 导航管理（滚动、维度导航）
│   │   └── interactions.js      # 交互管理（测验、快速导航）
│   │
│   └── modules/                 # 功能扩展模块
│       ├── utils.js             # 工具函数（防抖、节流、存储）
│       └── games.js             # 互动游戏（维度模拟器、匹配游戏）
│
├── assets/                      # 资源文件（图片、音频等）
│
├── index.html                   # 原始单文件版本（向后兼容）
├── index_new.html               # 模块化新版本（推荐使用）
├── package.json                 # 项目配置文件
├── ARCHITECTURE.md              # 架构文档（本文件）
└── README.md                    # 项目说明文档
```

---

## 🔧 模块详细说明

### 1. 数据层 (`js/data/`)

#### `dimensions.js`
- **功能**: 定义 0-11 维的完整数据
- **导出**: `dimensions` 数组
- **数据结构**:
  ```javascript
  {
    dim: 0,                    // 维度编号
    name: "零维",              // 维度名称
    subtitle: "点的世界",       // 副标题
    color: "stellar",          // 主题色
    emoji: "⚪",               // 表情符号
    description: "...",        // 科学描述
    metaphor: "...",           // 形象比喻
    example: "...",            // 现实实例
    funFact: "...",            // 趣味事实
    analysis: "..."            // 深度分析
  }
  ```

#### `theories.js`
- **功能**: 定义高维物理理论数据
- **导出**: `theoryData` 对象
- **支持理论**: 弦理论、M 理论、卡拉比 - 丘流形、全息原理、多重宇宙、虫洞

#### `quiz.js`
- **功能**: 定义测验题库
- **导出**: `quizQuestions` 数组
- **题型**: 单选题（含解释）

---

### 2. 可视化层 (`js/visual/`)

#### `background.js`
- **类**: `Meteor`, `Star`, `BackgroundAnimation`
- **功能**: 
  - 流星雨效果（Canvas 渲染）
  - 星星闪烁效果
  - 自适应屏幕大小
  - 支持减少动画偏好

#### `dimensionRenderer.js`
- **类**: `DimensionVisualizer`
- **功能**:
  - 生成维度可视化 HTML（CSS 动画）
  - 渲染维度卡片
  - 支持视觉模式切换（默认/增强）

---

### 3. UI 交互层 (`js/ui/`)

#### `navigation.js`
- **类**: `NavigationManager`, `ScrollManager`, `ModalManager`
- **功能**:
  - 维度导航生成与高亮
  - 页面滚动管理（进度条、元素显示动画）
  - 模态框管理（打开/关闭）

#### `interactions.js`
- **类**: `QuizManager`, `QuickNavManager`, `MobileMenuManager`
- **功能**:
  - 测验流程控制（答题、计分、反馈）
  - 快速导航模态框
  - 移动端菜单管理

---

### 4. 功能扩展模块 (`js/modules/`)

#### `utils.js`
- **功能**: 通用工具函数
- **导出**:
  - `debounce()`: 防抖函数
  - `throttle()`: 节流函数
  - `prefersReducedMotion()`: 检查动画偏好
  - `storage`: 本地存储辅助
  - `colorUtils`: 颜色工具

#### `games.js`
- **类**: `DimensionSimulator`, `DimensionGame`
- **功能**:
  - **维度模拟器**: 实时切换维度可视化（0-11 维）
  - **维度匹配游戏**: 限时匹配维度与名称的记忆游戏
    - 关卡系统（难度递增）
    - 计时器与计分系统
    - 配对反馈动画

---

### 5. 应用入口 (`js/app.js`)

#### `DimensionExplorerApp` 类
- **功能**: 应用主控制器
- **初始化流程**:
  1. 启动背景动画
  2. 渲染维度卡片
  3. 生成导航系统
  4. 初始化滚动管理
  5. 设置模态框与事件
  6. 绑定所有事件监听器

- **全局暴露**:
  - `window.dimensionApp`: 应用实例
  - `window.dimensionUI`: UI 接口（用于 HTML 内联事件）

---

## 🎯 核心机制

### 模块通信模式

```javascript
// 1. 通过全局对象暴露 API
window.dimensionApp = {
  scrollToDim,
  selectAnswer,
  nextQuestion,
  closeQuiz,
  closeQuickNav
}

// 2. 通过事件监听器解耦
element.addEventListener('click', () => {
  this.module.doSomething()
})

// 3. 数据驱动渲染
visualizer.renderDimensionCards('container', dimensions)
```

### 生命周期管理

```
DOMContentLoaded
    ↓
DimensionExplorerApp.constructor()
    ↓
DimensionExplorerApp.init()
    ↓
1. background.start()
2. visualizer.renderDimensionCards()
3. navManager.generateDimNav()
4. scrollManager.init()
5. setupModals()
6. bindEvents()
7. triggerRevealAnimations()
```

---

## 🚀 扩展指南

### 添加新的维度
1. 在 `js/data/dimensions.js` 中添加数据
2. 在 `js/visual/dimensionRenderer.js` 中添加可视化效果（如需要）
3. 自动渲染，无需修改其他代码

### 添加新的理论
1. 在 `js/data/theories.js` 中添加理论数据
2. 在 HTML 中添加理论卡片（`data-theory` 属性）
3. 自动支持点击打开模态框

### 添加新的互动游戏
1. 在 `js/modules/games.js` 中创建游戏类
2. 在 `app.js` 的构造函数中实例化
3. 在 HTML 中添加触发按钮
4. 在 `bindEvents()` 中绑定事件

---

## 📊 性能优化

### 已实现
- ✅ 按需加载（ES6 模块）
- ✅ 事件委托（减少事件监听器数量）
- ✅ 滚动节流（requestAnimationFrame）
- ✅ Canvas 动画优化（对象池模式）
- ✅ CSS 硬件加速（transform、opacity）

### 待实现
- ⏳ 图片懒加载
- ⏳ Service Worker 缓存
- ⏳ 代码分割（按需加载游戏模块）

---

## 🧪 测试建议

### 单元测试
```javascript
// 示例：测试维度数据完整性
import { dimensions } from './data/dimensions.js'

describe('Dimensions Data', () => {
  it('should have 12 dimensions (0-11)', () => {
    expect(dimensions.length).toBe(12)
  })
  
  it('should have required fields', () => {
    dimensions.forEach(dim => {
      expect(dim).toHaveProperty('dim')
      expect(dim).toHaveProperty('name')
      expect(dim).toHaveProperty('description')
    })
  })
})
```

### 集成测试
- 测试背景动画启动
- 测试维度卡片渲染
- 测试测验流程
- 测试导航功能

---

## 📝 开发规范

### 代码风格
- 使用 ES6+ 语法
- 类名使用 PascalCase
- 函数名使用 camelCase
- 常量使用 UPPER_SNAKE_CASE

### 提交规范
```
feat: 添加新的维度可视化效果
fix: 修复移动端导航显示问题
docs: 更新架构文档
refactor: 重构测验模块
style: 优化按钮样式
test: 添加单元测试
```

---

## 🔮 未来规划

### v2.1.0
- [ ] 添加音效系统（背景音效、交互反馈音）
- [ ] 3D 维度可视化（WebGL/Three.js）
- [ ] 多语言支持（i18n）

### v2.2.0
- [ ] 用户进度追踪（LocalStorage/IndexedDB）
- [ ] 成就系统（完成度徽章）
- [ ] 社交分享功能

### v3.0.0
- [ ] VR/AR 支持（WebXR）
- [ ] 多人协作探索模式
- [ ] AI 助手引导（基于大语言模型）

---

## 📚 学习资源

### 物理学参考
- 弦理论入门：Brian Greene《优雅的宇宙》
- M 理论：Edward Witten 论文
- 多维宇宙：Lisa Randall《弯曲的旅行》

### 技术参考
- MDN: ES6 Modules
- Canvas API 文档
- CSS Animations 指南

---

## 🤝 贡献指南

欢迎提交 Issue 和 PR！请在提交前确保：
1. 代码符合 ESLint 规范
2. 添加必要的注释
3. 更新相关文档
4. 测试所有受影响的功能

---

**最后更新**: 2026-03-06  
**维护者**: Dimension Explorer Team
