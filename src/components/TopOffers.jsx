import React from 'react'
import { search } from '../redux/slices/SearchSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const TopOffers = () => {
    const topOfferImg = require('../assets/offer.jpg')
    const electronics = require('../assets/electronics.jpg')
    const fashion = require('../assets/fashion.jpg')
    const furniture = require('../assets/furniture.jpg')
    const grocery = require('../assets/grocery.jpg')
    const kitchen = require('../assets/kitchen.jpg')
    const mobile = require('../assets/mobile.jpg')
    const toys = require('../assets/toys.jpg')
    const tv = require('../assets/tv and application.jpg')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleOffers = (data) => {
        dispatch(search(data))
        navigate('/search')
    }

    return (
        <div className='flex justify-center h-28'>
            <div className='flex flex-row justify-evenly w-11/12 '>
                <div className='flex flex-col justify-center items-center' onClick={() => handleOffers(electronics)}>
                    <img className='rounded-full h-16' src={electronics} alt="" />
                    <p className='text-xs font-bold'>Electronics</p>
                </div>
                <div className='flex flex-col justify-center items-center' onClick={() => handleOffers(fashion)}>
                    <img className='rounded-full h-16' src={fashion} alt="" />
                    <p className='text-xs font-bold'>Fashion</p>
                </div>
                <div className='flex flex-col justify-center items-center' onClick={() => handleOffers(furniture)}>
                    <img className='rounded-full h-16' src={furniture} alt="" />
                    <p className='text-xs font-bold'>Furniture</p>
                </div>
                <div className='flex flex-col justify-center items-center' onClick={() => handleOffers(grocery)}>
                    <img className='rounded-full h-16' src={grocery} alt="" />
                    <p className='text-xs font-bold'>Grocery</p>
                </div>
                <div className='flex flex-col justify-center items-center' onClick={() => handleOffers(kitchen)}>
                    <img className='rounded-full h-16' src={kitchen} alt="" />
                    <p className='text-xs font-bold'>Kitchen</p>
                </div>
                <div className='flex flex-col justify-center items-center' onClick={() => handleOffers(mobile)}>
                    <img className='rounded-full h-16' src={mobile} alt="" />
                    <p className='text-xs font-bold'>Mobile</p>
                </div>
                <div className='flex flex-col justify-center items-center' onClick={() => handleOffers(toys)}>
                    <img className='rounded-full h-16' src={toys} alt="" />
                    <p className='text-xs font-bold'>Toys</p>
                </div>
                <div className='flex flex-col justify-center items-center' onClick={() => handleOffers('tv & appliances')}>
                    <img className='rounded-full h-16 w-16' src={tv} alt="" />
                    <p className='text-xs font-bold'>TVs & Appliances</p>
                </div>
            </div>
        </div>
    )
}

export default TopOffers
