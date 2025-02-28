function solve(word, text) {
    let arrText = text.split(' ');

    for (let wordInText of arrText) {
        if (word.toLowerCase() == wordInText.toLowerCase()) {
            return word;
        }
    }
    return `${word} not found!`;
}
