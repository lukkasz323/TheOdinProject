export class Cell {
    ship = null;
    constructor(ship) {
        if (ship !== undefined) {
            this.ship = ship;
        }
    }
}
