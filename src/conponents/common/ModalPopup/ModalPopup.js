import React from 'react'
import { Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'

const ModalPopup = ({ handelDelete, handleClose, show, delId, children, modalTitle, ModalCancelButtonValue, modalDeleteButtonValue }) => {
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
    handleClose: PropTypes.func,
    show: PropTypes.any,
    children: PropTypes.any,
    modalTitle: PropTypes.string,
}
export default ModalPopup
