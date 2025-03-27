document.addEventListener('DOMContentLoaded', solve);

function solve() {
    document.getElementById('convert').addEventListener('click', convert);

    let conversionMap = {
        'km': n => n * 1000,
        'm': n => n * 1,
        'cm': n => n * 0.01,
        'mm': n => n * 0.001,
        'mi': n => n * 1609.34,
        'yrd': n => n * 0.9144,
        'ft': n => n * 0.3048,
        'in': n => n * 0.0254,
    }

    function convert(e) {
        e.preventDefault();

        let inputDistance = Number(document.getElementById('inputDistance').value);
        let outputDistance = document.getElementById('outputDistance');

        let inputFrom = document.getElementById('inputUnits').value;
        let outputTo = document.getElementById('outputUnits').value;

        outputDistance.value = conversionMap[inputFrom](inputDistance) / conversionMap[outputTo](1);
    }
}