import React from 'react'
import { FaSearch } from "react-icons/fa"
import PropTypes from 'prop-types'

/**
 * Component for showing details of Modal Popup
 * @param {any} filter - useFilters is the hook that implements row filtering table
 * @param {Function} setFilter - An array of objects, each having a column id and a corresponding filter value
 * @returns 
 */
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
    /**
     * useFilters is the hook that implements row filtering table
     */
    filter: PropTypes.any,
    /**
     * - An array of objects, each having a column id and a corresponding filter value
     */
    setFilter: PropTypes.func.isRequired
}

export default GlobalFilter
