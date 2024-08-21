"use client"

import { useContext } from "react"
import { currentQuestion } from "@/app/utils/context"

export function QuestionDetails({the_question}){

    const {question} = useContext(currentQuestion)


    return(
        <div className="QuestionLayout">
            
            <div className="QuestionWord">
                <p>QUESTION:</p>
                <p>{question} / 15</p>
            </div>
            
            <div className="TheQuestion">
                {the_question}
            </div>

        </div>
    )
}