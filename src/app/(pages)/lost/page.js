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
                <p>That was the wrong answer!!</p>
                <p>Your progress has been saved, however you only keep the score of your last checkpoint.</p>
                <p>Quiz: {searchParams.quiz}, Score: {searchParams.score}, Round: {searchParams.round}</p>
            </div>           
        </>
    )
}