import React, { useContext } from 'react'
import { MovieListContext } from '../movieList/MovieListContext'
import SearchIcon from '@material-ui/icons/Search'
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap'
import NotificationsIcon from '@material-ui/icons/Notifications'
import TelegramIcon from '@material-ui/icons/Telegram'
import { DropdownButton, Dropdown } from 'react-bootstrap'

const Nav = ({ Logout }) => {
    const [movies] = useContext(MovieListContext)
    return (
        <div className="rm-headder">
            <header>
                <div className="search_bar">
                    <input type="text" placeholder="Search" />
                    <SearchIcon />
                </div>
                {/* <h4>React Assignment Dashboard </h4> */}

                <div className="header_rightBarbar">
                    <ul>
                        <li><ZoomOutMapIcon style={{ fontSize: '27px' }} /> </li>
                        <li><NotificationsIcon /> <span className="sm">52</span></li>
                        <li><TelegramIcon /> </li>
                        <li className="profile____">
                            <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="" /> <span className="name">Brad Gibson</span>
                            <DropdownButton id="dropdown-basic-button" title="">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="/" onClick={Logout}>logout</Dropdown.Item>
                            </DropdownButton>
                        </li>
                    </ul>
                    {/* Move List: <strong>{movies.length}</strong> <button onClick={Logout}>logout</button> */}
                </div>
            </header>
        </div>
    )
}

export default Nav
