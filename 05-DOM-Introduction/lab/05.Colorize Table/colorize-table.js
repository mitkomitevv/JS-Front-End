function colorize() {
    document.querySelectorAll('tbody tr:nth-child(even)').forEach(row => {
        row.style.background = 'teal';
    });   
}