import { connect } from "@/app/utils/connect"
import { LeaderboardItem } from "@/app/components/LeaderboardItem"

export default async function Leaderboard(){

    const db = connect()

    const leaderboard = (await db.query(`SELECT user_quiz_id, users.user_id AS user, users.user_username AS username, quizzes.quiz_name AS quiz, categories.category_name AS type, statuses.status_name AS status, user_quizzes.user_quiz_score AS score, user_quizzes.user_quiz_progress AS progress
                                        
                                        FROM user_quizzes

                                        JOIN statuses
                                        ON user_quizzes.user_quiz_status_id = statuses.status_id

                                        JOIN users
                                        ON user_quizzes.user_quiz_user_id = users.user_id

                                        JOIN quizzes
                                        ON user_quizzes.user_quiz_quiz_id = quizzes.quiz_id

                                        JOIN categories
                                        ON quizzes.quiz_category_id = categories.category_id

                                        ORDER BY user_quizzes.user_quiz_score DESC`)).rows

    return(
        
        <div className="StandardLayout">
            
            <div className="Title">
                <h1>Leaderboard</h1>
            </div> 
            
            <div className="Leaderboard">
                {leaderboard.map((item) =>{
                    return(
                        <LeaderboardItem key={item.user} id={item.user_quiz_id}
                                                                username={item.username}
                                                                quiz={item.quiz}
                                                                category={item.type}
                                                                status={item.status}
                                                                score={item.score}
                                                                progress={item.progress}
                                                                />
                    )
                })}
            </div>

        </div>
    )
}