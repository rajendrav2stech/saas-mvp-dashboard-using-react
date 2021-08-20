import React, { useContext, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { TodoContext } from './TodoContext'
import ToDoTables from './ToDoTables'

/**
 * 
 * @returns {Component} (
 *  <ToDoAppForm /> - Todo form
 *  <ToDoTables />  - Todo Table
 * )
 */

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
                        <div className="rm-todo-form">
                            <Form noValidate validated={validated} onSubmit={submitHandel}>
                                <div>
                                    <h4 className="rm_global_heading">To Do App <sub style={{ fontSize: 14 }}>Use Reducer / Use Context</sub></h4>
                                </div>
                                <Form.Group>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter Title"
                                        name="title"
                                        value={toDoForm.title}
                                        onChange={onChangeHandel}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">Please provide a valid Title.</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        className="form-control"
                                        type="description"
                                        placeholder="Enter Title"
                                        name="description"
                                        value={toDoForm.description}
                                        onChange={onChangeHandel}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">Please provide a valid Description.</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control
                                        required
                                        as="select"
                                        name="status"
                                        value={toDoForm.status}
                                        onChange={onChangeHandel}
                                    >
                                        <option value="">Select Status</option>
                                        <option value="todo">Todo</option>
                                        <option value="inProgress">In Progress</option>
                                        <option value="complete">Complete</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">Please select your valid Status.</Form.Control.Feedback>
                                </Form.Group>
                                <br />
                                {
                                    updateButton ?
                                        <button type="submit" className="btn btn-primary submit">Submit</button> :
                                        <>
                                            <button type="submit" className="btn btn-success">Update</button>
                                            <button type="button" className="btn btn-danger" style={{ marginLeft: 8 }} >Cancel</button>
                                        </>
                                }
                            </Form >
                        </div>
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
