function solve() {
    let input = JSON.parse(document.querySelector('textarea').value);
    
    for (let restaurant of input) {
        let [resName, ...workers] = restaurant.split(' - ');
        
        for (let worker of workers) {
            let [workerName, salary] = worker.split(' ');
            
        }
    }
}