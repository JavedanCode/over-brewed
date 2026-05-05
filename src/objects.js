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
    x: 560,
    y: 0,
    width: 800,
    height: 140,
    color: "#a09797",

    hitbox: {
      offsetX: 0,
      offsetY: 30,
      width: 800,
      height: 60,
    },
  }),

  //BOTTOM TABLE
  new GameObject({
    x: 460,
    y: 940,
    width: 1000,
    height: 140,
    color: "#a09797",

    hitbox: {
      offsetX: 0,
      offsetY: 50,
      width: 1000,
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
    color: "#c40505",

    sortOffset: 100,

    interactZone: {
      offsetX: 0,
      offsetY: -60,
      width: 70,
      height: 120,
    },
  }),
];

export default objects;
