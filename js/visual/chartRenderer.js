// 可视化图表渲染器
import { visualizationSystem, visualizationStyles, chartConfigs } from './charts.js';

export class ChartRenderer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    
    this.svg = null;
    this.width = chartConfigs.common.width;
    this.height = chartConfigs.common.height;
    this.margin = chartConfigs.common.margin;
    this.colors = chartConfigs.common.colors;
    
    this.injectStyles();
  }
  
  // 注入样式
  injectStyles() {
    if (!document.getElementById('visualization-styles')) {
      const style = document.createElement('style');
      style.id = 'visualization-styles';
      style.textContent = visualizationStyles;
      document.head.appendChild(style);
    }
  }
  
  // 创建 SVG 画布
  createSVG(width, height) {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', width || this.width);
    svg.setAttribute('height', height || this.height);
    svg.setAttribute('viewBox', `0 0 ${width || this.width} ${height || this.height}`);
    svg.classList.add('visualization-element');
    
    this.container.innerHTML = '';
    this.container.appendChild(svg);
    this.svg = svg;
    return svg;
  }
  
  // 创建元素
  createElement(tag, attrs = {}) {
    const svgNS = "http://www.w3.org/2000/svg";
    const element = document.createElementNS(svgNS, tag);
    
    Object.entries(attrs).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    
    return element;
  }
  
  // 渲染树状图
  renderTree(data) {
    const svg = this.createSVG();
    const g = this.createElement('g', {
      transform: `translate(${this.margin.left},${this.margin.top})`
    });
    svg.appendChild(g);
    
    const availableWidth = this.width - this.margin.left - this.margin.right;
    const availableHeight = this.height - this.margin.top - this.margin.bottom;
    
    // 简单的树状布局
    const nodeWidth = availableWidth / 4;
    const nodeHeight = availableHeight / 5;
    
    let y = 0;
    const drawNode = (node, x, parentX, parentY, level) => {
      const currentY = y;
      y += nodeHeight;
      
      // 绘制节点
      const circle = this.createElement('circle', {
        cx: x,
        cy: currentY,
        r: chartConfigs.tree.nodeRadius,
        class: 'tree-node'
      });
      g.appendChild(circle);
      
      // 绘制标签
      const label = this.createElement('text', {
        x: x + 10,
        y: currentY,
        class: 'tree-label'
      });
      label.textContent = node.label;
      g.appendChild(label);
      
      // 绘制连线
      if (parentX !== null) {
        const line = this.createElement('line', {
          x1: parentX,
          y1: parentY,
          x2: x,
          y2: currentY,
          class: 'tree-link',
          stroke: '#06b6d4',
          'stroke-width': chartConfigs.tree.linkWidth
        });
        g.insertBefore(line, circle);
      }
      
      // 递归绘制子节点
      if (node.children) {
        node.children.forEach(child => {
          drawNode(child, x + nodeWidth, x, currentY, level + 1);
        });
      }
    };
    
    drawNode(data, 50, null, null, 0);
    
    return svg;
  }
  
  // 渲染雷达图
  renderRadarChart(theories, dimensions) {
    const svg = this.createSVG();
    const centerX = this.width / 2;
    const centerY = this.height / 2;
    const radius = Math.min(centerX, centerY) - 60;
    
    const g = this.createElement('g');
    svg.appendChild(g);
    
    // 绘制网格
    const levels = chartConfigs.radar.levels;
    for (let i = 1; i <= levels; i++) {
      const r = (radius / levels) * i;
      const polygon = this.createElement('polygon', {
        class: 'radar-grid',
        fill: 'none'
      });
      
      const points = dimensions.map((_, index) => {
        const angle = (Math.PI * 2 * index) / dimensions.length - Math.PI / 2;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        return `${x},${y}`;
      }).join(' ');
      
      polygon.setAttribute('points', points);
      g.appendChild(polygon);
    }
    
    // 绘制轴线和标签
    dimensions.forEach((dim, index) => {
      const angle = (Math.PI * 2 * index) / dimensions.length - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      // 轴线
      const line = this.createElement('line', {
        x1: centerX,
        y1: centerY,
        x2: x,
        y2: y,
        class: 'radar-axis'
      });
      g.appendChild(line);
      
      // 标签
      const labelX = centerX + (radius + 30) * Math.cos(angle);
      const labelY = centerY + (radius + 30) * Math.sin(angle);
      const label = this.createElement('text', {
        x: labelX,
        y: labelY,
        'text-anchor': 'middle',
        'dominant-baseline': 'middle',
        class: 'tree-label',
        fill: '#9ca3af',
        'font-size': '11px'
      });
      label.textContent = dim;
      g.appendChild(label);
    });
    
    // 绘制数据区域
    theories.forEach(theory => {
      const points = theory.scores.map((score, index) => {
        const angle = (Math.PI * 2 * index) / dimensions.length - Math.PI / 2;
        const r = (radius * score) / 100;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        return `${x},${y}`;
      }).join(' ');
      
      const polygon = this.createElement('polygon', {
        points,
        class: 'radar-area',
        fill: theory.color,
        stroke: theory.color
      });
      g.appendChild(polygon);
    });
    
    // 添加图例
    const legendG = this.createElement('g', {
      transform: `translate(20, 20)`
    });
    
    theories.forEach((theory, index) => {
      const y = index * 25;
      
      // 颜色块
      const rect = this.createElement('rect', {
        x: 0,
        y: y - 10,
        width: 15,
        height: 15,
        fill: theory.color,
        rx: 3
      });
      legendG.appendChild(rect);
      
      // 标签
      const label = this.createElement('text', {
        x: 20,
        y: y,
        class: 'tree-label',
        'font-size': '12px'
      });
      label.textContent = theory.name;
      legendG.appendChild(label);
    });
    
    svg.appendChild(legendG);
    
    return svg;
  }
  
  // 渲染饼图
  renderPieChart(data) {
    const svg = this.createSVG();
    const centerX = this.width / 2 - 50;
    const centerY = this.height / 2;
    const radius = Math.min(centerX, centerY) - 40;
    
    const g = this.createElement('g');
    svg.appendChild(g);
    
    let startAngle = -Math.PI / 2;
    const total = data.reduce((sum, item) => sum + item.value, 0);
    
    data.forEach(item => {
      const sliceAngle = (item.value / total) * Math.PI * 2;
      const endAngle = startAngle + sliceAngle;
      
      // 计算路径
      const x1 = centerX + radius * Math.cos(startAngle);
      const y1 = centerY + radius * Math.sin(startAngle);
      const x2 = centerX + radius * Math.cos(endAngle);
      const y2 = centerY + radius * Math.sin(endAngle);
      
      const largeArc = sliceAngle > Math.PI ? 1 : 0;
      const pathData = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
      
      const path = this.createElement('path', {
        d: pathData,
        class: 'pie-segment',
        fill: item.color
      });
      
      // 添加标题
      const midAngle = startAngle + sliceAngle / 2;
      const labelRadius = radius * 0.7;
      const labelX = centerX + labelRadius * Math.cos(midAngle);
      const labelY = centerY + labelRadius * Math.sin(midAngle);
      
      const text = this.createElement('text', {
        x: labelX,
        y: labelY,
        'text-anchor': 'middle',
        'dominant-baseline': 'middle',
        class: 'tree-label',
        fill: '#ffffff',
        'font-size': '14px',
        'font-weight': 'bold'
      });
      text.textContent = `${item.value}%`;
      
      g.appendChild(path);
      g.appendChild(text);
      
      startAngle = endAngle;
    });
    
    // 图例
    const legendG = this.createElement('g', {
      transform: `translate(${this.width - 200}, 50)`
    });
    
    data.forEach((item, index) => {
      const y = index * 30;
      
      const rect = this.createElement('rect', {
        x: 0,
        y: y,
        width: 20,
        height: 20,
        fill: item.color,
        rx: 4
      });
      legendG.appendChild(rect);
      
      const label = this.createElement('text', {
        x: 30,
        y: y + 15,
        class: 'tree-label',
        'font-size': '12px',
        fill: '#e5e7eb'
      });
      label.textContent = `${item.label}: ${item.value}%`;
      legendG.appendChild(label);
    });
    
    svg.appendChild(legendG);
    
    // 添加数据来源
    const source = this.createElement('text', {
      x: this.width / 2,
      y: this.height - 20,
      'text-anchor': 'middle',
      class: 'tree-label',
      'font-size': '10px',
      fill: '#6b7280'
    });
    source.textContent = `数据来源：${data.source || 'Planck 卫星观测'}`;
    svg.appendChild(source);
    
    return svg;
  }
  
  // 渲染时间线
  renderTimeline(events) {
    const svg = this.createSVG(1000, 400);
    const padding = 80;
    const timelineY = 200;
    const availableWidth = this.width - padding * 2;
    
    const g = this.createElement('g');
    svg.appendChild(g);
    
    // 时间线基线
    const line = this.createElement('line', {
      x1: padding,
      y1: timelineY,
      x2: this.width - padding,
      y2: timelineY,
      class: 'timeline-line'
    });
    g.appendChild(line);
    
    // 排序事件
    const sortedEvents = [...events].sort((a, b) => a.year - b.year);
    const minYear = sortedEvents[0].year;
    const maxYear = sortedEvents[sortedEvents.length - 1].year;
    
    // 绘制事件点
    sortedEvents.forEach(event => {
      const x = padding + ((event.year - minYear) / (maxYear - minYear)) * availableWidth;
      const significance = event.significance || 50;
      const r = 5 + (significance / 100) * 5;
      
      // 事件点
      const circle = this.createElement('circle', {
        cx: x,
        cy: timelineY,
        r: r,
        class: 'timeline-event',
        fill: '#06b6d4',
        stroke: '#3b82f6',
        'stroke-width': 2
      });
      g.appendChild(circle);
      
      // 年份标签
      const yearLabel = this.createElement('text', {
        x: x,
        y: timelineY + 40,
        'text-anchor': 'middle',
        class: 'tree-label',
        'font-size': '11px',
        fill: '#9ca3af'
      });
      yearLabel.textContent = event.year;
      g.appendChild(yearLabel);
      
      // 事件名称
      const eventLabel = this.createElement('text', {
        x: x,
        y: timelineY - r - 10,
        'text-anchor': 'middle',
        class: 'tree-label',
        'font-size': '10px',
        fill: '#e5e7eb'
      });
      eventLabel.textContent = event.event;
      g.appendChild(eventLabel);
    });
    
    return svg;
  }
  
  // 渲染网络图
  renderNetwork(nodes, links) {
    const svg = this.createSVG();
    const g = this.createElement('g');
    svg.appendChild(g);
    
    const centerX = this.width / 2;
    const centerY = this.height / 2;
    const radius = Math.min(centerX, centerY) - 60;
    
    // 圆形布局
    nodes.forEach((node, index) => {
      const angle = (2 * Math.PI * index) / nodes.length - Math.PI / 2;
      node.x = centerX + radius * Math.cos(angle);
      node.y = centerY + radius * Math.sin(angle);
    });
    
    // 绘制连线
    links.forEach(link => {
      const source = nodes.find(n => n.id === link.source);
      const target = nodes.find(n => n.id === link.target);
      
      if (source && target) {
        const line = this.createElement('line', {
          x1: source.x,
          y1: source.y,
          x2: target.x,
          y2: target.y,
          class: 'network-link'
        });
        g.appendChild(line);
      }
    });
    
    // 绘制节点
    nodes.forEach(node => {
      const circle = this.createElement('circle', {
        cx: node.x,
        cy: node.y,
        r: 20,
        class: `network-node ${node.type}`
      });
      g.appendChild(circle);
      
      const label = this.createElement('text', {
        x: node.x,
        y: node.y,
        'text-anchor': 'middle',
        'dominant-baseline': 'middle',
        class: 'network-label',
        fill: '#ffffff',
        'font-size': '9px',
        'font-weight': 'bold'
      });
      label.textContent = node.label.split(' ')[0];
      g.appendChild(label);
    });
    
    return svg;
  }
  
  // 根据类型渲染图表
  render(visualization) {
    switch(visualization.type) {
      case 'hierarchical':
        return this.renderTree(visualization.data);
      case 'radar':
        return this.renderRadarChart(visualization.theories, visualization.dimensions);
      case 'pie':
        return this.renderPieChart(visualization.data);
      case 'timeline':
        return this.renderTimeline(visualization.events);
      case 'network':
        return this.renderNetwork(visualization.nodes, visualization.links);
      default:
        console.warn('未知的可视化类型:', visualization.type);
        return null;
    }
  }
}

// 导出单例工厂
export function createChartRenderer(containerId) {
  return new ChartRenderer(containerId);
}
