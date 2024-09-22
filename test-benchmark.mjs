import {SudokuGame} from './sudoku2.mjs';

const board = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const easyGame1 = [
  [1, 0, 8, 9, 4, 0, 6, 0, 7],
  [0, 0, 0, 0, 0, 8, 0, 0, 0],
  [3, 0, 4, 6, 5, 0, 1, 9, 8],

  [0, 6, 5, 0, 0, 4, 0, 0, 9],
  [7, 9, 0, 0, 0, 0, 4, 0, 0],
  [2, 0, 0, 5, 0, 0, 7, 8, 6],

  [4, 0, 7, 8, 0, 5, 2, 0, 0],
  [0, 0, 6, 2, 0, 1, 0, 0, 0],
  [9, 1, 0, 0, 6, 0, 0, 3, 0],
];

const easyGame2 = [
  [0, 0, 2, 0, 1, 0, 0, 6, 9],
  [4, 0, 0, 0, 0, 9, 0, 8, 0],
  [0, 0, 6, 4, 2, 8, 7, 0, 5],

  [0, 4, 0, 3, 7, 6, 1, 5, 0],
  [7, 3, 0, 5, 0, 0, 0, 2, 0],
  [0, 0, 1, 0, 0, 0, 3, 4, 0],

  [5, 0, 0, 0, 0, 0, 0, 9, 0],
  [8, 9, 4, 0, 6, 0, 0, 1, 0],
  [0, 0, 0, 9, 5, 4, 0, 0, 2],
];

const mediumGame1 = [
  [0, 9, 1, 3, 2, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 0, 5],
  [0, 4, 0, 6, 0, 7, 9, 0, 0],

  [4, 0, 9, 8, 1, 6, 3, 2, 0],
  [7, 0, 8, 2, 4, 0, 5, 9, 6],
  [3, 0, 6, 0, 0, 0, 0, 0, 1],

  [0, 0, 4, 0, 0, 0, 2, 7, 0],
  [0, 0, 0, 1, 0, 2, 0, 5, 4],
  [0, 6, 0, 0, 7, 0, 0, 0, 0],
];

const mediumGame2 = [
  [0, 2, 7, 5, 0, 4, 0, 0, 0],
  [0, 0, 0, 3, 7, 0, 0, 0, 4],
  [3, 0, 0, 0, 0, 0, 8, 0, 0],

  [4, 7, 0, 9, 5, 8, 0, 3, 6],
  [2, 6, 8, 7, 1, 0, 0, 4, 9],
  [0, 0, 0, 0, 0, 2, 0, 1, 8],

  [0, 8, 3, 0, 9, 0, 4, 0, 0],
  [7, 1, 0, 0, 0, 0, 9, 0, 2],
  [0, 0, 0, 0, 0, 5, 0, 0, 7],
];

const hardGame1 = [
  [0, 0, 0, 0, 7, 0, 0, 6, 0],
  [0, 7, 4, 2, 1, 0, 0, 0, 0],
  [8, 0, 9, 3, 0, 0, 0, 0, 2],

  [7, 0, 1, 0, 0, 0, 6, 3, 0],
  [0, 0, 0, 0, 3, 0, 8, 0, 7],
  [0, 8, 0, 9, 0, 0, 0, 0, 0],

  [9, 1, 5, 0, 2, 3, 7, 0, 4],
  [0, 0, 0, 0, 9, 4, 0, 1, 0],
  [0, 3, 7, 0, 5, 8, 2, 9, 6],
];

const hardGame2 = [
  [0, 0, 0, 2, 3, 0, 1, 8, 0],
  [0, 4, 0, 0, 0, 0, 0, 3, 0],
  [1, 0, 0, 6, 0, 9, 7, 0, 0],

  [0, 7, 4, 8, 0, 3, 0, 0, 0],
  [0, 0, 0, 0, 9, 0, 6, 0, 0],
  [3, 0, 9, 0, 0, 0, 0, 7, 0],

  [2, 0, 3, 5, 8, 6, 0, 1, 7],
  [0, 8, 0, 0, 0, 0, 0, 6, 2],
  [4, 6, 1, 3, 7, 0, 0, 5, 9],
];

const specialistGame1 = [
  [7, 0, 0, 0, 6, 0, 0, 0, 0],
  [0, 0, 4, 0, 5, 9, 7, 0, 0],
  [8, 0, 0, 1, 0, 7, 0, 2, 5],

  [5, 0, 0, 0, 0, 0, 4, 0, 2],
  [0, 0, 0, 0, 2, 6, 5, 3, 0],
  [2, 0, 9, 5, 3, 0, 0, 0, 0],

  [0, 8, 7, 0, 0, 0, 0, 4, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 0],
  [0, 0, 0, 4, 7, 8, 9, 5, 3],
];

