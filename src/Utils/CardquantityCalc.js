  export const CardquantityCalc = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
 };

 export const CardquantityPlus =(CartItems, CurrentItem)=>{
      return CartItems.map(item=>
         (item.id === CurrentItem.id && item.quantity < 9 )?
           {...item,quantity: item.quantity + 1} : item
      ); 
 };
 export const CardquantityMinus =(CartItems, CurrentItem)=>{
  return CartItems.map(item=>
     (item.id === CurrentItem.id && item.quantity > 1 )?
       {...item,quantity: item.quantity - 1} : item
  ); 
}
