"use client"

import { useRouter } from "next/navigation"

export function Question({quizID, name, category, question_number, value, question, answer_1, answer_2, answer_3, answer_4, score, final_answer}){

    const router = useRouter()
    
    
    function handleAnswer(quizID, question_number, answer, final_answer){
        
        if(question_number === "15" && answer === final_answer){
            router.push("/pages/static/win")
        }
        else if(answer === final_answer){
            router.push(`/pages/dynamic/quiz/${quizID}/${parseInt(question_number,10) + 1}?quiz=${quizID}`)
        }
        else{
            router.push("/pages/static/lose")
        }
    }

    return(
        <>
            <h1>(Name: {name}) (Category: {category}) (Question number: {question_number})</h1>
            <h1>Value: {value}</h1>
            <h1>Question: {question}</h1>
            <h1>Answer 1: <button onClick={() => handleAnswer(quizID, question_number, answer_1, final_answer)}>{answer_1}</button></h1>
            <h1>Answer 2: <button onClick={() => handleAnswer(quizID, question_number, answer_2, final_answer)}>{answer_2}</button></h1>
            <h1>Answer 3: <button onClick={() => handleAnswer(quizID, question_number, answer_3, final_answer)}>{answer_3}</button></h1>
            <h1>Answer 4: <button onClick={() => handleAnswer(quizID, question_number, answer_4, final_answer)}>{answer_4}</button></h1>
            <h1>Final answer: {final_answer}</h1>
            <h1>Score: {score}</h1>
        </>     
    )
}