import React from 'react'
import { Link } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { GrNotes } from "react-icons/gr";
import { MdCreate } from "react-icons/md";
const Landing = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
           <div className='text-center'>
            <h1>Questiony!</h1>
            <p>Collect feedback from your users</p> 
            </div>

            <div className='flex justify-center my-20 gap-x-20 '>
                <Link to="/surveys" className='w-[220px] h-72 p-4  bg-slate-100 rounded-xl text-black scaling flex flex-col items-center shadow-lg '>
                  <h5 className='flex items-center'>Dashbord<RxDashboard /> </h5> 
                  
                </Link>
                <Link to='/surveys/new' className='w-[220px] h-72 p-4 bg-slate-100 rounded-xl text-black scaling flex flex-col items-center shadow-lg '>
                <h5 className='flex items-center'>Create survey<MdCreate /></h5>  
                </Link>
                <Link to="/documentation" className='w-[220px] h-72 p-4 bg-slate-100 rounded-xl text-black scaling  flex flex-col items-center shadow-lg ' >
                <h5 className='flex items-center'>Docs<GrNotes /></h5>   
                </Link>

            </div>

        </div>
    )
}

export default Landing