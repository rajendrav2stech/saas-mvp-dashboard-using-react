
import { useState } from 'react'
import AppRouter from './router/AppRouter'
import LoginForm from './conponents/login/LoginForm'
import TodoProvider from './conponents/toDoAppUseReducer/TodoContext'

function App() {
  let adminUser = [{
    username: "user1",
    password: "abc123",
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

  let user1 = adminUser.find((item) => item.username === "user1")


  // console.log(useData[0].username)

  const [user, setUser] = useState({ name: '', pass: '' })
  const [err, setErr] = useState({
    msg: "",
    username: "",
    pass: ""
  })


  const Login = (userDetils) => {
    if (userDetils.name === user1.username && userDetils.pass === user1.password) {
      console.log('login')
      setUser({
        name: userDetils.name,
        pass: userDetils.password
      })
    } else {
      console.log('Input Value is not match')
      setErr({
        msg: 'Input Value is not match !'
      })
    }
    if (userDetils.name === "") {
      setErr({
        username: 'Please Enter User Name !'
      })
    } else if (userDetils.pass === "") {
      setErr({
        pass: 'Please Enter Password !'
      })
    }

  }
  const Logout = () => {
    console.log('Lotout')
    setUser({
      name: '', userName: ''
    })
  }

  return (
    <div>
      {
        (user.name !== "") ? <TodoProvider><AppRouter Logout={Logout} /> </TodoProvider> : <LoginForm Login={Login} err={err} />
      }
    </div>
  );
}

export default App;
