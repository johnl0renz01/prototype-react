const equation = "23 + 2x = 13 - 26x";

// Use match() to extract the left-hand and right-hand sides of the equation
const sides = equation.match(/(.*) = (.*)/);


// Extract the left-hand and right-hand sides as separate strings
const lhs = sides[1];
const rhs = sides[2];

// Use match() to extract the coefficients and constants from the left-hand and right-hand sides
var lhsMatch = lhs.match(/(-?\d*)x\s*([+-]\s*\d+)?/);
var rhsMatch = rhs.match(/(-?\d*)x\s*([+-]\s*\d+)?/);

var fixed = false;
var lhsCoefficient = 0;
var lhsConstant = 0;
var rhsCoefficient = 0;
var rhsConstant = 0;

assignValues();
var count = 0

while(count < 3) {
    if (fixed) {
        break;
    }
    
    if (count === 0) {
        lhsMatch = lhs.match(/(-?\d*)\s*([+-]\s*\d+)?x/);
        rhsMatch = rhs.match(/(-?\d*)\s*([+-]\s*\d+)?x/);
    } else if (count === 1) {
        lhsMatch = lhs.match(/(-?\d*)x\s*([+-]\s*\d+)?/);
        rhsMatch = rhs.match(/(-?\d*)\s*([+-]\s*\d+)?x/);
    } else if (count === 2) {
        lhsMatch = lhs.match(/(-?\d*)\s*([+-]\s*\d+)?x/);
        rhsMatch = rhs.match(/(-?\d*)x\s*([+-]\s*\d+)?/);
    }
    
    assignValues();
    count++
}

// Extract the coefficients and constants from the matches
function assignValues () {
    let valuesArray = [];
    lhsCoefficient = lhsMatch[1] === "" ? 1 : parseInt(lhsMatch[1]);
    lhsConstant = lhsMatch[2] === undefined ? 0 : parseInt(lhsMatch[2].replace(/\s/g, ""));
    rhsCoefficient = rhsMatch[1] === "" ? 1 : parseInt(rhsMatch[1]);
    rhsConstant = rhsMatch[2] === undefined ? 0 : parseInt(rhsMatch[2].replace(/\s/g, ""));
    valuesArray.push(lhsCoefficient, lhsConstant, rhsCoefficient, rhsConstant);
    if (!(valuesArray.includes(0))) {
       fixed = true;
    }
}


// Log the results to the console
console.log("Left-hand side: ", lhsCoefficient, "x +", lhsConstant);
console.log("Right-hand side:", rhsCoefficient, "x +", rhsConstant);

// Solving Process
const coefficientDifference = rhsCoefficient - lhsCoefficient;
const constantDifference = lhsConstant - rhsConstant;
const x = constantDifference / coefficientDifference;

console.log(`The solution for ${equation} is: x = ${x}`);










////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// RANDOM



var equation = "2 * (3x - 5) = 3 * (4x + 2)";
equation = equation.replace(/\s/g,'');
// Separate the left-hand and right-hand side of the equation
const [lhs, rhs] = equation.split("=").map((side) => side.trim());

var lhsValues = "";
var lastIndex = 0;

console.log(lhs);
console.log(rhs);

console.log(lhs.match(/^[0-9]+.*[a-z]+$/));

for (let i = 1; i < lhs.length; i++) {
    console.log(lhs[i].match(/^[0-9]+$/));
    if (lhs[i].match(/^[0-9]+$/) === null){
        //console.log(i);
        
        
        if (lhs[i].match(/[()]/)) {
            lastIndex ++;
            continue;
        }
       
        let a = lhs.substring(lastIndex, i);
        lhsValues = lhsValues.concat(a);
        lastIndex = i + 1;
        
        if (lhs[i].match(/x/)) {
            lhsValues = lhsValues.concat("x");
            
        }
        //console.log(lhs);
        //console.log(lhsValues);
        
        try {
         
        }
        catch(err) {
          
        }
    }
}





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let x = 10;
let y = 20;
let text = "x * y * (x / y * (x + y / x))";
let text2 = "2x = 3"
let result = eval(text);
let result2 = eval(text2);
console.log(result);
console.log(result2);

///////////////////////

const equation = "23 + 2x = 13x - 26";

// Use match() to extract the left-hand and right-hand sides of the equation
const sides = equation.match(/(.*) = (.*)/);

console.log(sides);

// Extract the left-hand and right-hand sides as separate strings
const lhs = sides[1];
const rhs = sides[2];

// Use match() to extract the coefficients and constants from the left-hand and right-hand sides
var lhsMatch = lhs.match(/(-?\d*)x\s*([+-]\s*\d+)?/);
var rhsMatch = rhs.match(/(-?\d*)x\s*([+-]\s*\d+)?/);


console.log(lhs);
console.log(lhsMatch[1]);

// Extract the coefficients and constants from the matches
const lhsCoefficient = lhsMatch[1] === "" ? 1 : parseInt(lhsMatch[1]);
const lhsConstant = lhsMatch[2] === undefined ? 0 : parseInt(lhsMatch[2].replace(/\s/g, ""));
const rhsCoefficient = rhsMatch[1] === "" ? 1 : parseInt(rhsMatch[1]);
const rhsConstant = rhsMatch[2] === undefined ? 0 : parseInt(rhsMatch[2].replace(/\s/g, ""));

// Log the results to the console
console.log("Left-hand side: ", lhsCoefficient, "x +", lhsConstant);
console.log("Right-hand side:", rhsCoefficient, "x +", rhsConstant);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const equation = "23 + 2x = 13x - 26";

// Use match() to extract the left-hand and right-hand sides of the equation
const sides = equation.match(/(.*) = (.*)/);
console.log(sides);

// Extract the left-hand and right-hand sides as separate strings
const lhs = sides[1];
const rhs = sides[2];

// Use match() to extract the coefficients and constants from the left-hand and right-hand sides
var lhsMatch = lhs.match(/(-?\d*)x\s*([+-]\s*\d+)?/);
var rhsMatch = rhs.match(/(-?\d*)x\s*([+-]\s*\d+)?/);

var fixed = false;
var lhsCoefficient = 0;
var lhsConstant = 0;
var rhsCoefficient = 0;
var rhsConstant = 0;

assignValues();
var count = 0
/*
while(count < 3) {
    if (fixed) {
        break;
    }
    
    if (count === 0) {
        lhsMatch = lhs.match(/(-?\d*)\s*([+-]\s*\d+)?x/);
        rhsMatch = rhs.match(/(-?\d*)\s*([+-]\s*\d+)?x/);
    } else if (count === 1) {
        lhsMatch = lhs.match(/(-?\d*)x\s*([+-]\s*\d+)?/);
        rhsMatch = rhs.match(/(-?\d*)\s*([+-]\s*\d+)?x/);
    } else if (count === 2) {
        lhsMatch = lhs.match(/(-?\d*)\s*([+-]\s*\d+)?x/);
        rhsMatch = rhs.match(/(-?\d*)x\s*([+-]\s*\d+)?/);
    }
    
    assignValues();
    count++
}
*/

console.log(parseInt(lhsMatch[1]));

// Extract the coefficients and constants from the matches
function assignValues () {
    let valuesArray = [];
    lhsCoefficient = lhsMatch[1] === "" ? 1 : parseInt(lhsMatch[1]);
    lhsConstant = lhsMatch[2] === undefined ? 0 : parseInt(lhsMatch[2].replace(/\s/g, ""));
    rhsCoefficient = rhsMatch[1] === "" ? 1 : parseInt(rhsMatch[1]);
    rhsConstant = rhsMatch[2] === undefined ? 0 : parseInt(rhsMatch[2].replace(/\s/g, ""));
    valuesArray.push(lhsCoefficient, lhsConstant, rhsCoefficient, rhsConstant);
    if (!(valuesArray.includes(0))) {
       fixed = true;
    }
}


// Log the results to the console
console.log("Left-hand side: ", lhsCoefficient, "x +", lhsConstant);
console.log("Right-hand side:", rhsCoefficient, "x +", rhsConstant);

// Solving Process
const coefficientDifference = rhsCoefficient - lhsCoefficient;
const constantDifference = lhsConstant - rhsConstant;
const x = constantDifference / coefficientDifference;

console.log(`The solution for ${equation} is: x = ${x}`);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Define the equation
const equation = "16x + 3 = 3x - 2";

// Remove all spaces in the equation
const equationNoSpaces = equation.replace(/\s/g, "");

console.log("equation no spaces: " + equationNoSpaces);

// Extract the coefficients and constants from the equation
const coefficientLeft = parseInt(equationNoSpaces.match(/^-?\d+/)[0]);
console.log("coefficient left: " + coefficientLeft);

const variableLeft = equationNoSpaces.match(/[a-zA-Z]/)[0];
console.log("variable left: " + variableLeft);

const constantLeft = parseInt(equationNoSpaces.match(/[-+]\d+$/)[0]);
console.log("constantLeft: " + constantLeft);

const coefficientRight = parseInt(equationNoSpaces.match(/[-+]\s?\d+(?!.[-+]\s?\d+)/)[0]);
console.log("coefficientRight: " + coefficientRight);


const variableRight = equationNoSpaces.match(/[a-zA-Z]/)[0];
console.log("variableRight: " + variableRight);


const constantRight = parseInt(equationNoSpaces.match(/[-+]\s?\d+$/)[0]);
console.log("constantRight: " + constantRight);


// Move all variable terms to one side of the equation
const coefficientDifference = coefficientRight - coefficientLeft;
const constantDifference = constantLeft - constantRight;

// Solve for the variable x
const x = constantDifference / coefficientDifference;


console.log("constantDifference: " + constantDifference);
console.log("coefficientDifference: " + coefficientDifference);

console.log(`The solution for ${equation} is: x = ${x}`);




//////////////////////////////////////////LAAAAAAAAAATTTTTTTTTTTTEEEEEEEEESSSSSSSSSSTTTTTTTTTTTTTTTTTT///////////////////////////

var equation = "23 + 552 - 56 - 2x + 79 = 13x - 26";
equation = equation.replace(/\s/g,'');
// Separate the left-hand and right-hand side of the equation
var [lhs, rhs] = equation.split("=").map((side) => side.trim());

lhs = lhs.concat("=");
rhs = rhs.concat("=");


var lhsConstant = "";
var lastIndex = 0;

console.log("lhs: " + lhs);
console.log("rhs: " + rhs);

var isCoefficient = false;
var lhsCoefficient = 0;
var index = 0;

var lhsFinalCoefficient = "";
var lhsFinalConstant = "";


// FOR LHS
for (let i = 1; i < lhs.length; i++) {
    if(!isCoefficient) {
        isCoefficient = true;
        sliceIndex = lastIndex;
    }
    if (lhs[i].match(/^[0-9]+$/) === null){ // CHECK IF symbol is present
    
        
        if (lhs[i].match(/[\+\-\*\/]/)){    
            replaceOperators();
        }
    
        if (lhs[i].match(/=/)) {
            replaceOperators();
            lhsFinalConstant = lhsFinalConstant.replace('=','');
            lhsFinalCoefficient = lhsFinalCoefficient.replace('=','');
            console.log("CONSTANT FINAL: " + lhsFinalConstant);
            console.log("COEFFICIENT FINAL: " + lhsFinalCoefficient);
            break;
        }
        
            isCoefficient = false;
            index++;
            lastIndex = i + 1;
        
        if (lhs[i].match(/[a-z]/)) {
            lastIndex++;
            
            let coefficientSymbol = sliceIndex - 1;
            if (coefficientSymbol > 0) {
                lhsFinalCoefficient = lhs.slice(coefficientSymbol, (coefficientSymbol + 1));
            }
            
            lhsFinalCoefficient = lhsFinalCoefficient.concat((lhs.slice(sliceIndex, lastIndex)));
            let coefficient = lhsFinalCoefficient.slice(-1);
            lhsFinalCoefficient = lhsFinalCoefficient.replace(coefficient,'');
            
            
            
            lhsFinalConstant = lhs.replace(lhsFinalCoefficient,'');
        }
        

        
    }
}


