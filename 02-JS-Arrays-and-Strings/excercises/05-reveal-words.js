function solve(template, string) {
    let arr = string.split(' ');

    for (let word of arr) {
        if (word.startsWith('*')) {
            for (let temp of template.split(', ')) {
                if (word.length == temp.length) {
                    arr.splice(arr.indexOf(word), 1, temp)
                }
            }
        }
    }
    console.log(arr.join(' '))
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages'

)