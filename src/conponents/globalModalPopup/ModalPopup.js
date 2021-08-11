import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ModalPopup = ({ handelDelete, handleClose, show, delId, children, modalTitle, ModalCancelButtonValue,modalDeleteButtonValue }) => {
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

export default ModalPopup
