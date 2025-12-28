import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const LoginForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate('/dashboard');
    }

    return (
        <form onSubmit={submitHandler}
            className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                    Email Address <sup className='text-red-700'>*</sup>
                </p>
                <input
                    required
                    type='email'
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter Email id'
                    name='email'
                    className='bg-gray-800 rounded-[0.5rem] w-full text-white p-[12px]'
                />
            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                    Password <sup className='text-red-700'>*</sup>
                </p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter password'
                    name='password'
                    className='bg-gray-800 rounded-[0.5rem] w-full text-white p-[12px]'
                />

                <span
                    className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ?
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                </span>

                <Link to="#">
                    <p className='text-xs mt-1 text-blue-300 max-w-max ml-auto'>Forget Password</p>
                </Link>
            </label>

            <button className='bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px]'>
                Sign In
            </button>
        </form>
    )
}

export default LoginForm
