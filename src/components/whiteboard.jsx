import React, { Component } from "react";
import DifficultyPage from './difficulty_page';
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as ReactDOM from 'react-dom';
import $ from "jquery";

import { MY_API_KEY } from './API_KEY';
import EquationSolver from './equationSolver';


export default function Whiteboard() {


  const [questionList, setQuestions] = useState([]);
  const questionAnswers = [];
  const questionSteps = [];
  
  useEffect(() => {
    const data = window.localStorage.getItem('QUESTION_LIST');
    if (data !== null) setQuestions(JSON.parse(data))
  }, [])

  //STRING IS OKAY, FIX THE equation solver shit
  function computeEquation () {
    for (let i = 0; i < questionList.length; i++) {
      EquationSolver.setEquation(questionList[i]);
  
      let answer = EquationSolver.getEquationAnswer();
      let steps = EquationSolver.getEquationSteps();
      //console.log("answe:" + answer);
      console.log("steps is this: " + steps);
      questionAnswers.push(answer);
      questionSteps.push(steps);
      
    }
  }

  const [currentQuestionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    const data = window.localStorage.getItem('QUESTION_INDEX');
    if (data !== null) setQuestionIndex(JSON.parse(data))
  }, [])

  useEffect(() => {
      window.localStorage.setItem('QUESTION_INDEX', JSON.stringify(currentQuestionIndex))
  }, [currentQuestionIndex])



  /* TEST CASE

  "3(2x-14)+4x-7=1"
1
: 
"7(5x-20)-3x+8=5"
2
: 
"9(3x+3)+2x-10=2"
3
: 
"2(5x+2)+7x-14=10"
4
: 
"4(6x-13)+5x+15=8"
  */
  
  computeEquation();
  console.log("answeasda:" + questionAnswers);
  //console.log("ASDROOOO:" + questionList);
  //console.log("AasdasdO:" + questionAnswers);
  /*
    
  const [result, setResult] = useState([]);

  useEffect(() => {
    $.ajax({
      type: "POST",
      url: "http://localhost:80/Prototype-React/my-app/api/setVariables.php",
      data: "e",
      success(data) {
          setResult(data);
          console.log(result);
      },
   });
   
    /*
    axios.get(`http://localhost:80/Prototype-React/my-app/api/setVariables.php`).then(function(response){
      console.log("axios is: " + response.data);
   });
  });

  */

  //console.log("evaluation:" + (eval(3+2)));

  const [textInput, setAnswer] = useState("");
  const [textLog, setLog] = useState("");
  const [updatedLog, updateLog] = useState("");

  const [arrTextLog, arrSetLog] = useState([]);
  const [arrUpdatedLog, arrUpdateLog] = useState([]);

  const [imageLink, setImageLink] = useState("PIA-Neutral");


  const [updatedBoard, updateBoard] = useState(textInput);

  // ANSWER OF QUESTION
  // MUST FETCH API 

  console.log("ETO ANG PINAKAMAOUPET: " + questionAnswers[currentQuestionIndex]);
  var ans = "x=";
  ans = ans.concat(questionAnswers[currentQuestionIndex]);
  const [answer, correctAnswer] = useState([]);
  const [answerDisplay, setDisplay] = useState([]);
  const [countTally, checkCount] = useState(0);
  const [length,setLength] = useState();

  const loadAnswers = (e) => {
    if (countTally === 0) {
      //ans = "x=";
      //ans = ans.concat(questionAnswers[currentQuestionIndex]);
      //console.log(ans);
      //correctAnswer(oldArray => [...oldArray,ans] );
      //
      let steps = questionSteps[currentQuestionIndex];
      //steps.push(ans);
      var equationSteps = [];

      for (let i = 0; i < steps.length; i++) {
        equationSteps.push(steps[i]);
      }
      correctAnswer(equationSteps);

      /*
      for (let i = 0; i< steps.length; i++) {
        console.log("multple steps: " + steps[i]);
        let value = steps[i];
        correctAnswer(oldArray => [...oldArray, value]);
      }
      */
      checkCount(equationSteps.length);
      setLength(equationSteps.length);

      var fixedEquationSteps = [];
      // SET PROPER SPACING
      for (let i = 0; i < equationSteps.length; i++) {
        var currentEquation = equationSteps[i];
        let firstIndex = 0;
        let fixedString = "";
        let equalSignIndex = 0;
        for (let j = 1; j <= currentEquation.length; j++) {
          if ((currentEquation.length) === j) {
            fixedString = fixedString.concat([currentEquation.slice(firstIndex, j)].join(''));
            break;
          }
          if (currentEquation[j].match(/[\-]/)){
            if ((j-1) === equalSignIndex) {
              continue;
            }
          }
          
          if (currentEquation[j].match(/[\-\+\*\/\=]/)){
            fixedString = fixedString.concat([currentEquation.slice(firstIndex, j), " ", currentEquation[j], " "].join(''));
            firstIndex = j + 1;
          } 
          
          if (currentEquation[j].match(/[\=]/)){
            equalSignIndex = j;
          }
        }
        fixedEquationSteps.push(fixedString);
      }
      console.log("this is fixedEquationSteps: " + fixedEquationSteps);
      setDisplay(fixedEquationSteps);
    }
  }

  // COMPONENT DID MOUNT SUBSTITUTE
  useEffect(() => {
    //setTimeout(loadAnswers, 1000);
    
 }, []);

 
  


  //PIA
  const [textResponse, setResponse] = useState("Please input your solution or answer for this problem.");
  const [subtextResponse, setSubtext] = useState("");

  const invalidColor = "#b5b7ba";
  const defaultColor = "#e2e8f0";
  const correctColor = "#6edf12";
  const wrongColor = "#ff5842";
  const angryColor = "#f51d00";
  


  
  

  //=========================
  //PHP CONNECT START

  //GET USERLOGS
  {/*
  const [logs, setLogs] = useState([]);
    useEffect(() => {
        getLogs();
    }, []);

    function getLogs() {
      axios.get('http://localhost:80/prototype-react/my-app/api/users/').then(function(response) {
          console.log(response.data);
          setLogs(response.data);
      });
  }
*/}
  //PUT LOGS IN DATABASE
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    setLog(event.target.value);
    setAnswer(event.target.value);

    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    
  };

  
  //SUBMIT
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(answer[answer.length - 1]);

    //If string is not empty
    if (textInput.trim() !== "") {
      axios.post('http://localhost:80/Prototype-React/my-app/api/user/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
    }
    
  };
  //PHP CONNECT END
  //=========================


  // Message Area DIV
  const answerArea = document.getElementById("answer_area");
  const messageArea = document.getElementById("message_area");
  const messageAreaTail = document.getElementById("message_area_tail");
  const imageBackground = document.getElementById("image_bg");
  //Confirmation Area DIV
  const confirmationArea = document.getElementById("solved");

  //Choice Area DIV
  const choiceArea = document.getElementById("choice");

  //Check if problem is solved
  const [isSolved, setFinish] = useState(false);

  //Clear all  timeouts
  var highestTimeoutId = setTimeout(";");



  const nextQuestion = (e) => {
    ReactDOM.findDOMNode(confirmationArea).style.visibility = 'hidden';
    ReactDOM.findDOMNode(choiceArea).style.visibility = 'hidden';
    ReactDOM.findDOMNode(answerArea).style.visibility = 'hidden';
    setDisplay([]);

    setFinish(false);
    newQuestion();
    
    /*
    correctAnswer();
    setDisplay();
    checkCount();
    setLength();
    */
    let count = currentQuestionIndex;
    count ++;
    setQuestionIndex(count);
    checkCount(0);
    computeEquation();
    loadAnswers();
  }



  //=============================CLICK BUTTON=============================
  const handleClick = (event) => {

     //Clear inputbox
     setAnswer("");

     //Focus inputbox
     let inputID = document.getElementById("input_box");
     ReactDOM.findDOMNode(inputID).focus();


     //If string is not empty
    if (textInput.trim() !== "") {
    //Clear all  timeouts
      for (let i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i); 
      }

      

       // **********************API BAD WORDS FILTER**********************

      var Filter = require('bad-words'),
      filter = new Filter();

      var newBadWords = ['stupid', 'idiot', 'dumb', 'tang', 'tangina'];
      filter.addWords(...newBadWords);

      var filipinoBadwords = require("filipino-badwords-list");
      filter.addWords(...filipinoBadwords.array);

      //var valueChanged = false;
      var isProfanity = false;
      var newValue = event.target.value;
      if (newValue !== filter.clean(newValue)) {
        newValue = filter.clean(newValue);
        isProfanity = true;
      }

      console.log("ETO AY BAGO: ",filter.clean(newValue));

      /*
      const options = {
        method: 'GET',
        url: 'https://community-purgomalum.p.rapidapi.com/json',
        params: {text: newValue},
        headers: {
          'X-RapidAPI-Key': '4c703d05c2msh158318bd35bbfbfp11a9a6jsne1fd6658989b',
          'X-RapidAPI-Host': 'community-purgomalum.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log("test: ", response.data);
        if (newValue != response.data.result) {
          valueChanged = true;
        }
        newValue = response.data.result;
        
        checkProfanity();
        if (isProfanity) {
          displayAngry();
        }
        updateLogs();
        return;

      }).catch(function (error) {
        console.error(error);
      });
      */
     
      /*
      function updateLogs () {
        arrSetLog(oldArray => [...oldArray, "User: " + newValue]);
      }

      function checkProfanity () {
        if (valueChanged) {
          isProfanity = true;
          console.log(isProfanity);
          
        }
      }
     */

      

      arrSetLog(oldArray => [...oldArray, "User: " + newValue]);
      
      //Check if the answer is correct *if yes display in whiteboard

      var trimmedText = textInput.replace(/\s/g, '');
      console.log("trim: ", trimmedText);

      if (!isSolved) {
        if (answer.indexOf(trimmedText) > -1) {
          let isRepeat = false;
          let currentIndex = answer.indexOf(trimmedText);

           
          ReactDOM.findDOMNode(answerArea).style.visibility = 'visible';
    
          //Display from n to current
          for (let i = 0; i <= currentIndex; i++) {
            let element = document.getElementById("answer" + i);
    
            if (ReactDOM.findDOMNode(element).style.visibility === 'visible'){
              isRepeat = true;
            } else {
              isRepeat = false;
            }
            
            console.log(element);
            ReactDOM.findDOMNode(element).style.visibility = 'visible';
          }
    
          if (answer[answer.length - 1] === trimmedText) {
            displaySolved();
            return;
          } else {
            //CHECK IF ANSWER IS REPEATED
            if (isRepeat) {
              displayRepeated();
            } else {
              displayCorrect();
            }
          }
        } 

        // WRONG ANSWER or IRRELEVANT
        else {
          let result = trimmedText.match(/[a-zA-Z]/gi);
          if (isProfanity) {
            displayAngry();
          } else if (result.length > 2) {
            displayConfused();
          } else {
            displayWrong();
          }
          
          
          // setResponse("Sometimes we're tested not to show our weaknesses, but to discover our strength. You can do it! Try and solve again.")
        }
      } else {
        if (isProfanity) {
          displayAngrySolved();
        }
        return;
      }
      
      
      //arrUpdateLog("User: " + arrSetLog);

      var objDiv = document.getElementById("logs");
      objDiv.scroll({ top: objDiv.scrollHeight, behavior: 'smooth' });
    }

    //END OF FUNCTION
  };

  function displayAngrySolved () {
    setImageLink("PIA-Mad");

    setResponse("Please refrain from cursing or using any vulgar words");
    setSubtext("");
    ReactDOM.findDOMNode(imageBackground).style.backgroundColor = angryColor;
    ReactDOM.findDOMNode(messageArea).style.backgroundColor = angryColor;
    ReactDOM.findDOMNode(messageAreaTail).style.borderRight = '18px solid ' + angryColor;
    ReactDOM.findDOMNode(confirmationArea).style.visibility = 'hidden';
    ReactDOM.findDOMNode(choiceArea).style.visibility = 'hidden';

    setTimeout(displaySolved, 5000);
  }

  function displaySolved() {
    setImageLink("PIA-Smiling");

    setResponse("Congratulations!\n You solved the given equation.");
    setSubtext("");
    ReactDOM.findDOMNode(imageBackground).style.backgroundColor = correctColor;
    ReactDOM.findDOMNode(messageArea).style.backgroundColor = correctColor;
    ReactDOM.findDOMNode(messageAreaTail).style.borderRight = '18px solid ' + correctColor;

    ReactDOM.findDOMNode(confirmationArea).style.visibility = 'visible';
    ReactDOM.findDOMNode(choiceArea).style.visibility = 'visible';
    setFinish(true);
    
  }

  function displayRepeated() {
    setImageLink("PIA-Confused2");

    setResponse("You already completed that step.");
    setSubtext("");
    ReactDOM.findDOMNode(imageBackground).style.backgroundColor = invalidColor;
    ReactDOM.findDOMNode(messageArea).style.backgroundColor = invalidColor;
    ReactDOM.findDOMNode(messageAreaTail).style.borderRight = '18px solid ' + invalidColor;
    setTimeout(timer, 5000);
  }

  function displayCorrect() {
    setImageLink("PIA-Happy2");

    setResponse("You got the solution right!");
    setSubtext("Good Job!");
    ReactDOM.findDOMNode(imageBackground).style.backgroundColor = correctColor;
    ReactDOM.findDOMNode(messageArea).style.backgroundColor = correctColor;
    ReactDOM.findDOMNode(messageAreaTail).style.borderRight = '18px solid ' + correctColor;
    setTimeout(timer, 5000);
  }

  function displayWrong () {
    setImageLink("PIA-Sad");

    setResponse("Your answer is wrong.");
    setSubtext("Please try again.");
    ReactDOM.findDOMNode(imageBackground).style.backgroundColor = wrongColor;
    ReactDOM.findDOMNode(messageArea).style.backgroundColor = wrongColor;
    ReactDOM.findDOMNode(messageAreaTail).style.borderRight = '18px solid ' + wrongColor;
    setTimeout(timer, 5000);
  }

  function displayConfused() {
    setImageLink("PIA-Confused");

    setResponse("Your answer is irrelevant. Please only input appropriate answer for the given problem.");
    setSubtext("");
    ReactDOM.findDOMNode(imageBackground).style.backgroundColor = wrongColor;
    ReactDOM.findDOMNode(messageArea).style.backgroundColor = wrongColor;
    ReactDOM.findDOMNode(messageAreaTail).style.borderRight = '18px solid ' + wrongColor;
    setTimeout(timer, 5000);
  }


  function displayAngry () {
    setImageLink("PIA-Mad");

    setResponse("Your answer is out of topic. Please refrain from cursing or using any vulgar words");
    setSubtext("");
    ReactDOM.findDOMNode(imageBackground).style.backgroundColor = angryColor;
    ReactDOM.findDOMNode(messageArea).style.backgroundColor = angryColor;
    ReactDOM.findDOMNode(messageAreaTail).style.borderRight = '18px solid ' + angryColor;

    setTimeout(timer, 5000);
  }

  //Revert back text messages and color
  //const a = () => {
    function timer () {
      setImageLink("PIA-Neutral");

      setResponse("Please input your solution or answer for this problem.");
      setSubtext("");
      ReactDOM.findDOMNode(imageBackground).style.backgroundColor = defaultColor;
      ReactDOM.findDOMNode(messageArea).style.backgroundColor = defaultColor;
      ReactDOM.findDOMNode(messageAreaTail).style.borderRight = '18px solid ' + defaultColor;
      //ReactDOM.findDOMNode(messageArea).style.boxShadow = '0px -2px 10px 2px ' + defaultColor;
    };

    function newQuestion () {
      setImageLink("PIA-Neutral");

      setResponse("This is the next question I've got for you.");
      setSubtext("");
      ReactDOM.findDOMNode(imageBackground).style.backgroundColor = defaultColor;
      ReactDOM.findDOMNode(messageArea).style.backgroundColor = defaultColor;
      ReactDOM.findDOMNode(messageAreaTail).style.borderRight = '18px solid ' + defaultColor;
      //ReactDOM.findDOMNode(messageArea).style.boxShadow = '0px -2px 10px 2px ' + defaultColor;
    };
  //};
  

  //    clearInterval(a.timer);


