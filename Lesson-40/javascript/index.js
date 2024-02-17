class Product{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }

  displayProduct(){
    console.log(`Product: ${this.name}`);
    console.log(`Price: R$${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax){
    return this.price + (this.price * salesTax);
  }
}
const salesTax = 0.05

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);

product3.displayProduct();

const total = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): R$${total.toFixed(2)}`);