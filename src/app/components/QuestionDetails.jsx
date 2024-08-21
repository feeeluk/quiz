"use client"

import { useContext } from "react"
import { currentQuestion } from "@/app/utils/context"

export function QuestionDetails({the_question}){

    const {question} = useContext(currentQuestion)


    return(
        <div className="QuestionLayout">
            
            <div className="QuestionWord">
                QUESTION: &nbsp;
            </div>
            
            <div className="TheQuestion">
                {the_question}
            </div>

            <div className="QuestionNumber">
                {question} / 15
            </div>

        </div>
    )
}