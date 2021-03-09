function firstAndLast(inputArr) {
    let k = inputArr.shift();
    let firstK = inputArr.slice(0, k);

    console.log(firstK.join(' '));

    let lastK = inputArr.slice(inputArr.length - k);
    console.log(lastK.join(' '));
}
firstAndLast([2, 7, 8, 9]);
firstAndLast([3, 6, 7, 8, 9])