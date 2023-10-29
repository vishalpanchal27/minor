import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import Spinner from '../components/spinner/Spinner'


const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const loading = useSelector((state) => state.productData.loading)
  return (
    <div className='flex justify-center'>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 w-10/12 place-items-center gap-5 overflow-hidden place-content-center p-5 '>
        {loading ?
          (<Spinner />) :
          (
            cart.map((data) => (
              <div key={data.id}>
                <Card
                  image={data.image}
                  title={data.title}
                  price={data.orgPrice}
                  available={data.available}
                  rating={data.rating}
                  id={data.id}
                />
              </div>
            ))
          )
        }
      </div>
    </div>
  )
}

export default Cart
