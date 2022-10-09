import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Cart = ({cart, clearCart}) => { 
    console.log(cart)
     
    let price = 0;
    let quantity = 0;

    for(const item of cart){
        quantity = quantity + item.quantity;
        price = parseFloat((price + item.price*item.quantity).toFixed(2));
    }
    const tax = parseFloat((price * .1).toFixed(2));
    const total = parseFloat((price + tax).toFixed(2));
    
    return (
        <div className=' px-4 pt-2 sticky top-0'>
            <h1 className='font-semibold text-2xl text-center mb-4 '>Order summery</h1>
            <div className='my-6'>
                <h2>Quantiy: {quantity}</h2>
                <p>Total price: {price}$</p>
                <p>Tax: {tax}$</p>
                <h2>Grand total: {total}$</h2>
            </div>

            <button onClick={clearCart} className='bg-red-500 my-2 px-4 py-2 rounded text-white font-semibold text-xl w-full'>
                Clear cart
                <FontAwesomeIcon className='ml-2' icon={faTrash}/>
            </button>
            <Link to='/review'>
                <button className='bg-red-500 my-2 px-4 py-2 rounded text-white font-semibold text-xl w-full'>
                    Review order
                    <FontAwesomeIcon className='ml-2' icon={faArrowRight}/>
                </button>
            </Link>
        </div>
    );
};

export default Cart;