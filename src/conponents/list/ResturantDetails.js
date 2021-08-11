import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LoadinScreen from '../loading/LoadinScreen'
import RstDetsils from './RstDetsils'

const ResturantDetails = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
    const [isclosed] = useState(false)
    let data = useLocation()
    let rSData = data.state
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
    useEffect(() => {
        setTimeout(() => {
            setrsData(rSData)
            setLoading(false)
        }, 2000)
    }, [])
    console.log("DATA", data)
    return (
        <div className="rm-body">
            {
                loading ? <LoadinScreen /> : <RstDetsils rsData={rsData} isclosed={isclosed} />
            }
        </div>
    )
}

export default ResturantDetails


