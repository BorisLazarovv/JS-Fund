function solve(arr) {
    lastIndex = arr.length - 1
    for (let i = 0; i < arr.length / 2; i++) {

        let temp = arr[i];
        arr[i] = arr[lastIndex - i];
        arr[lastIndex - i] = temp;
    }
    console.log(arr.join(' '));
/*
    for (let i = 0; i < arr.length / 2; i++) {
        let firstElement = arr[i];
        let lastElement = arr.length - 1 - i;
        arr[i] = arr[lastElement];
        arr[lastElement] = firstElement
    }
    */
}
solve(['a', 'b', 'c', 'd', 'e']);
solve(['abc', 'def', 'gel', 'beer', 'oil']);
solve(['h', 'e', 'l', 'l', 'o']);


