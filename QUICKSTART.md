# 🚀 维度探索项目 - 快速启动指南

## 📋 目录

1. [项目简介](#项目简介)
2. [快速开始](#快速开始)
3. [项目结构](#项目结构)
4. [开发指南](#开发指南)
5. [新功能介绍](#新功能介绍)
6. [常见问题](#常见问题)

---

## 🌌 项目简介

**维度探索**是一个交互式的高维宇宙科普系统，带你从 0 维奇点穿越到 11 维 M 理论之巅。

### 核心特性
- ✅ **模块化架构**: 代码清晰易维护
- ✅ **可视化展示**: 每个维度都有独特的动画效果
- ✅ **互动体验**: 测验、游戏、模拟器
- ✅ **响应式设计**: 支持桌面端和移动端
- ✅ **性能优化**: 流畅的 60fps 动画

---

## ⚡ 快速开始

### 方法 1: 直接打开（推荐新手）

1. 双击 `index.html` 文件
2. 在浏览器中查看效果

### 方法 2: 使用本地服务器（推荐开发者）

#### 前提条件
- Node.js >= 14.0.0
- npm >= 6.0.0

#### 安装步骤

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 访问项目
# 浏览器打开：http://localhost:8080
```

#### 可用命令

```bash
# 启动开发服务器（端口 8080）
npm run dev

# 或使用 live-server（自动刷新）
npm run serve

# 构建项目（无需构建步骤）
npm run build
```

---

## 📁 项目结构

```
Dimensions/
├── css/                    # 样式文件
│   ├── variables.css      # CSS 变量
│   ├── animations.css     # 动画定义
│   ├── components.css     # 组件样式
│   └── main.css          # 主样式文件
│
├── js/                    # JavaScript 模块
│   ├── app.js            # 应用入口
│   ├── data/             # 数据层
│   │   ├── dimensions.js
│   │   ├── theories.js
│   │   └── quiz.js
│   ├── visual/           # 可视化渲染
│   │   ├── background.js
│   │   └── dimensionRenderer.js
│   ├── ui/               # UI 交互
│   │   ├── navigation.js
│   │   └── interactions.js
│   └── modules/          # 扩展功能
│       ├── utils.js
│       └── games.js
│
├── index.html            # 主页面
├── package.json          # 项目配置
├── ARCHITECTURE.md       # 架构文档
└── README.md             # 项目说明
```

---

## 🛠️ 开发指南

### 添加新的维度数据

编辑 `js/data/dimensions.js`:

```javascript
{
  dim: 12,  // 新维度编号
  name: "超维",
  subtitle: "超越想象",
  color: "matrix",
  emoji: "🌀",
  description: "描述...",
  metaphor: "比喻...",
  example: "实例...",
  funFact: "趣味事实...",
  analysis: "深度分析..."
}
```

### 添加新的理论

编辑 `js/data/theories.js`:

```javascript
newTheory: {
  title: "新理论名称",
  content: `<p>理论内容...</p>`
}
```

然后在 HTML 中添加对应的卡片：

```html
<div class="theory-card" data-theory="newTheory">
  <h3>理论名称</h3>
</div>
```

### 自定义样式

编辑 `css/variables.css` 修改主题色：

```css
:root {
  --stellar: #00d4ff;    /* 主色调 */
  --aurora: #7b2dff;     /* 辅助色 */
  --nova: #ff6b35;       /* 强调色 */
}
```

---

## 🎮 新功能介绍

### v2.0 新增功能

#### 1. 维度模拟器
- **位置**: Hero 区域新增按钮
- **功能**: 实时切换显示 0-11 维的可视化效果
- **操作**: 拖动滑块，查看不同维度的展示

#### 2. 互动游戏 - 维度匹配挑战
- **位置**: Hero 区域新增按钮
- **玩法**: 
  - 匹配维度编号与名称
  - 限时 60 秒
  - 关卡系统（难度递增）
  - 计分排行榜

#### 3. 模块化架构
- **优势**:
  - 代码更易维护
  - 功能易扩展
  - 性能更优化

#### 4. 增强的交互体验
- 平滑滚动动画
- 元素渐入效果
- 视觉模式切换
- 快速导航系统

---

## ❓ 常见问题

### Q1: 打开页面显示空白？
**A**: 请检查：
1. 浏览器是否支持 ES6 模块（Chrome 61+, Firefox 60+, Safari 11+）
2. 是否使用本地服务器（推荐）
3. 查看浏览器控制台错误信息

### Q2: 动画效果卡顿？
**A**: 尝试：
1. 关闭其他占用资源的程序
2. 降低浏览器硬件加速设置
3. 页面会自动检测并减少动画（如果系统性能较低）

### Q3: 移动端显示不正常？
**A**: 
1. 确保使用最新版本的 Chrome 或 Safari
2. 清除浏览器缓存
3. 尝试横屏模式获得更好体验

### Q4: 如何贡献代码？
**A**: 
1. Fork 项目
2. 创建功能分支
3. 提交 PR
4. 等待审核

### Q5: 可以离线使用吗？
**A**: 
- 可以！但需要：
  - 首次加载后缓存资源
  - 或使用本地 CDN 镜像
  - TailwindCSS 需要网络连接

---

## 📚 学习资源

### 物理学背景
- [弦理论入门](https://www.superstringtheory.com/)
- [M 理论简介](https://home.cern/science/physics/string-theory)
- [多维宇宙科普](https://www.nasa.gov/multiverse)

### 技术文档
- [MDN: ES6 Modules](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules)
- [Canvas API](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)
- [CSS Animations](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations)

---

## 🔧 故障排除

### 控制台错误："Uncaught SyntaxError: Cannot use import statement outside a module"

**解决方案**:
1. 确保 `<script>` 标签包含 `type="module"`
2. 使用本地服务器（不是直接打开文件）
3. 检查 `package.json` 中 `"type": "module"`

### 样式不加载

**解决方案**:
1. 检查 CSS 文件路径是否正确
2. 清除浏览器缓存（Ctrl+Shift+R）
3. 检查网络请求（F12 -> Network）

### 背景动画不显示

**解决方案**:
1. 检查浏览器是否支持 Canvas
2. 查看控制台是否有 JavaScript 错误
3. 系统可能开启了"减少动画"偏好

---

## 📞 联系方式

- **邮箱**: x18825407105@outlook.com
- **GitHub**: [Dimensions](https://github.com/badhope/Dimensions)
- **Issue 反馈**: [提交问题](https://github.com/badhope/Dimensions/issues)

---

## 🎯 下一步

1. ✅ 完成快速启动
2. 📖 阅读 [ARCHITECTURE.md](./ARCHITECTURE.md) 了解架构
3. 🎮 体验所有互动功能
4. 🔧 尝试修改维度数据
5. 🚀 添加自己的创意功能

---

**祝你探索愉快！** 🌌✨

*最后更新*: 2026-03-06  
*版本*: 2.0.0
