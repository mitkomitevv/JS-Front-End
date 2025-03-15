class Storage {
    storage = [];
    totalCost = 0;

    constructor(capacity) {
        this.capacity = capacity
    }

    addProduct(product) {
        this.capacity -= Number(product.quantity);
        this.totalCost += Number(product.price * product.quantity);
        this.storage.push(product);
    }

    getProducts() {
        return this.storage.map(prod => JSON.stringify(prod)).join('\n');
    }
}
