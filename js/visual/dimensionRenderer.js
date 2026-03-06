// 维度可视化渲染器
export class DimensionVisualizer {
  constructor() {
    this.visualMode = 'default';
  }

  // 获取维度视觉效果的 HTML
  getDimensionVisualHTML(dim) {
    if (dim === 0) return '<div class="dim-0-point"></div>';
    if (dim === 1) return '<div class="dim-1-line"></div>';
    if (dim === 2) return '<div class="dim-2-plane"></div>';
    if (dim === 3) {
      return `<div class="dim-3-cube">
        <div class="face front">前</div>
        <div class="face back">后</div>
        <div class="face right">右</div>
        <div class="face left">左</div>
        <div class="face top">上</div>
        <div class="face bottom">下</div>
      </div>`;
    }
    if (dim === 4) return `<div class="dim-4-spacetime">
      <div class="time-ring"></div>
      <div class="time-ring"></div>
      <div class="time-ring"></div>
    </div>`;
    if (dim === 5) return `<div class="dim-5-timeline">
      <div class="main-line"></div>
      <div class="branch-line"></div>
      <div class="branch-line"></div>
      <div class="branch-line"></div>
      <div class="branch-line"></div>
    </div>`;
    if (dim === 6) return `<div class="dim-6-fold">
      <div class="fold-circle"></div>
      <div class="fold-circle"></div>
      <div class="fold-circle"></div>
    </div>`;
    if (dim >= 7 && dim <= 10) {
      return `<div class="dim-high-orbit">
        <div class="orbit-dot"></div>
        <div class="orbit-dot"></div>
        <div class="orbit-dot"></div>
        <div class="orbit-dot"></div>
        <div class="orbit-dot"></div>
        <div class="orbit-dot"></div>
      </div>`;
    }
    return `<div class="dim-11-string">
      <div class="vibrate-ring"></div>
      <div class="vibrate-ring"></div>
      <div class="vibrate-ring"></div>
      <div class="vibrate-ring"></div>
      <div class="string-core"></div>
    </div>`;
  }

  // 获取颜色变量
  getColor(colorName) {
    const colors = {
      stellar: '#00d4ff',
      aurora: '#7b2dff',
      nova: '#ff6b35',
      quasar: '#ffd700',
      matrix: '#00ff41'
    };
    return colors[colorName] || '#00d4ff';
  }

  // 生成维度卡片 HTML
  generateDimensionCard(d) {
    const colorVar = this.getColor(d.color);
    return `
      <div class="reveal-item" id="dim-${d.dim}">
        <div class="glass-panel rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.01]">
          <div class="p-6 md:p-8">
            <div class="flex flex-col lg:flex-row gap-8">
              <div class="flex-shrink-0 flex flex-col items-center">
                <div class="dim-visual mb-4">${this.getDimensionVisualHTML(d.dim)}</div>
                <div class="text-center">
                  <div class="font-display text-5xl md:text-6xl font-black" style="color: ${colorVar}; text-shadow: 0 0 30px ${colorVar}40;">${d.dim}</div>
                  <div class="text-xs text-gray-500 uppercase tracking-widest mt-1">Dimension</div>
                </div>
              </div>
              <div class="flex-grow">
                <div class="flex items-center gap-3 mb-4">
                  <span class="text-3xl">${d.emoji}</span>
                  <div>
                    <h3 class="font-display text-2xl md:text-3xl font-bold text-white">${d.name}</h3>
                    <p class="text-sm" style="color: ${colorVar};">${d.subtitle}</p>
                  </div>
                </div>
                <p class="text-gray-300 leading-relaxed mb-6">${d.description}</p>
                <div class="p-4 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border-l-2 mb-4" style="border-color: ${colorVar};">
                  <div class="flex items-start gap-3">
                    <i class="fas fa-lightbulb mt-1" style="color: ${colorVar};"></i>
                    <div>
                      <h4 class="font-semibold text-white text-sm mb-1">形象比喻</h4>
                      <p class="text-gray-400 text-sm leading-relaxed">${d.metaphor}</p>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mb-4">
                  ${d.example.split('、').map(ex => 
                    `<span class="px-3 py-1 rounded-full text-xs bg-white/5 text-gray-400 border border-white/10">${ex}</span>`
                  ).join('')}
                </div>
                <div class="p-4 rounded-2xl bg-gradient-to-br from-amber-500/5 to-transparent border border-amber-500/20">
                  <div class="flex items-start gap-3">
                    <i class="fas fa-star text-amber-400 mt-1"></i>
                    <div>
                      <h4 class="font-semibold text-amber-300 text-sm mb-1">趣味事实</h4>
                      <p class="text-gray-400 text-sm">${d.funFact}</p>
                    </div>
                  </div>
                </div>
                <button onclick="window.dimensionUI.toggleAnalysis(${d.dim})" class="mt-4 text-sm flex items-center gap-2 hover:gap-3 transition-all" style="color: ${colorVar};">
                  <span>查看深度分析</span><i class="fas fa-arrow-right"></i>
                </button>
                <div id="analysis-${d.dim}" class="hidden mt-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <h4 class="font-semibold text-white mb-2 flex items-center gap-2">
                    <i class="fas fa-microscope text-sm" style="color: ${colorVar};"></i>深度分析
                  </h4>
                  <p class="text-gray-400 text-sm leading-relaxed">${d.analysis}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 渲染所有维度卡片
  renderDimensionCards(containerId, dimensions) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = dimensions.map(d => this.generateDimensionCard(d)).join('');
  }

  // 切换视觉模式
  toggleVisualMode() {
    this.visualMode = this.visualMode === 'default' ? 'enhanced' : 'default';
    document.body.style.filter = this.visualMode === 'enhanced' 
      ? 'saturate(1.3) contrast(1.1)' 
      : '';
    return this.visualMode;
  }
}
