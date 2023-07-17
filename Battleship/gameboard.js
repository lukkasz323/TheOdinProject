import { Cell } from "./cell.js";
export class Gameboard {
    static size = 8;
    board = [];
    constructor() {
        for (let y = 0; y < Gameboard.size; y++) {
            this.board[y] = [];
            for (let x = 0; x < Gameboard.size; x++) {
                this.board[y][x] = new Cell();
            }
        }
    }
    takeHit(x, y) {
        const ship = this.board[y][x].ship;
        if (ship) {
            ship.takeHit();
        }
    }
}
