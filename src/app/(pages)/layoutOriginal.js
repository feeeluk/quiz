import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { ClerkProvider} from '@clerk/nextjs'

export default function RegularLayout({ children }) {
    return(
        <ClerkProvider>

            <Navbar />

                {children}

            <Footer />

        </ClerkProvider>
    )
  }