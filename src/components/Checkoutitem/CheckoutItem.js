import React from 'react';
import  IconBtn from '../Custombutton/IconBtn';




const CheckoutItem = ({item}) => {
    const {name,imageUrl,price,quantity} = item;
  return (
    <div className='checkout-item'>
      <div className='remove-button' >
         <IconBtn name="remove"/>
      </div>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      
      <span className='quantity'>
           <IconBtn name="minus"/>
        <span className='value'>{quantity}</span>
           <IconBtn name="plus"/>
      </span>
      <span className='price'>{price}</span>


      
    </div>
  );
};
 export default CheckoutItem;