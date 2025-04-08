const url = `http://localhost:3030/jsonstore/orders/`;

const ordersList = document.getElementById('list');
const orderBtn = document.getElementById('order-btn');
const editBtn = document.getElementById('edit-order');

const stockName = document.getElementById('name');
const stockQuantity = document.getElementById('quantity');
const orderDate = document.getElementById('date');

function attachEvents() {
    document.getElementById('load-orders').addEventListener('click', loadOrders);
    orderBtn.addEventListener('click', onOrder);
    editBtn.addEventListener('click', onEdit);
}

async function onLoad() {
    let res = await fetch(url);
    let data = await res.json();
    
    return Object.values(data);
}

async function loadOrders() {
    let orders = await onLoad();
    ordersList.replaceChildren();

    orders.forEach(order => {
        let changeBtn = create('button', ['Change'], 'change-btn');
        let doneBtn = create('button', ['Done'], 'done-btn');

        changeBtn.addEventListener('click', () => onChange(order._id, order.name, order.quantity, order.date));
        doneBtn.addEventListener('click', () => onDone(order._id));

        ordersList.appendChild(
            create('div', [
                create('h2', [order.name]),
                create('h3', [order.date]),
                create('h3', [order.quantity]),
                changeBtn,
                doneBtn
            ], 'container')
        );
    })
}

async function onOrder(e) {
    e.preventDefault();

    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: stockName.value,
            quantity: stockQuantity.value,
            date: orderDate.value
        })
    }

    e.target.parentElement.reset();

    await fetch(url, options);
    loadOrders();
}

function onChange(id, name, quantity, date) {
    stockName.value = name;
    stockQuantity.value = quantity;
    orderDate.value = date;

    editBtn.dataset.id = id;
    editBtn.disabled = false;
    orderBtn.disabled = true;
}

async function onEdit(e) {
    e.preventDefault();

    let options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            _id: e.target.dataset.id,
            name: stockName.value,
            quantity: stockQuantity.value,
            date: orderDate.value
        })
    }

    editBtn.disabled = true;
    orderBtn.disabled = false;

    e.target.parentElement.reset();

    await fetch(url + e.target.dataset.id, options);
    loadOrders();
}

async function onDone(id) {
    await fetch(url + id, { method: 'DELETE' })
    loadOrders();
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