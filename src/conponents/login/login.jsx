
import { useState } from 'react'
import AppRouter from './router/AppRouter'
import LoginForm from './conponents/login/LoginForm'
import TodoProvider from './conponents/toDoAppUseReducer/TodoContext'
import { useHistory } from 'react-router-dom'

function App() {
  let adminUser = [{
    username: "admin",
    password: "admin$123",
    uId: "1",
  },
  {
    username: "user2",
    password: "abc123",
    uId: "2",
  },
  {
    username: "user3",
    password: "abc123",
    uId: "3",
  }]

  const [user, setUser] = useState({ name: '', pass: '' })
  const [err, setErr] = useState({
    msg: "",
    username: "",
    pass: ""
  })
  const [validated, setValidated] = useState(false)

  // HANDLE - LOGIN
  const Login = (userDetils, event) => {
    let setuserName = adminUser.find((item) => {
      return item.username === userDetils.name
    })
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      setValidated(true)
    } else if (userDetils.name === setuserName.username && userDetils.pass === setuserName.password) {
      setUser({
        name: userDetils.name,
        pass: userDetils.password
      })
    } else {
      setErr({
        msg: 'Input Value is not match !'
      })
    }
  }

  // HANDLE - LOGOUT
  const Logout = () => {
    setUser({
      name: '', userName: ''
    })
  }

  return (
    <div>
      {
        (user.name !== "") ? <TodoProvider><AppRouter Logout={Logout} /> </TodoProvider> : <LoginForm Login={Login} err={err} validated={validated} />
      }
    </div>
  );
}

export default App;
