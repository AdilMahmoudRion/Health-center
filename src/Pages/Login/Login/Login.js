import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div id="log">
            <h1>log in</h1>
            <button onClick={signInUsingGoogle}>login with google</button>
        </div>
    );
};

export default Login;