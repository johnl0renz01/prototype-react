var EquationSolver = (function () {
    var questionString = "";
    var equation = "";
    var equationSteps = [];

    var getEquationAnswer = function () {
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
        
        // FIX SYMBOLS
        if (lhsCoefficient != "") {
            lhsConstant = checkSymbol(lhsConstant);
        }
        
        if (rhsCoefficient != ""){
            rhsConstant = checkSymbol(rhsConstant);
        }
        
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
        
        

        x = x.toString();
        equation = x;
        equationSteps = stepsArray;
        return equation;
    };

    var setEquation = function (string) {
        equation = string;
    };

    var getEquationSteps = function () {
        return equationSteps;
    };


    return {
        getEquationAnswer: getEquationAnswer,
        setEquation: setEquation,
        getEquationSteps: getEquationSteps
    }

})();

export default EquationSolver;

