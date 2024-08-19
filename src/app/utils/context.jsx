"use client"

import { useState } from "react"
import { createContext } from "react"

// ********************************************************************

export const totalScore = createContext()

export function TotalScoreProvider({children}){
    const [score, setScore] = useState(0)
    return(
        <totalScore.Provider value={{score, setScore}}>
            {children}
        </totalScore.Provider>
    )
}

// ********************************************************************

export const currentQuestion = createContext()

export function CurrentQuestionProvider({children}){
    const [question, setQuestion] = useState(1)
    return(
        <currentQuestion.Provider value={{question, setQuestion}}>
            {children}
        </currentQuestion.Provider>
    )
}

// ********************************************************************

export const askTheAudience = createContext()

export function AskTheAudienceProvider({children}){
    const [askAudience, setAskAudience] = useState(0)
    return(
        <askTheAudience.Provider value={{askAudience, setAskAudience}}>
            {children}
        </askTheAudience.Provider>
    )
}

// ********************************************************************

export const askTheAudienceData = createContext()

export function AskTheAudienceDataProvider({children}){
    const [askAudienceData, setAskAudienceData] = useState(null)
    return(
        <askTheAudienceData.Provider value={{askAudienceData, setAskAudienceData}}>
            {children}
        </askTheAudienceData.Provider>
    )
}

// ********************************************************************

export const fiftyFiftyContext = createContext()

export function FiftyFiftyProvider({children}){
    const [fiftyFifty, setFiftyFifty] = useState(0)
    return(
        <fiftyFiftyContext.Provider value={{fiftyFifty, setFiftyFifty}}>
            {children}
        </fiftyFiftyContext.Provider>
    )
}

// ********************************************************************

export const phoneAFriend = createContext()

export function PhoneAFriendProvider({children}){
    const [phoneFriend, setPhoneFriend] = useState(0)
    return(
        <phoneAFriend.Provider value={{phoneFriend, setPhoneFriend}}>
            {children}
        </phoneAFriend.Provider>
    )
}

// ********************************************************************

export const phoneAFriendData = createContext()

export function PhoneAFriendDataProvider({children}){
    const [phoneFriendData, setPhoneFriendData] = useState(null)
    return(
        <phoneAFriendData.Provider value={{phoneFriendData, setPhoneFriendData}}>
            {children}
        </phoneAFriendData.Provider>
    )
}

