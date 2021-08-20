import React from 'react'
import { Table, Button, Badge } from 'react-bootstrap'
import ModalPopup from '../common/ModalPopup/ModalPopup'
import { FaEdit, FaTrash } from "react-icons/fa"
import PropTypes from 'prop-types'

/**
 * 
 * @param {string} status - get Status color
 * @returns Switch case
 */
const getStatusColor = (status) => {
    switch (status) {
        case 'todo': {
            return <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="primary">Todo</Badge> </div>
        }
        case 'inProgress': {
            return <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="warning" text="dark">In Progress</Badge></div>
        }
        case 'complete': {
            return <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="success" text="white">Complete</Badge></div>
        }
        default: {
            return <></>
        }
    }
}
/**
 * Component for showing details of the user
 * @param {Array} updateToDo - The actions will touch upon the CRUD (Update) application 
 * @param {Function} handleEdit - The actions will touch upon the CRUD (Edit) application
 * @param {Function} handleDelete -  The actions will touch upon the CRUD (Delete) application
 * @param {number} editID - The actions will touch upon the CRUD (ID) application 
 * @param {Function} handleClose - control this Modal utilizing some sort of state (Show)
 * @param {boolean} show - control this Modal utilizing some sort of state (Show).
 * @param {number} delId - pass props.todo.id (instead of props.text ) as the argument to our delete function when the button is clicked
 * @param {string} delTitle - I can change the modal header title dynamically
 * @param {Function} getStatusColor - getting all status color
 * @returns (
 *     retun <Table> Component
 * )
 */

const ToDoTable = ({ updateToDo, handleEdit, handleDelete, editID, handleClose, show, passData, delId, delTitle }) => {

    return (
        <div>
            <Table striped bordered hover size="sm" className="rm-to-table">
                <thead style={{ backgroundColor: '#c1c1c1' }}>
                    <tr>
                        <th style={{ width: 220 }}>Title</th>
                        <th>Description</th>
                        <th style={{ textAlign: 'center', width: 120 }}>Status</th>
                        <th style={{ textAlign: 'center', width: 180 }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        updateToDo.length > 0 ? updateToDo.map((items, i) => {
                            return (
                                <tr key={i} className={items.id === editID ? 'trbgColor' : null}>
                                    <td>{items.title}</td>
                                    <td>{items.description}</td>
                                    <td>
                                        {getStatusColor(items.status)}
                                    </td>
                                    <td style={{ textAlign: 'center' }}>
                                        <FaEdit onClick={(e) => { handleEdit(items.id) }} className="edit_icon" />
                                        <FaTrash onClick={(e) => { passData(items.id, items.title) }} className="delete_icon" />
                                    </td>
                                </tr>
                            )
                        }) : <tr><td colSpan="5" style={{ textAlign: 'center' }}>...No Data !</td></tr>
                    }
                </tbody>
            </Table >
            <ModalPopup
                show={show}
                handleDelete={handleDelete}
                handleClose={handleClose}
                // delId={delId}
                // ModalCancelButtonValue={"Cancel"}
                // modalDeleteButtonValue={"Delete"}
                modalTitle={"To Do App"}
            >
                <p>Are You Sure You Want To Delete ? <strong>{delTitle}</strong> Row</p>
                <div style={{ textAlign: 'right' }}>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button style={{ marginLeft: 8 }} variant="danger" onClick={() => handleDelete(delId)}>
                        Delete
                    </Button>
                </div>
            </ModalPopup>
        </div >
    )
}

ToDoTable.propTypes = {
    /**
     * The actions will touch upon the CRUD (Update) application 
     */
    updateToDo: PropTypes.any,
    /**
     * The actions will touch upon the CRUD (Edit) application 
     */
    handleEdit: PropTypes.func.isRequired,
    /**
     * The actions will touch upon the CRUD (Delete) application 
     */
    handleDelete: PropTypes.func.isRequired,
    /**
     * The actions will touch upon the CRUD (ID) application 
     */
    editID: PropTypes.any,
    /**
     * control this Modal utilizing some sort of state (isClose).
     */
    handleClose: PropTypes.func.isRequired,
    /**
     * control this Modal utilizing some sort of state (Show).
     */
    show: PropTypes.bool.isRequired,
    /**
     * Pass Data Between a Child Component and a Parent Component 
     */
    passData: PropTypes.func.isRequired,
    /**
     * pass props.todo.id (instead of props.text ) as the argument to our delete function when the button is clicked
     */
    delId: PropTypes.any,
    /**
     * I can change the modal header title dynamically
     */
    delTitle: PropTypes.any
}
export default ToDoTable
