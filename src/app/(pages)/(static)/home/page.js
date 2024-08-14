import Link from "next/link"
import { SignedOut } from '@clerk/nextjs'
import { connect } from "@/app/utils/connect"
import { QuizCard } from "@/app/components/QuizCard"
import { QuizFilterSort } from "@/app/components/QuizFilterSort"

export default async function Home({searchParams}){

    let filter = ``
    let sort = `${searchParams.sortBy}`
    let order = `${searchParams.orderBy}`
    
    if(searchParams.filterBy === " "){filter = ``}
    else if(searchParams.filterBy !== " "){filter = `WHERE quiz_id = ${searchParams.filterBy}`}

    const db = connect()

    const quizzes = (await db.query(`SELECT quizzes.quiz_id, quizzes.quiz_name, categories.category_name, categories.category_image
                                    FROM quizzes
                                    JOIN categories
                                    ON quizzes.quiz_category_id = category_id
                                    ${filter}
                                    ORDER BY ${sort} ${order}`)).rows

    return(
        <>
            <div className="Title">
                <h1>Home</h1>
            </div>

            <SignedOut>
                <div className="PageMessage">
                    <p>** You must be signed in to play **</p>
                </div>
            </SignedOut>

            
            
            <div className="AllQuizzes">

                <div className="FilterSortBar">
                    <QuizFilterSort />
                </div>
                

                <div className="QuizCards">
                    {quizzes.map( (quiz) => {
                    return(
                        <div key={quiz.quiz_id}>
                            <Link href={`quiz/${quiz.quiz_id}/1`}>
                                <QuizCard key={quiz.quiz_id} name={quiz.quiz_name} category={quiz.category_name} image={quiz.category_image}/>
                            </Link>
                        </div>
                        )
                    })}
                </div>
                
            </div>
            
        </>
        
    )
}