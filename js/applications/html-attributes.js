function processData(input) {
    const REGEX_TAG = /(?<=<)\w*(?=[\w\s\W]*\/?>)/g;
    const REGEX_TAG_ATTRIBUTE = /((?<=<)\w*(?=[\w\W]*\/?>))|(\s+\w+(?==))/gm;
    
    let lines = input.split('\n');
    let tags = [];
    let map = new Map();
    let attributes = [];
    
    lines.forEach(function(line) {
        let matches = line.match(REGEX_TAG);           
           
        if (matches != null) {
            matches.forEach(function(tag) {
                if (tags.indexOf(tag) === -1) {
                    tags.push(tag);
                }
            });
        }
    });
        
    lines.forEach(function(line) {
        let matches = line.match(REGEX_TAG_ATTRIBUTE);           
           
        if (matches != null) {
            let tag = null;
            let values = null;
            
            matches.forEach(function(match) {
                match = match.trim();
                
                if (match != '') {
                    if (tags.indexOf(match) === -1) {                        
                        //console.log('tag: ' + tag + ' match: ' + match);
                        values.push(match);                        
                    } else {
                        addMap(map, tag, values);
                        
                        tag = match;
                        values = [];
                    } 
                }                               
            });
            
            addMap(map, tag, values);
        }    
    });    
    
    map.forEach(function(value, key) {
        let values = map.get(key);
        
        if (values != null) {
            attributes.push(key + ':' + values.join(','))
        } else {
            attributes.push(key + ':');
        }
    });
    
    attributes.sort();
    
    attributes.forEach(function(attribute) {
        console.log(attribute);
    });
    
} 

function addMap(map, tag, values) {
    if (tag != null) {        
        let list = map.get(tag);
        
        if (list != null && list.length > 0) {
            list.forEach(function(item) {
                if (values.indexOf(item) === -1) {
                    values.push(item);
                }
            });
        }
        
        values.sort();
        
        map.set(tag, values);
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
