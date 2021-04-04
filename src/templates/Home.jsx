import React from 'react'
import { useSelector } from "react-redux"
import { getUserId, getUserName } from '../features/users/usersSlice'

const Home = () => {
    const selector = useSelector(state => state)
    const uid = getUserId(selector)
    const username = getUserName(selector)
    return (
        <div>
            <h2>Home</h2>
            <p>{uid}</p>
            <p>{username}</p>
        </div>
    )
}

export default Home;
