import React, { useEffect, useState } from 'react'
import TopOffers from './TopOffers'
import { useSelector } from 'react-redux'

const ImagesSlider = () => {
    const first = require('../assets/first.jpg')
    const second = require('../assets/second.jpg')
    const third = require('../assets/third.jpg')
    const fourth = require('../assets/fourth.jpg')
    const five = require('../assets/fifth.jpg')
    const [slideNumber, setSlideNumber] = useState(0)
    const imageArr = [first, second, third, fourth, five]
    const loading = useSelector((state) => state.productData.loading)


    const nextSlide = () => {
        setSlideNumber((slideNumber + 1) % imageArr.length);
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000); // Automatically slide every 5 seconds
        return () => {
            clearInterval(slideInterval); // Clear the interval when the component unmounts
        };
    }, [slideNumber]);


    return (
        <div className=' h-[30rem] '>
            {!loading &&
                <div className=''>
                    <div className='flex flex-col relative'>
                        <TopOffers />
                    </div>
                    <div className={`flex flex-row z-0 relative ${window.innerWidth < 430 ? 'top-14 h-24' : ''}`}>
                        <img src={imageArr[slideNumber]} alt="" className=' ' />
                    </div>
                </div>
            }
        </div>
    )
}

export default ImagesSlider
