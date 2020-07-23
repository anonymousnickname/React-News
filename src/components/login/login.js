import React, { Component }  from "react";
import './login.css'
import { Redirect } from "react-router-dom";

import { connect } from 'react-redux'
import * as actions from '../../redux/action'
   class Login extends Component {

    state = {
      inputValueName: '',
      inputValuePassword: ''
    }

    updateInputValueName = evt => {
      this.setState({
        inputValueName: evt.target.value
      })
    }

    updateInputValuePassword = evt => {
      this.setState({
        inputValuePassword: evt.target.value
      })
    }


     handleSubmit = e => {
      e.preventDefault()
      if (this.state.inputValueName === 'Admin' && this.state.inputValuePassword == 12345) {
        this.props.log()
    
      } else {
        alert('Wrong password or name')
      }
    
    }

    render() {
      if (this.props.isLoggedIn) {
        return <Redirect to="/profile"/>
      }

      let flag = (this.state.inputValueName.length == 0 || this.state.inputValuePassword == 0) ? true : false
      return (

        <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="user-box">
            <input type="text"  value={this.state.inputValueName} onChange={this.updateInputValueName}/>
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password"  value={this.state.inputValuePassword} onChange={this.updateInputValuePassword}/>
            <label>Password</label>
          </div>
          <input type="submit" value="Submit" disabled={flag}/>
        </form>
      </div>
     

      )
    }
       
}

const mapStateToProps = state => {
  return {
      isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, actions)(Login)

