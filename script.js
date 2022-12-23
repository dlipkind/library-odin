const shielf = document.querySelector('.shielf');

let myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
    displayLibrary();
}

function displayLibrary() {
    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('card');
        shielf.appendChild(card);
        for (let item in book) {
            const data = document.createElement('p');
            data.textContent = book[item];
            card.appendChild(data);
            console.log(card);
        }
    });

}

addBookToLibrary('The Hobbit', 'Tolkien', 259, true);
addBookToLibrary('Game of Thrones', 'George R. R. Martin', 999, false);
addBookToLibrary('Some Other Book', 'Great Author and a Good Guy', 1234, true);

console.log(myLibrary)


// const bookTitle = document.createElement('bookTitle');
// const bookAuthor = document.createElement('bookAuthor');
// const bookPages = document.createElement('bookPages');
// const bookRead = document.createElement('bookRead');