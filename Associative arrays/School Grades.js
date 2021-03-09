function solve(input) {

    //declare collection to store result
    let students = new Map();
    //repeat for each request
    for (let line of input) {
        // - parse input
        let tokens = line.split(' ');
        // -- extracy name  
        let name = tokens.shift();
        // -- parse grades to number  
        let grades = tokens.map(Number);
        // - store data
        if (students.has(name)) {
            let existing = students.get(name);
            for (let grade of grades) {
                existing.push(grade);
            }
        } else {
            students.set(name, grades);
        }
    }
    // sort data
    // - conver to array
    let sorted = [... students];
    // - apply compare function .calculating average grade
    sorted.sort(compareAvrage);
    // print result
    for(let [name,grades] of sorted){
        console.log(`${name}: ${grades.join(', ')}`);
    }
    function compareAvrage([nameA , gradesA] , [nameB,gradesB]) {
        //calculate avarage for  student A
        let avgA = 0;
        gradesA.forEach(x => avgA += x);
        avgA /= gradesA.length;

        let avgB = 0;
        gradesB.forEach(x => avgB += x );
        avgB /= gradesB.length;

        return avgA - avgB;
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)