function replaceOperators () {
    let coefficient = "";
    
    if (lhsFinalCoefficient.slice(-1).match(/[a-z]/)) {
        coefficient = lhsFinalCoefficient.slice(-1);
    } else if (lhsFinalCoefficient.slice(-1).match(/[+]/)) {
        lhsFinalCoefficient = lhsFinalCoefficient.replace('+','');
    } else if (lhsFinalCoefficient.slice(-1).match(/[-]/)) {
        lhsFinalCoefficient = lhsFinalCoefficient.replace('-','');
    } else if (lhsFinalCoefficient.slice(-1).match(/[*]/)) {
        lhsFinalCoefficient = lhsFinalCoefficient.replace('*','');
    } else if (lhsFinalCoefficient.slice(-1).match(/[/]/)) {
        lhsFinalCoefficient = lhsFinalCoefficient.replace('/','');
    }
    
    lhsFinalCoefficient = lhsFinalCoefficient.replace(coefficient,'');
}


/////////////////////////UPDATEEEEEEEEDDDDDDDD PWEDEEEEEEEEE///////////////////////////
var equation = "3 * 16x *2 + 3 * 10 = -2 * 3x * 7 - 2 * 52";
equation = equation.replace(/\s/g,'');
// Separate the left-hand and right-hand side of the equation
var [lhs, rhs] = equation.split("=").map((side) => side.trim());

lhs = lhs.concat("=");
rhs = rhs.concat("=");

var checkLHS = false;
var checkRHS = false;

//Positive symbol for the first digit if not negative
function checkSymbol (currentString) {
    let tempString = currentString;
    if (currentString[0] != "-") {
        currentString = "+";
        currentString = currentString.concat(tempString);
        if (checkLHS) {
            lhs = currentString;
            checkLHS = false;
        } else if (checkRHS) {
            rhs = currentString;
            checkRHS = false;
        }
    }
}

checkLHS = true;
checkSymbol(lhs);

checkRHS = true;
checkSymbol(rhs);


console.log("lhs: " + lhs);
console.log("rhs: " + rhs);
console.log("************");

var lhsFinalCoefficient = "";
var lhsFinalConstant = "";
var rhsFinalCoefficient = "";
var rhsFinalConstant = "";

var computeLHS = false;
var computeRHS = false;

computeLHS = true;
getValues(lhs, lhsFinalCoefficient, lhsFinalConstant);


console.log("lhs coefficient: " + lhsFinalCoefficient);
console.log("lhs constant: " + lhsFinalConstant);



// FOR LHS
function getValues (currentString, currentCoefficient, currentConstant) {
    //Multiplication or Division Symbol Index
    var MDindex = 0;
    var coefficientIndex = currentString.length;
    var MDsymbol = false;
    var MDsymbolAfter = false;
    var symbolType = '';
    
    var isCoefficient = false;
    var sliceIndex = 0;
    var index = 0;
    var lastIndex = 0;
    
    // Check if equal symbol is in first set of digit
    var equalOccurence = true;
    
    // Check if negative symbol is in first set of digit
    var negativeCoefficient = false;
    
    // Temporary FOR MULTIPLICATION '*'
    var tempCoefficient = ""; 
    
    for (let i = 1; i < currentString.length; i++) {
        if(!isCoefficient) {
            isCoefficient = true;
            sliceIndex = lastIndex;
        }
    
            
        if (currentString[i].match(/^[0-9]+$/) === null){ // CHECK IF symbol is present
            if (currentString[i].match(/[\+\-\*\/]/)){   
                console.log(currentString[i]);
                
                if (currentString[i].match (/[*]/) && i < coefficientIndex) {
                    MDindex = i;
                } 
                equalOccurence = false;
                replaceOperators();
            }
        
            
            if (currentString[i].match(/=/)) {
                if (equalOccurence) {
                    currentConstant = currentString.replace('=','');
                    equalOccurence = false;
                }
                console.log(currentConstant);
                console.log(currentCoefficient);
                replaceOperators();
                currentConstant = currentConstant.replace('=','');
                currentCoefficient = currentCoefficient.replace('=','');
                break;
            }
            
                isCoefficient = false;
                index++;
                lastIndex = i + 1;
            
            if (currentString[i].match(/[a-z]/)) {
                if (currentString[sliceIndex] === '-' && !negativeCoefficient) {
                    console.log("IS NEGATIVE!! ");
                    negativeCoefficient = true;
                }
                
                coefficientIndex = i;
                equalOccurence = false;
                lastIndex++;
                
                let coefficientSymbol = sliceIndex - 1;
                /*
                console.log("Slice Indeex: " + sliceIndex);
                console.log("Last Inddex: " + lastIndex);
                console.log("Coeff SYMBOL: " + coefficientSymbol);
                console.log("Coeff SYMBOLgdgd: " + (coefficientSymbol + 1));
                */
                if (coefficientSymbol > 0) {
                    currentCoefficient = currentString.slice(coefficientSymbol, (coefficientSymbol + 1));
                }
                
                
                currentCoefficient = currentCoefficient.concat((currentString.slice(sliceIndex, lastIndex)));
                console.log("CURRENT COEFFIICIENT: " + currentCoefficient);
                
                let coefficient = currentCoefficient.slice(-1);
    
                currentCoefficient = currentCoefficient.replace(/.$/,'');
                console.log("CURRENT COEFFIICIENT: " + currentCoefficient);
                
                currentConstant = currentString.replace(currentCoefficient,'');
                console.log("CURRENT CONSTANT: " + currentConstant);
                
            }
        }
        
       
        
        if (currentString[i].match (/[*]/) && (coefficientIndex + 1) === i) {
            MDsymbolAfter = true;
        }
    }
    
    if (MDsymbolAfter) {
        for (let j = (coefficientIndex + 1); j < currentString.length; j++) {
            if (currentString[j].match(/[\+\-\/\=]/)) {
                console.log("J index:  " + j);
                console.log("coeff Index " + coefficientIndex);
                
                console.log("BEFORE curr coeff: " + currentCoefficient );
                tempCoefficient = currentString.slice((coefficientIndex + 1), (j));
                console.log("temp coeff " + tempCoefficient);
                currentConstant = currentConstant.replace(tempCoefficient,'');
                
                break;
            } 
            
        }
        
        if (symbolType = '*') {
            currentCoefficient = currentCoefficient.concat(tempCoefficient);
            console.log("AFTER curr coeff: " + currentCoefficient );
        }
    }
    
    
    
    console.log("2323: " + MDsymbol);
    
    
    
    
    
    function replaceOperators () {
        //console.log("CURREEEEEEEEEEEEEEEEENTT: " + currentCoefficient);
        let coefficientLetter = "";
        if (currentCoefficient.slice(-1).match(/[a-z]/)) {
            coefficientLetter = currentCoefficient.slice(-1);
        } else if (currentCoefficient.slice(-1).match(/[+]/)) {
            currentCoefficient = currentCoefficient.replace('+','');
        } else if (currentCoefficient.slice(-1).match(/[-]/)) {
            currentCoefficient = currentCoefficient.replace('-','');
        } else if (currentCoefficient.slice(-1).match(/[*]/)) {
            currentCoefficient = currentCoefficient.replace('*','');
        } else if (currentCoefficient.slice(-1).match(/[/]/)) {
            MDsymbol = true;
            symbolType = '/';
            currentCoefficient = currentCoefficient.replace('/','');
        }
        
        if (currentCoefficient.slice(0).match(/[*]/)) {
            MDsymbol = true;
            symbolType = '*';
            currentCoefficient = currentCoefficient.replace('*','');
        } else if (currentCoefficient.slice(0).match(/[/]/)) {
            MDsymbol = true;
            symbolType = '/';
            currentCoefficient = currentCoefficient.replace('/','');
        }
        
        currentCoefficient = currentCoefficient.replace(coefficientLetter,'');
    }
    
    // FOR MULTIPLICATION
    tempCoefficient = "";
    
     
    if (MDsymbol) {
        for (let j = MDindex; j >= 0; j--) {
            if (currentString[j].match(/[\+\-\/]/)) {
                tempCoefficient = currentString.slice(j, (MDindex));
                currentConstant = currentConstant.replace(tempCoefficient,'');
                break;
            } 
        }
        if (symbolType = '*') {
            tempCoefficient = tempCoefficient.concat('*');
            tempCoefficient = tempCoefficient.concat(currentCoefficient);
            currentCoefficient = tempCoefficient;
        }
    }

    if (computeLHS) {
        if (negativeCoefficient) {
            if (currentCoefficient > 0) {
                lhsFinalCoefficient = currentCoefficient * -1;
            } else {
                lhsFinalCoefficient = currentCoefficient;
            }
        } else {
            lhsFinalCoefficient = eval(currentCoefficient);
        }
        
        lhsFinalConstant = currentConstant;
        computeLHS = false;
    } else if (computeRHS) {
        if (negativeCoefficient) {
            if (currentCoefficient > 0) {
                rhsFinalCoefficient = currentCoefficient * -1;
            } else {
                rhsFinalCoefficient = currentCoefficient;
            }
        } else {
            rhsFinalCoefficient = eval(currentCoefficient);
        }
        rhsFinalConstant = currentConstant;
        computeRHS = false;
    }
    
}

computeRHS = true;
getValues(rhs, rhsFinalCoefficient, rhsFinalConstant);
console.log("rhs coefficient: " + rhsFinalCoefficient);
console.log("rhs constant: " + rhsFinalConstant);



// Solving Process
console.log("*************************");
lhsFinalConstant = eval(lhsFinalConstant);
rhsFinalConstant = eval(rhsFinalConstant);

if (lhsFinalCoefficient === undefined) {
    lhsFinalCoefficient = 0;
}

if (rhsFinalCoefficient === undefined) {
    rhsFinalCoefficient = 0;
}

if (lhsFinalConstant === undefined) {
    lhsFinalConstant = 0;
}

if (rhsFinalConstant === undefined) {
    rhsFinalConstant = 0;
}

console.log("lhs final constant: " + lhsFinalConstant);
console.log("rhs final constant: " + rhsFinalConstant);

console.log("*************************");


const coefficientDifference = rhsFinalCoefficient - lhsFinalCoefficient;
const constantDifference = lhsFinalConstant - rhsFinalConstant;
var x = constantDifference / coefficientDifference;

//x = Math.round( x * 100 + Number.EPSILON ) / 100
console.log(`The solution for ${equation} is: x = ${x}`);


    

/////////////////////////////////////////////////////////////////////////////////////////////////////////EXPERIEMENT 1111111111///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
var equation = "3 + 16x * 6 * 7 + 3x * 2= -52";
equation = equation.replace(/\s/g,'');
// Separate the left-hand and right-hand side of the equation
var [lhs, rhs] = equation.split("=").map((side) => side.trim());

lhs = lhs.concat("=");
rhs = rhs.concat("=");

var checkLHS = false;
var checkRHS = false;

//Positive symbol for the first digit if not negative
function checkSymbol (currentString) {
    let tempString = currentString;
    if (currentString[0] != "-") {
        currentString = "+";
        currentString = currentString.concat(tempString);
        if (checkLHS) {
            lhs = currentString;
            checkLHS = false;
        } else if (checkRHS) {
            rhs = currentString;
            checkRHS = false;
        }
    }
}

checkLHS = true;
checkSymbol(lhs);

