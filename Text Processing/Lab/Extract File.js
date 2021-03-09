function solve(str) {
    let i = str.lastIndexOf('.');
    let extention = str.substring(i + 1);
    let name = str.slice(str.lastIndexOf('\\') + 1, i)
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extention}`);
}
solve('C:\\Internal\\training-internal\\Template.pptx')