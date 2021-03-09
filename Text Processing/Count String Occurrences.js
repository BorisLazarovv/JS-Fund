function solve (sring ,search){

    let words =sring.split(' ');
    let counter = 0;

    for(let word of words){
       if(word == search){
           counter++;
       }
    }
    console.log(counter);
}
solve("This is a word and it also is a sentence",
"is"
);