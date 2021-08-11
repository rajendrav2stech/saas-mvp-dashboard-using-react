import React, { useState } from 'react'


const LoginForm = ({ Login, err }) => {
  
    const [details, setDetails] = useState({
        name: '',
        pass: ''
    })

    const onchangeHaldel = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value
        setDetails({
            ...details,
            [name]: value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        Login(details)
    }

    return (
        <div className="rm-form">
            <form action="" onSubmit={submitHandler}>
                {
                    (err.msg !== "") ? <div style={{ color: 'red', textAlign: 'center', fontSize: 16, marginBottom: 10 }}>{err.msg}</div> : ''
                }
                <div className="pad">
                    <h5 className="text-center">Login </h5>
                    <div className="form-group" style={{ marginBottom: 10 }}>
                        <label htmlFor="">User Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            value={details.name}
                            onChange={onchangeHaldel}
                        />
                        {
                            (err.username !== "") ? <div style={{ color: 'red', textAlign: 'left', fontSize: 12, marginBottom: 10 }}>{err.username}</div> : null
                        }
                    </div>
                    <div className="form-group" style={{ marginBottom: 10 }}>
                        <label htmlFor="">Password</label>
                        <input
                            className="form-control"
                            type="Password"
                            name="pass"
                            value={details.pass}
                            onChange={onchangeHaldel}
                        />
                        {
                            (err.pass !== "") ? <div style={{ color: 'red', textAlign: 'left', fontSize: 12, marginBottom: 10 }}>{err.pass}</div> : null
                        }
                    </div>
                    <button type="submit" className="mt-3 btn btn-outline-success">Submit</button>
                </div>
            </form>
        </div >
    )
}

export default LoginForm
