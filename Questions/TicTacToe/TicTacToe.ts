export default class TicTacToe {
    board: number[][]
    private rows: number[]
    private cols: number[]
    private diagonal: number
    private antiDiagonal: number
    
    constructor(n: number) {
        this.board = Array(n).fill(undefined).map(slot => {
            return slot = Array(n).fill(0)
        })

        this.rows = new Array(n).fill(0)
        this.cols = new Array(n).fill(0)
        this.diagonal = 0
        this.antiDiagonal = 0
    }

    /**
    * Executes a move by recording it and checking for a win condition
    * @param {number} row - The row where the move is made.
    * @param {number} col - The column where the move is made.
    * @param {number} player - The player making the move (1 or 2)
    * @returns {number} - The player number if they win with this move; otherwise, 0
    */
    move(row: number, col: number, player: number): number {
        this.recordMove(row, col, player)

        if(this.checkVictoryCondition(row,col)) {
            return player;
        }

        return 0;
    }

    private recordMove(row: number, col: number, player: number): void {
        const playerMark = player === 1 ? 1 : -1;

        this.board[row][col] = playerMark

        this.rows[row] += playerMark
        this.cols[col] += playerMark

        if(row === col) {
            this.diagonal += playerMark
        }

        if(row + col === this.board.length - 1) {
            this.antiDiagonal += playerMark;
        }
    }

    /**
    * practicing JSDocs
    * @param {number} row - The row of the current move
    * @param {number} col - The column of the current move
    * @param {number} playerMark - The mark of the plaer making the move
    * @returns {boolean} - True if the move wins the game; otherwies, false
    */
    private checkVictoryCondition(row: number, col: number): boolean {
        const winsNeeded = this.board.length

        return Math.abs(this.rows[row]) === winsNeeded ||
            Math.abs(this.cols[col]) === winsNeeded ||
            Math.abs(this.diagonal) === winsNeeded ||
            Math.abs(this.antiDiagonal) === winsNeeded
    }
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */