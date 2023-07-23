import { Ship } from "./ship.js";

export class Cell {
    ship: Ship = null;
    #wasHit: boolean = false;

    constructor(ship?: Ship) {
        if (ship !== undefined) {
            this.ship = ship; 
        }
    }

    takeHit(): void {
        console.log("Cell: I just got hit!");
        this.#wasHit = true;
        if (this.ship !== null) {
            this.ship.takeHit();
        }
    }
}