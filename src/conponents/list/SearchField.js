import React from 'react'
import { Col, Button } from 'react-bootstrap'

const SearchField = ({ onSearchHandel, ref }) => {
    return (
        <Col lg={12} md={12} sm={12} xs={12} style={{ display: 'flex', marginBottom: 35, justifyContent: 'flex-end' }}>
            <input type="text"
                ref={ref}
                placeholder="Search By Title" 
                className="form-control"
                style={{ width: 300 }}
                onChange={onSearchHandel}
            />
            <Button onClick={onSearchHandel}>Search</Button>
            <SearchField />
        </Col>
    )
}

export default SearchField
