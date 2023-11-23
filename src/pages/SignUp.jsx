// import { toHaveStyle } from '@testing-library/jest-dom/matchers';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { toast } from 'react-toastify';
import Spinner from '../components/spinner/Spinner'


const SignUp = (props) => {
  const [loadingSignUp, setloadSignUp] = useState(0)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [create, setCreate] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const handleFormData = (event) => {
    const { name, value } = event.target
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  const handleSignUp = async (event) => {
    event.preventDefault();
    console.log(formData)
    if (formData.confirmPassword === formData.password) {

      const NewUser = {
        "Username": formData.username,
        "password": formData.password,
        "email": formData.email,
        "Favourite":0,
        "cart":0
      }

      setloadSignUp(1);

      const respon = await fetch(`https://ecom-otdq.onrender.com/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(NewUser)
      })
      if (respon.status === 404 || !respon) {
        setloadSignUp(0)
        alert("Email already exist")
      }
      else if (respon.status === 403) {
        setloadSignUp(0)
        alert("Please fill the form")
      }
      else {
        console.log(NewUser)
        setloadSignUp(0);
        navigate('/')
      }
    }
    else {
      toast.warning('Password does not Match')
    }
  }

  return (
    <div className='absolute top-80 xl:top-20 lg:top-20 md:top-20  rounded-2xl xl:w-[25rem] w-[20rem] border-4 border-black flex justify-center md:h- items-center flex-col p-3 z-50' >
      <p className='text-2xl font-bold xl:text-4xl lg:text-3xl md-text-2xl '>Sign Up</p>
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
            <input type={create ? 'text' : 'password'}
              className='w-full h-12 text-lg pl-3 bg-gray-300 rounded-md outline-none'
              required
              name='password'
              placeholder='Create password'
              value={formData.password}
              onChange={handleFormData}
            />
            <div className='flex items-center pr-4 text-xl'>
              {create ?
                (<span onClick={() => setCreate(false)}  > <FaRegEye /></span>) :
                (<span onClick={() => setCreate(true)} ><FaRegEyeSlash /></span>)
              }
            </div>
          </div>
        </label>
        <label htmlFor="" className='w-full'>
          Confirm password
          <div className='flex bg-gray-300 rounded-md'>
            <input type={confirm ? 'text' : 'password'}
              className='w-full h-12 text-lg pl-3 bg-gray-300 rounded-md outline-none'
              required
              name='confirmPassword'
              placeholder='Confirm password'
              value={formData.confirmPassword}
              onChange={handleFormData}
            />
            <div className='flex items-center pr-4 text-xl'>
              {confirm ? (
                <span onClick={() => setConfirm(false)}><FaRegEye /></span>
              ) : (
                <span onClick={() => setConfirm(true)}><FaRegEyeSlash /></span>
              )}
            </div>
          </div>
        </label>
        <div className='w-full flex justify-center h-12 bg-red-800 mt-4 text-white font-bold'>
          <button>Create Account</button>
        </div>
        <p className='text-gray-400 text-sm'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
      </form>
      {loadingSignUp ?
        (<Spinner />) : console.log("spinner")}
    </div>
  );
};

export default SignUp;
