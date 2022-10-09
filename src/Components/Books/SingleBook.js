import React from 'react';

const SingleBook = ({book,handleAddToCart}) => {

    const {bookName, img, price, id} = book;
    return (
        
            <div className='bg-white rounded shadow-lg '>
                <img className='w-96 h-80 p-3' src={img} alt="" />
                <div className='px-3 '>
                    <h3>{bookName}</h3>
                    <p>price: {price}</p>
                    <small>ID: {id}</small>
                </div>
                <button onClick={() => handleAddToCart(book)} className='bg-blue-400 w-full py-2 rounded-br rounded-bl'>Add to Cart</button>
            </div>
        
    );
};

export default SingleBook;