checkRHS = true;
checkSymbol(rhs);


console.log("lhs: " + lhs);
console.log("rhs: " + rhs);
console.log("************");

var lhsFinalCoefficient = "";
var lhsFinalConstant = "";
var rhsFinalCoefficient = "";
var rhsFinalConstant = "";

var computeLHS = false;
var computeRHS = false;

computeLHS = true;
getValues(lhs, lhsFinalCoefficient, lhsFinalConstant);


console.log("lhs coefficient: " + lhsFinalCoefficient);
console.log("lhs constant: " + lhsFinalConstant);



// FOR LHS
function getValues (currentString, currentCoefficient, currentConstant) {
    //Multiplication or Division Symbol Index
    var MDindex = 0;
    var coefficientIndex = currentString.length;
    var resetCoefficientIndex = false;
    var MDsymbol = false;
    var MDsymbolAfter = false;
    var symbolType = '';
    
    var isCoefficient = false;
    var sliceIndex = 0;
    var index = 0;
    var lastIndex = 0;
    
    // Check if equal symbol is in first set of digit
    var equalOccurence = true;
    
    // Check if negative symbol is in first set of digit
    var negativeCoefficient = false;
    
    // Temporary FOR MULTIPLICATION '*'
    var tempCoefficient = ""; 
    var coefficientTerm = "";
    
    var coefficientString = "";
    var coefficientQuantity = 0;
    
    // value of i, passed to count variable
    var count = 0;
    
    for (let i = 1; i < currentString.length; i++) {
        count = i;
        
        if(!isCoefficient) {
            isCoefficient = true;
            sliceIndex = lastIndex;
        }
    
        
            
        if (currentString[i].match(/^[0-9]+$/) === null){ // CHECK IF symbol is present
        
            if (currentString[i].match(/[\+\-\*\/]/)){   
                //!@#$% console.log("63479063434906437063406903467904390:   " + currentString[i]);
                if (resetCoefficientIndex && currentString[i-1].match(/[*]/) === null) {
                    coefficientIndex = currentString.length;
                    resetCoefficientIndex = false;
                }
        
        
                if (currentString[i].match(/[*]/) && i < coefficientIndex) {
                    
                    MDindex = i;
                    //!@#$% console.log("THE MD INDEX IS @#@#@#@#@: " + MDindex);
                   
                }
                equalOccurence = false;
                //!@#$% console.log("Checking COEFFICIENT: " + currentCoefficient);
                replaceOperators();
                //!@#$% console.log("Checking COEFFICIENT 2222: " + currentCoefficient);
            }
        
            
            if (currentString[i].match(/=/)) {
                if (equalOccurence) {
                    currentConstant = currentString.replace('=','');
                }
                console.log(currentConstant);
                console.log(currentCoefficient);
                //replaceOperators();
                currentConstant = currentConstant.replace('=','');
                currentCoefficient = currentCoefficient.replace('=','');
            }
            
            
            if (!equalOccurence) {
                isCoefficient = false;
                index++;
                lastIndex = i + 1;
            }
            
            if (currentString[i].match(/[a-z]/)) {
                if (currentString[sliceIndex] === '-' && !negativeCoefficient) {
                    console.log("IS NEGATIVE!! ");
                    negativeCoefficient = true;
                }
                
                coefficientIndex = i;
                coefficientQuantity ++;
                equalOccurence = false;
                
                
                let coefficientFirstIndex = sliceIndex - 1;
                
                 /*
                console.log("Slice Indeex: " + sliceIndex);
                console.log("Last Inddex: " + lastIndex);
                console.log("Coeff SYMBOL: " + coefficientFirstIndex);
                console.log("Coeff SYMBOLgdgd: " + (coefficientFirstIndex + 1));
                
               
                if (coefficientFirstIndex > 0) {
                    currentCoefficient = currentCoefficient.concat(currentString.slice(coefficientFirstIndex, (coefficientFirstIndex + 1)));
                }
                */
                
                // CURRENT COEFFICIENT EVALUATED
                coefficientTerm = currentString.slice(coefficientFirstIndex, lastIndex);
                //!@#$% console.log("ZXC: " + coefficientTerm);
                coefficientString = coefficientString.concat(coefficientTerm);
                //!@#$% console.log("QWE: " + coefficientString);
                
                //!@#$% console.log("FIRST CURRENT COEFFIICIENT: " + currentCoefficient);
                currentCoefficient = currentCoefficient.concat((currentString.slice(coefficientFirstIndex, lastIndex)));
                
                let coefficient = currentCoefficient.slice(-1);
                
                //!@#$% console.log("CURRENT COEFFIICIENT: " + currentCoefficient);
                
                if (currentConstant === "") {
                    currentConstant = currentString.replace(coefficientTerm,"");
                    currentConstant = currentConstant.replace("=","");
                } else {
                    currentConstant = currentConstant.replace(coefficientTerm,"");
                    replaceOperators();
                }
 
                //!@#$% console.log("CURRENT CONSTANT: " + currentConstant);
    
                currentCoefficient = currentCoefficient.replace(coefficient,"");
                //!@#$% console.log("LAST CURRENT COEFFIICIENT: " + currentCoefficient);
                console.log
                // PROCEED TO NEXT INDEX, AFTER coefficient
                lastIndex++;
                
            }
        }
        
        /*
         console.log("BORDER=======");
       console.log("IM IN MDSYMBOL AFTER'''''''!!!!asdsada:" + currentString[i]);
       console.log("IM IN MDSYMBOL AFTER'''''''!!!! I:" + i);
      console.log("IM IN MDSYMBOL AFTER'''''''!!!! coefficientIndex:" + (coefficientIndex + 1));
       console.log("BORDER=======");
      */
        if ((coefficientIndex + 1) === i) {
            //!@#$% console.log("ARSJFHSAJKFSJ RAF ARFA RAF ARFARAF=======");
            if (currentString[i].match(/[*]/)) {
                MDsymbolAfter = true;
            } else if (currentString[i].match(/[\+\-\*\/]/)) {
                //!@#$% console.log("RESET RESET RESET RESET RESET RESET=======");
                resetCoefficientIndex = true;
            }
        }
       
        
        
        if (MDsymbolAfter) {
            //!@#$% console.log("IM IN MDSYMBOL AFTER'''''''!!!!")
            for (let j = (coefficientIndex + 1); j < currentString.length; j++) {
                if (currentString[j].match(/[\+\-\/\=]/)) {
                    //!@#$% console.log("J index:  " + j);
                    //!@#$% console.log("coeff Index " + coefficientIndex);
                    
                    //!@#$% console.log("BEFORE curr coeff: " + currentCoefficient );
                    tempCoefficient = currentString.slice((coefficientIndex + 1), (j));
                    //!@#$% console.log("temp coeff " + tempCoefficient);
                    currentConstant = currentConstant.replace(tempCoefficient,'');
                    break;
                } 
                
            }
            
            if (symbolType = '*') {
                
                currentCoefficient = currentCoefficient.concat(tempCoefficient);
                console.log("AFTER curr coeff: " + currentCoefficient );
            }
            
             //coefficientIndex = currentString.length;
        }
        
        tempCoefficient = "";
    
     
        
        if (MDsymbol && MDindex != 0) {
            /*
            console.log(" ");
            console.log(" ");
            console.log("IM IN MDSYMBOL!!!!");
            console.log(" ");
            console.log(" ");
            console.log("MDindex :" + MDindex);
             console.log("currentCoefficient: " + currentCoefficient );
            */
            for (let j = MDindex; j >= 0; j--) {
                if (currentString[j].match(/[\+\-\/]/)) {
                    tempCoefficient = currentString.slice(j, (MDindex));
                    currentConstant = currentConstant.replace(tempCoefficient,'');
                    
                    //!@#$% console.log("tempCoefficientASDAD: " + tempCoefficient );
                    //!@#$% console.log("currentConstantQWEQWEQ: " + currentConstant );
                    break;
                } 
            }
            if (symbolType = '*') {
                var isDone = false;
                //!@#$% console.log("currentCoefficient: " + currentCoefficient );
                //!@#$% console.log("tempCoefficient: " + tempCoefficient );
                let coefficient = coefficientTerm.slice(-1);
                let coeffTerm = coefficientTerm.replace(coefficient, "");
                
                if (MDsymbolAfter) {
                    //!@#$% console.log("MDAFTER SYMBOL:  " + MDsymbolAfter);
                    if (coefficientQuantity === 1) {
                        tempCoefficient = tempCoefficient.concat(currentCoefficient);
                    } else {
                        isDone = true;
                    }
                    //!@#$% console.log("tempCoefficient MDSYMBOL AFTER: " + tempCoefficient );
                } else {
                    //!@#$% console.log("MDAFTER SYMBOL:  " + MDsymbolAfter);
                    if (currentCoefficient.includes(tempCoefficient)) {
                        isDone = true;
                    } else {
                        tempCoefficient = tempCoefficient.concat(coeffTerm);
                    }
                }
                
                if (!isDone) {
                    //!@#$% console.log("tempCoefficient UPDATED: " + tempCoefficient );
                    //!@#$%  console.log("coeffTerm : " + coeffTerm );
                    //!@#$%  console.log("currentCoefficient: " + currentCoefficient );
                    let coefficientIndex = currentCoefficient.lastIndexOf(coeffTerm);
                    //!@#$% console.log("coefficientIndex : " + coefficientIndex );
                    if (coefficientIndex === 1) {
                        coefficientIndex = 0;
                    }
                    //!@#$% console.log("coefficientIndex : " + coefficientIndex );
                    currentCoefficient = currentCoefficient.slice(0, coefficientIndex);
                    currentCoefficient = currentCoefficient.concat(tempCoefficient);
                    //!@#$% console.log("currentCoefficient: " + currentCoefficient );
                }
                
            }
            MDsymbol = false;
        }
        
        MDsymbolAfter = false;
       
        
    }
    
    
    
    
    
    console.log("MD SYMBOL IS : " + MDsymbol);
    
    
    
    
    
    function replaceOperators () {
        //console.log("CURREEEEEEEEEEEEEEEEENTT: " + currentCoefficient);
        let coefficientLetter = "";
        if (currentCoefficient.slice(-1).match(/[a-z]/)) {
            coefficientLetter = currentCoefficient.slice(-1);
        } else if (currentCoefficient.slice(-1).match(/[+]/)) {
            currentCoefficient = currentCoefficient.replace('+','');
        } else if (currentCoefficient.slice(-1).match(/[-]/)) {
            currentCoefficient = currentCoefficient.replace('-','');
        } else if (currentCoefficient.slice(-1).match(/[*]/)) {
            currentCoefficient = currentCoefficient.replace('*','');
        } else if (currentCoefficient.slice(-1).match(/[/]/)) {
            MDsymbol = true;
            symbolType = '/';
            currentCoefficient = currentCoefficient.replace('/','');
        }
        
        //currentString[count - 1] != coefficientLetter && 
        //!@#$% console.log("COEFFICIENT  LETTER: " + currentString[count - 1]);
        if (coefficientTerm[0] === "*") {
            //!@#$% console.log("ANG PASKO AY SUMAPIT");
            //!@#$% console.log("FGASGASGA  count: " + (count - 1));
            MDsymbol = true;
            symbolType = '*';
        } else if (coefficientTerm[0] === "/") {
            MDsymbol = true;
            symbolType = '/';
            currentCoefficient = currentCoefficient.replace('/','');
        }
        
        currentCoefficient = currentCoefficient.replace(coefficientLetter,'');
        currentConstant = currentConstant.replace(coefficientLetter,'');
    }
    
    // FOR MULTIPLICATION
    

    if (computeLHS) {
        if (negativeCoefficient) {
            if (currentCoefficient > 0) {
                lhsFinalCoefficient = currentCoefficient * -1;
            } else {
                lhsFinalCoefficient = currentCoefficient;
            }
        } else {
            lhsFinalCoefficient = eval(currentCoefficient);
        }
        
        lhsFinalConstant = currentConstant;
        computeLHS = false;
    } else if (computeRHS) {
        if (negativeCoefficient) {
            if (currentCoefficient > 0) {
                rhsFinalCoefficient = currentCoefficient * -1;
            } else {
                rhsFinalCoefficient = currentCoefficient;
            }
        } else {
            rhsFinalCoefficient = eval(currentCoefficient);
        }
        rhsFinalConstant = currentConstant;
        computeRHS = false;
    }
    
}

