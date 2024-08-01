import { connect } from "@/app/utils/connect"
import { Question } from "@/app/components/Question"

export default async function Quiz({params, searchParams}){

    const db = connect()
    const quiz = params.quiz_id
    const question = params.question_number
    const score = searchParams.score

    const quizDetails = (await db.query(`SELECT quizzes.quiz_name, categories.category_name, questions.question_number, questions.question_question, questions.question_value, questions.question_answer_1, questions.question_answer_2, questions.question_answer_3, questions.question_answer_4, questions.question_final_answer, questions.question_image
                                    FROM quizzes
                                    JOIN categories
                                    ON quizzes.quiz_category_id = categories.category_id
                                    JOIN questions
                                    ON questions.question_quiz_id = quizzes.quiz_id
                                    WHERE quiz_id = $1 AND question_number = $2
                                    ORDER BY questions.question_id DESC`, [quiz, question])).rows[0]



    return(
        <>        
            <div className="QuizDetails">
                
                <Question quizID={quiz} name={quizDetails.quiz_name} category={quizDetails.category_name} question_number={question} value={quizDetails.question_value} question={quizDetails.question_question} answer_1={quizDetails.question_answer_1} answer_2={quizDetails.question_answer_2} answer_3={quizDetails.question_answer_3} answer_4={quizDetails.question_answer_4} final_answer={quizDetails.question_final_answer} score={score} image={quizDetails.question_image} />
                   
            </div>
        </>
    )
}