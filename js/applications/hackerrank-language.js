function processData(input) {
    var REGEX = /\b(C|CPP|JAVA|PYTHON|PERL|PHP|RUBY|CSHARP|HASKELL|CLOJURE|BASH|SCALA|ERLANG|CLISP|LUA|BRAINFUCK|JAVASCRIPT|GO|D|OCAML|R|PASCAL|SBCL|DART|GROOVY|OBJECTIVEC)\b/i;
    var lines = input.split('\n');
    
    lines.forEach(function(line, index) {
       if (index > 0) {
           var language = line.split(' ');
           if (REGEX.test(language[1])) {
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
