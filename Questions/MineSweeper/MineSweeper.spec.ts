import updateBoard from "./MineSweeper";
describe('updateBoard', () => {
  test('click on a mine ("M"), should reveal a mine ("X")', () => {
    const board = [
      ['E', 'M', 'E'],
      ['E', 'E', 'E'],
      ['E', 'E', 'E']
    ];
    const click = [0, 1];
    const expected = [
      ['E', 'X', 'E'],
      ['E', 'E', 'E'],
      ['E', 'E', 'E']
    ];
    expect(updateBoard(board, click)).toEqual(expected);
  });
});
