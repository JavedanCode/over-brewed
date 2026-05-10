import keys from "./input.js";
import objects from "./objects.js";
import player from "./player.js";
import { checkCollision } from "./collision.js";
import { getActiveInteractable } from "./interaction.js";
import { justPressed } from "./input.js";
import { takePlace, work } from "./actions.js";

const WORLD_WIDTH = 1920;
const WORLD_HEIGHT = 1080;

export default function update(timeStep) {
  let yDir = 0;
  let xDir = 0;

  if (keys["w"]) yDir--;
  if (keys["s"]) yDir++;
  if (keys["a"]) xDir--;
  if (keys["d"]) xDir++;

  //If no direction is held or two opposing directions are held together
  if (yDir === 0) {
    let absVel = Math.abs(player.velocityY);
    absVel -= player.deceleration * timeStep;
    absVel = Math.max(0, absVel);
    player.velocityY = absVel * Math.sign(player.velocityY);
  }
  //If only one opposing direction is held
  else {
    player.velocityY += player.acceleration * timeStep * yDir;
    player.velocityY = Math.max(
      -player.maxSpeed,
      Math.min(player.maxSpeed, player.velocityY)
    );
  }

  if (xDir === 0) {
    let absVel = Math.abs(player.velocityX);
    absVel -= player.deceleration * timeStep;
    absVel = Math.max(0, absVel);
    player.velocityX = absVel * Math.sign(player.velocityX);
  } else {
    player.velocityX += player.acceleration * timeStep * xDir;
    player.velocityX = Math.max(
      -player.maxSpeed,
      Math.min(player.maxSpeed, player.velocityX)
    );
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
