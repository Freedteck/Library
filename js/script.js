const myLibrary = []

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;

    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${haveRead} yet`
    }
}

const addNew = document.querySelector('#new');
const myDialog = document.getElementById('my-dialog')
const addBook = document.querySelector('form button');

const input = document.querySelectorAll('input')
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const check = document.getElementById('read')

const container = document.querySelector('.container')

function addBookToLibrary() {
    const book = new Book(title.value, author.value, pages.value, )
    myLibrary.push(book)


    showBooks();
}

function showBooks() {
    container.innerHTML = ''

    myLibrary.forEach((library, index) => {
        const card = document.createElement('div')
        const titleElem = document.createElement('h3')
        const authorElem = document.createElement('p')
        const pagesElem = document.createElement('p')
        const haveReadElem = document.createElement('button')
        const deleteBtn = document.createElement('button')


        titleElem.textContent = `Title: ${library.title}`;
        authorElem.textContent = `By: ${library.author}`
        pagesElem.textContent = `Pages: ${library.pages} pages`
        deleteBtn.textContent = `Delete Book`

        if (check.checked) {
            haveReadElem.style.backgroundColor = "green"
            haveReadElem.textContent = `I have Read it: ${library.haveRead}`
        }
        card.appendChild(titleElem)
        card.appendChild(authorElem)
        card.appendChild(pagesElem)
        card.appendChild(haveReadElem)
        card.appendChild(deleteBtn)
        container.appendChild(card)

        deleteBtn.addEventListener('click', () => {
            deleteBook(index)
        })
    })
}

function deleteBook(index) {
    myLibrary.splice(index, 1)
    showBooks()
}
addNew.addEventListener('click', () => {
    title.value = ''
    author.value = ''
    pages.value = ''
    myDialog.showModal()
})

addBook.addEventListener('click', (e) => {
    if (title.validity.valid && author.validity.valid && pages.validity.valid) {
        addBookToLibrary()
    }
})

