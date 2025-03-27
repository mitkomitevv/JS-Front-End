document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let tableBody = document.querySelector('tbody');
    let furnitures = document.querySelector('#input textarea');
    document.querySelector('#input input').addEventListener('click', generate);
    
    function generate(e) {
        e.preventDefault();

        for (let item of JSON.parse(furnitures.value)) {
            let tr = document.createElement('tr');

            let imgData = document.createElement('td');
            let img = document.createElement('img');
            img.src = item.img;
            imgData.appendChild(img);
            tr.appendChild(imgData);

            let nameData = document.createElement('td');
            let name = document.createElement('p');
            name.textContent = item.name;
            nameData.appendChild(name)
            tr.appendChild(nameData)

            let priceData = document.createElement('td');
            let price = document.createElement('p');
            price.textContent = item.price;
            priceData.appendChild(price);
            tr.appendChild(priceData);

            let decData = document.createElement('td');
            let dec = document.createElement('p');
            dec.textContent = item.decFactor;
            decData.appendChild(dec);
            tr.appendChild(decData);

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