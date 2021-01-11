//selecting digits elements
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');
var six = document.getElementById('6');
var seven = document.getElementById('7');
var eight = document.getElementById('8');
var nine = document.getElementById('9');
var zero = document.getElementById('0');

//selecting symbols elements
var plus = document.getElementById("+");
var minus = document.getElementById("-");
var times = document.getElementById("*");
var division = document.getElementById("/");
var point = document.getElementById(".");
var equal = document.getElementById("=");
var CE = document.getElementById("CE");
var C = document.getElementById("C");

//selecting colection of elements
var digits = document.getElementsByClassName('B-digits');
var symbols = document.getElementsByClassName('B-symbols');
// selecting screen elements
var display = document.getElementById("display");
var resultado = document.getElementById("result");

//setting functions 

function history (){
    return display.innerText;
}

function dispHistory(num){
    display.innerText = num;
}

function result (){
    return resultado.innerText;
}

function dispResult(num){
    if(num == ""){
        resultado.innerText = num;
    }else{
        resultado.innerText = getFormattedNumber(num);
    }
}

//function to format result
function getFormattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString('en');
    return value;
}



function reverseNumberFormat(num){
    return Number (num.replace(/,/g,''));
}




//operations
for(var i = 0; i < digits.length; i++){
    digits[i].addEventListener('click',function(){
    var out = reverseNumberFormat(result());
    if(out != NaN){
        out = out+this.id;
        dispResult(out);
    }        
    })
}

for(var i = 0; i < symbols.length; i++){
    symbols[i].addEventListener('click',function(){
        if(this.id == 'C'){
            dispResult('');
            dispHistory('');
        }else if(this.id == "CE"){
            var out = reverseNumberFormat(result()).toString();
            if(out){
                out = out.substr(0,out.length-1);
                dispResult(out);
            }
        }else{
            var output = result();
            var hist = history();
            if(output != ''){
                output = reverseNumberFormat(output);
                hist = hist + output;
                if(this.id == "="){
                    var total = eval(hist);
                    dispResult(result);
                    dispHistory("");
                }
            }
        }
    });
}