computeRHS = true;
getValues(rhs, rhsFinalCoefficient, rhsFinalConstant);
console.log("rhs coefficient: " + rhsFinalCoefficient);
console.log("rhs constant: " + rhsFinalConstant);



// Solving Process
console.log("*************************");
lhsFinalConstant = eval(lhsFinalConstant);
rhsFinalConstant = eval(rhsFinalConstant);

if (lhsFinalCoefficient === undefined) {
    lhsFinalCoefficient = 0;
}

if (rhsFinalCoefficient === undefined) {
    rhsFinalCoefficient = 0;
}

if (lhsFinalConstant === undefined) {
    lhsFinalConstant = 0;
}

if (rhsFinalConstant === undefined) {
    rhsFinalConstant = 0;
}

console.log("lhs final constant: " + lhsFinalConstant);
console.log("rhs final constant: " + rhsFinalConstant);

console.log("*************************");


const coefficientDifference = rhsFinalCoefficient - lhsFinalCoefficient;
const constantDifference = lhsFinalConstant - rhsFinalConstant;
var x = constantDifference / coefficientDifference;

//x = Math.round( x * 100 + Number.EPSILON ) / 100
console.log(`The solution for ${equation} is: x = ${x}`);


    

/////////////////////////////////////////////////////////////////////////////////////////////////////////EXPERIEMENT 22222222222222222222222222222222222///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var equation = "2 + 3 * 8 * 16x * 3 * 6 + 4 * 7 * 2 * 3x * 12= -52";
equation = equation.replace(/\s/g,'');
// Separate the left-hand and right-hand side of the equation
var [lhs, rhs] = equation.split("=").map((side) => side.trim());

lhs = lhs.concat("=");
rhs = rhs.concat("=");

var checkLHS = false;
var checkRHS = false;

//Positive symbol for the first digit if not negative
function checkSymbol (currentString) {
    let tempString = currentString;
    if (currentString[0] != "-") {
        currentString = "+";
        currentString = currentString.concat(tempString);
        if (checkLHS) {
            lhs = currentString;
            checkLHS = false;
        } else if (checkRHS) {
            rhs = currentString;
            checkRHS = false;
        }
    }
}

checkLHS = true;
checkSymbol(lhs);

checkRHS = true;
checkSymbol(rhs);


console.log("lhs: " + lhs);
console.log("rhs: " + rhs);
console.log("************");

var lhsFinalCoefficient = "";
var lhsFinalConstant = "";
var rhsFinalCoefficient = "";
var rhsFinalConstant = "";

var computeLHS = false;
var computeRHS = false;

computeLHS = true;
getValues(lhs, lhsFinalCoefficient, lhsFinalConstant);


console.log("lhs coefficient: " + lhsFinalCoefficient);
console.log("lhs constant: " + lhsFinalConstant);



// FOR LHS
function getValues (currentString, currentCoefficient, currentConstant) {
    //Multiplication or Division Symbol Index
    var MDindex = 0;
    var coefficientIndex = currentString.length;
    var resetCoefficientIndex = false;
    var MDsymbol = false;
    var MDsymbolAfter = false;
    var symbolType = '';
    
    var isCoefficient = false;
    var sliceIndex = 0;
    var index = 0;
    var lastIndex = 0;
    
    // Check if equal symbol is in first set of digit
    var equalOccurence = true;
    
    // Check if negative symbol is in first set of digit
    var negativeCoefficient = false;
    
    // Temporary FOR MULTIPLICATION '*'
    var tempCoefficient = ""; 
    var coefficientTerm = "";
    
    var coefficientString = "";
    var coefficientQuantity = 0;
    var evaluateCoefficient = false;
    
    // value of i, passed to count variable
    var count = 0;
    var firstCoefficientFinish = false;
    
    for (let i = 1; i < currentString.length; i++) {
        count = i;
        
        if(!isCoefficient) {
            isCoefficient = true;
            sliceIndex = lastIndex;
        }
    
        
            
        if (currentString[i].match(/^[0-9]+$/) === null){ // CHECK IF symbol is present
        
            if (currentString[i].match(/[\+\-\*\/]/)){   
                 console.log("63479063434906437063406903467904390:   " + currentString[i]);
                if (resetCoefficientIndex && currentString[i-1].match(/[*]/) === null) {
                    coefficientIndex = currentString.length;
                    resetCoefficientIndex = false;
                } else if (resetCoefficientIndex) {
                    coefficientIndex = currentString.length;
                    resetCoefficientIndex = false;
                }

                console.log(": ");
                console.log("I ^@^@^@: " + (i));
                console.log("Current COEFF ^@^@^@: " + (coefficientIndex));
                console.log(": ");
                if (currentString[i].match(/[*]/) && i < coefficientIndex) {
                    MDindex = i;
                     console.log("THE MD INDEX IS @#@#@#@#@: " + MDindex);
                   
                }
                equalOccurence = false;
                 console.log("Checking COEFFICIENT: " + currentCoefficient);
                replaceOperators();
                 console.log("Checking COEFFICIENT 2222: " + currentCoefficient);
            }
        
            
            if (currentString[i].match(/=/)) {
                if (equalOccurence) {
                    currentConstant = currentString.replace('=','');
                }
                console.log(currentConstant);
                console.log(currentCoefficient);
                //replaceOperators();
                currentConstant = currentConstant.replace('=','');
                currentCoefficient = currentCoefficient.replace('=','');
            }
            
            
            if (!equalOccurence) {
                isCoefficient = false;
                index++;
                lastIndex = i + 1;
            }
            
            if (currentString[i].match(/[a-z]/)) {
                console.log("ETO PASOK SA BANGA!!!!!!!!!!!!!!!!!!");
                if (currentString[sliceIndex] === '-' && !negativeCoefficient) {
                    console.log("IS NEGATIVE!! ");
                    negativeCoefficient = true;
                }
                
                coefficientIndex = i;
                coefficientQuantity ++;
                evaluateCoefficient = true;
                equalOccurence = false;
                
                
                let coefficientFirstIndex = sliceIndex - 1;
                
                 /*
                console.log("Slice Indeex: " + sliceIndex);
                console.log("Last Inddex: " + lastIndex);
                console.log("Coeff SYMBOL: " + coefficientFirstIndex);
                console.log("Coeff SYMBOLgdgd: " + (coefficientFirstIndex + 1));
                
               
                if (coefficientFirstIndex > 0) {
                    currentCoefficient = currentCoefficient.concat(currentString.slice(coefficientFirstIndex, (coefficientFirstIndex + 1)));
                }
                */
                
                // CURRENT COEFFICIENT EVALUATED
                coefficientTerm = currentString.slice(coefficientFirstIndex, lastIndex);
                 console.log("ZXC: " + coefficientTerm);
                coefficientString = coefficientString.concat(coefficientTerm);
                 console.log("QWE: " + coefficientString);
                
                 console.log("FIRST CURRENT COEFFIICIENT: " + currentCoefficient);
                currentCoefficient = currentCoefficient.concat((currentString.slice(coefficientFirstIndex, lastIndex)));
                
                let coefficient = currentCoefficient.slice(-1);
                
                 console.log("CURRENT COEFFIICIENT: " + currentCoefficient);
                
                if (currentConstant === "") {
                    currentConstant = currentString.replace(coefficientTerm,"");
                    currentConstant = currentConstant.replace("=","");
                } else {
                    currentConstant = currentConstant.replace(coefficientTerm,"");
                }
 
                 console.log("CURRENT CONSTANT: " + currentConstant);
    
                currentCoefficient = currentCoefficient.replace(coefficient,"");
                 console.log("LAST CURRENT COEFFIICIENT: " + currentCoefficient);
                console.log
                // PROCEED TO NEXT INDEX, AFTER coefficient
                lastIndex++;
                replaceOperators();
                
            }
        }
        
        /*
         console.log("BORDER=======");
       console.log("IM IN MDSYMBOL AFTER'''''''!!!!asdsada:" + currentString[i]);
       console.log("IM IN MDSYMBOL AFTER'''''''!!!! I:" + i);
      console.log("IM IN MDSYMBOL AFTER'''''''!!!! coefficientIndex:" + (coefficientIndex + 1));
       console.log("BORDER=======");
      */
        if ((coefficientIndex + 1) === i) {
            resetCoefficientIndex = true
             console.log("ARSJFHSAJKFSJ RAF ARFA RAF ARFARAF=======");
            if (currentString[i].match(/[*]/)) {
                MDsymbolAfter = true;
                
            } else if (currentString[i].match(/[\+\-\/]/)) {
                 console.log("RESET RESET RESET RESET RESET RESET=======");
                
                
                if (coefficientQuantity === 1) {
                    firstCoefficientFinish = true;
                }
                
            }
        }
       
        
        
        if (MDsymbolAfter) {
             console.log("IM IN MDSYMBOL AFTER'''''''!!!!")
            for (let j = (coefficientIndex + 1); j < currentString.length; j++) {
                if (currentString[j].match(/[\+\-\/\=]/)) {
                     console.log("J index:  " + j);
                     console.log("coeff Index " + coefficientIndex);
                    
                     console.log("BEFORE curr coeff: " + currentCoefficient );
                    tempCoefficient = currentString.slice((coefficientIndex + 1), (j));
                     console.log("temp coeff " + tempCoefficient);
                    currentConstant = currentConstant.replace(tempCoefficient,'');
                    break;
                } 
                
            }
            
            if (symbolType = '*') {
                
                currentCoefficient = currentCoefficient.concat(tempCoefficient);
                console.log("AFTER curr coeff: " + currentCoefficient );
            }
            
            
            if (coefficientQuantity === 1) {
                firstCoefficientFinish = true;
            }
            
             //coefficientIndex = currentString.length;
        }
        console.log("Current COEFF ^@^@^@: " + (coefficientIndex));
        tempCoefficient = "";
    
    /*
        console.log("evaluateCoefficient :+_+_+_+_+: " + evaluateCoefficient);
        console.log("MDsymbol :+_+_+_+_+: " + MDsymbol);
        console.log("MDindex :+_+_+_+_+: " + MDindex);
        */
        if (evaluateCoefficient) {
            if (MDsymbol && MDindex != 0) {
                
                console.log(" ");
                console.log("IM IN MDSYMBOL!!!!");
                console.log(" ");
                console.log("MDindex :" + MDindex);
                 console.log("currentCoefficient: " + currentCoefficient );
                 
                // FOR MULTIPLICATION
    
                for (let j = MDindex; j >= 0; j--) {
                    if (currentString[j].match(/[\+\-\/]/)) {
                        tempCoefficient = currentString.slice(j, (MDindex));
                        console.log("LOOB NG FOR temp coeff: " + tempCoefficient );
                        currentConstant = currentConstant.replace(tempCoefficient,'');
                        break;
                    } 
                }
                if (symbolType = '*') {
                    let coefficient = coefficientTerm.slice(-1);
                    var coeffValue = coefficientTerm.replace(coefficient, "");
                    
                    
                    let coefficientIndex = currentCoefficient.lastIndexOf(coeffValue);
                    //!@#$% console.log("coefficientIndex : " + coefficientIndex );
                    if (coefficientIndex === 1) {
                        coefficientIndex = 0;
                    }
                    //!@#$% console.log("coefficientIndex : " + coefficientIndex );
                    currentCoefficient = currentCoefficient.slice(0, coefficientIndex);
                    
                    
                    console.log("temp coeff: " + tempCoefficient );
        
                    tempCoefficient = tempCoefficient.concat(coeffValue);
                    console.log("temp coeff: " + tempCoefficient );
                    
                    if (firstCoefficientFinish) {
                        currentCoefficient = currentCoefficient.concat(tempCoefficient);
                    } else {
                        currentCoefficient = tempCoefficient;
                    }
                    
                     console.log("AFTER curr coeff: " + currentCoefficient );
                }
                
            }
            MDsymbol = false;
            evaluateCoefficient = false;
        }
        MDsymbolAfter = false;
        
    }
    
    
    
    
    
    console.log("MD SYMBOL IS : " + MDsymbol);
    
    
    
    
    
    function replaceOperators () {
        //console.log("CURREEEEEEEEEEEEEEEEENTT: " + currentCoefficient);
        let coefficientLetter = "";
        if (currentCoefficient.slice(-1).match(/[a-z]/)) {
            coefficientLetter = currentCoefficient.slice(-1);
        } else if (currentCoefficient.slice(-1).match(/[+]/)) {
            currentCoefficient = currentCoefficient.replace('+','');
        } else if (currentCoefficient.slice(-1).match(/[-]/)) {
            currentCoefficient = currentCoefficient.replace('-','');
        } else if (currentCoefficient.slice(-1).match(/[*]/)) {
            currentCoefficient = currentCoefficient.replace('*','');
        } else if (currentCoefficient.slice(-1).match(/[/]/)) {
            MDsymbol = true;
            symbolType = '/';
            currentCoefficient = currentCoefficient.replace('/','');
        }
        
        //currentString[count - 1] != coefficientLetter && 
         console.log("COEFFICIENT  LETTER: " + currentString[count - 1]);
        if (coefficientTerm[0] === "*") {
             console.log("ANG PASKO AY SUMAPIT");
             console.log("FGASGASGA  count: " + (count - 1));
            MDsymbol = true;
            symbolType = '*';
        } else if (coefficientTerm[0] === "/") {
            MDsymbol = true;
            symbolType = '/';
            currentCoefficient = currentCoefficient.replace('/','');
        }
        
        currentCoefficient = currentCoefficient.replace(coefficientLetter,'');
        currentConstant = currentConstant.replace(coefficientLetter,'');
    }
    
    // FOR MULTIPLICATION
    

    if (computeLHS) {
        if (negativeCoefficient) {
            if (currentCoefficient > 0) {
                lhsFinalCoefficient = currentCoefficient * -1;
            } else {
                lhsFinalCoefficient = currentCoefficient;
            }
        } else {
            lhsFinalCoefficient = eval(currentCoefficient);
        }
        
        lhsFinalConstant = currentConstant;
        computeLHS = false;
    } else if (computeRHS) {
        if (negativeCoefficient) {
            if (currentCoefficient > 0) {
                rhsFinalCoefficient = currentCoefficient * -1;
            } else {
                rhsFinalCoefficient = currentCoefficient;
            }
        } else {
            rhsFinalCoefficient = eval(currentCoefficient);
        }
        rhsFinalConstant = currentConstant;
        computeRHS = false;
    }
    
}

