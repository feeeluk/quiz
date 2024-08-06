export function Round({roundDetails, currentRound}){

    const round = JSON.parse(roundDetails)

    let value = 8.5
    let win = null
    let checkpoint = null
    let current = null

    console.log(roundDetails, currentRound)

    return(
        <>
            <div className="QuizProgress">

                {round.map((item) => {

                    value = value - .5
               
                    {
                        if(item.question_number === 15){win = "Win"}
                        else if(item.question_number === 5 || item.question_number === 10){checkpoint = "Checkpoint"}
                        else {win = "", checkpoint = "", current = ""}
                    }
                    
                    if(item.question_number == currentRound-1){current = "CurrentRound"}

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