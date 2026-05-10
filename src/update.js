import keys from "./input.js";
import { stations, ingredientsAndContainers, tables } from "./objects.js";
import player from "./player.js";
import { checkCollision } from "./collision.js";
import { getActiveInteractable } from "./interaction.js";
import { justPressed } from "./input.js";
import { takePlace, work } from "./actions.js";

const WORLD_WIDTH = 1920;
const WORLD_HEIGHT = 1080;
const objects = [...stations, ...tables, ...ingredientsAndContainers];
let baseTime = 3000; // in ms
let currentInteraction = null;

function calculateVelocity(timeStep) {
  let yDir = 0;
  let xDir = 0;

  if (keys["w"]) yDir--;
  if (keys["s"]) yDir++;
  if (keys["a"]) xDir--;
  if (keys["d"]) xDir++;

  // Normalize input direction
  let length = Math.hypot(xDir, yDir);

  if (length > 0) {
    xDir /= length;
    yDir /= length;
  }

  // Apply acceleration
  player.velocityX += xDir * player.acceleration * timeStep;
  player.velocityY += yDir * player.acceleration * timeStep;

  // Deceleration when no input
  if (xDir === 0) {
    let absVel = Math.abs(player.velocityX);
    absVel -= player.deceleration * timeStep;
    absVel = Math.max(0, absVel);
    player.velocityX = absVel * Math.sign(player.velocityX);
  }

  if (yDir === 0) {
    let absVel = Math.abs(player.velocityY);
    absVel -= player.deceleration * timeStep;
    absVel = Math.max(0, absVel);
    player.velocityY = absVel * Math.sign(player.velocityY);
  }

  // Clamp total velocity magnitude
  let speed = Math.hypot(player.velocityX, player.velocityY);

  if (speed > player.maxSpeed) {
    player.velocityX = (player.velocityX / speed) * player.maxSpeed;
    player.velocityY = (player.velocityY / speed) * player.maxSpeed;
  }
}

function calculatePosition() {
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
}

export default function update(timeStep) {
  // update Stations
  for (let st of stations) {
    st.station.doWork(timeStep);
  }

  if (!currentInteraction) {
    calculateVelocity(timeStep);
    calculatePosition();

    if (justPressed["e"]) {
      const active = getActiveInteractable([
        ...stations,
        ...ingredientsAndContainers,
      ]);
      if (active) takePlace(active);
    }
    if (justPressed["f"]) {
      const active = getActiveInteractable(stations);
      if (active) currentInteraction = work(active, baseTime);
    }
  } else {
    if (!currentInteraction._work_lock) currentInteraction = null;
  }

  player.updateAnimation();
}
