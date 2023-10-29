import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SignUp from './SignUp'
import Login from '../components/Login'
import './mainPage.css'

const MainPage = () => {
    const [page, setPage] = useState('')
    const gift1 = require('../assets/Happy Shopping.png')
    const mobile = require('../assets/Online Shopping (HD).png')
    const twogiftbox = require('../assets/Gift Box (HD).png')
    const shop = require('../assets/Store.png')
    const navigate = useNavigate()

    const handlePages = (selectPage) => {
        if (selectPage === 'signUp') {
            setPage('signUp')
        }
        else if (selectPage === 'login') {
            setPage('login')
        }
        else if (selectPage === 'home') {
            console.log('home')
            navigate('/')
        }
    }

    return (
        <div className='relative top-[-30px] w-full z-0' >
            {page === '' &&
                <div className='absolute border-2 border-black  w-3/12 top-44 left-20 flex justify-center flex-col rounded-3xl gap-5 p-5 z-30'>
                    <button onClick={() => handlePages('login')} className='font-bold text-xl  p-3 rounded-md border-2 border-gray-600 bg-yellow-500'>Already have an Account</button>
                    <button onClick={() => handlePages('signUp')} className='font-bold text-xl bg-yellow-500 p-3 rounded-md border-2 border-gray-600'>Create New Account</button>

                </div>
            }
            {
                page === 'signUp' ? (<SignUp />) : ('')
            }
            {
                page === 'login' ? (<Login />) : ('')
            }

            {/* <img src={image} alt="" className='h-[100.5vh] w-full z-50' /> */}
            <div className='signUpMainBackground  w-full'>
                <div className='absolute top-0 right-0  h-full w-full'>
                    <img src={gift1} alt="" className='h-56 w-56 z-20 absolute top-20 right-40 floating-element' />
                    {/* <img src={giftBox} alt="" className='h-32 w-32 z-50 absolute  floating-element' /> */}
                    <img src={mobile} alt="" className='h-32 w-32 z-20 absolute top-96 rotate-180 right-14 floating-element' />
                    <img src={twogiftbox} alt="" className='h-48 w-48 z-20 absolute top-56 right-[36rem] floating-element' />
                    <img src={shop} alt="" className='h-[700px] w-[40%] z-20 top-10 absolute right-28 ' />
                </div>
            </div>
        </div>
    )
}

export default MainPage
