function solution() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const detailsUrl = 'http://localhost:3030/jsonstore/advanced/articles/details/';
    
    let main = document.getElementById('main');
    main.replaceChildren();
    
    loadArticles(baseUrl, detailsUrl);
}

async function loadArticles(baseUrl, detailsUrl) {
    let response = await fetch(baseUrl);
    let articles = await response.json();
    
    let main = document.getElementById('main');
    
    for (let article of articles) {
        let accordionDiv = document.createElement('div');
        accordionDiv.className = 'accordion';
        
        let headDiv = document.createElement('div');
        headDiv.className = 'head';
        
        let titleSpan = document.createElement('span');
        titleSpan.textContent = article.title;
        
        let button = document.createElement('button');
        button.className = 'button';
        button.id = article._id;
        button.textContent = 'More';
        
        let extraDiv = document.createElement('div');
        extraDiv.className = 'extra';
        
        let paragraph = document.createElement('p');
        
        headDiv.appendChild(titleSpan);
        headDiv.appendChild(button);
        extraDiv.appendChild(paragraph);
        accordionDiv.appendChild(headDiv);
        accordionDiv.appendChild(extraDiv);
        
        main.appendChild(accordionDiv);
        
        button.addEventListener('click', (e) => toggleArticle(e, detailsUrl));
    }
}

async function toggleArticle(event, detailsUrl) {
    let button = event.target;
    let extraDiv = button.parentElement.parentElement.querySelector('.extra');
    let paragraph = extraDiv.querySelector('p');
    
    let id = button.id;
    
    if (button.textContent === 'More') {
        let response = await fetch(detailsUrl + id);
        let data = await response.json();
        
        paragraph.textContent = data.content;
        extraDiv.style.display = 'block';
        button.textContent = 'Less';
    } else {
        extraDiv.style.display = 'none';
        button.textContent = 'More';
    }
}

solution();