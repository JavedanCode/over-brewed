import { drawButton } from "../utils/uiHelper.js";

export function getResumeButton(canvas) {
  return {
    x: canvas.width / 2 - 120,
    y: 220,
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

  ctx.fillStyle = "#1f1729";
  ctx.fillRect(canvas.width / 2 - 220, 100, 440, 520);

  // Title

  ctx.fillStyle = "white";
  ctx.font = "64px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.fillText("Paused", canvas.width / 2, 160);

  // Buttons

  drawButton(ctx, mouseX, mouseY, getResumeButton(canvas), "Resume");

  drawButton(ctx, mouseX, mouseY, getPauseSettingsButton(canvas), "Settings");

  drawButton(ctx, mouseX, mouseY, getPauseHowToButton(canvas), "How To Play");

  drawButton(ctx, mouseX, mouseY, getQuitButton(canvas), "Quit To Menu");
}
