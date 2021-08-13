import React, { createContext, useState } from 'react'

export const ProfileUserContext = createContext()

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