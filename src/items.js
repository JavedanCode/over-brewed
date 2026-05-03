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
  Aqua: 1 << 0,
  Oleum: 1 << 1,
  Vinum: 1 << 2,
  Reserved: 1 << 3,

  AsphodelPetals: 1 << (1 * VARIATION_COUNT),
  BrewedAsphodelPetals: 1 << (1 * VARIATION_COUNT + BREW),
  CutAsphodelPetals: 1 << (1 * VARIATION_COUNT + CUT),
  CrushedAsphodelPetals: 1 << (1 * VARIATION_COUNT + CRUSH),

  DragonScales: 1 << (2 * VARIATION_COUNT),
  BrewedDragonScales: 1 << (2 * VARIATION_COUNT + BREW),
  CutDragonScales: 1 << (2 * VARIATION_COUNT + CUT),
  CrushedDragonScales: 1 << (2 * VARIATION_COUNT + CRUSH),

  Mandrake: 1 << (3 * VARIATION_COUNT),
  BrewedMandrake: 1 << (3 * VARIATION_COUNT + BREW),
  CutMandrake: 1 << (3 * VARIATION_COUNT + CUT),
  CrushedMandrake: 1 << (3 * VARIATION_COUNT + CRUSH),

  Shrivelfig: 1 << (4 * VARIATION_COUNT),
  BrewedShrivelfig: 1 << (4 * VARIATION_COUNT + BREW),
  CutShrivelfig: 1 << (4 * VARIATION_COUNT + CUT),
  CrushedShrivelfig: 1 << (4 * VARIATION_COUNT + CRUSH),

  Overbrewed: 1 << 30,
};

const potions = {};

export { ingredients };
