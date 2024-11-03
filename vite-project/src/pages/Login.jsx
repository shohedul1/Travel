import React, { useEffect } from 'react'
import LoginSignup from '../components/LoginSignup/LoginSignup'
import { useNavigate } from 'react-router-dom';

const Login = ({ register, loginLoader, registerLoader, login, authUser }) => {
    const navigate = useNavigate();
    // Ensure authUser and authUser.data exist before accessing gender
    // console.log('authUser', authUser)
    const existingUser = authUser && authUser.data && authUser.data.gender === 'admin';
    useEffect(() => {
        if (existingUser) {
            navigate("/")
        }

    })

    return (
        <div>
            <LoginSignup register={register} registerLoader={registerLoader} login={login} loginLoader={loginLoader} />
        </div>
    )
}

export default Login