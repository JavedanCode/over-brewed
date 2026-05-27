import { drawButton } from "../utils/uiHelper.js";

export function getResumeButton(canvas) {
  return {
    x: canvas.width / 2 - 120,
    y: 230,
    width: 240,
    height: 60,
  };
}

export function getPauseSettingsButton(canvas) {
  return {
    x: canvas.width / 2 - 120,
    y: 330,
    width: 240,
    height: 60,
  };
}

export function getPauseHowToButton(canvas) {
  return {
    x: canvas.width / 2 - 120,
    y: 400,
    width: 240,
    height: 60,
  };
}

export function getQuitButton(canvas) {
  return {
    x: canvas.width / 2 - 120,
    y: 490,
    width: 240,
    height: 60,
  };
}

export function drawPauseMenu(ctx, canvas, mouseX, mouseY) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  // Dark overlay

  ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Panel

  ctx.shadowColor = "rgba(0,0,0,0.5)";
  ctx.shadowBlur = 30;
  ctx.shadowOffsetY = 10;

  ctx.fillStyle = "rgba(31, 23, 41, 0.88)";
  ctx.beginPath();
  ctx.roundRect(canvas.width / 2 - 240, 90, 480, 560, 24);

  ctx.fill();

  ctx.lineWidth = 3;
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.stroke();

  // Title

  ctx.shadowColor = "#b46cff";
  ctx.shadowBlur = 25;

  ctx.fillStyle = "white";
  ctx.font = "64px HarryPotter";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.fillText("Paused", canvas.width / 2, 160);

  ctx.shadowBlur = 0;

  ctx.strokeStyle = "rgba(255,255,255,0.15)";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - 160, 200);
  ctx.lineTo(canvas.width / 2 + 160, 200);
  ctx.stroke();

  // Buttons

  drawButton(ctx, mouseX, mouseY, getResumeButton(canvas), "Resume");

  drawButton(ctx, mouseX, mouseY, getPauseSettingsButton(canvas), "Settings");

  drawButton(ctx, mouseX, mouseY, getPauseHowToButton(canvas), "How To Play");

  drawButton(ctx, mouseX, mouseY, getQuitButton(canvas), "Quit To Menu");
}
