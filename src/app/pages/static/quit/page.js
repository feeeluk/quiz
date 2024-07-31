import Link from "next/link"

export default function Ebout(){
    return(
    <>
        <h1>You quit!</h1>

        <p>
            Your progress will not be saved (although in a future version you will not lose everything, you will keep the score of your last checkpoint).
        </p>

        <button>
            <Link href="/pages/static/home">OK</Link>
        </button> 
    </>
    )
}