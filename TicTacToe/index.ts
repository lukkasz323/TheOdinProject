export {};

type GameState = {
    board: string[];
    currentPlayer: string;
    moves: number;
    hasEnded: boolean;
}

function isDraw(gameState: GameState): boolean {
    if (gameState.moves >= 9) {
        return true;
    }
    return false;
}

function isWin(gameState: GameState): boolean {
    const b = gameState.board;

    return (b[0] !== "" && b[0] === b[1] && b[1] === b[2]) // 1. row 
        || (b[3] !== "" && b[3] === b[4] && b[4] === b[5]) // 2. row
        || (b[6] !== "" && b[6] === b[7] && b[7] === b[8]) // 3. row

        || (b[0] !== "" && b[0] === b[3] && b[3] === b[6]) // 1. col
        || (b[1] !== "" && b[1] === b[4] && b[4] === b[7]) // 2. col
        || (b[2] !== "" && b[2] === b[5] && b[5] === b[8]) // 3. col

        || (b[0] !== "" && b[0] === b[4] && b[4] === b[8]) // 1. diag
        || (b[2] !== "" && b[2] === b[4] && b[4] === b[6]) // 2. diag
}

function swapPlayers(playerChar: string): string {
    if (playerChar === "X") {
        return "O";
    }
    return "X";
}

function gameButton_event_onclick(event: PointerEvent, gameState: GameState) {
    if (!gameState.hasEnded) {
        const target = <HTMLButtonElement>event.target;

        if (gameState.board[target.dataset.index] === "") {
            gameState.board[target.dataset.index] = gameState.currentPlayer;
            target.innerText = gameState.currentPlayer;
            gameState.moves += 1;

            if (isWin(gameState)) {
                document.getElementById("win-label").innerText = `${gameState.currentPlayer} has won!`;
                gameState.hasEnded = true;
            } else if (isDraw(gameState)) {
                document.getElementById("win-label").innerText = "Draw!";
                gameState.hasEnded = true;
            }

            gameState.currentPlayer = swapPlayers(gameState.currentPlayer);
        }
    }
}

function addButtonsToDOM(buttonsContainer: HTMLElement, gameState: GameState) {
    for (let i = 0; i < 9; i++) {
        const button: HTMLButtonElement = document.createElement("button");

        button.dataset.index = i.toString();
        button.addEventListener("click", (event: PointerEvent) => gameButton_event_onclick(event, gameState));
        gameState.board.push("");
        buttonsContainer.appendChild(button);
    }
}

function main() {
    const buttonsContainer = document.getElementById("buttons");
    const gameState: GameState = {
        board: [],
        currentPlayer: "X",
        moves: 0,
        hasEnded: false,
    }

    addButtonsToDOM(buttonsContainer, gameState);
}

main();