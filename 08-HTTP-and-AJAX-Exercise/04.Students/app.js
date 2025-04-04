function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/collections/students';
    loadStudents(url);

    document.getElementById('form').addEventListener('submit', (event) => onCreate(event, url));
}

async function loadStudents(url) {
    let response = await fetch(url);
    let data = await response.json();

    let tbody = document.querySelector('tbody');
    tbody.replaceChildren();

    for (let student of Object.values(data)) {
        let tr = document.createElement('tr');

        let firstName = document.createElement('td');
        let lastName = document.createElement('td');
        let facNumber = document.createElement('td');
        let grade = document.createElement('td');

        firstName.textContent = student.firstName;
        lastName.textContent = student.lastName;
        facNumber.textContent = student.facultyNumber;
        grade.textContent = student.grade;

        tr.appendChild(firstName);
        tr.appendChild(lastName);
        tr.appendChild(facNumber);
        tr.appendChild(grade);

        tbody.appendChild(tr);
    }
}

async function onCreate(event, url) {
    event.preventDefault();

    let firstName = document.querySelector('input[name="firstName"]').value;
    let lastName = document.querySelector('input[name="lastName"]').value;
    let facultyNumber = document.querySelector('input[name="facultyNumber"]').value;
    let grade = document.querySelector('input[name="grade"]').value;

    if (!firstName || !lastName || !facultyNumber || !grade) {
        return;
    }

    let student = {
        firstName: firstName,
        lastName: lastName,
        facultyNumber: facultyNumber,
        grade: grade
    };

    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
    };

    await fetch(url, options);
    await loadStudents(url);

    event.target.reset();
}

attachEvents();