import React from 'react';
import IconBtn from '../Custombutton/IconBtn';
const CardItem = ({item :{name,imageUrl,price,quantity}}) => {
    return (
        <div className='carditem'>
           <img  className='carditem__img' src={imageUrl} alt='noimage' />
           <IconBtn name="remove"/>
             <div className='carditem_textcontainer '>
               <span className='carditem__name' >{name}</span>
               <span className='carditem__price-quantity'>{quantity}X{price}</span>
            </div>
           
           
        </div>
    );
};

export default CardItem;