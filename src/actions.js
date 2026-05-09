import player from "./player.js";

export function takePlace(obj) {
  if (!obj.station) return;

  const station = obj.station;

  // TAKE
  if (station.canTake(player.inventory)) {
    // station.take(player.inventory);
    console.log("Did take: " + station.take(player.inventory));

    console.log("Player Invetory: " + player.inventory.ingredient);
    return;
  }

  // PLACE
  if (station.canPlace(player.inventory)) {
    console.log("Did place: " + station.place(player.inventory));
    return;
  }
}

export function work(obj) {
  if (!obj.station) return;

  const station = obj.station;

  // WORK
  if (station.canWork) {
    station.doWork();
    console.log("working");
  }
}
