function pow(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result = result * base;
    }
    console.log(result);
}
pow( 2,8)
pow (3,4)
pow(4,3)