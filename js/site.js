//get values from the user. we need to get the fizz and buzz value
function getValues(){
    //get the user values from the dom/page
    let fizzValue = document.getElementById('fizzValue').value;
    let buzzValue = document.getElementById('buzzValue').value;

    //parse for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    //check that the numbers are integers

   
    if(Number.isInteger(fizzValue)&& Number.isInteger(buzzValue)){
        //call fizzbuzz
        let fbArray = fizzBuzz(fizzValue, buzzValue);
         //call displayData and write the values to the screen
        displayData(fbArray);
    }else{
        alert("You must enter integers")
    }
}
//do fizzbuzz
function fizzBuzz(fizzValue, buzzValue){

    let returnArray = [];

    //loop from 1 to 100
    for(let i = 1; i<= 100; i++){

        //check to see if divisible by Both (3 and 5)
        //check to see if divisible by fizz value (3)
        //check to see if divisible by buzz value (5)
        if(i%fizzValue == 0 && i%buzzValue == 0){
            returnArray.push('fizzbuzz');

        }else if(i % fizzValue == 0){
            returnArray.push('fizz');
        }else if(i % buzzValue == 0){
            returnArray.push('buzz');
        }else{
            returnArray.push(i);
        }
    }

    return returnArray;
}

//loop over the array and create a tablerow for each item.
function displayData(fbArray) {
    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index+=5) {
        let tableRow = document.importNode(templateRow.content, true)

        //grab jst the td to put into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(fbArray[index])
        rowCols[0].textContent = fbArray[index];
        rowCols[1].classList.add(fbArray[index+1])
        rowCols[1].textContent = fbArray[index+1];
        rowCols[2].classList.add(fbArray[index+2])
        rowCols[2].textContent = fbArray[index+2];
        rowCols[3].classList.add(fbArray[index+3])
        rowCols[3].textContent = fbArray[index+3];
        rowCols[4].classList.add(fbArray[index+4])
        rowCols[4].textContent = fbArray[index+4];

        tableBody.appendChild(tableRow);
    }
    //add all the rows to the table
}