function processData(input) {
    var REGEX = /(hackerrank)/i;
    var lines = input.split('\n');
    var count = 0;
    lines.forEach(function(line) {
        if (REGEX.test(line)) {
            count++;
        }
    });
    console.log(count);
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
