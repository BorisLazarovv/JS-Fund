function solve(word, symbol, template) {
    let result = word.replace('_', symbol);

    let hasMatch = result == template;

    if (hasMatch) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
solve('Str_ng', 'i', 'String')