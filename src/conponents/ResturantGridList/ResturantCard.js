import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const ResturantCard = ({ items }) => {
    return (
        <Col lg={4} md={4} className="rm-returant mb-4">
            <div className="card">
                <img src={items.logo} alt="" />
                <div className="pad p-3">
                    <h5>{items.name || "---"} <small>{items.type || "---"}</small></h5>
                    <h6><p>{items.description}</p></h6>
                    <h6 className="add"><strong>Address :-</strong> {items.address}</h6>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h5 className="phone">Phone No :-{items.phone_number}</h5>
                        <Link to={{
                            pathname: `/list/${items.uid}`,
                            state: items,
                        }} className="blobal_btn">  Read more <FaArrowRight style={{ marginLeft: 6 }} /></Link>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default ResturantCard
