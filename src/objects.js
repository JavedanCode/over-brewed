import GameObject from "./gameObject.js";

const objects = [
  //LEFT TABLE
  new GameObject({
    x: 0,
    y: 200,
    width: 200,
    height: 700,
    color: "#a09797",
  }),

  //RIGHT TABLE
  new GameObject({
    x: 1720,
    y: 200,
    width: 200,
    height: 700,
    color: "#a09797",
  }),

  //TOP TABLE
  new GameObject({
    x: 400,
    y: 0,
    width: 570,
    height: 140,
    color: "#a09797",

    hitbox: {
      offsetX: 0,
      offsetY: 30,
      width: 570,
      height: 60,
    },
  }),

  //BOTTOM TABLE
  new GameObject({
    x: 540,
    y: 940,
    width: 800,
    height: 140,
    color: "#a09797",

    hitbox: {
      offsetX: 0,
      offsetY: 30,
      width: 800,
      height: 70,
    },
  }),

  //CENTER TABLE
  new GameObject({
    x: 700,
    y: 470,
    width: 500,
    height: 140,
    color: "#a09797",

    hitbox: {
      offsetX: 0,
      offsetY: 20,
      width: 500,
      height: 70,
    },
  }),

  //CUTTING BOARD
  new GameObject({
    x: 760,
    y: 490,
    width: 70,
    height: 50,
    color: "#6805c4",

    sortOffset: 100,

    interactZone: {
      offsetX: 0,
      offsetY: -60,
      width: 70,
      height: 110,
    },
  }),

  //CRUSHING STATION
  new GameObject({
    x: 1060,
    y: 490,
    width: 70,
    height: 50,
    color: "#05c46b",

    sortOffset: 100,

    interactZone: {
      offsetX: 0,
      offsetY: -60,
      width: 70,
      height: 110,
    },
  }),

  //CAULDRON 1
  new GameObject({
    x: 450,
    y: 40,
    width: 70,
    height: 50,
    color: "#3d3131",

    sortOffset: 100,

    interactZone: {
      offsetX: 0,
      offsetY: 50,
      width: 70,
      height: 90,
    },
  }),

  //CAULDRON 2
  new GameObject({
    x: 650,
    y: 40,
    width: 70,
    height: 50,
    color: "#3d3131",

    sortOffset: 100,

    interactZone: {
      offsetX: 0,
      offsetY: 50,
      width: 70,
      height: 90,
    },
  }),

  //CAULDRON 3
  new GameObject({
    x: 850,
    y: 40,
    width: 70,
    height: 50,
    color: "#3d3131",

    sortOffset: 100,

    interactZone: {
      offsetX: 0,
      offsetY: 50,
      width: 70,
      height: 90,
    },
  }),

  //OIL BASE
  new GameObject({
    x: 1050,
    y: 0,
    width: 120,
    height: 120,
    color: "#c45105",

    interactZone: {
      offsetX: 0,
      offsetY: 60,
      width: 120,
      height: 120,
    },
  }),

  //WATER BASE
  new GameObject({
    x: 1250,
    y: 0,
    width: 120,
    height: 120,
    color: "#a6c51d",

    interactZone: {
      offsetX: 0,
      offsetY: 60,
      width: 120,
      height: 120,
    },
  }),

  //WINE BASE
  new GameObject({
    x: 1450,
    y: 0,
    width: 120,
    height: 120,
    color: "#1bc6fa",

    interactZone: {
      offsetX: 0,
      offsetY: 60,
      width: 120,
      height: 120,
    },
  }),

  //INGREDIENT 1
  new GameObject({
    x: 600,
    y: 970,
    width: 80,
    height: 80,
    color: "#3a2301",

    sortOffset: 100,

    interactZone: {
      offsetX: 0,
      offsetY: -80,
      width: 80,
      height: 100,
    },
  }),

  //INGREDIENT 2
  new GameObject({
    x: 800,
    y: 970,
    width: 80,
    height: 80,
    color: "#f044ca",

    sortOffset: 100,

    interactZone: {
      offsetX: 0,
      offsetY: -80,
      width: 80,
      height: 100,
    },
  }),

  //INGREDIENT 3
  new GameObject({
    x: 1000,
    y: 970,
    width: 80,
    height: 80,
    color: "#160944",

    sortOffset: 100,

    interactZone: {
      offsetX: 0,
      offsetY: -80,
      width: 80,
      height: 100,
    },
  }),

  //INGREDIENT 4
  new GameObject({
    x: 1200,
    y: 970,
    width: 80,
    height: 80,
    color: "#571f3e",

    sortOffset: 100,

    interactZone: {
      offsetX: 0,
      offsetY: -80,
      width: 80,
      height: 100,
    },
  }),

  //ROUND CONTAINERS
  new GameObject({
    x: 100,
    y: 340,
    width: 100,
    height: 100,
    color: "#058ec4",

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
    color: "#05a7c4",

    sortOffset: 1000,

    interactZone: {
      offsetX: 100,
      offsetY: 0,
      width: 80,
      height: 100,
    },
  }),

  //BELL 1
  new GameObject({
    x: 1720,
    y: 300,
    width: 50,
    height: 50,
    color: "#ffd13b",

    sortOffset: 1000,

    interactZone: {
      offsetX: -100,
      offsetY: -20,
      width: 100,
      height: 100,
    },
  }),

  //BELL 2
  new GameObject({
    x: 1720,
    y: 520,
    width: 50,
    height: 50,
    color: "#ffd13b",

    sortOffset: 1000,

    interactZone: {
      offsetX: -100,
      offsetY: -20,
      width: 100,
      height: 100,
    },
  }),

  //BELL 3
  new GameObject({
    x: 1720,
    y: 740,
    width: 50,
    height: 50,
    color: "#ffd13b",

    sortOffset: 1000,

    interactZone: {
      offsetX: -100,
      offsetY: -20,
      width: 100,
      height: 100,
    },
  }),
];

export default objects;
