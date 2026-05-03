import "./styles.css";
import Canvas from "./canvas.js";
import draw from "./draw.js";
import update from "./update.js";
const { canvas, ctx } = Canvas();

function loop() {
  update();
  draw(ctx, canvas);
  requestAnimationFrame(loop);
}

loop();
