// 故事和叙事系统管理器
import { storyFramework, guideCharacter, historicalTimeline, dimensionStories, explorationQuests } from './data/story.js';
import { scientistCharacters, dialogueSystem, scientistInteractions } from './data/scientists.js';
import { physicsHistory, dimensionTheoryHistory, keyConcepts } from './data/history.js';
import { getProgressTracker } from '../ui/progress.js';
import { getSoundManager } from '../modules/sound.js';

export class StoryManager {
  constructor() {
    this.currentDimension = 0;
    this.unlockedScientists = ['elena']; // 初始解锁艾琳娜
    this.completedQuests = [];
    this.progressTracker = getProgressTracker();
    this.soundManager = getSoundManager();
  }
  
  // 初始化故事系统
  init() {
    this.renderGuidePanel();
    this.renderTimeline();
    this.renderScientistsGallery();
    this.bindEvents();
  }
  
  // 渲染向导面板
  renderGuidePanel() {
    const container = document.getElementById('guidePanel');
    if (!container) return;
    
    container.innerHTML = `
      <div class="glass-panel rounded-2xl p-6 border border-aurora/30">
        <div class="flex items-start gap-4 mb-4">
          <div class="text-5xl">${guideCharacter.image}</div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-cyan-400 mb-1">${guideCharacter.name}</h3>
            <p class="text-sm text-gray-400">${guideCharacter.title}</p>
            <p class="text-xs text-aurora mt-2">${guideCharacter.affiliation}</p>
          </div>
        </div>
        
        <div class="mb-4">
          <p class="text-gray-300 text-sm leading-relaxed italic">"${guideCharacter.quotes[0]}"</p>
        </div>
        
        <div class="flex gap-2">
          <button onclick="dimensionApp.storyManager.showGuideDialogue()" 
                  class="flex-1 px-4 py-2 bg-aurora/20 hover:bg-aurora/30 text-aurora rounded-lg text-sm transition">
            💬 对话
          </button>
          <button onclick="dimensionApp.storyManager.showBackstory()" 
                  class="flex-1 px-4 py-2 bg-stellar/20 hover:bg-stellar/30 text-stellar rounded-lg text-sm transition">
            📖 背景
          </button>
        </div>
        
        <div id="guideDialogueBox" class="hidden mt-4 p-4 bg-gray-900/50 rounded-lg border border-aurora/20">
          <p id="guideDialogueText" class="text-gray-300 text-sm"></p>
        </div>
      </div>
    `;
  }
  
