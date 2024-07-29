export function Quiz({quiz_name, quiz_category}){
    return(
        <div className="Quiz">
            <h5>Name: {quiz_name}</h5>
            <h5>Category: {quiz_category}</h5>
        </div>
        
    )
}