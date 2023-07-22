export class Ship {
    readonly length: number;
    #hits: number = 0;

    constructor(length: number) {
        this.length = length;
    }

    takeHit() {
        console.log("ship: I just got hit!");
        this.#hits += 1;
    }
}