  // 渲染历史时间线
  renderTimeline() {
    const container = document.getElementById('timelineContainer');
    if (!container) return;
    
    container.innerHTML = `
      <div class="glass-panel rounded-2xl p-6 border border-stellar/30">
        <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <i class="fas fa-history text-stellar"></i>
          物理学发展史
        </h3>
        
        <div class="space-y-4 max-h-96 overflow-y-auto pr-2">
          ${historicalTimeline.map((event, index) => `
            <div class="relative pl-6 pb-4 border-l-2 border-stellar/30 last:pb-0">
              <div class="absolute left-0 top-0 w-3 h-3 rounded-full bg-stellar transform -translate-x-1/2"></div>
              <div class="text-xs text-stellar font-bold mb-1">${event.year}</div>
              <div class="text-sm text-white font-semibold mb-1">${event.event}</div>
              <div class="text-xs text-gray-400 mb-2">${event.significance}</div>
              ${event.dimensionRelevance ? `
                <div class="text-xs text-aurora/80">
                  <i class="fas fa-cube mr-1"></i>${event.dimensionRelevance}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  // 渲染科学家画廊
  renderScientistsGallery() {
    const container = document.getElementById('scientistsGallery');
    if (!container) return;
    
    container.innerHTML = `
      <div class="glass-panel rounded-2xl p-6 border border-purple-500/30">
        <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <i class="fas fa-user-graduate text-purple-400"></i>
          科学先驱
        </h3>
        
        <div class="grid grid-cols-2 gap-3">
          ${scientistCharacters.map(scientist => {
            const isUnlocked = this.unlockedScientists.includes(scientist.id);
            return `
              <div class="relative group ${!isUnlocked ? 'opacity-50' : ''}">
                <div class="glass-panel rounded-xl p-4 text-center hover:bg-gray-750 transition cursor-pointer ${!isUnlocked ? 'grayscale' : ''}"
                     onclick="dimensionApp.storyManager.showScientist('${scientist.id}')">
                  <div class="text-3xl mb-2">${scientist.image}</div>
                  <div class="text-xs text-white font-semibold truncate">${scientist.name}</div>
                  <div class="text-xs text-gray-400 truncate">${scientist.specialty}</div>
                  ${!isUnlocked && `
                    <div class="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl">
                      <i class="fas fa-lock text-white text-xl"></i>
                    </div>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }
  
  // 显示向导对话
  showGuideDialogue() {
    const dialogueBox = document.getElementById('guideDialogueBox');
    const dialogueText = document.getElementById('guideDialogueText');
    
    if (!dialogueBox || !dialogueText) return;
    
    const dimension = this.currentDimension;
    const dialogue = guideCharacter.guidance[dimension] || "继续探索，你会理解更多。";
    
    dialogueText.textContent = dialogue;
    dialogueBox.classList.remove('hidden');
    
    this.soundManager.playClick();
  }
  
  // 显示向导背景故事
  showBackstory() {
    this.showModal(
      guideCharacter.name,
      `
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="text-6xl">${guideCharacter.image}</div>
            <div>
              <div class="text-lg font-bold text-cyan-400">${guideCharacter.nameEn}</div>
              <div class="text-sm text-gray-400">${guideCharacter.title}</div>
              <div class="text-xs text-aurora">${guideCharacter.affiliation}</div>
            </div>
          </div>
          
          <div class="prose prose-invert max-w-none">
            <h4 class="text-white mb-2">外貌特征</h4>
            <p class="text-gray-300">${guideCharacter.appearance}</p>
            
            <h4 class="text-white mb-2 mt-4">性格特点</h4>
            <p class="text-gray-300">${guideCharacter.personality}</p>
            
            <h4 class="text-white mb-2 mt-4">背景故事</h4>
            <p class="text-gray-300 whitespace-pre-line">${guideCharacter.backstory}</p>
            
            <h4 class="text-white mb-2 mt-4">名言</h4>
            <ul class="text-gray-300 space-y-1">
              ${guideCharacter.quotes.map(quote => `<li class="italic">"${quote}"</li>`).join('')}
            </ul>
          </div>
        </div>
      `
    );
  }
  
  // 显示科学家详情
  showScientist(scientistId) {
    const scientist = scientistCharacters.find(s => s.id === scientistId);
    if (!scientist) return;
    
    if (!this.unlockedScientists.includes(scientistId)) {
      alert(`该科学家尚未解锁。完成相关维度探索以解锁。`);
      return;
    }
    
    this.showModal(
      scientist.name,
      `
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="text-6xl">${scientist.image}</div>
            <div>
              <div class="text-lg font-bold text-cyan-400">${scientist.nameEn}</div>
              <div class="text-sm text-gray-400">${scientist.specialty}</div>
              <div class="text-xs text-aurora">${scientist.affiliation}</div>
            </div>
          </div>
          
          <div class="prose prose-invert max-w-none">
            <h4 class="text-white mb-2">外貌特征</h4>
            <p class="text-gray-300">${scientist.appearance}</p>
            
            <h4 class="text-white mb-2 mt-4">性格特点</h4>
            <p class="text-gray-300">${scientist.personality}</p>
            
            <h4 class="text-white mb-2 mt-4">背景故事</h4>
            <p class="text-gray-300 whitespace-pre-line">${scientist.backstory}</p>
            
            <h4 class="text-white mb-2 mt-4">名言</h4>
            <ul class="text-gray-300 space-y-1">
              ${scientist.quotes.map(quote => `<li class="italic">"${quote}"</li>`).join('')}
            </ul>
          </div>
        </div>
      `
    );
  }
  
  // 显示模态框
  showModal(title, content) {
    const modal = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalTitle || !modalBody) return;
    
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modal.classList.remove('hidden');
    
    this.soundManager.playClick();
  }
  
  // 更新当前维度
  updateDimension(dim) {
    this.currentDimension = dim;
    this.updateGuideDialogue();
    this.checkScientistUnlock(dim);
  }
  
  // 更新向导对话
  updateGuideDialogue() {
    const dialogueBox = document.getElementById('guideDialogueBox');
    const dialogueText = document.getElementById('guideDialogueText');
    
    if (!dialogueBox || !dialogueText) return;
    
    const dialogue = guideCharacter.guidance[this.currentDimension];
    if (dialogue) {
      dialogueText.textContent = dialogue;
      dialogueBox.classList.remove('hidden');
      
      // 3 秒后自动隐藏
      setTimeout(() => {
        dialogueBox.classList.add('hidden');
      }, 5000);
    }
  }
  
  // 检查科学家解锁
  checkScientistUnlock(dim) {
    const scientistsToUnlock = {
      4: 'albert',   // 完成四维解锁爱因斯坦
      9: 'hawking',  // 完成九维解锁霍金
      10: 'witten'   // 完成十维解锁威滕
    };
    
    const scientist = scientistsToUnlock[dim];
    if (scientist && !this.unlockedScientists.includes(scientist)) {
      this.unlockedScientists.push(scientist);
      this.renderScientistsGallery();
      
      // 显示解锁通知
      const unlockedScientist = scientistCharacters.find(s => s.id === scientist);
      this.showNotification(
        `🔓 解锁科学先驱`,
        `${unlockedScientist.name} 已解锁！点击科学先驱区域查看详细信息。`
      );
      
      this.soundManager.playAchievement();
    }
  }
  
  // 显示通知
  showNotification(title, message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-gradient-to-r from-aurora to-stellar text-white px-6 py-4 rounded-lg shadow-2xl z-50 animate-bounce';
    notification.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="text-2xl">🎉</span>
        <div>
          <h4 class="font-bold">${title}</h4>
          <p class="text-sm">${message}</p>
        </div>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transition = 'opacity 0.5s';
      setTimeout(() => notification.remove(), 500);
    }, 4000);
  }
  
  // 绑定事件
  bindEvents() {
    // 监听维度切换
    document.addEventListener('dimensionChanged', (e) => {
      this.updateDimension(e.detail.dimension);
    });
    
    // 关闭模态框按钮
    const closeBtn = document.getElementById('closeModalBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        document.getElementById('modalOverlay').classList.add('hidden');
      });
    }
  }
}

