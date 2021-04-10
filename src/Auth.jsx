import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getIsSignedIn, listenAuthState } from './features/users/usersSlice';

const Auth = ({ children }) => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const isSignedIn = getIsSignedIn(selector)

    useEffect(() => {
        if (!isSignedIn) {
            dispatch(listenAuthState())
        }
    }, []);

    if (!isSignedIn) {
        return <></>
    } else {
        return children;
    }
}

export default Auth
