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

export const askTheAudience = createContext(0)

export function AskTheAudienceProvider({children}){
    const [askAudience, setAskAudience] = useState(0)
    return(
        <askTheAudience.Provider value={{askAudience, setAskAudience}}>
            {children}
        </askTheAudience.Provider>
    )
}

// ********************************************************************

export const fiftyFiftyContext = createContext(0)

export function FiftyFiftyProvider({children}){
    const [fiftyFifty, setFiftyFifty] = useState(0)
    return(
        <fiftyFiftyContext.Provider value={{fiftyFifty, setFiftyFifty}}>
            {children}
        </fiftyFiftyContext.Provider>
    )
}

// ********************************************************************

export const phoneAFriend = createContext(0)

export function PhoneAFriendProvider({children}){
    const [phoneFriend, setPhoneFriend] = useState(0)
    return(
        <phoneAFriend.Provider value={{phoneFriend, setPhoneFriend}}>
            {children}
        </phoneAFriend.Provider>
    )
}