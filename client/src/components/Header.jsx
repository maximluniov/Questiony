import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Payments from './Payments';
import { connect } from 'react-redux';
import { IoIosLogOut } from "react-icons/io";

const Header = ({ auth }) => {
    return (
        <>
            <div className='flex w-full bg-slate-500 justify-between h-16 p-3 items-center shadow-lg fixed top-0 left-0 z-10'>

                <Link className='text-3xl font-bold text-white' to={auth === null ? '#' : (!auth ? '/' : 'surveys')}>
                    Questiony
                </Link>




                <div className='flex items-center gap-x-8'>
                    {
                        auth === null ? "" :
                            (!auth ?
                                <a className='text-white hover:text-slate-200' href="/auth/google">Log in / Sign Up  with Google</a> :
                                (<>
                                    <div>Credits:{auth.credits}</div>
                                    <Payments ><button className='btn' >Add Credits</button></Payments>
                                    <div className='flex flex-col items-end'>
                                        <p> {auth.email} </p>
                                        <a className='flex items-center' href='/api/logout'>Log out <IoIosLogOut size={25}/> </a>
                                    </div>
                                </>))
                    }
                </div>

            </div>
            <Outlet />
        </>
    );

}

function mapStateToProps({ auth }) {
    return { auth };
}


export default connect(mapStateToProps)(Header);

