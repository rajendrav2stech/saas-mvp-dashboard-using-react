import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import List from '../conponents/ResturantGridList/Resturant'
import Nav from '../conponents/TopHeader/Nav'
import Profile from '../conponents/Profile/Profile'
import SideBar from '../conponents/SideBar/SideBar'
import { ProfileUserProvider } from '../conponents/SideBar/ProfileUserContext'
import UserTable from '../conponents/UserTable/UserTable'
import TodoApp from '../conponents/ToDoAppV1/TodoApp'
import EmployeeTable from '../conponents/EmployeeTable/EmployeeTable'
import TodoAppUseReducer from '../conponents/ToDoAppV2/TodoAppUseReducer'
import UserDetils from '../conponents/UserTable/UserDetils'
import ResturantDetails from '../conponents/ResturantGridList/ResturantDetails'
import ReactTable from '../conponents/common/ReactTable/ReactTable'
import LoginForm from '../conponents/Login/LoginForm'
import TodoProvider from '../conponents/ToDoAppV2/TodoContext'

const AppRouter = () => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const onLoginSuccess = () => {
        setLoggedIn(true)
    }
    const Logout = () => {
        setLoggedIn(false)
    }

    return (
        <div>
            {
                !isLoggedIn ?
                    <Router>
                        <Switch>
                            <LoginForm onLoginSuccess={onLoginSuccess} />
                        </Switch>
                    </Router> :
                    <TodoProvider>
                        <Router>
                            <ProfileUserProvider>
                                <Nav Logout={Logout} />
                                <SideBar />
                                <Switch>
                                    <Route exact path="/" component={Profile} />
                                    <Route exact path="/list" component={List} />
                                    <Route exact path="/to-do-app" component={TodoApp} />
                                    <Route exact path="/user-table" component={UserTable} />
                                    <Route exact path="/user-table/:id" component={UserDetils} />
                                    <Route exact path="/list/:uid" component={ResturantDetails} />
                                    <Route exact path="/employee-table" component={EmployeeTable} />
                                    <Route exact path="/to-do-app-use-reducer" component={TodoAppUseReducer} />
                                    <Route exact path="/react-table" component={ReactTable} />
                                    <Route exact path="/react-table/:id" component={UserDetils} />
                                </Switch>
                            </ProfileUserProvider>
                        </Router>
                    </TodoProvider>
            }
        </div>
    )
}

export default AppRouter
