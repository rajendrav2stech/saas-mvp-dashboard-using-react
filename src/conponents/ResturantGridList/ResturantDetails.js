import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LoadinScreen from '../common/Loading/LoadinScreen'
import RstDetsils from './RstDetsils'

const ResturantDetails = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
    const [isclosed] = useState(false)
    let data = useLocation()
    let restaurantData = data.state
    const [loading, setLoading] = useState(true)
    const [rsData, setrsData] = useState({
        hours: {
            monday: {},
            tuesday: {},
            wednesday: {},
            thursday: {},
            friday: {},
            saturday: {},
            sunday: {}
        },
    })
    // Set loading and set data with time out
    useEffect(() => {
        setTimeout(() => {
            setrsData(restaurantData)
            setLoading(false)
        }, 2000)
    }, [restaurantData])
    return (
        <div className="rm-body">
            {
                loading ? <LoadinScreen /> : <RstDetsils rsData={rsData} isclosed={isclosed} />
            }
        </div>
    )
}

export default ResturantDetails


