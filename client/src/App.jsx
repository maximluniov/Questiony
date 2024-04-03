import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Landing from './components/Landing'
import { connect } from 'react-redux'
import * as actions from './actions'
import { Component } from 'react'



const Dash = () => <div>Dash</div>
const New = () => <div>New</div>



class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <>
        <Routes>
          <Route path='/' Component={Header}>
            <Route path='/' Component={Landing}></Route>
            <Route exact path='/surveys' Component={Dash} />
            <Route path='/surveys/new' Component={New} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default connect(null, actions)(App);
