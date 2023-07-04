class Book {
    constructor(public title: string, public author: string) {}
}

// Main
{
    const books: Book[] = [];
    books.push(new Book("BookName1", "BookAuthor1"));
    books.push(new Book("BookName2", "BookAuthor1"));
    
    // Append books to library
    {
        const library = <HTMLTableElement>document.getElementById("library");
        
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
    
            for (const book of books) {
                const row: HTMLTableRowElement = body.insertRow();
                const titleCell: HTMLTableCellElement = row.insertCell();
                const authorCell: HTMLTableCellElement = row.insertCell();
                titleCell.innerText = book.title;
                authorCell.innerText = book.author;
            }
        }
    }
}