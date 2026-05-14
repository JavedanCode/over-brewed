//MANDRAKE IMPORTS
import mandrakeIngImg from "./assets/items/mandrake-ing.png";
import cutMandrakeIngImg from "./assets/items/cut-mandrake-ing.png";
import crushMandrakeIngImg from "./assets/items/crush-mandrake-ing.png";

//PETALS IMPORTS
import petalsIngImg from "./assets/items/petals-ing.png";
import cutPetalsIngImg from "./assets/items/cut-petals-ing.png";
import crushPetalsIngImg from "./assets/items/crush-petals-ing.png";

//SCALES IMPORTS
import scalesIngImg from "./assets/items/scales-ing.png";
import cutScalesIngImg from "./assets/items/cut-scales-ing.png";
import crushScalesIngImg from "./assets/items/crush-scales-ing.png";

//SHRIVELFIG IMPORT
import figIngImg from "./assets/items/fig-ing.png";
import cutFigIngImg from "./assets/items/cut-fig-ing.png";
import crushFigIngImg from "./assets/items/crush-fig-ing.png";

//BASES IMPORT
import oilBase from "./assets/items/oil-base.png";
import waterBase from "./assets/items/water-base.png";
import wineBase from "./assets/items/wine-base.png";

//EMPTY CONTAINER
import emptyCubicContainer from "./assets/items/empty-cubic-container.png";
import emptyRoundContainer from "./assets/items/empty-round-container.png";

//POTION
import blueRoundPotion from "./assets/items/blue-round-potion.png";
import goldRoundPotion from "./assets/items/gold-round-potion.png";
import purpleRoundPotion from "./assets/items/purple-round-potion.png";
import greenCubicPotion from "./assets/items/green-cubic-potion.png";
import pinkCubicPotion from "./assets/items/pink-cubic-potion.png";
import redCubicPotion from "./assets/items/red-cubic-potion.png";

//OVERBREWED
import overbrewedCubicPotion from "./assets/items/overbrewed-cubic-potion.png";
import overbrewedRoundPotion from "./assets/items/overbrewed-round-potion.png";

import { INGREDIENTS, RECIPES } from "./items.js";

const images = {};

//MANDRAKE SPRITES
const mandrakeSprite = new Image();
const cutMandrakeSprite = new Image();
const crushMandrakeSprite = new Image();

mandrakeSprite.src = mandrakeIngImg;
cutMandrakeSprite.src = cutMandrakeIngImg;
crushMandrakeSprite.src = crushMandrakeIngImg;

images[INGREDIENTS.Mandrake] = {
  name: "Mandrake",
  sprite: mandrakeSprite,
};
images[INGREDIENTS.CutMandrake] = {
  name: "Cut Mandrake",
  sprite: cutMandrakeSprite,
};
images[INGREDIENTS.CrushedMandrake] = {
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

images[INGREDIENTS.AsphodelPetals] = {
  name: "Asphodel Petals",
  sprite: petalsSprite,
};
images[INGREDIENTS.CutAsphodelPetals] = {
  name: "Cut Asphodel Petals",
  sprite: cutPetalsSprite,
};
images[INGREDIENTS.CrushedAsphodelPetals] = {
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

images[INGREDIENTS.DragonScales] = {
  name: "Dragon Scales",
  sprite: scalesSprite,
};
images[INGREDIENTS.CutDragonScales] = {
  name: "Cut Dragon Scales",
  sprite: cutScalesSprite,
};
images[INGREDIENTS.CrushedDragonScales] = {
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

images[INGREDIENTS.Shrivelfig] = {
  name: "Shrivelfig",
  sprite: figSprite,
};
images[INGREDIENTS.CutShrivelfig] = {
  name: "Cut Shrivelfig",
  sprite: cutFigSprite,
};
images[INGREDIENTS.CrushedShrivelfig] = {
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

images[INGREDIENTS.Oleum] = {
  name: "Oil Base",
  sprite: oilBaseSprite,
};

images[INGREDIENTS.Aqua] = {
  name: "Water Base",
  sprite: waterBaseSprite,
};

images[INGREDIENTS.Vinum] = {
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

images[RECIPES.ManegroPotion] = {
  name: "Mangero Potion",
  sprite: greenCubicPotionSprite,
};

images[RECIPES.PotionofAllPotential] = {
  name: "Potion of All Potential",
  sprite: goldRoundPotionSprite,
};

images[RECIPES.LovePotion] = {
  name: "Love Potion",
  sprite: pinkCubicPotionSprite,
};

images[RECIPES.ScreamingPotion] = {
  name: "Screaming Potion",
  sprite: purpleRoundPotionSprite,
};

images[RECIPES.DragonPoison] = {
  name: "Dragon Poison",
  sprite: redCubicPotionSprite,
};

images[RECIPES.WeaknessPotion] = {
  name: "Weakness Potion",
  sprite: blueRoundPotionSprite,
};
//OVERBREWED SPRITES
const overbrewedCubicPotionSprite = new Image();
const overbrewedRoundPotionSprite = new Image();

overbrewedCubicPotionSprite.src = overbrewedCubicPotion;
overbrewedRoundPotionSprite.src = overbrewedRoundPotion;

export default images;
