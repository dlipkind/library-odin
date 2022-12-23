const shielf = document.querySelector('.shielf');
const form = document.getElementById('bookForm');

let myLibrary = [];

form.addEventListener('submit', (e) => {
    let bookTitle = form.elements['title'].value;
    let bookAuthor = form.elements['author'].value;
    let bookPages = form.elements['pages'].value; // number?
    let bookRead = form.elements['read'].checked; // true false?
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

function readToggle(e) {
    targetBookID = e.target.id;
    myLibrary[targetBookID].read = !myLibrary[targetBookID].read;
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

        const readBtn = document.createElement('button');
        readBtn.textContent = 'Read';
        readBtn.setAttribute("id", bookID);

        shielf.appendChild(card);
        card.appendChild(removeBtn);
        card.appendChild(readBtn);

        removeBtn.addEventListener('click', removeBookfromLibrary)
        readBtn.addEventListener('click', readToggle)

        for (let item in book) {
            const data = document.createElement('p');
            data.textContent = book[item];
            card.appendChild(data);
        }

    console.log(card);
    });
}


addBookToLibrary("41234123", "author", 123421, true)
addBookToLibrary("asdfasdf", "author", 321, true)
addBookToLibrary("fasdfasdf", "autasdfhor", 323, false)

displayLibrary();