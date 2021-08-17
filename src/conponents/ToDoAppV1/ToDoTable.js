import React from 'react'
import { Table, Button, Badge } from 'react-bootstrap'
import ModalPopup from '../common/GlobalModalPopup/ModalPopup'
import { FaEdit, FaTrash } from "react-icons/fa";

const ToDoTable = ({ updateToDo, handelEdit, handelDelete, editID, handleClose, show, passData, delId, delTitle }) => {

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
                                        {items.status === "todo" ? <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="primary">Todo</Badge> </div> : null}
                                        {items.status === "inProgress" ? <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="warning" text="dark" text="dark">In Progress</Badge></div> : null}
                                        {items.status === "complete" ? <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="success" text="success" text="white">Complete</Badge></div> : null}
                                    </td>
                                    <td style={{ textAlign: 'center' }}>
                                        <FaEdit onClick={(e) => { handelEdit(items.id) }} className="edit_icon" />
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
                handelDelete={handelDelete}
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
                    <Button style={{ marginLeft: 8 }} variant="danger" onClick={() => handelDelete(delId)}>
                        Delete
                    </Button>
                </div>
            </ModalPopup>
        </div >
    )
}

export default ToDoTable
