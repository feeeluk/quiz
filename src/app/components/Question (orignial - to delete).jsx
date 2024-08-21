"use client"

import Image from "next/image"
import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import { totalScore } from "@/app/utils/context"
import { currentQuestion } from "@/app/utils/context"
import { AddUser } from "@/app/components/AddUser"
import { UpdateUserQuizzes } from "@/app/components/UpdateUserQuizzes"
import AskTheAudienceChart from "@/app/components/BarChart/AskTheAudienceChart"
import PhoneAFriendChart from "@/app/components/BarChart/PhoneAFriendChart"


export function Question({quizID, value, the_question, answer_1, answer_2, answer_3, answer_4, final_answer, image}){
    
    const router = useRouter()
    const { user } = useUser();
    
    const [answer, setAnswer] = useState(null)
    
    const {question, setQuestion} = useContext(currentQuestion)
    const {score, setScore} = useContext(totalScore)


    const win = async () => {
        const newScore = score + value
        setScore(newScore)
        await AddUser(user.id, user.username)
        await UpdateUserQuizzes(user.id, quizID, 1, newScore, question)
        router.push(`/won?quiz=${quizID}&score=${newScore}&round=${question}`)
    }
    
    const correct = () => {
        setScore(score + value)
        setQuestion(question + 1)
        router.push(`/quiz/${quizID}/${question +1}`)
    }
    
    const lose = async () => {
        const newScore = calculateCheckpointScore()
        console.log(newScore)
        await AddUser(user.id, user.username)
        await UpdateUserQuizzes(user.id, quizID, 3, newScore, question -1)
        router.push(`/lost?quiz=${quizID}&score=${newScore}&round=${question - 1}`)
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

    function calculateCheckpointScore(){
        
        let newScore = 0

        if(question > 10){
            
            newScore = 55
        }

        else if(question > 5){
            newScore =15
        }

        return newScore
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
                    
                    <div id="AskTheAudienceWindow" className="LifelineWindow">

                        <div className="FirstRow">

                            <div className="Title">
                                Ask The Audience
                            </div>

                            <div className="Close">
                                <button onClick={ () =>{handleCloseAskTheAudienceWindow()}}>X</button>
                            </div>

                        </div>

                        <div className="Main">
                            <AskTheAudienceChart />
                        </div>

                    </div>

                    <div id="PhoneAFriendWindow" className="LifelineWindow">
                        
                        <div className="FirstRow">
                            
                            <div className="Title">
                                Phone A Friend
                            </div>

                            <div className="Close">
                                <button onClick={ () =>{handleClosePhoneAFriendWindow()}}>X</button>
                            </div>

                        </div>

                        <div className="Main">
                            <PhoneAFriendChart />
                        </div>

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