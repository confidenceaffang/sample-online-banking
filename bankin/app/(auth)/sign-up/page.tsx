'use client'
import AuthForm from '@/components/AuthForm'
import React from 'react'

const SignUp = () => {
  return (
    <section className='flex-center max-full max-sm size-full px-6'> 
      <AuthForm type="sign-up"/>
    </section>
  )
}

export default SignUp
