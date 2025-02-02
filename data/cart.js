import { deliveryOptions } from "./deliveryOptions.js";


export let cart;

loadFromStorage();

export function loadFromStorage(){
    

    cart = JSON.parse(localStorage.getItem('cart'));
    
    if (!cart) {
        cart = [
            {
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId : '1'
            },
            {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId : '2'
            }
        ];
        
        
    }
   
}




saveToStorage();
export function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart)) 
}

export function addToCart (productId,quantity){
    

    let isMissing = false;
    cart.forEach((item) => {
        if(productId ===  item.productId){
            item.quantity += quantity;
            isMissing =true;
        }
    })
    if(!isMissing){
        cart.push({
            productId,
            quantity,
            deliveryOptionId : '1'
        })
    }  
    saveToStorage();
}

export function removeItem(productId){
   const newCart = [];

    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
})
cart = newCart;
saveToStorage();
}

export function calculateCart(){
    let cartQuantity = 0;

    cart.forEach((item) => {
        cartQuantity += item.quantity;
    });

    return cartQuantity
}

export function updateQuantity(productId,newQuantity){
    cart.forEach((product) =>{
        if(product.productId === productId){
            product.quantity =newQuantity;
        };
    });
    saveToStorage()
};

export function updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
 
    cart.forEach((cartItem) =>{
        
        if( productId === cartItem.productId){
             matchingItem = cartItem;    
        }
    });
     matchingItem.deliveryOptionId = deliveryOptionId;

     saveToStorage();
}