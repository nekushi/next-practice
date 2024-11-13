"use client"

import Nav from "../nav"

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";

import ScrollReveal from 'scrollreveal'

export default function ResultPage() {
  
  const searchParams = useSearchParams()

  const corrects = searchParams.get("correctScores")
  const incorrects = searchParams.get("incorrectScores")
  const totalItems = searchParams.get("totalItems")

  return (
    <div className="h-hundo">
      <Nav />
      <h1>Welcome to Result Page</h1>
      <div className="grid place-items-center max-md:mt-24 mt-16">
        <CorrectComponent corrects={corrects} incorrects={incorrects} totalItems={totalItems} />
      </div>
    </div>
  )
}

function CorrectComponent({ corrects, incorrects, totalItems }) {
  // TODO TOMORROW
  // - add score percentage (DONE)
  // - add more questions (DONE)
  // - try that scroll animation library (DONE)
  // - improve ui (MEH)
  // - add background (MEH)
  // - add function on Clear Form button (MEH)
  // - fix multiple choices

  useEffect(() => {
    ScrollReveal().reveal("#result", { duration: 2000 })
  }, [])

  const percentage = `${Math.round((corrects / totalItems) * 100)}%`

  return (
    <div id="result" className="max-sm:w-full max-md:w-80 w-128 mx-auto aspect-square border-4 rounded-xl grid place-items-center" style={{ borderColor: (parseInt(percentage) >= 75 ? "green" : "red")}}>
      <div className="flex flex-col items-center">
        <p className="max-md:text-8xl text-9xl font-black" style={{ color: (parseInt(percentage) >= 75 ? "#32ff00" : "#ff4444")}}>{percentage}</p>
        <p className="max-md:text-xl text-4xl">You got {corrects} out of {totalItems}</p>
      </div>
    </div>
  )
}

