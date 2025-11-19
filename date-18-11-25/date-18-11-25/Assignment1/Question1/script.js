class Product {
    constructor(id, name, price, category) {
        this.id = id
        this.name = name
        this.price = price
        this.category = category
    }

    applyDiscount(rate) {
        this.price = this.price - (this.price * rate / 100)
    }

    details() {
        return `${this.name} | ${this.category} | ₹${this.price}`
    }
}

const products = [
    new Product(1, "Laptop", 40000, "Electronics"),
    new Product(2, "Shoes", 900, "Fashion"),
    new Product(3, "Phone", 15000, "Electronics"),
    new Product(4, "Bag", 1200, "Accessories"),
]

const above1000 = products.filter(p => p.price > 1000)
console.log(above1000.map(p => p.details()))
