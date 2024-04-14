// @ts-ignore
function updateMatrix(mat: number[][]): number[][] {
    const rows = mat.length;
    const cols = mat[0].length;
    const queue: number[][] = [];

    // Populate the queue with initial '0' positions and set all '1' positions to Infinity
    for(let r = 0; r < rows; r++) {
        for( let c = 0; c <cols; c++) {
            if(mat[r][c] === 0) {
                queue.push([r,c]) //Enqueue cell coordinates of '0' cells
            } else {
                mat[r][c] = Infinity // Set distance to 'Infinity' for '1' cells
            }
        }
    }

    // Process the queue using BFS to update distances
    while (queue.length > 0) {
        const directions = [
            [1,0],  // Down
            [-1,0], // Up
            [0,1],  // Right
            [0,-1]  // Left
        ]
        
        
        const [currentRow, currentCol] = queue.shift() as number[]
        // Explore all possible movements from the current cell
        for (let [dx, dy] of directions) {
            const newRow = currentRow + dx,
                newCol = currentCol + dy

            // Check bounds and whether the cell hsa already been visited
            if (
                newRow >= 0 && 
                newRow < rows && 
                newCol >= 0 && 
                cols && 
                mat[newRow][newCol] === Infinity
            ) {
                mat[newRow][newCol] = mat[currentRow][currentCol] + 1
                queue.push([newRow, newCol])
            }
        }
    }

    return mat
};