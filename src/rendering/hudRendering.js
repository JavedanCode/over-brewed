import { activeOrders } from "../data/orders.js";
import itemAssets from "../data/itemsAssets.js";
import player from "../entities/player.js";
import gameData from "../data/gameData.js";
import heart from "../assets/items/heart.png";

const heartImg = new Image();
heartImg.src = heart;

export function drawHUD(ctx, canvas) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  // ESSENCE TEXT

  ctx.fillStyle = "white";
  ctx.font = "36px HarryPotter";
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";

  ctx.fillText(`Essence: ${gameData.essence}`, canvas.width - 40, 45);

  // LIVES

  ctx.textAlign = "left";

  ctx.fillText(`Lives: ${player.lives}`, 40, 45);

  // ORDERS PANEL

  ctx.fillStyle = "rgba(0, 0, 0, 0.4)";

  ctx.fillRect(canvas.width - 260, canvas.height - 320, 240, 280);

  ctx.fillStyle = "white";
  ctx.textAlign = "center";

  ctx.fillText("Orders", canvas.width - 140, canvas.height - 280);

  const startX = canvas.width - 210;
  const startY = canvas.height - 240;

  activeOrders.forEach((order, index) => {
    const asset = itemAssets[order.recipe];

    if (!asset || !asset.sprite.complete) return;

    const x = startX;
    const y = startY + index * 70;

    ctx.drawImage(asset.sprite, x, y, 60, 60);

    const ratio = order.timeRemaining / order.maxTime;

    const centerX = x + 120;
    const centerY = y + 30;

    const radius = 15;

    // background circle
    ctx.strokeStyle = "#3b2d4d";
    ctx.lineWidth = 6;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();

    // timer arc
    if (ratio > 0.5) ctx.strokeStyle = "green";
    else if (ratio > 0.25) ctx.strokeStyle = "yellow";
    else ctx.strokeStyle = "red";

    ctx.beginPath();
    ctx.arc(
      centerX,
      centerY,
      radius,
      -Math.PI / 2,
      -Math.PI / 2 + Math.PI * 2 * ratio
    );

    ctx.stroke();
  });
}
