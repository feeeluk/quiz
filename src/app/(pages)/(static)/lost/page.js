import Link from "next/link"

export default function Lose(){
    return(
        <>
            <h1>Wrong answer</h1>
            <p>
                That was the wrong answer. Your progress will not be saved (although in a future version you will not lose everything, you will keep the score of your last checkpoint).</p>
            <button>
                <Link href="/home">OK</Link>
            </button>              
        </>
    )
}