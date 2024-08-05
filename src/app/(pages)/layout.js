import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { ClerkProvider} from '@clerk/nextjs'
import "@/app/styles/globals.css";

export default function RegularLayout({ children }) {
    return(
        <ClerkProvider>
            <section>
                <Navbar />
            </section>

            <section>
                {children}
            </section>

            <section>
                <Footer />
            </section>
        </ClerkProvider>
    )
  }