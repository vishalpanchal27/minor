import React from 'react';
import { useSelector } from 'react-redux';

const CartFooter = () => {
    const cartTotal = useSelector((state) => state.cartFakeFavData);
    console.log(cartTotal)
    // Calculate the total price using reduce()
    const total = cartTotal.reduce((acc, cart) => acc + cart.data.orgPrice, 0);

    return (
        <div className='flex w-full items-center z-10 p-2 bg-slate-200 font-bold font-mono justify-around text-xs md:text-sm lg:text-base xl:text-lg overflow-hidden fixed bottom-0'>
            <div className='flex flex-col gap-0 md:flex-row md:gap-8  '>
                <p>Total Items: {cartTotal.length}</p>
                <p>Total Price: {(total * 50).toFixed(2)} </p>
            </div>
            <button className='bg-yellow-600 font-bold py-1 px-5 rounded-md '>PLACE ORDER</button>
        </div>
    );
};

export default CartFooter;
