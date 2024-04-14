function updateMatrix(mat: number[][]): number[][] {
    const rows = mat.length
    const cols = mat[0].length

    let distanceMap = Array.from(
        { length: rows },
        () => Array(cols).fill(Infinity)
    )

    // Forward traversal
    for(let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if(mat[row][col] === 0) {
                
                distanceMap[row][col] = 0
            } else {
                // Calculate distances based on the available top and left distances
                if(row > 0) {
                    distanceMap[row][col] = Math.min(distanceMap[row][col], distanceMap[row - 1][col] + 1)

                }

                if (col > 0) {
                    distanceMap[row][col] = Math.min(distanceMap[row][col], distanceMap[row][col - 1] + 1);
                }
            }
        }
    }

    // Backward traversal
    for(let row = rows - 1; row >= 0; row--) {
        for (let col = cols - 1; col >= 0; col--) {
            if(row < rows - 1) {
                distanceMap[row][col] = Math.min(distanceMap[row][col], distanceMap[row + 1][col] + 1)
            }

            if (col < cols - 1) {
                distanceMap[row][col] = Math.min(distanceMap[row][col], distanceMap[row][col + 1] + 1)
            }
        }
    }

    return distanceMap;

};