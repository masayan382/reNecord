import React from 'react'
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const goHome = () => {
        history.push('/');
    }
    return (
        <div>
            <h2>ログイン</h2>
            <button onClick={() => dispatch(goHome)}>
                ログインする
            </button>
        </div>
    )
}

export default Login;
