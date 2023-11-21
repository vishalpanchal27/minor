import Card from '../components/Card'
import { useDispatch, useSelector } from 'react-redux'
import Category from '../components/Category';
import Spinner from '../components/spinner/Spinner';
import { setOnHover } from '../redux/slices/HomeApiSlice';
import ImagesSlider from '../components/ImagesSlider';


const Home = () => {
  const categoryData = useSelector((state) => state.productData.categoryData);
  const productData = useSelector((state) => state.productData.data);
  const loading = useSelector((state) => state.productData.loading)
  const onHover = useSelector((state) => state.productData.onHover)

  const dispatch = useDispatch()
  return (
    <div className={`flex justify-center bg-slate-100 flex-col ${productData.length < 1 ? 'h-[90vh]' : ''}`}>
      <div className='flex flex-col absolute top-10 right-72 p-2 bg-slate-100 shadow-xl overflow-hidden h-56 z-50 w-3/12 flex-wrap rounded-md  ' style={{ display: `${onHover}` }}
        onMouseEnter={() => dispatch(setOnHover('flex'))}
        onMouseLeave={() => dispatch(setOnHover('none'))}
      >
        {categoryData &&
          categoryData.map((category) => (
            <div key={category.linking_id}>
              <Category
                title={category.name}
                categoryCode={category.linking_id}
              />
            </div>
          ))
        }
      </div>
      {productData.length > 0 &&
        <div className='relative top-16  z-0 h-[23rem] '>
          <ImagesSlider />
        </div>
      }
      <div className={`flex justify-center relative xl:top-16 lg:top-0 md:top-[-3rem] sm:top-0 h-full bg-slate-100 ${window.innerWidth < 430 ? 'top-[-2rem]' : ''} `}>
        <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:w-10/12 lg:w-11/12 place-items-center gap-5 overflow-hidden place-content-center p-5 lg:gap-x-12 md:gap-x-5 relative '>
          {loading ?
            (<Spinner />) :
            (
              productData.map((data) => (
                <div key={data.item.tcin}>
                  <Card
                    image={data.item.enrichment.images.primary_image_url}
                    title={data.item.product_description.title}
                    price={data.price.current_retail}
                    available={data.fulfillment.shipping_options.availability_status}
                    rating={data.ratings_and_reviews ? (data.ratings_and_reviews.statistics.rating.average) : (data.parent.ratings_and_reviews.statistics.rating.average)}
                    id={data.item.tcin}
                    altImages={data.item.enrichment.images.alternate_image_urls}
                  />
                </div>
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Home
