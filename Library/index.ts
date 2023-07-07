declare var books: Book[];
declare var isAddBookMenuOpen: boolean;

class Book {
    constructor(public title: string, public author: string, public isRead: boolean) {}
}

function addBook_menuButton_event_onclick(event: PointerEvent) {
    addBook_toggleMenu();
}

function addBook_submitButton_event_onclick(event: PointerEvent) {
    const title = <HTMLInputElement>document.getElementById("add-book-title");
    const author = <HTMLInputElement>document.getElementById("add-book-author");

    if (!title.value || !author.value) {
        return;
    }

    globalThis.books.push(new Book(title.value, author.value, false));
    title.value = "";
    author.value = "";

    addBook_toggleMenu();
    reloadDOM();
}

function addBook_toggleMenu() {
    const menu = document.getElementById("add-book");
    const display = "inline";

    if (menu.style.display !== display) {
        menu.style.display = display;
    }
    else {
        menu.style.display = "none";
    }
}

function isReadCheckbox_event_onchange(event) {
    const target = <HTMLInputElement>event.target;
    const book: Book = globalThis.books[target.closest("tr").dataset.index];
    book.isRead = !book.isRead;
}

function deleteButton_event_onclick(event: PointerEvent) {
    // Delete book
    const target = <HTMLElement>event.target;
    const bookIndex = Number(target.closest("tr").dataset.index);
    globalThis.books.splice(bookIndex, 1);

    reloadDOM();
}

function generateLibrary(): HTMLTableElement {
    const library: HTMLTableElement = document.createElement('table');

    // Head
    {
        const head: HTMLTableSectionElement = library.createTHead();

        const row: HTMLTableRowElement = head.insertRow();
        const nameCell: HTMLTableCellElement = row.insertCell();
        const authorCell: HTMLTableCellElement = row.insertCell();
        const isReadCell: HTMLTableCellElement = row.insertCell();
        const deleteCell: HTMLTableCellElement = row.insertCell();
        nameCell.innerText = "Title";
        authorCell.innerText = "Author";
        isReadCell.innerText = "Read?";
        deleteCell.innerText = "DELETE";
    }

    // Body
    {
        const body: HTMLTableSectionElement = library.createTBody();

        for (let i = 0; i < globalThis.books.length; i++) {
            const book = globalThis.books[i];

            const row: HTMLTableRowElement = body.insertRow();
            row.dataset.index = i.toString();

            const titleCell: HTMLTableCellElement = row.insertCell();
            const authorCell: HTMLTableCellElement = row.insertCell();
            titleCell.innerText = book.title;
            authorCell.innerText = book.author;

            const isReadCell: HTMLTableCellElement = row.insertCell();
            const isReadCheckbox: HTMLInputElement = document.createElement("input");
            isReadCheckbox.type = "checkbox";
            isReadCheckbox.addEventListener("change", isReadCheckbox_event_onchange)
            isReadCell.appendChild(isReadCheckbox);

            const deleteCell: HTMLTableCellElement = row.insertCell();
            const deleteButton: HTMLButtonElement = document.createElement("button");
            deleteButton.innerText = "X";
            deleteButton.addEventListener("click", deleteButton_event_onclick);
            deleteCell.appendChild(deleteButton);
            
        }
    }

    return library;
}

function reloadDOM() {
    const library = <HTMLTableElement>document.getElementById("library");
    const newLibrary = generateLibrary();
    newLibrary.id = library.id;
    library.replaceWith(newLibrary);
}

function main() {
    globalThis.books = [];
    globalThis.isAddBookMenuOpen = false;

    books.push(new Book("Roadside Picnic", "A. & B. Strugatsky", false));
    books.push(new Book("Brave New World", "Aldous Huxley", false));
    
    reloadDOM();

    document.getElementById("add-book-menu-button").addEventListener("click", () => addBook_menuButton_event_onclick);
    document.getElementById("add-book-submit-button").addEventListener("click", () => addBook_submitButton_event_onclick);
}

main();