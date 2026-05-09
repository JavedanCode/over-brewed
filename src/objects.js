import {
  cauldronImg,
  waterVaseImg,
  oilVaseImg,
  wineVaseImg,
  centerTableImg,
  bottomTableImg,
  ingredientImg,
  sideTableImg,
} from './assets.js';
import GameObject from './gameObject.js';

import { Cauldron, Station, Ingredient, Glass } from './station.js';
import { CRUSH, CUT, ingredients } from './items.js';

const objects = [
  //LEFT TABLE
  new GameObject({
    x: -40,
    y: 350,
    width: 240,
    height: 500,
    color: '#a09797',

    sprite: sideTableImg,
  }),

  //RIGHT TABLE
  new GameObject({
    x: 1630,
    y: 300,
    width: 340,
    height: 700,
    color: '#a09797',

    sprite: sideTableImg,
  }),

  //BOTTOM TABLE
  new GameObject({
    x: 540,
    y: 940,
    width: 800,
    height: 300,
    color: '#a09797',

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
    x: 670,
    y: 470,
    width: 550,
    height: 250,
    color: '#a09797',

    hitbox: {
      offsetX: 3,
      offsetY: 30,
      width: 545,
      height: 70,
    },

    sprite: centerTableImg,
  }),

  //CUTTING BOARD
  new GameObject({
    x: 700,
    y: 500,
    width: 70,
    height: 50,
    color: '#6805c4',

    sortOffset: 1000,

    type: 'cutting',

    station: new Station(CUT),

    interactZone: {
      offsetX: 0,
      offsetY: -60,
      width: 70,
      height: 110,
    },
  }),

  //CRUSHING STATION
  new GameObject({
    x: 1000,
    y: 500,
    width: 70,
    height: 50,
    color: '#05c46b',

    sortOffset: 1000,

    station: new Station(CRUSH),

    interactZone: {
      offsetX: 0,
      offsetY: -60,
      width: 70,
      height: 110,
    },
  }),

  //CAULDRON 1
  new GameObject({
    x: 400,
    y: 80,
    width: 150,
    height: 180,
    color: '#3d3131',

    type: 'cauldron',

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
    color: '#3d3131',

    type: 'cauldron',

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
    color: '#3d3131',

    type: 'cauldron',

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

  //OIL BASE
  new GameObject({
    x: 1080,
    y: 40,
    width: 100,
    height: 220,
    color: '#c45105',

    type: 'oil-base',

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
    color: '#c45105',

    type: 'oil-base',

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
    color: '#c45105',

    type: 'oil-base',

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
    color: '#3a2301',

    type: 'ingredient',

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

    sprite: ingredientImg,
  }),

  //PETALS
  new GameObject({
    x: 800,
    y: 890,
    width: 95,
    height: 140,
    color: '#3a2301',

    type: 'ingredient',

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

    sprite: ingredientImg,
  }),

  //SCALES
  new GameObject({
    x: 1000,
    y: 890,
    width: 95,
    height: 140,
    color: '#3a2301',

    type: 'ingredient',

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

    sprite: ingredientImg,
  }),

  //FIGS
  new GameObject({
    x: 1200,
    y: 890,
    width: 95,
    height: 140,
    color: '#3a2301',

    type: 'ingredient',

    station: new Ingredient(ingredients.Shrivelfig),

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

    sprite: ingredientImg,
  }),

  //ROUND CONTAINERS
  new GameObject({
    x: 100,
    y: 340,
    width: 100,
    height: 100,
    color: '#058ec4',

    type: 'container',

    station: new Glass('ROUND'),

    sortOffset: 500,

    interactZone: {
      offsetX: 100,
      offsetY: 0,
      width: 80,
      height: 100,
    },
  }),

  //SQUARE CONTAINERS
  new GameObject({
    x: 100,
    y: 660,
    width: 100,
    height: 100,
    color: '#05a7c4',

    type: 'container',

    station: new Glass('SQUARE'),

    sortOffset: 1000,

    interactZone: {
      offsetX: 100,
      offsetY: 0,
      width: 80,
      height: 100,
    },
  }),

  // //BELL 1
  // new GameObject({
  //   x: 1720,
  //   y: 300,
  //   width: 50,
  //   height: 50,
  //   color: "#ffd13b",

  //   sortOffset: 1000,

  //   type: "bell",

  //   interactZone: {
  //     offsetX: -100,
  //     offsetY: -20,
  //     width: 100,
  //     height: 100,
  //   },
  // }),

  // //BELL 2
  // new GameObject({
  //   x: 1720,
  //   y: 520,
  //   width: 50,
  //   height: 50,
  //   color: "#ffd13b",

  //   sortOffset: 1000,

  //   type: "bell",

  //   interactZone: {
  //     offsetX: -100,
  //     offsetY: -20,
  //     width: 100,
  //     height: 100,
  //   },
  // }),

  // //BELL 3
  // new GameObject({
  //   x: 1720,
  //   y: 740,
  //   width: 50,
  //   height: 50,
  //   color: "#ffd13b",

  //   sortOffset: 1000,

  //   type: "bell",

  //   interactZone: {
  //     offsetX: -100,
  //     offsetY: -20,
  //     width: 100,
  //     height: 100,
  //   },
  // }),
];

export default objects;
