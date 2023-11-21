import React from 'react'
import { AiTwotoneStar } from "react-icons/ai"
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { add, remove } from '../redux/slices/CartSlice'
import { getDetailData } from '../redux/slices/ProductDetailSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Card = ({ image, title, price, available, rating, id, altImages }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart || [], shallowEqual)
  // price me se $ ka sign hetane ke liye
  let orgPrice = price.toString().split('')
  if (orgPrice[0] === '$') {
    orgPrice = orgPrice.slice(1, 4).join('')
  }
  else {
    orgPrice = price
  }
  const dataObject = {
    title,
    orgPrice,
    available,
    rating,
    id,
    altImages,
    image
  }

  const handleDetailPage = (favData) => {
    dispatch(getDetailData(favData))
    navigate('/detail')
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const removeFromCart = (id) => {
    toast.warning('Remove from your Favourite List')
    dispatch(remove(id))
  }
  const addToCart = (image, title, orgPrice, available, rating, id) => {
    toast.success('Add in your Favourite List')
    dispatch(add(image, id, title, orgPrice, available, rating))
  }

  return (
    <div className='flex justify-center rounded-2xl hover:border-2 hover:border-gray-200 my-2 hover:shadow-xl border-transparent border-2 overflow-hidden p-2 cursor-pointer relative '>
      <div className='absolute z-10 top-3 right-5'>
        {
          cart.some(item => item.id === id) ?
            (
              <button onClick={() => removeFromCart({ id })} ><FcLike /></button>
            ) :
            (
              <button onClick={() => addToCart({ image, title, orgPrice, available, rating, id })} ><FcLikePlaceholder /></button>
            )
        }
      </div>
      <div className={`flex xl:w-[210px] lg:w-[205px] md:w-[180px] rounded-3xl justify-center flex-col  ${window.innerWidth < 430 ? 'h-56 w-[190px]' : 'h-80'}`} onClick={() => { handleDetailPage(dataObject) }} >
        <div className='flex justify-center items-center'>
          {
            <img src={image} alt="" className={`mix-blend-multiply ${window.innerWidth < 430 ? 'h-36' : 'aspect-square'}`} />
          }
        </div>
        <div>
          {title &&
            <p className={`text-black font-bold ${window.innerWidth < 430 ? 'text-sm text-black' : 'font-bold'} `}>{title.length > 30 ? (title.substr(0, 28)) : (title)} ...</p>
          }
          <div className='flex flex-row justify-between'>
            {orgPrice &&
              <p className={`text-red-800 ${window.innerWidth < 430 ? 'text-sm' : ''}`}>₹ {Math.floor(orgPrice * 50)}</p>
            }
            {rating > 0 ? (
              <p className={`flex flex-row text-white font-bold text-xs bg-green-600 rounded-md ${window.innerWidth < 430 ? 'text-xs p-[1px] px-[3px]' : 'p-1'}`}>
                {(rating).toFixed(1)} <span className='pt-[2px] pl-[2px]'> <AiTwotoneStar /> </span>
              </p>
            ) : (
              <p className={`flex flex-row text-white font-bold text-xs bg-green-600 rounded-md ${window.innerWidth < 430 ? 'text-xs p-[1px] px-[3px]' : 'p-1'}`}>
                4.5<span className='pt-[2px] pl-[2px'> <AiTwotoneStar /> </span>
              </p>
            )}

          </div>
          {
            available === 'IN_STOCK' ? (
              <p className='font-bold text-green-700' >Available</p>
            ) : (
              <p className='font-bold text-red-700'>Out of Stock</p>
            )
          }
          {(Math.floor(orgPrice * 50) > 999) ?
            (<p className='text-xs'>Free delivery</p>) :
            (<p className='text-xs'>₹50 Delivery Charge </p>)
          }
        </div>
      </div>
    </div>
  )
}

export default Card
