import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs'

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <SignedOut>
        <SignInButton />
      </SignedOut>  
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  )
}

export default HomePage
