import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa"
import PropTypes from 'prop-types'

/**
 * Component for showing details of Resturant.
 * @param {string} logo - Logo of the Resturant 
 * @param {string} name - Name of the Resturant
 * @param {string} description - Description of the Resturant
 * @param {string} address - Address of the Resturant
 * @param {number} phone_number - Address of the Resturant
 * @param {string} type - Type of the Resturant
 * @param {number} uid - Unique Id 
 * @returns (
 *  <Card /> Card Componets
 * )
 */
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
    /**
     * Resturant Object propsTyps
     */
    items: PropTypes.shape({
        // logo - Resturant Logo
        logo: PropTypes.string,
        // name - Name of the Resturant
        name: PropTypes.string,
        // description - Description of the Resturant
        description: PropTypes.string,
        // address - Address of the Resturant
        address: PropTypes.string,
        // phone_number - Address of the Resturant
        phone_number: PropTypes.string,
    }),
}

export default ResturantCard
