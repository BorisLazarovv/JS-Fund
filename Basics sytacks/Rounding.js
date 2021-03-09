function solve(n, precision) {
    if (precision > 15) {
        precision = 15;
    }
    n = n.toFixed(precision);
    console.log(parseFloat(n));

    //n= parseFloat(n.toFixed(precision));
    //console.log(n);
}
solve(3.14159265358979932384626433832795, 2);