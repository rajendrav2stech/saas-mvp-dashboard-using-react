import React, { useState } from 'react'
import { Badge, Button } from 'react-bootstrap'
import ModalPopup from '../common/GlobalModalPopup/ModalPopup'
import ReactGlobalTable from '../common/ReactTable/ReactGlobalTable'
import TodoForm from './TodoForm'
import ToDoTable from './ToDoTable'
import { FaEdit, FaTrash } from "react-icons/fa";

const Todo = () => {
    let ourColm = [
        {
            Header: 'Title',
            accessor: 'title',
            width: 240,
            defaultCanSort: false,
            disableSortBy: true,
        },
        {
            Header: 'Description',
            accessor: 'description',
            width: 700,
            defaultCanSort: false,
            disableSortBy: true,
        },
        {
            Header: 'Status',
            accessor: 'status',
            textAlign: 'center',
            Cell: (cellProps) => {
                switch (cellProps.value) {
                    case "todo":
                        return <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="primary">Todo</Badge> </div>
                    case "inProgress":
                        return <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="warning" text="dark" text="dark">In Progress</Badge></div>
                    case "complete":
                        return <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="success" text="success" text="white">Complete</Badge></div>
                    default:
                        return <></>;
                }
            },
            width: 140,
            defaultCanSort: false,
            disableSortBy: true,
        },
        {
            Header: 'Action',
            width: 180,
            textAlign: 'center',
            Cell: ({ row }) => {
                return (
                    <div style={{ textAlign: 'center' }}>
                        <FaEdit onClick={(e) => { handelEdit(row.original.id) }} className="edit_icon" />
                        <FaTrash style={{ marginLeft: 4 }} onClick={(e) => { passData(row.original.id, row.original.title) }} className="delete_icon" />
                    </div>
                )
            }
        },
    ]
    const [updateToDo, setUpdateToDo] = useState([])
    const [updateButton, setUpdateButton] = useState(true)
    const [editID, setSetEditID] = useState(null)
    const [delId, setId] = useState("")
    const [delTitle, setDelTitle] = useState("")
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    const [validated, setValidated] = useState(false)
    const [toDoForm, setToDoForm] = useState({
        id: '',
        title: '',
        description: '',
        status: '',
    })
    // // HANDEl ONCHANGE
    const onChangeHandel = (event) => {
        event.preventDefault()
        const target = event.target
        const name = target.name
        const value = target.value
        setToDoForm({
            ...toDoForm,
            [name]: value
        })
    }
    // HANDEl SUBMIT 
    const submitHandel = (event) => {
        const form = event.currentTarget
        event.preventDefault()
        event.stopPropagation()

        if (form.checkValidity() === false) {
            setValidated(true)
        } else if (updateToDo && !updateButton) {
            let ourUpdate = [...updateToDo]
            let ourRowUpdate = ourUpdate.map((ites, i) => {
                if (ites.id === editID) {
                    return {
                        ...ites,
                        title: toDoForm.title,
                        description: toDoForm.description,
                        status: toDoForm.status,
                    }
                }
                return ites
            })
            setUpdateToDo(ourRowUpdate)
            setSetEditID(null)
            setValidated(false)
        } else {
            const dataUpdate = (
                [...updateToDo, { ...toDoForm, id: new Date().getTime().toString() }]
            )
            setUpdateToDo(dataUpdate)
            setToDoForm({
                title: '',
                description: '',
                status: '',
            })
            setValidated(false)
        }
        setUpdateButton(true)
        setShow(false)
    }
    // HANDEl DELETE 
    const handelDelete = (deleteId) => {
        let item = [...updateToDo]
        let deleteItem = item.filter((items, index) => {
            return (items.id !== deleteId)
        })
        setUpdateToDo(deleteItem)
        setToDoForm({
            title: '',
            description: '',
            status: '',
        })
        setSetEditID(null)
        setShow(false)
    }
    // PASSING ID // TITLE
    const passData = (id, title) => {
        setShow(true)
        setId(id)
        setDelTitle(title)
    }
    // HANDEl EDIT 
    const handelEdit = (editId) => {
        let oureditItem = [...updateToDo]
        let editItem = oureditItem.find((items, index) => {
            return items.id === editId
        })
        setToDoForm({
            id: editItem.id,
            title: editItem.title,
            description: editItem.description,
            status: editItem.status,
        })
        setUpdateButton(false)
        setSetEditID(editId)
    }
    // CANCEL HANDEL
    const cancelHandel = event => {
        setSetEditID(null)
        setUpdateButton(true)
        setToDoForm({
            title: '',
            description: '',
            status: '',
        })
    }

    return (
        <div className="rm-todo-form">
            <TodoForm
                title={toDoForm.title}
                description={toDoForm.description}
                status={toDoForm.status}
                submitHandel={submitHandel}
                onChangeHandel={onChangeHandel}
                updateButton={updateButton}
                cancelHandel={cancelHandel}
                validated={validated}
            />
            <br />
            <h5>Using Reusable React Table</h5>
            <ReactGlobalTable
                columns={ourColm}
                data={updateToDo}
                className={'rm-to-table'}
                defaultPageSize={15}
                showPagination={false}
                useSorting={false}
                showGlobalFilter={false}
                editID={editID}
            />
            <br />
            <h5>Normal Html Table</h5>
            <ToDoTable
                updateToDo={updateToDo}
                handelEdit={handelEdit}
                handelDelete={handelDelete}
                editID={editID}
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
                passData={passData}
                delId={delId}
                delTitle={delTitle}
            />

            <ModalPopup
                show={show}
                handelDelete={handelDelete}
                handleClose={handleClose}
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
        </div>
    )
}
export default Todo