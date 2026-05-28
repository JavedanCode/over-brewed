import sounds from "./sound.js";
import music from "./music.js";
import settings from "../data/settings.js";
import { on } from "../core/gameEvents.js";

let activeMusic = null;

export function playSound(name) {
  const baseSound = sounds[name];

  if (!baseSound) return;

  const sound = baseSound.cloneNode();

  sound.volume = settings.sfxVolume;

  sound.play().catch(() => {});
}

let activeMusicName = null;

export function playMusic(name) {
  if (activeMusicName === name && activeMusicName !== "menu") return;
  const newMusic = music[name];

  if (!newMusic) return;

  // stop previous
  if (activeMusic) {
    activeMusic.pause();
    activeMusic.currentTime = 0;
  }

  activeMusic = newMusic;
  activeMusicName = name;

  activeMusic.volume = settings.musicVolume;
  activeMusic.loop = true;

  activeMusic.play().catch(() => {});
}

export function stopMusic() {
  if (!activeMusic) return;

  activeMusic.pause();
  activeMusic.currentTime = 0;

  activeMusic = null;
  activeMusicName = null;

  currentPhase = "low";
}

let currentPhase = "low";

on("heatUp", (heat) => {
  if (heat >= 2 && currentPhase === "low") {
    currentPhase = "high";

    playMusic("high");
  }
});

export function isGameplayMusicPlaying() {
  return activeMusicName === "low" || activeMusicName === "high";
}

export function resetGameplayMusic() {
  currentPhase = "low";
}

export function updateMusicVolume() {
  if (!activeMusic) return;

  activeMusic.volume = settings.musicVolume;
}
