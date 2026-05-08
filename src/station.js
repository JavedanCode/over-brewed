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
class Station {
  constructor(action) {
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
}

class Ingredient {
  constructor(ing) {
    this.inventory = ing;

    this.canWork = () => false;
    this.canPlace = () => false;

    this.canTake = (playerInv) => playerInv.empty();
    this.take = (playerInv) => {
      if (this.canTake(playerInv)) {
        playerInv.ingredient = this.inventory;
        return true;
      }
      return false;
    };
  }
}

class Glass {
  constructor(glassType) {
    this.inventory = glassType;

    this.canWork = () => false;
    this.canPlace = () => false;

    this.canTake = (playerInv) => playerInv.empty();
    this.take = (playerInv) => {
      if (this.canTake(playerInv)) {
        playerInv.glass.type = this.inventory;
        playerInv.glass.inventory = 0;
        return true;
      }
      return false;
    };
  }
}

class Cauldron {
  constructor() {
    this.inventory = 0;
    this.canMoveWhileWorking = true;
    this.fire = false;

    this.canPlace = (playerInv) =>
      !playerInv.hasGlass() && playerInv.ingredient !== 0;
    this.place = (playerInv) => {
      if (this.canPlace(playerInv)) {
        this.inventory |= playerInv.ingredient;
        playerInv.ingredient = 0;
        return true;
      }
      return false;
    };

    this.canTake = (playerInv) =>
      playerInv.ingredient === 0 &&
      playerInv.hasGlass() &&
      playerInv.glass.inventory === 0;
    this.take = (playerInv) => {
      if (this.canTake(playerInv)) {
        playerInv.glass.inventory = this.inventory;
        this.inventory = 0;
        return true;
      }
    };

    this.canWork = true;
    this.doWork = () => {
      if (this.fire) this.fire = false;
      else this.fire = true;
    };

    // must run on timer while fire = true
    this.brew = () => {
      let new_inventory = 0;
      for (let i = 0; i < getIndex(ingredients.CUTOFF); i++) {
        if ((this.inventory & (1 << i)) !== 0) {
          const brewed = brew_map[i];
          if (brewed !== undefined) new_inventory |= brewed;
          else new_inventory |= ingredients.Overbrewed;
        }
      }
      this.inventory = new_inventory;
    };
  }
}

const cauldron = new Cauldron();

const cutStation = new Station(CUT);
const crushStation = new Station(CRUSH);

const roundGlassBox = new Glass("ROUND");
const squareGlassBox = new Glass("SQUARE");

const petalBox = new Ingredient(ingredients.AsphodelPetals);
const scaleBox = new Ingredient(ingredients.DragonScales);
const mandrakeBox = new Ingredient(ingredients.Mandrake);
const figBox = new Ingredient(ingredients.Shrivelfig);
const vinumVase = new Ingredient(ingredients.Vinum);
const olemVase = new Ingredient(ingredients.Olem);
const aquaVase = new Ingredient(ingredients.Aqua);

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
