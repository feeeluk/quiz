import Image from "next/image"
import Link from "next/link"
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export function Navbar(){

    return(
        
        <div className="Navbar">
          
            <div className="LogoContainer">
              <Image className="Logo" src="/logo.png" width={110} height={110} alt="logo" />
            </div>

            <div className="LinksBar">
              <Link href="/pages/static/home">Home</Link>
              &nbsp;|&nbsp;
              <Link href="/pages/static/about">About</Link>
              &nbsp;|&nbsp;
              <Link href="/pages/static/leaderboard">Leaderboard</Link>
              &nbsp;|&nbsp;
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