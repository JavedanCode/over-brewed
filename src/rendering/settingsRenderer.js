import settings from "../data/settings.js";
import { drawButton } from "../utils/uiHelper.js";

export function getMusicSlider(canvas) {
  return {
    x: canvas.width / 2 - 250,
    y: 320,
    width: 500,
    height: 20,
  };
}

export function getSfxSlider(canvas) {
  return {
    x: canvas.width / 2 - 250,
    y: 470,
    width: 500,
    height: 20,
  };
}

function drawSlider(ctx, x, y, width, value, label) {
  // Label
  ctx.fillStyle = "white";
  ctx.font = "40px serif";
  ctx.textAlign = "left";

  ctx.fillText(label, x, y - 20);

  // Background bar
  ctx.fillStyle = "#2c2138";
  ctx.fillRect(x, y, width, 20);

  // Filled section
  ctx.fillStyle = "#8d63cc";
  ctx.fillRect(x, y, width * value, 20);

  // Knob
  ctx.fillStyle = "white";

  ctx.beginPath();
  ctx.arc(x + width * value, y + 10, 14, 0, Math.PI * 2);
  ctx.fill();
}

export function getBackButton(canvas) {
  return {
    x: canvas.width / 2 - 50,
    y: canvas.height / 2 + 260,
    width: 100,
    height: 50,
  };
}

export function drawSettings(ctx, canvas, mouseX, mouseY) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#120d18";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const panelX = canvas.width / 2 - 350;
  const panelY = 80;
  const panelWidth = 700;
  const panelHeight = 610;

  ctx.shadowColor = "rgba(0,0,0,0.5)";
  ctx.shadowBlur = 30;
  ctx.shadowOffsetY = 10;

  ctx.fillStyle = "rgba(31, 23, 41, 0.9)";

  ctx.beginPath();
  ctx.roundRect(panelX, panelY, panelWidth, panelHeight, 28);
  ctx.fill();

  ctx.shadowBlur = 0;

  // Title
  ctx.fillStyle = "#f3e6ff";

  ctx.shadowColor = "#a56eff";
  ctx.shadowBlur = 20;

  ctx.font = "76px HarryPotter";

  ctx.fillText("Settings", canvas.width / 2, 140);

  // Sliders
  const musicSlider = getMusicSlider(canvas);

  drawSlider(
    ctx,
    musicSlider.x,
    musicSlider.y,
    musicSlider.width,
    settings.musicVolume,
    "Music Volume"
  );

  const sfxSlider = getSfxSlider(canvas);

  drawSlider(
    ctx,
    sfxSlider.x,
    sfxSlider.y,
    sfxSlider.width,
    settings.sfxVolume,
    "SFX Volume"
  );

  // Back Button
  drawButton(ctx, mouseX, mouseY, getBackButton(canvas), "Back");
}
