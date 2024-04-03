import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Payments from './Payments';
import { connect } from 'react-redux';
const Header =({auth})=> {
        return (
            <>
                <div className='flex w-full bg-purple-500 justify-between h-16 p-3 items-center'>

                <Link className='text-3xl font-bold text-white' to={auth === null ? '#' : (!auth ? '/': 'surveys' )   }>
                            Questiony
                    </Link>
                    



                    <div className='flex items-center gap-x-4'>
                        {
                            auth === null ? "" : 
                            (!auth? 
                            <a className='text-white hover:text-slate-200' href="/auth/google">Login with Google</a> : 
                           (<>  <div>Credits:{auth.credits}</div>  <Payments/> <p>I am logged in <a href='/api/logout'>Log out</a> </p>  </>) )   
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

// import React, { Component } from 'react'
// import { Outlet, Link } from 'react-router-dom'
// import { connect } from 'react-redux'


// class Header extends Component {

    


//     render() {
//         return (
//             <>
//                 <div className='flex w-full bg-purple-500 justify-between h-16 p-3 items-center'>
//                     <Link to='/'>
//                         <div className='text-3xl font-bold text-white'>
//                             Questiony
//                         </div>
//                     </Link>

//                     <div>
//                         <a className='text-white hover:text-slate-200' href="/auth/google">Login with Google</a>
//                     </div>

//                 </div>
//                 <Outlet />
//             </>
//         );
//     }
// }

// function mapStateToProps({ auth }) {
//     return { auth };
// }


// export default connect(mapStateToProps)(Header);