// VARIABLES
//===============================
//random target number between 19-120
var targetNumber = Math.floor(Math.random() * 120)+19;

//write targetNumber to screen
$("#num-to-guess").text(targetNumber);
// console.log(targetNumber);

var counter = 0;
var numberOptions = [];

// FUNCTIONS
//===============================
//Each crystal should have a random hidden value between 1 - 12.
//generate 4 random numbers between 1-12 and push to numberOptions array
for (let index = 0; index < 4; index++) {
    const element = Math.floor(Math.random()*12)+1;
    numberOptions.push(element);
}
console.log(numberOptions);



// MAIN PROCESS
//===============================