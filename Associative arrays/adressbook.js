function solve(input) {

    let catalog = {};

    for (let line of input) {
        //parse input
        let [name, address] = line.split(`:`);
        //store data
        catalog[name] = address;

    }
    //sort catalog
    //--confirted to array
    let sorted = Object.entries(catalog);
    //--sort array using compare function
    sorted.sort((a, b) => {
        let nameA = a[0];
        let nameB = b[0];
        return nameA.localeCompare(nameB)
    });

    //print result
    for(let [name,address] of sorted){
        console.log(`${name} -> ${address}`);
    }
}
solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)