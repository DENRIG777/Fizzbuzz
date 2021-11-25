//get values form the user. we need to get the Fizz and the buzz value
function getValues (){

    //get the user values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    //parse for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    //check that the numbers are integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        
        //we call fizzbuzz 
        let fbArray = FizzBuzzC(fizzValue, buzzValue);
        //call displayData and write the values to the screen
        displayData(fbArray);
    } else {
        alert("you must enter integers");
    }
}

/// do fizzbuzz with if statement
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
    return returnArray;
}

// Do fizzbuzz with a switch statement
function FizzBuzzB(fizzValue, buzzValue){

    let returnArray = [];
    let Fizz = false;
    let Buzz =false;

    for (let i = 1; i <= 100; i++) {
        
        Fizz = i % fizzValue ==0;
        Buzz = i % buzzValue ==0;

        switch(true)
        {
            case Fizz && Buzz:{
                returnArray.push('FizzBuzz');
                break;
            }
            case Fizz:{
                returnArray.push('Fizz');
                break;
            }
            case Buzz:{
                returnArray.push("Buzz");
                break;
            }
            default:{
                returnArray.push(i);
                break;
            }
        }
    }
    return returnArray;
}

// Do fizzbuzz with a ternary operator
function FizzBuzzC(fizzValue, buzzValue){
    let returnArray =[];

    for (let i = 1; i <= 100; i++) {
        let value = ((i % fizzValue == 0 ? 'Fizz' : '') +(i % buzzValue == 0 ?  'Buzz' :'') || i);
        returnArray.push(value);
    }
    return returnArray;
}


//loop over the array and create a tablerow for each item.
function displayData(fbArray){

    //Get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

     for (let index = 0; index < fbArray.length; index += 5) {
        
        let tableRow = document.importNode(templateRow.content, true);

        //grab the tds
        let rowCols = tableRow.querySelectorAll("td");
        
        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        rowCols[1].classList.add(fbArray[index+1]);
        rowCols[1].textContent = fbArray[index+1];

        rowCols[2].classList.add(fbArray[index+2]);
        rowCols[2].textContent = fbArray[index+2];

        rowCols[3].classList.add(fbArray[index+3]);
        rowCols[3].textContent = fbArray[index+3];

        rowCols[4].classList.add(fbArray[index+4]);
        rowCols[4].textContent = fbArray[index+4];
        
        tableBody.appendChild(tableRow);
    }


    //add all the rows to the table.

}
