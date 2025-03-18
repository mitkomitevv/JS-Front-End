function extractText() {
    let listItems = document.querySelectorAll('ul li');
    let textArray = Array.from(listItems).map(item => item.textContent);
    document.getElementById("result").textContent = textArray.join('\n');
}