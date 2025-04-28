window.addEventListener("load", solve);

function solve() {
    const form = document.getElementById('contact_form');
    const addBtn = document.getElementById('add_btn');
    const pendingContacts = document.getElementById('pending_contact_list');
    const contactList = document.getElementById('contact_list');

    const firstName = document.getElementById('first_name');
    const lastName = document.getElementById('last_name');
    const phone = document.getElementById('phone');

    addBtn.addEventListener('click', onAdd);

    function onAdd(e) {
        e.preventDefault();

        let contactFirstName = firstName.value;
        let contactLastName = lastName.value;
        let contactPhone = phone.value;

        if (!contactFirstName || !contactLastName || !contactPhone) {
            return;
        }

        let editBtn = create('button', ['Edit'], 'edit_btn');
        let verifyBtn = create('button', ['Verify'], 'verify_btn');

        editBtn.addEventListener('click', (e) => onEdit(e, contactFirstName, contactLastName, contactPhone));
        verifyBtn.addEventListener('click', onVerify);

        pendingContacts.appendChild(
            create('li', [
                create('span', [`${contactFirstName} ${contactLastName}`], 'names'),
                create('span', [contactPhone], 'phone_number'),
                editBtn,
                verifyBtn
            ], 'contact')
        )

        form.reset();

        function onEdit(e, fName, lName, p) {
            firstName.value = fName;
            lastName.value = lName;
            phone.value = p;

            e.target.closest('li').remove();
        }

        function onVerify(e) {
            let delBtn = create('button', ['Delete'], 'delete_btn');
            delBtn.addEventListener('click', onDelete);

            let li = e.target.closest('li');
            li.querySelectorAll('button').forEach(btn => btn.remove());

            li.className = 'verified_contact';

            li.appendChild(delBtn);
            contactList.appendChild(li);
        }

        function onDelete(e) {
            e.target.parentElement.remove();
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
