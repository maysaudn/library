const form = document.getElementById('addBook');
const addBookButton = document.getElementById('addBookButton');
const submitFormButton = document.getElementById('submitButton');
const libraryDiv = document.getElementById('myLibrary');

let libraryBookDiv = '';
let removeButton = '';
let readToggle = '';

addBookButton.addEventListener('click', openBookForm);
submitFormButton.addEventListener('click', addBookToLibrary);

function openBookForm() {
    form.style.display = 'block';
}

function closeForm() {
    form.style.display = 'none';
}

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

function addBookToLibrary() {
    let bookTitleInput = document.getElementById('bookTitle').value;
    let authorInput = document.getElementById('author').value;
    let numberOfPagesInput = document.getElementById('numberOfPages').value;
    let hasReadInput = document.getElementById('checkbox').checked;

    numberOfPagesInput = parseInt(numberOfPagesInput, 10);

    newBook = new Book(bookTitleInput, authorInput, numberOfPagesInput, hasReadInput);
    console.log(newBook);

    myLibrary.push(newBook);

    console.log(myLibrary);

    clearLibraryCards();

    for (i = 0; i < myLibrary.length; i++) {
        createBookDiv();

        createTitle();
    
        createAuthor();

        createPageNumbers();

        createReadElements();

        removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.className += 'library-btn';
        removeButton.addEventListener('click', removeFromLibrary);

        readToggle = document.createElement('button');
        readToggle.className += 'library-btn';
        readToggle.innerText = 'I have/have not read this!';
        readToggle.addEventListener('click', toggleReadStatus);
        createRemoveButton();

        toggleReadButton();
    
        libraryDiv.appendChild(libraryBookDiv);
    }

    closeForm();
    clearFormInputs();
}

function createTitle() {
    let titleElement = document.createElement('h4');
    titleElement.className += 'book-title';
    let titleText = document.createTextNode(myLibrary[i].title);
    titleElement.appendChild(titleText);
    libraryBookDiv.appendChild(titleElement);
}

function createAuthor() {
    let authorElement = document.createElement('p');
    authorElement.className += 'author';
    let authorText = document.createTextNode(myLibrary[i].author);
    authorElement.appendChild(authorText);
    libraryBookDiv.appendChild(authorElement);
}

function createPageNumbers() {
    let pageNumberElement = document.createElement('p');
    pageNumberElement.className += 'page-number';
    let pageNumberText = document.createTextNode(myLibrary[i].pages);
    pageNumberElement.appendChild(pageNumberText);
    libraryBookDiv.appendChild(pageNumberElement);
}

function createReadElements() {
    let hasReadElement = document.createElement('p');
    hasReadElement.className += 'has-read';
    hasReadElement.setAttribute('id', i + '-read')
    let hasReadText = ''
    if (myLibrary[i].read === true) {
        hasReadText = document.createTextNode('I read this!');
    } else {
        hasReadText = document.createTextNode('Not read yet!');
    }
    hasReadElement.appendChild(hasReadText);
    libraryBookDiv.appendChild(hasReadElement);
}

function createBookDiv() {
    libraryBookDiv = document.createElement('div');
    libraryBookDiv.className += 'library-book';
    libraryBookDiv.setAttribute('id', i);
    libraryDiv.appendChild(libraryBookDiv);
}

function clearLibraryCards() {
    libraryDiv.innerHTML = '';
}


function createRemoveButton() {
    removeButton.dataset.referenceNumber = i
    libraryBookDiv.appendChild(removeButton);
}

function removeFromLibrary(e) {
    secondReferenceNumber = e.target.dataset.referenceNumber
    console.log(secondReferenceNumber);
    myLibrary.splice(secondReferenceNumber, 1);
    console.log(myLibrary);

    let libraryBookDivReference = document.getElementById(secondReferenceNumber);
    libraryBookDivReference.innerHTML = '';
}



function toggleReadButton() {
    readToggle.dataset.referenceNumber = i;
    libraryBookDiv.appendChild(readToggle);
}

function toggleReadStatus(e) {
    toggleReferenceNumber = e.target.dataset.referenceNumber;
    console.log(toggleReferenceNumber);
    toggleReferenceNumberId = toggleReferenceNumber + '-read';

    let libraryBookToggleReference = document.getElementById(toggleReferenceNumberId);
    if (myLibrary[toggleReferenceNumber].read === true) {
        myLibrary[toggleReferenceNumber].read = false;
        libraryBookToggleReference.innerText = 'Wait, I lied, I did not read this';
    } else {
        myLibrary[toggleReferenceNumber].read = true;
        libraryBookToggleReference.innerText = 'I read it now!'
    }
}

function clearFormInputs() {
    document.getElementById('bookTitle').value = '';
    document.getElementById('author').value = '';
    document.getElementById('numberOfPages').value = '';
    document.getElementById('checkbox').value = '';
}