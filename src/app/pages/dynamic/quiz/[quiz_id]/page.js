import { connect } from "@/app/utils/connect"
import Link from "next/link"

export default async function Quiz({params}){

    const db = connect()

    const quizDetails = (await db.query(`SELECT quizzes.quiz_name, categories.category_name, questions.question_number, questions.question_question, questions.question_value, questions.question_answer_1, questions.question_answer_2, questions.question_answer_3, questions.question_answer_4, questions.question_final_answer
                                    FROM quizzes
                                    JOIN categories
                                    ON quizzes.quiz_category_id = categories.category_id
                                    JOIN questions
                                    ON questions.question_quiz_id = quizzes.quiz_id
                                    WHERE quiz_id = $1
                                    ORDER BY questions.question_id DESC`, [params.quiz_id])).rows

    return(
        <>

            <Link href={`/pages/dynamic/quiz/${params.quiz_id}/1?quiz=${params.quiz_id}`}>
                Start quiz
            </Link>
            
            <div className="QuizDetails">

                {quizDetails.map( (question) => {
                    return(
                        <div key={question.question_number}>
                            <h1>{question.quiz_name}</h1>
                            <h1>Question {question.question_number}/15</h1>
                            <h1>Question: {question.question_question}</h1>
                            <h1>Value: {question.question_value}</h1>
                            <h1>Answer 1: <button>{question.question_answer_1}</button></h1>
                            <h1>Answer 2: <button>{question.question_answer_2}</button></h1>
                            <h1>Answer 3: <button>{question.question_answer_3}</button></h1>
                            <h1>Answer 4: <button>{question.question_answer_4}</button></h1>
                            <h1>Answer: {question.question_final_answer}</h1>
                        </div>
                    )})}
                
            </div>
        </>
        
    )
}