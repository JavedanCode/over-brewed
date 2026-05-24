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

  ctx.fillStyle = hovered ? "#7a52b3" : "#5b3c88";

  ctx.fillRect(button.x, button.y, button.width, button.height);

  ctx.fillStyle = "white";
  ctx.font = "40px HarryPotter";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.fillText(text, button.x + button.width / 2, button.y + button.height / 2);
}
