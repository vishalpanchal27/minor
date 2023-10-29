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
    <div className='flex justify-center rounded-2xl hover:border-2 hover:border-gray-200 my-2 hover:shadow-xl border-transparent border-2 overflow-hidden p-2 cursor-pointer relative'  >
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
      <div className='flex w-[280px] rounded-3xl  justify-center flex-col h-96' onClick={() => { handleDetailPage(dataObject) }} >
        <div>
          {
            <img src={image} alt="" className='aspect-square mix-blend-multiply' />
          }
        </div>
        <div>
          {title &&
            <p className='font-bold'>{title.length > 30 ? (title.substr(0, 28)) : (title)} ...</p>
          }
          <div className='flex flex-row justify-between'>
            {orgPrice &&
              <p className='text-red-800'>₹ {Math.floor(orgPrice * 50)}</p>
            }
            {rating &&
              <p className='flex flex-row  text-white font-bold text-xs bg-green-600 rounded-md p-1  '>{(rating).toFixed(1)} <span className='pt-[2px] pl-[2px]'> <AiTwotoneStar /> </span> </p>
            }
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
