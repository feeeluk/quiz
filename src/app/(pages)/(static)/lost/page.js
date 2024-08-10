import Link from "next/link"
import Image from "next/image"


export default function Lose({searchParams}){
    return(
        <>
            <h1>Wrong answer</h1>

            <Image src={"https://media1.tenor.com/m/tVAgNJ6-mVAAAAAC/you-didn%27t-say-the-magic-word-jurassic-park.gif"} width={600} height={300} alt="image of Ned from Jurrasic Park"  />

            <p>
                That was the wrong answer. Your progress be saved (quiz: {searchParams.quiz}, score: {searchParams.score}, round: {searchParams.round}).
            </p>

            <p>
                In a future release you will not lose your entire score as you will keep the score based on your last checkpoint (rounds 5 & 10).
            </p>

            <p>
                <button>
                    <Link href="/home">Home</Link>
                </button>

                &nbsp;

                <button>
                    <Link href="/home">Leaderboard</Link>
                </button>
            </p>           
        </>
    )
}