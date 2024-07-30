import { connect } from "@/app/utils/connect"
import Link from "next/link"

export default async function Quiz({params}){

    const db = connect()

    const quizDetails = (await db.query(`SELECT quizzes.quiz_name, categories.category_name, questions.questions_number, questions.questions_question, questions.questions_value, questions.questions_answer_1, questions.questions_answer_2, questions.questions_answer_3, questions.questions_answer_4, questions.questions_final_answer
                                    FROM quizzes
                                    JOIN categories
                                    ON quizzes.quiz_category_id = categories.category_id
                                    JOIN questions
                                    ON questions.questions_quiz_id = quizzes.quiz_id
                                    WHERE quiz_id = $1
                                    ORDER BY questions.questions_id DESC`, [params.quiz_id])).rows

    return(
        <>

            <Link href={`/pages/dynamic/quiz/${params.quiz_id}/1?quiz=${params.quiz_id}`}>
                Start quiz
            </Link>
            
            <div className="QuizDetails">

                {quizDetails.map( (question) => {
                    return(
                        <div key={question.questions_number}>
                            <h1>{question.quiz_name}</h1>
                            <h1>Question {question.questions_number}/15</h1>
                            <h1>Question: {question.questions_question}</h1>
                            <h1>Value: {question.questions_value}</h1>
                            <h1>Answer 1: <button>{question.questions_answer_1}</button></h1>
                            <h1>Answer 2: <button>{question.questions_answer_2}</button></h1>
                            <h1>Answer 3: <button>{question.questions_answer_3}</button></h1>
                            <h1>Answer 4: <button>{question.questions_answer_4}</button></h1>
                            <h1>Answer: {question.questions_final_answer}</h1>
                        </div>
                    )})}
                
            </div>
        </>
        
    )
}