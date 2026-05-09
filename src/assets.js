import floor from './assets/floor.png';
import cauldron from './assets/cauldron.png';
import oilVase from './assets/oil.png';
import waterVase from './assets/water.png';
import wineVase from './assets/wine.png';
import centerTable from './assets/center-table.png';
import bottomTable from './assets/bottom-table.png';
import ingredient from './assets/ingredient.png';
import sideTable from './assets/side-table.png';

const background = new Image();
background.src = floor;

const cauldronImg = new Image();
cauldronImg.src = cauldron;

const oilVaseImg = new Image();
oilVaseImg.src = oilVase;

const waterVaseImg = new Image();
waterVaseImg.src = waterVase;

const wineVaseImg = new Image();
wineVaseImg.src = wineVase;

const centerTableImg = new Image();
centerTableImg.src = centerTable;

const bottomTableImg = new Image();
bottomTableImg.src = bottomTable;

const ingredientImg = new Image();
ingredientImg.src = ingredient;

const sideTableImg = new Image();
sideTableImg.src = sideTable;
export {
  background,
  cauldronImg,
  oilVaseImg,
  waterVaseImg,
  wineVaseImg,
  centerTableImg,
  bottomTableImg,
  ingredientImg,
  sideTableImg,
};
