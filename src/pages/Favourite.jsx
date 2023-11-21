import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../components/spinner/Spinner'
import Card from '../components/Card'
import CartFooter from './CartFooter'

const Favourite = () => {
  const cartFakeFavData = useSelector((state) => state.cartFakeFavData)
  const loading = useSelector((state) => state.productData.loading)
  return (
    <div className='flex flex-col justify-center mt-12 bg-slate-100'>
      {
        cartFakeFavData.length > 0 ?
          (<p className=' flex justify-center font-bold text-2xl font-mono mt-5 '>Your Shopping Cart</p>) :
          (<p className='flex justify-center items-center h-[69vh] font-bold text-2xl font-mono'>No Item Add Yet</p>)
      }
      <div className='flex justify-center'>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 w-10/12 place-items-center gap-5 overflow-hidden place-content-center p-5 '>
          {loading ?
            (<Spinner />) :
            (cartFakeFavData.length > 0 &&
              cartFakeFavData.map((data) => (
                <div key={data.id}>
                  <Card
                    image={data.data.image}
                    title={data.data.title}
                    price={data.data.orgPrice}
                    rating={data.data.rating}
                    id={data.data.id}
                    available={data.data.available}
                  />
                </div>
              ))
            )
          }
        </div>
      </div>
      {cartFakeFavData.length > 0 &&
        <CartFooter />
      }
    </div>
  )
}

export default Favourite
