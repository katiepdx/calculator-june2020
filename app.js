//ADDITION
// get dom elements
// get add-input-1
const addInput1 = document.getElementById('add-input-1');
// get add-input-2
const addInput2 = document.getElementById('add-input-2');
// get add-button
const boogerButton = document.getElementById('add-button');
// get the add-result span
const boogerSpan = document.getElementById('add-result');

// initialize state 

// set the event handler to the button
boogerButton.addEventListener('click', () => {
    // in the click event handler . . .
    // make sure we have the inputs (console.log)
    // make sure we have the span
    // make sure we have the .values of the inputs
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    // add the two values together
    const sum = Number(value1) + Number(value2);

    // update the textContent of the span
    boogerSpan.textContent = sum;
});

//SUBTRACTION
//Dom Elements
// GET subtract-input-1
const subtractionInput1 = document.getElementById('subtract-input-1');
//GET subtract-input-2
const subtractionInput2 = document.getElementById('subtract-input-2');
//OK VALIDATE GOT 2 input fields  
console.log(subtractionInput1, subtractionInput2);
//GET subtraction-button
const subtractionButton = document.getElementById('subtract-button');
//VALIDATE GOT button
// console.log(subtractionButton);
//GET subtraction-result
const subtractionResult = document.getElementById('subtraction-result');
//VALIDATE GOT subtraction-result
//console.log(subtractionResult);

//INITIALIZE STATE

//SET the event listener to the button - on a click do something
subtractionButton.addEventListener('click', () => {
    // post-click do this
    // make sure we have the inputs (console.log)
    // make sure we have the span
    // make sure we have the .values of the inputs (the value the user inputs) 
    const subtractionNum1 = subtractionInput1.value;
    const subtractionNum2 = subtractionInput2.value;
    console.log(subtractionNum1, subtractionNum2);
    
    //Subtract num1 from num2
    const subtractNumers = Number(subtractionNum1) - Number(subtractionNum2);
    
    //Print result to span
    subtractionResult.textContent = subtractNumers;
});
