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

    let rate = 0, discountPrice = 0, withoutDiscount = 0, discountPercentage = 0;
    withoutDiscount = Math.floor(orgPrice * 50 + Math.floor(orgPrice * 12))
    discountPrice = Math.floor(withoutDiscount - (orgPrice * 50))
    discountPercentage = ((discountPrice / withoutDiscount) * 100).toFixed(2)

    if (rating !== 0) {
        rate = rating
    }
    else {
        rate = 4.5
    }

    const addtoCartHandler = (productDetail) => {
        toast.success('Add to Cart successfully')
        dispatch(addToFav(productDetail))
    }



    return (
        <div className={`flex justify-around mt-12 bg-gray-100 flex-col w-full`} >
            {/* image wala compo */}
            <div className={`grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-flow-row  mt-5 gap-10 xl:w-11/12 lg:w-11/12 w-full `}>
                <div className='flex justify-around relative xl:w-full lg:w-full  w-[20rem] '>
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
                    <div className=' overflow-hidden flex flex-col'>
                        <div className='flex justify-center '>
                            <div className='xl:h-[35rem] xl:w-[28rem] lg:h-[35rem] lg:w-[28rem] md:h-[22rem] md:w-[22rem] h-[15rem] w-[15rem] cursor-grab flex flex-row my-3 justify-center'>
                                <img src={productImage ? (productImage) : (productDetail.data.image)} alt="" className='h-full' />
                            </div>
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
                <div className='w-[18rem] md:w-[25rem] xl:w-full lg:w-full relative md:-left-20 xl:left-0 lg:left-0 mx-5'>
                    {/* title */}
                    <p className='xl:text-4xl lg:text-3xl font-bold md:text-2xl text-lg'>
                        {productDetail.data.title}
                        {productDetail.data.rating}
                    </p>
                    <div className='flex flex-row justify-between my-2'>
                        {rate &&
                            <div className='flex flex-row'>
                                <p className='flex flex-row text-white font-bold text-xs bg-green-600 rounded-md p-1'>{(rate).toFixed(1)}
                                    <span className='pt-[2px] pl-[2px]'> <AiTwotoneStar /> </span>
                                </p>
                                <span className='ml-2 text-gray-500'> {Math.floor(rate * 4800)} Rating </span>
                                <span className='ml-2 text-gray-500'> & {Math.floor(rate * 5800)} Reviews </span>
                            </div>
                        }
                    </div>
                    <div>
                        <p className='text-green-700 font-bold'> Extra ₹{discountPrice} off </p>
                        <p> <span className='xl:text-3xl md:text-xl font-bold'>₹{Math.floor(orgPrice * 50)}</span>
                            <span className='mx-2 text-gray-500 '> <del>₹{withoutDiscount} </del></span>
                            <span className='mx-2 text-green-700 font-bold'>{discountPercentage}% off</span> </p>
                    </div>


                    {/* offers wala part */}
                    <div className='flex gap-1 flex-col xl:text-base text-xs md:text-base'>
                        <p className='xl:text-xl font-bold md:text-lg '> Available offers</p>
                        <p className='flex flex-row'>
                            <span className='pt-1 text-green-600 pr-1'><BsTagsFill /></span>
                            Bank Offer 5% Cashback on Flipkart Axis Bank Card
                            <span className='text-blue-600 cursor-pointer'>T&C</span>
                        </p>
                        <p className='flex flex-row'>
                            <span className='pt-1 text-green-600 pr-1'><BsTagsFill /></span>
                            Special Price Get extra ₹2500 off (orgPrice inclusive of cashback/coupon)
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
                    <div className='flex gap-3 xl:text-2xl lg:text-2xl md:text-xl my-5 text-base  font-bold'>
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
                    {!showOffers &&
                        <div className='my-4 relative xl:left-0 lg:left-0 left-0 xl:w-full lg:w-full md:-left-80  md:w-[45rem]'>
                            <p className='xl:text-2xl lg:text-2xl md:text-2xl text-lg font-bold '>Description</p>
                            <p className='xl:text-base lg:text-base md:text-base text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloremque quia suscipit iusto doloribus natus ea! Architecto, quas. Magni, repellat doloremque repellendus minus maiores, illo iusto dignissimos velit explicabo itaque ducimus voluptatibus ipsam porro vero similique. Distinctio suscipit voluptatum ab porro velit in beatae mollitia, repudiandae tempora eius aliquid accusantium unde necessitatibus nisi deleniti nulla architecto sed ad dicta saepe accusamus. Eligendi totam ab cum, perferendis expedita tenetur doloribus nobis explicabo, adipisci harum accusamus nostrum nulla rem mollitia repellendus nam fugit eum. Itaque cumque veritatis veniam non placeat rerum ullam libero nisi modi, commodi doloribus sed a atque voluptatem temporibus</p>
                        </div>
                    }
                </div>
            </div>
            {showOffers &&
                <div className='my-4 mx-5 '>
                    <p className='xl:text-2xl lg:text-2xl md:text-2xl text-lg font-bold '>Description</p>
                    <p className='xl:text-base lg:text-base md:text-base text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloremque quia suscipit iusto doloribus natus ea! Architecto, quas. Magni, repellat doloremque repellendus minus maiores, illo iusto dignissimos velit explicabo itaque ducimus voluptatibus ipsam porro vero similique. Distinctio suscipit voluptatum ab porro velit in beatae mollitia, repudiandae tempora eius aliquid accusantium unde necessitatibus nisi deleniti nulla architecto sed ad dicta saepe accusamus. Eligendi totam ab cum, perferendis expedita tenetur doloribus nobis explicabo, adipisci harum accusamus nostrum nulla rem mollitia repellendus nam fugit eum. Itaque cumque veritatis veniam non placeat rerum ullam libero nisi modi, commodi doloribus sed a atque voluptatem temporibus</p>
                </div>
            }

            <div className=' '>
                <p className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl -mb-10 font-bold -w-full flex justify-center mt-5 items-center '>Other Products</p>
                <Home />
            </div>

        </div>
    )
}

export default Detail
