const url = `http://localhost:3030/jsonstore/matches/`;

const listMatches = document.getElementById('list');
const addBtn = document.getElementById('add-match');
const editBtn = document.getElementById('edit-match');

const form = document.querySelector('form');

const host = document.getElementById('host');
const score = document.getElementById('score');
const guest = document.getElementById('guest');

function attachEvents() {
    document.getElementById('load-matches').addEventListener('click', onLoad);
    addBtn.addEventListener('click', onAdd);
    editBtn.addEventListener('click', onEdit);
}

async function onLoad() {
    let res = await fetch(url);
    let data = await res.json();

    listMatches.replaceChildren();

    Object.values(data).forEach(match => {
        let changeBtn = create('button', ['Change'], 'change-btn');
        let deleteBtn = create('button', ['Delete'], 'delete-btn');

        changeBtn.addEventListener('click', () => onChange(match._id, match.host, match.score, match.guest));
        deleteBtn.addEventListener('click', () => onDelete(match._id));

        listMatches.appendChild(
            create('li', [
                create('div', [
                    create('p', [match.host]),
                    create('p', [match.score]),
                    create('p', [match.guest])
                ], 'info'),
                create('div', [
                    changeBtn,
                    deleteBtn
                ], 'btn-wrapper')
            ], 'match')
        )
    })
}

async function onAdd(e) {
    e.preventDefault();

    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            host: host.value,
            score: score.value,
            guest: guest.value
        })
    }

    form.reset();

    await fetch(url, options);
    onLoad();
}

function onChange(matchId, matchHost, matchScore, matchGuest) {
    host.value = matchHost;
    score.value = matchScore;
    guest.value = matchGuest;

    editBtn.dataset.id = matchId;
    editBtn.disabled = false;
    addBtn.disabled = true;
}

async function onEdit(e) {
    e.preventDefault();

    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            _id: e.target.dataset.id,
            host: host.value,
            score: score.value,
            guest: guest.value
        })
    }

    editBtn.disabled = true;
    addBtn.disabled = false;

    form.reset();

    await fetch(url + e.target.dataset.id, options);
    onLoad();
}

async function onDelete(id) {
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