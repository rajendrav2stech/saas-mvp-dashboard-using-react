import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa"
import PropTypes from 'prop-types'

const ResturantCard = ({ items }) => {
    const { logo, name, description, address, phone_number, type, uid } = items
    return (
        <Col lg={4} md={4} className="rm-returant mb-4">
            <div className="card">
                <img src={logo} alt="" />
                <div className="pad p-3">
                    <h5>{name || "---"} <small>{type || "---"}</small></h5>
                    <h6><p>{description}</p></h6>
                    <h6 className="add"><strong>Address :-</strong> {address}</h6>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h5 className="phone">Phone No :-{phone_number}</h5>
                        <Link to={{
                            pathname: `/list/${uid}`,
                            state: items,
                        }} className="blobal_btn">  Read more <FaArrowRight style={{ marginLeft: 6 }} /></Link>
                    </div>
                </div>
            </div>
        </Col>
    )
}

ResturantCard.propTypes = {
    items: PropTypes.shape({
        logo: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        address: PropTypes.string,
        phone_number: PropTypes.string,
    }),
}

export default ResturantCard
