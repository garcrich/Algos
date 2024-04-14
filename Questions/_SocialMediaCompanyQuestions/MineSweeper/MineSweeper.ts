export default function updateBoard(board: string[][], click: number[]): string[][] {
    const [clickRow, clickCol] = click;

    // If clicked on a mine, game over.
    if (board[clickRow][clickCol] === 'M') {
        board[clickRow][clickCol] = 'X';
        return board;
    }

    // Directions for exploration (8 adjacent cells around a given cell).
    const directions = [
        [-1, 0],  // up
        [1, 0],   // down
        [0, -1],  // left
        [0, 1],   // right
        [-1, 1],  // up-right
        [-1, -1], // up-left
        [1, 1],   // down-right
        [1, -1],  // down-left
    ];

    // Recursively reveal cells starting from the click position.
    function reveal(row: number, col: number) {
        if (
            row < 0 || 
            row >= board.length || 
            col < 0 || 
            col >= board[0].length || 
            board[row][col] !== 'E'
        ) {
            return; // Out of bounds or not an empty cell.
        }
        
        let mines = 0;

        directions.forEach(([dx, dy]) => {
            const newRow = row + dx, 
            newCol = col + dy;
            
            if (
                newRow >= 0 && newRow < board.length && 
                newCol >= 0 && newCol < board[0].length && 
                board[newRow][newCol] === 'M'
            ) {
                mines++; // Count adjacent mines.
            }
        });

        if (mines > 0) {
            // If adjacent mines are found, mark the cell with the count.
            board[row][col] = String(mines);
        } else {
            // If no adjacent mines, mark as 'B' and reveal adjacent cells.
            board[row][col] = 'B';
            directions.forEach(
                ([dx, dy]) => reveal(row + dx, col + dy)
            );
        }
    }

    reveal(clickRow, clickCol);
    return board;
}
