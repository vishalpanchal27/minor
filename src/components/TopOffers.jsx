import React from 'react'
import { search } from '../redux/slices/SearchSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import electronics from '../assets/electronics.jpg'
import fashion from '../assets/fashion.jpg'
import furniture from '../assets/furniture.jpg'
import grocery from '../assets/grocery.jpg'
import kitchen from '../assets/kitchen.jpg'
import mobile from '../assets/mobile.jpg'
import toys from '../assets/toys.jpg'
import tv from '../assets/tv and application.jpg'
const TopOffers = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleOffers = (data) => {
        dispatch(search(data))
        navigate('/search')
    }

    return (
        <div className='flex justify-center h-28 relative'>
            <div className='flex flex-row justify-evenly w-11/12 flex-wrap gap-1 relative'>
                <div className='flex flex-col justify-center items-center cursor-pointer' onClick={() => handleOffers(electronics)}>
                    <img className={`rounded-full ${window.innerWidth < 430 ? 'h-14' : 'h-16'}`} src={electronics} alt="" />
                    <p className='text-xs font-bold'>Electronics</p>
                </div>
                <div className='flex flex-col justify-center items-center cursor-pointer' onClick={() => handleOffers(fashion)}>
                    <img className={`rounded-full ${window.innerWidth < 430 ? 'h-14' : 'h-16'}`} src={fashion} alt="" />
                    <p className='text-xs font-bold'>Fashion</p>
                </div>
                <div className='flex flex-col justify-center items-center cursor-pointer' onClick={() => handleOffers(furniture)}>
                    <img className={`rounded-full ${window.innerWidth < 430 ? 'h-14' : 'h-16'}`} src={furniture} alt="" />
                    <p className='text-xs font-bold'>Furniture</p>
                </div>
                <div className='flex flex-col justify-center items-center cursor-pointer' onClick={() => handleOffers(grocery)}>
                    <img className={`rounded-full ${window.innerWidth < 430 ? 'h-14' : 'h-16'}`} src={grocery} alt="" />
                    <p className='text-xs font-bold'>Grocery</p>
                </div>
                <div className='flex flex-col justify-center items-center cursor-pointer' onClick={() => handleOffers(kitchen)}>
                    <img className={`rounded-full ${window.innerWidth < 430 ? 'h-14' : 'h-16'}`} src={kitchen} alt="" />
                    <p className='text-xs font-bold'>Kitchen</p>
                </div>
                <div className='flex flex-col justify-center items-center cursor-pointer' onClick={() => handleOffers(mobile)}>
                    <img className={`rounded-full ${window.innerWidth < 430 ? 'h-14' : 'h-16'}`} src={mobile} alt="" />
                    <p className='text-xs font-bold'>Mobile</p>
                </div>
                <div className='flex flex-col justify-center items-center cursor-pointer' onClick={() => handleOffers(toys)}>
                    <img className={`rounded-full ${window.innerWidth < 430 ? 'h-14' : 'h-16'}`} src={toys} alt="" />
                    <p className='text-xs font-bold'>Toys</p>
                </div>
                <div className='flex flex-col justify-center items-center cursor-pointer' onClick={() => handleOffers('Appliances')}>
                    <img className={`rounded-full ${window.innerWidth < 430 ? 'h-14' : 'h-16'}`} src={tv} alt="" />
                    <p className='text-xs font-bold'>Appliances</p>
                </div>
            </div>
        </div>
    )
}

export default TopOffers
