function solve(x, operator, y) {
    let result = 0;
    if (operator == '+') {
        result = x + y;
    } else if (operator == '-') {
        result = x - y;
    } else if (operator == '*') {
        result = x * y;
    } else if (operator == '/') {
        result = x / y;
    }
    console.log(result.toFixed(2));
}
solve(5, '+', 10);