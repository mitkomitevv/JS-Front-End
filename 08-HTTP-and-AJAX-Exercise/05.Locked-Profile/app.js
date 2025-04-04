async function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const main = document.getElementById('main');
    main.replaceChildren();

    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach((profile, index) => {
        const profileDiv = createProfile(profile, index + 1);
        main.appendChild(profileDiv);
    });
}

function createProfile(profile, counter) {
    const div = document.createElement('div');
    div.className = 'profile';
    div.innerHTML = `
        <img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user${counter}Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user${counter}Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user${counter}Username" value="${profile.username}" disabled readonly />
        <div class="user${counter}HiddenFields" style="display: none;">
            <hr>
            <label>Email:</label>
            <input type="email" name="user${counter}Email" value="${profile.email}" disabled readonly />
            <label>Age:</label>
            <input type="number" name="user${counter}Age" value="${profile.age}" disabled readonly />
        </div>
        <button>Show more</button>
    `;

    const showMoreBtn = div.querySelector('button');
    showMoreBtn.addEventListener('click', () => toggleDetails(div, showMoreBtn));

    return div;
}

function toggleDetails(div, button) {
    const lockRadioBtn = div.querySelector('input[value="lock"]');
    const hiddenFields = div.querySelector('div');

    if (!lockRadioBtn.checked) {
        if (button.textContent === 'Show more') {
            hiddenFields.style.display = 'block';
            button.textContent = 'Hide it';
        } else {
            hiddenFields.style.display = 'none';
            button.textContent = 'Show more';
        }
    }
}