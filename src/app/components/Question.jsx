"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { AddUser } from "./AddUser"
import { UpdateLeaderboard } from "./UpdateLeaderboard"
import { useUser } from "@clerk/nextjs"

export function Question({quizID, name, category, question_number, value, question, answer_1, answer_2, answer_3, answer_4, final_answer, score, image}){

    const router = useRouter()
    const { user } = useUser();  
    
    async function handleAnswer(a_userID, a_username, a_quizID, a_question_number, a_score, a_answer, a_final_answer){
        
        // win
        if(a_question_number === "15" && a_answer === a_final_answer){
            a_score = parseInt(a_score, 10) + value
            await AddUser(a_userID, a_username)
            UpdateLeaderboard(a_userID, a_quizID, 1, a_score, a_question_number )
            router.push("/pages/static/won")
        }
        
        // answer correctly
        else if(a_answer === a_final_answer){
            a_score = parseInt(a_score, 10) + value
            router.push(`/pages/dynamic/quiz/${a_quizID}/${parseInt(a_question_number) +1}?score=${a_score}`)
        }
        
        // lose
        else{    
            await AddUser(a_userID, a_username)
            UpdateLeaderboard(a_userID, a_quizID, 3, a_score, (parseInt(a_question_number) -1) )
            router.push("/pages/static/lost")
        }
    }

    async function handleQuit(q_userID, q_username, q_quizID, q_question_number, q_score){
        await AddUser(q_userID, q_username)
        UpdateLeaderboard(q_userID, q_quizID, 2, q_score, (parseInt(q_question_number) -1) )
        router.push("/pages/static/quit")
    }

    return(
        <>  
            <h1>(Name: {name}) (Category: {category}) (Question number: {question_number})</h1>
            <h1>Value: {value}</h1>
            <h1>Question: {question}</h1>
            <Image src={image} width={800} height={400} alt="question"  />
            <h1>Answer 1: <button onClick={() => handleAnswer(user.id, user.username, quizID, question_number, score, answer_1, final_answer)}>{answer_1}</button></h1>
            <h1>Answer 2: <button onClick={() => handleAnswer(user.id, user.username, quizID, question_number, score, answer_2, final_answer)}>{answer_2}</button></h1>
            <h1>Answer 3: <button onClick={() => handleAnswer(user.id, user.username, quizID, question_number, score, answer_3, final_answer)}>{answer_3}</button></h1>
            <h1>Answer 4: <button onClick={() => handleAnswer(user.id, user.username, quizID, question_number, score, answer_4, final_answer)}>{answer_4}</button></h1>
            <h1>Final answer: {final_answer}</h1>
            <h1>Score: {score}</h1>

            <button onClick={() => handleQuit(user.id, user.username, quizID, question_number, score)}>QUIT</button>
        </>     
    )
}