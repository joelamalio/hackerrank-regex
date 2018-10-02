var ipv4 = /^([0-9]|0?[0-9]{2}|1[0-9]{2}|2[0-4][0-9]|25[0-6])\.([0-9]|0?[0-9]{2}|1[0-9]{2}|2[0-4][0-9]|25[0-6])\.([0-9]|0?[0-9]{2}|1[0-9]{2}|2[0-4][0-9]|25[0-6])\.([0-9]|0?[0-9]{2}|1[0-9]{2}|2[0-4][0-9]|25[0-6])$/

var ipv6 = /^([a-f0-9]{1,4}\:[a-f0-9]{1,4}\:[a-f0-9]{1,4}\:[a-f0-9]{1,4}\:[a-f0-9]{1,4}\:[a-f0-9]{1,4}\:[a-f0-9]{1,4}\:[a-f0-9]{1,4})$/

function processData(input) {
    var lines = input.split('\n');
    lines.shift();
    lines.forEach(function(line) {
        
        if (line.match(ipv4)) {
            console.log('IPv4');
        } else if (line.match(ipv6)) {
            console.log('IPv6');
        } else {
            console.log('Neither');
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
