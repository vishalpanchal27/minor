import React, { useState } from 'react'
import './searchButton.css'
import { useDispatch } from 'react-redux'
import { search } from '../../redux/slices/SearchSlice'
import { FiSearch } from 'react-icons/fi'

const SearchButton = () => {
    const [searchProduct, setSearchProduct] = useState('')
    const dispatch = useDispatch()

    const handleSearch = (event) => {
        event.preventDefault()
        setSearchProduct(event.target.value)
    }

    let char = searchProduct
    const toggleSearch = () => {
        if (searchProduct.length > 0) {
            dispatch(search(char))
        }
    }

    return (
        <div>
            <div className="input-wrapper">
                <button className="icon" onClick={toggleSearch}>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="18px" width="18px">
                        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#7e4fd4" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"></path>
                        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#7e4fd4" d="M22 22L20 20"></path>
                    </svg> */}
                    <div fill="none" viewBox="0 0 24 24" height="18px" width="18px">
                        <p className='text-xl'>
                            <FiSearch />
                        </p>
                        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#7e4fd4" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"></path>
                        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#7e4fd4" d="M22 22L20 20"></path>
                    </div>
                </button>
                <input placeholder="search.." className="input" name="text" type="text" onChange={handleSearch} />
            </div>
        </div>
    )
}

export default SearchButton
