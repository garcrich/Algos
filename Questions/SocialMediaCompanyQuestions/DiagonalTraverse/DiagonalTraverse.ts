export default function findDiagonalOrder(mat: number[][]): number[] {
    const rows = mat.length;
    const cols = mat[0].length;
    let direction = 1;
    let row = 0, col = 0;
    const result: number[] = [];

    while (result.length < rows * cols) {
        result.push(mat[row][col]);

        if (direction === 1) {
            if (col === cols - 1) {
                row++;
                direction = -1;
            } else if (row === 0) {
                col++;
                direction = -1;
            } else {
                row--;
                col++;
            }
        } else {
            if (row === rows - 1) {
                col++;
                direction = 1;
            } else if (col === 0) {
                row++;
                direction = 1;
            } else {
                row++;
                col--;
            }
        }
    }

    return result;
}