import React from 'react'
import { SignIn, SignInButton } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn />
    </div>
  )
}

export default SignInPage
