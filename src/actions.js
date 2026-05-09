import player from "./player.js";

export function interact(obj) {
  if (!obj.station) return;

  const station = obj.station;

  // TAKE
  if (station.canTake(player.inventory)) {
    // station.take(player.inventory);
    console.log("Did take: " + station.take(player.inventory));
    return;
  }

  // PLACE
  if (station.canPlace(player.inventory)) {
    console.log("Did place: " + station.place(player.inventory));
    return;
  }

  // WORK
  if (station.canWork) {
    station.doWork();
    console.log("working");
  }
}
