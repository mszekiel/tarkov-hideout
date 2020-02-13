export const recipes = [
  /** Booze generator */
  {
    facility: 'Booze generator',
    input: [
      { name: 'Pack of sugar', amount: 2 },
      { name: 'Purified water', amount: 1 },
    ],
    output: [{ name: '"Fierce Hatchling" moonshine', amount: 1 }],
    time: [3, 3, 0],
  },
  /** Intelligence Center */
  {
    facility: 'Intelligence Center',
    input: [
      { name: 'Broken GPhone', amount: 1 },
      { name: 'Broken GPhone X', amount: 1 },
      { name: 'SSD drive', amount: 1 },
    ],
    output: [{ name: 'Secure Flash drive', amount: 3 }],
    time: [34, 13, 0],
  },
  /** Lavatory */
  {
    facility: 'Lavatory',
    input: [{ name: 'Printer paper', amount: 1 }],
    output: [{ name: 'Toilet paper', amount: 2 }],
    time: [0, 26, 0],
  },
  {
    facility: 'Lavatory',
    input: [{ name: 'GP-5 gasmask', amount: 1 }],
    output: [{ name: 'Air filter for gas mask', amount: 1 }],
    time: [0, 2, 0],
  },
  {
    facility: 'Lavatory',
    input: [
      { name: 'Zibbo lighter', amount: 6 },
      { name: 'Crickent lighter', amount: 8 },
    ],
    output: [{ name: 'Expeditionary fuel tank', amount: 1 }],
    time: [0, 28, 0],
  },
  {
    facility: 'Lavatory',
    input: [
      { name: 'Soap', amount: 1 },
      { name: '0.6L water bottle', amount: 1 },
    ],
    output: [{ name: 'Schaman shampoo', amount: 1 }],
    time: [0, 35, 0],
  },
  {
    facility: 'Lavatory',
    input: [
      { name: 'Soap', amount: 1 },
      { name: 'Heat-exchange alkali surface washer', amount: 1 },
      { name: 'Sodium bicarbonate', amount: 1 },
    ],
    output: [{ name: 'Ox bleach', amount: 1 }],
    time: [0, 38, 0],
  },
  {
    facility: 'Lavatory',
    input: [
      { name: 'WD-40 400ml', amount: 1 },
      { name: 'Metal cutting scissors', amount: 1 },
    ],
    output: [{ name: 'WD-40 100ml', amount: 2 }],
    time: [2, 30, 0],
  },
  {
    facility: 'Lavatory',
    input: [
      { name: 'Silicone tube', amount: 1 },
      { name: 'Wires', amount: 3 },
      { name: 'Insulating tape', amount: 3 },
    ],
    output: [{ name: 'Corrugated hose', amount: 1 }],
    time: [3, 21, 0],
  },
  {
    facility: 'Lavatory',
    input: [
      { name: 'Expeditionary fuel tank', amount: 2 },
      { name: 'Metal cutting scissors', amount: 1 },
      { name: 'Bolts', amount: 3 },
      { name: 'Screw nut', amount: 3 },
    ],
    output: [{ name: 'Magazine case', amount: 1 }],
    time: [4, 52, 0],
  },
  {
    facility: 'Lavatory',
    input: [
      { name: 'Bottle of vodka Tarkovskaya', amount: 1 },
      { name: 'Schaman shampoo', amount: 1 },
    ],
    output: [{ name: 'Clin wiper', amount: 1 }],
    time: [0, 40, 0],
  },
  {
    facility: 'Lavatory',
    input: [
      { name: 'Air filter for gas mask', amount: 2 },
      { name: 'Water filter', amount: 2 },
      { name: 'A set of tools', amount: 1 },
    ],
    output: [{ name: 'FP-100 filter absorber', amount: 1 }],
    time: [2, 36, 0],
  },
  /** Workbench */
  {
    facility: 'Workbench',
    input: [
      { name: 'Working LCD', amount: 4 },
      { name: 'Screwdriver', amount: 1 },
    ],
    output: [{ name: 'Broken LCD', amount: 4 }],
    time: [0, 22, 0],
  },
];

export const uniqueNames = [
  ...new Set(
    recipes.reduce(
      (recipe, next) => [
        ...recipe,
        ...next.input.map(item => item.name),
        ...next.output.map(item => item.name),
      ],
      [],
    ),
  ),
];
