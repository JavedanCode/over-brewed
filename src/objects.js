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
} from "./assets.js";
import GameObject from "./gameObject.js";

import { Cauldron, Station, Ingredient, Glass } from "./station.js";
import { CRUSH, CUT, ingredients } from "./items.js";

const stations = [
  //CUTTING BOARD
  new GameObject({
    x: 730,
    y: 500,
    width: 120,
    height: 70,
    color: "#6805c4",

    sortOffset: 1000,

    type: "cutting",

    hitbox: {
      offsetX: 20000,
      offsetY: 0,
      width: 0,
      height: 0,
    },

    station: new Station(CUT),

    sprite: cuttingImg,

    interactZone: {
      offsetX: 0,
      offsetY: -110,
      width: 120,
      height: 110,
    },
  }),

  //CRUSHING STATION
  new GameObject({
    x: 1000,
    y: 470,
    width: 100,
    height: 100,
    color: "#05c46b",

    sortOffset: 1000,

    sprite: crushStationImg,

    hitbox: {
      offsetX: 20000,
      offsetY: 0,
      width: 0,
      height: 0,
    },

    station: new Station(CRUSH),

    interactZone: {
      offsetX: 0,
      offsetY: -80,
      width: 120,
      height: 110,
    },
  }),

  //CAULDRON 1
  new GameObject({
    x: 400,
    y: 80,
    width: 150,
    height: 180,
    color: "#3d3131",

    type: "cauldron",

    station: new Cauldron(),

    interactZone: {
      offsetX: 0,
      offsetY: 180,
      width: 150,
      height: 60,
    },

    hitbox: {
      offsetX: 0,
      offsetY: 30,
      width: 150,
      height: 70,
    },

    sprite: cauldronImg,
  }),

  //CAULDRON 2
  new GameObject({
    x: 630,
    y: 80,
    width: 150,
    height: 180,
    color: "#3d3131",

    type: "cauldron",

    station: new Cauldron(),

    interactZone: {
      offsetX: 0,
      offsetY: 180,
      width: 150,
      height: 60,
    },

    hitbox: {
      offsetX: 0,
      offsetY: 30,
      width: 150,
      height: 70,
    },

    sprite: cauldronImg,
  }),

  //CAULDRON 3
  new GameObject({
    x: 850,
    y: 80,
    width: 150,
    height: 180,
    color: "#3d3131",

    type: "cauldron",

    station: new Cauldron(),

    interactZone: {
      offsetX: 0,
      offsetY: 180,
      width: 150,
      height: 60,
    },

    hitbox: {
      offsetX: 0,
      offsetY: 30,
      width: 150,
      height: 70,
    },

    sprite: cauldronImg,
  }),

  //BELL 1
  new GameObject({
    x: 1750,
    y: 500,
    width: 90,
    height: 100,
    color: "#ffd13b",

    sortOffset: 1000,

    type: "bell",

    //NEED TO CHANGE THIS TO DELIVERY STATION LATER
    station: new Cauldron(),

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
    x: 1080,
    y: 40,
    width: 100,
    height: 220,
    color: "#c45105",

    type: "oil-base",

    station: new Ingredient(ingredients.Oleum),

    interactZone: {
      offsetX: 0,
      offsetY: 220,
      width: 100,
      height: 70,
    },

    hitbox: {
      offsetX: 0,
      offsetY: 30,
      width: 100,
      height: 70,
    },

    sprite: oilVaseImg,
  }),

  //WATER BASE
  new GameObject({
    x: 1240,
    y: 40,
    width: 100,
    height: 220,
    color: "#c45105",

    type: "oil-base",

    station: new Ingredient(ingredients.Aqua),

    interactZone: {
      offsetX: 0,
      offsetY: 220,
      width: 100,
      height: 70,
    },

    hitbox: {
      offsetX: 0,
      offsetY: 30,
      width: 100,
      height: 70,
    },

    sprite: waterVaseImg,
  }),

  //WINE BASE
  new GameObject({
    x: 1400,
    y: 40,
    width: 100,
    height: 220,
    color: "#c45105",

    type: "oil-base",

    station: new Ingredient(ingredients.Vinum),

    interactZone: {
      offsetX: 0,
      offsetY: 220,
      width: 100,
      height: 70,
    },

    hitbox: {
      offsetX: 0,
      offsetY: 30,
      width: 100,
      height: 70,
    },

    sprite: wineVaseImg,
  }),

  //MANDRAKES
  new GameObject({
    x: 600,
    y: 890,
    width: 95,
    height: 140,
    color: "#3a2301",

    type: "ingredient",

    station: new Ingredient(ingredients.Mandrake),

    sortOffset: 1000,

    interactZone: {
      offsetX: 0,
      offsetY: -20,
      width: 95,
      height: 80,
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
    x: 800,
    y: 890,
    width: 95,
    height: 140,
    color: "#3a2301",

    type: "ingredient",

    station: new Ingredient(ingredients.AsphodelPetals),

    sortOffset: 1000,

    interactZone: {
      offsetX: 0,
      offsetY: -20,
      width: 95,
      height: 80,
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
    x: 1000,
    y: 890,
    width: 95,
    height: 140,
    color: "#3a2301",

    type: "ingredient",

    station: new Ingredient(ingredients.DragonScales),

    sortOffset: 1000,

    interactZone: {
      offsetX: 0,
      offsetY: -20,
      width: 95,
      height: 80,
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
    x: 1160,
    y: 840,
    width: 130,
    height: 190,
    color: "#3a2301",

    type: "ingredient",

    station: new Ingredient(ingredients.Shrivelfig),

    sortOffset: 1000,

    interactZone: {
      offsetX: 20,
      offsetY: 30,
      width: 95,
      height: 80,
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
    x: 70,
    y: 390,
    width: 120,
    height: 120,
    color: "#058ec4",

    type: "container",

    sprite: roundContImg,
    station: new Glass("ROUND"),

    sortOffset: 500,

    interactZone: {
      offsetX: 120,
      offsetY: 0,
      width: 150,
      height: 120,
    },

    hitbox: {
      offsetX: -1000,
      offsetY: 0,
      width: 0,
      height: 0,
    },
  }),

  //SQUARE CONTAINERS
  new GameObject({
    x: 60,
    y: 630,
    width: 120,
    height: 120,
    color: "#05a7c4",

    type: "container",

    sprite: cubicContImg,

    station: new Glass("SQUARE"),

    sortOffset: 1000,

    interactZone: {
      offsetX: 120,
      offsetY: 0,
      width: 150,
      height: 120,
    },

    hitbox: {
      offsetX: -1000,
      offsetY: 0,
      width: 0,
      height: 0,
    },
  }),
];

const tables = [
  //LEFT TABLE
  new GameObject({
    x: 0,
    y: 340,
    width: 250,
    height: 640,
    color: "#a09797",

    sprite: leftTableImg,

    hitbox: {
      offsetX: -10,
      offsetY: 80,
      width: 250,
      height: 350,
    },
  }),

  //RIGHT TABLE
  new GameObject({
    x: 1670,
    y: 340,
    width: 250,
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
    x: 540,
    y: 940,
    width: 800,
    height: 300,
    color: "#a09797",

    hitbox: {
      offsetX: 15,
      offsetY: 30,
      width: 770,
      height: 100,
    },

    sprite: bottomTableImg,
  }),

  //CENTER TABLE
  new GameObject({
    x: 610,
    y: 470,
    width: 650,
    height: 330,
    color: "#a09797",

    hitbox: {
      offsetX: 3,
      offsetY: 50,
      width: 640,
      height: 40,
    },

    sprite: centerTableImg,
  }),
];

export { ingredientsAndContainers, tables, stations };
