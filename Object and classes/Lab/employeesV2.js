function solve(arr) {
    // едното решение е с клас а другото с обект.
    //let employees = [];

    class Person {
        constructor(name) {
            this.name = name,
                this.number = name.length
        }
        print() {
            return `Name: ${this.name} -- Personal Number: ${this.number}`
        }
    }
    arr = arr.map(x => {
        return new Person(x);
    })
        .forEach(obj => {
            console.log(obj.print());

        });
    /*   
       arr.forEach(element => {
           let person ={
               name : element,
               number : element.length
           }
           employees.push(person)
       });
       employees.forEach( obj => {
           console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`);
       });
       */
}
solve(['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])