
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = false;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`${this.title} issued successfully.`);
        } else {
            console.log(`${this.title} is already issued.`);
        }
    }

    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(`${this.title} returned successfully.`);
        } else {
            console.log(`${this.title} was not issued.`);
        }
    }
}

const books = [
    new Book("JavaScript Basics", "John", "101"),
    new Book("Python Guide", "Alice", "102"),
    new Book("Data Structures", "Robert", "103")
];

function displayAvailableBooks() {
    const availableBooks = books.filter(book => !book.isIssued);

    console.log("\nAvailable Books:");

    availableBooks.forEach(book => {
        console.log(`${book.title} | ${book.author} | ISBN: ${book.isbn}`);
    });
}

function issueBookByISBN(isbn) {
    const book = books.find(book => book.isbn === isbn);

    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found.");
    }
}

displayAvailableBooks();

issueBookByISBN("102");

displayAvailableBooks();

const returnedBook = books.find(book => book.isbn === "102");

if (returnedBook) {
    returnedBook.returnBook();
}

displayAvailableBooks();
