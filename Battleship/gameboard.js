import { Cell } from "./cell.js";
import { Ship } from "./ship.js";
import { randomInRange } from "./utils.js";
export class Gameboard {
    static size = 8;
    static directions = {
        up: { x: 0, y: -1 },
        down: { x: 0, y: 1 },
        left: { x: -1, y: 0 },
        right: { x: 1, y: 0 },
    };
    origin;
    board;
    ships;
    constructor(origin) {
        this.origin = origin;
        this.board = this.#initBoard();
        this.ships = this.#initShips();
    }
    #initBoard() {
        const board = [];
        for (let y = 0; y < Gameboard.size; y++) {
            board[y] = [];
            for (let x = 0; x < Gameboard.size; x++) {
                board[y][x] = new Cell();
            }
        }
        return board;
    }
    #initShips() {
        const ships = [];
        ships.push(new Ship(4));
        ships.push(new Ship(3));
        ships.push(new Ship(3));
        ships.push(new Ship(2));
        ships.push(new Ship(2));
        ships.push(new Ship(2));
        for (const ship of ships) {
            const shipOrigin = { x: randomInRange(0, Gameboard.size - 1), y: randomInRange(0, Gameboard.size - 1) };
            const shipCellsIndices = [];
            for (let i = 0; i < ship.length; i++) {
            }
        }
        return ships;
    }
}
