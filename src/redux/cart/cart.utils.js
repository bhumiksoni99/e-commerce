export const addItemToCart = (cartItems , itemToAdd) => {
   const exitsingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id)

   if(exitsingItem) {
       return cartItems.map(cartItem => 
           cartItem.id === itemToAdd.id ? {...cartItem , quantity: cartItem.quantity +1  } :cartItem )
   }
   else {
     return [...cartItems , {...itemToAdd , quantity:1 }]
    }
}

export const removeItemFromCart = (cartItems , itemToRemove ) => {
    const exitsingItem = cartItems.find(cartItem => cartItem.id === itemToRemove.id)

    if(exitsingItem) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }
    else {
        return cartItems
    }

}

export const decreaseQuantityOfItem = (cartItems,itemToRemove) => {
    const exitsingItem = cartItems.find(cartItem => cartItem.id === itemToRemove.id)

    if(exitsingItem.quantity===1){
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }
    else {
        return cartItems.map(cartItem => 
            cartItem.id === itemToRemove.id ? {...cartItem , quantity: cartItem.quantity -1  } :cartItem )   
    }
}