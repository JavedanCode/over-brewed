const gameData = {
  essence: 0,
  heat: 1,
};

const activeOrders = [];
function makeDelivery() {
  gameData.essence += 25;

  currentState.ordersFullfilled++;
  if (
    currentState.ordersFullfilled >=
    gameData.heat * defaultState.ordersPerHeat
  ) {
    // increase heat
    gameData.heat++;
    currentState.baseTime = defaultState.baseTime / (1 + gameData.heat);
    currentState.timeToNextOrder =
      defaultState.orderAdditionRatio * currentState.baseTime;
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
  baseTime: 10000, // in ms
  orderAdditionRatio: 8,
  orderDurationRatio: 12,
  ordersPerHeat: 3,
});

const currentState = {
  baseTime: defaultState.baseTime / (1 + gameData.heat),
  timeToNextOrder:
    (defaultState.orderAdditionRatio * defaultState.baseTime) / 2,
  ordersFullfilled: 0,
};

function resetState() {
  gameData.essence = 0;
  gameData.heat = 1;

  currentState.baseTime = defaultState.baseTime / (1 + gameData.heat);
  currentState.timeToNextOrder =
    defaultState.orderAdditionRatio * defaultState.baseTime;
  currentState.ordersFullfilled = 0;
}

export {
  gameData,
  activeOrders,
  addOrder,
  makeDelivery,
  defaultState,
  currentState,
  resetState,
};

// WE PROBABLY WILL ADD MORE STUFF HERE LATER
