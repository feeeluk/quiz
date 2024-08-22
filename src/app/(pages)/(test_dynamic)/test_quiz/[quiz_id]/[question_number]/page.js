import { connect } from "@/app/utils/connect"
import { Scoreboard } from "@/app/components/Scoreboard"
import { QuestionDetails } from "@/app/components/QuestionDetails"
import { QuestionImage } from "@/app/components/QuestionImage"
import { QuestionAnswers } from "@/app/components/QuestionAnswers"
import { Lifelines } from "@/app/components/Lifelines"
import { redirect } from "next/navigation"

export default async function TestQuiz({params}){

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
        redirect("/notFound")   
    }

    return(
        <>
            <div className="QuizLayout">
            
                <div className="GridTitleBefore"></div>
                
                <div className="GridTitle">
                    <div className="Title">
                        <h1>{quizDetails.quiz_name} ({quizDetails.category_name})</h1>
                    </div>
                </div>

                <div className="GridTitleAfter"></div>

                <div className="QuestionBefore"></div>
                
                <div className="Question">
                    <QuestionDetails the_question={quizDetails.question_question} />
                </div>
                
                <div className="QuestionAfter"></div>
                
                <div className="Progress">
                    <Scoreboard  roundDetails={string} currentRound={question} />
                </div>
                
                <div className="Image">
                    <QuestionImage image={quizDetails.question_image} />
                </div>
                
                <div className="Lifelines">
                    <Lifelines quizID={quiz}
                            answer_1={quizDetails.question_answer_1} 
                            answer_2={quizDetails.question_answer_2} 
                            answer_3={quizDetails.question_answer_3} 
                            answer_4={quizDetails.question_answer_4} 
                            final_answer={quizDetails.question_final_answer} 
                            />
                </div>
                
                <div className="Answers">
                    <QuestionAnswers quizID={quiz}
                            value={quizDetails.question_value} 
                            answer_1={quizDetails.question_answer_1} 
                            answer_2={quizDetails.question_answer_2} 
                            answer_3={quizDetails.question_answer_3} 
                            answer_4={quizDetails.question_answer_4} 
                            final_answer={quizDetails.question_final_answer} 
                            />
                </div>
                
                <div className="AnswerAfter"></div>

            </div>
            
        </>
    )
}