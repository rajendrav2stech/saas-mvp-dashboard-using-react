import React from 'react'
import TableComponents from '../globalTableBody/TableComponents'
import { json_data } from '../../data/json_data'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'

const EmployeeTable = () => {
    const employeHeadData = json_data.employeeHead
    const employeBodyData = json_data.employeeBody
    const userHead = json_data.usersHead
    const userBody = json_data.users

    return (
        <div className="rm-body">
            <Container fluid>
                <Row>
                    <Col sm={12} xs={12} md={12} lg={12}>
                        <div>
                            <h4 className="rm_global_heading">Global Reusable Table</h4>
                        </div>
                        <TableComponents
                            tHeadData={employeHeadData}
                            tBodyData={employeBodyData}
                            customClass={'table table-sm table-striped table-bordered table-hover rm-to-table'}
                        />
                        <br />
                        <TableComponents
                            tHeadData={userHead}
                            tBodyData={userBody}
                            customClass={'table table-sm table-striped table-bordered table-hover rm-to-table'}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default EmployeeTable
