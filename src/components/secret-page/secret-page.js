import React  from "react";
import {createUseStyles} from 'react-jss'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../../redux/action'

const useStyles = createUseStyles({
  secretPage: {
    marginTop: '250px',
    textAlign: 'center',
},

secretTitle: {
    fontSize: '3rem',
},

logout: {
    backgroundColor: 'red',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    color: 'white',
    padding: '15px',
    fontSize: '22px',
    border: 'none',
    fontWeight: 'bold',
},

logout__wrapper: {
    textAlign: 'center',
}
})

  const SecretPage = ({isLoggedIn, out}) => {
      const classes = useStyles()
     
      if(isLoggedIn) return (
        <>
        <div className={classes.secretPage}>
            <h2 className={classes.secretTitle}>This page is full of secrets!</h2>
        </div>
        <div className={classes.logout__wrapper}>
          <button onClick={() => out()} className={classes.logout}>
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