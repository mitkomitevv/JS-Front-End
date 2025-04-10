window.addEventListener("load", solve);

function solve() {
    let saveBtn = document.getElementById('save');
    saveBtn.addEventListener('click', onSave);
    document.querySelector('.delete').addEventListener('click', () => {
        eventList.replaceChildren();
    });

    let upcomingEvents = document.getElementById('upcoming-list');
    let eventList = document.getElementById('events-list');

    let name = document.getElementById('event');
    let note = document.getElementById('note');
    let date = document.getElementById('date');

    function onSave(e) {
        e.preventDefault();

        let currName = name.value;
        let currNote = note.value;
        let currDate = date.value;
        
        if (!currName || !currNote || !currDate) {
            return;
        }

        let editBtn = create('button', ['Edit'], 'btn edit');
        let doneBtn = create('button', ['Done'], 'btn done');

        editBtn.addEventListener('click', (e) => onEdit(e, currName, currNote, currDate));
        doneBtn.addEventListener('click', onDone);

        let li = create('li', [
            create('div', [
                create('article', [
                    create('p', [`Name: ${currName}`]),
                    create('p', [`Note: ${currNote}`]),
                    create('p', [`Date: ${currDate}`])
                ]),
                create('div', [
                    editBtn,
                    doneBtn
                ], 'buttons')
            ], 'event-container')
        ], 'event-item');

        upcomingEvents.appendChild(li);

        e.target.parentElement.reset();
    }

    function onEdit(e, eventName, eventNote, eventDate) {
        name.value = eventName;
        note.value = eventNote;
        date.value = eventDate;

        e.target.closest('li').remove();
    }

    function onDone(e) {
        let li = e.target.closest('li')

        li.querySelector('.buttons').remove();
        eventList.appendChild(li);
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