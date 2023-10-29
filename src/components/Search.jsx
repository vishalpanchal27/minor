import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import Spinner from './spinner/Spinner';

const Search = () => {
    const data = useSelector((state) => state.search.data);
    const loading = useSelector((state) => state.search.loading);

    return (
        <div className="flex justify-center">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 w-10/12 place-items-center gap-5 overflow-hidden place-content-center p-5 ">
                {!loading ? (
                    data.data && data.data.length ? (
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
                        <div>
                            <p>cloth's</p>
                            <p>iphone</p>
                            <p>electronic's</p>
                            <p>grocery</p>
                            <p>Samsung</p>
                        </div>
                    )
                ) : (
                    <Spinner />
                )}
            </div>
        </div>
    );
};

export default Search;
