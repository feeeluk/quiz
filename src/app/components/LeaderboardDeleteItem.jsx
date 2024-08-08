"use server"

import { connect } from "@/app/utils/connect"

export async function LeaderboardDeleteItem(id){

    const db = connect()

    db.query(`DELETE FROM user_quizzes WHERE user_quiz_id = $1`,[id])

}