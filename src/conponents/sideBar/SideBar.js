import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import { json_data } from '../../data/json_data'
import { TodoContext } from '../toDoAppUseReducer/TodoContext'
import { ProfileUserContext } from './ProfileUserContext'


const SideBar = () => {
    const { todo } = useContext(TodoContext)
    const [user] = useContext(ProfileUserContext)
    const [list, setlist] = useState([])
    const [isActive, setIsActive] = useState('profile')
    useEffect(() => {
        setlist(json_data.ourMenu.list)
    }, [])
    const onActiveHandel = (ID) => {
        setIsActive(ID)
        console.log(ID)
    }
    return (
        <div className="rm-sliderbar">
            <div className="rm-profile">
                <div className="profile-pic">
                    <img src={user.image} alt="" />
                </div>
                <h5>{user.name}</h5>
                <h6>{user.profile} //{user.length}</h6>
                <ul>
                    <li><a href="#">Message</a></li>
                    <li><a href="#" className="conn">Connect</a></li>
                </ul>
            </div>
            <ul>
                {
                    list.length > 0 && list.map((items, i) => {
                        return (
                            <li key={items.id} >
                                <Link
                                    to={items.url}
                                    onClick={() => onActiveHandel(items.id)}
                                    className={isActive === items.id ? "active" : "unactive"}>
                                    {items.icon}
                                    {items.value} {items.url === '/to-do-app-use-reducer' ? <strong>({todo.length})</strong> : null}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SideBar
