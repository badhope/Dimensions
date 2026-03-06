// 流星效果类
export class Meteor {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvasWidth * 1.5;
    this.y = -50;
    this.length = Math.random() * 80 + 50;
    this.speed = Math.random() * 15 + 10;
    this.opacity = Math.random() * 0.6 + 0.4;
    this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2;
  }

  update() {
    this.x -= Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    if (this.y > this.canvasHeight + 100 || this.x < -100) {
      this.reset();
    }
  }

  draw(ctx) {
    const gradient = ctx.createLinearGradient(
      this.x, this.y,
      this.x + Math.cos(this.angle) * this.length,
      this.y - Math.sin(this.angle) * this.length
    );
    gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
    gradient.addColorStop(0.3, `rgba(0, 212, 255, ${this.opacity * 0.8})`);
    gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
    
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(
      this.x + Math.cos(this.angle) * this.length,
      this.y - Math.sin(this.angle) * this.length
    );
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

// 星星效果类
export class Star {
  constructor(canvasWidth, canvasHeight) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 1.5 + 0.5;
    this.twinkleSpeed = Math.random() * 0.02 + 0.01;
    this.twinklePhase = Math.random() * Math.PI * 2;
  }

  update() {
    this.twinklePhase += this.twinkleSpeed;
  }

  draw(ctx) {
    const opacity = 0.3 + Math.sin(this.twinklePhase) * 0.3;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    ctx.fill();
  }
}

// 背景动画管理器
export class BackgroundAnimation {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.meteors = [];
    this.stars = [];
    this.animationFrameId = null;
    this.isEnabled = true;
  }

  init() {
    if (!this.ctx || !this.isEnabled) return;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    // 初始化星星
    this.stars = [];
    const starCount = Math.min(150, Math.floor((this.canvas.width * this.canvas.height) / 8000));
    for (let i = 0; i < starCount; i++) {
      this.stars.push(new Star(this.canvas.width, this.canvas.height));
    }

    // 初始化流星
    this.meteors = [];
    const meteorCount = window.innerWidth < 768 ? 3 : 6;
    for (let i = 0; i < meteorCount; i++) {
      const meteor = new Meteor(this.canvas.width, this.canvas.height);
      meteor.y = Math.random() * this.canvas.height;
      this.meteors.push(meteor);
    }
  }

  animate() {
    if (!this.ctx || !this.isEnabled) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // 更新和绘制星星
    this.stars.forEach(star => {
      star.update();
      star.draw(this.ctx);
    });

    // 更新和绘制流星
    this.meteors.forEach(meteor => {
      meteor.update();
      meteor.draw(this.ctx);
    });

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  start() {
    this.isEnabled = true;
    this.init();
    this.animate();
  }

  stop() {
    this.isEnabled = false;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  resize() {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.init();
    }
  }
}
