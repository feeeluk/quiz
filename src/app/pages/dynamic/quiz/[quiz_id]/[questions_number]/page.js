import { connect } from "@/app/utils/connect"
import { Question } from "@/app/components/Question"

export default async function Quiz({params, searchParams}){

    const db = connect()
    const quiz = params.quiz_id
    const question = params.questions_number
    const score = searchParams.score

    const quizDetails = (await db.query(`SELECT quizzes.quiz_name, categories.category_name, questions.questions_number, questions.questions_question, questions.questions_value, questions.questions_answer_1, questions.questions_answer_2, questions.questions_answer_3, questions.questions_answer_4, questions.questions_final_answer, questions.questions_image
                                    FROM quizzes
                                    JOIN categories
                                    ON quizzes.quiz_category_id = categories.category_id
                                    JOIN questions
                                    ON questions.questions_quiz_id = quizzes.quiz_id
                                    WHERE quiz_id = $1 AND questions_number = $2
                                    ORDER BY questions.questions_id DESC`, [quiz, question])).rows[0]



    return(
        <>        
            <div className="QuizDetails">
                
                <Question quizID={quiz} name={quizDetails.quiz_name} category={quizDetails.category_name} question_number={question} value={quizDetails.questions_value} question={quizDetails.questions_question} answer_1={quizDetails.questions_answer_1} answer_2={quizDetails.questions_answer_2} answer_3={quizDetails.questions_answer_3} answer_4={quizDetails.questions_answer_4} final_answer={quizDetails.questions_final_answer} score={score} image={quizDetails.questions_image} />
                   
            </div>
        </>
    )
}