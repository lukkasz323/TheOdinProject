class Book {
    title;
    author;
    isRead;
    constructor(title, author, isRead) {
        this.title = title;
        this.author = author;
        this.isRead = isRead;
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
    const target = event.target;
    const book = globalThis.books[target.closest("tr").dataset.index];
    book.isRead = !book.isRead;
}
function deleteButton_event_onclick(event) {
    // Delete book
    const target = event.target;
    const bookIndex = Number(target.closest("tr").dataset.index);
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
        const isReadCell = row.insertCell();
        const deleteCell = row.insertCell();
        nameCell.innerText = "Title";
        authorCell.innerText = "Author";
        isReadCell.innerText = "Read?";
        deleteCell.innerText = "DELETE";
    }
    // Body
    {
        const body = library.createTBody();
        for (let i = 0; i < globalThis.books.length; i++) {
            const book = globalThis.books[i];
            const row = body.insertRow();
            row.dataset.index = i.toString();
            const titleCell = row.insertCell();
            const authorCell = row.insertCell();
            titleCell.innerText = book.title;
            authorCell.innerText = book.author;
            const isReadCell = row.insertCell();
            const isReadCheckbox = document.createElement("input");
            isReadCheckbox.type = "checkbox";
            isReadCheckbox.addEventListener("change", isReadCheckbox_event_onchange);
            isReadCell.appendChild(isReadCheckbox);
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
    books.push(new Book("Roadside Picnic", "A. & B. Strugatsky", false));
    books.push(new Book("Brave New World", "Aldous Huxley", false));
    reloadDOM();
    document.getElementById("add-book-menu-button").addEventListener("click", () => addBook_menuButton_event_onclick);
    document.getElementById("add-book-submit-button").addEventListener("click", () => addBook_submitButton_event_onclick);
}
main();
