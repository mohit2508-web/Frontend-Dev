class FormBuilder {
    constructor(fields) {
        this.fields = fields
    }
    render(el) {
        el.innerHTML = this.fields.map(f => 
            `<label>${f.label}</label><br><input type="${f.type}" id="${f.label}"><br><br>`
        ).join("")
    }
    getFormData() {
        const data = {}
        this.fields.forEach(f => data[f.label] = document.getElementById(f.label).value)
        return data
    }
}

const fb = new FormBuilder([
    { type: "text", label: "Username" },
    { type: "email", label: "UserEmail" }
])

const area = document.getElementById("formArea")
fb.render(area)

document.getElementById("show").onclick = () => {
    out.textContent = JSON.stringify(fb.getFormData())
}
