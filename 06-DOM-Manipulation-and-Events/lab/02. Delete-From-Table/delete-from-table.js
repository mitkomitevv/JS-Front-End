function deleteByEmail() {
    let input = document.querySelector('[name="email"]');
    let inputValue = input.value;

    let table = document.querySelectorAll('tr td:nth-child(2)');
    for (let row of table) {
        if (inputValue === row.textContent) {
            row.parentElement.remove();
            document.getElementById('result').textContent = 'Deleted.'
            input.value = '';
            return
        }
    }

    document.getElementById('result').textContent = 'Not found.';
    input.value = '';
}
