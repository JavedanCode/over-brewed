import baseFx from "../assets/audio/SFX/base.mp3";
import bottlingFx from "../assets/audio/SFX/bottling.mp3";
import overbrewedFx from "../assets/audio/SFX/bottling-overbrewed.mp3";
import crushingFx from "../assets/audio/SFX/crushing.mp3";
import cuttingFx from "../assets/audio/SFX/cutting.mp3";
import glassFx from "../assets/audio/SFX/glass.mp3";
import ingredientFx from "../assets/audio/SFX/ingredient.mp3";
import newOrderFx from "../assets/audio/SFX/new-order.mp3";
import placeFx from "../assets/audio/SFX/put-down.mp3";
import trashFx from "../assets/audio/SFX/trash.mp3";
import fireStart from "../assets/audio/SFX/fire-start.mp3";
import fireOut from "../assets/audio/SFX/fire-out.mp3";
import bellFx from "../assets/audio/SFX/bell.mp3";

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
  fireOn: new Audio(fireStart),
  fireOff: new Audio(fireOut),
  bell: new Audio(bellFx),
};

export default sounds;
