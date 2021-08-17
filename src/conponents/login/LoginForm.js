import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { FaLock, FaUserAlt } from "react-icons/fa"
import { useHistory } from 'react-router-dom'
import adminUser from '../../data/userData.json'
import logo from '../../../src/assets/image/logo.png'

const LoginForm = ({ onLoginSuccess }) => {
    let history = useHistory()
    const [validated, setValidated] = useState(false)
    const [details, setDetails] = useState({
        userName: '',
        password: '',
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

    // ERROR - LOGIN IS NOT MATCH 
    const [err, setErr] = useState({ msg: "", })

    // HANDLE - SUBMIT PASS - DATA
    const submitHandler = (event) => {
        const form = event.currentTarget
        event.preventDefault()
        event.stopPropagation()
        let users = adminUser.find(items => items.username === details.userName && items.password === details.password)
        if (form.checkValidity() === false) {
            setValidated(true)
        } else if (users) {
            onLoginSuccess(true)
            history.push('/')
            setValidated(false)
        } else {
            setErr({
                msg: 'Login failed. Please enter a valid user name and password'
            }, setValidated(false))
        }

    }

    return (
        <div className="rm-form">
            <Form noValidate validated={validated} onSubmit={submitHandler} action="">
                <div className="pad">
                    <h5 className="text-center"><img src={logo} alt="" /> </h5>
                    <Form.Group style={{ position: 'relative', marginBottom: 15 }}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            className="form-control"
                            type="text"
                            name="userName"
                            value={details.userName}
                            onChange={onchangeHaldel}
                            required
                        />
                        <FaUserAlt />
                        <Form.Control.Feedback type="invalid" style={{ textAlign: 'left', marginBottom: 8 }}>Please provide a valid user name !</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group style={{ position: 'relative' }}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            className="form-control"
                            type="Password"
                            name="password"
                            value={details.password}
                            onChange={onchangeHaldel}
                            required
                        />
                        <FaLock />
                        <Form.Control.Feedback type="invalid" style={{ textAlign: 'left', marginBottom: 8 }}>Please provide a valid password !</Form.Control.Feedback>
                    </Form.Group>
                    <button type="submit" className="mt-3 btn btn-outline-success login">Submit</button>
                    {
                        (err.msg !== "") ? <div style={{ color: 'red', textAlign: 'center', fontSize: 16, marginTop: 10 }}>{err.msg}</div> : ''
                    }
                </div>
            </Form>
        </div >
    )
}

export default LoginForm
