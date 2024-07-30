"use client"

export function Question({name, category, question_number, value, question, answer_1, answer_2, answer_3, answer_4, score, final_answer}){


    function handleAnswer(answer){

        if(question === "15" && answer === final_answer)
            {
                console.log("WIN")
            }

        else if(answer === final_answer){
                console.log("CORRECT")
            }

        else{
                console.log("WRONG")
            }
    }

    return(
        <>
            <h1>(Name: {name}) (Category: {category}) (Question number: {question_number})</h1>
            <h1>Value: {value}</h1>
            <h1>Question: {question}</h1>
            <h1>Answer 1: <button onClick={() => handleAnswer(answer_1)}>{answer_1}</button></h1>
            <h1>Answer 2: <button onClick={() => handleAnswer(answer_2)}>{answer_2}</button></h1>
            <h1>Answer 3: <button onClick={() => handleAnswer(answer_3)}>{answer_3}</button></h1>
            <h1>Answer 4: <button onClick={() => handleAnswer(answer_4)}>{answer_4}</button></h1>
            <h1>Final answer: {final_answer}</h1>
            <h1>Score: {score}</h1>
        </>     
    )
}