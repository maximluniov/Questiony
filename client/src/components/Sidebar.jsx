import React from 'react'
import Payments from './Payments'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-40 bg-zinc-200 h-full flex flex-col  gap-y-1 shadow-md py-20 fixed z-0'>
      <Link to='/' className='hover:bg-zinc-300 p-2' ><div>Landing page</div></Link>
      <Link to='/surveys/new' className='hover:bg-zinc-300 p-2'> <div>Create a new survey</div></Link>
      <Link to='/documentation' className='hover:bg-zinc-300 p-2'><div>Documentation</div></Link>
      <Link className='hover:bg-zinc-300 p-2'> <Payments><div>Add credits to your account</div></Payments></Link>
    </div>
  )
}

export default Sidebar