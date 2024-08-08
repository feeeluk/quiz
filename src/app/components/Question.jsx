"use client"

import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useUser } from "@clerk/nextjs"
import { totalScore } from "../utils/context"
import { currentQuestion } from "../utils/context"
import { AddUser } from "./AddUser"
import { UpdateLeaderboard } from "./UpdateLeaderboard"

export function Question({quizID, value, the_question, answer_1, answer_2, answer_3, answer_4, final_answer, image}){

    const router = useRouter()
    const { user } = useUser();
    
    const [answer, setAnswer] = useState(null)

    const {question, setQuestion} = useContext(currentQuestion)
    const {score, setScore} = useContext(totalScore)

    
    const win = async () => {
        setScore(score + value)
        await AddUser(user.id, user.username)
        await UpdateLeaderboard(user.id, quizID, 1, score, question)
        router.push("/won")
    }
    
    const correct = () => {
        setScore(score + value)
        setQuestion(question + 1)
        router.push(`/quiz/${quizID}/${question +1}`)
    }
    
    const lose = async () => {
        await AddUser(user.id, user.username)
        await UpdateLeaderboard(user.id, quizID, 3, score, question -1)
        router.push("/lost")
    }

    function handleAnswer(selectedAnswer){
        setAnswer(selectedAnswer)
    }

    function handleCloseAskTheAudienceWindow(){
        document.getElementById("AskTheAudienceWindow").style.visibility = "hidden"
    }

    function handleClosePhoneAFriendWindow(){
        document.getElementById("PhoneAFriendWindow").style.visibility = "hidden"
    }
    
    useEffect(() => {

        // User has won (answered the final question correctly)
        if(answer === final_answer && question === 15){
            win()
        }

        // User has answered correctly
        else if(answer === final_answer){
            correct()
        }

        // User has lost (got a question wrong)
        else if(answer != null && answer != final_answer ){
            lose()
        }

    },[answer])

    return(
        <>  

            <div className="QuizDetails">

                <div className="QuestionLayout QuestionBar">
                    <div className="Question">Question: {the_question}</div>
                    <div className="QuestionNumber">{question} / 15</div>
                </div>
            
                <div className="QuestionImage">
                    <Image src={image} width={700} height={350} alt="question"  />
                    
                    <div id="AskTheAudienceWindow">
                        <button onClick={ () =>{handleCloseAskTheAudienceWindow()}}>CLOSE</button>
                    </div>

                    <div id="PhoneAFriendWindow">
                        <button onClick={ () =>{handleClosePhoneAFriendWindow()}}>CLOSE</button>
                    </div>
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

        </>     
    )
}