import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Landing from './components/Landing'
import Dashbord from './components/Dashbord'
import NewSurvey from './components/surveys/NewSurvey'
import Documentation from './components/Documentation';

import { connect } from 'react-redux'
import * as actions from './actions'
import { useEffect } from 'react'

const App = (actions) => {

  useEffect(() => {
    actions.fetchUser();
  }, [actions]);


  return (
    <>
      <Routes>
        <Route path='/' Component={Header}>
          <Route path='/' Component={Landing}></Route>
          <Route exact path='/surveys' Component={Dashbord} />
          <Route exact path='/surveys/new' Component={NewSurvey} />
          <Route path='/documentation' Component={Documentation} />
        </Route>
      </Routes> 
    </>
  );

}

export default connect(null, actions)(App);
