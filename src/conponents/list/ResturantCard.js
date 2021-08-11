import React, { useState } from 'react'
import { Col, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ResturantCard = ({ items }) => {
    const [isclosed, setIsclosed] = useState(false)
    const [open, setOpen] = useState(false)
    const onClikcHrs = (e) => {
        e.preventDefault()
        setOpen(!open)
    }
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {items.description}
        </Tooltip>
    );
    return (
        <Col lg={4} md={4} className="rm-returant mb-4">
            <div className="card">
                <img src={items.logo} alt="" />
                <div className="pad p-3">
                    <Link to={{
                        pathname: `/list/${items.uid}`,
                        state: items,
                    }}><h5>{items.name || "---"} <small>{items.type || "---"}</small></h5></Link>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >
                        <h6><p>{items.description}</p></h6>
                    </OverlayTrigger>

                    <h6 className="add"><strong>Address :-</strong> {items.address}</h6>
                    <h5 className="phone">Phone No :-{items.phone_number}</h5>
                    {/* <a href="" onClick={onClikcHrs}>Hours:</a> */}
                    {open && <div className="table-responsive">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Monday</th>
                                    {
                                        (items.hours.monday.is_closed === isclosed) ? <td><span><strong>Open:</strong> {items.hours.monday.opens_at}</span> /
                                            <span><strong>Closes:</strong> {items.hours.monday.closes_at}</span>
                                        </td> : <td style={{ color: 'red' }}>Close</td>
                                    }
                                </tr>
                                <tr>
                                    <th>Tuesday</th>
                                    {
                                        (items.hours.tuesday.is_closed === isclosed) ? <td><span><strong>Open:</strong> {items.hours.monday.opens_at}</span> /
                                            <span><strong>Closes:</strong> {items.hours.monday.closes_at}</span>
                                        </td> : <td style={{ color: 'red' }}>Close</td>
                                    }
                                </tr>
                                <tr>
                                    <th>Wednesday</th>
                                    {
                                        (items.hours.wednesday.is_closed === isclosed) ? <td><span><strong>Open:</strong> {items.hours.monday.opens_at}</span> /
                                            <span><strong>Closes:</strong> {items.hours.monday.closes_at}</span>
                                        </td> : <td style={{ color: 'red' }}>Close</td>
                                    }
                                </tr>
                                <tr>
                                    <th>Thursday</th>
                                    {
                                        (items.hours.thursday.is_closed === isclosed) ? <td><span><strong>Open:</strong> {items.hours.monday.opens_at}</span> /
                                            <span><strong>Closes:</strong> {items.hours.monday.closes_at}</span>
                                        </td> : <td style={{ color: 'red' }}>Close</td>
                                    }
                                </tr>
                                <tr>
                                    <th>Friday</th>
                                    {
                                        (items.hours.friday.is_closed === isclosed) ? <td><span><strong>Open:</strong> {items.hours.monday.opens_at}</span> /
                                            <span><strong>Closes:</strong> {items.hours.monday.closes_at}</span>
                                        </td> : <td style={{ color: 'red' }}>Close</td>
                                    }
                                </tr>
                                <tr>
                                    <th>Saturday</th>
                                    {
                                        (items.hours.saturday.is_closed === isclosed) ? <td><span><strong>Open:</strong> {items.hours.monday.opens_at}</span> /
                                            <span><strong>Closes:</strong> {items.hours.monday.closes_at}</span>
                                        </td> : <td style={{ color: 'red' }}>Close</td>
                                    }
                                </tr>
                                <tr>
                                    <th>Sunday</th>
                                    {
                                        (items.hours.sunday.is_closed === isclosed) ? <td><span><strong>Open:</strong> {items.hours.monday.opens_at}</span> /
                                            <span><strong>Closes:</strong> {items.hours.monday.closes_at}</span>
                                        </td> : <td style={{ color: 'red' }}>Close</td>
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>}

                </div>

            </div>
        </Col>
    )
}

export default ResturantCard
