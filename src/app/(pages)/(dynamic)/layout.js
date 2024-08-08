import "@/app/styles/dynamic.css"
import { TotalScoreProvider } from "@/app/utils/context"
import { CurrentQuestionProvider } from "@/app/utils/context"
import { FiftyFiftyProvider } from "@/app/utils/context"

export default function RegularLayout({ children }) {
    return(
            <TotalScoreProvider>
            <CurrentQuestionProvider>
            <FiftyFiftyProvider>
                <section>
                    <div className="DynamicPage">
                        {children}
                    </div>
                </section>
            </FiftyFiftyProvider>
            </CurrentQuestionProvider>
            </TotalScoreProvider>
    )
  }