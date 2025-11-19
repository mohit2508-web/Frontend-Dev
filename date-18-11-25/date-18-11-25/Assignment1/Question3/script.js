class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title
        this.author = author
        this.isbn = isbn
        this.isIssued = isIssued
    }
    issueBook() {
        this.isIssued = true
    }
    returnBook() {
        this.isIssued = false
    }
}

const books = [
    new Book("A", "X", "101"),
    new Book("B", "Y", "102"),
    new Book("C", "Z", "103", true),
]

const list = document.getElementById("list")
list.innerHTML = books.filter(b => !b.isIssued)
    .map(b => `<p>${b.title} - ${b.isbn}</p>`).join("")

document.getElementById("issueBtn").onclick = () => {
    const v = document.getElementById("isbn").value
    const book = books.find(b => b.isbn === v)
    if (!book) msg.textContent = "Not found"
    else if (book.isIssued) msg.textContent = "Already issued"
    else {
        book.issueBook()
        msg.textContent = "Issued"
    }
}
