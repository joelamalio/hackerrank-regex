function processData(input) {
    const REGEX = /^\(([+-]?(90(\.0+)?|([1-8]?\d)(\.\d+)?))(,\s)([+-]?(180(\.0+)?|(1[0-7]\d)(\.\d+)?|([1-9]\d)(\.\d+)?)|(\d(\.\d+)?))\)$/;
    let lines = input.split('\n');
    
    lines.forEach(function(line, index) {
       if (index > 0) {
           if (REGEX.test(line)) {
               console.log('Valid');
           } else {
               console.log('Invalid');
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
