function solve(firstName, lastName, age) {

    let person = {}               //също така може и така да се запише ,по -съкратен вид
    person.firstName = firstName  //firstName,
    person.lastName = lastName    //lastName,
    person.age = age              //age
    return person
}
let result = solve('Peter', 'Pan', 20)
console.log(result);