import React from 'react'
import { Link } from 'react-router-dom'
import SurveysList from './surveys/SurveysList'
import 'materialize-css/dist/css/materialize.min.css'
import Sidebar from './Sidebar'

const Dashbord = () => {
  return (<div className='flex '>

    
    <Sidebar/>
    <div className='flex flex-col w-full ml-44 my-16'>
      <h4>Dashbord</h4>

      <SurveysList />
    </div>


    <div className='fixed-action-btn'>
      <Link className='btn-floating btn-large red' to="/surveys/new">
        <i className='material-icons'>add</i>
      </Link>
    </div>
  </div>

  )
}

export default Dashbord