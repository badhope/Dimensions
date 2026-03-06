// 科幻百科 UI 管理器
import { sciFiCompendium, getCivilizationById, getTechnologyById, getScenarioById, getAllTechnologies, searchCompendium } from '../data/sciFiCompendium.js';
import { cosmicHistory, getEraByName, searchHistory, getTimelineStats } from '../data/cosmicHistory.js';

export class SciFiCompendiumUI {
  constructor() {
    this.activeTab = 'civilizations';
    this.selectedCivilization = null;
    this.selectedTechnology = null;
    this.selectedScenario = null;
    this.init();
  }

  init() {
    this.renderCompendiumSection();
    this.bindEvents();
  }

  renderCompendiumSection() {
    const container = document.getElementById('scifi-compendium');
    if (!container) return;

    container.innerHTML = `
      <div class="compendium-container">
        ${this.renderNavigation()}
        ${this.renderContent()}
      </div>
    `;
  }

  renderNavigation() {
    const tabs = [
      { id: 'civilizations', label: '外星文明', icon: '👽' },
      { id: 'technologies', label: '科技树', icon: '🔬' },
      { id: 'scenarios', label: '未来情景', icon: '🌍' },
      { id: 'politics', label: '星际政治', icon: '🏛️' },
      { id: 'history', label: '宇宙历史', icon: '⏳' }
    ];

    return `
      <div class="compendium-nav">
        ${tabs.map(tab => `
          <button 
            class="compendium-tab ${this.activeTab === tab.id ? 'active' : ''}"
            data-tab="${tab.id}"
          >
            <span class="tab-icon">${tab.icon}</span>
            <span class="tab-label">${tab.label}</span>
          </button>
        `).join('')}
      </div>
    `;
  }

  renderContent() {
    switch(this.activeTab) {
      case 'civilizations':
        return this.renderCivilizations();
      case 'technologies':
        return this.renderTechnologies();
      case 'scenarios':
        return this.renderScenarios();
      case 'politics':
        return this.renderPolitics();
      case 'history':
        return this.renderHistory();
      default:
        return this.renderCivilizations();
    }
  }

  renderCivilizations() {
    const { alienCivilizations } = sciFiCompendium;
    
    return `
      <div class="compendium-content">
        <div class="content-header ${alienCivilizations.color}">
          <h2>${alienCivilizations.icon} ${alienCivilizations.title}</h2>
          <p>${alienCivilizations.description}</p>
        </div>
        
        <div class="kardashev-scale-info">
          <h3>卡尔达肖夫文明等级</h3>
          <div class="kardashev-grid">
            ${Object.entries(alienCivilizations.kardashevScale).filter(([k]) => k !== 'note').map(([key, value]) => `
              <div class="kardashev-level">
                <strong>${key.toUpperCase()}</strong>
                <span>${value}</span>
              </div>
            `).join('')}
          </div>
          <p class="note">${alienCivilizations.kardashevScale.note}</p>
        </div>

        <div class="civilizations-grid">
          ${alienCivilizations.civilizations.map(civ => this.renderCivilizationCard(civ)).join('')}
        </div>

        ${this.selectedCivilization ? this.renderCivilizationDetail(this.selectedCivilization) : ''}
      </div>
    `;
  }

  renderCivilizationCard(civ) {
    return `
      <div class="civilization-card" data-civ-id="${civ.id}">
        <div class="card-header">
          <h3>${civ.name}</h3>
          <span class="classification">${civ.classification}</span>
        </div>
        <div class="card-body">
          <div class="info-row">
            <strong>母星:</strong> ${civ.homeWorld.name}
          </div>
          <div class="info-row">
            <strong>类型:</strong> ${civ.homeWorld.type}
          </div>
          <div class="info-row">
            <strong>生物基础:</strong> ${civ.biology.basis}
          </div>
        </div>
        <button class="view-detail-btn" data-civ-id="${civ.id}">查看详情</button>
      </div>
    `;
  }

