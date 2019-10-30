import React from 'react';

const CardItem = ({item :{name,imageUrl,price,quantity}}) => {
    return (
        <div className='carditem'>
           <img  className='carditem__img' src={imageUrl} alt='noimage' />
           <button></button>
           <div className='carditem_textcontainer '>
              <span className='carditem__name' >{name}</span>
              <span className='carditem__price-quantity'>{quantity}X{price}</span>
           </div> 
           
        </div>
    );
};

export default CardItem;