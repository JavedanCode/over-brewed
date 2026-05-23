export function getHowToPlayBackButton(canvas) {
  return {
    x: canvas.width / 2 - 50,
    y: canvas.height - 110,
    width: 100,
    height: 50,
  };
}

export function drawHowToPlay(ctx, canvas, mouseX, mouseY) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#120d18";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // TITLE

  ctx.fillStyle = "white";
  ctx.font = "70px serif";
  ctx.textAlign = "center";

  ctx.fillText("How To Play", canvas.width / 2, 100);

  // CONTROLS

  ctx.font = "28px serif";
  ctx.textAlign = "left";

  const startX = canvas.width / 2 - 350;
  let y = 220;

  const lines = [
    "WASD  - Move",
    "E     - Pick up / Place item",
    "F     - Use station",
    "",
    "Goal:",
    "Brew potions correctly and deliver them before time runs out.",
    "",
    "Steps:",
    "1. Pick up ingredients",
    "2. Cut or crush them if needed",
    "3. Put ingredients into the cauldron",
    "4. Brew the potion",
    "5. Fill a bottle and deliver it",
  ];

  lines.forEach((line) => {
    ctx.fillText(line, startX, y);
    y += 28;
  });

  // BACK BUTTON

  const button = getHowToPlayBackButton(canvas);

  const hovered =
    mouseX >= button.x &&
    mouseX <= button.x + button.width &&
    mouseY >= button.y &&
    mouseY <= button.y + button.height;

  ctx.fillStyle = hovered ? "#7a52b3" : "#5b3c88";

  ctx.fillRect(button.x, button.y, button.width, button.height);

  ctx.fillStyle = "white";
  ctx.font = "28px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.fillText(
    "Back",
    button.x + button.width / 2,
    button.y + button.height / 2
  );
}
