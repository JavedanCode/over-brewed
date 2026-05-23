export const GAME_STATES = {
  MENU: "menu",
  PLAYING: "playing",
  PAUSED: "paused",
};

let currentGameState = GAME_STATES.MENU;

export function getGameState() {
  return currentGameState;
}

export function setGameState(newState) {
  currentGameState = newState;
}
