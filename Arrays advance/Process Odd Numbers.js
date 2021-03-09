function processOdd(inputArr) {

    let filtered = inputArr.filter((v, i) => (i % 2) == 1);

    let doubled = filtered.map(x => x * 2);

    console.log(doubled.reverse());

    /*console.log(inputArr.filter((v,i)=> (i%2)==1)
    .map(x=>x*2)
    .reverse()
    );
    //решение на един ред с един console.log
    */
}
processOdd([10, 15, 20, 25]);
