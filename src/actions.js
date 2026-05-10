import player from "./player.js";

export function takePlace(obj) {
  const station = obj.station;
  const playerInv = player.inventory;
  // TAKE
  if (playerInv.ingredient === 0 && playerInv.glass.inventory === 0) {
    if (station.canTake(playerInv)) {
      station.take(playerInv);
      console.log(
        "Player Invetory: " +
          playerInv.ingredient +
          " Glass: " +
          playerInv.glass.inventory +
          " Type: " +
          playerInv.glass.type
      );
    }
  } else {
    // PLACE
    if (station.canPlace(playerInv)) {
      station.place(playerInv);
      console.log("Placed");
    }
  }
}

export function work(obj, baseTime) {
  const station = obj.station;

  // WORK
  if (station.canWork()) {
    station.startWorking(baseTime);
    console.log(`started working with baseTime: ${baseTime}`);
    if (!station.canMoveWhileWorking) return station;
  }
  return null;
}
