import objects from "./objects.js";
import player from "./player.js";
// import { getActiveInteractable } from "./interaction.js";
import { background } from "./assets.js";

const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;

export default (ctx, canvas) => {
  const scaleX = canvas.width / CANVAS_WIDTH;
  const scaleY = canvas.height / CANVAS_HEIGHT;

  ctx.setTransform(scaleX, 0, 0, scaleY, 0, 0);

  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  //DRAW BACKGROUND
  ctx.drawImage(background, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  //DRAW ENTITIES
  const allEntities = [...objects, player];

  // SORT ENTITIES BY Y POSITION
  allEntities.sort((a, b) => {
    const aSortY = a.getSortY ? a.getSortY() : a.y + a.height;
    const bSortY = b.getSortY ? b.getSortY() : b.y + b.height;

    return aSortY - bSortY;
  });

  // DRAW IN ORDER
  allEntities.forEach((entity) => {
    if (entity.draw) {
      entity.draw(ctx);
      return;
    }

    ctx.fillStyle = entity.color;
    ctx.fillRect(entity.x, entity.y, entity.width, entity.height);
  });

  // objects.forEach((obj) => {
  //   const hb = obj.getHitbox();
  //   ctx.strokeStyle = "red";
  //   ctx.lineWidth = 1;
  //   ctx.strokeRect(hb.x, hb.y, hb.width, hb.height);
  // });

  // objects.forEach((obj) => {
  //   const zone = obj.getInteractZone();
  //   if (!zone) return;

  //   ctx.strokeStyle = "yellow";
  //   ctx.strokeRect(zone.x, zone.y, zone.width, zone.height);
  // });

  // const active = getActiveInteractable();

  // if (active) {
  //   ctx.strokeStyle = "lime";
  //   ctx.lineWidth = 3;

  //   ctx.strokeRect(active.x, active.y, active.width, active.height);
  // }
};
