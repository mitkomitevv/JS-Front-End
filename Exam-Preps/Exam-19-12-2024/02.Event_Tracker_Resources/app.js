window.addEventListener("load", solve);

function solve() {
    let saveBtn = document.getElementById('save');
    saveBtn.addEventListener('click', onSave);
    document.querySelector('.delete').addEventListener('click', onDelete);

    let upcomingEvents = document.getElementById('upcoming-list');
    let eventList = document.getElementById('events-list');

    let eventName = document.getElementById('event');
    let note = document.getElementById('note');
    let date = document.getElementById('date');

    function onSave(e) {
        e.preventDefault();

        if (!eventName.value || !note.value || !date.value) {
            return;
        }

        let li = create('li', [
            create('div', [
                create('article', [
                    create('p', [`Name: ${eventName.value}`]),
                    create('p', [`Note: ${note.value}`]),
                    create('p', [`Date: ${date.value}`])
                ]),
                create('div', [], 'buttons')
            ], 'event-container')
        ], 'event-item');

        upcomingEvents.appendChild(li);

        let editBtn = document.createElement('button');
        editBtn.className = 'btn edit';
        editBtn.textContent = 'Edit';
        editBtn.dataset.event = eventName.value;
        editBtn.dataset.note = note.value;
        editBtn.dataset.date = date.value;
        editBtn.addEventListener('click', onEdit);

        let doneBtn = document.createElement('button');
        doneBtn.className = 'btn done';
        doneBtn.textContent = 'Done';
        doneBtn.addEventListener('click', onDone);

        let buttonsContainer = li.querySelector('.buttons');
        buttonsContainer.appendChild(editBtn);
        buttonsContainer.appendChild(doneBtn);

        e.target.parentElement.reset();
    }

    function onEdit(e) {
        eventName.value = e.target.dataset.event;
        note.value = e.target.dataset.note;
        date.value = e.target.dataset.date;

        e.target.closest('li').remove();
    }

    function onDone(e) {
        let li = e.target.closest('li')

        li.querySelector('.buttons').remove();
        eventList.appendChild(li);
    }

    function onDelete() {
        eventList.replaceChildren();
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
}