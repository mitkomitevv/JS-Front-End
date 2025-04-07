window.addEventListener("load", solve);

function solve() {
    let addBtn = document.querySelector('#add-btn');
    addBtn.addEventListener('click', onAdd);
    document.querySelector('.clear').addEventListener('click', onClear);

    let checklist = document.getElementById('check-list');
    let whishlist = document.getElementById('laptops-list');

    let model = document.getElementById('laptop-model');
    let storage = document.getElementById('storage');
    let price = document.getElementById('price');

    function onAdd(e) {
        e.preventDefault();

        if (!model.value || !storage.value || !price.value) {
            return;
        }

        let li = document.createElement('li');
        li.className = 'laptop-item';

        let article = document.createElement('article');
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')

        p1.textContent = model.value;
        p2.textContent = `Memory: ${storage.value} TB`;
        p3.textContent = `Price: ${price.value}$`;

        let editBtn = document.createElement('button');
        let okBtn = document.createElement('button');
        editBtn.className = 'btn edit';
        editBtn.textContent = 'edit';
        okBtn.className = 'btn ok';
        okBtn.textContent = 'ok';

        editBtn.addEventListener('click', onEdit);
        okBtn.addEventListener('click', onOk);

        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(okBtn);

        checklist.appendChild(li);

        addBtn.disabled = true;

        e.target.parentElement.reset();
    }

    function onEdit(e) {
        let li = e.target.parentElement;
        let article = li.querySelector('article');

        let p1 = article.querySelector('p:nth-child(1)');
        let p2 = article.querySelector('p:nth-child(2)');
        let p3 = article.querySelector('p:nth-child(3)');

        model.value = p1.textContent;
        storage.value = p2.textContent.split(' ')[1];
        let [_, price$] = p3.textContent.split(' ')
        price.value = price$.slice(0, String(price$.length) - 1);

        li.remove();

        addBtn.disabled = false;
    }

    function onOk(e) {
        let li = e.target.parentElement;
        
        e.target.remove();
        li.querySelector('.edit').remove();
        
        whishlist.appendChild(li);
        
        addBtn.disabled = false;
    }

    function onClear() {
        whishlist.replaceChildren();
    }
}
