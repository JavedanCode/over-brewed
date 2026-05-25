import {
  cauldronImg,
  waterVaseImg,
  oilVaseImg,
  wineVaseImg,
  centerTableImg,
  bottomTableImg,
  mandrakeBagImg,
  petalBagImg,
  scalesBagImg,
  figTreeImg,
  leftTableImg,
  cubicContImg,
  roundContImg,
  rightTableImg,
  bellImg,
  crushStationImg,
  cuttingImg,
  trashCanImg,
} from "../data/assets.js";
import GameObject from "./gameObject.js";

import {
  Cauldron,
  Station,
  Ingredient,
  Glass,
  TrashCan,
  DeliveryStation,
} from "./station.js";
import { CRUSH, CUT, INGREDIENTS } from "../data/items.js";

import {
  drawSingleItem,
  drawCauldronItems,
} from "../rendering/inventoryRenderer.js";
import {
  drawCauldronProgress,
  drawProgressBar,
} from "../rendering/progressRenderer.js";

const stations = [
  //CUTTING BOARD
  new GameObject({
    x: 670,
    y: 500,
    width: 190,
    height: 100,
    color: "#6805c4",

    sortOffset: 310,

    type: "cutting",

    hitbox: {
      offsetX: 20000,
      offsetY: 0,
      width: 0,
      height: 0,
    },

    station: new Station(CUT),

    inventoryRenderer: drawSingleItem,
    progressRenderer: drawProgressBar,

    sprite: cuttingImg,

    interactZone: {
      offsetX: 0,
      offsetY: -90,
      width: 190,
      height: 230,
    },
  }),

  //CRUSHING STATION
  new GameObject({
    x: 1050,
    y: 470,
    width: 120,
    height: 120,
    color: "#05c46b",

    sortOffset: 310,

    sprite: crushStationImg,

    hitbox: {
      offsetX: 20000,
      offsetY: 0,
      width: 0,
      height: 0,
    },

    station: new Station(CRUSH),

    inventoryRenderer: drawSingleItem,
    progressRenderer: drawProgressBar,

    interactZone: {
      offsetX: 0,
      offsetY: -70,
      width: 120,
      height: 230,
    },
  }),

  //CAULDRON 1
  new GameObject({
    x: 280,
    y: 100,
    width: 200,
    height: 240,
    color: "#3d3131",

    type: "cauldron",

    station: new Cauldron(),

    interactZone: {
      offsetX: 0,
      offsetY: 30,
      width: 150,
      height: 60,
    },

    hitbox: {
      offsetX: 0,
      offsetY: 30,
      width: 150,
      height: 10,
    },

    inventoryRenderer: drawCauldronItems,
    progressRenderer: drawCauldronProgress,

    sprite: cauldronImg,
  }),

  //CAULDRON 2
  new GameObject({
    x: 520,
    y: 100,
    width: 200,
    height: 240,
    color: "#3d3131",

    type: "cauldron",

    station: new Cauldron(),

    interactZone: {
      offsetX: 0,
      offsetY: 30,
      width: 150,
      height: 60,
    },

    hitbox: {
      offsetX: 0,
      offsetY: 30,
      width: 150,
      height: 10,
    },

    inventoryRenderer: drawCauldronItems,
    progressRenderer: drawCauldronProgress,

    sprite: cauldronImg,
  }),

  //CAULDRON 3
  new GameObject({
    x: 760,
    y: 100,
    width: 200,
    height: 240,
    color: "#3d3131",

    type: "cauldron",

    station: new Cauldron(),

    interactZone: {
      offsetX: 0,
      offsetY: 30,
      width: 150,
      height: 60,
    },

    hitbox: {
      offsetX: 0,
      offsetY: 30,
      width: 150,
      height: 10,
    },

    inventoryRenderer: drawCauldronItems,
    progressRenderer: drawCauldronProgress,

    sprite: cauldronImg,
  }),

  //BELL
  new GameObject({
    x: 1750,
    y: 500,
    width: 110,
    height: 120,
    color: "#ffd13b",

    sortOffset: 1000,

    type: "bell",

    //NEED TO CHANGE THIS TO DELIVERY STATION LATER
    station: new DeliveryStation(),

    sprite: bellImg,

    interactZone: {
      offsetX: -200,
      offsetY: -50,
      width: 200,
      height: 200,
    },

    hitbox: {
      offsetX: 9999,
      offsetY: 0,
      width: 0,
      height: 0,
    },
  }),
];

