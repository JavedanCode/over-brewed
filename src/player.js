import { player_inventory } from "./items.js";
import snape from "./assets/snape.png";
const snapeImg = new Image();
snapeImg.src = snape;

class Player {
  constructor({
    x,
    y,
    width,
    height,
    velocityX,
    velocityY,
    color,
    hitbox,
    sprite,
    inventory,
    speed,
    acceleration,
    deceleration,
  }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.velocityX = velocityX;
    this.velocityY = velocityY;

    this.color = color || "gray";

    this.hitbox = hitbox || {
      offsetX: 0,
      offsetY: 0,
      width: width,
      height: height,
    };
    this.sprite = sprite || null;

    this.inventory = inventory || null;

    this.speed = speed;

    this.acceleration = acceleration;
    this.deceleration = deceleration;
  }

  getHitbox() {
    return {
      x: this.x + this.hitbox.offsetX,
      y: this.y + this.hitbox.offsetY,
      width: this.hitbox.width,
      height: this.hitbox.height,
    };
  }

  draw(ctx) {
    if (this.sprite && this.sprite.complete) {
      ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
      return;
    }

    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const player = new Player({
  x: 1400,
  y: 600,
  width: 110,
  height: 180,
  color: "blue",
  speed: 4,

  //CHANGE THESE TO CHANGE THE CURVES
  acceleration: 0.1,
  deceleration: 0.2,

  velocityX: 0,
  velocityY: 0,

  hitbox: {
    offsetX: 25,
    offsetY: 0,
    width: 85,
    height: 180,
  },

  sprite: snapeImg,

  inventory: new player_inventory(),
});

export default player;
