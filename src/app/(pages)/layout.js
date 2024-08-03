import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { ClerkProvider} from '@clerk/nextjs'

export default function RegularLayout({ children }) {
    return(
        <ClerkProvider>
            <section>
                <Navbar />
            </section>

            <section>
                <div className="PageParent">
                    {children}
                </div>
            </section>

            <section>
                <Footer />
            </section>
        </ClerkProvider>
    )
  }