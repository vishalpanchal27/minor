import React, { useState } from 'react'
import '../App.css'
import SearchButton from './searchButton/SearchButton'
import { useDispatch, useSelector } from 'react-redux'
import { setOnHover } from '../redux/slices/HomeApiSlice'
import { NavLink } from 'react-router-dom'
import { BiHomeAlt2 } from 'react-icons/bi'
import { MdCategory } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiLike } from 'react-icons/bi'
import { RiAccountPinCircleLine } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {
    const dispatch = useDispatch()
    const [menu, setMenu] = useState(false)
    const cart = useSelector((state) => state.cartFakeFavData)

    const width = window.innerWidth
    console.log(width)
    return (
        <div className=''>
            <nav className='z-50 absolute top-0 right-0 left-0 h-12 shadow-lg flex items-center justify-around'>
                <div className='flex'>
                    <span className='text-xl text-red-900 font-extrabold font-serif '>Vi</span><span className=' font-mono text-xl font-bold'> Kart</span>
                </div>
                {
                    width > 430 ?
                        (

                            <div>
                                <ul className='flex flex-row gap-5' >
                                    {<NavLink to='/search'>
                                        <li className='flex float-left w-[100px] flex-row-reverse'>
                                            <SearchButton />
                                        </li>
                                    </NavLink>
                                    }
                                    {
                                        <NavLink to='/'>
                                            <li className='text-md font-serif cursor-pointer flex'> <span className='pt-1 pr-1'><BiHomeAlt2 /></span>  HOME</li>
                                        </NavLink>
                                    }
                                    {<li className='cursor-pointer text-md font-serif  flex'
                                        onMouseEnter={() => (dispatch(setOnHover('flex')))}
                                        onMouseLeave={() => (dispatch(setOnHover('none')))}
                                    > <span className='pt-1 pr-1' ><MdCategory /></span> CATEGORY</li>
                                    }
                                    {
                                        <NavLink to='/cart'>
                                            <li className='cursor-pointer text-md font-serif  flex relative'> <span className='pt-1 pr-1 text-black'><AiOutlineShoppingCart /></span>
                                                {cart.length > 0 &&
                                                    <span className='absolute -top-[3px] bg-green-700 py-[2px] px-[6px] text-white  text-xs rounded-full animate-bounce -right-3'>{cart.length}</span>
                                                }
                                                CART</li>
                                        </NavLink>
                                    }
                                    {
                                        <NavLink to='/favourite'>
                                            <li className='cursor-pointer text-md flex font-serif '> <span className='pt-1 pr-1'><BiLike /></span> FAVOURITE</li>
                                        </NavLink>

                                    }
                                    {
                                        <NavLink to='/loginPage'>
                                            <li className='cursor-pointer text-md flex font-serif '> <span className='pt-1 pr-1'><RiAccountPinCircleLine /></span> SIGN UP</li>
                                        </NavLink>
                                    }
                                </ul>
                            </div>
                        ) :
                        (
                            <div>
                                <div className='flex items-center'>
                                    <div className=''>
                                        {<NavLink to='/search'>
                                            <p className='flex float-left w-[100px] flex-row-reverse'>
                                                <SearchButton />
                                            </p>
                                        </NavLink>
                                        }
                                    </div>
                                    <div className='text-xl ml-3' onClick={() => setMenu(!menu)}>
                                        {!menu ?
                                            (<GiHamburgerMenu />) :
                                            (
                                                <div onClick={() => setMenu(menu)}>
                                                    <RxCross2 />
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>
                                {menu &&
                                    <div
                                        className={`absolute top-10 bg-slate-200 w-full right-0 flex justify-center z-50 transition-slide ${menu ? 'slide-in' : 'slide-out'
                                            }`}
                                    >
                                        <ul className='flex flex-col gap-5'>
                                            {
                                                <NavLink to='/'>
                                                    <li className='text-lg mt-2 cursor-pointer flex' onClick={() => setMenu(!menu)}> <span className='pt-1 pr-1'><BiHomeAlt2 /></span>  HOME</li>
                                                </NavLink>
                                            }
                                            {
                                                <NavLink to='/cart'>
                                                    <li className='cursor-pointer text-lg flex' onClick={() => setMenu(!menu)}> <span className='pt-1 pr-1 text-black'><AiOutlineShoppingCart /></span> CART</li>
                                                </NavLink>
                                            }
                                            {
                                                <NavLink to='/favourite'>
                                                    <li className='cursor-pointer text-lg flex' onClick={() => setMenu(!menu)}> <span className='pt-1 pr-1'><BiLike /></span> FAVOURITE</li>
                                                </NavLink>

                                            }
                                            {
                                                <NavLink to='/loginPage'>
                                                    <li className='cursor-pointer text-lg flex mb-2' onClick={() => setMenu(!menu)}> <span className='pt-1 pr-1'><RiAccountPinCircleLine /></span> SIGN UP</li>
                                                </NavLink>
                                            }
                                        </ul>
                                    </div>
                                }
                            </div>

                        )
                }
            </nav>
        </div>
    )
}

export default Navbar
