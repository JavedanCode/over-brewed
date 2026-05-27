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
  if (gameData.heat >= defaultState.maxHeat) return;
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
  baseTime: 15000, // in ms
  maxHeat: 6,
  orderAdditionRatio: 12,
  orderDurationRatio: 6,
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

  heatListeners.length = 0;
  attachHeatListener((heatLevel) => {
    currentState.nextHeat += heatLevel + 1;
    currentState.baseTime = defaultState.baseTime / (2 + heatLevel);
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
