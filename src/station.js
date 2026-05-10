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
    this._work_lock = false;
    this.duration = 0;
    this.progress = 0;

    this.canWork = () => canAction(this.inventory) && !this._work_lock;
    this.startWorking = (baseTime) => {
      this._work_lock = true;
      this.duration = baseTime;
    };
    this.doWork = (timeStep) => {
      if (this._work_lock) {
        this.progress += timeStep;
        if (this.progress >= this.duration) {
          this.inventory <<= action;
          this._work_lock = false;
          this.progress = this.duration;
        }
      }
    };

    this.canPlace = (playerInv) =>
      playerInv.ingredient !== 0 &&
      playerInv.ingredient < ingredients.CUTOFF &&
      !playerInv.hasGlass() &&
      this.inventory === 0 &&
      canAction(playerInv.ingredient);

    this.place = (playerInv) => {
      this.inventory = playerInv.ingredient;
      playerInv.ingredient = 0;
    };

    this.canTake = (playerInv) =>
      !this._work_lock &&
      this.inventory !== 0 &&
      playerInv.ingredient === 0 &&
      !playerInv.hasGlass();

    this.take = (playerInv) => {
      playerInv.ingredient = this.inventory;
      this.inventory = 0;
      this.duration = 0;
      this.progress = 0;
    };
  }
}

class Ingredient {
  constructor(ing) {
    this.inventory = ing;
    this.canPlace = () => false;

    this.canTake = (playerInv) => playerInv.empty();
    this.take = (playerInv) => {
      playerInv.ingredient = this.inventory;
    };
  }
}

class Glass {
  constructor(glassType) {
    this.inventory = glassType;
    this.canPlace = () => false;

    this.canTake = (playerInv) => playerInv.empty();
    this.take = (playerInv) => {
      playerInv.glass.type = this.inventory;
      playerInv.glass.inventory = 0;
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
      this.inventory |= playerInv.ingredient;
      playerInv.ingredient = 0;
    };

    this.canTake = (playerInv) =>
      !this._work_lock &&
      playerInv.ingredient === 0 &&
      playerInv.hasGlass() &&
      playerInv.glass.inventory === 0;

    this.take = (playerInv) => {
      playerInv.glass.inventory = this.inventory;
      this.inventory = 0;
    };

    // to be re-written
    this.canWork = () => true;
    this.startWorking = (baseTime) => {};
    this.doWork = (timeStep) => {
      if (this.fire) this.fire = false;
      else this.fire = true;
    };

    // must run on timer while fire = true
    this._brew = () => {
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
