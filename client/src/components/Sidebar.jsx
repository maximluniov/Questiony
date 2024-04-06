import React from 'react'
import Payments from './Payments'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-40 bg-zinc-200 h-full flex flex-col  gap-y-1 shadow-md py-20 fixed z-0'>
      <div className='hover:bg-zinc-300 p-2'> <Link className='' to='/surveys/new'>Create a new survey</Link></div>
      <div className='hover:bg-zinc-300 p-2' ><Link className='' to='/'>Landing page</Link></div>
      <div className='hover:bg-zinc-300 p-2'><Link className='' to='/documentation'>Documentation</Link></div>
      <div className='hover:bg-zinc-300 p-2'> <Payments><Link className='' >Add credits to your account</Link></Payments></div>
    </div>
  )
}

export default Sidebar