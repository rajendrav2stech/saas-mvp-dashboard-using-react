import React from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

const ToDoAppForm = ({ onChangeHandel, status, description, title, submitHandel, validated, updateButton }) => {
    return (
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
                        value={title}
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
                        value={description}
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
                        value={status}
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
    )
}
ToDoAppForm.propTypes = {
    onChangeHandel: PropTypes.func,
    status: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    validated: PropTypes.bool,
    updateButton: PropTypes.bool
}

export default ToDoAppForm
