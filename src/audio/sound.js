import baseFx from "../assets/audio/SFX/base.wav";
import bottlingFx from "../assets/audio/SFX/bottling.wav";
import overbrewedFx from "../assets/audio/SFX/bottling-overbrewed.wav";
import crushingFx from "../assets/audio/SFX/crushing.wav";
import cuttingFx from "../assets/audio/SFX/cutting.wav";
import glassFx from "../assets/audio/SFX/glass.wav";
import ingredientFx from "../assets/audio/SFX/ingredient.wav";
import newOrderFx from "../assets/audio/SFX/new-order.wav";
import placeFx from "../assets/audio/SFX/place.wav";
import trashFx from "../assets/audio/SFX/trash.wav";

const sounds = {
  base: new Audio(baseFx),
  bottling: new Audio(bottlingFx),
  overbrewedFx: new Audio(overbrewedFx),
  crushing: new Audio(crushingFx),
  cutting: new Audio(cuttingFx),
  glass: new Audio(glassFx),
  ingredient: new Audio(ingredientFx),
  newOrder: new Audio(newOrderFx),
  place: new Audio(placeFx),
  trash: new Audio(trashFx),
};

export default sounds;
