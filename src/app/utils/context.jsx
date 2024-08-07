"use client"

import { useState } from "react"
import { createContext } from "react"

export const totalScore = createContext(0)

export function TotalScoreProvider({children}){
    const [count, setCount] = useState(0)
    return(
        <totalScore.Provider value={{count, setCount}}>
            {children}
        </totalScore.Provider>
    )
}

export const questionNumber = createContext(0)

export function QuestionNumberProvider({children}){
    const [count, setCount] = useState(0)
    return(
        <questionNumber.Provider value={{count, setCount}}>
            {children}
        </questionNumber.Provider>
    )
}

export const askTheAudience = createContext(0)

export function AskTheAudienceProvider({children}){
    const [count, setCount] = useState(0)
    return(
        <askTheAudience.Provider value={{count, setCount}}>
            {children}
        </askTheAudience.Provider>
    )
}

export const fiftyFiftyCount = createContext(0)

export function FiftyFiftyProvider({children}){
    const [count, setCount] = useState(0)
    return(
        <fiftyFiftyCount.Provider value={{count, setCount}}>
            {children}
        </fiftyFiftyCount.Provider>
    )
}

export const phoneAFriend = createContext(0)

export function PhoneAFriendProvider({children}){
    const [count, setCount] = useState(0)
    return(
        <phoneAFriend.Provider value={{count, setCount}}>
            {children}
        </phoneAFriend.Provider>
    )
}