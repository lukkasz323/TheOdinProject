import { Gameboard } from "./gameboard.js";
import { renderGame } from "./rendering.js";
function canvas_event_click(event, canvas, gameboard) {
    const canvasBoundingClientRect = canvas.getBoundingClientRect();
    const x = event.x - Math.ceil(canvasBoundingClientRect.x) + 1;
    const y = event.y - Math.floor(canvasBoundingClientRect.y);
    console.log(x, y);
}
function main() {
    const canvas = document.getElementById("game-canvas");
    const gameboard = new Gameboard();
    canvas.addEventListener("click", (event) => canvas_event_click(event, canvas, gameboard));
    renderGame(canvas, gameboard);
}
main();
