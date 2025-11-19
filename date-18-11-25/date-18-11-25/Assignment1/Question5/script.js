const f = document.getElementById("bookForm")

const set = (i, m, ok, msg) => {
    i.style.border = ok ? "2px solid green" : "2px solid red"
    m.textContent = msg
}

f.addEventListener("submit", e => {
    e.preventDefault()

    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const seats = document.getElementById("seats")

    const n = /^[A-Za-z ]+$/.test(name.value)
    set(name, nameErr, n, n ? "" : "Invalid")

    const em = /^[\w.-]+@[\w.-]+\.\w+$/.test(email.value)
    set(email, emailErr, em, em ? "" : "Invalid")

    const st = /^[1-9]$|10/.test(seats.value)
    set(seats, seatErr, st, st ? "" : "1 to 10 only")

    if (n && em && st) {
        const obj = { name: name.value, email: email.value, seats: seats.value }
        ticket.textContent = `Booking Confirmed: ${JSON.stringify(obj)}`
    }
})
