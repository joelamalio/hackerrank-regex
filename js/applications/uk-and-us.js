function processData(input) {
    var lines = input.split('\n');
    var n = parseInt(lines[0]);
    var keyWords = [];
        
    lines.forEach(function(line, index) {
        if (index > n + 1) {
            var regex = new RegExp('^' + line.replace('ze','(se|ze)') + '$');
            keyWords.push(regex);
        }
    });
    
    keyWords.forEach(function(keyword) {
        var count = 0;
        lines.forEach(function(line, index) {
            if (index <= n) {
                var words = line.split(' ');
                words.forEach(function(word) {
                   if (keyword.test(word)) {
                        count++;   
                   } 
                });              
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
