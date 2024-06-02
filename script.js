class Product {
    constructor(productName, productPrice){
        this.productName = productName ;
        this.productPrice = productPrice;
    }

    

    get ProductInfo(){
        return `${this.productName}, ${this.productPrice}`
    }
}


const shoe = new Product ('Nike','50$')
console.log(shoe)

class Consoles extends Product{
    constructor(productName , productPrice){
        super(productName, productPrice);  
    }
    #SaleTime = 'until 22.04.24';

    set ProductInfo(UpdatedVersion){
        const[SaleProduct, SalePrice] = UpdatedVersion.split(',')
        this.productName = SaleProduct;
        this.productPrice = SalePrice;
        return this.#SaleTime;
    }
}
const Console = new Consoles ('PS5','500$')

Console.ProductInfo = 'PS5, 250$';

console.log(Console)