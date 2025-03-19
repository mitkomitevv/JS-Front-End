function solve() {
    let words = document.getElementById("text").value.split(' ');
    let convention = document.getElementById("naming-convention").value;
    let result = [];

    function capitalize(val) {
        return val[0].toUpperCase() + val.slice(1);
    }

    if (convention === 'Camel Case') {
        result.push(words[0].toLowerCase());
        for (let i = 1; i < words.length; i++) {
            result.push(capitalize(words[i].toLowerCase()));
        }
    } else if (convention === 'Pascal Case') {
        for (let i = 0; i < words.length; i++) {
            result.push(capitalize(words[i].toLowerCase()));
        }
    } else {
        result.push('Error!');
    }

    document.getElementById("result").textContent = result.join('');

    // Same solution, but a bit shorter and more concise

    // const capitalize = word => word[0].toUpperCase() + word.slice(1).toLowerCase();

    // let result;
    // if (convention === 'Camel Case') {
    //     result = words.map((word, i) => i === 0 ? word.toLowerCase() : capitalize(word));
    // } else if (convention === 'Pascal Case') {
    //     result = words.map(word => capitalize(word));
    // } else {
    //     result = ['Error!'];
    // }

    document.getElementById("result").textContent = result.join('');
}