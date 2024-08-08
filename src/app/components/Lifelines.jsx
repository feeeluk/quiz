"use client"

import { useState} from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import { AddUser } from "./AddUser"
import { UpdateLeaderboard } from "./UpdateLeaderboard"
import { fiftyFiftyContext, totalScore } from "../utils/context"
import { currentQuestion } from "../utils/context"
import { askTheAudience } from "../utils/context"
import { fiftyFifty } from "../utils/context"
import { phoneAFriend } from "../utils/context"

export function Lifelines({quizID, answer_1, answer_2, answer_3, answer_4, final_answer}){

    const router = useRouter()
    const { user } = useUser()

    const [ quit, setQuit ] = useState(0)

    const { question, setQuestion} = useContext(currentQuestion)
    const { score, setScore} = useContext(totalScore)
    const { askAudience, setAskAudience} = useContext(askTheAudience)
    const { fiftyFifty, setFiftyFifty } = useContext(fiftyFiftyContext)
    const { phoneFriend, setPhoneFriend} = useContext(phoneAFriend)

    const userQuit = async () => {
        await AddUser(user.id, user.username)
        await UpdateLeaderboard(user.id, quizID, 2, score, question -1 )
        router.push("/quit")
    }

    function handleQuit(){
        setQuit(1)
    }

    function handleAskTheAudience(){
        setAskAudience(askAudience + 1)
        document.getElementById("AskTheAudienceWindow").style.visibility = "visible"
        document.getElementById("AskTheAudienceButton").className = "Lifeline Unavailable"
    }

    function handleFiftyFifty(){
        const fiftyFiftyArray = fiftyFiftyAnswers()
        setFiftyFifty(fiftyFifty + 1)
        document.getElementById(`${fiftyFiftyArray[0]}`).className = "QuestionLayout Answer Hide"
        document.getElementById(`${fiftyFiftyArray[1]}`).className = "QuestionLayout Answer Hide"
        document.getElementById("FiftyFiftyButton").className = "Lifeline Unavailable"
    }

    function fiftyFiftyAnswers(){
        const answersArray = [answer_1, answer_2, answer_3, answer_4]
        let temporaryArray = answersArray.filter(answer => answer !== final_answer)
        temporaryArray = temporaryArray[Math.floor(Math.random()*temporaryArray.length)]
        let toKeep = [temporaryArray, final_answer]
        let fiftyfiftyAnswers = answersArray.filter(item => !toKeep.includes(item))
        return fiftyfiftyAnswers
    }

    function handlePhoneAFriend(){
        setPhoneFriend(phoneFriend + 1)
        document.getElementById("PhoneAFriendWindow").style.visibility = "visible"
        document.getElementById("PhoneAFriendButton").className = "Lifeline Unavailable"
    }

    useEffect(() => {

        // User has pressed quit?
        if(quit === 1){
            userQuit() 
            }

        // Has Lifeline (Ask The Audience been used?
        if(askAudience === 1){document.getElementById("AskTheAudienceButton").className = "Lifeline Unavailable"}

        // Has Lifeline (50:50) been used?
        if(fiftyFifty === 1){document.getElementById("FiftyFiftyButton").className = "Lifeline Unavailable"}

        // Has Lifeline (Phone A Friend) been used?
        if(phoneFriend === 1){document.getElementById("PhoneAFriendButton").className = "Lifeline Unavailable"}

    },[quit])

    return(
        <>  

            <div className="QuizOptions">

                <button id="AskTheAudienceButton" className="Lifeline Available" onClick={ () => {handleAskTheAudience()}}>Ask the audience</button>

                <button id="FiftyFiftyButton" className="Lifeline Available" onClick={ () => {handleFiftyFifty()}}>50 : 50</button>
                
                <button id="PhoneAFriendButton" className="Lifeline Available" onClick={ () => {handlePhoneAFriend()}}>Phone a friend</button>

                <button className="Quit"onClick={() => handleQuit()}>QUIT</button>

            </div>

        </>     
    )
}