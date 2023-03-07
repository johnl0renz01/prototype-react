import React, { Component } from "react";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as ReactDOM from 'react-dom';
import $ from "jquery";

import QuestionList from './questionList';
import MY_API_KEY from './API_KEY';

export default function DifficultyPage() {

    const navigate = useNavigate();

    const [rawList, setRawList] = useState("");
    const [questionArray, setQuestionArray] = useState([]);
    const [questionList, setQuestions] = useState([]);
    const [result, setResult] = useState([]);

    var equationList = [];

    useEffect(() => {
        const data = window.localStorage.getItem('QUESTION_LIST');
        if (data !== null) setQuestions(JSON.parse(data))
    }, [])

    useEffect(() => {
        window.localStorage.setItem('QUESTION_LIST', JSON.stringify(questionList))
    }, [questionList])

    const whiteboard = () => {
        navigate('/Whiteboard');
    }
    
    /*
    const getData = () => {
        fetch('http://localhost:80/Prototype-React/my-app/api/setVariables.php')
        .then((response)=>response.json())
        .then((responseJson)=>
        {
            console.log(responseJson);
        })
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        
        });
        /*
        axios.post(`http://localhost:80/Prototype-React/my-app/api/setVariables.php`).then(function(response){
            console.log("axios is: " + response.data);
        });
        axios.post(`http://localhost:80/Prototype-React/my-app/api/data.php`, rawList).then(function(response){
            console.log("axios is: " + response.data);
        });
       
    };
   */

    const pickDifficulty = (equationString) => {
        equationString = "";
        const options = {
          method: 'POST',
          url: 'https://chatgpt-ai-chat-bot.p.rapidapi.com/ask',
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': MY_API_KEY.getGPT_KEY(),
            'X-RapidAPI-Host': 'chatgpt-ai-chat-bot.p.rapidapi.com'
          },
          data: '{"text":" Generate 5 linear equation to solve for, only 1 variable, it must be very difficult level and distinct to each other. The equation should be similiar as this example: 2(3x-5) = 3(4x+2), or much even complicated, randomize each equation, include multiplication symbol between expressions, values can range from 1-1000. Put each equation inside bracket []"}'
        };
      
        axios.request(options).then(function (response) {
            console.log(response);
            console.log(response.data);
            console.log(response.data.split(""));

            let dataSplit = response.data.split("");
            setRawList(response.data);
            let firstBracket = 0;
            let secondBracket = 0;
            
            for (let i = 0; i < dataSplit.length; i++) {
                let closingBracket = false
                if (dataSplit[i].match(/[\[]/)) {
                    firstBracket = i;
                } else if (dataSplit[i].match(/[\]]/)) {
                    secondBracket = i;
                    closingBracket = true;
                }

                if (closingBracket) {
                    let equation = [dataSplit.slice((firstBracket + 1), secondBracket)].join('');
                    equation = equation.replaceAll(",","");
                    equationString = equation;
                    console.log("this isequation: " + equationString);
                    equationList.push(equationString);
                    setQuestionArray(oldArray => [...oldArray, equationString]);
                    closingBracket = false;
                }
            }

            /*
            console.log("equation list array : " + equationList[0]);
            console.log("questionArray : " + questionArray.length);
            for (let i = 0; i < questionArray.length; i++) {
                console.log("mewo mewo : " + questionArray[i]);
                setQuestions(questionArray[i]);
            }
            */

            setQuestions(equationList);
            /*
            
            console.log("questionList length: " + questionList.length);
            console.log("questionList array: " + questionList);
            for (let i = 0; i < questionList.length; i++) {
                console.log("arf arf: " + questionList[i]);
            }
            */
  

            /* 
            useEffect(() => {
                getLogs();
            }, []);
            
            function getLogs() {
                console.log(response.data);
                setLogs(response.data);
            }

            console.log(equationList);
            console.log(equationList[0]);
            */

            

            console.log(equationList[0]);
            QuestionList.setQuestionString(equationString);

            setTimeout(proceedWhiteboard, 1000);

            function proceedWhiteboard () {
                navigate('/Whiteboard');
              };
            /*
            for (let i = 0; i < response.data.length; i++) {
                console.log(response.data);
            }
            */
           
        }).catch(function (error) {
          console.error(error);
        });
    };
   
    return (
        <>
        <section >
        {/* <input type="text" value={result} className="w-full"></input>*/}
            <div className="mx-auto my-16 w-8/12 select-none">
                <div className="px-6 py-8 pb-32 rounded-6xl  border-l-12 border-b-12 border-gray-600/60 bg-gradient-to-t from-gray-200 via-white to-white border-r-12 border-r-gray-300/80 shadow-2xl shadow-yellow-400">
                    <div className="px-6 py-24  rounded-4xl  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-6 lg:py-6">
                        <div className="mb-6 mx-auto sm:text-center md:mb-10 ">
                            <p className="mb-2 text-4xl font-semibold leading-none text-center ">
                                Select the Difficulty Level You Want to Answer
                            </p>
                        </div>
                        <div className="w-full grid gap-x-12 row-gap-5 lg:grid-cols-3 pt-3 select-none">
                        {/* 
                        <form  
                            action="http://localhost:80/Prototype-React/my-app/api/data.php"
                            method="post"
                            onSubmit={(event) => handleSubmit(event)}>
                            <input type="text" name="rawList" id="rawList" value={rawList}></input>
                        */}
                        <button onClick={pickDifficulty} className="w-full transform transition duration-500 hover:scale-105">

                            <div className="relative h-12 w-20 m-auto bg-gray-400 rounded-tl-full rounded-tr-full border-l-4 border-l-gray-500 border-r-4 border-r-gray-300"></div>
                            <div className="relative -mt-9 h-9 w-12 pl-1 border-r-4 border-gray-500 m-auto bg-white rounded-tl-full rounded-tr-full "></div>
                            
                            <div  className="relative -mt-10">
                                <div className="relative rounded-5xl bg-gray-600 w-7/12 h-14 mx-auto mt-6 z-10 border-l-6 border-b-6 border-gray-700/80 border-r-6 border-r-gray-500">
                                   
                            </div>
                                <div className="relative text-gray-800 hover:shadow-xl transform transition duration-500 hover:text-lime-500 hover:shadow-lime-400 -mt-10 bg-mainBGBrown rounded-4xl border-l-8 border-b-8 border-yellow-700 border-r-8 border-r-brTwo shadow-md shadow-yellow-900/90 pl-8 pr-8 py-6 pb-12 ">
                                    <div className="border-l-4 border-b-4 border-gray-600/60 border-r-4 border-r-gray-300/80 shadow-md shadow-yellow-800">
                                        <div className="bg-white border-b-2 border-black/70 py-4">
                                        </div>
                                        <div className="bg-white grid grid-cols-4 text-left border-b-2 border-black/70">
                                            <div className="rounded-full border-3 text-black/80 border-black/80 h-9 w-9 m-auto text-center text-lg font-semibold">      
                                                1
                                            </div>
                                            <div className="col-span-3">
                                                <p className="w-full  rounded lg:text-1.5xl  sm:text-md text-black/80 py-3">
                                                    2x - 2 = 1
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white grid grid-cols-4 text-left border-b-2 border-black/70">
                                            <div className="rounded-full border-3 border-black/80 text-black/80 h-9 w-9 m-auto text-center text-lg font-semibold">      
                                                2
                                            </div>
                                            <div className="col-span-3">
                                                <p className="w-full  rounded lg:text-1.5xl  sm:text-md text-black/80 py-3">
                                                    3x = -4
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white grid grid-cols-4 text-left border-b-2 border-black/70">
                                            <div className="rounded-full border-3 border-black/80 text-black/80 h-9 w-9 m-auto text-center text-lg font-semibold">      
                                                3
                                            </div>
                                            <div className="col-span-3">
                                                <p className="w-full  rounded lg:text-1.5xl  sm:text-md text-black/80 py-3">
                                                    9x + 13 = -4x
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white grid grid-cols-4 text-left border-b-2 border-black/70">
                                            <div className="rounded-full border-3 border-black/80 text-black/80 h-9 w-9 m-auto text-center text-lg font-semibold">      
                                                4
                                            </div>
                                            <div className="col-span-3">
                                                <p className="w-full  rounded lg:text-1.5xl  sm:text-md text-black/80 py-3">
                                                    2x - 2 = 1
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white grid grid-cols-4 text-left border-b-2 border-black/70">
                                            <div className="rounded-full border-3 border-black/80 text-black/80 h-9 w-9 m-auto text-center text-lg font-semibold">      
                                                5
                                            </div>
                                            <div className="col-span-3">
                                                <p className="w-full  rounded lg:text-1.5xl  sm:text-md text-black/80 py-3">
                                                    2x - 2 = 1
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white py-4">
                                        </div>
                                    </div>
                                    <p className="absolute mt-24 z-10 left-0 right-0 text-xl font-bold leading-none sm:text-4xl text-center">
                                        EASY
                                    </p>
                                    <p className="absolute mt-24 pt-0.5 text-gray-700 left-0 right-0 text-xl font-bold leading-none sm:text-4xl text-center">
                                    EASY
                                    </p>
                                </div>
                            </div>
                        
                        </button>
                        {/*  </form> */}
        
                        {/*<!--Average-->*/}
        
                        <button onClick={""} className="w-full transform transition duration-500 hover:scale-105">
        
                            <div className="relative h-12 w-20 m-auto bg-gray-400 rounded-tl-full rounded-tr-full border-l-4 border-l-gray-500 border-r-4 border-r-gray-300"></div>
                            <div className="relative -mt-9 h-9 w-12 pl-1 border-r-4 border-gray-500 m-auto bg-white rounded-tl-full rounded-tr-full "></div>
                            
                            <div  className="relative -mt-10">
                                <div className="relative rounded-5xl bg-gray-600 w-7/12 h-14 mx-auto mt-6 z-10 border-l-6 border-b-6 border-gray-700/80 border-r-6 border-r-gray-500">
                                    
                            </div>
                                <div className="relative -mt-10 text-gray-800 hover:shadow-xl transform transition duration-500 hover:shadow-xl hover:text-yellow-500 hover:shadow-yellow-400 bg-mainBGBrown rounded-4xl border-l-8 border-b-8 border-yellow-700 border-r-8 border-r-brTwo shadow-md shadow-yellow-900/90 pl-8 pr-8 py-6 pb-12 ">
                                    <div className="border-l-4 border-b-4 border-gray-600/60 border-r-4 border-r-gray-300/80 shadow-md shadow-yellow-800">
                                        <div className="bg-white border-b-2 border-black/70 py-4">
                                        </div>
                                        <div className="bg-white grid grid-cols-4 text-left border-b-2 border-black/70">
                                            <div className="rounded-full border-3 text-black/80 border-black/80 h-9 w-9 m-auto text-center text-lg font-semibold">      
                                                1
                                            </div>
                                            <div className="col-span-3">
                                                <p className="w-full  rounded lg:text-1.5xl  sm:text-md text-black/80 py-3">
                                                    16x + 3 = 3x - 2
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white grid grid-cols-4 text-left border-b-2 border-black/70">
                                            <div className="rounded-full border-3 border-black/80 text-black/80 h-9 w-9 m-auto text-center text-lg font-semibold">      
                                                2
                                            </div>
                                            <div className="col-span-3">
                                                <p className="w-full  rounded lg:text-1.5xl  sm:text-md text-black/80 py-3">
                                                    23x + 2 = 13x - 26
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white grid grid-cols-4 text-left border-b-2 border-black/70">
                                            <div className="rounded-full border-3 border-black/80 text-black/80 h-9 w-9 m-auto text-center text-lg font-semibold">      
                                                3
                                            </div>
                                            <div className="col-span-3">
                                                <p className="w-full  rounded lg:text-1.5xl  sm:text-md text-black/80 py-3">
                                                    5x - 2 = 2x + 9
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white grid grid-cols-4 text-left border-b-2 border-black/70">
                                            <div className="rounded-full border-3 border-black/80 text-black/80 h-9 w-9 m-auto text-center text-lg font-semibold">      
                                                4
                                            </div>
                                            <div className="col-span-3">
                                                <p className="w-full  rounded lg:text-1.5xl  sm:text-md text-black/80 py-3">
                                                    2x - 2 = 1
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white grid grid-cols-4 text-left border-b-2 border-black/70">
                                            <div className="rounded-full border-3 border-black/80 text-black/80 h-9 w-9 m-auto text-center text-lg font-semibold">      
                                                5
                                            </div>
                                            <div className="col-span-3">
                                                <p className="w-full  rounded lg:text-1.5xl  sm:text-md text-black/80 py-3">
                                                    2x - 2 = 1
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white py-4">
                                        </div>
                                    </div>
                                    <p className="absolute mt-24 z-10 left-0 right-0 text-xl font-bold leading-none sm:text-4xl text-center">
                                        AVERAGE
                                    </p>
                                    <p className="absolute mt-24 pt-0.5 text-gray-700 left-0 right-0 text-xl font-bold leading-none sm:text-4xl text-center">
                                        AVERAGE
                                    </p>
                                </div>
                            </div>
                        
                        </button>
        
                        {/*<!--DIFFICULT-->*/}
        
                        <button onClick={""} className="w-full transform transition duration-500 hover:scale-105">
        
                            <div className="relative h-12 w-20 m-auto bg-gray-400 rounded-tl-full rounded-tr-full border-l-4 border-l-gray-500 border-r-4 border-r-gray-300"></div>
                            <div className="relative -mt-9 h-9 w-12 pl-1 border-r-4 border-gray-500 m-auto bg-white rounded-tl-full rounded-tr-full "></div>
                            
                            <div  className="relative -mt-10">
                                <div className="relative rounded-5xl bg-gray-600 w-7/12 h-14 mx-auto mt-6 z-10 border-l-6 border-b-6 border-gray-700/80 border-r-6 border-r-gray-500">
                                    
                            </div>
                                <div className="relative -mt-10 text-gray-800 hover:shadow-xl transform transition duration-500 hover:shadow-xl hover:text-red-600 hover:shadow-red-500 bg-mainBGBrown rounded-4xl border-l-8 border-b-8 border-yellow-700 border-r-8 border-r-brTwo shadow-md shadow-yellow-900/90 pl-8 pr-8 py-6 pb-12 ">
                                    <div className="border-l-4 border-b-4 border-gray-600/60 border-r-4 border-r-gray-300/80 shadow-md shadow-yellow-800">
                                        <div className="bg-white border-b-2 border-black/70 py-4">
                                        </div>
                                        <div className="bg-white grid grid-cols-4 text-left border-b-2 border-black/70">
                                            <div className="rounded-full border-3 border-black/80 h-9 w-9 m-auto text-center text-lg font-semibold">      
                                                1
                                            </div>
                                            <div className="col-span-3">
                                                <p className="w-full  rounded lg:text-1.5xl  sm:text-md text-black/80 py-3">
                                                    2(3x - 5) = 3(4x + 2)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white grid grid-cols-4 text-left border-b-2 border-black/70">
                                            <div className="rounded-full border-3 border-black/80 text-black/80 h-9 w-9 m-auto text-center text-lg font-semibold">      
                                                2
                                            </div>
                                            <div className="col-span-3">
                                                <p className="w-full  rounded lg:text-1.5xl  sm:text-md text-black/80 py-3">
                                                    4(2x - 1) = 2(3x - 8)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white grid grid-cols-4 text-left border-b-2 border-black/70">
                                            <div className="rounded-full border-3 border-black/80 text-black/80 h-9 w-9 m-auto text-center text-lg font-semibold">      
                                                3
                                            </div>
                                            <div className="col-span-3">
                                                <p className="w-full  rounded lg:text-1.5xl  sm:text-md text-black/80 py-3">
                                                    7(x - 1) = -5(x + 5)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white grid grid-cols-4 text-left border-b-2 border-black/70">
                                            <div className="rounded-full border-3 border-black/80 text-black/80 h-9 w-9 m-auto text-center text-lg font-semibold">      
                                                4
                                            </div>
                                            <div className="col-span-3">
                                                <p className="w-full  rounded lg:text-1.5xl  sm:text-md text-black/80 py-3">
                                                    2x - 2 = 1
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white grid grid-cols-4 text-left border-b-2 border-black/70">
                                            <div className="rounded-full border-3 border-black/80 text-black/80 h-9 w-9 m-auto text-center text-lg font-semibold">      
                                                5
                                            </div>
                                            <div className="col-span-3">
                                                <p className="w-full  rounded lg:text-1.5xl  sm:text-md text-black/80 py-3">
                                                    2x - 2 = 1
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white py-4">
                                        </div>
                                    </div>
                                    <p className="absolute mt-24 z-10 left-0 right-0 text-xl font-bold leading-none sm:text-4xl text-center">
                                        DIFFICULT
                                    </p>
                                    <p className="absolute mt-24 pt-0.5 text-gray-700 left-0 right-0 text-xl font-bold leading-none sm:text-4xl text-center">
                                        DIFFICULT
                                    </p>
                                </div>
                            </div>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

