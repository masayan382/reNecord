import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { getUserId, getUserName, signOut } from '../features/users/usersSlice'

const Home = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state)
    const uid = getUserId(selector)
    const username = getUserName(selector)
    return (
        <div>
            <h2>Home</h2>
            <p>{uid}</p>
            <p>{username}</p>
            <button onClick={() => dispatch(signOut())}>SignOut</button>
        </div>
    )
}

export default Home;
