"use client"

import { useState } from "react"
import { createContext } from "react"

// ********************************************************************

export const totalScore = createContext(0)

export function TotalScoreProvider({children}){
    const [score, setScore] = useState(0)
    return(
        <totalScore.Provider value={{score, setScore}}>
            {children}
        </totalScore.Provider>
    )
}

// ********************************************************************

export const currentQuestion = createContext(1)

export function CurrentQuestionProvider({children}){
    const [question, setQuestion] = useState(1)
    return(
        <currentQuestion.Provider value={{question, setQuestion}}>
            {children}
        </currentQuestion.Provider>
    )
}

// ********************************************************************

export const askTheAudienceCount = createContext(0)

export function AskTheAudienceProvider({children}){
    const [count, setCount] = useState(0)
    return(
        <askTheAudienceCount.Provider value={{count, setCount}}>
            {children}
        </askTheAudienceCount.Provider>
    )
}

// ********************************************************************

export const fiftyFiftyCount = createContext(0)

export function FiftyFiftyProvider({children}){
    const [count, setCount] = useState(0)
    return(
        <fiftyFiftyCount.Provider value={{count, setCount}}>
            {children}
        </fiftyFiftyCount.Provider>
    )
}