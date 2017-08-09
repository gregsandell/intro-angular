angular.module("filterApp", []).filter("DollarFilter", function() {
    return function(input) {

        // TO DO:  change strategy to separate the precursor parts (+, -, $) from the Numeric part
        if (typeof input === 'string') {
            if (input.indexOf('-$') === 0) {
                input = '-' + input.substring(2)
            }
            if (input.indexOf('+$') === 0) {
                input = input.substring(2)
            }
            if (input[0] === '$' || input[0] === '+') {
                input = input.substring(1);
            }
            input = input.replace(/,/g, '')
            console.log('input = ' + input)
        }
        if (isNaN(input)) {
            return '$0.00';
        }
        if (typeof input === 'string') {
            if (input.indexOf('+') >= 0) {
                return '$0.00';
            }
        }
        var dotZeros = '';
        var sign = '';
        var chopper = Math.floor;
        if (Number(input) < 0) {
            chopper = Math.ceil;
        }
        var lop_off = chopper(Number(input) * 100)/100;
        console.log('input = ' + input + ', lop_off = ' + lop_off)
        if (lop_off === chopper(lop_off)) {
            dotZeros = '.00';
        }
        if (lop_off < 0) {
            sign = '-';
        }
        var asString = sign + '$' + Math.abs(lop_off) + dotZeros;
        var withCommas = asString.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        return withCommas;
    }
});

