import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginIn } from '../redux/features/Auth/authSlice';
import { jwtDecoded } from '../utils/jwtDecoded';

const PrivetRoute = ({ children }) => {
    const [error, setError] = useState('')
    const { token, role } = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const handeLogin = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const res = await axios.post('http://localhost:5000/adminLogin', { email, password })
        console.log(res);
        if (res.data.error) {
            setError(res?.data?.message)
        }
        else {
            setError("")
            const token = res?.data?.token
            const { email, role } = jwtDecoded(token)
            dispatch(loginIn({ token, email, role }))
        }
    }

    if (!token && role !== 'superAdmin') {
        return (
            <form onSubmit={handeLogin} className='flex flex-col w-[30%] mx-auto space-y-3'>
                <input type="email" name='email' placeholder='email' defaultValue={"safiislam04@gmail.com"} className='text-black' />
                <input type="password" name='password' placeholder='password' defaultValue={"safi@123"} className='text-black' />
                <button className='bg-blue-500'>Submit</button>
                <span className='text-red-500'>{error && error}</span>
            </form>
        )
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivetRoute;

{/* <Navigate to={'/dashbord/admin/add_item'} /> */ }