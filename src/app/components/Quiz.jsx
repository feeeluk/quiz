export function Quiz({quiz_name, quiz_category}){
    return(
        <div className="Quiz">
            <h4>{quiz_name}</h4>
            <h5>Category: {quiz_category}</h5>
            <h5>Author:</h5>
            <h5>Date created:</h5>
        </div>
        
    )
}