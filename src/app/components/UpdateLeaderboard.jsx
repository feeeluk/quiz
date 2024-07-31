"use server"

import { connect } from "../utils/connect"

export async function UpdateLeaderboard(user, quiz, status, score, progress){

    const db = connect()

        db.query(`INSERT INTO user_quizzes (user_quiz_user_id, user_quiz_quiz_id, user_quiz_status_id, user_quiz_score, user_quiz_progress, user_quiz_checkpoint_id)
                VALUES ($1, $2, $3, $4, $5, $6)`, [user, quiz, status, score, progress, 1])


}