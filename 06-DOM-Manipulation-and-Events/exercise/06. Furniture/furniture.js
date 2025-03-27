document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let tableBody = document.querySelector('tbody');
    let furnitures = document.querySelector('#input textarea');
    document.querySelector('#input input').addEventListener('click', generate);
    
    function createCell(text) {
        let td = document.createElement('td');
        let p = document.createElement('p');
        p.textContent = text;
        td.appendChild(p);
        return td;
    }

    function generate(e) {
        e.preventDefault();

        for (let item of JSON.parse(furnitures.value)) {
            let tr = document.createElement('tr');

            let imgData = document.createElement('td');
            let img = document.createElement('img');
            img.src = item.img;
            imgData.appendChild(img);
            tr.appendChild(imgData);

            tr.appendChild(createCell(item.name));
            tr.appendChild(createCell(item.price));
            tr.appendChild(createCell(item.decFactor));

            let checkCell = document.createElement('td');
            let checkbox = document.createElement('input')
            checkbox.type = 'checkbox';
            checkCell.appendChild(checkbox);
            tr.appendChild(checkCell); 

            tableBody.appendChild(tr);
        }
    }

    document.querySelector('input[value="Buy"]').addEventListener('click', buyItems);

    function buyItems(e) {
        e.preventDefault();

        let checkedItems = document.querySelectorAll('input[type="checkbox"]:checked');
        
        if (checkedItems.length === 0) {
            return;
        }

        let itemNames = [];
        let totalPrice = 0;
        let avgDecFactor = 0;

        for (let item of checkedItems) {
            let row = item.parentElement.parentElement;
            
            itemNames.push(row.querySelector('td:nth-child(2)').textContent);
            totalPrice += Number(row.querySelector('td:nth-child(3)').textContent);
            avgDecFactor += Number(row.querySelector('td:nth-child(4)').textContent);
        }

        let result = `Bought furniture: ${itemNames.join(', ')}\n`;
        result += `Total price: ${totalPrice}\n`;
        result += `Average decoration factor: ${avgDecFactor / checkedItems.length}`;

        document.querySelector('textarea[rows="4"]').value = result;
    }
}