import itemAssets from "./itemsAssets.js";
import { getIngredientsFromMask, BREW } from "./items.js";

export function drawSingleItem(ctx, obj) {
  const inv = obj.station.inventory;

  if (!inv) return;

  const item = itemAssets[inv];

  if (!item || !item.sprite.complete) return;

  ctx.drawImage(item.sprite, obj.x + obj.width / 2 - 35, obj.y - 50, 70, 70);
}

export function drawCauldronItems(ctx, obj) {
  const inv =
    obj.station.inventory |
    ((obj.station.inventory >> BREW) & ((1 << BREW) - 1));

  if (!inv) return;

  const items = getIngredientsFromMask(inv);

  const spacing = 45;
  const itemSize = 40;

  items.forEach((item, index) => {
    const asset = itemAssets[item];

    if (!asset || !asset.sprite.complete) return;

    ctx.drawImage(
      asset.sprite,
      obj.x + 15 + index * spacing,
      obj.y - 35,
      itemSize,
      itemSize
    );
  });
}
