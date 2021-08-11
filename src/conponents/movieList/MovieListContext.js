import React, { useState, createContext } from 'react'


export const MovieListContext = createContext()

export const MoviProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            name: 'Harry Potter',
            price: '10'
        }, 
        {
            id: 2,
            name: 'Game Of Thrones',
            price: '15'
        },
        {
            id: 3,
            name: 'Inception',
            price: '10'
        },
        {
            id: 4,
            name: 'DON 1',
            price: '15'
        }
    ])
    return (
        <MovieListContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieListContext.Provider>
    )
}


