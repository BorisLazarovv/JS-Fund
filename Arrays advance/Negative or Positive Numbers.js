function process(inputArr) {

    let result = [];

    for (let num of inputArr) {
        if (num < 0) {
            result.unshift(num)
        } else {
            result.push(num)
        }
    }
    for (let num of result) {
        console.log(num);

    }
}
process([7, -2, 8, 9]);
console.log('--------');
process ([64,6,-565,-6,5,-546])