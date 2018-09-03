var Regex_Pattern = /(?:ok){3,}/; //Do not delete '/'. Replace __________ with your regex.

function processData(Test_String) {
    //Enter your code here
    
    console.log(!!Test_String.match(Regex_Pattern));
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


You have a test String . 
Your task is to write a regex which will match  with the following condition:

 should have 3 or more consecutive repetitions of ok.