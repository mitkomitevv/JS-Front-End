function solve(arr) {
    let meetings = {};

    for (let line of arr) {
        let [day, name] = line.split(' ')

        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name
            console.log(`Scheduled for ${day}`)
        }
    }

    for (let day in meetings) {
        console.log(`${day} -> ${meetings[day]}`)
    }
}
