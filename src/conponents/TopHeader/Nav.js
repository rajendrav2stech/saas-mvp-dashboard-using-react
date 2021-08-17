import React from 'react'
import { DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaBell, FaTelegramPlane } from "react-icons/fa"
import PropTypes from 'prop-types'

const Nav = ({ Logout }) => {
    return (
        <div className="rm-headder">
            <header>
                <div className="search_bar">
                    <h4 style={{ color: '#41179d', margin: 0 }}>V2stech Assignment</h4>
                </div>
                <div className="header_rightBarbar">
                    <ul>
                        <li><FaBell /> <span className="sm">52</span></li>
                        <li><FaTelegramPlane /> </li>
                        <li className="profile____">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMpBAAprLBU22nQhuCFw5GUceCcLwpWwJHow&usqp=CAU" alt="" /> <span className="name">Mark Zuckerberg</span>
                            <DropdownButton id="dropdown-basic-button" title="" style={{}}>
                                <Link to="/" className="dropdown-item">Profile</Link>
                                <Link to="/" className="dropdown-item" onClick={Logout}>logout</Link>
                            </DropdownButton>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

Nav.propTypes = {
    Logout: PropTypes.func.isRequired
}

export default Nav
