import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    errorWrapper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    
    errorText: {
        textAlign: 'center',
    },
    
    errorImgWrapper: {
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center'
    },
    errorImg: {
        height: '100px',
    }
  })

const ErrorIndicator = () => {
    const classes = useStyles()
    return (
        <div className={classes.errorWrapper}>
            <h2 className={classes.errorText}>
                Something wrong happened. We try to fix it.
            </h2>
        <div className={classes.errorImgWrapper}>
            <img className={classes.errorImg} alt="error" src="https://media.jamf.com/images/news/how-to-find-remaining-32-bit-applications-on-macos.jpg?q=80&w=800"/>
        </div>
        </div>
    )
}

export default ErrorIndicator