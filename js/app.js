// 主应用入口文件
import { dimensions } from './data/dimensions.js';
import { theoryData } from './data/theories.js';
import { quizQuestions } from './data/quiz.js';
import { physicists } from './data/physicists.js';
import { applications } from './data/applications.js';
import { advancedQuizQuestions } from './data/advancedQuiz.js';
import { BackgroundAnimation } from './visual/background.js';
import { DimensionVisualizer } from './visual/dimensionRenderer.js';
import { NavigationManager, ScrollManager, ModalManager } from './ui/navigation.js';
import { QuizManager, QuickNavManager, MobileMenuManager } from './ui/interactions.js';
import { DimensionSimulator, DimensionGame } from './modules/games.js';
import { DimensionPuzzle, DimensionBuilder } from './modules/advancedGames.js';
import { getProgressTracker } from './ui/progress.js';
import { getSoundManager } from './modules/sound.js';
import { ParticleSystem, DimensionWarpEffect, InteractionFeedback } from './visual/effects.js';
import { StoryManager, TimelineManager, ConceptExplainer } from './ui/story.js';
import { initSciFiCompendium } from './ui/scifiCompendium.js';

class DimensionExplorerApp {
  constructor() {
    // 初始化各模块
    this.background = new BackgroundAnimation('meteor-canvas');
    this.visualizer = new DimensionVisualizer();
    this.navManager = new NavigationManager(dimensions);
    this.scrollManager = new ScrollManager(() => this.handleScroll());
    this.modalManager = new ModalManager(theoryData);
    this.quizManager = new QuizManager(quizQuestions);
    this.quickNavManager = new QuickNavManager(dimensions);
    this.mobileMenuManager = new MobileMenuManager();
    this.simulator = new DimensionSimulator();
    this.game = new DimensionGame();
    
    // 新增模块
    this.puzzleGame = new DimensionPuzzle();
    this.builderGame = new DimensionBuilder();
    this.progressTracker = getProgressTracker();
    this.soundManager = getSoundManager();
    this.particleSystem = new ParticleSystem('particle-canvas');
    this.warpEffect = new DimensionWarpEffect('warp-container');
    
    // 故事和叙事系统
    this.storyManager = new StoryManager();
    this.timelineManager = new TimelineManager();
    this.conceptExplainer = new ConceptExplainer();
    
    // 科幻百科
    this.sciFiCompendium = null;
    
    // 渲染新内容
    this.physicists = physicists;
    this.applications = applications;

    // 暴露给全局作用域
    window.dimensionApp = this;
    window.dimensionUI = {
      toggleAnalysis: (dim) => this.toggleAnalysis(dim)
    };
  }

  init() {
    // 1. 启动背景动画
    this.background.start();

    // 2. 渲染维度卡片
    this.visualizer.renderDimensionCards('dimensionContainer', dimensions);

    // 3. 生成导航
    this.navManager.generateDimNav('dimNav');

    // 4. 初始化滚动管理
    this.scrollManager.init();

    // 5. 设置模态框
    this.modalManager.setupCloseHandlers();

    // 6. 设置快速导航
    this.quickNavManager.setupHandlers();

    // 7. 设置移动端菜单
    this.mobileMenuManager.setup();

    // 8. 启动粒子系统
    this.particleSystem.start();

    // 9. 渲染物理学家和应用卡片
    this.renderPhysicists();
    this.renderApplications();

    // 10. 初始化故事系统
    this.storyManager.init();
    this.timelineManager.init();
    this.conceptExplainer.init();

    // 11. 初始化科幻百科
    this.initSciFiCompendium();

    // 12. 绑定事件监听器
    this.bindEvents();

    // 13. 初始触发显示动画
    this.scrollManager.triggerRevealAnimations();

    // 14. 开始会话追踪
    this.progressTracker.startSession();

    console.log('维度探索器 v5.0 初始化完成！');
  }

  handleScroll() {
    this.navManager.updateNavHighlight();
    this.scrollManager.triggerRevealAnimations();
  }

  toggleAnalysis(dim) {
    const el = document.getElementById(`analysis-${dim}`);
    if (el) {
      el.classList.toggle('hidden');
    }
  }

  scrollToDim(dim) {
    this.navManager.scrollToDim(dim);
  }

  selectAnswer(index) {
    this.quizManager.selectAnswer(index);
  }

  nextQuestion() {
    this.quizManager.nextQuestion();
  }

  closeQuiz() {
    this.quizManager.closeQuiz();
  }

  closeQuickNav() {
    this.quickNavManager.close();
  }

