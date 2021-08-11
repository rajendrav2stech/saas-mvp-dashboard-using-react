import React from 'react'

const PaginationItem = ({ pageSize, totalPost, curentPage, paginate, paginatePrev }) => {
    // GET CURENT PAGE
    const pageNumbaer = []
    for (let i = 1; i <= Math.ceil(totalPost / pageSize); i++) {
        pageNumbaer.push(i)
    }
    return (
        <ul className="pagination">
            {
                pageNumbaer.map((items, index) => {
                    return (
                        <div>
                            <li key={index} className={curentPage === index + 1 ? 'page-item active' : 'page-item'}>
                                <a role="button" onClick={() => paginate(items)} className="page-link">{items}</a>
                            </li>
                        </div>
                    )
                })
            }
        </ul>
    )
}

export default PaginationItem
