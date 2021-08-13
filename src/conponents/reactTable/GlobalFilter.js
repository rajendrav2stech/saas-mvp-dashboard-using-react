import React from 'react'
import SearchIcon from '@material-ui/icons/Search'

const GlobalFilter = ({ filter, setFilter }) => {
    return (

        <div className="search_bar" style={{ width: 380 }}>
            <input type="text"
                placeholder="Global Table Search"
                className="form-control"
                style={{ width: 300 }}
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
            />
            <SearchIcon />
        </div>
    )
}

export default GlobalFilter
