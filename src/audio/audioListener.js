import { on } from "../core/gameEvents.js";
import { playSound } from "./audioManager.js";
import { INGREDIENTS } from "../data/items.js";

on("cut_complete", () => {
  playSound("cutting");
});

on("crush_complete", () => {
  playSound("crushing");
});

on("cauldron_start", () => {
  playSound("fireOn");
});

on("cauldron_done", () => {
  playSound("fireOff");
});

on("delivered", () => {
  playSound("bell");
});

on("trash", () => {
  playSound("trash");
});

on("ingredient_pickup", (ing) => {
  switch (ing) {
    case INGREDIENTS.Vinum:
    case INGREDIENTS.Oleum:
    case INGREDIENTS.Aqua:
      playSound("base");
      break;

    default:
      playSound("ingredient");
      break;
  }
});

on("place", () => {
  playSound("place");
});

on("glass_pickup", () => {
  playSound("glass");
});

on("new_order", () => {
  playSound("newOrder");
});

on("bottle_potion", (result) => {
  const overbrewed = result & ((1 << 28) | (1 << 30));

  if (overbrewed) {
    playSound("overbrewedFx");
  } else {
    playSound("bottling");
  }
});
