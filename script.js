function getHistory(){
    return document.getElementById('history-value').innerText;
}
function printHistory(num){
    return document.getElementById('history-value').innerText = num;
}
function getOutput(){
    return document.getElementById('output-value').innerText;
}
function printOutput(num){
    if(num == ''){
        document.getElementById('output-value').innerText = num;
    }
    else{
        document.getElementById('output-value').innerText = getFormattedNumber(num);
    }
    
}

function getFormattedNumber(num){
    const n = Number(num);
    const value = n.toLocaleString('en');//make string
    return value;
}
function revreseNumberFormatted(num){
    return Number(num.replace(/,/g,''));
}

// operators
const operators = document.getElementsByClassName('operator');
for (let i = 0; i < operators.length; i++) {
    const operator = operators[i];
    operator.addEventListener('click', function(){
        if(this.id =='clear'){
            printHistory('');
            printOutput('');
        }
        else if(this.id=="backspace"){
			let output=revreseNumberFormatted(getOutput()).toString();
			output= output.substr(0,output.length-1);
			printOutput(output);
        }
        else{
            var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:revreseNumberFormatted(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
                }
            }
        }
    })
}
// numbers
const numbers = document.getElementsByClassName('number');
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    number.addEventListener('click', function(){
        let output = revreseNumberFormatted(getOutput())
        if(output != NaN){
            output = output + this.id;
            printOutput(output)
        }
    })
}