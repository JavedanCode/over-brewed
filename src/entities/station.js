import {
  getIndex,
  VARIATION_COUNT,
  BREW,
  OVERBREWED,
  hasRecipe,
} from "../data/items.js";
import { gameData, defaultState, activeOrders } from "../data/gameData.js";
import { emit } from "../core/gameEvents.js";
import { CUT } from "../data/items.js";

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

    this.reset = () => {
      this.inventory = 0;
      this._work_lock = false;
      this.duration = 0;
      this.progress = 0;
    };

    this.canWork = () => canAction(this.inventory) && !this._work_lock;

    this.startWorking = (baseTime) => {
      this._work_lock = true;
      this.duration = Math.ceil(baseTime * defaultState.stationRatio);
      //Event
      emit(action === CUT ? "cut_complete" : "crush_complete");
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
      this.inventory === 0;

    this.place = (playerInv) => {
      emit("place");
      this.inventory = playerInv.ingredient;
      playerInv.ingredient = 0;
    };

    this.canTake = (playerInv) =>
      !this._work_lock &&
      this.inventory !== 0 &&
      playerInv.ingredient === 0 &&
      !playerInv.hasGlass();

    this.take = (playerInv) => {
      emit("ingredient_pickup", playerInv.ingredient);
      playerInv.ingredient = this.inventory;
      this.inventory = 0;
      this.duration = 0;
      this.progress = 0;
    };
  }
}

class DeliveryStation {
  constructor() {
    this.canMoveWhileWorking = false;
    this.canTake = () => false;
    this.canWork = () => false;

    this.canPlace = (playerInv) => {
      return hasRecipe(playerInv.glass);
    };
    this.place = (playerInv) => {
      const deliveredPotion = playerInv.glass;
      const orderIndex = activeOrders.findIndex(
        (order) => order.recipe === deliveredPotion
      );

      if (orderIndex !== -1) {
        emit("delivered", orderIndex);
      } else {
        gameData.essence++;
      }
      playerInv.glass = 0;
    };

    this.doWork = () => {};
  }
}
class Ingredient {
  constructor(ing) {
    this.inventory = ing;
    this.canPlace = (playerInv) => playerInv.ingredient === this.inventory;
    this.place = (playerInv) => {
      playerInv.ingredient = 0;
      emit("place");
    };

    this.canTake = (playerInv) => playerInv.empty();
    this.take = (playerInv) => {
      playerInv.ingredient = this.inventory;

      emit("ingredient_pickup", playerInv.ingredient);
    };
  }
}

class Glass {
  constructor(glassType) {
    this.inventory = glassType;
    this.canPlace = (playerInv) => playerInv.glass === this.inventory;
    this.place = (playerInv) => (playerInv.glass = 0);

    this.canTake = (playerInv) => playerInv.empty();
    this.take = (playerInv) => {
      emit("glass_pickup");
      playerInv.glass = this.inventory;
    };
  }
}

class Cauldron {
  constructor() {
    this.canMoveWhileWorking = true;
    this.itemCount = 0;
    this._first_brew = false;
    this.inventory = 0;
    this.duration = 0;
    this.progress = 0;

    this.reset = () => {
      this.itemCount = 0;
      this._first_brew = false;
      this.inventory = 0;
      this.duration = 0;
      this.progress = 0;
    };

    this.canPlace = (playerInv) => {
      if (
        this.duration !== 0 ||
        playerInv.hasGlass() ||
        playerInv.ingredient === 0 ||
        this.itemCount > 4 ||
        this._in_inventory(playerInv.ingredient)
      )
        return false;

      const this_base = this._get_base(this.inventory);
      if (this_base === 0) return true;

      const new_base = this._get_base(playerInv.ingredient);
      if (new_base !== 0 && this_base !== new_base) return false;
      return true;
    };

    this.place = (playerInv) => {
      this.inventory |= playerInv.ingredient;
      playerInv.ingredient = 0;
      this.itemCount++;

      emit("place");
    };

    this.canTake = (playerInv) =>
      !this._first_brew &&
      this.inventory !== 0 &&
      playerInv.ingredient === 0 &&
      playerInv.hasOnlyGlass();

    this.take = (playerInv) => {
      playerInv.glass = this._get_result(playerInv.glass | this.inventory);
      this.inventory = 0;
      this.progress = this.duration = 0;
      this.itemCount = 0;
      emit("cauldron_done");
      emit("bottle_potion", playerInv.glass);
    };

    this.canWork = () =>
      this.duration === 0 && this._get_base(this.inventory) !== 0;

    this.startWorking = (baseTime) => {
      emit("cauldron_start");
      this.duration = baseTime * defaultState.cookRatio;
      this._first_brew = true;
    };

    this.doWork = (timeStep) => {
      if (this.duration === 0) return;
      this.progress += timeStep;

      if (this._first_brew && this.progress >= this.duration) {
        this._brew();
        this._first_brew = false;
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

    this._get_result = (potion) => {
      const glass = getIndex(potion);
      if (this.progress >= 1.6 * this.duration || !hasRecipe(potion))
        return 1 << (glass + OVERBREWED);
      else return potion;
    };

    this._get_base = (ings) => {
      const idx = getIndex(ings);
      if (idx > 23 && idx < 27) return idx;
      return 0;
    };

    this._in_inventory = (ing) => {
      return (this.inventory & ing) !== 0;
    };
  }
}

class TrashCan {
  constructor() {
    this.canMoveWhileWorking = false;

    this.canPlace = () => true;

    this.place = (playerInv) => {
      emit("trash");
      playerInv.ingredient = 0;
      playerInv.glass = 0;
    };

    this.canTake = () => false;
    this.canWork = () => false;
  }
}

export { Cauldron, Station, Ingredient, Glass, TrashCan, DeliveryStation };
