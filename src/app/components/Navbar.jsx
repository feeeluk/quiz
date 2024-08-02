import Image from "next/image"
import Link from "next/link"
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export function Navbar(){

    return(
        
        <div className="Navbar">
          
            <Image className="logo" src="/logo.png" width={110} height={110} alt="logo" />
            <div>
              <Link href="/pages/static/home">Home </Link>
              |
              <Link href="/pages/static/about"> About </Link>
              |
              <Link href="/pages/static/leaderboard"> Leaderboard </Link>
              |
              <SignedOut>
                <SignInButton mode="modal"/>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
        
        </div>        
    )
}