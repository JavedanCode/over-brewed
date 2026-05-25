const gameData = {
  essence: 0,
  heat: 1,
};

const activeOrders = [];

const defaultState = Object.freeze({
  baseTime: 4000, // in ms
  orderAdditionRatio: 7,
  orderDurationRatio: 12,
  ordersPerHea: 3,
});

const currentState = {
  baseTime: defaultState.baseTime / (1 + gameData.heat),
  timeToNextOrder: defaultState.orderAdditionRatio * defaultState.baseTime,
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

export { gameData, activeOrders, defaultState, currentState, resetState };

// WE PROBABLY WILL ADD MORE STUFF HERE LATER
