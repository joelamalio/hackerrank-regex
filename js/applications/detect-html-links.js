function processData(input) {
    const REGEX_LINK = /(?<=href=")[^"]+/gm;
    const REGEX_LINK_NAME = /((?<=<a href=")[^"]+)|((?<=>)[\w \.\,\/]+)/gm;
    
    let lines = input.split('\n');
    let links = [];      
    
    lines.forEach(function(line) {
        let matches = line.match(REGEX_LINK);           
           
        if (matches != null) {
            matches.forEach(function(link) {
                if (links.indexOf(link) === -1) {
                    links.push(link);
                }
            });
        }
    });
        
    let map = new Map();  
    lines.forEach(function(line) {
        let matches = line.match(REGEX_LINK_NAME);           
           
        if (matches != null) {
            let link = null;
            let name = '';
            
            matches.forEach(function(match) {
                match = match.trim();
                
                if (match != '') {
                    if (links.indexOf(match) === -1) {
                        if (name == '') {
                            name = match;    
                        }                                                
                    } else {
                        addMap(map, link, name);
                        
                        link = match;
                        name = '';
                    } 
                }                               
            });
            
            addMap(map, link, name);
        }    
    });    
    
    let names = [];
    map.forEach(function(value, key) {
        names.push(key.trim() + ',' + value.trim());
    });    
    
    names.forEach(function(name) {
        console.log(name);
    });
}

function addMap(map, link, name) {
    if (link != null && name != null) { 
        map.set(link, name);
    }
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
