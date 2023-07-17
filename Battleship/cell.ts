import { Ship } from "./ship.js";

export class Cell {
    ship: Ship = null;

    constructor(ship?: Ship) {
        if (ship !== undefined) {
            this.ship = ship; 
        }
    }
}