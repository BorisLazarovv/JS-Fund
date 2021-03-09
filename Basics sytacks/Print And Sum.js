function solve(start, end) {
    let line = '';
    let sum = 0;
    for (let i = start; i <= end; i++) {
        line += i + ' ';
        sum += i;
    }
    console.log(line);
    console.log(`Sum: ${sum}`);
}
solve(0, 26);