import React from 'react'
import { Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'

/**
 * Component for showing details of Modal Popup
 * @param {Function} handleClose - To close the modal 
 * @param {boolean} show - Pass the show state variable to the show prop of the Modal component to control the modal behavior
 * @param {boolean} children - children is a special property of React components which contains any child elements defined within the component
 * @param {string} modalTitle - Motal title 
 * @returns Modal Componets
 */

const ModalPopup = ({ handleClose, show, children, modalTitle }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
            </Modal>
        </div>
    )
}
ModalPopup.propTypes = {
    /**
     * - To close the modal 
     */
    handleClose: PropTypes.func,
    /**
     *  Pass the show state variable to the show prop of the Modal component to control the modal behavior
     */
    show: PropTypes.any,
    /**
     * children is a special property of React components which contains any child elements defined within the component
     */
    children: PropTypes.any,
    /**
     * Motal title 
     */
    modalTitle: PropTypes.string,
}
export default ModalPopup
