function processData(input) {
    const REGEX = /[\w\.]+\@([a-z\.]+)(\.[a-z]{2,3})(\.[a-z]{2})?/;
    let words = input.replace(/\n/g, ' ').replace(/\t/g, ' ').split(' ');
    let emails = [];
    
    words.forEach(function(word, index) {
       if (REGEX.test(word)) {
           let email = word.trim().match(REGEX)[0];
           emails.push(email);
       } 
    });
    
    emails.sort();
    emails = removeDuplicates(emails);
    console.log(emails.join(';'));
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
