import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export default function RegularLayout({ children }) {
    return(
        <section>
            <Navbar />
            <div className="PageParent">
                {children}
            </div>
            <Footer />
        </section>
    )
  }