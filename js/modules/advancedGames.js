// 高级游戏模块 - 维度拼图和建造者
import { dimensions } from '../data/dimensions.js';
import { getProgressTracker } from '../ui/progress.js';

// 维度拼图游戏
export class DimensionPuzzle {
  constructor() {
    this.currentLevel = 1;
    this.score = 0;
    this.timeLeft = 120;
    this.pieces = [];
    this.isDragging = false;
    this.selectedPiece = null;
    this.progressTracker = getProgressTracker();
  }
  
  createPuzzleContainer() {
    const container = document.createElement('div');
    container.id = 'puzzle-game';
    container.className = 'fixed inset-0 bg-gray-900/95 z-50 flex items-center justify-center';
    container.innerHTML = `
      <div class="bg-gray-800 rounded-2xl p-8 max-w-6xl w-full mx-4 shadow-2xl border border-cyan-500/30">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-3xl font-bold text-cyan-400">🧩 维度拼图挑战</h2>
          <div class="flex gap-4">
            <div class="text-right">
              <div class="text-sm text-gray-400">关卡</div>
              <div class="text-2xl font-bold text-yellow-400" id="puzzle-level">${this.currentLevel}</div>
            </div>
            <div class="text-right">
              <div class="text-sm text-gray-400">分数</div>
              <div class="text-2xl font-bold text-green-400" id="puzzle-score">${this.score}</div>
            </div>
            <div class="text-right">
              <div class="text-sm text-gray-400">时间</div>
              <div class="text-2xl font-bold text-red-400" id="puzzle-timer">${this.timeLeft}s</div>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-6" id="puzzle-grid">
          <!-- 左侧：维度卡片 -->
          <div class="bg-gray-900/50 rounded-xl p-4 min-h-[400px]">
            <h3 class="text-xl font-semibold text-purple-400 mb-4">维度卡片</h3>
            <div class="grid grid-cols-2 gap-3" id="dimension-pieces"></div>
          </div>
          
          <!-- 右侧：放置区域 -->
          <div class="bg-gray-900/50 rounded-xl p-4 min-h-[400px]">
            <h3 class="text-xl font-semibold text-blue-400 mb-4">放置区域</h3>
            <div class="grid grid-cols-2 gap-3" id="drop-zones"></div>
          </div>
        </div>
        
        <div class="flex justify-center gap-4 mt-6">
          <button onclick="dimensionApp.puzzleGame.showHint()" 
                  class="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition">
            💡 提示
          </button>
          <button onclick="dimensionApp.puzzleGame.close()" 
                  class="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-lg transition">
            退出
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(container);
    this.startLevel();
  }
  
  startLevel() {
    const levelDimensions = dimensions.slice(0, Math.min(this.currentLevel * 2 + 2, 12));
    this.pieces = this.shuffleArray([...levelDimensions]);
    
    this.renderPieces();
    this.renderDropZones(levelDimensions);
    this.startTimer();
  }
  
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  renderPieces() {
    const container = document.getElementById('dimension-pieces');
    if (!container) return;
    
    container.innerHTML = '';
    this.pieces.forEach((dim, index) => {
      const piece = document.createElement('div');
      piece.className = 'bg-gradient-to-br from-purple-600 to-blue-600 p-3 rounded-lg cursor-move hover:scale-105 transition transform';
      piece.draggable = true;
      piece.innerHTML = `
        <div class="text-white font-bold text-lg">${dim.number}D</div>
        <div class="text-white/80 text-xs">${dim.name}</div>
      `;
      piece.dataset.index = index;
      
      piece.addEventListener('dragstart', (e) => this.handleDragStart(e, dim, index));
      piece.addEventListener('click', () => this.handlePieceClick(dim, index));
      
      container.appendChild(piece);
    });
  }
  
  renderDropZones(correctDimensions) {
    const container = document.getElementById('drop-zones');
    if (!container) return;
    
    container.innerHTML = '';
    const shuffledZones = this.shuffleArray([...correctDimensions]);
    
    shuffledZones.forEach((dim, index) => {
      const zone = document.createElement('div');
      zone.className = 'bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg p-4 min-h-[80px] flex items-center justify-center';
      zone.dataset.dimension = dim.number;
      zone.innerHTML = `<span class="text-gray-500">放置 ${dim.number}D</span>`;
      
      zone.addEventListener('dragover', (e) => e.preventDefault());
      zone.addEventListener('drop', (e) => this.handleDrop(e, dim, zone));
      
      container.appendChild(zone);
    });
  }
  
  handleDragStart(e, dim, index) {
    e.dataTransfer.setData('dimension', JSON.stringify(dim));
    e.dataTransfer.setData('index', index);
    this.selectedPiece = { dim, index };
  }
  
  handleDrop(e, targetDim, zone) {
    e.preventDefault();
    
    const data = e.dataTransfer.getData('dimension');
    if (!data) return;
    
    const droppedDim = JSON.parse(data);
    
    if (droppedDim.number === targetDim.number) {
      // 正确放置
      zone.innerHTML = `
        <div class="text-green-400 font-bold">✓ ${targetDim.number}D</div>
        <div class="text-green-300 text-xs">${targetDim.name}</div>
      `;
      zone.className = 'bg-green-900/30 border-2 border-green-500 rounded-lg p-4 min-h-[80px] flex items-center justify-center';
      zone.draggable = false;
      
      this.score += 10 * this.currentLevel;
      this.updateScore();
      
      // 移除已放置的碎片
      const piece = document.querySelector(`#dimension-pieces [data-index="${this.selectedPiece.index}"]`);
      if (piece) piece.remove();
      
      // 检查是否完成
      this.checkLevelComplete();
    } else {
      // 错误放置
      zone.style.animation = 'shake 0.5s';
      setTimeout(() => zone.style.animation = '', 500);
      this.timeLeft -= 5;
      this.updateTimer();
    }
  }
  
  handlePieceClick(dim, index) {
    // 移动端支持 - 点击选择后点击放置区域
    if (!this.selectedPiece) {
      this.selectedPiece = { dim, index };
      const piece = document.querySelector(`#dimension-pieces [data-index="${index}"]`);
      if (piece) piece.classList.add('ring-4', 'ring-yellow-400');
    } else {
      // 尝试放置
      const zones = document.querySelectorAll('#drop-zones [data-dimension]');
      zones.forEach(zone => {
        if (parseInt(zone.dataset.dimension) === dim.number) {
          const mockEvent = {
            preventDefault: () => {},
            dataTransfer: {
              getData: () => JSON.stringify(dim)
            }
          };
          this.handleDrop(mockEvent, { number: parseInt(zone.dataset.dimension) }, zone);
        }
      });
      
      // 清除选择
      document.querySelectorAll('#dimension-pieces .ring-4').forEach(el => {
        el.classList.remove('ring-4', 'ring-yellow-400');
      });
      this.selectedPiece = null;
    }
  }
  
  checkLevelComplete() {
    const remainingPieces = document.querySelectorAll('#dimension-pieces > div').length;
    if (remainingPieces === 0) {
      // 关卡完成
      clearInterval(this.timerInterval);
      this.score += this.timeLeft * 2; // 时间奖励
      this.updateScore();
      
      setTimeout(() => {
        if (confirm(`🎉 恭喜！完成关卡 ${this.currentLevel}！\n最终得分：${this.score}\n继续下一关吗？`)) {
          this.currentLevel++;
          this.timeLeft = 120;
          document.getElementById('puzzle-game').remove();
          this.createPuzzleContainer();
        }
      }, 500);
    }
  }
  
  startTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      this.updateTimer();
      
      if (this.timeLeft <= 0) {
        this.gameOver();
      }
    }, 1000);
  }
  
  updateTimer() {
    const timer = document.getElementById('puzzle-timer');
    if (timer) timer.textContent = `${this.timeLeft}s`;
  }
  
  updateScore() {
    const score = document.getElementById('puzzle-score');
    if (score) score.textContent = this.score;
    
    const level = document.getElementById('puzzle-level');
    if (level) level.textContent = this.currentLevel;
  }
  
  showHint() {
    const zones = document.querySelectorAll('#drop-zones [data-dimension]');
    const emptyZones = Array.from(zones).filter(zone => !zone.classList.contains('border-green-500'));
    
    if (emptyZones.length > 0) {
      const randomZone = emptyZones[Math.floor(Math.random() * emptyZones.length)];
      const dimensionNum = randomZone.dataset.dimension;
      
      // 高亮对应的碎片
      const pieces = document.querySelectorAll('#dimension-pieces > div');
      pieces.forEach(piece => {
        if (piece.textContent.includes(`${dimensionNum}D`)) {
          piece.scrollIntoView({ behavior: 'smooth', block: 'center' });
          piece.classList.add('ring-4', 'ring-yellow-400', 'animate-pulse');
          setTimeout(() => piece.classList.remove('ring-4', 'ring-yellow-400', 'animate-pulse'), 2000);
        }
      });
    }
    
    this.timeLeft -= 10; // 提示扣除时间
    this.updateTimer();
  }
  
  gameOver() {
    clearInterval(this.timerInterval);
    alert(`游戏结束！\n到达关卡：${this.currentLevel}\n最终得分：${this.score}`);
    
    // 保存进度
    if (this.progressTracker) {
      this.progressTracker.updateStats('gameHighScore', this.score);
    }
    
    this.close();
  }
  
  close() {
    clearInterval(this.timerInterval);
    const game = document.getElementById('puzzle-game');
    if (game) game.remove();
  }
}

