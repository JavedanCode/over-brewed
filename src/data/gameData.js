import {
  resetGameplayMusic,
  updateGameplayMusic,
} from "../audio/audioManager.js";
import { on, emit } from "../core/gameEvents.js";

const gameData = {
  essence: 0,
  heat: 1,
};

const difficulty = [
  {
    requiredEssence: 0,
  },
  {
    requiredEssence: 100,
  },
  {
    requiredEssence: 300,
  },
  {
    requiredEssence: 600,
  },
  {
    requiredEssence: 900,
  },
  {
    requiredEssence: 1200,
  },
];

function increaseHeat() {
  if (gameData.heat >= difficulty.length) return;
  gameData.heat++;
  updateGameplayMusic(gameData.heat);
  emit("heatUp", gameData.heat);
}

const activeOrders = [];

on("delivered", (orderIndex) => {
  currentState.ordersFullfilled++;

  const order = activeOrders[orderIndex];
  gameData.essence +=
    15 + Math.ceil(100 * (order.timeRemaining / order.maxTime));

  if (gameData.essence >= currentState.nextHeat) increaseHeat();
  activeOrders.splice(orderIndex, 1);
});

function addOrder(recipe) {
  if (activeOrders.length > 2) return;

  activeOrders.push({
    recipe: recipe.recipe,
    timeRemaining:
      currentState.baseTime * defaultState.orderDurationRatio * recipe.count,
    maxTime:
      currentState.baseTime * defaultState.orderDurationRatio * recipe.count,
  });
  emit("new_order");
}

const defaultState = Object.freeze({
  baseTime: 15000, // in ms
  orderAdditionRatio: 10,
  orderDurationRatio: 8,
  cookRatio: 3,
  stationRatio: 2 / 3,
});

// check reset State for starting values
const currentState = {
  baseTime: 0,
  timeToNextOrder: 0,
  ordersFullfilled: 0,
  nextHeat: 0,
};

function resetState() {
  gameData.essence = 0;
  gameData.heat = 1;
  currentState.ordersFullfilled = 0;
  resetGameplayMusic();
  emit("heatUp", 1);
}

on("heatUp", (heatLevel) => {
  currentState.nextHeat = difficulty[heatLevel].requiredEssence;
  currentState.baseTime = defaultState.baseTime / (2 + heatLevel);
  currentState.timeToNextOrder =
    defaultState.orderAdditionRatio * currentState.baseTime;
});

export {
  gameData,
  activeOrders,
  addOrder,
  defaultState,
  currentState,
  resetState,
  increaseHeat,
};