computeRHS = true;
getValues(rhs, rhsFinalCoefficient, rhsFinalConstant);
console.log("rhs coefficient: " + rhsFinalCoefficient);
console.log("rhs constant: " + rhsFinalConstant);



// Solving Process
console.log("*************************");
lhsFinalConstant = eval(lhsFinalConstant);
rhsFinalConstant = eval(rhsFinalConstant);

if (lhsFinalCoefficient === undefined) {
    lhsFinalCoefficient = 0;
}

if (rhsFinalCoefficient === undefined) {
    rhsFinalCoefficient = 0;
}

if (lhsFinalConstant === undefined) {
    lhsFinalConstant = 0;
}

if (rhsFinalConstant === undefined) {
    rhsFinalConstant = 0;
}

console.log("lhs final constant: " + lhsFinalConstant);
console.log("rhs final constant: " + rhsFinalConstant);

console.log("*************************");


const coefficientDifference = rhsFinalCoefficient - lhsFinalCoefficient;
const constantDifference = lhsFinalConstant - rhsFinalConstant;
var x = constantDifference / coefficientDifference;

//x = Math.round( x * 100 + Number.EPSILON ) / 100
console.log(`The solution for ${equation} is: x = ${x}`);




//////////////////////////////////////////////////////////WITHOUT CONSOLE///////////////////


var equation = "2 + 23x * 8 - 16x * 3 + 7x - 2 * 3x * 12 +7= -52";
equation = equation.replace(/\s/g,'');
// Separate the left-hand and right-hand side of the equation
var [lhs, rhs] = equation.split("=").map((side) => side.trim());

lhs = lhs.concat("=");
rhs = rhs.concat("=");

var checkLHS = false;
var checkRHS = false;

//Positive symbol for the first digit if not negative
function checkSymbol (currentString) {
    let tempString = currentString;
    if (currentString[0] != "-") {
        currentString = "+";
        currentString = currentString.concat(tempString);
        if (checkLHS) {
            lhs = currentString;
            checkLHS = false;
        } else if (checkRHS) {
            rhs = currentString;
            checkRHS = false;
        }
    }
}

checkLHS = true;
checkSymbol(lhs);

checkRHS = true;
checkSymbol(rhs);


console.log("lhs: " + lhs);
console.log("rhs: " + rhs);
console.log("************");

var lhsFinalCoefficient = "";
var lhsFinalConstant = "";
var rhsFinalCoefficient = "";
var rhsFinalConstant = "";

var computeLHS = false;
var computeRHS = false;

computeLHS = true;
getValues(lhs, lhsFinalCoefficient, lhsFinalConstant);


console.log("lhs coefficient: " + lhsFinalCoefficient);
console.log("lhs constant: " + lhsFinalConstant);



