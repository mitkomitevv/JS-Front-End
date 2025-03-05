function solve(num) {
    let grade = '';
    if (num < 3) {
        grade = 'Fail';
    } else if (num < 3.5) {
        grade = 'Poor';
    } else if (num < 4.5) {
        grade = 'Good';
    } else if (num < 5.5) {
        grade = 'Very good';
    } else {
        grade = 'Excellent';
    }
    console.log(`${grade} (${num >= 3 ? num.toFixed(2) : 2})`);
}