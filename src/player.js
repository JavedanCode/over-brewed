import snape from "./assets/snape.png";
import itemAssets from "./itemsAssets.js";
import { INGREDIENTS } from "./items.js";
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
    maxSpeed,
    acceleration,
    deceleration,
    animations,
    currentAnimation,
    currentFrame,
    frameTimer,
    frameDelay,
    facing,
    frameWidth,
    frameHeight,
  }) {
    //START POSITION AND DIMENSIONS
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    //COLOR (ONLY USED IF THERE IS NO SPRITE DEFINED)
    this.color = color || "gray";

    //HITBOX
    this.hitbox = hitbox || {
      offsetX: 0,
      offsetY: 0,
      width: width,
      height: height,
    };

    //SPRITE
    this.sprite = sprite || null;

    //INVENTORY
    this.inventory = inventory || null;

    //MAX SPEED AND ACCEL/DECEL
    this.maxSpeed = maxSpeed;

    this.velocityX = velocityX;
    this.velocityY = velocityY;

    this.acceleration = acceleration;
    this.deceleration = deceleration;

    //ANIMATIONS
    this.animations = animations || {};
    this.currentAnimation = currentAnimation || "idleDown";
    this.currentFrame = currentFrame || 0;

    this.frameTimer = frameTimer || 0;
    this.frameDelay = frameDelay || 24;

    this.facing = facing || "right";

    this.frameWidth = frameWidth || 16;
    this.frameHeight = frameHeight || 16;
  }

  getHitbox() {
    return {
      x: this.x + this.hitbox.offsetX,
      y: this.y + this.hitbox.offsetY,
      width: this.hitbox.width,
      height: this.hitbox.height,
    };
  }

  updateAnimation() {
    let newAnimation = this.currentAnimation;

    //MOVEMENT ANIMATIONS
    if (this.velocityY < 0) {
      newAnimation = "walkUp";
    } else if (this.velocityY > 0) {
      newAnimation = "walkDown";
    } else if (this.velocityX < 0) {
      newAnimation = "walkLeft";
    } else if (this.velocityX > 0) {
      newAnimation = "walkRight";
    }

    //IDLE
    else {
      if (newAnimation === "walkUp") {
        newAnimation = "idleUp";
      } else if (newAnimation === "walkDown") {
        newAnimation = "idleDown";
      } else if (newAnimation === "walkLeft") {
        newAnimation = "idleLeft";
      } else if (newAnimation === "walkRight") {
        newAnimation = "idleRight";
      }
    }

    //APPLY NEW ANIMATION
    if (newAnimation !== this.currentAnimation) {
      this.currentAnimation = newAnimation;

      this.currentFrame = 0;
      this.frameTimer = 0;
    }

    //FRAME TIMING

    this.frameTimer++;

    if (this.frameTimer >= this.frameDelay) {
      this.frameTimer = 0;

      const anim = this.animations[newAnimation];

      if (!anim) return;

      this.currentFrame++;

      if (this.currentFrame >= anim.frames) {
        this.currentFrame = 0;
      }
    }
  }

  draw(ctx) {
    if (this.sprite && this.sprite.complete) {
      const anim = this.animations[this.currentAnimation];

      if (!anim) return;

      const sourceX = this.currentFrame * this.frameWidth;
      const sourceY = anim.row * this.frameHeight;

      ctx.drawImage(
        this.sprite,

        sourceX,
        sourceY,
        this.frameWidth,
        this.frameHeight,

        this.x,
        this.y,
        this.width,
        this.height
      );
    } else {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    const heldItem = itemAssets[player.inventory.ingredient];
    const heldContainer = itemAssets[player.inventory.glass];

    if (heldItem) {
      ctx.drawImage(heldItem.sprite, this.x + 40, this.y - 110, 90, 90);
    }

    if (heldContainer) {
      ctx.drawImage(heldContainer.sprite, this.x + 40, this.y - 110, 90, 100);
    }
  }
}

class player_inventory {
  constructor() {
    this.glass = 0;
    this.ingredient = 0;
    this.hasGlass = () => this.glass !== 0;
    this.empty = () => !this.hasGlass() && this.ingredient === 0;
    this.hasOnlyGlass = () => {
      if (!this.hasGlass()) return false;
      if (
        (this.glass & ~(INGREDIENTS.RoundGlass | INGREDIENTS.CubicGlass)) !==
        0
      )
        return false;
      return true;
    };
  }
}

const player = new Player({
  x: 1400,
  y: 600,
  width: 160,
  height: 260,
  color: "blue",
  maxSpeed: 4.5,

  //CHANGE THESE TO CHANGE THE CURVES
  acceleration: 0.4 / 17, // divided by 17 due to expecting ~17ms per frame
  deceleration: 0.2 / 17,

  velocityX: 0,
  velocityY: 0,

  hitbox: {
    offsetX: 25,
    offsetY: 0,
    width: 110,
    height: 260,
  },

  animations: {
    idleDown: {
      row: 0,
      frames: 4,
    },

    idleUp: {
      row: 1,
      frames: 4,
    },

    idleLeft: {
      row: 2,
      frames: 4,
    },

    idleRight: {
      row: 3,
      frames: 4,
    },

    walkDown: {
      row: 4,
      frames: 4,
    },

    walkUp: {
      row: 5,
      frames: 4,
    },

    walkLeft: {
      row: 6,
      frames: 4,
    },
    walkRight: {
      row: 7,
      frames: 4,
    },
  },

  sprite: snapeImg,

  inventory: new player_inventory(),
});

export default player;
