import React from 'react'
import Header from '../components/header'
import Navbar from '../components/Navbar'

const Signup = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <div className='flex'>
          <img src="/SideImage.png" alt="SideImage" className='my-20 w-1/2' />
          <div className='w-1/2 flex flex-col items-center justify-center'>
            <div>
             <h1 className='font-medium text-4xl'>Create an account</h1>
             <p className='font-poppins'>Enter your details below</p>
            </div>
            <form action="submit" className=''>
              <input type="text" placeholder='Name' className='bg-white pb-0.5 border-b'/>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Signup