const ingredientsAndContainers = [
  //OIL BASE
  new GameObject({
    x: 1050,
    y: 40,
    width: 140,
    height: 300,
    color: "#c45105",

    type: "oil-base",

    station: new Ingredient(INGREDIENTS.Oleum),

    interactZone: {
      offsetX: 0,
      offsetY: 220,
      width: 140,
      height: 70,
    },

    hitbox: {
      offsetX: 0,
      offsetY: 50,
      width: 140,
      height: 50,
    },

    sprite: oilVaseImg,
  }),

  //WATER BASE
  new GameObject({
    x: 1250,
    y: 30,
    width: 140,
    height: 300,
    color: "#c45105",

    type: "oil-base",

    station: new Ingredient(INGREDIENTS.Aqua),

    interactZone: {
      offsetX: 0,
      offsetY: 230,
      width: 140,
      height: 70,
    },

    hitbox: {
      offsetX: 0,
      offsetY: 60,
      width: 140,
      height: 50,
    },

    sprite: waterVaseImg,
  }),

  //WINE BASE
  new GameObject({
    x: 1450,
    y: 30,
    width: 140,
    height: 310,
    color: "#c45105",

    type: "oil-base",

    station: new Ingredient(INGREDIENTS.Vinum),

    interactZone: {
      offsetX: 0,
      offsetY: 230,
      width: 140,
      height: 70,
    },

    hitbox: {
      offsetX: 0,
      offsetY: 60,
      width: 140,
      height: 50,
    },

    sprite: wineVaseImg,
  }),

  //MANDRAKES
  new GameObject({
    x: 580,
    y: 860,
    width: 130,
    height: 240,
    color: "#3a2301",

    type: "ingredient",

    station: new Ingredient(INGREDIENTS.Mandrake),

    sortOffset: 1000,

    interactZone: {
      offsetX: 0,
      offsetY: 10,
      width: 130,
      height: 110,
    },

    hitbox: {
      offsetX: 0,
      offsetY: 1000,
      width: 0,
      height: 0,
    },

    sprite: mandrakeBagImg,
  }),

  //PETALS
  new GameObject({
    x: 780,
    y: 860,
    width: 105,
    height: 240,
    color: "#3a2301",

    type: "ingredient",

    station: new Ingredient(INGREDIENTS.AsphodelPetals),

    sortOffset: 1000,

    interactZone: {
      offsetX: 0,
      offsetY: 10,
      width: 140,
      height: 110,
    },

    hitbox: {
      offsetX: 0,
      offsetY: 1000,
      width: 0,
      height: 0,
    },

    sprite: petalBagImg,
  }),

  //SCALES
  new GameObject({
    x: 950,
    y: 920,
    width: 150,
    height: 200,
    color: "#3a2301",

    type: "ingredient",

    station: new Ingredient(INGREDIENTS.DragonScales),

    sortOffset: 1000,

    interactZone: {
      offsetX: 0,
      offsetY: -50,
      width: 130,
      height: 110,
    },

    hitbox: {
      offsetX: 0,
      offsetY: 1000,
      width: 0,
      height: 0,
    },

    sprite: scalesBagImg,
  }),

  //FIGS
  new GameObject({
    x: 1140,
    y: 860,
    width: 170,
    height: 240,
    color: "#3a2301",

    type: "ingredient",

    station: new Ingredient(INGREDIENTS.Shrivelfig),

    sortOffset: 1000,

    interactZone: {
      offsetX: 20,
      offsetY: 10,
      width: 130,
      height: 110,
    },

    hitbox: {
      offsetX: 0,
      offsetY: 1000,
      width: 0,
      height: 0,
    },

    sprite: figTreeImg,
  }),

  //ROUND CONTAINERS
  new GameObject({
    x: 10,
    y: 390,
    width: 170,
    height: 170,
    color: "#058ec4",

    type: "container",

    sprite: roundContImg,
    station: new Glass(INGREDIENTS.RoundGlass),

    sortOffset: 500,

    interactZone: {
      offsetX: 120,
      offsetY: 0,
      width: 190,
      height: 170,
    },

    hitbox: {
      offsetX: -1000,
      offsetY: 0,
      width: 0,
      height: 0,
    },
  }),

  //CUBIC CONTAINERS
  new GameObject({
    x: 0,
    y: 570,
    width: 170,
    height: 170,
    color: "#05a7c4",

    type: "container",

    sprite: cubicContImg,

    station: new Glass(INGREDIENTS.CubicGlass),

    sortOffset: 1000,

    interactZone: {
      offsetX: 130,
      offsetY: 0,
      width: 190,
      height: 170,
    },

    hitbox: {
      offsetX: -1000,
      offsetY: 0,
      width: 0,
      height: 0,
    },
  }),

  //TRASHCAN
  new GameObject({
    x: 270,
    y: 900,
    width: 190,
    height: 290,

    color: "gray",

    type: "trash",

    sprite: trashCanImg,

    station: new TrashCan(),

    interactZone: {
      offsetX: 0,
      offsetY: -20,
      width: 190,
      height: 100,
    },

    hitbox: {
      offsetX: 0,
      offsetY: 80,
      width: 190,
      height: 120,
    },
  }),
];

const tables = [
  //LEFT TABLE
  new GameObject({
    x: -70,
    y: 340,
    width: 320,
    height: 640,
    color: "#a09797",

    sprite: leftTableImg,

    hitbox: {
      offsetX: -10,
      offsetY: 80,
      width: 320,
      height: 350,
    },
  }),

  //RIGHT TABLE
  new GameObject({
    x: 1640,
    y: 340,
    width: 320,
    height: 640,
    color: "#a09797",

    sprite: rightTableImg,

    hitbox: {
      offsetX: 10,
      offsetY: 80,
      width: 250,
      height: 350,
    },
  }),

  //BOTTOM TABLE
  new GameObject({
    x: 520,
    y: 940,
    width: 860,
    height: 350,
    color: "#a09797",

    hitbox: {
      offsetX: 15,
      offsetY: 40,
      width: 820,
      height: 100,
    },

    sprite: bottomTableImg,
  }),

  //CENTER TABLE
  new GameObject({
    x: 545,
    y: 470,
    width: 800,
    height: 400,
    color: "#a09797",

    hitbox: {
      offsetX: 3,
      offsetY: 50,
      width: 789,
      height: 60,
    },

    sprite: centerTableImg,
  }),
];

export { ingredientsAndContainers, tables, stations };
