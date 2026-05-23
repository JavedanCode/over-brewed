export const GAME_STATES = {
  MENU: "menu",
  PLAYING: "playing",
  PAUSED: "paused",
  HOW_TO_PLAY: "how_to_play",
  SETTINGS: "settings",
};

let currentGameState = GAME_STATES.MENU;

let settingsReturnState = GAME_STATES.MENU;

export function getGameState() {
  return currentGameState;
}

export function setGameState(newState) {
  currentGameState = newState;
}

export function openSettings(returnState) {
  settingsReturnState = returnState;
  currentGameState = GAME_STATES.SETTINGS;
}

export function getSettingsReturnState() {
  return settingsReturnState;
}
