import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Tabs, Tab, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { json_data } from '../../data/json_data'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'
import DateRangeIcon from '@material-ui/icons/DateRange'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import ForumIcon from '@material-ui/icons/Forum'
import CakeIcon from '@material-ui/icons/Cake'
import WcIcon from '@material-ui/icons/Wc'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'

const UserDetils = ({ match, location }) => {
    let ourData = json_data.users
    const [items, setItems] = useState({
        employment: {},
        address: {},
        subscription: {}
    })

    useEffect(() => {
        let OurSetData = ourData.find((item) => {
            // console.log("IDDDDD", match.params.id)
            let ourRowID = parseInt(match.params.id)
            return item.id === ourRowID
        })
        setItems(OurSetData)
    }, [])

    console.log("PATHNAe", location.pathname)
    console.log("MY ITREMS", location.myItems)

    // console.log('Tables', items)
    // console.log("MAtch", match)

    return (
        <div className="rm-body user_detils">
            <Container fluid>
                <Row className="user_profile_row">
                    <Col lg={4} md={4}>
                        <div className="rm-detils-profile">
                            <div className="profile_pic">
                                <img src={items.avatar} alt={items.avatar || "Profile Photo"} />
                            </div>
                            <div className="user_name">
                                <h4>{items.first_name || "First Name"} {items.last_name || "Last Name"}</h4>
                                <ul>
                                    <li><AssignmentIndIcon /> Employee ID: <strong>{items.id || "Employee ID"}</strong></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={4}>
                        <div className="rm-detils-profile">
                            <div className="user_name">
                                <ul>
                                    <li><PhoneInTalkIcon /> Phone Number: <strong>{items.phone_number}</strong></li>
                                    <li><DateRangeIcon /> Date of Birth: <strong>{items.date_of_birth}</strong></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={4}>
                        <div className="back_to_user">
                            <ul className="d-flex">
                                <li><Link to="/user-table"> <KeyboardBackspaceIcon /> Back to User</Link></li>
                                <li><Link to="/"> <ForumIcon /> User Profile</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Tabs defaultActiveKey="about" id="uncontrolled-tab-example" className="mb-3 rm_use_detils_tab">
                    <Tab eventKey="about" title="About">
                        <Row>
                            <Col lg={4} md={4} sm={4} className="left col-md-4 col-md-4">
                                <div className="personal_detils">
                                    <h5>Personal Information</h5>
                                    <ul>
                                        <li>
                                            <CakeIcon />
                                            <h6>Date of Birth</h6>
                                            <strong>{items.date_of_birth}</strong>
                                        </li>
                                        <li>
                                            <WcIcon />
                                            <h6>Gender</h6>
                                            <strong>{items.gender}</strong>
                                        </li>
                                        <li>
                                            <PhoneAndroidIcon />
                                            <h6>Phone Number</h6>
                                            <strong>{items.phone_number}</strong>
                                        </li>
                                        <li>
                                            <EmailIcon />
                                            <h6>Email Id</h6>
                                            <strong>{items.email}</strong>
                                        </li>
                                        <li>
                                            <LocationOnIcon />
                                            <h6>Communication Location</h6>
                                            <strong>{items.address.city},
                                                {items.address.street_name},
                                                {items.address.street_address},
                                                {items.address.country},
                                                {items.address.zip_code}
                                            </strong>
                                        </li>
                                    </ul>

                                </div>
                            </Col>
                            <Col lg={8} md={8} sm={8} className="right col-md-4">
                                <div className="personal_detils">
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th style={{ border: 0, padding: 0, verticalAlign: 'middle' }}><span style={{ fontSize: '1.25rem', display: 'block', fontWeight: 500 }}>Usage Subscription</span></th>
                                                <th style={{ border: 0, textAlign: 'right', padding: 0 }}>
                                                    {(items.subscription.status === "Idle") ? <button className="btn " style={{ color: 'blue', borderColor: "blue" }}>{items.subscription.status}</button> : null}
                                                    {(items.subscription.status === "Blocked") ? <button className="btn" style={{ color: 'red', borderColor: "red" }}>{items.subscription.status}</button> : null}
                                                    {(items.subscription.status === "Active") ? <button className="btn" style={{ color: 'green', borderColor: "Green" }}>{items.subscription.status}</button> : null}
                                                    {(items.subscription.status === "Pending") ? <button className="btn" style={{ color: 'orange', borderColor: "orange" }}>{items.subscription.status}</button> : null}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </Table>

                                    <p><strong>What is Lorem Ipsum?</strong></p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        Why do we use it?
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                    </p>
                                </div>
                            </Col>
                        </Row>


                    </Tab>
                    <Tab eventKey="application" title="Application">
                        B
                    </Tab>
                    <Tab eventKey="teams" title="Teams">
                        C
                    </Tab>
                    <Tab eventKey="connection" title="Connection">
                        D
                    </Tab>
                </Tabs>
            </Container>

        </div>
    )
}

export default UserDetils
