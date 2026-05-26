import recipeImages from "../data/recipeAssets.js";

export function drawRecipesMenu(ctx, canvas) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  // dark overlay

  ctx.fillStyle = "rgba(0,0,0,0.75)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // title

  ctx.fillStyle = "white";
  ctx.font = "60px HarryPotter";
  ctx.textAlign = "center";

  ctx.fillText("Recipes", canvas.width / 2, 50);

  // recipes

  const spacing = 40;
  const width = 420;
  const height = 520;

  const recipes = Object.values(recipeImages);

  const totalWidth = recipes.length * width + (recipes.length - 1) * spacing;

  let x = canvas.width / 2 - totalWidth / 2;
  const y = 100;
  ctx.filter = "brightness(0.8)";

  recipes.forEach((recipe) => {
    ctx.drawImage(recipe, x, y, width, height);

    x += width + spacing;
  });
}
