import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import List from '../conponents/list/Resturant';
import Nav from '../conponents/nav/Nav';
import Profile from '../conponents/profile/Profile';
import SideBar from '../conponents/sideBar/SideBar';
import { ProfileUserProvider } from '../conponents/sideBar/ProfileUserContext'
import UserTable from '../conponents/UserTable/UserTable';
import TodoApp from '../conponents/toDoApp/TodoApp';
import EmployeeTable from '../conponents/employeeTable/EmployeeTable';
import MoviList from '../conponents/movieList/MoviList';
import { MoviProvider } from '../conponents/movieList/MovieListContext'
import TodoAppUseReducer from '../conponents/toDoAppUseReducer/TodoAppUseReducer';
import UserDetils from '../conponents/UserTable/UserDetils';
import ResturantDetails from '../conponents/list/ResturantDetails';
import NotFound from '../conponents/notFound/NotFound';
import ReactTable from '../conponents/reactTable/ReactTable';
import ReactUserDetils from '../conponents/reactTable/ReactUserDetils';

const AppRouter = ({ Logout }) => {


    return (
        <div>
            <Router>
                <ProfileUserProvider>
                    <MoviProvider>
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
                            <Route exact path="/movies-list" component={MoviList} />
                            <Route exact path="/react-table" component={ReactTable} />
                            <Route exact path="/react-table/:id" component={UserDetils} />
                            <Route exact path="*" component={NotFound} />
                        </Switch>
                    </MoviProvider>
                </ProfileUserProvider>
            </Router>
        </div>
    )
}

export default AppRouter
