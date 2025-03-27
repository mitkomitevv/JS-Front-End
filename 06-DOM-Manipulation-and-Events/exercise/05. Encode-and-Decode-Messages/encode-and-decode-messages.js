document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let toEncode = document.getElementById('encode');
    let toDecode = document.getElementById('decode');
    
    toEncode.querySelector('button').addEventListener('click', encode);
    toDecode.querySelector('button').addEventListener('click', decode);

    let messageToEncode = toEncode.querySelector('textarea');
    let messageToDecode = toDecode.querySelector('textarea');

    function encode(e) {
        e.preventDefault();
        let result = '';

        for (let s of messageToEncode.value) {
            let asciiSymbol = s.charCodeAt(0);
            let newSymbol = String.fromCharCode(asciiSymbol + 1);
            result += newSymbol;
        }

        messageToEncode.value = '';
        messageToDecode.value = result;
    }

    function decode(e) {
        e.preventDefault();
        messageToEncode.value = '';
        let result = '';

        for (let s of messageToDecode.value) {
            let asciiSymbol = s.charCodeAt(0);
            let newSymbol = String.fromCharCode(asciiSymbol - 1);
            result += newSymbol;
        }

        messageToDecode.value = result;
    }
}