"use client"

import Image from "next/image"
import Link from "next/link"
import { SignInButton, UserButton, SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs'
import { useRouter } from "next/navigation"

export function Navbar(){

  const router = useRouter()

    return(
        
        <div className="Navbar">
          
            <div className="LogoContainer">
                <Image className="Logo" src="/logo.png" width={110} height={110} alt="logo" />
            </div>

            <div className="LinksBar">
              <Link href="/">Home</Link>
              &nbsp;|&nbsp;
              <Link href="/about">About</Link>
              &nbsp;|&nbsp;
              <Link href="/leaderboard">Leaderboard</Link>
              &nbsp;|&nbsp;
              <SignedOut>
                <SignInButton mode="modal"/>
              </SignedOut>
              <SignedIn>
                <SignOutButton redirectUrl="/" />
                &nbsp;
                <UserButton />
              </SignedIn>
            </div>
        
        </div>        
    )
}