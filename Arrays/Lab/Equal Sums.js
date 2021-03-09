function solve(array) {


    let isIndex = false;
    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rigthSum = 0;
        if (i !== 0) {
            for (let j = 0; j < i; j++) {
                leftSum += array[j]
            }
        }
        if (i !== array.length - 1) {
            for (let r = i + 1; r < array.length; r++) {
                rigthSum += array[r]
            }
        }

        if (leftSum === rigthSum) {
            isIndex = true;
            console.log(i);
        }
    }
    if (!isIndex) {
        console.log('no');
    }
}
solve([1, 2])