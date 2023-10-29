import React, { useEffect, useState } from 'react'

const ImagesSlider = () => {
    const first = require('../assets/first.jpg')
    const second = require('../assets/second.jpg')
    const third = require('../assets/third.jpg')
    const fourth = require('../assets/fourth.jpg')
    const five = require('../assets/fifth.jpg')
    const [slideNumber, setSlideNumber] = useState(0)
    const imageArr = [first, second, third, fourth, five]


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
        <div className='flex flex-row mb-32'>
            <img src={imageArr[slideNumber]} alt="" className=' ' />
        </div>
    )
}

export default ImagesSlider
