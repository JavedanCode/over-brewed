import player from "./player.js";
import { checkCollision } from "./collision.js";

export function getActiveInteractable(intractables) {
  const playerBox = player.getHitbox();

  let closest = null;
  let closestDistance = Infinity;

  for (let obj of intractables) {
    const zone = obj.getInteractZone();
    if (!zone) continue;

    if (checkCollision(playerBox, zone)) {
      const dx = obj.x + obj.width / 2 - (player.x + player.width / 2);
      const dy = obj.y + obj.height / 2 - (player.y + player.height / 2);

      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < closestDistance) {
        closest = obj;
        closestDistance = dist;
      }
    }
  }

  return closest;
}