// 历史时间线管理器
export class TimelineManager {
  constructor() {
    this.currentPeriod = 'all';
  }
  
  init() {
    this.renderInteractiveTimeline();
  }
  
  renderInteractiveTimeline() {
    const container = document.getElementById('interactiveTimeline');
    if (!container) return;
    
    const periods = [
      { id: 'all', name: '全部', icon: '📚' },
      { id: 'ancient', name: '古代', icon: '🏛️' },
      { id: 'scientificRevolution', name: '科学革命', icon: '🔭' },
      { id: 'classicalPhysics', name: '经典物理', icon: '⚙️' },
      { id: 'modernPhysics', name: '现代物理', icon: '⚛️' },
      { id: 'stringTheory', name: '弦理论', icon: '🎻' }
    ];
    
    container.innerHTML = `
      <div class="glass-panel rounded-2xl p-6 border border-stellar/30">
        <div class="flex gap-2 mb-6 flex-wrap">
          ${periods.map(period => `
            <button onclick="dimensionApp.timelineManager.filterPeriod('${period.id}')"
                    class="px-4 py-2 rounded-lg text-sm font-medium transition ${this.currentPeriod === period.id ? 'bg-stellar text-black' : 'bg-gray-800 text-gray-400 hover:text-white'}">
              ${period.icon} ${period.name}
            </button>
          `).join('')}
        </div>
        
        <div id="timelineContent" class="space-y-4">
          ${this.getTimelineContent()}
        </div>
      </div>
    `;
  }
  
