import React from 'react';
import bn from '../../Utils/bemnames';
const bem = bn.create('card');
const Card = props=>(
  <section style={props.imageSize} className={bem.b('card')}>
     {props.header}
     <div  className={bem.e('container')}>
        <img src={props.imageUrl} alt='خاك رس' 
         className={bem.e('image')} />
       {props.price}
       {/* TODO:اضافه كردن يك DIV با پوزيشن ABSOLUTE براي مشاهده  */}
     </div>
  </section>
);


export default Card;