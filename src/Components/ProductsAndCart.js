import { storedItem } from "./Utilities";

const productsAndCart = async () => {
    //get or load products from sever
    const booksData = await fetch('books.json');
    const books = await booksData.json();

    //get data from local storage.
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

    return {books, savedCart};
}

export {productsAndCart};