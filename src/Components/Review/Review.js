import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItems from './ReviewItems';
import {removeItemFromCart} from '../Utilities'
import { removeCartFromLocalStorage } from '../Utilities';

const Review = () => {
    const {savedCart}= useLoaderData();
    const [cart, setCart] = useState(savedCart);
//
//below function for delete single item from cart
    const deletReviewItem = (id) => {
        const remaining = cart.filter(item => item.id !== id);
        setCart(remaining)
        removeItemFromCart(id)
    };

//below function for clear the cart
    const clearCart = () => {
        setCart([]);
        removeCartFromLocalStorage()
    }
    return (
        <div className='flex'>
            <div className='basis-3/5 m-4 pt-6'>
                {
                    cart.map(item => <ReviewItems
                        key={item.id}
                        item={item}
                        deletReviewItem={deletReviewItem}                    
                    ></ReviewItems>)
                }
                {
                   cart.length === 0 && <h1 className='text-center font-bold my-auto '>No items added. <Link className='text-red-500' to='/'>Please shop now!</Link></h1>
                }
            </div>
            <div className='basis-2/5 bg-orange-300 mt-8 rounded mr-8 pb-8'>
                <Cart 
                    cart={cart}
                    clearCart={clearCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Review;