// 维度建造者游戏
export class DimensionBuilder {
  constructor() {
    this.resources = {
      energy: 100,
      matter: 50,
      strings: 10
    };
    this.builtDimensions = [];
    this.level = 1;
    this.progressTracker = getProgressTracker();
  }
  
  createBuilderContainer() {
    const container = document.createElement('div');
    container.id = 'builder-game';
    container.className = 'fixed inset-0 bg-gray-900/95 z-50 flex items-center justify-center overflow-auto';
    container.innerHTML = `
      <div class="bg-gray-800 rounded-2xl p-8 max-w-6xl w-full mx-4 shadow-2xl border border-cyan-500/30 my-8">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-3xl font-bold text-cyan-400">🏗️ 维度建造者</h2>
          <div class="flex gap-6">
            <div class="text-center">
              <div class="text-sm text-gray-400">等级</div>
              <div class="text-2xl font-bold text-purple-400" id="builder-level">${this.level}</div>
            </div>
            <div class="text-center">
              <div class="text-sm text-gray-400">已建造</div>
              <div class="text-2xl font-bold text-green-400" id="builder-count">${this.builtDimensions.length}</div>
            </div>
          </div>
        </div>
        
        <!-- 资源显示 -->
        <div class="grid grid-cols-3 gap-4 mb-6">
          <div class="bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-4 text-center">
            <div class="text-2xl mb-2">⚡</div>
            <div class="text-sm text-yellow-400">能量</div>
            <div class="text-2xl font-bold text-yellow-300" id="resource-energy">${this.resources.energy}</div>
          </div>
          <div class="bg-blue-900/30 border border-blue-500/50 rounded-lg p-4 text-center">
            <div class="text-2xl mb-2">🔮</div>
            <div class="text-sm text-blue-400">物质</div>
            <div class="text-2xl font-bold text-blue-300" id="resource-matter">${this.resources.matter}</div>
          </div>
          <div class="bg-purple-900/30 border border-purple-500/50 rounded-lg p-4 text-center">
            <div class="text-2xl mb-2">🧵</div>
            <div class="text-sm text-purple-400">弦</div>
            <div class="text-2xl font-bold text-purple-300" id="resource-strings">${this.resources.strings}</div>
          </div>
        </div>
        
        <!-- 可建造的维度 -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-cyan-400 mb-4">可建造的维度</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="buildable-dimensions"></div>
        </div>
        
        <!-- 已建造的维度 -->
        <div>
          <h3 class="text-xl font-semibold text-green-400 mb-4">已建造的维度</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="built-dimensions"></div>
        </div>
        
        <div class="flex justify-center gap-4 mt-6">
          <button onclick="dimensionApp.builderGame.gatherResources()" 
                  class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition">
            🔋 收集资源
          </button>
          <button onclick="dimensionApp.builderGame.close()" 
                  class="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-lg transition">
            退出
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(container);
    this.renderBuildableDimensions();
    this.renderBuiltDimensions();
  }
  
  getBuildCost(dimensionNumber) {
    return {
      energy: dimensionNumber * 10,
      matter: dimensionNumber * 5,
      strings: Math.ceil(dimensionNumber / 2)
    };
  }
  
  renderBuildableDimensions() {
    const container = document.getElementById('buildable-dimensions');
    if (!container) return;
    
    container.innerHTML = '';
    
    dimensions.forEach(dim => {
      if (this.builtDimensions.includes(dim.number)) return;
      
      const cost = this.getBuildCost(dim.number);
      const canBuild = this.resources.energy >= cost.energy && 
                       this.resources.matter >= cost.matter && 
                       this.resources.strings >= cost.strings;
      
      const card = document.createElement('div');
      card.className = `bg-gray-900 rounded-lg p-4 border-2 ${canBuild ? 'border-green-500/50 hover:border-green-400' : 'border-gray-600'} transition cursor-pointer`;
      card.innerHTML = `
        <div class="text-2xl font-bold text-cyan-400 mb-2">${dim.number}D - ${dim.name}</div>
        <div class="text-sm text-gray-400 mb-3">${dim.description.substring(0, 60)}...</div>
        <div class="flex gap-2 text-xs">
          <span class="text-yellow-400">⚡ ${cost.energy}</span>
          <span class="text-blue-400">🔮 ${cost.matter}</span>
          <span class="text-purple-400">🧵 ${cost.strings}</span>
        </div>
      `;
      
      if (canBuild) {
        card.addEventListener('click', () => this.buildDimension(dim));
      } else {
        card.style.opacity = '0.5';
        card.style.cursor = 'not-allowed';
      }
      
      container.appendChild(card);
    });
  }
  
  renderBuiltDimensions() {
    const container = document.getElementById('built-dimensions');
    if (!container) return;
    
    container.innerHTML = '';
    
    this.builtDimensions.forEach(dimNumber => {
      const dim = dimensions.find(d => d.number === dimNumber);
      if (!dim) return;
      
      const card = document.createElement('div');
      card.className = 'bg-green-900/30 border-2 border-green-500 rounded-lg p-4';
      card.innerHTML = `
        <div class="text-xl font-bold text-green-400 mb-2">✓ ${dim.number}D - ${dim.name}</div>
        <div class="text-sm text-green-300">${dim.description.substring(0, 50)}...</div>
      `;
      
      container.appendChild(card);
    });
  }
  
  buildDimension(dim) {
    const cost = this.getBuildCost(dim.number);
    
    if (this.resources.energy >= cost.energy && 
        this.resources.matter >= cost.matter && 
        this.resources.strings >= cost.strings) {
      
      // 扣除资源
      this.resources.energy -= cost.energy;
      this.resources.matter -= cost.matter;
      this.resources.strings -= cost.strings;
      
      // 添加已建造维度
      this.builtDimensions.push(dim.number);
      
      // 更新显示
      this.updateResources();
      this.renderBuildableDimensions();
      this.renderBuiltDimensions();
      
      // 检查升级
      if (this.builtDimensions.length >= this.level * 3) {
        this.levelUp();
      }
    }
  }
  
  gatherResources() {
    this.resources.energy += 20;
    this.resources.matter += 10;
    this.resources.strings += 2;
    
    this.updateResources();
    this.renderBuildableDimensions();
    
    // 收集动画
    const button = event.target;
    button.style.animation = 'pulse 0.5s';
    setTimeout(() => button.style.animation = '', 500);
  }
  
  levelUp() {
    this.level++;
    document.getElementById('builder-level').textContent = this.level;
    
    // 升级奖励
    this.resources.energy += 50;
    this.resources.matter += 25;
    this.resources.strings += 5;
    
    this.updateResources();
    
    alert(`🎉 升级到等级 ${this.level}!\n获得奖励资源！`);
  }
  
  updateResources() {
    document.getElementById('resource-energy').textContent = this.resources.energy;
    document.getElementById('resource-matter').textContent = this.resources.matter;
    document.getElementById('resource-strings').textContent = this.resources.strings;
    document.getElementById('builder-count').textContent = this.builtDimensions.length;
  }
  
  close() {
    const game = document.getElementById('builder-game');
    if (game) game.remove();
  }
}
