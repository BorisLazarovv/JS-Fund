function solve(n) {
    let  sum = 0;
    n = n.toString();
    for (let i = 0; i < n.length; i++){
        sum += Number(n.charAt(i));
    }
    console.log(sum);
}
solve(245678)