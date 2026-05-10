import "./styles.css";
import Canvas from "./canvas.js";
import draw from "./draw.js";
import update from "./update.js";
import { clearJustPressed } from "./input.js";

const { canvas, ctx } = Canvas();

let previousFrame = Date.now();
function loop() {
  const now = Date.now();
  const timeStep = now - previousFrame; // Time in milliseconds since last frame
  previousFrame = now;

  update(timeStep);
  draw(ctx, canvas);

  clearJustPressed();

  requestAnimationFrame(loop);
}

loop();