// FOR LHS
function getValues (currentString, currentCoefficient, currentConstant) {
    //Multiplication or Division Symbol Index
    var MDindex = 0;
    var coefficientIndex = currentString.length;
    var resetCoefficientIndex = false;
    var MDsymbol = false;
    var MDsymbolAfter = false;
    var symbolType = '';
    
    var isCoefficient = false;
    var sliceIndex = 0;
    var index = 0;
    var lastIndex = 0;
    
    // Check if equal symbol is in first set of digit
    var equalOccurence = true;
    
    // Check if negative symbol is in first set of digit
    var negativeCoefficient = false;
    
    // Temporary FOR MULTIPLICATION '*'
    var tempCoefficient = ""; 
    var coefficientTerm = "";
    
    var coefficientString = "";
    var coefficientQuantity = 0;
    var evaluateCoefficient = false;
    
    // value of i, passed to count variable
    var count = 0;
    var firstCoefficientFinish = false;
    
    for (let i = 1; i < currentString.length; i++) {
        count = i;
        
        if(!isCoefficient) {
            isCoefficient = true;
            sliceIndex = lastIndex;
        }
    
        
            
        if (currentString[i].match(/^[0-9]+$/) === null){ // CHECK IF symbol is present
        
            if (currentString[i].match(/[\+\-\*\/]/)){   
                 //ABC console.log("63479063434906437063406903467904390:   " + currentString[i]);
                if (resetCoefficientIndex && currentString[i-1].match(/[*]/) === null) {
                    coefficientIndex = currentString.length;
                    resetCoefficientIndex = false;
                } else if (resetCoefficientIndex) {
                    coefficientIndex = currentString.length;
                    resetCoefficientIndex = false;
                }

                /*
                console.log(": ");
                console.log("I ^@^@^@: " + (i));
                console.log("Current COEFF ^@^@^@: " + (coefficientIndex));
                console.log(": ");
                */
                if (currentString[i].match(/[*]/) && i < coefficientIndex) {
                    MDindex = i;
                     //ABC console.log("THE MD INDEX IS @#@#@#@#@: " + MDindex);
                   
                }
                equalOccurence = false;
                 //ABC console.log("Checking COEFFICIENT: " + currentCoefficient);
                replaceOperators();
                 //ABC console.log("Checking COEFFICIENT 2222: " + currentCoefficient);
            }
        
            
            if (currentString[i].match(/=/)) {
                if (equalOccurence) {
                    currentConstant = currentString.replace('=','');
                }
                console.log(currentConstant);
                console.log(currentCoefficient);
                //replaceOperators();
                currentConstant = currentConstant.replace('=','');
                currentCoefficient = currentCoefficient.replace('=','');
            }
            
            
            if (!equalOccurence) {
                isCoefficient = false;
                index++;
                lastIndex = i + 1;
            }
            
            if (currentString[i].match(/[a-z]/)) {
                console.log("ETO PASOK SA BANGA!!!!!!!!!!!!!!!!!!");
                if (currentString[sliceIndex] === '-' && !negativeCoefficient) {
                    console.log("IS NEGATIVE!! ");
                    negativeCoefficient = true;
                }
                
                coefficientIndex = i;
                coefficientQuantity ++;
                evaluateCoefficient = true;
                equalOccurence = false;
                
                
                let coefficientFirstIndex = sliceIndex - 1;
                
                 /*
                console.log("Slice Indeex: " + sliceIndex);
                console.log("Last Inddex: " + lastIndex);
                console.log("Coeff SYMBOL: " + coefficientFirstIndex);
                console.log("Coeff SYMBOLgdgd: " + (coefficientFirstIndex + 1));
                
               
                if (coefficientFirstIndex > 0) {
                    currentCoefficient = currentCoefficient.concat(currentString.slice(coefficientFirstIndex, (coefficientFirstIndex + 1)));
                }
                */
                
                // CURRENT COEFFICIENT EVALUATED
                coefficientTerm = currentString.slice(coefficientFirstIndex, lastIndex);
                 console.log("ZXC: " + coefficientTerm);
                coefficientString = coefficientString.concat(coefficientTerm);
                 console.log("QWE: " + coefficientString);
                
                 console.log("FIRST CURRENT COEFFIICIENT: " + currentCoefficient);
                currentCoefficient = currentCoefficient.concat((currentString.slice(coefficientFirstIndex, lastIndex)));
                
                let coefficient = currentCoefficient.slice(-1);
                
                 console.log("CURRENT COEFFIICIENT: " + currentCoefficient);
                
                if (currentConstant === "") {
                    currentConstant = currentString.replace(coefficientTerm,"");
                    currentConstant = currentConstant.replace("=","");
                } else {
                    currentConstant = currentConstant.replace(coefficientTerm,"");
                }
 
                 console.log("CURRENT CONSTANT: " + currentConstant);
    
                currentCoefficient = currentCoefficient.replace(coefficient,"");
                 console.log("LAST CURRENT COEFFIICIENT: " + currentCoefficient);
                console.log
                // PROCEED TO NEXT INDEX, AFTER coefficient
                lastIndex++;
                replaceOperators();
                
            }
        }
        
        /*
         console.log("BORDER=======");
       console.log("IM IN MDSYMBOL AFTER'''''''!!!!asdsada:" + currentString[i]);
       console.log("IM IN MDSYMBOL AFTER'''''''!!!! I:" + i);
      console.log("IM IN MDSYMBOL AFTER'''''''!!!! coefficientIndex:" + (coefficientIndex + 1));
       console.log("BORDER=======");
      */
        if ((coefficientIndex + 1) === i) {
            resetCoefficientIndex = true
             //ABC console.log("ARSJFHSAJKFSJ RAF ARFA RAF ARFARAF=======");
            if (currentString[i].match(/[*]/)) {
                MDsymbolAfter = true;
                
            } else if (currentString[i].match(/[\+\-\/]/)) {
              //ABC    console.log("RESET RESET RESET RESET RESET RESET=======");
                
                
                if (coefficientQuantity === 1) {
                    firstCoefficientFinish = true;
                }
                
            }
        }
       
        
        
        if (MDsymbolAfter) {
           //ABC   console.log("IM IN MDSYMBOL AFTER'''''''!!!!")
            for (let j = (coefficientIndex + 1); j < currentString.length; j++) {
                if (currentString[j].match(/[\+\-\/\=]/)) {
                  //ABC    console.log("J index:  " + j);
                   //ABC   console.log("coeff Index " + coefficientIndex);
                    
                  //ABC    console.log("BEFORE curr coeff: " + currentCoefficient );
                    tempCoefficient = currentString.slice((coefficientIndex + 1), (j));
                  //ABC    console.log("temp coeff " + tempCoefficient);
                    currentConstant = currentConstant.replace(tempCoefficient,'');
                    break;
                } 
                
            }
            
            if (symbolType = '*') {
                
                currentCoefficient = currentCoefficient.concat(tempCoefficient);
             //ABC    console.log("AFTER curr coeff: " + currentCoefficient );
            }
            
            
            if (coefficientQuantity === 1) {
                firstCoefficientFinish = true;
            }
            
             //coefficientIndex = currentString.length;
        }
      //ABC   console.log("Current COEFF ^@^@^@: " + (coefficientIndex));
        tempCoefficient = "";
    
    /*
        console.log("evaluateCoefficient :+_+_+_+_+: " + evaluateCoefficient);
        console.log("MDsymbol :+_+_+_+_+: " + MDsymbol);
        console.log("MDindex :+_+_+_+_+: " + MDindex);
        */
        if (evaluateCoefficient) {
            if (MDsymbol && MDindex != 0) {
                /*
                console.log(" ");
                console.log("IM IN MDSYMBOL!!!!");
                console.log(" ");
                console.log("MDindex :" + MDindex);
                 console.log("currentCoefficient: " + currentCoefficient );
                 */
                // FOR MULTIPLICATION
    
                for (let j = MDindex; j >= 0; j--) {
                    if (currentString[j].match(/[\+\-\/]/)) {
                        tempCoefficient = currentString.slice(j, (MDindex));
                      //ABC   console.log("LOOB NG FOR temp coeff: " + tempCoefficient );
                        currentConstant = currentConstant.replace(tempCoefficient,'');
                        break;
                    } 
                }
                if (symbolType = '*') {
                    let coefficient = coefficientTerm.slice(-1);
                    var coeffValue = coefficientTerm.replace(coefficient, "");
                    
                    
                    let coefficientIndex = currentCoefficient.lastIndexOf(coeffValue);
                    //!@#$% console.log("coefficientIndex : " + coefficientIndex );
                    if (coefficientIndex === 1) {
                        coefficientIndex = 0;
                    }
                    //!@#$% console.log("coefficientIndex : " + coefficientIndex );
                    currentCoefficient = currentCoefficient.slice(0, coefficientIndex);
                    
                    
                  //ABC   console.log("temp coeff: " + tempCoefficient );
        
                    tempCoefficient = tempCoefficient.concat(coeffValue);
                  //ABC   console.log("temp coeff: " + tempCoefficient );
                    
                    if (firstCoefficientFinish) {
                        currentCoefficient = currentCoefficient.concat(tempCoefficient);
                    } else {
                        currentCoefficient = tempCoefficient;
                    }
                    
               //ABC       console.log("AFTER curr coeff: " + currentCoefficient );
                }
                
            }
            MDsymbol = false;
            evaluateCoefficient = false;
        }
        MDsymbolAfter = false;
        
    }
    
    
    
    
    
   //ABC  console.log("MD SYMBOL IS : " + MDsymbol);
    
    
    
    
    
    function replaceOperators () {
        //console.log("CURREEEEEEEEEEEEEEEEENTT: " + currentCoefficient);
        let coefficientLetter = "";
        if (currentCoefficient.slice(-1).match(/[a-z]/)) {
            coefficientLetter = currentCoefficient.slice(-1);
        } else if (currentCoefficient.slice(-1).match(/[+]/)) {
            currentCoefficient = currentCoefficient.replace('+','');
        } else if (currentCoefficient.slice(-1).match(/[-]/)) {
            currentCoefficient = currentCoefficient.replace('-','');
        } else if (currentCoefficient.slice(-1).match(/[*]/)) {
            currentCoefficient = currentCoefficient.replace('*','');
        } else if (currentCoefficient.slice(-1).match(/[/]/)) {
            MDsymbol = true;
            symbolType = '/';
            currentCoefficient = currentCoefficient.replace('/','');
        }
        
        //currentString[count - 1] != coefficientLetter && 
         //ABC console.log("COEFFICIENT  LETTER: " + currentString[count - 1]);
        if (coefficientTerm[0] === "*") {
            //ABC console.log("ANG PASKO AY SUMAPIT");
             //ABC console.log("FGASGASGA  count: " + (count - 1));
            MDsymbol = true;
            symbolType = '*';
        } else if (coefficientTerm[0] === "/") {
            MDsymbol = true;
            symbolType = '/';
            currentCoefficient = currentCoefficient.replace('/','');
        }
        
        currentCoefficient = currentCoefficient.replace(coefficientLetter,'');
        currentConstant = currentConstant.replace(coefficientLetter,'');
    }
    
    // FOR MULTIPLICATION
    

    if (computeLHS) {
        if (negativeCoefficient) {
            if (currentCoefficient > 0) {
                lhsFinalCoefficient = currentCoefficient * -1;
            } else {
                lhsFinalCoefficient = currentCoefficient;
            }
        } else {
            lhsFinalCoefficient = eval(currentCoefficient);
        }
        
        lhsFinalConstant = currentConstant;
        computeLHS = false;
    } else if (computeRHS) {
        if (negativeCoefficient) {
            if (currentCoefficient > 0) {
                rhsFinalCoefficient = currentCoefficient * -1;
            } else {
                rhsFinalCoefficient = currentCoefficient;
            }
        } else {
            rhsFinalCoefficient = eval(currentCoefficient);
        }
        rhsFinalConstant = currentConstant;
        computeRHS = false;
    }
    
}

computeRHS = true;
getValues(rhs, rhsFinalCoefficient, rhsFinalConstant);
console.log("rhs coefficient: " + rhsFinalCoefficient);
console.log("rhs constant: " + rhsFinalConstant);



// Solving Process
console.log("*************************");
lhsFinalConstant = eval(lhsFinalConstant);
rhsFinalConstant = eval(rhsFinalConstant);

if (lhsFinalCoefficient === undefined) {
    lhsFinalCoefficient = 0;
}

if (rhsFinalCoefficient === undefined) {
    rhsFinalCoefficient = 0;
}

if (lhsFinalConstant === undefined) {
    lhsFinalConstant = 0;
}

if (rhsFinalConstant === undefined) {
    rhsFinalConstant = 0;
}

console.log("lhs final constant: " + lhsFinalConstant);
console.log("rhs final constant: " + rhsFinalConstant);

console.log("*************************");


const coefficientDifference = rhsFinalCoefficient - lhsFinalCoefficient;
const constantDifference = lhsFinalConstant - rhsFinalConstant;
var x = constantDifference / coefficientDifference;

//x = Math.round( x * 100 + Number.EPSILON ) / 100
console.log(`The solution for ${equation} is: x = ${x}`);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
PARENTHESISESESESESESESI 
////////////////////////////////////
////////////////////////////////////


