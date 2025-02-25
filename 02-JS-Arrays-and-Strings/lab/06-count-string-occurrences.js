function solve(sentence, searched) {
    let count = 0;

    for (word of sentence.split(' ')) {
        if (word == searched) {
            count += 1;
        }
    }
    console.log(count)
}
