const url = `http://localhost:3030/jsonstore/records/`;

const recordList = document.getElementById('list');
const form = document.querySelector('form');

const loadBtn = document.getElementById('load-records');
const addBtn = document.getElementById('add-record');
const editBtn = document.getElementById('edit-record');

const name = document.getElementById('p-name');
const steps = document.getElementById('steps');
const calories = document.getElementById('calories');

function attachEvents() {
    loadBtn.addEventListener('click', onLoad);
    addBtn.addEventListener('click', onAdd);
    editBtn.addEventListener('click', onEdit);
}

async function onLoad() {
    let res = await fetch(url);
    let data = await res.json();

    recordList.replaceChildren();

    console.log(Object.values(data))

    Object.values(data).forEach(record => {
        let changeBtn = create('button', ['Change'], 'change-btn');
        let deleteBtn = create('button', ['Delete'], 'delete-btn');

        changeBtn.addEventListener('click', () => onChange(record._id, record.name, record.steps, record.calories));
        deleteBtn.addEventListener('click', () => onDone(record._id));

        recordList.appendChild(
            create('li', [
                create('div', [
                    create('p', [record.name]),
                    create('p', [record.steps]),
                    create('p', [record.calories])
                ], 'info'),
                create('div', [
                    changeBtn,
                    deleteBtn
                ], 'btn-wrapper')
            ], 'record')
        )
    })
}

async function onAdd(e) {
    e.preventDefault();

    let options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            name: name.value,
            steps: steps.value,
            calories: calories.value
        })
    }

    form.reset();

    await fetch(url, options);
    onLoad();
}

function onChange(recordId, recordName, recordSteps, recordCalories) {
    name.value = recordName;
    steps.value = recordSteps;
    calories.value = recordCalories;

    editBtn.dataset.id = recordId;
    editBtn.disabled = false;
    addBtn.disabled = true;
}

async function onEdit(e) {
    e.preventDefault();

    let options = {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            _id: e.target.dataset.id,
            name: name.value,
            steps: steps.value,
            calories: calories.value
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