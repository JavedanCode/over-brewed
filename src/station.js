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
function Station(action) {
  this.inventory = 0;
  this.canMoveWhileWorking = false;

  this.canWork = true;
  this.doWork = () => {
    if (this.canWork) {
      this.canWork = false;
      // wait timer
      this.inventory <<= action;
    }
  };

  this.canPlace = (playerInv) =>
    playerInv.ingredient < ingredients.CUTOFF &&
    !playerInv.hasGlass() &&
    this.inventory === 0 &&
    this.canAction(playerInv.ingredient);

  this.place = (playerInv) => {
    if (this.canPlace(playerInv)) {
      this.inventory = playerInv.ingredient;
      playerInv.ingredient = 0;
      return true;
    }
    return false;
  };

  this.canTake = (playerInv) =>
    playerInv.ingredient === 0 && !playerInv.hasGlass();
  this.take = (playerInv) => {
    if (this.canTake(playerInv)) {
      this.canWork = true;
      playerInv.ingredient = this.inventory;
      this.inventory = 0;
      return true;
    }
    return false;
  };
}

const Ingredient = (ing) => {
  return {
    inventory: ing,

    canWork: () => false,
    canPlace: () => false,

    canTake: (playerInv) => playerInv.empty(),
    take: (playerInv) => {
      if (canTake(playerInv)) {
        playerInv.ingredient = inventory;
        return true;
      }
      return false;
    },
  };
};

const Glass = (glassType) => {
  return {
    inventory: glassType,

    canWork: () => false,
    canPlace: () => false,

    canTake: (playerInv) => playerInv.empty(),
    take: (playerInv) => {
      if (canTake(playerInv)) {
        playerInv.glass.type = inventory;
        playerInv.glass.inventory = 0;
        return true;
      }
      return false;
    },
  };
};

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

const cutStation = new Station(CUT);
const crushStation = new Station(CRUSH);

const roundGlassBox = Glass("ROUND");
const squareGlassBox = Glass("SQUARE");

const petalBox = Ingredient(ingredients.AsphodelPetals);
const scaleBox = Ingredient(ingredients.DragonScales);
const mandrakeBox = Ingredient(ingredients.Mandrake);
const figBox = Ingredient(ingredients.Shrivelfig);
const vinumVase = Ingredient(ingredients.Vinum);
const olemVase = Ingredient(ingredients.Olem);
const aquaVase = Ingredient(ingredients.Aqua);

export {
  cauldron,
  cutStation,
  crushStation,
  roundGlassBox,
  squareGlassBox,
  petalBox,
  scaleBox,
  mandrakeBox,
  figBox,
  olemVase,
  vinumVase,
  aquaVase,
};
