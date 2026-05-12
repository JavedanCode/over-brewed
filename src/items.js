// ingredients:

// asphodel petals
// dragon scales
// mandrake
// shrivelfig
// for each:
// normal / brewed / cut / crush

const VARIATION_COUNT = 3;
const BREW = 12;
const CUT = 1;
const CRUSH = 2;

const getIndex = (n) => 31 - Math.clz32(n);

const INGREDIENTS = {
  AsphodelPetals: 1 << (0 * VARIATION_COUNT), // 0
  CutAsphodelPetals: 1 << (0 * VARIATION_COUNT + CUT), // 1
  CrushedAsphodelPetals: 1 << (0 * VARIATION_COUNT + CRUSH), // 2

  DragonScales: 1 << (1 * VARIATION_COUNT), // 3
  CutDragonScales: 1 << (1 * VARIATION_COUNT + CUT), // 4
  CrushedDragonScales: 1 << (1 * VARIATION_COUNT + CRUSH), // 5

  Mandrake: 1 << (2 * VARIATION_COUNT), // 6
  CutMandrake: 1 << (2 * VARIATION_COUNT + CUT), // 7
  CrushedMandrake: 1 << (2 * VARIATION_COUNT + CRUSH), // 8

  Shrivelfig: 1 << (3 * VARIATION_COUNT), // 9
  CutShrivelfig: 1 << (3 * VARIATION_COUNT + CUT), // 10
  CrushedShrivelfig: 1 << (3 * VARIATION_COUNT + CRUSH), // 11

  // BREWED CUTOFF

  BrewedAsphodelPetals: 1 << (0 * VARIATION_COUNT + BREW), // 12
  BrewedCutAsphodelPetals: 1 << (0 * VARIATION_COUNT + CUT + BREW), // 13
  BrewedCrushedAsphodelPetals: 1 << (0 * VARIATION_COUNT + CRUSH + BREW), // 14

  BrewedDragonScales: 1 << (1 * VARIATION_COUNT + BREW), // 15
  BrewedCutDragonScales: 1 << (1 * VARIATION_COUNT + CUT + BREW), // 16
  BrewedCrushedDragonScales: 1 << (1 * VARIATION_COUNT + CRUSH + BREW), // 17

  BrewedMandrake: 1 << (2 * VARIATION_COUNT + BREW), // 18
  BrewedCutMandrake: 1 << (2 * VARIATION_COUNT + CUT + BREW), // 19
  BrewedCrushedMandrake: 1 << (2 * VARIATION_COUNT + CRUSH + BREW), // 20

  BrewedShrivelfig: 1 << (3 * VARIATION_COUNT + BREW), // 21
  BrewedCutShrivelfig: 1 << (3 * VARIATION_COUNT + CUT + BREW), // 22
  BrewedCrushedShrivelfig: 1 << (3 * VARIATION_COUNT + CRUSH + BREW), // 23

  // 24
  // 25
  // 26

  Vinum: 1 << 27,
  Oleum: 1 << 28,
  Aqua: 1 << 29,
  Overbrewed: 1 << 30,
};

const RECIPES = [
  {
    name: "manegro_potion",
    description: "Causes hair on drinker's head to grow rapidly!",
    recipe:
      INGREDIENTS["Oleum"] |
      INGREDIENTS["CrushedMandrake"] |
      INGREDIENTS["CrushedShrivelfig"] |
      INGREDIENTS["CutDragonScales"],
    icon: "green_cubic",
  },

  {
    name: "potion_of_all_potential",
    description: "Unlocks all potential within the drinker.",
    recipe:
      INGREDIENTS["Oleum"] |
      INGREDIENTS["DragonScales"] |
      INGREDIENTS["CutMandrake"] |
      INGREDIENTS["CutShrivelfig"] |
      INGREDIENTS["AsphodelPetals"],
    icon: "gold_round",
  },

  {
    name: "love_potion",
    description: "Creates feelings of affection and attraction.",
    recipe:
      INGREDIENTS["Vinum"] |
      INGREDIENTS["CrushedAsphodelPetals"] |
      INGREDIENTS["CrushedShrivelfig"],
    icon: "pink_cubic",
  },

  {
    name: "screaming_potion",
    description: "Causes uncontrollable screaming.",
    recipe:
      INGREDIENTS["Aqua"] |
      INGREDIENTS["Mandrake"] |
      INGREDIENTS["CrushedShrivelfig"],
    icon: "violet_round",
  },

  {
    name: "dragon_poison",
    description: "A deadly poison infused with dragon essence.",
    recipe:
      INGREDIENTS["Vinum"] |
      INGREDIENTS["CrushedDragonScales"] |
      INGREDIENTS["CutDragonScales"] |
      INGREDIENTS["CutAsphodelPetals"] |
      INGREDIENTS["Shrivelfig"],
    icon: "red_cubic",
  },

  {
    name: "weakness_potion",
    description: "Temporarily weakens the drinker.",
    recipe:
      INGREDIENTS["Aqua"] |
      INGREDIENTS["AsphodelPetals"] |
      INGREDIENTS["CrushedMandrake"] |
      INGREDIENTS["CutDragonScales"],
    icon: "blue_round",
  },
];
// glass types:
// NONE, ROUND, SQUARE
function player_inventory() {
  this.glass = {
    type: "NONE",
    inventory: 0,
  };
  this.ingredient = 0;
  this.hasGlass = () => this.glass.type !== "NONE";
  this.empty = () => !this.hasGlass() && this.ingredient === 0;
}

const getIngredientsFromMask = (mask) => {
  const result = [];

  for (let i = 0; i < 31; i++) {
    const bit = 1 << i;

    if ((mask & bit) !== 0) {
      result.push(bit);
    }
  }

  return result;
};

export {
  getIndex,
  INGREDIENTS,
  RECIPES,
  BREW,
  CUT,
  CRUSH,
  VARIATION_COUNT,
  player_inventory,
  getIngredientsFromMask,
};
