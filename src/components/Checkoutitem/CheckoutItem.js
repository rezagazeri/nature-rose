import React from 'react';
import {connect} from 'react-redux';
import {AddShopCardquantity,
        MinusShopCardquantity,
        RemoveShopItem
       } from  '../../Redux/Card/CardAction';
import  IconBtn from '../Custombutton/IconBtn';




const CheckoutItem = ({item,Addquantity,Minusquantity,RemoveItem}) => {
    const {name,imageUrl,price,quantity} = item;
  return (
    <div className='checkout-item'>
      <div className='remove-button' >
         <IconBtn click={()=>RemoveItem(item)} name="remove"/>
      </div>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      
      <span className='quantity'>
           <IconBtn click ={()=>Minusquantity(item)} name="plus"/>
        <span className='value'>{quantity}</span>
           <IconBtn click = {()=>Addquantity(item)} name="minus"/>
      </span>
      <span className='price'>{price}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch =>({
    Addquantity : item =>dispatch(AddShopCardquantity(item)),
    Minusquantity : item => dispatch(MinusShopCardquantity(item)),
    RemoveItem : item => dispatch(RemoveShopItem(item))
});
 export default connect(null,mapDispatchToProps)(CheckoutItem);


