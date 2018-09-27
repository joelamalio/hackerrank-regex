var Regex_Pattern = /^[_\.][0-9]+(0|[a-zA-Z]*)_?$/gm;

function printResult(item) {
	var result = item.match(Regex_Pattern);
	if (result) {
		console.log('VALID');
	} else {
		console.log('INVALID');
	}
}

function processData(input) {
    var array = input.split('\n');
	array.shift(); // remove first position
	
	array.forEach(function(item){
		printResult(item);
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