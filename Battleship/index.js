function updateGame() {
}
function drawGame(canvas) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, 64, 64);
}
function main() {
    const canvas = document.getElementById("game-canvas");
    drawGame(canvas);
}
main();
export {};