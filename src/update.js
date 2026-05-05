import keys from "./input.js";
import objects from "./objects.js";
import player from "./player.js";
import { checkCollision } from "./collision.js";
import { getActiveInteractable } from "./interaction.js";

const WORLD_WIDTH = 1920;
const WORLD_HEIGHT = 1080;

export default function update() {
  player.velocityX = 0;
  player.velocityY = 0;

  if (keys["w"]) player.velocityY = -player.speed;
  if (keys["s"]) player.velocityY = player.speed;
  if (keys["a"]) player.velocityX = -player.speed;
  if (keys["d"]) player.velocityX = player.speed;

  player.x += player.velocityX;

  objects.forEach((obj) => {
    if (checkCollision(player, obj.getHitbox())) {
      if (player.velocityX > 0) {
        player.x = obj.x - player.width;
      }
      if (player.velocityX < 0) {
        player.x = obj.x + player.width;
      }
    }
  });

  player.y += player.velocityY;

  objects.forEach((obj) => {
    if (checkCollision(player, obj.getHitbox())) {
      const hb = obj.getHitbox();
      if (player.velocityY > 0) {
        player.y = hb.y - player.height;
      }
      if (player.velocityY < 0) {
        player.y = hb.y + hb.height;
      }
    }
  });

  if (player.x < 0) {
    player.x = 0;
  }
  if (player.x + player.width > WORLD_WIDTH) {
    player.x = WORLD_WIDTH - player.width;
  }

  if (player.y < 0) {
    player.y = 0;
  }

  if (player.y + player.height > WORLD_HEIGHT) {
    player.y = WORLD_HEIGHT - player.height;
  }

  const active = getActiveInteractable();

  if (active) {
    console.log("Near:", active);
  }
}
