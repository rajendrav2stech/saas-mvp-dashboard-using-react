import React from 'react'
import PropTypes from 'prop-types'

const PaginationItem = ({ pageSize, totalPost, curentPage, paginate }) => {
    // GET CURENT PAGE
    const pageNumbaer = []
    for (let i = 1; i <= Math.ceil(totalPost / pageSize); i++) {
        pageNumbaer.push(i)
    }
    return (
        <ul className="pagination" style={{ marginBottom: 0 }}>
            {
                pageNumbaer.map((items, index) => {
                    return (
                        <div key={index}>
                            <li className={curentPage === index + 1 ? 'page-item active' : 'page-item'}>
                                <button onClick={() => paginate(items)} className="page-link">{items}</button>
                            </li>
                        </div>
                    )
                })
            }
        </ul>
    )
}

PaginationItem.propTypes = {
    pageSize: PropTypes.number.isRequired,
    totalPost: PropTypes.number,
    curentPage: PropTypes.number,
    paginate: PropTypes.func.isRequired
}

export default PaginationItem
