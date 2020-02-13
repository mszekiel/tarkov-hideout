export const recipes = [
  {
    facility: 'Workbench',
    input: [{ name: 'Gunpowder "Eagle"', amount: 1 }],
    output: [{ name: '7.62x39 mm BP', amount: 120 }],
    time: [2, 30, 0],
  },
  {
    facility: 'asd',
    input: [{ name: 'Powercord', amount: 2 }],
    output: [{ name: 'Wires', amount: 8 }],
    time: [1, 58, 0],
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
