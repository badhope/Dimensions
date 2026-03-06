// 粒子效果和维度跃迁动画
export class ParticleSystem {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.animationId = null;
    
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }
  
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  createParticle(x, y, type = 'default') {
    const colors = {
      default: ['#6366f1', '#8b5cf6', '#a855f7', '#d946ef'],
      dimension: ['#3b82f6', '#1d4ed8', '#60a5fa', '#93c5fd'],
      celebration: ['#fbbf24', '#f59e0b', '#ef4444', '#ec4899'],
      warp: ['#06b6d4', '#0891b2', '#67e8f9', '#cffafe']
    };
    
    return {
      x,
      y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      radius: Math.random() * 3 + 1,
      color: colors[type][Math.floor(Math.random() * colors[type].length)],
      alpha: 1,
      decay: Math.random() * 0.02 + 0.01,
      gravity: 0.05
    };
  }
  
  emit(x, y, count = 20, type = 'default') {
    for (let i = 0; i < count; i++) {
      this.particles.push(this.createParticle(x, y, type));
    }
  }
  
  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.alpha -= p.decay;
      
      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
      }
    }
  }
  
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach(p => {
      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.fill();
      this.ctx.restore();
    });
  }
  
  animate() {
    this.update();
    this.draw();
    this.animationId = requestAnimationFrame(() => this.animate());
  }
  
  start() {
    if (!this.animationId) {
      this.animate();
    }
  }
  
  stop() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }
  
  clear() {
    this.particles = [];
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

// 维度跃迁效果
export class DimensionWarpEffect {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    
    this.rings = [];
    this.active = false;
  }
  
  createRing(dimension) {
    const ring = document.createElement('div');
    ring.className = 'absolute rounded-full border-2 border-cyan-400 opacity-75';
    ring.style.left = '50%';
    ring.style.top = '50%';
    ring.style.transform = 'translate(-50%, -50%) scale(0)';
    ring.style.width = '0px';
    ring.style.height = '0px';
    ring.style.pointerEvents = 'none';
    
    this.container.appendChild(ring);
    
    const targetSize = (dimension + 1) * 100;
    const duration = 1000 + dimension * 100;
    
    ring.animate([
      { 
        width: '0px', 
        height: '0px', 
        opacity: 0.75,
        transform: 'translate(-50%, -50%) scale(0)',
        borderColor: '#22d3ee'
      },
      { 
        width: `${targetSize}px`, 
        height: `${targetSize}px`, 
        opacity: 0,
        transform: 'translate(-50%, -50%) scale(1)',
        borderColor: '#a855f7'
      }
    ], {
      duration,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    });
    
    setTimeout(() => ring.remove(), duration);
  }
  
  activate(dimension = 3) {
    if (this.active) return;
    this.active = true;
    
    // 创建多个环
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.createRing(dimension);
      }, i * 200);
    }
    
    // 添加背景脉冲
    this.container.style.animation = 'warpPulse 1s ease-out';
    
    setTimeout(() => {
      this.container.style.animation = '';
      this.active = false;
    }, 2000);
  }
}

// 交互反馈效果
export class InteractionFeedback {
  static click(element, type = 'default') {
    const rect = element.getBoundingClientRect();
    const ripple = document.createElement('div');
    
    const colors = {
      default: 'bg-white',
      success: 'bg-green-400',
      error: 'bg-red-400',
      info: 'bg-blue-400'
    };
    
    ripple.className = `${colors[type]} absolute rounded-full pointer-events-none animate-ping`;
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.transform = 'translate(-50%, -50%)';
    
    element.style.position = 'relative';
    element.style.overflow = 'visible';
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  }
  
  static hover(element, intensity = 'medium') {
    const scales = {
      light: 1.05,
      medium: 1.1,
      strong: 1.15
    };
    
    element.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
    element.style.transform = `scale(${scales[intensity]})`;
    element.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
    element.style.zIndex = '50';
  }
  
  static hoverEnd(element) {
    element.style.transform = 'scale(1)';
    element.style.boxShadow = '';
    element.style.zIndex = '';
  }
  
