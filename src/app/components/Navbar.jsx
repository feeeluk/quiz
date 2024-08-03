"use client"

import Image from "next/image"
import Link from "next/link"
import { SignInButton, SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs'
import { useRouter } from "next/navigation"

export function Navbar(){

  const router = useRouter()

    return(
        
        <div className="Navbar">
          
            <div className="LogoContainer">
              <Link href="/pages/static/home">
                <Image className="Logo" src="/logo.png" width={110} height={110} alt="logo" />
              </Link>
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
                <SignOutButton redirectUrl="/pages/static/home" />
              </SignedIn>
            </div>
        
        </div>        
    )
}