document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let dropdown = document.getElementById('menu');
    document.querySelector('input[type="submit"]').addEventListener('click', addOption);

    function addOption(e) {
        e.preventDefault();
        let text = document.getElementById('newItemText');
        let value = document.getElementById('newItemValue');

        let option = document.createElement('option');
        option.textContent = text.value;
        option.value = value.value;

        dropdown.appendChild(option);

        text.value = '';
        value.value = '';
    }
}