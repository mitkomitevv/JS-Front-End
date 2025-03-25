document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let focused = document.querySelectorAll('[type="text"]')
    Array.from(focused).forEach(element => element.addEventListener('focus', addFocusClass))

    function addFocusClass(event) {
        event.target.parentElement.classList.add('focused')
    }

    Array.from(focused).forEach(element => element.addEventListener('blur', blurred))

    function blurred(event) {
        event.target.parentElement.classList.remove('focused');
    }
}