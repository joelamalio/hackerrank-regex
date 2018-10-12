function processData(input) {
    const REGEX = /https?:\/\/([a-z0-9-_\.]+\.[a-z0-9]{2,3}(\.[a-z0-9]{2})?)/g;
    let lines = input.split('\n');
    let domains = [];
    
    lines.forEach(function(line, index) {
       if (index > 0) {
           let matches = line.match(REGEX);           
           
           if (matches != null) {
               matches.forEach(function(domain) {
                   if (domain != null) {
                       domain = domain.replace('https://www.', '')
                            .replace('https://ww2.', '')
                            .replace('https://', '')
                            .replace('http://www.', '')
                            .replace('http://ww2.', '')
                            .replace('http://', '');

                       if (domains.indexOf(domain) === -1) {
                           domains.push(domain);
                       }
                   }
               });
           }                          
       } 
    });
    
    domains.sort();    
    console.log(domains.join(';'));
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
