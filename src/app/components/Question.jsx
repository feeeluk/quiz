"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { AddUser } from "./AddUser"
import { UpdateLeaderboard } from "./UpdateLeaderboard"
import { useUser } from "@clerk/nextjs"
import { useState, useEffect } from "react"

export function Question({quizID, question_number, value, question, answer_1, answer_2, answer_3, answer_4, final_answer, score, image}){

    const router = useRouter()
    const { user } = useUser();

    let [quit, setQuit] = useState(0)
    let [answer, setAnswer] = useState(null)
    let [askTheAudience,setAskTheAudience] = useState(0)
    let [fiftyFifty, setFiftyFifty] = useState(0)
    let [phoneAFriend, setPhoneAFriend] = useState(0)
    
    useEffect(() => {



        const userQuit = async () => {
            await AddUser(user.id, user.username)
            await UpdateLeaderboard(user.id, quizID, 2, score, (parseInt(question_number) -1) )
            router.push("/quit")
        }

        const win = async () => {
            score = parseInt(score, 10) + value
            await AddUser(user.id, user.username)
            await UpdateLeaderboard(user.id, quizID, 1, score, question_number)
            router.push("/won")
        }
        
        const correct = () => {
            score = parseInt(score, 10) + value
            router.push(`/quiz/${quizID}/${parseInt(question_number) +1}?score=${score}`)
        }
        
        const lose = async () => {
            await AddUser(user.id, user.username)
            await UpdateLeaderboard(user.id, quizID, 3, score, (parseInt(question_number) -1))
            router.push("/lost")
        }

        // quit
        if(quit === 1){
            userQuit() 
            }
    
            // win
            else if(answer === final_answer && question_number === "15"){
                win()
            }
    
            // correct
            else if(answer === final_answer){
                correct()
            }
    
            // lose
            else if(answer != null && answer != final_answer ){
                lose()
            }

    },[quit, answer, askTheAudience, fiftyFifty, phoneAFriend])

        function handleQuit(){
            setQuit(1)
        }

        function handleAnswer(selectedAnswer){
            setAnswer(selectedAnswer)
        }

        function handleAskTheAudience(){
            setAskTheAudience(1)
            document.getElementById("askTheAudience").className = "Lifeline Unavailable"
        }

        function handleFiftyFifty(){
            setFiftyFifty(1)
            const fiftyFiftyArray = fiftyFiftyAnswers()
            console.log(fiftyFiftyArray)
            document.getElementById(`${fiftyFiftyArray[0]}`).className = "Hide"
            document.getElementById(`${fiftyFiftyArray[1]}`).className = "Hide"
            document.getElementById("fiftyFifty").className = "Lifeline Unavailable"
        }

        function handlePhoneAFriend(){
            setPhoneAFriend(1)
            document.getElementById("phoneAFriend").className = "Lifeline Unavailable"
        }

        function fiftyFiftyAnswers(){
            const answersArray = [answer_1, answer_2, answer_3, answer_4]
            let temporaryArray = answersArray.filter(answer => answer !== final_answer)
            temporaryArray = temporaryArray[Math.floor(Math.random()*temporaryArray.length)]
            let toKeep = [temporaryArray, final_answer]
            let fiftyfiftyAnswers = answersArray.filter(item => !toKeep.includes(item))
            return fiftyfiftyAnswers
        }

    return(
        <>  

            <div className="QuizDetails">

                <div className="QuestionLayout QuestionBar">
                    <div className="Question">Question: {question}</div>
                    <div className="QuestionNumber">{question_number} / 15</div>
                </div>
            
                <div className="QuestionImage">
                    <Image src={image} width={700} height={350} alt="question"  />
                </div>

                <div className="AnswerBox">
                    <div className="AnswerTopRow">
                        <div className="QuestionLayout Answer">
                            <button id={answer_1} onClick={() => handleAnswer(answer_1)}>{answer_1}</button>
                        </div>

                        <div className="QuestionLayout Answer">
                            <button id={answer_2} onClick={() => handleAnswer(answer_2)}>{answer_2}</button>
                        </div>
                    </div>

                    <div className="AnswerBottomRow">
                        <div className="QuestionLayout Answer">
                            <button id={answer_3} onClick={() => handleAnswer(answer_3)}>{answer_3}</button>
                        </div>

                        <div className="QuestionLayout Answer">
                            <button id={answer_4} onClick={() => handleAnswer(answer_4)}>{answer_4}</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="QuizOptions">

                <button id="askTheAudience" className="Lifeline Unavailable" onClick={ () => {handleAskTheAudience()}}>Ask the audience</button>

                <button id="fiftyFifty" className="Lifeline Available" onClick={ () => {handleFiftyFifty()}}>50 : 50</button>
                
                <button id="phoneAFriend" className="Lifeline Unavailable" onClick={ () => {handlePhoneAFriend()}}>Phone a friend</button>

                <button className="Quit"onClick={() => handleQuit()}>QUIT</button>

            </div>

        </>     
    )
}