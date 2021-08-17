import React, { useState, useRef } from 'react'
import { Col, } from 'react-bootstrap'
import PaginationItem from './PaginationItem'
import ResturantCard from './ResturantCard'
import restaurantData from '../../data/resturantData.json'
import { FaSearch } from "react-icons/fa"

const Resturant = () => {
    let ourData = restaurantData
    const [serchItems, setSerchItems] = useState(ourData)
    const [curentPage, setCurentPage] = useState(1)
    const pageSize = 6
    const searchInpur = useRef(null)

    // GET CURENT PAGE
    const indexOfLastPage = curentPage * pageSize
    const indexOfFirstPage = indexOfLastPage - pageSize
    // const curentPosts = ourData.slice(indexOfFirstPage, indexOfLastPage)
    const curentPageSurch = serchItems.slice(indexOfFirstPage, indexOfLastPage)

    // PAGINATE 
    const paginate = (number) => {
        setCurentPage(number)
    }
    // SEARCH HANDEL
    const onSearchHandel = () => {
        let serchValue = searchInpur.current.value
        const dataItems = ourData.filter((items) => {
            return items.name.toLowerCase().includes(serchValue.toLowerCase())
        })
        setSerchItems(dataItems)
        setCurentPage(1)
    }

    return (
        <div className="rm-body rerutant">
            <div className="container-fluid">
                <div className="row">
                    <Col lg={12} md={12} sm={12} xs={12} style={{ display: 'flex', marginBottom: 0, justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <h4 className="rm_global_heading">Restaurants List</h4>
                        </div>
                        <div className="search_bar">
                            <input type="text"
                                ref={searchInpur}
                                placeholder="Search by title"
                                className="form-control"
                                style={{ width: 300 }}
                                onChange={onSearchHandel}
                            />
                            <FaSearch />
                        </div>
                    </Col>
                    {
                        curentPageSurch.length > 0 ? curentPageSurch.map((items, id1) => {
                            return <ResturantCard items={items} key={id1} />
                        }) : <h6>No found data for this title <strong style={{ color: 'red' }}>{searchInpur.current.value}</strong></h6>
                    }
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <PaginationItem
                            pageSize={pageSize}
                            totalPost={serchItems.length}
                            paginate={paginate}
                            data={serchItems}
                            curentPage={curentPage}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Resturant
