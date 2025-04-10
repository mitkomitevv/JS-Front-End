function solve(arr) {
    let spell = arr.shift();

    while (arr[0] !== 'End') {
        let tokens = arr.shift().split('!');
        let cmd = tokens[0];

        if (cmd === 'RemoveEven') {
            spell = spell.split('').filter((_, i) => i % 2 === 0).join('');
            console.log(spell);
        } else if (cmd === 'TakePart') {
            let fromIdx = Number(tokens[1]);
            let toIdx = Number(tokens[2]);

            spell = spell.slice(fromIdx, toIdx);
            console.log(spell);
        } else if (cmd === 'Reverse') {
            let substring = tokens[1];

            if (spell.includes(substring)) {
                let revStr = substring.split('').reverse().join('');
                spell = spell.replace(substring, '');
                spell += revStr;
                console.log(spell);
            } else {
                console.log('Error');
            }
        }
    }

    console.log(`The concealed spell is: ${spell}`);
}
