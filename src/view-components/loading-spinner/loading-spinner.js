import React from 'react'

import Spinner from '../../components/spinner'
import './loading-spinner.css'

const LoadingSpinner = () => {
    return (
        <div className="spinner_wrapper">
            <Spinner/>
        </div>
    )
}

export default LoadingSpinner