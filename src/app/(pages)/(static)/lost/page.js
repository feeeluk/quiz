import Link from "next/link"
import Image from "next/image"


export default function Lose({searchParams}){
    return(
        <>
            <div className="Title">
                <h1>Wrong answer</h1>
            </div>

            <Image src={"https://media1.tenor.com/m/tVAgNJ6-mVAAAAAC/you-didn%27t-say-the-magic-word-jurassic-park.gif"} width={600} height={300} alt="image of Ned from Jurrasic Park"  />

            <div className="Result">
                <p>
                    That was the wrong answer. Your progress will be saved even though you lost (quiz: {searchParams.quiz}, score: {searchParams.score}, round: {searchParams.round}).
                </p>

                <p>
                    In a future release you will not lose your entire score if you have made it past a checkpoint (rounds 5 & 10). Instead you will lose your current score and revert to the score of your last checkpoint.
                </p>
            </div>           
        </>
    )
}