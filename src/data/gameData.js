import { resetGameplayMusic } from "../audio/audioManager.js";
import { on, emit } from "../core/gameEvents.js";
import { getRandomRecipe } from "./items.js";

const gameData = {
  essence: 0,
  heat: 1,
};

const difficultyLevels = [
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

const dynamicDifficulty = {
  scale: 1,
  performance: 0,
};

let lastDelivery = performance.now();
function adjustDynamicDifficulty(orderIndex, ratio) {
  if (currentState.ordersFullfilled === 1) {
    lastDelivery = performance.now();
    return;
  }
  const now = performance.now();
  const sinceLastRatio =
    (now - lastDelivery) /
    (currentState.baseTime * currentState.timeToNextOrder);
  lastDelivery = now;

  let performanceDelta = 0;

  // consistency
  if (sinceLastRatio < 0.4) performanceDelta += 14;
  else if (sinceLastRatio < 0.8) performanceDelta += 8;
  else if (sinceLastRatio < 1.2) performanceDelta += 2;
  else if (sinceLastRatio < 1.6) performanceDelta -= 5;
  else performanceDelta -= 12;

  // delivery quality
  if (ratio > 0.7) performanceDelta += 10;
  else if (ratio > 0.45) performanceDelta += 5;
  else if (ratio > 0.3) performanceDelta += 0;
  else if (ratio > 0.1) performanceDelta -= 6;
  else performanceDelta -= 12;

  if (activeOrders.length <= 1) performanceDelta *= 1.2;
  else if (activeOrders.length <= 2) performanceDelta *= 1.1;

  dynamicDifficulty.performance *= 0.9;
  dynamicDifficulty.performance += performanceDelta;
  dynamicDifficulty.performance = Math.max(
    -100,
    Math.min(100, dynamicDifficulty.performance)
  );
  dynamicDifficulty.scale = 1 + dynamicDifficulty.performance * 0.0025;
  dynamicDifficulty.scale = Math.max(
    0.85,
    Math.min(1.25, dynamicDifficulty.scale)
  );
}

function increaseHeat() {
  if (gameData.heat >= difficultyLevels.length) return;
  gameData.heat++;
  emit("heatUp", gameData.heat);
}

const activeOrders = [];

on("delivered", (orderIndex) => {
  currentState.ordersFullfilled++;

  const ratio =
    activeOrders[orderIndex].timeRemaining / activeOrders[orderIndex].maxTime;
  if (ratio >= 0.48) {
    gameData.essence += 15 + Math.ceil(100 * ratio);
  } else {
    gameData.essence += 25 + Math.ceil(50 * ratio);
  }

  if (gameData.essence >= currentState.nextHeat) increaseHeat();

  activeOrders.splice(orderIndex, 1);

  adjustDynamicDifficulty(orderIndex, ratio);
  for (const order of activeOrders) {
    order.timeRemaining = Math.min(
      order.maxTime,
      order.timeRemaining + (ratio / 3) * order.maxTime
    );
  }

  if (activeOrders.length === 0 && ratio > 0.6) {
    addOrder(getRandomRecipe());
  }
});

function addOrder(recipe) {
  if (activeOrders.length > 2) return;

  activeOrders.push({
    recipe: recipe.recipe,
    timeRemaining:
      (currentState.baseTime * defaultState.orderDurationRatio * recipe.count) /
      dynamicDifficulty.scale,
    maxTime:
      (currentState.baseTime * defaultState.orderDurationRatio * recipe.count) /
      dynamicDifficulty.scale,
  });
  emit("new_order");

  currentState.timeToNextOrder =
    (defaultState.orderAdditionRatio * currentState.baseTime) /
    dynamicDifficulty.scale;
}

function progressOrders(timeStep) {
  let timedOutPots = 0;
  for (let i = activeOrders.length - 1; i >= 0; i--) {
    const order = activeOrders[i];

    order.timeRemaining -= timeStep;
    if (order.timeRemaining <= 0) {
      timedOutPots++;
      dynamicDifficulty.performance -= 10;
      activeOrders.splice(i, 1);
    }
  }

  dynamicDifficulty.scale = 1 + dynamicDifficulty.performance * 0.0025;
  dynamicDifficulty.scale = Math.max(
    0.85,
    Math.min(1.25, dynamicDifficulty.scale)
  );
  return timedOutPots;
}

const defaultState = Object.freeze({
  baseTime: 9000, // in ms
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
  lastDelivery = performance.now();

  gameData.essence = 0;
  gameData.heat = 1;

  currentState.ordersFullfilled = 0;
  dynamicDifficulty.scale = 1;
  dynamicDifficulty.performance = 0;

  resetGameplayMusic();
  emit("heatUp", 1);
}

on("heatUp", (heatLevel) => {
  currentState.nextHeat = difficultyLevels[heatLevel].requiredEssence;
  currentState.baseTime = defaultState.baseTime / (1 + heatLevel * 0.55);
  currentState.timeToNextOrder =
    (defaultState.orderAdditionRatio * currentState.baseTime) /
    dynamicDifficulty.scale;
});

export {
  gameData,
  activeOrders,
  addOrder,
  progressOrders,
  defaultState,
  currentState,
  resetState,
};
