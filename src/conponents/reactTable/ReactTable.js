import React, { useMemo } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { json_data } from '../../data/json_data'
import ReactGlobalTable from './ReactGlobalTable'
import VisibilityIcon from '@material-ui/icons/Visibility'


const ReactTable = () => {
    const columns = useMemo(() => reactTbaleColumn, [])
    const data = useMemo(() => json_data.reactTableBody, [])
    const userColumns = useMemo(() => usersHead, [])
    const userData = useMemo(() => json_data.users, [])
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
                        />
                        <ReactGlobalTable
                            columns={columns}
                            data={data}
                        />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default ReactTable


export const reactTbaleColumn = [
    {
        Header: 'Id',
        accessor: 'id',
    },
    {
        Header: 'Name',
        textAlign: 'center',
        columns: [
            {
                Header: 'First Name',
                accessor: 'first_name',
                // Cell: ({ value }) => {
                //     console.log("VALUEEE", value)
                //     return (
                //         <button>{value} </button>
                //     )
                // }
            },
            {
                Header: 'Last Name',
                accessor: 'last_name'
            },
        ]
    },
    {
        Header: 'Info',
        textAlign: 'center',
        columns: [
            {
                Header: 'Email',
                accessor: 'email',
                textAlign: 'left',
            },
            {
                Header: 'DoB',
                accessor: 'date_of_birth',
                // Cell: ({ value }) => {
                //     return (
                //         moment(value).format('DD/MM/YYYY')
                //     )
                // }
            },
            {
                Header: 'Age',
                accessor: 'age'
            },
            {
                Header: 'Country',
                accessor: 'country'
            },
            {
                Header: 'Phone',
                accessor: 'phone'
            },
            {
                Header: 'Action',
                accessor: 'action',
                textAlign: 'center',
                Cell: ({ row }) => {
                    // console.log("VALUEEE", row)
                    return (
                        <Link
                            style={{ textAlign: 'center', display: 'block', color: '#41179d' }}
                            to={{
                                pathname: `/react-table/${row.id}`,
                                state: row.original,
                            }}

                        > <VisibilityIcon /></Link>
                    )
                }
            }
        ]
    },
]
export const usersHead = [
    {
        Header: "Sr",
        Cell: ({ row }) => {
            return <>{row.index + 1}</>;
        },
        width: 20,
        fontWeight: 700
    },
    {
        Header: "Full Name",
        Cell: ({ row }) => {
            console.log("Rajuuuuu", row.original.avatar)
            return (
                <>
                    <img src={row.original.avatar} alt={row.original.first_name} /> {row.original.first_name} {row.original.last_name}
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
    },
    {
        Header: "Email",
        accessor: 'email',
        width: 250,
        textAlign: 'left',
        fontWeight: 700
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
                fontWeight: 700
            },
            {
                Header: "Street",
                accessor: (originalRow) => {
                    return originalRow.address.street_name;
                },
                width: 200,
                textAlign: 'left',
                fontWeight: 700
            },
            {
                Header: "State",
                accessor: (originalRow) => {
                    return originalRow.address.state;
                },
                width: 100,
                textAlign: 'left',
                fontWeight: 700
            },
            {
                Header: "Country",
                accessor: (originalRow) => {
                    return originalRow.address.country;
                },
                width: 200,
                textAlign: 'left',
                fontWeight: 700
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
                fontWeight: 700
            },
            {
                Header: "Status",
                Cell: ({ row }) => {
                    console.log("originalRow", row.original.subscription)
                    switch (row.original.subscription.status) {
                        case 'Idle': {
                            return <span style={{ color: 'blue', border: "1px solid", padding: '2px 5px', display: 'block', textAlign: 'center', borderRadius: '30px' }}>Idle</span>
                        }
                        case 'Pending': {
                            return <span style={{ color: 'orange', border: "1px solid", padding: '2px 5px', display: 'block', textAlign: 'center', borderRadius: '30px' }}>Pending</span>
                        }
                        case 'Blocked': {
                            return <span style={{ color: 'red', border: "1px solid", padding: '2px 5px', display: 'block', textAlign: 'center', borderRadius: '30px' }}>Blocked</span>
                        }
                        case 'Active': {
                            return <span style={{ color: 'green', border: "1px solid", padding: '2px 5px', display: 'block', textAlign: 'center', borderRadius: '30px' }}>Blocked</span>
                        }
                        default:
                            return <></>
                    }
                },
                textAlign: 'center',
                fontWeight: 700
            }
        ]
    },
    {
        Header: 'Action',
        textAlign: 'center',
        fontWeight: 700,
        Cell: ({ row }) => {
            console.log("Action", row.original.id)
            return <div style={{ textAlign: 'center' }}> <Link className="view_detils_button"
                to={{
                    pathname: `react-table/${row.original.id}`,
                    state: row.original
                }}
            >View</Link> </div>
        }
    }

]