export {};

function updateGame() {
    
}

function drawGame(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, 64, 64);
}

function main() {
    const canvas = <HTMLCanvasElement>document.getElementById("game-canvas");
    drawGame(canvas);
}

main();