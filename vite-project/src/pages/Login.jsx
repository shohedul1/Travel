import React, { useEffect } from 'react'
import LoginSignup from '../components/LoginSignup/LoginSignup'
import { userAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const Login = ({ register, loading, login }) => {
    const { authUser } = userAuthStore();
    const navigate = useNavigate();
    // Ensure authUser and authUser.data exist before accessing gender
    console.log('authUser', authUser)
    const existingUser = authUser && authUser.data && authUser.data.gender === 'admin';
    useEffect(() => {
        if (existingUser) {
            navigate("/")
        }

    })

    return (
        <div>
            <LoginSignup register={register} loading={loading} login={login} />
        </div>
    )
}

export default Login