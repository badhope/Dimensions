// 维度模拟器模块
export class DimensionSimulator {
  constructor() {
    this.currentDimension = 3;
    this.isAnimating = false;
  }

  // 创建维度模拟容器
  createSimulatorContainer() {
    const container = document.createElement('div');
    container.id = 'dimensionSimulator';
    container.className = 'fixed bottom-6 left-6 z-40 w-80 glass-panel rounded-2xl p-6 hidden';
    container.innerHTML = `
      <div class="flex justify-between items-center mb-4">
        <h3 class="font-display text-lg font-bold text-white">维度模拟器</h3>
        <button id="closeSimulatorBtn" class="text-gray-400 hover:text-white">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="mb-4">
        <label class="text-sm text-gray-400 block mb-2">当前维度：<span id="currentDimValue" class="text-stellar font-bold">3</span>D</label>
        <input type="range" id="dimensionSlider" min="0" max="11" value="3" 
          class="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer">
      </div>
      <div id="simulatorVisual" class="w-full h-40 rounded-xl bg-cosmic/50 border border-stellar/20 flex items-center justify-center">
        ${this.getSimulatorVisual(3)}
      </div>
      <div class="mt-4 text-xs text-gray-400" id="simulatorDescription">
        ${this.getDescription(3)}
      </div>
    `;
    return container;
  }

  getSimulatorVisual(dim) {
    const visuals = {
      0: '<div class="dim-0-point"></div>',
      1: '<div class="dim-1-line"></div>',
      2: '<div class="dim-2-plane"></div>',
      3: '<div class="text-stellar text-4xl">📦</div>',
      4: '<div class="text-aurora text-4xl">⏳</div>',
      5: '<div class="dim-5-timeline" style="transform: scale(0.8);"></div>',
      6: '<div class="dim-6-fold" style="transform: scale(0.8);"></div>',
      7: '<div class="text-nova text-4xl">💥</div>',
      8: '<div class="text-nova text-4xl">⚛️</div>',
      9: '<div class="text-nova text-4xl">🌌</div>',
      10: '<div class="text-quasar text-4xl">✨</div>',
      11: '<div class="dim-11-string" style="transform: scale(0.7);"></div>'
    };
    return visuals[dim] || '<div class="text-white">?</div>';
  }

  getDescription(dim) {
    const descriptions = {
      0: '零维：只有位置，没有大小的点',
      1: '一维：只能沿直线移动的世界',
      2: '二维：平面世界，无法理解"上下"',
      3: '三维：我们的日常空间，长宽高三个自由度',
      4: '四维：时空连续体，时间成为第四维度',
      5: '五维：所有可能的时间线分支',
      6: '六维：可以在时间线之间折叠跳跃',
      7: '七维：包含所有宇宙起点的集合',
      8: '八维：不同物理定律的宇宙比较',
      9: '九维：宇宙历史的完整谱系',
      10: '十维：一切可能的终极集合',
      11: '十一维：M 理论的终极统一'
    };
    return descriptions[dim] || '未知维度';
  }

  open() {
    const container = this.createSimulatorContainer();
    document.body.appendChild(container);
    container.classList.remove('hidden');

    // 绑定滑块事件
    const slider = document.getElementById('dimensionSlider');
    const currentValue = document.getElementById('currentDimValue');
    const visual = document.getElementById('simulatorVisual');
    const description = document.getElementById('simulatorDescription');
    const closeBtn = document.getElementById('closeSimulatorBtn');

    slider.addEventListener('input', (e) => {
      const dim = parseInt(e.target.value);
      this.currentDimension = dim;
      currentValue.textContent = dim;
      visual.innerHTML = this.getSimulatorVisual(dim);
      description.textContent = this.getDescription(dim);
    });

    closeBtn.addEventListener('click', () => this.close());
  }

  close() {
    const container = document.getElementById('dimensionSimulator');
    if (container) {
      container.remove();
    }
  }
}

// 互动小游戏模块
export class DimensionGame {
  constructor() {
    this.score = 0;
    this.level = 1;
    this.timeLeft = 60;
    this.gameInterval = null;
  }