  static success(element) {
    element.style.animation = 'successPulse 0.5s ease';
    setTimeout(() => {
      element.style.animation = '';
    }, 500);
  }
  
  static error(element) {
    element.style.animation = 'shake 0.5s ease';
    setTimeout(() => {
      element.style.animation = '';
    }, 500);
  }
  
  static loading(element, isLoading = true) {
    if (isLoading) {
      element.style.opacity = '0.6';
      element.style.pointerEvents = 'none';
      element.style.cursor = 'wait';
    } else {
      element.style.opacity = '1';
      element.style.pointerEvents = 'auto';
      element.style.cursor = 'pointer';
    }
  }
}

// 拖拽排序系统
export class DragDropSort {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    
    this.draggedItem = null;
    this.placeholder = null;
    this.onReorder = options.onReorder || (() => {});
    
    this.init();
  }
  
  init() {
    this.container.style.cursor = 'grab';
    
    const items = this.container.children;
    for (let item of items) {
      this.setupItem(item);
    }
  }
  
  setupItem(item) {
    item.setAttribute('draggable', 'true');
    item.style.transition = 'transform 0.2s, opacity 0.2s';
    
    item.addEventListener('dragstart', (e) => this.handleDragStart(e, item));
    item.addEventListener('dragend', (e) => this.handleDragEnd(e, item));
    item.addEventListener('dragover', (e) => this.handleDragOver(e, item));
    item.addEventListener('drop', (e) => this.handleDrop(e, item));
    item.addEventListener('dragenter', (e) => this.handleDragEnter(e, item));
    item.addEventListener('dragleave', (e) => this.handleDragLeave(e, item));
  }
  
  handleDragStart(e, item) {
    this.draggedItem = item;
    item.style.opacity = '0.5';
    
    // 创建占位符
    this.placeholder = document.createElement('div');
    this.placeholder.className = 'bg-gray-800/50 rounded-lg border-2 border-dashed border-cyan-400';
    this.placeholder.style.height = `${item.offsetHeight}px`;
    this.placeholder.style.margin = item.style.margin;
    
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', item.id);
  }
  
  handleDragEnd(e, item) {
    item.style.opacity = '1';
    this.draggedItem = null;
    
    if (this.placeholder && this.placeholder.parentNode) {
      this.placeholder.parentNode.removeChild(this.placeholder);
    }
    this.placeholder = null;
  }
  
  handleDragOver(e, item) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }
  
  handleDragEnter(e, item) {
    if (item !== this.draggedItem && this.placeholder) {
      const rect = item.getBoundingClientRect();
      const midpoint = rect.top + rect.height / 2;
      
      if (e.clientY < midpoint) {
        item.parentNode.insertBefore(this.placeholder, item);
      } else {
        item.parentNode.insertBefore(this.placeholder, item.nextSibling);
      }
    }
  }
  
  handleDragLeave(e, item) {
    // 可选：添加离开时的效果
  }
  
  handleDrop(e, item) {
    e.preventDefault();
    
    if (this.draggedItem && item !== this.draggedItem) {
      const rect = item.getBoundingClientRect();
      const midpoint = rect.top + rect.height / 2;
      
      if (e.clientY < midpoint) {
        item.parentNode.insertBefore(this.draggedItem, item);
      } else {
        item.parentNode.insertBefore(this.draggedItem, item.nextSibling);
      }
      
      // 触发重排序回调
      this.onReorder(this.getOrderedItems());
    }
  }
  
  getOrderedItems() {
    return Array.from(this.container.children).map(item => item.id);
  }
  
  destroy() {
    const items = this.container.children;
    for (let item of items) {
      item.removeAttribute('draggable');
      item.removeEventListener('dragstart', this.handleDragStart);
      item.removeEventListener('dragend', this.handleDragEnd);
      item.removeEventListener('dragover', this.handleDragOver);
      item.removeEventListener('drop', this.handleDrop);
      item.removeEventListener('dragenter', this.handleDragEnter);
      item.removeEventListener('dragleave', this.handleDragLeave);
    }
  }
}
