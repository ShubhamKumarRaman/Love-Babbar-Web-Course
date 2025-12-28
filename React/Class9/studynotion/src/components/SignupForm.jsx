import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState('student')

  function changeHandler(event) {
    setFormData(prevData => ({
      ...prevData,
      [event.target.name]: event.target.value
    }))
  }

  function submitHandler(e) {
    e.preventDefault();
    // console.log(formData)
    if (formData.password != formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");

    const accountData = {
      ...formData
    }

    const finalData = {
      ...accountData,
      accountType
    }

    console.log("Printing final account data: ");
    console.log(finalData);

    navigate('/dashboard');
  }

  return (
    <div>
      {/* student-instructor tab */}
      <div className='flex bg-gray-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button type="button"
          onClick={() => setAccountType('student')}
          className={`${accountType === 'student'
            ?
            'bg-black text-white'
            : 'bg-transparent text-shadow-indigo-300'} py-2 px-5 rounded-full transition-all duration-200`}
        >
          Student
        </button>
        <button type="button"
          onClick={() => setAccountType('instructor')}
          className={`${accountType === 'instructor'
            ?
            'bg-black text-white'
            : 'bg-transparent text-shadow-indigo-300'} py-2 px-5 rounded-full transition-all duration-200`}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* First Name and Last Name */}
        <div className='flex gap-x-4'>
          <label>
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>First Name<sup className='text-red-700'>*</sup></p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className='bg-gray-800 rounded-[0.5rem] w-full text-white p-[12px]'
            />
          </label>

          <label>
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Last Name<sup className='text-red-700'>*</sup></p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className='bg-gray-800 rounded-[0.5rem] w-full text-white p-[12px]'
            />
          </label>
        </div>

        {/* Email */}
        <label>
          <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Email Address<sup className='text-red-700'>*</sup></p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
            className='bg-gray-800 rounded-[0.5rem] w-full text-white p-[12px]'
          />
        </label>

        {/* Passwords */}
        <div className='w-full flex gap-x-4 mx-0'>
          <label className='relative'>
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Create Password<sup className='text-red-700'>*</sup></p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className='bg-gray-800 rounded-[0.5rem] w-full text-white p-[12px]'
            />
            <span
              className='absolute right-3 top-[38px] cursor-pointer'
              onClick={() => setShowPassword(prev => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
            </span>
          </label>

          <label className='relative'>
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-red-700'>*</sup></p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className='bg-gray-800 rounded-[0.5rem] w-full text-white p-[12px]'
            />
            <span
              className='absolute right-3 top-[38px] cursor-pointer'
              onClick={() => setShowConfirmPassword(prev => !prev)}>
              {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
            </span>
          </label>
        </div>

        <button className='w-full bg-yellow-400 rounded-[8px] font-medium text-black mt-5 px-[12px] py-[8px]'>
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm
