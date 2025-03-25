function attachGradientEvents() {
    let result = document.getElementById('result');
    let gradient = document.getElementById('gradient');
    
    gradient.addEventListener('mousemove', showPercentage);

    function showPercentage(event) {
        result.textContent = Math.floor(Number(event.offsetX / gradient.clientWidth * 100)) + '%';
    }
}
