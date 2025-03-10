function solve(n) {
    let sequence = "ATCGTTAGGG";
    let seqIndex = 0;

    for (let i = 1; i <= n; i++) {
        let first = sequence[seqIndex % sequence.length];
        seqIndex++;
        let second = sequence[seqIndex % sequence.length];
        seqIndex++;

        let line;
        switch (i % 4) {
            case 1:
                line = `**${first}${second}**`;
                break;
            case 2:
                line = `*${first}--${second}*`;
                break;
            case 3:
                line = `${first}----${second}`;
                break;
            case 0:
                line = `*${first}--${second}*`;
                break;
        }

        console.log(line);
    }
}

solve(10)