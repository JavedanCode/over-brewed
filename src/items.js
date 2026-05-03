// ingredients:

// asphodel petals
// dragon scales
// mandrake
// shrivelfig
// for each:
// normal / brewed / cut / crush

const VARIATION_COUNT = 4;
const BREW = 1;
const CUT = 2;
const CRUSH = 3;

const ingredients = {
  AsphodelPetals: 1 << (0 * VARIATION_COUNT),
  BrewedAsphodelPetals: 1 << (0 * VARIATION_COUNT + BREW),
  CutAsphodelPetals: 1 << (0 * VARIATION_COUNT + CUT),
  CrushedAsphodelPetals: 1 << (0 * VARIATION_COUNT + CRUSH),

  DragonScales: 1 << (1 * VARIATION_COUNT),
  BrewedDragonScales: 1 << (1 * VARIATION_COUNT + BREW),
  CutDragonScales: 1 << (1 * VARIATION_COUNT + CUT),
  CrushedDragonScales: 1 << (1 * VARIATION_COUNT + CRUSH),

  Mandrake: 1 << (2 * VARIATION_COUNT),
  BrewedMandrake: 1 << (2 * VARIATION_COUNT + BREW),
  CutMandrake: 1 << (2 * VARIATION_COUNT + CUT),
  CrushedMandrake: 1 << (2 * VARIATION_COUNT + CRUSH),

  Shrivelfig: 1 << (3 * VARIATION_COUNT),
  BrewedShrivelfig: 1 << (3 * VARIATION_COUNT + BREW),
  CutShrivelfig: 1 << (3 * VARIATION_COUNT + CUT),
  CrushedShrivelfig: 1 << (3 * VARIATION_COUNT + CRUSH),

  CUTOFF: 1 << 25,
  Empty: 1 << 26,
  Vinum: 1 << 27,
  Oleum: 1 << 28,
  Aqua: 1 << 29,
  Overbrewed: 1 << 30,
};

// glass types:
// NONE, ROUND, SQUARE
const player_inventory = {
  glass: {
    type: "NONE",
    inventory: ingredients.Empty,
  },
  ingredient: ingredients.Empty,
};
const hasGlass = (inv) =>
  inv.glass.type !== "NONE" && inv.glass.inventory !== ingredients.Empty;

const getIndex = (n) => 31 - Math.clz32(n);

export {
  ingredients,
  getIndex,
  BREW,
  CUT,
  CRUSH,
  VARIATION_COUNT,
  player_inventory,
  hasGlass,
};