  renderCivilizationDetail(civId) {
    const civ = getCivilizationById(civId);
    if (!civ) return '';

    return `
      <div class="civilization-detail modal-active">
        <div class="modal-overlay" data-action="close-detail"></div>
        <div class="modal-content">
          <button class="close-btn" data-action="close-detail">&times;</button>
          
          <div class="detail-header ${sciFiCompendium.alienCivilizations.color}">
            <h2>${civ.name}</h2>
            <p>${civ.classification}</p>
          </div>

          <div class="detail-sections">
            <section class="detail-section">
              <h3>🪐 母星环境</h3>
              <div class="info-grid">
                ${Object.entries(civ.homeWorld).filter(([k]) => k !== 'name').map(([key, value]) => `
                  <div class="info-item">
                    <strong>${this.formatKey(key)}:</strong>
                    <span>${value}</span>
                  </div>
                `).join('')}
              </div>
            </section>

            <section class="detail-section">
              <h3>🧬 生物学特征</h3>
              <div class="info-grid">
                ${Object.entries(civ.biology).map(([key, value]) => `
                  <div class="info-item">
                    <strong>${this.formatKey(key)}:</strong>
                    <span>${value}</span>
                  </div>
                `).join('')}
              </div>
            </section>

            <section class="detail-section">
              <h3>👥 社会结构</h3>
              <div class="info-grid">
                ${Object.entries(civ.society).map(([key, value]) => `
                  <div class="info-item">
                    <strong>${this.formatKey(key)}:</strong>
                    <span>${value}</span>
                  </div>
                `).join('')}
              </div>
            </section>

            <section class="detail-section">
              <h3>⚙️ 技术水平</h3>
              <div class="info-grid">
                ${Object.entries(civ.technology).map(([key, value]) => `
                  <div class="info-item">
                    <strong>${this.formatKey(key)}:</strong>
                    <span>${value}</span>
                  </div>
                `).join('')}
              </div>
            </section>

            <section class="detail-section">
              <h3>🤝 首次接触</h3>
              <div class="info-grid">
                ${Object.entries(civ.firstContact).map(([key, value]) => `
                  <div class="info-item">
                    <strong>${this.formatKey(key)}:</strong>
                    <span>${value}</span>
                  </div>
                `).join('')}
              </div>
            </section>

            ${civ.dimensionConnection ? `
              <section class="detail-section highlight">
                <h3>🌀 与维度的关联</h3>
                <p>${civ.dimensionConnection}</p>
              </section>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  renderTechnologies() {
    const { technologyTree } = sciFiCompendium;
    
    return `
      <div class="compendium-content">
        <div class="content-header ${technologyTree.color}">
          <h2>${technologyTree.icon} ${technologyTree.title}</h2>
          <p>${technologyTree.description}</p>
        </div>

        <div class="tech-eras">
          ${technologyTree.eras.map(era => `
            <div class="tech-era ${era.color}">
              <h3 class="era-title">${era.name}</h3>
              <div class="tech-grid">
                ${era.technologies.map(tech => this.renderTechCard(tech)).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        ${this.selectedTechnology ? this.renderTechnologyDetail(this.selectedTechnology) : ''}
      </div>
    `;
  }

  renderTechCard(tech) {
    return `
      <div class="tech-card" data-tech-id="${tech.id}">
        <div class="tech-card-header">
          <h4>${tech.name}</h4>
          <span class="tech-category">${tech.category}</span>
        </div>
        <p class="tech-description">${tech.description}</p>
        ${tech.timeline ? `<div class="tech-timeline">📅 ${tech.timeline}</div>` : ''}
        <button class="view-detail-btn" data-tech-id="${tech.id}">查看详情</button>
      </div>
    `;
  }

  renderTechnologyDetail(techId) {
    const tech = getTechnologyById(techId);
    if (!tech) return '';

    const dependents = Object.entries(sciFiCompendium.technologyTree.dependencies)
      .filter(([_, prereqs]) => prereqs.includes(techId))
      .map(([dep]) => dep);

    return `
      <div class="technology-detail modal-active">
        <div class="modal-overlay" data-action="close-detail"></div>
        <div class="modal-content">
          <button class="close-btn" data-action="close-detail">&times;</button>
          
          <div class="detail-header ${sciFiCompendium.technologyTree.color}">
            <h2>${tech.name}</h2>
            <p>${tech.category}</p>
          </div>

          <div class="detail-sections">
            <section class="detail-section">
              <h3>📝 描述</h3>
              <p>${tech.description}</p>
            </section>

            ${tech.specifications ? `
              <section class="detail-section">
                <h3>⚙️ 技术规格</h3>
                <div class="info-grid">
                  ${Object.entries(tech.specifications).map(([key, value]) => `
                    <div class="info-item">
                      <strong>${this.formatKey(key)}:</strong>
                      <span>${typeof value === 'object' ? JSON.stringify(value) : value}</span>
                    </div>
                  `).join('')}
                </div>
              </section>
            ` : ''}

            ${tech.applications ? `
              <section class="detail-section">
                <h3>💡 应用领域</h3>
                <ul class="tech-list">
                  ${tech.applications.map(app => `<li>${app}</li>`).join('')}
                </ul>
              </section>
            ` : ''}

            ${tech.capabilities ? `
              <section class="detail-section">
                <h3>🚀 核心能力</h3>
                <ul class="tech-list">
                  ${tech.capabilities.map(cap => `<li>${cap}</li>`).join('')}
                </ul>
              </section>
            ` : ''}

            ${tech.prerequisites ? `
              <section class="detail-section">
                <h3>🔗 前置技术</h3>
                <div class="prereq-tags">
                  ${tech.prerequisites.map(prereq => `<span class="prereq-tag">${prereq}</span>`).join('')}
                </div>
              </section>
            ` : ''}

            ${tech.challenges ? `
              <section class="detail-section">
                <h3>⚠️ 技术挑战</h3>
                <ul class="tech-list">
                  ${tech.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                </ul>
              </section>
            ` : ''}

            ${tech.ethicalIssues ? `
              <section class="detail-section warning">
                <h3>⚖️ 伦理问题</h3>
                <ul class="tech-list">
                  ${tech.ethicalIssues.map(issue => `<li>${issue}</li>`).join('')}
                </ul>
              </section>
            ` : ''}

            <section class="detail-section">
              <h3>📅 时间线</h3>
              <p>${tech.timeline || '未指定'}</p>
            </section>

            <section class="detail-section">
              <h3>🌍 社会影响</h3>
              <p>${tech.impact || '未指定'}</p>
            </section>

            ${dependents.length > 0 ? `
              <section class="detail-section">
                <h3>➡️ 依赖此项的技术</h3>
                <div class="prereq-tags">
                  ${dependents.map(dep => `<span class="prereq-tag">${getTechnologyById(dep)?.name || dep}</span>`).join('')}
                </div>
              </section>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  renderScenarios() {
    const { futureScenarios } = sciFiCompendium;
    
    return `
      <div class="compendium-content">
        <div class="content-header ${futureScenarios.color}">
          <h2>${futureScenarios.icon} ${futureScenarios.title}</h2>
          <p>${futureScenarios.description}</p>
        </div>

        <div class="scenarios-grid">
          ${futureScenarios.scenarios.map(scenario => this.renderScenarioCard(scenario)).join('')}
        </div>

        ${this.selectedScenario ? this.renderScenarioDetail(this.selectedScenario) : ''}
      </div>
    `;
  }

  renderScenarioCard(scenario) {
    const probabilityColor = parseInt(scenario.probability) >= 25 ? 'high' : 
                             parseInt(scenario.probability) >= 15 ? 'medium' : 'low';
    
    return `
      <div class="scenario-card" data-scenario-id="${scenario.id}">
        <div class="scenario-header">
          <h3>${scenario.name}</h3>
          <span class="probability probability-${probabilityColor}">${scenario.probability} 概率</span>
        </div>
        <p class="scenario-description">${scenario.description}</p>
        <div class="scenario-meta">
          <span>📅 ${scenario.timeline}</span>
        </div>
        <button class="view-detail-btn" data-scenario-id="${scenario.id}">查看详情</button>
      </div>
    `;
  }

  renderScenarioDetail(scenarioId) {
    const scenario = getScenarioById(scenarioId);
    if (!scenario) return '';

    return `
      <div class="scenario-detail modal-active">
        <div class="modal-overlay" data-action="close-detail"></div>
        <div class="modal-content">
          <button class="close-btn" data-action="close-detail">&times;</button>
          
          <div class="detail-header ${sciFiCompendium.futureScenarios.color}">
            <h2>${scenario.name}</h2>
            <p>发生概率：${scenario.probability}</p>
          </div>

          <div class="detail-sections">
            <section class="detail-section">
              <h3>📝 情景描述</h3>
              <p>${scenario.description}</p>
            </section>

            ${scenario.prerequisites ? `
              <section class="detail-section">
                <h3>🔑 前提条件</h3>
                <div class="prereq-tags">
                  ${scenario.prerequisites.map(prereq => `<span class="prereq-tag">${prereq}</span>`).join('')}
                </div>
              </section>
            ` : ''}

            ${scenario.characteristics ? `
              <section class="detail-section">
                <h3>🏛️ 社会特征</h3>
                <div class="info-grid">
                  ${Object.entries(scenario.characteristics).map(([key, value]) => `
                    <div class="info-item">
                      <strong>${this.formatKey(key)}:</strong>
                      <span>${value}</span>
                    </div>
                  `).join('')}
                </div>
              </section>
            ` : ''}

            ${scenario.challenges ? `
              <section class="detail-section">
                <h3>⚠️ 面临挑战</h3>
                <ul class="tech-list">
                  ${scenario.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                </ul>
              </section>
            ` : ''}

            ${scenario.risks ? `
              <section class="detail-section warning">
                <h3>☢️ 潜在风险</h3>
                <ul class="tech-list">
                  ${scenario.risks.map(risk => `<li>${risk}</li>`).join('')}
                </ul>
              </section>
            ` : ''}

            ${scenario.tradeoffs ? `
              <section class="detail-section">
                <h3>⚖️ 权衡取舍</h3>
                <ul class="tech-list">
                  ${scenario.tradeoffs.map(tradeoff => `<li>${tradeoff}</li>`).join('')}
                </ul>
              </section>
            ` : ''}

            ${scenario.philosophicalShifts ? `
              <section class="detail-section">
                <h3>💭 哲学转变</h3>
                <ul class="tech-list">
                  ${scenario.philosophicalShifts.map(shift => `<li>${shift}</li>`).join('')}
                </ul>
              </section>
            ` : ''}

            <section class="detail-section">
              <h3>📅 时间线</h3>
              <p>${scenario.timeline}</p>
            </section>
          </div>
        </div>
      </div>
    `;
  }

  renderPolitics() {
    const { interstellarPolitics } = sciFiCompendium;
    
    return `
      <div class="compendium-content">
        <div class="content-header ${interstellarPolitics.color}">
          <h2>${interstellarPolitics.icon} ${interstellarPolitics.title}</h2>
          <p>${interstellarPolitics.description}</p>
        </div>

        <div class="politics-systems">
          ${interstellarPolitics.systems.map(system => this.renderPoliticalSystem(system)).join('')}
        </div>

        <div class="trade-goods-section">
          <h3>🚀 星际贸易商品</h3>
          <div class="trade-goods-grid">
            ${interstellarPolitics.tradeGoods.map(good => `
              <div class="trade-good-card">
                <h4>${good.name}</h4>
                <div class="trade-good-info">
                  <div class="info-row"><strong>来源:</strong> ${good.source}</div>
                  <div class="info-row"><strong>用途:</strong> ${good.use}</div>
                  <div class="info-row"><strong>价值:</strong> ${good.value}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  renderPoliticalSystem(system) {
    return `
      <div class="political-system-card">
        <div class="system-header">
          <h3>${system.name}</h3>
          <span class="system-type">${system.type}</span>
        </div>
        <div class="system-meta">
          <span>📅 建立：${system.established}</span>
          <span>🏛️ 首都：${system.capital}</span>
        </div>
        <div class="system-details">
          <div class="detail-block">
            <h4>🏛️ 政府结构</h4>
            <div class="info-grid">
              ${Object.entries(system.government).map(([key, value]) => `
                <div class="info-item">
                  <strong>${this.formatKey(key)}:</strong>
                  <span>${value}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="detail-block">
            <h4>💰 经济体系</h4>
            <div class="info-grid">
              ${Object.entries(system.economy).map(([key, value]) => `
                <div class="info-item">
                  <strong>${this.formatKey(key)}:</strong>
                  <span>${typeof value === 'object' ? value.join(', ') : value}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="detail-block">
            <h4>⚔️ 军事力量</h4>
            <div class="info-grid">
              ${Object.entries(system.military).map(([key, value]) => `
                <div class="info-item">
                  <strong>${this.formatKey(key)}:</strong>
                  <span>${Array.isArray(value) ? value.join(', ') : value}</span>
                </div>
              `).join('')}
            </div>
          </div>

          ${system.challenges ? `
            <div class="detail-block">
              <h4>⚠️ 面临挑战</h4>
              <ul class="tech-list">
                ${system.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          ${system.conflicts ? `
            <div class="detail-block">
              <h4>💥 冲突与矛盾</h4>
              <ul class="tech-list">
                ${system.conflicts.map(conflict => `<li>${conflict}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          ${system.relations ? `
            <div class="detail-block">
              <h4>🤝 对外关系</h4>
              <div class="info-grid">
                ${Object.entries(system.relations).map(([key, value]) => `
                  <div class="info-item">
                    <strong>${this.formatKey(key)}:</strong>
                    <span>${value}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  renderHistory() {
    const { cosmicHistory } = cosmicHistory;
    
    return `
      <div class="compendium-content">
        <div class="content-header ${cosmicHistory.color}">
          <h2>${cosmicHistory.icon} ${cosmicHistory.title}</h2>
          <p>${cosmicHistory.description}</p>
        </div>

        <div class="timeline-container">
          ${cosmicHistory.eras.map((era, eraIndex) => `
            <div class="timeline-era ${era.color}">
              <h3 class="era-title">${era.name}</h3>
              <span class="era-time">${era.timeRange}</span>
              <div class="timeline-events">
                ${era.events.map((event, eventIndex) => `
                  <div class="timeline-event" data-event-index="${eraIndex}-${eventIndex}">
                    <div class="event-marker"></div>
                    <div class="event-content">
                      <div class="event-header">
                        <h4>${event.name}</h4>
                        <span class="event-time">${event.time}</span>
                      </div>
                      <p class="event-description">${event.description}</p>
                      <button class="view-detail-btn" data-event-index="${eraIndex}-${eventIndex}">展开详情</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <div class="expanded-event-detail" id="expanded-event-detail"></div>
      </div>
    `;
  }

  renderEventDetail(eraIndex, eventIndex) {
    const era = cosmicHistory.eras[eraIndex];
    const event = era.events[eventIndex];
    
    return `
      <div class="event-detail-modal modal-active">
        <div class="modal-overlay" data-action="close-event"></div>
        <div class="modal-content">
          <button class="close-btn" data-action="close-event">&times;</button>
          
          <div class="detail-header ${era.color}">
            <h2>${event.name}</h2>
            <p>${event.time} · ${era.name}</p>
          </div>

          <div class="detail-sections">
            <section class="detail-section">
              <h3>📝 事件描述</h3>
              <p>${event.description}</p>
            </section>

            <section class="detail-section">
              <h3>📖 详细信息</h3>
              <div class="detail-text">${event.details.replace(/\n/g, '<br>')}</div>
            </section>

            ${event.significance ? `
              <section class="detail-section highlight">
                <h3>⭐ 历史意义</h3>
                <p>${event.significance}</p>
              </section>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  formatKey(key) {
    const keyMap = {
      basis: '生物基础',
      structure: '身体结构',
      metabolism: '新陈代谢',
      reproduction: '繁殖方式',
      lifespan: '寿命',
      communication: '交流方式',
      structure: '社会结构',
      governance: '政治体制',
      economy: '经济体系',
      culture: '文化特征',
      religion: '宗教信仰',
      energy: '能源技术',
      computing: '计算技术',
      weapons: '武器系统',
      transportation: '交通方式',
      probability: '发生概率',
      prerequisites: '前提条件',
      characteristics: '特征',
      challenges: '挑战',
      risks: '风险',
      tradeoffs: '权衡',
      philosophicalShifts: '哲学转变',
      timeline: '时间线',
      impact: '社会影响',
      applications: '应用领域',
      capabilities: '核心能力',
      specifications: '技术规格',
      executive: '行政',
      legislative: '立法',
      judicial: '司法',
      currency: '货币',
      trade: '贸易',
      taxation: '税收',
      defense: '国防',
      doctrine: '战略',
      type: '类型',
      role: '角色',
      size: '规模',
      conflicts: '冲突',
      relations: '对外关系'
    };
    return keyMap[key] || key;
  }

  bindEvents() {
    document.addEventListener('click', (e) => {
      const target = e.target;

      // 标签切换
      if (target.closest('.compendium-tab')) {
        const tab = target.closest('.compendium-tab');
        this.activeTab = tab.dataset.tab;
        this.renderCompendiumSection();
        this.bindEvents();
        return;
      }

      // 查看文明详情
      if (target.classList.contains('view-detail-btn') && target.dataset.civId) {
        this.selectedCivilization = target.dataset.civId;
        this.renderCompendiumSection();
        this.bindEvents();
        return;
      }

      // 查看技术详情
      if (target.classList.contains('view-detail-btn') && target.dataset.techId) {
        this.selectedTechnology = target.dataset.techId;
        this.renderCompendiumSection();
        this.bindEvents();
        return;
      }

      // 查看情景详情
      if (target.classList.contains('view-detail-btn') && target.dataset.scenarioId) {
        this.selectedScenario = target.dataset.scenarioId;
        this.renderCompendiumSection();
        this.bindEvents();
        return;
      }

      // 查看历史事件详情
      if (target.classList.contains('view-detail-btn') && target.dataset.eventIndex) {
        const [eraIndex, eventIndex] = target.dataset.eventIndex.split('-').map(Number);
        const detailContainer = document.getElementById('expanded-event-detail');
        if (detailContainer) {
          detailContainer.innerHTML = this.renderEventDetail(eraIndex, eventIndex);
        }
        return;
      }

      // 关闭详情
      if (target.dataset.action === 'close-detail' || target.dataset.action === 'close-event') {
        if (target.closest('.civilization-detail')) {
          this.selectedCivilization = null;
        } else if (target.closest('.technology-detail')) {
          this.selectedTechnology = null;
        } else if (target.closest('.scenario-detail')) {
          this.selectedScenario = null;
        } else if (target.closest('.event-detail-modal')) {
          document.getElementById('expanded-event-detail').innerHTML = '';
        }
        this.renderCompendiumSection();
        this.bindEvents();
        return;
      }
    });
  }
}

// 搜索功能
export class CompendiumSearch {
  constructor() {
    this.searchResults = null;
  }

  search(query) {
    const compendiumResults = searchCompendium(query);
    const historyResults = searchHistory(query);
    
    this.searchResults = {
      civilizations: compendiumResults.civilizations,
      technologies: compendiumResults.technologies,
      scenarios: compendiumResults.scenarios,
      history: historyResults
    };

    return this.searchResults;
  }

  renderResults() {
    if (!this.searchResults) return '';

    const hasResults = Object.values(this.searchResults).some(arr => arr.length > 0);
    
    if (!hasResults) {
      return '<div class="no-results">未找到匹配的结果</div>';
    }

    return `
      <div class="search-results">
        ${this.searchResults.civilizations.length > 0 ? `
          <div class="result-section">
            <h3>👽 外星文明</h3>
            <div class="results-grid">
              ${this.searchResults.civilizations.map(civ => `
                <div class="result-card">
                  <h4>${civ.name}</h4>
                  <p>${civ.classification}</p>
                  <p>${civ.homeWorld.name}</p>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${this.searchResults.technologies.length > 0 ? `
          <div class="result-section">
            <h3>🔬 科学技术</h3>
            <div class="results-grid">
              ${this.searchResults.technologies.map(tech => `
                <div class="result-card">
                  <h4>${tech.name}</h4>
                  <p>${tech.category}</p>
                  <p>${tech.timeline}</p>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${this.searchResults.scenarios.length > 0 ? `
          <div class="result-section">
            <h3>🌍 未来情景</h3>
            <div class="results-grid">
              ${this.searchResults.scenarios.map(scenario => `
                <div class="result-card">
                  <h4>${scenario.name}</h4>
                  <p>${scenario.probability}</p>
                  <p>${scenario.timeline}</p>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${this.searchResults.history.length > 0 ? `
          <div class="result-section">
            <h3>⏳ 历史事件</h3>
            <div class="results-grid">
              ${this.searchResults.history.map(event => `
                <div class="result-card">
                  <h4>${event.name}</h4>
                  <p>${event.time} · ${event.era}</p>
                  <p>${event.description}</p>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }
}

// 初始化
export function initSciFiCompendium() {
  const ui = new SciFiCompendiumUI();
  const search = new CompendiumSearch();
  return { ui, search };
}

export default SciFiCompendiumUI;
