function processData(input) {
    var REGEX_WORDS = /[\w_]+/g;
    var lines = input.split('\n');
    var n = parseInt(lines[0]);
    var words = [];
    var keys = [];

    lines.forEach(function(line, index) {
        if (index > 0) {
            if (index <= n) {           
                var array = line.match(REGEX_WORDS);
                array.forEach(function(item) {
                    words.push(item);
                });
            } else if (index > n + 1) {
                keys.push(line);
            }
        }   
    });

    keys.forEach(function(key) {
        var count = 0;
        words.forEach(function(word) {
            var regex = new RegExp('(?<=\\w)' + key + '(?=\\w)', 'g');
            var w = regex.exec(word);
            if (w != null) {
                count += w.length;           
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
