
answer = eval(4+2*(2*5*(7+(9+2))) + 5);
console.log(answer);

//equation = "6/2*(2+1)";
equation = "4*(2*5*(7+(9x+2)))";

//RESTRICTIONS;
// The output should not result to x^2 or more.

//DISREGARD "x"
equation = "4*(2*5*(7+(9x+2)))";
equation = "4*(2*5*(7+(9x+2))) + 5x";

// CASE 1: 
// BEFORE 9x, find the index of last open parenthesis
// Count parenthesis occurences until index 0
// Remove 9x in the string and concatenate 4*(2*5*(7+( then concatenate 9x
// Loop concatenate close parenthesis in the last index


equation = "4x*(2*5*(7+(9+2))) + 5"; //DONEEONDEONDOENDONEODNOENDOENDONE

// CASE 2: If the coefficient came first before the parenthesis and if  the next operator of coefficient is equal to "*"
// Check if coefficient -2  is === to "coefficient" and index === "(", 
// parenthesis tally increase
// add new boolean openParenthesis, closeParenthesis
// 
// if index === ")"   closeParenthesis = false, continue;
// Loop concatenate close parenthesis in the last index


equation = "4*(13+9x+5*(7+(9+2))) + 5x";


// closeParenthesis
// if closeParenthesis === true
// if index === "(" ,,,
// count parenthesisTally ++

equation = "3+2*4*(13+7*9x+5-2x*(7+(9+2))) + 5x";

// IF COEFFICIENT IS FOUND
// CASE 3: If coefficient is in between and two coefficient is present
// Check if parenthesis, if yes openParenthesis = true;
// BEFORE 9x, find the index of last open parenthesis

// Count parenthesis occurences until index 0 
// currentParenthesis
// If currentParenthesis <= parenthesisTally 
//  gogogogogo


// If currentParenthesis === parenthesisTally  
// get parenthesis index
// then perform beforeMultiplication function
// cut 9x in constant
// 2*4* 
// if openParenthesis === true
// concatenate "("
// concatenate = +7*9x....


// Remove 9x in the string and concatenate 4*(2*5*(7+( then concatenate 9x
// Loop concatenate close parenthesis in the last index

// 

// closeParenthesis = true;, openParenthesis = false;

