import {
  ingredients,
  getIndex,
  BREW,
  CUT,
  CRUSH,
  VARIATION_COUNT,
  brew_map,
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
    canMoveWhileWorking: false,

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
  };
};

const cutStation = Station(CUT);
const crushStation = Station(CRUSH);

const cauldron = {
  inventory: 0,
  canMoveWhileWorking: true,
  fire: false,

  canPlace: (playerInv) => !playerInv.hasGlass() && playerInv.ingredient !== 0,
  place: (playerInv) => {
    if (canPlace(playerInv)) {
      inventory |= playerInv.ingredient;
      playerInv.ingredient = 0;
      return true;
    }
    return false;
  },

  canTake: (playerInv) =>
    playerInv.ingredient === 0 &&
    playerInv.hasGlass() &&
    playerInv.glass.inventory === 0,
  take: (playerInv) => {
    if (canTake(playerInv)) {
      playerInv.glass.inventory = inventory;
      inventory = 0;
      return true;
    }
  },

  canWork: true,
  doWork: () => {
    if (fire) fire = false;
    else fire = true;
  },

  // must run on timer while fire = true
  brew: () => {
    let new_inventory = 0;
    for (let i = 0; i < getIndex(ingredients.CUTOFF); i++) {
      if ((inventory & (1 << i)) !== 0) {
        const brewed = brew_map[i];
        if (brewed !== undefined) new_inventory |= brewed;
        else new_inventory |= ingredients.Overbrewed;
      }
    }
    inventory = new_inventory;
  },
};
