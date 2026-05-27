function pointInRect(x, y, rect) {
  return (
    x >= rect.x &&
    x <= rect.x + rect.width &&
    y >= rect.y &&
    y <= rect.y + rect.height
  );
}

export function drawButton(ctx, mouseX, mouseY, button, text) {
  const hovered = pointInRect(mouseX, mouseY, button);

  // Hover scale
  const scale = hovered ? 1.05 : 1;

  const width = button.width * scale;
  const height = button.height * scale;

  const x = button.x - (width - button.width) / 2;
  const y = button.y - (height - button.height) / 2;

  // Shadow
  ctx.shadowColor = "rgba(0,0,0,0.4)";
  ctx.shadowBlur = 15;
  ctx.shadowOffsetY = 5;

  // Gradient
  const gradient = ctx.createLinearGradient(x, y, x, y + height);

  if (hovered) {
    gradient.addColorStop(0, "#9d71e8");
    gradient.addColorStop(1, "#6d42b5");
  } else {
    gradient.addColorStop(0, "#7447b8");
    gradient.addColorStop(1, "#4f2f82");
  }

  ctx.fillStyle = gradient;

  // Rounded rectangle
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, 14);
  ctx.fill();

  // Border
  ctx.lineWidth = 2;
  ctx.strokeStyle = hovered
    ? "rgba(255,255,255,0.35)"
    : "rgba(255,255,255,0.15)";

  ctx.stroke();

  // Reset shadow before text
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

  // Text
  ctx.fillStyle = "white";

  ctx.font = hovered ? "42px HarryPotter" : "40px HarryPotter";

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.fillText(text, x + width / 2, y + height / 2 + 2);
}
