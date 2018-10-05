function processData(input) {
    var REGEX = /^([Hh][Ii]\s[^Dd])/;
    var lines = input.split('\n');
    
    lines.forEach(function(line, index) {
        if (index > 0) {
            if (REGEX.test(line)) {
                console.log(line);
            }
        }
    }) ;
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
