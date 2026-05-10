import player from "./player.js";

export function takePlace(obj) {
  const station = obj.station;

  // TAKE
  if (station.canTake(player.inventory)) {
    // station.take(player.inventory);
    console.log("Did take: " + station.take(player.inventory));

    console.log(
      "Player Invetory: " +
        player.inventory.ingredient +
        " Glass: " +
        player.inventory.glass.inventory +
        " Type: " +
        player.inventory.glass.type
    );
    return;
  }

  // PLACE
  if (station.canPlace(player.inventory)) {
    console.log("Did place: " + station.place(player.inventory));
    return;
  }
}

export function work(obj) {
  const station = obj.station;

  // WORK
  if (station.canWork()) {
    station.startWorking();
    console.log("started working");

    setTimeout(() => {
      station.doWork();
      console.log("Finished Working...");
    }, 3000);
  }
}
