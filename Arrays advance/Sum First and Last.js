function fistAndLast(inputArr) {
    let first = Number (inputArr[0]);
    let last = Number (inputArr.pop());

    return first + last;

}
console.log(fistAndLast(['5', '10']));
console.log(fistAndLast(['5', '10',' 50','60']));