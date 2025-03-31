function solve() {
    let text = document.getElementById("input").value;
    let output = document.getElementById("output");
    
    let sentences = text.split('.').map(s => s.trim()).filter(s => s.length > 0);
    
    let paragraphs = [];
    for (let i = 0; i < sentences.length; i += 3) {
        let group = sentences.slice(i, i + 3);
        let paragraphContent = group.join('. ') + '.';
        paragraphs.push(`<p>${paragraphContent}</p>`);
    }
    
    output.innerHTML = paragraphs.join('');
}
