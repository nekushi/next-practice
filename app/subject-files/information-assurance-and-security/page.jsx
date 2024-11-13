"use client"

import Nav from "@/app/nav"
import { initialQuestionsAndAnswers, randomChoicesInfoAssurance } from "../reviewer"
import QuestionContainer from "@/app/questionContainer"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'

import ScrollReveal from "scrollreveal"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"

export default function InfoAssurance() {

  const [ initialQuestionsInfoAssurance, setInitialQuestionsInfoAssurance ] = useState([])
  const [ answersInfoAssurance, setAnswersInfoAssurance ] = useState([])

  const [ corrects, setCorrects ] = useState(0)
  const [ incorrects, setIncorrects ] = useState(0)
  const [ isDisable, setIsDisable ] = useState(false)

  const answersListRef = useRef(Array(initialQuestionsAndAnswers.infoAssurance.length).fill(null));

  const handleIncrementScore = (i, answer) => {
    // Update the current array stored in the ref
    const currentAnswersList = [...answersListRef.current];
    currentAnswersList[i - 1] = answer; // This logic preserves the array structure
    answersListRef.current = currentAnswersList; // Update the ref with the modified array
    console.log(answersListRef.current);
  };
  
  const handleCalculateScores = () => {
    answersListRef.current.forEach((answer, index) => {
      if (answer === initialQuestionsAndAnswers.infoAssurance[index].answer) {
        setCorrects(corrects => corrects + 1)
      } else {
        setIncorrects(incorrects => incorrects + 1)
      }
      console.log(`Current index: ${index}`);
      console.log(`Answer: ${answer}`);
      console.log(`Right answer: ${initialQuestionsAndAnswers.infoAssurance[index].answer}`);
    })
    setIsDisable(isDisable => !isDisable)
  }

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      setInitialQuestionsInfoAssurance(initialQuestionsAndAnswers.infoAssurance)
      setAnswersInfoAssurance(randomChoicesInfoAssurance)
    }

    ScrollReveal().reveal("#asd > *", { interval: 300 })

    return () => { ignore = true }
  }, [])

  return (
    <div id="asd" className="relative z-10 h-hundo">
      <Nav />
      <div className="overflow-auto no-scrollbar max-md:h-144 h-160"> 
        <h1>Welcome to Information Assurance and Security</h1>
        {
          initialQuestionsInfoAssurance.map(questions => (
            <QuestionContainer 
              key={questions.id} 
              number={questions.id}
              questions={questions.question} 
              answers={questions.answer} 
              randoms={answersInfoAssurance}
              onSetAnswersList={handleIncrementScore}
              isDisable={isDisable}
            />
          ))
        }
        <div 
          className="
            [&>button]:border-2 [&>button]:rounded-lg  
            mt-8 flex justify-between"
        >
          <button 
            className="
              border-red-400 max-md:active:bg-red-300 
              md:hover:bg-red-300 md:hover:font-semibold"
            onClick={() => {
              alert("sorry di ko kaya. paiyak na ako")
            }}
          >
            <div className="px-4 py-2">
              Reset Form
            </div>
          </button>
          <button 
            className="
              border-green-400 max-md:active:bg-green-300 
              md:hover:bg-green-300 md:hover:font-semibold"
          >
            {!isDisable 
              ? 
                <div 
                  onClick={handleCalculateScores}
                  className="px-4 py-2"
                >
                  Submit Answers
                </div>
              :
                <Link href={{
                  pathname: "/resultPage",
                  query: {
                    name: "Ivan",
                    correctScores: corrects,
                    incorrectScores: incorrects,
                    totalItems: initialQuestionsAndAnswers.infoAssurance.length,
                  }
                }}>
                  <div className="px-4 py-2 flex items-center">
                    Next
                    <FontAwesomeIcon icon={faArrowAltCircleRight} className="max-md:text-sm max-md:ml-2 ml-3 text-lg align-middle" />
                  </div>
                </Link>
            }
          </button>
        </div>
      </div>
    </div>
  )
}


// history.pushState({ name: "example@example.com" }, "", pathname + "/resultPage");
// router.push("/resultPage");