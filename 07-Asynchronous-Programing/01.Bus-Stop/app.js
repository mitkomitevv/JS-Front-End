async function getInfo() {
    let stopId = document.getElementById('stopId').value;
    let ul = document.getElementById('buses');
    ul.replaceChildren();

    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    let data;

    try {
        let busInfo = await fetch(url);
        data = await busInfo.json();
        document.getElementById('stopName').textContent = data.name;
    } catch (error) {
        document.getElementById('stopName').textContent = 'Error';
        return;
    }

    for (let bus in data.buses) {
        let li = document.createElement('li');
        li.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
        ul.appendChild(li);
    }
}
