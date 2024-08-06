import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginIn, logOut } from '../redux/features/Auth/authSlice';
import { jwtDecoded } from '../utils/jwtDecoded';
import { useUserLoginMutation } from '../redux/features/Auth/authApi';
import { useGetItemQuery } from '../redux/features/item/itemApi';

const PrivetRoute = ({ children }) => {
    const [errors, setError] = useState('')
    const { token, role } = useSelector((state) => state.auth)
    const [loginUser] = useUserLoginMutation(undefined)
    const { isError } = useGetItemQuery(undefined, { refetchOnFocus: true })
    const dispatch = useDispatch()
    const handeLogin = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const res = await loginUser({ email, password })
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
    useEffect(() => {
        if (token && isError) {
            const { exp } = jwtDecoded(token);
            const currentTime = Math.floor(Date.now() / 1000);
            if (exp < currentTime) {
                dispatch(logOut());
            }
        }
    }, [token, dispatch, isError]);

    if (!token && role !== 'superAdmin') {
        return (
            <form onSubmit={handeLogin} className='flex flex-col w-[30%] mx-auto space-y-3'>
                <input type="email" name='email' placeholder='email' defaultValue={"safiislam04@gmail.com"} className='text-black' />
                <input type="password" name='password' placeholder='password' defaultValue={"safi@123"} className='text-black' />
                <button className='bg-blue-500'>Submit</button>
                <span className='text-red-500'>{errors && errors}</span>
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