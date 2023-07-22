export class Cell {
    #ship = null;
    #wasHit = false;
    constructor(ship) {
        if (ship !== undefined) {
            this.#ship = ship;
        }
    }
    hasShip() {
        if (this.#ship === null) {
            return false;
        }
        return true;
    }
    takeHit() {
        console.log("Cell: I just got hit!");
        this.#wasHit = true;
        if (this.#ship !== null) {
            this.#ship.takeHit();
        }
    }
}
