"use client"

import { currentQuestion } from "../utils/context"
import { useContext } from "react"

export function Scoreboard({roundDetails, currentRound}){
    const round = JSON.parse(roundDetails)
    const {question} = useContext(currentQuestion)


    let value = 8.5

    return(
        <>
            <div className="QuizProgress">

                {round.map((item) => {
                          
                    let win = ""
                    let checkpoint = ""
                    let current = ""

                    value = value - .5
               
                    if(item.question_number === 15){win = "Win"}
                    if(item.question_number === 5 || item.question_number === 10){checkpoint = "Checkpoint"}
                    if(item.question_number == question-1){current = "CurrentRound"}

                    return(
                        <div key={item.question_number}>
                            
                            <h5 key={item.question_number} className={`${win} ${checkpoint} ${current}`}>Round {item.question_number}: {value * item.question_number}pts</h5>

                        </div>
                    )
                })}

            </div>
        </>
    )
}