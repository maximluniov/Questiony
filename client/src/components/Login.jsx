import React from 'react'
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>

        <div className='w-[400px] h-80 bg-slate-200 p-4 shadow-lg rounded-lg'>
            <h5 className='text-center'>Sign in to Questiony</h5>
            <a href='/auth/google' className='bg-white flex items-center p-2 rounded-md w-full h-12 gap-x-2 text-black scaling'>
            <FaGoogle className='text-red-500 ' /> Sign In with Google 
            </a>


        </div>

    </div>
  )
}

export default Login