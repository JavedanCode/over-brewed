import objects from "./objects";
import player from "./player";

const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;

export default (ctx, canvas) => {
  const scaleX = canvas.width / CANVAS_WIDTH;
  const scaleY = canvas.height / CANVAS_HEIGHT;

  ctx.setTransform(scaleX, 0, 0, scaleY, 0, 0);

  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  //DRAW ENTITIES
  const allEntities = [...objects, player];

  // SORT ENTITIES BY Y POSITION
  allEntities.sort((a, b) => {
    return a.y + a.height - (b.y + b.height);
  });

  // DRAW IN ORDER
  allEntities.forEach((entity) => {
    ctx.fillStyle = entity.color;
    ctx.fillRect(entity.x, entity.y, entity.width, entity.height);
  });

  objects.forEach((obj) => {
    const hb = obj.getHitbox();
    ctx.strokeStyle = "red";
    ctx.strokeRect(hb.x, hb.y, hb.width, hb.height);
  });
};
