// jogo de sudoku
const sudoku = [
  [0, 0, 0, 2, 0, 0, 0, 8, 6],
  [1, 0, 0, 8, 9, 0, 0, 0, 7],
  [0, 3, 0, 0, 0, 0, 9, 1, 2],

  [3, 4, 5, 1, 7, 0, 6, 0, 0],
  [0, 9, 0, 0, 5, 2, 0, 0, 0],
  [7, 0, 6, 9, 4, 3, 0, 5, 8],

  [0, 0, 0, 0, 0, 4, 0, 0, 5],
  [0, 0, 7, 5, 1, 9, 0, 4, 3],
  [0, 0, 4, 3, 0, 6, 0, 0, 0],
];

// iteração para normalizar o jogo nesse objeto
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    sudoku[i][j] = {value: sudoku[i][j], editable: sudoku[i][j] === 0};
  }
}

// validação do bloco 3x3
function validateGroup(group) {
  let coords = [];
  switch (group) {
    case 1:
      coords = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]];
      break;
    case 2:
      coords = [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]];
      break;
    case 3:
      coords = [[0, 6], [0, 7], [0, 8], [1, 6], [1, 7], [1, 8], [2, 6], [2, 7], [2, 8]];
      break;
    case 4:
      coords = [[3, 0], [3, 1], [3, 2], [4, 0], [4, 1], [4, 2], [5, 0], [5, 1], [5, 2]];
      break;
    case 5:
      coords = [[3, 3], [3, 4], [3, 5], [4, 3], [4, 4], [4, 5], [5, 3], [5, 4], [5, 5]];
      break;
    case 6:
      coords = [[3, 6], [3, 7], [3, 8], [4, 6], [4, 7], [4, 8], [5, 6], [5, 7], [5, 8]];
      break;
    case 7:
      coords = [[6, 0], [6, 1], [6, 2], [7, 0], [7, 1], [7, 2], [8, 0], [8, 1], [8, 2]];
      break;
    case 8:
      coords = [[6, 3], [6, 4], [6, 5], [7, 3], [7, 4], [7, 5], [8, 3], [8, 4], [8, 5]];
      break;
    case 9:
      coords = [[6, 6], [6, 7], [6, 8], [7, 6], [7, 7], [7, 8], [8, 6], [8, 7], [8, 8]];
      break;
  }

  let usedNumbers = [];
  for (const element of coords) {
    let row = element[0];
    let column = element[1];

    if (sudoku[row][column].value !== 0) {
      if (!usedNumbers.includes(sudoku[row][column].value)) {
        usedNumbers.push(sudoku[row][column].value);
      } else {
        return false;
      }
    }
  }

  return true;
}

// validação da linha
function validateRow(row) {
  row--;

  let usedNumbers = [];
  for (const element of sudoku[row]) {
    if (element.value !== 0) {
      if (!usedNumbers.includes(element.value)) {
        usedNumbers.push(element.value);
      } else {
        return false;
      }
    }
  }

  return true;
}

// validação da coluna
function validateColumn(column) {
  column--;

  let usedNumbers = [];
  for (const row of sudoku) {
    const element = row[column];

    if (element.value !== 0) {
      if (!usedNumbers.includes(element.value)) {
        usedNumbers.push(element.value);
      } else {
        return false;
      }
    }
  }

  return true;
}

// função que valida o jogo
function validate() {
  let result = true;

  for (let i = 1; i <= 9; i++) {
    result = result && validateGroup(i);
    result = result && validateRow(i);
    result = result && validateColumn(i);

    if (!result) {
      return result;
    }
  }

  return result;
}

// exibição do jogo no console
async function showGame() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      process.stdout.moveCursor(0, -11);
      process.stdout.clearLine(1);
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          process.stdout.write(sudoku[i][j].value + " ");

          if (j === 2 || j === 5) {
            process.stdout.write("| ");
          }
        }

        console.log();
        if (i === 2 || i === 5) {
          console.log("------+-------+------");
        }
      }

      resolve();
    }, 0);
  });
}

// função que resolve o jogo
async function solve(i = 0, j = 0) {
  while (i < 9) {
    while (j < 9) {
      if (!sudoku[i][j].editable) {
        j++;
        continue;
      }

      for (let k = sudoku[i][j].value === 0 ? 1 : sudoku[i][j].value + 1; k <= 9; k++) {
        if (sudoku[i][j].value === 9) {
          break;
        }

        sudoku[i][j].value = k;

        await showGame();

        if (validate()) {
          j++;
          return await solve(i, j);
        }
      }

      sudoku[i][j].value = 0;
      [i, j] = backward(i, j);
    }

    i++;
    j = 0;
  }
}

// função que retorna a celula anterior
function backward(i, j) {
  if (j - 1 >= 0) {
    if (!sudoku[i][j - 1].editable) {
      return backward(i, j - 1);
    }

    j = j - 1;
  } else {
    return backward(i - 1, 9);
  }

  return [i, j];
}

const startTime = new Date();
await solve();

console.log(new Date() - startTime, "ms");
