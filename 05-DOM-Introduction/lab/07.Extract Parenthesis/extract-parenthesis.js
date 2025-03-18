function extract(content) {
    let text = document.getElementById(content).textContent;
    let pattern = /\(([^)]+)\)/g;
    let matches = [];
    let match;
    
    while ((match = pattern.exec(text))) {
        matches.push(match[1]);
    }
    return matches.join('; ');
}