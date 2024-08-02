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
    
    useEffect(() => {

        const userQuit = async () => {

            await AddUser(user.id, user.username)
            await UpdateLeaderboard(user.id, quizID, 2, score, (parseInt(question_number) -1) )
            router.push("/pages/static/quit")
        }

        if(quit === 1){
           userQuit() 
        }

    },[quit])

        // Quit
        function handleQuit(){
            setQuit(1)
        }

    return(
        <>  
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
                        <button onClick={() => handleAnswer()}>{answer_1}</button>
                    </div>

                    <div className="QuestionLayout Answer">
                        <button onClick={() => handleAnswer()}>{answer_2}</button>
                    </div>
                </div>

                <div className="AnswerBottomRow">
                    <div className="QuestionLayout Answer">
                        <button onClick={() => handleAnswer()}>{answer_3}</button>
                    </div>

                    <div className="QuestionLayout Answer">
                        <button onClick={() => handleAnswer()}>{answer_4}</button>
                    </div>
                </div>
            </div>

            <button onClick={() => handleQuit()}>QUIT</button>

            <h1>Score: {score}</h1>
        </>     
    )
}