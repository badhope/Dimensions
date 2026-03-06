// 测验管理器
export class QuizManager {
  constructor(quizQuestions, onCompleteCallback) {
    this.questions = quizQuestions;
    this.onCompleteCallback = onCompleteCallback;
    this.currentIndex = 0;
    this.score = 0;
  }

  start() {
    this.currentIndex = 0;
    this.score = 0;
    this.showQuestion();
    this.openQuizModal();
  }

  openQuizModal() {
    const modal = document.getElementById('quizModal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  closeQuiz() {
    const modal = document.getElementById('quizModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  showQuestion() {
    const content = document.getElementById('quizContent');
    const q = this.questions[this.currentIndex];
    
    if (!content || !q) return;

    content.innerHTML = `
      <div class="mb-6">
        <div class="text-sm text-gray-500 mb-2">问题 ${this.currentIndex + 1} / ${this.questions.length}</div>
        <p class="text-lg text-white font-medium">${q.question}</p>
      </div>
      <div class="space-y-3">
        ${q.options.map((opt, i) => `
          <button onclick="window.dimensionApp.selectAnswer(${i})" 
            class="w-full text-left p-4 rounded-xl border border-white/10 hover:border-stellar/50 hover:bg-stellar/5 transition-all text-gray-300">
            <span class="inline-block w-6 h-6 rounded-full bg-white/10 text-center text-sm mr-3">
              ${String.fromCharCode(65 + i)}
            </span>
            ${opt}
          </button>
        `).join('')}
      </div>
    `;
  }

  selectAnswer(index) {
    const q = this.questions[this.currentIndex];
    const isCorrect = index === q.correct;
    
    if (isCorrect) {
      this.score++;
    }

    this.showFeedback(isCorrect, q.explanation);
  }

  showFeedback(isCorrect, explanation) {
    const content = document.getElementById('quizContent');
    const isLastQuestion = this.currentIndex >= this.questions.length - 1;
    
    if (!content) return;

    content.innerHTML = `
      <div class="text-center py-8">
        <div class="text-5xl mb-4">${isCorrect ? '✅' : '❌'}</div>
        <p class="text-lg text-white mb-2">${isCorrect ? '回答正确！' : '回答错误'}</p>
        <p class="text-gray-400 text-sm mb-6">${explanation}</p>
        <button onclick="window.dimensionApp.nextQuestion()" 
          class="btn-cosmic bg-gradient-to-r from-stellar to-aurora text-white">
          ${isLastQuestion ? '查看结果' : '下一题'}
        </button>
      </div>
    `;
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.showQuestion();
    } else {
      this.showResult();
    }
  }

  showResult() {
    const content = document.getElementById('quizContent');
    const percentage = Math.round((this.score / this.questions.length) * 100);
    
    if (!content) return;

    let message = '';
    let emoji = '';
    if (percentage >= 80) {
      emoji = '🏆';
      message = '太棒了！你对维度有深入的理解！';
    } else if (percentage >= 60) {
      emoji = '👍';
      message = '不错！继续探索维度的奥秘吧！';
    } else {
      emoji = '📚';
      message = '别灰心，重新阅读内容后再试试！';
    }

    content.innerHTML = `
      <div class="text-center py-8">
        <div class="text-6xl mb-4">${emoji}</div>
        <p class="text-2xl text-white font-bold mb-2">测验完成！</p>
        <p class="text-4xl font-display font-bold text-stellar mb-4">${this.score} / ${this.questions.length}</p>
        <p class="text-gray-400 mb-6">${message}</p>
        <button onclick="window.dimensionApp.closeQuiz()" 
          class="btn-cosmic glass-panel text-stellar">
          关闭
        </button>
      </div>
    `;
  }
}

// 快速导航管理器
export class QuickNavManager {
  constructor(dimensions) {
    this.dimensions = dimensions;
  }

  open() {
    const content = document.getElementById('quickNavContent');
    const modal = document.getElementById('quickNavModal');
    
    if (!content || !modal) return;

    content.innerHTML = this.dimensions.map(d => `
      <button onclick="window.dimensionApp.scrollToDim(${d.dim}); window.dimensionApp.closeQuickNav();" 
        class="p-3 rounded-xl border border-white/10 hover:border-stellar/50 hover:bg-stellar/5 transition-all text-center">
        <div class="text-2xl font-display font-bold text-stellar">${d.dim}</div>
        <div class="text-xs text-gray-400">${d.name}</div>
      </button>
    `).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    const modal = document.getElementById('quickNavModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  setupHandlers() {
    const closeBtn = document.getElementById('closeQuickNavBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    const modal = document.getElementById('quickNavModal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target.id === 'quickNavModal') {
          this.close();
        }
      });
    }
  }
}

// 移动端菜单管理器
export class MobileMenuManager {
  constructor() {
    this.isOpen = false;
  }

  setup() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobileMenu = document.getElementById('closeMobileMenu');

    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => this.open());
    }

    if (closeMobileMenu && mobileMenu) {
      closeMobileMenu.addEventListener('click', () => this.close());
    }

    // 点击链接关闭菜单
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => this.close());
    });
  }

  open() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
      mobileMenu.classList.remove('hidden');
      this.isOpen = true;
    }
  }

  close() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
      mobileMenu.classList.add('hidden');
      this.isOpen = false;
    }
  }
}
