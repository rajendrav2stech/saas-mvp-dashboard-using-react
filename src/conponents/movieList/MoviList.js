import React, { useState, useContext } from 'react'
import { MovieListContext } from './MovieListContext'

const MoviList = () => {
    const [movies, setMovies] = useContext(MovieListContext)
    const [mlist, setMlist] = useState({
        id: '',
        names: '',
        prices: '',
        // choseFile: ''
    })
    const onchageHandel = (event) => {
        const target = event.target
        const name = target.name
        const value = target.value
        setMlist({
            ...mlist,
            [name]: value
        })
    }
    const submitMovieList = (event) => {
        event.preventDefault()
        // console.log(mlist)
        if (mlist.names === "") {
            alert('Please fill move name')
        } else if (mlist.prices === "") {
            alert('Prices Must me fill')
        } else {
            const updateData = [...movies, {
                id: new Date().getTime().toString(),
                name: mlist.names,
                price: mlist.prices
            }]
            console.log(mlist.id)
            setMovies(updateData)
        }
        setMlist({
            names: '',
            prices: ''
        })
    }

    return (
        <div className="rm-body">
            <h5>Add A Movie</h5>
            <form action="" onSubmit={submitMovieList}>
                <input
                    type="text"
                    placeholder="Move Name"
                    name="names"
                    value={mlist.names}
                    onChange={onchageHandel}
                />
                <input
                    type="number"
                    placeholder="Price"
                    name="prices"
                    value={mlist.prices}
                    onChange={onchageHandel}
                />
                {/* <input
                    type="file"
                    name="choseFile"
                    value={mlist.choseFile}
                    onChange={onchageHandel}
                /> */}
                <button type="submit">Add Move</button>
            </form>
            <ul>
                {
                    movies.map((move, i) => {
                        return (
                            <li key={move.id}>{move.name},  ${move.price}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MoviList
