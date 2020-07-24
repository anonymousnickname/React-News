import React from 'react'
import {createUseStyles} from 'react-jss'

import Spinner from '../../components/spinner'

const useStyles = createUseStyles({
    spinnerWrapper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
  }
})

const LoadingSpinner = () => {
    const classes = useStyles()
    return (
        <div className={classes.spinnerWrapper}>
            <Spinner/>
        </div>
    )
}

export default LoadingSpinner