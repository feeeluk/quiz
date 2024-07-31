import Link from "next/link"

export default function Win(){
    return(
        
        <>
        <h1>WIN! Congratulations, you have won "Who wants to be less of a peasant"!!!</h1>
        <p>
            Your progress will be saved.</p>
        <button>
            <Link href="/pages/static/home">OK</Link>
        </button>              
    </>
    )
}