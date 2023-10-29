import React, { useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { HiShoppingCart } from 'react-icons/hi'
import { GiElectric } from 'react-icons/gi'
import { BsTagsFill } from 'react-icons/bs'
import { AiTwotoneStar } from 'react-icons/ai'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { addToFav } from '../redux/slices/FavouriteSlice'
import { add, remove } from '../redux/slices/CartSlice'
import Home from './Home'
import { toast } from 'react-toastify'

const Detail = () => {
    const dispatch = useDispatch()
    const productDetail = useSelector((state) => state.productDetail)
    const { rating, orgPrice, image, title, available, id } = productDetail.data
    const cart = useSelector((state) => state.cart || [], shallowEqual)
    const [productImage, setProductImage] = useState()
    const [showOffers, setShowOffers] = useState(false)

    const changeImageHandler = (image) => {
        setProductImage(image)
    }

    const addtoCartHandler = (productDetail) => {
        toast.success('Add to Cart successfully')
        dispatch(addToFav(productDetail))
    }



    return (
        <div className=' flex justify-around mt-5 bg-gray-100 flex-col' >
            {/* image wala compo */}
            <div className='flex justify-evenly mt-5 gap-10   w-11/12 flex-row'>
                <div className='flex justify-around relative '>
                    <div className='absolute z-10 top-7 right-5'>
                        {cart &&
                            cart.some(item => item.id === id) ?
                            (
                                <button onClick={() => dispatch(remove({ id }))} ><FcLike /></button>
                            ) :
                            (
                                <button onClick={() => dispatch(add({ image, title, orgPrice, available, rating, id }))} ><FcLikePlaceholder /></button>
                            )
                        }
                    </div>
                    <div className=' h-5/6 w-6/6 overflow-hidden flex flex-col'>
                        <div className='h-5/6 w-full cursor-grab flex flex-row my-3 justify-center'>
                            <img src={productImage ? (productImage) : (productDetail.data.image)} alt="" className='h-full' />
                        </div>
                        <div className='flex flex-row flex-wrap justify-center'>
                            {productDetail.data.altImages &&
                                productDetail.data.altImages.map((image) => (
                                    <button key={image} className='m-1 border-2 border-black rounded-lg overflow-hidden' onClick={() => changeImageHandler(image)}>
                                        <img src={image} alt="" className='h-12 w-12' />
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='w-3/6'>
                    {/* title */}
                    <p className='text-4xl'>
                        {productDetail.data.title}
                        {productDetail.data.rating}
                    </p>
                    <div className='flex flex-row justify-between my-2'>
                        {rating &&
                            <div className='flex flex-row'>
                                <p className='flex flex-row text-white font-bold text-xs bg-green-600 rounded-md p-1'>{(rating).toFixed(1)}
                                    <span className='pt-[2px] pl-[2px]'> <AiTwotoneStar /> </span>
                                </p>
                                <span className='ml-2 text-gray-500'> {Math.floor(rating * 4800)} Rating </span>
                                <span className='ml-2 text-gray-500'> & {Math.floor(rating * 5800)} Reviews </span>
                            </div>
                        }
                    </div>
                    <div>
                        <p className='text-green-700 font-bold'> Extra ₹{((Math.floor((orgPrice * 50) * (Math.floor(orgPrice)) / 18)) - Math.floor(Math.floor(orgPrice * 50))) * (-1)} off </p>
                        <p> <span className='text-3xl'>₹{Math.floor(orgPrice * 50)}</span>
                            <span className='mx-2 text-gray-500 '> <del>₹{Math.floor((orgPrice * 50) * (Math.floor(orgPrice)) / 18)} </del></span>
                            <span className='mx-2 text-green-700 font-bold'>{((Math.floor(((Math.floor(orgPrice * 50)) / (Math.floor((orgPrice * 50) * (Math.floor(orgPrice)) / 18))) * 100) - 100))}% off</span> </p>
                    </div>


                    {/* offers wala part */}
                    <div className='flex gap-2 flex-col'>
                        <p className='text-xl font-bold'> Available offers</p>
                        <p className='flex flex-row'>
                            <span className='pt-1 text-green-600 pr-1'><BsTagsFill /></span>
                            Bank Offer5% Cashback on Flipkart Axis Bank Card
                            <span className='text-blue-600 cursor-pointer'>T&C</span>
                        </p>
                        <p className='flex flex-row'>
                            <span className='pt-1 text-green-600 pr-1'><BsTagsFill /></span>
                            Special PriceGet extra ₹2500 off (orgPrice inclusive of cashback/coupon)
                            <span className='text-blue-600 cursor-pointer'>T&C</span>
                        </p>
                        <p className='flex flex-row'>
                            <span className='pt-1 text-green-600 pr-1'><BsTagsFill /></span>
                            Buy any product & get Rs. 150 Off on your next purchase of Geysers
                            <span className='text-blue-600 cursor-pointer'>T&C</span>
                        </p>
                        {showOffers &&
                            <div className='flex gap-2 flex-col'>
                                <p className='flex flex-row'>
                                    <span className='pt-1 text-green-600 pr-1'><BsTagsFill /></span>
                                    Buy for 100 get ₹100 off your Next Buy
                                    <span className='text-blue-600 cursor-pointer'>T&C</span>
                                </p>
                                <p className='flex flex-row'>
                                    <span className='pt-1 text-green-600 pr-1'><BsTagsFill /></span>
                                    No cost EMI ₹3,500/month. Standard EMI also availableView Plans
                                </p>
                                <p className='flex flex-row'>
                                    <span className='pt-1 text-green-600 pr-1'><BsTagsFill />
                                    </span> Buy More, Save MoreBuy worth ₹5000 save ₹1000See all products
                                    <span className='text-blue-600 cursor-pointer'>T&C</span>
                                </p>
                                <p className='flex flex-row'>
                                    <span className='pt-1 text-green-600 pr-1'><BsTagsFill /></span>
                                    Buy for 100 get ₹50 off your Next Buy
                                    <span className='text-blue-600 cursor-pointer'>T&C</span>
                                </p>
                                <p className='flex flex-row'>
                                    <span className='pt-1 text-green-600 pr-1'><BsTagsFill /></span>
                                    Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000*
                                    <span className='text-blue-600 cursor-pointer'>Know More</span>
                                </p>
                                <p className='flex flex-row'>
                                    <span className='pt-1 text-green-600 pr-1'><BsTagsFill /></span>
                                    Partner OfferPurchase now & get 1 surprise cashback coupon in Future
                                    <span className='text-blue-600 cursor-pointer'> Know More</span>
                                </p>
                            </div>
                        }
                        {!showOffers &&
                            <button className='border-none text-blue-500 font-bold flex' onClick={() => setShowOffers(true)}>
                                view 5 more offers
                            </button>
                        }
                    </div>

                    {/* buy or cart btn */}
                    <div className='flex gap-3 text-2xl my-5'>
                        <button className='bg-yellow-500  p-2  text-gray-200 w-64 flex flex-row justify-center' onClick={() => addtoCartHandler(productDetail)}>
                            <p className='flex justify-center'>
                                <span className='pt-1'><HiShoppingCart /></span> Add to Cart
                            </p>
                        </button>
                        <button className='bg-yellow-600 p-2  text-gray-200 w-64 flex flex-row justify-center'>
                            <p className='flex justify-center'>
                                <span className='pt-1'><GiElectric /></span> Buy
                            </p>
                        </button>
                    </div>
                    <div className='my-4'>
                        <p className='text-2xl font-bold'>Description</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloremque quia suscipit iusto doloribus natus ea! Architecto, quas. Magni, repellat doloremque repellendus minus maiores, illo iusto dignissimos velit explicabo itaque ducimus voluptatibus ipsam porro vero similique. Distinctio suscipit voluptatum ab porro velit in beatae mollitia, repudiandae tempora eius aliquid accusantium unde necessitatibus nisi deleniti nulla architecto sed ad dicta saepe accusamus. Eligendi totam ab cum, perferendis expedita tenetur doloribus nobis explicabo, adipisci harum accusamus nostrum nulla rem mollitia repellendus nam fugit eum. Itaque cumque veritatis veniam non placeat rerum ullam libero nisi modi, commodi doloribus sed a atque voluptatem temporibus</p>
                    </div>
                </div>
            </div>

            <div className=' '>
                <p className='text-5xl w-full flex justify-center'>Similar Products</p>
                <Home />
            </div>

        </div>
    )
}

export default Detail
