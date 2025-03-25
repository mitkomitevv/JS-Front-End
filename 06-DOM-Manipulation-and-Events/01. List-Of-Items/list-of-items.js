function addItem() {
    let input = document.getElementById('newItemText');
    let text = input.value;
    let result = document.createElement('li');
    result.textContent = text;

    document.getElementById('items').appendChild(result);
    input.value = '';
}
