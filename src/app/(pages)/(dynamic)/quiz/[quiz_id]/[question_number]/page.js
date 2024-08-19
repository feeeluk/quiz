import { connect } from "@/app/utils/connect"
import { Scoreboard } from "@/app/components/Scoreboard"
import { Question } from "@/app/components/Question"
import { Lifelines } from "@/app/components/Lifelines"
import { redirect } from "next/navigation"

export default async function Quiz({params}){

    const db = connect()
    const quiz = params.quiz_id  
    const question = params.question_number

    const roundDetails = (await db.query(`SELECT questions.question_number
                                        FROM quizzes
                                        JOIN questions
                                        ON questions.question_quiz_id = quizzes.quiz_id
                                        WHERE quiz_id = $1
                                        ORDER BY question_number DESC`, [quiz])).rows
    
    const quizDetails = (await db.query(`SELECT quizzes.quiz_id, quizzes.quiz_name, categories.category_name, questions.question_number, questions.question_question, questions.question_value, questions.question_answer_1, questions.question_answer_2, questions.question_answer_3, questions.question_answer_4, questions.question_final_answer, questions.question_image
                                        FROM quizzes
                                        JOIN categories
                                        ON quizzes.quiz_category_id = categories.category_id
                                        JOIN questions
                                        ON questions.question_quiz_id = quizzes.quiz_id
                                        WHERE quiz_id = $1 AND question_number = $2
                                        ORDER BY questions.question_id DESC`, [quiz, question])).rows[0]

    let string = JSON.stringify(roundDetails)

    if(!quizDetails){
        redirect("/404")   
    }

    return(
        <>        
            <div className="Title">
                <h1>{quizDetails.quiz_name} ({quizDetails.category_name})</h1>
            </div>

            <div className="QuizParent">
                <Scoreboard  roundDetails={string} currentRound={question} />
               
                <Question quizID={quiz}
                            value={quizDetails.question_value} 
                            the_question={quizDetails.question_question}
                            answer_1={quizDetails.question_answer_1} 
                            answer_2={quizDetails.question_answer_2} 
                            answer_3={quizDetails.question_answer_3} 
                            answer_4={quizDetails.question_answer_4} 
                            final_answer={quizDetails.question_final_answer} 
                            image={quizDetails.question_image}
                            />

                <Lifelines quizID={quiz}
                            answer_1={quizDetails.question_answer_1} 
                            answer_2={quizDetails.question_answer_2} 
                            answer_3={quizDetails.question_answer_3} 
                            answer_4={quizDetails.question_answer_4} 
                            final_answer={quizDetails.question_final_answer} 
                            />         
            </div>
        </>
    )
}