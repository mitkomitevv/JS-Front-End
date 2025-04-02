function solve() {
    let stopId = `depot`;
    let nextStop;

    let info = document.querySelector('.info');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    async function depart() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${stopId}`

        try {
            let departure = await fetch(url);
            let data = await departure.json();

            nextStop = data.name;
            info.textContent = `Next stop ${data.name}`;

            stopId = data.next;
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch {
            return;
        }
    }

    function arrive() {
        info.textContent = `Arriving at ${nextStop}`
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
