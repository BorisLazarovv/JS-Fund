function sumOfK(n, k) {
    let result = [1]
    //repeat loop n-times;
    for (let i = 1; i < n; i++) {
        let lastK = result.slice(-k);
        let sum = 0;
        for (let num of lastK) {
            sum += num;
        }
        //-- store values in array
        result.push(sum);
    }
    //--calculate curent element as sum of previus k element 
    console.log(result.join(' '));
}
sumOfK(80, 2)