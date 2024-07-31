import { connect } from "@/app/utils/connect"
import { Quiz } from "@/app/components/Quiz"
import Link from "next/link"

export default async function Home(){

    const db = connect()

    const quizzes = (await db.query(`SELECT quizzes.quiz_id, quizzes.quiz_name, categories.category_name
                                    FROM quizzes
                                    JOIN categories
                                    ON quizzes.quiz_category_id = category_id`)).rows

    return(
        <>
            <h1>Home</h1>
            <p>You must be logged in to play</p>
            <div className="QuizzesParent">
                {quizzes.map( (quiz) => {
                    return(
                        <div key={quiz.quiz_id}>
                            <Link href={`/pages/dynamic/quiz/${quiz.quiz_id}/1?score=0`}>
                                <Quiz key={quiz.quiz_id} quiz_name={quiz.quiz_name} quiz_category={quiz.category_name}/>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
        
    )
}