function attachEvents() {
    const requestUrl = 'http://localhost:3030/jsonstore/phonebook/';

    document.getElementById('btnLoad').addEventListener('click', () => onLoad(requestUrl));
    document.getElementById('btnCreate').addEventListener('click', () => onCreate(requestUrl));
}

async function onLoad(url) {
    let ul = document.getElementById('phonebook');
    ul.replaceChildren();

    let response = await fetch(url);
    let data = await response.json();

    for (let entry of Object.values(data)) {
        let li = document.createElement('li');
        let delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';

        li.append(`${entry.person}: ${entry.phone}`);
        // li.textContent = person;
        li.appendChild(delBtn);

        ul.appendChild(li);   
        
        delBtn.addEventListener('click', () => onDelete(entry._id, url));
    }
}

async function onDelete(id, url) {
    await fetch(url + id, { method: 'DELETE'});
    onLoad(url);
}

async function onCreate(url) {
    let person = document.getElementById('person');
    let phone = document.getElementById('phone');

    let entry = {
        person: person.value,
        phone: phone.value
    }

    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'aplication/json'},
        body: JSON.stringify(entry)
    }

    await fetch(url, options);
    onLoad(url);
}

attachEvents();