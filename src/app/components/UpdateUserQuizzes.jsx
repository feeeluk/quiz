"use server"

import { connect } from "@/app/utils/connect"

export async function UpdateUserQuizzes(userID, quizID, statusID, score, progress){

    const db = connect()

        db.query(`INSERT INTO user_quizzes (user_quiz_user_id, user_quiz_quiz_id, user_quiz_status_id, user_quiz_score, user_quiz_progress)
                VALUES ($1, $2, $3, $4, $5)`, [userID, quizID, statusID, score, progress])
    
}