export const GAME_STATES = {
  MENU: "menu",
  PLAYING: "playing",
  PAUSED: "paused",
  HOW_TO_PLAY: "how_to_play",
  SETTINGS: "settings",
  RECIPES: "recipes",
  GAME_OVER: "game_over",
};

let currentGameState = GAME_STATES.PLAYING;

let settingsReturnState = GAME_STATES.MENU;

let howToPlayReturnState = GAME_STATES.MENU;

// SETTINGS
export function openSettings(returnState) {
  settingsReturnState = returnState;
  currentGameState = GAME_STATES.SETTINGS;
}

export function getSettingsReturnState() {
  return settingsReturnState;
}
// HOW TO PLAY
export function openHowToPlay(returnState) {
  howToPlayReturnState = returnState;
  currentGameState = GAME_STATES.HOW_TO_PLAY;
}

export function getHowToPlayReturnState() {
  return howToPlayReturnState;
}

// GET/SET

export function getGameState() {
  return currentGameState;
}

export function setGameState(newState) {
  currentGameState = newState;
}
