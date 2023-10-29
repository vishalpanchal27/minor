import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
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
        navigate('/home')

    }
    return (
        <div className='absolute top-44 rounded-2xl left-20 w-3/12 border-4 border-black flex items-center flex-col p-3 z-50' >
            <p className='text-4xl'>Login Your Account</p>
            <form action="" onSubmit={handleSignUp} className='w-full'>
                <label htmlFor="" >
                    <p className='mt-4'>Email</p>
                    <input type="email"
                        className='w-full h-12 text-lg pl-3 bg-gray-300 rounded-md'
                        required
                        name='email'
                        placeholder='Enter your Email Id'
                        value={formData.email}
                        onChange={handleFormData}
                    />
                </label>
                <label htmlFor="" className='w-full '>
                    <p className='flex justify-between mt-2'>
                        Password
                        <button className='text-blue-600 text-sm'>Forgot Password</button>
                    </p>
                    <input type="password"
                        className='w-full h-12 text-lg pl-3 bg-gray-300 rounded-md'
                        required
                        name='password'
                        placeholder='Create password'
                        value={formData.password}
                        onChange={handleFormData}
                    />
                </label>
                <div className='w-full flex justify-center h-12 bg-red-800 mt-4 text-white font-bold'>
                    <button>Login Account</button>
                </div>
                <p className='text-gray-400 text-sm'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            </form>
        </div>
    )
}

export default Login
