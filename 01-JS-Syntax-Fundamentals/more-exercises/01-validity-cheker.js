function checkDistance(x1, y1, x2, y2) {
    let first = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2)
    let second = Math.sqrt((0 - x2) ** 2 + (0 - y2) ** 2)
    let third = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

    if (first % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if (second % 1 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if (third % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

checkDistance(2, 1, 1, 1)