// import { toHaveStyle } from '@testing-library/jest-dom/matchers';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [show, setShow] = useState({
    createPassword: false,
    confirmPassword: false
  })

  const handleFormData = (event) => {
    const { name, value } = event.target
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  const handleSignUp = (event) => {
    event.preventDefault();
    console.log(formData)
    if (formData.confirmPassword === formData.password) {
      navigate('/home')
    }
    else {

    }
  }



  const showAndHideEffect = () => {

  };


  return (
    <div className='absolute top-44 rounded-2xl left-20 w-3/12 border-4 border-black flex items-center flex-col p-3 z-50' >
      <p className='text-4xl'>Sign Up</p>
      <form action="" onSubmit={handleSignUp} className='w-full'>
        <label htmlFor="" >
          Username
          <input type="text"
            className='w-full h-12 text-lg pl-3 bg-gray-300 rounded-md'
            required
            name='username'
            placeholder='create your Username'
            value={formData.username}
            onChange={handleFormData}
          />
        </label>
        <label htmlFor="">
          Email
          <input type="email"
            className='w-full h-12 text-lg pl-3 bg-gray-300 rounded-md'
            required
            name='email'
            placeholder='Enter your Email Id'
            value={formData.email}
            onChange={handleFormData}
          />
        </label>
        <label htmlFor="" className='w-full'>
          Password
          <div className='flex bg-gray-300 rounded-md'>
            <input type="password"
              className='w-full h-12 text-lg pl-3 bg-gray-300 rounded-md outline-none'
              required
              name='password'
              placeholder='Create password'
              value={formData.password}
              onChange={handleFormData}
            />
            <div className='flex items-center pr-4 bg-red-900'>
              {
                show.createPassword ?
                  (<span onClick={showAndHideEffect}> <FaRegEye /></span>) :
                  (<span onClick={showAndHideEffect}><FaRegEyeSlash /></span>)
              }
            </div>
          </div>
        </label>
        <label htmlFor="" className='w-full'>
          Confirm password
          <div className='flex bg-gray-300 rounded-md'>
            <input type="password"
              className='w-full h-12 text-lg pl-3 bg-gray-300 rounded-md outline-none'
              required
              name='confirmPassword'
              placeholder='Confirm password'
              value={formData.confirmPassword}
              onChange={handleFormData}
            />
            <div className='flex items-center pr-4 bg-red-900'>
              {

                show.confirmPassword ?
                  (<span onClick={showAndHideEffect}> <FaRegEye /></span>) :
                  (<span onClick={showAndHideEffect}><FaRegEyeSlash /></span>)
              }
            </div>
          </div>
        </label>
        <div className='w-full flex justify-center h-12 bg-red-800 mt-4 text-white font-bold'>
          <button>Create Account</button>
        </div>
        <p className='text-gray-400 text-sm'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
      </form>
    </div>
  );
};

export default SignUp;
