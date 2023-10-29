import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../components/spinner/Spinner'
import Card from '../components/Card'

const Favourite = () => {
  const cartFakeFavData = useSelector((state) => state.cartFakeFavData)
  const loading = useSelector((state) => state.productData.loading)
  return (
    <div className='flex justify-center'>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 w-10/12 place-items-center gap-5 overflow-hidden place-content-center p-5 '>
        {loading ?
          (<Spinner />) :
          (cartFakeFavData &&
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
  )
}

export default Favourite
