import keys from "./input.js";
import objects from "./objects.js";
import player from "./player.js";
import { checkCollision } from "./collision.js";
import { getActiveInteractable } from "./interaction.js";
import { justPressed } from "./input.js";
import { takePlace, work } from "./actions.js";

const WORLD_WIDTH = 1920;
const WORLD_HEIGHT = 1080;

export default function update() {
  if (keys["w"]) player.velocityY -= player.acceleration;
  if (keys["s"]) player.velocityY += player.acceleration;
  if (keys["a"]) player.velocityX -= player.acceleration;
  if (keys["d"]) player.velocityX += player.acceleration;

  player.velocityX = Math.max(
    -player.maxSpeed,
    Math.min(player.maxSpeed, player.velocityX)
  );

  player.velocityY = Math.max(
    -player.maxSpeed,
    Math.min(player.maxSpeed, player.velocityY)
  );

  if (!keys["a"] && !keys["d"]) {
    if (player.velocityX > 0) {
      player.velocityX -= player.deceleration;

      if (player.velocityX < 0) {
        player.velocityX = 0;
      }
    }

    if (player.velocityX < 0) {
      player.velocityX += player.deceleration;

      if (player.velocityX > 0) {
        player.velocityX = 0;
      }
    }
  }

  if (!keys["w"] && !keys["s"]) {
    if (player.velocityY > 0) {
      player.velocityY -= player.deceleration;

      if (player.velocityY < 0) {
        player.velocityY = 0;
      }
    }

    if (player.velocityY < 0) {
      player.velocityY += player.deceleration;

      if (player.velocityY > 0) {
        player.velocityY = 0;
      }
    }
  }

  player.x += player.velocityX;

  let playerHitbox = player.getHitbox();

  objects.forEach((obj) => {
    if (checkCollision(playerHitbox, obj.getHitbox())) {
      const hb = obj.getHitbox();
      if (player.velocityX > 0) {
        player.x = hb.x - player.hitbox.offsetX - player.hitbox.width;
      }
      if (player.velocityX < 0) {
        player.x = hb.x + hb.width - player.hitbox.offsetX;
      }

      playerHitbox = player.getHitbox();
    }
  });

  player.y += player.velocityY;

  playerHitbox = player.getHitbox();

  objects.forEach((obj) => {
    if (checkCollision(playerHitbox, obj.getHitbox())) {
      const hb = obj.getHitbox();
      if (player.velocityY > 0) {
        player.y = hb.y - player.hitbox.offsetY - player.hitbox.height;
      }
      if (player.velocityY < 0) {
        player.y = hb.y + hb.height - player.hitbox.offsetY;
      }

      playerHitbox = player.getHitbox();
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

  if (justPressed["e"]) {
    const active = getActiveInteractable();
    if (active) takePlace(active);
  }
  if (justPressed["f"]) {
    const active = getActiveInteractable();
    if (active) work(active);
  }
}
