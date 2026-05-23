import gameTitleImg from "../assets/logo.svg";

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

  const button = getStartButton(canvas);

  const hovered =
    mouseX >= button.x &&
    mouseX <= button.x + button.width &&
    mouseY >= button.y &&
    mouseY <= button.y + button.height;

  ctx.fillStyle = hovered ? "#3f174e" : "#5b3c88";

  ctx.fillRect(button.x, button.y, button.width, button.height);

  //SETTINGS BUTTON

  const settingsButton = getSettingsButton(canvas);

  const settingsHovered =
    mouseX >= settingsButton.x &&
    mouseX <= settingsButton.x + settingsButton.width &&
    mouseY >= settingsButton.y &&
    mouseY <= settingsButton.y + settingsButton.height;

  ctx.fillStyle = settingsHovered ? "#7a52b3" : "#5b3c88";

  ctx.fillRect(
    settingsButton.x,
    settingsButton.y,
    settingsButton.width,
    settingsButton.height
  );

  ctx.fillStyle = "white";

  ctx.fillText(
    "Settings",
    settingsButton.x + settingsButton.width / 2,
    settingsButton.y + settingsButton.height / 2
  );

  // TEXT

  ctx.fillStyle = "white";

  ctx.font = "26px serif";

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.fillText(
    "Start Game",
    button.x + button.width / 2,
    button.y + button.height / 2
  );
}
