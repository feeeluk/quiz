import "@/app/styles/dynamic.css"
import { TotalScoreProvider } from "@/app/utils/context"
import { CurrentQuestionProvider } from "@/app/utils/context"
import { AskTheAudienceProvider } from "@/app/utils/context"
import { FiftyFiftyProvider } from "@/app/utils/context"
import { PhoneAFriendProvider } from "@/app/utils/context"

export default function RegularLayout({ children }) {
    return(
            <TotalScoreProvider>
            <CurrentQuestionProvider>
            <AskTheAudienceProvider>
            <FiftyFiftyProvider>
            <PhoneAFriendProvider>
                <section>
                    <div className="DynamicPage">
                        {children}
                    </div>
                </section>
            </PhoneAFriendProvider>
            </FiftyFiftyProvider>
            </AskTheAudienceProvider>
            </CurrentQuestionProvider>
            </TotalScoreProvider>
    )
  }