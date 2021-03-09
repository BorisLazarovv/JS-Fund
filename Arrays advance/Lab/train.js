function train(arr) {
    //създаваме  масив,койта да пази състоянието на вагоните 
    let wagons = arr.shift().split(` `).map(Number);
    //запазваме капацитета  в променлива 
    let capacity = Number(arr.shift());
    //минаваме през всяка следваща команда и
    for (let i = 0; i < arr.length; i++) {
        let isAdd = arr[i].split(' ').includes('Add');
        if (isAdd) {
            let newWagon = arr[i].split(' ')[1];
            wagons.push(Number(newWagon));
        } else {
            let n = Number(arr[i]);
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + n <= capacity) {
                    wagons[j] += n;
                    break;
                }
            }
        }
    }
    return wagons.join(' ')
}
console.log(train(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75']));
