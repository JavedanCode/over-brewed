import player from "./player.js";

export function takePlace(obj) {
  const station = obj.station;

  // TAKE
  if (player.inventory.empty()) {
    if (station.canTake(player.inventory)) {
      station.take(player.inventory);
      console.log(
        "Player Invetory: " +
          player.inventory.ingredient +
          " Glass: " +
          player.inventory.glass.inventory +
          " Type: " +
          player.inventory.glass.type
      );
    }
  } else {
    // PLACE
    if (station.canPlace(player.inventory)) {
      station.place(player.inventory);
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
