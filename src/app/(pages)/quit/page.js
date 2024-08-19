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
            <p>Your progress has been saved.</p>
            <p>Quiz: {searchParams.quiz}, Score: {searchParams.score}, Round: {searchParams.round}</p>
        </div> 
    </>
    )
}