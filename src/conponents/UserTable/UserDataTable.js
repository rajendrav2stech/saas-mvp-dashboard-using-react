import React from 'react'
import { Link } from 'react-router-dom'

const UserDataTable = ({ items, id, ourKeYID }) => {
    return (
        <tr key={items.ourKeYID}>
            <td>{ourKeYID}</td>
            <td style={{ fontWeight: 700 }}><img src={items.avatar} alt="" /> {items.first_name} {items.last_name}</td>
            <td>{items.first_name}</td>
            <td>{items.gender}</td>
            <td>{items.address.city}</td>
            <td>{items.address.street_name}</td>
            <td>{items.address.state}</td>
            <td>{items.address.country}</td>
            <td style={{ textAlign: 'center' }}>{items.subscription.plan}</td>
            <td style={{ textAlign: 'center' }}>
                {(items.subscription.status === "Idle") ? <button className="btn " style={{ color: 'blue', borderColor: "blue" }}>{items.subscription.status}</button> : null}
                {(items.subscription.status === "Blocked") ? <button className="btn" style={{ color: 'red', borderColor: "red" }}>{items.subscription.status}</button> : null}
                {(items.subscription.status === "Active") ? <button className="btn" style={{ color: 'green', borderColor: "Green" }}>{items.subscription.status}</button> : null}
                {(items.subscription.status === "Pending") ? <button className="btn" style={{ color: 'orange', borderColor: "orange" }}>{items.subscription.status}</button> : null}
            </td>
            <td style={{ textAlign: 'center' }}>
                <Link className="view_detils_button"
                    to={`/user-table/${items.id}`}>View</Link>
            </td>
        </tr >
    )
}

export default UserDataTable

