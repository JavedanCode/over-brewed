import {
  ingredients,
  getIndex,
  BREW,
  CUT,
  CRUSH,
  VARIATION_COUNT,
} from "./items";

// Is this a valid ingredient for the task
const canAction = (ing) => {
  if (ing < ingredients.CUTOFF && getIndex(ing) % VARIATION_COUNT === 0)
    return true;
  else return false;
};

// action is CUT / CRUSH
const Station = (action) => {
  return {
    inventory: 0,

    canWork: true,
    doWork: () => {
      if (canWork) {
        canWork = false;
        // wait timer
        inventory <<= action;
      }
    },

    canPlace: (playerInv) =>
      playerInv.ingredient < ingredients.CUTOFF &&
      !playerInv.hasGlass() &&
      inventory === 0 &&
      canAction(playerInv.ingredient),

    place: (playerInv) => {
      if (canPlace(playerInv)) {
        inventory = playerInv.ingredient;
        playerInv.ingredient = 0;
        return true;
      }
      return false;
    },

    canTake: (playerInv) => playerInv.ingredient === 0 && !playerInv.hasGlass(),
    take: (playerInv) => {
      if (canTake(playerInv)) {
        canWork = true;
        playerInv.ingredient = inventory;
        inventory = 0;
        return true;
      }
      return false;
    },

    canMoveWhileWorking: false,
  };
};

const cutStation = Station(CUT);
const crushStation = Station(CRUSH);
