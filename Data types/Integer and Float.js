function solve(num1, num2, num3) {
    let sum = num1 +num2 + num3;

    let convertedSum = Math.trunc(sum);

    if(sum == convertedSum){
        console.log(`${sum} - Integer`);
    }else{
        console.log(`${sum} - Float`);
    }
}
solve(9 ,100 ,1.1);