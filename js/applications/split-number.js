function processData(input) {
    var REGEX_PHONE_NUMBER = /^[\d]{1,3}[ -][\d]{1,3}[ -][\d]{4,10}$/;
    var phones = input.split('\n');
    
    phones.forEach(function(phone) {
        var found = REGEX_PHONE_NUMBER.test(phone);
        if (found) {
            var groups;
            if (phone.indexOf('-') != -1) {
                groups = phone.split('-');
            } else {
                groups = phone.split(' ');
            }
            console.log('CountryCode=' + groups[0] + ',LocalAreaCode=' + groups[1] + ',Number=' + groups[2]);
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
