import * as Tone from 'tone';

class AudioManager {
  private static instance: AudioManager;
  private initialized: boolean = false;
  private masterVolume: number = -20; // dB
  private enabled: boolean = true;

  private constructor() {
    // Check if user has interacted with the page
    if (typeof window !== 'undefined') {
      this.enabled = localStorage.getItem('audioEnabled') !== 'false';
    }
  }

  static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  async initialize(): Promise<void> {
    if (this.initialized || !this.enabled) return;

    try {
      await Tone.start();
      Tone.Destination.volume.value = this.masterVolume;
      this.initialized = true;
    } catch (error) {
      console.log('Audio initialization deferred until user interaction');
    }
  }

  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    if (typeof window !== 'undefined') {
      localStorage.setItem('audioEnabled', enabled.toString());
    }
    
    if (!enabled) {
      Tone.Destination.mute = true;
    } else {
      Tone.Destination.mute = false;
    }
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  setMasterVolume(volume: number): void {
    this.masterVolume = volume;
    Tone.Destination.volume.value = volume;
  }

  // UI interaction sounds
  async playHoverSound(frequency: number = 800, duration: string = '32n'): Promise<void> {
    if (!this.enabled) return;
    await this.initialize();

    const synth = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0,
        release: 0.1
      }
    }).toDestination();

    synth.volume.value = -30;
    synth.triggerAttackRelease(frequency, duration);
    
    setTimeout(() => synth.dispose(), 1000);
  }

  // Click sound
  async playClickSound(): Promise<void> {
    if (!this.enabled) return;
    await this.initialize();

    const synth = new Tone.Synth({
      oscillator: { type: 'triangle' },
      envelope: {
        attack: 0.001,
        decay: 0.05,
        sustain: 0,
        release: 0.05
      }
    }).toDestination();

    synth.volume.value = -25;
    synth.triggerAttackRelease('C6', '64n');
    
    setTimeout(() => synth.dispose(), 500);
  }

  // Ambient background sound
  async startAmbientSound(): Promise<Tone.Synth | null> {
    if (!this.enabled) return null;
    await this.initialize();

    const synth = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: {
        attack: 2,
        decay: 1,
        sustain: 0.5,
        release: 2
      }
    }).toDestination();

    const reverb = new Tone.Reverb({
      decay: 10,
      wet: 0.8
    }).toDestination();

    synth.connect(reverb);
    synth.volume.value = -40;

    // Play a very low, barely audible drone
    synth.triggerAttack('C1');

    return synth;
  }

  stopAmbientSound(synth: Tone.Synth | null): void {
    if (synth) {
      synth.triggerRelease('+1');
      setTimeout(() => synth.dispose(), 3000);
    }
  }
}

export default AudioManager.getInstance();