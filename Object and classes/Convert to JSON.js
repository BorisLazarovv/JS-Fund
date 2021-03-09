function jsonString(name, lastName, hairColor) {

    let person = {
        name,
        lastName,
        hairColor
    };
    let asString = JSON.stringify(person);
    console.log(asString);

}
jsonString('George',
    'Jones',
    'Brown'
);