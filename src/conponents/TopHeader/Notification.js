import React from "react"
import { Toast } from "react-bootstrap"
import { FaFileAlt, FaGem, FaCartArrowDown, FaFileInvoice } from "react-icons/fa"


const Notification = ({ show, setShow }) => {
    return (
        <Toast onClose={() => setShow(false)} show={show} className="notification">
            <Toast.Header>
                <div>
                    <strong className="me-auto">Notifications</strong>
                    <h6>You have 4 unread Notifications</h6>
                </div>
            </Toast.Header>
            <Toast.Body>
                <ul>
                    <li>
                        <FaFileAlt style={{ color: '#f10075' }} />
                        <div>
                            <strong>New files available</strong>
                            <span>New files available</span>
                        </div>
                    </li>
                    <li>
                        <FaGem style={{ color: '#673ab7' }} />
                        <div>
                            <strong>Updates Available</strong>
                            <span>2 days ago</span>
                        </div>
                    </li>
                    <li>
                        <FaCartArrowDown style={{ color: '#22c03c' }} />
                        <div>
                            <strong>New Order Received</strong>
                            <span>1 hour ago</span>
                        </div>
                    </li>
                    <li>
                        <FaFileInvoice style={{ color: '#fbbc0b' }} />
                        <div>
                            <strong>22 verified registrations</strong>
                            <span>2 hour ago</span>
                        </div>
                    </li>
                </ul>
            </Toast.Body>
        </Toast>
    )
}

export default Notification
