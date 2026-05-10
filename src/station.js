import { ingredients, getIndex, VARIATION_COUNT, BREW } from "./items.js";

// Is this a valid ingredient for the task
const canAction = (ing) => {
  const ingIdx = getIndex(ing);
  if (ingIdx < BREW && ingIdx % VARIATION_COUNT === 0) return true;
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
      getIndex(playerInv.ingredient) < BREW &&
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
    this._first_brew = false;
    this.inventory = 0;
    this.canMoveWhileWorking = true;
    this.duration = 0;
    this.progress = 0;

    this.canPlace = (playerInv) => {
      if (!this.canWork() || playerInv.hasGlass() || playerInv.ingredient === 0)
        return false;

      const this_base = this._get_base(this.inventory);
      const new_base = this._get_base(playerInv.ingredient);
      if (this_base === 0) {
        if (new_base !== 0) return true;
        return false;
      } else if (this_base === new_base || new_base === 0) return true;
      else return false;
    };

    this.place = (playerInv) => {
      this.inventory |= playerInv.ingredient;
      playerInv.ingredient = 0;
      this.progress = 0;
    };

    this.canTake = (playerInv) =>
      !this._first_brew &&
      playerInv.ingredient === 0 &&
      playerInv.hasGlass() &&
      playerInv.glass.inventory === 0;

    this.take = (playerInv) => {
      playerInv.glass.inventory = this.inventory;
      this.inventory = 0;
      this.progress = this.duration = 0;
    };

    // to be re-written
    this.canWork = () => !this._first_brew && this.duration === 0;
    this.startWorking = (baseTime) => {
      this.duration = 2 * baseTime;
      this._first_brew = true;
    };
    this.doWork = (timeStep) => {
      if (this.duration === 0) return;
      if (this._first_brew) {
        this.progress += timeStep;
        if (this.progress >= this.duration) {
          console.log("first brew done.");
          this._brew();
          this._first_brew = false;
        }
      } else {
        this.progress += timeStep;
        if (this.progress >= 1.5 * this.duration) {
          console.log("overbrewed!");
          this._overbrew();
        }
      }
    };

    this._brew = () => {
      let new_inventory = 0;

      for (let i = 0; i < BREW; i++) {
        if ((this.inventory & (1 << i)) !== 0) {
          const brewed = i + BREW;
          new_inventory |= 1 << brewed;
        }
      }
      new_inventory |= 1 << this._get_base(this.inventory);
      this.inventory = new_inventory;
    };

    this._overbrew = () => {
      const overbrewed = (this.inventory >> BREW) & ((1 << BREW) - 1);
      if (overbrewed !== 0) this.inventory |= ingredients.Overbrewed;
    };

    this._get_base = (ings) => {
      const idx = getIndex(ings);
      if (idx >= 27) return idx;
      return 0;
    };
  }
}

export { Cauldron, Station, Ingredient, Glass };
