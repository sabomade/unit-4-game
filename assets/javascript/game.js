// VARIABLES
//===============================
//random target number between 19-120
var targetNumber = Math.floor(Math.random() * 120)+19;

//write targetNumber to screen
$("#num-to-guess").text(targetNumber);
// console.log(targetNumber);

var counter = 0;
var numberOptions = [];

var crystals = ["assets/images/pink.svg", "assets/images/orange.svg", "assets/images/green.svg", "assets/images/purple.svg"];

// FUNCTIONS
//===============================
//Each crystal should have a random hidden value between 1 - 12.
//generate 4 random numbers between 1-12 and push to numberOptions array
for (let index = 0; index < 4; index++) {
    const element = Math.floor(Math.random()*12)+1;
    numberOptions.push(element);
}
//console.log(numberOptions);

//create a crystal for each numberOption
for (let index = 0; index < numberOptions.length; index++) {
    //for each iteration, creat an imageCrystal
    var imageCrystal = $("<img>");
    
    //add class to cyrstal
    imageCrystal.addClass("crystal-image");

    //assign a crystal img
    imageCrystal.attr("src", crystals[index]);

    //assign random value to crystal
    imageCrystal.attr("data-crystalvalue", numberOptions[index]);

    //print crystals to screen
    $("#crystals").append(imageCrystal);
}

// MAIN PROCESS
//===============================
//add onclick function to every crystal
$(".crystal-image").click( function() {
    //grab value of crystal and convert to integer
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    //add crystal value clicked to counter 
    counter += crystalValue;

    //write counter to screen
    $("#user-guess").text(counter);
})