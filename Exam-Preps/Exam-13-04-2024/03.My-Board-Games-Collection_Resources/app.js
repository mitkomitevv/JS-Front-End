const url = `http://localhost:3030/jsonstore/games/`;

const form = document.querySelector('form');
const gamesList = document.getElementById('games-list');
const addBtn = document.getElementById('add-game');
const editBtn = document.getElementById('edit-game');

const name = document.getElementById('g-name');
const type = document.getElementById('type');
const players = document.getElementById('players');

function attachEvents() {
    document.getElementById('load-games').addEventListener('click', onLoad);
    addBtn.addEventListener('click', onAdd);
    editBtn.addEventListener('click', onEdit);
}

async function onLoad() {
    let res = await fetch(url);
    let data = await res.json();

    gamesList.replaceChildren();

    Object.values(data).forEach(game => {
        let changeBtn = create('button', ['Chnage'], 'change-btn');
        let deleteBtn = create('button', ['Delete'], 'delete-btn');

        changeBtn.addEventListener('click', () => onChange(game._id, game.name, game.type, game.players));
        deleteBtn.addEventListener('click', () => onDelete(game._id));

        gamesList.appendChild(
            create('div', [
                create('div', [
                    create('p', [game.name]),
                    create('p', [game.players]),
                    create('p', [game.type])
                ], 'content'),
                create('div', [
                    changeBtn,
                    deleteBtn
                ], 'buttons-container')
            ], 'board-game')
        )
    })
}

async function onAdd(e) {
    e.preventDefault();

    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name.value,
            type: type.value,
            players: players.value
        })
    }

    form.reset();

    await fetch(url, options);
    onLoad();
}

async function onEdit(e) {
    e.preventDefault();

    let options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            _id: e.target.dataset.id,
            name: name.value,
            type: type.value,
            players: players.value
        })
    }

    editBtn.disabled = true;
    addBtn.disabled = false;
    form.reset();

    await fetch(url + e.target.dataset.id, options);
    onLoad();
}

function onChange(gameId, gameName, gameType, gamePlayers) {
    name.value = gameName;
    type.value = gameType;
    players.value = gamePlayers;

    editBtn.dataset.id = gameId;
    editBtn.disabled = false;
    addBtn.disabled = true;
}

async function onDelete(gameId) {
    await fetch(url + gameId, { method: 'DELETE' });
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