//{arrUpdatedLog.map(log => <p>{log}</p>)}

  const clearLogs = () => {
      arrSetLog([]);
      const options = {
        method: 'POST',
        url: 'https://chatgpt-ai-chat-bot.p.rapidapi.com/ask',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '4c703d05c2msh158318bd35bbfbfp11a9a6jsne1fd6658989b',
          'X-RapidAPI-Host': 'chatgpt-ai-chat-bot.p.rapidapi.com'
        },
        data: '{"text":" Generate 5 linear equation to solve for, only 1 variable, it must be very difficult level and distinct to each other. The equation should be similiar as this example: 2(3x-5) = 3(4x+2)."}'
      };
    
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
  };


 



  return (
    <>
    <input type="text" value="" className="w-full"></input>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=League+Spartan&family=Poppins:wght@200&display=swap');
    </style>
      {/*<!--Container pang edit ng grids-->*/}
      <div className="scale-y-95" onClick={loadAnswers}>
        <div className="w-10/12 mx-auto rounded-bl-6xl rounded-tr-6xl rounded-tl-6xl border-l-12 border-b-12 border-yellow-700 border-r-brTwo border-r-12  md:flex-row items-center  lg:h-2/5 sm:h-1/12  bg-mainBGBrown shadow-2xl shadow-yellow-400  ">
          {/*<!--Mothergrids-->*/}
          <div className="relative grid grid-cols-21 grid-rows-16 bg-mainBrown  overflow-hidden pt-3 pl-3 pr-3 ">
            {/*<!--Button container-->*/}
            <div className="  row-span-16  ">
              
              <nav className="flex flex-col items  ">
                {/*<!--Question-->*/}
                <div className="px-3 py-2 text-gray-500 hover:text-white focus:outline-none focus:text-white rounded-full">
                  <svg
                  
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="cursor-pointer h-11 w-11 text-black/50 bg-gray-400/90 fill-gray-400/90 hover:fill-gray-300/90 hover:bg-gray-300/90 hover:text-white rounded-full p-1"
                  >
                    <title>Help</title>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    />
                  </svg>
                </div>

                {/*<!--Hint-->*/}
                <div  className="px-3 py-2 text-gray-500 hover:text-white focus:outline-none focus:text-white">
                  <svg
                    className="cursor-pointer fill-yellow-400/90 h-11 w-11 text-black/50 bg-yellow-400/90 rounded-full hover:fill-yellow-300/90 hover:bg-yellow-300/90 hover:text-white/70 p-1"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>Hint</title>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>

                {/*<!--Video-->*/}
                <div className="px-3 py-2 text-gray-500 hover:text-white focus:outline-none focus:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="cursor-pointer fill-red-600/90 w-11 h-11 p-1 text-black/50 bg-red-600/90 hover:fill-red-500/90 hover:bg-red-500/90 hover:text-white rounded-full"
                  >
                    <title>Tutorial Video</title>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </div>

                {/*<!--Pen-->*/}
                <div className="px-3 py-2 text-gray-500 hover:text-white focus:outline-none focus:text-white">
                  <svg
                    className="cursor-pointer fill-lime-700/90 h-11 w-11 text-black/50 bg-lime-700/90 rounded-full hover:fill-lime-600/90 hover:bg-lime-600/90 hover:text-white p-1"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <title>Draw</title>
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />{" "}
                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                  </svg>
                </div>
              </nav>
            </div>

            {/*<!--Given Area-->*/}
            <div className="col-span-9 bg-white row-span-2  border-l-12  border-l-brTwo border-t-12 border-t-yellow-700 ">
              <div className="flex relative flex-col ml-7 mt-7">
                <span className="font-poppins text-3.5xl font-medium">
                  <span className="font-bold">Given: &nbsp;</span>{questionList[currentQuestionIndex]}
                </span>
              </div>
            </div>

            {/*<!--Synthetic Facial AREA-->*/}
            <div className="col-span-5 row-span-5  bg-white border-t-12 border-r-12  border-yellow-700">
              <div className="flex  justify-center relative">
                <div id="image_bg" className="relative flex items-center text-center justify-center rounded-full bg-slate-200   object-cover w-65% mt-3 px-6 pt-2 ml-14 overflow-hidden">
                  <img
                    className=""
                    src={require("./facial_expressions/"+imageLink+".png")}
                    alt=""
                  ></img>
                </div>
                <img
                  className="invisible absolute mt-52 object-scale-down w-52 h-52 ml-14"
                  src={require("./streakBG.png")}
                  alt=""
                ></img>
                <h3 className="invisible absolute mt-72 text-2xl font-bold  text-yellow-300 ml-14">
                  <span>
                    STREAK: <span>5</span>
                  </span>
                </h3>
              </div>
            </div>

            {/*<!--Synthetic Facial Message AREA-->*/}
            <div  className="relative overflow-hidden col-span-6 row-span-5 bg-mainBGBrown  ml-3  border-t-12 border-t-yellow-700 border-r-12 border-r-yellow-700  rounded-tr-6xl">
              <div id="message_area_tail" className="absolute w-0 h-0 border-t-25 border-t-transparent border-b-25 border-b-transparent border-r-18 border-r-slate-200 left-0 top-1/3 z-10  bg-brTwo"/>
              <div id="message_area" className="border-l-brTwo border-l-18 relative grid grid-rows-6 h-full w-2/2 shadow-lg shadow-white bg-slate-200 rounded-tr-4xl ">
                
                <div className="row-span-5 flex justify-center text-center items-center  drop-shadow-[0_2px_1px_rgba(255,255,255,0.35)]">

                  <p className=" text-3xl leading-9 font-poppins font-semibold px-4">
                    {textResponse}
                  
                    <p className="text-4.5xl mt-3 font-extrabold "> {subtextResponse}</p>
                  </p>
                  <span id="solved" className="invisible absolute bottom-0 text-2xl leading-9 font-poppins font-semibold">Proceed to next question?</span>
                 
                </div>

                {/*<!-- CONTINUE OR NO area-->*/}
                <div  className="bg-gray-500/20  relative px-8  text-white drop-shadow-[0_2px_1px_rgba(0,0,0,0.35)]">
                  
                  <div className="grid mt-1.5">
                    <div id="choice" onClick={nextQuestion} className="invisible absolute flex items-center justify-center z-10 mx-auto left-0 right-0">
                            <button className="bg-yes hover:bg-lime-500 text-xl font-bold py-1 w-32 rounded-full border border-black font-leagueSpartan text-center">
                            <span className="drop-shadow-[0_2px_1px_rgba(0,0,0,0.35)]">SURE!</span>
                            </button>
                    </div>
                    <div id="choiceTwo" className="invisible grid grid-cols-2">
                      <div className="mx-auto">
                        <button className="bg-yes hover:bg-lime-500 text-xl font-bold py-1 w-32 rounded-full border border-black font-leagueSpartan text-center">
                        <span className="drop-shadow-[0_2px_1px_rgba(0,0,0,0.35)]">SURE!</span>
                        </button>
                      </div>
                      <div className="mx-auto">
                        <button className="bg-no hover:bg-red-600 text-xl font-bold py-1 w-32 rounded-full border border-black font-leagueSpartan text-center">
                          <span className="drop-shadow-[0_2px_1px_rgba(0,0,0,0.35)]">NOT YET</span>
                        </button>
                      </div>
                    </div>
                  
                  </div>
                </div>   
              </div>
            </div>
            {/*&& textInput === "3"*/}
            {/*<!-- main WHITE BOARD area-->*/}
            <div className="col-span-9 row-span-12 bg-white  border-l-12  border-l-brTwo">
              <div className="flex">
                {
                  <p className="ml-32 font-poppins text-3.5xl font-medium">
                    <div id="answer_area" className="invisible p-2 text-center">
                      {
                      answerDisplay.map((ans, index) => (
                        length === index + 1 ? (
                          // last one
                          <div id={"answer" + index} className="invisible px-2 border-black border-2">
                            {ans}
                          </div>
                        ) : (
                          <div id={"answer" + index} className="invisible">{ans}</div>
                        )
                        
                      ))}
                    </div>
                  </p>
                }
              </div>
            </div>
    

            {/*<!--Streak etc. -->*/}
            <div className="col-span-5 row-span-5 bg-white border-r-12  border-yellow-700 ">
              <div className="flex relative">
                
              </div>
            </div>

            {/*<!--userlogs TEXT divider section-->*/}
            <div className="col-span-6 ml-3 border-l-18 border-brTwo pt-1 bg-mainBGBrown ">
              <div className="flex justify-center text-center border-dotted border-b-4">
                <p className="text-3.5xl font-poppins font-bold text-white overflow-hidden">USER LOGS</p>
              </div>
            </div>

            {/*<!--userLogs STORING area -->*/}
            <div className="col-span-5 row-span-9 ml-3 border-l-18 border-brTwo">
              <div id="logs" className="px-5 overflow-auto max-h-31rem -mr-20 style-1 pb-11">
                {
                  <p className=" text-white break-all font-poppins text-3xl">
                    {arrTextLog.map(entry =>
                      <p>{entry}</p>
                    )}
                  </p>
                }
              </div>
            </div>

            {/*<!--White area in whiteboard under synthetic face-->*/}
            <div className="col-span-5 row-span-4 bg-white border-r-12  border-r-yellow-700">
              <div className="flex justify-center"></div>
            </div>

            {/*<!--text Area-->*/}
            <div className="col-span-14 row-span-2  rounded-bl-5xl bg-mainBGBrown border-r-yellow-700 border-r-12 ">
              <div className="flex flex-col  border-borderBr rounded-5xl border-12 mt-3.5 m-3.5 mx-4 ">
                <div className="relative  bg-borderBr font-poppins ">
                  <form onSubmit={handleSubmit}>
                    <input
                      id="input_box"
                      value={textInput}
                      onChange={handleChange}
                      maxLength="50"
                      type="text"
                      name="chat"
                      className=" block rounded-5xl w-full p-5  text-2xl"
                      placeholder="Input"
                    ></input>
                    <button
                      onClick={textInput !== "" ? handleClick : undefined}
                      value={textInput}
                      className="text-white text-xl font-light absolute right-2.5 bottom-2 bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full  px-4 py-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/*<!--Trashcan area-->*/}
            <div className="col-span-6 ml-3 border-l-18 border-brTwo ">
              <div className="flex justify-end -mt-8 overflow-hidden ">
                <button className="" onClick={clearLogs}>
                  <svg
                    className="h-20 w-20 bg-white rounded-full p-3 hover:bg-gray-300"
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    //xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                  >
                    <defs>
                      <linearGradient
                        id="linear-gradient"
                        x1="256"
                        y1="582.3"
                        x2="256"
                        y2="-70.35"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#231f20" />
                        <stop offset="1" stop-color="#58595b" />
                      </linearGradient>
                    </defs>
                    <title>Clear Logs</title>
                    <path
                      d="M84.47,16.86,231.05,37.92l1.87-13.33a28.45,28.45,0,0,1,32-24.31h0a28.65,28.65,0,0,1,24,32.35L287,46,433.62,67A21.88,21.88,0,0,1,452,91.74v0a21.69,21.69,0,0,1-24.43,18.56L78.38,60.15A21.88,21.88,0,0,1,60,35.43v0A21.72,21.72,0,0,1,84.47,16.86Zm328,92H88.56c-12.17,0-20.67,10-18.86,22.14l52.93,358.9C124.44,502.05,135.85,512,148,512H352.55c12.15,0,23.58-9.95,25.4-22.08L431.31,131C433.12,118.81,424.64,108.85,412.49,108.85ZM179.79,432.73l-.69.07a13.34,13.34,0,0,1-14.48-12.07L141.8,182.35a13.42,13.42,0,0,1,11.91-14.66l.69-.07a13.37,13.37,0,0,1,14.48,12.07l22.84,238.4A13.4,13.4,0,0,1,179.79,432.73ZM264.09,420a13.37,13.37,0,0,1-13.27,13.44h-.67A13.41,13.41,0,0,1,236.87,420V180.48A13.41,13.41,0,0,1,250.15,167h.67a13.37,13.37,0,0,1,13.27,13.44Zm71.6.78A13.35,13.35,0,0,1,321.2,432.8l-.72-.07a13.44,13.44,0,0,1-11.89-14.68l23.09-238.37a13.36,13.36,0,0,1,14.52-12l.65.07a13.44,13.44,0,0,1,11.94,14.66Z"
                      fill-rule="evenodd"
                      fill="url(#linear-gradient)"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
