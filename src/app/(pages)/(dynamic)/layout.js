import "@/app/styles/dynamic.css"
import { FiftyFiftyProvider } from "@/app/utils/context"

export default function RegularLayout({ children }) {
    return(
            <FiftyFiftyProvider>
                <section>
                    <div className="DynamicPage">
                        {children}
                    </div>
                </section>
            </FiftyFiftyProvider>
    )
  }