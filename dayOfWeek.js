function solve(num) {
    let days = [
        'Monday',
        'Thusday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    if (num >= 1 && num <= 7) {
        console.log(days[num - 1]);
    } else {
        console.log('Invalid day!');
    }
}
solve(7);