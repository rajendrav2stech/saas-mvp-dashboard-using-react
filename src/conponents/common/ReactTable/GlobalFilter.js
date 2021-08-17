import React from 'react'
import { FaSearch } from "react-icons/fa"
import PropTypes from 'prop-types'

const GlobalFilter = ({ filter, setFilter }) => {
    return (

        <div className="search_bar" style={{ width: 380 }}>
            <input type="text"
                placeholder="Search by Name, City, Street, State"
                className="form-control"
                style={{ width: 300 }}
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
            />
            <FaSearch />
        </div>
    )
}

GlobalFilter.propTypes = {
    filter: PropTypes.any,
    setFilter: PropTypes.func.isRequired
}

export default GlobalFilter
