const gameData = {
  essence: 0,
  heat: 1,
};

let heatListeners = [];
function attachHeatListener(observer) {
  if (heatListeners.includes(observer)) return false;

  heatListeners.push(observer);
  return true;
}
function detachHeatListener(observer) {
  const index = heatListeners.indexOf(observer);
  if (index === -1) return false;

  heatListeners.splice(index, 1);
  return true;
}

function callHeatListeners() {
  heatListeners.forEach((observer) => observer(gameData.heat));
}

function increaseHeat() {
  gameData.heat++;
  callHeatListeners();
}

const activeOrders = [];
function makeDelivery() {
  gameData.essence += 25;

  currentState.ordersFullfilled++;
  if (currentState.ordersFullfilled >= currentState.nextHeat) {
    increaseHeat();
  }
}

function addOrder(recipe) {
  if (activeOrders.length > 2) return;
  activeOrders.push({
    recipe: recipe.recipe,
    timeRemaining:
      currentState.baseTime * defaultState.orderDurationRatio * recipe.count,
    maxTime:
      currentState.baseTime * defaultState.orderDurationRatio * recipe.count,
  });
}

const defaultState = Object.freeze({
  baseTime: 8000, // in ms
  orderAdditionRatio: 8,
  orderDurationRatio: 12,
});

const currentState = {
  baseTime: defaultState.baseTime / (1 + gameData.heat),
  timeToNextOrder:
    (defaultState.orderAdditionRatio * defaultState.baseTime) / 2,
  ordersFullfilled: 0,
  nextHeat: gameData.heat + 1,
};

function resetState() {
  gameData.essence = 0;
  gameData.heat = 1;
  currentState.ordersFullfilled = 0;

  heatListeners.length = 0;
  attachHeatListener((heatLevel) => {
    currentState.nextHeat += heatLevel + 1;
    currentState.baseTime = defaultState.baseTime / (1 + heatLevel);
    currentState.timeToNextOrder =
      defaultState.orderAdditionRatio * currentState.baseTime;
  });
  callHeatListeners();
}

export {
  gameData,
  activeOrders,
  addOrder,
  makeDelivery,
  defaultState,
  currentState,
  resetState,
  attachHeatListener,
  detachHeatListener,
  increaseHeat,
};
