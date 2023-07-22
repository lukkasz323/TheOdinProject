export class Ship {
    length;
    #hits = 0;
    constructor(length) {
        this.length = length;
    }
    takeHit() {
        console.log("ship: I just got hit!");
        this.#hits += 1;
    }
}
