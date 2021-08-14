import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import ModalPopup from '../globalModalPopup/ModalPopup'
import ReactGlobalTable from '../reactTable/ReactGlobalTable'
import TodoForm from './TodoForm'
import ToDoTable from './ToDoTable'

const Todo = () => {
    let ourColm = [
        {
            Header: 'Sr',
            width: 80,
            Cell: ({ row }) => {
                return <>{row.index + 1}</>
            },
        },
        {
            Header: 'Title',
            accessor: 'title',
            width: 280,
        },
        {
            Header: 'Description',
            accessor: 'description',
            width: 680,
        },
        {
            Header: 'Status',
            accessor: 'status',
            textAlign: 'center',
            Cell: (cellProps) => {
                switch (cellProps.value) {
                    case "todo":
                        return <div style={{ textAlign: 'center' }}> <span className="text-primary">Todo</span> </div>
                    case "inProgress":
                        return <div style={{ textAlign: 'center' }}> <span className="text-warning">Inprogress</span></div>
                    case "complete":
                        return <div style={{ textAlign: 'center' }}><span className="text-success">Complete</span></div>
                    default:
                        return <></>;
                }
            },
        },
        {
            Header: 'Action',
            width: 180,
            textAlign: 'center',
            Cell: ({ row }) => {
                return (
                    <div style={{ textAlign: 'center' }}>
                        <button className="btn btn-warning" onClick={(e) => { handelEdit(row.original.id) }}>Edit</button>
                        <button className="btn btn-danger" style={{ marginLeft: 4 }} onClick={(e) => { passData(row.original.id, row.original.title) }}>Delete</button>
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
        let item = [...updateToDo];
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
        console.log('Delete Handel Click')
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
            <h5>Using Reusable React Table</h5>
            <ReactGlobalTable
                columns={ourColm}
                data={updateToDo}
                className={'rm-to-table'}
                defaultPageSize={15}
                showPagination={false}
                useSorting={false}
                showGlobalFilter={false}
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




            // let updateTodoRow = ourUpdate.find((items) => items.id === editID)
            // updateTodoRow.title = toDoForm.title
            // updateTodoRow.description = toDoForm.description
            // updateTodoRow.status = toDoForm.status
            // setUpdateToDo(updateTodoRow)