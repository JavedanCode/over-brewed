import { activeOrders } from "../data/orders.js";
import itemAssets from "../data/itemsAssets.js";

export function drawHUD(ctx, canvas) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  // TOP BAR

  ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
  ctx.fillRect(0, 0, canvas.width, 90);

  // ESSENCE TEXT

  ctx.fillStyle = "white";
  ctx.font = "36px serif";
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";

  ctx.fillText("Essence: 0", canvas.width - 40, 45);

  // ORDERS PANEL

  ctx.fillStyle = "rgba(0, 0, 0, 0.4)";

  ctx.fillRect(canvas.width - 260, canvas.height - 320, 240, 280);

  ctx.fillStyle = "white";
  ctx.font = "32px serif";
  ctx.textAlign = "center";

  ctx.fillText("Orders", canvas.width - 140, canvas.height - 280);

  const startX = canvas.width - 220;
  const startY = canvas.height - 240;

  activeOrders.forEach((order, index) => {
    const asset = itemAssets[order];

    if (!asset || !asset.sprite.complete) return;

    ctx.drawImage(asset.sprite, startX, startY + index * 70, 60, 60);
  });
}
