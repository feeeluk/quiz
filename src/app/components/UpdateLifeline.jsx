"use server"

import { connect } from "../utils/connect"

export async function UpdateLifeline(user_quizID, lifelineID, lifelineBool){

    const db = connect()

        db.query(`INSERT INTO user_quiz_lifelines (user_quiz_lifeline_user_quiz_id, user_quiz_lifeline_lifeline_id,user_quiz_lifeline_lifeline_available)
                VALUES ($1, $2, $3)`, [user_quizID, lifelineID, lifelineBool])
    
}