  renderPhysicists() {
    const container = document.getElementById('physicistsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    this.physicists.forEach(physicist => {
      const card = document.createElement('div');
      card.className = 'physicist-card bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all border border-gray-700';
      card.innerHTML = `
        <div class="text-4xl mb-3">${physicist.image}</div>
        <h3 class="text-xl font-bold text-cyan-400 mb-1">${physicist.name}</h3>
        <p class="text-sm text-gray-400 mb-2">${physicist.nameEn} (${physicist.years})</p>
        <div class="text-purple-400 font-semibold mb-2">${physicist.contribution}</div>
        <p class="text-gray-300 text-sm">${physicist.description}</p>
        <div class="mt-3 flex items-center justify-between">
          <span class="text-xs bg-indigo-900 text-indigo-300 px-2 py-1 rounded">${physicist.era}</span>
          <button onclick="dimensionApp.toggleFavorite('physicists', '${physicist.id}')" 
                  class="favorite-btn ${this.progressTracker.isFavorite('physicists', physicist.id) ? 'active' : ''}">
            ❤️
          </button>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  renderApplications() {
    const container = document.getElementById('applicationsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    this.applications.forEach(app => {
      const card = document.createElement('div');
      card.className = 'application-card bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all border border-gray-700';
      const statusInfo = app.status ? `
        <div class="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded mt-2">
          ${app.status}
        </div>
      ` : '';
      
      card.innerHTML = `
        <div class="text-4xl mb-3">${app.icon}</div>
        <h3 class="text-xl font-bold text-cyan-400 mb-2">${app.title}</h3>
        <p class="text-gray-300 text-sm mb-3">${app.description}</p>
        <div class="text-xs text-blue-300 mb-2">
          <strong>现实应用:</strong> ${app.realWorld}
        </div>
        ${statusInfo}
        <div class="mt-3 flex items-center justify-between">
          <span class="text-xs bg-purple-900 text-purple-300 px-2 py-1 rounded">${app.category}</span>
          <button onclick="dimensionApp.toggleFavorite('applications', '${app.id}')" 
                  class="favorite-btn ${this.progressTracker.isFavorite('applications', app.id) ? 'active' : ''}">
            ❤️
          </button>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  toggleFavorite(type, id) {
    this.progressTracker.toggleFavorite(type, id);
    // 重新渲染以更新状态
    if (type === 'physicists') {
      this.renderPhysicists();
    } else if (type === 'applications') {
      this.renderApplications();
    }
  }

  initSciFiCompendium() {
    const { ui, search } = initSciFiCompendium();
    this.sciFiCompendium = { ui, search };
  }

  bindEvents() {
    // 返回顶部按钮
    const backBtn = document.getElementById('backToTopBtn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.soundManager.playClick();
      });
    }

    // 快速导航按钮
    const quickNavBtn = document.getElementById('quickNavBtn');
    if (quickNavBtn) {
      quickNavBtn.addEventListener('click', () => this.quickNavManager.open());
    }

    // 信息按钮
    const infoBtn = document.getElementById('infoBtn');
    if (infoBtn) {
      infoBtn.addEventListener('click', () => {
        this.modalManager.openModal('modalOverlay', 'string');
      });
    }

    // 测验按钮
    const startQuizBtn = document.getElementById('startQuizBtn');
    if (startQuizBtn) {
      startQuizBtn.addEventListener('click', () => this.quizManager.start());
    }

    // 视觉模式切换按钮
    const toggleVisualBtn = document.getElementById('toggleVisualBtn');
    if (toggleVisualBtn) {
      toggleVisualBtn.addEventListener('click', () => {
        this.visualizer.toggleVisualMode();
      });
    }

    // 维度模拟器按钮
    const simulatorBtn = document.getElementById('simulatorBtn');
    if (simulatorBtn) {
      simulatorBtn.addEventListener('click', () => this.simulator.open());
    }

    // 游戏按钮
    const gameBtn = document.getElementById('gameBtn');
    if (gameBtn) {
      gameBtn.addEventListener('click', () => {
        this.soundManager.playClick();
        this.game.startMatchingGame();
      });
    }
    
    // 拼图游戏按钮
    const puzzleBtn = document.getElementById('puzzleBtn');
    if (puzzleBtn) {
      puzzleBtn.addEventListener('click', () => {
        this.soundManager.playClick();
        this.puzzleGame.createPuzzleContainer();
      });
    }
    
    // 建造者游戏按钮
    const builderBtn = document.getElementById('builderBtn');
    if (builderBtn) {
      builderBtn.addEventListener('click', () => {
        this.soundManager.playClick();
        this.builderGame.createBuilderContainer();
      });
    }

    // 理论卡片点击
    document.querySelectorAll('.theory-card').forEach(card => {
      card.addEventListener('click', () => {
        this.modalManager.openModal('modalOverlay', card.dataset.theory);
      });
    });

    // 测验模态框关闭
    const closeQuizBtn = document.getElementById('closeQuizBtn');
    if (closeQuizBtn) {
      closeQuizBtn.addEventListener('click', () => this.closeQuiz());
    }

    // 点击背景关闭模态框
    const quizModal = document.getElementById('quizModal');
    if (quizModal) {
      quizModal.addEventListener('click', (e) => {
        if (e.target.id === 'quizModal') {
          this.closeQuiz();
        }
      });
    }

    // 窗口大小变化时调整背景
    window.addEventListener('resize', () => {
      this.background.resize();
    });

    // 减少动画偏好
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.background.stop();
    }
  }
}

// 应用启动
document.addEventListener('DOMContentLoaded', () => {
  const app = new DimensionExplorerApp();
  app.init();
});

export default DimensionExplorerApp;
