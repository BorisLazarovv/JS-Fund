function solve(input) {

    let storage = new Map();

    for (let line of input) {
        //parse input
        let [product, qty] = line.split(' ');
        qty = Number(qty);
        //check for existing values
        if (storage.has(product)) {
            qty += storage.get(product);
        }
        storage.set(product, qty)
    }
    //print result
    for (let [product, qty] of storage) {
        console.log(`${product} -> ${qty}`);
    }
}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)