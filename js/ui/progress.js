// 用户进度追踪和成就系统
import { achievements } from '../data/advancedQuiz.js';

export class ProgressTracker {
  constructor() {
    this.storageKey = 'dimensionExplorerProgress';
    this.defaultState = {
      // 基本统计
      quizzesCompleted: 0,
      perfectQuizzes: 0,
      dimensionsVisited: new Set(),
      theoriesRead: new Set(),
      physicistsLearned: new Set(),
      applicationsExplored: new Set(),
      
      // 游戏统计
      gameHighScore: 0,
      gamesPlayed: 0,
      
      // 时间追踪
      sessionStartTime: Date.now(),
      totalStudyTime: 0,
      
      // 成就
      unlockedAchievements: [],
      lastAchievementCheck: Date.now(),
      
      // 收藏
      favorites: {
        dimensions: [],
        theories: [],
        physicists: [],
        applications: []
      },
      
      // 设置
      settings: {
        soundEnabled: true,
        animationsEnabled: true,
        difficulty: 'intermediate'
      }
    };
    
    this.state = this.load();
    this.listeners = new Map();
    
    // 定期检查成就
    this.startAchievementChecker();
    
    // 页面关闭时保存
    window.addEventListener('beforeunload', () => this.save());
    
    // 定期自动保存（每 30 秒）
    this.autoSaveInterval = setInterval(() => this.save(), 30000);
  }
  
  load() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        // 将数组转回 Set
        if (Array.isArray(parsed.dimensionsVisited)) {
          parsed.dimensionsVisited = new Set(parsed.dimensionsVisited);
        }
        if (Array.isArray(parsed.theoriesRead)) {
          parsed.theoriesRead = new Set(parsed.theoriesRead);
        }
        if (Array.isArray(parsed.physicistsLearned)) {
          parsed.physicistsLearned = new Set(parsed.physicistsLearned);
        }
        if (Array.isArray(parsed.applicationsExplored)) {
          parsed.applicationsExplored = new Set(parsed.applicationsExplored);
        }
        return { ...this.defaultState, ...parsed };
      }
    } catch (e) {
      console.error('加载进度失败:', e);
    }
    return JSON.parse(JSON.stringify(this.defaultState));
  }
  
  save() {
    try {
      const toSave = {
        ...this.state,
        // 将 Set 转回数组以便存储
        dimensionsVisited: Array.from(this.state.dimensionsVisited),
        theoriesRead: Array.from(this.state.theoriesRead),
        physicistsLearned: Array.from(this.state.physicistsLearned),
        applicationsExplored: Array.from(this.state.applicationsExplored)
      };
      localStorage.setItem(this.storageKey, JSON.stringify(toSave));
    } catch (e) {
      console.error('保存进度失败:', e);
    }
  }
  
  // 更新统计
  updateStats(key, value) {
    if (key === 'dimensionsVisited' || 
        key === 'theoriesRead' || 
        key === 'physicistsLearned' || 
        key === 'applicationsExplored') {
      this.state[key].add(value);
    } else if (key === 'gameHighScore') {
      this.state[key] = Math.max(this.state[key], value);
      this.state.gamesPlayed++;
    } else if (key === 'quizzesCompleted') {
      this.state.quizzesCompleted++;
      if (value === 'perfect') {
        this.state.perfectQuizzes++;
      }
    } else {
      this.state[key] = value;
    }
    
    this.notify('statsUpdated', { key, value });
    this.checkAchievements();
  }
  
  // 收藏管理
  toggleFavorite(type, id) {
    const favorites = this.state.favorites[type];
    const index = favorites.indexOf(id);
    
    if (index > -1) {
      favorites.splice(index, 1);
      this.notify('favoriteRemoved', { type, id });
    } else {
      favorites.push(id);
      this.notify('favoriteAdded', { type, id });
    }
    
    this.save();
  }
  
  isFavorite(type, id) {
    return this.state.favorites[type].includes(id);
  }
  
  getFavorites(type) {
    return this.state.favorites[type] || [];
  }
  
  // 成就检查
  checkAchievements() {
    const stats = this.getStats();
    
    achievements.forEach(achievement => {
      if (!this.state.unlockedAchievements.includes(achievement.id)) {
        try {
          if (achievement.condition(stats)) {
            this.unlockAchievement(achievement);
          }
        } catch (e) {
          console.error('检查成就失败:', e);
        }
      }
    });
  }
  
  unlockAchievement(achievement) {
    this.state.unlockedAchievements.push(achievement.id);
    this.notify('achievementUnlocked', achievement);
    this.save();
    
    // 显示成就通知
    this.showAchievementNotification(achievement);
  }
  
  showAchievementNotification(achievement) {
    const notification = document.createElement('div');
    notification.className = 'achievement-notification fixed top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-4 rounded-lg shadow-2xl z-50 animate-bounce';
    notification.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="text-3xl">${achievement.icon}</span>
        <div>
          <h4 class="font-bold">成就解锁!</h4>
          <p class="text-sm">${achievement.title}</p>
        </div>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transition = 'opacity 0.5s';
      setTimeout(() => notification.remove(), 500);
    }, 3000);
  }
  
  startAchievementChecker() {
    setInterval(() => this.checkAchievements(), 5000); // 每 5 秒检查一次
  }
  
  // 时间追踪
  startSession() {
    this.state.sessionStartTime = Date.now();
  }
  
  endSession() {
    const sessionTime = Math.floor((Date.now() - this.state.sessionStartTime) / 1000);
    this.state.totalStudyTime += sessionTime;
    this.save();
  }
  
  // 设置管理
  updateSetting(key, value) {
    this.state.settings[key] = value;
    this.notify('settingsUpdated', { key, value });
    this.save();
  }
  
  getSetting(key) {
    return this.state.settings[key];
  }
  
  // 获取统计
  getStats() {
    return {
      quizzesCompleted: this.state.quizzesCompleted,
      perfectQuizzes: this.state.perfectQuizzes,
      dimensionsVisited: this.state.dimensionsVisited.size,
      theoriesRead: this.state.theoriesRead.size,
      physicistsLearned: this.state.physicistsLearned.size,
      applicationsExplored: this.state.applicationsExplored.size,
      gameHighScore: this.state.gameHighScore,
      gamesPlayed: this.state.gamesPlayed,
      totalStudyTime: this.state.totalStudyTime,
      totalAchievements: this.state.unlockedAchievements.length,
      unlockedAchievements: this.state.unlockedAchievements
    };
  }
  
  // 事件监听
  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(callback);
  }
  
  notify(event, data) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(callback => callback(data));
    }
  }
  
  // 重置进度
  resetProgress() {
    if (confirm('确定要重置所有进度吗？此操作不可恢复！')) {
      this.state = JSON.parse(JSON.stringify(this.defaultState));
      this.save();
      this.notify('progressReset', {});
    }
  }
  
  // 导出进度
  exportProgress() {
    return JSON.stringify(this.state, null, 2);
  }
  
  // 导入进度
  importProgress(jsonString) {
    try {
      const imported = JSON.parse(jsonString);
      this.state = { ...this.defaultState, ...imported };
      this.save();
      this.notify('progressImported', {});
      return true;
    } catch (e) {
      console.error('导入进度失败:', e);
      return false;
    }
  }
}

// 单例模式
let progressTracker = null;

export function getProgressTracker() {
  if (!progressTracker) {
    progressTracker = new ProgressTracker();
  }
  return progressTracker;
}
