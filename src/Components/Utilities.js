const addToLocalStorage = (id) => {
    //creat an empty object named cart.
    let cart = {};

    //get saved data from local storage and push to the cart object.
    const storedData = localStorage.getItem('shopping-cart');
    if(storedData){
        cart = JSON.parse(storedData);
    } 

    //check the saved item qutantity push new quantity to the cart object.
    const quantity = cart[id];
    if(quantity){
        cart[id] = quantity + 1;
    }else{
        cart[id]=1;
    };

    localStorage.setItem('shopping-cart', JSON.stringify(cart));
};

const storedItem = () => {
    let cart = {};
    //get saved data from local storage and push to the cart object.
    const storedData = localStorage.getItem('shopping-cart');
    if(storedData){
        cart = JSON.parse(storedData);
    }
    return cart; 
};

const removeItemFromCart = (id) => {
    const storeditem = localStorage.getItem('shopping-cart');
    if(storeditem){
        const shoppingItem = JSON.parse(storeditem);
        if(id in shoppingItem){
            delete shoppingItem[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingItem));
        }
    }
};

const removeCartFromLocalStorage = () => localStorage.removeItem('shopping-cart');



export {
    addToLocalStorage, 
    storedItem,
    removeItemFromCart, 
    removeCartFromLocalStorage
};