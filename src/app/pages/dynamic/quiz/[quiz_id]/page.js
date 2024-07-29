import { connect } from "@/app/utils/connect"

export default async function Quiz({params}){



    const db = connect()

    const quizDetails = (await db.query(`SELECT quizzes.quiz_name, categories.category_name, questions.questions_number, questions.questions_question, questions.questions_answer_1, questions.questions_answer_2, questions.questions_answer_3, questions.questions_answer_4, questions.questions_final_answer
                                    FROM quizzes
                                    JOIN categories
                                    ON quizzes.quiz_category_id = categories.category_id
                                    JOIN questions
                                    ON questions.questions_quiz_id = quizzes.quiz_id
                                    WHERE quiz_id = $1
                                    ORDER BY questions.questions_id DESC`, [params.quiz_id])).rows[0]

    return(
        <>
            
            <div className="QuizDetails">
                {/* {console.log("quiz ID: " & params)}
                {console.log(quizDetails)} */}
                <h1>{quizDetails.quiz_name}</h1>
                <h1>Question {quizDetails.questions_number}/15</h1>
                <h1>Question: {quizDetails.questions_question}</h1>
                <h1>Answer 1: {quizDetails.questions_answer_1}</h1>
                <h1>Answer 2: {quizDetails.questions_answer_2}</h1>
                <h1>Answer 3: {quizDetails.questions_answer_3}</h1>
                <h1>Answer 4: {quizDetails.questions_answer_4}</h1>
                <h1>Answer: {quizDetails.questions_final_answer}</h1>
            </div>
        </>
        
    )
}