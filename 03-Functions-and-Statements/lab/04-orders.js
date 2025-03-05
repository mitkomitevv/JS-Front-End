function solve(order, num) {
    let orders = {
        'coffee': 1.5 * num,
        'water': 1 * num,
        'coke': 1.4 * num,
        'snacks': 2 * num
    };

    console.log(orders[order].toFixed(2))
}

solve('coffee', 2)