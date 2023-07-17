export function renderGame(canvas, gameboard) {
    const ctx = canvas.getContext("2d");
    const cellSize = 32;
    renderBackground(ctx, canvas);
    renderTitle(ctx);
    renderCoords(ctx, cellSize);
    renderBoard(ctx, gameboard, cellSize, { x: 48, y: 160 });
    renderBoard(ctx, gameboard, cellSize, { x: 336, y: 160 });
}
function renderBackground(ctx, canvas) {
    ctx.fillStyle = "#08F";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function renderTitle(ctx) {
    ctx.fillStyle = '#000';
    ctx.font = "32px Tahoma";
    ctx.fillText("Battleship", 256, 64);
}
function renderBoard(ctx, gameboard, cellSize, origin) {
    for (let y = 0; y < gameboard.board.length; y++) {
        for (let x = 0; x < gameboard.board[y].length; x++) {
            ctx.lineWidth = 2;
            ctx.strokeStyle = "#000";
            const xx = (x * cellSize) + origin.x;
            const yy = (y * cellSize) + origin.y;
            const w = cellSize;
            const h = cellSize;
            ctx.strokeRect(xx, yy, w, h);
        }
    }
}
function renderCoords(ctx, cellSize) {
    ctx.fillStyle = '#000';
    ctx.font = "16px Tahoma";
    renderLetters(8, { x: 58, y: 152 });
    renderLetters(8, { x: 346, y: 152 });
    renderNumbers(8, { x: 316, y: 182 });
    function renderLetters(length, origin) {
        ctx.fillText("A", origin.x, origin.y);
        ctx.fillText("B", origin.x + cellSize, origin.y);
        ctx.fillText("C", origin.x + cellSize * 2, origin.y);
        ctx.fillText("D", origin.x + cellSize * 3, origin.y);
        ctx.fillText("E", origin.x + cellSize * 4, origin.y);
        ctx.fillText("F", origin.x + cellSize * 5, origin.y);
        ctx.fillText("G", origin.x + cellSize * 6, origin.y);
        ctx.fillText("H", origin.x + cellSize * 7, origin.y);
    }
    function renderNumbers(length, origin) {
        for (let i = 0; i < 8; i++) {
            ctx.fillText(i.toString(), origin.x, origin.y + (cellSize * i));
        }
    }
}
