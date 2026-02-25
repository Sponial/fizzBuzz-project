var output = [];
var count = 1;

function fizzBuzz() {
//write code here
    while (count <= 100) {
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
    else {output.push(count);
    count++;}
    }

console.log(output);
}
fizzBuzz();
//Okay, so in the case of printing culling fizzbuzz, we had at first one, and then on the second time we had two and fizz. 
//So that would mean the code we have, output.push count at the top runs all the time no matter what. Count will always be pushed, and that is apparently separate to output.push, and count++ is outside of the conditional. So output.push, count, and count++ are outside of the conditionals. 
//So no matter what happens every single time, will be pushed and after that's done it'll be added plus one. Okay, so we know that that's always running. That's the solution for our multiple coles being placed. There's no differentiator saying that one doesn't get pasted or printed if the other one is printed as well. 

//Success! Pasting the output.push(count) and the count++ into an else successfully produced the result that we were looking for. 