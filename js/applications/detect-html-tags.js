var Regex_Pattern = /(?<=<)\w*(?=[\w\s\W]*\/?>)/gm;

function processData(input) {
    var array = input.match(Regex_Pattern);
	array.sort();
	array = removeDuplicates(array);
    console.log(array.join(';'));
}

function removeDuplicates(array) {
    var obj = {};
    var result = [];
    for (var i = 0; i < array.length; i++) {
        obj[array[i]] = true;
    }
    for (var key in obj) {
        if (key != '') {
			result.push(key);
		}
    }
    return result;
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