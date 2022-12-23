const shielf = document.querySelector('.shielf');
const form = document.getElementById('bookForm');

let myLibrary = [];

form.addEventListener('submit', (e) => {
    const title = form.elements['title'];
    const author = form.elements['author'];
    const pages = form.elements['pages'];
    const read = form.elements['read'];
    let bookTitle = title.value;
    let bookAuthor = author.value;
    let bookPages = pages.value; // number?
    let bookRead = read.value; // true false?
    e.preventDefault();
    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead)
    displayLibrary();
});

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
}

function removeBookfromLibrary(e) {
    targetBookID = e.target.id;
    delete myLibrary[targetBookID];
    displayLibrary();
}

function displayLibrary() {
    const currentLibrary = document.querySelectorAll('.card')
    for (let i = 0; i < currentLibrary.length; i++) {
        currentLibrary[i].remove();
    }

    myLibrary.forEach((book, i) => {
        let bookID = i + 1 - 1;

        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute("id", bookID);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.setAttribute("id", bookID);

        shielf.appendChild(card);
        card.appendChild(removeBtn);

        removeBtn.addEventListener('click', removeBookfromLibrary)

        for (let item in book) {
            const data = document.createElement('p');
            data.textContent = book[item];
            card.appendChild(data);
        }

    console.log(card);
    });
}

console.log(myLibrary);