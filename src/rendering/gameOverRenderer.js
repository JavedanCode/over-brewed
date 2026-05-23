export function drawGameOver(ctx, canvas) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  ctx.fillStyle = "rgba(0,0,0,0.85)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";

  ctx.font = "90px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - 40);

  ctx.font = "32px serif";

  ctx.fillText(
    "Press Enter to return to menu",
    canvas.width / 2,
    canvas.height / 2 + 60
  );
}
