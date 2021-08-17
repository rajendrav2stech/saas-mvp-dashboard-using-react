import React from 'react'
import { Table, Button } from 'react-bootstrap'
import ModalPopup from '../common/GlobalModalPopup/ModalPopup'

const ToDoTables = ({ todo, updateToDo, handelEdit, handelDelete, editID, handleClose, show, passData, delId, delTitle }) => {

    return (
        <div>
            <Table striped bordered hover size="sm" className="rm-to-table">
                <thead style={{ backgroundColor: '#c1c1c1' }}>
                    <tr>
                        <th style={{ width: 45 }}>Sr</th>
                        <th style={{ width: 220 }}>Title</th>
                        <th>Description</th>
                        <th style={{ textAlign: 'center', width: 120 }}>Status</th>
                        <th style={{ textAlign: 'center', width: 180 }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.length > 0 ? todo.map((items, i) => {
                            return (
                                <tr key={i} className={items.id === editID ? 'trbgColor' : null}>
                                    <td>{i + 1}</td>
                                    <td>{items.title}</td>
                                    <td>{items.description}</td>
                                    <td>
                                        {items.status === "todo" ? <span style={{ color: 'blue' }}>Todo</span> : null}
                                        {items.status === "inProgress" ? <span style={{ color: 'orange' }} > Inprogress</span> : null}
                                        {items.status === "complete" ? <span style={{ color: 'green' }} > Complete</span> : null}
                                    </td>
                                    <td style={{ textAlign: 'center' }}>
                                        <button className="btn btn-warning" onClick={(e) => { handelEdit(items.id) }}>Edit</button>
                                        <button className="btn btn-danger" style={{ marginLeft: 4 }} onClick={(e) => { passData(items.id, items.title) }}>Delete</button>
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

export default ToDoTables
