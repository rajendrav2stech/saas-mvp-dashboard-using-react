import React from 'react'
import { Breadcrumb, Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'

const ReactUserDetils = () => {
    let data = useLocation()
    let colData = data.state
    return (
        <div className="rm-body">
            <Container fluid>
                <Row>
                    <Col>
                        <div>
                            <h4 className="rm_global_heading">Restaurants List</h4>
                            <Breadcrumb>
                                <li className="breadcrumb-item">
                                    <Link to="/react-table"><KeyboardBackspaceIcon /> Back to React Table</Link>
                                </li>
                                <Breadcrumb.Item active>{colData.first_name}</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <Card style={{ padding: 15 }}>
                            <h5> {colData.first_name} {colData.last_name}</h5>
                            <h6>{colData.email}</h6>
                            <h6>{colData.age}</h6>
                            <h6>{colData.country}</h6>
                            <h6>{colData.phone}</h6>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ReactUserDetils



