import "@/app/styles/dynamic.css"
import { TotalScoreProvider } from "@/app/utils/context"
import { CurrentQuestionProvider } from "@/app/utils/context"
import { AskTheAudienceProvider } from "@/app/utils/context"
import { AskTheAudienceDataProvider } from "@/app/utils/context"
import { FiftyFiftyProvider } from "@/app/utils/context"
import { PhoneAFriendProvider } from "@/app/utils/context"
import { PhoneAFriendDataProvider } from "@/app/utils/context"

export default function RegularLayout({ children }) {
    return(
            <TotalScoreProvider>
                <CurrentQuestionProvider>
                    <AskTheAudienceProvider>
                        <AskTheAudienceDataProvider>
                            <FiftyFiftyProvider>
                                <PhoneAFriendProvider>
                                    <PhoneAFriendDataProvider>
                                        <section>
                                            <div className="DynamicPage">
                                                {children}
                                            </div>
                                        </section>
                                    </PhoneAFriendDataProvider>
                                </PhoneAFriendProvider>
                            </FiftyFiftyProvider>
                        </AskTheAudienceDataProvider>
                    </AskTheAudienceProvider>
                </CurrentQuestionProvider>
            </TotalScoreProvider>
    )
  }