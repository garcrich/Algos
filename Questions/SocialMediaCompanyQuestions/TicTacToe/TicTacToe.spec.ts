import TicTacToe from './TicTacToe'; // Update this path to where your TicTacToe class is defined

describe('TicTacToe', () => {
  let ticTacToe: TicTacToe;

  beforeEach(() => {
    ticTacToe = new TicTacToe(3);
  });

  test('initializes with an empty board', () => {
    expect(ticTacToe.board.every(row => row.every(cell => cell === 0))).toBeTruthy();
  });

  test('allows player 1 to make a move', () => {
    expect(ticTacToe.move(0, 0, 1)).toBe(0);
    expect(ticTacToe.board[0][0]).toBe(1);
  });

  test('allows player 2 to make a move', () => {
    ticTacToe.move(0, 0, 1); // Player 1 moves
    expect(ticTacToe.move(0, 1, 2)).toBe(0);
    expect(ticTacToe.board[0][1]).toBe(-1);
  });

  test('detects a win for player 1 horizontally', () => {
    ticTacToe.move(0, 0, 1);
    ticTacToe.move(1, 0, 2); // Player 2 moves
    ticTacToe.move(0, 1, 1);
    ticTacToe.move(1, 1, 2); // Player 2 moves
    expect(ticTacToe.move(0, 2, 1)).toBe(1);
  });

  test('detects a win for player 2 vertically', () => {
    ticTacToe.move(0, 0, 1);
    ticTacToe.move(0, 1, 2); // Player 2 moves
    ticTacToe.move(1, 0, 1);
    ticTacToe.move(1, 1, 2); // Player 2 moves
    ticTacToe.move(0, 2, 1); // Player 1 moves
    expect(ticTacToe.move(2, 1, 2)).toBe(2);
  });

  test('detects a win for player 1 diagonally', () => {
    ticTacToe.move(0, 0, 1);
    ticTacToe.move(0, 1, 2);
    ticTacToe.move(1, 1, 1);
    ticTacToe.move(0, 2, 2);
    expect(ticTacToe.move(2, 2, 1)).toBe(1);
  });

  test('no win detected in a draw scenario', () => {
    ticTacToe.move(0, 0, 1);
    ticTacToe.move(0, 1, 2);
    ticTacToe.move(0, 2, 1);
    ticTacToe.move(1, 1, 2);
    ticTacToe.move(1, 0, 1);
    ticTacToe.move(2, 0, 2);
    ticTacToe.move(1, 2, 1);
    ticTacToe.move(2, 2, 2);
    expect(ticTacToe.move(2, 1, 1)).toBe(0); // Last move fills the board without any winner
  });
});
