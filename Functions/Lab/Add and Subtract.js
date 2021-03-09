function sumAndSubtract(x, y, z) {
    // решение на един ред ....
    //return x + y - z;
    //let sum = (a, b) => a + b;
    // трия function
    function sum(a, b) {
        return a + b;
    }
    return sum(x, y) - z;
}
console.log(sumAndSubtract(23, 6, 10));