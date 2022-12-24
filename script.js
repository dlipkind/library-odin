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

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
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
        let bookID = i++;

        const card = document.createElement('div');
        const removeBtn = document.createElement('button');
        const readBtn = document.createElement('button');
        card.classList.add('card');
        
        removeBtn.textContent = 'Remove';
        readBtn.textContent = 'Read';
        
        removeBtn.setAttribute("id", bookID);
        card.setAttribute("id", bookID);
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