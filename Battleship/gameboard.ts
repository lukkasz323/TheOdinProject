import { Cell } from "./cell.js";
import { Ship } from "./ship.js";
import { Vector2 } from "./vector2.js";
import { randomElementOf, randomInRange, randomIndexOf } from "./utils.js";

export class Gameboard {
    static size: number = 8;
    static directions: Record<"up" | "down" | "left" | "right", Vector2> = {
        up: {x: 0, y: -1},
        down: {x: 0, y: 1},
        left: {x: -1, y: 0},
        right: {x: 1, y: 0},
    };
    
    origin: Vector2;
    board: Cell[][];
    ships: Ship[];

    constructor(origin: Vector2) {
        this.origin = origin;
        this.board = this.#initBoard();
        this.ships = this.#initShips();
    }

    #initBoard(): Cell[][] {
        const board: Cell[][] = [];

        for (let y = 0; y < Gameboard.size; y++) {
            board[y] = [];
            for (let x = 0; x < Gameboard.size; x++) {
                board[y][x] = new Cell();
            }
        }

        return board;
    }

    #initShips(): Ship[] {
        const ships: Ship[] = [];

        ships.push(new Ship(4));
        ships.push(new Ship(3));
        ships.push(new Ship(3));
        ships.push(new Ship(2));
        ships.push(new Ship(2));
        ships.push(new Ship(2));

        for (const ship of ships) {
            this.#placeShipRandomly(ship);
        }

        return ships;
    }

    #placeShipRandomly(ship: Ship) {
        const shipOrigin: Vector2 = {x: randomInRange(0, Gameboard.size - 1), y: randomInRange(0, Gameboard.size - 1)};
        const shipCellsIndices: Vector2[] = [];
        for (let i = 0; i < ship.length; i++) {
            const cell = this.board[shipOrigin.y][shipOrigin.x];

            if (!cell.ship) {
                cell.ship = ship;
            }
        }
    }
}