var equation = "2 + 23x * 8 - 16x * 3 + 7x - 2 * 3x * 12 +7= -52";
//3(2x-7) = 4(5x+1)
//2x-2=1
equation = equation.replace(/\s/g, '');
        // Separate the left-hand and right-hand side of the equation
        var [lhs, rhs] = equation.split("=").map((side) => side.trim());

        var checkLHS = false;
        var checkRHS = false;

         if (lhs[0].match(/[\-]/)) {
            lhs = ["0", lhs, "="].join('');
        } else {
            lhs = ["0+", lhs, "="].join('');
        }

        if (rhs[0].match(/[\-]/)) {
            rhs = ["0", rhs, "="].join('');
        } else {
            rhs = ["0+", rhs, "="].join('');
        }

        checkLHS = true;
        checkParenthesis(lhs);
        checkRHS = true;
        checkParenthesis(rhs);

        function checkParenthesis(currentString) {
            for (let i = 0; i < currentString.length; i++) {
                if (currentString[i].match(/[\(]/) && i > 0) {
                    if (currentString[i - 1].match(/^[0-9]+$/)) {
                        currentString = currentString.substring(0, i) + "*(" + currentString.substring(i + 1);
                        
                    }
                }
                if (currentString[i].match(/[=]/)) {
                    //ABC console.log("break");
                    break;
                }
                
            }

            if (checkLHS) {
                //ABC console.log(currentString);
                lhs = currentString;
                checkLHS = false;
            } else if (checkRHS) {
                //ABC console.log(currentString);
                rhs = currentString;
                checkRHS = false;
            }
        }

        //Positive symbol for the first digit if not negative
        /*
        function checkSymbol (currentString) {
            let tempString = currentString;
            if (currentString[0] != "-") {
                currentString = "+";
                currentString = currentString.concat(tempString);
                if (checkLHS) {
                    lhs = currentString;
                    checkLHS = false;
                } else if (checkRHS) {
                    rhs = currentString;
                    checkRHS = false;
                }
            }
        }

        checkSymbol(lhs);
        checkSymbol(rhs);
        */

       


        //ABC console.log("lhs: " + lhs);
        //ABC console.log("rhs: " + rhs);
        //ABC console.log("************");

        var lhsFinalCoefficient = "";
        var lhsFinalConstant = "";
        var rhsFinalCoefficient = "";
        var rhsFinalConstant = "";
        
        var LHScoefficientSymbol = "";
        var RHScoefficientSymbol = "";
        var coefficientSymbol = "";
        
        var computeLHS = false;
        var computeRHS = false;

        computeLHS = true;
        getValues(lhs, lhsFinalCoefficient, lhsFinalConstant);


        //ABC console.log("lhs coefficient: " + lhsFinalCoefficient);
        //ABC console.log("lhs constant: " + lhsFinalConstant);



        // FOR LHS
        function getValues(currentString, currentCoefficient, currentConstant) {
            var coefficient = "";
            //Multiplication or Division Symbol Index
            var MDindex = 0;
            var coefficientIndex = currentString.length;
            var resetCoefficientIndex = false;
            var MDsymbol = false;
            var MDsymbolAfter = false;
            var symbolType = '';

            var isCoefficient = false;
            var sliceIndex = 0;
            var index = 0;
            var lastIndex = 0;

            // Check if equal symbol is in first set of digit
            var equalOccurence = true;

            // Check if negative symbol is in first set of digit
            var negativeCoefficient = false;

            // Temporary FOR MULTIPLICATION '*'
            var tempCoefficient = "";
            var coefficientTerm = "";

            var coefficientString = "";
            var coefficientQuantity = 0;
            var evaluateCoefficient = false;

            // value of i, passed to count variable
            var count = 0;
            var firstCoefficientFinish = false;



            // PARENTHESIS
            var openParenthesis = false;
            var closeParenthesis = false;

            var parenthesisTally = 0;

            var parenthesisCase = 0;
            var firstParenthesisIndex = null;
            var insideParenthesisIndex = null;
            var insideParenthesisTally = 0;
            var isInsideParenthesis = false;

            //tally for coefficient inside parenthesis
            var coeffInsideTally = 0;

            for (let i = 1; i < currentString.length; i++) {
                count = i;

                if (!isCoefficient) {
                    isCoefficient = true;
                    sliceIndex = lastIndex;
                }



                if (currentString[i].match(/^[0-9]+$/) === null) { // CHECK IF symbol is present

                    if (currentString[i].match(/[\(]/)) {
                        //ABC console.log("YEHEY TUMAMA KA IIDOL");
                        openParenthesis = true;
                        parenthesisTally++;
                        if (firstParenthesisIndex === null) {
                            firstParenthesisIndex = i;
                            coeffInsideTally = 0;
                        }
                    } else if (currentString[i].match(/[\)]/)) {
                        i += parenthesisTally;
                        //ABC console.log("KATAPUSAN MO NA IDOLO");
                        let closeParenthesisIndex = i;
                        closeParenthesis = true;

                        let parenthesisExpression;
                        if (parenthesisCase === 1) {
                            parenthesisExpression = ["*", currentString.slice(firstParenthesisIndex, closeParenthesisIndex)].join('');

                            /*
                            for (let j = 0; j < parenthesisTally; j++) {
                                parenthesisExpression = parenthesisExpression.concat(")");
                            }
                            */
                            /*
                            console.log("START OF ASD: " + currentCoefficient);
                            console.log("START OF ASD: " + currentConstant);
                            console.log("PARR EXPREFASCS : " + parenthesisExpression);
                            */
                            currentCoefficient = currentCoefficient.concat(parenthesisExpression);
                            currentConstant = currentConstant.replace(parenthesisExpression, "");
                            /*
                            console.log("END OF ASD: " + currentCoefficient);
                            console.log("END OF ASD: " + currentConstant);
                            console.log("INDEXINDEIXINDEX: " + coefficientIndex);
                            console.log("main index: " + i);
                            console.log("mgdg 232: " + currentString[i]);
                            */

                            if (currentString[i].match(/[*]/)) {
                                MDindex = i;
                                MDsymbolAfter = true;
                                symbolType = '*';
                            }
                            parenthesisCase = 0;
                        } else if (parenthesisCase === 2) {
                            parenthesisExpression = ["*", currentString.slice(insideParenthesisIndex, closeParenthesisIndex)].join('');

                            let closingParenthesis = "";

                            for (let j = 0; j < insideParenthesisTally; j++) {
                                closingParenthesis = closingParenthesis.concat(")");
                            }
                            currentCoefficient = currentCoefficient.concat(parenthesisExpression);
                            currentConstant = currentConstant.replace(parenthesisExpression, closingParenthesis);


                            insideParenthesisIndex = 0;

                            //ABC console.log("ASD @#@)_ @#(JGKDGKDGK:   " + currentString[i]);
                            if (currentString[i].match(/[*]/)) {
                                MDindex = i;
                                MDsymbolAfter = true;
                                symbolType = '*';
                            }

                            isInsideParenthesis = true;
                            parenthesisCase = 0;

                        } else if (coeffInsideTally > 0) {
                            let closeParenthesisSymbol = "";
                            for (let j = 0; j < insideParenthesisTally; j++) {
                                closeParenthesisSymbol = closeParenthesisSymbol.concat(")");
                            }
                            currentCoefficient = currentCoefficient.concat(closeParenthesisSymbol);

                            if (currentString[i].match(/[*]/)) {
                                MDindex = i;
                                MDsymbolAfter = true;
                                symbolType = '*';
                            }
                            isInsideParenthesis = true;
                            coeffInsideTally = 0;
                            //ABC console.log("sURRENT COEFFIICIENT: " + currentCoefficient);
                        }

                        parenthesisTally = 0;
                        openParenthesis = false;
                        firstParenthesisIndex = null;
                    }

                    if (!openParenthesis) {
                        if (currentString[i].match(/[\+\-\*\/]/)) {
                            //ABC console.log("63479063434906437063406903467904390:   " + currentString[i]);
                            if (resetCoefficientIndex && currentString[i - 1].match(/[*]/) === null) {
                                coefficientIndex = currentString.length;
                                resetCoefficientIndex = false;
                            } else if (resetCoefficientIndex) {
                                coefficientIndex = currentString.length;
                                resetCoefficientIndex = false;
                            }

                            /*
                            console.log(": ");
                            console.log("I ^@^@^@: " + (i));
                            console.log("Current COEFF ^@^@^@: " + (coefficientIndex));
                            console.log(": ");
                            */
                            if (currentString[i].match(/[*]/) && i < coefficientIndex) {
                                MDindex = i;
                                //ABC console.log("THE MD INDEX IS @#@#@#@#@: " + MDindex);

                            }
                            equalOccurence = false;
                            //ABC console.log("Checking COEFFICIENT: " + currentCoefficient);
                            replaceOperators();
                            //ABC console.log("Checking COEFFICIENT 2222: " + currentCoefficient);
                        }



                    }

                    if (currentString[i].match(/=/)) {

                        if (equalOccurence) {
                            currentConstant = currentString.replace('=', '');
                        } else if (currentConstant === "") {
                            currentConstant = currentString;
                        }
                        //ABC console.log(currentConstant);
                        //ABC console.log(currentCoefficient);
                        //replaceOperators();
                        currentConstant = currentConstant.replace('=', '');
                        currentCoefficient = currentCoefficient.replace('=', '');
                    }


                    if (!equalOccurence) {
                        isCoefficient = false;
                        index++;
                        lastIndex = i + 1;
                    }


                    if (currentString[i].match(/[a-z]/)) {
                         //ABC console.log("sURRENT COEFFIICIENT: " + currentCoefficient);
                        //ABC console.log("ETO PASOK SA BANGA!!!!!!!!!!!!!!!!!!:  " + currentString[i]);
                        if (currentString[sliceIndex] === '-' && !negativeCoefficient) {
                            //ABC console.log("IS NEGATIVE!! ");
                            negativeCoefficient = true;
                        }

                        // IF coefficient inside parenthesis, increment.
                        if (openParenthesis && parenthesisTally > 0) {
                            coeffInsideTally++;
                            if (insideParenthesisTally === 0) {
                                insideParenthesisTally = parenthesisTally;
        
                            }
                        }
                        // Perform coefficient Inside function
                        coefficientInside();

                        coefficientIndex = i;
                        coefficientQuantity++;
                        evaluateCoefficient = true;
                        equalOccurence = false;

                        // IF THE NEXT symbol of coefficient have parenthesis
                        // Expression with parenthesis have a minimum length of 4 ex. "2(3)"
                        if (currentString >= 4) {
                            if (currentString[i + 2].match(/[\(]/) && parenthesisTally === 0) {
                                if (currentString[i + 1].match(/[\*]/)) {
                                    //ABC console.log("PASOK SA BANGA LODS IIDOL");
                                    openParenthesis = true;
                                    parenthesisCase = 1;
                                }
                            } else if (currentString[i + 2].match(/[\(]/) && parenthesisTally > 0) {
                                if (currentString[i + 1].match(/[\*]/)) {
                                    insideParenthesisIndex = (i + 2);
                                    openParenthesis = true;
                                    parenthesisCase = 2;
                                }
                            }
                        }


                        let coefficientFirstIndex = sliceIndex - 1;

                        /*
                        console.log("Slice Indeex: " + sliceIndex);
                        console.log("Last Inddex: " + lastIndex);
                        console.log("Coeff SYMBOL: " + coefficientFirstIndex);
                        console.log("Coeff SYMBOLgdgd: " + (coefficientFirstIndex + 1));
                        
                        if (coefficientFirstIndex > 0) {
                            currentCoefficient = currentCoefficient.concat(currentString.slice(coefficientFirstIndex, (coefficientFirstIndex + 1)));
                        }
                        */

                        // CURRENT COEFFICIENT EVALUATED
                        coefficientTerm = currentString.slice(coefficientFirstIndex, lastIndex);
                        coefficientTerm = coefficientTerm.replace("(", "");
                        //ABC console.log("ZXC: " + coefficientTerm);
                        coefficientString = coefficientString.concat(coefficientTerm);
                        //ABC console.log("QWE: " + coefficientString);

                        //ABC console.log("FIRST CURRENT COEFFIICIENT: " + currentCoefficient);
                        if (currentString.slice(coefficientFirstIndex, (coefficientFirstIndex + 1)).match(/[(]/)) {
                            coefficientFirstIndex++;
                        }
                        
                        
                        currentCoefficient = currentCoefficient.concat((currentString.slice(coefficientFirstIndex, lastIndex)));

                        //ABC console.log("CURRENT COEFFIICIENT: " + currentCoefficient);
                        coefficient = currentCoefficient.slice(-1);
                        coefficientSymbol = coefficient;
                        
                        
                        if (currentConstant === "") {
                            currentConstant = currentString.replace(coefficientTerm, "");
                            currentConstant = currentConstant.replace("=", "");
                        } else {
                            currentConstant = currentConstant.replace(coefficientTerm, "");
                        }

                        //ABC console.log("CURRENT CONSTANT: " + currentConstant);

                        currentCoefficient = currentCoefficient.replace(coefficient, "");
                        //ABC console.log("LAST CURRENT COEFFIICIENT: " + currentCoefficient);
                        //ABC console.log
                        // PROCEED TO NEXT INDEX, AFTER coefficient
                        lastIndex++;
                        replaceOperators();

                    }
                }

                /*
                console.log("BORDER=======");
            console.log("IM IN MDSYMBOL AFTER'''''''!!!!asdsada:" + currentString[i]);
            console.log("IM IN MDSYMBOL AFTER'''''''!!!! I:" + i);
            console.log("IM IN MDSYMBOL AFTER'''''''!!!! coefficientIndex:" + (coefficientIndex + 1));
            console.log("BORDER=======");
            */
                if ((coefficientIndex + 1) === i) {
                    resetCoefficientIndex = true
                    //ABC console.log("ARSJFHSAJKFSJ RAF ARFA RAF ARFARAF=======");
                    if (currentString[i].match(/[*]/)) {
                        //ABC console.log("MD SYMBOL IS NOW TRUE ");
                        symbolType = '*';
                        MDsymbolAfter = true;

                    } else if (currentString[i].match(/[\+\-\/]/)) {
                        //ABC    console.log("RESET RESET RESET RESET RESET RESET=======");

                        
                        if (coefficientQuantity === 1) {
                            firstCoefficientFinish = true;
                        }

                    }
                }


                if (parenthesisCase != 1 && parenthesisCase != 2) {
                    if (MDsymbolAfter) {
                           //ABC console.log("IM IN MDSYMBOL AFTER'''''''!!!!")
                        if (closeParenthesis) {
                            for (let j = i + 1; j < currentString.length; j++) {
                                if (currentString[j].match(/[\+\-\/\=]/)) {

                                    tempCoefficient = currentString.slice((i), (j));

                                    if (!isInsideParenthesis) {
                                        currentConstant = currentConstant.replace(tempCoefficient, '');
                                    }
                                    isInsideParenthesis = false;
                                    break;
                                }
                            }
                            closeParenthesis = false;
                        } else {
                            //ABC console.log("IM IN ELSE!@!@!@!@!")
                            for (let j = (coefficientIndex + 1); j < currentString.length; j++) {
                                if (currentString[j].match(/[\+\-\/\=]/)) {
                                    //ABC    console.log("J index:  " + j);
                                    //ABC   console.log("coeff Index " + coefficientIndex);

                                    //ABC    console.log("BEFORE curr coeff: " + currentCoefficient );
                                    tempCoefficient = currentString.slice((coefficientIndex + 1), (j));
                                    //ABC    console.log("temp coeff " + tempCoefficient);
                                    currentConstant = currentConstant.replace(tempCoefficient, '');
                                    //ABC console.log("TEMP COEFF: " + tempCoefficient);
                                    break;
                                }
                            }
                        }

                        if (symbolType === '*') {
                            currentCoefficient = currentCoefficient.concat(tempCoefficient);
                            //ABC    console.log("AFTER curr coeff: " + currentCoefficient );
                        }


                        if (coefficientQuantity === 1) {
                            firstCoefficientFinish = true;
                        }

                        //coefficientIndex = currentString.length;
                    }
                }
                //ABC   console.log("Current COEFF ^@^@^@: " + (coefficientIndex));
                tempCoefficient = "";

                /*
                    console.log("evaluateCoefficient :+_+_+_+_+: " + evaluateCoefficient);
                    console.log("MDsymbol :+_+_+_+_+: " + MDsymbol);
                    console.log("MDindex :+_+_+_+_+: " + MDindex);
                    */
                if (evaluateCoefficient) {
                    if (MDsymbol && MDindex != 0) {
                        /*
                        console.log(" ");
                        console.log("IM IN MDSYMBOL!!!!");
                        console.log(" ");
                        console.log("MDindex :" + MDindex);
                        console.log("currentCoefficient: " + currentCoefficient );
                        */
                        // FOR MULTIPLICATION

                        for (let j = MDindex; j >= 0; j--) {
                            if (currentString[j].match(/[\+\-\/]/)) {
                                tempCoefficient = currentString.slice(j, (MDindex));
                                //ABC   console.log("LOOB NG FOR temp coeff: " + tempCoefficient );
                                currentConstant = currentConstant.replace(tempCoefficient, '');
                                break;
                            }
                        }
                        if (symbolType === '*') {

                            //!@#$% console.log("coefficientIndex : " + coefficientIndex );
                            if (coefficientIndex === 1) {
                                coefficientIndex = 0;
                            }
                            removeLastTerm();

                            if (firstCoefficientFinish) {
                                currentCoefficient = currentCoefficient.concat(tempCoefficient);
                            } else {
                                currentCoefficient = tempCoefficient;
                            }

                            //ABC       console.log("AFTER curr coeff: " + currentCoefficient );
                        }

                    }
                    MDsymbol = false;
                    evaluateCoefficient = false;
                }
                MDsymbolAfter = false;


                tempCoefficient = "";

                // CHECK for previous parenthesis and expression before opening parenthesis
                function coefficientInside() {
                    if (coeffInsideTally === 1) {
                        let coeffParenthesisIndex = firstParenthesisIndex;
                        //expression before the opening parenthesis
                        let expBeforeIndex = 0;
                        for (let j = i; j > firstParenthesisIndex; j--) {
                            if (currentString[j].match(/[\(]/)) {
                                coeffParenthesisIndex = j;
                                break;
                            }
                        }

                        for (let j = firstParenthesisIndex; j > 0; j--) {
                            if (currentString[j].match(/[\+\-\/]/)) {
                                expBeforeIndex = j + 1;
                                break;
                            }
                        }
                        tempCoefficient = currentString.slice(expBeforeIndex, coeffParenthesisIndex + 1);

                        //REMOVE last term in the coefficient
                        removeLastTerm();
                        currentCoefficient = currentCoefficient.concat(tempCoefficient);
                    }

                }

                //REMOVE THE LAST VALUE OF COEFFICIENT, in order to concatenate the temporary coeff
                function removeLastTerm() {
                    let coefficient = coefficientTerm.slice(-1);
                    var coeffValue = coefficientTerm.replace(coefficient, "");
                    let coefficientIndex = currentCoefficient.lastIndexOf(coeffValue);
                    currentCoefficient = currentCoefficient.slice(0, coefficientIndex);
                    tempCoefficient = tempCoefficient.concat(coeffValue);
                    //ABC console.log("TEMPTEMPTEMTPEM: " + tempCoefficient);
                }
            }





            //ABC  console.log("MD SYMBOL IS : " + MDsymbol);





            function replaceOperators() {
                //console.log("CURREEEEEEEEEEEEEEEEENTT: " + currentCoefficient);
                let coefficientLetter = "";
                if (currentCoefficient.slice(-1).match(/[a-z]/)) {
                    coefficientLetter = currentCoefficient.slice(-1);
                } else if (currentCoefficient.slice(-1).match(/[+]/)) {
                    currentCoefficient = currentCoefficient.replace('+', '');
                } else if (currentCoefficient.slice(-1).match(/[-]/)) {
                    currentCoefficient = currentCoefficient.replace('-', '');
                } else if (currentCoefficient.slice(-1).match(/[*]/)) {
                    currentCoefficient = currentCoefficient.replace('*', '');
                } else if (currentCoefficient.slice(-1).match(/[/]/)) {
                    MDsymbol = true;
                    symbolType = '/';
                    currentCoefficient = currentCoefficient.replace('/', '');
                }

                //currentString[count - 1] != coefficientLetter && 
                //ABC console.log("COEFFICIENT  LETTER: " + currentString[count - 1]);
                if (coefficientTerm[0] === "*") {
                    //ABC console.log("ANG PASKO AY SUMAPIT");
                    //ABC console.log("FGASGASGA  count: " + (count - 1));
                    MDsymbol = true;
                    symbolType = '*';
                } else if (coefficientTerm[0] === "/") {
                    MDsymbol = true;
                    symbolType = '/';
                    currentCoefficient = currentCoefficient.replace('/', '');
                }

                currentCoefficient = currentCoefficient.replace(coefficientLetter, '');
                currentConstant = currentConstant.replace(coefficientLetter, '');
            }

            // FOR MULTIPLICATION

            ;

            if (computeLHS) {
                if (negativeCoefficient) {
                    if (currentCoefficient > 0) {
                        lhsFinalCoefficient = currentCoefficient * -1;
                    } else {
                        lhsFinalCoefficient = currentCoefficient;
                    }
                } else {
                    console.log(lhsFinalCoefficient);
                    lhsFinalCoefficient = eval(currentCoefficient);
                }
                LHScoefficientSymbol = coefficient;
                lhsFinalConstant = currentConstant;
                computeLHS = false;
                
            } else if (computeRHS) {
                if (negativeCoefficient) {
                    if (currentCoefficient > 0) {
                        rhsFinalCoefficient = currentCoefficient * -1;
                    } else {
                        rhsFinalCoefficient = currentCoefficient;
                    }
                } else {
                    console.log(rhsFinalCoefficient);
                    rhsFinalCoefficient = eval(currentCoefficient);
                }
                RHScoefficientSymbol = coefficient;
                rhsFinalConstant = currentConstant;
                computeRHS = false;
                
            }

        }


        computeRHS = true;
        getValues(rhs, rhsFinalCoefficient, rhsFinalConstant);
        //ABC console.log("rhs coefficient: " + rhsFinalCoefficient);
        //ABC console.log("rhs constant: " + rhsFinalConstant);



        // Solving Process
        //ABC console.log("*************************");
        lhsFinalConstant = eval(lhsFinalConstant);
        rhsFinalConstant = eval(rhsFinalConstant);

        if (lhsFinalCoefficient === undefined) {
            lhsFinalCoefficient = 0;
        }

        if (rhsFinalCoefficient === undefined) {
            rhsFinalCoefficient = 0;
        }

        if (lhsFinalConstant === undefined) {
            lhsFinalConstant = 0;
        }

        if (rhsFinalConstant === undefined) {
            rhsFinalConstant = 0;
        }

        //ABC console.log("lhs final constant: " + lhsFinalConstant);
        //ABC console.log("rhs final constant: " + rhsFinalConstant);

        //ABC console.log("*************************");
 
        // FOR STEPS TO GENERATE
        function checkSymbol (currentString) {
            let tempString = currentString;
            if (currentString != "" && currentString != undefined) {
                if (currentString[0].match(/^[0-9]+$/)) {
                    currentString = "+";
                    currentString = currentString.concat(tempString);
                }
                return currentString;
            }
        }

        var lhsCoefficient = lhsFinalCoefficient.toString();
        var lhsConstant = lhsFinalConstant.toString();
        var rhsCoefficient = rhsFinalCoefficient.toString();
        var rhsConstant = rhsFinalConstant.toString();
        
        if (lhsCoefficient === "0") {
            lhsCoefficient = "";
        }

        if (rhsCoefficient === "0") {
            rhsCoefficient = "";
        }

        if (lhsConstant === "0") {
            lhsConstant = "";
        }

        if (rhsConstant === "0") {
            rhsConstant = "";
        }
        
        lhsConstant = checkSymbol(lhsConstant);
        rhsCoefficient = checkSymbol(rhsCoefficient);
        
        var stepsArray = [];
        
        function reverseOperation (currentString) {
            if (currentString != "" && currentString != undefined) {
                var tempString = currentString.replace('+','');
                var tempValue = "";
                if (parseInt(currentString) > 0) {
                    tempValue = "-";
                    tempValue = tempValue.concat(tempString);
                } else {
                    tempString = currentString.replace('-','');
                    tempValue = "+";
                    tempValue = tempValue.concat(tempString);
                }
                return tempValue;
            }
        }
        
        function removePlusSymbol (currentString) {
            if (currentString != "" && currentString != undefined) {
                var tempString = currentString.replace('+','');
                return tempString;
            }
        }
        
        
        let checkSimilarity = [lhsCoefficient, LHScoefficientSymbol, lhsConstant, "=", rhsCoefficient, RHScoefficientSymbol, rhsConstant].join('');


        if (checkSimilarity != equation) {
            //Push first step, simplify stuffs
            stepsArray.push([lhsCoefficient, LHScoefficientSymbol, lhsConstant, "=", rhsCoefficient, RHScoefficientSymbol, rhsConstant].join(''));
        }
        
        
        rhsCoefficient = reverseOperation(rhsCoefficient);
        lhsConstant = reverseOperation(lhsConstant);
        
        if (lhsCoefficient === "") {
           rhsCoefficient = rhsCoefficient.replace('+','');
        }
        if (rhsConstant === "") {
           lhsConstant = lhsConstant.replace('+','');
        }
        
        lhsCoefficient = removePlusSymbol(lhsCoefficient);
        rhsConstant = removePlusSymbol(rhsConstant);
        
        //Push second step, add/minus to opposite
        stepsArray.push([lhsCoefficient, LHScoefficientSymbol, rhsCoefficient, RHScoefficientSymbol, "=", rhsConstant, lhsConstant].join(''));
       
        
        //console.log("lhsFinalCoefficient " + lhsFinalCoefficient)
        //console.log("lhsFinalConstant " + lhsFinalConstant)
        //console.log("rhsFinalCoefficient " + rhsFinalCoefficient)
        //console.log("rhsFinalConstant " + rhsFinalConstant)

        const coefficientDifference = rhsFinalCoefficient - lhsFinalCoefficient;
        const constantDifference = lhsFinalConstant - rhsFinalConstant;
        
   
        
        var finalCoefficient = [lhsCoefficient, rhsCoefficient].join('');
        var finalConstant = [rhsConstant, lhsConstant].join('');
        finalCoefficient = eval(finalCoefficient);
        finalConstant = eval(finalConstant);
        
         //Push third step, simplify
        stepsArray.push([finalCoefficient, coefficientSymbol, "=", finalConstant].join(''));
        
        var x = constantDifference / coefficientDifference;

        x = Math.round(x * 100 + Number.EPSILON) / 100;
        console.log(`The solution for ${equation} is: x = ${x}`);
        
        
        //Push fourth step, final answer
        stepsArray.push(["x=", x].join(''));
        
        console.log(stepsArray[0]);
        console.log(stepsArray[1]);
        console.log(stepsArray[2]);
        console.log(stepsArray[3]);
