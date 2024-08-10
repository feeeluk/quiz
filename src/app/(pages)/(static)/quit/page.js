import Link from "next/link"
import Image from "next/image"

export default function Quit({searchParams}){
    return(
    <>
        <div className="Title">
            <h1>You quit!</h1>
        </div>
        <Image src={"https://from-ua.org/upload/articles/2022/09/02/mainlarge/1662098799_1c26204bf85ea1c416bcfa987814000d_ce_1874x999x124x0.jpg"} width={600} height={300} alt="image of Leonardo DiCaprio raising a glass to you"  />
        
        <div className="Result">
            <p>
                Your progress will be saved even though you lost (quiz: {searchParams.quiz}, score: {searchParams.score}, round: {searchParams.round}).
            </p>

            <p>
                In a future release you will not lose your entire score if you have made it past a checkpoint (rounds 5 & 10). Instead you will lose your current score and revert to the score of your last checkpoint.
            </p>
        </div> 
    </>
    )
}