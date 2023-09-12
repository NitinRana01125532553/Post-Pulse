import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='grid place-items-center m-auto h-screen'>
      <SignUp />
    </div>
  );
}

export default page