  // 维度匹配游戏
  startMatchingGame() {
    const modal = document.createElement('div');
    modal.id = 'matchingGameModal';
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
      <div class="modal-content glass-panel p-8 max-w-4xl">
        <div class="flex justify-between items-start mb-6">
          <h3 class="font-display text-xl font-bold text-white">
            <i class="fas fa-gamepad text-nova mr-2"></i>维度匹配挑战
          </h3>
          <button id="closeGameBtn" class="text-gray-500 hover:text-white">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div class="text-white">
            <div class="text-sm text-gray-400">得分</div>
            <div class="text-2xl font-display font-bold text-stellar" id="gameScore">0</div>
          </div>
          <div class="text-white">
            <div class="text-sm text-gray-400">关卡</div>
            <div class="text-2xl font-display font-bold text-aurora" id="gameLevel">1</div>
          </div>
          <div class="text-white">
            <div class="text-sm text-gray-400">时间</div>
            <div class="text-2xl font-display font-bold text-nova" id="gameTime">60s</div>
          </div>
        </div>
        <div id="gameArea" class="grid grid-cols-2 md:grid-cols-4 gap-3">
          ${this.generateGameCards()}
        </div>
        <div id="selectedCard" class="hidden"></div>
      </div>
    `;

    document.body.appendChild(modal);
    this.startTimer();
    this.setupGameEvents();
  }

  generateGameCards() {
    const dimensionPairs = [
      { dim: 0, name: '零维', emoji: '⚪' },
      { dim: 1, name: '一维', emoji: '📏' },
      { dim: 2, name: '二维', emoji: '📄' },
      { dim: 3, name: '三维', emoji: '📦' },
      { dim: 4, name: '四维', emoji: '⏳' },
      { dim: 5, name: '五维', emoji: '🔮' },
      { dim: 6, name: '六维', emoji: '🌀' },
      { dim: 7, name: '七维', emoji: '💥' }
    ];

    // 创建卡片对
    let cards = [];
    dimensionPairs.slice(0, 4 + this.level).forEach(pair => {
      cards.push({ id: `dim-${pair.dim}`, type: 'dim', content: pair.dim, label: `${pair.emoji}` });
      cards.push({ id: `name-${pair.dim}`, type: 'name', content: pair.dim, label: pair.name });
    });

    // 洗牌
    cards = cards.sort(() => Math.random() - 0.5);

    return cards.map(card => `
      <button class="game-card p-6 rounded-xl glass-panel border border-white/10 hover:border-stellar/50 transition-all text-center" 
        data-id="${card.id}" data-type="${card.type}" data-content="${card.content}">
        <div class="text-3xl mb-2">${card.label}</div>
      </button>
    `).join('');
  }

  setupGameEvents() {
    let selectedCards = [];
    let matchedPairs = 0;
    const totalPairs = 4 + this.level;

    document.querySelectorAll('.game-card').forEach(card => {
      card.addEventListener('click', () => {
        if (selectedCards.length >= 2 || card.classList.contains('matched')) return;

        card.classList.add('selected', 'border-stellar', 'bg-stellar/20');
        selectedCards.push(card);

        if (selectedCards.length === 2) {
          const [card1, card2] = selectedCards;
          const match = card1.dataset.content === card2.dataset.content && 
                       card1.dataset.type !== card2.dataset.type;

          if (match) {
            card1.classList.add('matched', 'bg-stellar/30');
            card2.classList.add('matched', 'bg-stellar/30');
            card1.classList.remove('selected');
            card2.classList.remove('selected');
            this.score += 10 * this.level;
            matchedPairs++;
            document.getElementById('gameScore').textContent = this.score;

            if (matchedPairs >= totalPairs) {
              this.levelComplete();
            }
          } else {
            setTimeout(() => {
              card1.classList.remove('selected', 'border-stellar', 'bg-stellar/20');
              card2.classList.remove('selected', 'border-stellar', 'bg-stellar/20');
            }, 1000);
          }

          selectedCards = [];
        }
      });
    });

    // 关闭按钮
    document.getElementById('closeGameBtn').addEventListener('click', () => {
      this.endGame();
    });
  }

  startTimer() {
    this.timeLeft = 60;
    this.gameInterval = setInterval(() => {
      this.timeLeft--;
      document.getElementById('gameTime').textContent = `${this.timeLeft}s`;
      
      if (this.timeLeft <= 0) {
        this.endGame();
      }
    }, 1000);
  }

  levelComplete() {
    this.level++;
    this.timeLeft += 30;
    document.getElementById('gameLevel').textContent = this.level;
    document.getElementById('gameArea').innerHTML = this.generateGameCards();
    this.setupGameEvents();
  }

  endGame() {
    clearInterval(this.gameInterval);
    const modal = document.getElementById('matchingGameModal');
    if (modal) {
      modal.remove();
    }
  }
}
