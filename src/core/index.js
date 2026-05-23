import "../styles/styles.css";
import Canvas from "./canvas.js";
import draw from "../rendering/drawGame.js";
import update from "../logic/update.js";
import { clearJustPressed } from "../logic/input.js";
import { GAME_STATES, getGameState, setGameState } from "./gameState.js";
import { drawMenu, getStartButton } from "../rendering/menuRenderer.js";

const { canvas, ctx } = Canvas();

let mouseX = 0;
let mouseY = 0;

canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();

  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

canvas.addEventListener("click", (e) => {
  const state = getGameState();

  if (state !== GAME_STATES.MENU) return;

  const rect = canvas.getBoundingClientRect();

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const button = getStartButton(canvas);

  const insideButton =
    mouseX >= button.x &&
    mouseX <= button.x + button.width &&
    mouseY >= button.y &&
    mouseY <= button.y + button.height;

  if (insideButton) {
    setGameState(GAME_STATES.PLAYING);
  }
});

let previousFrame = Date.now();
function loop() {
  const now = Date.now();
  const timeStep = now - previousFrame; // Time in milliseconds since last frame
  previousFrame = now;

  if (getGameState() === GAME_STATES.PLAYING) {
    update(timeStep);
    draw(ctx, canvas);
  } else if (getGameState() === GAME_STATES.MENU) {
    drawMenu(ctx, canvas, mouseX, mouseY);
  }

  clearJustPressed();

  requestAnimationFrame(loop);
}

loop();
