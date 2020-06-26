// IMPORT MODULES under test here:
// import example from '../example.js';
import { add } from '../utils.js';

const test = QUnit.test;

test('testing 3 and 5 returns 8', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const additionNum1 = 3;
    const additionNum2 = 5;
    const expected = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(additionNum1, additionNum2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('testing 2 and 4 returns 6', (expect) => {
    //Arrange 
    //Set up your arguments and expectations
    const additionNum1 = 2;
    const additionNum2 = 4;
    const expected = 6;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(additionNum1, additionNum2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('testing 1 and 1 returns 2', (expect) => {
    //Arrange
    //Set up arguments and parameters
    const additionNum1 = 1;
    const additionNum2 = 1;
    const expected = 2;

    //Act 
    //Call the function you're testing and set the result to a const
    const actual = add(additionNum1, additionNum2);

    //Expect 
    //Make assertations about what is expected versus the actual result
    //Are the actual and expected equal. if so, then test passes
    expect.equal(actual, expected);
});

// Subtraction 
//Import subtraction function utils file
import { subtraction } from '../utils.js';

//Write tests here 
test('testing 1 minus 0 returns 1', (expect) => {
    //Arrange 
    //Set up args and params
    const subtractionNum1 = 1;
    const subtractionNum2 = 0;
    const expected = 1;

    //Act
    //Call the function and set the result to a const
    const actual = subtraction(subtractionNum1, subtractionNum2);

    //Expected
    //Are the actual and expected equal. if so, test passes
    expect.equal(actual, expected);
});

test('testing 4 minus -0 returns 4', (expect) => {
    //Arrange 
    //Set up args and params
    const subtractionNum1 = 4;
    const subtractionNum2 = -0;
    const expected = 4;

    //Act
    //Call the function and set the result to a const
    const actual = subtraction(subtractionNum1, subtractionNum2);

    //Expected
    //Are the actual and expected equal. if so, test passes
    expect.equal(actual, expected);
});

test('testing 100 minus 100 returns 0', (expect) => {
    //Arrange 
    //Set up args and params
    const subtractionNum1 = 100;
    const subtractionNum2 = 100;
    const expected = 0;

    //Act
    //Call the function and set the result to a const
    const actual = subtraction(subtractionNum1, subtractionNum2);

    //Expected
    //Are the actual and expected equal. if so, test passes
    expect.equal(actual, expected);
});

// Multiplication 
//Import multiplication function utils file
import { multiplication } from '../utils.js';

//Write tests here 
test('testing 1 times 0 returns 0', (expect) => {
    //Arrange 
    //Set up args and params
    const multiplicationNum1 = 1;
    const multiplicationNum2 = 0;
    const expected = 0;

    //Act
    //Call the function and set the result to a const
    const actual = multiplication(multiplicationNum1, multiplicationNum2);

    //Expected
    //Are the actual and expected equal. if so, test passes
    expect.equal(actual, expected);
});

test('testing -1 times 0 returns 0', (expect) => {
    //Arrange 
    //Set up args and params
    const multiplicationNum1 = -1;
    const multiplicationNum2 = 0;
    const expected = 0;

    //Act
    //Call the function and set the result to a const
    const actual = multiplication(multiplicationNum1, multiplicationNum2);

    //Expected
    //Are the actual and expected equal. if so, test passes
    expect.equal(actual, expected);
});

test('testing 0 times 0 returns 0', (expect) => {
    //Arrange 
    //Set up args and params
    const multiplicationNum1 = 0;
    const multiplicationNum2 = 0;
    const expected = 0;

    //Act
    //Call the function and set the result to a const
    const actual = multiplication(multiplicationNum1, multiplicationNum2);

    //Expected
    //Are the actual and expected equal. if so, test passes
    expect.equal(actual, expected);
});

// Division 
//Import division function utils file
import { division } from '../utils.js';

//Write tests here 
test('testing 1 divided by 0 returns 0', (expect) => {
    //Arrange 
    //Set up args and params
    const divisionNum1 = 1;
    const divisionNum2 = 0;
    const expected = Infinity;

    //Act
    //Call the function and set the result to a const
    const actual = division(divisionNum1, divisionNum2);

    //Expected
    //Are the actual and expected equal. if so, test passes
    expect.equal(actual, expected);
});

test('testing 0 divided by 0 returns 0', (expect) => {
    //Arrange 
    //Set up args and params
    const divisionNum1 = 0;
    const divisionNum2 = 0;
    const expected = NaN;

    //Act
    //Call the function and set the result to a const
    const actual = division(divisionNum1, divisionNum2);

    //Expected
    //Are the actual and expected equal. if so, test passes
    expect.equal(actual, expected);
});

test('testing 4 divided by 2 returns 2', (expect) => {
    //Arrange 
    //Set up args and params
    const divisionNum1 = 4;
    const divisionNum2 = 2;
    const expected = 2;

    //Act
    //Call the function and set the result to a const
    const actual = division(divisionNum1, divisionNum2);

    //Expected
    //Are the actual and expected equal. if so, test passes
    expect.equal(actual, expected);
});

test('testing 8 divided by 2 returns 4', (expect) => {
    //Arrange 
    //Set up args and params
    const divisionNum1 = 8;
    const divisionNum2 = 2;
    const expected = 4;

    //Act
    //Call the function and set the result to a const
    const actual = division(divisionNum1, divisionNum2);

    //Expected
    //Are the actual and expected equal. if so, test passes
    expect.equal(actual, expected);
});