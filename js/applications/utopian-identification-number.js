function processData(input) {
    var REGEX = /^[a-z]{0,3}[0-9]{2,8}[A-Z]{3,}$/;
    var lines = input.split('\n');
    
    lines.forEach(function(line, index) {
       if (index > 0) {
           if (REGEX.test(line)) {
               console.log('VALID');
           } else {
               console.log('INVALID');
           }
       } 
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
