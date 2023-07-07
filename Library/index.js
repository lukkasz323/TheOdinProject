class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
function addBook_menuButton_event_onclick(event) {
    addBook_toggleMenu();
}
function addBook_submitButton_event_onclick(event) {
    const title = document.getElementById("add-book-title");
    const author = document.getElementById("add-book-author");
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
function generateLibrary() {
    const library = document.createElement('table');
    // Head
    {
        const head = library.createTHead();
        const row = head.insertRow();
        const nameCell = row.insertCell();
        const authorCell = row.insertCell();
        nameCell.innerText = "Title";
        authorCell.innerText = "Author";
    }
    // Body
    {
        const body = library.createTBody();
        for (const book of globalThis.books) {
            const row = body.insertRow();
            const titleCell = row.insertCell();
            const authorCell = row.insertCell();
            titleCell.innerText = book.title;
            authorCell.innerText = book.author;
        }
    }
    return library;
}
function reloadDOM() {
    const library = document.getElementById("library");
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
