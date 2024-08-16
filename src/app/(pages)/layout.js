import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { ClerkProvider} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Peasant V2",
  description: "Who wants to be a Peasant? version 2 - a solo project to build my understanding of React and Next.",
};

export default function RootLayout({ children }) {
  return ( 
    <ClerkProvider>
      <html lang="en">
      <body className={inter.className}>
        <Navbar />
          <div className="Page">
            {children}
          </div>
        <Footer />
      </body>
    </html>
  </ClerkProvider>
  );
}
