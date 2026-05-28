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

  const ratio =
    activeOrders[orderIndex].timeRemaining / activeOrders[orderIndex].maxTime;
  if (ratio >= 0.23) {
    gameData.essence += 15 + Math.ceil(100 * ratio);
  } else {
    gameData.essence += 25;
  }

  if (gameData.essence >= currentState.nextHeat) increaseHeat();
  activeOrders.splice(orderIndex, 1);

  if (ratio >= 0.5) {
    for (const order of activeOrders) {
      Math.min(
        order.maxTime,
        order.timeRemaining + (ratio / 2) * order.maxTime
      );
    }
  }
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

function progressOrders(timeStep) {
  let timedOutPots = 0;
  for (let i = activeOrders.length - 1; i >= 0; i--) {
    const order = activeOrders[i];

    order.timeRemaining -= timeStep;
    if (order.timeRemaining <= 0) {
      timedOutPots++;
      activeOrders.splice(i, 1);
    }
  }

  return timedOutPots;
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
  progressOrders,
  defaultState,
  currentState,
  resetState,
  increaseHeat,
};
