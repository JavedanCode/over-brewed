import { RECIPES } from "./items.js";

export const activeOrders = [
  {
    recipe: RECIPES.LovePotion,
    timeRemaining: 35000,
    maxTime: 45000,
  },
  // {
  //   recipe: RECIPES.DragonPoison,
  //   timeRemaining: 35000,
  //   maxTime: 45000,
  // },
  // {
  //   recipe: RECIPES.ManegroPotion,
  //   timeRemaining: 35000,
  //   maxTime: 45000,
  // },
];

export const MAX_ORDERS = 3;
