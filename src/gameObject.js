export default class GameObject {
  constructor({
    x,
    y,
    width,
    height,
    color,
    hitbox,
    interactZone,
    sortOffset = 0,
  }) {
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

    this.interactZone = interactZone || null;

    this.sortOffset = sortOffset;
  }

  getHitbox() {
    return {
      x: this.x + this.hitbox.offsetX,
      y: this.y + this.hitbox.offsetY,
      width: this.hitbox.width,
      height: this.hitbox.height,
    };
  }

  getInteractZone() {
    if (!this.interactZone) return null;

    return {
      x: this.x + this.interactZone.offsetX,
      y: this.y + this.interactZone.offsetY,
      width: this.interactZone.width,
      height: this.interactZone.height,
    };
  }

  getSortY() {
    return this.y + this.height + this.sortOffset;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
