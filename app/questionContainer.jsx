"use client"

import { useState, useRef, useEffect } from "react";
import { shuffleArray } from "./utils/arrayManip"

import ScrollReveal from 'scrollreveal'

// import { initialQuestionsAndAnswers } from "./subject-files/reviewer";

export default function QuestionContainer({ number, questions, answers, randoms, onSetAnswersList, isDisable }) {

  const handleChange = (e) => {
    onSetAnswersList(number, e.target.value)
    console.log(e.target.value); 
  }
  
  return (
    <div className="w-full h-auto p-6 border-2 border-slate-900 rounded-2xl my-4 hyphens-auto backdrop-blur-sm">
      <div className="text-center text-xl pb-4">
        {questions}
      </div>
      <hr className="mb-4 border-slate-500" />
      <div onChange={handleChange}>
        <AnswersContainer 
          number={number}
          answers={answers} 
          randoms={randoms} 
          isDisable={isDisable}
        />
      </div>
    </div>
  )
}

function AnswersContainer({ number, answers, randoms, isDisable }) {
  const choicesArr = shuffleArray(randoms)
  choicesArr.splice(3);
  choicesArr.push(answers)
  const choices = shuffleArray(choicesArr)

  return (
    <>
      {
        choices.map((choice, index) => (
          <label 
            key={index}
            className="h-16 w-full flex items-center"
          >
            <input type="radio" name={number} value={choice} disabled={isDisable} className="mr-4 size-6 text-lg align-middle" />
            <span>{choice}</span>
          </label>
        ))
      }
    </>
  )
}

// "Information Assurance"
// "Confidentiality"
// "Integrity"
// "Availability"
// "Authentication"
// "Non-Repudiation"

// 1. Fisher-Yates Shuffle (most efficient)


// 2. Using sort() method
// function shuffleArray(arr) {
//   return arr.sort(() => Math.random() - 0.5);
// }

// 3. Using random() and splice()
// function shuffleArray(arr) {
//   const shuffled = [];
//   while (arr.length > 0) {
//     const randomIndex = Math.floor(Math.random() * arr.length);
//     shuffled.push(arr.splice(randomIndex, 1)[0]);
//   }
//   return shuffled;
// }


// 1. Using length property
// const arr = [1, 2, 3, 4, 5];
// arr.length = 3; // truncate to 3 elements
// console.log(arr); // [1, 2, 3]

// arr.length = 6; // extend to 6 elements
// console.log(arr); // [1, 2, 3, empty × 3]

// 2. Using splice()
// const arr = [1, 2, 3, 4, 5];
// arr.splice(3); // remove from index 3 to end
// console.log(arr); // [1, 2, 3]

// arr.splice(3, 0, 4, 5, 6); // insert at index 3
// console.log(arr); // [1, 2, 3, 4, 5, 6]

// 3. Using slice()
// const arr = [1, 2, 3, 4, 5];
// const resizedArr = arr.slice(0, 3); // copy first 3 elements
// console.log(resizedArr); // [1, 2, 3]

// 4. Using concat()
// const arr = [1, 2, 3];
// const resizedArr = arr.concat([4, 5, 6]); // append new elements
// console.log(resizedArr); // [1, 2, 3, 4, 5, 6]

// 5. Using Array.prototype.fill()
// const arr = new Array(6).fill(0); // create array with 6 zeros
// console.log(arr); // [0, 0, 0, 0, 0, 0]

// 6. Using Array.from()
// const arr = Array.from({length: 6}, (_, i) => i); // create array with 6 elements
// console.log(arr); // [0, 1, 2, 3, 4, 5]