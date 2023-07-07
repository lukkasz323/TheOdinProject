declare var books: Book[];
declare var isAddBookMenuOpen: boolean;

class Book {
    constructor(public title: string, public author: string) {}
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

    globalThis.books.push(new Book(title.value, author.value));
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

function generateLibrary(): HTMLTableElement {
    const library: HTMLTableElement = document.createElement('table');

    // Head
    {
        const head: HTMLTableSectionElement = library.createTHead();

        const row: HTMLTableRowElement = head.insertRow();
        const nameCell: HTMLTableCellElement = row.insertCell();
        const authorCell: HTMLTableCellElement = row.insertCell();
        nameCell.innerText = "Title";
        authorCell.innerText = "Author";
    }

    // Body
    {
        const body: HTMLTableSectionElement = library.createTBody();

        for (const book of globalThis.books) {
            const row: HTMLTableRowElement = body.insertRow();
            const titleCell: HTMLTableCellElement = row.insertCell();
            const authorCell: HTMLTableCellElement = row.insertCell();
            titleCell.innerText = book.title;
            authorCell.innerText = book.author;
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

    books.push(new Book("BookName1", "BookAuthor1"));
    books.push(new Book("BookName2", "BookAuthor1"));
    
    reloadDOM();
}

main();