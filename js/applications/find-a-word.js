function processData(input) {
    let lines = input.split('\n');
    let n = parseInt(lines[0]);
    let keywords = [];
    let words = [];
    
    lines.forEach(function(line, index) {
        if (index > 0 && index <= n) {
            words = words.concat(line.replace(/[^\s\w]/g, ' ').replace(/\s\s/g, ' ').split(' '));
        } else if (index > n + 1) {
            keywords.push(line);          
        }
    });
    
    keywords.forEach(function(key) {
        let count = 0;
        let regex = new RegExp('^(' + key + ')$');
        
        words.forEach(function(word) {
            if (regex.test(word)) {
                count++;
            }        
        });
        
        console.log(count);
    });
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
