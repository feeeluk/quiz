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

    },[quit, answer])

        function handleQuit(){
            setQuit(1)
        }

        function handleAnswer(selectedAnswer){
            setAnswer(selectedAnswer)
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
                                <button onClick={() => handleAnswer(answer_1)}>{answer_1}</button>
                            </div>

                            <div className="QuestionLayout Answer">
                                <button onClick={() => handleAnswer(answer_2)}>{answer_2}</button>
                            </div>
                        </div>

                        <div className="AnswerBottomRow">
                            <div className="QuestionLayout Answer">
                                <button onClick={() => handleAnswer(answer_3)}>{answer_3}</button>
                            </div>

                            <div className="QuestionLayout Answer">
                                <button onClick={() => handleAnswer(answer_4)}>{answer_4}</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="QuizOptions">

                    <button className="Lifeline">Ask the audience</button>

                    <button className="Lifeline">50 : 50</button>
                    
                    <button className="Lifeline">Phone a friend</button>

                    <button className="Quit"onClick={() => handleQuit()}>QUIT</button>
                </div>

            </>     
    )
}