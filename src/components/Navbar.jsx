import React from 'react'
import SearchButton from './searchButton/SearchButton'
import { useDispatch } from 'react-redux'
import { setOnHover } from '../redux/slices/HomeApiSlice'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const dispatch = useDispatch()
    return (
        <div className='z-50 absolute top-0 right-0 left-0'>
            <nav className='flex justify-around'>
                <div className='flex'>
                    icon
                </div>
                <div>
                    <ul className='flex flex-row gap-5'>
                        {<NavLink to='/search'>
                            <li className='flex float-left w-[100px] flex-row-reverse'>
                                <SearchButton />
                            </li>
                        </NavLink>
                        }
                        {
                            <NavLink to='/'>
                                <li>Home</li>
                            </NavLink>
                        }
                        {<li className='cursor-pointer'
                            onMouseEnter={() => (dispatch(setOnHover('flex')))}
                            onMouseLeave={() => (dispatch(setOnHover('none')))}
                        >Category</li>
                        }
                        {
                            <NavLink to='/cart'>
                                <li className='cursor-pointer'>Cart</li>
                            </NavLink>
                        }
                        {
                            <NavLink to='/favourite'>
                                <li className='cursor-pointer'>Favourite</li>
                            </NavLink>

                        }
                        {
                            <NavLink to='/loginPage'>
                                <li className='cursor-pointer'>SignUp</li>
                            </NavLink>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
