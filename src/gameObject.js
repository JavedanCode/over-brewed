export default class GameObject {
  constructor({ x, y, width, height, color, hitbox }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.color = color || "gray";

    this.hitbox = hitbox || {
      offsetX: 0,
      offsetY: 0,
      width: width,
      height: height,
    };
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
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
