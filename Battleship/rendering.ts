export function renderGame(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");

    // Background
    {
        ctx.fillStyle = "#08F";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}