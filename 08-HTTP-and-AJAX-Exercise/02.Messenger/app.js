function attachEvents() {
    const requestUrl = 'http://localhost:3030/jsonstore/messenger';

    document.getElementById('submit').addEventListener('click', () => onSend(requestUrl));
    document.getElementById('refresh').addEventListener('click', () => onRefresh(requestUrl));
}

async function onSend(url) {
    let author = document.querySelector('input[name="author"]');
    let content = document.querySelector('input[name="content"]');

    if (!author.value.trim() || !content.value.trim()) {
        return;
    }

    let message = {
        author: author.value,
        content: content.value
    };

    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
    }

    await fetch(url, options);

    author.value = '';
    content.value = '';
}

async function onRefresh(url) {
    let textArea = document.getElementById('messages');

    let response = await fetch(url);
    let data = await response.json();

    textArea.textContent = '';

    textArea.textContent = Object.values(data)
        .map(message => `${message.author}: ${message.content}`)
        .join('\n');
}

attachEvents();