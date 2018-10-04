function processData(input) {
    var REGEX = /^[A-Z]{5}[\d]{4}[A-Z]$/;
	var lines = input.split('\n');
	
	lines.forEach(function(line, index) {
		if (index > 0) {
			if (REGEX.test(line)) {
				console.log('YES');
			} else {
				console.log('NO');
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
