import { ingredients, getIndex, VARIATION_COUNT, brew_map } from "./items.js";

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

    this.canWork = () => canAction(this.inventory) && !this._work_lock;
    this._work_lock = false;
    this.startWorking = () => {
      this._work_lock = true;
    };
    this.doWork = () => {
      this.inventory <<= action;
      this._work_lock = false;
    };

    this.canPlace = (playerInv) =>
      playerInv.ingredient !== 0 &&
      playerInv.ingredient < ingredients.CUTOFF &&
      !playerInv.hasGlass() &&
      this.inventory === 0 &&
      canAction(playerInv.ingredient);

    this.place = (playerInv) => {
      if (this.canPlace(playerInv)) {
        this.inventory = playerInv.ingredient;
        playerInv.ingredient = 0;
        return true;
      }
      return false;
    };

    this.canTake = (playerInv) =>
      !this._work_lock &&
      this.inventory !== 0 &&
      playerInv.ingredient === 0 &&
      !playerInv.hasGlass();
    this.take = (playerInv) => {
      if (this.canTake(playerInv)) {
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
    this._work_lock = false;

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
      !this._work_lock &&
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

    // to be re-written
    this.canWork = () => true;
    this.startWorking = () => {};
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

export { Cauldron, Station, Ingredient, Glass };
