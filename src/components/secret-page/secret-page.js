import React  from "react";
import { Redirect } from 'react-router-dom'
import './secret-page.css'
import { connect } from 'react-redux'
import * as actions from '../../redux/action'


  const SecretPage = ({isLoggedIn, out}) => {
      console.log(isLoggedIn)
      if(isLoggedIn) return (
        <>
        <div className="secret-page">
            <h2>This page is full of secrets!</h2>
        </div>
        <div className="logout__wrapper">
          <button onClick={() => out()} className="logout">
            LOGOUT
          </button>
        </div>
        </>
        )
        return <Redirect to="/"/>
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
  }
  
  export default connect(mapStateToProps, actions)(SecretPage)

