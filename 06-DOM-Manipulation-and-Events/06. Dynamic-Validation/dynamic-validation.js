document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let input = document.querySelector('[type="text"]');
    input.addEventListener('change', validateEmail);

    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]{2,}$/;

    function validateEmail(event) {
        if (!event.target.value || emailRegex.test(event.target.value)) {
            event.target.classList.remove('error');
        } else {
            event.target.classList.add('error');
        }
    }
}
