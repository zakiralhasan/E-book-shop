import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { storedItem } from '../Utilities';
import SingleBook from './SingleBook';

const Books = ({handleAddToCart, setCart}) => {
    const {books} = useLoaderData();

    useEffect(() => {
        const storedData = storedItem();
        let savedCart = [];

        for(const id in storedData){
            const addedItems = books.find(book => book.id == id);
            if(addedItems){
                const quantity = storedData[id];
                addedItems.quantity = quantity;
                savedCart.push(addedItems);
            }
        }
    },[books,setCart])


    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {
                books.map(book => <SingleBook
                    key={book.id}
                    book={book}
                    handleAddToCart={handleAddToCart}
                ></SingleBook>)
            }
        </div>
    );
};

export default Books;