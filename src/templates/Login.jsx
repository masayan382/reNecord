import React from 'react'
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { SignInFb } from '../features/users/usersSlice';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const goHome = () => {
        history.push('/');
    }
    return (
        <div>
            <h2>ログイン</h2>
            <button onClick={() => {
                dispatch(SignInFb())
                dispatch(goHome)
            }
            }>
                ログインする
            </button>
        </div>
    )
}

export default Login;
