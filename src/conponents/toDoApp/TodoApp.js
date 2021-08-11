import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Todo from './Todo'

const TodoApp = () => {
    return (
        <div className="rm-body">
            <Container fluid>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <Todo />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TodoApp
