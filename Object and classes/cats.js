function solve(catsAsStrings) {

    //declare class
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let catAsString of catsAsStrings) {
        //parse input
        let [catName, catAge] = catAsString.split(' ');
        //instantiate cats from input
        let cat = new Cat(catName, catAge)
        //cat say meow
        cat.meow();

        //решение на няколко реда само
        /*
        for (let catAsString of catsAsStrings) {
            let [name, age] = catAsString.split(' ');
            console.log(`${name}, age ${age} says Meow`);
        }
        */
    }
}

solve(['Mellow 2', 'Tom 5']);
