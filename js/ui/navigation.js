// 导航管理器
export class NavigationManager {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.currentDim = 0;
  }

  // 生成维度导航
  generateDimNav(navId) {
    const nav = document.getElementById(navId);
    if (!nav) return;

    nav.innerHTML = this.dimensions.map(d => `
      <div class="dim-nav-dot" onclick="window.dimensionApp.scrollToDim(${d.dim})" data-dim="${d.dim}">
        <div class="tooltip">${d.dim}维 - ${d.name}</div>
      </div>
    `).join('');
  }

  // 更新导航高亮
  updateNavHighlight() {
    let currentDim = 0;
    this.dimensions.forEach(d => {
      const el = document.getElementById(`dim-${d.dim}`);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5) {
          currentDim = d.dim;
        }
      }
    });

    document.querySelectorAll('.dim-nav-dot').forEach(dot => {
      dot.classList.remove('active');
      if (parseInt(dot.dataset.dim) === currentDim) {
        dot.classList.add('active');
      }
    });
  }

  // 滚动到指定维度
  scrollToDim(dim) {
    const el = document.getElementById(`dim-${dim}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}

// 页面滚动管理器
export class ScrollManager {
  constructor(onScrollCallback) {
    this.onScrollCallback = onScrollCallback;
    this.lastScrollY = window.scrollY;
    this.ticking = false;
  }

  init() {
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
    window.addEventListener('resize', () => this.handleResize());
    this.handleScroll();
  }

  handleScroll() {
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        if (this.onScrollCallback) {
          this.onScrollCallback();
        }
        this.updateProgressBar();
        this.updateBackToTopButton();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  handleResize() {
    this.lastScrollY = window.scrollY;
  }

  updateProgressBar() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    const progressBar = document.getElementById('pageProgress');
    if (progressBar) {
      progressBar.style.width = progress + '%';
    }
  }

  updateBackToTopButton() {
    const backBtn = document.getElementById('backToTopBtn');
    if (backBtn) {
      if (window.scrollY > 500) {
        backBtn.classList.remove('opacity-0', 'pointer-events-none');
        backBtn.classList.add('opacity-100');
      } else {
        backBtn.classList.add('opacity-0', 'pointer-events-none');
        backBtn.classList.remove('opacity-100');
      }
    }
  }

  // 触发元素显示动画
  triggerRevealAnimations() {
    document.querySelectorAll('.reveal-item').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add('active');
      }
    });
  }
}

// 模态框管理器
export class ModalManager {
  constructor(theoryData) {
    this.theoryData = theoryData;
  }

  openModal(modalId, type) {
    const modal = document.getElementById(modalId);
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    
    if (!modal || !title || !body) return;

    if (this.theoryData[type]) {
      title.textContent = this.theoryData[type].title;
      body.innerHTML = this.theoryData[type].content;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  setupCloseHandlers() {
    // 关闭按钮
    const closeModalBtn = document.getElementById('closeModalBtn');
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => this.closeModal('modalOverlay'));
    }

    // 点击背景关闭
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target.id === 'modalOverlay') {
          this.closeModal('modalOverlay');
        }
      });
    }
  }
}