const specialistGame2 = [
  [0, 0, 0, 0, 7, 0, 5, 0, 0],
  [0, 5, 0, 0, 6, 2, 0, 0, 3],
  [6, 0, 4, 1, 0, 5, 8, 0, 0],

  [4, 3, 0, 0, 0, 0, 6, 0, 0],
  [0, 6, 9, 0, 4, 7, 0, 0, 0],
  [0, 0, 0, 6, 9, 0, 4, 0, 2],

  [0, 0, 5, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 0, 0, 0, 0, 8, 5],
  [9, 2, 6, 3, 5, 8, 0, 0, 0],
];

const expertGame1 = [
  [2, 0, 0, 0, 8, 5, 0, 0, 0],
  [0, 0, 8, 0, 0, 9, 5, 0, 6],
  [0, 0, 0, 0, 0, 0, 0, 0, 3],

  [7, 0, 0, 6, 0, 0, 4, 0, 5],
  [0, 0, 0, 0, 0, 4, 0, 2, 0],
  [0, 0, 5, 0, 0, 0, 0, 3, 0],

  [0, 1, 0, 7, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 4, 0],
  [0, 0, 2, 0, 0, 6, 9, 0, 8],
];

const expertGame2 = [
  [0, 0, 6, 8, 0, 0, 0, 0, 3],
  [3, 0, 0, 0, 0, 0, 0, 5, 1],
  [0, 0, 1, 3, 4, 0, 0, 0, 0],

  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [9, 0, 5, 0, 0, 7, 3, 4, 0],
  [6, 0, 0, 2, 5, 0, 1, 0, 7],

  [0, 0, 4, 5, 0, 0, 0, 0, 9],
  [5, 0, 0, 0, 0, 2, 0, 0, 0],
  [0, 0, 0, 0, 7, 9, 0, 8, 0],
];

const GeniusGame1 = [
  [0, 0, 4, 0, 0, 0, 0, 0, 0],
  [8, 1, 0, 0, 0, 9, 2, 7, 0],
  [0, 0, 7, 0, 5, 0, 9, 0, 0],

  [1, 0, 5, 0, 0, 6, 0, 0, 3],
  [3, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 5, 7, 0, 0, 6, 0],

  [4, 5, 1, 0, 9, 0, 0, 0, 0],
  [0, 3, 0, 0, 1, 5, 0, 0, 0],
  [9, 0, 0, 0, 3, 0, 0, 0, 6],
];

const GeniusGame2 = [
  [0, 0, 0, 0, 3, 0, 6, 8, 0],
  [0, 0, 2, 5, 9, 8, 7, 3, 0],
  [0, 0, 0, 7, 0, 0, 0, 0, 0],

  [0, 0, 3, 0, 2, 0, 5, 0, 0],
  [6, 0, 0, 9, 0, 0, 0, 0, 0],
  [0, 5, 4, 0, 0, 0, 0, 9, 0],

  [7, 0, 0, 0, 4, 0, 0, 0, 1],
  [8, 0, 0, 2, 0, 0, 0, 0, 3],
  [3, 4, 5, 0, 7, 0, 0, 0, 0],
];

async function benchmark() {
  const games = [
    {'name': 'board', 'game': board},
    {'name': 'easyGame1', 'game': easyGame1},
    {'name': 'easyGame2', 'game': easyGame2},
    {'name': 'mediumGame1', 'game': mediumGame1},
    {'name': 'mediumGame2', 'game': mediumGame2},
    {'name': 'hardGame1', 'game': hardGame1},
    {'name': 'hardGame2', 'game': hardGame2},
    {'name': 'specialistGame1', 'game': specialistGame1},
    {'name': 'specialistGame2', 'game': specialistGame2},
    {'name': 'expertGame1', 'game': expertGame1},
    {'name': 'expertGame2', 'game': expertGame2},
    {'name': 'GeniusGame1', 'game': GeniusGame1},
    {'name': 'GeniusGame2', 'game': GeniusGame2},
  ];

  const start = new Date();
  console.log('benchmarking...');

  for (const game of games) {
    const startGame = new Date();

    const sudoku = new SudokuGame(game.game);

    console.log('solving: ' + game.name);
    await sudoku.solve(false);

    console.log('solved: ' + game.name + ' - with: ' + (new Date() - startGame) + 'ms');
  }

  console.log('difference: ' + (new Date() - start) + 'ms');
  return new Date() - start;
}

await benchmark();
