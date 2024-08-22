"use client"

import Image from "next/image"
import AskTheAudienceChart from "@/app/components/BarChart/AskTheAudienceChart"
import PhoneAFriendChart from "@/app/components/BarChart/PhoneAFriendChart"

export function QuestionImage({image}){

    function handleCloseAskTheAudienceWindow(){
        document.getElementById("AskTheAudienceWindow").style.visibility = "hidden"
    }

    function handleClosePhoneAFriendWindow(){
        document.getElementById("PhoneAFriendWindow").style.visibility = "hidden"
    }

    return(
        <div className="QuestionImageContainer">
                    
            <Image src={image} width={700} height={450} alt="question"  />
        
            <div id="AskTheAudienceWindow" className="LifelineWindow">

                <div className="FirstRow">

                    <div className="Title">
                        Ask The Audience
                    </div>

                    <div className="Close">
                        <button onClick={ () =>{handleCloseAskTheAudienceWindow()}}>X</button>
                    </div>

                </div>

                <div className="Main">
                    <AskTheAudienceChart />
                </div>

            </div>

            <div id="PhoneAFriendWindow" className="LifelineWindow">
                
                <div className="FirstRow">
                    
                    <div className="Title">
                        Phone A Friend
                    </div>

                    <div className="Close">
                        <button onClick={ () =>{handleClosePhoneAFriendWindow()}}>X</button>
                    </div>

                </div>

                <div className="Main">
                    <PhoneAFriendChart />
                </div>

            </div>

    </div>
    )
}