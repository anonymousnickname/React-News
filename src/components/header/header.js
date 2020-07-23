import React  from "react";
import { Link } from 'react-router-dom'
import './header.css'
import { connect } from 'react-redux'

  const Header = ({isLoggedIn}) => {
      let entry = isLoggedIn ? 'PROFILE' : 'LOGIN'
        return (
        <div className="header">
            <Link to="/" className="header-item">HOME</Link>
            <Link to="/news" className="header-item">NEWS</Link>
            <Link to="/login" className="header-item">{entry}</Link>
        </div>
            )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
  }

export default connect(mapStateToProps, {})(Header)