  filterPeriod(period) {
    this.currentPeriod = period;
    this.renderInteractiveTimeline();
  }
  
  getTimelineContent() {
    if (this.currentPeriod === 'all') {
      return Object.entries(physicsHistory).map(([key, period]) => `
        <div class="mb-8">
          <h3 class="text-lg font-bold text-stellar mb-3">${period.period}</h3>
          <p class="text-gray-400 text-sm mb-4">${period.description}</p>
          
          <div class="grid md:grid-cols-2 gap-4">
            ${period.keyFigures ? period.keyFigures.map(figure => `
              <div class="glass-panel rounded-lg p-4">
                <div class="font-bold text-white mb-1">${figure.name}</div>
                <div class="text-xs text-gray-400 mb-2">${figure.years}</div>
                <div class="text-sm text-gray-300">${figure.contribution}</div>
              </div>
            `).join('') : ''}
          </div>
        </div>
      `).join('');
    } else {
      const period = physicsHistory[this.currentPeriod];
      if (!period) return '<div class="text-gray-400">暂无内容</div>';
      
      return `
        <div>
          <h3 class="text-lg font-bold text-stellar mb-3">${period.period}</h3>
          <p class="text-gray-400 text-sm mb-4">${period.description}</p>
          
          <div class="space-y-4">
            ${period.keyFigures ? period.keyFigures.map(figure => `
              <div class="glass-panel rounded-lg p-4">
                <div class="font-bold text-white mb-1">${figure.name}</div>
                <div class="text-xs text-gray-400 mb-2">${figure.years}</div>
                <div class="text-sm text-gray-300">${figure.contribution}</div>
                ${figure.dimensionRelevance ? `
                  <div class="text-xs text-aurora mt-2">
                    <i class="fas fa-cube mr-1"></i>${figure.dimensionRelevance}
                  </div>
                ` : ''}
              </div>
            `).join('') : ''}
          </div>
        </div>
      `;
    }
  }
}

// 关键概念解释器
export class ConceptExplainer {
  constructor() {
    this.currentConcept = null;
  }
  
  init() {
    this.renderConceptCards();
  }
  
  renderConceptCards() {
    const container = document.getElementById('conceptsContainer');
    if (!container) return;
    
    container.innerHTML = `
      <div class="glass-panel rounded-2xl p-6 border border-purple-500/30">
        <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <i class="fas fa-lightbulb text-yellow-400"></i>
          关键概念
        </h3>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${keyConcepts.map(concept => `
            <div class="glass-panel rounded-lg p-4 hover:bg-gray-750 transition cursor-pointer"
                 onclick="dimensionApp.conceptExplainer.showConcept('${concept.name}')">
              <div class="font-bold text-cyan-400 mb-2">${concept.name}</div>
              <div class="text-sm text-gray-400 line-clamp-2">${concept.definition}</div>
              <div class="text-xs text-aurora mt-2">
                <i class="fas fa-arrow-right mr-1"></i>点击了解详情
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  showConcept(conceptName) {
    const concept = keyConcepts.find(c => c.name === conceptName);
    if (!concept) return;
    
    const modal = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalTitle || !modalBody) return;
    
    modalTitle.textContent = concept.name;
    modalBody.innerHTML = `
      <div class="space-y-4">
        <div>
          <h4 class="text-white font-bold mb-2">定义</h4>
          <p class="text-gray-300">${concept.definition}</p>
        </div>
        
        <div>
          <h4 class="text-white font-bold mb-2">类比理解</h4>
          <p class="text-gray-300 italic">${concept.analogy}</p>
        </div>
        
        <div>
          <h4 class="text-white font-bold mb-2">历史背景</h4>
          <p class="text-gray-300">${concept.history}</p>
        </div>
        
        <div>
          <h4 class="text-white font-bold mb-2">与维度的关系</h4>
          <p class="text-gray-300">${concept.relevance}</p>
        </div>
      </div>
    `;
    
    modal.classList.remove('hidden');
  }
}
