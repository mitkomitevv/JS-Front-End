window.addEventListener("load", solve);

function solve() {
    document.getElementById('add-btn').addEventListener('click', onAdd);

    const form = document.querySelector('form');
    const checkList = document.getElementById('check-list');
    const contactList = document.getElementById('contact-list');

    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const category = document.getElementById('category');

    function onAdd(e) {
        e.preventDefault();

        let personName = name.value;
        let personPhone = phone.value;
        let personCategory = category.value;

        if (!personName || !personPhone || !personCategory) {
            return;
        }

        let editBtn = create('button', [], 'edit-btn');
        let saveBtn = create('button', [], 'save-btn');

        editBtn.addEventListener('click', onEdit);
        saveBtn.addEventListener('click', onSave);

        checkList.appendChild(
            create('li', [
                create('article', [
                    create('p', [`name:${personName}`]),
                    create('p', [`phone:${personPhone}`]),
                    create('p', [`category:${personCategory}`]),
                ]),
                create('div', [
                    editBtn,
                    saveBtn
                ], 'buttons')
            ])
        )
        form.reset();

        function onEdit(e) {
            name.value = personName;
            phone.value = personPhone;
            category.value = personCategory;

            e.target.closest('li').remove();
        }

        function onSave(e) {
            let delBtn = create('button', [], 'del-btn');
            delBtn.addEventListener('click', (e) => {
                e.target.parentElement.remove();
            })

            let li = e.target.closest('li');
            li.querySelector('.buttons').remove();
            li.appendChild(delBtn);

            contactList.appendChild(li);
        }
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
