"use client"

import { useState} from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import { AddUser } from "@/app/components/AddUser"
import { UpdateUserQuizzes } from "@/app/components/UpdateUserQuizzes"
import { fiftyFiftyContext } from "@/app/utils/context"
import { totalScore } from "@/app/utils/context"
import { currentQuestion } from "@/app/utils/context"
import { askTheAudience } from "@/app/utils/context"
import { askTheAudienceData } from "@/app/utils/context"
import { phoneAFriend } from "@/app/utils/context"
import { phoneAFriendData } from "@/app/utils/context"

export function Lifelines({quizID, answer_1, answer_2, answer_3, answer_4, final_answer}){

    const router = useRouter()
    
    const [ quit, setQuit ] = useState(0)
    
    const { user } = useUser()
    const { question, setQuestion} = useContext(currentQuestion)
    const { score, setScore} = useContext(totalScore)
    const { askAudience, setAskAudience} = useContext(askTheAudience)
    const { askAudienceData, setAskAudienceData} = useContext(askTheAudienceData)
    const { fiftyFifty, setFiftyFifty } = useContext(fiftyFiftyContext)
    const { phoneFriend, setPhoneFriend} = useContext(phoneAFriend)
    const { phoneFriendData, setPhoneFriendData} = useContext(phoneAFriendData)

    const userQuit = async () => {
        await AddUser(user.id, user.username)
        await UpdateUserQuizzes(user.id, quizID, 2, score, question -1 )
        router.push(`/quit?quiz=${quizID}&score=${score}&round=${question - 1}`)
    }

    function handleQuit(){
        setQuit(1)
    }

    function handleAskTheAudience(){
        setAskAudience(1)
        setAskAudienceData(askTheAudienceAnswers())
        document.getElementById("AskTheAudienceWindow").style.visibility = "visible"
        document.getElementById("AskTheAudienceButton").className = "Lifeline Unavailable"
    }

    function askTheAudienceAnswers(){
        const percentageOfCorrectAnswer = Math.floor(Math.random()*10)+50
        const remaining1 = Math.floor(Math.random()*(100 - percentageOfCorrectAnswer))
        const remaining2 = Math.floor(Math.random()*(100 - (percentageOfCorrectAnswer + remaining1)))
        const remaining3 = 100 - (percentageOfCorrectAnswer + remaining1 + remaining2)

        const answersArray = [{answer: `${answer_1}`, percentage: ""},
                                {answer: `${answer_2}`, percentage: ""},
                                {answer: `${answer_3}`, percentage: ""},
                                {answer: `${answer_4}`, percentage: ""}]
                                
        let answersTemporaryArray = answersArray.filter(function (item){
            return item.answer != final_answer
        })

        answersTemporaryArray.push({answer: `${final_answer}`, percentage: percentageOfCorrectAnswer})    
        answersTemporaryArray[0].percentage = remaining1
        answersTemporaryArray[1].percentage = remaining2
        answersTemporaryArray[2].percentage = remaining3

        answersTemporaryArray.sort(function (a,b){
            return a.percentage - b.percentage
        })

        answersTemporaryArray.reverse()

        return answersTemporaryArray
    }

    function handleFiftyFifty(){
        const fiftyFiftyArray = fiftyFiftyAnswers()
        setFiftyFifty(1)
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
        setPhoneFriend(1)
        setPhoneFriendData(phoneAFriendAnswers)
        document.getElementById("PhoneAFriendWindow").style.visibility = "visible"
        document.getElementById("PhoneAFriendButton").className = "Lifeline Unavailable"
    }

    function phoneAFriendAnswers(){
        const percentageOfCorrectAnswer = Math.floor(Math.random()*30)+70
        const percentageOfWrongAnswers = (100 - percentageOfCorrectAnswer) / 3
        
        let a = parseInt(percentageOfWrongAnswers,10)
        let b = parseInt(percentageOfWrongAnswers,10)
        let c = parseInt(percentageOfWrongAnswers,10)
        let d = parseInt(percentageOfWrongAnswers,10)

        if(answer_1 === final_answer){a = percentageOfCorrectAnswer }
        else if(answer_2 === final_answer){b = percentageOfCorrectAnswer }
        else if(answer_3 === final_answer){c = percentageOfCorrectAnswer }
        else if(answer_4 === final_answer){d = percentageOfCorrectAnswer }
        
        let answersArray =[{answer: `${answer_1}`, percentage: a},
                            {answer: `${answer_2}`, percentage: b},
                            {answer: `${answer_3}`, percentage: c},
                            {answer: `${answer_4}`, percentage: d}]

        let temporaryArray = answersArray.sort(function (a, b){
            return a.percentage - b.percentage
        })

        temporaryArray.reverse()
        
        return temporaryArray
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