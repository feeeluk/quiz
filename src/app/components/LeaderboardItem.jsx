"use client"

import { LeaderboardDeleteItem } from "./LeaderboardDeleteItem"

export function LeaderboardItem({id, username, quiz, category, status, score, progress}){

    

    const deleteRecord = (id) => {
        LeaderboardDeleteItem(id)
        setTimeout(()=>{window.location="./leaderboard"}, 200)
    }

    return(
        <>       
            <h5>ID: {id}, User: {username}, Quiz: {quiz} ({category}), {status}, {score}pts, Completed round: {progress} <button onClick={()=> deleteRecord(id)}>x</button></h5>
        </>
    )
}