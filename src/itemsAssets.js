import mandrakeIngImg from "./assets/mandrake-ing.png";
import petalsIngImg from "./assets/petals-ing.png";
import scalesIngImg from "./assets/scales-ing.png";
import figIngImg from "./assets/fig-ing.png";
import cutMandrakeIngImg from "./assets/cut-mandrake-ing.png";
import cutPetalsIngImg from "./assets/cut-petals-ing.png";
import cutScalesIngImg from "./assets/cut-scales-ing.png";
import cutFigIngImg from "./assets/cut-fig-ing.png";
import crushMandrakeIngImg from "./assets/crush-mandrake-ing.png";
import crushPetalsIngImg from "./assets/crush-petals-ing.png";
import crushScalesIngImg from "./assets/crush-scales-ing.png";
import crushFigIngImg from "./assets/crush-fig-ing.png";

import { ingredients } from "./items.js";

const images = {};

const mandrakeSprite = new Image();
const cutMandrakeSprite = new Image();
const crushMandrakeSprite = new Image();

const petalsSprite = new Image();
const cutPetalsSprite = new Image();
const crushPetalsSprite = new Image();

const scalesSprite = new Image();
const cutScalesSprite = new Image();
const crushScalesSprite = new Image();

const figSprite = new Image();
const cutFigSprite = new Image();
const crushFigSprite = new Image();

mandrakeSprite.src = mandrakeIngImg;
cutMandrakeSprite.src = cutMandrakeIngImg;
crushMandrakeSprite.src = crushMandrakeIngImg;

petalsSprite.src = petalsIngImg;
cutPetalsSprite.src = cutPetalsIngImg;
crushPetalsSprite.src = crushPetalsIngImg;

scalesSprite.src = scalesIngImg;
cutScalesSprite.src = cutScalesIngImg;
crushScalesSprite.src = crushScalesIngImg;

figSprite.src = figIngImg;
cutFigSprite.src = cutFigIngImg;
crushFigSprite.src = crushFigIngImg;

images[ingredients.Mandrake] = {
  name: "Mandrake",
  sprite: mandrakeSprite,
};
images[ingredients.CutMandrake] = {
  name: "Cut Mandrake",
  sprite: cutMandrakeSprite,
};
images[ingredients.CrushedMandrake] = {
  name: "Crushed Mandrake",
  sprite: crushMandrakeSprite,
};
images[ingredients.AsphodelPetals] = {
  name: "Asphodel Petals",
  sprite: petalsSprite,
};
images[ingredients.CutAsphodelPetals] = {
  name: "Cut Asphodel Petals",
  sprite: cutPetalsSprite,
};
images[ingredients.CrushedAsphodelPetals] = {
  name: "Crushed Asphodel Petals",
  sprite: crushPetalsSprite,
};
images[ingredients.DragonScales] = {
  name: "Dragon Scales",
  sprite: scalesSprite,
};
images[ingredients.CutDragonScales] = {
  name: "Cut Dragon Scales",
  sprite: cutScalesSprite,
};
images[ingredients.CrushedDragonScales] = {
  name: "Crushed Dragon Scales",
  sprite: crushScalesSprite,
};
images[ingredients.Shrivelfig] = {
  name: "Shrivelfig",
  sprite: figSprite,
};
images[ingredients.CutShrivelfig] = {
  name: "Cut Shrivelfig",
  sprite: cutFigSprite,
};
images[ingredients.CrushedShrivelfig] = {
  name: "Crushed Shrivelfig",
  sprite: crushFigSprite,
};

export default images;
