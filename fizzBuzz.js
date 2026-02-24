var output = [];
var count = 1;

function fizzBuzz() {
//write code here
output.push(count);
count++;
    if (count % 5 === 0 && count % 3 === 0) { 
    output.push("FizzBuzz")
    count++; }
    else if (count % 3 === 0 && count % 5 !=0) { //adding the && and != so that we don't have interference later on from the new count++ below doubling up when we get to fizzBuzz (divisble by 3 && a 5)
    output.push("Fizz")
    count++; //adding the count++ here to see if that resolves the +1 issue, hopefully because it's conditional it wont create issues further down as it only activates
    }
    else if (count % 5 ===0 && count % 3 !=0) { 
    output.push("Buzz")
    count++;
    }
    
console.log(output);
}
fizzBuzz();
// adding to github