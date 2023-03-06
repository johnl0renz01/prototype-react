import React, { Component } from "react";

export default function Whiteboard() {

    console.log("Algorithm - Rendered");
    var equation = "77 = -2x";
equation = equation.replace(/\s/g,'');
// Separate the left-hand and right-hand side of the equation
var [lhs, rhs] = equation.split("=").map((side) => side.trim());

lhs = lhs.concat("=");
rhs = rhs.concat("=");


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
    var isCoefficient = false;
    var sliceIndex = 0;
    var index = 0;
    var lastIndex = 0;
    
    // Check if equal symbol is in first set of digit
    var equalOccurence = true;
    
    // Check if negative symbol is in first set of digit
    var negativeCoefficient = false;
    
    for (let i = 1; i < currentString.length; i++) {
        if(!isCoefficient) {
            isCoefficient = true;
            sliceIndex = lastIndex;
        }
    
            
        if (currentString[i].match(/^[0-9]+$/) === null){ // CHECK IF symbol is present
            if (currentString[i].match(/[\+\-\*\/]/)){   
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
                
                equalOccurence = false;
                
                lastIndex++;
                
                let coefficientSymbol = sliceIndex - 1;
                if (coefficientSymbol > 0) {
                    currentCoefficient = currentString.slice(coefficientSymbol, (coefficientSymbol + 1));
                }
                
                currentCoefficient = currentCoefficient.concat((currentString.slice(sliceIndex, lastIndex)));
                
                let coefficient = currentCoefficient.slice(-1);
                currentCoefficient = currentCoefficient.replace(coefficient,'');
                
                currentConstant = currentString.replace(currentCoefficient,'');
                
            }
        }
    }
    
    function replaceOperators () {
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
            currentCoefficient = currentCoefficient.replace('/','');
        }
        currentCoefficient = currentCoefficient.replace(coefficientLetter,'');
    }
    
    if (computeLHS) {
        if (negativeCoefficient) {
            if (currentCoefficient > 0) {
                lhsFinalCoefficient = currentCoefficient * -1;
            } else {
                lhsFinalCoefficient = currentCoefficient;
            }
        } else {
            lhsFinalCoefficient = currentCoefficient;
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
            rhsFinalCoefficient = currentCoefficient;
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

x = Math.round( x * 100 + Number.EPSILON ) / 100
console.log(`The solution for ${equation} is: x = ${x}`);



    return (
        <p>abc</p>
    );
  
}

