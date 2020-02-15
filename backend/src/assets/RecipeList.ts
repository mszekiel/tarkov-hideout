export const recipes = [
  /** Booze generator */
  {
    facility: { name: 'Booze generator', level: 1 },
    input: [
      { name: 'Pack of sugar', amount: 2 },
      { name: 'Purified water', amount: 1 },
    ],
    output: [{ name: '"Fierce Hatchling" moonshine', amount: 1 }],
    time: [3, 3, 0],
  },
  /** Intelligence Center */
  {
    facility: { name: 'Intelligence Center', level: 2 },
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
    facility: { name: 'Lavatory', level: 1 },
    input: [{ name: 'Printer paper', amount: 1 }],
    output: [{ name: 'Toilet paper', amount: 2 }],
    time: [0, 26, 0],
  },
  {
    facility: { name: 'Lavatory', level: 1 },
    input: [{ name: 'GP-5 gasmask', amount: 1 }],
    output: [{ name: 'Air filter for gas mask', amount: 1 }],
    time: [0, 2, 0],
  },
  {
    facility: { name: 'Lavatory', level: 2 },
    input: [
      { name: 'Zibbo lighter', amount: 6 },
      { name: 'Crickent lighter', amount: 8 },
    ],
    output: [{ name: 'Expeditionary fuel tank', amount: 1 }],
    time: [0, 28, 0],
  },
  {
    facility: { name: 'Lavatory', level: 2 },
    input: [
      { name: 'Soap', amount: 1 },
      { name: '0.6L water bottle', amount: 1 },
    ],
    output: [{ name: 'Schaman shampoo', amount: 1 }],
    time: [0, 35, 0],
  },
  {
    facility: { name: 'Lavatory', level: 2 },
    input: [
      { name: 'Soap', amount: 1 },
      { name: 'Heat-exchange alkali surface washer', amount: 1 },
      { name: 'Sodium bicarbonate', amount: 1 },
    ],
    output: [{ name: 'Ox bleach', amount: 1 }],
    time: [0, 38, 0],
  },
  {
    facility: { name: 'Lavatory', level: 2 },
    input: [
      { name: 'WD-40 400ml', amount: 1 },
      { name: 'Metal cutting scissors', amount: 1 },
    ],
    output: [{ name: 'WD-40 100ml', amount: 2 }],
    time: [2, 30, 0],
  },
  {
    facility: { name: 'Lavatory', level: 2 },
    input: [
      { name: 'Silicone tube', amount: 1 },
      { name: 'Wires', amount: 3 },
      { name: 'Insulating tape', amount: 3 },
    ],
    output: [{ name: 'Corrugated hose', amount: 1 }],
    time: [3, 21, 0],
  },
  {
    facility: { name: 'Lavatory', level: 2 },
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
    facility: { name: 'Lavatory', level: 3 },
    input: [
      { name: 'Bottle of vodka Tarkovskaya', amount: 1 },
      { name: 'Schaman shampoo', amount: 1 },
    ],
    output: [{ name: 'Clin wiper', amount: 1 }],
    time: [0, 40, 0],
  },
  {
    facility: { name: 'Lavatory', level: 3 },
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
    facility: { name: 'Workbench', level: 1 },
    input: [
      { name: 'Working LCD', amount: 4 },
      { name: 'Screwdriver', amount: 1 },
    ],
    output: [{ name: 'Broken LCD', amount: 4 }],
    time: [0, 22, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [
      { name: 'Flat screwdriver', amount: 1 },
      { name: 'DVD drive', amount: 1 },
    ],
    output: [{ name: 'Printed circuit board', amount: 2 }],
    time: [0, 33, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [
      { name: 'Gunpowder "Kite"', amount: 1 },
      { name: 'Gunpowder "Eagle"', amount: 1 },
      { name: 'Matches', amount: 1 },
    ],
    output: [{ name: 'Printed circuit board', amount: 2 }],
    time: [0, 35, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [
      { name: 'T-Shaped Plug', amount: 2 },
      { name: 'Wires', amount: 2 },
      { name: 'Insulating tape', amount: 1 },
    ],
    output: [{ name: 'Powercord', amount: 2 }],
    time: [0, 35, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [{ name: 'Vepr AKM / VPO-209 366TKM carbine', amount: 1 }],
    output: [{ name: 'Weapon parts', amount: 2 }],
    time: [1, 18, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [{ name: '5.45x39 mm PS', amount: 70 }],
    output: [{ name: 'Gunpowder "Kite"', amount: 1 }],
    time: [1, 29, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [
      { name: 'Gunpowder "Kite"', amount: 1 },
      { name: 'Matches', amount: 1 },
    ],
    output: [{ name: '12/70 8.5 mm "Magnum" Buckshot', amount: 60 }],
    time: [1, 31, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [{ name: 'Gunpowder "Kite"', amount: 1 }],
    output: [{ name: '9x18 PM mm RG028 gzh', amount: 120 }],
    time: [1, 48, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [{ name: 'Powercord', amount: 2 }],
    output: [{ name: 'Wires', amount: 8 }],
    time: [1, 58, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [
      { name: 'Power supply unit', amount: 1 },
      { name: 'Screwdriver', amount: 1 },
    ],
    output: [{ name: 'Capacitors', amount: 8 }],
    time: [2, 4, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [
      { name: 'Flat screwdriver', amount: 1 },
      { name: 'Powerbank', amount: 1 },
    ],
    output: [{ name: 'Rechargeable battery', amount: 2 }],
    time: [1, 13, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [
      { name: 'Electric Drill', amount: 2 },
      { name: 'Flat screwdriver', amount: 1 },
      { name: 'Screwdriver', amount: 1 },
    ],
    output: [{ name: 'Electric Motor', amount: 1 }],
    time: [1, 20, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [
      { name: 'Weapon parts', amount: 1 },
      { name: 'Polymer AK-74 foregrip (6P20 Sb.9)', amount: 1 },
      { name: 'Polymer stock for AK-74M (6P34 Sb.15)', amount: 1 },
    ],
    output: [{ name: 'AK-74M 5.45x39 assault rifle', amount: 1 }],
    time: [1, 26, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [
      { name: 'M67 Hand grenade', amount: 2 },
      { name: 'WRDG-2B Smoke grenade', amount: 1 },
    ],
    output: [{ name: 'Gunpowder "Eagle"', amount: 1 }],
    time: [1, 37, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [
      { name: 'OFZ 30x160mm shell', amount: 1 },
      { name: 'Gunpowder "Kite"', amount: 2 },
    ],
    output: [{ name: 'Gunpowder "Hawk"', amount: 2 }],
    time: [1, 52, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [
      { name: '5.45x39 mm PS', amount: 80 },
      { name: 'Bolts', amount: 1 },
    ],
    output: [{ name: '5.45x39 mm PP', amount: 240 }],
    time: [1, 56, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [{ name: 'Gunpowder "Hawk"', amount: 1 }],
    output: [{ name: '7.62x54R SNB', amount: 80 }],
    time: [1, 58, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [
      { name: '7.62x39 mm HP', amount: 60 },
      { name: 'Gunpowder "Eagle"', amount: 1 },
      { name: 'Xenomorph sealing foam', amount: 1 },
    ],
    output: [{ name: '9x39 mm SP-6', amount: 200 }],
    time: [2, 21, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [
      { name: '6-STEN-140-M military battery', amount: 1 },
      { name: 'Leatherman Multitool', amount: 1 },
    ],
    output: [{ name: 'Car battery', amount: 5 }],
    time: [2, 46, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [{ name: 'OFZ 30x160mm shell', amount: 1 }],
    output: [{ name: 'RGD-5 hand grenade', amount: 5 }],
    time: [1, 28, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [
      { name: 'Gunpowder "Hawk"', amount: 1 },
      { name: 'Wires', amount: 4 },
    ],
    output: [{ name: '9x19 mm RIP', amount: 180 }],
    time: [2, 5, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [
      { name: 'Gunpowder "Kite"', amount: 2 },
      { name: 'Gunpowder "Eagle"', amount: 1 },
    ],
    output: [{ name: '5.56x45 mm Warmage', amount: 200 }],
    time: [2, 26, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [
      { name: 'Gunpowder "Hawk"', amount: 1 },
      { name: 'Damaged hard drive', amount: 2 },
    ],
    output: [{ name: '12/70 AP-20 Slug', amount: 120 }],
    time: [2, 28, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [{ name: 'Gunpowder "Eagle"', amount: 1 }],
    output: [{ name: '7.62x39 mm BP', amount: 120 }],
    time: [2, 30, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [
      { name: 'Gunpowder "Kite"', amount: 1 },
      { name: 'Gunpowder "Eagle"', amount: 1 },
      { name: 'Gunpowder "Hawk"', amount: 1 },
    ],
    output: [{ name: '5.45x39 mm 7N39 "Igolnik"', amount: 150 }],
    time: [2, 37, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [
      { name: 'Gunpowder "Eagle"', amount: 1 },
      { name: 'OFZ 30x160mm shell', amount: 1 },
    ],
    output: [{ name: '5.56x45 mm M995', amount: 140 }],
    time: [1, 20, 0],
  },

  {
    facility: { name: 'Workbench', level: 1 },
    input: [
      { name: 'Gunpowder "Hawk"', amount: 3 },
      { name: 'Radiator helix', amount: 1 },
    ],
    output: [{ name: '7.62x51 mm M61', amount: 130 }],
    time: [1, 20, 0],
  },

  /** Medstation */
  {
    facility: { name: 'Medstation', level: 1 },
    input: [{ name: 'Pile of meds', amount: 1 }],
    output: [{ name: 'AI-2 medikit', amount: 3 }],
    time: [0, 22, 0],
  },

  {
    facility: { name: 'Medstation', level: 1 },
    input: [
      { name: 'Analgin painkillers', amount: 1 },
      { name: 'Aseptic bandage', amount: 1 },
      { name: 'Immobilizing splint', amount: 1 },
    ],
    output: [{ name: 'Salewa FIRST AID KIT', amount: 1 }],
    time: [0, 22, 0],
  },

  {
    facility: { name: 'Medstation', level: 1 },
    input: [
      { name: 'AI-2 medikit', amount: 1 },
      { name: 'Aseptic bandage', amount: 1 },
      { name: 'Augmentin antibiotic pills', amount: 1 },
    ],
    output: [{ name: 'Pile of meds', amount: 2 }],
    time: [0, 31, 0],
  },

  {
    facility: { name: 'Medstation', level: 1 },
    input: [
      { name: 'Pile of meds', amount: 2 },
      { name: 'Army bandage', amount: 2 },
    ],
    output: [{ name: 'IFAK personal tactical first aid kit', amount: 2 }],
    time: [0, 50, 0],
  },

  {
    facility: { name: 'Medstation', level: 1 },
    input: [{ name: 'Pile of meds', amount: 5 }],
    output: [{ name: 'Grizzly First Aid Kit', amount: 1 }],
    time: [0, 58, 0],
  },

  {
    facility: { name: 'Medstation', level: 1 },
    input: [
      { name: 'Ibuprofen painkillers', amount: 1 },
      { name: 'Golden Star Balm', amount: 1 },
      { name: 'Pile of meds', amount: 5 },
    ],
    output: [{ name: 'Propital', amount: 7 }],
    time: [1, 21, 0],
  },
  /** Nutrion unit */
  {
    facility: { name: 'Nutrition unit', level: 1 },
    input: [
      { name: 'Army Crackers', amount: 2 },
      { name: 'Can of beef stew', amount: 1 },
      { name: 'Squash spread', amount: 1 },
    ],
    output: [{ name: 'Iskra lunch box', amount: 2 }],
    time: [0, 48, 0],
  },

  {
    facility: { name: 'Nutrition unit', level: 1 },
    input: [
      { name: 'Alyonka chocolate bar', amount: 1 },
      { name: 'Pack of oat flakes', amount: 1 },
      { name: 'Army Crackers', amount: 1 },
    ],
    output: [{ name: 'Slickers bar', amount: 7 }],
    time: [1, 11, 0],
  },

  {
    facility: { name: 'Nutrition unit', level: 1 },
    input: [
      { name: 'Pack of sugar', amount: 1 },
      { name: 'Pack of milk', amount: 1 },
    ],
    output: [{ name: 'Condensed milk', amount: 3 }],
    time: [1, 21, 0],
  },

  {
    facility: { name: 'Nutrition unit', level: 1 },
    input: [{ name: 'Alyonka chocolate bar', amount: 2 }],
    output: [{ name: 'Pack of sugar', amount: 1 }],
    time: [1, 23, 0],
  },

  {
    facility: { name: 'Nutrition unit', level: 1 },
    input: [
      { name: 'Apollon Soyuz cigarettes', amount: 1 },
      { name: '42nd Signature Blend English Tea', amount: 1 },
    ],
    output: [{ name: 'Wilston cigarettes', amount: 5 }],
    time: [1, 41, 0],
  },

  {
    facility: { name: 'Nutrition unit', level: 1 },
    input: [
      { name: 'Purified water', amount: 1 },
      { name: 'Silicone tube', amount: 1 },
    ],
    output: [{ name: 'Water bottle with a filter Aquamari', amount: 8 }],
    time: [1, 17, 0],
  },

  {
    facility: { name: 'Nutrition unit', level: 1 },
    input: [
      { name: '"Fierce Hatchling" moonshine', amount: 1 },
      { name: '0.6L water bottle', amount: 5 },
    ],
    output: [{ name: 'Bottle of vodka Tarkovskaya', amount: 7 }],
    time: [1, 19, 0],
  },
  /** Water collector */
  {
    facility: { name: 'Water collector', level: 1 },
    input: [{ name: 'Water filter', amount: 1 }],
    output: [{ name: 'Purified water', amount: 1 }],
    time: [5, 25, 0],
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
