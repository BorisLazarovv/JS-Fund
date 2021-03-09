function distinct(arr) {

    for (let i = 0; i < arr.length; i++) {
        let index = arr.indexOf(arr[i], i + 1);

        while (index !== -1) {
            arr.splice(index, 1);
            index = arr.indexOf(arr[i], i + 1);
        }
    }
    return arr.join(' ')
}
console.log(distinct([1, 2, 3, 4, 1]));