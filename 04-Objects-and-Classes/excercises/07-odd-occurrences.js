function solve(string) {
    let words = string.split(' ');
    let wordsObj = {};

    for (let word of words) {
        let wordLower = word.toLowerCase();

        if (Object.keys(wordsObj).includes(wordLower)) {
            wordsObj[wordLower] += 1;
        } else {
            wordsObj[wordLower] = 1;
        }
    }

    let result = []
    for (let key of Object.keys(wordsObj)) {
        if (wordsObj[key] % 2 !== 0) {
            result.push(key)
        }
    }

    console.log(result.join(' '))
}