function printCharsBetween(char1, char2) {
    let code1 = char1.charCodeAt(0);
    let code2 = char2.charCodeAt(0);
  
    let start = Math.min(code1, code2) + 1;
    let end = Math.max(code1, code2) - 1;
  
    let result = '';
    for (let i = start; i <= end; i++) {
      result += String.fromCharCode(i) + ' ';
    }
  
    console.log(result);
  }
