function turnUppercase(string) {
    let newString = '';
    const delimeters = [",", ".", "!", "?", ";", ":", "(", ")", "-", "\"", "'", "“", "”", "’", "‘"];

    for (let char of string) {
        if (!delimeters.includes(char)) {
            newString += char.toUpperCase();
        } else {
            newString += ' ';
        }
    }
    console.log(newString.split(' ').filter(item => item.trim() !== '').join(', '))
}
