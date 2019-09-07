import React from 'react';
import bn from '../../../Utils/bemnames';
const bem = bn.create('card');
const Pricecard = props=>(
 <div className={bem.e('price')}>
    <span>تومان</span>
    <span>35000</span>
    <span>تخفيف</span>
</div>
     
);

export default Pricecard;