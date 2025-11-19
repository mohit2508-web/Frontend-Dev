const f = document.getElementById("regForm")

const setState = (inp, msgBox, ok, msg) => {
    inp.style.border = ok ? "2px solid green" : "2px solid red"
    msgBox.textContent = msg
}

f.addEventListener("submit", e => {
    e.preventDefault()

    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const phone = document.getElementById("phone")
    const pass = document.getElementById("pass")

    const n = /^[A-Za-z ]+$/.test(name.value)
    setState(name, nameErr, n, n ? "" : "Only letters allowed")

    const em = /^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email.value)
    setState(email, emailErr, em, em ? "" : "Invalid email")

    const ph = /^\d{10}$/.test(phone.value)
    setState(phone, phoneErr, ph, ph ? "" : "10 digits only")

    const pw = /(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+/.test(pass.value)
    setState(pass, passErr, pw, pw ? "" : "Weak password")
})
