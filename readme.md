# Sudoku Solver - Brute Force (Terminal)

Este projeto implementa um algoritmo de resolução de Sudoku utilizando a abordagem de força bruta em JavaScript. O usuário fornece um tabuleiro de Sudoku como um array multidimensional, e o processo de resolução é exibido diretamente no terminal.

## Funcionalidades

- **Resolução de Sudoku**: Utiliza o algoritmo de força bruta com backtracking para tentar todas as combinações possíveis e encontrar a solução correta.
- **Visualização no Terminal**: O tabuleiro é atualizado e impresso no terminal à medida que a solução é construída.
- **Validação do Tabuleiro**: O algoritmo valida a inserção de números no tabuleiro, garantindo que os números em cada linha, coluna e região 3x3 sejam únicos.

## Tecnologias Utilizadas

- **JavaScript (Node.js)**: A lógica de resolução é implementada inteiramente em JavaScript e executada no ambiente Node.js para fácil interação via terminal.

## Como Funciona

1. O usuário insere um array multidimensional representando o tabuleiro de Sudoku, onde células vazias são representadas por `0`.
2. O algoritmo de força bruta tenta preencher as células vazias com números de 1 a 9.
3. A cada tentativa válida, o tabuleiro é atualizado e exibido no terminal, permitindo visualizar o processo de resolução em tempo real.
4. O algoritmo continua até resolver o tabuleiro ou retornar que não há solução possível.

