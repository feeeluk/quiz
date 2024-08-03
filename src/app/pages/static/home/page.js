import { connect } from "@/app/utils/connect"
import { Quiz } from "@/app/components/Quiz"
import Link from "next/link"
import { SignedOut } from '@clerk/nextjs'

export default async function Home(){

    const db = connect()

    const quizzes = (await db.query(`SELECT quizzes.quiz_id, quizzes.quiz_name, categories.category_name, categories.category_image
                                    FROM quizzes
                                    JOIN categories
                                    ON quizzes.quiz_category_id = category_id`)).rows

    return(
        <>
            <div className="Title">
                <h1>Home</h1>
            </div>

            <SignedOut>
                <div className="PageMessage">
                    <p>You must be logged in to play</p>
                </div>
            </SignedOut>
            
            <div className="QuizParent">
                {quizzes.map( (quiz) => {
                return(
                    <div key={quiz.quiz_id}>
                        <Link href={`/pages/dynamic/quiz/${quiz.quiz_id}/1?score=0`}>
                            <Quiz key={quiz.quiz_id} name={quiz.quiz_name} category={quiz.category_name} image={quiz.category_image}/>
                        </Link>
                    </div>
                    )
                })}
            </div>
            
        </>
        
    )
}