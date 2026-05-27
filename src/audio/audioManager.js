import sounds from "./sound.js";
import music from "./music.js";
import settings from "../data/settings.js";

let activeMusic = null;

export function playSound(name) {
  const baseSound = sounds[name];

  if (!baseSound) return;

  const sound = baseSound.cloneNode();

  sound.volume = settings.sfxVolume;

  sound.play().catch(() => {});
}

export function playMusic(name) {
  const newMusic = music[name];

  if (!newMusic) return;

  // already playing
  if (activeMusic === newMusic) return;

  // stop previous
  if (activeMusic) {
    activeMusic.pause();
    activeMusic.currentTime = 0;
  }

  activeMusic = newMusic;

  activeMusic.volume = settings.musicVolume;
  activeMusic.loop = true;

  activeMusic.play().catch(() => {});
}

export function stopMusic() {
  if (!activeMusic) return;

  activeMusic.pause();
  activeMusic.currentTime = 0;

  activeMusic = null;
}

export function updateMusicVolume() {
  if (!activeMusic) return;

  activeMusic.volume = settings.musicVolume;
}
