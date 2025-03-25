function addItem() {
    let input = document.getElementById('newItemText');
    let text = input.value;
    let result = document.createElement('li');
    result.textContent = text;

    document.getElementById('items').appendChild(result);
    input.value = '';

    let delButton = document.createElement('a');
    delButton.href = '#';
    delButton.textContent = '[Delete]';

    result.appendChild(delButton);
    delButton.addEventListener('click', deleteLi);

    function deleteLi(event) {
        event.target.parentElement.remove()
    }
}
