import { Gameboard } from "./gameboard.js";
import { renderGame } from "./rendering.js";
import { Vector2 } from "./vector2.js";

function canvas_event_click(event: PointerEvent, canvas: HTMLCanvasElement, playerGameboard: Gameboard, enemyGameboard: Gameboard) {
    const canvasBoundingClientRect: DOMRect = canvas.getBoundingClientRect();
    const mouse = {
        x: event.x - Math.ceil(canvasBoundingClientRect.x) + 1,
        y: event.y - Math.floor(canvasBoundingClientRect.y),
    }
    
    handleEnemyBoardInteraction(mouse, enemyGameboard);
    renderGame(canvas, playerGameboard, enemyGameboard);
}

function handleEnemyBoardInteraction(mouse: Vector2, enemyGameboard: Gameboard) {
    const enemyCellPosition = {
        x: Math.floor((mouse.x - enemyGameboard.origin.x) / 32), 
        y: Math.floor((mouse.y - enemyGameboard.origin.y) / 32),
    };
    if (isCellPositionInBounds(enemyCellPosition)) {
        enemyGameboard.board[enemyCellPosition.y][enemyCellPosition.x].takeHit();
    }
}

function isCellPositionInBounds(cellPosition: Vector2): boolean {
    return (
        cellPosition.x >= 0 && (Gameboard.size - 1) >= cellPosition.x &&
        cellPosition.y >= 0 && (Gameboard.size - 1) >= cellPosition.y
    );
}

function main() {
    const canvas = <HTMLCanvasElement>document.getElementById("game-canvas");
    const playerGameboard = new Gameboard({x: 48, y: 160});
    const enemyGameboard = new Gameboard({x: 336, y: 160});
    
    canvas.addEventListener("click", (event: PointerEvent) => canvas_event_click(event, canvas, playerGameboard, enemyGameboard));
    
    renderGame(canvas, playerGameboard, enemyGameboard);
}

main();

export {};