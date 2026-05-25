import itemAssets from "../data/itemsAssets.js";
import { player } from "../entities/player.js";
import { gameData, activeOrders } from "../data/gameData.js";
import heart from "../assets/items/heart.png";
import essence from "../assets/items/essence.png";

const essenceImg = new Image();
essenceImg.src = essence;

const heartImg = new Image();
heartImg.src = heart;

export function drawHUD(ctx, canvas) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  // ESSENCE TEXT

  ctx.fillStyle = "white";
  ctx.font = "50px HarryPotter";
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";

  ctx.drawImage(essenceImg, canvas.width - 220, 20, 100, 70);
  ctx.fillText(`: ${gameData.essence}`, canvas.width - 40, 60);

  // LIVES

  ctx.textAlign = "left";
  ctx.drawImage(heartImg, 30, 20, 100, 70);

  ctx.fillText(`: ${player.lives}`, 160, 60);

  // ORDERS PANEL

  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";

  ctx.fillRect(canvas.width - 400, canvas.height - 180, 370, 180);

  ctx.fillStyle = "white";
  ctx.textAlign = "center";

  ctx.fillText("Orders", canvas.width - 215, canvas.height - 200);

  const startX = canvas.width - 380;
  const startY = canvas.height - 100;

  activeOrders.forEach((order, index) => {
    const asset = itemAssets[order.recipe];

    if (!asset || !asset.sprite.complete) return;

    const x = startX + index * 115;
    const y = startY;

    ctx.drawImage(asset.sprite, x, y, 100, 100);

    const ratio = order.timeRemaining / order.maxTime;

    const centerX = x + 50;
    const centerY = y - 35;

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
