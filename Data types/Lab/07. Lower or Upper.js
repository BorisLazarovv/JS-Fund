function solve(char) {

    let toUpper = char.toUpperCase();

    if(toUpper == char){
        console.log(`upper-case`);
    }else{
        console.log(`lower-case`);
    }
}
solve(`L`);
solve(`f`);