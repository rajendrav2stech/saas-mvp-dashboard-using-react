import React, { createContext, useState } from 'react'

export const ProfileUserContext = createContext()

/**
 * 
 * @param {children} children - children is a special property of React components which contains any child elements defined within the component
 * @returns (
 *  <ProfileUserContext.Provider />
 * )
 */
export const ProfileUserProvider = (props) => {
    const [user, setUser] = useState({
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        name: 'Brad Gibson',
        profile: "UI Dev..."
    })
    return (
        <ProfileUserContext.Provider value={[user, setUser]}>
            {props.children}
        </ProfileUserContext.Provider>
    )
}