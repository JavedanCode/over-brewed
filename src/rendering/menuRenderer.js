import gameTitleImg from "../assets/logo.svg";
import { drawButton } from "../utils/uiHelper.js";

const gameTitle = new Image();
gameTitle.src = gameTitleImg;

export function getStartButton(canvas) {
  const width = 200;
  const height = 60;

  return {
    x: canvas.width / 2 - width / 2,
    y: canvas.height / 2 + 50,
    width,
    height,
  };
}

export function getSettingsButton(canvas) {
  const width = 200;
  const height = 60;

  return {
    x: canvas.width / 2 - width / 2,
    y: canvas.height / 2 + 130,
    width,
    height,
  };
}

export function getHowToPlayButton(canvas) {
  const width = 200;
  const height = 60;

  return {
    x: canvas.width / 2 - width / 2,
    y: canvas.height / 2 + 210,
    width,
    height,
  };
}

export function drawMenu(ctx, canvas, mouseX, mouseY) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#120d18";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // TITLE

  const titleWidth = 600;
  const titleHeight = 200;

  const titleX = canvas.width / 2 - titleWidth / 2;
  const titleY = 120;

  ctx.drawImage(gameTitle, titleX, titleY, titleWidth, titleHeight);

  // START BUTTON

  drawButton(ctx, mouseX, mouseY, getStartButton(canvas), "Start Game");

  // SETTINGS BUTTON

  drawButton(ctx, mouseX, mouseY, getSettingsButton(canvas), "Settings");

  // HOW TO PLAY BUTTON

  drawButton(ctx, mouseX, mouseY, getHowToPlayButton(canvas), "How To Play");
}
