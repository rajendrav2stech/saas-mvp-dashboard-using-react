import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaPhoneAlt, FaMapMarkerAlt, FaRegClock, FaWineGlassAlt } from "react-icons/fa"
import PropTypes from 'prop-types'

const RstDetsils = ({ rsData, isclosed }) => {
    return (
        <div>
            <div>
                <Container fluid>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <div className="backt_restorant">
                                <Link to={'/list/'}><FaArrowLeft /> Back to Resturant</Link>
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12} className="res_pic">
                            <div>
                                <img src={rsData.logo} alt={rsData.logo} />
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12} className="res_con">
                            <div className="contenr">
                                <h1 className="d-flex justify-content-between">{rsData.name}  <p style={{ fontSize: 18 }}><FaWineGlassAlt style={{ marginTop: "-3px" }} /> {rsData.type}</p></h1>
                                <h6>{rsData.description}</h6>
                                <p><strong>Review :</strong> {rsData.review}</p>
                                <div>
                                    <p><FaPhoneAlt /> {rsData.phone_number}</p>
                                    <p><FaMapMarkerAlt /> {rsData.address}</p>
                                </div>
                                <p><strong><FaRegClock /> Hours: Open</strong></p>
                                <Table striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <th>Monday</th>
                                            {
                                                (rsData.hours.monday.is_closed === isclosed) ? <td><span><strong>Open:</strong> {rsData.hours.monday.opens_at}</span> /
                                                    <span><strong>Closes:</strong> {rsData.hours.monday.closes_at}</span>
                                                </td> : <td style={{ color: 'red' }}>Close</td>
                                            }
                                        </tr>
                                        <tr>
                                            <th>Tuesday</th>
                                            {
                                                (rsData.hours.tuesday.is_closed === isclosed) ? <td><span><strong>Open:</strong> {rsData.hours.monday.opens_at}</span> /
                                                    <span><strong>Closes:</strong> {rsData.hours.monday.closes_at}</span>
                                                </td> : <td style={{ color: 'red' }}>Close</td>
                                            }
                                        </tr>
                                        <tr>
                                            <th>Wednesday</th>
                                            {
                                                (rsData.hours.wednesday.is_closed === isclosed) ? <td><span><strong>Open:</strong> {rsData.hours.monday.opens_at}</span> /
                                                    <span><strong>Closes:</strong> {rsData.hours.monday.closes_at}</span>
                                                </td> : <td style={{ color: 'red' }}>Close</td>
                                            }
                                        </tr>
                                        <tr>
                                            <th>Thursday</th>
                                            {
                                                (rsData.hours.thursday.is_closed === isclosed) ? <td><span><strong>Open:</strong> {rsData.hours.monday.opens_at}</span> /
                                                    <span><strong>Closes:</strong> {rsData.hours.monday.closes_at}</span>
                                                </td> : <td style={{ color: 'red' }}>Close</td>
                                            }
                                        </tr>
                                        <tr>
                                            <th>Friday</th>
                                            {
                                                (rsData.hours.friday.is_closed === isclosed) ? <td><span><strong>Open:</strong> {rsData.hours.monday.opens_at}</span> /
                                                    <span><strong>Closes:</strong> {rsData.hours.monday.closes_at}</span>
                                                </td> : <td style={{ color: 'red' }}>Close</td>
                                            }
                                        </tr>
                                        <tr>
                                            <th>Saturday</th>
                                            {
                                                (rsData.hours.saturday.is_closed === isclosed) ? <td><span><strong>Open:</strong> {rsData.hours.monday.opens_at}</span> /
                                                    <span><strong>Closes:</strong> {rsData.hours.monday.closes_at}</span>
                                                </td> : <td style={{ color: 'red' }}>Close</td>
                                            }
                                        </tr>
                                        <tr>
                                            <th>Sunday</th>
                                            {
                                                (rsData.hours.sunday.is_closed === isclosed) ? <td><span><strong>Open:</strong> {rsData.hours.monday.opens_at}</span> /
                                                    <span><strong>Closes:</strong> {rsData.hours.monday.closes_at}</span>
                                                </td> : <td style={{ color: 'red' }}>Close</td>
                                            }
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

RstDetsils.propTypes = {
    rsData: PropTypes.shape({
        logo: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        description: PropTypes.string,
        review: PropTypes.string,
        phone_number: PropTypes.string,
        address: PropTypes.string,
        hours: PropTypes.shape({
            sunday: PropTypes.shape({
                is_closed: PropTypes.bool
            }),
            saturday: PropTypes.shape({
                is_closed: PropTypes.bool
            }),
            friday: PropTypes.shape({
                is_closed: PropTypes.bool
            }),
            thursday: PropTypes.shape({
                is_closed: PropTypes.bool
            }),
            wednesday: PropTypes.shape({
                is_closed: PropTypes.bool
            }),
            tuesday: PropTypes.shape({
                is_closed: PropTypes.bool
            }),
            monday: PropTypes.shape({
                is_closed: PropTypes.bool
            }),
        })
    }),
    isclosed: PropTypes.bool,
}

export default RstDetsils
