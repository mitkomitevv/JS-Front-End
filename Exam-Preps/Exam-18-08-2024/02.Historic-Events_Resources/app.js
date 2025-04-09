window.addEventListener("load", solve);

function solve() {
    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', onAdd);

    let previewList = document.getElementById('preview-list');
    let archiveList = document.getElementById('archive-list');

    let name = document.getElementById('name');
    let time = document.getElementById('time');
    let description = document.getElementById('description');

    function onAdd(e) {
        e.preventDefault();

        let currentName = name.value;
        let currentTime = time.value;
        let currentDescription = description.value;

        let editBtn = create('button', ['Edit'], 'edit-btn');
        let nextBtn = create('button', ['Next'], 'next-btn');

        editBtn.addEventListener('click', (e) => onEdit(e, currentName, currentTime, currentDescription));
        nextBtn.addEventListener('click', onNext);

        let li = create(
            'li', [
            create('article', [
                create('p', [currentName]),
                create('p', [currentTime]),
                create('p', [currentDescription])
            ]),
            create('div', [
                editBtn,
                nextBtn
            ], 'buttons')
        ]
        )

        previewList.appendChild(li);

        addBtn.disabled = true;
        e.target.parentElement.reset();
    }

    function onEdit(e, eventName, eventTime, eventDescription) {
        name.value = eventName;
        time.value = eventTime;
        description.value = eventDescription;

        e.target.closest('li').remove();
        addBtn.disabled = false;
    }

    function onNext(e) {
        let li = e.target.closest('li');
        li.querySelector('.buttons').remove();

        let archiveBtn = create('button', ['Archive'], 'archive-btn');
        archiveBtn.addEventListener('click', onArchive);

        li.appendChild(archiveBtn);
        archiveList.appendChild(li);
    }

    function onArchive() {
        archiveList.replaceChildren();
        addBtn.disabled = false;
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