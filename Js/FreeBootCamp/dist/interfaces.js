"use strict";
const book = {
    id: 1,
    title: "The Hobbit",
    author: "My title",
    coAuthor: "Alejandro",
    isLoan: (id) => {
        console.log(`Loaned ${id}`);
    }
};
const books = [];
function getBook() {
    return { id: 1, title: "The Hobbit", author: "Tolkien", coAuthor: "Alejandro", isLoan: (id) => { console.log(`Loaned ${id}`); } };
}
const myBook = getBook();
myBook.title;
function createBook(book) {
    return book;
}
const newBook = { id: 1, title: "The Hobbit", author: "Tolkien", coAuthor: "Alejandro" };
