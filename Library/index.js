class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
// Main
{
    const books = [];
    books.push(new Book("BookName1", "BookAuthor1"));
    books.push(new Book("BookName2", "BookAuthor1"));
    // Append books to library
    {
        const library = document.getElementById("library");
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
            for (const book of books) {
                const row = body.insertRow();
                const titleCell = row.insertCell();
                const authorCell = row.insertCell();
                titleCell.innerText = book.title;
                authorCell.innerText = book.author;
            }
        }
    }
}
