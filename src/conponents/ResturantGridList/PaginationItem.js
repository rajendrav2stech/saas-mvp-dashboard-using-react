import React from 'react'

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
                        <div>
                            <li key={index} className={curentPage === index + 1 ? 'page-item active' : 'page-item'}>
                                <button onClick={() => paginate(items)} className="page-link">{items}</button>
                            </li>
                        </div>
                    )
                })
            }
        </ul>
    )
}

export default PaginationItem
