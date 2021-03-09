function charInRange(a, b) {
    // трансформираме синволите в аски код А .... 65
    // внимаваме кое е първо
    // на един ред принтираме всички символи между двете стойности;

    let firstCode = a.charCodeAt();
    let secondCode = b.charCodeAt();
    let start = firstCode < secondCode ? firstCode : secondCode;  //термален код 
    let end = firstCode > secondCode ? firstCode : secondCode;
    //a също така може и:
    //let start = Math.min(firstCode,secondCode)
    //let end = Math.max(firstCode,secondCode)
    let line = '';
    for (let i = start + 1; i < end; i++) {
        line += String.fromCharCode(i) + ' ';
    }
    return line;
}
console.log(charInRange('a', 'd'));