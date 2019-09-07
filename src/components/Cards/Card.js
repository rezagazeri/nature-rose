import React from 'react';
import bn from '../../Utils/bemnames';
const bem = bn.create('card');
const Card = props=>(
  <section className={bem.b('card')}>
     {props.header}
     <div className={bem.e('container')}>
       <img src={require(`../../images/${props.imageUrl}`)} alt='خاك رس'  className={bem.e('image')} />
       <h3 className={bem.e('description')}> خاك رس صورتي </h3>
       {props.price}
       <footer className={bem.e('footer')}>
         <button>افزودن به سبد خريد</button>
       </footer>
     </div>
  </section>
);


export default Card;