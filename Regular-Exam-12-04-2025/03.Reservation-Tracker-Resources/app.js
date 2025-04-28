const url = `http://localhost:3030/jsonstore/reservations/`;

const form = document.querySelector('form');
const list = document.getElementById('list');
const loadBtn = document.getElementById('load-history');
const addBtn = document.getElementById('add-reservation');
const editBtn = document.getElementById('edit-reservation');

const names = document.getElementById('names');
const days = document.getElementById('days');
const date = document.getElementById('date');

function attachEvents() {
    loadBtn.addEventListener('click', onLoad);
    addBtn.addEventListener('click', onAdd);
    editBtn.addEventListener('click', onEdit);
}

async function onLoad() {
    let res = await fetch(url);
    let data = await res.json();

    list.replaceChildren();

    Object.values(data).forEach(reservation => {
        let changeBtn = create('button', ['Change'], 'change-btn');
        let doneBtn = create('button', ['Done'], 'delete-btn');

        changeBtn.addEventListener('click', () => onChange(reservation._id, reservation.names, reservation.days, reservation.date));
        doneBtn.addEventListener('click', () => onDone(reservation._id));

        list.appendChild(
            create('div', [
                create('h2', [reservation.names]),
                create('h3', [reservation.date]),
                create('h3', [reservation.days]),
                create('div', [
                    changeBtn,
                    doneBtn
                ], 'buttons-container')
            ], 'container')
        )
    })
}

async function onAdd(e) {
    e.preventDefault();

    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            names: names.value,
            date: date.value,
            days: days.value
        })
    }
    
    form.reset();

    await fetch(url, options);
    onLoad();
}

function onChange(id, n, d, d2) {
    names.value = n;
    days.value = d;
    date.value = d2;

    editBtn.dataset.id = id;
    editBtn.disabled = false;
    addBtn.disabled = true;
}

async function onEdit(e) {
    e.preventDefault();

    let options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            _id: e.target.dataset.id,
            names: names.value,
            date: date.value,
            days: days.value
        })
    }

    editBtn.disabled = true;
    addBtn.disabled = false;

    form.reset();

    await fetch(url + e.target.dataset.id, options);
    onLoad();
}

async function onDone(id) {
    await fetch(url + id, { method: 'DELETE' });
    onLoad();
}

function create(tag, children, className) {
    let el = document.createElement(tag);
    if (className) {
        el.className = className;
    }
    children.forEach(child => {
        if (typeof child === 'object') {
            el.appendChild(child);
        } else {
            el.appendChild(document.createTextNode(child));
        }
    });

    return el;
}

attachEvents();