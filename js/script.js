const myLibrary = []

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

const dialog = document.getElementById('my-dialog')
const newBookButton = document.getElementById('new')
const addBook = document.getElementById('add')
const closeModal = document.getElementById('close')

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const check = document.getElementById('read')

const container = document.querySelector('.container')

newBookButton.addEventListener('click', showForm)

addBook.addEventListener('click', () => {

    if (title.validity.valid && author.validity.valid && pages.validity.valid) {
        addBookToLibrary()
    } else {
        alert('Enter All Fields')
    }
})

closeModal.addEventListener('click', () => {
    dialog.close()
})

function showForm() {
    title.value = ''
    author.value = ''
    pages.value = ''
    check.checked = false
    dialog.showModal()
}

function showBooks() {
    container.innerHTML = ''

    myLibrary.forEach((bookLibrary, index) => {
        const card = document.createElement('div')
        card.classList.add('card')

        const titleElem = document.createElement('h3')
        const authorElem = document.createElement('p')
        const pagesElem = document.createElement('p')
        const innerDiv = document.createElement('div')
        const deleteIcon = document.createElement('img')
        const readIcon = document.createElement('img')

        titleElem.textContent = `Title: ${bookLibrary.title}`
        authorElem.textContent = `By: ${bookLibrary.author}`
        pagesElem.textContent = `${bookLibrary.pages} Pages`

        deleteIcon.setAttribute('src', "icons/delete.svg")
        deleteIcon.setAttribute('src', "icons/delete.svg")
        deleteIcon.setAttribute('width', "30")

        readIcon.setAttribute('src', "icons/read.svg")
        readIcon.setAttribute('alt', "Book Read")
        readIcon.setAttribute('width', "30")

        card.appendChild(titleElem)
        card.appendChild(authorElem)
        card.appendChild(pagesElem)
        card.appendChild(innerDiv)
        innerDiv.appendChild(deleteIcon)
        innerDiv.appendChild(readIcon)
        container.appendChild(card)

        if (bookLibrary.haveRead) {
            readIcon.setAttribute('src', "icons/read-green.svg")
        }
        deleteIcon.addEventListener('click', () => {
            deleteBook(index)
        })

        readIcon.addEventListener('click', () => {
            if (bookLibrary.haveRead) {
                readIcon.setAttribute('src', "icons/read.svg")
                bookLibrary.haveRead = !bookLibrary.haveRead
            } else {
                readIcon.setAttribute('src', "icons/read-green.svg")
                bookLibrary.haveRead = !bookLibrary.haveRead
            }
        })
    })

}

function addBookToLibrary() {
    const titleValue = title.value.trim()
    const authorValue = author.value.trim()
    const pagesValue = pages.value.trim()
    let checkBox = check.checked
    const book = new Book(titleValue, authorValue, pagesValue, checkBox)
    myLibrary.push(book)

    showBooks()
}

function deleteBook(index) {
    myLibrary.splice(index, 1)
    showBooks()
}

function toogleRead(library) {
    library.haveRead = "no"
    console.log(library.haveRead);
}