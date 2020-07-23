import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import {createUseStyles} from 'react-jss'

import Home from "../home"
import Header from "../header"
import News from "../news"
import Login from "../login"
import SecretPage from "../secret-page/secret-page";

const useStyles = createUseStyles({
  app: {
    width: '1200px',
    margin: '0 auto'
  }
})
  const App = ({isLoggedIn}) => {
    const classes = useStyles()
      if (isLoggedIn) {
        localStorage.setItem('isLoggedIn', isLoggedIn);
      } else {
        localStorage.setItem('isLoggedIn', false);
      }

      return (
        <div className={classes.app}>
      <Router>
        <Header />
          <Route path="/" exact component={Home}/>
          <Route path="/news"  component={News}/>
          <Route path="/login" render={() => <Login/>}/>
          <Route path="/profile" render={() => <SecretPage/>}/>
      </Router>
        </div>)
}

const mapStateToProps = state => {
  return {
      isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, {})(App)