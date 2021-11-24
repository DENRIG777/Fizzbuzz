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
        let fbArray = FizzBuzz(fizzValue, buzzValue);
        //call displayData and write the values to the screen
        displayData(fbArray);
    } else {
        alert("you must enter integers");
    }
}

/// do fizz buzz
function FizzBuzz(fizzValue, buzzValue){

    let returnArray = [];

    //loop form 1 to 100        
    for (let i = 1; i <= 100; i++) {
       
        //check to see if divisible by both (3 and 5)
        //check to see if divisible by fizz value (3)
        //check to see if divisible by fizz value (5)
        if(i % fizzValue ==0 && i % buzzValue == 0) {
            returnArray.push('FizzBuzz');
        }else if (i % fizzValue == 0) {
            returnArray.push('Fizz');
        }else if (i % buzzValue == 0) {
            returnArray.push('Buzz');
        }else{  
            returnArray.push(i);  
        }
    }
    returnArray;
}

//loop over the array and create a tablerow for each item.
function displayData(fbArray){

    

    //add all the rows to the table.

}
