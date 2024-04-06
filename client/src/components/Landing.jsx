import React from 'react'
import { Link } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { GrNotes } from "react-icons/gr";
import { MdCreate } from "react-icons/md";
import { connect } from 'react-redux'


const Landing = ({auth}) => {
    


    return (
        <div className='flex flex-col justify-center items-center h-screen'>
           <div className='text-center'>
            <h1>Questiony!</h1>
            <p>Collect feedback from your users</p> 
            </div>

            <div className='flex justify-center my-20 gap-x-20 '>
                <Link to={auth? "/surveys" : "/login"} className='w-[220px] h-72 p-4  bg-slate-100 rounded-xl text-black scaling flex flex-col items-center shadow-lg '>
                  <h5 className='flex items-center'>Dashbord<RxDashboard /> </h5> 
                  
                </Link>
                <Link to={auth? "/surveys/new" : "/login"} className='w-[220px] h-72 p-4 bg-slate-100 rounded-xl text-black scaling flex flex-col items-center shadow-lg '>
                <h5 className='flex items-center'>Create survey<MdCreate /></h5>  
                </Link>
                <Link to="/documentation" className='w-[220px] h-72 p-4 bg-slate-100 rounded-xl text-black scaling  flex flex-col items-center shadow-lg ' >
                <h5 className='flex items-center'>Docs<GrNotes /></h5>   
                </Link>

            </div>

        </div>
    )
}


function mapStateToProps({auth}){
    return {auth}
  }


export default connect(mapStateToProps)(Landing);