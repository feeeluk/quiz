"use server"

import { connect } from "@/app/utils/connect"

export async function FetchQuizCards(){

    const a = 1
    const b = 2
    const c = ["a", "b", "c", "d"]
    const d = [{"name":"a"}, {"name":"b"}, {"name":"c"}, {"name":"d"}]
    
    const db = connect()

    const data = await (db.query(`SELECT quizzes.quiz_id, quizzes.quiz_name, categories.category_name, categories.category_image
                                    FROM quizzes
                                    JOIN categories
                                    ON quizzes.quiz_category_id = category_id`)).rows

    return data
    
}