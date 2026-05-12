import player from "./player.js";

export function takePlace(obj) {
  const station = obj.station;
  const playerInv = player.inventory;

  // PLACE
  if (station.canPlace(playerInv)) station.place(playerInv);
  // TAKE
  else if (station.canTake(playerInv)) station.take(playerInv);
}

export function work(obj, baseTime) {
  const station = obj.station;

  // WORK
  if (station.canWork()) {
    station.startWorking(baseTime);
    //console.log(`started working with baseTime: ${baseTime}`);
    if (!station.canMoveWhileWorking) return station;
  }
  return null;
}
