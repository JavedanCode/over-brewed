import { player_inventory } from "./items";

const player = {
  x: 1400,
  y: 600,
  width: 80,
  height: 180,
  color: "blue",
  speed: 4,

  velocityX: 0,
  velocityY: 0,

  inventory: new player_inventory(),
};

export default player;
