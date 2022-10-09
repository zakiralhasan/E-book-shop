import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import React from 'react';

const ReviewItems = ({item, deletReviewItem}) => {
    console.log(item)
    const {bookName, id, img, price, quantity} = item;
    return (
        <div>
            <div className='flex items-center m-4 p-2 rounded border border-gray-300'>
                <div className='bg-gray-300 p-2 rounded'>
                <img className='w-12' src={img} alt="" />
                </div>
                <div className='ml-3 w-full'>
                    <p>{bookName}</p>
                    <small className='block'>Price: ${price}</small>
                    <small>Quantity: {quantity}</small>
                </div>
                <div className=''>
                    <button onClick={() => deletReviewItem(id)} className='bg-orange-200 rounded-full w-12 h-12'>
                        <FontAwesomeIcon className='text-2xl text-red-500' icon={faTrash}/>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItems;