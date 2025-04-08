function attachEvents() {
    let url = 'http://localhost:3030/jsonstore/appointments/';
    let appointmentsList = document.getElementById('appointments-list');

    document.getElementById('load-appointments').addEventListener('click', () => onLoadAppointments(url, appointmentsList));
    document.getElementById('add-appointment').addEventListener('click', () => onAddAppointment(url, appointmentsList));
}

async function onLoadAppointments(url, list) {
    let res = await fetch(url);
    let data = await res.json();

    list.replaceChildren();
    
    for (let appointment of Object.values(data)) {
        let li = document.createElement('li');
        li.classList.add('appointment');

        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let h3_2 = document.createElement('h3');

        let div = document.createElement('div');
        div.classList.add('buttons-appointment');

        let changeBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');
        changeBtn.classList.add('change-btn');
        changeBtn.textContent = 'Change';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';

        changeBtn.addEventListener('click', (event) => onChange(event, url, list));
        deleteBtn.dataset.id = appointment._id;
        deleteBtn.addEventListener('click', (event) => onDelete(event, url, list));

        h2.textContent = appointment.model;
        h3.textContent = appointment.date;
        h3_2.textContent = appointment.service;

        div.appendChild(changeBtn);
        div.appendChild(deleteBtn);

        li.dataset.id = appointment._id;
        li.appendChild(h2);
        li.appendChild(h3);
        li.appendChild(h3_2);
        li.appendChild(div);

        list.appendChild(li);
    }
}

async function onAddAppointment(url, list) {
    let model = document.getElementById('car-model');
    let service = document.getElementById('car-service');
    let date = document.getElementById('date');

    let car = {
        model: model.value,
        service: service.value,
        date: date.value,
    }

    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car)
    }

    model.value = '';
    service.value = '';
    date.value = '';

    await fetch(url, options);
    await onLoadAppointments(url, list);
}

function onChange(e, url, list) {
    let li = e.target.parentElement.parentElement;
    let appointmentId = li.dataset.id;

    let h2 = li.querySelector('h2').textContent;
    let h3 = li.querySelector('h3:nth-child(2)').textContent;
    let h3_2 = li.querySelector('h3:nth-child(3)').textContent;

    let model = document.getElementById('car-model');
    let service = document.getElementById('car-service');
    let date = document.getElementById('date');

    model.value = h2;
    date.value = h3;
    service.value = h3_2;

    document.getElementById('add-appointment').disabled = true;
    let editBtn = document.getElementById('edit-appointment');
    editBtn.dataset.id = appointmentId;
    editBtn.disabled = false;
    editBtn.addEventListener('click', (e) => onEdit(e, url, list));
}

async function onEdit(e, url, list) {
    e.preventDefault();
    let appointmentId = e.target.dataset.id;
    let urlPut = `http://localhost:3030/jsonstore/appointments/${appointmentId}`

    console.log(urlPut)

    let model = document.getElementById('car-model').value;
    let service = document.getElementById('car-service').value;
    let date = document.getElementById('date').value;

    let options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: appointmentId, model, service, date })
    }

    document.getElementById('car-model').value = '';
    document.getElementById('car-service').value = '';
    document.getElementById('date').value = '';

    await fetch(urlPut, options);
    await onLoadAppointments(url, list);
}

async function onDelete(e, url, list) {
    e.preventDefault();
    let appointmentId = e.target.dataset.id

    await fetch(url + appointmentId, { method: 'DELETE' })
    await onLoadAppointments(url, list);
}

attachEvents();