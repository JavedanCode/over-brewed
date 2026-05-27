import gameTitleImg from "../assets/logo.png";
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

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

  gradient.addColorStop(0, "#241235");
  gradient.addColorStop(1, "#0d0814");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // TITLE
  ctx.shadowColor = "#b46cff";
  ctx.shadowBlur = 40;
  ctx.shadowOffsetY = 10;

  const titleWidth = 600;
  const titleHeight = 200;

  const titleX = canvas.width / 2 - titleWidth / 2;
  const titleY = 150;

  const floatY = Math.sin(Date.now() * 0.002) * 10;

  ctx.drawImage(gameTitle, titleX, titleY + floatY, titleWidth, titleHeight);

  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

  // START BUTTON

  drawButton(ctx, mouseX, mouseY, getStartButton(canvas), "Start Game");

  // SETTINGS BUTTON

  drawButton(ctx, mouseX, mouseY, getSettingsButton(canvas), "Settings");

  // HOW TO PLAY BUTTON

  drawButton(ctx, mouseX, mouseY, getHowToPlayButton(canvas), "How To Play");
}
