import React, {useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import { addToLocalStorage } from '../Utilities';
import { removeCartFromLocalStorage } from '../Utilities';

const Home = () => {
    const {savedCart}= useLoaderData();
    const [cart, setCart] = useState(savedCart);

//below function for clear the cart
    const clearCart = () => {
        setCart([]);
        removeCartFromLocalStorage()
    }

//below function for add data to the cart
    const handleAddToCart = (data) => {
        let newCart = [];

        const matchedItem = cart.find(item => item.id === data.id);

        if(!matchedItem){
            data.quantity = 1;
            newCart = [...cart, data]
        }else{
            const rest = cart.filter(item => item.id !== data.id);
            matchedItem.quantity = matchedItem.quantity +1;
            newCart = [...rest, matchedItem]
        }
        setCart(newCart)
        addToLocalStorage(data.id)
    }

    return (
        <div className='bg-gray-300 flex'>
            <div className='basis-4/5 m-4 pt-6'>
                <Books
                   handleAddToCart={handleAddToCart} 
                    setCart={setCart}
                ></Books>
            </div>
            <div className='basis-1/5 bg-orange-300'>
                <Cart 
                    cart={cart}
                    clearCart={clearCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;