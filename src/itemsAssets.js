//MANDRAKE IMPORTS
import mandrakeIngImg from "./assets/mandrake-ing.png";
import cutMandrakeIngImg from "./assets/cut-mandrake-ing.png";
import crushMandrakeIngImg from "./assets/crush-mandrake-ing.png";

//PETALS IMPORTS
import petalsIngImg from "./assets/petals-ing.png";
import cutPetalsIngImg from "./assets/cut-petals-ing.png";
import crushPetalsIngImg from "./assets/crush-petals-ing.png";

//SCALES IMPORTS
import scalesIngImg from "./assets/scales-ing.png";
import cutScalesIngImg from "./assets/cut-scales-ing.png";
import crushScalesIngImg from "./assets/crush-scales-ing.png";

//SHRIVELFIG IMPORT
import figIngImg from "./assets/fig-ing.png";
import cutFigIngImg from "./assets/cut-fig-ing.png";
import crushFigIngImg from "./assets/crush-fig-ing.png";

//BASES IMPORT
import oilBase from "./assets/oil-base.png";
import waterBase from "./assets/water-base.png";
import wineBase from "./assets/wine-base.png";

//EMPTY CONTAINER
import emptyCubicContainer from "./assets/empty-cubic-container.png";
import emptyRoundContainer from "./assets/empty-round-container.png";

//POTION
import blueRoundPotion from "./assets/blue-round-potion.png";
import goldRoundPotion from "./assets/gold-round-potion.png";
import purpleRoundPotion from "./assets/purple-round-potion.png";
import greenCubicPotion from "./assets/green-cubic-potion.png";
import pinkCubicPotion from "./assets/pink-cubic-potion.png";
import redCubicPotion from "./assets/red-cubic-potion.png";

//OVERBREWED
import overbrewedCubicPotion from "./assets/overbrewed-cubic-potion.png";
import overbrewedRoundPotion from "./assets/overbrewed-round-potion.png";

import { ingredients } from "./items.js";

const images = {};

//MANDRAKE SPRITES
const mandrakeSprite = new Image();
const cutMandrakeSprite = new Image();
const crushMandrakeSprite = new Image();

mandrakeSprite.src = mandrakeIngImg;
cutMandrakeSprite.src = cutMandrakeIngImg;
crushMandrakeSprite.src = crushMandrakeIngImg;

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

//PETALS SPRITES
const petalsSprite = new Image();
const cutPetalsSprite = new Image();
const crushPetalsSprite = new Image();

petalsSprite.src = petalsIngImg;
cutPetalsSprite.src = cutPetalsIngImg;
crushPetalsSprite.src = crushPetalsIngImg;

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

//SCALES SPRITES
const scalesSprite = new Image();
const cutScalesSprite = new Image();
const crushScalesSprite = new Image();

scalesSprite.src = scalesIngImg;
cutScalesSprite.src = cutScalesIngImg;
crushScalesSprite.src = crushScalesIngImg;

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

//SHRIVELFIG SPRITES
const figSprite = new Image();
const cutFigSprite = new Image();
const crushFigSprite = new Image();

figSprite.src = figIngImg;
cutFigSprite.src = cutFigIngImg;
crushFigSprite.src = crushFigIngImg;

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

//BASES SPRITES
const oilBaseSprite = new Image();
const waterBaseSprite = new Image();
const wineBaseSprite = new Image();

oilBaseSprite.src = oilBase;
waterBaseSprite.src = waterBase;
wineBaseSprite.src = wineBase;

images[ingredients.Oleum] = {
  name: "Oil Base",
  sprite: oilBaseSprite,
};

images[ingredients.Aqua] = {
  name: "Water Base",
  sprite: waterBaseSprite,
};

images[ingredients.Vinum] = {
  name: "Wine Base",
  sprite: wineBaseSprite,
};

//EMPTY CONTAINER SPRITE
const emptyCubicContainerSprite = new Image();
const emptyRoundContainerSprite = new Image();

emptyCubicContainerSprite.src = emptyCubicContainer;
emptyRoundContainerSprite.src = emptyRoundContainer;

images["ROUND"] = {
  name: "Empty Round Container",
  sprite: emptyRoundContainerSprite,
};

images["SQUARE"] = {
  name: "Empty Cubic Container",
  sprite: emptyCubicContainerSprite,
};

//POTION SPRITES
const blueRoundPotionSprite = new Image();
const goldRoundPotionSprite = new Image();
const purpleRoundPotionSprite = new Image();
const greenCubicPotionSprite = new Image();
const pinkCubicPotionSprite = new Image();
const redCubicPotionSprite = new Image();

// THES WILL LATER BE USED FOR BREWED POTIONS
blueRoundPotionSprite.src = blueRoundPotion;
goldRoundPotionSprite.src = goldRoundPotion;
purpleRoundPotionSprite.src = purpleRoundPotion;
greenCubicPotionSprite.src = greenCubicPotion;
pinkCubicPotionSprite.src = pinkCubicPotion;
redCubicPotionSprite.src = redCubicPotion;

//OVERBREWED SPRITES
const overbrewedCubicPotionSprite = new Image();
const overbrewedRoundPotionSprite = new Image();

overbrewedCubicPotionSprite.src = overbrewedCubicPotion;
overbrewedRoundPotionSprite.src = overbrewedRoundPotion;

export default images;
