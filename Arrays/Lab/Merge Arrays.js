function merge(firstArr, secondArr) {
    let result = [];
    for (let i = 0; i < firstArr.length; i++) {

        if (i % 2 == 0) {
            let sum = Number(firstArr[i]) + Number(secondArr[i]);
            result.push(sum);
        } else {
            result.push(firstArr[i] + secondArr[i])
        }
    }
    console.log(result.join(' - '));
}
merge(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);