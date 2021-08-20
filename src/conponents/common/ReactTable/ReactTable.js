import React, { useMemo } from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactGlobalTable from './ReactGlobalTable'
import { FaEye } from "react-icons/fa"
import users from '../../../data/userTableListData.json'

/**
 * Component for showing it's built to materialize, filter, sort, group, aggregate, 
 * paginate and display massive data sets using a very small API surface.
 * @returns 
 */
const ReactTable = () => {
    const userColumns = useMemo(() => usersHead, [])
    const userData = useMemo(() => users, [])
    return (
        <div className="rm-body">
            <Container fluid>
                <Row>
                    <Col lg={12} sm={12} xs={12}>
                        <h4 className="rm_global_heading">React Table</h4>
                        <ReactGlobalTable
                            columns={userColumns}
                            data={userData}
                            className="rm-profile-table"
                            defaultPageSize={5}
                            showPagination={true}
                            useSorting={true}
                            showGlobalFilter={true}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ReactTable
/**
 * Table Thead column
 */
export const usersHead = [
    {
        Header: "Full Name",
        accessor: `first_name`,
        defaultCanSort: true,
        Cell: ({ row }) => {
            return (
                <>
                    <img src={row.original.avatar} alt={row.original.first_name} /> {row.original.first_name + " " + row.original.last_name}
                </>
            )
        },
        width: 480,
        fontWeight: 700
    },
    {
        Header: "Gender",
        accessor: 'gender',
        width: 180,
        textAlign: 'left',
        fontWeight: 700,
        defaultCanSort: false,
        disableSortBy: true,
    },
    {
        Header: "Email",
        accessor: 'email',
        width: 250,
        textAlign: 'left',
        fontWeight: 700,
        defaultCanSort: true,
    },

    {
        Header: "Address",
        width: 200,
        textAlign: 'center',
        fontWeight: 700,
        columns: [
            {
                Header: "City",
                accessor: (originalRow) => {
                    return originalRow.address.city;
                },
                width: 80,
                textAlign: 'left',
                fontWeight: 700,
                defaultCanSort: true,
            },
            {
                Header: "Street",
                accessor: (originalRow) => {
                    return originalRow.address.street_name;
                },
                width: 260,
                textAlign: 'left',
                fontWeight: 700,
                defaultCanSort: true,
            },
            {
                Header: "State",
                accessor: (originalRow) => {
                    return originalRow.address.state;
                },
                width: 190,
                textAlign: 'left',
                fontWeight: 700,
                defaultCanSort: true,
            },
            {
                Header: "Country",
                accessor: (originalRow) => {
                    return originalRow.address.country;
                },
                width: 200,
                textAlign: 'left',
                fontWeight: 700,
                defaultCanSort: false,
                disableSortBy: true,
            }
        ]
    },
    {
        Header: "Subscription",
        width: 160,
        textAlign: 'center',
        fontWeight: 700,
        columns: [
            {
                Header: "Plan",
                accessor: (originalRow) => {
                    return <div style={{ textAlign: 'center' }}>{originalRow.subscription.plan}</div>
                },
                textAlign: 'center',
                fontWeight: 700,
                defaultCanSort: false,
                disableSortBy: true,
            },
            {
                Header: "Status",
                Cell: ({ row }) => {
                    switch (row.original.subscription.status) {
                        case 'Idle': {
                            return <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="primary">Idle</Badge></div>
                        }
                        case 'Pending': {
                            return <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="warning" text="dark">Pending</Badge></div>
                        }
                        case 'Blocked': {
                            return <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="danger" >Blocked</Badge></div>
                        }
                        case 'Active': {
                            return <div style={{ textAlign: 'center', fontSize: 15, }}><Badge pill bg="success" text="white">Active</Badge></div>
                        }
                        default:
                            return <></>
                    }
                },
                textAlign: 'center',
                fontWeight: 700,
                defaultCanSort: false,
            }
        ]
    },
    {
        Header: 'Action',
        textAlign: 'center',
        fontWeight: 700,
        defaultCanSort: false,
        Cell: ({ row }) => {
            return <div style={{ textAlign: 'center' }}> <Link className="view_detils"
                to={{
                    pathname: `react-table/${row.original.id}`,
                    state: row.original,
                }}
            ><FaEye style={{ fontSize: 18, color: '#41179d' }} /></Link> </div>
        }
    }

]