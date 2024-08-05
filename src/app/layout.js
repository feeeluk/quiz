import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Peasant V2",
  description: "Who wants to be a Peasant? version 2 - a solo project to build my understanding of React and Next.",
};

export default function RootLayout({ children }) {
  return ( 
    <html lang="en">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
