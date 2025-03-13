function solve(arr) {
    let words = {};
    let wordsToSearch = arr.shift().split(' ');

    wordsToSearch.forEach(word => words[word] = 0);

    for (let word of arr) {
        if (word in words) {
            words[word] += 1;
        }
    }

    for (let [word, count] of Object.entries(words).sort((a, b) => b[1] - a[1])) {
        console.log(`${word} - ${count}`);
    }
}
