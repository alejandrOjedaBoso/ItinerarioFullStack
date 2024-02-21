interface Book{
    id:number,
    title:string,
    author:string,
    coAuthor?:string,
    isLoan?:(id:number) => void
}

const book:Book={
    id:1,
    title:"The Hobbit",
    author:"My title",
    coAuthor:"Alejandro",
    isLoan:(id:number) => {
        console.log(`Loaned ${id}`);
    }
};

const books:Book[] = [];

function getBook():Book{
    return {id:1, title:"The Hobbit", author:"Tolkien", coAuthor:"Alejandro", isLoan:(id:number) => {console.log(`Loaned ${id}`);}};
}

const myBook:Book = getBook();
myBook.title;

function createBook(book:Book):Book{
    return book;
}

const newBook:Book = {id:1, title:"The Hobbit", author:"Tolkien", coAuthor:"Alejandro"};
