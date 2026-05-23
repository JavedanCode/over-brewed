import "../styles/styles.css";
import Canvas from "./canvas.js";
import draw from "../rendering/drawGame.js";
import update from "../logic/update.js";
import settings from "../data/settings.js";
import { clearJustPressed } from "../logic/input.js";
import {
  GAME_STATES,
  getGameState,
  getHowToPlayReturnState,
  getSettingsReturnState,
  openHowToPlay,
  openSettings,
  setGameState,
} from "./gameState.js";
import {
  drawMenu,
  getStartButton,
  getSettingsButton,
  getHowToPlayButton,
} from "../rendering/menuRenderer.js";
import {
  drawSettings,
  getBackButton,
  getMusicSlider,
  getSfxSlider,
} from "../rendering/settingsRenderer.js";
import {
  drawHowToPlay,
  getHowToPlayBackButton,
} from "../rendering/howToPlayRenderer.js";

const { canvas, ctx } = Canvas();

let mouseX = 0;
let mouseY = 0;

//MOUSE MOVEMENT LISTENER
canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();

  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

// MOUSE POSITION HELPER
function pointInRect(x, y, rect) {
  return (
    x >= rect.x &&
    x <= rect.x + rect.width &&
    y >= rect.y &&
    y <= rect.y + rect.height
  );
}

// MENU HANDLER
function handleMenuClick(mouseX, mouseY) {
  const startButton = getStartButton(canvas);

  if (pointInRect(mouseX, mouseY, startButton)) {
    setGameState(GAME_STATES.PLAYING);
    return;
  }

  const settingsButton = getSettingsButton(canvas);

  if (pointInRect(mouseX, mouseY, settingsButton)) {
    openSettings(GAME_STATES.MENU);
  }

  const howToPlayButton = getHowToPlayButton(canvas);

  if (pointInRect(mouseX, mouseY, howToPlayButton)) {
    openHowToPlay(GAME_STATES.MENU);
  }
}
// SETTINGS HANDLER
function handleSettingsClick(mouseX, mouseY) {
  const backButton = getBackButton(canvas);

  if (pointInRect(mouseX, mouseY, backButton)) {
    setGameState(getSettingsReturnState());
  }

  const musicSlider = getMusicSlider(canvas);

  if (pointInRect(mouseX, mouseY, musicSlider)) {
    settings.musicVolume = (mouseX - musicSlider.x) / musicSlider.width;

    settings.musicVolume = Math.max(0, Math.min(1, settings.musicVolume));
  }
  const sfxSlider = getSfxSlider(canvas);

  if (pointInRect(mouseX, mouseY, sfxSlider)) {
    settings.sfxVolume = (mouseX - sfxSlider.x) / sfxSlider.width;

    settings.sfxVolume = Math.max(0, Math.min(1, settings.sfxVolume));
  }
}

// HOW TO PLAY HANDLER
function handleHowToPlayClick(mouseX, mouseY) {
  const backButton = getHowToPlayBackButton(canvas);

  if (pointInRect(mouseX, mouseY, backButton)) {
    setGameState(getHowToPlayReturnState());
  }
}

canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const state = getGameState();

  switch (state) {
    case GAME_STATES.MENU:
      handleMenuClick(mouseX, mouseY);
      break;

    case GAME_STATES.SETTINGS:
      handleSettingsClick(mouseX, mouseY);
      break;

    case GAME_STATES.HOW_TO_PLAY:
      handleHowToPlayClick(mouseX, mouseY);
      break;
  }
});

let previousFrame = Date.now();
function loop() {
  const now = Date.now();
  const timeStep = now - previousFrame; // Time in milliseconds since last frame
  previousFrame = now;

  const state = getGameState();

  switch (state) {
    case GAME_STATES.MENU:
      drawMenu(ctx, canvas, mouseX, mouseY);
      break;

    case GAME_STATES.PLAYING:
      update(timeStep);
      draw(ctx, canvas);
      break;

    case GAME_STATES.SETTINGS:
      drawSettings(ctx, canvas, mouseX, mouseY);
      break;

    case GAME_STATES.HOW_TO_PLAY:
      drawHowToPlay(ctx, canvas, mouseX, mouseY);
      break;
  }

  clearJustPressed();

  requestAnimationFrame(loop);
}

loop();
