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
function deleteButton_event_onclick(event) {
    // Delete book
    const target = event.target;
    const bookIndex = Number(target.parentElement.parentElement.dataset.id);
    globalThis.books.splice(bookIndex, 1);
    reloadDOM();
}
function generateLibrary() {
    const library = document.createElement('table');
    // Head
    {
        const head = library.createTHead();
        const row = head.insertRow();
        const nameCell = row.insertCell();
        const authorCell = row.insertCell();
        const deleteCell = row.insertCell();
        nameCell.innerText = "Title";
        authorCell.innerText = "Author";
        deleteCell.innerText = "DELETE";
    }
    // Body
    {
        const body = library.createTBody();
        for (let i = 0; i < globalThis.books.length; i++) {
            const book = globalThis.books[i];
            const row = body.insertRow();
            row.dataset.id = i.toString();
            const titleCell = row.insertCell();
            const authorCell = row.insertCell();
            titleCell.innerText = book.title;
            authorCell.innerText = book.author;
            const deleteCell = row.insertCell();
            const deleteButton = document.createElement("button");
            deleteButton.innerText = "X";
            deleteButton.addEventListener("click", deleteButton_event_onclick);
            deleteCell.appendChild(deleteButton);
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
    books.push(new Book("Roadside Picnic", "A. & B. Strugatsky"));
    books.push(new Book("Brave New World", "Aldous Huxley"));
    reloadDOM();
}
main();
