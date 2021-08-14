import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const LoginForm = ({ Login, err, validated }) => {

    const [details, setDetails] = useState({
        name: '',
        pass: ''
    })

    // HANDLE - ONCHANGE
    const onchangeHaldel = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value
        setDetails({
            ...details,
            [name]: value
        })
    }
    // HANDLE - SUBMIT PASS - DATA
    const submitHandler = (event) => {
        event.preventDefault()
        Login(details, event)
    }

    return (
        <div className="rm-form">
            <Form noValidate validated={validated} action="" onSubmit={submitHandler}>
                <div className="pad">
                    <h5 className="text-center">Login </h5>
                    <Form.Group>
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            className="form-control"
                            type="text"
                            name="name"
                            value={details.name}
                            onChange={onchangeHaldel}
                            required
                        />
                        <Form.Control.Feedback type="invalid" style={{ textAlign: 'left', marginBottom: 8 }}>Please provide a valid user name !</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            className="form-control"
                            type="Password"
                            name="pass"
                            value={details.pass}
                            onChange={onchangeHaldel}
                            required
                        />
                        <Form.Control.Feedback type="invalid" style={{ textAlign: 'left', marginBottom: 8 }}>Please provide a valid password !</Form.Control.Feedback>
                    </Form.Group>
                    <button type="submit" className="mt-3 btn btn-outline-success login">Submit</button>
                    {
                        (err.msg !== "") ? <div style={{ color: 'red', textAlign: 'center', fontSize: 16, }}>{err.msg}</div> : ''
                    }
                </div>
            </Form>
        </div >
    )
}

export default LoginForm
