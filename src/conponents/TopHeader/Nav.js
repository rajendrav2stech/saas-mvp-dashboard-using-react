import React, { useState } from 'react'
import { DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaBell } from "react-icons/fa"
import PropTypes from 'prop-types'
import Notification from './Notification'

/**
 * Component for showing Header
 * @param {Function} Logout -  Redirect them back to the login page after they logout
 * @returns (
 *  <header>
 *    Notification
 *    profile
 *    logout 
 *  </header>
 * )
 */
const Nav = ({ Logout }) => {
    const [show, setShow] = useState(false)
    // 
    const notificationHandle = () => {
        setShow(true)
    }
    return (
        <>
            <div className="rm-headder">
                <header>
                    <div className="search_bar">
                        <h4 style={{ color: '#41179d', margin: 0 }}>V2stech Assignment</h4>
                    </div>
                    <div className="header_rightBarbar">
                        <ul>
                            <li><FaBell onClick={notificationHandle} style={{ cursor: 'pointer' }} /> <span className="sm">4</span></li>
                            {/* <li><FaRegEnvelope onClick={messagesHandle} style={{ cursor: 'pointer' }} /> <span className="sm">4</span></li> */}
                            {/* <li><FaTelegramPlane /> </li> */}
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

            <Notification
                show={show}
                setShow={setShow}
            />
        </>
    )
}

Nav.propTypes = {
    Logout: PropTypes.func.isRequired
}

export default Nav
