import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ToDoAppForm from './ToDoAppForm'
import { TodoContext } from './TodoContext'
import ToDoTables from './ToDoTables'

const TodoAppUseReducer = () => {
    const [updateButton] = useState(true)
    const [editID] = useState(null)
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
    const { todo, addToDo, deleteToDo } = useContext(TodoContext)
    // HANDEl ONCHANGE
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
    // SUBMIT HANDEL
    const submitHandel = (event) => {
        event.preventDefault()
        event.stopPropagation()
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            setValidated(true)
        } else {
            let ourvalue = {
                id: new Date().getTime().toString(),
                title: toDoForm.title,
                description: toDoForm.description,
                status: toDoForm.status,
            }
            addToDo(ourvalue)
            setToDoForm({
                id: '',
                title: '',
                description: '',
                status: '',
            })
            setValidated(false)
        }
    }

    // PASSING ID // TITLE
    const passData = (id, title) => {
        setShow(true)
        setId(id)
        setDelTitle(title)
    }
    // DELETE HANDEL
    const handelDelete = (datapass) => {
        deleteToDo(datapass)
        setShow(false)
    }
    // EDIT HANDEL
    const handelEdit = () => {
        console.log('EDIT')
    }

    return (
        <div className="rm-body" >
            <Container fluid>
                <Row>
                    <Col lg={12} sm={12} xs={12}>
                        <ToDoAppForm
                            onChangeHandel={onChangeHandel}
                            title={toDoForm.title}
                            description={toDoForm.description}
                            status={toDoForm.status}
                            submitHandel={submitHandel}
                            validated={validated}
                            updateButton={updateButton}
                        />
                        {/* {JSON.stringify(toDoForm)} */}
                        <br />
                        <ToDoTables
                            todo={todo}
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
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default TodoAppUseReducer
