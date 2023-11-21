import React from 'react'
import './spinner.css'
import gif from '../../assets/giphy2.gif';

const SearchLoader = () => {
    // const {gif} = require('../../assets/giphy.gif')
    return (
        <div className='for_center flex justify-center items-center flex-col '>
            <img src={gif} alt="" className='h-48' />
            <p className='font-bold tracking-widest'>Loading....</p>
        </div>
    )
}

export default SearchLoader
