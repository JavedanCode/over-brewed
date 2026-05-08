import { player_inventory } from "./items.js";

export function interact(obj) {
  if (!obj.station) return;

  const inv = new player_inventory();

  const station = obj.station;

  // TAKE
  if (crushStation.canTake(inv)) {
    crushStation.take(inv);
    console.log("taking");
    return;
  }

  // PLACE
  if (station.canPlace(inv)) {
    station.place(inv);
    console.log("placing");
    return;
  }

  // WORK
  if (station.canWork) {
    station.doWork?.();
    console.log("working");
  }
}
