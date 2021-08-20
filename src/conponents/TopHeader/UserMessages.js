import React from "react"
import { Toast } from "react-bootstrap"
import { FaFileAlt, FaGem, FaCartArrowDown, FaFileInvoice } from "react-icons/fa"


const UserMessages = ({ show, setShow }) => {
    return (
        <Toast onClose={() => setShow(false)} show={show} className="notification">
            <Toast.Header>
                <div>
                    <strong className="me-auto">Messages</strong>
                    <h6>You have 4 unread Notifications</h6>
                </div>
            </Toast.Header>
            <Toast.Body>
                <ul>
                    <li>
                        <FaFileAlt style={{ color: '#f10075' }} />
                        <div>
                            <strong>Petey Cruiser</strong>
                            <span>I'm sorry but i'm not sure how to help you with that......</span>
                            <small>Mar 15 3:55 PM</small>
                        </div>
                    </li>
                    <li>
                        <FaGem style={{ color: '#673ab7' }} />
                        <div>
                            <strong>Jimmy Changa</strong>
                            <span>All set ! Now, time to get to you now......</span>
                            <small>Mar 15 3:55 PM</small>
                        </div>
                    </li>
                    
                </ul>
            </Toast.Body>
        </Toast>
    )
}

export default UserMessages
