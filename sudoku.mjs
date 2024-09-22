class SudokuGame {
  row = 0;
  column = 0;

  coords = [
    [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]],
    [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]],
    [[0, 6], [0, 7], [0, 8], [1, 6], [1, 7], [1, 8], [2, 6], [2, 7], [2, 8]],
    [[3, 0], [3, 1], [3, 2], [4, 0], [4, 1], [4, 2], [5, 0], [5, 1], [5, 2]],
    [[3, 3], [3, 4], [3, 5], [4, 3], [4, 4], [4, 5], [5, 3], [5, 4], [5, 5]],
    [[3, 6], [3, 7], [3, 8], [4, 6], [4, 7], [4, 8], [5, 6], [5, 7], [5, 8]],
    [[6, 0], [6, 1], [6, 2], [7, 0], [7, 1], [7, 2], [8, 0], [8, 1], [8, 2]],
    [[6, 3], [6, 4], [6, 5], [7, 3], [7, 4], [7, 5], [8, 3], [8, 4], [8, 5]],
    [[6, 6], [6, 7], [6, 8], [7, 6], [7, 7], [7, 8], [8, 6], [8, 7], [8, 8]],
  ];

  constructor(sudoku) {
    const game = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],

      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],

      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    // iteração para normalizar o jogo nesse objeto
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        game[i][j] = {value: sudoku[i][j], editable: sudoku[i][j] === 0};
      }
    }

    this.sudoku = game;
  }

  // função que resolve o jogo
  async solve(showGame = true) {
    while (this.row < 9) {
      while (this.column < 9) {
        const cell = this.sudoku[this.row][this.column];

        if (!cell.editable) {
          this.column++;
          continue;
        }

        const possibleValues = this.getPossibleValues();

        if (possibleValues.length === 0 || cell.value >= possibleValues[possibleValues.length - 1]) {
          cell.value = 0;
          this.backward();
          continue;
        }

        for (const possible of possibleValues) {
          if (cell.value >= possible) {
            continue;
          }

          cell.value = possible;

          if (this.validate()) {
            if (showGame) {
              await this.showGame();
            }

            this.column++;
            break;
          }
        }
      }

      this.row++;
      this.column = 0;
    }
  }

  getPossibleValues() {
    let possibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rows = new Set(this.sudoku[this.row].map(x => x.value));
    const columns = new Set(this.sudoku.map((row) => row[this.column].value));
    const group = new Set(this.getGroup());

    possibles = possibles.filter((x) => !rows.has(x) && !columns.has(x) && !group.has(x));

    return possibles;
  }

  getGroup() {
    const coords = this.coords.find((coord) => coord.some((element) => element[0] === this.row && element[1] === this.column));

    return coords.map((coord) => this.sudoku[coord[0]][coord[1]].value);
  }

  // validação do bloco 3x3
  validateGroup() {
    const groupValues = this.getGroup();

    let usedNumbers = new Set();

    for (const element of groupValues) {
      if (element !== 0) {
        if (!usedNumbers.has(element)) {
          usedNumbers.add(element);
        } else {
          return false;
        }
      }
    }

    return true;
  }

  // validação da linha
  validateRow() {
    let usedNumbers = new Set();

    for (const element of this.sudoku[this.row]) {
      if (element.value !== 0) {
        if (!usedNumbers.has(element.value)) {
          usedNumbers.add(element.value);
        } else {
          return false;
        }
      }
    }

    return true;
  }

  // validação da coluna
  validateColumn() {
    let usedNumbers = new Set();

    for (const row of this.sudoku) {
      const element = row[this.column];

      if (element.value !== 0) {
        if (!usedNumbers.has(element.value)) {
          usedNumbers.add(element.value);
        } else {
          return false;
        }
      }
    }

    return true;
  }

  // função que valida o jogo
  validate() {
    return this.validateRow() && this.validateColumn() && this.validateGroup();
  }

  // exibição do jogo no console
  async showGame() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        process.stdout.moveCursor(0, -11);
        process.stdout.clearLine(1);
        for (let i = 0; i < 9; i++) {
          for (let j = 0; j < 9; j++) {
            process.stdout.write(this.sudoku[i][j].value + " ");

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

  // função que retorna a celula anterior
  backward() {
    do {
      if (this.column === 0) {
        this.column = 8;
        this.row--;
      } else {
        this.column--;
      }
    } while (!this.sudoku[this.row][this.column].editable);
  }
}

export {SudokuGame};
