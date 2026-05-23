import gameTitleImg from "../assets/logo.svg";

const gameTitle = new Image();
gameTitle.src = gameTitleImg;

export function getStartButton(canvas) {
  const width = 400;
  const height = 120;

  return {
    x: canvas.width / 2 - width / 2,
    y: canvas.height / 2 + 50,
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

  // BUTTON

  const button = getStartButton(canvas);

  const hovered =
    mouseX >= button.x &&
    mouseX <= button.x + button.width &&
    mouseY >= button.y &&
    mouseY <= button.y + button.height;

  ctx.fillStyle = hovered ? "#3f174e" : "#5b3c88";

  ctx.fillRect(button.x, button.y, button.width, button.height);

  // TEXT

  ctx.fillStyle = "white";

  ctx.font = "50px serif";

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.fillText(
    "Start Game",
    button.x + button.width / 2,
    button.y + button.height / 2
  );
}
