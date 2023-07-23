import { Gameboard } from "./gameboard.js";
import { Vector2 } from "./vector2.js";

export function renderGame(canvas: HTMLCanvasElement, playerGameboard: Gameboard, enemyGameboard: Gameboard) {
    const ctx = canvas.getContext("2d");
    const cellSize = 32;

    renderBackground(ctx, canvas);

    renderText(ctx, {x: 192, y: 80}, "Battleship", 64);
    renderText(ctx, {x: 140, y: 480}, "You", 48);
    renderText(ctx, {x: 400, y: 480}, "Enemy", 48);
    renderCoords(ctx, cellSize);
    renderBoard(ctx, cellSize, playerGameboard);
    renderBoard(ctx, cellSize, enemyGameboard);

    function renderBackground(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        ctx.fillStyle = "#08F";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    function renderText(ctx: CanvasRenderingContext2D, origin: Vector2, text: string, fontSize: number) {
        const color = "#000"
        const font = "Tahoma";
    
        ctx.fillStyle = color;
        ctx.font = `${fontSize}px ${font}`;
        ctx.fillText(text, origin.x, origin.y);
    }
    
    function renderBoard(ctx: CanvasRenderingContext2D, cellSize: number, gameboard: Gameboard) {
        renderGrid();
        renderShips();

        function renderGrid() {
            for (let y = 0; y < gameboard.board.length; y++) {
                for (let x = 0; x < gameboard.board[y].length; x++) {
                    const cell = gameboard.board[y][x];
                    
                    ctx.strokeStyle = "#000";
                    ctx.lineWidth = 2;
                    const xx = (x * cellSize) + gameboard.origin.x;
                    const yy = (y * cellSize) + gameboard.origin.y;
                    const w = cellSize;
                    const h = cellSize;
                    ctx.strokeRect(xx, yy, w, h);
                }
            }
        }

        function renderShips() {
            for (let y = 0; y < gameboard.board.length; y++) {
                for (let x = 0; x < gameboard.board[y].length; x++) {
                    const cell = gameboard.board[y][x];
                    
                    if (cell.ship) {
                        ctx.strokeStyle = "red";
                        ctx.lineWidth = 2;
                        const xx = (x * cellSize) + gameboard.origin.x;
                        const yy = (y * cellSize) + gameboard.origin.y;
                        const w = cellSize;
                        const h = cellSize;
                        ctx.strokeRect(xx, yy, w, h);
                    }
                }
            }
        }
    }
    
    function renderCoords(ctx: CanvasRenderingContext2D, cellSize: number) {
        ctx.fillStyle = '#000';
        ctx.font = "16px Tahoma";
    
        renderLetters(8, {x: 58, y: 152});
        renderLetters(8, {x: 346, y: 152});
    
        renderNumbers(8, {x: 316, y: 182});
    
        function renderLetters(length: number, origin: Vector2) {
            ctx.fillText("A", origin.x, origin.y);
            ctx.fillText("B", origin.x + cellSize, origin.y);
            ctx.fillText("C", origin.x + cellSize * 2, origin.y);
            ctx.fillText("D", origin.x + cellSize * 3, origin.y);
            ctx.fillText("E", origin.x + cellSize * 4, origin.y);
            ctx.fillText("F", origin.x + cellSize * 5, origin.y);
            ctx.fillText("G", origin.x + cellSize * 6, origin.y);
            ctx.fillText("H", origin.x + cellSize * 7, origin.y);
        }
    
        function renderNumbers(length: number, origin: Vector2) {
            for (let i = 0; i < 8; i++) {
                ctx.fillText(i.toString(), origin.x, origin.y + (cellSize * i))
            }
        }
    }
}