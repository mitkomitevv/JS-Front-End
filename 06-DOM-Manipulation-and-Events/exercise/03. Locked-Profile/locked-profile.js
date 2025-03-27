document.addEventListener('DOMContentLoaded', solve);

function solve() {
    document.querySelectorAll('button').forEach(b => b.addEventListener('click', showInfo));

    function showInfo(e) {
        let hidden = e.target.parentElement.getElementsByClassName('hidden-fields active')[0];
        let unlockButton = e.target.parentElement.querySelectorAll('input[type="radio"]')[1];

        if (e.target.textContent === 'Show more') {
            if (unlockButton.checked) {
                hidden.style.display = 'block';
                e.target.textContent = 'Show less'
            }
        } else {
            if (unlockButton.checked) {
                hidden.style.display = 'none';
                e.target.textContent = 'Show more'
            }
        }
    }
}