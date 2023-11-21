import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import SearchLoader from './spinner/SearchLoader';
import { search } from '../redux/slices/SearchSlice'

const Search = () => {
    const data = useSelector((state) => state.search.data);
    const loading = useSelector((state) => state.search.loading);
    const searching = useSelector((state) => state.search.search);
    const dispatch = useDispatch()

    const handleSearch = (searchData) => {
        dispatch(search(searchData))
    }

    return (
        <div className="flex justify-center mt-14">
            {/* <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 w-10/12 place-items-center gap-5 overflow-hidden place-content-center p-5"> */}
            <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:w-10/12 lg:w-11/12 place-items-center gap-5 overflow-hidden place-content-center p-5 lg:gap-x-12 md:gap-x-5 relative '>
                {!loading ? (
                    data.data && searching !== 'poop' ? (
                        data.data.map((oneData) => (
                            <div key={oneData.product_id}>
                                <Card
                                    title={oneData.product_title}
                                    image={oneData.product_photos[0]}
                                    rating={oneData.product_rating}
                                    altImages={oneData.product_photos}
                                    description={oneData.product_description}
                                    price={oneData.offer.price}
                                    id={oneData.product_id}
                                    available={'IN_STOCK'}
                                />
                            </div>
                        ))
                    ) : (
                        ''
                    )
                ) : (
                    <div className='h-[36rem]'>
                        <SearchLoader />
                    </div>
                )}
            </div>
            {searching === 'poop' &&
                <div className='flex justify-center items-center top-20 absolute flex-col'>
                    <p className='text-3xl font-bold font-mono mb-5'>Top Searches</p>
                    <ul className='flex flex-row gap-5'>
                        {
                            <li className='rounded-md hover:scale-110 overflow-hidden hover:border-2 hover:border-gray-500 font-bold px-7 py-1 shadow-xl cursor-pointer' onClick={() => handleSearch('tv')}>Tv</li>
                        }
                        {
                            <li className='rounded-md px-7 py-1 shadow-xl cursor-pointer hover:scale-110 hover:border-2 hover:border-gray-500 font-bold' onClick={() => handleSearch('Iphone')}>Iphone</li>
                        }
                        {
                            <li className='rounded-md px-7 py-1 shadow-xl cursor-pointer hover:scale-110 hover:border-2 hover:border-gray-500 font-bold' onClick={() => handleSearch('samsung')}>Samsung</li>
                        }
                        {
                            <li className='rounded-md px-7 py-1 shadow-xl cursor-pointer hover:scale-110 hover:border-2 hover:border-gray-500 font-bold' onClick={() => handleSearch('Grocery')}>Grocery</li>
                        }
                        {
                            <li className='rounded-md px-7 py-1 shadow-xl cursor-pointer hover:scale-110 hover:border-2 hover:border-gray-500 font-bold' onClick={() => handleSearch('shop')}>Shop's</li>
                        }
                        {
                            <li className='rounded-md px-7 py-1 shadow-xl cursor-pointer hover:scale-110 hover:border-2 hover:border-gray-500 font-bold' onClick={() => handleSearch('shoes')}>Nike Shoes</li>
                        }
                    </ul>
                </div>
            }
            {/* <div className='absolute bottom-0 mb-5'>
                <p className='text-red-700'>Please wait for 1 minute to search Any thing </p>
            </div> */}
        </div>
    );
};

export default Search;
