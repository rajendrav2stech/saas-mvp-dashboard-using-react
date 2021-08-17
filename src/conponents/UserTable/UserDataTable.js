import React from 'react'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";

const UserDataTable = ({ items, id }) => {
    return (
        <tr key={items.id}>
            <td style={{ fontWeight: 700 }}><img src={items.avatar} alt="" /> {items.first_name} {items.last_name}</td>
            <td>{items.first_name}</td>
            <td>{items.gender}</td>
            <td>{items.address.city}</td>
            <td>{items.address.street_name}</td>
            <td>{items.address.state}</td>
            <td>{items.address.country}</td>
            <td style={{ textAlign: 'center' }}>{items.subscription.plan}</td>
            <td style={{ textAlign: 'center' }}>
                {(items.subscription.status === "Idle") ? <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="primary">Idle</Badge></div> : null}
                {(items.subscription.status === "Blocked") ? <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="warning" text="dark" text="dark">Pending</Badge></div> : null}
                {(items.subscription.status === "Active") ? <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="danger" >Blocked</Badge></div> : null}
                {(items.subscription.status === "Pending") ? <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="success" text="success" text="white">Active</Badge></div> : null}
            </td>
            <td style={{ textAlign: 'center' }}>
                <Link className="view_detils"
                    to={`/user-table/${items.id}`} style={{ color: '#41179d' }}><FaEye style={{ fontSize: 18 }} /></Link>
            </td>
        </tr >
    )
}

export default UserDataTable

