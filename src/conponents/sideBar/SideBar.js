import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import { TodoContext } from '../ToDoAppV2/TodoContext'
import logo from '../../assets/image/logo.png'
import { FaIdCardAlt, FaUtensils, FaClipboardList, FaRegAddressBook } from "react-icons/fa";

const SideBar = () => {

    let menuList = [
        {
            id: 'profile',
            value: 'Profile',
            icon: <FaIdCardAlt />,
            url: '/'
        },
        {
            id: 'list',
            value: 'Restaurant grid view',
            icon: <FaUtensils />,
            url: '/list'
        },
        {
            id: 'to-do-app',
            value: 'To do app v1',
            icon: <FaClipboardList />,
            url: '/to-do-app'
        },
        {
            id: 'to-do-app-use-reducer',
            value: 'To do app v2',
            icon: <FaClipboardList />,
            url: '/to-do-app-use-reducer'
        },
        {
            id: 'user-table',
            value: 'User list v1',
            icon: <FaRegAddressBook />,
            url: '/user-table'
        },
        {
            id: 'react-table',
            value: 'User list v2',
            icon: <FaRegAddressBook />,
            url: '/react-table'
        },
        // {
        //     id: 'employee-table',
        //     value: 'Employee Table',
        //     icon: <FaTable />,
        //     url: '/employee-table'
        // },
        // {
        //    id: 'movies-list',
        //     value: 'Movies List',
        //     url: '/movies-list'
        // },
    ]

    const { todo } = useContext(TodoContext)
    const [list, setlist] = useState([])
    const [isActive, setIsActive] = useState('profile')
    useEffect(() => {
        setlist(menuList)
    }, [])
    const onActiveHandel = (ID) => {
        setIsActive(ID)
    }
    return (
        <div className="rm-sliderbar">
            <div className="rm-profile">
                <div className="rm-logo">
                    <img src={logo} alt="logo" />
                </div>
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
