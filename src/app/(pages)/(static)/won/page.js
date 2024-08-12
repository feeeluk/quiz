import Link from "next/link"
import Image from "next/image"

export default function Win({searchParams}){
    return(
        <>
            <div className="Title">
                <h1>WIN! Congratulations, you have won!</h1>
            </div>

            <Image src={"https://assets3.thrillist.com/v1/image/1656352/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70"} width={600} height={300} alt="image of Leonardo DiCaprio raising a glass to you"  />

            <div className="Result">
                <p>
                    Your progress has been saved (quiz: {searchParams.quiz}, score: {searchParams.score}, round: {searchParams.round}).
                </p>

            </div>               
        </>
    )
}