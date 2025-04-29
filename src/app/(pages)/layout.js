import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import "@/app/styles/standard_layout.css";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { ClerkProvider} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quiz",
  description: "A re-write of my final Tech Educators project using Next.js",
  openGraph:{
    title: "Quiz",
    description: "A re-write of my final Tech Educators project using Next.js",
    type: "website",
    url: "https://peasant.philhenning.online/",
    images: ["https://philhenning.online/Projects/peasant_screenshot.png"], // add an appropriate image to your public folder 
  },
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
