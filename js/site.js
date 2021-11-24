//get values form the user. we need to get the Fizz and the buzz value
function getValues (){

    //get the user values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    //parse for numbers
    fizzValue = parseInt("fizzValue");
    buzzValue = parseInt("buzzValue");
    //check that the numbers are integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        
        //we call fizzbuzz 
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        //call displayData and write the values to the screen
    

    } else {
        alert("you must enter integers");
    }
}


function fizzBuzz(fizzValue, buzzValue){

    let returnArray = [];

    //loop form 1 to 100        
    for (let index = fizzValue; index < fizzValue; index++){
    //we need check the current in three steps
    //check to see if divisible by both (3 and 5)
    //if so push 'FizzBuzz' into an array and not the number
     numbers.push(index);
    }

    return returnArray;
}
    //check to see if divisible by fizz value (3)
    //if so push 'Fizz' into an array and not the number

    //check to see if divisible by fizz value (5)
    //if so push 'Buzz' into an array and not the number

    //if none then push the number into array

    returnArray;


function displayData(fbArray){

    //loop over the array and create a table.

    //add all the rows to the table.

}
