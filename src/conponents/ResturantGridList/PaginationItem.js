import React from 'react'
import PropTypes from 'prop-types'


/**
 * Component for showing details of Pagination.
 * @param {number} pageSize - Total Page size 
 * @param {number} totalPost -  Total Post
 * @param {number} curentPage - Curent page size
 * @param {Function} paginate - This function click to next page
 * @returns 
 */
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
    //  Total Page size 
    pageSize: PropTypes.number.isRequired,
    // Total Post
    totalPost: PropTypes.number,
    // Curent page size
    curentPage: PropTypes.number,
    // This function click to next page
    paginate: PropTypes.func.isRequired
}

export default PaginationItem
