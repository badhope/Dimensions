// 音效系统 - 使用 Web Audio API
export class SoundManager {
  constructor() {
    this.enabled = true;
    this.volume = 0.3;
    this.audioContext = null;
    this.sounds = new Map();
    
    this.init();
  }
  
  init() {
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn('Web Audio API 不支持:', e);
      this.enabled = false;
    }
  }
  
  // 生成合成音效
  playTone(frequency, type = 'sine', duration = 0.1, volume = 1) {
    if (!this.enabled || !this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = type;
    
    gainNode.gain.setValueAtTime(volume * this.volume, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
    
    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration);
  }
  
  // UI 音效
  playClick() {
    this.playTone(800, 'sine', 0.05, 0.3);
  }
  
  playHover() {
    this.playTone(1200, 'sine', 0.03, 0.2);
  }
  
  playSuccess() {
    // 播放和弦
    setTimeout(() => this.playTone(523.25, 'sine', 0.2, 0.4), 0);    // C5
    setTimeout(() => this.playTone(659.25, 'sine', 0.2, 0.4), 50);   // E5
    setTimeout(() => this.playTone(783.99, 'sine', 0.2, 0.4), 100);  // G5
  }
  
  playError() {
    this.playTone(150, 'sawtooth', 0.3, 0.3);
  }
  
  playAchievement() {
    // 成就解锁音效 - 上升音阶
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 'triangle', 0.3, 0.4), i * 100);
    });
  }
  
  // 游戏音效
  playCorrectMatch() {
    this.playTone(880, 'sine', 0.1, 0.4);
    setTimeout(() => this.playTone(1100, 'sine', 0.1, 0.4), 100);
  }
  
  playWrongMatch() {
    this.playTone(200, 'sawtooth', 0.2, 0.3);
  }
  
  playLevelComplete() {
    // 胜利音阶
    [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 'triangle', 0.2, 0.3), i * 80);
    });
  }
  
  playGameOver() {
    // 下降音阶
    [1046.50, 783.99, 523.25, 392.00, 261.63].forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 'sawtooth', 0.3, 0.3), i * 150);
    });
  }
  
  playDimensionWarp() {
    // 维度跃迁音效 - 滑音效果
    if (!this.enabled || !this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.5);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3 * this.volume, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
    
    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.5);
  }
  
  playCardFlip() {
    this.playTone(600, 'sine', 0.08, 0.25);
  }
  
  playResourceCollect() {
    this.playTone(1000, 'sine', 0.1, 0.3);
    setTimeout(() => this.playTone(1500, 'sine', 0.1, 0.3), 80);
  }
  
  playBuildComplete() {
    this.playSuccess();
  }
  
  // 音量控制
  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
  }
  
  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }
  
  // 恢复 AudioContext（浏览器可能需要用户交互后才能启动）
  resume() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
  }
}

// 单例模式
let soundManager = null;

export function getSoundManager() {
  if (!soundManager) {
    soundManager = new SoundManager();
  }
  return soundManager;
}
