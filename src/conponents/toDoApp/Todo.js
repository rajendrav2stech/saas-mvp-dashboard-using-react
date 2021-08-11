import React, { useEffect, useState } from 'react'
import ReactGlobalTable from '../reactTable/ReactGlobalTable'
import TodoForm from './TodoForm'
import ToDoTable from './ToDoTable'

const Todo = () => {
    let ourColm = [
        {
            Header: 'Sr',
            accessor: 'id',
        },
        {
            Header: 'Title',
            accessor: 'title',
        },
        {
            Header: 'Title',
            accessor: 'description',
        },
        {
            Header: 'Status',
            accessor: 'status',
            // Cell: (props) => {
            //     console.log("dataaaaaa", props)
                
            // }
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
    const [validated, setValidated] = useState(false);
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
            <ReactGlobalTable
                columns={ourColm}
                data={updateToDo}
            />
        </div>
    )
}
export default Todo

















            // let updateTodoRow = ourUpdate.find((items) => items.id === editID)
            // updateTodoRow.title = toDoForm.title
            // updateTodoRow.description = toDoForm.description
            // updateTodoRow.status = toDoForm.status
            // setUpdateToDo(updateTodoRow)