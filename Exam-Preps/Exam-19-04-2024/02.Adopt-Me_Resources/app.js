window.addEventListener("load", solve);

function solve() {
    const formElement = document.querySelector('form');
    const adoptionInfo = document.getElementById('adoption-info');
    const adoptedList = document.getElementById('adopted-list');

    const type = document.getElementById('type');
    const age = document.getElementById('age');
    const gender = document.getElementById('gender');

    document.getElementById('adopt-btn').addEventListener('click', onAdopt);

    function onAdopt(e) {
        e.preventDefault();

        let currentType = type.value;
        let currentAge = age.value;
        let currentGender = gender.value;

        if (!currentType || !currentAge || !currentGender) {
            return;
        }

        const li = document.createElement('li');
        const article = document.createElement('article');

        let pType = document.createElement('p');
        pType.textContent = `Pet:${currentType}`;

        let pGender = document.createElement('p');
        pGender.textContent = `Gender:${currentGender}`;

        let pAge = document.createElement('p');
        pAge.textContent = `Age:${currentAge}`;

        article.appendChild(pType);
        article.appendChild(pGender);
        article.appendChild(pAge);

        const divButtons = document.createElement('div');
        divButtons.className = 'buttons';

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';

        const doneBtn = document.createElement('button');
        doneBtn.className = 'done-btn';
        doneBtn.textContent = 'Done';

        divButtons.appendChild(editBtn);
        divButtons.appendChild(doneBtn);

        li.appendChild(article);
        li.appendChild(divButtons);

        adoptionInfo.appendChild(li);

        formElement.reset();

        editBtn.addEventListener('click', editItem);
        doneBtn.addEventListener('click', doneItem);

        function editItem() {
            type.value = currentType;
            age.value = currentAge;
            gender.value = currentGender;

            adoptionInfo.removeChild(li);
        }

        function doneItem() {
            let newLi = document.createElement('li');
            newLi.appendChild(article);

            let clearBtn = document.createElement('button');
            clearBtn.className = 'clear-btn';
            clearBtn.textContent = 'Clear';
            clearBtn.addEventListener('click', () => {
                adoptedList.removeChild(newLi);
            });

            newLi.appendChild(clearBtn);
            adoptedList.appendChild(newLi);

            adoptionInfo.removeChild(li);
        }
    }
}