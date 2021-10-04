const form = document.getElementById('addBook');
const addBookButton = document.getElementById('addBookButton');

addBookButton.addEventListener('click', openBookForm);


let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (read === true) {
            return title + ' by ' + author + ', ' + pages + ' pages, ' + 'already read';
        } else {
            return title + ' by ' + author + ', ' + pages + ' pages, ' + 'not read yet';
        }
    }
}

theHobbit = new Book('the Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(theHobbit.info());

function addBookToLibrary() {
    console.log(myLibrary);
    //do stuff
}

function openBookForm() {
    form.style.display = 'block';
}

function closeForm() {
    document.getElementById('addBook').style.display = 'none';
}