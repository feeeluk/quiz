import Image from "next/image"
import { Hover } from "./animations/Hover"

export function Quiz({name, category, image}){
    return(
        <Hover>
            <div className="Quiz">
                <h4>{name}</h4>
                <Image src={image} width={190} height={130} alt="category image" />
                <h5>Category: {category}</h5>
                <h5>Author:</h5>
                <h5>Date created:</h5>
            </div>
        </Hover>
        
    )
}