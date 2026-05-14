import { ingredientsAndContainers, tables, stations } from "./objects.js";
import player from "./player.js";
import { getActiveInteractable } from "./interaction.js";
import { background } from "./assets.js";

const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;

const objects = [...stations, ...tables, ...ingredientsAndContainers];

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
  const active = getActiveInteractable(objects);
  allEntities.forEach((entity) => {
    if (entity === active) {
      ctx.filter = "brightness(1.5)";
    }
    if (entity.draw) {
      entity.draw(ctx);
    } else {
      ctx.fillStyle = entity.color;
      ctx.fillRect(entity.x, entity.y, entity.width, entity.height);
    }

    ctx.filter = "none";
  });

  stations.forEach((station) => {
    if (station.inventoryRenderer) {
      station.inventoryRenderer(ctx, station);
    }
    if (station.progressRenderer) {
      station.progressRenderer(ctx, station);
    }
  });
};
