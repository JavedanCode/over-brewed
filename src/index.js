import "./styles.css";
import Canvas from "./canvas.js";
import draw from "./draw.js";
import update from "./update.js";
import { clearJustPressed } from "./input.js";
import { crushStation } from "./station.js";

const { canvas, ctx } = Canvas();

function loop() {
  update();
  draw(ctx, canvas);

  clearJustPressed();

  requestAnimationFrame(loop);
}

loop();
