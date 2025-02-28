function solve(text) {
    let regex = /#([a-zA-Z]+)\b/g;
    let matches = [];
    let match;

    while ((match = regex.exec(text))) {
        matches.push(match[1]);
    }

    console.log(matches.join('\n'));
}
