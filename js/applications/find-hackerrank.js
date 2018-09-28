function processData(input) {
    var lines = input.split('\n');
    lines.shift();
    lines.forEach(function(line) {
        var array = line.split(/\W/);
        array.forEach(function(item, index, arr) {
            if ('hackerrank' == item) {
                if (index == 0 && index == arr.length - 1) {
                    console.log('0')
                } else if (index == 0) {
                    console.log('1')
                } else if (index == arr.length - 1) {
                    console.log('2')
                } else {
                    console.log('-1');
                }            
            }
        });
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
