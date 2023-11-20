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
        <div className='relative signUpMainBackground top-12 w-full xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-rows-2 grid '>
            <div className=' flex justify-center items-center order-2 sm:order-1'>
                {
                    page === 'signUp' ? (<SignUp />) : (page === 'login' ? (<Login />) :
                        (<div className='border-2 border-black flex flex-col gap-5 p-5 rounded-xl'>
                            <button onClick={() => handlePages('login')} className='font-bold xl:text-xl lg:text-lg md:text-md sm:text-sm p-3 rounded-md border-2 border-gray-600 bg-yellow-500'>Already have an Account</button>
                            <button onClick={() => handlePages('signUp')} className='font-bold xl:text-xl lg:text-lg md:text-md sm:text-sm bg-yellow-500 p-3 rounded-md border-2 border-gray-600'>Create New Account</button>
                        </div>))
                }
            </div>
            <div className=' relative   order-1 sm:order-2'>
                <img src={gift1} alt="" className='absolute  xl:top-[2rem] lg:top-[7rem] xl:right-[8rem] lg:right-[4rem] md:right-10 md:top-20   xl:h-48 lg:h-36 md:h-32 h-20 hidden xl:flex lg:flex md:flex floating-element' />
                {/* <img src={mobile} alt="" className=' absolute floating-element xl:top-[16rem] xl:right-7 xl:h-36 lg:top-[17rem] lg:-right-5 lg:h-24 md:top-[16rem] md:-right-3 md:h-20 h-16 top-32 right-[2rem] hidden xl:flex lg:flex md:flex md:overflow-hidden' /> */}
                <img src={twogiftbox} alt="" className='absolute floating-element xl:top-32 xl:h-40 lg:top-48 lg:h-32 md:top-48 md:-left-3 md:h-28 h-20 top-20 left-14 hidden xl:flex xl:left-14 lg:flex md:flex' />
                <div className='flex justify-center items-center'>
                    <img src={shop} alt="" className='lg:h-[35rem] xl:h-[36rem] sm:h-[20rem] md:h-[36rem] h-80 ' />
                </div>
            </div>
        </div>
    )
}

export default MainPage
